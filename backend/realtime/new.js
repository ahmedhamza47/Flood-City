const { isText } = require('domhandler');
const { Client } = require('pg');
let data = [
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 6577443,
                "description": "",
                "name": "c7f50fa6492317ed499ade58f7194626",
                "id": 142
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "5.2",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.94799995422",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3593,
        "longitude": 85.47,
        "latitude": 27.36,
        "district": "Makawanpur",
        "basin": "Bagmati",
        "stationIndex": "581",
        "id": 236,
        "name": " Bagmati River at Bhorleni"
    },
    {
        "tags": [
            "HS",
            "RF",
            "Bubbler",
            "AMC_RB",
            "2016",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 350267,
                "description": "",
                "name": "ef45b3c50c3175ea4b22ec1cc0223f89",
                "id": 47
            }
        ],
        "elevation": 227,
        "description": "Hydrological station with Bubbler ",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 814,
        "longitude": 83.811066,
        "latitude": 28.072732,
        "district": "Syangja",
        "basin": "Narayani",
        "stationIndex": "415.1",
        "id": 41,
        "name": "Aadhi Khola at Borlangpul (Rainfall)"
    },
    {
        "tags": [
            "AWS",
            "RF",
            "PPCR_MET",
            "Tier 3",
            "2019",
            "NCELL",
            "kb",
            "PV_12V"
        ],
        "images": [
            {
                "type": 0,
                "size": 3272084,
                "description": "",
                "name": "c47001dfa877916cf9affb4001e46984",
                "id": 1125
            }
        ],
        "elevation": 2082,
        "description": "Tier 3 Station",
        "onm": "",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.74861,
        "latitude": 27.35833,
        "district": "Khotang",
        "basin": "Koshi",
        "stationIndex": "120401",
        "id": 276,
        "name": "Aiselukhark"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 251182,
                "description": "",
                "name": "cf987cac6d1fe65d4a886347f3e4e760",
                "id": 243
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "RISING",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "6.55199956894",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 3378,
        "longitude": 84.83037,
        "latitude": 27.99521,
        "district": "Dhading",
        "basin": "Narayani",
        "stationIndex": "445.3",
        "id": 189,
        "name": "Ankhu Khola at Ankhu Bagar"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3280177,
                "description": "",
                "name": "90bd4bdfc1824ba0c943d6d1f05be14e",
                "id": 132
            }
        ],
        "elevation": 137,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "11.00",
        "warning_level": "10.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.869999885559",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 2937,
        "longitude": 87.1552,
        "latitude": 26.9233,
        "district": "Dhankuta",
        "basin": "Koshi",
        "stationIndex": "606",
        "id": 198,
        "name": "Arun River at Simle"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 5824287,
                "description": "",
                "name": "97e74cebb8702a3fe150ad2e5212de97",
                "id": 129
            }
        ],
        "elevation": 1000,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "7.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2874,
        "longitude": 87.346389,
        "latitude": 27.601389,
        "district": "Sankhuwasabha",
        "basin": "Koshi",
        "stationIndex": "600.1",
        "id": 195,
        "name": "Arun River at Uwa Gau"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "HYCOS",
            "RF",
            "CDCP",
            "AMC_RB",
            "2012",
            "MHS",
            "NTC",
            "RTS-RLS",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2123753,
                "description": "",
                "name": "fd956bb71de64333f4341e677fe1b32f",
                "id": 1378
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with Radar Level sensor",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "6.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.2513999939",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 1481,
        "longitude": 87.1892,
        "latitude": 27.311975,
        "district": "Sankhuwasabha ",
        "basin": "Koshi",
        "stationIndex": "604.5",
        "id": 107,
        "name": "Arun at Turkeghat"
    },
    {
        "tags": [
            "HS",
            "Babai",
            "RLS",
            "AMC_RB",
            "2010",
            "MHS",
            "Non-Op",
            "PV_12V"
        ],
        "images": [
            {
                "type": 0,
                "size": 83459,
                "description": "",
                "name": "2d4d36efe1c015a467a495cf9402fd13",
                "id": 14
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "8.00",
        "warning_level": "7.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 642,
        "longitude": 81.356944,
        "latitude": 28.1925,
        "district": "Bardiya",
        "basin": "Babai",
        "stationIndex": "291",
        "id": 28,
        "name": "Babai at Bhada  Bridge"
    },
    {
        "tags": [
            "HS",
            "Narayani",
            "O&M",
            "AMC_RB",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 5232866,
                "description": "",
                "name": "702fc0259338bfbf5629a79ce510a2ce",
                "id": 1088
            }
        ],
        "elevation": 227,
        "description": "MHS",
        "onm": null,
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.669400215149",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19964,
        "longitude": 83.811417,
        "latitude": 28.07284,
        "district": "Syangja",
        "basin": "Narayani",
        "stationIndex": "415.1",
        "id": 4788,
        "name": "Andhi Khola at Borlang pool"
    },
    {
        "tags": [
            "HS",
            "RIMES",
            "Babai",
            "RF",
            "RLS",
            "RTDL-17",
            "AMC_RB",
            "Province 6",
            "2016",
            "MHS",
            "rd",
            "PV_12V"
        ],
        "images": [
            {
                "type": 0,
                "size": 193197,
                "description": "",
                "name": "3b51f1cf4c50a08843aa2e4e83b9299f",
                "id": 19
            }
        ],
        "elevation": 308,
        "description": "Old Station at 28.353056, 81.719444, 265 m (Elevation might be error) ).Site changed due to Flood of 2071 BS.",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "6.10",
        "warning_level": "5.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.31999969482",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 649,
        "longitude": 81.7135456,
        "latitude": 28.3565601,
        "district": "Bardiya",
        "basin": "Babai",
        "stationIndex": "289.95",
        "id": 29,
        "name": "Babai at Chepang"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "CDCP",
            "2019",
            "DAO",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 340070,
                "description": "",
                "name": "dc55af13afe556437bdb25bf6046bef0",
                "id": 1340
            }
        ],
        "elevation": 370,
        "description": "Hydrological Station with RLS & CDCP (28.30388889, 81.82583333) ",
        "onm": "DAO, Bardiya",
        "steady": "",
        "danger_level": "5",
        "warning_level": "4.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5449,
        "longitude": 81.82583333,
        "latitude": 28.30388889,
        "district": "Salyan",
        "basin": "Babai",
        "stationIndex": "",
        "id": 880,
        "name": "Babai at Ghuiyabari"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "AMC_RB",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 444453,
                "description": "",
                "name": "d99f498ddba80f3ea91ba5567853d0eb",
                "id": 70
            }
        ],
        "elevation": null,
        "description": "Rainfall Station",
        "onm": null,
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.326111,
        "latitude": 27.692778,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "",
        "id": 63,
        "name": "Babarmahal (DHM Office)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "O&M",
            "PPCR_HYD",
            "2018",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 394294,
                "description": "",
                "name": "5906e473c7c5f537d37d8a06e7284c60",
                "id": 120
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "2.80",
        "warning_level": "2.30",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.638000011444",
            "datetime": "2023-02-06T00:05:00+00:00"
        },
        "series_id": 3400,
        "longitude": 85.425821,
        "latitude": 27.774022,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "505",
        "id": 192,
        "name": "Bagmati River at Sundarijal"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "CDMA",
            "Non-Op",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3956868,
                "description": "",
                "name": "10907f59e420365584890e1e4f049b43",
                "id": 1029
            }
        ],
        "elevation": null,
        "description": "Station under PPCR (27.695 , 83.954)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3529,
        "longitude": null,
        "latitude": null,
        "district": "",
        "basin": "Narayani",
        "stationIndex": "490",
        "id": 232,
        "name": "Arung Khola at Batasa"
    },
    {
        "tags": [
            "HS",
            "Bagmati",
            "CDCP",
            "BRBIP",
            "O&M",
            "AMC_RB",
            "2018",
            "MHS",
            "PV_3.7V"
        ],
        "images": [
            {
                "type": 0,
                "size": 209970,
                "description": "",
                "name": "da1d7b111fdb5aa9ee62a3ef313cb555",
                "id": 184
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RTS-RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "3",
        "warning_level": "2.7",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 4199,
        "longitude": 85.3497,
        "latitude": 27.713,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "530",
        "id": 260,
        "name": "Bagmati at Gaurighat"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2017",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 7241054,
                "description": "",
                "name": "a8cd541d803d4671237fa9be5cacb27b",
                "id": 1455
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "6.8",
        "warning_level": "6.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "-9999977.0",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 2090,
        "longitude": 85.466667,
        "latitude": 27.1,
        "district": "Rautahat",
        "basin": "Bagmati",
        "stationIndex": "589.5",
        "id": 147,
        "name": "Bagmati at Karmaiya (Padheradovan)"
    },
    {
        "tags": [
            "HS",
            "RF",
            "RLS",
            "Bagmati",
            "AMC_RB",
            "2010",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 113004,
                "description": "",
                "name": "dafbc154af42b26bf7474449fe2f2dc5",
                "id": 57
            }
        ],
        "elevation": 1255,
        "description": "Hydrological Station with RLS and Tipping Bucket",
        "onm": "DHM",
        "steady": "",
        "danger_level": "4.00",
        "warning_level": "3.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 927,
        "longitude": 85.293333,
        "latitude": 27.632222,
        "district": "Lalitpur",
        "basin": "Bagmati",
        "stationIndex": "550.05",
        "id": 50,
        "name": "Bagmati at Khokana"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "PPCR_HYD",
            "2018",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 966223,
                "description": "",
                "name": "53540325d5ed17568e93baea068f6fe1",
                "id": 1033
            }
        ],
        "elevation": 69,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.79300022125",
            "datetime": "2023-02-06T00:05:00+00:00"
        },
        "series_id": 2853,
        "longitude": 85.4927953,
        "latitude": 27.1981894,
        "district": "Makawanpur",
        "basin": "Bagmati",
        "stationIndex": "586",
        "id": 194,
        "name": "Bagmati River at Rai Gaon"
    },
    {
        "tags": [
            "Koshi",
            "HYCOS",
            "RF",
            "2013"
        ],
        "images": [
            {
                "type": 0,
                "size": 251044,
                "description": "",
                "name": "a9f80a5643325e975bb0d761df3449ca",
                "id": 93
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS ",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19751,
        "longitude": 85.901199,
        "latitude": 27.78763,
        "district": "Sindhupalchok",
        "basin": "Koshi",
        "stationIndex": "610",
        "id": 112,
        "name": "Bahrabise"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "HS",
            "RF",
            "RLS",
            "AMC_RB",
            "2016",
            "MHS",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 273480,
                "description": "",
                "name": "6df5013201a66106aecf063e03e4af1e",
                "id": 74
            }
        ],
        "elevation": 725,
        "description": "Hydrological Station with RLS & Temp/Humidity ( Tipping Bucket was not installed as the site was not suitable)",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "7.00",
        "warning_level": "5.80",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.81599998474",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 32,
        "longitude": 85.766,
        "latitude": 27.8047,
        "district": "Sindhupalchowk",
        "basin": "Koshi",
        "stationIndex": "620",
        "id": 11,
        "name": "Balefi at Jalbire"
    },
    {
        "tags": [
            "HS",
            "MHS",
            "RTS-RLS",
            "Thuraya",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 529775,
                "description": "",
                "name": "490e31017ec56a35a61ea4565c5b2398",
                "id": 1325
            }
        ],
        "elevation": null,
        "description": "HS_manual",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.13030052185",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 21089,
        "longitude": 87.363245,
        "latitude": 27.693564,
        "district": "Sankhuwasabha",
        "basin": "Koshi",
        "stationIndex": "600.5",
        "id": 4676,
        "name": "Barun River at Syaksila"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "BRBIP",
            "O&M",
            "AMC_RB",
            "2018",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 4816834,
                "description": "",
                "name": "81d1c2e7698fb96ae6e810b28ad57e2e",
                "id": 1111
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RTS-RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "3",
        "warning_level": "2.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 4190,
        "longitude": 85.421528,
        "latitude": 27.755222,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "515",
        "id": 259,
        "name": "Bagmati at Sundarijal Bridge"
    },
    {
        "tags": [
            "RF",
            "CDCP",
            "Province 5",
            "NTC",
            "Manual",
            "RF-2022",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 276807,
                "description": "",
                "name": "bc6cb6896ad9e63143835914284cc0b1",
                "id": 1562
            },
            {
                "type": 0,
                "size": 256310,
                "description": "",
                "name": "98d4e6c1e719153e1b749c9c82eed14b",
                "id": 1563
            }
        ],
        "elevation": 1626,
        "description": "0733",
        "onm": "OHM, Bhairahawa ",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 83.43769722,
        "latitude": 28.07040278,
        "district": "Gulmi ",
        "basin": "",
        "stationIndex": "0733",
        "id": 737,
        "name": "Bharse"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RF",
            "RLS",
            "CDCP",
            "AMC_RB",
            "2011",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 212691,
                "description": "",
                "name": "24cbbfa0b59c9ff33174453501237642",
                "id": 11
            }
        ],
        "elevation": null,
        "description": "Hydrological station at Samaijhighat with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 658,
        "longitude": 81.6667,
        "latitude": 28.5167,
        "district": "Surkhet",
        "basin": "Karnali",
        "stationIndex": "269.5",
        "id": 30,
        "name": "Bheri at Samaijighat"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "HYCOS",
            "RLS",
            "CDCP",
            "AMC_RB",
            "2013",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 181586,
                "description": "",
                "name": "1fa9f7b4833192d038492298d9a42cc7",
                "id": 95
            }
        ],
        "elevation": null,
        "description": "CDCP with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "3.60",
        "warning_level": "3.10",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.563000679016",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 1640,
        "longitude": 85.89776,
        "latitude": 27.792524,
        "district": "Sindhupalchok",
        "basin": "Koshi",
        "stationIndex": "610",
        "id": 113,
        "name": "Bhote Koshi at Bahrabise"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 361084,
                "description": "",
                "name": "22ff7dc46e7770641718ca926ef7d912",
                "id": 1009
            }
        ],
        "elevation": null,
        "description": "Automatic Hydrological Station at Jamu Bheri with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "5",
        "warning_level": "4.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.80999946594",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 2289,
        "longitude": 81.352052,
        "latitude": 28.77008,
        "district": "Surkhet",
        "basin": "Karnali",
        "stationIndex": "270",
        "id": 161,
        "name": "Bheri at Jamu"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 238350,
                "description": "",
                "name": "525c84f791fd0462d9593a5123f046a6",
                "id": 235
            }
        ],
        "elevation": 1440,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "5.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.5110001564",
            "datetime": "2023-02-05T22:55:00+00:00"
        },
        "series_id": 2810,
        "longitude": 85.3425,
        "latitude": 28.16555556,
        "district": "Rasuwa",
        "basin": "Narayani",
        "stationIndex": "446.25",
        "id": 191,
        "name": "Bhote Koshi at Shyaprubesi"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "BRBIP",
            "O&M",
            "AMC_RB",
            "2018",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 4001914,
                "description": "",
                "name": "86e0ab69d6eb0e5199b05f0fcad87579",
                "id": 1112
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RTS-RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 4181,
        "longitude": 85.30722,
        "latitude": 27.735277,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "536.5",
        "id": 261,
        "name": "Bishnumati at Gongabu Buspark"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RIMES",
            "RF",
            "RLS",
            "AMC_RB",
            "2016",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 271616,
                "description": "",
                "name": "6af9474d5603069ed9c66df2f55753a2",
                "id": 5
            }
        ],
        "elevation": 227,
        "description": "Hydrological station with RLS and Tipping Bucket",
        "onm": "DHM",
        "steady": "",
        "danger_level": "7.00",
        "warning_level": "6.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1248,
        "longitude": 81.208,
        "latitude": 29.15,
        "district": "Achham",
        "basin": "Karnali",
        "stationIndex": "256.5",
        "id": 79,
        "name": "Budiganga at Chitreghat"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1225130,
                "description": "",
                "name": "4c5c81fd00ae895d3983d8164c6607ec",
                "id": 1407
            }
        ],
        "elevation": 494,
        "description": "Budhiganga River at Kakarsant",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.20099925995",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 21372,
        "longitude": 81.215,
        "latitude": 29.179,
        "district": "",
        "basin": "Karnali",
        "stationIndex": "255",
        "id": 4619,
        "name": "Budhiganga River at Kakarsant"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "MHS",
            "Manual",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 104226,
                "description": "",
                "name": "6fccfe2aab1c752b688c0e8e6350c3ba",
                "id": 1370
            }
        ],
        "elevation": 685,
        "description": "Location: Karkale Gaun (120)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 21571,
        "longitude": 80.56,
        "latitude": 29.668,
        "district": "Darchula",
        "basin": "Mahakali",
        "stationIndex": "120",
        "id": 4594,
        "name": "Chamelia at Karkale Gaun"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "RF",
            "TSHO",
            "AMC_RB",
            "2015",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 359345,
                "description": "",
                "name": "6534428f7a234d7ce018b43e3ed9f7d0",
                "id": 96
            }
        ],
        "elevation": 1397,
        "description": "Rainfall station",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.2619,
        "latitude": 27.7728,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 115,
        "name": "Chankhu"
    },
    {
        "tags": [
            "UNDP",
            "AWS",
            "Koshi",
            "RF",
            "MFD",
            "Province 3",
            "2016",
            "Climate",
            "AgroBulletin",
            "Sindhupalchok",
            "cks"
        ],
        "images": [
            {
                "type": 0,
                "size": 303665,
                "description": "",
                "name": "6e2c928ec3611375e1814778fb5006cf",
                "id": 72
            }
        ],
        "elevation": 1552,
        "description": "Climatology Station with AWS under UNDP",
        "onm": "OHM, Dharan",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.73207778,
        "latitude": 27.75378333,
        "district": "Sindhupalchowk",
        "basin": "Koshi",
        "stationIndex": "1009",
        "id": 3,
        "name": "Chautara"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 237557,
                "description": "",
                "name": "8621e093fae4c3652e0df2008cc5d086",
                "id": 232
            }
        ],
        "elevation": 461,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.4950003624",
            "datetime": "2023-02-06T00:05:00+00:00"
        },
        "series_id": 2767,
        "longitude": 84.487,
        "latitude": 28.0628,
        "district": "Lamjung",
        "basin": "Narayani",
        "stationIndex": "440",
        "id": 188,
        "name": "Chepe Khola at Garambesi"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 497410,
                "description": "",
                "name": "39f5d70b0455a6313486de6602b1320d",
                "id": 1377
            }
        ],
        "elevation": 679,
        "description": "Chingar River at Simlekhet",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 21349,
        "longitude": 81.768,
        "latitude": 28.568,
        "district": "Surkhet",
        "basin": "Karnali",
        "stationIndex": "274",
        "id": 4632,
        "name": "Chingar River at Simlekhet(274)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 101586,
                "description": "",
                "name": "0df7c4ee7c2936f35b9af98af232e5c9",
                "id": 1021
            }
        ],
        "elevation": 700,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "3.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2641,
        "longitude": 83.30399,
        "latitude": 28.196,
        "district": "Baglung",
        "basin": "Narayani",
        "stationIndex": "416.2",
        "id": 182,
        "name": "Daaram Khola at Wamitaksar"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC"
        ],
        "images": [
            {
                "type": 0,
                "size": 7508844,
                "description": "",
                "name": "c6dbdd860a9242649ad8d441b8e4a515",
                "id": 1028
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "3.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.657999992371",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3508,
        "longitude": 84.629874,
        "latitude": 28.043203,
        "district": "Gorkha",
        "basin": "Narayani",
        "stationIndex": "441",
        "id": 231,
        "name": "Daraudi Khola at Naya Sangu"
    },
    {
        "tags": [
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021"
        ],
        "images": [
            {
                "type": 0,
                "size": 7848124,
                "description": "",
                "name": "63788b4d07549e8f152a81a150c203d5",
                "id": 1082
            }
        ],
        "elevation": null,
        "description": "HS_manual",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19643,
        "longitude": 87.767529,
        "latitude": 26.913684,
        "district": "Illam",
        "basin": "Kankai",
        "stationIndex": "738",
        "id": 4682,
        "name": "Deumai Khola at Aangdang"
    },
    {
        "tags": [
            "AWS",
            "Koshi",
            "HYCOS",
            "RF",
            "2012"
        ],
        "images": [
            {
                "type": 0,
                "size": 109973,
                "description": "",
                "name": "7258912b461279030f4b994219c25334",
                "id": 79
            }
        ],
        "elevation": 1153,
        "description": "Automatic Weather Station with WXT520",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 87.3459,
        "latitude": 26.9833,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 103,
        "name": "Dhankuta_AWS"
    },
    {
        "tags": [
            "HS",
            "O&M",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 5274200,
                "description": "",
                "name": "13695e04f892e6ac7764dea4df96a2db",
                "id": 1085
            }
        ],
        "elevation": 671,
        "description": "HS_manual",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.09269952774",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19984,
        "longitude": 84.45229,
        "latitude": 28.20302,
        "district": "Lamjung",
        "basin": "Narayani",
        "stationIndex": "439.4",
        "id": 4656,
        "name": "Dordi Khola at Ambote bazar"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RF",
            "RLS",
            "PPCR_HYD",
            "AMC_RB",
            "2019",
            "MHS",
            "NTC",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 273610,
                "description": "",
                "name": "ffd61d87a3d83d0b7d4417d7dbb4c539",
                "id": 91
            }
        ],
        "elevation": 460,
        "description": "Hydrological station with bubbler sensor",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "6",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.50099945068",
            "datetime": "2023-02-06T00:30:00+00:00"
        },
        "series_id": 1500,
        "longitude": 86.65,
        "latitude": 27.26,
        "district": "Khotang",
        "basin": "Koshi",
        "stationIndex": "670",
        "id": 110,
        "name": "Dudh Koshi at Rabuwabazar"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3008846,
                "description": "",
                "name": "67e173c27b215d1bab92c9a243be6084",
                "id": 1073
            }
        ],
        "elevation": 162,
        "description": "Duduwa River(364) at Masurikhet",
        "onm": "",
        "steady": "",
        "danger_level": "6",
        "warning_level": "5.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19260,
        "longitude": 81.697579,
        "latitude": 28.202405,
        "district": "Banke",
        "basin": "West Rapti",
        "stationIndex": "364",
        "id": 4647,
        "name": "Duduwa River(364)"
    },
    {
        "tags": [
            "MOPE",
            "HS",
            "RLS",
            "Narayani",
            "2017"
        ],
        "images": [
            {
                "type": 0,
                "size": 1566416,
                "description": "",
                "name": "b75c7fb80699fd47102487f38a920475",
                "id": 116
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2469,
        "longitude": 84.4236,
        "latitude": 28.18888,
        "district": "Lamjung",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 217,
        "name": "Dwang Khola (Chiti, Lamjung)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4557742,
                "description": "",
                "name": "6b3873a603048aca368d9d8fe8e5ca1d",
                "id": 143
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "3.70",
        "warning_level": "3.30",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.384000778198",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3733,
        "longitude": 84.97,
        "latitude": 27.44,
        "district": "Makwanpur",
        "basin": "Narayani",
        "stationIndex": "460",
        "id": 235,
        "name": "East Rapti at Rajaiya"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2010",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 296481,
                "description": "",
                "name": "a8024313fb0e0deac66c58dd41b1389b",
                "id": 69
            },
            {
                "type": 0,
                "size": 1148924,
                "description": "",
                "name": "c2673b23f83171a64355e9ca88048990",
                "id": 1585
            }
        ],
        "elevation": null,
        "description": "Rainfall station (26.968056, 85.44)",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.315795,
        "latitude": 26.952526,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 61,
        "name": "Garuda"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 324381,
                "description": "",
                "name": "d33e9ce89cadbfb47fd0c5cbdb606de2",
                "id": 67
            }
        ],
        "elevation": null,
        "description": "Rainfall Station",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.378889,
        "latitude": 27.593056,
        "id": 59,
        "name": "Godavari"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "RF",
            "TSHO",
            "AMC_RB",
            "2015",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 336753,
                "description": "",
                "name": "96c77dc15bd90f0d7e03bd010db54e08",
                "id": 102
            }
        ],
        "elevation": 1343,
        "description": "Rainfall station (27.84305, 86.21667)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": null,
        "latitude": null,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 117,
        "name": "Gongar"
    },
    {
        "tags": [
            "IMJA",
            "Koshi",
            "HS",
            "RLS",
            "2016",
            "MHS",
            "SNOW"
        ],
        "images": null,
        "elevation": 5012,
        "description": "Hydrological Station at Imja Lake to measure Lake level",
        "onm": "DHM",
        "steady": "",
        "danger_level": "3.0",
        "warning_level": "2.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5385,
        "longitude": 86.907325,
        "latitude": 27.899553,
        "district": "Solukhumbu",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 6,
        "name": "HS at Imja Lake"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 8068795,
                "description": "",
                "name": "9f607bb40be8410617ebd8cbbca2717e",
                "id": 130
            }
        ],
        "elevation": 328,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.54400062561",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 2916,
        "longitude": 87.21499,
        "latitude": 27.295,
        "district": "Sankhuwasabha",
        "basin": "Koshi",
        "stationIndex": "602.5",
        "id": 197,
        "name": "Hinwa Khola at Pipletar"
    },
    {
        "tags": [
            "IMJA",
            "Koshi",
            "HS",
            "RLS",
            "2016",
            "SNOW"
        ],
        "images": null,
        "elevation": 4952,
        "description": "HS at Imja Lake Downstream measuring level of the river",
        "onm": "DHM",
        "steady": "",
        "danger_level": "4.0",
        "warning_level": "3.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5378,
        "longitude": 86.900661,
        "latitude": 27.899686,
        "district": "Solukhumbu",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 7,
        "name": "HS at Imja Lake Downstream"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "PPCR_HYD",
            "2020",
            "MHS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2489226,
                "description": "",
                "name": "8fec523040d67e35469b995e34bfee77",
                "id": 1007
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2199,
        "longitude": 81.883093,
        "latitude": 29.654137,
        "district": "",
        "basin": "",
        "stationIndex": "206",
        "id": 159,
        "name": "Humla Karnali at Bihichhada"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "PPCR_HYD",
            "2020",
            "MHS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 6262684,
                "description": "",
                "name": "cec55e6292be72735c07d5aa03d961c6",
                "id": 1006
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2178,
        "longitude": 81.948703,
        "latitude": 29.779998,
        "district": "",
        "basin": "Karnali",
        "stationIndex": "205.5",
        "id": 158,
        "name": "Humla Karnali at Jaur (Sarkegad)"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1929399,
                "description": "",
                "name": "ddecf71395462ef5a81d9baf3b6305b5",
                "id": 160
            }
        ],
        "elevation": 183.8,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "8.30",
        "warning_level": "7.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2392,
        "longitude": 81.5817,
        "latitude": 29.151,
        "district": "Kalikot",
        "basin": "Karnali",
        "stationIndex": "215",
        "id": 166,
        "name": "Humla Karnali at Lalighat"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "O&M",
            "MHS",
            "SNOW",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1340496,
                "description": "",
                "name": "6fa9a072bfff128f8078b0a570643094",
                "id": 1232
            }
        ],
        "elevation": 4375,
        "description": "RLS with Thuraya",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 12378,
        "longitude": 86.838542,
        "latitude": 27.895069,
        "district": "Solukhumbu",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 4564,
        "name": "Imja Khola at Dingboche"
    },
    {
        "tags": [
            "IMJA",
            "HS",
            "RLS",
            "2019",
            "HAS",
            "SNOW",
            "Thuraya"
        ],
        "images": [
            {
                "type": 0,
                "size": 236088,
                "description": "",
                "name": "67eb83bcb104141d1add4f94983136cb",
                "id": 1565
            }
        ],
        "elevation": 3936,
        "description": "Imja River at Pangboche",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "5.0",
        "warning_level": "4.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.826000213623",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 5287,
        "longitude": 86.7959486,
        "latitude": 27.8595819,
        "district": "Solukhumbu ",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 869,
        "name": "Imja River at Pangboche"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2020",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3940406,
                "description": "",
                "name": "6818d1dec231bea06048ba755dccbddc",
                "id": 1034
            }
        ],
        "elevation": 636.48,
        "description": "Hydrological Station with RLS (27.644984, 85.706327)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2982,
        "longitude": null,
        "latitude": null,
        "district": "Sindhupalchowk",
        "basin": "Koshi",
        "stationIndex": "629.1",
        "id": 200,
        "name": "Indrawati at Dolalghat"
    },
    {
        "tags": false,
        "images": null,
        "elevation": null,
        "description": "Innosent",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3423,
        "longitude": null,
        "latitude": null,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 223,
        "name": "Innosent for Barhbise"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "WWF",
            "2013",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 130729,
                "description": "",
                "name": "2d36ba07793cb5bb388b9268e9fee592",
                "id": 100
            }
        ],
        "elevation": 813.2,
        "description": "Hydrological station with RLS (installed by WWF)",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "4.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1652,
        "longitude": 85.57694,
        "latitude": 27.8286,
        "district": "Sindhupalchok",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 126,
        "name": "Indrawati at Melamchi"
    },
    {
        "tags": [
            "Bubbler",
            "West Rapti",
            "2012",
            "MHS",
            "Non-Op",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 1239233,
                "description": "",
                "name": "b15cc1284c9e1b428f49968bb8f55cec",
                "id": 37
            }
        ],
        "elevation": 218,
        "description": "Hydrological Station with Bubbler (27.947222, 82.225)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 987,
        "longitude": 82.225,
        "latitude": 27.9472,
        "district": "Dang",
        "basin": "West Rapti",
        "stationIndex": "360",
        "id": 54,
        "name": "Jalkundi"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "Nalsingad Hydropower",
            "2014"
        ],
        "images": [
            {
                "type": 0,
                "size": 8184576,
                "description": "",
                "name": "314b3ac6140e1702149b0743e51aaea8",
                "id": 1104
            }
        ],
        "elevation": 1350,
        "description": "Hydrological station with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1969,
        "longitude": 82.2929,
        "latitude": 28.8701,
        "district": "",
        "basin": "Karnali",
        "stationIndex": "",
        "id": 137,
        "name": "Intake at Kalaiya Taal (Nulsing Gad)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "West Rapti",
            "CDCP",
            "2019"
        ],
        "images": [
            {
                "type": 0,
                "size": 3031717,
                "description": "",
                "name": "4e7730637d0bcb825be20ce3641af760",
                "id": 1119
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS & CDCP",
        "onm": "DAO, Pyuthan",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5469,
        "longitude": 82.882328,
        "latitude": 28.119845,
        "district": "Pyuthan",
        "basin": "West Rapti",
        "stationIndex": "",
        "id": 882,
        "name": "Jhimruk at Bagdula"
    },
    {
        "tags": [
            "Koshi",
            "HYCOS",
            "RF",
            "2012"
        ],
        "images": [
            {
                "type": 0,
                "size": 67384,
                "description": "",
                "name": "0d0145c14795230926942c0ef2fec4b6",
                "id": 90
            }
        ],
        "elevation": 1950,
        "description": "Precipitation Station",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.23211389,
        "latitude": 27.63044722,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 109,
        "name": "Jiri"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 5355936,
                "description": "",
                "name": "9b9e4c9727674ea7f57a2cf6adfe5b07",
                "id": 1075
            }
        ],
        "elevation": 315,
        "description": "HS_manual",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.18099975586",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 19742,
        "longitude": 83.874715,
        "latitude": 27.947452,
        "district": "Palpa",
        "basin": "Narayani",
        "stationIndex": "419.5",
        "id": 4651,
        "name": "Jyagdi Khola at Dangsing"
    },
    {
        "tags": [
            "RF",
            "CDCP",
            "RF-2022",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 484914,
                "description": "",
                "name": "6da85e1bbce789d4c1ccd0b9a35198fc",
                "id": 1329
            }
        ],
        "elevation": 1143,
        "description": "0518",
        "onm": "",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 82.28757889,
        "latitude": 28.528895,
        "district": "",
        "basin": "",
        "stationIndex": "",
        "id": 655,
        "name": "Kabreneta"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "Dharan",
            "NTC",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4099611,
                "description": "",
                "name": "a9d4fc8ece42bfc1657b78c902f9cf4b",
                "id": 135
            }
        ],
        "elevation": 545,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "6.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.760000228882",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3312,
        "longitude": 87.7233,
        "latitude": 27.2863,
        "district": "Taplejung",
        "basin": "Koshi",
        "stationIndex": "683.6",
        "id": 211,
        "name": "Kabeli Khola at Taplejung"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 101312,
                "description": "",
                "name": "620074fc3e20f51003dad73fbcb6f8bf",
                "id": 170
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "6.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2554,
        "longitude": 83.7064396,
        "latitude": 28.7683583,
        "district": "Mustang",
        "basin": "Narayani",
        "stationIndex": "403",
        "id": 175,
        "name": "Kali Gandaki at Jomsom"
    },
    {
        "tags": [
            "HS",
            "O&M",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 3293764,
                "description": "",
                "name": "9871b5d2b00e309075062aad5dbf4e87",
                "id": 1089
            }
        ],
        "elevation": 667,
        "description": "MHS (Firmware version: 1.1.13",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 20005,
        "longitude": 83.568292,
        "latitude": 28.34696,
        "district": "Myagdi",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 4790,
        "name": "Kali Gandaki at Kalipul Beni"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 2870704,
                "description": "",
                "name": "aa6876853cb7db9f6224ea8305ee59f3",
                "id": 1027
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.10900020599",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3677,
        "longitude": 84.35,
        "latitude": 27.75,
        "district": "",
        "basin": "Narayani",
        "stationIndex": "420",
        "id": 230,
        "name": "Kali Gandaki at Kota Gaon"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "2015"
        ],
        "images": [
            {
                "type": 0,
                "size": 1664065,
                "description": "",
                "name": "cce970831d22c73820531f5b3a6a7b49",
                "id": 118
            }
        ],
        "elevation": null,
        "description": "Hydrological station installed by GFZ",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "16.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3710,
        "longitude": 83.56068,
        "latitude": 28.0452,
        "district": "Parbat",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 242,
        "name": "Kali Gandaki at Purtighat"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Non-Op",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 101847,
                "description": "",
                "name": "027e1c2f5ed1385f6ef3655b5368f7b3",
                "id": 173
            }
        ],
        "elevation": 695,
        "description": "Hydrological Station with RLS (28.203, 83.67065)",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "7.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2596,
        "longitude": null,
        "latitude": null,
        "district": "Parbat",
        "basin": "Narayani",
        "stationIndex": "406",
        "id": 178,
        "name": "Kali Gandaki at Modi Beni"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 5350697,
                "description": "",
                "name": "379b09f8b3f0b78b0f88a537972d4542",
                "id": 1019
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "5.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.55699968338",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 2575,
        "longitude": 83.64699,
        "latitude": 28.484,
        "district": "Myagdi",
        "basin": "Narayani",
        "stationIndex": "403.5",
        "id": 176,
        "name": "Kali Gandaki at Tatopani (Ratopani)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "AMC_RB",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 313056,
                "description": "",
                "name": "930ef1b72c329c0c06e9af907d99417d",
                "id": 56
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS at Kumalgaon",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "7.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1468,
        "longitude": 83.8,
        "latitude": 27.883889,
        "district": "Syangja",
        "basin": "Narayani",
        "stationIndex": "419.1",
        "id": 101,
        "name": "Kaligandaki at Kumalgaon"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Kamala Basin",
            "CDCP",
            "AMC_RB"
        ],
        "images": [
            {
                "type": 0,
                "size": 242932,
                "description": "",
                "name": "83d9e3d318e3b49b107eac6b68241338",
                "id": 1402
            }
        ],
        "elevation": null,
        "description": "RLS with CDCP ( installed in replacement of Kamala at Titriya)",
        "onm": null,
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "6",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.43200016022",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 20329,
        "longitude": 86.24833,
        "latitude": 26.912863,
        "district": "",
        "basin": "Kamala",
        "stationIndex": "",
        "id": 4830,
        "name": "Kamala River at Belsot"
    },
    {
        "tags": [
            "HS",
            "Practical Action",
            "RF",
            "Kamala Basin",
            "CDCP",
            "AMC_RB",
            "2018",
            "MHS",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 6292456,
                "description": "",
                "name": "aa2577e77ecc1e1f9a7965b060ad1b89",
                "id": 154
            }
        ],
        "elevation": 182,
        "description": "Hydrological Station with RLS and Tipping bucket (26.895948  86.22266)",
        "onm": "DHM",
        "steady": "",
        "danger_level": "4.80",
        "warning_level": "4.20",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1198,
        "longitude": null,
        "latitude": null,
        "district": "Dhanusa",
        "basin": "Kamala",
        "stationIndex": "597",
        "id": 72,
        "name": "Kamala River at Titriya"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Kamala Basin",
            "CDCP",
            "AMC_RB"
        ],
        "images": [
            {
                "type": 0,
                "size": 294195,
                "description": "",
                "name": "92f9499b5b39034b35e464d026b99030",
                "id": 1403
            }
        ],
        "elevation": null,
        "description": "Hydrological station with CDCP",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.5",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 21607,
        "longitude": 86.028333,
        "latitude": 27.079444,
        "district": "Sindhuli",
        "basin": "Kamala",
        "stationIndex": "",
        "id": 4877,
        "name": "Kamala at Ranibas"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1055156,
                "description": "",
                "name": "df698f8ee8223b82844fd0623398dd6e",
                "id": 1071
            }
        ],
        "elevation": 143,
        "description": "Kandra River at Ghumanebahak",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "5",
        "warning_level": "4.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.43800020218",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19601,
        "longitude": 80.904985,
        "latitude": 28.698414,
        "district": "Kailali",
        "basin": "Karnali",
        "stationIndex": "283.3",
        "id": 4635,
        "name": "Kandra River(283.3)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "PPCR_HYD",
            "Kankai",
            "2018",
            "MHS",
            "NTC",
            "CDMA",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2926002,
                "description": "",
                "name": "20ee5ad0c8fefda5dc7a8c6f50c07022",
                "id": 177
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "4.3",
        "warning_level": "3.8",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.35400009155",
            "datetime": "2023-02-05T23:55:00+00:00"
        },
        "series_id": 3635,
        "longitude": 87.877492,
        "latitude": 26.683586,
        "district": "Illam",
        "basin": "Kankai",
        "stationIndex": "795",
        "id": 238,
        "name": "Kankai River at Mainachuli"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "AMC_RB",
            "2011",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 957889,
                "description": "",
                "name": "8077b015d31481a92c7ba5d8405c9102",
                "id": 7
            }
        ],
        "elevation": 629,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "8.90",
        "warning_level": "7.90",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.88799953461",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 1331,
        "longitude": 81.4417,
        "latitude": 28.9528,
        "district": "Achham",
        "basin": "Karnali",
        "stationIndex": "240",
        "id": 86,
        "name": "Karnali at Asaraghat"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "AMC_RB",
            "2010",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 198643,
                "description": "",
                "name": "946676b9b5462e49d1cfa425087921f6",
                "id": 12
            }
        ],
        "elevation": null,
        "description": "Automatic Water Level Station at Chisapani",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "10.8",
        "warning_level": "10",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "3.14200019836",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 691,
        "longitude": 81.28694444,
        "latitude": 28.65305556,
        "district": "Kailali",
        "basin": "Karnali",
        "stationIndex": "280",
        "id": 35,
        "name": "Karnali at Chisapani "
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "PPCR_HYD",
            "Velocity",
            "2018",
            "NTC&NCELL",
            "rd",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2972830,
                "description": "",
                "name": "338039ae45a4750525f12b0e93efc30c",
                "id": 1016
            }
        ],
        "elevation": null,
        "description": "Velocity Station",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "10.5",
        "warning_level": "9.8",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "4.14400005341",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 4136,
        "longitude": 81.28334,
        "latitude": 28.64118,
        "district": "Kailali",
        "basin": "Karnali",
        "stationIndex": "280",
        "id": 258,
        "name": "Karnali at Chisapani Bridge"
    },
    {
        "tags": [
            "RF",
            "CDCP",
            "Province 5",
            "NTC",
            "Manual",
            "RF-2022",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 220977,
                "description": "",
                "name": "21c645af30def95c892dce20c4cf25e7",
                "id": 1420
            },
            {
                "type": 0,
                "size": 220977,
                "description": "",
                "name": "f422d3f4efe8f520da68068f2e8187f6",
                "id": 1421
            }
        ],
        "elevation": 2145,
        "description": "0520",
        "onm": "OHM, Bhairahawa ",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 82.36280556,
        "latitude": 28.4229,
        "district": "Rolpa ",
        "basin": "",
        "stationIndex": "0520",
        "id": 657,
        "name": "Keur Gaun"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021"
        ],
        "images": [
            {
                "type": 0,
                "size": 11840092,
                "description": "",
                "name": "64dd8fb84d02991a8bf3b45aa320ace8",
                "id": 1079
            }
        ],
        "elevation": null,
        "description": "RLS with CDCP",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "5.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.36100006104",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 19657,
        "longitude": 86.2,
        "latitude": 27.576,
        "district": "Ramechhap",
        "basin": "Koshi",
        "stationIndex": "650",
        "id": 4677,
        "name": "KhimtiKhola at Rasnalu"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 6100028,
                "description": "",
                "name": "632a0d8ec72372f18ead58c11a1b47a0",
                "id": 141
            }
        ],
        "elevation": 3892,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "4.3",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.10800027847",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 2832,
        "longitude": 85.47399,
        "latitude": 27.371,
        "district": "Sindhuli",
        "basin": "Bagmati",
        "stationIndex": "580",
        "id": 193,
        "name": "Khokhajor Khola at Hariharpur Gadi"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 6402784,
                "description": "",
                "name": "7de92012f915f717f9d0cc378c81fe7c",
                "id": 1077
            }
        ],
        "elevation": 802,
        "description": "HS_manual",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.08200073242",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19615,
        "longitude": 84.35831,
        "latitude": 28.28022,
        "district": "Lamjung",
        "basin": "Narayani",
        "stationIndex": "439.3",
        "id": 4655,
        "name": "Khudi Khola at Khudibazar"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "RTS-RLS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 229482,
                "description": "",
                "name": "c700914540dd7e083ed4ccaac74847e7",
                "id": 1074
            }
        ],
        "elevation": null,
        "description": "HS with RLS and CDCP",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "4.5",
        "warning_level": "4",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.67779922485",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19194,
        "longitude": 80.673521,
        "latitude": 28.876454,
        "district": "Kailali",
        "basin": "Karnali",
        "stationIndex": "190.8",
        "id": 4686,
        "name": "Khutiya khola at Mudibhar 190.8"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS",
            "Manual",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1305297,
                "description": "",
                "name": "abb78ae76dc5e36d97f0c68381e5a947",
                "id": 1396
            }
        ],
        "elevation": 1345,
        "description": "Kuwadi River at Rigin(209)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 21379,
        "longitude": 81.759,
        "latitude": 29.604,
        "district": "",
        "basin": "Karnali",
        "stationIndex": "209",
        "id": 4606,
        "name": "Kuwadi River at Rigin(209)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 569757,
                "description": "",
                "name": "9656ba736c6d3c61c56673d3e4c3b23a",
                "id": 1024
            }
        ],
        "elevation": 1484,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.32100009918",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 2788,
        "longitude": 85.34611111,
        "latitude": 28.16222222,
        "district": "Rasuwa",
        "basin": "Narayani",
        "stationIndex": "446.2",
        "id": 190,
        "name": "Langtang Khola at Shyaprubesi"
    },
    {
        "tags": [
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 179651,
                "description": "",
                "name": "c0795435a1d8f2c67b567f204b9a7066",
                "id": 699
            }
        ],
        "elevation": null,
        "description": "MHS",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.349,
        "latitude": 28.16,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 4784,
        "name": "Lantang Khola at Shyaprubesi"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 555261,
                "description": "",
                "name": "9038df0c9c0d54e1741001700d85a7ca",
                "id": 71
            }
        ],
        "elevation": null,
        "description": "Rainfall Station",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.353056,
        "latitude": 27.577778,
        "id": 65,
        "name": "Lele"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1185899,
                "description": "",
                "name": "fd74de0c0c01c03cf9c2ddf9a1bd0b26",
                "id": 163
            }
        ],
        "elevation": 701,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "4.50",
        "warning_level": "3.60",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2356,
        "longitude": 81.712,
        "latitude": 28.841,
        "district": "Dailekh Simada",
        "basin": "Karnali",
        "stationIndex": "242",
        "id": 170,
        "name": "Lohare Khola at Dailekh"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 236602,
                "description": "",
                "name": "6876898d38676539eac0a1b5ca1bc0c7",
                "id": 1035
            }
        ],
        "elevation": 518,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.37599945068",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3004,
        "longitude": 86.218347,
        "latitude": 27.350586,
        "district": "Ramechhap",
        "basin": "Koshi",
        "stationIndex": "660",
        "id": 201,
        "name": "Likhu Khola at Sangutar"
    },
    {
        "tags": [
            "HS",
            "RIMES",
            "RF",
            "RLS",
            "AMC_RB",
            "2016",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 308292,
                "description": "",
                "name": "15c99d6b744d04229376af5306d41c93",
                "id": 8
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "4.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.77199983597",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 1345,
        "longitude": 81.584198,
        "latitude": 28.784518,
        "district": "Dailekh",
        "basin": "Karnali",
        "stationIndex": "241",
        "id": 87,
        "name": "Lohare Khola at Tallo Dungeshwor"
    },
    {
        "tags": [
            "AWS",
            "Koshi",
            "HYCOS",
            "AMC_RB",
            "2012"
        ],
        "images": [
            {
                "type": 0,
                "size": 226484,
                "description": "",
                "name": "3a53dcaacb4acf597586f8df954fa239",
                "id": 106
            }
        ],
        "elevation": 2672,
        "description": "Automatic Weather Station",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.72026,
        "latitude": 27.69955,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 135,
        "name": "Lukla (Chaurikharka)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "AMC_RB",
            "2015",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 301559,
                "description": "",
                "name": "93f6c4e346f0c03f64410c51ac9f71a0",
                "id": 55
            }
        ],
        "elevation": 207,
        "description": "Hydrological station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "7.00",
        "warning_level": "6.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1318,
        "longitude": 84.7361,
        "latitude": 27.5877,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "470",
        "id": 85,
        "name": "Lothar Khola at Lothar"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 5778950,
                "description": "",
                "name": "42c384a76c7dd415c44c0c9d7cd6f34c",
                "id": 1072
            }
        ],
        "elevation": 695,
        "description": "Lungri River(327) at Khungri",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "4.5",
        "warning_level": "3.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.44990062714",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 19650,
        "longitude": 82.695314,
        "latitude": 28.214136,
        "district": "Pyuthan",
        "basin": "West Rapti",
        "stationIndex": "327",
        "id": 4640,
        "name": "Lungri River at Khungri(327) "
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "2019",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 3356399,
                "description": "",
                "name": "a3a1b365d608cefff91926676bb608e7",
                "id": 1447
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS & CDCP (28.93111111, 80.53194444)",
        "onm": "NRCS, Kailali",
        "steady": "",
        "danger_level": "4.9",
        "warning_level": "4",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5442,
        "longitude": 80.53194444,
        "latitude": 28.93111111,
        "district": "Kailali",
        "basin": "Machheli",
        "stationIndex": "",
        "id": 879,
        "name": "Machheli Khola at Sotyas, Kailali"
    },
    {
        "tags": [
            "RLS",
            "O&M",
            "MHS",
            "UPGRADATION-2021"
        ],
        "images": [
            {
                "type": 0,
                "size": 3610462,
                "description": "",
                "name": "885ab7896f619472a70da3cc00580351",
                "id": 1076
            }
        ],
        "elevation": 310,
        "description": "HS_manual",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19608,
        "longitude": 84.264869,
        "latitude": 27.970448,
        "district": "",
        "basin": "Narayani",
        "stationIndex": "438.6",
        "id": 4654,
        "name": "Madi river at Benipatan"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4484850,
                "description": "",
                "name": "87ae48a100420d4d8cfcb126759b58ac",
                "id": 1022
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.48799991608",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 2704,
        "longitude": 84.228,
        "latitude": 28.093,
        "district": "Tanahu",
        "basin": "Narayani",
        "stationIndex": "438",
        "id": 185,
        "name": "Madi River at Sisaghat"
    },
    {
        "tags": [
            "HS",
            "Mercy Corps",
            "RLS",
            "Mahakali",
            "AMC_RB",
            "2017"
        ],
        "images": [
            {
                "type": 0,
                "size": 1095238,
                "description": "",
                "name": "046be63f425e5d8992e45a22ecb8cf33",
                "id": 1371
            }
        ],
        "elevation": 310,
        "description": "Hydrological station with bubbler sensor",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "7.00",
        "warning_level": "5.80",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.92799949646",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 1234,
        "longitude": 80.2606,
        "latitude": 29.1723,
        "district": "Dadeldhura",
        "basin": "Mahakali",
        "stationIndex": "178",
        "id": 78,
        "name": "Mahakali at Parigaon"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 4280681,
                "description": "",
                "name": "dda94e5a1fe05535b24b7907976c7efe",
                "id": 1318
            }
        ],
        "elevation": 305,
        "description": "HS_manual",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 21323,
        "longitude": 84.827716,
        "latitude": 27.548673,
        "district": "Makawanpur",
        "basin": "Narayani",
        "stationIndex": "465",
        "id": 4662,
        "name": "Manahari Khola at Manahari"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "PPCR_HYD",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 59273,
                "description": "",
                "name": "a4c6ea4e5d8860507e2952f9a25712fe",
                "id": 1015
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "6",
        "warning_level": "5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.66100025177",
            "datetime": "2023-02-06T00:30:00+00:00"
        },
        "series_id": 3046,
        "longitude": 81.57555556,
        "latitude": 28.21861111,
        "district": "Banke",
        "basin": "Karnali",
        "stationIndex": "295",
        "id": 187,
        "name": "Mankhola at Belgaun"
    },
    {
        "tags": [
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 10565677,
                "description": "",
                "name": "814aab2bfd65d7110b1fce322b81f99b",
                "id": 1080
            }
        ],
        "elevation": null,
        "description": "HS_manual",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.25899982452",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 19622,
        "longitude": 87.89934,
        "latitude": 26.833324,
        "district": "Ilam",
        "basin": "Kankai",
        "stationIndex": "732",
        "id": 4680,
        "name": "MaiKhola at Chisapani"
    },
    {
        "tags": [
            "HS",
            "Bagmati",
            "CDCP",
            "BRBIP",
            "O&M",
            "AMC_RB",
            "2018",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 241799,
                "description": "",
                "name": "5319adee9e5a1acd8f5fa40bbd6664e8",
                "id": 1113
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RTS-RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.18899965286",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 4208,
        "longitude": 85.3358,
        "latitude": 27.6775,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "525.6",
        "id": 262,
        "name": "Manohara at Balkumari"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 202096,
                "description": "",
                "name": "5389a1f90ffb39d02d71a44fb247f00a",
                "id": 176
            }
        ],
        "elevation": 1070,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.92000007629",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 2683,
        "longitude": 83.918,
        "latitude": 28.301,
        "district": "Kaski",
        "basin": "Narayani",
        "stationIndex": "428",
        "id": 184,
        "name": "Mardi Khola at Lahachowk"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "PPCR_HYD",
            "AMC_RB",
            "MHS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3190919,
                "description": "",
                "name": "03c3c0c58a901cb4db8ae006c8092f40",
                "id": 1038
            }
        ],
        "elevation": 399,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.892000198364",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3207,
        "longitude": 85.8733013,
        "latitude": 27.2695335,
        "district": "Sindhuli",
        "basin": "Bagmati",
        "stationIndex": "585",
        "id": 206,
        "name": "Marin Khola at Kusumtar"
    },
    {
        "tags": [
            "RF",
            "West Rapti",
            "AMC_RB",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 347224,
                "description": "",
                "name": "7eb497518da5b684207e257be48d4cf6",
                "id": 36
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with Chart Recorder",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 919,
        "longitude": 82.798889,
        "latitude": 28.076667,
        "district": "Pyuthan",
        "basin": "West Rapti",
        "stationIndex": "330",
        "id": 49,
        "name": "Mari at Nayagaon"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NCELL",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 212305,
                "description": "",
                "name": "890a7e7d2b2082c58a145329abba816e",
                "id": 1023
            }
        ],
        "elevation": 650,
        "description": "Hydrological Station with RLS (28.20305, 84.401389)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2725,
        "longitude": 84.40142,
        "latitude": 28.203277,
        "district": "Lamjung",
        "basin": "Narayani",
        "stationIndex": "439.35",
        "id": 186,
        "name": "Marsyangdi at Bhakundabesi"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2018",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 194846,
                "description": "",
                "name": "d4cdf8eef5409f8930ddc48176de2f76",
                "id": 169
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RTS-RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "5.10",
        "warning_level": "4.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 4217,
        "longitude": 85.5091,
        "latitude": 27.225,
        "district": "Sindhuli",
        "basin": "Bagmati",
        "stationIndex": "585.8",
        "id": 264,
        "name": "Marin River at Bakfar (Bagmati Dovan)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "MHS",
            "NTC&NCELL"
        ],
        "images": [
            {
                "type": 0,
                "size": 382098,
                "description": "",
                "name": "797a9475dec1a70c8746367e93dc03b9",
                "id": 1018
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "FALLING",
        "danger_level": "",
        "warning_level": "10",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "4.52799987793",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 2491,
        "longitude": 84.424148,
        "latitude": 27.953594,
        "district": "Lamjung",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 172,
        "name": "Marsyangdi at Bimalnagar"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "HS",
            "RF",
            "CDCP",
            "AMC_RB",
            "2017",
            "Sindhupalchok",
            "RTS-RLS",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 834600,
                "description": "",
                "name": "1dfd499881226d22e2548d9399580e08",
                "id": 1424
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS, Tipping Bucket and Temp/Humidity",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.77379989624",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 445,
        "longitude": 85.535356,
        "latitude": 28.010844,
        "district": "Sindhupalchowk",
        "basin": "Koshi",
        "stationIndex": "627.5",
        "id": 9,
        "name": "Melamchi at Nakote"
    },
    {
        "tags": [
            "UNDP",
            "AWS",
            "Koshi",
            "RF",
            "MFD",
            "2017"
        ],
        "images": [
            {
                "type": 0,
                "size": 812492,
                "description": "",
                "name": "ca08e719ed2d71dd284263724409310d",
                "id": 76
            }
        ],
        "elevation": 1536,
        "description": "AWS at Melung, Manual Melung Precipitation has been sifted in the site.",
        "onm": "OHM-Pokhara",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.058485,
        "latitude": 27.513304,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "1104",
        "id": 38,
        "name": "Melung"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 6849620,
                "description": "",
                "name": "64dbf4ad69ee9d692d6582df72d4ed7c",
                "id": 136
            },
            {
                "type": 0,
                "size": 6198073,
                "description": "",
                "name": "83c24f981e7e140608da4110a7720dd9",
                "id": 1575
            }
        ],
        "elevation": 689,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "6.0",
        "warning_level": "5.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.2530002594",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3291,
        "longitude": 87.62666,
        "latitude": 27.3775,
        "district": "Taplejung",
        "basin": "Koshi",
        "stationIndex": "683.5",
        "id": 210,
        "name": "Mewa Khola at Taplejung"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "O&M",
            "Thuraya"
        ],
        "images": [
            {
                "type": 0,
                "size": 89159,
                "description": "",
                "name": "7a2540bb109a88ed26ba36bcf0d82c5a",
                "id": 1297
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.589999675751",
            "datetime": "2023-02-06T00:00:00+00:00"
        },
        "series_id": 5421,
        "longitude": 83.905059,
        "latitude": 28.508327,
        "district": "Kaski",
        "basin": "Narayani",
        "stationIndex": "406.4",
        "id": 876,
        "name": "Modi Khola at Annapurna"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 100621,
                "description": "",
                "name": "56588385dbe9c16df7b09ebf1e10e2ea",
                "id": 174
            }
        ],
        "elevation": 717,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "4.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.506000041962",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3377,
        "longitude": 83.686,
        "latitude": 28.216,
        "district": "Parbat",
        "basin": "Narayani",
        "stationIndex": "406.5",
        "id": 180,
        "name": "Modi Khola at Nayapul"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "Mercy Corps",
            "RLS",
            "2017",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 1128641,
                "description": "",
                "name": "01d1bffcf5d4240cb1821fc62592508a",
                "id": 128
            }
        ],
        "elevation": null,
        "description": "Hydrological station installed by Mercy Corps",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "3.60",
        "warning_level": "3",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.36500024796",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3778,
        "longitude": 80.51858,
        "latitude": 28.830786,
        "district": "Kailali",
        "basin": "Mohana",
        "stationIndex": "",
        "id": 246,
        "name": "Mohana River at Malakheti"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "PPCR_HYD",
            "2020",
            "MHS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4609761,
                "description": "",
                "name": "debc56813d2e87a72063ea1ea9e85a32",
                "id": 1008
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2222,
        "longitude": 81.871769,
        "latitude": 29.614088,
        "district": "",
        "basin": "Karnali",
        "stationIndex": "208",
        "id": 160,
        "name": "Mugu Karnali  at Dhain"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "HYCOS",
            "RF",
            "RLS",
            "AMC_RB",
            "2012",
            "PV_12V"
        ],
        "images": [
            {
                "type": 0,
                "size": 252882,
                "description": "",
                "name": "d0006bcadaa060b196a390f30d40d8dd",
                "id": 78
            }
        ],
        "elevation": 286,
        "description": "Hydrological station with RLS (690 IN by hydro, confirmed to be same at 1308, from rajiv sir)",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 87.31969,
        "latitude": 26.93175,
        "district": "Dhankuta",
        "basin": "Koshi",
        "stationIndex": "1308",
        "id": 102,
        "name": "Mul Ghat"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "MHS",
            "NTC&NCELL"
        ],
        "images": [
            {
                "type": 0,
                "size": 646742,
                "description": "",
                "name": "0daf16cd9c9fef387600e9deb7033934",
                "id": 1026
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.59600019455",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3466,
        "longitude": 83.561792,
        "latitude": 28.341253,
        "district": "Baglung",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 228,
        "name": "Myagdi at Mangalghat"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 496620,
                "description": "",
                "name": "b106acd26d370886346a503a07ee49fb",
                "id": 1380
            }
        ],
        "elevation": null,
        "description": "HS with CDCP and RTS RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.371999740601",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 21597,
        "longitude": 85.438611,
        "latitude": 27.775278,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "506",
        "id": 4876,
        "name": "Nagmati at Sundarijal"
    },
    {
        "tags": [
            "HS",
            "Narayani",
            "O&M",
            "PPCR_HYD",
            "Velocity",
            "2018",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1333217,
                "description": "",
                "name": "074313bb1102dc050064f069fbf182c1",
                "id": 1032
            }
        ],
        "elevation": null,
        "description": "Discharge measurement station",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "11.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "5.33099985123",
            "datetime": "2023-02-06T00:05:00+00:00"
        },
        "series_id": 3701,
        "longitude": 84.41894,
        "latitude": 27.69971,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "450",
        "id": 241,
        "name": "Narayani River at Narayanghat Bridge"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "BRBIP",
            "O&M",
            "AMC_RB",
            "2018",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 2766402,
                "description": "",
                "name": "7f284d93943797ecc1e83101dfff5918",
                "id": 1114
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RTS-RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "3.00",
        "warning_level": "2.30",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.0780000686646",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 4172,
        "longitude": 85.312493,
        "latitude": 27.650902,
        "district": "Lalitpur",
        "basin": "Bagmati",
        "stationIndex": "538.5",
        "id": 263,
        "name": "Nakkhu at Bungmati"
    },
    {
        "tags": [
            "HS",
            "RF",
            "RLS",
            "Narayani",
            "AMC_RB",
            "2010",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 3819224,
                "description": "",
                "name": "52ae12b5fcaf99ebf4227b4c62a119b9",
                "id": 1450
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "9",
        "warning_level": "7.3",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 4140,
        "longitude": 84.43,
        "latitude": 27.71,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "450",
        "id": 265,
        "name": "Narayani at Devghat"
    },
    {
        "tags": [
            "AWS",
            "Koshi",
            "HYCOS",
            "RF",
            "2012"
        ],
        "images": [
            {
                "type": 0,
                "size": 93071,
                "description": "",
                "name": "6865a491e5cae11fbe21b34a4fddd653",
                "id": 89
            }
        ],
        "elevation": 1725,
        "description": "Automatic Weather Station with WXT520",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.5042,
        "latitude": 27.3082,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 108,
        "name": "Okhaldhunga"
    },
    {
        "tags": [
            "HS",
            "O&M",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3126211,
                "description": "",
                "name": "965582ba18e135375d97534971f0c506",
                "id": 1087
            }
        ],
        "elevation": 630,
        "description": "HS_manual",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.21549987793",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19926,
        "longitude": 85.185829,
        "latitude": 27.974259,
        "district": "Nuwakot",
        "basin": "Narayani",
        "stationIndex": "446.8",
        "id": 4658,
        "name": "Phalakhu Khola at Betrawati"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 8455487,
                "description": "",
                "name": "623979497fa2f99947bd95732abb459d",
                "id": 1081
            }
        ],
        "elevation": null,
        "description": "RLS station with CDCP",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.36899995804",
            "datetime": "2023-02-05T23:55:00+00:00"
        },
        "series_id": 19636,
        "longitude": 87.909616,
        "latitude": 26.912816,
        "district": "Ilam",
        "basin": "Kankai",
        "stationIndex": "730",
        "id": 4681,
        "name": "PuwaKhola at Sajbate"
    },
    {
        "tags": [
            "HS",
            "PPCR_HYD",
            "Velocity",
            "2019",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 282480,
                "description": "",
                "name": "d5d0010845e1eccfaed9673ba3b4e649",
                "id": 1017
            }
        ],
        "elevation": 199.19,
        "description": "Velocity Station",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5697,
        "longitude": 82.095,
        "latitude": 28.007,
        "district": "Banke",
        "basin": "West Rapti",
        "stationIndex": "375",
        "id": 961,
        "name": "Rapti River at Kusum (Velocity)"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP"
        ],
        "images": [
            {
                "type": 0,
                "size": 471592,
                "description": "",
                "name": "6cd0a369d0f7ef3d7d8af49c76739dcb",
                "id": 1358
            }
        ],
        "elevation": null,
        "description": "Hydrological Station supported by WIEDO, Dailekh",
        "onm": null,
        "steady": "",
        "danger_level": "4",
        "warning_level": "3",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19670,
        "longitude": 81.521359,
        "latitude": 28.937728,
        "district": "Dailekh",
        "basin": "Karnali",
        "stationIndex": "",
        "id": 4817,
        "name": "Ramaghat Khola at Dailekh (PulBazar)"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1051273,
                "description": "",
                "name": "a8da9cab9e1710e0e20f5d088eb10ccc",
                "id": 1391
            }
        ],
        "elevation": 2986,
        "description": "MHS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.584999799728",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 21356,
        "longitude": 82.066,
        "latitude": 29.529,
        "district": "Mugu",
        "basin": "Karnali",
        "stationIndex": "210.1",
        "id": 4768,
        "name": "Rara Daha at Sen"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NCELL",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 495231,
                "description": "",
                "name": "51275f3b04a4f02eca8dd5831d10da98",
                "id": 1020
            }
        ],
        "elevation": 893,
        "description": "Hydrological Station with RLS (28.376, 83.567)",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "5.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3355,
        "longitude": 83.567,
        "latitude": 28.376,
        "district": "Myagdi",
        "basin": "Narayani",
        "stationIndex": "404",
        "id": 177,
        "name": "Raughat Khola at Raughat"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2019",
            "MHS",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 247139,
                "description": "",
                "name": "829d4cbfa6e2dd4645a6caba1f6d24af",
                "id": 1037
            }
        ],
        "elevation": 403,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.488999843597",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3186,
        "longitude": 86.67333,
        "latitude": 27.27194,
        "district": "Okhaldhunga",
        "basin": "Koshi",
        "stationIndex": "669.5",
        "id": 205,
        "name": "Rawa Khola at Gaikhure"
    },
    {
        "tags": [
            "MHS"
        ],
        "images": null,
        "elevation": 458,
        "description": "HS_manual",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19594,
        "longitude": 83.431,
        "latitude": 27.937,
        "district": null,
        "basin": "Narayani",
        "stationIndex": "418",
        "id": 4650,
        "name": "Ridi Khola at Ridibazar"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 288436,
                "description": "",
                "name": "16cfe651633a6472e723695dc213d7f2",
                "id": 1030
            }
        ],
        "elevation": null,
        "description": "Station under PPCR",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3550,
        "longitude": 83.387685,
        "latitude": 27.951219,
        "district": "",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 233,
        "name": "Ridi Khola at Satmure"
    },
    {
        "tags": [
            "UNDP",
            "HS",
            "RF",
            "RLS",
            "Narayani",
            "AMC_RB",
            "2016",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 190412,
                "description": "",
                "name": "166b3a2b91cc182905968758aa28e8dc",
                "id": 51
            },
            {
                "type": 0,
                "size": 130892,
                "description": "",
                "name": "0b0ef881b0e6ba4a4ecc9b5693dcb593",
                "id": 52
            }
        ],
        "elevation": 105,
        "description": "Hydrological station with RLS and Tipping bucket",
        "onm": "OHM-Pokhara",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1278,
        "longitude": 84.278768,
        "latitude": 27.503344,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "938",
        "id": 81,
        "name": "Riewkhola (Bankatta)"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "RF",
            "TSHO",
            "AMC_RB",
            "2015"
        ],
        "images": [
            {
                "type": 0,
                "size": 364372,
                "description": "",
                "name": "0ba4e1f9abab221b97a2a078afd9259f",
                "id": 101
            }
        ],
        "elevation": 2088,
        "description": "Rainfall Station",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.234444,
        "latitude": 27.884167,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 130,
        "name": "Rikhu"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "HS",
            "RLS",
            "TSHO",
            "AMC_RB",
            "2015",
            "SNOW"
        ],
        "images": [
            {
                "type": 0,
                "size": 313704,
                "description": "",
                "name": "13c493f1a4dc2e0929b52db95885821c",
                "id": 105
            }
        ],
        "elevation": 3724,
        "description": "Hydrological station with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1877,
        "longitude": 86.37,
        "latitude": 27.9,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 133,
        "name": "Rolwaling Khola at Bedding"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RF",
            "RLS",
            "AMC_RB",
            "2015",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 2440483,
                "description": "",
                "name": "9b8c9398c7cc022352e11843fcf99fa0",
                "id": 1
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS and Tipping Bucket",
        "onm": "DHM",
        "steady": "",
        "danger_level": "2.10",
        "warning_level": "1.70",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1120,
        "longitude": 85.499,
        "latitude": 27.575,
        "district": "Kavrepalanchok",
        "basin": "Koshi",
        "stationIndex": "640",
        "id": 69,
        "name": "Rosi Khola at Panauti"
    },
    {
        "tags": [
            "RF",
            "CDCP",
            "Province 5",
            "NTC",
            "Manual",
            "RF-2022",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 530568,
                "description": "",
                "name": "e364ff060efca0861fabe4d778b54a70",
                "id": 1389
            }
        ],
        "elevation": 1568,
        "description": "0501",
        "onm": "OHM, Bhairahawa ",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 82.62066389,
        "latitude": 28.61280306,
        "district": "Rukum (East) ",
        "basin": "",
        "stationIndex": "0501",
        "id": 640,
        "name": "Rukumkot"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4077446,
                "description": "",
                "name": "f3c7326ea09bb5b9e92e5a68c43405e9",
                "id": 139
            }
        ],
        "elevation": 316,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "3.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.25699996948",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 2895,
        "longitude": 87.2072,
        "latitude": 27.3024,
        "district": "Sankhuwasabha",
        "basin": "Koshi",
        "stationIndex": "602",
        "id": 196,
        "name": "Sabhaya Khola at Tumlingtar"
    },
    {
        "tags": [
            "AWS",
            "Bagmati",
            "MFD",
            "2017"
        ],
        "images": [
            {
                "type": 0,
                "size": 226539,
                "description": "",
                "name": "b111b065a23da06a3464e0b59373c97d",
                "id": 1457
            }
        ],
        "elevation": 1698,
        "description": "Sankhu-AWS",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.466,
        "latitude": 27.747,
        "id": 222,
        "name": "Sankhu-DHM "
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Thuraya",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 812796,
                "description": "",
                "name": "50a4e4d8bd472fa937ba2a77145bb1d1",
                "id": 1231
            }
        ],
        "elevation": null,
        "description": "RLS with thuraya",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.27899980545",
            "datetime": "2023-02-06T00:05:00+00:00"
        },
        "series_id": 12382,
        "longitude": 82.604892,
        "latitude": 29.118509,
        "district": "Dolpa",
        "basin": "Karnali",
        "stationIndex": "263",
        "id": 4565,
        "name": "Sano Bheri at Hurikot"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 509589,
                "description": "",
                "name": "1184e6927166d816b518b44f9e2aa2d6",
                "id": 1012
            }
        ],
        "elevation": null,
        "description": "Hydrological Station at Simlighat with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "7",
        "warning_level": "6",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.901000022888",
            "datetime": "2023-02-06T00:05:00+00:00"
        },
        "series_id": 2267,
        "longitude": 82.34694444,
        "latitude": 28.65638889,
        "district": "Rukum West",
        "basin": "Karnali",
        "stationIndex": "267",
        "id": 162,
        "name": "Sano Bheri at Simlighat"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "O&M",
            "PPCR_HYD",
            "Velocity",
            "2018",
            "MHS",
            "NTC&NCELL",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4994966,
                "description": "",
                "name": "2db71cf80bb322ea2893f918ea7d3a46",
                "id": 1040
            }
        ],
        "elevation": null,
        "description": "Discharge Measurement Station",
        "onm": "DHM",
        "steady": "",
        "danger_level": "7.0",
        "warning_level": "6.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3761,
        "longitude": 87.15833,
        "latitude": 26.86666,
        "district": "Sunsari",
        "basin": "Koshi",
        "stationIndex": "695",
        "id": 245,
        "name": "Sapta Koshi at Chatara (new)"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "HYCOS",
            "RF",
            "RLS",
            "AMC_RB",
            "2013"
        ],
        "images": [
            {
                "type": 0,
                "size": 178568,
                "description": "",
                "name": "c120b52b14e81ab33c9006a4dc6bd5b2",
                "id": 92
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "7.00",
        "warning_level": "6.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.552000045776",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 1508,
        "longitude": 87.15,
        "latitude": 26.85,
        "district": "Sunsari",
        "basin": "Koshi",
        "stationIndex": "695",
        "id": 111,
        "name": "Saptakoshi at Chatara (old)"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1527251,
                "description": "",
                "name": "c88fba0350946154dce66b70c40fb5ba",
                "id": 1422
            }
        ],
        "elevation": null,
        "description": "HS with CDCP and RTS-RLS",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 21342,
        "longitude": 82.030897,
        "latitude": 28.640678,
        "district": "Jajarkot",
        "basin": "Karnali",
        "stationIndex": "268",
        "id": 4791,
        "name": "Saru Gad at Jajarkot"
    },
    {
        "tags": [
            "UNDP",
            "AWS",
            "Koshi",
            "RF",
            "MFD",
            "2017",
            "Sindhupalchok"
        ],
        "images": [
            {
                "type": 0,
                "size": 310795,
                "description": "",
                "name": "9da02566b775e93119bf2c15f1b33b0e",
                "id": 77
            }
        ],
        "elevation": 2528,
        "description": "AWS at Sermathang",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.595156,
        "latitude": 27.944506,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 39,
        "name": "Sermathang"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 523665,
                "description": "",
                "name": "f2f6227b381dded75783508ecc007b45",
                "id": 1025
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "2.86100006104",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3249,
        "longitude": 83.61944444,
        "latitude": 28.01111111,
        "district": "",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 208,
        "name": "Seti Khola at SetiBeni"
    },
    {
        "tags": [
            "HS",
            "Narayani",
            "O&M",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 4058780,
                "description": "",
                "name": "1c42d9ee73045ece66394dc29d2e812f",
                "id": 1084
            }
        ],
        "elevation": 305,
        "description": "HS_manual",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19954,
        "longitude": 84.263371,
        "latitude": 27.964496,
        "district": "Tanahun",
        "basin": "Narayani",
        "stationIndex": "430.5",
        "id": 4653,
        "name": "Seti Gandaki at Damauli"
    },
    {
        "tags": [
            "HS",
            "CDCP",
            "MHS",
            "RTS-RLS",
            "PV_3.7V",
            "2022",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1104573,
                "description": "",
                "name": "05de0ed6e181598349be1b8fc447a94b",
                "id": 1404
            }
        ],
        "elevation": null,
        "description": "Seti River at Chainpur (251)",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.52499961853",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 21365,
        "longitude": 81.215,
        "latitude": 29.555,
        "district": "Bajhang",
        "basin": "Karnali (West Seti)",
        "stationIndex": "251",
        "id": 4612,
        "name": "Seti River at Chainpur"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Narayani",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 159429,
                "description": "",
                "name": "5667e581b7623a025edc4ae1ed2c989a",
                "id": 175
            }
        ],
        "elevation": 1064,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "4.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.407999992371",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 2662,
        "longitude": 83.94299,
        "latitude": 28.301,
        "district": "Kaski",
        "basin": "Narayani",
        "stationIndex": "427",
        "id": 183,
        "name": "Seti at Gha Chowk"
    },
    {
        "tags": [
            "HS",
            "Practical Action",
            "O&M",
            "2013",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 3117348,
                "description": "",
                "name": "8f099aa084e6275992722bc63f281262",
                "id": 1083
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS ( FW: 1.1.13)",
        "onm": "DHM",
        "steady": "",
        "danger_level": "6.0",
        "warning_level": "5.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1695,
        "longitude": 83.977405,
        "latitude": 28.39341,
        "district": "Kaski",
        "basin": "Narayani",
        "stationIndex": "426.5",
        "id": 129,
        "name": "Seti at Jyamirebari"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2010",
            "PV_3.7V"
        ],
        "images": [
            {
                "type": 0,
                "size": 319001,
                "description": "",
                "name": "0f1652378a3618a574bce0342416aba2",
                "id": 59
            },
            {
                "type": 0,
                "size": 5125363,
                "description": "",
                "name": "f457efbd4e6e13730824f10c055ccdd8",
                "id": 1593
            }
        ],
        "elevation": null,
        "description": "Rainfall station",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.946667,
        "latitude": 27.266667,
        "district": "Sindhuli",
        "basin": "Bagmati",
        "stationIndex": "110701",
        "id": 56,
        "name": "SindhuliGadi"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 390233,
                "description": "",
                "name": "e7ced3c4e8a87876b2ab5dd887c46621",
                "id": 68
            }
        ],
        "elevation": null,
        "description": "Rainfall Station",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.905,
        "latitude": 27.228056,
        "id": 60,
        "name": "SindhuliMadi"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "RF",
            "TSHO",
            "AMC_RB",
            "2015"
        ],
        "images": [
            {
                "type": 0,
                "size": 3795336,
                "description": "",
                "name": "deea805c37ea1e92e02b9bb94b72f1a4",
                "id": 1461
            }
        ],
        "elevation": null,
        "description": "Rainfall station",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.193569,
        "latitude": 27.756831,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 114,
        "name": "Singati"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2001137,
                "description": "",
                "name": "a124ca7fa3e7d4582df4d51251ddcc40",
                "id": 161
            }
        ],
        "elevation": 2058,
        "description": "Hydrological station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "5",
        "warning_level": "4.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.761000156403",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 2436,
        "longitude": 81.90983,
        "latitude": 29.203031,
        "district": "Jumla",
        "basin": "Karnali",
        "stationIndex": "225",
        "id": 168,
        "name": "Sinja Khola at Diware"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 230021,
                "description": "",
                "name": "06cd5884a86e4f0f6e5a058829c7f119",
                "id": 1036
            }
        ],
        "elevation": 1692,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "3.80",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.04099988937",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3144,
        "longitude": 86.572648,
        "latitude": 27.444704,
        "district": "Solukhumbu ",
        "basin": "Koshi",
        "stationIndex": "668.5",
        "id": 203,
        "name": "Solu Khola at Salme"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "CDCP",
            "AMC_RB",
            "2010",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 321904,
                "description": "",
                "name": "ca75a4a6d06965e738afcf7e1cff2b39",
                "id": 65
            }
        ],
        "elevation": null,
        "description": "Rainfall Station",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.431115,
        "latitude": 27.750066,
        "district": "Kathmandu",
        "basin": "Bagmati",
        "stationIndex": "1077",
        "id": 57,
        "name": "Sundarijal"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "Bagmati",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC&NCELL",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 1168353,
                "description": "",
                "name": "def74606ea0484e01370ca73cfd792f1",
                "id": 121
            }
        ],
        "elevation": 633,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "5.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.105999946594",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 2960,
        "longitude": 85.71,
        "latitude": 27.641,
        "district": "Sindhupalchok",
        "basin": "Koshi",
        "stationIndex": "625",
        "id": 199,
        "name": "Sunkoshi River at Dolalghat"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2898330,
                "description": "",
                "name": "3d4737bcc9a667ffa74c8c01d4d4fd17",
                "id": 1039
            }
        ],
        "elevation": 155,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.54300022125",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3228,
        "longitude": 87.1425,
        "latitude": 26.9283,
        "district": "Bhojpur",
        "basin": "Koshi",
        "stationIndex": "681",
        "id": 207,
        "name": "Sunkoshi River at Hampachuwar"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "TSHO",
            "AMC_RB",
            "2015",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 1517633,
                "description": "",
                "name": "98843974137c82c80af57e07e8c81880",
                "id": 119
            }
        ],
        "elevation": null,
        "description": "Hydrological station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "7.8",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.09700012207",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3754,
        "longitude": 85.994016,
        "latitude": 27.337777,
        "district": "Sindhuli",
        "basin": "Koshi",
        "stationIndex": "652",
        "id": 243,
        "name": "Sunkoshi at Khurkot"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "HYCOS",
            "RF",
            "Bubbler",
            "AMC_RB",
            "2012",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 299639,
                "description": "",
                "name": "ab74dbef534d99acac7039d62201f7e7",
                "id": 80
            }
        ],
        "elevation": 514,
        "description": "Hydrological station with Bubbler sensor",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.61400032043",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 1453,
        "longitude": 85.7487,
        "latitude": 27.5537,
        "district": "Kavrepalanchok",
        "basin": "Koshi",
        "stationIndex": "630",
        "id": 104,
        "name": "Sunkoshi at Pachuwarghat"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "PPCR_HYD",
            "2019",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 190400,
                "description": "",
                "name": "d26c26c15c6859797b1a86982f666327",
                "id": 244
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "8.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.83300113678",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 3122,
        "longitude": 86.40111111,
        "latitude": 27.17083333,
        "district": "Okhaldhunga",
        "basin": "Koshi",
        "stationIndex": "665",
        "id": 202,
        "name": "Sunkoshi at Tokshelghat"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "PPCR_HYD",
            "2018",
            "MHS",
            "PV_12V",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3362082,
                "description": "",
                "name": "6cec0238d49c97d823776d6395fffd26",
                "id": 157
            }
        ],
        "elevation": 1275,
        "description": "Station under PPCR",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "5.00",
        "warning_level": "4.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.24399995804",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3656,
        "longitude": 80.58,
        "latitude": 29.52,
        "district": "Baitadi",
        "basin": "Mahakali",
        "stationIndex": "169.8",
        "id": 227,
        "name": "Surnaya Gad at Gajur Gaon"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "UPGRADATION-2021",
            "PV_3.7V",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 4263958,
                "description": "",
                "name": "a9820e8ec9d96bd220e9caa29e9f9d74",
                "id": 1078
            }
        ],
        "elevation": null,
        "description": "Hydrological station with CDCP",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.436999320984",
            "datetime": "2023-02-06T00:25:02+00:00"
        },
        "series_id": 19587,
        "longitude": 85.311554,
        "latitude": 27.918694,
        "district": "Nuwakot",
        "basin": "Narayani",
        "stationIndex": "447.4",
        "id": 4659,
        "name": "Tadi Khola at Rautar"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "HYCOS",
            "RF",
            "Bubbler",
            "TSHO",
            "AMC_RB",
            "2012",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 176148,
                "description": "",
                "name": "f0e5a7b8085b97d7a4ea4c30d171a6e7",
                "id": 82
            }
        ],
        "elevation": 772,
        "description": "Hydrological Station with Bubbler sensor, established at Busti approximately 1.5 KM u/s of Charikot Jiri Road-Bridge",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "5.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.126999855042",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 1601,
        "longitude": 86.0846,
        "latitude": 27.6361,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "647",
        "id": 106,
        "name": "Tamakoshi at Busti"
    },
    {
        "tags": [
            "UNDP",
            "Koshi",
            "HS",
            "RLS",
            "TSHO",
            "AMC_RB",
            "2015"
        ],
        "images": null,
        "elevation": null,
        "description": "Hydrological station with Radar Level Sensor",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "4.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1580,
        "longitude": 86.226,
        "latitude": 27.820186,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 120,
        "name": "Tamakoshi at Gongar/Jagat "
    },
    {
        "tags": [
            "HS",
            "TSHO"
        ],
        "images": null,
        "elevation": null,
        "description": "Hydrological station installed by HPL (Offset : 947.79, Scale : -1))",
        "onm": "",
        "steady": "",
        "danger_level": "946.5",
        "warning_level": "945.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3824,
        "longitude": 86.193569,
        "latitude": 27.756831,
        "district": "Dolakha",
        "basin": "Koshi",
        "stationIndex": "",
        "id": 255,
        "name": "Tamakoshi at Singati"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2912411,
                "description": "",
                "name": "164e58af2db1403f850dc9e0c9e38248",
                "id": 138
            }
        ],
        "elevation": 436,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "6.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.5560002327",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3333,
        "longitude": 87.7116,
        "latitude": 27.1586,
        "district": "Panchthar ",
        "basin": "Koshi",
        "stationIndex": "684",
        "id": 212,
        "name": "Tamor River at Majhitar"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "AMC_RB",
            "2018",
            "MHS",
            "Dharan",
            "NTC",
            "SMS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2752392,
                "description": "",
                "name": "fcab9bdc34d645ee34b857162c2027a5",
                "id": 131
            }
        ],
        "elevation": 203,
        "description": "Station under PPCR",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "7.00",
        "warning_level": "6.00",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.90000152588",
            "datetime": "2023-02-05T23:45:00+00:00"
        },
        "series_id": 3614,
        "longitude": 87.3173,
        "latitude": 26.9299,
        "district": "Dhankuta",
        "basin": "Koshi",
        "stationIndex": "690",
        "id": 237,
        "name": "Tamor River at Mulghat"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "Dharan",
            "NCELL",
            "CDMA",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 5543850,
                "description": "",
                "name": "f575f87618b1cf39c59f0cfdd9001446",
                "id": 137
            }
        ],
        "elevation": 683,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "6",
        "warning_level": "5.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.46000003815",
            "datetime": "2023-02-05T22:25:00+00:00"
        },
        "series_id": 3270,
        "longitude": 87.63388,
        "latitude": 27.37861,
        "district": "Taplejung",
        "basin": "Koshi",
        "stationIndex": "683",
        "id": 209,
        "name": "Tamor River at Taplejung"
    },
    {
        "tags": [
            "Koshi",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC&NCELL",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 476927,
                "description": "",
                "name": "79978ac8c3e54f7de925c5308491174e",
                "id": 1596
            }
        ],
        "elevation": 161,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "10.0",
        "warning_level": "9.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.75749969482",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 3334,
        "longitude": 87.1638,
        "latitude": 26.9152,
        "district": "Dhankuta",
        "basin": "Koshi",
        "stationIndex": "691",
        "id": 213,
        "name": "Tamor River at Triveni"
    },
    {
        "tags": [
            "RF",
            "Bagmati",
            "2010",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 738353,
                "description": "",
                "name": "b7310e06d46308b6dbbd7685c8e2351c",
                "id": 58
            }
        ],
        "elevation": null,
        "description": "Rainfall Station",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 85.2,
        "latitude": 27.683333,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 51,
        "name": "Thankot"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "PPCR_HYD",
            "MHS",
            "CDMA"
        ],
        "images": [
            {
                "type": 0,
                "size": 33987,
                "description": "",
                "name": "938b648ced41b99d405b13458f3484e5",
                "id": 1013
            }
        ],
        "elevation": 309,
        "description": "Hydrological Station at Khanayatal with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "6.5",
        "warning_level": "5.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2312,
        "longitude": 80.90972222,
        "latitude": 28.93361111,
        "district": "Doti",
        "basin": "Karnali",
        "stationIndex": "",
        "id": 163,
        "name": "Thuli Gad at Khanayatal"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RIMES",
            "RF",
            "Bubbler",
            "AMC_RB",
            "2016",
            "MHS"
        ],
        "images": [
            {
                "type": 0,
                "size": 1250753,
                "description": "",
                "name": "9925d5a0073020b7f405770d7652a815",
                "id": 1110
            }
        ],
        "elevation": null,
        "description": "Hydrological station with Bubbler",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "1.55400002003",
            "datetime": "2023-02-06T00:25:00+00:00"
        },
        "series_id": 2059,
        "longitude": 82.2666,
        "latitude": 28.683,
        "district": "Rukum",
        "basin": "Karnali",
        "stationIndex": "",
        "id": 145,
        "name": "Thulo Bheri at Rimna"
    },
    {
        "tags": [
            "HS",
            "O&M",
            "MHS",
            "Pokhara-2021",
            "RTS-RLS"
        ],
        "images": [
            {
                "type": 0,
                "size": 6303135,
                "description": "",
                "name": "0a4d86552fd0e57c5ab02555b4dc693f",
                "id": 1086
            }
        ],
        "elevation": null,
        "description": "HS_manual",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 19916,
        "longitude": 85.318589,
        "latitude": 28.098163,
        "district": "Nuwakot",
        "basin": "Narayani",
        "stationIndex": "446.3",
        "id": 4657,
        "name": "Trishuli Khola at Dhunche"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 2057449,
                "description": "",
                "name": "d22a3391f935fa742f2b9d6147e60526",
                "id": 162
            }
        ],
        "elevation": 778,
        "description": "Hydrological station with RLS",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "6.40",
        "warning_level": "5.40",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "-9999986.0",
            "datetime": "2023-02-06T00:15:00+00:00"
        },
        "series_id": 2379,
        "longitude": 81.5967,
        "latitude": 29.13167,
        "district": "Jumla",
        "basin": "Karnali",
        "stationIndex": "230",
        "id": 169,
        "name": "Tila Nadi at Serighat"
    },
    {
        "tags": [
            "RLS",
            "O&M",
            "MHS",
            "NB-2021"
        ],
        "images": [
            {
                "type": 0,
                "size": 2638949,
                "description": "",
                "name": "cc3472344da448e2c2a908977911ed91",
                "id": 1096
            }
        ],
        "elevation": 250,
        "description": "MHS",
        "onm": null,
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "-9999978.0",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19583,
        "longitude": 84.546,
        "latitude": 27.833,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "449.91",
        "id": 4781,
        "name": "Trishuli River at Kali Khola"
    },
    {
        "tags": [
            "RF",
            "AMC_RB",
            "2010",
            "MHS",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 4026473,
                "description": "",
                "name": "3f8da446cb4c467cefcb57072396ca1f",
                "id": 1123
            }
        ],
        "elevation": null,
        "description": "Automatic Hydrological Station",
        "onm": "",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 943,
        "longitude": 85.18,
        "latitude": 27.97,
        "district": "Nuwakot",
        "basin": "Narayani",
        "stationIndex": "447",
        "id": 52,
        "name": "Trishuli at Betrawati"
    },
    {
        "tags": [
            "RF",
            "AMC_RB",
            "2016"
        ],
        "images": [
            {
                "type": 0,
                "size": 3110490,
                "description": "",
                "name": "99136c583027d0b33190fc6fb9887b66",
                "id": 615
            }
        ],
        "elevation": 147,
        "description": "Hydrological Station with bubble sensor",
        "onm": "DHM",
        "steady": "",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5400,
        "longitude": 84.55,
        "latitude": 27.8333,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "",
        "id": 873,
        "name": "Trishuli at Kali Khola (Rainfall)"
    },
    {
        "tags": [
            "RLS",
            "CDCP",
            "O&M",
            "MHS",
            "NB-2021",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 3000611,
                "description": "",
                "name": "73368683a6f7de9fb9558110f86350e9",
                "id": 1095
            }
        ],
        "elevation": 200,
        "description": "RLS with CDCP",
        "onm": "",
        "steady": "STEADY",
        "danger_level": "",
        "warning_level": "",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "0.0209999084473",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 19401,
        "longitude": 84.45,
        "latitude": 27.82,
        "district": "Chitwan",
        "basin": "Narayani",
        "stationIndex": "449.95",
        "id": 4661,
        "name": "Trishuli river at Bhorle"
    },
    {
        "tags": [
            "UNDP",
            "AWS",
            "Koshi",
            "TSHO",
            "AMC_RB",
            "2015",
            "SNOW",
            "Thuraya"
        ],
        "images": [
            {
                "type": 0,
                "size": 476559,
                "description": "",
                "name": "40a57a606b99d562ea23383e4364b9bb",
                "id": 103
            }
        ],
        "elevation": 4557,
        "description": "Tsho Rolpa Lake_AWS",
        "onm": null,
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 86.462999,
        "latitude": 27.869541,
        "district": null,
        "basin": null,
        "stationIndex": null,
        "id": 131,
        "name": "Tsho Rolpa Lake_AWS"
    },
    {
        "tags": [
            "Koshi",
            "RF",
            "CDCP",
            "RF-2019",
            "SYNOP",
            "2019",
            "NCELL",
            "WC"
        ],
        "images": [
            {
                "type": 0,
                "size": 5270168,
                "description": "",
                "name": "ef5da85381872533d1d5617527ebdcb3",
                "id": 1566
            }
        ],
        "elevation": 477,
        "description": "SYNOP-this station should be shifted when we open synoptic station in the Tumlingtar Airport",
        "onm": "OHM-Dharan",
        "steady": "",
        "danger_level": null,
        "warning_level": null,
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "longitude": 87.20433333,
        "latitude": 27.30127778,
        "district": "Sankhuwasabha",
        "basin": "Koshi",
        "stationIndex": "1321",
        "id": 859,
        "name": "Tumlingtar"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "West Rapti",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC",
            "SMS"
        ],
        "images": [
            {
                "type": 0,
                "size": 73260,
                "description": "",
                "name": "2e78f78f679bf966c2027b5c3b8926f8",
                "id": 171
            }
        ],
        "elevation": null,
        "description": "Hydrological Station with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "6.2",
        "warning_level": "5.5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2470,
        "longitude": 82.79885,
        "latitude": 27.86795,
        "district": "Dang",
        "basin": "West Rapti",
        "stationIndex": "350",
        "id": 171,
        "name": "West Rapti at Bagasoti"
    },
    {
        "tags": [
            "HS",
            "RLS",
            "West Rapti",
            "2019",
            "MHS",
            "Warranty"
        ],
        "images": [
            {
                "type": 0,
                "size": 858075,
                "description": "",
                "name": "a0502efa7df1696326b097790e78ff11",
                "id": 1255
            }
        ],
        "elevation": 199.19,
        "description": "Hydrological Station with RLS",
        "onm": "",
        "steady": "",
        "danger_level": "5.4",
        "warning_level": "5",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 5665,
        "longitude": 82.093889,
        "latitude": 28.0075,
        "district": "Banke",
        "basin": "West Rapti",
        "stationIndex": "375",
        "id": 960,
        "name": "West Rapti at Kusum RLS"
    },
    {
        "tags": [
            "HS",
            "RF",
            "Bubbler",
            "West Rapti",
            "AMC_RB",
            "2010"
        ],
        "images": [
            {
                "type": 0,
                "size": 128209,
                "description": "",
                "name": "e7915cb24212488485f17291b229837a",
                "id": 38
            }
        ],
        "elevation": 199.19,
        "description": "Hydrological station with Bubbler",
        "onm": "DHM",
        "steady": "",
        "danger_level": "5.4",
        "warning_level": "5.0",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 1000,
        "longitude": 82.093889,
        "latitude": 28.0075,
        "district": "Banke",
        "basin": "West Rapti",
        "stationIndex": "375",
        "id": 55,
        "name": "West Rapti at Kusum Rainfall"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "CDMA",
            "rd",
            "Non-Op"
        ],
        "images": [
            {
                "type": 0,
                "size": 1251236,
                "description": "",
                "name": "17852d97c03ca82e3f587059d7879a8c",
                "id": 164
            }
        ],
        "elevation": 328,
        "description": "Station under PPCR",
        "onm": "DHM",
        "steady": "",
        "danger_level": "9.00",
        "warning_level": "8.40",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 3487,
        "longitude": 81.14,
        "latitude": 28.98,
        "district": "Achham",
        "basin": "Karnali",
        "stationIndex": "260",
        "id": 229,
        "name": "West Seti at Banga"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RF",
            "RLS",
            "AMC_RB",
            "2011",
            "MHS",
            "NTC",
            "NCELL"
        ],
        "images": [
            {
                "type": 0,
                "size": 386238,
                "description": "",
                "name": "455844885b85b68f7a6139f0802f1372",
                "id": 18
            }
        ],
        "elevation": 617,
        "description": "Hydrological Station with Bubbler",
        "onm": "DHM",
        "steady": "STEADY",
        "danger_level": "9.00",
        "warning_level": "8.60",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": {
            "value": "4.26399993896",
            "datetime": "2023-02-06T00:35:00+00:00"
        },
        "series_id": 801,
        "longitude": 80.925143,
        "latitude": 29.246477,
        "district": "Doti",
        "basin": "Karnali",
        "stationIndex": "259.5",
        "id": 40,
        "name": "West Seti at Dipayal"
    },
    {
        "tags": [
            "KARNALI",
            "HS",
            "RLS",
            "O&M",
            "PPCR_HYD",
            "2018",
            "MHS",
            "NTC"
        ],
        "images": [
            {
                "type": 0,
                "size": 301056,
                "description": "",
                "name": "bba49ebeefb32cd625d90da4682bfd31",
                "id": 159
            }
        ],
        "elevation": 750,
        "description": "Hydrological Station Seti River at Gopaghat with RLS",
        "onm": "DHM",
        "steady": "",
        "danger_level": "6.30",
        "warning_level": "5.50",
        "status": "BELOW WARNING LEVEL",
        "waterLevel": null,
        "series_id": 2334,
        "longitude": 80.77499,
        "latitude": 29.05,
        "district": "Doti",
        "basin": "Karnali",
        "stationIndex": "259.2",
        "id": 165,
        "name": "West Seti at Gopaghat"
    }
]

const fs = require('fs');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'forecast'
});



data.forEach(item => {
    if (item.waterLevel != null && (item.id == 168 || item.id == 4686 || item.id == 166 || item.id == 35 || item.id == 187 || item.id == 40)) {
        const query = `INSERT INTO realtime (id, latitude, longitude, basin, danger_level, warning_level, datetime, value,name) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value},'${item.name}')`;
        console.log(query);
        fs.appendFile('file.sql', query + ';' + '\n', (err) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log('realtime');
        });
        if (item.id == 40) {
            const query = `INSERT INTO dipayal (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
            fs.appendFile('dipayal.sql', query + ';' + '\n', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('dipayal');
            });

        }
        if (item.id == 187) {
            const query = `INSERT INTO mankhola (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
            fs.appendFile('mankhola.sql', query + ';' + '\n', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('mankhola');
            });

        }
        if (item.id == 35) {
            const query = `INSERT INTO chisapani (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
            fs.appendFile('chisapani.sql', query + ';' + '\n', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('chisapani');
            });

        }

        if (item.id == 166) {
            const query = `INSERT INTO humla_karnali (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
            fs.appendFile('humla_karnali.sql', query + ';' + '\n', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('humla_karnali');
            });

        }
        if (item.id == 4686) {
            const query = `INSERT INTO khutiya (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
            fs.appendFile('khutiya.sql', query + ';' + '\n', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('khutiya');
            });

        }
        if (item.id == 168) {
            const query = `INSERT INTO sinja (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
            fs.appendFile('sinja.sql', query + ';' + '\n', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }

                console.log('sinja');
            });

        }

    }
});

const { spawn } = require('child_process');

const script = spawn('bash', ['./importscript.sh']);

script.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

script.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

script.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});