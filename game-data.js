// Game data for LocationSpy

const gameData = {
    // Standard location pack (30 locations)
    standard: [
        {
            name: "Beach",
            roles: ["Lifeguard", "Surfer", "Ice Cream Vendor", "Tourist", "Volleyball Player", "Sunbather", "Photographer", "Scuba Instructor", "Sand Castle Builder", "Beach Cleaner"]
        },
        {
            name: "Hospital",
            roles: ["Doctor", "Nurse", "Surgeon", "Patient", "Receptionist", "Visitor", "Pharmacist", "Paramedic", "Janitor", "Physical Therapist"]
        },
        {
            name: "Movie Theater",
            roles: ["Ticket Seller", "Usher", "Moviegoer", "Manager", "Concession Stand Worker", "Projectionist", "Film Critic", "Couple on a Date", "Celebrity", "Cleaner"]
        },
        {
            name: "Restaurant",
            roles: ["Chef", "Waiter", "Customer", "Host/Hostess", "Dishwasher", "Food Critic", "Manager", "Bartender", "Delivery Driver", "Busboy"]
        },
        {
            name: "School",
            roles: ["Teacher", "Student", "Principal", "Janitor", "School Nurse", "Cafeteria Worker", "Librarian", "Coach", "Guidance Counselor", "Parent Volunteer"]
        },
        {
            name: "Airport",
            roles: ["Pilot", "Flight Attendant", "Passenger", "Security Officer", "Baggage Handler", "Air Traffic Controller", "Gift Shop Employee", "Airline Check-in Agent", "Customs Officer", "Taxi Driver"]
        },
        {
            name: "Bank",
            roles: ["Teller", "Manager", "Security Guard", "Customer", "Loan Officer", "Robber", "Financial Advisor", "Janitor", "ATM Technician", "Armored Truck Driver"]
        },
        {
            name: "Gym",
            roles: ["Personal Trainer", "Member", "Receptionist", "Yoga Instructor", "Cleaner", "Manager", "Bodybuilder", "First-time Visitor", "Nutritionist", "Locker Room Attendant"]
        },
        {
            name: "Hotel",
            roles: ["Receptionist", "Guest", "Bellhop", "Manager", "Housekeeper", "Chef", "Concierge", "Security Guard", "Valet", "Pool Attendant"]
        },
        {
            name: "Police Station",
            roles: ["Police Officer", "Detective", "Criminal", "Lawyer", "Witness", "Forensic Scientist", "Secretary", "Chief of Police", "Reporter", "Social Worker"]
        },
        {
            name: "Supermarket",
            roles: ["Cashier", "Customer", "Manager", "Shelf Stocker", "Butcher", "Produce Manager", "Janitor", "Security Guard", "Delivery Person", "Sample Server"]
        },
        {
            name: "Train Station",
            roles: ["Conductor", "Passenger", "Ticket Seller", "Cleaner", "Security Guard", "Food Vendor", "Tourist", "Station Manager", "Homeless Person", "Lost Child"]
        },
        {
            name: "Zoo",
            roles: ["Zookeeper", "Visitor", "Tour Guide", "Ice Cream Vendor", "Veterinarian", "Photographer", "Child", "Gift Shop Employee", "Security Guard", "Animal Rights Activist"]
        },
        {
            name: "Wedding",
            roles: ["Bride", "Groom", "Best Man", "Maid of Honor", "Photographer", "Wedding Planner", "Flower Girl", "Father of the Bride", "Caterer", "Drunk Guest"]
        },
        {
            name: "Cruise Ship",
            roles: ["Captain", "Passenger", "Crew Member", "Chef", "Entertainer", "Bartender", "Lifeguard", "Security Officer", "Cleaner", "Shore Excursion Guide"]
        },
        {
            name: "Casino",
            roles: ["Dealer", "Gambler", "Security Guard", "Cocktail Server", "Pit Boss", "Card Counter", "Slot Machine Attendant", "High Roller", "Tourist", "Casino Manager"]
        },
        {
            name: "Library",
            roles: ["Librarian", "Student", "Researcher", "Child", "Janitor", "Book Club Member", "Homeless Person", "Computer User", "Volunteer", "Author"]
        },
        {
            name: "Space Station",
            roles: ["Astronaut", "Commander", "Scientist", "Engineer", "Doctor", "Space Tourist", "Alien", "Robot", "Communications Officer", "Chef"]
        },
        {
            name: "Submarine",
            roles: ["Captain", "Navigator", "Engineer", "Chef", "Marine Biologist", "Sonar Operator", "Military Officer", "Tourist", "Photographer", "Maintenance Worker"]
        },
        {
            name: "Construction Site",
            roles: ["Construction Worker", "Foreman", "Architect", "Engineer", "Safety Inspector", "Crane Operator", "Electrician", "Plumber", "Surveyor", "Materials Supplier"]
        },
        {
            name: "Art Gallery",
            roles: ["Artist", "Visitor", "Curator", "Security Guard", "Art Critic", "Rich Collector", "Gallery Owner", "Student", "Tour Guide", "Photographer"]
        },
        {
            name: "University",
            roles: ["Professor", "Student", "Dean", "Janitor", "Librarian", "Campus Security", "Athlete", "Tour Guide", "Researcher", "Admissions Officer"]
        },
        {
            name: "Ski Resort",
            roles: ["Ski Instructor", "Tourist", "Lift Operator", "Hotel Staff", "Shop Clerk", "Ski Patrol", "Snowboarder", "Restaurant Server", "Child", "Professional Skier"]
        },
        {
            name: "Amusement Park",
            roles: ["Ride Operator", "Visitor", "Food Vendor", "Security Guard", "Character Performer", "Ticket Taker", "Maintenance Worker", "Souvenir Shop Employee", "Manager", "Lost Child"]
        },
        {
            name: "Museum",
            roles: ["Tour Guide", "Visitor", "Security Guard", "Curator", "Student", "Researcher", "Gift Shop Employee", "Museum Director", "Photographer", "Art Restorer"]
        },
        {
            name: "Theater",
            roles: ["Actor", "Director", "Audience Member", "Usher", "Stage Manager", "Costume Designer", "Lighting Technician", "Ticket Seller", "Critic", "Playwright"]
        },
        {
            name: "Circus",
            roles: ["Clown", "Acrobat", "Ringmaster", "Animal Trainer", "Audience Member", "Ticket Seller", "Trapeze Artist", "Juggler", "Vendor", "Security Guard"]
        },
        {
            name: "Office",
            roles: ["CEO", "Secretary", "Manager", "IT Specialist", "Janitor", "Intern", "HR Representative", "Accountant", "Sales Representative", "Office Gossip"]
        },
        {
            name: "Farm",
            roles: ["Farmer", "Farmhand", "Veterinarian", "Tractor Driver", "Crop Specialist", "Visitor", "Farmer's Market Vendor", "Barn Manager", "Farm Animal", "Agricultural Inspector"]
        },
        {
            name: "Prison",
            roles: ["Guard", "Prisoner", "Warden", "Visitor", "Doctor", "Lawyer", "Chaplain", "Cook", "New Inmate", "Maintenance Worker"]
        }
    ],
    
    // Advanced location pack (70+ additional locations)
    advanced: [
        {
            name: "Aquarium",
            roles: ["Marine Biologist", "Visitor", "Tour Guide", "Diver", "Gift Shop Employee", "Ticket Taker", "Fish Feeder", "Aquarium Director", "Photographer", "Maintenance Worker"]
        },
        {
            name: "Bakery",
            roles: ["Baker", "Customer", "Cashier", "Manager", "Apprentice", "Health Inspector", "Food Critic", "Delivery Person", "Cleaner", "Supplier"]
        },
        {
            name: "Bowling Alley",
            roles: ["Bowler", "Shoe Rental Clerk", "Bar Tender", "Manager", "League Member", "Mechanic", "Pro Shop Worker", "Birthday Party Guest", "First-time Bowler", "Janitor"]
        },
        {
            name: "Car Dealership",
            roles: ["Salesperson", "Customer", "Manager", "Mechanic", "Receptionist", "Finance Manager", "Test Driver", "Detailer", "Rival Dealer", "Security Guard"]
        },
        {
            name: "Cemetery",
            roles: ["Gravedigger", "Mourner", "Priest/Minister", "Funeral Director", "Groundskeeper", "Visitor", "Ghost", "Historian", "Florist", "Security Guard"]
        },
        {
            name: "Concert Hall",
            roles: ["Musician", "Audience Member", "Conductor", "Ticket Taker", "Sound Technician", "Security Guard", "Usher", "Critic", "Manager", "Merchandise Seller"]
        },
        {
            name: "Courtroom",
            roles: ["Judge", "Lawyer", "Defendant", "Witness", "Bailiff", "Court Reporter", "Juror", "Prosecutor", "Victim", "Media Reporter"]
        },
        {
            name: "Dental Office",
            roles: ["Dentist", "Patient", "Dental Hygienist", "Receptionist", "Dental Assistant", "Child Patient", "Nervous Patient", "Office Manager", "Orthodontist", "Insurance Representative"]
        },
        {
            name: "Embassy",
            roles: ["Ambassador", "Security Officer", "Visa Applicant", "Diplomat", "Secretary", "Spy", "Tourist Seeking Help", "Cultural Attaché", "Local Employee", "Translator"]
        },
        {
            name: "Fire Station",
            roles: ["Firefighter", "Fire Chief", "Dispatcher", "Paramedic", "Dalmatian Dog", "Civilian Visitor", "New Recruit", "Equipment Maintenance Worker", "Fire Inspector", "Cook"]
        },
        {
            name: "Fishing Boat",
            roles: ["Captain", "Fisherman", "Cook", "Engineer", "Weather Observer", "Deckhand", "Marine Biologist", "Coast Guard Inspector", "Tourist", "Documentary Filmmaker"]
        },
        {
            name: "Funeral Home",
            roles: ["Funeral Director", "Mourner", "Deceased (in casket)", "Priest/Minister", "Embalmer", "Family Member", "Florist", "Organist", "Grief Counselor", "Caretaker"]
        },
        {
            name: "Gas Station",
            roles: ["Cashier", "Customer", "Manager", "Mechanic", "Cleaner", "Delivery Driver", "Robber", "Coffee Machine Technician", "Trucker", "Tourist Asking for Directions"]
        },
        {
            name: "Hair Salon",
            roles: ["Hairdresser", "Client", "Receptionist", "Owner", "Manicurist", "Shampooer", "Make-up Artist", "Beauty Supply Salesperson", "Hair Color Specialist", "Waiting Customer"]
        },
        {
            name: "Haunted House",
            roles: ["Ghost", "Tour Guide", "Tourist", "Skeptic", "Medium/Psychic", "Ghost Hunter", "Owner", "Historian", "Scared Visitor", "Maintenance Worker"]
        },
        {
            name: "Ice Cream Shop",
            roles: ["Server", "Customer", "Manager", "Ice Cream Maker", "Health Inspector", "Child", "Tourist", "Food Critic", "Supplier", "Cleaner"]
        },
        {
            name: "Jungle",
            roles: ["Explorer", "Guide", "Botanist", "Photographer", "Tourist", "Animal Researcher", "Lost Person", "Indigenous Person", "Poacher", "Conservationist"]
        },
        {
            name: "Laundromat",
            roles: ["Customer", "Attendant", "Repairer", "Owner", "Homeless Person", "College Student", "Gossiper", "Lost Sock Collector", "Book Reader", "Waiting Person"]
        },
        {
            name: "Lighthouse",
            roles: ["Lighthouse Keeper", "Coast Guard Officer", "Fisher", "Maintenance Worker", "Ghost", "Photographer", "Tourist", "Shipwreck Survivor", "Bird Watcher", "Smuggler"]
        },
        {
            name: "Mall",
            roles: ["Shopper", "Security Guard", "Store Employee", "Mall Santa", "Teenager", "Food Court Worker", "Cleaner", "Store Manager", "Elderly Mall Walker", "Pickpocket"]
        },
        {
            name: "Mechanic's Workshop",
            roles: ["Mechanic", "Customer", "Apprentice", "Manager", "Parts Supplier", "Vehicle Inspector", "Receptionist", "Tow Truck Driver", "Car Wash Worker", "Insurance Adjuster"]
        },
        {
            name: "Medieval Fair",
            roles: ["Knight", "King/Queen", "Jester", "Merchant", "Peasant", "Blacksmith", "Visitor", "Archery Instructor", "Fortune Teller", "Jousting Participant"]
        },
        {
            name: "Desert Island",
            roles: ["Castaway", "Pilot", "Native Islander", "Tourist", "Scientist", "Treasure Hunter", "Survivalist", "Travel Writer", "Coast Guard", "Resort Developer"]
        },
        {
            name: "Motel",
            roles: ["Manager", "Guest", "Housekeeper", "Maintenance Worker", "Suspicious Stranger", "Traveling Salesperson", "Runaway Couple", "Night Shift Worker", "Long-term Resident", "Tourist"]
        },
        {
            name: "Movie Set",
            roles: ["Actor", "Director", "Camera Operator", "Makeup Artist", "Stunt Person", "Producer", "Costume Designer", "Extra", "Script Writer", "Set Designer"]
        },
        {
            name: "Nuclear Power Plant",
            roles: ["Nuclear Engineer", "Security Guard", "Plant Manager", "Scientist", "Safety Inspector", "Tour Guide", "Maintenance Worker", "Environmental Protestor", "Government Inspector", "Trainee"]
        },
        {
            name: "Nursing Home",
            roles: ["Nurse", "Elderly Resident", "Doctor", "Visitor", "Physical Therapist", "Receptionist", "Janitor", "Social Worker", "Cook", "Activities Coordinator"]
        },
        {
            name: "Oil Rig",
            roles: ["Driller", "Engineer", "Cook", "Manager", "Safety Officer", "Helicopter Pilot", "Radio Operator", "Maintenance Worker", "Geologist", "Diver"]
        },
        {
            name: "Optical Shop",
            roles: ["Optometrist", "Customer", "Sales Associate", "Manager", "Lens Grinder", "Frame Designer", "Receptionist", "Contact Lens Specialist", "Insurance Processor", "Repair Technician"]
        },
        {
            name: "Orchestra",
            roles: ["Conductor", "Violinist", "Cellist", "Flutist", "Trumpet Player", "Pianist", "Percussionist", "Sheet Music Page Turner", "Audience Member", "Music Critic"]
        },
        {
            name: "Pet Store",
            roles: ["Store Owner", "Customer", "Pet Groomer", "Cashier", "Dog Trainer", "Veterinarian", "Fish Tank Specialist", "Animal Shelter Volunteer", "Child", "Health Inspector"]
        },
        {
            name: "Pharmacy",
            roles: ["Pharmacist", "Customer", "Pharmacy Technician", "Security Guard", "Drug Rep", "Cashier", "Sick Person", "Manager", "Elderly Customer", "Medical Student"]
        },
        {
            name: "Photo Studio",
            roles: ["Photographer", "Model", "Makeup Artist", "Client", "Hair Stylist", "Assistant", "Prop Manager", "Lighting Technician", "Photo Editor", "Receptionist"]
        },
        {
            name: "Pirate Ship",
            roles: ["Captain", "First Mate", "Navigator", "Cook", "Lookout", "Prisoner", "Ship's Doctor", "Gunner", "Treasure Hunter", "Stowaway"]
        },
        {
            name: "Post Office",
            roles: ["Postal Worker", "Customer", "Mail Carrier", "Manager", "Package Sorter", "Stamp Collector", "Security Guard", "International Mail Specialist", "Address Verifier", "Clerk"]
        },
        {
            name: "Retirement Community",
            roles: ["Retiree", "Nurse", "Activities Director", "Manager", "Cook", "Maintenance Worker", "Family Visitor", "Gardener", "Security Guard", "New Resident"]
        },
        {
            name: "Rock Concert",
            roles: ["Rock Star", "Fan", "Security Guard", "Roadie", "Sound Engineer", "Merchandise Seller", "Groupie", "Ticket Taker", "Band Manager", "Crowd Surfer"]
        },
        {
            name: "Sauna",
            roles: ["Visitor", "Attendant", "Regular", "First-timer", "Elderly Person", "Athlete", "Towel Person", "Maintenance Worker", "Manager", "Health Enthusiast"]
        },
        {
            name: "Skyscraper",
            roles: ["Office Worker", "Window Washer", "Security Guard", "Tourist", "CEO", "Janitor", "Architect", "Maintenance Worker", "Receptionist", "Food Delivery Person"]
        },
        {
            name: "Spa",
            roles: ["Massage Therapist", "Client", "Receptionist", "Manager", "Esthetician", "Nail Technician", "Hair Stylist", "Yoga Instructor", "Sauna Attendant", "First-time Visitor"]
        },
        {
            name: "Stadium",
            roles: ["Athlete", "Fan", "Coach", "Referee", "Vendor", "Security Guard", "Commentator", "Mascot", "Ticket Taker", "Team Owner"]
        },
        {
            name: "Swimming Pool",
            roles: ["Lifeguard", "Swimmer", "Diving Instructor", "Child", "Parent", "Pool Cleaner", "Swimming Team Coach", "Sunbather", "Pool Manager", "Swimming Class Student"]
        },
        {
            name: "Taxi",
            roles: ["Driver", "Passenger", "Tourist", "Businessperson", "Drunk Passenger", "Radio Dispatcher", "New Driver", "Car Mechanic", "Inspector", "Lost Passenger"]
        },
        {
            name: "Television Studio",
            roles: ["News Anchor", "Camera Operator", "Producer", "Makeup Artist", "Guest", "Director", "Sound Technician", "Weather Person", "Grip", "Audience Member"]
        },
        {
            name: "Theme Park",
            roles: ["Ride Operator", "Visitor", "Costumed Character", "Food Vendor", "Security Guard", "Tour Guide", "Maintenance Worker", "Street Performer", "Lost Child", "Ticket Taker"]
        },
        {
            name: "Toy Store",
            roles: ["Sales Associate", "Customer", "Child", "Store Manager", "Toy Demonstrator", "Security Guard", "Cashier", "Shelf Stocker", "Toy Designer", "Parent"]
        },
        {
            name: "Video Game Tournament",
            roles: ["Professional Gamer", "Commentator", "Fan", "Tournament Organizer", "Sponsor Representative", "Streamer", "Tech Support", "Vendor", "Security", "Cosplayer"]
        },
        {
            name: "Winery",
            roles: ["Wine Maker", "Tourist", "Sommelier", "Tour Guide", "Grape Picker", "Gift Shop Employee", "Manager", "Wine Taster", "Cellar Master", "Restaurant Chef"]
        },
        {
            name: "Yoga Studio",
            roles: ["Yoga Instructor", "Student", "Receptionist", "Owner", "First-timer", "Advanced Yogi", "Janitor", "Meditation Leader", "Massage Therapist", "Personal Trainer"]
        },
        {
            name: "Moon Base",
            roles: ["Astronaut", "Scientist", "Engineer", "Doctor", "Commander", "Tourist", "Robot", "Geologist", "Communications Officer", "Alien"]
        },
        {
            name: "Luxury Yacht",
            roles: ["Captain", "Wealthy Owner", "Crew Member", "Chef", "Engineer", "Deckhand", "Celebrity Guest", "Security Officer", "Musician", "Photographer"]
        },
        {
            name: "Ancient Pyramid",
            roles: ["Archaeologist", "Tourist", "Tour Guide", "Security Guard", "Historian", "Photographer", "Tomb Raider", "Egyptologist", "Local Worker", "Mystical Entity"]
        },
        {
            name: "Candy Factory",
            roles: ["Chocolatier", "Factory Worker", "Quality Controller", "Tour Guide", "Manager", "Visitor", "Inventor", "Taste Tester", "Health Inspector", "Packaging Specialist"]
        },
        {
            name: "Comic Book Convention",
            roles: ["Cosplayer", "Fan", "Comic Book Artist", "Celebrity Guest", "Vendor", "Security Guard", "Photographer", "Panelist", "Autograph Collector", "Convention Organizer"]
        },
        {
            name: "Desert Oasis",
            roles: ["Nomad", "Tourist", "Guide", "Archaeologist", "Merchant", "Camel Handler", "Photographer", "Water Provider", "Local Resident", "Lost Traveler"]
        },
        {
            name: "Fairy Tale Castle",
            roles: ["Prince/Princess", "King/Queen", "Knight", "Jester", "Wizard/Witch", "Dragon", "Cook", "Servant", "Guard", "Visiting Royalty"]
        },
        {
            name: "Gaming Convention",
            roles: ["Game Developer", "Cosplayer", "Streamer", "Fan", "Vendor", "Tournament Player", "Journalist", "Security", "Booth Worker", "Industry Executive"]
        },
        {
            name: "Hot Air Balloon",
            roles: ["Pilot", "Tourist", "Photographer", "Tour Guide", "Engineer", "Weather Specialist", "Radio Operator", "Nervous Passenger", "Romantic Couple", "Journalist"]
        },
        {
            name: "Ice Hotel",
            roles: ["Ice Sculptor", "Guest", "Receptionist", "Tour Guide", "Chef", "Photographer", "Maintenance Worker", "Adventure Guide", "Manager", "First-time Visitor"]
        },
        {
            name: "Japanese Garden",
            roles: ["Gardener", "Visitor", "Tour Guide", "Monk", "Photographer", "Artist", "Tea Ceremony Host", "Fish Keeper", "Bonsai Master", "Student of Japanese Culture"]
        },
        {
            name: "Knight's Tournament",
            roles: ["Knight", "King/Queen", "Squire", "Blacksmith", "Jester", "Noble", "Peasant", "Merchant", "Herald", "Princess/Prince"]
        },
        {
            name: "Laser Tag Arena",
            roles: ["Player", "Referee", "Manager", "Birthday Child", "Parent", "Professional Player", "New Player", "Technician", "Team Captain", "Snack Bar Worker"]
        },
        {
            name: "Mountain Climbing Expedition",
            roles: ["Guide", "Experienced Climber", "Novice Climber", "Doctor", "Photographer", "Cook", "Sherpa", "Scientist", "Equipment Specialist", "Rescue Team Member"]
        },
        {
            name: "Newsroom",
            roles: ["News Anchor", "Reporter", "Producer", "Camera Operator", "Editor", "Meteorologist", "Sports Announcer", "Technician", "Interviewee", "Intern"]
        },
        {
            name: "Opera House",
            roles: ["Opera Singer", "Conductor", "Musician", "Audience Member", "Usher", "Director", "Costume Designer", "Ticket Seller", "Critic", "Wealthy Patron"]
        },
        {
            name: "Petting Zoo",
            roles: ["Animal Caretaker", "Child", "Parent", "School Teacher", "Veterinarian", "Ticket Seller", "Gift Shop Employee", "Photographer", "Pony Ride Operator", "Baby Animal"]
        },
        {
            name: "Quarantine Facility",
            roles: ["Doctor", "Patient", "Nurse", "Scientist", "Security Guard", "Family Member Outside", "Cleaner", "Psychologist", "Government Official", "New Arrival"]
        },
        {
            name: "Renaissance Fair",
            roles: ["Knight", "Queen/King", "Peasant", "Merchant", "Jester", "Blacksmith", "Visitor", "Musician", "Fortune Teller", "Jousting Competitor"]
        },
        {
            name: "Salvage Yard",
            roles: ["Owner", "Customer", "Mechanic", "Recycling Specialist", "Appraiser", "Scrap Metal Dealer", "Car Enthusiast", "Treasure Hunter", "Artist Looking for Materials", "Inspector"]
        },
        {
            name: "Tattoo Parlor",
            roles: ["Tattoo Artist", "Client", "Receptionist", "Apprentice", "Health Inspector", "First-timer", "Body Piercer", "Regular Customer", "Tattoo Designer", "Tourist"]
        },
        {
            name: "Underground Bunker",
            roles: ["Military Officer", "Scientist", "Engineer", "Security Guard", "Government Official", "Doctor", "Communications Specialist", "Cook", "Maintenance Worker", "New Arrival"]
        },
        {
            name: "Vampire's Castle",
            roles: ["Vampire", "Human Visitor", "Vampire Hunter", "Servant", "Ghost", "Werewolf", "Witch/Wizard", "Prisoner", "Bat", "Skeptic"]
        },
        {
            name: "Wildlife Sanctuary",
            roles: ["Ranger", "Veterinarian", "Volunteer", "Tourist", "Biologist", "Photographer", "Animal Rehabilitator", "Guide", "Poacher", "Wealthy Donor"]
        }
    ],
    
    // Suggested questions for gameplay
    suggestedQuestions: [
        "How long have you been in this location?",
        "What's your favorite part about being here?",
        "What brought you to this place today?",
        "Who do you report to at this location?",
        "What would you change about this place if you could?",
        "How do you feel about the people around you?",
        "What's the typical dress code here?",
        "What time of day is busiest here?",
        "What's the most dangerous thing that can happen here?",
        "What skills are most important in this place?",
        "Do you enjoy your time here? Why or why not?",
        "What tools or equipment do you regularly use here?",
        "Who visits this place most frequently?",
        "Have you met anyone famous in this location?",
        "What's the weather like in this place?",
        "How noisy is it here usually?",
        "What smells would you typically encounter here?",
        "What's the most valuable thing in this location?",
        "How would you handle an emergency in this place?",
        "What kind of food or drinks are available here?",
        "Did you need special training to be here?",
        "How often do you come to this place?",
        "What's the dress code here?",
        "Is this place usually this crowded?",
        "What kind of music would you hear in this place?",
        "What's the most unusual thing you've seen here?",
        "Who would you call if there was a problem here?",
        "What activities happen regularly in this place?",
        "How would you describe the atmosphere here?",
        "What's your role in the hierarchy of this place?",
        "What's the best time to visit this location?",
        "How many people work at this location?",
        "What's the most common complaint about this place?",
        "Do children usually come to this place?",
        "How would you get to this location?",
        "What's something I shouldn't miss while I'm here?",
        "Is there a gift shop here?",
        "How early do you need to arrive here?",
        "Are reservations required for this place?",
        "Is this place accessible to people with disabilities?",
        "What's one rule everyone must follow here?",
        "Would this location exist 100 years ago?",
        "Do you have to pay to enter this place?",
        "Is there WiFi available here?",
        "What languages might you hear spoken here?",
        "How has technology changed this place?",
        "Who would you not expect to see in this location?",
        "What would be considered inappropriate behavior here?",
        "How would you evacuate this place quickly?",
        "Are there any secret areas in this location?"
    ]
};

// Combine all locations for "All Locations" option
gameData.all = [...gameData.standard, ...gameData.advanced]; 