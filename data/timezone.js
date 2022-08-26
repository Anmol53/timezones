const timezones = [
    {
        "zone": "Africa/Abidjan",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Africa/Accra",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Africa/Algiers",
        "abbreviation": "CET",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Africa/Bissau",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Africa/Cairo",
        "abbreviation": "EET",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/Casablanca",
        "abbreviation": "+01",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Africa/Ceuta",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/El_Aaiun",
        "abbreviation": "+01",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Africa/Johannesburg",
        "abbreviation": "SAST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/Juba",
        "abbreviation": "CAT",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/Khartoum",
        "abbreviation": "CAT",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/Lagos",
        "abbreviation": "WAT",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Africa/Maputo",
        "abbreviation": "CAT",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/Monrovia",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Africa/Nairobi",
        "abbreviation": "EAT",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Africa/Ndjamena",
        "abbreviation": "WAT",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Africa/Sao_Tome",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Africa/Tripoli",
        "abbreviation": "EET",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Africa/Tunis",
        "abbreviation": "CET",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Africa/Windhoek",
        "abbreviation": "CAT",
        "utc_offset": "+02:00"
    },
    {
        "zone": "America/Adak",
        "abbreviation": "HDT",
        "utc_offset": "-09:00"
    },
    {
        "zone": "America/Anchorage",
        "abbreviation": "AKDT",
        "utc_offset": "-08:00"
    },
    {
        "zone": "America/Araguaina",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Buenos_Aires",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Catamarca",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Cordoba",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Jujuy",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/La_Rioja",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Mendoza",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Rio_Gallegos",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Salta",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/San_Juan",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/San_Luis",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Tucuman",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Argentina/Ushuaia",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Asuncion",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Atikokan",
        "abbreviation": "EST",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Bahia_Banderas",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Bahia",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Barbados",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Belem",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Belize",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Blanc-Sablon",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Boa_Vista",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Bogota",
        "abbreviation": "-05",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Boise",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Cambridge_Bay",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Campo_Grande",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Cancun",
        "abbreviation": "EST",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Caracas",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Cayenne",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Chicago",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Chihuahua",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Costa_Rica",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Creston",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Cuiaba",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Curacao",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Danmarkshavn",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "America/Dawson_Creek",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Dawson",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Denver",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Detroit",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Edmonton",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Eirunepe",
        "abbreviation": "-05",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/El_Salvador",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Fort_Nelson",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Fortaleza",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Glace_Bay",
        "abbreviation": "ADT",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Goose_Bay",
        "abbreviation": "ADT",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Grand_Turk",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Guatemala",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Guayaquil",
        "abbreviation": "-05",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Guyana",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Halifax",
        "abbreviation": "ADT",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Havana",
        "abbreviation": "CDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Hermosillo",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Indiana/Indianapolis",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Indiana/Knox",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Indiana/Marengo",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Indiana/Petersburg",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Indiana/Tell_City",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Indiana/Vevay",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Indiana/Vincennes",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Indiana/Winamac",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Inuvik",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Iqaluit",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Jamaica",
        "abbreviation": "EST",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Juneau",
        "abbreviation": "AKDT",
        "utc_offset": "-08:00"
    },
    {
        "zone": "America/Kentucky/Louisville",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Kentucky/Monticello",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/La_Paz",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Lima",
        "abbreviation": "-05",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Los_Angeles",
        "abbreviation": "PDT",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Maceio",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Managua",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Manaus",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Martinique",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Matamoros",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Mazatlan",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Menominee",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Merida",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Metlakatla",
        "abbreviation": "AKDT",
        "utc_offset": "-08:00"
    },
    {
        "zone": "America/Mexico_City",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Miquelon",
        "abbreviation": "-02",
        "utc_offset": "-02:00"
    },
    {
        "zone": "America/Moncton",
        "abbreviation": "ADT",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Monterrey",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Montevideo",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Nassau",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/New_York",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Nipigon",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Nome",
        "abbreviation": "AKDT",
        "utc_offset": "-08:00"
    },
    {
        "zone": "America/Noronha",
        "abbreviation": "-02",
        "utc_offset": "-02:00"
    },
    {
        "zone": "America/North_Dakota/Beulah",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/North_Dakota/Center",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/North_Dakota/New_Salem",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Nuuk",
        "abbreviation": "-02",
        "utc_offset": "-02:00"
    },
    {
        "zone": "America/Ojinaga",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Panama",
        "abbreviation": "EST",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Pangnirtung",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Paramaribo",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Phoenix",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Port_of_Spain",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Port-au-Prince",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Porto_Velho",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Puerto_Rico",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Punta_Arenas",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Rainy_River",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Rankin_Inlet",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Recife",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Regina",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Resolute",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Rio_Branco",
        "abbreviation": "-05",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Santarem",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Santiago",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Santo_Domingo",
        "abbreviation": "AST",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Sao_Paulo",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Scoresbysund",
        "abbreviation": "+00",
        "utc_offset": "+00:00"
    },
    {
        "zone": "America/Sitka",
        "abbreviation": "AKDT",
        "utc_offset": "-08:00"
    },
    {
        "zone": "America/St_Johns",
        "abbreviation": "NDT",
        "utc_offset": "-02:30"
    },
    {
        "zone": "America/Swift_Current",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Tegucigalpa",
        "abbreviation": "CST",
        "utc_offset": "-06:00"
    },
    {
        "zone": "America/Thule",
        "abbreviation": "ADT",
        "utc_offset": "-03:00"
    },
    {
        "zone": "America/Thunder_Bay",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Tijuana",
        "abbreviation": "PDT",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Toronto",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "America/Vancouver",
        "abbreviation": "PDT",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Whitehorse",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "America/Winnipeg",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "America/Yakutat",
        "abbreviation": "AKDT",
        "utc_offset": "-08:00"
    },
    {
        "zone": "America/Yellowknife",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "Antarctica/Casey",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Antarctica/Davis",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Antarctica/DumontDUrville",
        "abbreviation": "+10",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Antarctica/Macquarie",
        "abbreviation": "AEST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Antarctica/Mawson",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Antarctica/Palmer",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "Antarctica/Rothera",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "Antarctica/Syowa",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Antarctica/Troll",
        "abbreviation": "+02",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Antarctica/Vostok",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Almaty",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Amman",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Anadyr",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Asia/Aqtau",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Aqtobe",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Ashgabat",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Atyrau",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Baghdad",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Baku",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Asia/Bangkok",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Barnaul",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Beirut",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Bishkek",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Brunei",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Chita",
        "abbreviation": "+09",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Choibalsan",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Colombo",
        "abbreviation": "+0530",
        "utc_offset": "+05:30"
    },
    {
        "zone": "Asia/Damascus",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Dhaka",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Dili",
        "abbreviation": "+09",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Dubai",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Asia/Dushanbe",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Famagusta",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Gaza",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Hebron",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Ho_Chi_Minh",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Hong_Kong",
        "abbreviation": "HKT",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Hovd",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Irkutsk",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Jakarta",
        "abbreviation": "WIB",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Jayapura",
        "abbreviation": "WIT",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Jerusalem",
        "abbreviation": "IDT",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Kabul",
        "abbreviation": "+0430",
        "utc_offset": "+04:30"
    },
    {
        "zone": "Asia/Kamchatka",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Asia/Karachi",
        "abbreviation": "PKT",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Kathmandu",
        "abbreviation": "+0545",
        "utc_offset": "+05:45"
    },
    {
        "zone": "Asia/Khandyga",
        "abbreviation": "+09",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Kolkata",
        "abbreviation": "IST",
        "utc_offset": "+05:30"
    },
    {
        "zone": "Asia/Krasnoyarsk",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Kuala_Lumpur",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Kuching",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Macau",
        "abbreviation": "CST",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Magadan",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Asia/Makassar",
        "abbreviation": "WITA",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Manila",
        "abbreviation": "PST",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Nicosia",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Novokuznetsk",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Novosibirsk",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Omsk",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Oral",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Pontianak",
        "abbreviation": "WIB",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Pyongyang",
        "abbreviation": "KST",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Qatar",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Qostanay",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Qyzylorda",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Riyadh",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Asia/Sakhalin",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Asia/Samarkand",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Seoul",
        "abbreviation": "KST",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Shanghai",
        "abbreviation": "CST",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Singapore",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Srednekolymsk",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Asia/Taipei",
        "abbreviation": "CST",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Tashkent",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Tbilisi",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Asia/Tehran",
        "abbreviation": "+0430",
        "utc_offset": "+04:30"
    },
    {
        "zone": "Asia/Thimphu",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Tokyo",
        "abbreviation": "JST",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Tomsk",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Asia/Ulaanbaatar",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Asia/Urumqi",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Asia/Ust-Nera",
        "abbreviation": "+10",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Asia/Vladivostok",
        "abbreviation": "+10",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Asia/Yakutsk",
        "abbreviation": "+09",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Asia/Yangon",
        "abbreviation": "+0630",
        "utc_offset": "+06:30"
    },
    {
        "zone": "Asia/Yekaterinburg",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Asia/Yerevan",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Atlantic/Azores",
        "abbreviation": "+00",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Atlantic/Bermuda",
        "abbreviation": "ADT",
        "utc_offset": "-03:00"
    },
    {
        "zone": "Atlantic/Canary",
        "abbreviation": "WEST",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Atlantic/Cape_Verde",
        "abbreviation": "-01",
        "utc_offset": "-01:00"
    },
    {
        "zone": "Atlantic/Faroe",
        "abbreviation": "WEST",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Atlantic/Madeira",
        "abbreviation": "WEST",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Atlantic/Reykjavik",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Atlantic/South_Georgia",
        "abbreviation": "-02",
        "utc_offset": "-02:00"
    },
    {
        "zone": "Atlantic/Stanley",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "Australia/Adelaide",
        "abbreviation": "ACST",
        "utc_offset": "+09:30"
    },
    {
        "zone": "Australia/Brisbane",
        "abbreviation": "AEST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Australia/Broken_Hill",
        "abbreviation": "ACST",
        "utc_offset": "+09:30"
    },
    {
        "zone": "Australia/Darwin",
        "abbreviation": "ACST",
        "utc_offset": "+09:30"
    },
    {
        "zone": "Australia/Eucla",
        "abbreviation": "+0845",
        "utc_offset": "+08:45"
    },
    {
        "zone": "Australia/Hobart",
        "abbreviation": "AEST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Australia/Lindeman",
        "abbreviation": "AEST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Australia/Lord_Howe",
        "abbreviation": "+1030",
        "utc_offset": "+10:30"
    },
    {
        "zone": "Australia/Melbourne",
        "abbreviation": "AEST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Australia/Perth",
        "abbreviation": "AWST",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Australia/Sydney",
        "abbreviation": "AEST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "CET",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "CST6CDT",
        "abbreviation": "CDT",
        "utc_offset": "-05:00"
    },
    {
        "zone": "EET",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "EST",
        "abbreviation": "EST",
        "utc_offset": "-05:00"
    },
    {
        "zone": "EST5EDT",
        "abbreviation": "EDT",
        "utc_offset": "-04:00"
    },
    {
        "zone": "Etc/GMT-1",
        "abbreviation": "+01",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Etc/GMT-10",
        "abbreviation": "+10",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Etc/GMT-11",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Etc/GMT-12",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Etc/GMT-13",
        "abbreviation": "+13",
        "utc_offset": "+13:00"
    },
    {
        "zone": "Etc/GMT-14",
        "abbreviation": "+14",
        "utc_offset": "+14:00"
    },
    {
        "zone": "Etc/GMT-2",
        "abbreviation": "+02",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Etc/GMT-3",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Etc/GMT-4",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Etc/GMT-5",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Etc/GMT-6",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Etc/GMT-7",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Etc/GMT-8",
        "abbreviation": "+08",
        "utc_offset": "+08:00"
    },
    {
        "zone": "Etc/GMT-9",
        "abbreviation": "+09",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Etc/GMT",
        "abbreviation": "GMT",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Etc/GMT+1",
        "abbreviation": "-01",
        "utc_offset": "-01:00"
    },
    {
        "zone": "Etc/GMT+10",
        "abbreviation": "-10",
        "utc_offset": "-10:00"
    },
    {
        "zone": "Etc/GMT+11",
        "abbreviation": "-11",
        "utc_offset": "-11:00"
    },
    {
        "zone": "Etc/GMT+12",
        "abbreviation": "-12",
        "utc_offset": "-12:00"
    },
    {
        "zone": "Etc/GMT+2",
        "abbreviation": "-02",
        "utc_offset": "-02:00"
    },
    {
        "zone": "Etc/GMT+3",
        "abbreviation": "-03",
        "utc_offset": "-03:00"
    },
    {
        "zone": "Etc/GMT+4",
        "abbreviation": "-04",
        "utc_offset": "-04:00"
    },
    {
        "zone": "Etc/GMT+5",
        "abbreviation": "-05",
        "utc_offset": "-05:00"
    },
    {
        "zone": "Etc/GMT+6",
        "abbreviation": "-06",
        "utc_offset": "-06:00"
    },
    {
        "zone": "Etc/GMT+7",
        "abbreviation": "-07",
        "utc_offset": "-07:00"
    },
    {
        "zone": "Etc/GMT+8",
        "abbreviation": "-08",
        "utc_offset": "-08:00"
    },
    {
        "zone": "Etc/GMT+9",
        "abbreviation": "-09",
        "utc_offset": "-09:00"
    },
    {
        "zone": "Etc/UTC",
        "abbreviation": "UTC",
        "utc_offset": "+00:00"
    },
    {
        "zone": "Europe/Amsterdam",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Andorra",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Astrakhan",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Europe/Athens",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Belgrade",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Berlin",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Brussels",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Bucharest",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Budapest",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Chisinau",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Copenhagen",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Dublin",
        "abbreviation": "IST",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Europe/Gibraltar",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Helsinki",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Istanbul",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Kaliningrad",
        "abbreviation": "EET",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Kiev",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Kirov",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Lisbon",
        "abbreviation": "WEST",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Europe/London",
        "abbreviation": "BST",
        "utc_offset": "+01:00"
    },
    {
        "zone": "Europe/Luxembourg",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Madrid",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Malta",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Minsk",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Monaco",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Moscow",
        "abbreviation": "MSK",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Oslo",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Paris",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Prague",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Riga",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Rome",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Samara",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Europe/Saratov",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Europe/Simferopol",
        "abbreviation": "MSK",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Sofia",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Stockholm",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Tallinn",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Tirane",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Ulyanovsk",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Europe/Uzhgorod",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Vienna",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Vilnius",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Volgograd",
        "abbreviation": "+03",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Warsaw",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "Europe/Zaporozhye",
        "abbreviation": "EEST",
        "utc_offset": "+03:00"
    },
    {
        "zone": "Europe/Zurich",
        "abbreviation": "CEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "HST",
        "abbreviation": "HST",
        "utc_offset": "-10:00"
    },
    {
        "zone": "Indian/Chagos",
        "abbreviation": "+06",
        "utc_offset": "+06:00"
    },
    {
        "zone": "Indian/Christmas",
        "abbreviation": "+07",
        "utc_offset": "+07:00"
    },
    {
        "zone": "Indian/Cocos",
        "abbreviation": "+0630",
        "utc_offset": "+06:30"
    },
    {
        "zone": "Indian/Kerguelen",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Indian/Mahe",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Indian/Maldives",
        "abbreviation": "+05",
        "utc_offset": "+05:00"
    },
    {
        "zone": "Indian/Mauritius",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "Indian/Reunion",
        "abbreviation": "+04",
        "utc_offset": "+04:00"
    },
    {
        "zone": "MET",
        "abbreviation": "MEST",
        "utc_offset": "+02:00"
    },
    {
        "zone": "MST",
        "abbreviation": "MST",
        "utc_offset": "-07:00"
    },
    {
        "zone": "MST7MDT",
        "abbreviation": "MDT",
        "utc_offset": "-06:00"
    },
    {
        "zone": "Pacific/Apia",
        "abbreviation": "+13",
        "utc_offset": "+13:00"
    },
    {
        "zone": "Pacific/Auckland",
        "abbreviation": "NZST",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Bougainville",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Chatham",
        "abbreviation": "+1245",
        "utc_offset": "+12:45"
    },
    {
        "zone": "Pacific/Chuuk",
        "abbreviation": "+10",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Pacific/Easter",
        "abbreviation": "-06",
        "utc_offset": "-06:00"
    },
    {
        "zone": "Pacific/Efate",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Enderbury",
        "abbreviation": "+13",
        "utc_offset": "+13:00"
    },
    {
        "zone": "Pacific/Fakaofo",
        "abbreviation": "+13",
        "utc_offset": "+13:00"
    },
    {
        "zone": "Pacific/Fiji",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Funafuti",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Galapagos",
        "abbreviation": "-06",
        "utc_offset": "-06:00"
    },
    {
        "zone": "Pacific/Gambier",
        "abbreviation": "-09",
        "utc_offset": "-09:00"
    },
    {
        "zone": "Pacific/Guadalcanal",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Guam",
        "abbreviation": "ChST",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Pacific/Honolulu",
        "abbreviation": "HST",
        "utc_offset": "-10:00"
    },
    {
        "zone": "Pacific/Kiritimati",
        "abbreviation": "+14",
        "utc_offset": "+14:00"
    },
    {
        "zone": "Pacific/Kosrae",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Kwajalein",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Majuro",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Marquesas",
        "abbreviation": "-0930",
        "utc_offset": "-09:30"
    },
    {
        "zone": "Pacific/Nauru",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Niue",
        "abbreviation": "-11",
        "utc_offset": "-11:00"
    },
    {
        "zone": "Pacific/Norfolk",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Noumea",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Pago_Pago",
        "abbreviation": "SST",
        "utc_offset": "-11:00"
    },
    {
        "zone": "Pacific/Palau",
        "abbreviation": "+09",
        "utc_offset": "+09:00"
    },
    {
        "zone": "Pacific/Pitcairn",
        "abbreviation": "-08",
        "utc_offset": "-08:00"
    },
    {
        "zone": "Pacific/Pohnpei",
        "abbreviation": "+11",
        "utc_offset": "+11:00"
    },
    {
        "zone": "Pacific/Port_Moresby",
        "abbreviation": "+10",
        "utc_offset": "+10:00"
    },
    {
        "zone": "Pacific/Rarotonga",
        "abbreviation": "-10",
        "utc_offset": "-10:00"
    },
    {
        "zone": "Pacific/Tahiti",
        "abbreviation": "-10",
        "utc_offset": "-10:00"
    },
    {
        "zone": "Pacific/Tarawa",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Tongatapu",
        "abbreviation": "+13",
        "utc_offset": "+13:00"
    },
    {
        "zone": "Pacific/Wake",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "Pacific/Wallis",
        "abbreviation": "+12",
        "utc_offset": "+12:00"
    },
    {
        "zone": "PST8PDT",
        "abbreviation": "PDT",
        "utc_offset": "-07:00"
    },
    {
        "zone": "WET",
        "abbreviation": "WEST",
        "utc_offset": "+01:00"
    }
];
module.exports = timezones;
