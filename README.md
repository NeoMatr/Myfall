# Spyfall Alternative

A front-end-only web implementation of the popular deception party game Spyfall, with enhanced features and gameplay.

## Features

- **150+ Unique Locations**: Each with detailed descriptions and context
- **Unique Roles**: At least 5 roles per location, with descriptions
- **Smart Question Suggestions**: Location-specific and general questions to help guide gameplay
- **Lobby System**: Create or join a game via shareable links/codes
- **Flexible Game Settings**: Customize round time and number of spies
- **Voting System**: Call votes to identify spies
- **Mobile-Friendly Design**: Play on any device
- **No Backend Required**: All game logic runs in the browser

## How to Play

### Game Overview

Spyfall is a game of deception and deduction. Most players know the secret location, but one or more players (the spies) don't! The non-spy players must ask questions to identify the spy without giving away the location, while the spy must blend in by answering questions without revealing their ignorance.

### Setup

1. One player creates a game and becomes the host
2. Other players join using the game code
3. The host starts the round when everyone is ready
4. Each player is randomly assigned a role, with one or more players secretly designated as spies

### Gameplay

1. Players take turns asking each other questions about the location
2. Non-spy players should be careful not to make their questions too obvious
3. The spy tries to blend in and figure out the location
4. At any time, players can call for a vote if they think they know who the spy is

### Winning the Game

**Spy wins if:**
- They correctly guess the location
- Time runs out without being caught
- A non-spy is incorrectly voted as the spy

**Non-spies win if:**
- They correctly identify and vote out the spy

## Running the Game

1. Simply open `index.html` in any modern web browser
2. No server or installation required
3. To play with friends, all players need to be on the same local network, or the game needs to be hosted on a web server

## Technical Details

This game is built using:
- HTML5
- CSS3
- JavaScript (ES6+)

All game data and state is managed in the browser using LocalStorage for persistence.

## Future Enhancements

Potential future improvements include:
- More locations and roles
- Custom location creation
- Game history and statistics
- Theme customization
- Audio cues and background music
- Multiple language support

## Credits

This project is an enhanced alternative version of the popular party game Spyfall, designed for educational and entertainment purposes.

## License

This project is provided for personal use only. The game mechanics are inspired by the original Spyfall game created by Hobby World. 