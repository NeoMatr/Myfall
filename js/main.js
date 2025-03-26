/**
 * Spyfall Alternative Game Logic
 */

// Game state
const gameState = {
    gameId: null,
    playerId: null,
    playerName: '',
    isHost: false,
    players: [],
    settings: {
        roundTime: 8, // minutes
        spyCount: 1
    },
    currentLocation: null,
    currentRole: null,
    isActive: false,
    isSpy: false,
    timerInterval: null,
    endTime: null,
    votes: {}
};

// DOM elements - will be initialized after DOM loads
let elements = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    setupEventListeners();
    initializeGame();
});

// Initialize DOM element references
function initializeElements() {
    elements = {
        // Pages
        landingPage: document.getElementById('landing-page'),
        createGamePage: document.getElementById('create-game-page'),
        joinGamePage: document.getElementById('join-game-page'),
        lobbyPage: document.getElementById('lobby-page'),
        gamePage: document.getElementById('game-page'),
        
        // Common elements
        backButtons: document.querySelectorAll('.back-btn'),
        
        // Landing page
        createGameBtn: document.getElementById('create-game-btn'),
        joinGameBtn: document.getElementById('join-game-btn'),
        tutorialBtn: document.getElementById('tutorial-btn'),
        
        // Create game page
        playerNameInput: document.getElementById('player-name'),
        roundTimeInput: document.getElementById('round-time'),
        spyCountInput: document.getElementById('spy-count'),
        startGameBtn: document.getElementById('start-game-btn'),
        
        // Join game page
        joinPlayerNameInput: document.getElementById('join-player-name'),
        gameCodeInput: document.getElementById('game-code'),
        joinLobbyBtn: document.getElementById('join-lobby-btn'),
        
        // Lobby page
        lobbyCode: document.getElementById('lobby-code'),
        lobbyTime: document.getElementById('lobby-time'),
        lobbySpies: document.getElementById('lobby-spies'),
        playersContainer: document.getElementById('players-container'),
        copyCodeBtn: document.getElementById('copy-code-btn'),
        startRoundBtn: document.getElementById('start-round-btn'),
        leaveLobbyBtn: document.getElementById('leave-lobby-btn'),
        
        // Game page
        gameTimer: document.getElementById('game-timer'),
        locationName: document.getElementById('location-name'),
        locationDescription: document.getElementById('location-description'),
        playerRole: document.getElementById('player-role'),
        roleDescription: document.getElementById('role-description'),
        tabButtons: document.querySelectorAll('.tab-btn'),
        tabPanes: document.querySelectorAll('.tab-pane'),
        gamePlayersContainer: document.getElementById('game-players-container'),
        locationsContainer: document.getElementById('locations-container'),
        questionsContainer: document.getElementById('questions-container'),
        voteBtn: document.getElementById('vote-btn'),
        
        // Vote modal
        voteModal: document.getElementById('vote-modal'),
        votePlayersContainer: document.getElementById('vote-players-container'),
        submitVoteBtn: document.getElementById('submit-vote-btn'),
        cancelVoteBtn: document.getElementById('cancel-vote-btn'),
        
        // Game end modal
        gameEndModal: document.getElementById('game-end-modal'),
        gameResult: document.getElementById('game-result'),
        gameSummary: document.getElementById('game-summary'),
        newRoundBtn: document.getElementById('new-round-btn'),
        exitGameBtn: document.getElementById('exit-game-btn'),
        
        // Tutorial modal
        tutorialModal: document.getElementById('tutorial-modal'),
        tutorialSlides: document.querySelectorAll('.tutorial-slide'),
        prevSlideBtn: document.getElementById('prev-slide'),
        nextSlideBtn: document.getElementById('next-slide'),
        slideIndicator: document.getElementById('slide-indicator'),
        closeTutorialBtn: document.getElementById('close-tutorial')
    };
}

// Setup event listeners for user interactions
function setupEventListeners() {
    // Navigation buttons
    elements.createGameBtn.addEventListener('click', () => showPage(elements.createGamePage));
    elements.joinGameBtn.addEventListener('click', () => showPage(elements.joinGamePage));
    elements.backButtons.forEach(btn => {
        btn.addEventListener('click', () => showPage(elements.landingPage));
    });
    
    // Create game flow
    elements.startGameBtn.addEventListener('click', createGame);
    
    // Join game flow
    elements.joinLobbyBtn.addEventListener('click', joinGame);
    
    // Lobby functionality
    elements.copyCodeBtn.addEventListener('click', copyGameCode);
    elements.startRoundBtn.addEventListener('click', startRound);
    elements.leaveLobbyBtn.addEventListener('click', leaveLobby);
    
    // Game functionality
    elements.tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    elements.voteBtn.addEventListener('click', showVoteModal);
    
    // Vote modal
    elements.submitVoteBtn.addEventListener('click', submitVote);
    elements.cancelVoteBtn.addEventListener('click', () => hideModal(elements.voteModal));
    
    // Game end modal
    elements.newRoundBtn.addEventListener('click', startNewRound);
    elements.exitGameBtn.addEventListener('click', exitToLobby);
    
    // Tutorial
    elements.tutorialBtn.addEventListener('click', showTutorial);
    elements.prevSlideBtn.addEventListener('click', prevTutorialSlide);
    elements.nextSlideBtn.addEventListener('click', nextTutorialSlide);
    elements.closeTutorialBtn.addEventListener('click', () => hideModal(elements.tutorialModal));
}

// Initialize the game
function initializeGame() {
    // Check if there's a saved game in localStorage
    const savedGame = localStorage.getItem('spyfallGame');
    if (savedGame) {
        try {
            const parsedGame = JSON.parse(savedGame);
            // Restore game state
            Object.assign(gameState, parsedGame);
            
            // Determine which page to show
            if (gameState.isActive) {
                setupActiveGame();
                showPage(elements.gamePage);
            } else if (gameState.gameId) {
                setupLobby();
                showPage(elements.lobbyPage);
            }
        } catch (e) {
            console.error('Error restoring game:', e);
            localStorage.removeItem('spyfallGame');
        }
    }
    
    // Set up the tutorial slides
    setupTutorial();
}

// Show a specific page and hide others
function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    page.classList.add('active');
}

// Show a modal
function showModal(modal) {
    modal.classList.add('active');
}

// Hide a modal
function hideModal(modal) {
    modal.classList.remove('active');
}

// Create a new game as host
function createGame() {
    const playerName = elements.playerNameInput.value.trim();
    const roundTime = parseInt(elements.roundTimeInput.value, 10);
    const spyCount = parseInt(elements.spyCountInput.value, 10);
    
    if (!playerName) {
        alert('Please enter your name');
        return;
    }
    
    if (isNaN(roundTime) || roundTime < 1 || roundTime > 30) {
        alert('Round time must be between 1 and 30 minutes');
        return;
    }
    
    if (isNaN(spyCount) || spyCount < 1 || spyCount > 3) {
        alert('Number of spies must be between 1 and 3');
        return;
    }
    
    // Generate a random 4-letter game code
    const gameId = generateGameId();
    const playerId = generatePlayerId();
    
    // Initialize game state
    gameState.gameId = gameId;
    gameState.playerId = playerId;
    gameState.playerName = playerName;
    gameState.isHost = true;
    gameState.settings.roundTime = roundTime;
    gameState.settings.spyCount = spyCount;
    gameState.players = [{
        id: playerId,
        name: playerName,
        isHost: true,
        isReady: true
    }];
    
    // Save game state
    saveGameState();
    
    // Set up the lobby
    setupLobby();
    
    // Show the lobby page
    showPage(elements.lobbyPage);
}

// Join an existing game
function joinGame() {
    const playerName = elements.joinPlayerNameInput.value.trim();
    const gameCode = elements.gameCodeInput.value.trim().toUpperCase();
    
    if (!playerName) {
        alert('Please enter your name');
        return;
    }
    
    if (!gameCode || gameCode.length !== 4) {
        alert('Please enter a valid 4-letter game code');
        return;
    }
    
    // Check if the game exists (would normally be a server request)
    const existingGame = localStorage.getItem(`spyfallGame_${gameCode}`);
    if (!existingGame) {
        alert('Game not found. Please check the code and try again.');
        return;
    }
    
    try {
        const gameData = JSON.parse(existingGame);
        
        // Generate a player ID
        const playerId = generatePlayerId();
        
        // Update game state
        gameState.gameId = gameCode;
        gameState.playerId = playerId;
        gameState.playerName = playerName;
        gameState.isHost = false;
        gameState.settings = gameData.settings;
        
        // Add the player to the game
        const newPlayer = {
            id: playerId,
            name: playerName,
            isHost: false,
            isReady: true
        };
        
        gameData.players.push(newPlayer);
        
        // Update the stored game data
        localStorage.setItem(`spyfallGame_${gameCode}`, JSON.stringify(gameData));
        
        // Add to local game state
        gameState.players = gameData.players;
        
        // Save game state
        saveGameState();
        
        // Set up the lobby
        setupLobby();
        
        // Show the lobby page
        showPage(elements.lobbyPage);
    } catch (e) {
        console.error('Error joining game:', e);
        alert('There was an error joining the game. Please try again.');
    }
}

// Set up the game lobby
function setupLobby() {
    // Update lobby information
    elements.lobbyCode.textContent = gameState.gameId;
    elements.lobbyTime.textContent = gameState.settings.roundTime;
    elements.lobbySpies.textContent = gameState.settings.spyCount;
    
    // Show/hide host controls
    elements.startRoundBtn.style.display = gameState.isHost ? 'block' : 'none';
    
    // Update player list
    updatePlayersList();
    
    // Start polling for game updates (would be websockets in a real implementation)
    startPolling();
}

// Update the list of players in the lobby
function updatePlayersList() {
    elements.playersContainer.innerHTML = '';
    
    gameState.players.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.innerHTML = `
            ${player.name}
            ${player.isHost ? '<span class="host-badge">Host</span>' : ''}
        `;
        elements.playersContainer.appendChild(playerItem);
    });
    
    // Enable start button only if there are at least 3 players
    if (gameState.isHost) {
        elements.startRoundBtn.disabled = gameState.players.length < 3;
    }
}

// Copy the game code to clipboard
function copyGameCode() {
    navigator.clipboard.writeText(gameState.gameId)
        .then(() => {
            alert('Game code copied to clipboard!');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Leave the current lobby
function leaveLobby() {
    if (gameState.isHost) {
        // If host leaves, the game is ended
        localStorage.removeItem(`spyfallGame_${gameState.gameId}`);
    } else {
        // Otherwise, just remove the player
        const gameData = JSON.parse(localStorage.getItem(`spyfallGame_${gameState.gameId}`));
        if (gameData) {
            gameData.players = gameData.players.filter(p => p.id !== gameState.playerId);
            localStorage.setItem(`spyfallGame_${gameState.gameId}`, JSON.stringify(gameData));
        }
    }
    
    // Clear game state
    resetGameState();
    
    // Return to landing page
    showPage(elements.landingPage);
}

// Start a new round of the game
function startRound() {
    if (!gameState.isHost) return;
    
    // Check if there are enough players
    if (gameState.players.length < 3) {
        alert('You need at least 3 players to start a round.');
        return;
    }
    
    // Select a random location
    const randomLocationIndex = Math.floor(Math.random() * GAME_DATA.locations.length);
    const location = GAME_DATA.locations[randomLocationIndex];
    
    // Assign roles to players
    const roles = [...location.roles];
    const playerRoles = {};
    const spies = [];
    
    // Select random spies
    const spyCount = Math.min(gameState.settings.spyCount, gameState.players.length - 1);
    const playerIndices = gameState.players.map((_, index) => index);
    
    for (let i = 0; i < spyCount; i++) {
        const randomIndex = Math.floor(Math.random() * playerIndices.length);
        const spyPlayerIndex = playerIndices.splice(randomIndex, 1)[0];
        spies.push(gameState.players[spyPlayerIndex].id);
    }
    
    // Assign roles to non-spy players
    gameState.players.forEach(player => {
        if (!spies.includes(player.id)) {
            // Get a random role
            const roleIndex = Math.floor(Math.random() * roles.length);
            const role = roles.splice(roleIndex, 1)[0];
            
            playerRoles[player.id] = {
                locationId: location.id,
                roleId: role.id
            };
            
            // If we run out of roles, recycle them
            if (roles.length === 0) {
                roles.push(...location.roles);
            }
        } else {
            // Spies don't know the location or their role
            playerRoles[player.id] = {
                locationId: null,
                roleId: null
            };
        }
    });
    
    // Update the game data
    const gameData = {
        gameId: gameState.gameId,
        settings: gameState.settings,
        players: gameState.players,
        location: location.id,
        roles: playerRoles,
        spies: spies,
        isActive: true,
        startTime: Date.now(),
        endTime: Date.now() + (gameState.settings.roundTime * 60 * 1000),
        votes: {}
    };
    
    localStorage.setItem(`spyfallGame_${gameState.gameId}`, JSON.stringify(gameData));
    
    // Update local game state
    gameState.isActive = true;
    gameState.currentLocation = location;
    gameState.isSpy = spies.includes(gameState.playerId);
    gameState.endTime = gameData.endTime;
    gameState.votes = {};
    
    if (!gameState.isSpy) {
        const roleId = playerRoles[gameState.playerId].roleId;
        gameState.currentRole = location.roles.find(r => r.id === roleId);
    } else {
        gameState.currentRole = null;
    }
    
    // Save game state
    saveGameState();
    
    // Set up the active game
    setupActiveGame();
    
    // Show the game page
    showPage(elements.gamePage);
}

// Set up the active game UI
function setupActiveGame() {
    // Update the location info
    if (gameState.isSpy) {
        elements.locationName.textContent = "???";
        elements.locationDescription.textContent = "You are the Spy! Try to figure out the location without giving yourself away.";
        elements.playerRole.textContent = "Spy";
        elements.roleDescription.textContent = "Listen carefully, ask questions, and blend in. Don't get caught!";
    } else {
        elements.locationName.textContent = gameState.currentLocation.name;
        elements.locationDescription.textContent = gameState.currentLocation.description;
        elements.playerRole.textContent = gameState.currentRole.title;
        elements.roleDescription.textContent = gameState.currentRole.description;
    }
    
    // Show all players
    updateGamePlayersList();
    
    // Populate the locations list
    populateLocationsList();
    
    // Populate the suggested questions
    populateQuestionsList();
    
    // Start the timer
    startGameTimer();
}

// Update the players list in the game
function updateGamePlayersList() {
    elements.gamePlayersContainer.innerHTML = '';
    
    gameState.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        if (player.id === gameState.playerId) {
            playerCard.classList.add('current');
        }
        
        playerCard.innerHTML = `
            <div class="player-name">${player.name}</div>
            ${player.isHost ? '<div class="player-badge">Host</div>' : ''}
        `;
        
        elements.gamePlayersContainer.appendChild(playerCard);
    });
}

// Populate the list of all possible locations
function populateLocationsList() {
    elements.locationsContainer.innerHTML = '';
    
    GAME_DATA.locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        
        if (!gameState.isSpy && location.id === gameState.currentLocation.id) {
            locationCard.classList.add('current');
        }
        
        locationCard.innerHTML = `
            <div class="location-name">${location.name}</div>
        `;
        
        elements.locationsContainer.appendChild(locationCard);
    });
}

// Populate the list of suggested questions
function populateQuestionsList() {
    elements.questionsContainer.innerHTML = '';
    
    // Add location-specific questions if the player is not a spy
    if (!gameState.isSpy && gameState.currentLocation.suggestedQuestions) {
        gameState.currentLocation.suggestedQuestions.forEach(question => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.textContent = question;
            elements.questionsContainer.appendChild(questionCard);
        });
    }
    
    // Add general questions
    GAME_DATA.generalQuestions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.textContent = question;
        elements.questionsContainer.appendChild(questionCard);
    });
}

// Start the game timer
function startGameTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    updateTimer();
    
    gameState.timerInterval = setInterval(() => {
        if (updateTimer() <= 0) {
            endGame('timeout');
        }
    }, 1000);
}

// Update the timer display
function updateTimer() {
    const now = Date.now();
    const timeLeft = Math.max(0, gameState.endTime - now);
    
    const minutes = Math.floor(timeLeft / (60 * 1000));
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
    
    elements.gameTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    return timeLeft;
}

// Switch between tabs in the game
function switchTab(tabId) {
    elements.tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    elements.tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
    });
}

// Show the voting modal
function showVoteModal() {
    elements.votePlayersContainer.innerHTML = '';
    
    gameState.players.forEach(player => {
        if (player.id === gameState.playerId) return; // Can't vote for yourself
        
        const voteOption = document.createElement('div');
        voteOption.className = 'vote-option';
        voteOption.dataset.playerId = player.id;
        voteOption.textContent = player.name;
        
        voteOption.addEventListener('click', () => {
            document.querySelectorAll('.vote-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            voteOption.classList.add('selected');
        });
        
        elements.votePlayersContainer.appendChild(voteOption);
    });
    
    showModal(elements.voteModal);
}

// Submit a vote for a player as the spy
function submitVote() {
    const selectedOption = document.querySelector('.vote-option.selected');
    if (!selectedOption) {
        alert('Please select a player to vote for.');
        return;
    }
    
    const votedPlayerId = selectedOption.dataset.playerId;
    
    // In a real implementation, this would be sent to the server
    const gameData = JSON.parse(localStorage.getItem(`spyfallGame_${gameState.gameId}`));
    if (gameData) {
        // Add the vote
        if (!gameData.votes) {
            gameData.votes = {};
        }
        gameData.votes[gameState.playerId] = votedPlayerId;
        
        // Update local state
        gameState.votes = gameData.votes;
        
        // Check if we have a majority vote
        const voteCounts = {};
        Object.values(gameData.votes).forEach(votedId => {
            voteCounts[votedId] = (voteCounts[votedId] || 0) + 1;
        });
        
        const majorityThreshold = Math.ceil(gameState.players.length / 2);
        let majorityVotePlayerId = null;
        
        Object.entries(voteCounts).forEach(([playerId, count]) => {
            if (count >= majorityThreshold) {
                majorityVotePlayerId = playerId;
            }
        });
        
        if (majorityVotePlayerId) {
            // We have a majority vote
            const isSpy = gameData.spies.includes(majorityVotePlayerId);
            gameData.gameResult = isSpy ? 'nonSpyWin' : 'spyWin';
            gameData.isActive = false;
            localStorage.setItem(`spyfallGame_${gameState.gameId}`, JSON.stringify(gameData));
            
            // End the game locally
            endGame(isSpy ? 'caught' : 'wrongAccusation', majorityVotePlayerId);
        } else {
            // No majority yet, just update the game
            localStorage.setItem(`spyfallGame_${gameState.gameId}`, JSON.stringify(gameData));
            saveGameState();
            hideModal(elements.voteModal);
            updateGamePlayersList(); // Refresh the UI
        }
    } else {
        alert('Game data not found.');
        hideModal(elements.voteModal);
    }
}

// End the current game round
function endGame(reason, accusedPlayerId) {
    // Stop the timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    
    // Update game state
    gameState.isActive = false;
    
    // Save game state
    saveGameState();
    
    // Show the results
    let resultTitle = '';
    let resultMessage = '';
    
    const accusedPlayer = accusedPlayerId ? 
        gameState.players.find(p => p.id === accusedPlayerId) : null;
    
    switch (reason) {
        case 'caught':
            resultTitle = 'The Spy has been caught!';
            resultMessage = `<p>The group has successfully identified <span class="spy-revealed">${accusedPlayer.name}</span> as the spy.</p>
                <p>The location was: <span class="location-revealed">${gameState.currentLocation.name}</span></p>`;
            break;
            
        case 'wrongAccusation':
            resultTitle = 'Wrong Accusation!';
            resultMessage = `<p>The group incorrectly accused <span class="spy-revealed">${accusedPlayer.name}</span>, who was not the spy!</p>
                <p>The spies win this round.</p>
                <p>The location was: <span class="location-revealed">${gameState.currentLocation.name}</span></p>`;
            break;
            
        case 'timeout':
            resultTitle = 'Time\'s Up!';
            resultMessage = `<p>The spies have successfully avoided detection.</p>
                <p>The location was: <span class="location-revealed">${gameState.currentLocation.name}</span></p>`;
            break;
    }
    
    elements.gameResult.textContent = resultTitle;
    elements.gameSummary.innerHTML = resultMessage;
    
    showModal(elements.gameEndModal);
}

// Start a new round with the same players
function startNewRound() {
    hideModal(elements.gameEndModal);
    
    // Only the host can start a new round
    if (!gameState.isHost) {
        showPage(elements.lobbyPage);
        return;
    }
    
    // Reset the game data but keep the players
    const gameData = {
        gameId: gameState.gameId,
        settings: gameState.settings,
        players: gameState.players,
        isActive: false
    };
    
    localStorage.setItem(`spyfallGame_${gameState.gameId}`, JSON.stringify(gameData));
    
    // Update local state
    gameState.isActive = false;
    gameState.currentLocation = null;
    gameState.currentRole = null;
    gameState.isSpy = false;
    
    // Save game state
    saveGameState();
    
    // Go back to lobby
    setupLobby();
    showPage(elements.lobbyPage);
}

// Exit to lobby after a game ends
function exitToLobby() {
    hideModal(elements.gameEndModal);
    showPage(elements.lobbyPage);
}

// Poll for game updates
function startPolling() {
    // In a real implementation, this would be replaced with WebSockets
    const pollInterval = setInterval(() => {
        if (!gameState.gameId) {
            clearInterval(pollInterval);
            return;
        }
        
        const gameData = localStorage.getItem(`spyfallGame_${gameState.gameId}`);
        if (!gameData) {
            // Game was deleted
            alert('The game has ended.');
            resetGameState();
            showPage(elements.landingPage);
            clearInterval(pollInterval);
            return;
        }
        
        try {
            const parsedData = JSON.parse(gameData);
            
            // Update player list
            gameState.players = parsedData.players;
            updatePlayersList();
            
            // Check if the game has started
            if (parsedData.isActive && !gameState.isActive) {
                // Game has started
                gameState.isActive = true;
                gameState.endTime = parsedData.endTime;
                gameState.votes = parsedData.votes || {};
                
                // Check if we are a spy
                gameState.isSpy = parsedData.spies.includes(gameState.playerId);
                
                // Get location and role
                const locationId = parsedData.location;
                gameState.currentLocation = GAME_DATA.locations.find(l => l.id === locationId);
                
                if (!gameState.isSpy) {
                    const roleId = parsedData.roles[gameState.playerId].roleId;
                    gameState.currentRole = gameState.currentLocation.roles.find(r => r.id === roleId);
                }
                
                // Save game state
                saveGameState();
                
                // Set up the active game
                setupActiveGame();
                
                // Show the game page
                showPage(elements.gamePage);
                
                // Clear the polling since we'll use the game timer
                clearInterval(pollInterval);
            }
        } catch (e) {
            console.error('Error polling game:', e);
        }
    }, 2000); // Poll every 2 seconds
}

// Setup tutorial slides
function setupTutorial() {
    elements.tutorialSlides[0].classList.add('active');
    updateSlideIndicator();
}

// Show the tutorial modal
function showTutorial() {
    showModal(elements.tutorialModal);
}

// Go to the previous tutorial slide
function prevTutorialSlide() {
    const activeSlide = document.querySelector('.tutorial-slide.active');
    const activeIndex = Array.from(elements.tutorialSlides).indexOf(activeSlide);
    
    if (activeIndex > 0) {
        activeSlide.classList.remove('active');
        elements.tutorialSlides[activeIndex - 1].classList.add('active');
        updateSlideIndicator();
    }
}

// Go to the next tutorial slide
function nextTutorialSlide() {
    const activeSlide = document.querySelector('.tutorial-slide.active');
    const activeIndex = Array.from(elements.tutorialSlides).indexOf(activeSlide);
    
    if (activeIndex < elements.tutorialSlides.length - 1) {
        activeSlide.classList.remove('active');
        elements.tutorialSlides[activeIndex + 1].classList.add('active');
        updateSlideIndicator();
    }
}

// Update the slide indicator text
function updateSlideIndicator() {
    const activeSlide = document.querySelector('.tutorial-slide.active');
    const activeIndex = Array.from(elements.tutorialSlides).indexOf(activeSlide);
    
    elements.slideIndicator.textContent = `${activeIndex + 1}/${elements.tutorialSlides.length}`;
}

// Generate a random game ID (4 uppercase letters)
function generateGameId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate a random player ID
function generatePlayerId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Save the current game state to localStorage
function saveGameState() {
    localStorage.setItem('spyfallGame', JSON.stringify(gameState));
    
    // If we're the host, also update the shared game data
    if (gameState.isHost && gameState.gameId) {
        const gameData = JSON.parse(localStorage.getItem(`spyfallGame_${gameState.gameId}`) || '{}');
        gameData.settings = gameState.settings;
        localStorage.setItem(`spyfallGame_${gameState.gameId}`, JSON.stringify(gameData));
    }
}

// Reset the game state
function resetGameState() {
    gameState.gameId = null;
    gameState.playerId = null;
    gameState.playerName = '';
    gameState.isHost = false;
    gameState.players = [];
    gameState.settings = {
        roundTime: 8,
        spyCount: 1
    };
    gameState.currentLocation = null;
    gameState.currentRole = null;
    gameState.isActive = false;
    gameState.isSpy = false;
    gameState.timerInterval = null;
    gameState.endTime = null;
    gameState.votes = {};
    
    localStorage.removeItem('spyfallGame');
} 