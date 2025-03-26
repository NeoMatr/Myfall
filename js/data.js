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
        }
    ],
    
    // General questions that could work at any location
    generalQuestions: [
        "How long have you been in your current position?",
        "What kind of training did you need for your role?",
        "Who do you report to or take orders from?",
        "What time do you usually arrive and leave?",
        "Do you enjoy what you do here?",
        "What's the most challenging part of your role?",
        "How many people do you directly work with?",
        "What tools or equipment do you use regularly?",
        "How would you describe the atmosphere here?",
        "What's changed since you first started here?",
        "What's your favorite part about being here?",
        "How did you end up in this place?",
        "What's something most people don't know about this place?",
        "If you could change one thing about this place, what would it be?",
        "What's the most unusual thing you've seen here?"
    ]
};

// Additional locations will continue with IDs 21 through 150+ 