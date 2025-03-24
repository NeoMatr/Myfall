/**
 * P2P Connection Manager for LocationSpy
 * Uses PeerJS (WebRTC) to establish peer-to-peer connections without a server
 */

class P2PConnectionManager {
    constructor() {
        this.peer = null;
        this.connections = {};
        this.hostConnection = null;
        this.hostId = null;
        this.isHost = false;
        this.lobbyCode = null;
        this.callbacks = {
            onPlayerJoined: null,
            onPlayerLeft: null,
            onGameStart: null,
            onError: null,
            onConnected: null,
            onDisconnected: null
        };
    }

    // Initialize as a host with a lobby code
    initAsHost(lobbyCode) {
        this.isHost = true;
        this.lobbyCode = lobbyCode;

        // Create a random peer ID based on the lobby code
        const hostId = lobbyCode + '-' + this._generateRandomString(6);
        this.hostId = hostId;

        // Initialize the PeerJS client
        this.peer = new Peer(hostId, {
            debug: 2
        });

        this.peer.on('open', (id) => {
            console.log('Host peer ID:', id);
            
            // Setup connection event handlers
            this.peer.on('connection', (conn) => {
                this._handleIncomingConnection(conn);
            });
            
            this.peer.on('error', (err) => {
                console.error('Host peer error:', err);
                if (this.callbacks.onError) {
                    this.callbacks.onError(err.message);
                }
            });
        });
    }

    // Initialize as a client and connect to a host
    initAsClient(lobbyCode) {
        this.isHost = false;
        this.lobbyCode = lobbyCode;

        // Generate a client ID
        const clientId = 'client-' + this._generateRandomString(8);

        // Initialize the PeerJS client
        this.peer = new Peer(clientId, {
            debug: 2
        });

        this.peer.on('open', (id) => {
            console.log('Client peer ID:', id);
            
            // Try to connect to the host using the lobby code pattern
            this._connectToHost(lobbyCode);
            
            this.peer.on('error', (err) => {
                console.error('Client peer error:', err);
                if (this.callbacks.onError) {
                    this.callbacks.onError(err.message);
                }
            });
        });
    }

    // Connect to a host after trying different peer IDs based on the lobby code
    _connectToHost(lobbyCode) {
        // Attempt to connect directly (if we know the exact hostId)
        if (this.hostId) {
            this._attemptConnection(this.hostId);
            return;
        }

        // Try connecting to a few potential host IDs
        // In a real implementation, this would be handled by a signaling server
        console.log('Attempting to find host with lobby code:', lobbyCode);
        
        // First, try the most likely format: lobbyCode + -host
        this._attemptConnection(lobbyCode + '-host');
        
        // Then try with just the lobby code
        setTimeout(() => {
            if (!this.hostConnection) {
                this._attemptConnection(lobbyCode);
            }
        }, 1000);
    }

    _attemptConnection(peerId) {
        if (this.hostConnection) return; // Already connected
        
        console.log('Attempting to connect to:', peerId);
        const conn = this.peer.connect(peerId, {
            reliable: true
        });
        
        if (conn) {
            conn.on('open', () => {
                console.log('Connected to host:', peerId);
                this.hostConnection = conn;
                this.hostId = peerId;
                
                // Set up host connection event handlers
                this._setupConnectionHandlers(conn);
                
                // Send join message with player info
                conn.send({
                    type: 'player-join',
                    playerName: window.state.playerName
                });
                
                if (this.callbacks.onConnected) {
                    this.callbacks.onConnected();
                }
            });
            
            conn.on('error', (err) => {
                console.error('Connection error:', err);
            });
        }
    }

    _handleIncomingConnection(conn) {
        console.log('New peer connection from:', conn.peer);
        
        // Store the connection
        this.connections[conn.peer] = conn;
        
        // Set up connection event handlers
        this._setupConnectionHandlers(conn);
    }

    _setupConnectionHandlers(conn) {
        conn.on('data', (data) => {
            this._handleIncomingData(conn.peer, data);
        });
        
        conn.on('close', () => {
            console.log('Connection closed:', conn.peer);
            
            // Remove the connection
            if (this.connections[conn.peer]) {
                delete this.connections[conn.peer];
            }
            
            // If this is the host connection, notify about disconnection
            if (!this.isHost && conn === this.hostConnection) {
                this.hostConnection = null;
                if (this.callbacks.onDisconnected) {
                    this.callbacks.onDisconnected();
                }
            }
            
            // If we're the host, notify about player leaving
            if (this.isHost && this.callbacks.onPlayerLeft) {
                const playerInfo = Object.values(window.state.peerToPlayerMap).find(
                    p => p.peerId === conn.peer
                );
                if (playerInfo) {
                    this.callbacks.onPlayerLeft(playerInfo.playerName);
                }
            }
        });
    }

    _handleIncomingData(peerId, data) {
        console.log('Received data from', peerId, ':', data);
        
        switch (data.type) {
            case 'player-join':
                if (this.isHost && this.callbacks.onPlayerJoined) {
                    this.callbacks.onPlayerJoined({
                        playerName: data.playerName,
                        peerId: peerId
                    });
                    
                    // Send current player list to the new player
                    this.connections[peerId].send({
                        type: 'player-list',
                        players: Object.values(window.state.peerToPlayerMap).map(p => p.playerName),
                        hostName: window.state.playerName
                    });
                    
                    // Broadcast to all other players that someone joined
                    this.broadcast({
                        type: 'player-joined',
                        playerName: data.playerName
                    }, [peerId]);
                }
                break;
                
            case 'player-list':
                // Update player list (received by clients from host)
                if (!this.isHost && window.updateWaitingPlayersFromHost) {
                    window.updateWaitingPlayersFromHost(data.players, data.hostName);
                }
                break;
                
            case 'player-joined':
                // Update that a player joined (broadcast to all except the new player)
                if (!this.isHost && window.addPlayerToWaitingList) {
                    window.addPlayerToWaitingList(data.playerName);
                }
                break;
                
            case 'start-game':
                // Game started by host
                if (!this.isHost && this.callbacks.onGameStart) {
                    this.callbacks.onGameStart(data.gameData);
                }
                break;
                
            default:
                console.log('Unknown message type:', data.type);
        }
    }

    // Send data to the host (client -> host)
    sendToHost(data) {
        if (!this.isHost && this.hostConnection) {
            this.hostConnection.send(data);
        }
    }

    // Send data to a specific peer
    sendToPeer(peerId, data) {
        if (this.connections[peerId]) {
            this.connections[peerId].send(data);
        }
    }

    // Broadcast data to all connected peers (host -> all clients)
    broadcast(data, excludePeers = []) {
        if (this.isHost) {
            Object.keys(this.connections).forEach(peerId => {
                if (!excludePeers.includes(peerId)) {
                    this.connections[peerId].send(data);
                }
            });
        }
    }

    // Start game (host only)
    startGame(gameData) {
        if (this.isHost) {
            this.broadcast({
                type: 'start-game',
                gameData: gameData
            });
        }
    }

    // Clean up connections
    cleanup() {
        // Close all connections
        Object.values(this.connections).forEach(conn => {
            conn.close();
        });
        
        // Close host connection for clients
        if (this.hostConnection) {
            this.hostConnection.close();
            this.hostConnection = null;
        }
        
        // Close the peer
        if (this.peer) {
            this.peer.destroy();
            this.peer = null;
        }
        
        // Reset state
        this.connections = {};
        this.isHost = false;
        this.lobbyCode = null;
        this.hostId = null;
    }

    // Generate a random string for peer IDs
    _generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Set callback functions
    setCallbacks(callbacks) {
        this.callbacks = { ...this.callbacks, ...callbacks };
    }
}

// Create a global instance
window.p2pManager = new P2PConnectionManager(); 