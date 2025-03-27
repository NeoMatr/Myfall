/**
 * Spyfall Alternative Data
 * Contains all locations, roles, and suggested questions for the game
 */

const GAME_DATA = {
    locations: [
        // Location 1
        {
            id: 1,
            name: "Beach Resort",
            description: "A luxurious coastal retreat with sandy shores, palm trees, and a range of water activities.",
            roles: [
                { id: 1, title: "Lifeguard", description: "Responsible for supervising the beach area and ensuring swimmer safety." },
                { id: 2, title: "Tourist", description: "A visitor enjoying a vacation at the resort." },
                { id: 3, title: "Beach Vendor", description: "Sells refreshments, souvenirs, and beach accessories to guests." },
                { id: 4, title: "Surf Instructor", description: "Teaches guests how to surf and provides equipment rentals." },
                { id: 5, title: "Resort Manager", description: "Oversees all operations and staff at the resort." },
                { id: 6, title: "Massage Therapist", description: "Provides relaxing treatments to guests at the beach cabanas." }
            ],
            suggestedQuestions: [
                "How long have you been working/staying here?",
                "What's your favorite activity to do during the day?",
                "How do you feel about the current weather conditions?",
                "Where do you usually eat your meals?",
                "What's the busiest time of day for you?"
            ]
        },
        
        // Location 2
        {
            id: 2,
            name: "Space Station",
            description: "An orbiting research facility with laboratories, living quarters, and observation modules.",
            roles: [
                { id: 1, title: "Commander", description: "The leader responsible for the station and crew safety." },
                { id: 2, title: "Science Officer", description: "Conducts experiments and research in zero gravity." },
                { id: 3, title: "Maintenance Engineer", description: "Repairs and maintains the station's vital systems." },
                { id: 4, title: "Communications Specialist", description: "Manages all communications with Earth and other spacecraft." },
                { id: 5, title: "Medical Officer", description: "Provides healthcare and monitors the crew's health." },
                { id: 6, title: "Space Tourist", description: "A civilian who paid for the opportunity to visit the station." }
            ],
            suggestedQuestions: [
                "How long is your current shift?",
                "What's the view like from your work area?",
                "How do you handle emergencies in your position?",
                "What's the most challenging part of your daily routine?",
                "How do you communicate with your colleagues?"
            ]
        },
        
        // Location 3
        {
            id: 3,
            name: "Hospital",
            description: "A medical facility with emergency rooms, operating theaters, patient wards, and specialized departments.",
            roles: [
                { id: 1, title: "Doctor", description: "Diagnoses and treats patients with various medical conditions." },
                { id: 2, title: "Nurse", description: "Provides direct patient care and assists doctors with procedures." },
                { id: 3, title: "Patient", description: "Receiving treatment or recovering from an illness or injury." },
                { id: 4, title: "Surgeon", description: "Performs operations and surgical procedures." },
                { id: 5, title: "Hospital Administrator", description: "Manages the hospital's operations, staff, and resources." },
                { id: 6, title: "Janitor", description: "Keeps the hospital clean and sanitized." }
            ],
            suggestedQuestions: [
                "How long have you been in this building today?",
                "Do you have to wear any special clothing for your role?",
                "How often do you interact with other people here?",
                "What floor do you spend most of your time on?",
                "What's the most stressful part of your day?"
            ]
        },
        
        // Location 4
        {
            id: 4,
            name: "Movie Studio",
            description: "A facility where films are produced, with sound stages, props departments, and editing suites.",
            roles: [
                { id: 1, title: "Director", description: "In charge of the creative vision and guiding actors through scenes." },
                { id: 2, title: "Actor", description: "Performs in front of the camera, bringing characters to life." },
                { id: 3, title: "Camera Operator", description: "Films the action and handles camera equipment." },
                { id: 4, title: "Makeup Artist", description: "Creates character looks and special effects makeup." },
                { id: 5, title: "Set Designer", description: "Creates and oversees the building of film sets." },
                { id: 6, title: "Stunt Coordinator", description: "Plans and supervises action sequences and stunts." }
            ],
            suggestedQuestions: [
                "How early do you typically arrive at work?",
                "Who do you report to in your position?",
                "What equipment do you use regularly?",
                "How many people do you typically work with directly?",
                "What's the most exciting project you've worked on recently?"
            ]
        },
        
        // Location 5
        {
            id: 5,
            name: "Submarine",
            description: "An underwater vessel used for research, military operations, or exploration of the deep sea.",
            roles: [
                { id: 1, title: "Captain", description: "Commands the submarine and makes all critical decisions." },
                { id: 2, title: "Navigator", description: "Plans routes and ensures the submarine stays on course." },
                { id: 3, title: "Sonar Technician", description: "Monitors sonar equipment to detect other vessels or obstacles." },
                { id: 4, title: "Engineer", description: "Maintains the submarine's propulsion and life support systems." },
                { id: 5, title: "Cook", description: "Prepares meals for the crew in the confined galley." },
                { id: 6, title: "Marine Biologist", description: "Studies marine life and collects samples for research." }
            ],
            suggestedQuestions: [
                "How do you feel about confined spaces?",
                "What's your sleeping arrangement like?",
                "How do you communicate with people outside?",
                "What's your favorite part of your daily routine?",
                "How long is your current mission/deployment?"
            ]
        },
        
        // Location 6
        {
            id: 6,
            name: "Bank",
            description: "A financial institution where money is deposited, loaned, and transactions are processed.",
            roles: [
                { id: 1, title: "Bank Manager", description: "Oversees all operations and staff within the branch." },
                { id: 2, title: "Teller", description: "Handles customer transactions like deposits, withdrawals, and transfers." },
                { id: 3, title: "Loan Officer", description: "Reviews and processes loan applications." },
                { id: 4, title: "Security Guard", description: "Protects the bank and ensures the safety of staff and customers." },
                { id: 5, title: "Customer", description: "Visiting the bank to conduct financial business." },
                { id: 6, title: "Vault Custodian", description: "Manages access to the vault and safety deposit boxes." }
            ],
            suggestedQuestions: [
                "How often do you interact with customers?",
                "What security measures do you deal with daily?",
                "Do you handle cash in your position?",
                "What hours do you typically work here?",
                "What's the most challenging customer interaction you've had?"
            ]
        },
        
        // Location 7
        {
            id: 7,
            name: "Casino",
            description: "A gambling establishment with games of chance, entertainment venues, restaurants, and hotel accommodations.",
            roles: [
                { id: 1, title: "Dealer", description: "Operates table games like blackjack, poker, or roulette." },
                { id: 2, title: "Security Officer", description: "Monitors casino activities to prevent cheating and ensure safety." },
                { id: 3, title: "Pit Boss", description: "Supervises dealers and tables in a section of the casino." },
                { id: 4, title: "High Roller", description: "A wealthy gambler who places large bets." },
                { id: 5, title: "Cocktail Server", description: "Provides drinks to patrons while they're gambling." },
                { id: 6, title: "Slot Technician", description: "Maintains and repairs slot machines and electronic gaming equipment." }
            ],
            suggestedQuestions: [
                "What's your favorite game in this establishment?",
                "How do you feel about the noise level here?",
                "What's the most exciting thing you've witnessed here?",
                "How do you handle difficult customers?",
                "What time of day is busiest for you?"
            ]
        },
        
        // Location 8
        {
            id: 8,
            name: "University Campus",
            description: "An educational institution with lecture halls, laboratories, libraries, dormitories, and recreational facilities.",
            roles: [
                { id: 1, title: "Professor", description: "Teaches courses and conducts research in their field of expertise." },
                { id: 2, title: "Student", description: "Attending classes and working toward a degree." },
                { id: 3, title: "Librarian", description: "Manages library resources and assists with research needs." },
                { id: 4, title: "Campus Security", description: "Ensures safety and enforces rules on campus grounds." },
                { id: 5, title: "Cafeteria Worker", description: "Prepares and serves food to students and staff." },
                { id: 6, title: "Admissions Officer", description: "Reviews applications and helps recruit new students." }
            ],
            suggestedQuestions: [
                "How much time do you spend here each week?",
                "What building do you spend most of your time in?",
                "How do you get around campus?",
                "What's your favorite place to eat here?",
                "How do you typically prepare for important events here?"
            ]
        },
        
        // Location 9
        {
            id: 9,
            name: "Amusement Park",
            description: "An entertainment venue with rides, games, shows, and themed attractions.",
            roles: [
                { id: 1, title: "Ride Operator", description: "Runs and ensures the safety of thrill rides and attractions." },
                { id: 2, title: "Mascot Performer", description: "Wears character costumes and interacts with guests." },
                { id: 3, title: "Food Vendor", description: "Sells snacks, treats, and refreshments throughout the park." },
                { id: 4, title: "Park Manager", description: "Oversees park operations and staff across all areas." },
                { id: 5, title: "Maintenance Technician", description: "Repairs and maintains rides and park infrastructure." },
                { id: 6, title: "Excited Visitor", description: "A guest enjoying the park's attractions and atmosphere." }
            ],
            suggestedQuestions: [
                "What's your favorite attraction here?",
                "How do you handle the weather in your position?",
                "How crowded is it today compared to normal?",
                "What's the most common question people ask you?",
                "How do you deal with height restrictions in your role?"
            ]
        },
        
        // Location 10
        {
            id: 10,
            name: "Airplane",
            description: "A passenger aircraft in flight with cabins, cockpit, and cargo hold.",
            roles: [
                { id: 1, title: "Pilot", description: "Flies the aircraft and makes decisions regarding the flight." },
                { id: 2, title: "Flight Attendant", description: "Ensures passenger comfort and safety during the flight." },
                { id: 3, title: "Air Marshal", description: "Undercover security personnel protecting the flight." },
                { id: 4, title: "First Class Passenger", description: "Traveling in the premium cabin with extra amenities." },
                { id: 5, title: "Economy Passenger", description: "Traveling in the standard cabin section." },
                { id: 6, title: "Flight Engineer", description: "Monitors aircraft systems and fuel consumption." }
            ],
            suggestedQuestions: [
                "How comfortable is your seat?",
                "What's your opinion on the food service?",
                "How often do you get up during the journey?",
                "What do you plan to do when we land?",
                "How do you deal with turbulence?"
            ]
        },
        
        // Location 11
        {
            id: 11,
            name: "Corporate Office",
            description: "A business workspace with cubicles, meeting rooms, executive offices, and common areas.",
            roles: [
                { id: 1, title: "CEO", description: "The top executive who makes major corporate decisions." },
                { id: 2, title: "Administrative Assistant", description: "Provides clerical and organizational support to executives." },
                { id: 3, title: "IT Support Technician", description: "Manages technology issues and computer systems." },
                { id: 4, title: "Marketing Manager", description: "Develops and implements marketing strategies and campaigns." },
                { id: 5, title: "Accountant", description: "Handles financial records, reports, and transactions." },
                { id: 6, title: "Intern", description: "A temporary worker gaining experience in the business." }
            ],
            suggestedQuestions: [
                "How's your work-life balance in your position?",
                "What floor do you work on?",
                "How often do you attend meetings?",
                "What software do you use most in your role?",
                "How would you describe the corporate culture here?"
            ]
        },
        
        // Location 12
        {
            id: 12,
            name: "Cruise Ship",
            description: "A large passenger vessel with cabins, restaurants, entertainment venues, and recreational facilities.",
            roles: [
                { id: 1, title: "Captain", description: "Commands the ship and holds ultimate responsibility for safety." },
                { id: 2, title: "Entertainer", description: "Performs in shows and events for passenger enjoyment." },
                { id: 3, title: "Chef", description: "Prepares meals in one of the ship's many restaurants." },
                { id: 4, title: "Cabin Steward", description: "Cleans and maintains passenger cabins." },
                { id: 5, title: "Wealthy Passenger", description: "A vacationer staying in a premium suite." },
                { id: 6, title: "Ship's Doctor", description: "Provides medical care to passengers and crew." }
            ],
            suggestedQuestions: [
                "How long have you been on this voyage?",
                "What do you think of the ship's amenities?",
                "How do you handle rough seas?",
                "What's your favorite port of call so far?",
                "Where do you spend most of your time onboard?"
            ]
        },
        
        // Location 13
        {
            id: 13,
            name: "Police Station",
            description: "A law enforcement facility with offices, holding cells, interrogation rooms, and equipment storage.",
            roles: [
                { id: 1, title: "Detective", description: "Investigates crimes and gathers evidence for cases." },
                { id: 2, title: "Police Chief", description: "The highest-ranking officer who oversees the entire station." },
                { id: 3, title: "Patrol Officer", description: "Responds to calls and patrols assigned areas." },
                { id: 4, title: "Forensic Technician", description: "Analyzes crime scene evidence in the laboratory." },
                { id: 5, title: "Suspect", description: "A person detained for questioning regarding a possible crime." },
                { id: 6, title: "Receptionist", description: "Manages the front desk and handles initial public contact." }
            ],
            suggestedQuestions: [
                "How long are your typical shifts?",
                "What area of the station do you spend most time in?",
                "How often do you interact with the public?",
                "What kind of paperwork is involved in your position?",
                "How do you communicate with others in the building?"
            ]
        },
        
        // Location 14
        {
            id: 14,
            name: "Art Museum",
            description: "A cultural institution that houses and exhibits works of art with galleries, restoration areas, and a gift shop.",
            roles: [
                { id: 1, title: "Curator", description: "Selects and arranges art pieces for exhibitions." },
                { id: 2, title: "Security Guard", description: "Protects valuable artworks and ensures visitor compliance with rules." },
                { id: 3, title: "Tour Guide", description: "Leads groups through the museum, providing information about exhibits." },
                { id: 4, title: "Art Restorer", description: "Preserves and repairs damaged or aging artworks." },
                { id: 5, title: "Gift Shop Clerk", description: "Sells souvenirs, books, and replicas related to the collections." },
                { id: 6, title: "Art Student", description: "Studying or sketching artworks for educational purposes." }
            ],
            suggestedQuestions: [
                "What's your favorite exhibit in the museum?",
                "How do you feel about the current special exhibition?",
                "How do you handle the quiet atmosphere all day?",
                "What are the busiest times for the museum?",
                "How often do the exhibitions change?"
            ]
        },
        
        // Location 15
        {
            id: 15,
            name: "Medieval Castle",
            description: "A fortified structure with towers, great hall, dungeons, and surrounding grounds.",
            roles: [
                { id: 1, title: "Knight", description: "A warrior sworn to protect the castle and its inhabitants." },
                { id: 2, title: "Court Jester", description: "Entertains the nobility with jokes, tricks, and performances." },
                { id: 3, title: "Royal Chef", description: "Prepares meals for the royal family and court." },
                { id: 4, title: "Castle Guard", description: "Maintains security at entrances and along the walls." },
                { id: 5, title: "Noble Visitor", description: "A high-ranking guest attending court or visiting royalty." },
                { id: 6, title: "Servant", description: "Attends to the daily needs of the castle's residents." }
            ],
            suggestedQuestions: [
                "How comfortable are your living quarters?",
                "What part of the castle do you spend most time in?",
                "How often do you leave the castle grounds?",
                "What's your opinion of the current ruler?",
                "How do you entertain yourself during your free time?"
            ]
        },
        
        // Location 16
        {
            id: 16,
            name: "Pirate Ship",
            description: "A sailing vessel crewed by pirates with cannons, cargo holds, and quarters.",
            roles: [
                { id: 1, title: "Captain", description: "The leader of the pirate crew who commands the ship." },
                { id: 2, title: "First Mate", description: "The captain's trusted second-in-command." },
                { id: 3, title: "Navigator", description: "Plots the ship's course using maps and stars." },
                { id: 4, title: "Ship's Cook", description: "Prepares meals for the crew with limited supplies." },
                { id: 5, title: "Gunner", description: "Operates and maintains the ship's cannons." },
                { id: 6, title: "Captured Prisoner", description: "Someone captured during a raid being held for ransom." }
            ],
            suggestedQuestions: [
                "How long have you been at sea on this voyage?",
                "How did you come to be on this ship?",
                "What's your sleeping arrangement like?",
                "What are your duties during a battle?",
                "How do you feel about the captain's leadership?"
            ]
        },
        
        // Location 17
        {
            id: 17,
            name: "Circus",
            description: "A traveling entertainment company with performers, animals, and attractions under a big top tent.",
            roles: [
                { id: 1, title: "Ringmaster", description: "Announces acts and serves as the master of ceremonies." },
                { id: 2, title: "Acrobat", description: "Performs impressive feats of agility and balance." },
                { id: 3, title: "Clown", description: "Entertains the audience with comedy routines and pratfalls." },
                { id: 4, title: "Animal Trainer", description: "Works with and cares for the circus animals." },
                { id: 5, title: "Trapeze Artist", description: "Performs aerial stunts high above the audience." },
                { id: 6, title: "Ticket Seller", description: "Sells admission tickets to patrons at the entrance." }
            ],
            suggestedQuestions: [
                "How long does it take to set up your equipment?",
                "How often do you practice your routines?",
                "What's the most challenging part of traveling so much?",
                "How do you handle performing in front of large crowds?",
                "What other skills do you have beyond your main role?"
            ]
        },
        
        // Location 18
        {
            id: 18,
            name: "Grocery Store",
            description: "A retail establishment selling food, beverages, and household items with various departments.",
            roles: [
                { id: 1, title: "Store Manager", description: "Oversees all operations and staff in the store." },
                { id: 2, title: "Cashier", description: "Processes customer purchases at checkout." },
                { id: 3, title: "Deli Worker", description: "Prepares and serves fresh deli items to customers." },
                { id: 4, title: "Shelf Stocker", description: "Restocks items and organizes merchandise on shelves." },
                { id: 5, title: "Customer", description: "Shopping for groceries and other items." },
                { id: 6, title: "Butcher", description: "Cuts and prepares meat products for sale." }
            ],
            suggestedQuestions: [
                "What section of the store do you spend most time in?",
                "How do you handle the refrigerated areas?",
                "What are the busiest times of day here?",
                "How often do you interact with suppliers?",
                "What's your system for organizing things?"
            ]
        },
        
        // Location 19
        {
            id: 19,
            name: "Restaurant",
            description: "A dining establishment with kitchen, dining area, and bar serving prepared meals to customers.",
            roles: [
                { id: 1, title: "Chef", description: "Creates dishes and oversees food preparation." },
                { id: 2, title: "Server", description: "Takes orders and brings food to diners." },
                { id: 3, title: "Host/Hostess", description: "Greets customers and manages seating arrangements." },
                { id: 4, title: "Busser", description: "Clears tables and maintains the dining area." },
                { id: 5, title: "Food Critic", description: "Dining incognito to review the establishment." },
                { id: 6, title: "Regular Customer", description: "A frequent patron who knows the menu well." }
            ],
            suggestedQuestions: [
                "What's your favorite dish served here?",
                "How busy is it tonight compared to usual?",
                "What's the specialty of this establishment?",
                "How long have you been coming to/working at this place?",
                "What do you think of the ambiance?"
            ]
        },
        
        // Location 20
        {
            id: 20,
            name: "Zoo",
            description: "A facility where animals are housed in enclosures for public viewing and conservation.",
            roles: [
                { id: 1, title: "Zookeeper", description: "Cares for animals and maintains their habitats." },
                { id: 2, title: "Veterinarian", description: "Provides medical care to the zoo animals." },
                { id: 3, title: "Tour Guide", description: "Leads visitor groups and provides information about exhibits." },
                { id: 4, title: "Gift Shop Clerk", description: "Sells souvenirs and merchandise to visitors." },
                { id: 5, title: "Zoo Director", description: "Oversees all zoo operations and conservation programs." },
                { id: 6, title: "Excited Child", description: "A young visitor enthusiastic about seeing the animals." }
            ],
            suggestedQuestions: [
                "What's your favorite animal exhibit?",
                "How do you handle the various smells around here?",
                "What's the most dangerous situation you've encountered?",
                "How early do you arrive before opening time?",
                "What's the feeding schedule like?"
            ]
        },

        // Location 21
        {
            id: 21,
            name: "Haunted House",
            description: "A spooky attraction filled with special effects, hidden passages, and theatrical scares.",
            roles: [
                { id: 1, title: "Ghost Actor", description: "Performs scary scenes to frighten visitors." },
                { id: 2, title: "Special Effects Operator", description: "Controls lighting, sound, and mechanical effects." },
                { id: 3, title: "Tour Guide", description: "Leads groups through the haunted house with dramatic storytelling." },
                { id: 4, title: "Makeup Artist", description: "Creates scary looks for the actors." },
                { id: 5, title: "Security Guard", description: "Ensures safety and handles emergency situations." },
                { id: 6, title: "Maintenance Technician", description: "Keeps all the haunted house mechanisms working." }
            ],
            suggestedQuestions: [
                "What's the scariest part of your job?",
                "How do you handle people who get too frightened?",
                "What happens if the power goes out?",
                "How long does it take to prepare for your role?",
                "What's your favorite scare tactic?"
            ]
        },

        // Location 22
        {
            id: 22,
            name: "Chocolate Factory",
            description: "A manufacturing facility producing various chocolate products with testing rooms and packaging areas.",
            roles: [
                { id: 1, title: "Chocolatier", description: "Creates new chocolate recipes and oversees production." },
                { id: 2, title: "Quality Control Taster", description: "Tests chocolate products for consistency and flavor." },
                { id: 3, title: "Machine Operator", description: "Runs the chocolate-making equipment." },
                { id: 4, title: "Tour Guide", description: "Shows visitors around the factory." },
                { id: 5, title: "Packaging Supervisor", description: "Manages the packaging and shipping department." },
                { id: 6, title: "Ingredient Sourcer", description: "Selects and purchases cocoa beans and other ingredients." }
            ],
            suggestedQuestions: [
                "How do you resist eating everything in sight?",
                "What's your favorite chocolate creation?",
                "How do you maintain quality control?",
                "What's the most challenging part of working with chocolate?",
                "How do you handle the temperature in different areas?"
            ]
        },

        // Location 23
        {
            id: 23,
            name: "Space Colony",
            description: "A self-sustaining settlement on another planet with habitation domes and research facilities.",
            roles: [
                { id: 1, title: "Colony Administrator", description: "Manages the overall operation of the settlement." },
                { id: 2, title: "Hydroponics Specialist", description: "Maintains the food growing systems." },
                { id: 3, title: "Environmental Engineer", description: "Monitors and maintains life support systems." },
                { id: 4, title: "Geologist", description: "Studies the planet's composition and resources." },
                { id: 5, title: "Medical Officer", description: "Provides healthcare in space conditions." },
                { id: 6, title: "Communications Officer", description: "Maintains contact with Earth and other colonies." }
            ],
            suggestedQuestions: [
                "How long have you been on this planet?",
                "What's the most challenging aspect of living here?",
                "How do you deal with homesickness?",
                "What's your favorite Earth thing you miss?",
                "How do you handle emergencies here?"
            ]
        },

        // Location 24
        {
            id: 24,
            name: "Viking Village",
            description: "A historical settlement with longhouses, a great hall, and various craft workshops.",
            roles: [
                { id: 1, title: "Chieftain", description: "Leads the village and makes important decisions." },
                { id: 2, title: "Blacksmith", description: "Forges weapons and tools for the village." },
                { id: 3, title: "Shipwright", description: "Builds and repairs the longships." },
                { id: 4, title: "Skald", description: "Preserves and recites the village's history and sagas." },
                { id: 5, title: "Shield Maiden", description: "Trains warriors and defends the village." },
                { id: 6, title: "Merchant", description: "Trades goods with other villages and travelers." }
            ],
            suggestedQuestions: [
                "What's your favorite feast dish?",
                "How many raids have you been on?",
                "What gods do you worship?",
                "How do you prepare for winter?",
                "What's your most valuable possession?"
            ]
        },

        // Location 25
        {
            id: 25,
            name: "Weather Station",
            description: "An isolated facility monitoring weather patterns with advanced equipment and forecasting systems.",
            roles: [
                { id: 1, title: "Meteorologist", description: "Analyzes weather data and makes forecasts." },
                { id: 2, title: "Radar Technician", description: "Maintains and operates weather radar systems." },
                { id: 3, title: "Climate Researcher", description: "Studies long-term weather patterns." },
                { id: 4, title: "Station Manager", description: "Oversees the facility and coordinates with other stations." },
                { id: 5, title: "Communications Officer", description: "Broadcasts weather updates and warnings." },
                { id: 6, title: "Equipment Maintenance", description: "Keeps all weather monitoring instruments functioning." }
            ],
            suggestedQuestions: [
                "What's the worst weather you've experienced here?",
                "How accurate are your predictions?",
                "What's the most unusual phenomenon you've observed?",
                "How do you handle isolation in this remote location?",
                "What happens during power outages?"
            ]
        },

        // Location 26
        {
            id: 26,
            name: "Archaeological Dig Site",
            description: "An excavation area where ancient artifacts and structures are being carefully unearthed.",
            roles: [
                { id: 1, title: "Lead Archaeologist", description: "Directs the excavation and research efforts." },
                { id: 2, title: "Field Technician", description: "Carefully uncovers and documents artifacts." },
                { id: 3, title: "Photographer", description: "Documents findings and site progress." },
                { id: 4, title: "Conservation Specialist", description: "Preserves and protects discovered artifacts." },
                { id: 5, title: "Graduate Student", description: "Assists with research and basic excavation." },
                { id: 6, title: "Local Guide", description: "Provides knowledge about the area and its history." }
            ],
            suggestedQuestions: [
                "What's the most valuable thing you've found?",
                "How do you handle delicate artifacts?",
                "What theories do you have about this site?",
                "How do you deal with bad weather?",
                "What tools do you use most often?"
            ]
        },

        // Location 27
        {
            id: 27,
            name: "Comic Convention",
            description: "A bustling event celebrating comics, movies, and pop culture with exhibits and cosplay.",
            roles: [
                { id: 1, title: "Celebrity Guest", description: "A famous actor or creator meeting fans." },
                { id: 2, title: "Cosplayer", description: "Dressed as a favorite character with an elaborate costume." },
                { id: 3, title: "Vendor", description: "Sells comics, collectibles, and merchandise." },
                { id: 4, title: "Security Staff", description: "Maintains order and checks badges." },
                { id: 5, title: "Panel Moderator", description: "Hosts discussions with industry professionals." },
                { id: 6, title: "Enthusiastic Fan", description: "Attending the convention to meet heroes and buy merchandise." }
            ],
            suggestedQuestions: [
                "What's your favorite franchise?",
                "How long did you prepare for this event?",
                "What's the most expensive item here?",
                "How do you handle the crowds?",
                "What's been your best experience today?"
            ]
        },

        // Location 28
        {
            id: 28,
            name: "Underwater Research Lab",
            description: "A submerged facility for marine research and ocean exploration.",
            roles: [
                { id: 1, title: "Marine Biologist", description: "Studies sea life and conducts experiments." },
                { id: 2, title: "Pressure Systems Engineer", description: "Maintains the structural integrity of the facility." },
                { id: 3, title: "Deep Sea Pilot", description: "Operates submersibles for exploration." },
                { id: 4, title: "Research Assistant", description: "Helps with experiments and data collection." },
                { id: 5, title: "Emergency Response Specialist", description: "Handles safety protocols and emergencies." },
                { id: 6, title: "Communications Officer", description: "Maintains contact with the surface." }
            ],
            suggestedQuestions: [
                "How deep are we right now?",
                "What's the scariest situation you've encountered?",
                "How long is your typical shift?",
                "What's the most interesting discovery you've made?",
                "How do you handle claustrophobia?"
            ]
        },

        // Location 29
        {
            id: 29,
            name: "Dragon's Lair",
            description: "A mythical cave filled with treasure and home to a fearsome dragon.",
            roles: [
                { id: 1, title: "Dragon", description: "The mighty creature guarding its hoard." },
                { id: 2, title: "Knight", description: "A brave warrior seeking glory or treasure." },
                { id: 3, title: "Wizard", description: "A magic user studying the dragon's powers." },
                { id: 4, title: "Treasure Hunter", description: "Seeks valuable items from the hoard." },
                { id: 5, title: "Dragon Keeper", description: "Maintains peaceful relations with the dragon." },
                { id: 6, title: "Lost Adventurer", description: "Accidentally stumbled into the lair." }
            ],
            suggestedQuestions: [
                "How much treasure is in here?",
                "What's your relationship with the dragon?",
                "How did you find this place?",
                "What's the most valuable item here?",
                "How do you avoid getting burned?"
            ]
        },

        // Location 30
        {
            id: 30,
            name: "Fashion Show",
            description: "A high-profile runway event showcasing the latest designer collections.",
            roles: [
                { id: 1, title: "Fashion Designer", description: "Created the clothing collection being shown." },
                { id: 2, title: "Model", description: "Walks the runway displaying outfits." },
                { id: 3, title: "Makeup Artist", description: "Creates the show's signature looks." },
                { id: 4, title: "Fashion Editor", description: "Reviews the collection for a major magazine." },
                { id: 5, title: "Photographer", description: "Captures images of the show and atmosphere." },
                { id: 6, title: "Stage Manager", description: "Coordinates the show's timing and flow." }
            ],
            suggestedQuestions: [
                "What's the theme of this collection?",
                "How long did it take to prepare?",
                "What's trending this season?",
                "How do you handle wardrobe malfunctions?",
                "Who's the most famous person here?"
            ]
        },

        // Location 31
        {
            id: 31,
            name: "Nuclear Power Plant",
            description: "A facility generating electricity through nuclear fission with strict safety protocols.",
            roles: [
                { id: 1, title: "Plant Manager", description: "Oversees all operations and safety procedures." },
                { id: 2, title: "Nuclear Engineer", description: "Monitors reactor operations and performance." },
                { id: 3, title: "Safety Inspector", description: "Ensures compliance with regulations." },
                { id: 4, title: "Radiation Protection Tech", description: "Monitors radiation levels and protection equipment." },
                { id: 5, title: "Control Room Operator", description: "Monitors and adjusts plant systems." },
                { id: 6, title: "Maintenance Technician", description: "Repairs and maintains non-nuclear systems." }
            ],
            suggestedQuestions: [
                "How many safety checks do you do daily?",
                "What happens during an emergency?",
                "How much power do we generate?",
                "What's the most critical system here?",
                "How do you handle public concerns?"
            ]
        },

        // Location 32
        {
            id: 32,
            name: "Ski Resort",
            description: "A winter sports destination with slopes, lifts, and lodges in the mountains.",
            roles: [
                { id: 1, title: "Ski Instructor", description: "Teaches skiing techniques to guests." },
                { id: 2, title: "Lift Operator", description: "Manages chairlift operations and safety." },
                { id: 3, title: "Snow Patrol", description: "Ensures slope safety and helps injured skiers." },
                { id: 4, title: "Lodge Manager", description: "Runs the main resort building and services." },
                { id: 5, title: "Equipment Rental Staff", description: "Fits and maintains rental gear." },
                { id: 6, title: "Professional Snowboarder", description: "Practices tricks and gives demonstrations." }
            ],
            suggestedQuestions: [
                "How's the snow condition today?",
                "What's the most difficult run?",
                "How do you handle avalanche risks?",
                "What's the busiest time of year?",
                "How many people get injured typically?"
            ]
        },

        // Location 33
        {
            id: 33,
            name: "Time Travel Agency",
            description: "A facility organizing and conducting supervised trips to different time periods.",
            roles: [
                { id: 1, title: "Temporal Agent", description: "Ensures travelers don't alter historical events." },
                { id: 2, title: "Historical Consultant", description: "Briefs clients on time period customs and behavior." },
                { id: 3, title: "Equipment Technician", description: "Maintains time travel devices and monitors anomalies." },
                { id: 4, title: "Period Costume Designer", description: "Provides era-appropriate clothing for travelers." },
                { id: 5, title: "Timeline Analyst", description: "Monitors changes in the temporal flow." },
                { id: 6, title: "Tourist", description: "A client preparing for a journey through time." }
            ],
            suggestedQuestions: [
                "What's the most popular time period?",
                "How do you prevent paradoxes?",
                "What happens if someone changes history?",
                "How long can people stay in the past?",
                "What's the most dangerous era to visit?"
            ]
        },

        // Location 34
        {
            id: 34,
            name: "Wizard's Academy",
            description: "A magical school teaching spellcraft, potion-making, and magical theory.",
            roles: [
                { id: 1, title: "Archmage", description: "The head of the academy and most powerful wizard." },
                { id: 2, title: "Potions Master", description: "Teaches the art of brewing magical concoctions." },
                { id: 3, title: "Student Wizard", description: "Learning the basics of spellcasting." },
                { id: 4, title: "Magical Creatures Handler", description: "Cares for the academy's exotic beasts." },
                { id: 5, title: "Library Guardian", description: "Protects dangerous spell books and scrolls." },
                { id: 6, title: "Enchantment Professor", description: "Teaches the art of magical enhancements." }
            ],
            suggestedQuestions: [
                "What's your specialty in magic?",
                "How many spells do you know?",
                "What's the most dangerous accident you've seen?",
                "How long does it take to master a spell?",
                "What magical creatures do you work with?"
            ]
        },

        // Location 35
        {
            id: 35,
            name: "Dinosaur Park",
            description: "A wildlife park featuring genetically recreated dinosaurs in controlled habitats.",
            roles: [
                { id: 1, title: "Park Director", description: "Manages the facility and handles major decisions." },
                { id: 2, title: "Dinosaur Trainer", description: "Works directly with the more docile species." },
                { id: 3, title: "Genetic Engineer", description: "Maintains and monitors dinosaur DNA sequences." },
                { id: 4, title: "Security Chief", description: "Manages containment and visitor safety." },
                { id: 5, title: "Tour Guide", description: "Leads visitors through safe viewing areas." },
                { id: 6, title: "Veterinarian", description: "Provides medical care to the dinosaurs." }
            ],
            suggestedQuestions: [
                "What's the most dangerous dinosaur here?",
                "How often do they escape?",
                "What do they eat?",
                "How do you handle aggressive behavior?",
                "Which species is your favorite?"
            ]
        },

        // Location 36
        {
            id: 36,
            name: "Secret Government Bunker",
            description: "A classified underground facility for government operations and emergencies.",
            roles: [
                { id: 1, title: "Security Director", description: "Manages facility security and clearance levels." },
                { id: 2, title: "Intelligence Analyst", description: "Processes and analyzes classified information." },
                { id: 3, title: "Communications Officer", description: "Maintains secure communication channels." },
                { id: 4, title: "Military Commander", description: "Coordinates defense and emergency responses." },
                { id: 5, title: "Research Scientist", description: "Studies classified technologies and threats." },
                { id: 6, title: "Maintenance Engineer", description: "Keeps critical systems functioning." }
            ],
            suggestedQuestions: [
                "What's your clearance level?",
                "How deep underground are we?",
                "What's behind that door?",
                "How long can this place sustain itself?",
                "What's the emergency protocol?"
            ]
        },

        // Location 37
        {
            id: 37,
            name: "Fairy Tale Kingdom",
            description: "A magical realm where classic fairy tale characters live and interact.",
            roles: [
                { id: 1, title: "Fairy Godmother", description: "Grants wishes and provides magical assistance." },
                { id: 2, title: "Knight in Shining Armor", description: "Rescues princesses and fights dragons." },
                { id: 3, title: "Evil Queen", description: "Plots schemes and creates magical mischief." },
                { id: 4, title: "Royal Baker", description: "Makes enchanted treats and magical pastries." },
                { id: 5, title: "Court Jester", description: "Entertains the court with jokes and riddles." },
                { id: 6, title: "Talking Animal", description: "A wise creature offering advice to heroes." }
            ],
            suggestedQuestions: [
                "How many wishes have you granted?",
                "Who's the most evil villain here?",
                "What's your favorite magical item?",
                "How do you get along with the other characters?",
                "What's your role in the latest story?"
            ]
        },

        // Location 38
        {
            id: 38,
            name: "Robot Factory",
            description: "An automated facility where advanced robots are designed, built, and tested.",
            roles: [
                { id: 1, title: "Robotics Engineer", description: "Designs and programs new robot models." },
                { id: 2, title: "Quality Control Tech", description: "Tests robots for defects and issues." },
                { id: 3, title: "AI Programmer", description: "Develops artificial intelligence systems." },
                { id: 4, title: "Assembly Line Supervisor", description: "Oversees robot construction process." },
                { id: 5, title: "Robot Repair Technician", description: "Fixes malfunctioning units." },
                { id: 6, title: "Safety Compliance Officer", description: "Ensures robots follow safety protocols." }
            ],
            suggestedQuestions: [
                "Have any robots ever rebelled?",
                "What's the most advanced model here?",
                "How do you test artificial intelligence?",
                "What happens to defective units?",
                "How many robots do you produce daily?"
            ]
        },

        // Location 39
        {
            id: 39,
            name: "Ancient Temple",
            description: "A mysterious religious site filled with traps, treasures, and ancient secrets.",
            roles: [
                { id: 1, title: "Archaeologist", description: "Studies the temple's history and artifacts." },
                { id: 2, title: "Temple Guardian", description: "Protects the sacred areas from intruders." },
                { id: 3, title: "Trap Expert", description: "Identifies and disarms ancient mechanisms." },
                { id: 4, title: "Religious Scholar", description: "Interprets ancient texts and symbols." },
                { id: 5, title: "Local Guide", description: "Knows the temple's layout and legends." },
                { id: 6, title: "Treasure Hunter", description: "Seeks valuable artifacts and riches." }
            ],
            suggestedQuestions: [
                "How old is this temple?",
                "What deities were worshipped here?",
                "How many traps have you found?",
                "What's the most valuable artifact here?",
                "Have you seen any supernatural events?"
            ]
        },

        // Location 40
        {
            id: 40,
            name: "Food Truck Festival",
            description: "A gathering of mobile restaurants offering diverse cuisines and street food.",
            roles: [
                { id: 1, title: "Food Truck Owner", description: "Runs their own mobile restaurant." },
                { id: 2, title: "Festival Organizer", description: "Coordinates vendors and event logistics." },
                { id: 3, title: "Health Inspector", description: "Ensures food safety compliance." },
                { id: 4, title: "Food Blogger", description: "Reviews and photographs different dishes." },
                { id: 5, title: "Live Musician", description: "Provides entertainment for diners." },
                { id: 6, title: "Hungry Customer", description: "Trying to sample as many foods as possible." }
            ],
            suggestedQuestions: [
                "What's your specialty dish?",
                "How many food trucks are here?",
                "What's the most popular cuisine?",
                "How do you handle the competition?",
                "What's the best thing you've eaten today?"
            ]
        },

        // Location 41
        {
            id: 41,
            name: "Virtual Reality Gaming Center",
            description: "A high-tech facility where players can immerse themselves in virtual worlds and gaming experiences.",
            roles: [
                { id: 1, title: "VR Game Developer", description: "Creates and tests new virtual reality games." },
                { id: 2, title: "Equipment Technician", description: "Maintains and repairs VR headsets and hardware." },
                { id: 3, title: "Gaming Coach", description: "Helps new players adapt to VR environments." },
                { id: 4, title: "Tournament Organizer", description: "Runs competitive VR gaming events." },
                { id: 5, title: "Motion Capture Artist", description: "Records movements for game animations." },
                { id: 6, title: "First-Time Player", description: "Experiencing virtual reality for the first time." }
            ],
            suggestedQuestions: [
                "What's your favorite VR game?",
                "How do you handle motion sickness?",
                "What's the most challenging part of your role?",
                "How many players can play simultaneously?",
                "What's the newest technology you're using?"
            ]
        },

        // Location 42
        {
            id: 42,
            name: "Alien Embassy",
            description: "A diplomatic facility managing relations between Earth and various extraterrestrial civilizations.",
            roles: [
                { id: 1, title: "Alien Ambassador", description: "Represents their species in diplomatic negotiations." },
                { id: 2, title: "Human Liaison", description: "Facilitates communication between species." },
                { id: 3, title: "Xenobiologist", description: "Studies alien biology and medical needs." },
                { id: 4, title: "Cultural Interpreter", description: "Helps prevent misunderstandings between species." },
                { id: 5, title: "Security Chief", description: "Maintains peace between different alien races." },
                { id: 6, title: "Trade Representative", description: "Negotiates interplanetary commerce agreements." }
            ],
            suggestedQuestions: [
                "How many different species work here?",
                "What's the most challenging cultural difference?",
                "How do you handle language barriers?",
                "What's your favorite Earth custom?",
                "How long have you been stationed here?"
            ]
        },

        // Location 43
        {
            id: 43,
            name: "Steampunk Airship",
            description: "A Victorian-era flying vessel powered by steam and clockwork mechanisms.",
            roles: [
                { id: 1, title: "Airship Captain", description: "Commands the vessel and its crew." },
                { id: 2, title: "Steam Engineer", description: "Maintains the complex propulsion systems." },
                { id: 3, title: "Navigator", description: "Charts course through air currents and weather." },
                { id: 4, title: "Clockwork Mechanic", description: "Repairs intricate mechanical systems." },
                { id: 5, title: "Sky Merchant", description: "Trades exotic goods between floating cities." },
                { id: 6, title: "First-Class Passenger", description: "Traveling in luxury above the clouds." }
            ],
            suggestedQuestions: [
                "How do you generate enough steam power?",
                "What's your favorite aerial route?",
                "How do you handle storms?",
                "What's the most complex mechanism onboard?",
                "How high can this vessel fly?"
            ]
        },

        // Location 44
        {
            id: 44,
            name: "Olympic Training Center",
            description: "A world-class facility where athletes prepare for international competition.",
            roles: [
                { id: 1, title: "Head Coach", description: "Oversees training programs and athlete development." },
                { id: 2, title: "Olympic Athlete", description: "Trains intensively for their sport." },
                { id: 3, title: "Sports Psychologist", description: "Helps athletes maintain mental focus." },
                { id: 4, title: "Physical Therapist", description: "Treats injuries and aids recovery." },
                { id: 5, title: "Nutritionist", description: "Plans optimal diets for peak performance." },
                { id: 6, title: "Equipment Manager", description: "Maintains training gear and facilities." }
            ],
            suggestedQuestions: [
                "How many hours do you train daily?",
                "What's your pre-competition routine?",
                "How do you handle pressure?",
                "What's your specialty event?",
                "How long have you been training here?"
            ]
        },

        // Location 45
        {
            id: 45,
            name: "Desert Oasis",
            description: "A thriving settlement around a water source in the middle of a vast desert.",
            roles: [
                { id: 1, title: "Oasis Guardian", description: "Protects and manages the water supply." },
                { id: 2, title: "Caravan Leader", description: "Guides traders through the desert." },
                { id: 3, title: "Date Farmer", description: "Cultivates palm trees and harvests dates." },
                { id: 4, title: "Water Engineer", description: "Maintains irrigation systems and wells." },
                { id: 5, title: "Market Merchant", description: "Trades goods with passing caravans." },
                { id: 6, title: "Desert Guide", description: "Helps travelers navigate the sands." }
            ],
            suggestedQuestions: [
                "How do you conserve water?",
                "What's the most valuable trade good?",
                "How do you predict sandstorms?",
                "What grows best in this climate?",
                "How many travelers pass through daily?"
            ]
        },

        // Location 46
        {
            id: 46,
            name: "Superhero Headquarters",
            description: "A high-tech base of operations for a team of superheroes protecting the city.",
            roles: [
                { id: 1, title: "Team Leader", description: "Coordinates superhero responses to threats." },
                { id: 2, title: "Tech Support", description: "Maintains advanced superhero equipment." },
                { id: 3, title: "Medical Officer", description: "Treats injuries with advanced healing tech." },
                { id: 4, title: "Rookie Hero", description: "Learning to control their new powers." },
                { id: 5, title: "Intelligence Analyst", description: "Monitors city for supervillain activity." },
                { id: 6, title: "PR Manager", description: "Handles media relations and public image." }
            ],
            suggestedQuestions: [
                "What's your superpower?",
                "How do you keep your identity secret?",
                "Who's your arch-nemesis?",
                "How often do you train?",
                "What's the biggest threat you've faced?"
            ]
        },

        // Location 47
        {
            id: 47,
            name: "Underwater City",
            description: "A self-contained metropolis beneath the ocean's surface.",
            roles: [
                { id: 1, title: "City Administrator", description: "Manages the underwater colony's operations." },
                { id: 2, title: "Pressure Engineer", description: "Maintains the city's structural integrity." },
                { id: 3, title: "Aquaculture Farmer", description: "Grows food in underwater gardens." },
                { id: 4, title: "Marine Architect", description: "Designs underwater structures and expansions." },
                { id: 5, title: "Ocean Traffic Controller", description: "Coordinates submarine and vehicle movement." },
                { id: 6, title: "Tourist Guide", description: "Shows visitors around the underwater attractions." }
            ],
            suggestedQuestions: [
                "How deep is the city?",
                "What's the most common transportation method?",
                "How do you grow food here?",
                "What's the most beautiful view?",
                "How do you handle waste management?"
            ]
        },

        // Location 48
        {
            id: 48,
            name: "Wild West Town",
            description: "A frontier settlement in the American Old West, complete with saloon and sheriff's office.",
            roles: [
                { id: 1, title: "Sheriff", description: "Maintains law and order in the town." },
                { id: 2, title: "Saloon Owner", description: "Runs the town's main gathering place." },
                { id: 3, title: "Bank Teller", description: "Handles money and gold deposits." },
                { id: 4, title: "Horse Trainer", description: "Breaks in and cares for horses." },
                { id: 5, title: "General Store Clerk", description: "Sells supplies to settlers and travelers." },
                { id: 6, title: "Stage Coach Driver", description: "Transports passengers between towns." }
            ],
            suggestedQuestions: [
                "How often do bandits come through?",
                "What's the biggest gold strike nearby?",
                "How long does the stage coach take?",
                "What's the most valuable thing in the bank?",
                "How do you handle troublemakers?"
            ]
        },

        // Location 49
        {
            id: 49,
            name: "Space Port",
            description: "A bustling interplanetary transportation hub with ships departing to various cosmic destinations.",
            roles: [
                { id: 1, title: "Port Director", description: "Oversees all spaceport operations." },
                { id: 2, title: "Customs Officer", description: "Checks incoming ships and cargo." },
                { id: 3, title: "Fuel Technician", description: "Manages spacecraft refueling operations." },
                { id: 4, title: "Navigation Controller", description: "Coordinates takeoffs and landings." },
                { id: 5, title: "Alien Translator", description: "Facilitates communication with non-human travelers." },
                { id: 6, title: "Ship Mechanic", description: "Repairs and maintains spacecraft." }
            ],
            suggestedQuestions: [
                "What's the most popular destination?",
                "How do you handle different atmospheres?",
                "What's the strangest cargo you've seen?",
                "How long is the average layover?",
                "What's the furthest planet you serve?"
            ]
        },

        // Location 50
        {
            id: 50,
            name: "Renaissance Fair",
            description: "A festival celebrating medieval and Renaissance culture with period entertainment and activities.",
            roles: [
                { id: 1, title: "Fair Organizer", description: "Manages the overall event and activities." },
                { id: 2, title: "Jousting Knight", description: "Performs in tournament competitions." },
                { id: 3, title: "Tavern Keeper", description: "Serves period-appropriate food and drink." },
                { id: 4, title: "Court Musician", description: "Performs medieval and Renaissance music." },
                { id: 5, title: "Artisan Craftsperson", description: "Creates and sells period crafts." },
                { id: 6, title: "Royal Court Actor", description: "Portrays nobility for entertainment." }
            ],
            suggestedQuestions: [
                "How authentic is your costume?",
                "What's the most popular event?",
                "How did people really live back then?",
                "What's your favorite period food?",
                "How long does it take to prepare?"
            ]
        },

        // Location 51
        {
            id: 51,
            name: "Ice Hotel",
            description: "A luxury hotel built entirely of ice and snow, rebuilt each winter season.",
            roles: [
                { id: 1, title: "Ice Architect", description: "Designs and oversees hotel construction." },
                { id: 2, title: "Ice Sculptor", description: "Creates artistic features and furniture." },
                { id: 3, title: "Arctic Guide", description: "Leads guests on northern lights tours." },
                { id: 4, title: "Thermal Specialist", description: "Maintains safe temperatures for guests." },
                { id: 5, title: "Winter Activities Director", description: "Organizes snow sports and events." },
                { id: 6, title: "Luxury Guest", description: "Experiencing the unique ice accommodation." }
            ],
            suggestedQuestions: [
                "How long does the hotel last?",
                "What's the average temperature inside?",
                "How do you sleep on ice?",
                "What happens when spring comes?",
                "How do you keep warm?"
            ]
        },

        // Location 52
        {
            id: 52,
            name: "Volcanic Research Station",
            description: "A scientific facility studying active volcanoes and geological phenomena.",
            roles: [
                { id: 1, title: "Volcanologist", description: "Studies volcanic activity and predicts eruptions." },
                { id: 2, title: "Seismologist", description: "Monitors earthquake activity." },
                { id: 3, title: "Gas Analyst", description: "Measures volcanic gas emissions." },
                { id: 4, title: "Equipment Technician", description: "Maintains monitoring instruments." },
                { id: 5, title: "Emergency Coordinator", description: "Plans evacuation procedures." },
                { id: 6, title: "Geology Student", description: "Learning about volcanic processes." }
            ],
            suggestedQuestions: [
                "How do you predict eruptions?",
                "What's the most dangerous gas?",
                "How close can you get to lava?",
                "What's the emergency protocol?",
                "How hot does it get here?"
            ]
        },

        // Location 53
        {
            id: 53,
            name: "Pet Show Competition",
            description: "An prestigious event where owners showcase their prized pets in various categories.",
            roles: [
                { id: 1, title: "Show Judge", description: "Evaluates pets based on breed standards." },
                { id: 2, title: "Professional Handler", description: "Presents pets in competition." },
                { id: 3, title: "Groomer", description: "Prepares pets for showing." },
                { id: 4, title: "Veterinarian", description: "Ensures health and welfare of competing pets." },
                { id: 5, title: "Event Organizer", description: "Coordinates competition schedule and logistics." },
                { id: 6, title: "Proud Pet Owner", description: "Competing with their beloved pet." }
            ],
            suggestedQuestions: [
                "What are the judging criteria?",
                "How long does grooming take?",
                "What's the most unusual pet here?",
                "How many categories are there?",
                "What's the top prize?"
            ]
        },

        // Location 54
        {
            id: 54,
            name: "Quantum Research Lab",
            description: "A cutting-edge facility studying quantum physics and developing revolutionary technologies.",
            roles: [
                { id: 1, title: "Quantum Physicist", description: "Conducts experiments in quantum mechanics." },
                { id: 2, title: "Computer Scientist", description: "Develops quantum computing algorithms." },
                { id: 3, title: "Lab Security", description: "Protects sensitive research and equipment." },
                { id: 4, title: "Research Assistant", description: "Helps set up and record experiments." },
                { id: 5, title: "Equipment Engineer", description: "Maintains quantum computing hardware." },
                { id: 6, title: "Government Observer", description: "Monitors research progress and applications." }
            ],
            suggestedQuestions: [
                "What experiment are you running?",
                "How does quantum computing work?",
                "What's the strangest quantum effect?",
                "How cold is the lab kept?",
                "What's your biggest breakthrough?"
            ]
        },

        // Location 55
        {
            id: 55,
            name: "Floating Market",
            description: "A traditional market where vendors sell goods from boats in a network of canals.",
            roles: [
                { id: 1, title: "Boat Vendor", description: "Sells fresh produce from their boat." },
                { id: 2, title: "Food Cook", description: "Prepares traditional dishes on their boat." },
                { id: 3, title: "Tourist Guide", description: "Shows visitors around the market." },
                { id: 4, title: "Canal Traffic Controller", description: "Manages boat movement and docking." },
                { id: 5, title: "Souvenir Seller", description: "Offers traditional crafts and keepsakes." },
                { id: 6, title: "Professional Photographer", description: "Captures the market's unique atmosphere." }
            ],
            suggestedQuestions: [
                "What's your best-selling item?",
                "How early do you start setting up?",
                "How do you keep your goods fresh?",
                "What's the busiest time of day?",
                "How do you handle bad weather?"
            ]
        },

        // Location 56
        {
            id: 56,
            name: "Haunted Mansion",
            description: "A historic estate filled with supernatural phenomena and mysterious occurrences.",
            roles: [
                { id: 1, title: "Ghost Hunter", description: "Investigates paranormal activity with special equipment." },
                { id: 2, title: "Tour Guide", description: "Leads visitors through the mansion's haunted history." },
                { id: 3, title: "Medium", description: "Communicates with spirits and interprets supernatural events." },
                { id: 4, title: "Caretaker", description: "Maintains the mansion and its grounds." },
                { id: 5, title: "Paranormal Researcher", description: "Documents and studies supernatural phenomena." },
                { id: 6, title: "Skeptical Visitor", description: "Trying to debunk the haunted claims." }
            ],
            suggestedQuestions: [
                "Have you seen any ghosts today?",
                "What's the scariest room in the mansion?",
                "How old is this building?",
                "What's the most convincing evidence of haunting?",
                "How do you handle skeptical visitors?"
            ]
        },

        // Location 57
        {
            id: 57,
            name: "Gladiator Arena",
            description: "An ancient colosseum where warriors compete in spectacular combat events.",
            roles: [
                { id: 1, title: "Champion Gladiator", description: "The most skilled and famous fighter in the arena." },
                { id: 2, title: "Arena Master", description: "Organizes and oversees all combat events." },
                { id: 3, title: "Weapons Master", description: "Maintains and provides combat equipment." },
                { id: 4, title: "Combat Trainer", description: "Prepares fighters for their matches." },
                { id: 5, title: "Arena Physician", description: "Treats injuries and assesses fighters' health." },
                { id: 6, title: "Noble Spectator", description: "Watches the games from the best seats." }
            ],
            suggestedQuestions: [
                "What's your favorite weapon?",
                "How many matches have you won?",
                "What's the crowd like today?",
                "How do you train for combat?",
                "What happens to the losers?"
            ]
        },

        // Location 58
        {
            id: 58,
            name: "Magical Toy Shop",
            description: "A whimsical store where enchanted toys come to life and create wonder.",
            roles: [
                { id: 1, title: "Toy Wizard", description: "Creates and enchants magical toys." },
                { id: 2, title: "Living Doll", description: "An animated toy that helps customers." },
                { id: 3, title: "Test Player", description: "Tries out new magical toys before they're sold." },
                { id: 4, title: "Toy Repair Specialist", description: "Fixes broken or malfunctioning magical toys." },
                { id: 5, title: "Story Time Host", description: "Demonstrates toys through magical storytelling." },
                { id: 6, title: "Wonder-Struck Child", description: "Experiencing the magic for the first time." }
            ],
            suggestedQuestions: [
                "What's the most popular toy?",
                "How do you enchant the toys?",
                "What happens at night when the shop closes?",
                "How long does the magic last?",
                "What's the most difficult toy to create?"
            ]
        },

        // Location 59
        {
            id: 59,
            name: "Underground Bunker",
            description: "A fortified facility deep underground, prepared for any disaster scenario.",
            roles: [
                { id: 1, title: "Bunker Commander", description: "Leads and coordinates all bunker operations." },
                { id: 2, title: "Supply Manager", description: "Maintains inventory of food and essential supplies." },
                { id: 3, title: "Security Officer", description: "Monitors threats and controls access." },
                { id: 4, title: "Environmental Engineer", description: "Maintains air, water, and power systems." },
                { id: 5, title: "Communications Expert", description: "Maintains contact with the outside world." },
                { id: 6, title: "Medical Officer", description: "Handles health issues and sanitation." }
            ],
            suggestedQuestions: [
                "How long can we survive down here?",
                "What's the biggest threat right now?",
                "How deep are we underground?",
                "What's the emergency protocol?",
                "How do you handle cabin fever?"
            ]
        },

        // Location 60
        {
            id: 60,
            name: "Tropical Island Resort",
            description: "A luxurious paradise destination with pristine beaches and exotic amenities.",
            roles: [
                { id: 1, title: "Resort Manager", description: "Oversees all resort operations and staff." },
                { id: 2, title: "Scuba Instructor", description: "Leads underwater expeditions and teaches diving." },
                { id: 3, title: "Island Chef", description: "Creates exotic dishes with local ingredients." },
                { id: 4, title: "Entertainment Director", description: "Organizes shows and activities for guests." },
                { id: 5, title: "Spa Therapist", description: "Provides relaxing treatments in beach cabanas." },
                { id: 6, title: "Wildlife Guide", description: "Shows guests the island's natural wonders." }
            ],
            suggestedQuestions: [
                "What's the best season to visit?",
                "How do you handle tropical storms?",
                "What's the signature cocktail?",
                "What exotic animals live here?",
                "How do you get supplies to the island?"
            ]
        },

        // Location 61
        {
            id: 61,
            name: "Ninja Training Dojo",
            description: "A secretive facility where ancient martial arts and stealth techniques are taught.",
            roles: [
                { id: 1, title: "Ninja Master", description: "Teaches advanced techniques and spiritual wisdom." },
                { id: 2, title: "Weapons Instructor", description: "Trains students in traditional ninja weapons." },
                { id: 3, title: "Stealth Expert", description: "Teaches the art of moving unseen." },
                { id: 4, title: "Meditation Guide", description: "Helps develop mental focus and discipline." },
                { id: 5, title: "Novice Student", description: "Learning the basic skills of ninjutsu." },
                { id: 6, title: "Equipment Keeper", description: "Maintains training gear and traditional tools." }
            ],
            suggestedQuestions: [
                "How long does training take?",
                "What's the most difficult technique?",
                "How do you maintain secrecy?",
                "What's your favorite weapon?",
                "How do you test new students?"
            ]
        },

        // Location 62
        {
            id: 62,
            name: "Intergalactic Zoo",
            description: "A massive facility housing and displaying exotic creatures from across the universe.",
            roles: [
                { id: 1, title: "Alien Zoologist", description: "Studies and cares for extraterrestrial creatures." },
                { id: 2, title: "Habitat Designer", description: "Creates suitable environments for alien species." },
                { id: 3, title: "Security Chief", description: "Prevents dangerous creatures from escaping." },
                { id: 4, title: "Telepathic Interpreter", description: "Communicates with psychic alien species." },
                { id: 5, title: "Food Synthesis Expert", description: "Creates appropriate diets for each species." },
                { id: 6, title: "Interplanetary Guide", description: "Educates visitors about alien life forms." }
            ],
            suggestedQuestions: [
                "What's the most dangerous creature here?",
                "How do you recreate alien atmospheres?",
                "What's the strangest thing you've seen?",
                "How do you handle escaped animals?",
                "Which species is the most intelligent?"
            ]
        },

        // Location 63
        {
            id: 63,
            name: "Time Travelers' Club",
            description: "An exclusive gathering place for chrononauts to share stories and plan expeditions.",
            roles: [
                { id: 1, title: "Club President", description: "Maintains order and prevents temporal paradoxes." },
                { id: 2, title: "Era Specialist", description: "Expert in specific historical periods." },
                { id: 3, title: "Temporal Mechanic", description: "Maintains and repairs time machines." },
                { id: 4, title: "Paradox Inspector", description: "Investigates timeline alterations." },
                { id: 5, title: "Future Historian", description: "Documents changes in the timeline." },
                { id: 6, title: "Rookie Time Traveler", description: "Just received their first time machine." }
            ],
            suggestedQuestions: [
                "What's your favorite time period?",
                "Have you ever met yourself?",
                "What's the biggest mistake you've fixed?",
                "How do you avoid changing history?",
                "What year are you originally from?"
            ]
        },

        // Location 64
        {
            id: 64,
            name: "Pirate's Cove",
            description: "A hidden harbor where pirates gather to trade, celebrate, and plan adventures.",
            roles: [
                { id: 1, title: "Pirate King", description: "Rules the cove and settles disputes." },
                { id: 2, title: "Treasure Appraiser", description: "Values and trades stolen goods." },
                { id: 3, title: "Tavern Keeper", description: "Serves drinks and gathers information." },
                { id: 4, title: "Ship Wright", description: "Repairs and modifies pirate vessels." },
                { id: 5, title: "Smuggler", description: "Moves goods in and out of the cove secretly." },
                { id: 6, title: "Fortune Teller", description: "Predicts weather and fortunes for voyages." }
            ],
            suggestedQuestions: [
                "Where's the best treasure hidden?",
                "How do you avoid the navy?",
                "What's the biggest haul you've seen?",
                "How do you split the plunder?",
                "What's the secret password?"
            ]
        },

        // Location 65
        {
            id: 65,
            name: "Enchanted Forest",
            description: "A mystical woodland where magical creatures dwell and nature spirits roam.",
            roles: [
                { id: 1, title: "Forest Guardian", description: "Protects the forest and its inhabitants." },
                { id: 2, title: "Fairy Queen", description: "Rules the magical creatures of the forest." },
                { id: 3, title: "Beast Whisperer", description: "Communicates with magical animals." },
                { id: 4, title: "Herb Witch", description: "Gathers and uses magical plants." },
                { id: 5, title: "Lost Wanderer", description: "Trying to find their way through the magic." },
                { id: 6, title: "Tree Shepherd", description: "Tends to the ancient and magical trees." }
            ],
            suggestedQuestions: [
                "What magical creatures live here?",
                "How do you find your way around?",
                "What happens at midnight?",
                "Which plants are magical?",
                "How do you handle dark magic?"
            ]
        },

        // Location 66
        {
            id: 66,
            name: "Mars Colony",
            description: "A self-sustaining human settlement on the red planet, pushing the boundaries of space colonization.",
            roles: [
                { id: 1, title: "Colony Director", description: "Manages overall colony operations and expansion." },
                { id: 2, title: "Atmospheric Technician", description: "Maintains the artificial atmosphere systems." },
                { id: 3, title: "Hydroponics Specialist", description: "Grows food in controlled environments." },
                { id: 4, title: "Geological Surveyor", description: "Studies Mars terrain and resources." },
                { id: 5, title: "Solar Array Engineer", description: "Maintains power generation systems." },
                { id: 6, title: "Medical Researcher", description: "Studies effects of Mars living on health." }
            ],
            suggestedQuestions: [
                "How long have you been on Mars?",
                "What's the biggest challenge here?",
                "When's the next supply ship?",
                "How do you deal with dust storms?",
                "What's Earth like now?"
            ]
        },

        // Location 67
        {
            id: 67,
            name: "Dragon Racing Track",
            description: "A high-stakes arena where trained dragons and their riders compete in aerial races.",
            roles: [
                { id: 1, title: "Dragon Rider", description: "Competes in races with their bonded dragon." },
                { id: 2, title: "Race Official", description: "Enforces rules and judges competitions." },
                { id: 3, title: "Dragon Trainer", description: "Prepares dragons for racing." },
                { id: 4, title: "Track Designer", description: "Creates challenging race courses." },
                { id: 5, title: "Dragon Medic", description: "Cares for dragons' health and injuries." },
                { id: 6, title: "Betting Master", description: "Handles wagers on race outcomes." }
            ],
            suggestedQuestions: [
                "How fast do the dragons fly?",
                "What's the most dangerous part of the track?",
                "How do you choose your dragon?",
                "What happens if someone falls?",
                "How do you train for races?"
            ]
        },

        // Location 68
        {
            id: 68,
            name: "Mermaid Kingdom",
            description: "An underwater civilization where merfolk live in coral palaces and sea creatures coexist.",
            roles: [
                { id: 1, title: "Mermaid Queen", description: "Rules the underwater kingdom with wisdom." },
                { id: 2, title: "Pearl Artisan", description: "Creates beautiful jewelry from sea treasures." },
                { id: 3, title: "Shark Tamer", description: "Trains sharks for kingdom defense." },
                { id: 4, title: "Coral Architect", description: "Designs and grows living structures." },
                { id: 5, title: "Sea Witch", description: "Practices underwater magic and healing." },
                { id: 6, title: "Current Rider", description: "Delivers messages through ocean currents." }
            ],
            suggestedQuestions: [
                "How deep is the kingdom?",
                "What's your favorite sea creature?",
                "How do you communicate underwater?",
                "What's the most precious treasure here?",
                "How do you handle surface dwellers?"
            ]
        },

        // Location 69
        {
            id: 69,
            name: "Sky City",
            description: "A floating metropolis high in the clouds, sustained by advanced technology and wind power.",
            roles: [
                { id: 1, title: "Wind Engineer", description: "Maintains the city's floating mechanisms." },
                { id: 2, title: "Cloud Harvester", description: "Collects water from clouds for the city." },
                { id: 3, title: "Sky Traffic Controller", description: "Manages flying vehicle routes." },
                { id: 4, title: "Weather Manipulator", description: "Controls local weather patterns." },
                { id: 5, title: "Gravity Technician", description: "Maintains artificial gravity systems." },
                { id: 6, title: "Edge Guard", description: "Patrols the city's outer boundaries." }
            ],
            suggestedQuestions: [
                "How high up are we?",
                "What happens during storms?",
                "How do you get supplies?",
                "What's the view like?",
                "How do people adjust to living here?"
            ]
        },

        // Location 70
        {
            id: 70,
            name: "Ancient Library",
            description: "A vast repository of knowledge containing rare books, magical tomes, and forgotten wisdom.",
            roles: [
                { id: 1, title: "Head Librarian", description: "Guards and organizes the collection." },
                { id: 2, title: "Scroll Keeper", description: "Preserves and restores ancient texts." },
                { id: 3, title: "Forbidden Lore Expert", description: "Studies dangerous and powerful knowledge." },
                { id: 4, title: "Living Book", description: "A sentient tome sharing its contents." },
                { id: 5, title: "Translation Master", description: "Deciphers texts in forgotten languages." },
                { id: 6, title: "Knowledge Seeker", description: "Researching specific ancient wisdom." }
            ],
            suggestedQuestions: [
                "What's the oldest book here?",
                "How do you organize everything?",
                "What happens to forbidden books?",
                "How do you handle magical texts?",
                "What's the most valuable volume?"
            ]
        },

        // Location 71
        {
            id: 71,
            name: "Steampunk Airship Factory",
            description: "A massive industrial facility where steam-powered airships are designed and constructed.",
            roles: [
                { id: 1, title: "Chief Engineer", description: "Oversees all airship design and construction." },
                { id: 2, title: "Steam Core Specialist", description: "Maintains the powerful steam engines." },
                { id: 3, title: "Brass Worker", description: "Crafts intricate mechanical components." },
                { id: 4, title: "Test Pilot", description: "Trials new airship designs." },
                { id: 5, title: "Gear Mechanic", description: "Assembles complex clockwork mechanisms." },
                { id: 6, title: "Quality Inspector", description: "Ensures airships meet safety standards." }
            ],
            suggestedQuestions: [
                "How many ships can you build at once?",
                "What's the most common malfunction?",
                "How do you test new designs?",
                "What's the most expensive component?",
                "How long does it take to build one ship?"
            ]
        },

        // Location 72
        {
            id: 72,
            name: "Crystal Cave",
            description: "A vast underground network of caves filled with magical crystals and ancient mysteries.",
            roles: [
                { id: 1, title: "Crystal Sage", description: "Studies and harnesses crystal energy." },
                { id: 2, title: "Cave Explorer", description: "Maps new crystal formations and passages." },
                { id: 3, title: "Energy Harvester", description: "Collects and processes crystal power." },
                { id: 4, title: "Guardian", description: "Protects the sacred crystal chambers." },
                { id: 5, title: "Crystal Healer", description: "Uses crystal energy for healing." },
                { id: 6, title: "Apprentice Miner", description: "Learns the art of crystal extraction." }
            ],
            suggestedQuestions: [
                "What powers do the crystals have?",
                "How deep do the caves go?",
                "What happens if crystals break?",
                "How do you find your way around?",
                "What's the most valuable crystal type?"
            ]
        },

        // Location 73
        {
            id: 73,
            name: "Monster Hunter Academy",
            description: "A training facility where aspiring hunters learn to track and capture mythical creatures.",
            roles: [
                { id: 1, title: "Master Hunter", description: "Teaches advanced hunting techniques." },
                { id: 2, title: "Beast Lore Expert", description: "Studies creature habits and weaknesses." },
                { id: 3, title: "Weapon Smith", description: "Crafts specialized hunting equipment." },
                { id: 4, title: "Field Medic", description: "Treats injuries from monster encounters." },
                { id: 5, title: "Tracking Instructor", description: "Teaches monster tracking skills." },
                { id: 6, title: "Monster Keeper", description: "Cares for captured creatures." }
            ],
            suggestedQuestions: [
                "What's the most dangerous monster?",
                "How long is the training?",
                "What's your favorite weapon?",
                "How do you track monsters?",
                "What happens to captured creatures?"
            ]
        },

        // Location 74
        {
            id: 74,
            name: "Dream Research Lab",
            description: "A cutting-edge facility studying dream phenomena and consciousness exploration.",
            roles: [
                { id: 1, title: "Dream Scientist", description: "Studies dream patterns and phenomena." },
                { id: 2, title: "Sleep Technician", description: "Monitors dream equipment and subjects." },
                { id: 3, title: "Dream Walker", description: "Enters and explores others' dreams." },
                { id: 4, title: "Memory Analyst", description: "Interprets dream symbolism and memories." },
                { id: 5, title: "Reality Anchor", description: "Maintains connection to waking world." },
                { id: 6, title: "Test Subject", description: "Participates in dream experiments." }
            ],
            suggestedQuestions: [
                "What's the longest dream recorded?",
                "How do you enter dreams?",
                "What happens if someone can't wake up?",
                "Can you control dreams?",
                "How do you remember everything?"
            ]
        },

        // Location 75
        {
            id: 75,
            name: "Floating Market",
            description: "A bustling marketplace on interconnected boats, selling exotic goods from across dimensions.",
            roles: [
                { id: 1, title: "Market Master", description: "Organizes and oversees market operations." },
                { id: 2, title: "Dimension Trader", description: "Sells goods from other realities." },
                { id: 3, title: "Boat Navigator", description: "Guides vessels through market channels." },
                { id: 4, title: "Currency Exchange", description: "Trades interdimensional money." },
                { id: 5, title: "Food Vendor", description: "Sells exotic dimensional cuisine." },
                { id: 6, title: "Security Guard", description: "Maintains order in the market." }
            ],
            suggestedQuestions: [
                "What's the rarest item here?",
                "How many dimensions trade here?",
                "What's the strangest currency?",
                "How do boats stay organized?",
                "What happens during storms?"
            ]
        },

        // Location 76
        {
            id: 76,
            name: "Elemental Dojo",
            description: "A mystical training ground where students master control over the four elements.",
            roles: [
                { id: 1, title: "Grand Master", description: "Teaches mastery of all elements." },
                { id: 2, title: "Fire Sage", description: "Specializes in fire manipulation." },
                { id: 3, title: "Water Healer", description: "Uses water for healing arts." },
                { id: 4, title: "Earth Defender", description: "Teaches defensive earth techniques." },
                { id: 5, title: "Air Nomad", description: "Masters aerial movement and wind." },
                { id: 6, title: "Novice Bender", description: "Learning to control first element." }
            ],
            suggestedQuestions: [
                "Which element is hardest to master?",
                "How do you choose your element?",
                "What happens if elements mix?",
                "How long is the training?",
                "What's the most powerful technique?"
            ]
        },

        // Location 77
        {
            id: 77,
            name: "Cyberpunk Nightclub",
            description: "A high-tech entertainment venue where virtual reality meets reality in a neon-lit atmosphere.",
            roles: [
                { id: 1, title: "Club Owner", description: "Runs the most advanced club in the city." },
                { id: 2, title: "VR DJ", description: "Mixes music and virtual experiences." },
                { id: 3, title: "Neural Bartender", description: "Serves mood-altering digital cocktails." },
                { id: 4, title: "Security AI", description: "Monitors club safety through the network." },
                { id: 5, title: "Holo Dancer", description: "Performs in augmented reality shows." },
                { id: 6, title: "Tech Dealer", description: "Sells latest black market upgrades." }
            ],
            suggestedQuestions: [
                "What's tonight's special effect?",
                "How do virtual drinks work?",
                "What's the latest tech trend?",
                "How do you handle hackers?",
                "What's the most popular dance?"
            ]
        },

        // Location 78
        {
            id: 78,
            name: "Giant's Kitchen",
            description: "An enormous cooking facility where mythical chefs prepare feasts for magical beings.",
            roles: [
                { id: 1, title: "Giant Chef", description: "Creates massive dishes for magical creatures." },
                { id: 2, title: "Magic Ingredient Finder", description: "Sources rare magical components." },
                { id: 3, title: "Fire Drake Tender", description: "Maintains the magical cooking fires." },
                { id: 4, title: "Taste Tester", description: "Ensures food safety for different species." },
                { id: 5, title: "Recipe Keeper", description: "Guards ancient cooking secrets." },
                { id: 6, title: "Kitchen Sprite", description: "Helps with magical food preparation." }
            ],
            suggestedQuestions: [
                "What's the biggest dish you make?",
                "How do you handle dragon appetites?",
                "What's the rarest ingredient?",
                "How many can you feed at once?",
                "What's the most dangerous recipe?"
            ]
        },

        // Location 79
        {
            id: 79,
            name: "Memory Archive",
            description: "A facility where memories are stored, cataloged, and sometimes modified or restored.",
            roles: [
                { id: 1, title: "Memory Archivist", description: "Organizes and preserves memories." },
                { id: 2, title: "Recall Specialist", description: "Helps retrieve lost memories." },
                { id: 3, title: "Dream Weaver", description: "Creates artificial memories." },
                { id: 4, title: "Emotion Engineer", description: "Balances emotional content." },
                { id: 5, title: "Storage Technician", description: "Maintains memory storage systems." },
                { id: 6, title: "Ethics Officer", description: "Ensures proper memory handling." }
            ],
            suggestedQuestions: [
                "How long do memories last?",
                "Can you delete memories?",
                "What's the oldest memory here?",
                "How do you organize everything?",
                "What happens to bad memories?"
            ]
        },

        // Location 80
        {
            id: 80,
            name: "Cloud Castle",
            description: "A majestic fortress built atop clouds, home to sky lords and weather masters.",
            roles: [
                { id: 1, title: "Cloud King", description: "Rules the castle and commands weather." },
                { id: 2, title: "Storm Mage", description: "Controls weather phenomena." },
                { id: 3, title: "Wind Rider", description: "Patrols the castle perimeter." },
                { id: 4, title: "Rainbow Weaver", description: "Creates spectacular sky displays." },
                { id: 5, title: "Lightning Keeper", description: "Harnesses storm energy." },
                { id: 6, title: "Cloud Sculptor", description: "Shapes clouds for castle maintenance." }
            ],
            suggestedQuestions: [
                "How do you make it rain?",
                "What's the view like?",
                "How do visitors get here?",
                "What happens during storms?",
                "How do you shape clouds?"
            ]
        },

        // Location 81
        {
            id: 81,
            name: "Time Police HQ",
            description: "The headquarters for agents who monitor and prevent temporal crimes across history.",
            roles: [
                { id: 1, title: "Chief Inspector", description: "Leads temporal crime investigations." },
                { id: 2, title: "Timeline Analyst", description: "Monitors historical alterations." },
                { id: 3, title: "Paradox Agent", description: "Resolves temporal contradictions." },
                { id: 4, title: "Quantum Detective", description: "Tracks timeline criminals." },
                { id: 5, title: "Archive Keeper", description: "Maintains records of all timelines." },
                { id: 6, title: "Rookie Agent", description: "Learning temporal law enforcement." }
            ],
            suggestedQuestions: [
                "What's the worst time crime?",
                "How do you catch time criminals?",
                "What happens to paradoxes?",
                "Which era has most problems?",
                "How do you file time reports?"
            ]
        },

        // Location 82
        {
            id: 82,
            name: "Fairy Tale Therapy Office",
            description: "A magical counseling center where story characters work through their narrative issues.",
            roles: [
                { id: 1, title: "Story Therapist", description: "Helps characters with their problems." },
                { id: 2, title: "Happy Ending Specialist", description: "Resolves narrative conflicts." },
                { id: 3, title: "Character Coach", description: "Develops role confidence." },
                { id: 4, title: "Plot Mediator", description: "Resolves story disputes." },
                { id: 5, title: "Narrative Navigator", description: "Guides character development." },
                { id: 6, title: "Magic Mirror", description: "Shows characters their true selves." }
            ],
            suggestedQuestions: [
                "Who's the hardest to help?",
                "How do you handle villains?",
                "Can you change endings?",
                "What's the most common problem?",
                "How long is typical therapy?"
            ]
        },

        // Location 83
        {
            id: 83,
            name: "Galactic Food Court",
            description: "An interstellar dining hub featuring cuisine from thousands of alien civilizations.",
            roles: [
                { id: 1, title: "Food Court Manager", description: "Coordinates diverse restaurant operations." },
                { id: 2, title: "Alien Chef", description: "Prepares exotic extraterrestrial dishes." },
                { id: 3, title: "Atmosphere Adjuster", description: "Maintains species-specific environments." },
                { id: 4, title: "Translation Device", description: "Helps communicate menu items." },
                { id: 5, title: "Food Safety Inspector", description: "Ensures cross-species edibility." },
                { id: 6, title: "Gravity Controller", description: "Adjusts gravity for different diners." }
            ],
            suggestedQuestions: [
                "What's the most popular dish?",
                "How many species eat here?",
                "What's inedible to humans?",
                "How do you handle allergies?",
                "What's the strangest food?"
            ]
        },

        // Location 84
        {
            id: 84,
            name: "Superhero Retirement Home",
            description: "A specialized facility where retired superheroes can relax and share their glory days.",
            roles: [
                { id: 1, title: "Facility Director", description: "Manages the unique needs of retired heroes." },
                { id: 2, title: "Power Dampener", description: "Controls residual superhuman abilities." },
                { id: 3, title: "Memory Chronicler", description: "Records heroes' past adventures." },
                { id: 4, title: "Costume Curator", description: "Preserves historic superhero outfits." },
                { id: 5, title: "Special Nurse", description: "Cares for super-powered seniors." },
                { id: 6, title: "Activity Coordinator", description: "Organizes engaging hero activities." }
            ],
            suggestedQuestions: [
                "Who was the greatest hero?",
                "How do you handle powers?",
                "What's the best war story?",
                "Do villains ever attack?",
                "What's the daily routine?"
            ]
        },

        // Location 85
        {
            id: 85,
            name: "Dimensional Repair Shop",
            description: "A workshop where experts fix tears in reality and maintain the fabric of the multiverse.",
            roles: [
                { id: 1, title: "Reality Mechanic", description: "Repairs breaks in dimensional walls." },
                { id: 2, title: "Quantum Tools Expert", description: "Maintains reality-altering equipment." },
                { id: 3, title: "Dimension Weaver", description: "Stitches together torn realities." },
                { id: 4, title: "Paradox Resolver", description: "Fixes dimensional overlaps." },
                { id: 5, title: "Space-Time Technician", description: "Calibrates dimensional frequencies." },
                { id: 6, title: "Apprentice Fixer", description: "Learning to repair reality breaks." }
            ],
            suggestedQuestions: [
                "What's the worst break ever?",
                "How do you fix reality?",
                "What causes the tears?",
                "What tools do you use?",
                "How long do repairs last?"
            ]
        },

        // Location 86
        {
            id: 86,
            name: "Mythical Pet Shop",
            description: "A magical store where legendary creatures are matched with their perfect owners.",
            roles: [
                { id: 1, title: "Creature Matchmaker", description: "Pairs magical pets with suitable owners." },
                { id: 2, title: "Phoenix Keeper", description: "Tends to fire birds and their eggs." },
                { id: 3, title: "Dragon Whisperer", description: "Trains baby dragons for domestication." },
                { id: 4, title: "Unicorn Groomer", description: "Maintains the beauty of magical steeds." },
                { id: 5, title: "Beast Veterinarian", description: "Treats magical creature ailments." },
                { id: 6, title: "Apprentice Handler", description: "Learning to care for various creatures." }
            ],
            suggestedQuestions: [
                "What's the most difficult pet to care for?",
                "How do you match pets with owners?",
                "What happens if creatures don't get along?",
                "What's the rarest creature here?",
                "How do you handle magical accidents?"
            ]
        },

        // Location 87
        {
            id: 87,
            name: "Atlantean Archives",
            description: "An underwater library preserving the knowledge and artifacts of the lost civilization.",
            roles: [
                { id: 1, title: "Head Archivist", description: "Oversees the preservation of ancient knowledge." },
                { id: 2, title: "Relic Restorer", description: "Repairs damaged Atlantean artifacts." },
                { id: 3, title: "Language Expert", description: "Translates ancient Atlantean texts." },
                { id: 4, title: "Technology Analyst", description: "Studies advanced Atlantean devices." },
                { id: 5, title: "Water Mage", description: "Maintains the archive's protective barriers." },
                { id: 6, title: "Surface Liaison", description: "Coordinates with land-based researchers." }
            ],
            suggestedQuestions: [
                "What's the oldest artifact here?",
                "How do you preserve things underwater?",
                "What happened to Atlantis?",
                "Can you read all the texts?",
                "What's the most valuable item?"
            ]
        },

        // Location 88
        {
            id: 88,
            name: "Cosmic Train Station",
            description: "An interstellar transit hub where trains travel through space-time tunnels.",
            roles: [
                { id: 1, title: "Station Master", description: "Manages all cosmic train operations." },
                { id: 2, title: "Quantum Engineer", description: "Maintains space-time tunnel networks." },
                { id: 3, title: "Stellar Navigator", description: "Plans safe routes through space." },
                { id: 4, title: "Ticket Master", description: "Handles interdimensional bookings." },
                { id: 5, title: "Platform Guard", description: "Ensures safe boarding procedures." },
                { id: 6, title: "Lost & Found Keeper", description: "Tracks items lost across dimensions." }
            ],
            suggestedQuestions: [
                "Where's the longest route to?",
                "How fast do the trains go?",
                "What's the strangest thing lost here?",
                "How do you prevent time paradoxes?",
                "What happens if you miss your train?"
            ]
        },

        // Location 89
        {
            id: 89,
            name: "Wizard's Dueling Arena",
            description: "A competitive venue where magic users test their skills in regulated combat.",
            roles: [
                { id: 1, title: "Tournament Judge", description: "Enforces rules and declares winners." },
                { id: 2, title: "Shield Master", description: "Maintains protective barriers for spectators." },
                { id: 3, title: "Spell Referee", description: "Monitors for illegal magic use." },
                { id: 4, title: "Arena Medic", description: "Treats magical injuries and accidents." },
                { id: 5, title: "Equipment Manager", description: "Provides and checks magical tools." },
                { id: 6, title: "Apprentice Duelist", description: "Training in competitive magic." }
            ],
            suggestedQuestions: [
                "What spells are forbidden?",
                "How do you judge a winner?",
                "What's the worst accident ever?",
                "How do you train for duels?",
                "What's the most powerful spell seen?"
            ]
        },

        // Location 90
        {
            id: 90,
            name: "Robotic Amusement Park",
            description: "A futuristic theme park operated entirely by advanced artificial intelligence.",
            roles: [
                { id: 1, title: "AI Director", description: "Controls all park operations and systems." },
                { id: 2, title: "Ride Engineer", description: "Maintains advanced robotic attractions." },
                { id: 3, title: "Safety Protocol Bot", description: "Monitors guest security and well-being." },
                { id: 4, title: "Entertainment Android", description: "Performs shows and interacts with guests." },
                { id: 5, title: "Maintenance Drone", description: "Repairs and cleans park facilities." },
                { id: 6, title: "Guest Relations Bot", description: "Assists visitors with inquiries." }
            ],
            suggestedQuestions: [
                "What's the most popular ride?",
                "How do you handle malfunctions?",
                "Can robots have fun too?",
                "What's the newest attraction?",
                "How do you understand human emotions?"
            ]
        },

        // Location 91
        {
            id: 91,
            name: "Parallel Universe Embassy",
            description: "A diplomatic facility managing relations between different versions of Earth.",
            roles: [
                { id: 1, title: "Universe Ambassador", description: "Represents their Earth in negotiations." },
                { id: 2, title: "Reality Coordinator", description: "Prevents inter-dimensional conflicts." },
                { id: 3, title: "Cultural Liaison", description: "Explains variant Earth customs." },
                { id: 4, title: "Treaty Keeper", description: "Maintains inter-dimensional agreements." },
                { id: 5, title: "Quantum Translator", description: "Facilitates communication between realities." },
                { id: 6, title: "Security Chief", description: "Prevents unauthorized reality crossing." }
            ],
            suggestedQuestions: [
                "How many Earths are there?",
                "What's the biggest difference between worlds?",
                "How do you prevent wars?",
                "What happens if you meet yourself?",
                "Which Earth is the original?"
            ]
        },

        // Location 92
        {
            id: 92,
            name: "Magical Items Repair Shop",
            description: "A workshop specializing in fixing enchanted objects and cursed artifacts.",
            roles: [
                { id: 1, title: "Master Enchanter", description: "Repairs complex magical items." },
                { id: 2, title: "Curse Breaker", description: "Removes or modifies item curses." },
                { id: 3, title: "Magical Artificer", description: "Crafts replacement components." },
                { id: 4, title: "Quality Tester", description: "Ensures items work properly." },
                { id: 5, title: "Inventory Keeper", description: "Tracks items and their histories." },
                { id: 6, title: "Safety Inspector", description: "Prevents magical accidents." }
            ],
            suggestedQuestions: [
                "What's the most dangerous item?",
                "How do you handle curses?",
                "What can't be fixed?",
                "How long do repairs take?",
                "What's your success rate?"
            ]
        },

        // Location 93
        {
            id: 93,
            name: "Cryptozoologist Camp",
            description: "A research base dedicated to studying and protecting mysterious creatures.",
            roles: [
                { id: 1, title: "Lead Researcher", description: "Directs creature study programs." },
                { id: 2, title: "Field Observer", description: "Tracks and documents creature behavior." },
                { id: 3, title: "Habitat Specialist", description: "Maintains creature environments." },
                { id: 4, title: "Evidence Analyst", description: "Examines proof of creature existence." },
                { id: 5, title: "Protection Officer", description: "Keeps creatures safe from hunters." },
                { id: 6, title: "Junior Researcher", description: "Assists in creature studies." }
            ],
            suggestedQuestions: [
                "What's your best discovery?",
                "How do you track creatures?",
                "What's the most elusive beast?",
                "How do you prove they exist?",
                "What's your research method?"
            ]
        },

        // Location 94
        {
            id: 94,
            name: "Fairy Fashion House",
            description: "An exclusive boutique creating magical clothing for supernatural clientele.",
            roles: [
                { id: 1, title: "Enchanted Designer", description: "Creates magical fashion pieces." },
                { id: 2, title: "Pixie Seamstress", description: "Sews with invisible thread and starlight." },
                { id: 3, title: "Color Enchanter", description: "Adds magical effects to fabrics." },
                { id: 4, title: "Size Adjuster", description: "Fits clothes to any creature." },
                { id: 5, title: "Material Sourcer", description: "Finds magical fabrics and components." },
                { id: 6, title: "Style Consultant", description: "Advises on magical fashion trends." }
            ],
            suggestedQuestions: [
                "What's in fashion now?",
                "How do clothes change size?",
                "What's the most expensive outfit?",
                "Can humans wear these?",
                "How do you add magic effects?"
            ]
        },

        // Location 95
        {
            id: 95,
            name: "Interdimensional Postal Service",
            description: "A facility managing mail delivery across multiple dimensions and realities.",
            roles: [
                { id: 1, title: "Postmaster General", description: "Oversees all dimensional deliveries." },
                { id: 2, title: "Portal Sorter", description: "Routes mail to correct dimensions." },
                { id: 3, title: "Time-Space Courier", description: "Delivers to difficult locations." },
                { id: 4, title: "Package Inspector", description: "Checks for dangerous items." },
                { id: 5, title: "Address Translator", description: "Decodes multidimensional addresses." },
                { id: 6, title: "Lost Mail Finder", description: "Tracks down misplaced deliveries." }
            ],
            suggestedQuestions: [
                "What's the furthest delivery?",
                "How do you find addresses?",
                "What can't be mailed?",
                "How often do things get lost?",
                "What's the strangest package?"
            ]
        },

        // Location 96
        {
            id: 96,
            name: "Supernatural Emergency Room",
            description: "A medical facility specialized in treating magical beings and mystical ailments.",
            roles: [
                { id: 1, title: "Magic Medicine Doctor", description: "Treats supernatural conditions." },
                { id: 2, title: "Curse Nurse", description: "Assists with curse-related treatments." },
                { id: 3, title: "Potion Master", description: "Prepares magical remedies." },
                { id: 4, title: "Creature Specialist", description: "Handles non-human patients." },
                { id: 5, title: "Soul Healer", description: "Repairs spiritual injuries." },
                { id: 6, title: "Triage Wizard", description: "Assesses magical emergencies." }
            ],
            suggestedQuestions: [
                "What's the worst case ever?",
                "How do you treat curses?",
                "What can't be healed?",
                "How do you handle dragons?",
                "What's the most common injury?"
            ]
        },

        // Location 97
        {
            id: 97,
            name: "Gravity Research Center",
            description: "A facility studying and experimenting with gravity manipulation and control.",
            roles: [
                { id: 1, title: "Gravity Scientist", description: "Studies gravity phenomena." },
                { id: 2, title: "Field Generator", description: "Controls gravity experiment areas." },
                { id: 3, title: "Safety Officer", description: "Prevents floating accidents." },
                { id: 4, title: "Equipment Engineer", description: "Maintains anti-gravity devices." },
                { id: 5, title: "Test Coordinator", description: "Manages gravity experiments." },
                { id: 6, title: "Research Assistant", description: "Helps with gravity studies." }
            ],
            suggestedQuestions: [
                "How do you control gravity?",
                "What's the most dangerous test?",
                "Can you create gravity?",
                "What happens if systems fail?",
                "How high can people float?"
            ]
        },

        // Location 98
        {
            id: 98,
            name: "Genie Lamp Workshop",
            description: "A mystical factory where magical lamps are crafted and wishes are regulated.",
            roles: [
                { id: 1, title: "Lamp Artisan", description: "Creates and enchants magical lamps." },
                { id: 2, title: "Wish Auditor", description: "Reviews and approves wishes." },
                { id: 3, title: "Genie Trainer", description: "Prepares genies for service." },
                { id: 4, title: "Magic Regulator", description: "Ensures wish safety compliance." },
                { id: 5, title: "Lamp Maintainer", description: "Services existing magical lamps." },
                { id: 6, title: "Apprentice Maker", description: "Learning lamp crafting arts." }
            ],
            suggestedQuestions: [
                "What wishes are forbidden?",
                "How do you make the lamps?",
                "What happens to bad wishes?",
                "How long do genies serve?",
                "Can wishes be returned?"
            ]
        },

        // Location 99
        {
            id: 99,
            name: "Constellation Observatory",
            description: "A celestial facility where star patterns are maintained and constellations are crafted.",
            roles: [
                { id: 1, title: "Star Keeper", description: "Maintains constellation patterns." },
                { id: 2, title: "Pattern Weaver", description: "Creates new constellations." },
                { id: 3, title: "Light Engineer", description: "Controls star brightness." },
                { id: 4, title: "Space Cartographer", description: "Maps celestial arrangements." },
                { id: 5, title: "Zodiac Master", description: "Manages astrological signs." },
                { id: 6, title: "Night Watch", description: "Monitors star positions." }
            ],
            suggestedQuestions: [
                "How do you move stars?",
                "What's your favorite constellation?",
                "How do you make new patterns?",
                "What happens to old constellations?",
                "Can you create shooting stars?"
            ]
        },

        // Location 100
        {
            id: 100,
            name: "Reality TV Show Set",
            description: "A studio where contestants compete in outrageous challenges across multiple realities.",
            roles: [
                { id: 1, title: "Show Producer", description: "Creates and oversees reality challenges." },
                { id: 2, title: "Reality Engineer", description: "Designs and controls challenge environments." },
                { id: 3, title: "Drama Director", description: "Ensures maximum entertainment value." },
                { id: 4, title: "Safety Supervisor", description: "Protects contestants across realities." },
                { id: 5, title: "Camera Operator", description: "Films across dimensional boundaries." },
                { id: 6, title: "Contest Judge", description: "Evaluates cross-reality performances." }
            ],
            suggestedQuestions: [
                "What's the craziest challenge?",
                "How do you film everything?",
                "What happens if someone loses?",
                "How do you choose contestants?",
                "What's the grand prize?"
            ]
        }
    ],

    // General questions that can work at any location
    generalQuestions: [
        "How long have you worked here?",
        "What's your typical day like?",
        "What's the best part of your job?",
        "What's the worst part of your job?",
        "Who's in charge here?",
        "What kind of training is required?",
        "How did you end up here?",
        "What's the biggest challenge in your role?",
        "Do you enjoy working here?",
        "What's the most interesting thing that's happened recently?"
    ]
};

// Additional locations will continue with IDs 21 through 150+ 