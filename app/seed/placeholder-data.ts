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
    "seq_no": 1,
    "name": "PREFERRED CASH",
    "phone": ""
  },
  {
    "seq_no": 4,
    "name": "FARRIS FARM BERKELEY SPRINGS WV 25411",
    "phone": "(540)303-1000"
  },
  {
    "seq_no": 5,
    "name": "84 LUMBER #0928 SCENIC 135 & IND. PARK DR OAKLAND MD 21550",
    "phone": "(301)334-6184"
  },
  {
    "seq_no": 6,
    "name": "8Z TIMBER PRODUCTS PO BOX 474 ROWLESBURG WV 26425",
    "phone": "(304)698-6434"
  },
  {
    "seq_no": 7,
    "name": 7,
    "phone": "(814)343-4970"
  },
  {
    "seq_no": 10,
    "name": "A & K AUTO SERVICE EAST STATE AVE. TERRA ALTA WV 26764",
    "phone": "(304)789-2333"
  },
  {
    "seq_no": 11,
    "name": "A & T CAR AND TRUCK REPAIR 1569 RUSS DEBERRY RD TERRA ALTA WV 26764",
    "phone": "(304)454-9607"
  },
  {
    "seq_no": 15,
    "name": 15,
    "phone": "(301)334-4596"
  },
  {
    "seq_no": 25,
    "name": "ACCIDENT V.F.D. ACCIDENT MD 21520",
    "phone": ""
  },
  {
    "seq_no": 50,
    "name": "AUTOLAND CDJR 113 SOUTH MAIN ST. ACCIDENT MD 21520",
    "phone": "(301)746-8181"
  },
  {
    "seq_no": 75,
    "name": "ACE QUICK LUBE 103 N THIRD ST. OAKLAND MD 21550",
    "phone": "(301)334-5181"
  },
  {
    "seq_no": 101,
    "name": "MR JEFF ACKERMAN 2491 SHADY DELL RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 225,
    "name": "ACTION HARDWARE AND FASTENERS P.O. BOX 9 MCHENRY MD 21541-0009",
    "phone": "(301)746-8485"
  },
  {
    "seq_no": 250,
    "name": "ADAM CONSTRUCTION 5312 SANG RUN RD. MCHENRY MD 21541",
    "phone": "(301)387-4898"
  },
  {
    "seq_no": 300,
    "name": "ADAMS GARAGE 290 ADAMS LANE MT STORM WV 26739",
    "phone": "(304)693-7079"
  },
  {
    "seq_no": 325,
    "name": "ADAM'S TRUCKING 212 PARSONS RD AURORA WV 26705",
    "phone": "(304)735-5855"
  },
  {
    "seq_no": 326,
    "name": "ADVANCE AUTO PARTS 5882 1000 FAIRMONT RD MORGANTOWN WV 26501",
    "phone": "(304)296-8914"
  },
  {
    "seq_no": 327,
    "name": "ADVANCE AUTO PARTS 7210 1460 EARL L CORE RD MORGANTOWN WV 26505",
    "phone": "(304)291-2095"
  },
  {
    "seq_no": 328,
    "name": "ADVANCE AUTO PARTS 7500 318 E MAIN ST KINGWOOD WV 26537",
    "phone": "(304)329-3148"
  },
  {
    "seq_no": 329,
    "name": "ADVANCE AUTO PARTS 6216 12809 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)533-0952"
  },
  {
    "seq_no": 330,
    "name": "AEI BUILDERS PO BOX 676 OAKLAND MD 21550",
    "phone": "(301)616-6407"
  },
  {
    "seq_no": 331,
    "name": "ADVANCE AUTO PARTS 7260 830 MONOGAHELA BLVD MORGANTOWN WV 26505",
    "phone": "(304)284-2050"
  },
  {
    "seq_no": 332,
    "name": "ADVANCE AUTO PARTS 5593 210 S PIKE ST SHINNSTON WV 26431",
    "phone": "(304)592-2095"
  },
  {
    "seq_no": 333,
    "name": "ADVANCE AUTO PARTS 6099 2784 WHITE HALL BLVD FAIRMONT WV 26554",
    "phone": "(304)363-3476"
  },
  {
    "seq_no": 334,
    "name": "ADVANCE AUTO PARTS 7180 1025 W MAIN ST BRIDGEPORT WV 26330",
    "phone": "(304)842-1901"
  },
  {
    "seq_no": 335,
    "name": "ADVANCE AUTO PARTS 7200 730 BEVERLY PIKE ELKINS WV 26241",
    "phone": "(304)636-8438"
  },
  {
    "seq_no": 336,
    "name": "ADVANCE AUTO PARTS 7310 100 MARKETPLACE MALL STE 2-A WESTON WV 26452",
    "phone": "(304)269-1191"
  },
  {
    "seq_no": 337,
    "name": "ADVANCE AUTO PARTS 7400 502 BLUEVILLE DR GRAFTON WV 26354",
    "phone": "(304)265-2030"
  },
  {
    "seq_no": 338,
    "name": "ADVANCE AUTO PARTS 7440 417 BUCKHANNON PIKE CLARKSBURG WV 26301",
    "phone": "(304)622-6171"
  },
  {
    "seq_no": 339,
    "name": "ADVANCE AUTO PARTS 7490 RT 4 BOX 320F / RT250S PHILIPPI WV 26416",
    "phone": "(304)457-2040"
  },
  {
    "seq_no": 340,
    "name": "ADVANCE AUTO PARTS 7559 3 FOODLAND PLAZA GLENVILLE WV 26351",
    "phone": "(304)462-2771"
  },
  {
    "seq_no": 341,
    "name": "ADVANCE AUTO PARTS 7560 917 MORGANTOWN AVE FAIRMONT WV 26554",
    "phone": "(304)366-2615"
  },
  {
    "seq_no": 342,
    "name": "ADVANCE AUTO PARTS 7945 181 S KANAWHA ST BUCKHANNON WV 26201",
    "phone": "(304)472-2199"
  },
  {
    "seq_no": 343,
    "name": "ADVANCE AUTO PARTS 8915 3 RAINBOW PLAZA MANNINGTON WV 26582",
    "phone": "(304)986-3629"
  },
  {
    "seq_no": 344,
    "name": "ADVANCE AUTO PARTS 7724 2175 MCCLELLANDTOWN RD MASONTOWN PA 15461",
    "phone": "(724)491-1050"
  },
  {
    "seq_no": 345,
    "name": "ADVANCE AUTO PARTS 7520 RR. 3 BOX 3134 KEYSER WV 26726",
    "phone": "(301)788-0011"
  },
  {
    "seq_no": 346,
    "name": "ADVANCE AUTO PARTS #6098 28 NORTH COMMERCE AVENUE FRONT ROYAL VA 22630",
    "phone": "(540)622-2563"
  },
  {
    "seq_no": 350,
    "name": "AG-FUTURE INC. 1113 YOUGHIOGHENY DRIVE MT LAKE PARK MD 21550",
    "phone": "(301)334-1269"
  },
  {
    "seq_no": 360,
    "name": "MARY ANN MAZE 2226 RAG TAVERN RD TERRA ALTA WV 26764",
    "phone": "(301)334-3838"
  },
  {
    "seq_no": 400,
    "name": "MR GEORGE AHERN 700 ROSS ST. WINCHESTER VA 22601",
    "phone": "(540)665-8514"
  },
  {
    "seq_no": 425,
    "name": "ALDEN'S BOAT REPAIR 852 PYSELL CROSSCUT RD OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 430,
    "name": "ALI GHAN HIRAGE P.O. BOX 184 OAKLAND MD 21550",
    "phone": "(301)334-5276"
  },
  {
    "seq_no": 500,
    "name": "ALL CONSTRUCTION PO BOX 232 MT STORM WV 26739",
    "phone": "(304)693-7131"
  },
  {
    "seq_no": 550,
    "name": "ALL SEASON CONTRACTING 405 MARKWOOD DR. OAKLAND MD 21550",
    "phone": "(301)533-3232"
  },
  {
    "seq_no": 600,
    "name": "NEW ALLEGHENY INC. P.O. BOX 307 MT STORM WV 26739",
    "phone": "(304)693-7621"
  },
  {
    "seq_no": 625,
    "name": "AMTOWER AUTO SUPPLY INC. P.O. BOX 4639 BRIDGEPORT WV 26330",
    "phone": "(304)592-6272"
  },
  {
    "seq_no": 650,
    "name": "AMTOWERS HILLTOP COLLISION CTR RT. 5 BOX 494 KEYSER WV 26726",
    "phone": "(304)788-2995"
  },
  {
    "seq_no": 700,
    "name": "APPALACHIAN CENTER 39 S. THIRD STREET OAKLAND MD 21550-1519",
    "phone": "(301)334-8146"
  },
  {
    "seq_no": 725,
    "name": "APPALACHIAN IRON 1103 SPRING GLADE ROAD OAKLAND MD 21550",
    "phone": "(301)387-9312"
  },
  {
    "seq_no": 775,
    "name": "APPALACHIAN RAILWAY SERVICES P.O.BOX 2368 MT LAKE PARK MD 21550",
    "phone": "(301)334-1888"
  },
  {
    "seq_no": 777,
    "name": "APPALACHIAN SERVICES LLC 336 CEDAR LN OAKLAND MD 21550",
    "phone": "(301)616-0334"
  },
  {
    "seq_no": 795,
    "name": "APPALACHIAN WOOD PELLETS, INC PO BOX 601 KINGWOOD WV 26537",
    "phone": "(304)329-4000"
  },
  {
    "seq_no": 850,
    "name": "ALLEGHENY POWER 12454 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)759-5747"
  },
  {
    "seq_no": 875,
    "name": "ALLEGHANY INVESTMENTS LLC RT. 93 MT STORM WV 26739",
    "phone": "(304)693-7131"
  },
  {
    "seq_no": 880,
    "name": "ALL IN PLUMBING 21 WARNICK ST OAKLAND MD 21550",
    "phone": "(301)501-6209"
  },
  {
    "seq_no": 900,
    "name": "ALLEGHENY WELDING P.O. BOX 166 OAKLAND MD 21550",
    "phone": "(301)334-8181"
  },
  {
    "seq_no": 910,
    "name": "ALLEGHANY WELL DRILLING P.O. BOX 3118 SWANTON MD 21561",
    "phone": "(301)334-3950"
  },
  {
    "seq_no": 915,
    "name": "ALLEGANY WOOD PRODUCTS MILL #2 P.O. BOX 319 MT STORM WV 26739",
    "phone": "(304)257-1082"
  },
  {
    "seq_no": 925,
    "name": "ALLEGHENY WOOD PRODUCTS MILL 3 P.O. BOX 63 BAYARD WV 26707",
    "phone": "(304)257-1082"
  },
  {
    "seq_no": 930,
    "name": "ALLEGHENY WOOD PROD. MILL # 5 P.O. BOX 130 KINGWOOD WV 26537",
    "phone": "(304)329-2097"
  },
  {
    "seq_no": 945,
    "name": "ALPINE LAKE PUBLIC UTILITIES 1813 ALPINE LAKE RD TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 950,
    "name": "ALPINE LAKE RESORT 700 WEST ALPINE DRIVE TERRA ALTA WV 26764",
    "phone": "(304)789-2481"
  },
  {
    "seq_no": 960,
    "name": "ALCORP 5247 AUROR PIKE AURORA WV 26705",
    "phone": "(304)735-5745"
  },
  {
    "seq_no": 962,
    "name": "AMA EXCAVATING 2854 AURORA PIKE AURORA WV 26705",
    "phone": "(304)735-5714"
  },
  {
    "seq_no": 965,
    "name": "RAPID REPAIR 913 SNOWYCREEK RD. OAKLAND MD 21550",
    "phone": "(301)334-6243"
  },
  {
    "seq_no": 985,
    "name": "ARISTEO CONSTRUCTION CO. 12811 FARMINGTON RD LIVONIA MI 48150",
    "phone": "(734)427-9111"
  },
  {
    "seq_no": 990,
    "name": "ARONHOLT & SONS HC 76 BOX 510 MT STORM WV 26739",
    "phone": "(304)693-7096"
  },
  {
    "seq_no": 1070,
    "name": "DONALD ARNETT 6271 LANTZ RIDGE RD. AURORA WV 26705",
    "phone": "(304)735-5782"
  },
  {
    "seq_no": 1100,
    "name": "CATHEDRAL EQUIPMENT 5121 LANTZ RIDGE RD AURORA WV 26705",
    "phone": "(304)288-8560"
  },
  {
    "seq_no": 1300,
    "name": "ARNOLD BROTHERS EQUIPMENT CORP 105 ARNOLD LANE MT LAKE PARK MD 21550",
    "phone": "(301)334-9605"
  },
  {
    "seq_no": 1400,
    "name": "ARNOLD TRUCKING RT.1 BOX 219C AURORA WV 26705",
    "phone": ""
  },
  {
    "seq_no": 1450,
    "name": "MR. BARRY ARNOLD 1522 CATHEDRAL WAY AURORA WV 26705",
    "phone": "(304)735-6917"
  },
  {
    "seq_no": 1600,
    "name": "F.T. ARNOLD & SONS 741 DENNETT ROAD OAKLAND MD 21550",
    "phone": "(301)334-9560"
  },
  {
    "seq_no": 1700,
    "name": "FRANK ARNOLD CONTRACTORS INC. 151 OAKLAND DR. OAKLAND MD 21550",
    "phone": "(301)334-2450"
  },
  {
    "seq_no": 1725,
    "name": "TODD ARNOLD CONSTRUCTION 5280 MAPLE SPRING HWY. AURORA WV 26705",
    "phone": "(304)735-5113"
  },
  {
    "seq_no": 1760,
    "name": "ASHBY TRUCK REPAIR PO BOX 643 OAKLAND MD 21550",
    "phone": "(301)334-4440"
  },
  {
    "seq_no": 1775,
    "name": "ARROWHEAD MACHINE 1207 RUSS DEBERRY ROAD TERRA ALTA WV 26764",
    "phone": "(304)789-6490"
  },
  {
    "seq_no": 1800,
    "name": "JOE ASHBY & SONS P.O. BOX 305 OAKLAND MD 21550",
    "phone": "(304)334-2577"
  },
  {
    "seq_no": 2000,
    "name": "ASHBY FIRE EQUIPMENT P.O. BOX 208 OAKLAND MD 21550",
    "phone": "(301)334-2193"
  },
  {
    "seq_no": 2010,
    "name": "ASPLUNDH TREE EXPERTS 316 E. PENNINGTON STREET OAKLAND MD 21550",
    "phone": "(301)359-0467"
  },
  {
    "seq_no": 2015,
    "name": "ASHBY'S TREE FARM 1646 SWANTON ROAD SWANTON MD 21561",
    "phone": "(301)387-9069"
  },
  {
    "seq_no": 2050,
    "name": "AURORA VFD 25781 GEORGE WASHINGTON HWY. AURORA WV 26705",
    "phone": "(304)735-5797"
  },
  {
    "seq_no": 2100,
    "name": "AUTOMOTIVE MACHINE INC. 310 BALTIMORE AVE. MT LAKE PARK MD 21550",
    "phone": "(301)334-1105"
  },
  {
    "seq_no": 2125,
    "name": "AUTO EXPRESS 109 G STREET MT LAKE PARK MD 21550",
    "phone": "(301)334-8446"
  },
  {
    "seq_no": 2150,
    "name": "AUTO SHOP BOX 6 MAPLE STREET BAYARD WV 26707",
    "phone": "(304)693-7660"
  },
  {
    "seq_no": 2160,
    "name": "THE AUTO STATION 12421 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)334-1041"
  },
  {
    "seq_no": 2175,
    "name": "AXALTA COATING SYSTEMS LLC TWO COMMERCE SQUARE 2001 MARKET ST. SUITE 3600 PHILADELPHIA PA 19103",
    "phone": ""
  },
  {
    "seq_no": 2195,
    "name": "BB CUSTOM AIRBRUSH DESIGNS 23508 WESTERNPORT RD WESTERNPORT MD 21562",
    "phone": "(301)707-3815"
  },
  {
    "seq_no": 2200,
    "name": "B & G LUMBER 112 POTOMAC CAMP RD. OAKLAND MD 21550",
    "phone": "(301)334-4974"
  },
  {
    "seq_no": 2225,
    "name": "B & R DISTRIBUTING CO. RT 6 BOX 552 OAKLAND MD 21550-9603",
    "phone": "(301)334-1670"
  },
  {
    "seq_no": 2295,
    "name": "BELT PAVING INC. P.O. BOX 1002 CUMBERLAND MD 21501",
    "phone": ""
  },
  {
    "seq_no": 2300,
    "name": "JAMES P. BELOWSKY 3145 WALNUT BOTTOM RD. SWANTON MD 21561",
    "phone": "(301)453-3241"
  },
  {
    "seq_no": 2410,
    "name": "BAKER'S GARAGE 1423 SILVER KNOB RD. OAKLAND MD 21550",
    "phone": "(301)334-1232"
  },
  {
    "seq_no": 2425,
    "name": "BAYARD V.F.D. BOX 215 ATTN: FELICIA DEWITT BAYARD WV 26707",
    "phone": "(304)698-9618"
  },
  {
    "seq_no": 2430,
    "name": "ROLLING HILLS FARM 1326 HORSE SHOE RUN RD. EGLON WV 26716",
    "phone": "(304)735-5242"
  },
  {
    "seq_no": 2440,
    "name": "BACHTEL ENTERPRISE 230 YOUGHIOGENY DR. AURORA WV 26705",
    "phone": "(304)735-5860"
  },
  {
    "seq_no": 2441,
    "name": "KENNETH BACHTEL MT VIEW FARMS 605 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)616-5570"
  },
  {
    "seq_no": 2442,
    "name": "BACKBONE MT ON-OFF ROAD 4707 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(301)334-5701"
  },
  {
    "seq_no": 2443,
    "name": "BACKBONE MTN. PERFORMANCE 111 SPRUCE ST. DAVISVILLE WV 26142",
    "phone": "(304)844-2237"
  },
  {
    "seq_no": 2445,
    "name": "COUNTRYSIDE LAWN EQUIPMENT 1158 SHADY DELL ROAD OAKLAND MD 21550",
    "phone": "(301)334-3550"
  },
  {
    "seq_no": 2450,
    "name": "O.C. CLUSS 92 SERVICE CENTER DR. OAKLAND MD 21550",
    "phone": "(301)334-3258"
  },
  {
    "seq_no": 2550,
    "name": "BEACHY WELDING 480 CLIFTON DRIVE DEER PARK MD 21550",
    "phone": "(301)334-2726"
  },
  {
    "seq_no": 2555,
    "name": "BEACON RESOURCES INC 208 WEST MUD PIKE RD ROCKWOOD PA 15557",
    "phone": "(814)926-4250"
  },
  {
    "seq_no": 2570,
    "name": "MICKEY BEEMAN 1324 MOUNT ZION RD SWANTON MD 21561",
    "phone": "(301)616-9991"
  },
  {
    "seq_no": 2590,
    "name": "BECKLEY DRILLING P.O. BOX 1907 BEAVER WV 25813",
    "phone": "(304)256-8385"
  },
  {
    "seq_no": 2600,
    "name": "DELBIE BECKMAN 7855 GORMAN RD OAKLAND MD 21550",
    "phone": "(301)334-1201"
  },
  {
    "seq_no": 2605,
    "name": "DIANE BECKMAN P.O. BOX 2023 OAKLAND MD 21550",
    "phone": "(240)321-6601"
  },
  {
    "seq_no": 2650,
    "name": "KEITH BECKMAN 192 TRUESDALE RD OAKLAND MD 21550",
    "phone": "(301)334-8448"
  },
  {
    "seq_no": 2675,
    "name": "KEVIN BECKMAN 514 MAPLE AVENUE MT LAKE PARK MD 21550",
    "phone": ""
  },
  {
    "seq_no": 2700,
    "name": "BECKMAN LUMBER 3832 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-3128"
  },
  {
    "seq_no": 2725,
    "name": "BECKMAN TRUCKING 3832 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-3128"
  },
  {
    "seq_no": 2750,
    "name": "BECKMAN'S VARIETY STORE 3832 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)616-2412"
  },
  {
    "seq_no": 2900,
    "name": "BEITZEL EXCAVATING LLC P.O.BOX 635 OAKLAND MD 21550",
    "phone": "(301)245-4107"
  },
  {
    "seq_no": 3000,
    "name": "BEITZEL CORPORATION ACCOUNTS PAYABLE 333 CORPORATE DR GRANTSVILLE MD 21536",
    "phone": "(301)616-7449"
  },
  {
    "seq_no": 3175,
    "name": "BENNETTS TRUCK PARTS 122 EARL HAUSER RD OAKLAND MD 21550",
    "phone": "(240)422-7732"
  },
  {
    "seq_no": 3200,
    "name": "RYAN \"BIG MONET\" BENTZ 18528 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)616-4338"
  },
  {
    "seq_no": 3300,
    "name": "KEVIN BERNARD 757 SMOUSE RD OAKLAND MD 21550",
    "phone": "(301)859-4080"
  },
  {
    "seq_no": 3400,
    "name": "DEEP CREEK METALS 2662 SPRING LICK SWANTON MD 21561",
    "phone": "(301)387-5536"
  },
  {
    "seq_no": 3425,
    "name": "BILLS MARINE SERVICE 20721 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)895-5115"
  },
  {
    "seq_no": 3470,
    "name": "BILLY BENDER CHEVROLET 10355 MT SAVAGE RD NW CUMBERLAND MD 21502",
    "phone": "(301)334-8133"
  },
  {
    "seq_no": 3500,
    "name": "ALL SEASONS MAINTENANCE 4684 HUTTON RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 3560,
    "name": "BLG BROTHERS LLC. 213 BACHTEL LN EGLON WV 26716",
    "phone": ""
  },
  {
    "seq_no": 3595,
    "name": "JESSICA BITTINGER 507 E ST MOUNTAIN LAKE PARK MD 21550",
    "phone": "(304)259-5216"
  },
  {
    "seq_no": 3600,
    "name": "BLACKWATER FALLS STATE PARK PO BOX 490 1584 BLACKWATER LODGE RD DAVIS WV 26260",
    "phone": "(681)435-9044"
  },
  {
    "seq_no": 3640,
    "name": "BLACKWATER MOTOR COMPANY 13 TLC LN THOMAS WV 26292",
    "phone": "(301)334-4088"
  },
  {
    "seq_no": 3642,
    "name": "TERRY BLAMBLE EXCAVATING 76 EARL HAUSER ROAD OAKLAND MD 21550",
    "phone": "(301)359-3729"
  },
  {
    "seq_no": 3644,
    "name": "BLOOMINGTON VOL. FIRE DEPT P.O. BOX 12 BLOOMINGTON MD 21523",
    "phone": "(301)334-5810"
  },
  {
    "seq_no": 3645,
    "name": "BLUE RIBBON LUMBER 1679 BLUE RIBBON ROAD OAKLAND MD 21550",
    "phone": "(301)334-5810"
  },
  {
    "seq_no": 3650,
    "name": "BLUE RIBBON PALLET 1679 BLUE RIBBON ROAD OAKLAND MD 21550",
    "phone": "(301)334-8716"
  },
  {
    "seq_no": 3700,
    "name": "BLUMS AUTO REPAIR 153 BLUEBERRY LANE OAKLAND MD 21550",
    "phone": "(301)334-4421"
  },
  {
    "seq_no": 3900,
    "name": "BOB'S AUTO REPAIR 345 CRELLIN MINE RD. OAKLAND MD 21550",
    "phone": "(304)435-9251"
  },
  {
    "seq_no": 3925,
    "name": "BOB'S GARAGE & AUTO SALES 33946 VETERANS MEMORIAL HWY. TERRA ALTA WV 26764",
    "phone": "(304)693-7544"
  },
  {
    "seq_no": 3930,
    "name": "BOBS GINSENG 7943 UNION HWY MT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 3950,
    "name": "DAN BOONE 103 WHITE DALE CHURCH RD TERRA ALTA WV 26764",
    "phone": "(301)334-4757"
  },
  {
    "seq_no": 3955,
    "name": "LEROY BOLDING 1740 GARRETT ROAD OAKLAND MD 21550",
    "phone": "(304)813-2778"
  },
  {
    "seq_no": 3975,
    "name": "LEROY'S GARAGE AND TRUCKING LLC 130 DUMP TRUCK LANE MOUNT STORM WV 26739",
    "phone": "(301)616-7590"
  },
  {
    "seq_no": 4000,
    "name": "JEREMY S. BOLYARD CONSTRUCTION P.O. BOX 95 BAYARD WV 26707",
    "phone": "(301)334-6444"
  },
  {
    "seq_no": 4050,
    "name": "BORDERLINE SALES & SERVICE 632 GEORGE WASHINGTON HY OAKLAND MD 21550",
    "phone": "(301)387-0069"
  },
  {
    "seq_no": 4055,
    "name": "BOSLEY CONSTRUCTION 731 LAKESHORE DR. OAKLAND MD 21550",
    "phone": "(304)329-4055"
  },
  {
    "seq_no": 4060,
    "name": "DIGGERS CONSTRUCTION 14642 S. PRESTION HWY KINGWOOD WV 26537",
    "phone": "(301)616-2552"
  },
  {
    "seq_no": 4150,
    "name": "BOYCE AUTO ELECTRIC 5626 SALTLICK RD TERRA ALTA WV 26764",
    "phone": "(301)533-0992"
  },
  {
    "seq_no": 4300,
    "name": "MR. VINCENT E. BOWMAN 1070 SUNRISE DRIVE OAKLAND MD 21550",
    "phone": "(301)746-4033"
  },
  {
    "seq_no": 4500,
    "name": "BRAD'S AUTO REPAIR P.O. BOX 395 FRIENDSVILLE MD 21531",
    "phone": "(301)826-8111"
  },
  {
    "seq_no": 4600,
    "name": "BRENNEMAN WELL DRILLING INC. P.O. BX 245 ACCIDENT MD 21520",
    "phone": "(301)387-8171"
  },
  {
    "seq_no": 4725,
    "name": "BROADWATER REPAIR 4232 SANDFLAT RD. OAKLAND MD 21550",
    "phone": "(301)895-4244"
  },
  {
    "seq_no": 4900,
    "name": "BROADWATER TOWING 159 CHESTNUT RIDGE RD. GRANTSVILLE MD 21536",
    "phone": "(301)616-3161"
  },
  {
    "seq_no": 4915,
    "name": "BROOKSIDE TRUCKING 25973 GEORGE WASHINGTON HWY AURORA WV 26705",
    "phone": ""
  },
  {
    "seq_no": 4920,
    "name": "MR DONNIE G. BROWN RT.3 BOX 210K GORMANIA WV 26720",
    "phone": "(304)693-7323"
  },
  {
    "seq_no": 4925,
    "name": "MR. GARY D. BROWN RT. 1 BOX 205A3 GORMANIA WV 26720",
    "phone": "(301)334-1549"
  },
  {
    "seq_no": 4985,
    "name": "MR. ROGER L. BROWN SR. 4445 MARYLAND HGY. OAKLAND MD 21550",
    "phone": "(301)334-2671"
  },
  {
    "seq_no": 5000,
    "name": "BRODAK'S DISCOUNT LIQOURS 12743 GARRETT HWY SUITE 1 OAKLAND MD 21550",
    "phone": "(301)334-3270"
  },
  {
    "seq_no": 5200,
    "name": "BROWNINGS AUTO SALES 9 CHURCH STREET OAKLAND MD 21550",
    "phone": "(301)334-8105"
  },
  {
    "seq_no": 5325,
    "name": "OAKLAND SHOP N SAVE 406 WEBER ROAD OAKLAND MD 21550",
    "phone": "(304)789-6249"
  },
  {
    "seq_no": 5400,
    "name": "BRYAN'S AUTOBODY 24 GREGGS KNOB RD TERRA ALTA WV 26764",
    "phone": "(301)387-6455"
  },
  {
    "seq_no": 5450,
    "name": "BUDDY'S USED CARS LLC 19326 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(304)621-2494"
  },
  {
    "seq_no": 5460,
    "name": "BURNS AUTO CARE 36 BELDEN DR THOMAS WV 26292",
    "phone": ""
  },
  {
    "seq_no": 5660,
    "name": "BURNS INDUSTRIAL EQUIPMENT 210 THORM HILL ROAD WARRENDALE PA 15086",
    "phone": "(304)789-6864"
  },
  {
    "seq_no": 5700,
    "name": "LARRY BURDICK 127 TERRA ALTA LAKE ROAD TERRA ALTA WV 26764",
    "phone": "(301)746-8227"
  },
  {
    "seq_no": 5900,
    "name": "ART BUTLER AUTO SALES 33728 GARRETT HWY ACCIDENT MD 21520",
    "phone": "(301)334-9677"
  },
  {
    "seq_no": 5975,
    "name": "BUTLER GENERAL HAULING 311 MAYER AVE. TERRA ALTA WV 26764",
    "phone": "(301)616-3041"
  },
  {
    "seq_no": 6000,
    "name": "BUTLER PAINTING 985 GARRETT RD OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 6130,
    "name": "MR. BILL BUTLER 810 SUNNYSIDE RD. OAKLAND MD 21550",
    "phone": "(301)334-9204"
  },
  {
    "seq_no": 6135,
    "name": "BUTTS GARAGE 179 GORMAN STREET OAKLAND MD 21550",
    "phone": "(301)334-4896"
  },
  {
    "seq_no": 6175,
    "name": "C & A HAULING 398 HARLEY LANE OAKLAND MD 21550",
    "phone": "(301)616-8687"
  },
  {
    "seq_no": 6200,
    "name": "C & J HARTSELL TRUCKING LLC RT.3 BOX 77 TERRA ALTA WV 26764",
    "phone": "(304)735-3013"
  },
  {
    "seq_no": 6225,
    "name": "C M USED CARS RR 1 BOX 357 AURORA WV 26705",
    "phone": "(301)334-9170"
  },
  {
    "seq_no": 6250,
    "name": "C.N. METALS 762 JONI MILLER ROAD OAKLAND MD 21550",
    "phone": "(304)789-6648"
  },
  {
    "seq_no": 6255,
    "name": "C & R TREES 609 FEATHER RD TERRA ALTA WV 26764",
    "phone": "(304)692-5721"
  },
  {
    "seq_no": 6300,
    "name": "CRB TIMBER 653 FEATHER RD TERRA ALTA WV 26764",
    "phone": "(304)693-7128"
  },
  {
    "seq_no": 6400,
    "name": "CMC ENTERPRISES HC 76 MT STORM WV 26739",
    "phone": "(301)387-6209"
  },
  {
    "seq_no": 6500,
    "name": "CMC 103 RAILCAR LANE SWANTON MD 21561",
    "phone": "(804)226-7456"
  },
  {
    "seq_no": 6520,
    "name": "CSX EQUIPMENT 1 CSX ROAD RICHMOND VA 23230",
    "phone": "(304)265-0787"
  },
  {
    "seq_no": 6525,
    "name": "CSXT JUSTIN BISHOP 599 CSX WAY GRAFTON WV 26354",
    "phone": "(304)677-2025"
  },
  {
    "seq_no": 6620,
    "name": "CSXT JOSH HAGAN 300 MINERAL ST. KEYSER WV 26726",
    "phone": "(304)472-4193"
  },
  {
    "seq_no": 6625,
    "name": "SUDDENLINK COMMUNICATIONS 68 FIFTH STREET BUCKHANNON WV 26201",
    "phone": "(304)693-7072"
  },
  {
    "seq_no": 6626,
    "name": "MR CECIL A. CALCAMP JR. HC 76 BOX 48 MT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 6635,
    "name": "BRYAN CALHOUN 697 MONTE VISTA RD OAKLAND MD 21550",
    "phone": "(301)334-4189"
  },
  {
    "seq_no": 6638,
    "name": "CALLIS' AUTO DETAILING 4343 MARYLAND HGY. OAKLAND MD 21550",
    "phone": "(301)616-9875"
  },
  {
    "seq_no": 6639,
    "name": "CALVARY LOGGING LLC 315 LEMOYNE KING RD OAKLAND MD 21550",
    "phone": "(301)616-1784"
  },
  {
    "seq_no": 6640,
    "name": "CARDINAL HILL WOODWORKING 89 SWANTAMONT RD SWANTON MD 21561",
    "phone": "(724)329-8700"
  },
  {
    "seq_no": 6650,
    "name": "CANEY VALLEY MARINE 161 CANEY VALLEY RD MARKLEYSBURG PA 15459",
    "phone": "(301)895-3118"
  },
  {
    "seq_no": 6660,
    "name": "CARQUEST AUTO PARTS P.O. BOX 337 GRANTSVILLE MD 21536",
    "phone": "(301)334-6156"
  },
  {
    "seq_no": 6670,
    "name": "CARROLL HARVEY CONTRACTING 409 I ST MOUNTAIN LAKE PARK MD 21550",
    "phone": "(301)729-8900"
  },
  {
    "seq_no": 6671,
    "name": "CARL BELT INC. P.O. BOX 1210 CUMBERLAND MD 21501",
    "phone": 1
  },
  {
    "seq_no": 6672,
    "name": "DOUG THAYER 107 CEMETERY HILL ROAD SWANTON MD 21561",
    "phone": "(301)387-9025"
  },
  {
    "seq_no": 6675,
    "name": "RICK CARVELL P.O. BOX 143 SWANTON MD 21561",
    "phone": "(304)789-2774"
  },
  {
    "seq_no": 6710,
    "name": "BILL CASTEEL RT. 1 BOX43B6 TERRA ALTA WV 26764",
    "phone": "(304)693-7404"
  },
  {
    "seq_no": 6720,
    "name": "CHAPMAN GARAGE P.O. BOX 130 MT STORM WV 26739",
    "phone": "(301)334-1473"
  },
  {
    "seq_no": 6730,
    "name": "CHAPMAN HAULING 208 W. 2ND AVE. MT LAKE PARK MD 21550",
    "phone": "(304)446-5438"
  },
  {
    "seq_no": 6750,
    "name": "CHAPMAN TIMBER RT.1 BOX 151 ELK GARDEN WV 26717",
    "phone": "(301)387-6236"
  },
  {
    "seq_no": 6770,
    "name": "CHASE ASHBY 1648 SWATON RD SWANTON MD 21561",
    "phone": "(304)789-6315"
  },
  {
    "seq_no": 6775,
    "name": "CHASE TRUCKING LLC 1491 BRANDONVILLE PIKE TERRA ALTA WV 26764",
    "phone": "(301)334-4963"
  },
  {
    "seq_no": 6800,
    "name": "MGM RENTALS 2294 OLD CRELLIN RD. OAKLAND MD 21550",
    "phone": "(301)334-5824"
  },
  {
    "seq_no": 6950,
    "name": "CHERRY CREEK ENTERPRISES 143 CHERRY CREEK LANE OAKLAND MD 21550",
    "phone": "(301)895-3194"
  },
  {
    "seq_no": 7000,
    "name": "CHESTNUT RIDGE NURSERY PO. BOX 84 GRANTSVILLE MD 21536",
    "phone": "(301)387-8318"
  },
  {
    "seq_no": 7100,
    "name": "CHRISTIAN CAR CARE 3200 SAND FLAT ROAD OAKLAND MD 21550",
    "phone": "(304)693-7520"
  },
  {
    "seq_no": 7125,
    "name": "CLARK'S EXXON SERVICE CENTER P.O. BOX 233 MT STORM WV 26739",
    "phone": "(304)329-1225"
  },
  {
    "seq_no": 7130,
    "name": "CITY OF KINGWOOD 313 TUNNELTON ST KINGWOOD WV 26537",
    "phone": "(304)463-4360"
  },
  {
    "seq_no": 7150,
    "name": "CITY OF THOMAS P.O BOX 248 THOMAS WV 26292",
    "phone": "(301)334-4995"
  },
  {
    "seq_no": 7160,
    "name": "CLASSIE CAR COMPANY 53 HIGH VIEW DR. OAKLAND MD 21550",
    "phone": "(301)334-4705"
  },
  {
    "seq_no": 7175,
    "name": "CHLOMA FARMS LLC 216 CHLOMA LANE OAKLAND MD 21550",
    "phone": "(304)735-6701"
  },
  {
    "seq_no": 7190,
    "name": "COASTAL LUMBER COMPANY RT. 1 BOX 295 HORSESHOE RUN WV 26716",
    "phone": ""
  },
  {
    "seq_no": 7350,
    "name": "CLAY CAM LOGGING LLC RR 2 BOX 63A MOATSVILLE WV 26405",
    "phone": "(304)789-3040"
  },
  {
    "seq_no": 7400,
    "name": "COLUMBIA GAS & TRANSMISSION 8251 AURORA PIKE TERRA ALTA WV 26764",
    "phone": "(301)334-9431"
  },
  {
    "seq_no": 7450,
    "name": "COMMUNITY ACTION WEATHERIZATIO 104 EAST CENTER ST. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 7452,
    "name": "COMPLETE TRUCKING & TRANSPORT LL 4768 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(304)814-7697"
  },
  {
    "seq_no": 7453,
    "name": "COOK'S AUTO BODY 100 GARDENER'S LANE NEW CREEK WV 26743",
    "phone": "(240)321-2244"
  },
  {
    "seq_no": 7455,
    "name": "THE COMPUTER SHOP 13179 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-0601"
  },
  {
    "seq_no": 7460,
    "name": "CORKS CARS 10012 GARRETT HWY OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 7465,
    "name": "COSNER LOGGING HC 76 BOX 250 MT STORM WV 26739",
    "phone": "(301)616-5897"
  },
  {
    "seq_no": 7468,
    "name": "COSNER TRUCKING 23 EAST WATER ST. OAKLAND MD 21550",
    "phone": "(304)698-9799"
  },
  {
    "seq_no": 7470,
    "name": "COUNTRY ROADS TRANSPORT 188 RIDNOUR RD MORGANTOWN WV 26508",
    "phone": "(304)789-6876"
  },
  {
    "seq_no": 7477,
    "name": "COUNTRY SERVICES CONTACTING LLC 6833 CRANESVILLE ROAD TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 7482,
    "name": "CRANESVILLE QUARRY - KEYSTONE P.O. BOX 318 KINGWOOD WV 26537",
    "phone": "(301)334-3867"
  },
  {
    "seq_no": 7485,
    "name": "CRELLIN ASSEMBLY OF GOD 2220 HUTTON RD OAKLAND MD 21550",
    "phone": "(304)735-6413"
  },
  {
    "seq_no": 7500,
    "name": "CRIMSON SHAMROCK LLC 893 EGLON RD EGLON WV 26716",
    "phone": "(301)387-6300"
  },
  {
    "seq_no": 7600,
    "name": "CUMBERLAND CONCRETE INC. P.O. BOX 3369 LAVALE MD 21502",
    "phone": "(301)334-8551"
  },
  {
    "seq_no": 7650,
    "name": "MR KENN R. CUMMINGS 6285 GEORGE WASH. HIGHWAY OAKLAND MD 21550",
    "phone": "(301)616-9924"
  },
  {
    "seq_no": 7700,
    "name": "CHARLES CUSTER 378 GREEN GABLES ROAD FRIENDSVILLE MD 21531",
    "phone": "(301)387-5751"
  },
  {
    "seq_no": 7800,
    "name": "MR. LEO CUSTER 6148 MARYLAND HWY OAKLAND MD 21550",
    "phone": "(301)501-6712"
  },
  {
    "seq_no": 7815,
    "name": "MR LEONARD CUSTER 864 N GLADE RD SWANTON MD 21561",
    "phone": "(301)334-8784"
  },
  {
    "seq_no": 7975,
    "name": "CUSTOM TOUCH 1225 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)334-2735"
  },
  {
    "seq_no": 7979,
    "name": "DARVIN GANK 337 DINKY TRACK RD OAKLAND MD 21550",
    "phone": "(301)463-2200"
  },
  {
    "seq_no": 7980,
    "name": "D & D MOTORS 19521 NEW GEORGE'S CREEK RD BARTON MD 21521",
    "phone": "(301)334-6990"
  },
  {
    "seq_no": 7985,
    "name": "D & B AUTO 6 BAHIA CT. OCALA FL 34472",
    "phone": "(301)786-4667"
  },
  {
    "seq_no": 7986,
    "name": "D & B WELDING & FABRICATION 23816 OLD STABLES RD. SW. RAWLINGS MD 21557",
    "phone": "(304)789-6223"
  },
  {
    "seq_no": 7987,
    "name": "D & E AUTO SALES INC 32202 VETERANS MEMORIAL HWY TERRA ALTA WV 26764",
    "phone": "(301)334-6033"
  },
  {
    "seq_no": 7988,
    "name": "D & E BODY SHOP 172 GANK RD. CRELLIN MD 21550",
    "phone": "(304)463-4810"
  },
  {
    "seq_no": 7990,
    "name": "D & E TRANSPORT LLC 318 PIERCE BENBUSH RD THOMAS WV 26292",
    "phone": "(301)359-3764"
  },
  {
    "seq_no": 7992,
    "name": "D & J TIMBER 18272 MARYLAND HIGHWAY SWANTON MD 21561",
    "phone": "(301)616-4002"
  },
  {
    "seq_no": 7993,
    "name": "D & M SERVICES 8018 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)616-4745"
  },
  {
    "seq_no": 7995,
    "name": "D & M STONE 201 PEE WEE RD. KITZMILLER MD 21538",
    "phone": "(304)329-1191"
  },
  {
    "seq_no": 7998,
    "name": "D & R DISTRIBUTORS P.O. BOX 1176 KINGWOOD WV 26537",
    "phone": "(301)245-4078"
  },
  {
    "seq_no": 8000,
    "name": "D & S LOGGING 13205 BITTINGER RD. GRANTSVILLE MD 21536",
    "phone": "(301)334-2828"
  },
  {
    "seq_no": 8050,
    "name": "D & S TRUCKING CO. 209 N 11TH STREET OAKLAND MD 21550-1438",
    "phone": "(301)334-9661"
  },
  {
    "seq_no": 8100,
    "name": "DALE'S BODY SHOP P.O. 3138 DEER PARK MD 21550",
    "phone": "(304)265-0188"
  },
  {
    "seq_no": 8200,
    "name": "DAN'S MARINE SERVICE INC 226 N PIKE ST GRAFTON WV 26354",
    "phone": "(301)334-8752"
  },
  {
    "seq_no": 8250,
    "name": "DAVE'S BODY SHOP RT.1 BOX 360 J OAKLAND MD 21550",
    "phone": "(304)789-6309"
  },
  {
    "seq_no": 8400,
    "name": "DAVID'S AUTOMOTIVE REPAIR 2347 ALPINE LAKE RD TERRA ALTA WV 26764",
    "phone": "(301)387-9005"
  },
  {
    "seq_no": 8450,
    "name": "MR. DOUG DAVIS 3325 SAND FLAT RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 8455,
    "name": "DAWSON GARAGE BOX 235 OAK STREET ELK GARDEN WV 26717",
    "phone": "(301)859-5153"
  },
  {
    "seq_no": 8460,
    "name": "DYLAN DAWSON 591 CALDERWOOD RD OAKLAND MD 21550",
    "phone": "(240)321-6677"
  },
  {
    "seq_no": 8475,
    "name": "DCL HVAC SOLUTIONS 1430 WILSON RD OAKLAND MD 21550",
    "phone": "(301)334-3040"
  },
  {
    "seq_no": 8480,
    "name": "DEEP CREEK LANES 499 OAKLAND DRIVE OAKLAND MD 21550",
    "phone": "(301)387-6977"
  },
  {
    "seq_no": 8490,
    "name": "DEEP CREEK MARINA 2010 DEEP CREEK DRQ MC HENRY MD 21541",
    "phone": "(301)859-4080"
  },
  {
    "seq_no": 8500,
    "name": "DEEP CREEK METAL SALES 2662 SPRING LICK RD SWANTON MD 21561",
    "phone": "(301)387-6767"
  },
  {
    "seq_no": 8550,
    "name": "DEEP CREEK MOBIL LUBE 17869 SUITE H GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)387-5560"
  },
  {
    "seq_no": 8600,
    "name": "DEEP CREEK TRUCKING COMPANY 2867 OAKLAND/SANG RUN RD OAKLAND MD 21550",
    "phone": "(301)387-5252"
  },
  {
    "seq_no": 8640,
    "name": "DEEP CREEK VOL. FIRE CO. 1906 DEEP CREEK DR. MCHENRY MD 21541",
    "phone": "(301)334-9321"
  },
  {
    "seq_no": 8675,
    "name": "DEER PARK AUTO BODY 424 EDGEWOOD DR. DEER PARK MD 21550",
    "phone": "(301)334-8340"
  },
  {
    "seq_no": 8700,
    "name": "MARTIN AUTO PARTS 1076 PYSELL CROSSCUT RD. OAKLAND MD 21550",
    "phone": "(301)387-6662"
  },
  {
    "seq_no": 8725,
    "name": "DEER PARK COMMUNITY V.F.D. INC P.O. BOX 3152 DEER PARK MD 21550",
    "phone": "(301)334-2124"
  },
  {
    "seq_no": 8730,
    "name": "DEER PARK SPRING WATER 104 HOTEL DRIVE OAKLAND MD 21550",
    "phone": "(304)823-3654"
  },
  {
    "seq_no": 8750,
    "name": "LITTLE JOHN BLACKSMITH RT. 1 BOX 161 MONTROSE WV 26283",
    "phone": "(304)735-3333"
  },
  {
    "seq_no": 8775,
    "name": "DEERWOOD SERVICE CENTER RR 1 AURORA WV 26705",
    "phone": "(304)693-7159"
  },
  {
    "seq_no": 8785,
    "name": "MR. JOHN DELANEY RT.3 BOX 209C GORMANIA WV 26720",
    "phone": "(304)789-6966"
  },
  {
    "seq_no": 8840,
    "name": "DELANO'S INC. 31658 VETERANS MEMORIAL HWY TERRA ALTA WV 26764",
    "phone": "(301)334-3146"
  },
  {
    "seq_no": 8875,
    "name": "DENROCK EXCAVATING 133 TANNERY ROAD OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 8950,
    "name": "D.N.R. FOREST & PARK TAWES STATE OFFICE BUILD. ANNAPOLIS MD 21401",
    "phone": "(301)334-3620"
  },
  {
    "seq_no": 9000,
    "name": "BETH FRIEND 1624 4TH STREET WAYNESBORO VA 22980",
    "phone": "(301)895-5135"
  },
  {
    "seq_no": 9050,
    "name": "DIEHL'S FORD SALES P.O. BOX 547 GRANTSVILLE MD 21536",
    "phone": "(301)334-4636"
  },
  {
    "seq_no": 9100,
    "name": "MR. DAVID W. DEWITT 1239 SMOUSE RD. OAKLAND MD 21550",
    "phone": "(304)693-7064"
  },
  {
    "seq_no": 9230,
    "name": "DIDIWICK LOGGING P.O. BOX 103 MT STORM WV 26739",
    "phone": "(301)616-3218"
  },
  {
    "seq_no": 9240,
    "name": "DILLEY & ASSO. 452 DILLEY RD OAKLAND MD 21550",
    "phone": "(301)334-9773"
  },
  {
    "seq_no": 9245,
    "name": "MR. EUGENE DILLEY ST. RT. 2 BOX 16D OAKLAND MD 21550",
    "phone": "(301)616-4265"
  },
  {
    "seq_no": 9277,
    "name": "STEVE DILLEY 312 THUNDERHEAD ROAD OAKLAND MD 21550",
    "phone": "(301)334-5665"
  },
  {
    "seq_no": 9280,
    "name": "DIRT WORKS 6042 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-5656"
  },
  {
    "seq_no": 9285,
    "name": "DISCOUNT CABINETS & MORE 3648 SWANTON ROAD SWANTON MD 21561",
    "phone": "(304)735-5459"
  },
  {
    "seq_no": 9295,
    "name": "DIXON AUTOMOTIVE P.O. BOX 114 AURORA WV 26705",
    "phone": "(304)582-1872"
  },
  {
    "seq_no": 9296,
    "name": "ARON DOLLY PO BOX 52 GORMANIA WV 26720",
    "phone": "(240)321-1961"
  },
  {
    "seq_no": 9300,
    "name": "TOMMY DOLLY 1133 BANE CUT OFF RD ELK GARDEN WV 26717",
    "phone": "(301)334-1344"
  },
  {
    "seq_no": 9400,
    "name": "DEER PARK SIGNS 4162 MARYLAND HWY. OAKLAND MD 21550",
    "phone": "(301)334-8892"
  },
  {
    "seq_no": 9425,
    "name": "DOUG'S AUTO & TRUCK REPAIR 109 WEST SECOND AVE MT LAKE PARK MD 21550",
    "phone": "(301)533-3500"
  },
  {
    "seq_no": 9450,
    "name": "DOUBLE M RECYCLING 406 SWANTON RD SWANTON MD 21561",
    "phone": ""
  },
  {
    "seq_no": 9475,
    "name": "DOUBLE R RANCH 237 BILL ROTH RD EGLON WV 26716",
    "phone": "(301)616-6949"
  },
  {
    "seq_no": 9500,
    "name": "DRAGON TIMBER 236 DOC BERNARD RD OAKLAND MD 21550",
    "phone": "(301)616-7002"
  },
  {
    "seq_no": 9600,
    "name": "P&M SERVICES 616 NORRIS WELCH RD OAKLAND MD 21550",
    "phone": "(301)334-3474"
  },
  {
    "seq_no": 9650,
    "name": "PAULA DOVE P.O. BOX 64 OAKLAND MD 21550",
    "phone": "(301)501-6485"
  },
  {
    "seq_no": 9700,
    "name": "MR. CHARLIE DRENNAN III 406 LEIGHTON DR OAKLAND MD 21550",
    "phone": "(301)245-4218"
  },
  {
    "seq_no": 9725,
    "name": "WATERS RUN ENTERPRISE 3044 DRY RUN RD. SWANTON MD 21561",
    "phone": ""
  },
  {
    "seq_no": 9759,
    "name": "AXALTA PAINT P.O. BOX 8500 PHILADELPHIA PA 19178",
    "phone": "(304)698-7005"
  },
  {
    "seq_no": 9760,
    "name": "DURST FARMS 7023 LANTZ RIDGE RD AURORA WV 26705",
    "phone": "(301)895-5902"
  },
  {
    "seq_no": 9780,
    "name": "DURST PLUMBING & HEATING 842 CHESTNUT RIDGE RD. GRANTSVILLE MD 21536",
    "phone": "(301)387-4556"
  },
  {
    "seq_no": 9800,
    "name": "E & S GENERAL CONTRACTING 1691 SWALLOW FALLS ROAD OAKLAND MD 21550",
    "phone": "(301)334-2940"
  },
  {
    "seq_no": 9801,
    "name": "PAUL EVERLY 514 E STREET MT LAKE PARK MD 21550",
    "phone": "(240)321-0524"
  },
  {
    "seq_no": 9900,
    "name": "E-Z EXCAVATING LLC 1499 GNEGY CHURCH RD OAKLAND MD 21550",
    "phone": "(301)616-2904"
  },
  {
    "seq_no": 9915,
    "name": "EASTERN HORIZON 281 SMOUSE ROAD OAKLAND MD 21550",
    "phone": "(304)789-6700"
  },
  {
    "seq_no": 9975,
    "name": "EAST PRESTON TIRE P.O. BOX 12 TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 10000,
    "name": "GEORGE C. EDWARDS P.O. BOC 658 GRANTSVILLE MD 21536",
    "phone": "(304)735-3761"
  },
  {
    "seq_no": 10100,
    "name": "EGLON FARM SERVICE INC. P.O. BOX 98 EGLON WV 26716",
    "phone": "(301)334-9160"
  },
  {
    "seq_no": 10150,
    "name": "EISENTROUTS USED CARS 3793 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)334-3666"
  },
  {
    "seq_no": 10170,
    "name": "ELAINE'S AUTO DETAILING 1865 SILVER KNOB ROAD OAKLAND MD 21550",
    "phone": "(304)789-5050"
  },
  {
    "seq_no": 10175,
    "name": "THE END ZONE 34001 VETERANS MEMORIAL HWY TERRA ALTA WV 26764",
    "phone": "(301)387-8220"
  },
  {
    "seq_no": 10200,
    "name": "ENNSTONE INC T/A DEEP CREEK P.O. BOX 6090 FALMOTH VA 22403",
    "phone": "(301)334-3748"
  },
  {
    "seq_no": 10230,
    "name": "DALE E. EVANS SCHOOL BUS ACCOU 3450 MARYLAND HWY. OAKLAND MD 21550",
    "phone": "(304)735-3027"
  },
  {
    "seq_no": 10245,
    "name": "EVANS LOGGING 3952 SENECA TRL EGLON WV 26716",
    "phone": "(301)334-4960"
  },
  {
    "seq_no": 10247,
    "name": "ERVIN'S TREE REMOVAL 515 DECOST RD. OAKLAND MD 21550",
    "phone": "(304)749-7252"
  },
  {
    "seq_no": 10255,
    "name": "EVANS STORE GENERAL DELIVERY SCHERR WV 26726",
    "phone": "(304)735-3027"
  },
  {
    "seq_no": 10270,
    "name": "EVANS TRUCKING LLC 3952 SENECA TRL EGLON WV 26716",
    "phone": "(304)698-6829"
  },
  {
    "seq_no": 10275,
    "name": "EVERSON RESOURCES P.O. BOX 606 KINGWOOD WV 26537",
    "phone": "(301)387-5013"
  },
  {
    "seq_no": 10282,
    "name": "EXCAVATING BY DAN BAKER P.O. BOX 95 OAKLAND MD 21550",
    "phone": "(410)785-0100"
  },
  {
    "seq_no": 10400,
    "name": "EXPLOSIVES EXPERTS INC P.O. BOX 718 PARKTON MD 21120-0718",
    "phone": "(301)334-8101"
  },
  {
    "seq_no": 10425,
    "name": "FAIRFAX MATERIALS, INC. 8490 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(304)463-4230"
  },
  {
    "seq_no": 10430,
    "name": "FAIRFAX MACHINE & WELDING 41 QUAIL RIDGE DR THOMAS WV 26292",
    "phone": "(304)735-6500"
  },
  {
    "seq_no": 10450,
    "name": "FAST FREDDY'S LLC 27354 GEORGE WASHINGTON HWY AURORA WV 26705",
    "phone": "(301)334-4172"
  },
  {
    "seq_no": 10490,
    "name": "FAITH EVANGELICAL FREE CHURCH 1009 MARYLAND HIGHWAY MT LAKE PARK MD 21550",
    "phone": "(304)379-9226"
  },
  {
    "seq_no": 10500,
    "name": "FEATHER TRUCKING 2388 BEACH RUN RD. ALBRIGHT WV 26519",
    "phone": "(304)940-1803"
  },
  {
    "seq_no": 10575,
    "name": "MR. PHILLIP FERGUSON JR 521 FERGUSON RD OAKLAND MD 21550",
    "phone": "(304)735-5146"
  },
  {
    "seq_no": 10600,
    "name": "MR. PHILLIP R. FIKE 232 FIKE DRIVE AURORA WV 26705",
    "phone": "(304)789-2309"
  },
  {
    "seq_no": 10625,
    "name": "FIKE NURSERY RR1 BOX 404 CORINTH WV 26764",
    "phone": "(304)789-2309"
  },
  {
    "seq_no": 10650,
    "name": "FIKE TRUCKING RR 1 BOX 404 CORINTH WV 26764",
    "phone": "(304)698-6543"
  },
  {
    "seq_no": 10750,
    "name": "J. FINT CONSTRUCTION 23748 GEORGE WASHINGTON HWY PO BOX A AURORA WV 26705",
    "phone": "(301)334-9471"
  },
  {
    "seq_no": 10850,
    "name": "FIRST UNITED NATIONAL BANK AND 19 SOUTH SECOND STREET OAKLAND MD 21550",
    "phone": "(301)334-2181"
  },
  {
    "seq_no": 10900,
    "name": "FISHER AUTO PARTS OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 11000,
    "name": "TOM FITZWATER 567 KINGS RUN RD. OAKLAND MD 21550",
    "phone": "(301)334-4375"
  },
  {
    "seq_no": 11100,
    "name": "FREDERICK L. FITZWATER BUSING 2636 PYSELL CROSSCUT RD OAKLAND MD 21550",
    "phone": "(301)334-2612"
  },
  {
    "seq_no": 11200,
    "name": "FITZWATER FURNITURE 1947 MARYLAND HIGHWAY OAKLAND MD 21550",
    "phone": "(304)463-4623"
  },
  {
    "seq_no": 11225,
    "name": "FLANCO 137 NELSON RD THOMAS WV 26292",
    "phone": "(301)533-2140"
  },
  {
    "seq_no": 11250,
    "name": "FLEET MAINTENANCE SERVICE LLC 300 INDUSTRIAL DR OAKLAND MD 21550",
    "phone": "(301)334-4848"
  },
  {
    "seq_no": 11300,
    "name": "FLYING SCOT INC. 157 CEMETERY ST. DEER PARK MD 21550",
    "phone": "(301)334-3930"
  },
  {
    "seq_no": 11350,
    "name": "E R FOGLEPOLE TRUCK CO. P.O. BOX 2039 MT LAKE PARK MD 21550",
    "phone": "(304)446-5548"
  },
  {
    "seq_no": 11400,
    "name": "FOUR GENERATIONS LOGGING RT 1 BOX 98 ELK GARDEN WV 26717",
    "phone": "(301)387-5320"
  },
  {
    "seq_no": 11475,
    "name": "FOUR SEASONS REAL ESTATE P.O. BOX 552 OAKLAND MD 21550",
    "phone": "(301)387-2770"
  },
  {
    "seq_no": 11550,
    "name": "KOPE ENTERPRISES 182 YOUGHOGHENY PATH OAKLAND MD 21550",
    "phone": "(301)501-8760"
  },
  {
    "seq_no": 11610,
    "name": "DWAYNE FRATZ TRUCKING 858 ACCIDENT BITTINGER RD. ACCIDENT MD 21520",
    "phone": "(301)334-2262"
  },
  {
    "seq_no": 11795,
    "name": "ONE STOP TOWING AND TRANSPORT LL 23 NORTH 4TH ST. OAKLAND MD 21550",
    "phone": "(240)321-3108"
  },
  {
    "seq_no": 11800,
    "name": "ALEX FRIEND 110 E 2ND AVE LOCH LYNN MD 21550",
    "phone": "(301)334-4487"
  },
  {
    "seq_no": 11900,
    "name": "MR. CURTIS R. FRIEND 4246 BROADFORD RD. DEER PARK MD 21550",
    "phone": "(301)334-4512"
  },
  {
    "seq_no": 12000,
    "name": "MR. DAVID FRIEND 494 MEADOW MT. TRAIL SWANTON MD 21561",
    "phone": "(301)616-1287"
  },
  {
    "seq_no": 12010,
    "name": "MR. JERRY B. FRIEND 4437 MARYLAND HWY OAKLAND MD 21550",
    "phone": "(301)746-5690"
  },
  {
    "seq_no": 12015,
    "name": "FRIENDSVILLE AMMOCO MAIN STREET FRIENDSVILLE MD 21531",
    "phone": "(301)689-9380"
  },
  {
    "seq_no": 12020,
    "name": "MATTHEW FRITZ 2978 LOWER NEW GERMANY ROAD FROSTBURG MD 21532",
    "phone": "(301)689-0166"
  },
  {
    "seq_no": 12025,
    "name": "FROSTBURG CARQUEST P.O. BOX 456 FROSTBURG MD 21532",
    "phone": "(301)334-1649"
  },
  {
    "seq_no": 12040,
    "name": "RICHARD FRIEND FARM 1716 GORMAN RD. OAKLAND MD 21550",
    "phone": "(301)334-2696"
  },
  {
    "seq_no": 12045,
    "name": "G & C CONSTRUCTION 93 ASHBY CEMETARY RD OAKLAND MD 21550",
    "phone": "(304)693-7813"
  },
  {
    "seq_no": 12050,
    "name": "G & G AUTO P.O. BOX 163 BAYARD WV 26707",
    "phone": "(304)735-5836"
  },
  {
    "seq_no": 12075,
    "name": "G & G EXCAVATING P.O. BOX 39 AURORA WV 26705",
    "phone": "(301)895-5984"
  },
  {
    "seq_no": 12082,
    "name": "JERRY FRITZ 10744 NEW GERMANY ROAD GRANTSVILLE MD 21536",
    "phone": "(301)689-5376"
  },
  {
    "seq_no": 12083,
    "name": "G & J LOGGING, INC 371 LANCASTER HILL RD LONACONING MD 21539",
    "phone": "(301)501-5988"
  },
  {
    "seq_no": 12085,
    "name": "GMAS 2552 SAND FLAT ROAD OAKLAND MD 21550",
    "phone": "(301)334-8186"
  },
  {
    "seq_no": 12100,
    "name": "GMS MINE REPAIR & MAINTENCE P.O. BOX 2446 MT LAKE PARK MD 21550",
    "phone": "(301)359-3003"
  },
  {
    "seq_no": 12115,
    "name": "G & S COAL CO. P.O. BOX 185 BLOOMINGTON MD 21523",
    "phone": "(301)616-5762"
  },
  {
    "seq_no": 12170,
    "name": "G.W. CONTRACTING 5388 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(304)789-2602"
  },
  {
    "seq_no": 12175,
    "name": "CRISTOPHER GANK RT. 2 TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 12200,
    "name": "JEFF GANK 938 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)387-6148"
  },
  {
    "seq_no": 12227,
    "name": "GARRETT AUTOMOTIVE CO. 18582 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(301)334-9431"
  },
  {
    "seq_no": 12230,
    "name": "G.C. COMM. ACTION HOUSING DEPT 104 E. CENTER STREET OAKLAND MD 21550",
    "phone": "(301)334-8113"
  },
  {
    "seq_no": 12250,
    "name": "GARRETT COUNTY HOME HEALTH",
    "phone": "(301)387-6666"
  },
  {
    "seq_no": 12300,
    "name": "GARRETT COMMUNITY COLLEGE P.O.BOX 151 MCHENRY MD 21541",
    "phone": "(301)334-8924"
  },
  {
    "seq_no": 12310,
    "name": "GARRETT COUNTY BOARD OF EDUCAT 40 S 2ND ST OAKLAND MD 21550",
    "phone": "(301)334-8918"
  },
  {
    "seq_no": 12320,
    "name": "GARRETT CO BD OF ED FNS 770 DENNETT RD OAKLAND MD 21550",
    "phone": "(301)334-1928"
  },
  {
    "seq_no": 12325,
    "name": "GARRETT CO FACILITIES & MAN 203 S 4TH ST RM 211 OAKLAND MD 21550",
    "phone": "(301)334-8116"
  },
  {
    "seq_no": 12350,
    "name": "GARRETT COUNTY HEALTH DEPT. 2008 MARYLAND HIGHWAY OAKLAND MD 21550",
    "phone": "(301)533-4000"
  },
  {
    "seq_no": 12375,
    "name": "GARRETT CO. MEMORIAL HOSPITAL 251 N. FOURTH ST. OAKLAND MD 21550",
    "phone": "(301)387-0322"
  },
  {
    "seq_no": 12400,
    "name": "GARRETT COUNTY OFFICE OF SOLID 3118 OAKLAND SANG RUN RD OAKLAND MD 21550",
    "phone": "(301)334-1510"
  },
  {
    "seq_no": 12500,
    "name": "GARRETT COUNTY ROADS 2008 MARYLAND HWY PUBLIC SERVICE CENTER- SUITE 3 OAKLAND MD 21550",
    "phone": "(301)334-6976"
  },
  {
    "seq_no": 12600,
    "name": "G.C. SANITARY DISTRICT, INC. 2008 MARYLAND HWY, SUITE 2 SHOP 301-334-8382 MT LAKE PARK MD 21550",
    "phone": "(301)334-1911"
  },
  {
    "seq_no": 12660,
    "name": "GARRETT COUNTY SHERIFFS DEPRAR 311 E ALDER STREET OAKLAND MD 21550",
    "phone": "(301)334-4577"
  },
  {
    "seq_no": 12669,
    "name": "GARRETT ELECTRIC 258 N. 3RD. STREET OAKLAND MD 21550",
    "phone": "(301)334-9559"
  },
  {
    "seq_no": 12690,
    "name": "GARRETT EQUIPMENT RENTALS LLC 14599 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-7900"
  },
  {
    "seq_no": 12700,
    "name": "GARRETT MEDICAL TRANSPORT P.O. BOX 728 OAKLAND MD 21550",
    "phone": "(301)334-4136"
  },
  {
    "seq_no": 12750,
    "name": "GARRETT MINE SUPPLY 104 COMMERCE DR. OAKLAND MD 21550",
    "phone": "(301)334-9431"
  },
  {
    "seq_no": 12775,
    "name": "GARRETT TRANSIT SERVICE 225 FRANCIS SANDERS DR. W OAKLAND MD 21550",
    "phone": "(301)334-5705"
  },
  {
    "seq_no": 12780,
    "name": "GARY'S AUTO SALES 4422 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(240)321-5664"
  },
  {
    "seq_no": 12790,
    "name": "GARY'S GARAGE 28453 GARRETT HWY ACCIDENT MD 21520",
    "phone": "(304)735-5226"
  },
  {
    "seq_no": 12793,
    "name": "GENE'S REPAIR SHOP 179 HORSE SHOE RUN ROAD EGLON WV 26716",
    "phone": "(301)616-7955"
  },
  {
    "seq_no": 12795,
    "name": "THE GEORGE'S CREEK CO, INC C/O GREG SHOCKEY 178 GLOTFELTY DR OAKLAND MD 21550",
    "phone": "(304)693-7380"
  },
  {
    "seq_no": 12800,
    "name": "GETZ'S MART HC 76 BOX 730 MOUNT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 12950,
    "name": "GIB'S MECHANICAL 8190 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(814)623-7485"
  },
  {
    "seq_no": 13000,
    "name": "GINGERICH CONCRETE CONSTRUCTIO 5438 BUS RT. 220 BEDFORD PA 15522",
    "phone": ""
  },
  {
    "seq_no": 13060,
    "name": "GLADE VIEW DAIRY FARM 795 GLADE VIEW DAIRY OAKLAND MD 21550",
    "phone": "(301)334-3900"
  },
  {
    "seq_no": 13100,
    "name": "GLASS UNLIMITED P.O. BOX 147 OAKLAND MD 21550",
    "phone": "(301)334-3911"
  },
  {
    "seq_no": 13125,
    "name": "GLOTFELTY ENTERPRISES P.O. BOX 438 OAKLAND MD 21550",
    "phone": "(301)616-5749"
  },
  {
    "seq_no": 13150,
    "name": "JOHNATHAN JAMES 302 SHENANDOAH AVE OAKLAND MD 21550",
    "phone": "(301)334-4100"
  },
  {
    "seq_no": 13200,
    "name": "GLOTFELTY LUMBER 1063 MEMORIAL DR. OAKLAND MD 21550",
    "phone": "(301)334-8524"
  },
  {
    "seq_no": 13250,
    "name": "MR. MIKE GLOTFELTY 150 TURKEY NECK ROAD SWANTON MD 21561",
    "phone": "(301)334-2997"
  },
  {
    "seq_no": 13400,
    "name": "JAMES GLOTFELTY RT. 5 OAKLAND MD 21550",
    "phone": "(301)334-1238"
  },
  {
    "seq_no": 13530,
    "name": "GNEGY'S PAINTING 1319 STOCKSLAGER RD. OAKLAND MD 21550",
    "phone": "(301)454-2060"
  },
  {
    "seq_no": 13540,
    "name": "MARK GOFF RT1 BOX650 ROWLESBURG WV 26425",
    "phone": "(724)828-2800"
  },
  {
    "seq_no": 13550,
    "name": "GOLDEN TRIANGLE CONST CO INC 8555 OLD STEUBENVILLE PIKE IMPERIAL PA 15126",
    "phone": "(301)895-3227"
  },
  {
    "seq_no": 13600,
    "name": "JIM GORDON 6226 NATIONAL PIKE GRANTSVILLE MD 21536",
    "phone": "(301)334-1600"
  },
  {
    "seq_no": 13605,
    "name": "GORMAN V.F.D. INC. 270 GORMAN ROAD OAKLAND MD 21550",
    "phone": "(301)616-1696"
  },
  {
    "seq_no": 13630,
    "name": "GORMANIA GARAGE 9192 GEORGE WASHINGTON HWY GORMANIA WV 26720",
    "phone": "(301)334-3006"
  },
  {
    "seq_no": 13635,
    "name": "GRAND CENTRAL STATION 312 S. THIRD STREET OAKLAND MD 21550",
    "phone": "(304)749-7451"
  },
  {
    "seq_no": 13640,
    "name": "GRANT COUNTY MULCH INC 181 MULCH DR PETERSBURG WV 26847",
    "phone": "(301)895-3133"
  },
  {
    "seq_no": 13645,
    "name": "GRANTSVILLE LIQUORS P.O. BOX 356 GRANTSVILLE MD 21536",
    "phone": "(301)895-5574"
  },
  {
    "seq_no": 13650,
    "name": "GRANTSVILLE MARKET P.O. BOX 548 GRANTSVILLE MD 21536",
    "phone": "(301)895-5585"
  },
  {
    "seq_no": 13660,
    "name": "GRANTSVILLE STATION 162 SOUTH STREET GRANTSVILLE MD 21536",
    "phone": "(301)895-5356"
  },
  {
    "seq_no": 13775,
    "name": "GRANTSVILLE TRUCK & TRAILER P.O. BOX 693 GRANTSVILLE MD 21536",
    "phone": "(304)866-4911"
  },
  {
    "seq_no": 13780,
    "name": "GREENBRIER ENTERPRISE INC RT. 1 BOX 83 DAVIS WV 26260",
    "phone": "(301)334-6007"
  },
  {
    "seq_no": 13800,
    "name": "GREEN THINGS LLC. P.O BOX 224 OAKLAND MD 21550",
    "phone": "(301)334-4588"
  },
  {
    "seq_no": 13825,
    "name": "GREENS AUTO REPAIR 161 MONTA VISTA ROAD OAKLAND MD 21550",
    "phone": "(301)616-3297"
  },
  {
    "seq_no": 13925,
    "name": "KELBY GREEN 161 MONTA VISTA RD OAKLAND MD 21550",
    "phone": "(301)245-4385"
  },
  {
    "seq_no": 13975,
    "name": "BILL GREEN 3176 DRY RUN ROAD SWANTON MD 21561-9653",
    "phone": "(304)789-6231"
  },
  {
    "seq_no": 14000,
    "name": "GRIMM LUMBER INC. 78 WOOD ROCK RD TERRA ALTA WV 26764",
    "phone": "(304)698-5559"
  },
  {
    "seq_no": 14100,
    "name": "JOHN'S AUTO REPAIR 55 FRONT ST TERRA ALTA WV 26764",
    "phone": "(301)359-9716"
  },
  {
    "seq_no": 14150,
    "name": "JOHN GROVES REPAIR AND BODY SHOP 334 HIGH CREST DRIVE SWANTON MD 21561",
    "phone": ""
  },
  {
    "seq_no": 14200,
    "name": "QUITIN L GUTHIE JR 1714 UNDERWOOD RD OAKLAND MD 21550",
    "phone": "(301)334-9014"
  },
  {
    "seq_no": 14250,
    "name": "RED GUTHRIE 159 KENDALL ROAD OAKLAND MD 21550",
    "phone": "(301)334-3963"
  },
  {
    "seq_no": 14260,
    "name": "THE REPUBLICAN P.O. BOX 326 OAKLAND MD 21550",
    "phone": "(304)614-8012"
  },
  {
    "seq_no": 14265,
    "name": "H & A TRUCKING, LLC 1582 PIERCE BENBUSH RD THOMAS WV 26292",
    "phone": "(304)288-1215"
  },
  {
    "seq_no": 14275,
    "name": "H & H TRUCKING & AUTO BODY PO BOX 78 ARTHURDALE WV 26520",
    "phone": "(301)334-3789"
  },
  {
    "seq_no": 14520,
    "name": "HARD TIMES LOGGING 2247 MARYLAND HWY. MT LAKE PARK MD 21550",
    "phone": "(301)334-9319"
  },
  {
    "seq_no": 14530,
    "name": "HAMILTON FARMS 24 HAMILTON WAY OAKLAND MD 21550",
    "phone": "(301)533-6920"
  },
  {
    "seq_no": 14600,
    "name": "HANLIN PERFORMANCE 309 SENECA AVE OAKLAND MD 21550",
    "phone": "(301)334-3955"
  },
  {
    "seq_no": 14605,
    "name": "NORMAN HANLINE EXCAVATING 1018 JOHN DRIVE OAKLAND MD 21550",
    "phone": "(301)334-3017"
  },
  {
    "seq_no": 14650,
    "name": "RAY HANLINE EXCAVATING 358 SMITH DRIVE OAKLAND MD 21550",
    "phone": "(304)735-3046"
  },
  {
    "seq_no": 14700,
    "name": "HARDESTY EXCAVATING 759 STANLEY HOOVER RD. TERRA ALTA WV 26764",
    "phone": "(304)698-8789"
  },
  {
    "seq_no": 14800,
    "name": "JOE'S SERVICES 5360 STEMPLE RIDGE RD. AURORA WV 26705",
    "phone": "(301)334-2629"
  },
  {
    "seq_no": 14850,
    "name": "BBT 2623 BETHLEHEM ROAD OAKLAND MD 21550",
    "phone": "(301)334-2327"
  },
  {
    "seq_no": 14950,
    "name": "HARDESTY LOGGING 330 MILLSTONE RD CRAWFORD WV 26343",
    "phone": "(301)616-8687"
  },
  {
    "seq_no": 14975,
    "name": "HARTSELL LOGGING INC 2858 MAPLE SPRING HWY EGLON WV 26716",
    "phone": "(301)334-3358"
  },
  {
    "seq_no": 14980,
    "name": "HARRIS POOLS P.O. BOX 3124 OAKLAND MD 21550",
    "phone": "(304)735-6495"
  },
  {
    "seq_no": 15000,
    "name": "WADE HARSH FARMS 740 EGLON ROAD EGLON WV 26716",
    "phone": "(304)735-6455"
  },
  {
    "seq_no": 15100,
    "name": "LYVONNE HARSH FARM 2119 ACCIDENT RD EGLON WV 26716",
    "phone": "(301)334-4166"
  },
  {
    "seq_no": 15125,
    "name": "HARVEY TRUCKING 217 MINGO AVE OAKLAND MD 21550",
    "phone": "(301)334-2808"
  },
  {
    "seq_no": 15150,
    "name": "JOHN HARVEY 32 AUDLEY RILEY RD. OAKLAND MD 21550",
    "phone": "(301)334-5801"
  },
  {
    "seq_no": 15375,
    "name": "PAUL D. HARVEY 291 LOCH DEER ROAD OAKLAND MD 21550",
    "phone": "(301)334-3645"
  },
  {
    "seq_no": 15400,
    "name": "HAUSER TRUCKING 14782 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(304)749-8670"
  },
  {
    "seq_no": 15405,
    "name": "HAWK BROS. LOGGING HC 72 SCHERR WV 26729",
    "phone": "(304)789-6286"
  },
  {
    "seq_no": 15425,
    "name": "HAWKEYE SERVICES 915 WEST STATE AVE. TERRA ALTA WV 26764",
    "phone": "(304)927-3032"
  },
  {
    "seq_no": 15450,
    "name": "HEETER CONSTRUCTION LLC 513 CHARLESTON RD SPENCER WV 25276",
    "phone": "(301)334-9492"
  },
  {
    "seq_no": 15455,
    "name": "MR. GEORGE HEBB 1979 TABLE ROCK ROAD OAKLAND MD 21550",
    "phone": "(240)442-7202"
  },
  {
    "seq_no": 15470,
    "name": "JEFFERY HEBB 29 HAINES RD OAKLAND MD 21550",
    "phone": "(301)616-6218"
  },
  {
    "seq_no": 15475,
    "name": "STUART THAYER 3849 UNDERWOOD RD OAKLAND MD 21550",
    "phone": "(301)245-4320"
  },
  {
    "seq_no": 15500,
    "name": "THERESA HELBIG-MILLER 149 ENGLEWOOD LANE GRANTSVILLE MD 21536",
    "phone": "(301)334-0551"
  },
  {
    "seq_no": 15600,
    "name": "HELBIG'S GARAGE 1229 GARRETT ROAD OAKLAND MD 21550",
    "phone": "(301)334-9598"
  },
  {
    "seq_no": 15650,
    "name": "HELBIG'S RT 560 CARPET SHOPPE 7773 GORMAN ROAD OAKLAND MD 21550",
    "phone": "(301)334-9012"
  },
  {
    "seq_no": 15660,
    "name": "HELBIG'S REPAIR SHOP 5677 HUTTON RD. OAKLAND MD 21550",
    "phone": "(304)446-5218"
  },
  {
    "seq_no": 15670,
    "name": "HERITAGE STONE 518 FEATHERS RD ELK GARDEN WV 26717",
    "phone": "(814)634-7451"
  },
  {
    "seq_no": 15675,
    "name": "HERITAGE COAL AND NATURAL RESOUR 550 BEAGLE RD ROCKWOOD PA 15557",
    "phone": "(301)334-9180"
  },
  {
    "seq_no": 15680,
    "name": "HERRINGTON MANOR STATE PARK 222 HERRINGTON LANE OAKLAND MD 21550",
    "phone": "(301)334-6100"
  },
  {
    "seq_no": 15700,
    "name": "HERSHMAN AUTO SALES 257 OAKLAND DR. OAKLAND MD 21550",
    "phone": "(301)616-9155"
  },
  {
    "seq_no": 15725,
    "name": "HERSHMAN AUTO SALES 257 OAKLAND DR. OAKLAND MD 21550",
    "phone": "(614)876-1700"
  },
  {
    "seq_no": 15730,
    "name": "HERSHMAN AUTO SALES 257 OAKLAND DR. OAKLAND MD 21550",
    "phone": "(614)876-1700"
  },
  {
    "seq_no": 15740,
    "name": "HERSHMAN CONSTRUCTION LLC 116 TIMBER FALLS DRIVE OAKLAND MD 21550",
    "phone": "(301)689-8120"
  },
  {
    "seq_no": 15750,
    "name": "HI-WAY PAVING 4343 WEAVER COURT NORTH PO BOX 550 HILLIARD OH 43026",
    "phone": "(301)334-5060"
  },
  {
    "seq_no": 15800,
    "name": "HI-WAY TRANSPORT LLC 4343 WEAVER COURT NORTH PO BOX 550 HILLIARD OH 43026",
    "phone": "(301)334-9306"
  },
  {
    "seq_no": 15900,
    "name": "HICKORY STABLES 414 CHANEY RD LONACONING MD 21539",
    "phone": "(301)533-0253"
  },
  {
    "seq_no": 15910,
    "name": "HIGH MT. ON/OFF ROAD 12534 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(301)387-7967"
  },
  {
    "seq_no": 15925,
    "name": "HINEBAUGH'S REPAIR 14 CHARLES LN DEER PARK MD 21550",
    "phone": "(301)334-8360"
  },
  {
    "seq_no": 15930,
    "name": "HOLLAND BROS. LANDSCAPING 125 EVERGREEN FOREST DR. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 15935,
    "name": "HOLLAND ELECTRIC P.O BOX 3030 SWANTON MD 21561",
    "phone": "(814)662-2807"
  },
  {
    "seq_no": 15950,
    "name": "HOLLAND NURSERY 1354 HUTTON RD. OAKLAND MD 21550",
    "phone": "(301)334-8631"
  },
  {
    "seq_no": 15975,
    "name": "HOLLAND TRUCKING LLC 125VEVERGREEN FOREST DRIVE OAKLAND MD 21550",
    "phone": "(304)789-2352"
  },
  {
    "seq_no": 15979,
    "name": "HOLLADA'S GARAGE P.O. BOX 53 W. SALISBURY PA 15562",
    "phone": ""
  },
  {
    "seq_no": 15987,
    "name": "HOP'S SHOP 4407 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)334-6235"
  },
  {
    "seq_no": 16000,
    "name": "HOPEMONT AUTO 32882 VETERANS MEMORIAL HWY TERRA ALTA WV 26764",
    "phone": "(304)379-6211"
  },
  {
    "seq_no": 16200,
    "name": "HOPEMONT HOSPITAL 150 HOPEMONT DR TERRA ALTA WV 26764",
    "phone": "(301)334-1712"
  },
  {
    "seq_no": 16225,
    "name": "HENRY HOSTUTLER 96 SANDERS LANE OAKLAND MD 21550",
    "phone": "(301)334-8682"
  },
  {
    "seq_no": 16400,
    "name": "HUMBERSON EQUIPMENT & BUILDING ROUTE 3 BOX 174A BRUCETON MILLS WV 26525",
    "phone": "(800)424-1980"
  },
  {
    "seq_no": 16425,
    "name": "HUTTON AUTO 464 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)334-6911"
  },
  {
    "seq_no": 16450,
    "name": "HUTZEL TRUCKING 1231 FRIENDSVILLE ADDISON RD FRIENDSVILLE MD 21531",
    "phone": "(301)334-8873"
  },
  {
    "seq_no": 16525,
    "name": "INDUSTRIAL SERVICE CONTRACTORS P.O. BOX 35051 BALTIMORE MD 21222",
    "phone": "(301)334-1527"
  },
  {
    "seq_no": 16535,
    "name": "IRON HORSE LOGGING 81 BETHLEHEM RD. OAKLAND MD 21550",
    "phone": "(301)334-9391"
  },
  {
    "seq_no": 16549,
    "name": "IRVING'S UPHOLSTERY & FIRE ARM 171 WASGINGTON HWY. OAKLAND MD 21550",
    "phone": "(304)698-3446"
  },
  {
    "seq_no": 16550,
    "name": "JDK LOGGING LLC P.O. BOX 2175 OAKLAND MD 21550",
    "phone": "(301)616-0362"
  },
  {
    "seq_no": 16650,
    "name": "JSJ TRUCKING PO BOX 712 OAKLAND MD 21550",
    "phone": "(800)834-3131"
  },
  {
    "seq_no": 16685,
    "name": "J & A AUTO REPAIR 891 CATHEDRAL WAY AURORA WV 26705",
    "phone": "(301)616-6000"
  },
  {
    "seq_no": 16725,
    "name": "J & B LOGGING INC. 712 SUNSHINE DRIVE MT LAKE PARK MD 21550",
    "phone": "(301)334-4509"
  },
  {
    "seq_no": 16750,
    "name": "J & J CHOICE P.O. BOX 86 TERRA ALTA WV 26764",
    "phone": "(301)334-8309"
  },
  {
    "seq_no": 16800,
    "name": "J & L BODY SHOP 1028 ROSS AVE. FRIENDSVILLE MD 21531",
    "phone": "(301)387-6093"
  },
  {
    "seq_no": 16805,
    "name": "III C'S CONSTRUCTION 367 SNOW DUMP MT. RD. OAKLAND MD 21550",
    "phone": "(301)616-9474"
  },
  {
    "seq_no": 16807,
    "name": "J & L REPAIR SHOP 1565 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(304)940-3246"
  },
  {
    "seq_no": 16810,
    "name": "J & R TEXACO P.O. BOX 435 OAKLAND KITZMILLER MD 21538",
    "phone": "(301)387-9144"
  },
  {
    "seq_no": 16815,
    "name": "J.B.E.A. LOGGING LLC 574 BEITZEL VALLEY DR ACCIDENT MD 21520",
    "phone": "(301)616-4681"
  },
  {
    "seq_no": 16850,
    "name": "JD AUTOMOTIVE PO BOX 781 DAVIS WV 26260",
    "phone": "(301)895-5481"
  },
  {
    "seq_no": 16900,
    "name": "J.D. EXCAVATING LLC 392 BRAY SCHOOL RD. OAKLAND MD 21550",
    "phone": "(301)501-0056"
  },
  {
    "seq_no": 17000,
    "name": "J.M. CONTRACTING 3783 PLEASANT VALLEY RD. OAKLAND MD 21550",
    "phone": "(301)334-8523"
  },
  {
    "seq_no": 17110,
    "name": "JIM JACKSON 11517 NATIONAL PIKE GRANTSVILLE MD 21536",
    "phone": "(301)334-6272"
  },
  {
    "seq_no": 17113,
    "name": "BOB JAMES EXCAVATING 418 MAYBERRY POLING RD. SWANTON MD 21550",
    "phone": "(304)676-3042"
  },
  {
    "seq_no": 17115,
    "name": "LARRY JAMES JR. 302 SHENANDOAH AVE. MT LAKE PARK MD 21550",
    "phone": "(304)698-7031"
  },
  {
    "seq_no": 17125,
    "name": "JASCO FAB. & MACHINE 1404 GARRETT HWY OAKLAND MD 21550",
    "phone": "(304)789-5209"
  },
  {
    "seq_no": 17325,
    "name": "JEFF'S AUTO BODY 190 POWER STATION HWY MOUNT STORM WV 26739",
    "phone": "(301)334-1534"
  },
  {
    "seq_no": 17400,
    "name": "JEFF'S REPAIR 5726 CRANSVILLE RD OAKLAND MD 21550",
    "phone": "(304)693-7367"
  },
  {
    "seq_no": 17500,
    "name": "JIM'S REPAIR SERVICE RT. 2 BOX 54E1 TERRA ALTA WV 26764",
    "phone": "(304)693-7080"
  },
  {
    "seq_no": 17625,
    "name": "JOHNS BODY SHOP 2301 HUTTON RD OAKLAND MD 21550",
    "phone": "(301)533-0552"
  },
  {
    "seq_no": 17630,
    "name": "JONES BROTHERS LOGGING RT1. BOX 151-J 370 JONES HOLLOW ELK GARDEN WV 26717",
    "phone": "(301)616-6975"
  },
  {
    "seq_no": 17650,
    "name": "JONES TRUCKING RT. 1 BOX 17 ELK GARDEN WV 26717",
    "phone": "(304)693-7130"
  },
  {
    "seq_no": 17750,
    "name": "JUNK TO JEWEL 23 CHADDERTON SCHOOL RD OAKLAND MD 21550",
    "phone": "(301)722-1600"
  },
  {
    "seq_no": 17760,
    "name": "JUKEBOX'S AUTO REPAIR 8630 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(301)895-3552"
  },
  {
    "seq_no": 17810,
    "name": "MR. JIM JUNKINS P.O. BOX 134 MT STORM WV 26739",
    "phone": "(301)697-4129"
  },
  {
    "seq_no": 17820,
    "name": "DEPT JUVENILE SERVICES YOUTH 1 JAMES DAY CUMBERLAND MD 21502",
    "phone": "(301)334-1853"
  },
  {
    "seq_no": 17840,
    "name": "GREG KAMP EXCAVATING 539 CHANEY RD. LONACONING MD 21539",
    "phone": "(304)813-6282"
  },
  {
    "seq_no": 17865,
    "name": "KAMP TRANSPORT 47 BROADWATER CEMENTARY RD SWANTON MD 21561",
    "phone": "(304)525-7811"
  },
  {
    "seq_no": 17866,
    "name": "KEITH SHAFFERS REPAIR 3015 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)334-0677"
  },
  {
    "seq_no": 17867,
    "name": "KEPLINGER SERVICES LLC 186 ENERGY WAY GORMANIA WV 26720",
    "phone": "(301)334-5229"
  },
  {
    "seq_no": 17869,
    "name": "J.H. FLETCHER & CO. 402 HIGH ST. HUNTINGTON WV 25722",
    "phone": "(304)788-6666"
  },
  {
    "seq_no": 17875,
    "name": "K & W CLEANING 212 PAUL FRIEND RD. OAKLAND MD 21550",
    "phone": "(814)662-2711"
  },
  {
    "seq_no": 17900,
    "name": "JIM KENNER REPAIR SHOP P.O. BOX 2105 MT LAKE PARK MD 21550",
    "phone": "(301)746-5087"
  },
  {
    "seq_no": 17920,
    "name": "KEYSER CARQUEST AUTO PARTS 375 WEST PIEDMONT ST KEYSER WV 26726",
    "phone": ""
  },
  {
    "seq_no": 17925,
    "name": "KEYSTONE LIME COMPANY P.O. BOX 278 SPRINGS PA 15562",
    "phone": "(301)334-4129"
  },
  {
    "seq_no": 17950,
    "name": "KEYSTONE PAVING INC. 19746 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(301)334-8117"
  },
  {
    "seq_no": 18000,
    "name": "TOMMY KING 412 I STREET OAKLAND MD 21550",
    "phone": "(301)334-2880"
  },
  {
    "seq_no": 18050,
    "name": "KINSINGER'S CENTRAL TRACTOR 175 PAUL FRIEND ROAD OAKLAND MD 21550",
    "phone": "(304)788-3371"
  },
  {
    "seq_no": 18160,
    "name": "PAUL KINSINGER 3941 PLEASANT VALLEY RD. OAKLAND MD 21550",
    "phone": "(301)334-1121"
  },
  {
    "seq_no": 18185,
    "name": "DARRELL KITZMILLER P.O. BOX 2224 MT LAKE PARK MD 21550",
    "phone": "(301)616-6598"
  },
  {
    "seq_no": 18200,
    "name": "KESSEL MULCH CO. INC. 66 CUT OFF RD KEYSER WV 26726",
    "phone": "(301)453-3392"
  },
  {
    "seq_no": 18275,
    "name": "TERRY KING 182 KING-REISS LANE DEER PARK MD 21550",
    "phone": "(301)693-7443"
  },
  {
    "seq_no": 18300,
    "name": "ZANE KISNER 231 HUNTERS DRIVE OAKLAND MD 21550",
    "phone": "(304)693-7723"
  },
  {
    "seq_no": 18375,
    "name": "KITZMILLER FIRE DEPT. INC. P.O BOX 438 KITZMILLER MD 21538",
    "phone": "(301)334-3436"
  },
  {
    "seq_no": 18425,
    "name": "RUSTY A. KITZMILLER HC 76 BOX 302 MT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 18465,
    "name": "KITZMILLER GARAGE PO BOX 47 MOUNT STORM WV 26739",
    "phone": "(304)693-7035"
  },
  {
    "seq_no": 18468,
    "name": "DENNIS KNOTTS 11 LOCOMOTIVE AVE GORMANIA WV 26720",
    "phone": ""
  },
  {
    "seq_no": 18480,
    "name": "KNOTTS LUMBER 4250 KITZMILLER RD. KITZMILLER MD 21538",
    "phone": "(301)387-0115"
  },
  {
    "seq_no": 18595,
    "name": "ROBERT KUHN 8351 UNION HWY. APT. 7 MT STORM WV 26739",
    "phone": "(301)387-7228"
  },
  {
    "seq_no": 18600,
    "name": "TOM KUHN-FUNLAND 409 FAIRWAY DRIVE OAKLAND MD 21550",
    "phone": "(301)616-6701"
  },
  {
    "seq_no": 18650,
    "name": "LAKEFRONT ENTERPRISES 23 MELLINGER ROAD SWANTON MD 21561",
    "phone": "(301)334-2562"
  },
  {
    "seq_no": 18675,
    "name": "LAKEVIEW AUTO PARTS P.O. BOX 359 MCHENRY MD 21541",
    "phone": "(304)693-7860"
  },
  {
    "seq_no": 18677,
    "name": "LAKEVIEW AUTOMOTIVE 4757 SANG RUN RD. MCHENRY MD 21541",
    "phone": "(304)789-5108"
  },
  {
    "seq_no": 18685,
    "name": "MR. GENE E. LAMBERT 6 CALLICOAT ROAD OAKLAND MD 21550",
    "phone": "(301)334-8431"
  },
  {
    "seq_no": 18686,
    "name": "GARY LAMBKA REPAIR P.O. BOX 106 MT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 18690,
    "name": "JENNIFER LAMBKA RR 1 BOX 424 CORINTH WV 26764",
    "phone": "(304)735-6835"
  },
  {
    "seq_no": 18695,
    "name": "LAND DESIGN LLC 198 APPLE BLOSSOM LANE OAKLAND MD 21550",
    "phone": "(301)616-2505"
  },
  {
    "seq_no": 18700,
    "name": "CHARLES LANGFORD PO BOX 294 ROWLESBURG WV 26425",
    "phone": "(301)334-4607"
  },
  {
    "seq_no": 18950,
    "name": "LANTZ DAIRY 705 SHILLINGBURG RD. AURORA WV 26705",
    "phone": ""
  },
  {
    "seq_no": 19000,
    "name": "LANTZ DAIRY 705 SHILLINGBURG RD. AURORA WV 26705",
    "phone": "(304)735-3425"
  },
  {
    "seq_no": 19015,
    "name": "GREG LAWSON 105 LOUVINA DR LONACONING MD 21539",
    "phone": ""
  },
  {
    "seq_no": 19200,
    "name": "LAOC CORPORATION 3388 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(301)453-3467"
  },
  {
    "seq_no": 19385,
    "name": "MIKE LAWSON 2439 OLD MORGANTOWN RD. W FRIENDSVILLE MD 21531",
    "phone": ""
  },
  {
    "seq_no": 19390,
    "name": "LAYMAN'S BODY SHOP 1314 CATHEDRAL WAY AURORA WV 26705",
    "phone": "(304)789-2611"
  },
  {
    "seq_no": 19400,
    "name": "GARY LAYMAN 246 OLD NEW GERMANY RD GRANTSVILLE MD 21536",
    "phone": "(301)334-1485"
  },
  {
    "seq_no": 19450,
    "name": "LEE'S BODY SHOP 671 PEE WEE RD. KITZMILLER MD 21538",
    "phone": "(301)334-2992"
  },
  {
    "seq_no": 19451,
    "name": "JEFF LEWIS 2011 GARRETT ROAD OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 19500,
    "name": "LEWIS & BURGE, INC. PO BOX 106 TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 19515,
    "name": "LEWIS & SONS 399 KINGS RUN RD. OAKLAND MD 21550",
    "phone": "(301)334-8691"
  },
  {
    "seq_no": 19520,
    "name": "LEWIS USED CARS 940 PYSELL CROSSCUT RD OAKLAND MD 21550",
    "phone": "(301)334-6918"
  },
  {
    "seq_no": 19525,
    "name": "LEWIS FARM 7582 SALTLICK RD TERRA ALTA WV 26764",
    "phone": "(301)616-2625"
  },
  {
    "seq_no": 19540,
    "name": "BILL LEWIS 202 SANDER LANE OAKLAND MD 21550",
    "phone": "(304)693-7885"
  },
  {
    "seq_no": 19541,
    "name": "GARY L. LEWIS P.O. BOX 472 OAKLAND MD 21550",
    "phone": "(301)387-7181"
  },
  {
    "seq_no": 19542,
    "name": "JAMIE L. LEWIS 318 ALLEGANY DRIVE OAKLAND MD 21550",
    "phone": "(304)813-8028"
  },
  {
    "seq_no": 19545,
    "name": "MR. RONALD LEWIS 1515 STEYER MINE ROAD OAKLAND MD 21550",
    "phone": "(304)735-3017"
  },
  {
    "seq_no": 19547,
    "name": "LINK RESOURCES INC. C/O NORTH BRANCH OPERATIO BAYARD WV 26707",
    "phone": "(301)334-9536"
  },
  {
    "seq_no": 19550,
    "name": "LINSCO 19139 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-2552"
  },
  {
    "seq_no": 19600,
    "name": "LIBERTY MOTORSPORTS 350 HIILTOP AVE KEYSER WV 26726",
    "phone": "(301)334-1706"
  },
  {
    "seq_no": 19625,
    "name": "LIPSCOMB'S LAWN PRODUCTS 306 STEINER COUNTRY LANE EGLON WV 26716",
    "phone": "(301)334-1726"
  },
  {
    "seq_no": 19700,
    "name": "LITTLE JOE'S CONTRACTING 778 OLD CRELLIN RD. OAKLAND MD 21550",
    "phone": "(301)334-3409"
  },
  {
    "seq_no": 19750,
    "name": "LITTLE MOUNTAIN ENTERPRISES 340 LADY SLIPPER LANE OAKLAND MD 21550",
    "phone": "(814)662-4238"
  },
  {
    "seq_no": 19755,
    "name": "LOCH LYNN SERVICE CENTER 5 WEST 3RD AVE. LOCH LYNN MD 21550",
    "phone": "(301)338-2372"
  },
  {
    "seq_no": 19758,
    "name": "ROBERT LOCKMILLER 5626 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)616-6465"
  },
  {
    "seq_no": 19760,
    "name": "LOHR DISTRIBUTORS 320 SOUTH EIGHTH STREET OAKLAND MD 21550",
    "phone": "(240)321-1970"
  },
  {
    "seq_no": 19775,
    "name": "ED LOTTIG GARAGE 733 SAINT PAUL RD. MEYERSDALE PA 15552",
    "phone": "(301)334-4533"
  },
  {
    "seq_no": 19800,
    "name": "EDDIE'S AUTO MOBLIE DETAIL 15517 SHAMROCK RD CUMBERLAND MD 21502",
    "phone": "(304)693-7039"
  },
  {
    "seq_no": 20025,
    "name": "EDWARDS CONSTRUCTION 2023 FINGERBOARD RD OAKLAND MD 21550",
    "phone": "(301)334-3069"
  },
  {
    "seq_no": 20045,
    "name": "EDM TRUCKING 1321 WHITE CHURCH ROAD OAKLAND MD 21550",
    "phone": "(240)321-5483"
  },
  {
    "seq_no": 20050,
    "name": "LONG BRANCH U HAUL 1501 MARYLAND HWY OAKLAND MD 21550",
    "phone": "(301)777-2137"
  },
  {
    "seq_no": 20100,
    "name": "LES TAYLOR SMALL ENGINE REPAIR HC 76 BOX 703 MT STORM WV 26739",
    "phone": "(240)321-1871"
  },
  {
    "seq_no": 20125,
    "name": "LUCAS LANDSCAPING 846 JASPER RILEY RD. OAKLAND MD 21550",
    "phone": "(301)387-4111"
  },
  {
    "seq_no": 20150,
    "name": "MAID TO SPARKLE 915 STATE ST KITZMILLER MD 21538",
    "phone": ""
  },
  {
    "seq_no": 20175,
    "name": "MARYLAND FOREST SERVICE 3 PERSHING ST. CUMBERLAND MD 21502",
    "phone": "(301)387-2300"
  },
  {
    "seq_no": 20200,
    "name": "ROB'S AUTO & BODY SHOP 388 WEST LIBERTY ST. OAKLAND MD 21550",
    "phone": "(301)616-3167"
  },
  {
    "seq_no": 20225,
    "name": "MARYLAND DNR DEEP CREEK LAKE R.A. SWANTON MD 21561",
    "phone": "(304)789-6906"
  },
  {
    "seq_no": 20230,
    "name": "MARYLAND ENVIRONMENTAL SERVICE 259 NAJOLES RD MILLERSVILLE MD 21108",
    "phone": "(304)813-7413"
  },
  {
    "seq_no": 20233,
    "name": "MARYLAND MINERALS INC. 19746 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(304)446-5448"
  },
  {
    "seq_no": 20235,
    "name": "BKN REPAIR 6128 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(301)334-0737"
  },
  {
    "seq_no": 20240,
    "name": "LUKE'S AUTO CLINIC 203 WEST HIGHLAND AVE. TERRA ALTA WV 26764",
    "phone": "(301)895-5151"
  },
  {
    "seq_no": 20275,
    "name": "MCT INC RT 5 BOX 190 KEYSER WV 26726",
    "phone": "(301)334-4817"
  },
  {
    "seq_no": 20300,
    "name": "M & J REPAIR SERVICE LLC. 1348 BOSLEY RD KEYSER WV 26726",
    "phone": "(301)334-2109"
  },
  {
    "seq_no": 20325,
    "name": "M & N AUTOMOTIVE P.O. BOX 3127 DEER PARK MD 21550",
    "phone": "(304)735-5879"
  },
  {
    "seq_no": 20350,
    "name": "M & S STONE QUARRY P.O. BOX 357 GRANTSVILLE MD 21536",
    "phone": "(301)453-3385"
  },
  {
    "seq_no": 20375,
    "name": "MADIGAN'S AUTO SALES P.O. BOX 3148 DEER PARK MD 21550",
    "phone": "(301)334-2941"
  },
  {
    "seq_no": 20400,
    "name": "MANOR BUILDERS SUPPLY INC. 1375 MARYLAND HWY MT LAKE PARK MD 21550",
    "phone": "(301)826-8514"
  },
  {
    "seq_no": 20500,
    "name": "MAPLE HURST FARM 524 GNEGY CHURCH RD. EGLON WV 26716",
    "phone": "(240)321-0947"
  },
  {
    "seq_no": 20525,
    "name": "MAPLE LANE NURSERY 373 SHORT RUN ROAD KITZMILLER MD 21538",
    "phone": "(304)735-6382"
  },
  {
    "seq_no": 20550,
    "name": "MARPLE MULCHING LLC 519 LEMOYE KING RD OAKLAND MD 21550",
    "phone": "(301)729-8090"
  },
  {
    "seq_no": 20700,
    "name": "MARGROFF BROTHERS ROUTE 2 BOX 13 ACCIDENT MD 21520",
    "phone": "(301)334-2903"
  },
  {
    "seq_no": 20780,
    "name": "MARK'S BODY SHOP 17255 MARYLAND HIGHWAY SWANTON MD 21561",
    "phone": ""
  },
  {
    "seq_no": 20790,
    "name": "MARKED SOLUTIONS 1448 CATHEDRAL WAY AURORA WV 26705",
    "phone": "(301)334-9095"
  },
  {
    "seq_no": 20800,
    "name": "MARKWOOD PREOWNED 17201 MCMULLEN HWY CUMBERLAND MD 21502",
    "phone": "(304)693-7751"
  },
  {
    "seq_no": 20875,
    "name": "MARTIN AUTO BODY 2247 HUTTON RD. OAKLAND MD 21550",
    "phone": "(301)334-3284"
  },
  {
    "seq_no": 20900,
    "name": "M & W TRANSMISSION P.O. BOX 2391 MT LAKE PARK MD 21550",
    "phone": "(301)334-1813"
  },
  {
    "seq_no": 20975,
    "name": "HARRY L. MARTIN BUS ACCOUNT 9605 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-4255"
  },
  {
    "seq_no": 21000,
    "name": "MARTIN'S GARAGE P.O.BOX 256 BAYARD WV 26707",
    "phone": "(301)334-2133"
  },
  {
    "seq_no": 21025,
    "name": "MARTIN'S USED PARTS 4906 GARRETT HIGHWAT OAKLAND MD 21550",
    "phone": "(301)387-1101"
  },
  {
    "seq_no": 21040,
    "name": "MYRON MARTIN ROUTE 2 BOX 2K OAKLAND MD 21550",
    "phone": "(304)454-9555"
  },
  {
    "seq_no": 21045,
    "name": "MARYLAND DNR-WILDLIFE&HERITAGE 1728 KINGS RUN ROAD OAKLAND MD 21550",
    "phone": "(301)916-1413"
  },
  {
    "seq_no": 21047,
    "name": "MARYLAND STATE HIGHWAY ADMINIS 3876 NATIONAL PIKE ACCIDENT MD 21520-9785",
    "phone": "(304)698-7007"
  },
  {
    "seq_no": 21050,
    "name": "MARYLAND STATE POLICE 67 FRIENDSVILLE RD MCHENRY MD 21541",
    "phone": "(304)698-9622"
  },
  {
    "seq_no": 21100,
    "name": "MASTERS FARM RT. 1 BOX 792 ROWLESBURG WV 26425",
    "phone": "(301)616-2962"
  },
  {
    "seq_no": 21101,
    "name": "MCCLUNG FARMS 10117 JOHNS DRIVE DAMASCUS MD 20872",
    "phone": "(301)616-2962"
  },
  {
    "seq_no": 21160,
    "name": "TOM MCCONNELL FARM 183 HAUGER KNOB RD TERRA ALTA WV 26764",
    "phone": "(301)334-2916"
  },
  {
    "seq_no": 21190,
    "name": "MCFARLAND REPAIR & WELDING 105 SANDERS ST. TERRA ALTA WV 26764",
    "phone": "(304)678-3653"
  },
  {
    "seq_no": 21200,
    "name": "DAYTON MCKENZIE 300 WHITE OAK LANE OAKLAND MD 21550",
    "phone": "(301)387-4600"
  },
  {
    "seq_no": 21250,
    "name": "DAYTON MCKENZIE 300 WHITE OAK LANE OAKLAND MD 21550",
    "phone": "(301)334-5180"
  },
  {
    "seq_no": 21300,
    "name": "MR. CLAYTON P. MILLER 1230 MANSFIELD ROAD OAKLAND MD 21550",
    "phone": "(301)387-6815"
  },
  {
    "seq_no": 21360,
    "name": "MEADOW RIDGE CONTRACTING INC. P.O. BOX 50 TERRA ALTA WV 26764",
    "phone": "(304)735-5722"
  },
  {
    "seq_no": 21375,
    "name": "MELLINGER REPAIR 210 FOUR M RD. SWANTON MD 21561",
    "phone": "(301)895-3444"
  },
  {
    "seq_no": 21390,
    "name": "MR. RANDY MELLINGER 1207 FINGERBOARD RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 21400,
    "name": "HOMER MELLOTT 1375 MELLOTT RD OAKLAND MD 21550",
    "phone": "(859)685-6320"
  },
  {
    "seq_no": 21401,
    "name": "MELROB TRUCKING INC. 169 FLOYD BOLYARD DRIVE AURORA WV 26705-8623",
    "phone": "(859)685-6320"
  },
  {
    "seq_no": 21405,
    "name": "MENGES TRUCKING 4239 NATIONAL PIKE GRANTSVILLE MD 21536",
    "phone": "(301)334-3952"
  },
  {
    "seq_no": 21410,
    "name": "METTIKI COAL 293 TABLE ROCK RD. OAKLAND MD 21550",
    "phone": "(859)224-7221"
  },
  {
    "seq_no": 21500,
    "name": "METTIKI COAL LLC PO BOX 910850 LEXINGTON KY 40591",
    "phone": "(301)616-3511"
  },
  {
    "seq_no": 21525,
    "name": "METTIKI COAL LLC F MINE PO BOX 910850 LEXINGTON KY 40591",
    "phone": "(301)387-2587"
  },
  {
    "seq_no": 21550,
    "name": "METTIKI COAL FILTER 293 TABLEROCK ROAD OAKLAND MD 21550",
    "phone": "(301)334-9695"
  },
  {
    "seq_no": 21600,
    "name": "METTIKI COAL (PRESTON) ATTN: JOY UPCHURCH 771 CORPORATE DRIVE STE 1000 LEXINGTON KY 40503",
    "phone": "(301)334-2146"
  },
  {
    "seq_no": 21650,
    "name": "MIKE'S AUTO & BODY 197 HARDESTY RD KITZMILLER MD 21538",
    "phone": "(301)334-4816"
  },
  {
    "seq_no": 21700,
    "name": "MICKS MAINTENANCE PO BOX 112 SWANTON MD 21561",
    "phone": "(301)616-9211"
  },
  {
    "seq_no": 21800,
    "name": "R.J. STONE 2684 GARRETT RD OAKLAND MD 21550",
    "phone": "(301)334-6086"
  },
  {
    "seq_no": 21850,
    "name": "MY-O-TIRE 133 WEBER ROAD OAKLAND MD 21550",
    "phone": "(304)789-2803"
  },
  {
    "seq_no": 21900,
    "name": "MIGHTY DISTRIBUTORS 515 D STREET MT LAKE PARK MD 21550",
    "phone": "(301)334-4303"
  },
  {
    "seq_no": 21915,
    "name": "MIKE'S BODY SHOP 532 DRY RUN RD SWANTON MD 21561",
    "phone": "(301)689-1260"
  },
  {
    "seq_no": 21920,
    "name": "MIKE'S REPAIR 4374 MARYLAND HWY OAKLAND MD 21550",
    "phone": "(240)321-3836"
  },
  {
    "seq_no": 21950,
    "name": "MILL BOUND TRUCKING LLC 64 RUSS DEBERRY RD TERRA ALTA WV 26764",
    "phone": "(301)245-4006"
  },
  {
    "seq_no": 21965,
    "name": "RALPH P. MILLER 1734 MASON SCHOOL RD. OAKLAND MD 21550",
    "phone": "(301)689-8108"
  },
  {
    "seq_no": 21966,
    "name": "RAY MILLER 7973 AVILTON-LONACONING ROAD LONACONING MD 21539",
    "phone": ""
  },
  {
    "seq_no": 21968,
    "name": "DAVID\"THE JAKE\" MILLER 5480 HUTTON RD OAKLAND MD 21550",
    "phone": "(304)788-1305"
  },
  {
    "seq_no": 21970,
    "name": "MARVIN MILLER 359 SMITH ROAD GRANTSVILLE MD 21536",
    "phone": "(301)334-2128"
  },
  {
    "seq_no": 21974,
    "name": "MILLER'S WELDING INC. 7945 AVILTON-LONACONING RD. LONACONING MD 21539",
    "phone": "(301)359-0135"
  },
  {
    "seq_no": 21975,
    "name": "MILLS ENTERPRISES LLC 1803 POTOMAC CAMP RD OAKLAND MD 21550",
    "phone": "(301)334-9113"
  },
  {
    "seq_no": 21976,
    "name": "MITCH BODY SHOP RT. 1 BOX 131 KEYSER WV 26726",
    "phone": "(304)789-2519"
  },
  {
    "seq_no": 21977,
    "name": "MILRO SERVICES, INC. P.O. BOX 2367 OAKLAND MD 21550",
    "phone": "(240)321-2165"
  },
  {
    "seq_no": 21978,
    "name": "MICHEAL MOON 1779 SAVAGE RIVER ROAD SWANTON MD 21561",
    "phone": "(301)334-5978"
  },
  {
    "seq_no": 21979,
    "name": "MOONIE'S AUTO REPAIR 2753 STEYER MINE ROAD OAKLAND MD 21550",
    "phone": "(304)693-7139"
  },
  {
    "seq_no": 21980,
    "name": "MONTCROFT FARMS 797 POTATO FARM RD TERRA ALTA WV 26764",
    "phone": "(301)334-1303"
  },
  {
    "seq_no": 21982,
    "name": "MOORE RACING 778 OLD CRELLIN RD OAKLAND MD 21550",
    "phone": "(301)533-4401"
  },
  {
    "seq_no": 21984,
    "name": "MORELAND TRUCKING LLC 5992 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 21985,
    "name": "JOHN MORELAND PO BOX 87 MOUNT STORM WV 26739",
    "phone": "(301)334-0695"
  },
  {
    "seq_no": 21987,
    "name": "MORGAN SERVICES 397 MORGAN'S LANE OAKLAND MD 21550",
    "phone": "(304)813-2650"
  },
  {
    "seq_no": 21990,
    "name": "MORSAW LOGGING 6128 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(240)321-2021"
  },
  {
    "seq_no": 22000,
    "name": "MOUNTAINEER CONTRACTORS PO BOX 606 KINGWOOD WV 26537",
    "phone": "(301)387-6563"
  },
  {
    "seq_no": 22200,
    "name": "MOUNTAIN ENTERPRISES INC PO BOX 315 MC HENRY MD 21541",
    "phone": "(304)735-6500"
  },
  {
    "seq_no": 22250,
    "name": "MOUNTAIN MAN CONTRACTING 16642 GEORGE WASHINGTON HWY MOUNT STORM WV 26739",
    "phone": "(301)334-3234"
  },
  {
    "seq_no": 22300,
    "name": "MOUNTAIN VIEW FARM 1375 BLUE RIBBON RD OAKLAND MD 21550",
    "phone": "(304)693-7667"
  },
  {
    "seq_no": 22500,
    "name": "MT. COUNTIES CONSTRUCTION CO. 951 FOSTER RD. OAKLAND MD 21550",
    "phone": "(301)334-8518"
  },
  {
    "seq_no": 22550,
    "name": "MT. GROVE V. F. D. 385 MAPLE SPRING HWY. EGLON WV 26716",
    "phone": "(304)693-7157"
  },
  {
    "seq_no": 22650,
    "name": "MT. LAKE INDEPENDENT BAPTIST C 1005 BROADFORD RD OAKLAND MD 21550",
    "phone": "(304)735-6951"
  },
  {
    "seq_no": 22675,
    "name": "MT. TOP PUBLIC SERVICE DISTRIC P.O. BOX 236 MT STORM WV 26739",
    "phone": "(304)693-7075"
  },
  {
    "seq_no": 22677,
    "name": "MT. STATE WIRE & FENCE CO. 22266 GEORGE WASHINGTON HWY AURORA WV 26705",
    "phone": "(301)334-3050"
  },
  {
    "seq_no": 22680,
    "name": "MT. STORM V.F.D. INC. P.O. BOX 14 MT STORM WV 26739",
    "phone": "(301)334-0728"
  },
  {
    "seq_no": 22700,
    "name": "MT. TOP FARMS RT. 1 BOX 205 AURORA WV 26705",
    "phone": "(301)387-6604"
  },
  {
    "seq_no": 22710,
    "name": "MT. TOP GARAGE RT 1 BOX 227 B ELK GARDEN WV 26717",
    "phone": "(301)334-2831"
  },
  {
    "seq_no": 22715,
    "name": "MT. TOP GLASS P.O. BOX 442 OAKLAND MD 21550",
    "phone": "(301)334-4896"
  },
  {
    "seq_no": 22720,
    "name": "MT. TOP MOWERS 411 M STREET OAKLAND MD 21550",
    "phone": "(304)735-3612"
  },
  {
    "seq_no": 22725,
    "name": "MT. TOP PAVING 16617 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(240)321-2021"
  },
  {
    "seq_no": 22750,
    "name": "MT. TOP SEAL COATING 53 BIRD AVENUE OAKLAND MD 21550",
    "phone": "(301)334-3568"
  },
  {
    "seq_no": 22800,
    "name": "MT. TOP TREE FARM 398 HARLEY LANE OAKLAND MD 21550",
    "phone": "(301)387-9305"
  },
  {
    "seq_no": 22900,
    "name": "MT VALLEY FARM 505 SHUMAKER-COLE RD EGLON WV 26716",
    "phone": "(304)789-2147"
  },
  {
    "seq_no": 22920,
    "name": "MT. VIEW FARMS 1375 BLUE RIBBON RD. OAKLAND MD 21550",
    "phone": "(301)616-4628"
  },
  {
    "seq_no": 22935,
    "name": "MT. VILLA ASSOCIATES P.O. BOX 522 OAKLAND MD 21550",
    "phone": "(301)334-1188"
  },
  {
    "seq_no": 22950,
    "name": "MR. JEFF MUENCHOW 17848 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)453-3383"
  },
  {
    "seq_no": 22955,
    "name": "BALL PRE-OWNED AUTO PO BOX 1 TERRA ALTA WV 26764",
    "phone": "(304)735-3410"
  },
  {
    "seq_no": 22981,
    "name": "MURPHY'S GARAGE PO BOX 90 GORMANIA WV 26720",
    "phone": "(812)339-9000"
  },
  {
    "seq_no": 22990,
    "name": "MUSTANG EXPRESS 18140 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)387-9370"
  },
  {
    "seq_no": 23000,
    "name": "HERBERT MYERS INC. BOX 1261 KITZMILLER MD 21538",
    "phone": "(301)245-4384"
  },
  {
    "seq_no": 23050,
    "name": "MYERS & SON TRUCKING 6039 STEMPLE RIDGE RD AURORA WV 26705-8139",
    "phone": "(301)334-3934"
  },
  {
    "seq_no": 23055,
    "name": "NATIONAL SALVAGE & SERVICE PO BOX 300 CLEAR CREEK IN 47426",
    "phone": "(304)789-6835"
  },
  {
    "seq_no": 23060,
    "name": "NATURE'S OWN LANDSCAPING 6936 SANG RUN RD. MCHENRY MD 21541",
    "phone": "(301)334-5797"
  },
  {
    "seq_no": 23070,
    "name": "MIKEY NICHOLS 9169 GEORGE WASHINGTON HWY PO BOX 7 GORMANIA WV 26720",
    "phone": "(240)675-2429"
  },
  {
    "seq_no": 23075,
    "name": "A.D. NAYLOR'S CONTRACTING 32 S. THIRD ST. OAKLAND MD 21550",
    "phone": "(301)697-0777"
  },
  {
    "seq_no": 23080,
    "name": "NAZELROD EXCAVATING 358 SANDERS ST. TERRA ALTA WV 26764",
    "phone": "(304)463-4313"
  },
  {
    "seq_no": 23100,
    "name": "POTOMAC GARRETT STATE FOREST 1431 POTOMAC CAMP ROAD OAKLAND MD 21550",
    "phone": "(301)387-4087"
  },
  {
    "seq_no": 23125,
    "name": "DON NINE AUTO 13229 GARRETT HWY #2 OAKLAND MD 21550",
    "phone": "(301)334-4605"
  },
  {
    "seq_no": 23165,
    "name": "NELSON LIMITED PO BOX 298 THOMAS WV 26292",
    "phone": "(757)928-9000"
  },
  {
    "seq_no": 23170,
    "name": "NINER CONSTRUCTION ROUTE 4 BOX 4980 OAKLAND MD 21550",
    "phone": "(301)334-2200"
  },
  {
    "seq_no": 23225,
    "name": "ROGER & CINDY NEWMAN 307 MAYBURY LANE SWANTON MD 21561",
    "phone": "(301)387-3373"
  },
  {
    "seq_no": 23300,
    "name": "NEWMAN & SONS 7084 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)616-1683"
  },
  {
    "seq_no": 23301,
    "name": "NOLAND COMPANY VRDC/I 80 29TH STREET NEWPORT NEWS VA 23607",
    "phone": "(301)334-4727"
  },
  {
    "seq_no": 23350,
    "name": "NORM GUTHRIE 223 DEERFIELD DR. DEER PARK MD 21550",
    "phone": "(301)501-0029"
  },
  {
    "seq_no": 23400,
    "name": "NORTH GLADE INN 184 NORTH GLADE RD SWANTON MD 21561",
    "phone": "(301)334-9275"
  },
  {
    "seq_no": 23600,
    "name": "ACTION TOWING 3773 MARYLAND HWY OAKLAND MD 21550",
    "phone": "(724)814-2085"
  },
  {
    "seq_no": 23675,
    "name": "NU-FINISH COLLISION CENTER 1470 MARYLAND HWY OAKLAND MD 21550",
    "phone": "(304)678-3699"
  },
  {
    "seq_no": 23700,
    "name": "NU-IMAGE 320 DAWSON AVE. OAKLAND MD 21550",
    "phone": "(301)334-2678"
  },
  {
    "seq_no": 23725,
    "name": "NUWAY INTERIORS 31 COMMERCE DRIVE OAKLAND MD 21550-9605",
    "phone": "(301)334-3151"
  },
  {
    "seq_no": 23750,
    "name": "CROSCO TRUCKING 144 KEEFER RD OAKLAND MD 21550",
    "phone": "(301)334-3535"
  },
  {
    "seq_no": 23775,
    "name": "OAKLAND FFA 345 OAKLAND DRIVE OAKLAND MD 21550",
    "phone": "(301)616-5829"
  },
  {
    "seq_no": 23800,
    "name": "OAKLAND OIL COMPANY PO BOX 575 OAKLAND MD 21550",
    "phone": "(301)616-5120"
  },
  {
    "seq_no": 23850,
    "name": "OAKLAND POST OFFICE 22 SOUTH 2ND STREET OAKLAND MD 21550",
    "phone": "(301)334-8497"
  },
  {
    "seq_no": 23900,
    "name": "OAKLAND V.F.D. PO BOX 43 OAKLAND MD 21550",
    "phone": "(301)334-1246"
  },
  {
    "seq_no": 23910,
    "name": "OAKLEY C. WHITE 212 N. 10TH ST OAKLAND MD 21550",
    "phone": "(301)334-3040"
  },
  {
    "seq_no": 23912,
    "name": "ORIONS BELT 328 DAWSON AVE OAKLAND MD 21550",
    "phone": "(301)533-0411"
  },
  {
    "seq_no": 23915,
    "name": "OUR'S AUTO SALVAGE 3635 HUTTON RD. OAKLAND MD 21550",
    "phone": "(304)735-3352"
  },
  {
    "seq_no": 23925,
    "name": "RICK PALMER 1113 WHITE PINE CIRCLE OAKLAND MD 21550",
    "phone": "(304)735-3301"
  },
  {
    "seq_no": 23930,
    "name": "PAR MATT LANES 21 LEWIS B. NAYLOR DR. OAKLAND MD 21550",
    "phone": "(304)735-3352"
  },
  {
    "seq_no": 23940,
    "name": "PAR ELECTRICAL CONT. P.O. BOX 2187 MT LAKE PARK MD 21550",
    "phone": "(301)616-8375"
  },
  {
    "seq_no": 24000,
    "name": "JOHN R. PARSONS & SONS 465 PARSONS RD AURORA WV 26705",
    "phone": "(301)387-5000"
  },
  {
    "seq_no": 24100,
    "name": "PARSONS EXCAVATING 636 MAPLE SPRING HWY EGLON WV 26716",
    "phone": "(301)334-7888"
  },
  {
    "seq_no": 24150,
    "name": "PARSONS REPAIR 465 PARSONS RD AURORA WV 26705",
    "phone": "(301)334-2210"
  },
  {
    "seq_no": 24200,
    "name": "WOODROW W. PASE III RR 2 BOX 44C TUNNELTON WV 26444-9617",
    "phone": ""
  },
  {
    "seq_no": 24230,
    "name": "PATTERSON BOAT CO. INC. 106 ROUND BEACH CIRCLE DR SWANTON MD 21561",
    "phone": "(301)334-4744"
  },
  {
    "seq_no": 24265,
    "name": "PATRIOT CHRYSLER DODGE JEEP 2499 MARYLAND HWY MT LAKE PARK MD 21550",
    "phone": "(301)334-1350"
  },
  {
    "seq_no": 24275,
    "name": "JAY K. PAUGH 6128 MARYLAND HIGHWAY OAKLAND MD 21550",
    "phone": "(301)334-1497"
  },
  {
    "seq_no": 24300,
    "name": "BRANDON PAUGH 4148 PLEASANT VALLEY RD OAKLAND MD 21550",
    "phone": "(301)334-4938"
  },
  {
    "seq_no": 24400,
    "name": "ROBERT P. THOMAS 2797 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(301)387-2404"
  },
  {
    "seq_no": 24450,
    "name": "REUBEN PEACHEY FARMS 1375 BLUE RIBBON RD OAKLAND MD 21550",
    "phone": "(304)478-2831"
  },
  {
    "seq_no": 24500,
    "name": "JOHN PECK 718 EAST OAK STREET OAKLAND MD 21550",
    "phone": "(301)334-2936"
  },
  {
    "seq_no": 24550,
    "name": "PENNINGTON GARAGE 8700 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(301)616-2692"
  },
  {
    "seq_no": 24600,
    "name": "WOLFORD PERANDO 398 YOUGHIOGHENY PATH OAKLAND MD 21550",
    "phone": "(301)334-1025"
  },
  {
    "seq_no": 24625,
    "name": "PERFORMANCE CHEVROLET 224 PENNSYLVANIA AVE. PARSONS WV 26287",
    "phone": ""
  },
  {
    "seq_no": 24630,
    "name": "PETERS FUEL CORP. P.O. BOX 119 OAKLAND MD 21550",
    "phone": "(240)442-1345"
  },
  {
    "seq_no": 24650,
    "name": "PERANA'S CUSTOMS 1159 SAND FLAT RD OAKLAND MD 21550",
    "phone": "(301)334-9704"
  },
  {
    "seq_no": 24670,
    "name": "PERRY'S SOLID WASTE DISPOSAL 151 OAKLAND DRIVE OAKLAND MD 21550",
    "phone": "(301)746-8118"
  },
  {
    "seq_no": 24695,
    "name": "PHILLIPS PRECAST CONCRETE INC. HC 81 BOX 53 TUNNELTON WV 26444",
    "phone": "(304)789-6329"
  },
  {
    "seq_no": 24700,
    "name": "PIFER AUTO REPAIR 652 HUTTON RD OAKLAND MD 21550",
    "phone": "(301)387-4588"
  },
  {
    "seq_no": 24725,
    "name": "PINE HILL TREE FARM 71 MYRL WILT LANE SWANTON MD 21561",
    "phone": "(304)413-2500"
  },
  {
    "seq_no": 24790,
    "name": "PHENIX TECHNOLOGIES INC. 75 SPEICHER DRIVE ACCIDENT MD 21520",
    "phone": "(540)636-3392"
  },
  {
    "seq_no": 25050,
    "name": "PINE HILLS GREENHOUSE 653 FEATHER RD TERRA ALTA WV 26764",
    "phone": "(301)334-3866"
  },
  {
    "seq_no": 25055,
    "name": "PINETUM CHRISTMAS TREES 1039 FORT HILL RD. SWANTON MD 21561",
    "phone": "(241)321-4647"
  },
  {
    "seq_no": 25060,
    "name": "PIONEER CONVEYOR, LLC 224 MOYER RD BRUCETON MILLS WV 26525",
    "phone": ""
  },
  {
    "seq_no": 25061,
    "name": "PITTMAN'S TREE & LANDSCAPING P.O. BOX 531 FRONT ROYAL VA 22630",
    "phone": "(304)813-2650"
  },
  {
    "seq_no": 25075,
    "name": "POTOMAC CONSTRUCTION P.O. BOX 526 WHITE STONE VA 22578",
    "phone": "(301)463-5671"
  },
  {
    "seq_no": 25100,
    "name": "POTOMAC EXCAVATING 157 ALLEN MARPLE DR OAKLAND MD 21550",
    "phone": "(804)309-1046"
  },
  {
    "seq_no": 25150,
    "name": "POTOMAC-NORTH INC. 1320 MEMORIAL DR PO BOX 97 OAKLAND MD 21550",
    "phone": "(301)245-4491"
  },
  {
    "seq_no": 25175,
    "name": "POTOMAC NORTH INC PO BOX 114 BAYARD WV 26707",
    "phone": "(301)334-7870"
  },
  {
    "seq_no": 25190,
    "name": "POWELL'S AUTO PARTS 15815 LWR GEO CREEK RD LONACONING MD 21539",
    "phone": "(304)789-1133"
  },
  {
    "seq_no": 25200,
    "name": "POWER CONSTRUCTION & MAINTENAN 107 OGDEN ROAD ALTAVISTA VA 24517",
    "phone": "(304)329-2129"
  },
  {
    "seq_no": 25215,
    "name": "PRECISION CRANE 8027 ROCK LODGE RD. ACCIDENT MD 21520",
    "phone": "(304)329-1110"
  },
  {
    "seq_no": 25220,
    "name": "PREFERRED LAWN PO BOX 2356 OAKLAND MD 21550",
    "phone": "(301)334-3909"
  },
  {
    "seq_no": 25225,
    "name": "PREMIUM COLLISION CENTER, LLC 919 W STATE AVE TERRA ALTA WV 26764",
    "phone": "(301)334-5824"
  },
  {
    "seq_no": 25235,
    "name": "PRESTON CONTRACTORS INC. P.O. BOX 606 KINGWOOD WV 26537",
    "phone": "(301)616-4846"
  },
  {
    "seq_no": 25240,
    "name": "PRESTON PARTS 308 KINGSTON ROAD KINGWOOD WV 26537",
    "phone": "(301)334-4977"
  },
  {
    "seq_no": 25300,
    "name": "PRISTINE AUTO BODY PO BOX 591 OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 25425,
    "name": "MIKE PRITT 139 CHERRY CREEK LANE OAKLAND MD 21550",
    "phone": "(301)334-0509"
  },
  {
    "seq_no": 25440,
    "name": "PRO-CLEAN P.O BOX 602 MC HENRY MD 21541",
    "phone": "(304)441-1630"
  },
  {
    "seq_no": 25445,
    "name": "CODE GREEN CONSTR. LLC 165 MAYHEW IN RD OAKLAND MD 21550",
    "phone": "(301)697-8847"
  },
  {
    "seq_no": 25450,
    "name": "DAVE PYSELL ROUTE 4 BOX 386 DEER PARK MD 21550",
    "phone": "(304)735-5256"
  },
  {
    "seq_no": 25500,
    "name": "R.A.M. TRUCKING, LLC. 1201 GORMAN RD. OAKLAND MD 21550",
    "phone": "(301)334-4544"
  },
  {
    "seq_no": 25570,
    "name": "RD LOGGING 288 SNOWY CREEK RD OAKLAND MD 21550",
    "phone": "(304)735-3888"
  },
  {
    "seq_no": 25573,
    "name": "RD MCKENZIE LOGGING 983 BEALL SCHOOL RD FROSTBURG MD 21532",
    "phone": "(304)735-3570"
  },
  {
    "seq_no": 25575,
    "name": "RJ'S P.O. BOX 2 AURORA WV 26705",
    "phone": "(301)334-2859"
  },
  {
    "seq_no": 25585,
    "name": "RINKER CONSTRUCTION LLC. 114 KEEFER RD. OAKLAND MD 21550",
    "phone": "(301)616-9952"
  },
  {
    "seq_no": 25600,
    "name": "R & J REPAIR CENTER INC 23480 GEORGE WASHINGTON HWY AURORA WV 26705",
    "phone": "(301)334-3111"
  },
  {
    "seq_no": 25625,
    "name": "RC LOGGING LLC 2944 AURORA PIKE AURORA WV 26705",
    "phone": "(304)735-5273"
  },
  {
    "seq_no": 25640,
    "name": "JONES FARM 5243 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)334-8870"
  },
  {
    "seq_no": 25650,
    "name": "RJ TRACTOR REPAIR 132 ARTENIS HARSH DR EGLON WV 26716",
    "phone": "(304)789-2431"
  },
  {
    "seq_no": 25750,
    "name": "R & R TRUCKING 48 ALLEN MARPLE DR. OAKLAND MD 21550-9354",
    "phone": "(304)693-7373"
  },
  {
    "seq_no": 25755,
    "name": "R & W EQUIPMENT P.O. BOX 31 AURORA WV 26705",
    "phone": "(304)290-9637"
  },
  {
    "seq_no": 25760,
    "name": "RY ANGUS FARMS 617 DURR RD. OAKLAND MD 21550",
    "phone": "(301)334-7860"
  },
  {
    "seq_no": 25790,
    "name": "J & J BODY SHOP INC. P.O. BOX 83 TERRA ALTA WV 26764",
    "phone": "(240)488-1053"
  },
  {
    "seq_no": 25810,
    "name": "R.L.S. ENTERPRISES P.O.BOX 107 BAYARD WV 26707",
    "phone": "(814)765-7859"
  },
  {
    "seq_no": 25825,
    "name": "RLB SERVICES PO BOX 163 TERRA ALTA WV 26764",
    "phone": "(301)334-1534"
  },
  {
    "seq_no": 25830,
    "name": "R.P.M. CONSTRUCTION 147-A SERVICE CENTER RD. OAKLAND MD 21550",
    "phone": "(304)588-3738"
  },
  {
    "seq_no": 26000,
    "name": "RWB INNOVATIONS INC 226 FRANCIS SANDERS DR. OAKLAND MD 21550",
    "phone": "(301)334-1629"
  },
  {
    "seq_no": 26100,
    "name": "RAPIDWAYS TRUCK LEASING P.O. BOX 707 CLEARFIELD PA 16830",
    "phone": "(304)735-6306"
  },
  {
    "seq_no": 26200,
    "name": "RAPIDWAYS TRUCK LEASING P.O. BOX 707 CLEARFIELD PA 16830",
    "phone": "(301)533-0047"
  },
  {
    "seq_no": 26250,
    "name": "RAPIDWAYS TRUCK LEASING P.O. BOX 707 CLEARFIELD PA 16830",
    "phone": "(304)789-6266"
  },
  {
    "seq_no": 26260,
    "name": "RANDY'S BODY SHOP 2299 HUTTON RD. OAKLAND MD 21550",
    "phone": "(301)387-4911"
  },
  {
    "seq_no": 26300,
    "name": "RANDY'S BODY SHOP 2299 HUTTON RD. OAKLAND MD 21550",
    "phone": "(301)746-5515"
  },
  {
    "seq_no": 26400,
    "name": "RATLIFF HARDWOODS LLC 1499 GNEGY CHURCH RD OAKLAND MD 21550",
    "phone": "(301)334-3939"
  },
  {
    "seq_no": 26450,
    "name": "TED RAYNOVICH III 112 ROUND BEACH CIR. DR. SWANTON MD 21561",
    "phone": "(301)689-1721"
  },
  {
    "seq_no": 26460,
    "name": "RBJ TRUCKING 3203 LANTZ RIDGE RD AURORA WV 26705",
    "phone": "(301)784-8482"
  },
  {
    "seq_no": 26470,
    "name": "RECKART LOGGING CO. 971 SNOWY CREEK RD OAKLAND MD 21550",
    "phone": "(301)616-0261"
  },
  {
    "seq_no": 26475,
    "name": "JIMMY RECKART 28562 VETERANS MEMORIAL HWY TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 26600,
    "name": "RECREATIONAL IND-WISP 296 MARSHILL RD. MCHENRY MD 21541",
    "phone": ""
  },
  {
    "seq_no": 26700,
    "name": "RED ROCK ENTERPRISES LLC 9659 FRIENDSVILLE RD FRIENDSVILLE MD 21531",
    "phone": "(301)334-3977"
  },
  {
    "seq_no": 26740,
    "name": "ROBERT RIDDER EXCAVATING 430 SOUTH 8TH STREET OAKLAND MD 21550",
    "phone": "(240)321-4106"
  },
  {
    "seq_no": 26800,
    "name": "DARWIN ROBESON 2281 LOWER NEW GERMANY RD FROSTBURG MD 21532",
    "phone": "(304)290-4477"
  },
  {
    "seq_no": 26900,
    "name": "ROCKY GAP RESORT/EVITTS RESORTS 12516 PLEASANT VALLEY RD. FLINTSTONE MD 21530",
    "phone": "(240)321-1936"
  },
  {
    "seq_no": 26910,
    "name": "ROCKY TOP MAINTENACE & REPAIR 763 PYSELL CROSSCUT RD OAKLAND MD 21550",
    "phone": "(304)693-7278"
  },
  {
    "seq_no": 26915,
    "name": "RUSSELL RODEHEAVER P.O. BOX 453 OAKLAND MD 21550",
    "phone": "(301)895-3700"
  },
  {
    "seq_no": 26920,
    "name": "ZANE RIGGLEMAN RT. 2 BOX 246C HORSESHOE RUN WV 26716",
    "phone": "(304)259-2210"
  },
  {
    "seq_no": 26925,
    "name": "RIGIDPLY RAFTERS OF MD P.O. BOX 177 RICHLAND PA 17087-0177",
    "phone": "(301)245-4170"
  },
  {
    "seq_no": 26928,
    "name": "AUSTIN RODEHEAVER 402 NORTH 3RD STREET OAKLAND MD 21550",
    "phone": "(301)387-7801"
  },
  {
    "seq_no": 26929,
    "name": "FRAZEE EXCAVATING 1350 CRANESVILLE LOOP RD. TERRA ALTA WV 26764",
    "phone": "(301)359-9309"
  },
  {
    "seq_no": 26950,
    "name": "FRAZEE'S MOUNTAIN TOP MGT 4976 WHITE ROCK RD FRIENDSVILLE MD 21531",
    "phone": "(301)334-1247"
  },
  {
    "seq_no": 26970,
    "name": "DONALD ROBINSON P.O. BOX 102 BAYARD WV 26707",
    "phone": "(304)454-2080"
  },
  {
    "seq_no": 26975,
    "name": "DON RODEHEAVER REPAIR LLC 8736 NATIONAL PIKE P.O BOX 22 GRANTSVILLE MD 21536",
    "phone": "(304)454-9586"
  },
  {
    "seq_no": 26980,
    "name": "ROHMAC INC 1947 WILSON CORONA RD. OAKLAND MD 21550",
    "phone": "(304)454-9551"
  },
  {
    "seq_no": 26982,
    "name": "ROLAND MURPHY FARM 578 MURPHY LANE SWANTON MD 21561",
    "phone": "(304)789-6298"
  },
  {
    "seq_no": 26985,
    "name": "ROLA FARMS INC. 56 BECKMAN RD. SWANTON MD 21561",
    "phone": "(304)789-2100"
  },
  {
    "seq_no": 26990,
    "name": "RON'S GARAGE P.O. BOX 34 BLOOMINGTON MD 21523",
    "phone": "(301)387-7700"
  },
  {
    "seq_no": 27000,
    "name": "GLENN ROTH 400 YOUGH WEST APT 4 OAKLAND MD 21550",
    "phone": "(304)735-5870"
  },
  {
    "seq_no": 27010,
    "name": "ROWLESBURG AMBULANCE SERVICE P.O. BOX 428 ROWLESBURG WV 26425",
    "phone": "(301)616-7710"
  },
  {
    "seq_no": 27025,
    "name": "ROWLESBURG SERVICE CENTER P.O. BOX 577 ROWLESBURG WV 26425",
    "phone": "(301)334-4673"
  },
  {
    "seq_no": 27030,
    "name": "ROWLESBURG VOLUNTEER FIRE DEPA P.O. BOX 364 ROWLESBURG WV 26425",
    "phone": "(301)387-8545"
  },
  {
    "seq_no": 27050,
    "name": "ROY'S AUTO BODY SHOP 53 ROY LANE TERRA ALTA WV 26764",
    "phone": "(301)334-1399"
  },
  {
    "seq_no": 27125,
    "name": "ROY'S AUTO SALES 605 W. STATE ST TERRA ALTA WV 26764",
    "phone": "(301)387-8387"
  },
  {
    "seq_no": 27150,
    "name": "ROY'S GARAGE 2208 SWANTON RD. SWANTON MD 21561",
    "phone": "(301)334-1654"
  },
  {
    "seq_no": 27185,
    "name": "RT. 24 SALES & SERVICE RT. BOX 289-2 HORSESHOE RUN WV 26716",
    "phone": "(301)334-3444"
  },
  {
    "seq_no": 27200,
    "name": "ROBERTS AUTO REPAIR 1941 GARRETT RD OAKLAND MD 21550",
    "phone": "(304)789-3111"
  },
  {
    "seq_no": 27250,
    "name": "ROBERT'S TOWING 3983 BETHLEHEM OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 27275,
    "name": "RS PAINTING LLC 1408 PINE HILL RD SWANTON MD 21550",
    "phone": "(301)334-2335"
  },
  {
    "seq_no": 27285,
    "name": "RUSH EXCAVATING 808 SANDFLAT ROAD OAKLAND MD 21550",
    "phone": "(301)334-3435"
  },
  {
    "seq_no": 27300,
    "name": "S.C.& L. 413 SISLER LANE FRIENDSVILLE MD 21531",
    "phone": "(301)334-5324"
  },
  {
    "seq_no": 27325,
    "name": "S & P PERFORMANCE & REPAIR 219 LOCH DEER ROAD OAKLAND MD 21550",
    "phone": "(240)321-1331"
  },
  {
    "seq_no": 27340,
    "name": "SAMS AGWAY 451 SOUTH 8TH ST OAKLAND MD 21550",
    "phone": "(301)334-8517"
  },
  {
    "seq_no": 27350,
    "name": "SAM'S AUTO REPAIR 211 EAST HIGH AVENUE TERRA ALTA WV 26764",
    "phone": "(301)334-5740"
  },
  {
    "seq_no": 27400,
    "name": "ALEX SANDERS 27 NORRIS WELCH RD APARTMENT B OAKLAND MD 21550",
    "phone": "(301)334-9060"
  },
  {
    "seq_no": 27425,
    "name": "SAVAGE RIVER WORKS 581 CLIFTON DR OAKLAND MD 21550",
    "phone": "(301)616-0447"
  },
  {
    "seq_no": 27500,
    "name": "DR. WILLIAM G. SAVAGE ARDSLEY FARMS SWANTON MD 21561",
    "phone": "(301)334-9060"
  },
  {
    "seq_no": 27525,
    "name": "SAVAGE SERVICES CORPORATION 354 TABLE ROCK RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 27550,
    "name": "KEN'S AUTO REPAIR 212 GAP RUN RD FRIENDSVILLE MD 21531",
    "phone": "(301)387-6557"
  },
  {
    "seq_no": 27715,
    "name": "CALVIN SCHROCK FARMS 211 WES WHITE ROAD OAKLAND MD 21550",
    "phone": "(301)334-2094"
  },
  {
    "seq_no": 27800,
    "name": "KENNY SCHROCK AUTO REPAIR 7372 GORMAN RD. OAKLAND MD 21550",
    "phone": "(304)698-6728"
  },
  {
    "seq_no": 27865,
    "name": "SCHROCK AG PARTS 247 WES WHITE ROAD OAKLAND MD 21550",
    "phone": "(304)698-5670"
  },
  {
    "seq_no": 27870,
    "name": "SCHROCK TRUCKING 1568 LYNNDALE RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 27900,
    "name": "ERNIE SCHROCK 3344 UNDERWOOD RD. OAKLAND MD 21550",
    "phone": "(301)334-2121"
  },
  {
    "seq_no": 28100,
    "name": "BOBBY SCHMIDT 1896 MEMORIAL DRIVE OAKLAND OAKLAND MD 21550",
    "phone": "(301)334-2862"
  },
  {
    "seq_no": 28200,
    "name": "JAMES E. SCHMIDT 457 STEIDING CHURCH RD SWANTON MD 21561",
    "phone": "(301)334-3320"
  },
  {
    "seq_no": 28375,
    "name": "SECOND CHANCE FARMS 2833 WILSON CORONA ROAD OAKLAND MD 21550",
    "phone": "(301)334-5968"
  },
  {
    "seq_no": 28400,
    "name": "SERIOUS TRUCKING 40 SNYDER HOLLOW AURORA WV 26705",
    "phone": "(301)334-4971"
  },
  {
    "seq_no": 28450,
    "name": "DELBERT SHAFFER PO BOX 247 ROWLESBURG WV 26425",
    "phone": "(304)749-8229"
  },
  {
    "seq_no": 28475,
    "name": "ROBERT SHAFFER 1952 JENNINGS ROAD GRANTSVILLE MD 21536",
    "phone": ""
  },
  {
    "seq_no": 28500,
    "name": "SHAFFER FORD SALES INC. 12532 GARRETT HIGHWAY OAKLAND MD 21550-1115",
    "phone": "(301)334-2023"
  },
  {
    "seq_no": 28510,
    "name": "RAY E. SHILLINGBURG P.O. BOX 93 GORMANIA WV 26720",
    "phone": "(304)735-6867"
  },
  {
    "seq_no": 28550,
    "name": "SHIRER'S TIN SHOP 117 EAST OAK STREET OAKLAND MD 21550",
    "phone": "(304)698-3552"
  },
  {
    "seq_no": 28575,
    "name": "MARVIN W. SHREVE 60 STEYER MINE ROAD OAKLAND MD 21550",
    "phone": "(304)735-5259"
  },
  {
    "seq_no": 28600,
    "name": "SHREVE BACKHOE & DOZER SERVICE 2676 SHADY DALE RD. OAKLAND MD 21550",
    "phone": "(301)387-5004"
  },
  {
    "seq_no": 28625,
    "name": "SHREVE FARMING 761 OAK DALE RD KEYSER WV 26726",
    "phone": "(304)667-7956"
  },
  {
    "seq_no": 28630,
    "name": "MICHAEL SLAUBAUGH 660 SWEITZERTOWN RD SWANTON MD 21561",
    "phone": "(304)454-9404"
  },
  {
    "seq_no": 28650,
    "name": "BILL SHUTTLEWORTH 115 TANNERY RD. OAKLAND MD 21550",
    "phone": "(802)674-6280"
  },
  {
    "seq_no": 28700,
    "name": "SIERRA CONSTRUCTION 880 MAPLE SPRING HWY. EGLON WV 26716",
    "phone": "(301)616-1087"
  },
  {
    "seq_no": 28800,
    "name": "MR. RANDY SIGLEY 261 CASTEEL ROAD TERRA ALTA WV 26764",
    "phone": ""
  },
  {
    "seq_no": 28825,
    "name": "SILVER CROSS TRUCKING HC 82 BOX 108 TERRA ALTA WV 26764",
    "phone": "(301)616-9987"
  },
  {
    "seq_no": 28850,
    "name": "SILVER KNOB PALLET LLC 479 O'BRIEN RD. SWANTON MD 21561",
    "phone": "(301)501-3055"
  },
  {
    "seq_no": 28950,
    "name": "SIMCO LLC 1738 MAPLE SPRING HWY EGLON WV 26716",
    "phone": ""
  },
  {
    "seq_no": 29000,
    "name": "BILL SIMMONS P.O. BOX 222 CAROLINA WV 26563",
    "phone": "(301)334-5667"
  },
  {
    "seq_no": 29050,
    "name": "SIMON PEARCE (US), INC. 109 PARK ROAD WINDSOR VT 05089",
    "phone": ""
  },
  {
    "seq_no": 29200,
    "name": "SIMPSON AUTO BODY 331 HOTEL RD. DEER PARK MD 21550",
    "phone": "(301)334-2778"
  },
  {
    "seq_no": 29220,
    "name": "SIMPSON TRUCKING 98 APPLE BLOSSOM LN OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 29230,
    "name": "SINES HARVESTING 235 UNDERWOOD ROAD OAKLAND MD 21550",
    "phone": "(304)693-7423"
  },
  {
    "seq_no": 29275,
    "name": "SKYLINE EXCAVATING & TREE SERVIC 4162 BLOOMING ROSE RD FRIENDSVILLE MD 21531",
    "phone": "(301)387-8040"
  },
  {
    "seq_no": 29300,
    "name": "DAVID K. SISLER 403 PLEASANT VIEW LN OAKLAND MD 21550",
    "phone": "(304)813-2079"
  },
  {
    "seq_no": 29400,
    "name": "JOHN SISLER 805 HUTTON RD. OAKLAND MD 21550",
    "phone": "(301)334-2516"
  },
  {
    "seq_no": 29405,
    "name": "VINCE SISLER RT. 2 BOX 4980 OAKLAND MD 21550",
    "phone": "(301)334-2396"
  },
  {
    "seq_no": 29415,
    "name": "SISLER LUMBER CO. P.O. BOX 40 NEW CREEK WV 26743",
    "phone": "(301)334-2662"
  },
  {
    "seq_no": 29420,
    "name": "SISLER TRUCKING P.O. BOX 9895 AURORA WV 26705",
    "phone": "(304)329-2213"
  },
  {
    "seq_no": 29425,
    "name": "SHIRLEY SLAUBAUGH P.O. BOX 233 BAYARD WV 26707",
    "phone": "(301)334-6211"
  },
  {
    "seq_no": 29500,
    "name": "AMERICAN HERITAGE HOME IMP.LLC 3287 CRANESVILLE ROAD OAKLAND MD 21550",
    "phone": "(301)334-8582"
  },
  {
    "seq_no": 29550,
    "name": "SNOW'S MT. TOP SERVICE CENTER RT. 50 BOX P0102 MT STORM WV 26739",
    "phone": "(301)334-3000"
  },
  {
    "seq_no": 29600,
    "name": "DELMER SNYDER 114 F STREET MT LAKE PARK MD 21550",
    "phone": "(301)334-9447"
  },
  {
    "seq_no": 29700,
    "name": "MR. MICHAEL A. SNYDER 2389 PYSELL CROSSCUT ROAD OAKLAND MD 21550",
    "phone": "(301)334-2965"
  },
  {
    "seq_no": 29730,
    "name": "SNYDER'S CABNETS 6646 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(304)735-5201"
  },
  {
    "seq_no": 29750,
    "name": "SNYDER MOTORS P.O. BOX 268 KINGWOOD WV 26537",
    "phone": "(301)387-8471"
  },
  {
    "seq_no": 29800,
    "name": "SOJOURN MOVERS 223 DEER PARK HOTEL ROAD OAKLAND MD 21550",
    "phone": "(301)245-4027"
  },
  {
    "seq_no": 29850,
    "name": "D.E. BOLDEN 120 W. PENNINGTON STREET OAKLAND MD 21550",
    "phone": "(304)693-7613"
  },
  {
    "seq_no": 29900,
    "name": "SOUTHERN GARRETT CO. RESCUE SQ P.O. BOX 378 OAKLAND MD 21550",
    "phone": "(301)334-1553"
  },
  {
    "seq_no": 29925,
    "name": "SOUTHERN HIGH AUTO SHOP 345 OAKLAND DR. OAKLAND MD 21550",
    "phone": "(301)334-2777"
  },
  {
    "seq_no": 29965,
    "name": "SOUTHERN STATES COOP. 1867 MARYLAND HWY. MT LAKE PARK MD 21550",
    "phone": "(304)296-0906"
  },
  {
    "seq_no": 29975,
    "name": "SPAID SPRING MEADOW FARM 59 BECKMAN DR. EGLON WV 26716",
    "phone": "(301)334-3721"
  },
  {
    "seq_no": 30000,
    "name": "SPRING LICK PALLET 2662 SPRING LICK RD. SWANTON MD 21561",
    "phone": ""
  },
  {
    "seq_no": 30100,
    "name": "A. A. STACY & SON 1141 ORENDORF ROAD ACCIDENT MD 21520",
    "phone": "(301)334-3301"
  },
  {
    "seq_no": 30150,
    "name": "STANDARD LABORATORIES 13509 GEORGE WASHINGTON HWY MOUNT STORM WV 26739",
    "phone": "(301)334-1531"
  },
  {
    "seq_no": 30160,
    "name": "STANS GARAGE 1251 BETHLEHEM RD. OAKLAND MD 21550",
    "phone": "(304)735-3035"
  },
  {
    "seq_no": 30175,
    "name": "STELLAR COLLISION CENTER INC 4923 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(304)735-5402"
  },
  {
    "seq_no": 30200,
    "name": "STEYER FUEL INC. P.O. BOX 549 DELLSLOW WV 26531",
    "phone": "(301)246-4322"
  },
  {
    "seq_no": 30300,
    "name": "STEYER TRUCKING 1165 STEYER MINE RD. OAKLAND MD 21550",
    "phone": "(301)334-3979"
  },
  {
    "seq_no": 30400,
    "name": "LARRY STEADMAN 122 WAYNE HARVEY RD. OAKLAND MD 21550",
    "phone": "(301)334-2809"
  },
  {
    "seq_no": 30450,
    "name": "BUFFALO'S MOW & SNOW 10097 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(301)334-2900"
  },
  {
    "seq_no": 30460,
    "name": "MRS. SHEILA STEMPLE 93 SHAFFER HILL ROAD OAKLAND MD 21550",
    "phone": "(301)616-3820"
  },
  {
    "seq_no": 30600,
    "name": "INTERSECTION 3377 MAPLE SPRING HWY EGLON WV 26716",
    "phone": "(304)735-5465"
  },
  {
    "seq_no": 30650,
    "name": "STEMPLE LOGGING HC 82 BOX 218 AURORA WV 26705",
    "phone": "(301)334-2626"
  },
  {
    "seq_no": 30675,
    "name": "BYCO ENTERPRISES INC 11746 BITTINGER RD GRANTSVILLE MD 21536",
    "phone": "(304)446-5335"
  },
  {
    "seq_no": 30690,
    "name": "KEARNEY RIDGE FARM 563 N LEMOYNE KING RD. OAKLAND MD 21550",
    "phone": "(301)334-2203"
  },
  {
    "seq_no": 30700,
    "name": "LEE STEYER EXCAVATING 6381 GORMAN RD. OAKLAND MD 21550",
    "phone": "(301)334-8792"
  },
  {
    "seq_no": 30748,
    "name": "MR. RANDALL STEYER 2727 GORMAN ROAD OAKLAND MD 21550",
    "phone": "(301)616-1938"
  },
  {
    "seq_no": 30750,
    "name": "STICKS AND STONES 2986 OAKLAND SANG RUN RD OAKLAND MD 21550",
    "phone": "(301)334-6212"
  },
  {
    "seq_no": 30760,
    "name": "STONEY HILL CORPORATION 5544 STEMPLE RIDGE RD AURORA WV 26705",
    "phone": "(301)453-3383"
  },
  {
    "seq_no": 30765,
    "name": "SUBURBAN PROPANE ACCOUNTS PAY PO BOX 7447 ATTN:CSC2300 PHILADELPHIA PA 19101",
    "phone": "(301)616-6218"
  },
  {
    "seq_no": 30775,
    "name": "MR. ROBERT STREETS ROUTE 1 ELK GARDEN WV 26717",
    "phone": "(301)616-8311"
  },
  {
    "seq_no": 30800,
    "name": "SUCCESS FLOOR COVERING 108E. LIBERTY STREET OAKLAND MD 21550",
    "phone": "(301)334-3664"
  },
  {
    "seq_no": 30825,
    "name": "DEAN SULLIVAN 222 E STREET MT LAKE PARK MD 21550",
    "phone": "(304)735-3408"
  },
  {
    "seq_no": 30850,
    "name": "SUNRISE REPAIR 1791 MANSFIELD RD OAKLAND MD 21550",
    "phone": "(301)387-5701"
  },
  {
    "seq_no": 30900,
    "name": "SUNRISE SANITATION P.O BOX 675 OAKLAND MD 21550",
    "phone": "(304)698-9031"
  },
  {
    "seq_no": 31000,
    "name": "SUNSET FARM 1261 NORTH HILL ROAD KITZMILLER MD 21538",
    "phone": "(301)334-4818"
  },
  {
    "seq_no": 31100,
    "name": "SUPER CAR WASH MD LLC PO BOX 675 OAKLAND MD 21550",
    "phone": "(301)501-3623"
  },
  {
    "seq_no": 31200,
    "name": "DEWITT'S REPAIR 5726 CRANSVILLE RD OAKLAND MD 21550",
    "phone": "(301)334-3683"
  },
  {
    "seq_no": 31250,
    "name": "SUPER DEAL AUTO SALES ROUTE 1 BOX 7926 OAKLAND MD 21550",
    "phone": "(304)735-3043"
  },
  {
    "seq_no": 31260,
    "name": "SUPER DUTY TRUCKING LLC PO BOX 55 193 EGLON RD EGLON WV 26716",
    "phone": "(304)698-8333"
  },
  {
    "seq_no": 31265,
    "name": "SWANTON GROC.,GAS&LIQUOR 3562 SWANTON ROAD SWANTON MD 21561",
    "phone": "(301)616-1542"
  },
  {
    "seq_no": 31270,
    "name": "JIM SWEITZER 2415 STEYER MINE RD. OAKLAND MD 21550",
    "phone": "(301)334-8588"
  },
  {
    "seq_no": 31272,
    "name": "JERRY SWIGER 614 DEER PARK AVE. MT LAKE PARK MD 21550",
    "phone": "(301)268-4248"
  },
  {
    "seq_no": 31275,
    "name": "MR. RON SWIGER 123 MATTHEW RD OAKLAND MD 21550",
    "phone": "(301)895-5069"
  },
  {
    "seq_no": 31285,
    "name": "SYLVAN MANUFACTURING CO. INC. 436 SOUTH EIGHTH STREET OAKLAND MD 21550",
    "phone": "(304)735-5879"
  },
  {
    "seq_no": 31286,
    "name": "DAVE SYPOLT 4068 SENECA TRAIL EGLON WV 26716",
    "phone": "(304)735-6657"
  },
  {
    "seq_no": 31287,
    "name": "SYPOLT SERVICES P.O. BOX 125 TERRA ALTA WV 26764",
    "phone": "(304)735-3807"
  },
  {
    "seq_no": 31289,
    "name": "SYPOLT SERVICES P.O. BOX 125 TERRA ALTA WV 26764",
    "phone": "(304)735-5879"
  },
  {
    "seq_no": 31290,
    "name": "TNT LOG & SIDING RESTORATION LLC 887 PAINTER SCHOOL RD SWANTON MD 21561",
    "phone": "(301)707-3710"
  },
  {
    "seq_no": 31300,
    "name": "T & B REPAIR 210 MAIN STREET DEER PARK MD 21550",
    "phone": "(301)501-0883"
  },
  {
    "seq_no": 31350,
    "name": "T.C. TRUCKING & GARAGE 19118 LEGISLATIVE RD BARTON MD 21521",
    "phone": "(240)321-5362"
  },
  {
    "seq_no": 31375,
    "name": "T.C.S. HARDWOODS INC. RIVER ROAD GRANTSVILLE MD 21536",
    "phone": "(301)387-2173"
  },
  {
    "seq_no": 31400,
    "name": "T & L EXCAVATING 524 GNEGY CHURCH RD. EGLON WV 26716",
    "phone": "(301)334-5920"
  },
  {
    "seq_no": 31425,
    "name": "T & P TRUCKING 1518 BROOKSIDE RD AURORA WV 26705",
    "phone": "(301)334-3206"
  },
  {
    "seq_no": 31450,
    "name": "T & S AUTO REPAIR 709 ACCIDENT RD EGLON WV 26716",
    "phone": "(301)387-8244"
  },
  {
    "seq_no": 31500,
    "name": "T & T ELECTRICAL SERVICE LLC 524 GNEGY CHURCH RD EGLON WV 26716",
    "phone": "(240)321-1936"
  },
  {
    "seq_no": 31515,
    "name": "CHOICE PRE-OWNED AUTO 12800 MCMULLEN HWY CUMBERLAND MD 21502",
    "phone": ""
  },
  {
    "seq_no": 31525,
    "name": "LOST LAND STONE 2175 POTOMAC CAMP RD. OAKLAND MD 21550",
    "phone": "(301)334-9494"
  },
  {
    "seq_no": 31685,
    "name": "DEREK TASKER'S AUTO REPAIR 1257 TABLE ROCK RD OAKLAND MD 21550",
    "phone": "(304)789-6566"
  },
  {
    "seq_no": 31725,
    "name": "TASKER EXCAVATING LLC 19194 GARRETT HWY OAKLAND MD 21550",
    "phone": "(304)789-5475"
  },
  {
    "seq_no": 31750,
    "name": "TASKER TRUCKING 78 CONGRESS AVENUE OAKLAND MD 21550",
    "phone": "(304)789-6211"
  },
  {
    "seq_no": 31790,
    "name": "TASKER LOGGING 2099 STEYER MINE RD OAKLAND MD 21550",
    "phone": "(301)351-7306"
  },
  {
    "seq_no": 31800,
    "name": "TARGET LUMBER & LOGGING P.O. BOX 97 OAKLAND MD 21550",
    "phone": "(301)334-4547"
  },
  {
    "seq_no": 31890,
    "name": "FRAZEE MOUNTAIN TOP MGT 4976 WHITE ROCK RD FRIENDSVILLE MD 21531",
    "phone": ""
  },
  {
    "seq_no": 31897,
    "name": "TEAGARDEN SMALL ENGINE REPAIR 671 NESTLICK ACRES ROAD OAKLAND MD 21550",
    "phone": "(301)616-6712"
  },
  {
    "seq_no": 31900,
    "name": "TEAM ONE 12899 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-5972"
  },
  {
    "seq_no": 31950,
    "name": "TERRA ALTA COMMUNITY AMBULANCE P.O. BOX 384 TERRA ALTA WV 26764",
    "phone": "(304)789-6302"
  },
  {
    "seq_no": 31960,
    "name": "TERRA ALTA V.F.D. 1120 EAST STATE AVE. TERRA ALTA WV 26764",
    "phone": "(301)334-2121"
  },
  {
    "seq_no": 31975,
    "name": "TERRA ALTA WATER WORKS 701 A E. STATE AVE. TERRA ALTA WV 26764",
    "phone": "(301)616-5502"
  },
  {
    "seq_no": 32100,
    "name": "THOMAS HARDWOODS 2859 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(301)501-8668"
  },
  {
    "seq_no": 32125,
    "name": "THOMAS HARDWOODS 2859 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(301)387-2400"
  },
  {
    "seq_no": 32150,
    "name": "THOMAS HARDWOODS 2859 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(301)334-3251"
  },
  {
    "seq_no": 32225,
    "name": "THOMAS HARDWOODS 2859 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(304)693-7134"
  },
  {
    "seq_no": 32250,
    "name": "THOMAS HARDWOODS 2859 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(301)334-4531"
  },
  {
    "seq_no": 32275,
    "name": "THOMAS HARDWOODS 2859 BROADFORD ROAD OAKLAND MD 21550",
    "phone": "(301)453-3449"
  },
  {
    "seq_no": 32300,
    "name": "THOMAS' TIRES & ACCESSORIES 9276 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(301)334-8339"
  },
  {
    "seq_no": 32400,
    "name": "THOMAS AND THOMAS CONSTRUCTION P.O. BOX 193 GRANTSVILLE MD 21536",
    "phone": "(301)334-2250"
  },
  {
    "seq_no": 32500,
    "name": "THOMAS REPAIR AND COLLISION LLC 1273 TABLE ROCK ROAD OAKLAND MD 21550",
    "phone": "(301)334-2691"
  },
  {
    "seq_no": 32550,
    "name": "THOMAS REPAIR AND COLLISION LLC 1273 TABLE ROCK ROAD OAKLAND MD 21550",
    "phone": "(304)454-2441"
  },
  {
    "seq_no": 32625,
    "name": "THOMAS REPAIR AND COLLISION LLC 1273 TABLE ROCK ROAD OAKLAND MD 21550",
    "phone": "(301)334-6911"
  },
  {
    "seq_no": 32650,
    "name": "LARRY E. THOMAS 3158 TABLE ROCK RD. OAKLAND MD 21550",
    "phone": "(301)334-4791"
  },
  {
    "seq_no": 32700,
    "name": "TIM THOMAS 114 CALDWELL STREET TERRA ALTA WV 26764",
    "phone": "(304)735-3026"
  },
  {
    "seq_no": 32750,
    "name": "TIMBROOK AUTOMOTIVE 9.0 LLC 12532 GARRETT HWY OAKLAND MD 21550",
    "phone": "(301)334-4160"
  },
  {
    "seq_no": 32775,
    "name": "TICHNELL & SON 373 STEYER MINE RD OAKLAND MD 21550",
    "phone": "(301)334-9341"
  },
  {
    "seq_no": 32780,
    "name": "TOM HARDESTY P.O. BOX 2011 MT LAKE PARK MD 21550",
    "phone": ""
  },
  {
    "seq_no": 32790,
    "name": "THOMPSON GAS 17863 GARRETT HWY. OAKLAND MD 21550",
    "phone": "(301)387-7607"
  },
  {
    "seq_no": 32791,
    "name": "TOP SHOP 222 NAZELROD RD. OAKLAND MD 21550",
    "phone": "(301)616-6335"
  },
  {
    "seq_no": 32795,
    "name": "TOWN OF BAYARD P.O BOX 243 BAYARD WV 26707",
    "phone": "(304)749-8736"
  },
  {
    "seq_no": 32800,
    "name": "TOWN OF DEER PARK 100 CHURCH STREET DEER PARK MD 21550",
    "phone": "(301)334-3051"
  },
  {
    "seq_no": 32900,
    "name": "TOWN OF KITZMILLER MAYOR & COU P.O. BOX 607 KITZMILLER MD 21538",
    "phone": "(304)379-4225"
  },
  {
    "seq_no": 33015,
    "name": "TOWN OF LOCH LYNN 211 BONNIE BLVD MT LAKE PARK MD 21550",
    "phone": "(301)387-0447"
  },
  {
    "seq_no": 33025,
    "name": "TOWN OF MT. LAKE PARK P.O. BOX 2182 MT LAKE PARK MD 21550",
    "phone": "(301)387-5053"
  },
  {
    "seq_no": 33040,
    "name": "TOWN OF OAKLAND 15 SOUTH THIRD ST. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 33050,
    "name": "TOWN OF ROWLESBURG P.O. BOX 458 ROWLESBURG WV 26425",
    "phone": "(301)334-3539"
  },
  {
    "seq_no": 33060,
    "name": "TRAXX LLC 81 BETHLEHEM RD OAKLAND MD 21550",
    "phone": "(304)478-3111"
  },
  {
    "seq_no": 33065,
    "name": "TREE & LAND SERVICE 18215 GARRETT HWY OAKLAND MD 21550",
    "phone": "(304)259-4867"
  },
  {
    "seq_no": 33090,
    "name": "TRIPLE D LOGGING 22180 GEORGE WASHINGTON HWY AURORA WV 26705",
    "phone": "(301)533-0548"
  },
  {
    "seq_no": 33100,
    "name": "TRESSLER'S GARAGE 2701 OLD CRELLIN RD. OAKLAND MD 21550",
    "phone": "(301)334-9391"
  },
  {
    "seq_no": 33150,
    "name": "TRESSLER'S AUTO ELECTRIC 1477 MARYLAND HWY MT LAKE PARK MD 21550",
    "phone": "(301)616-4678"
  },
  {
    "seq_no": 33200,
    "name": "ERIC TRIBBEY P.O. BOX 2202 MT LAKE PARK MD 21550",
    "phone": "(240)446-6488"
  },
  {
    "seq_no": 33250,
    "name": "TRIPLE S CONSTRUCTION 97 SKY VALLEY SPUR RD SWANTON MD 21561",
    "phone": "(304)735-6881"
  },
  {
    "seq_no": 33275,
    "name": "TRIPLE S HARDWOODS, LLC 4704 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": "(724)208-0063"
  },
  {
    "seq_no": 33300,
    "name": "TRIPLE GREEN MILL LLC 3400 KEPLINGER RD MAYSVILLE WV 26833",
    "phone": "(301)334-9321"
  },
  {
    "seq_no": 33350,
    "name": "TROUT RUN FARM 444 LANDONS DAM ROAD OAKLAND MD 21550",
    "phone": "(301)334-4693"
  },
  {
    "seq_no": 33370,
    "name": "TRI COUNTY HARDWOODS RT. 3 BRUCETON MILLS WV 26525",
    "phone": ""
  },
  {
    "seq_no": 33375,
    "name": "TRI-STATE GAZEBO LLC 5637 BITTINGER RD SWANTON MD 21561",
    "phone": "(301)334-2927"
  },
  {
    "seq_no": 33380,
    "name": "TRI STATE SEAL COATING INC. 163 PINE TREE POINT RD. SWANTON MD 21561",
    "phone": "(304)697-7106"
  },
  {
    "seq_no": 33385,
    "name": "TRUMBULL CORPORATION P.O. BOX 6774 PITTSBURGH PA 15212",
    "phone": "(301)334-9976"
  },
  {
    "seq_no": 33450,
    "name": "TUB'S AND STUFF 8 WALLMAN ROAD OAKLAND MD 21550",
    "phone": "(304)735-5481"
  },
  {
    "seq_no": 33500,
    "name": "TUCKER CO. HIGH SCHOOL RT. 1 BOX 153 HAMBLETTON WV 26269",
    "phone": "(304)259-4853"
  },
  {
    "seq_no": 33525,
    "name": "TUCKER CO SOLID WASTE AUTH. PO BOX 445 407 WILLIAM AVE DAVIS WV 26260",
    "phone": "(304)259-5272"
  },
  {
    "seq_no": 33530,
    "name": "UTS P.O. BOX 135 MT STORM WV 26739",
    "phone": "(304)693-7885"
  },
  {
    "seq_no": 33550,
    "name": "UNDERWOOD EXCAVATING P.O. BOX 712 OAKLAND MD 21550",
    "phone": "(301)453-3533"
  },
  {
    "seq_no": 33600,
    "name": "UNDERWOOD METAL WORKS LLC 47 MORGANS LANE OAKLAND MD 21550",
    "phone": "(301)387-6160"
  },
  {
    "seq_no": 33650,
    "name": "LEGEND AUTO CENTER & USED CARS 171 MD LINE RD BRUCETON MILLS WV 26525",
    "phone": "(724)437-3672"
  },
  {
    "seq_no": 33700,
    "name": "UNION AMBULANCE SERVICE 23979 GEORGE WASHINGTON HWY AURORA WV 26705",
    "phone": "(301)334-4927"
  },
  {
    "seq_no": 33750,
    "name": "UPHOLD TRUCKING LLC. P.O. BOX 184 FARMINGTON PA 15437",
    "phone": "(304)693-7576"
  },
  {
    "seq_no": 33850,
    "name": "DEER PARK AUTOMOTIVE 424 EDGEWOOD DRIVE OAKLAND MD 21550",
    "phone": "(301)387-7181"
  },
  {
    "seq_no": 33855,
    "name": "UPOLE CAMPER SALES P.O. BOX3112 DEER PARK MD 21550",
    "phone": "(301)334-6121"
  },
  {
    "seq_no": 33860,
    "name": "US ARMY STUDENT TRAINING FACIL 240 ARMY ROAD KINGWOOD WV 26537-0860",
    "phone": "(301)387-9111"
  },
  {
    "seq_no": 33865,
    "name": "TED UPHOLD 473 GARRETT RD. OAKLAND MD 21550",
    "phone": "(301)334-9740"
  },
  {
    "seq_no": 33870,
    "name": "BRIAN VANDEVENDER P.O. BOX 26 AURORA WV 26705",
    "phone": ""
  },
  {
    "seq_no": 34000,
    "name": "VERIZON FLEET MC: TXADTDMD PO BOX 152134 IRVING TX 75015",
    "phone": "(301)387-6071"
  },
  {
    "seq_no": 34200,
    "name": "VIOLA SHARPENING & REPAIR 373 QUAKING MAPLES DR EGLON WV 26716",
    "phone": "(304)789-6837"
  },
  {
    "seq_no": 34250,
    "name": "VINDEX ENERGY CORPORATION PO BOX 78 201 BUFFALO COAL RD MOUNT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 34300,
    "name": "VIRGINIA POWER MT.STORM POWER ATTN: ACCOUNTING MT STORM WV 26739",
    "phone": ""
  },
  {
    "seq_no": 34400,
    "name": "VIRGINIA ELECTRIC & POWER C/O NORTH BRANCH OPERATIO BAYARD WV 26707",
    "phone": "(240)321-7304"
  },
  {
    "seq_no": 34410,
    "name": "VIRTS AUTO SALES STAR ROUTE BOX 21 KITZMILLER MD 21538",
    "phone": "(301)334-6960"
  },
  {
    "seq_no": 34450,
    "name": "LARRY WAGNER TRUCKING 299 SPRING GLADE ROAD OAKLAND MD 21550",
    "phone": "(301)616-3234"
  },
  {
    "seq_no": 34460,
    "name": "W.R. CASTEEL CO. INC. 323 HOPWOOD COOLSPRING RD. HOPWOOD PA 15445",
    "phone": "(301)334-0670"
  },
  {
    "seq_no": 34462,
    "name": "W.W. AUTO REPAIR 5362 HUTTON ROAD OAKLAND MD 21550",
    "phone": "(301)616-2929"
  },
  {
    "seq_no": 34465,
    "name": "W & W LOGGING P.O. BOX 144 MT STORM WV 26739",
    "phone": "(301)387-2990"
  },
  {
    "seq_no": 34468,
    "name": "WAYNE'S WATER & WELLS 19139 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": "(301)387-6155"
  },
  {
    "seq_no": 34475,
    "name": "WEBB DISTRIBUTORS LLC 991 OLD CRELLIN RD OAKLAND MD 21550",
    "phone": "(301)387-0088"
  },
  {
    "seq_no": 34490,
    "name": "WELDING ROD 3456 SANDFLAT ROAD OAKLAND MD 21550",
    "phone": "(301)334-1025"
  },
  {
    "seq_no": 34495,
    "name": "WALTER WEEKS 1947 SMOUSE ROAD OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 34500,
    "name": "FRANKIE WEESE HC 30 BOX 156 MAYSVILLE WV 26833",
    "phone": "(301)334-9537"
  },
  {
    "seq_no": 34520,
    "name": "CECIL W. WELCH JR. 3547 OAKLAND SANG RUN RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 34525,
    "name": "WELLS AUGER MINING 948 BURNSIDE CAMP RD TERRA ALTA WV 26764",
    "phone": "(301)334-9038"
  },
  {
    "seq_no": 34550,
    "name": "JAMES L. WELLS 777 BURNSIDE CAMP RD. TERRA ALTA WV 26764",
    "phone": "(765)832-8526"
  },
  {
    "seq_no": 34575,
    "name": "MARK WELLS 1093 BURNSIDE CAMP RD TERRA ALTA WV 26764",
    "phone": "(301)746-5045"
  },
  {
    "seq_no": 34600,
    "name": "WHISTLE PIG FARM 499 SNYDER RD OAKLAND MD 21550",
    "phone": "(301)334-1395"
  },
  {
    "seq_no": 34601,
    "name": "WESTERN MARYLAND 4-H CENTER 1916 MARYLAND HIGHWAY MT LAKE PARK MD 21550",
    "phone": "(301)334-4875"
  },
  {
    "seq_no": 34603,
    "name": "WESTERN MARYLAND SEPTIC SERVIC 2970 FINGERBOARD RD. OAKLAND MD 21550",
    "phone": "(304)789-2170"
  },
  {
    "seq_no": 34610,
    "name": "WESTERN MARYLAND TIN SHOP 17 FIRST AVENUE LOCH LYNN MD 21550",
    "phone": "(304)789-2835"
  },
  {
    "seq_no": 34615,
    "name": "WESTERN MARYLAND TOWING 412 WEST LIBERTY ST OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 34620,
    "name": "WESTERN MD. TRUCK PARTS 5204 BITTINGER ROAD SWANTON MD 21561",
    "phone": "(301)334-9221"
  },
  {
    "seq_no": 34625,
    "name": "WESTERN TRAILS LLC 4009 MAYHEW INN RD OAKLAND MD 21550",
    "phone": "(301)334-1166"
  },
  {
    "seq_no": 34630,
    "name": "WESTMAR BUILDERS, INC. 6201 SANG RUN RD. MCHENRY MD 21541",
    "phone": "(301)334-8322"
  },
  {
    "seq_no": 34650,
    "name": "A & A TRUCK SERVICE 12 DEER PARK HOTEL RD OAKLAND MD 21550",
    "phone": "(240)522-3691"
  },
  {
    "seq_no": 34670,
    "name": "WEST VA DPT. TRANS HIGHWAY CLARKSBURG WV 26302",
    "phone": "(304)735-6560"
  },
  {
    "seq_no": 34673,
    "name": "WHITACRE AUTO SALES 4429 MARYLAND HGY. OAKLAND MD 21550",
    "phone": "(301)334-1567"
  },
  {
    "seq_no": 34675,
    "name": "GEORGE WHITE 934 OLD CRELLIN ROAD OAKLAND MD 21550",
    "phone": "(301)334-9731"
  },
  {
    "seq_no": 34680,
    "name": "WHITE CHURCH AUTO 1240 WHITE CHURCH OAKLAND MD 21550",
    "phone": "(301)387-6648"
  },
  {
    "seq_no": 34700,
    "name": "WHITE CONSTRUCTION PO BOX 249 CLINTON IN 47842",
    "phone": "(301)387-5581"
  },
  {
    "seq_no": 34750,
    "name": "WHITE ROCK AUTO PARTS RT. 1 BOX 251C FRIENDSVILLE MD 21531",
    "phone": "(301)334-4272"
  },
  {
    "seq_no": 34800,
    "name": "WHITE'S REPAIR SERVICE 517 TOWER STREET OAKLAND MD 21550",
    "phone": "(301)616-6213"
  },
  {
    "seq_no": 34925,
    "name": "WHITE TRUCKING 83 BETHLEHAM RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 34970,
    "name": "REX WILES 2935 RAG TAVERN RD. TERRA ALTA WV 26764",
    "phone": "(301)501-6001"
  },
  {
    "seq_no": 34975,
    "name": "ROY WILES TRUCKING 335 OAK GROVE CEMETERY RD TERRA ALTA WV 26764",
    "phone": "(304)454-9711"
  },
  {
    "seq_no": 35000,
    "name": "LEONARD WILHELM JR LOGGING 723 WEST BLOCHER RD. LONACONING MD 21539",
    "phone": "(301)334-9451"
  },
  {
    "seq_no": 35025,
    "name": "EW HAULING 1006 BROADFORD RD. OAKLAND MD 21550",
    "phone": "(814)289-3197"
  },
  {
    "seq_no": 35050,
    "name": "MR. RICHARD A. WILT 445 WAYNE HARVEY RD OAKLAND MD 21550",
    "phone": "(301)334-1416"
  },
  {
    "seq_no": 35100,
    "name": "EARL WILT 338 GORMAN ST. OAKLAND MD 21550",
    "phone": "(301)746-5480"
  },
  {
    "seq_no": 35300,
    "name": "WINDFIELD GOLF COURSE 214 KAMP SIDE RD LONACONING MD 21539",
    "phone": "(301)895-4220"
  },
  {
    "seq_no": 35500,
    "name": "RICHARD K. WINTERS 64 MAPLE SPRING HWY EGLON WV 26716",
    "phone": "(301)334-0500"
  },
  {
    "seq_no": 35525,
    "name": "WINTERS GENERAL CONTRACTOR 116 N 8TH ST OAKLAND MD 21550",
    "phone": "(301)334-2936"
  },
  {
    "seq_no": 35540,
    "name": "WINTERS PAINTING 171 FINGERBOARD ROAD OAKLAND MD 21550",
    "phone": "(301)616-0362"
  },
  {
    "seq_no": 35550,
    "name": "MR. MICHAEL L. WHITE 837 SPRING GLADE RD. OAKLAND MD 21550",
    "phone": "(301)387-9585"
  },
  {
    "seq_no": 37000,
    "name": "WISP RESORT 290 MARSH HILL RD. MCHENRY MD 21541",
    "phone": ""
  },
  {
    "seq_no": 54700,
    "name": "WKHJ P.O. BOX 2337 MT LAKE PARK MD 21550",
    "phone": "(301)334-9784"
  },
  {
    "seq_no": 999999,
    "name": "TED WOLF CONTRACTING P.O.BOX 2325 MT LAKE PARK MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710001,
    "name": "HARLIN L. WOLFE 125 ACCIDENT RD EGLON WV 26716",
    "phone": "(301)334-1200"
  },
  {
    "seq_no": 54710010,
    "name": "WOLFMAN TRUCKING 194 MAPLE DEL LANE OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710020,
    "name": "WOLFORD TRUCKING 18718 GEORGE WASHINGTON HWY ROWLESBURG WV 26425",
    "phone": ""
  },
  {
    "seq_no": 54710030,
    "name": "WOOD PRODUCTS INC. 442 S. 8TH STREET OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710040,
    "name": "W.P.O. INC. 145 MEADOW SOMERSET PA 15501",
    "phone": ""
  },
  {
    "seq_no": 54710050,
    "name": "Y.H.O.A. 36 YOUGHIOGENY BLVD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710060,
    "name": "MARLIN LAWSON 3149 OLD MORGANTOWN RD. FRIENDSVILLE MD 21531",
    "phone": ""
  },
  {
    "seq_no": 54710070,
    "name": "NEW ENGLAND TRUSS & JOIST 81 BETHLEHEM RD. OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710080,
    "name": "219 MOTORS BOX 494 OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710090,
    "name": "135 LIBERTY P.O. BOX 119 OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710100,
    "name": "135 ENTERPRISES 712 SUNSHINE DR. MT LAKE PARK MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710110,
    "name": "DICK'S ELECTRIC 18154 GARRETT HIGHWAY OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710120,
    "name": "DUNG HILL FARMS 2885 FINGERBOARD RD OAKLAND MD 21550",
    "phone": ""
  },
  {
    "seq_no": 54710130,
    "name": "BUSTERS STUMP & TREE REMOVAL 8005 GEORGE WASHINGTON HWY OAKLAND MD 21550",
    "phone": ""
  }
]
