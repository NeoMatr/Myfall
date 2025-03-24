# LocationSpy

LocationSpy is a social deduction game inspired by Spyfall, designed for 3 or more players. In this game, all players except the spy(ies) know the current location. The spies must figure out the location, while other players try to identify who the spies are.

## How to Play

### Online Multiplayer Mode (Peer-to-Peer)
1. **Create a Game**: The host sets up a game with custom settings and receives a 4-digit lobby code to share with friends.
2. **Join a Game**: Players enter the lobby code and their name to join a game.
3. **Start Game**: The host starts the game when all players have joined.
4. **Role Assignment**: Each player sees their role on their own device. Non-spies see the location and their role, while spies see a list of all possible locations.
5. **Gameplay**: Players take turns asking questions to identify the spies.
  
### Local Play Mode (Pass and Play)
1. **Setup**: Enter player names and choose game settings.
2. **Role Assignment**: Each player receives their role by passing the device. Everyone except the spy sees the location and their specific role.
3. **Gameplay**: Players take turns asking questions to each other.

## Features

- **True Peer-to-Peer Gameplay**: Play over the internet without any central server using WebRTC technology.
- **Online Lobby System**: Create games and invite friends with a 4-digit code.
- **Multiple Spy Support**: Choose to have 1-3 spies per game.
- **100+ Locations**: The game includes over 100 diverse locations across standard and advanced packs.
- **Location Images**: Visual representation of each location to enhance gameplay.
- **Specialized Roles**: Each location has unique roles fitting that environment.
- **Spy Helper**: Spies see a complete list of all possible locations.
- **Suggested Questions**: The game provides helpful question suggestions if you're stuck.
- **Customizable Game Length**: Set the timer from 5-15 minutes.
- **Interactive Location List**: Cross out locations during play to narrow down possibilities.

## Rules

1. Players must ask questions that could reasonably be asked about any location.
2. Each player must answer questions when asked.
3. Players can only ask one question per turn.
4. If a player believes they know who the spy is, they can call for a vote.
5. If the majority of players agree on a spy, that player is revealed.
6. If the identified player is a spy, the non-spy players win (unless the spy correctly guesses the location).
7. If the identified player is not a spy, the spies win.
8. When multiple spies are in play, they don't know who the other spies are.

## Tips

- If you're not a spy, answer questions carefully to demonstrate your knowledge of the location without being too obvious.
- If you're a spy, listen carefully to other players' responses and try to blend in. Use the location list to help identify the likely location.
- The "Suggested Questions" feature can provide inspiration for strategic questions.
- When playing with multiple spies, be careful - you don't know who the other spies are!

## Running the Game

Simply open the `index.html` file in a web browser. No installation required.

### For Online Play:
1. One player creates a lobby and gets a 4-digit code
2. Other players navigate to the same website and click "Join Game"
3. Enter the 4-digit code to connect to the host's game
4. All players must have an internet connection and a browser that supports WebRTC (most modern browsers)
5. No server is required - connections are made directly between players' devices

### For Local Play:
1. Open the game in one browser
2. Choose "Local Game" and set up players
3. Pass the device between players

## Technical Notes

- The game uses PeerJS (WebRTC) for peer-to-peer connections
- Multiple connection attempts are made to improve connection success rates
- All game state is synchronized between players without a central server
- Images for locations should be placed in the images folder following the naming convention: `location_name.jpg`

Enjoy playing LocationSpy with your friends! 