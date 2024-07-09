/**
 * Placeholder data for the application to be used for seeding the database initially
 */

/**
 * Notes = comments on tickets
 */
const notes = [
  {
    note: "note1",
  },
];

/**
 * Tickets = requests from customers
 */
const tickets = [
  {
    reason: "reason1",
    year: 2022,
    make: "Toyota",
    model: "Corolla",
    engine: "1.8L",
    submodel: "LE",
    notes: [notes[0], notes[1]],
    status: "open",
    date: "2023-09-10",
  },
  {
    reason: "reason2",
    year: 2021,
    make: "Honda",
    model: "Civic",
    engine: "2.0L",
    submodel: "Sport",
    notes: [notes[2], notes[3]],
    status: "closed",
    date: "2023-08-05",
  },
];
/**
 * Users = Employees working in the organization
 */
export const users = [
  {
    name: "John",
    admin: false,
    password: "123456",
    email: "john@gmail.com",
  },
];

/**
 * Products
 */
export const products = [
  {
    linecode: "ABC",
    partnumber: "123",
  },
];
/**
 * Customers
 */

export const customers = [
  {
    customer: "SOUTHERN AUTO SUPPLY",
  },
  {
    customer: "PAID OUT ACCOUNT",
  },
  {
    customer: "FARRIS FARM",
  },
  {
    customer: "84 LUMBER #0928",
  },
  {
    customer: "8Z TIMBER PRODUCTS",
  },
  {
    customer: "A & D WELL LLC",
  },
  {
    customer: "A & K AUTO SERVICE",
  },
  {
    customer: "A & T CAR AND TRUCK REPAIR",
  },
  {
    customer: "ALBERT WENGERD",
  },
  {
    customer: "ACCIDENT V.F.D.",
  },
  {
    customer: "AUTOLAND CDJR",
  },
  {
    customer: "ACE QUICK LUBE",
  },
  {
    customer: "TEST ACCOUNT",
  },
  {
    customer: "MR JEFF ACKERMAN",
  },
  {
    customer: "ACTION HARDWARE AND FASTENERS",
  },
  {
    customer: "ADAM CONSTRUCTION",
  },
  {
    customer: "ADAMS GARAGE",
  },
  {
    customer: "ADAM'S TRUCKING",
  },
  {
    customer: "ADVANCE AUTO PARTS 5882",
  },
  {
    customer: "ADVANCE AUTO PARTS 7210",
  },
  {
    customer: "ADVANCE AUTO PARTS 7500",
  },
  {
    customer: "ADVANCE AUTO PARTS 6216",
  },
  {
    customer: "AEI BUILDERS",
  },
  {
    customer: "ADVANCE AUTO PARTS 7260",
  },
  {
    customer: "ADVANCE AUTO PARTS 5593",
  },
  {
    customer: "ADVANCE AUTO PARTS 6099",
  },
  {
    customer: "ADVANCE AUTO PARTS 7180",
  },
  {
    customer: "ADVANCE AUTO PARTS 7200",
  },
  {
    customer: "ADVANCE AUTO PARTS 7310",
  },
  {
    customer: "ADVANCE AUTO PARTS 7400",
  },
  {
    customer: "ADVANCE AUTO PARTS 7440",
  },
  {
    customer: "ADVANCE AUTO PARTS 7490",
  },
  {
    customer: "ADVANCE AUTO PARTS 7559",
  },
  {
    customer: "ADVANCE AUTO PARTS 7560",
  },
  {
    customer: "ADVANCE AUTO PARTS 7945",
  },
  {
    customer: "ADVANCE AUTO PARTS 8915",
  },
  {
    customer: "ADVANCE AUTO PARTS 7724",
  },
  {
    customer: "ADVANCE AUTO PARTS 7520",
  },
  {
    customer: "ADVANCE AUTO PARTS #6098",
  },
  {
    customer: "AG-FUTURE INC.",
  },
  {
    customer: "MARY ANN MAZE",
  },
  {
    customer: "MR GEORGE AHERN",
  },
  {
    customer: "ALDEN'S BOAT REPAIR",
  },
  {
    customer: "ALI GHAN HIRAGE",
  },
  {
    customer: "ALL CONSTRUCTION",
  },
  {
    customer: "ALL SEASON CONTRACTING",
  },
  {
    customer: "NEW ALLEGHENY INC.",
  },
  {
    customer: "AMTOWER AUTO SUPPLY INC.",
  },
  {
    customer: "AMTOWERS HILLTOP COLLISION CTR",
  },
  {
    customer: "APPALACHIAN CENTER",
  },
  {
    customer: "APPALACHIAN IRON",
  },
  {
    customer: "APPALACHIAN RAILWAY SERVICES",
  },
  {
    customer: "APPALACHIAN SERVICES LLC",
  },
  {
    customer: "APPALACHIAN WOOD PELLETS",
  },
  {
    customer: "ALLEGHENY POWER",
  },
  {
    customer: "ALLEGHANY INVESTMENTS LLC",
  },
  {
    customer: "ALL IN PLUMBING",
  },
  {
    customer: "ALLEGHENY WELDING",
  },
  {
    customer: "ALLEGHANY WELL DRILLING",
  },
  {
    customer: "ALLEGANY WOOD PRODUCTS MILL #2",
  },
  {
    customer: "ALLEGHENY WOOD PRODUCTS MILL 3",
  },
  {
    customer: "ALLEGHENY WOOD PROD. MILL # 5",
  },
  {
    customer: "ALPINE LAKE PUBLIC UTILITIES",
  },
  {
    customer: "ALPINE LAKE RESORT",
  },
  {
    customer: "ALCORP",
  },
  {
    customer: "AMA EXCAVATING",
  },
  {
    customer: "RAPID REPAIR",
  },
  {
    customer: "ARISTEO CONSTRUCTION CO.",
  },
  {
    customer: "ARONHOLT & SONS",
  },
  {
    customer: "DONALD ARNETT",
  },
  {
    customer: "CATHEDRAL EQUIPMENT",
  },
  {
    customer: "ARNOLD BROTHERS EQUIPMENT CORP",
  },
  {
    customer: "ARNOLD TRUCKING",
  },
  {
    customer: "MR. BARRY ARNOLD",
  },
  {
    customer: "F.T. ARNOLD & SONS",
  },
  {
    customer: "FRANK ARNOLD CONTRACTORS INC.",
  },
  {
    customer: "TODD ARNOLD CONSTRUCTION",
  },
  {
    customer: "ASHBY TRUCK REPAIR",
  },
  {
    customer: "ARROWHEAD MACHINE",
  },
  {
    customer: "JOE ASHBY & SONS",
  },
  {
    customer: "ASHBY FIRE EQUIPMENT",
  },
  {
    customer: "ASPLUNDH TREE EXPERTS",
  },
  {
    customer: "ASHBY'S TREE FARM",
  },
  {
    customer: "AURORA VFD",
  },
  {
    customer: "AUTOMOTIVE MACHINE INC.",
  },
  {
    customer: "AUTO EXPRESS",
  },
  {
    customer: "AUTO SHOP",
  },
  {
    customer: "THE AUTO STATION",
  },
  {
    customer: "AXALTA COATING SYSTEMS LLC",
  },
  {
    customer: "BB CUSTOM AIRBRUSH DESIGNS",
  },
  {
    customer: "B & G LUMBER",
  },
  {
    customer: "B & R DISTRIBUTING CO.",
  },
  {
    customer: "BELT PAVING INC.",
  },
  {
    customer: "JAMES P. BELOWSKY",
  },
  {
    customer: "BAKER'S GARAGE",
  },
  {
    customer: "BAYARD V.F.D.",
  },
  {
    customer: "ROLLING HILLS FARM",
  },
  {
    customer: "BACHTEL ENTERPRISE",
  },
  {
    customer: "KENNETH BACHTEL MT VIEW FARMS",
  },
  {
    customer: "BACKBONE MT ON-OFF ROAD",
  },
  {
    customer: "BACKBONE MTN. PERFORMANCE",
  },
  {
    customer: "COUNTRYSIDE LAWN EQUIPMENT",
  },
  {
    customer: "O.C. CLUSS",
  },
  {
    customer: "BEACHY WELDING",
  },
  {
    customer: "BEACON RESOURCES INC",
  },
  {
    customer: "MICKEY BEEMAN",
  },
  {
    customer: "BECKLEY DRILLING",
  },
  {
    customer: "DELBIE BECKMAN",
  },
  {
    customer: "DIANE BECKMAN",
  },
  {
    customer: "KEITH BECKMAN",
  },
  {
    customer: "KEVIN BECKMAN",
  },
  {
    customer: "BECKMAN LUMBER",
  },
  {
    customer: "BECKMAN TRUCKING",
  },
  {
    customer: "BECKMAN'S VARIETY STORE",
  },
  {
    customer: "BEITZEL EXCAVATING LLC",
  },
  {
    customer: "BEITZEL CORPORATION",
  },
  {
    customer: "BENNETTS TRUCK PARTS",
  },
  {
    customer: 'RYAN "BIG MONET" BENTZ',
  },
  {
    customer: "KEVIN BERNARD",
  },
  {
    customer: "DEEP CREEK METALS",
  },
  {
    customer: "BILLS MARINE SERVICE",
  },
  {
    customer: "BILLY BENDER CHEVROLET",
  },
  {
    customer: "ALL SEASONS MAINTENANCE",
  },
  {
    customer: "BLG BROTHERS LLC.",
  },
  {
    customer: "JESSICA BITTINGER",
  },
  {
    customer: "BLACKWATER FALLS STATE PARK",
  },
  {
    customer: "BLACKWATER MOTOR COMPANY",
  },
  {
    customer: "TERRY BLAMBLE EXCAVATING",
  },
  {
    customer: "BLOOMINGTON VOL. FIRE DEPT",
  },
  {
    customer: "BLUE RIBBON LUMBER",
  },
  {
    customer: "BLUE RIBBON PALLET",
  },
  {
    customer: "BLUMS AUTO REPAIR",
  },
  {
    customer: "BOB'S AUTO REPAIR",
  },
  {
    customer: "BOB'S GARAGE & AUTO SALES",
  },
  {
    customer: "BOBS GINSENG",
  },
  {
    customer: "DAN BOONE",
  },
  {
    customer: "LEROY BOLDING",
  },
  {
    customer: "LEROY'S GARAGE AND TRUCKING LLC",
  },
  {
    customer: "JEREMY S. BOLYARD CONSTRUCTION",
  },
  {
    customer: "BORDERLINE SALES & SERVICE",
  },
  {
    customer: "BOSLEY CONSTRUCTION",
  },
  {
    customer: "DIGGERS CONSTRUCTION",
  },
  {
    customer: "BOYCE AUTO ELECTRIC",
  },
  {
    customer: "MR. VINCENT E. BOWMAN",
  },
  {
    customer: "BRAD'S AUTO REPAIR",
  },
  {
    customer: "BRENNEMAN WELL DRILLING INC.",
  },
  {
    customer: "BROADWATER REPAIR",
  },
  {
    customer: "BROADWATER TOWING",
  },
  {
    customer: "BROOKSIDE TRUCKING",
  },
  {
    customer: "MR DONNIE G. BROWN",
  },
  {
    customer: "MR. GARY D. BROWN",
  },
  {
    customer: "MR. ROGER L. BROWN SR.",
  },
  {
    customer: "BRODAK'S DISCOUNT LIQOURS",
  },
  {
    customer: "BROWNINGS AUTO SALES",
  },
  {
    customer: "OAKLAND SHOP N SAVE",
  },
  {
    customer: "BRYAN'S AUTOBODY",
  },
  {
    customer: "BUDDY'S USED CARS LLC",
  },
  {
    customer: "BURNS AUTO CARE",
  },
  {
    customer: "BURNS INDUSTRIAL EQUIPMENT",
  },
  {
    customer: "LARRY BURDICK",
  },
  {
    customer: "ART BUTLER AUTO SALES",
  },
  {
    customer: "BUTLER GENERAL HAULING",
  },
  {
    customer: "BUTLER PAINTING",
  },
  {
    customer: "MR. BILL BUTLER",
  },
  {
    customer: "BUTTS GARAGE",
  },
  {
    customer: "C & A HAULING",
  },
  {
    customer: "C & J HARTSELL TRUCKING LLC",
  },
  {
    customer: "C M USED CARS",
  },
  {
    customer: "C.N. METALS",
  },
  {
    customer: "C & R TREES",
  },
  {
    customer: "CRB TIMBER",
  },
  {
    customer: "CMC ENTERPRISES",
  },
  {
    customer: "CMC",
  },
  {
    customer: "CSX EQUIPMENT",
  },
  {
    customer: "CSXT JUSTIN BISHOP",
  },
  {
    customer: "CSXT JOSH HAGAN",
  },
  {
    customer: "SUDDENLINK COMMUNICATIONS",
  },
  {
    customer: "MR CECIL A. CALCAMP JR.",
  },
  {
    customer: "BRYAN CALHOUN",
  },
  {
    customer: "CALLIS' AUTO DETAILING",
  },
  {
    customer: "CALVARY LOGGING LLC",
  },
  {
    customer: "CARDINAL HILL WOODWORKING",
  },
  {
    customer: "CANEY VALLEY MARINE",
  },
  {
    customer: "CARQUEST AUTO PARTS",
  },
  {
    customer: "CARROLL HARVEY CONTRACTING",
  },
  {
    customer: "CARL BELT INC.",
  },
  {
    customer: "DOUG THAYER",
  },
  {
    customer: "RICK CARVELL",
  },
  {
    customer: "BILL CASTEEL",
  },
  {
    customer: "CHAPMAN GARAGE",
  },
  {
    customer: "CHAPMAN HAULING",
  },
  {
    customer: "CHAPMAN TIMBER",
  },
  {
    customer: "CHASE ASHBY",
  },
  {
    customer: "CHASE TRUCKING LLC",
  },
  {
    customer: "MGM RENTALS",
  },
  {
    customer: "CHERRY CREEK ENTERPRISES",
  },
  {
    customer: "CHESTNUT RIDGE NURSERY",
  },
  {
    customer: "CHRISTIAN CAR CARE",
  },
  {
    customer: "CLARK'S EXXON SERVICE CENTER",
  },
  {
    customer: "CITY OF KINGWOOD",
  },
  {
    customer: "CITY OF THOMAS",
  },
  {
    customer: "CLASSIE CAR COMPANY",
  },
  {
    customer: "CHLOMA FARMS LLC",
  },
  {
    customer: "COASTAL LUMBER COMPANY",
  },
  {
    customer: "CLAY CAM LOGGING LLC",
  },
  {
    customer: "COLUMBIA GAS & TRANSMISSION",
  },
  {
    customer: "COMMUNITY ACTION WEATHERIZATIO",
  },
  {
    customer: "COMPLETE TRUCKING & TRANSPORT LL",
  },
  {
    customer: "COOK'S AUTO BODY",
  },
  {
    customer: "THE COMPUTER SHOP",
  },
  {
    customer: "CORKS CARS",
  },
  {
    customer: "COSNER LOGGING",
  },
  {
    customer: "COSNER TRUCKING",
  },
  {
    customer: "COUNTRY ROADS TRANSPORT",
  },
  {
    customer: "COUNTRY SERVICES CONTACTING LLC",
  },
  {
    customer: "CRANESVILLE QUARRY - KEYSTONE",
  },
  {
    customer: "CRELLIN ASSEMBLY OF GOD",
  },
  {
    customer: "CRIMSON SHAMROCK LLC",
  },
  {
    customer: "CUMBERLAND CONCRETE INC.",
  },
  {
    customer: "MR KENN R. CUMMINGS",
  },
  {
    customer: "CHARLES CUSTER",
  },
  {
    customer: "MR. LEO CUSTER",
  },
  {
    customer: "MR LEONARD CUSTER",
  },
  {
    customer: "CUSTOM TOUCH",
  },
  {
    customer: "DARVIN GANK",
  },
  {
    customer: "D & D MOTORS",
  },
  {
    customer: "D & B AUTO",
  },
  {
    customer: "D & B WELDING & FABRICATION",
  },
  {
    customer: "D & E AUTO SALES INC",
  },
  {
    customer: "D & E BODY SHOP",
  },
  {
    customer: "D & E TRANSPORT LLC",
  },
  {
    customer: "D & J TIMBER",
  },
  {
    customer: "D & M SERVICES",
  },
  {
    customer: "D & M STONE",
  },
  {
    customer: "D & R DISTRIBUTORS",
  },
  {
    customer: "D & S LOGGING",
  },
  {
    customer: "D & S TRUCKING CO.",
  },
  {
    customer: "DALE'S BODY SHOP",
  },
  {
    customer: "DAN'S MARINE SERVICE INC",
  },
  {
    customer: "DAVE'S BODY SHOP",
  },
  {
    customer: "DAVID'S AUTOMOTIVE REPAIR",
  },
  {
    customer: "MR. DOUG DAVIS",
  },
  {
    customer: "DAWSON GARAGE",
  },
  {
    customer: "DYLAN DAWSON",
  },
  {
    customer: "DCL HVAC SOLUTIONS",
  },
  {
    customer: "DEEP CREEK LANES",
  },
  {
    customer: "DEEP CREEK MARINA",
  },
  {
    customer: "DEEP CREEK METAL SALES",
  },
  {
    customer: "DEEP CREEK MOBIL LUBE",
  },
  {
    customer: "DEEP CREEK TRUCKING COMPANY",
  },
  {
    customer: "DEEP CREEK VOL. FIRE CO.",
  },
  {
    customer: "DEER PARK AUTO BODY",
  },
  {
    customer: "MARTIN AUTO PARTS",
  },
  {
    customer: "DEER PARK COMMUNITY V.F.D. INC",
  },
  {
    customer: "DEER PARK SPRING WATER",
  },
  {
    customer: "LITTLE JOHN BLACKSMITH",
  },
  {
    customer: "DEERWOOD SERVICE CENTER",
  },
  {
    customer: "MR. JOHN DELANEY",
  },
  {
    customer: "DELANO'S INC.",
  },
  {
    customer: "DENROCK EXCAVATING",
  },
  {
    customer: "D.N.R. FOREST & PARK",
  },
  {
    customer: "BETH FRIEND",
  },
  {
    customer: "DIEHL'S FORD SALES",
  },
  {
    customer: "MR. DAVID W. DEWITT",
  },
  {
    customer: "DIDIWICK LOGGING",
  },
  {
    customer: "DILLEY & ASSO.",
  },
  {
    customer: "MR. EUGENE DILLEY",
  },
  {
    customer: "STEVE DILLEY",
  },
  {
    customer: "DIRT WORKS",
  },
  {
    customer: "DISCOUNT CABINETS & MORE",
  },
  {
    customer: "DIXON AUTOMOTIVE",
  },
  {
    customer: "ARON DOLLY",
  },
  {
    customer: "TOMMY DOLLY",
  },
  {
    customer: "DEER PARK SIGNS",
  },
  {
    customer: "DOUG'S AUTO & TRUCK REPAIR",
  },
  {
    customer: "DOUBLE M RECYCLING",
  },
  {
    customer: "DOUBLE R RANCH",
  },
  {
    customer: "DRAGON TIMBER",
  },
  {
    customer: "P&M SERVICES",
  },
  {
    customer: "PAULA DOVE",
  },
  {
    customer: "MR. CHARLIE DRENNAN III",
  },
  {
    customer: "WATERS RUN ENTERPRISE",
  },
  {
    customer: "AXALTA PAINT",
  },
  {
    customer: "DURST FARMS",
  },
  {
    customer: "DURST PLUMBING & HEATING",
  },
  {
    customer: "E & S GENERAL CONTRACTING",
  },
  {
    customer: "PAUL EVERLY",
  },
  {
    customer: "E-Z EXCAVATING LLC",
  },
  {
    customer: "EASTERN HORIZON",
  },
  {
    customer: "EAST PRESTON TIRE",
  },
  {
    customer: "GEORGE C. EDWARDS",
  },
  {
    customer: "EGLON FARM SERVICE INC.",
  },
  {
    customer: "EISENTROUTS USED CARS",
  },
  {
    customer: "ELAINE'S AUTO DETAILING",
  },
  {
    customer: "THE END ZONE",
  },
  {
    customer: "ENNSTONE INC T/A DEEP CREEK",
  },
  {
    customer: "DALE E. EVANS SCHOOL BUS ACCOU",
  },
  {
    customer: "EVANS LOGGING",
  },
  {
    customer: "ERVIN'S TREE REMOVAL",
  },
  {
    customer: "EVANS STORE",
  },
  {
    customer: "EVANS TRUCKING LLC",
  },
  {
    customer: "EVERSON RESOURCES",
  },
  {
    customer: "EXCAVATING BY DAN BAKER",
  },
  {
    customer: "EXPLOSIVES EXPERTS INC",
  },
  {
    customer: "FAIRFAX MATERIALS",
  },
  {
    customer: "FAIRFAX MACHINE & WELDING",
  },
  {
    customer: "FAST FREDDY'S LLC",
  },
  {
    customer: "FAITH EVANGELICAL FREE CHURCH",
  },
  {
    customer: "FEATHER TRUCKING",
  },
  {
    customer: "MR. PHILLIP FERGUSON JR",
  },
  {
    customer: "MR. PHILLIP R. FIKE",
  },
  {
    customer: "FIKE NURSERY",
  },
  {
    customer: "FIKE TRUCKING",
  },
  {
    customer: "J. FINT CONSTRUCTION",
  },
  {
    customer: "FIRST UNITED NATIONAL BANK AND",
  },
  {
    customer: "FISHER AUTO PARTS",
  },
  {
    customer: "TOM FITZWATER",
  },
  {
    customer: "FREDERICK L. FITZWATER BUSING",
  },
  {
    customer: "FITZWATER FURNITURE",
  },
  {
    customer: "FLANCO",
  },
  {
    customer: "FLEET MAINTENANCE SERVICE LLC",
  },
  {
    customer: "FLYING SCOT INC.",
  },
  {
    customer: "E R FOGLEPOLE TRUCK CO.",
  },
  {
    customer: "FOUR GENERATIONS LOGGING",
  },
  {
    customer: "FOUR SEASONS REAL ESTATE",
  },
  {
    customer: "KOPE ENTERPRISES",
  },
  {
    customer: "DWAYNE FRATZ TRUCKING",
  },
  {
    customer: "ONE STOP TOWING AND TRANSPORT LL",
  },
  {
    customer: "ALEX FRIEND",
  },
  {
    customer: "MR. CURTIS R. FRIEND",
  },
  {
    customer: "MR. DAVID FRIEND",
  },
  {
    customer: "MR. JERRY B. FRIEND",
  },
  {
    customer: "FRIENDSVILLE AMMOCO",
  },
  {
    customer: "MATTHEW FRITZ",
  },
  {
    customer: "FROSTBURG CARQUEST",
  },
  {
    customer: "RICHARD FRIEND FARM",
  },
  {
    customer: "G & C CONSTRUCTION",
  },
  {
    customer: "G & G AUTO",
  },
  {
    customer: "G & G EXCAVATING",
  },
  {
    customer: "JERRY FRITZ",
  },
  {
    customer: "G & J LOGGING",
  },
  {
    customer: "GMAS",
  },
  {
    customer: "GMS MINE REPAIR & MAINTENCE",
  },
  {
    customer: "G & S COAL CO.",
  },
  {
    customer: "G.W. CONTRACTING",
  },
  {
    customer: "CRISTOPHER GANK",
  },
  {
    customer: "JEFF GANK",
  },
  {
    customer: "GARRETT AUTOMOTIVE CO.",
  },
  {
    customer: "G.C. COMM. ACTION HOUSING DEPT",
  },
  {
    customer: "GARRETT COUNTY HOME HEALTH",
  },
  {
    customer: "GARRETT COMMUNITY COLLEGE",
  },
  {
    customer: "GARRETT COUNTY BOARD OF EDUCAT",
  },
  {
    customer: "GARRETT CO BD OF ED FNS",
  },
  {
    customer: "GARRETT CO FACILITIES & MAN",
  },
  {
    customer: "GARRETT COUNTY HEALTH DEPT.",
  },
  {
    customer: "GARRETT CO. MEMORIAL HOSPITAL",
  },
  {
    customer: "GARRETT COUNTY OFFICE OF SOLID",
  },
  {
    customer: "GARRETT COUNTY ROADS",
  },
  {
    customer: "G.C. SANITARY DISTRICT",
  },
  {
    customer: "GARRETT COUNTY SHERIFFS DEPRAR",
  },
  {
    customer: "GARRETT ELECTRIC",
  },
  {
    customer: "GARRETT EQUIPMENT RENTALS LLC",
  },
  {
    customer: "GARRETT MEDICAL TRANSPORT",
  },
  {
    customer: "GARRETT MINE SUPPLY",
  },
  {
    customer: "GARRETT TRANSIT SERVICE",
  },
  {
    customer: "GARY'S AUTO SALES",
  },
  {
    customer: "GARY'S GARAGE",
  },
  {
    customer: "GENE'S REPAIR SHOP",
  },
  {
    customer: "THE GEORGE'S CREEK CO",
  },
  {
    customer: "GETZ'S MART",
  },
  {
    customer: "GIB'S MECHANICAL",
  },
  {
    customer: "GINGERICH CONCRETE CONSTRUCTIO",
  },
  {
    customer: "GLADE VIEW DAIRY FARM",
  },
  {
    customer: "GLASS UNLIMITED",
  },
  {
    customer: "GLOTFELTY ENTERPRISES",
  },
  {
    customer: "JOHNATHAN JAMES",
  },
  {
    customer: "GLOTFELTY LUMBER",
  },
  {
    customer: "MR. MIKE GLOTFELTY",
  },
  {
    customer: "JAMES GLOTFELTY",
  },
  {
    customer: "GNEGY'S PAINTING",
  },
  {
    customer: "MARK GOFF",
  },
  {
    customer: "GOLDEN TRIANGLE CONST CO INC",
  },
  {
    customer: "JIM GORDON",
  },
  {
    customer: "GORMAN V.F.D. INC.",
  },
  {
    customer: "GORMANIA GARAGE",
  },
  {
    customer: "GRAND CENTRAL STATION",
  },
  {
    customer: "GRANT COUNTY MULCH INC",
  },
  {
    customer: "GRANTSVILLE LIQUORS",
  },
  {
    customer: "GRANTSVILLE MARKET",
  },
  {
    customer: "GRANTSVILLE STATION",
  },
  {
    customer: "GRANTSVILLE TRUCK & TRAILER",
  },
  {
    customer: "GREENBRIER ENTERPRISE INC",
  },
  {
    customer: "GREEN THINGS LLC.",
  },
  {
    customer: "GREENS AUTO REPAIR",
  },
  {
    customer: "KELBY GREEN",
  },
  {
    customer: "BILL GREEN",
  },
  {
    customer: "GRIMM LUMBER INC.",
  },
  {
    customer: "JOHN'S AUTO REPAIR",
  },
  {
    customer: "JOHN GROVES REPAIR AND BODY SHOP",
  },
  {
    customer: "QUITIN L GUTHIE JR",
  },
  {
    customer: "RED GUTHRIE",
  },
  {
    customer: "THE REPUBLICAN",
  },
  {
    customer: "H & A TRUCKING",
  },
  {
    customer: "H & H TRUCKING & AUTO BODY",
  },
  {
    customer: "HARD TIMES LOGGING",
  },
  {
    customer: "HAMILTON FARMS",
  },
  {
    customer: "HANLIN PERFORMANCE",
  },
  {
    customer: "NORMAN HANLINE EXCAVATING",
  },
  {
    customer: "RAY HANLINE EXCAVATING",
  },
  {
    customer: "HARDESTY EXCAVATING",
  },
  {
    customer: "JOE'S SERVICES",
  },
  {
    customer: "BBT",
  },
  {
    customer: "HARDESTY LOGGING",
  },
  {
    customer: "HARTSELL LOGGING INC",
  },
  {
    customer: "HARRIS POOLS",
  },
  {
    customer: "WADE HARSH FARMS",
  },
  {
    customer: "LYVONNE HARSH FARM",
  },
  {
    customer: "HARVEY TRUCKING",
  },
  {
    customer: "JOHN HARVEY",
  },
  {
    customer: "PAUL D. HARVEY",
  },
  {
    customer: "HAUSER TRUCKING",
  },
  {
    customer: "HAWK BROS. LOGGING",
  },
  {
    customer: "HAWKEYE SERVICES",
  },
  {
    customer: "HEETER CONSTRUCTION LLC",
  },
  {
    customer: "MR. GEORGE HEBB",
  },
  {
    customer: "JEFFERY HEBB",
  },
  {
    customer: "STUART THAYER",
  },
  {
    customer: "THERESA HELBIG-MILLER",
  },
  {
    customer: "HELBIG'S GARAGE",
  },
  {
    customer: "HELBIG'S RT 560 CARPET SHOPPE",
  },
  {
    customer: "HELBIG'S REPAIR SHOP",
  },
  {
    customer: "HERITAGE STONE",
  },
  {
    customer: "HERITAGE COAL AND NATURAL RESOUR",
  },
  {
    customer: "HERRINGTON MANOR STATE PARK",
  },
  {
    customer: "HERSHMAN AUTO SALES",
  },
  {
    customer: "HERSHMAN CONSTRUCTION LLC",
  },
  {
    customer: "HI-WAY PAVING",
  },
  {
    customer: "HI-WAY TRANSPORT LLC",
  },
  {
    customer: "HICKORY STABLES",
  },
  {
    customer: "HIGH MT. ON/OFF ROAD",
  },
  {
    customer: "HINEBAUGH'S REPAIR",
  },
  {
    customer: "HOLLAND BROS. LANDSCAPING",
  },
  {
    customer: "HOLLAND ELECTRIC",
  },
  {
    customer: "HOLLAND NURSERY",
  },
  {
    customer: "HOLLAND TRUCKING LLC",
  },
  {
    customer: "HOLLADA'S GARAGE",
  },
  {
    customer: "HOP'S SHOP",
  },
  {
    customer: "HOPEMONT AUTO",
  },
  {
    customer: "HOPEMONT HOSPITAL",
  },
  {
    customer: "HENRY HOSTUTLER",
  },
  {
    customer: "HUMBERSON EQUIPMENT & BUILDING",
  },
  {
    customer: "HUTTON AUTO",
  },
  {
    customer: "HUTZEL TRUCKING",
  },
  {
    customer: "INDUSTRIAL SERVICE CONTRACTORS",
  },
  {
    customer: "IRON HORSE LOGGING",
  },
  {
    customer: "IRVING'S UPHOLSTERY & FIRE ARM",
  },
  {
    customer: "JDK LOGGING LLC",
  },
  {
    customer: "JSJ TRUCKING",
  },
  {
    customer: "J & A AUTO REPAIR",
  },
  {
    customer: "J & B LOGGING INC.",
  },
  {
    customer: "J & J CHOICE",
  },
  {
    customer: "J & L BODY SHOP",
  },
  {
    customer: "III C'S CONSTRUCTION",
  },
  {
    customer: "J & L REPAIR SHOP",
  },
  {
    customer: "J & R TEXACO",
  },
  {
    customer: "J.B.E.A. LOGGING LLC",
  },
  {
    customer: "JD AUTOMOTIVE",
  },
  {
    customer: "J.D. EXCAVATING LLC",
  },
  {
    customer: "J.M. CONTRACTING",
  },
  {
    customer: "JIM JACKSON",
  },
  {
    customer: "BOB JAMES EXCAVATING",
  },
  {
    customer: "LARRY JAMES JR.",
  },
  {
    customer: "JASCO FAB. & MACHINE",
  },
  {
    customer: "JEFF'S AUTO BODY",
  },
  {
    customer: "JEFF'S REPAIR",
  },
  {
    customer: "JIM'S REPAIR SERVICE",
  },
  {
    customer: "JOHNS BODY SHOP",
  },
  {
    customer: "JONES BROTHERS LOGGING",
  },
  {
    customer: "JONES TRUCKING",
  },
  {
    customer: "JUNK TO JEWEL",
  },
  {
    customer: "JUKEBOX'S AUTO REPAIR",
  },
  {
    customer: "MR. JIM JUNKINS",
  },
  {
    customer: "DEPT JUVENILE SERVICES YOUTH",
  },
  {
    customer: "GREG KAMP EXCAVATING",
  },
  {
    customer: "KAMP TRANSPORT",
  },
  {
    customer: "KEITH SHAFFERS REPAIR",
  },
  {
    customer: "KEPLINGER SERVICES LLC",
  },
  {
    customer: "J.H. FLETCHER & CO.",
  },
  {
    customer: "K & W CLEANING",
  },
  {
    customer: "JIM KENNER REPAIR SHOP",
  },
  {
    customer: "KEYSER CARQUEST AUTO PARTS",
  },
  {
    customer: "KEYSTONE LIME COMPANY",
  },
  {
    customer: "KEYSTONE PAVING INC.",
  },
  {
    customer: "TOMMY KING",
  },
  {
    customer: "KINSINGER'S CENTRAL TRACTOR",
  },
  {
    customer: "PAUL KINSINGER",
  },
  {
    customer: "DARRELL KITZMILLER",
  },
  {
    customer: "KESSEL MULCH CO. INC.",
  },
  {
    customer: "TERRY KING",
  },
  {
    customer: "ZANE KISNER",
  },
  {
    customer: "KITZMILLER FIRE DEPT. INC.",
  },
  {
    customer: "RUSTY A. KITZMILLER",
  },
  {
    customer: "KITZMILLER GARAGE",
  },
  {
    customer: "DENNIS KNOTTS",
  },
  {
    customer: "KNOTTS LUMBER",
  },
  {
    customer: "ROBERT KUHN",
  },
  {
    customer: "TOM KUHN-FUNLAND",
  },
  {
    customer: "LAKEFRONT ENTERPRISES",
  },
  {
    customer: "LAKEVIEW AUTO PARTS",
  },
  {
    customer: "LAKEVIEW AUTOMOTIVE",
  },
  {
    customer: "MR. GENE E. LAMBERT",
  },
  {
    customer: "GARY LAMBKA REPAIR",
  },
  {
    customer: "JENNIFER LAMBKA",
  },
  {
    customer: "LAND DESIGN LLC",
  },
  {
    customer: "CHARLES LANGFORD",
  },
  {
    customer: "LANTZ DAIRY",
  },
  {
    customer: "GREG LAWSON",
  },
  {
    customer: "LAOC CORPORATION",
  },
  {
    customer: "MIKE LAWSON",
  },
  {
    customer: "LAYMAN'S BODY SHOP",
  },
  {
    customer: "GARY LAYMAN",
  },
  {
    customer: "LEE'S BODY SHOP",
  },
  {
    customer: "JEFF LEWIS",
  },
  {
    customer: "LEWIS & BURGE",
  },
  {
    customer: "LEWIS & SONS",
  },
  {
    customer: "LEWIS USED CARS",
  },
  {
    customer: "LEWIS FARM",
  },
  {
    customer: "BILL LEWIS",
  },
  {
    customer: "GARY L. LEWIS",
  },
  {
    customer: "JAMIE L. LEWIS",
  },
  {
    customer: "MR. RONALD LEWIS",
  },
  {
    customer: "LINK RESOURCES INC.",
  },
  {
    customer: "LINSCO",
  },
  {
    customer: "LIBERTY MOTORSPORTS",
  },
  {
    customer: "LIPSCOMB'S LAWN PRODUCTS",
  },
  {
    customer: "LITTLE JOE'S CONTRACTING",
  },
  {
    customer: "LITTLE MOUNTAIN ENTERPRISES",
  },
  {
    customer: "LOCH LYNN SERVICE CENTER",
  },
  {
    customer: "ROBERT LOCKMILLER",
  },
  {
    customer: "LOHR DISTRIBUTORS",
  },
  {
    customer: "ED LOTTIG GARAGE",
  },
  {
    customer: "EDDIE'S AUTO MOBLIE DETAIL",
  },
  {
    customer: "EDWARDS CONSTRUCTION",
  },
  {
    customer: "EDM TRUCKING",
  },
  {
    customer: "LONG BRANCH U HAUL",
  },
  {
    customer: "LES TAYLOR SMALL ENGINE REPAIR",
  },
  {
    customer: "LUCAS LANDSCAPING",
  },
  {
    customer: "MAID TO SPARKLE",
  },
  {
    customer: "MARYLAND FOREST SERVICE",
  },
  {
    customer: "ROB'S AUTO & BODY SHOP",
  },
  {
    customer: "MARYLAND DNR",
  },
  {
    customer: "MARYLAND ENVIRONMENTAL SERVICE",
  },
  {
    customer: "MARYLAND MINERALS INC.",
  },
  {
    customer: "BKN REPAIR",
  },
  {
    customer: "LUKE'S AUTO CLINIC",
  },
  {
    customer: "MCT INC",
  },
  {
    customer: "M & J REPAIR SERVICE LLC.",
  },
  {
    customer: "M & N AUTOMOTIVE",
  },
  {
    customer: "M & S STONE QUARRY",
  },
  {
    customer: "MADIGAN'S AUTO SALES",
  },
  {
    customer: "MANOR BUILDERS SUPPLY INC.",
  },
  {
    customer: "MAPLE HURST FARM",
  },
  {
    customer: "MAPLE LANE NURSERY",
  },
  {
    customer: "MARPLE MULCHING LLC",
  },
  {
    customer: "MARGROFF BROTHERS",
  },
  {
    customer: "MARK'S BODY SHOP",
  },
  {
    customer: "MARKED SOLUTIONS",
  },
  {
    customer: "MARKWOOD PREOWNED",
  },
  {
    customer: "MARTIN AUTO BODY",
  },
  {
    customer: "M & W TRANSMISSION",
  },
  {
    customer: "HARRY L. MARTIN BUS ACCOUNT",
  },
  {
    customer: "MARTIN'S GARAGE",
  },
  {
    customer: "MARTIN'S USED PARTS",
  },
  {
    customer: "MYRON MARTIN",
  },
  {
    customer: "MARYLAND DNR-WILDLIFE&HERITAGE",
  },
  {
    customer: "MARYLAND STATE HIGHWAY ADMINIS",
  },
  {
    customer: "MARYLAND STATE POLICE",
  },
  {
    customer: "MASTERS FARM",
  },
  {
    customer: "MCCLUNG FARMS",
  },
  {
    customer: "TOM MCCONNELL FARM",
  },
  {
    customer: "MCFARLAND REPAIR & WELDING",
  },
  {
    customer: "DAYTON MCKENZIE",
  },
  {
    customer: "DAYTON MCKENZIE",
  },
  {
    customer: "MR. CLAYTON P. MILLER",
  },
  {
    customer: "MEADOW RIDGE CONTRACTING INC.",
  },
  {
    customer: "MELLINGER REPAIR",
  },
  {
    customer: "MR. RANDY MELLINGER",
  },
  {
    customer: "HOMER MELLOTT",
  },
  {
    customer: "MELROB TRUCKING INC.",
  },
  {
    customer: "MENGES TRUCKING",
  },
  {
    customer: "METTIKI COAL",
  },
  {
    customer: "METTIKI COAL LLC",
  },
  {
    customer: "METTIKI COAL LLC F MINE",
  },
  {
    customer: "METTIKI COAL FILTER",
  },
  {
    customer: "METTIKI COAL (PRESTON)",
  },
  {
    customer: "MIKE'S AUTO & BODY",
  },
  {
    customer: "MICKS MAINTENANCE",
  },
  {
    customer: "R.J. STONE",
  },
  {
    customer: "MY-O-TIRE",
  },
  {
    customer: "MIGHTY DISTRIBUTORS",
  },
  {
    customer: "MIKE'S BODY SHOP",
  },
  {
    customer: "MIKE'S REPAIR",
  },
  {
    customer: "MILL BOUND TRUCKING LLC",
  },
  {
    customer: "RALPH P. MILLER",
  },
  {
    customer: "RAY MILLER",
  },
  {
    customer: 'DAVID"THE JAKE" MILLER',
  },
  {
    customer: "MARVIN MILLER",
  },
  {
    customer: "MILLER'S WELDING INC.",
  },
  {
    customer: "MILLS ENTERPRISES LLC",
  },
  {
    customer: "MITCH BODY SHOP",
  },
  {
    customer: "MILRO SERVICES",
  },
  {
    customer: "MICHEAL MOON",
  },
  {
    customer: "MOONIE'S AUTO REPAIR",
  },
  {
    customer: "MONTCROFT FARMS",
  },
  {
    customer: "MOORE RACING",
  },
  {
    customer: "MORELAND TRUCKING LLC",
  },
  {
    customer: "JOHN MORELAND",
  },
  {
    customer: "MORGAN SERVICES",
  },
  {
    customer: "MORSAW LOGGING",
  },
  {
    customer: "MOUNTAINEER CONTRACTORS",
  },
  {
    customer: "MOUNTAIN ENTERPRISES INC",
  },
  {
    customer: "MOUNTAIN MAN CONTRACTING",
  },
  {
    customer: "MOUNTAIN VIEW FARM",
  },
  {
    customer: "MT. COUNTIES CONSTRUCTION CO.",
  },
  {
    customer: "MT. GROVE V. F. D.",
  },
  {
    customer: "MT. LAKE INDEPENDENT BAPTIST C",
  },
  {
    customer: "MT. TOP PUBLIC SERVICE DISTRIC",
  },
  {
    customer: "MT. STATE WIRE & FENCE CO.",
  },
  {
    customer: "MT. STORM V.F.D. INC.",
  },
  {
    customer: "MT. TOP FARMS",
  },
  {
    customer: "MT. TOP GARAGE",
  },
  {
    customer: "MT. TOP GLASS",
  },
  {
    customer: "MT. TOP MOWERS",
  },
  {
    customer: "MT. TOP PAVING",
  },
  {
    customer: "MT. TOP SEAL COATING",
  },
  {
    customer: "MT. TOP TREE FARM",
  },
  {
    customer: "MT VALLEY FARM",
  },
  {
    customer: "MT. VIEW FARMS",
  },
  {
    customer: "MT. VILLA ASSOCIATES",
  },
  {
    customer: "MR. JEFF MUENCHOW",
  },
  {
    customer: "BALL PRE-OWNED AUTO",
  },
  {
    customer: "MURPHY'S GARAGE",
  },
  {
    customer: "MUSTANG EXPRESS",
  },
  {
    customer: "HERBERT MYERS INC.",
  },
  {
    customer: "MYERS & SON TRUCKING",
  },
  {
    customer: "NATIONAL SALVAGE & SERVICE",
  },
  {
    customer: "NATURE'S OWN LANDSCAPING",
  },
  {
    customer: "NAYBURLEE REPAIR",
  },
  {
    customer: "A.D. NAYLOR'S CONTRACTING",
  },
  {
    customer: "NAZELROD EXCAVATING",
  },
  {
    customer: "POTOMAC GARRETT STATE FOREST",
  },
  {
    customer: "MIKEY NICHOLS",
  },
  {
    customer: "DON NINE AUTO",
  },
  {
    customer: "NELSON LIMITED",
  },
  {
    customer: "NINER CONSTRUCTION",
  },
  {
    customer: "ROGER & CINDY NEWMAN",
  },
  {
    customer: "NEWMAN & SONS",
  },
  {
    customer: "NOLAND COMPANY VRDC/I",
  },
  {
    customer: "NORM GUTHRIE",
  },
  {
    customer: "NORTH GLADE INN",
  },
  {
    customer: "ACTION TOWING",
  },
  {
    customer: "NU-FINISH COLLISION CENTER",
  },
  {
    customer: "NU-IMAGE",
  },
  {
    customer: "NUWAY INTERIORS",
  },
  {
    customer: "CROSCO TRUCKING",
  },
  {
    customer: "OAKLAND FFA",
  },
  {
    customer: "OAKLAND OIL COMPANY",
  },
  {
    customer: "OAKLAND POST OFFICE",
  },
  {
    customer: "OAKLAND V.F.D.",
  },
  {
    customer: "OAKLEY C. WHITE",
  },
  {
    customer: "ORIONS BELT",
  },
  {
    customer: "OUR'S AUTO SALVAGE",
  },
  {
    customer: "RICK PALMER",
  },
  {
    customer: "PAR MATT LANES",
  },
  {
    customer: "PAR ELECTRICAL CONT.",
  },
  {
    customer: "JOHN R. PARSONS & SONS",
  },
  {
    customer: "PARSONS EXCAVATING",
  },
  {
    customer: "PARSONS REPAIR",
  },
  {
    customer: "WOODROW W. PASE III",
  },
  {
    customer: "PATTERSON BOAT CO. INC.",
  },
  {
    customer: "PATRIOT CHRYSLER DODGE JEEP",
  },
  {
    customer: "JAY K. PAUGH",
  },
  {
    customer: "BRANDON PAUGH",
  },
  {
    customer: "ROBERT P. THOMAS",
  },
  {
    customer: "REUBEN PEACHEY FARMS",
  },
  {
    customer: "JOHN PECK",
  },
  {
    customer: "PENNINGTON GARAGE",
  },
  {
    customer: "WOLFORD PERANDO",
  },
  {
    customer: "PERFORMANCE CHEVROLET",
  },
  {
    customer: "PETERS FUEL CORP.",
  },
  {
    customer: "PERANA'S CUSTOMS",
  },
  {
    customer: "PERRY'S SOLID WASTE DISPOSAL",
  },
  {
    customer: "PHILLIPS PRECAST CONCRETE INC.",
  },
  {
    customer: "PIFER AUTO REPAIR",
  },
  {
    customer: "PINE HILL TREE FARM",
  },
  {
    customer: "PHENIX TECHNOLOGIES INC.",
  },
  {
    customer: "PINE HILLS GREENHOUSE",
  },
  {
    customer: "PINETUM CHRISTMAS TREES",
  },
  {
    customer: "PIONEER CONVEYOR",
  },
  {
    customer: "PITTMAN'S TREE & LANDSCAPING",
  },
  {
    customer: "POTOMAC CONSTRUCTION",
  },
  {
    customer: "POTOMAC EXCAVATING",
  },
  {
    customer: "POTOMAC-NORTH INC.",
  },
  {
    customer: "POTOMAC NORTH INC",
  },
  {
    customer: "POWELL'S AUTO PARTS",
  },
  {
    customer: "POWER CONSTRUCTION & MAINTENAN",
  },
  {
    customer: "PRECISION CRANE",
  },
  {
    customer: "PREFERRED LAWN",
  },
  {
    customer: "PREMIUM COLLISION CENTER",
  },
  {
    customer: "PRESTON CONTRACTORS INC.",
  },
  {
    customer: "PRESTON PARTS",
  },
  {
    customer: "PRISTINE AUTO BODY",
  },
  {
    customer: "MIKE PRITT",
  },
  {
    customer: "PRO-CLEAN",
  },
  {
    customer: "CODE GREEN CONSTR. LLC",
  },
  {
    customer: "DAVE PYSELL",
  },
  {
    customer: "R.A.M. TRUCKING",
  },
  {
    customer: "RD LOGGING",
  },
  {
    customer: "RD MCKENZIE LOGGING",
  },
  {
    customer: "RJ'S",
  },
  {
    customer: "RINKER CONSTRUCTION LLC.",
  },
  {
    customer: "R & J REPAIR CENTER INC",
  },
  {
    customer: "RC LOGGING LLC",
  },
  {
    customer: "JONES FARM",
  },
  {
    customer: "RJ TRACTOR REPAIR",
  },
  {
    customer: "R & R TRUCKING",
  },
  {
    customer: "R & W EQUIPMENT",
  },
  {
    customer: "RY ANGUS FARMS",
  },
  {
    customer: "J & J BODY SHOP INC.",
  },
  {
    customer: "R.L.S. ENTERPRISES",
  },
  {
    customer: "RLB SERVICES",
  },
  {
    customer: "R.P.M. CONSTRUCTION",
  },
  {
    customer: "RWB INNOVATIONS INC",
  },
  {
    customer: "RAPIDWAYS TRUCK LEASING",
  },
  {
    customer: "RANDY'S BODY SHOP",
  },
  {
    customer: "RATLIFF HARDWOODS LLC",
  },
  {
    customer: "TED RAYNOVICH III",
  },
  {
    customer: "RBJ TRUCKING",
  },
  {
    customer: "RECKART LOGGING CO.",
  },
  {
    customer: "JIMMY RECKART",
  },
  {
    customer: "RECREATIONAL IND-WISP",
  },
  {
    customer: "RED ROCK ENTERPRISES LLC",
  },
  {
    customer: "ROBERT RIDDER EXCAVATING",
  },
  {
    customer: "DARWIN ROBESON",
  },
  {
    customer: "ROCKY GAP RESORT/EVITTS RESORTS",
  },
  {
    customer: "ROCKY TOP MAINTENACE & REPAIR",
  },
  {
    customer: "RUSSELL RODEHEAVER",
  },
  {
    customer: "ZANE RIGGLEMAN",
  },
  {
    customer: "RIGIDPLY  RAFTERS OF MD",
  },
  {
    customer: "AUSTIN RODEHEAVER",
  },
  {
    customer: "FRAZEE EXCAVATING",
  },
  {
    customer: "FRAZEE'S MOUNTAIN TOP MGT",
  },
  {
    customer: "DONALD ROBINSON",
  },
  {
    customer: "DON RODEHEAVER REPAIR LLC",
  },
  {
    customer: "ROHMAC INC",
  },
  {
    customer: "ROLAND MURPHY FARM",
  },
  {
    customer: "ROLA FARMS INC.",
  },
  {
    customer: "RON'S GARAGE",
  },
  {
    customer: "GLENN ROTH",
  },
  {
    customer: "ROWLESBURG AMBULANCE SERVICE",
  },
  {
    customer: "ROWLESBURG SERVICE CENTER",
  },
  {
    customer: "ROWLESBURG VOLUNTEER FIRE DEPA",
  },
  {
    customer: "ROY'S AUTO BODY SHOP",
  },
  {
    customer: "ROY'S AUTO SALES",
  },
  {
    customer: "ROY'S GARAGE",
  },
  {
    customer: "RT. 24 SALES & SERVICE",
  },
  {
    customer: "ROBERTS AUTO REPAIR",
  },
  {
    customer: "ROBERT'S TOWING",
  },
  {
    customer: "RS PAINTING LLC",
  },
  {
    customer: "RUSH EXCAVATING",
  },
  {
    customer: "S.C.& L.",
  },
  {
    customer: "S & P PERFORMANCE & REPAIR",
  },
  {
    customer: "SAMS AGWAY",
  },
  {
    customer: "SAM'S AUTO REPAIR",
  },
  {
    customer: "ALEX SANDERS",
  },
  {
    customer: "SAVAGE RIVER WORKS",
  },
  {
    customer: "DR. WILLIAM G. SAVAGE",
  },
  {
    customer: "SAVAGE SERVICES CORPORATION",
  },
  {
    customer: "KEN'S AUTO REPAIR",
  },
  {
    customer: "CALVIN SCHROCK FARMS",
  },
  {
    customer: "KENNY SCHROCK AUTO REPAIR",
  },
  {
    customer: "SCHROCK AG PARTS",
  },
  {
    customer: "SCHROCK TRUCKING",
  },
  {
    customer: "ERNIE SCHROCK",
  },
  {
    customer: "BOBBY SCHMIDT",
  },
  {
    customer: "JAMES E. SCHMIDT",
  },
  {
    customer: "SECOND CHANCE FARMS",
  },
  {
    customer: "SERIOUS TRUCKING",
  },
  {
    customer: "DELBERT SHAFFER",
  },
  {
    customer: "ROBERT SHAFFER",
  },
  {
    customer: "SHAFFER FORD SALES INC.",
  },
  {
    customer: "RAY E. SHILLINGBURG",
  },
  {
    customer: "SHIRER'S TIN SHOP",
  },
  {
    customer: "MARVIN W. SHREVE",
  },
  {
    customer: "SHREVE BACKHOE & DOZER SERVICE",
  },
  {
    customer: "SHREVE FARMING",
  },
  {
    customer: "MICHAEL SLAUBAUGH",
  },
  {
    customer: "BILL SHUTTLEWORTH",
  },
  {
    customer: "SIERRA CONSTRUCTION",
  },
  {
    customer: "MR. RANDY SIGLEY",
  },
  {
    customer: "SILVER CROSS TRUCKING",
  },
  {
    customer: "SILVER KNOB PALLET LLC",
  },
  {
    customer: "SIMCO LLC",
  },
  {
    customer: "BILL SIMMONS",
  },
  {
    customer: "SIMON PEARCE (US)",
  },
  {
    customer: "SIMPSON AUTO BODY",
  },
  {
    customer: "SIMPSON TRUCKING",
  },
  {
    customer: "SINES HARVESTING",
  },
  {
    customer: "SKYLINE EXCAVATING & TREE SERVIC",
  },
  {
    customer: "DAVID K. SISLER",
  },
  {
    customer: "JOHN SISLER",
  },
  {
    customer: "VINCE SISLER",
  },
  {
    customer: "SISLER LUMBER CO.",
  },
  {
    customer: "SISLER TRUCKING",
  },
  {
    customer: "SHIRLEY SLAUBAUGH",
  },
  {
    customer: "AMERICAN HERITAGE HOME IMP.LLC",
  },
  {
    customer: "SNOW'S MT. TOP SERVICE CENTER",
  },
  {
    customer: "DELMER SNYDER",
  },
  {
    customer: "MR. MICHAEL A. SNYDER",
  },
  {
    customer: "SNYDER'S CABNETS",
  },
  {
    customer: "SNYDER MOTORS",
  },
  {
    customer: "SOJOURN MOVERS",
  },
  {
    customer: "D.E. BOLDEN",
  },
  {
    customer: "SOUTHERN GARRETT CO. RESCUE SQ",
  },
  {
    customer: "SOUTHERN HIGH AUTO SHOP",
  },
  {
    customer: "SOUTHERN STATES COOP.",
  },
  {
    customer: "SPAID SPRING MEADOW FARM",
  },
  {
    customer: "SPRING LICK PALLET",
  },
  {
    customer: "A. A. STACY & SON",
  },
  {
    customer: "STANDARD LABORATORIES",
  },
  {
    customer: "STANS GARAGE",
  },
  {
    customer: "STELLAR COLLISION CENTER INC",
  },
  {
    customer: "STEYER FUEL INC.",
  },
  {
    customer: "STEYER TRUCKING",
  },
  {
    customer: "LARRY STEADMAN",
  },
  {
    customer: "BUFFALO'S MOW & SNOW",
  },
  {
    customer: "MRS. SHEILA STEMPLE",
  },
  {
    customer: "INTERSECTION",
  },
  {
    customer: "STEMPLE LOGGING",
  },
  {
    customer: "BYCO ENTERPRISES INC",
  },
  {
    customer: "KEARNEY RIDGE FARM",
  },
  {
    customer: "LEE STEYER EXCAVATING",
  },
  {
    customer: "MR. RANDALL STEYER",
  },
  {
    customer: "STICKS AND STONES",
  },
  {
    customer: "STONEY HILL CORPORATION",
  },
  {
    customer: "SUBURBAN  PROPANE ACCOUNTS PAY",
  },
  {
    customer: "MR. ROBERT STREETS",
  },
  {
    customer: "SUCCESS FLOOR COVERING",
  },
  {
    customer: "DEAN SULLIVAN",
  },
  {
    customer: "SUNRISE REPAIR",
  },
  {
    customer: "SUNRISE SANITATION",
  },
  {
    customer: "SUNSET FARM",
  },
  {
    customer: "SUPER CAR WASH MD LLC",
  },
  {
    customer: "DEWITT'S REPAIR",
  },
  {
    customer: "SUPER DEAL AUTO SALES",
  },
  {
    customer: "SUPER DUTY TRUCKING LLC",
  },
  {
    customer: "SWANTON GROC.",
  },
  {
    customer: "JIM SWEITZER",
  },
  {
    customer: "JERRY SWIGER",
  },
  {
    customer: "MR. RON SWIGER",
  },
  {
    customer: "SYLVAN MANUFACTURING CO. INC.",
  },
  {
    customer: "DAVE SYPOLT",
  },
  {
    customer: "SYPOLT SERVICES",
  },
  {
    customer: "TNT LOG & SIDING RESTORATION LLC",
  },
  {
    customer: "T & B REPAIR",
  },
  {
    customer: "T.C. TRUCKING & GARAGE",
  },
  {
    customer: "T.C.S. HARDWOODS INC.",
  },
  {
    customer: "T & L EXCAVATING",
  },
  {
    customer: "T & P TRUCKING",
  },
  {
    customer: "T & S AUTO REPAIR",
  },
  {
    customer: "T & T ELECTRICAL SERVICE LLC",
  },
  {
    customer: "CHOICE PRE-OWNED AUTO",
  },
  {
    customer: "LOST LAND STONE",
  },
  {
    customer: "DEREK TASKER'S AUTO REPAIR",
  },
  {
    customer: "TASKER EXCAVATING LLC",
  },
  {
    customer: "TASKER TRUCKING",
  },
  {
    customer: "TASKER LOGGING",
  },
  {
    customer: "TARGET LUMBER & LOGGING",
  },
  {
    customer: "FRAZEE MOUNTAIN TOP MGT",
  },
  {
    customer: "TEAGARDEN SMALL ENGINE REPAIR",
  },
  {
    customer: "TEAM ONE",
  },
  {
    customer: "TERRA ALTA COMMUNITY AMBULANCE",
  },
  {
    customer: "TERRA ALTA V.F.D.",
  },
  {
    customer: "TERRA ALTA WATER WORKS",
  },
  {
    customer: "THOMAS HARDWOODS",
  },
  {
    customer: "THOMAS' TIRES & ACCESSORIES",
  },
  {
    customer: "THOMAS AND THOMAS CONSTRUCTION",
  },
  {
    customer: "THOMAS REPAIR AND COLLISION LLC",
  },
  {
    customer: "LARRY E. THOMAS",
  },
  {
    customer: "TIM THOMAS",
  },
  {
    customer: "TIMBROOK AUTOMOTIVE 9.0 LLC",
  },
  {
    customer: "TICHNELL & SON",
  },
  {
    customer: "TOM HARDESTY",
  },
  {
    customer: "THOMPSON GAS",
  },
  {
    customer: "TOP SHOP",
  },
  {
    customer: "TOWN OF BAYARD",
  },
  {
    customer: "TOWN OF DEER PARK",
  },
  {
    customer: "TOWN OF KITZMILLER MAYOR & COU",
  },
  {
    customer: "TOWN OF LOCH LYNN",
  },
  {
    customer: "TOWN OF MT. LAKE PARK",
  },
  {
    customer: "TOWN OF OAKLAND",
  },
  {
    customer: "TOWN OF ROWLESBURG",
  },
  {
    customer: "TRAXX LLC",
  },
  {
    customer: "TREE & LAND SERVICE",
  },
  {
    customer: "TRIPLE D LOGGING",
  },
  {
    customer: "TRESSLER'S GARAGE",
  },
  {
    customer: "TRESSLER'S AUTO ELECTRIC",
  },
  {
    customer: "ERIC TRIBBEY",
  },
  {
    customer: "TRIPLE S CONSTRUCTION",
  },
  {
    customer: "TRIPLE S HARDWOODS",
  },
  {
    customer: "TRIPLE GREEN MILL LLC",
  },
  {
    customer: "TROUT RUN FARM",
  },
  {
    customer: "TRI COUNTY HARDWOODS",
  },
  {
    customer: "TRI-STATE GAZEBO LLC",
  },
  {
    customer: "TRI STATE SEAL COATING INC.",
  },
  {
    customer: "TRUMBULL CORPORATION",
  },
  {
    customer: "TUB'S AND STUFF",
  },
  {
    customer: "TUCKER CO. HIGH SCHOOL",
  },
  {
    customer: "TUCKER CO SOLID WASTE AUTH.",
  },
  {
    customer: "UTS",
  },
  {
    customer: "UNDERWOOD EXCAVATING",
  },
  {
    customer: "UNDERWOOD METAL WORKS LLC",
  },
  {
    customer: "LEGEND AUTO CENTER & USED CARS",
  },
  {
    customer: "UNION AMBULANCE SERVICE",
  },
  {
    customer: "UPHOLD TRUCKING LLC.",
  },
  {
    customer: "DEER PARK AUTOMOTIVE",
  },
  {
    customer: "UPOLE  CAMPER SALES",
  },
  {
    customer: "US ARMY STUDENT TRAINING FACIL",
  },
  {
    customer: "TED UPHOLD",
  },
  {
    customer: "BRIAN VANDEVENDER",
  },
  {
    customer: "VERIZON FLEET",
  },
  {
    customer: "VIOLA SHARPENING & REPAIR",
  },
  {
    customer: "VINDEX ENERGY CORPORATION",
  },
  {
    customer: "VIRGINIA POWER MT.STORM POWER",
  },
  {
    customer: "VIRGINIA ELECTRIC & POWER",
  },
  {
    customer: "VIRTS AUTO SALES",
  },
  {
    customer: "LARRY WAGNER TRUCKING",
  },
  {
    customer: "W.R. CASTEEL CO. INC.",
  },
  {
    customer: "W.W. AUTO REPAIR",
  },
  {
    customer: "W & W LOGGING",
  },
  {
    customer: "WAYNE'S WATER & WELLS",
  },
  {
    customer: "WEBB DISTRIBUTORS LLC",
  },
  {
    customer: "WELDING ROD",
  },
  {
    customer: "WALTER WEEKS",
  },
  {
    customer: "FRANKIE WEESE",
  },
  {
    customer: "CECIL W. WELCH JR.",
  },
  {
    customer: "WELLS AUGER MINING",
  },
  {
    customer: "JAMES L. WELLS",
  },
  {
    customer: "MARK WELLS",
  },
  {
    customer: "WHISTLE PIG FARM",
  },
  {
    customer: "WESTERN MARYLAND 4-H CENTER",
  },
  {
    customer: "WESTERN MARYLAND SEPTIC SERVIC",
  },
  {
    customer: "WESTERN MARYLAND TIN SHOP",
  },
  {
    customer: "WESTERN MARYLAND TOWING",
  },
  {
    customer: "WESTERN MD. TRUCK PARTS",
  },
  {
    customer: "WESTERN TRAILS LLC",
  },
  {
    customer: "WESTMAR BUILDERS",
  },
  {
    customer: "A & A TRUCK SERVICE",
  },
  {
    customer: "WEST VA DPT. TRANS HIGHWAY",
  },
  {
    customer: "WHITACRE AUTO SALES",
  },
  {
    customer: "GEORGE WHITE",
  },
  {
    customer: "WHITE CHURCH AUTO",
  },
  {
    customer: "WHITE CONSTRUCTION",
  },
  {
    customer: "WHITE ROCK AUTO PARTS",
  },
  {
    customer: "WHITE'S REPAIR SERVICE",
  },
  {
    customer: "WHITE TRUCKING",
  },
  {
    customer: "REX WILES",
  },
  {
    customer: "ROY WILES TRUCKING",
  },
  {
    customer: "LEONARD WILHELM JR LOGGING",
  },
  {
    customer: "EW HAULING",
  },
  {
    customer: "MR. RICHARD A. WILT",
  },
  {
    customer: "EARL WILT",
  },
  {
    customer: "WINDFIELD GOLF COURSE",
  },
  {
    customer: "RICHARD K. WINTERS",
  },
  {
    customer: "WINTERS GENERAL CONTRACTOR",
  },
  {
    customer: "WINTERS PAINTING",
  },
  {
    customer: "MR. MICHAEL L. WHITE",
  },
  {
    customer: "WISP RESORT",
  },
  {
    customer: "WKHJ",
  },
  {
    customer: "TED WOLF CONTRACTING",
  },
  {
    customer: "HARLIN L. WOLFE",
  },
  {
    customer: "WOLFMAN TRUCKING",
  },
  {
    customer: "WOLFORD TRUCKING",
  },
  {
    customer: "WOOD PRODUCTS INC.",
  },
  {
    customer: "W.P.O. INC.",
  },
  {
    customer: "Y.H.O.A.",
  },
  {
    customer: "MARLIN LAWSON",
  },
  {
    customer: "NEW ENGLAND TRUSS & JOIST",
  },
  {
    customer: "219 MOTORS",
  },
  {
    customer: "135 LIBERTY",
  },
  {
    customer: "135 ENTERPRISES",
  },
  {
    customer: "DICK'S ELECTRIC",
  },
  {
    customer: "DUNG HILL FARMS",
  },
  {
    customer: "BUSTERS STUMP & TREE REMOVAL",
  },
  {
    customer: "CASH ACCOUNT",
  },
  {
    customer: "SOUTHERN AUTO SUPPLY",
  },
  {
    customer: "CORE RETURNS",
  },
  {
    customer: "ACTUAL COST",
  },
  {
    customer: "DEALER PRICING",
  },
  {
    customer: "EMPLOYEE",
  },
  {
    customer: "FARM MI",
  },
  {
    customer: "FLEET PRICING",
  },
  {
    customer: "GARAGE REG MI",
  },
  {
    customer: "GOVERNMENT PRICING",
  },
  {
    customer: "MASTER INSTALLER",
  },
  {
    customer: "PAINT MIX ONLY!!!",
  },
  {
    customer: "MODEL CUSTOMER",
  },
  {
    customer: "DEEP DISCOUNT",
  },
  {
    customer: "BODY SHOP",
  },
  {
    customer: "MI CASH PLUS",
  },
  {
    customer: "NEW RETURNS",
  },
  {
    customer: "PAINT & BODY PRICING",
  },
  {
    customer: "PREFERRED PRICING",
  },
  {
    customer: "WALKIN PRICING",
  },
  {
    customer: "WARRANTY RETURNS",
  },
];
