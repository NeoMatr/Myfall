document.addEventListener('DOMContentLoaded', function() {
    // Game state
    const state = {
        players: [],
        currentPlayerIndex: 0,
        location: null,
        spies: [],
        timeInMinutes: 8,
        timerInterval: null,
        locationPack: 'standard',
        gameStarted: false,
        isOnlineGame: false,
        lobbyCode: null,
        isHost: false,
        playerName: "",
        numSpies: 1,
        assignedRoles: []
    };

    // Game lobbies - In a real app, this would be server-side
    const lobbies = {};

    // DOM elements - Lobby screens
    const lobbyScreen = document.getElementById('lobby-screen');
    const createScreen = document.getElementById('create-screen');
    const joinScreen = document.getElementById('join-screen');
    const waitingScreen = document.getElementById('waiting-screen');
    
    const createLobbyBtn = document.getElementById('create-lobby');
    const joinLobbyBtn = document.getElementById('join-lobby');
    const backToLobbyBtn = document.getElementById('back-to-lobby');
    const backToLobbyFromJoinBtn = document.getElementById('back-to-lobby-from-join');
    const leaveLobbyBtn = document.getElementById('leave-lobby');
    
    const hostNameInput = document.getElementById('host-name');
    const numSpiesInput = document.getElementById('num-spies');
    const gameTimeInput = document.getElementById('game-time');
    const locationPackSelect = document.getElementById('location-pack');
    
    const generateCodeBtn = document.getElementById('generate-code');
    const lobbyCodeDisplay = document.getElementById('lobby-code-display');
    const lobbyCode = document.getElementById('lobby-code');
    const lobbyPlayers = document.getElementById('lobby-players');
    const startGameLobbyBtn = document.getElementById('start-game-lobby');
    
    const playerNameInput = document.getElementById('player-name');
    const lobbyCodeInput = document.getElementById('lobby-code-input');
    const joinGameBtn = document.getElementById('join-game');
    const waitingPlayers = document.getElementById('waiting-players');
    
    // DOM elements - Game screens
    const setupScreen = document.getElementById('setup-screen');
    const roleScreen = document.getElementById('role-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    
    const playerInputs = document.querySelector('.player-inputs');
    const addPlayerBtn = document.getElementById('add-player');
    const startLocalGameBtn = document.getElementById('start-local-game');
    const localGameTimeInput = document.getElementById('local-game-time');
    const localLocationPackSelect = document.getElementById('local-location-pack');
    
    const currentPlayerEl = document.getElementById('current-player');
    const showRoleBtn = document.getElementById('show-role');
    const roleInfo = document.getElementById('role-info');
    const locationName = document.getElementById('location-name');
    const roleName = document.getElementById('role-name');
    const spyLocationsList = document.getElementById('spy-locations-list');
    const spyLocationsGrid = document.getElementById('spy-locations-grid');
    const hideRoleBtn = document.getElementById('hide-role');
    const nextPlayerBtn = document.getElementById('next-player');
    
    const timeRemainingEl = document.getElementById('time-remaining');
    const locationsGrid = document.getElementById('locations-grid');
    const newQuestionBtn = document.getElementById('new-question');
    const questionDisplay = document.getElementById('question-display');
    const endGameBtn = document.getElementById('end-game');
    
    const finalLocation = document.getElementById('final-location');
    const spyList = document.getElementById('spy-list');
    const newGameBtn = document.getElementById('new-game');

    // Initialize the game
    initGame();

    function initGame() {
        // Lobby event listeners
        createLobbyBtn.addEventListener('click', showCreateScreen);
        joinLobbyBtn.addEventListener('click', showJoinScreen);
        backToLobbyBtn.addEventListener('click', goBackToLobby);
        backToLobbyFromJoinBtn.addEventListener('click', goBackToLobby);
        leaveLobbyBtn.addEventListener('click', leaveLobby);
        
        generateCodeBtn.addEventListener('click', createLobby);
        startGameLobbyBtn.addEventListener('click', startOnlineGame);
        joinGameBtn.addEventListener('click', joinGame);
        
        // Game event listeners
        addPlayerBtn.addEventListener('click', addPlayer);
        startLocalGameBtn.addEventListener('click', startLocalGame);
        showRoleBtn.addEventListener('click', showRole);
        hideRoleBtn.addEventListener('click', hideRole);
        nextPlayerBtn.addEventListener('click', nextPlayer);
        newQuestionBtn.addEventListener('click', newQuestion);
        endGameBtn.addEventListener('click', endGame);
        newGameBtn.addEventListener('click', resetGame);
        
        // Set up initial player for local game
        addPlayer();
        
        // Handle remove player buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-player')) {
                removePlayer(e.target);
            }
        });
        
        // Handle location cards
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('location-card')) {
                e.target.classList.toggle('crossed');
            }
        });
        
        // Set up location pack options for local game
        localLocationPackSelect.addEventListener('change', function() {
            state.locationPack = this.value;
        });
        
        // Set up game time for local game
        localGameTimeInput.addEventListener('change', function() {
            state.timeInMinutes = parseInt(this.value);
        });
        
        // Set up location pack options for online game
        locationPackSelect.addEventListener('change', function() {
            state.locationPack = this.value;
        });
        
        // Set up game time for online game
        gameTimeInput.addEventListener('change', function() {
            state.timeInMinutes = parseInt(this.value);
        });
        
        // Set up number of spies
        numSpiesInput.addEventListener('change', function() {
            state.numSpies = parseInt(this.value);
        });
    }

    // Lobby Functions
    function showCreateScreen() {
        showScreen(createScreen);
    }
    
    function showJoinScreen() {
        showScreen(joinScreen);
    }
    
    function goBackToLobby() {
        showScreen(lobbyScreen);
    }

    function generateLobbyCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }
    
    function createLobby() {
        const playerName = hostNameInput.value.trim();
        if (!playerName) {
            alert('Please enter your name');
            return;
        }
        
        // Generate a unique lobby code
        let newLobbyCode;
        do {
            newLobbyCode = generateLobbyCode();
        } while (lobbies[newLobbyCode]);
        
        // Create lobby
        lobbies[newLobbyCode] = {
            host: playerName,
            players: [playerName],
            settings: {
                timeInMinutes: parseInt(gameTimeInput.value),
                locationPack: locationPackSelect.value,
                numSpies: parseInt(numSpiesInput.value)
            },
            gameStarted: false
        };
        
        // Update state
        state.lobbyCode = newLobbyCode;
        state.isHost = true;
        state.playerName = playerName;
        state.isOnlineGame = true;
        state.timeInMinutes = parseInt(gameTimeInput.value);
        state.locationPack = locationPackSelect.value;
        state.numSpies = parseInt(numSpiesInput.value);
        
        // Display lobby code and update UI
        lobbyCode.textContent = newLobbyCode;
        lobbyCodeDisplay.classList.remove('hidden');
        updateLobbyPlayers();
        startGameLobbyBtn.classList.remove('hidden');
    }
    
    function joinGame() {
        const playerName = playerNameInput.value.trim();
        const code = lobbyCodeInput.value.trim().toUpperCase();
        
        if (!playerName) {
            alert('Please enter your name');
            return;
        }
        
        if (!code) {
            alert('Please enter a lobby code');
            return;
        }
        
        if (!lobbies[code]) {
            alert('Lobby not found. Check the code and try again.');
            return;
        }
        
        if (lobbies[code].gameStarted) {
            alert('This game has already started.');
            return;
        }
        
        // Add player to lobby
        lobbies[code].players.push(playerName);
        
        // Update state
        state.lobbyCode = code;
        state.isHost = false;
        state.playerName = playerName;
        state.isOnlineGame = true;
        
        // Get settings from lobby
        const lobbySettings = lobbies[code].settings;
        state.timeInMinutes = lobbySettings.timeInMinutes;
        state.locationPack = lobbySettings.locationPack;
        state.numSpies = lobbySettings.numSpies;
        
        // Show waiting screen
        showScreen(waitingScreen);
        updateWaitingPlayers();
        
        // In a real app, we would use WebSockets to update all clients
        // Here we'll simulate game start notification by polling
        pollForGameStart();
    }
    
    function pollForGameStart() {
        // In a real app, this would be handled by WebSockets
        const intervalId = setInterval(() => {
            if (lobbies[state.lobbyCode] && lobbies[state.lobbyCode].gameStarted) {
                clearInterval(intervalId);
                
                // Get game data from the lobby
                const lobby = lobbies[state.lobbyCode];
                state.players = lobby.players;
                state.location = lobby.location;
                state.spies = lobby.spies;
                state.assignedRoles = lobby.assignedRoles;
                
                // Start role reveal for this player
                startOnlineGameForPlayer();
            }
        }, 1000);
        
        // Store the interval ID so we can clear it when leaving
        state.pollInterval = intervalId;
    }
    
    function updateLobbyPlayers() {
        lobbyPlayers.innerHTML = '';
        const lobby = lobbies[state.lobbyCode];
        
        lobby.players.forEach((player, index) => {
            const li = document.createElement('li');
            li.textContent = player;
            
            if (index === 0) {
                const hostBadge = document.createElement('span');
                hostBadge.classList.add('host-badge');
                hostBadge.textContent = 'Host';
                li.appendChild(hostBadge);
            }
            
            lobbyPlayers.appendChild(li);
        });
    }
    
    function updateWaitingPlayers() {
        waitingPlayers.innerHTML = '';
        const lobby = lobbies[state.lobbyCode];
        
        lobby.players.forEach((player, index) => {
            const li = document.createElement('li');
            li.textContent = player;
            
            if (index === 0) {
                const hostBadge = document.createElement('span');
                hostBadge.classList.add('host-badge');
                hostBadge.textContent = 'Host';
                li.appendChild(hostBadge);
            }
            
            waitingPlayers.appendChild(li);
        });
    }
    
    function leaveLobby() {
        if (state.pollInterval) {
            clearInterval(state.pollInterval);
        }
        
        // Remove player from lobby
        if (state.lobbyCode && lobbies[state.lobbyCode]) {
            const playerIndex = lobbies[state.lobbyCode].players.indexOf(state.playerName);
            if (playerIndex !== -1) {
                lobbies[state.lobbyCode].players.splice(playerIndex, 1);
                
                // If no players left, delete the lobby
                if (lobbies[state.lobbyCode].players.length === 0) {
                    delete lobbies[state.lobbyCode];
                }
            }
        }
        
        // Reset state
        state.lobbyCode = null;
        state.isHost = false;
        state.playerName = "";
        state.isOnlineGame = false;
        
        // Go back to lobby screen
        showScreen(lobbyScreen);
    }
    
    function startOnlineGame() {
        const lobby = lobbies[state.lobbyCode];
        
        if (lobby.players.length < 3) {
            alert('You need at least 3 players to start the game.');
            return;
        }
        
        // Select a location
        const locations = gameData[state.locationPack];
        const randomLocationIndex = Math.floor(Math.random() * locations.length);
        const selectedLocation = locations[randomLocationIndex];
        
        // Set up spies and roles
        const players = lobby.players;
        const assignedRoles = [];
        const spies = [];
        
        // Choose random spy indices
        const numSpies = Math.min(state.numSpies, players.length - 1);
        const playerIndices = Array.from({ length: players.length }, (_, i) => i);
        
        for (let i = 0; i < numSpies; i++) {
            const randomIndex = Math.floor(Math.random() * playerIndices.length);
            const spyIndex = playerIndices.splice(randomIndex, 1)[0];
            spies.push(spyIndex);
        }
        
        // Assign roles to players
        const roles = [...selectedLocation.roles];
        
        for (let i = 0; i < players.length; i++) {
            if (spies.includes(i)) {
                assignedRoles.push('Spy');
            } else {
                const randomRoleIndex = Math.floor(Math.random() * roles.length);
                const role = roles.splice(randomRoleIndex, 1)[0];
                assignedRoles.push(role);
                
                // If we run out of roles, reset the roles array
                if (roles.length === 0) {
                    roles.push(...selectedLocation.roles);
                }
            }
        }
        
        // Store game data in the lobby
        lobby.gameStarted = true;
        lobby.location = selectedLocation;
        lobby.spies = spies;
        lobby.assignedRoles = assignedRoles;
        
        // Update local state
        state.players = players;
        state.location = selectedLocation;
        state.spies = spies;
        state.assignedRoles = assignedRoles;
        
        // Start role reveal for host
        startOnlineGameForPlayer();
    }
    
    function startOnlineGameForPlayer() {
        state.currentPlayerIndex = state.players.indexOf(state.playerName);
        
        if (state.currentPlayerIndex === -1) {
            alert('Something went wrong. You are not in the player list.');
            return;
        }
        
        // Show role screen for this player
        showScreen(roleScreen);
        currentPlayerEl.textContent = state.playerName;
        
        // For non-hosts, we'll show the role immediately
        if (!state.isHost) {
            showRole();
        }
    }

    // Local Game Functions
    function addPlayer() {
        const playerInputDiv = document.createElement('div');
        playerInputDiv.className = 'player-input';
        playerInputDiv.innerHTML = `
            <input type="text" placeholder="Player name" class="player-name" value="Player ${playerInputs.children.length + 1}">
            <button class="remove-player">×</button>
        `;
        playerInputs.appendChild(playerInputDiv);
        
        // Disable start game if less than 3 players
        startLocalGameBtn.disabled = playerInputs.children.length < 3;
    }

    function removePlayer(button) {
        const playerInputDiv = button.parentElement;
        
        if (playerInputs.children.length > 1) {
            playerInputs.removeChild(playerInputDiv);
            
            // Rename players sequentially
            Array.from(playerInputs.children).forEach((div, index) => {
                const input = div.querySelector('.player-name');
                if (input.value.startsWith('Player ')) {
                    input.value = `Player ${index + 1}`;
                }
            });
            
            // Disable start game if less than 3 players
            startLocalGameBtn.disabled = playerInputs.children.length < 3;
        }
    }

    function startLocalGame() {
        // Get player names
        const playerElements = playerInputs.querySelectorAll('.player-name');
        state.players = Array.from(playerElements).map(input => input.value.trim() || input.placeholder);
        
        if (state.players.length < 3) {
            alert('You need at least 3 players to start the game.');
            return;
        }
        
        // Get settings from local inputs
        state.timeInMinutes = parseInt(localGameTimeInput.value);
        state.locationPack = localLocationPackSelect.value;
        
        // Select a location
        const locations = gameData[state.locationPack];
        const randomLocationIndex = Math.floor(Math.random() * locations.length);
        state.location = locations[randomLocationIndex];
        
        // Set up spies and roles
        const assignedRoles = [];
        
        // Choose random spy indices (defaults to 1 spy for local game)
        state.spies = [Math.floor(Math.random() * state.players.length)];
        
        // Assign roles to players
        const roles = [...state.location.roles];
        
        for (let i = 0; i < state.players.length; i++) {
            if (state.spies.includes(i)) {
                assignedRoles.push('Spy');
            } else {
                const randomRoleIndex = Math.floor(Math.random() * roles.length);
                const role = roles.splice(randomRoleIndex, 1)[0];
                assignedRoles.push(role);
                
                // If we run out of roles, reset the roles array
                if (roles.length === 0) {
                    roles.push(...state.location.roles);
                }
            }
        }
        
        state.assignedRoles = assignedRoles;
        state.currentPlayerIndex = 0;
        state.isOnlineGame = false;
        
        // Populate locations grid
        populateLocationsGrid();
        
        // Switch to role reveal screen
        showScreen(roleScreen);
        currentPlayerEl.textContent = state.players[0];
        
        // Set up timer based on selected time
        timeRemainingEl.textContent = formatTime(state.timeInMinutes * 60);
        
        state.gameStarted = true;
    }

    function showRole() {
        const currentPlayer = state.currentPlayerIndex;
        const role = state.assignedRoles[currentPlayer];
        
        if (role === 'Spy') {
            // For spies, show a list of all possible locations
            locationName.textContent = '???';
            roleName.textContent = 'Spy (find the location)';
            
            // Show possible locations to the spy
            populateSpyLocationsGrid();
            spyLocationsList.classList.remove('hidden');
        } else {
            locationName.textContent = state.location.name;
            roleName.textContent = role;
            spyLocationsList.classList.add('hidden');
        }
        
        roleInfo.classList.remove('hidden');
        showRoleBtn.classList.add('hidden');
    }
    
    function populateSpyLocationsGrid() {
        spyLocationsGrid.innerHTML = '';
        
        // Get all locations from the selected pack
        const allLocations = gameData[state.locationPack].map(loc => loc.name);
        
        // Create a location item for each location
        allLocations.forEach(location => {
            const item = document.createElement('div');
            item.className = 'spy-location-item';
            item.textContent = location;
            spyLocationsGrid.appendChild(item);
        });
    }

    function hideRole() {
        roleInfo.classList.add('hidden');
        showRoleBtn.classList.remove('hidden');
    }

    function nextPlayer() {
        // For online games, proceed directly to game screen after the player sees their role
        if (state.isOnlineGame) {
            showScreen(gameScreen);
            startTimer();
            return;
        }
        
        // For local games, proceed to the next player
        state.currentPlayerIndex++;
        
        if (state.currentPlayerIndex < state.players.length) {
            // Show next player screen
            currentPlayerEl.textContent = state.players[state.currentPlayerIndex];
            hideRole();
        } else {
            // All players have seen their roles, start the game
            showScreen(gameScreen);
            startTimer();
        }
    }

    function startTimer() {
        let seconds = state.timeInMinutes * 60;
        
        state.timerInterval = setInterval(function() {
            seconds--;
            
            if (seconds <= 0) {
                clearInterval(state.timerInterval);
                endGame();
            }
            
            timeRemainingEl.textContent = formatTime(seconds);
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function populateLocationsGrid() {
        locationsGrid.innerHTML = '';
        
        // Get all locations from the selected pack
        const allLocations = gameData[state.locationPack].map(loc => loc.name);
        
        // Create a location card for each location
        allLocations.forEach(location => {
            const card = document.createElement('div');
            card.className = 'location-card';
            card.textContent = location;
            locationsGrid.appendChild(card);
        });
    }

    function newQuestion() {
        const questions = gameData.suggestedQuestions;
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionDisplay.textContent = questions[randomIndex];
    }

    function endGame() {
        if (state.timerInterval) {
            clearInterval(state.timerInterval);
        }
        
        finalLocation.textContent = state.location.name;
        
        // Show spies
        spyList.innerHTML = '';
        state.spies.forEach(spyIndex => {
            const li = document.createElement('li');
            li.textContent = state.players[spyIndex];
            spyList.appendChild(li);
        });
        
        showScreen(endScreen);
    }

    function resetGame() {
        // Clear polling interval if it exists
        if (state.pollInterval) {
            clearInterval(state.pollInterval);
        }
        
        // Reset game state
        state.players = [];
        state.currentPlayerIndex = 0;
        state.location = null;
        state.spies = [];
        state.assignedRoles = [];
        state.gameStarted = false;
        state.isOnlineGame = false;
        state.lobbyCode = null;
        state.isHost = false;
        state.playerName = "";
        
        if (state.timerInterval) {
            clearInterval(state.timerInterval);
            state.timerInterval = null;
        }
        
        // Clear player inputs for local game
        playerInputs.innerHTML = '';
        
        // Reset inputs
        hostNameInput.value = '';
        playerNameInput.value = '';
        lobbyCodeInput.value = '';
        
        // Reset lobby code display
        lobbyCodeDisplay.classList.add('hidden');
        startGameLobbyBtn.classList.add('hidden');
        
        // Add first player input for local game
        addPlayer();
        
        // Show lobby screen
        showScreen(lobbyScreen);
    }

    function showScreen(screen) {
        // Hide all screens
        lobbyScreen.classList.remove('active');
        createScreen.classList.remove('active');
        joinScreen.classList.remove('active');
        waitingScreen.classList.remove('active');
        setupScreen.classList.remove('active');
        roleScreen.classList.remove('active');
        gameScreen.classList.remove('active');
        endScreen.classList.remove('active');
        
        // Show the requested screen
        screen.classList.add('active');
    }
}); 