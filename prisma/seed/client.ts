/**
 * This file fills the database with some clients.
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -f client.json --before 'client = await db.client.create(' --after $');\n\nclients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });\n\n'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedClientsTestData(
    db: PrismaClient
): Promise<{ clientId: string; privateIndividual: boolean }[]> {
    const clients = [];
    let client;

    client = await db.client.create({
        data: {
            job: 'Urban Planner',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Riyadh',
                            country: 'Canada',
                            postalCode: '57323',
                            streetName: 'Market Street',
                            streetNumber: '313 ter',
                        },
                    },
                    firstName: 'Lucy',
                    lastName: 'Kirk',
                    phone_number: '749483660774745',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Writer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Lagos',
                            country: 'Kuwait',
                            postalCode: '37240',
                            streetName: 'Lombard Street',
                            streetNumber: '280',
                        },
                    },
                    firstName: 'Lucy',
                    lastName: 'Wyatt',
                    phone_number: '96032672299938',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Translator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Lyon',
                            country: 'Netherlands',
                            postalCode: '18396',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '208',
                        },
                    },
                    firstName: 'Connor',
                    lastName: 'Griffin',
                    phone_number: '799762808142864',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Animator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Faridabad',
                            country: 'Sudan',
                            postalCode: '91054',
                            streetName: 'Las Ramblas',
                            streetNumber: '333',
                        },
                    },
                    firstName: 'Bernard',
                    lastName: 'Hogan',
                    phone_number: '206817637142886',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'UX Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Dhaka',
                            country: 'Malaysia',
                            postalCode: '46077',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '25 ter',
                        },
                    },
                    firstName: 'Bayard',
                    lastName: 'Barnes',
                    phone_number: '725867474787162',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Occupational Therapist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Kinshasa',
                            country: 'Azerbaijan',
                            postalCode: '75165',
                            streetName: 'Portobello Road',
                            streetNumber: '140',
                        },
                    },
                    firstName: 'Camila',
                    lastName: 'Sullivan',
                    phone_number: '450895885325576',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Accountant',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bristol',
                            country: 'Canada',
                            postalCode: '12119',
                            streetName: "King's Road",
                            streetNumber: '354',
                        },
                    },
                    firstName: 'Alton',
                    lastName: 'Gray',
                    phone_number: '717000394493894',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Travel Agent',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Salvador',
                            country: 'Qatar',
                            postalCode: '76161',
                            streetName: 'Kurfürstendamm',
                            streetNumber: '0',
                        },
                    },
                    firstName: 'Bryn',
                    lastName: 'White',
                    phone_number: '228573812275131',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Plumber',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Guangzhou',
                            country: 'North Korea',
                            postalCode: '85058',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '489',
                        },
                    },
                    firstName: 'Kiara',
                    lastName: 'Mills',
                    phone_number: '257444455512703',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Curator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chennai',
                            country: 'Samoa',
                            postalCode: '93338',
                            streetName: 'Ginza',
                            streetNumber: '462',
                        },
                    },
                    firstName: 'Javier',
                    lastName: 'Duran',
                    phone_number: '816824952152810',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Judge',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tokyo',
                            country: 'Lithuania',
                            postalCode: '81087',
                            streetName: 'Michigan Avenue',
                            streetNumber: '34 ter',
                        },
                    },
                    firstName: 'Edmund',
                    lastName: 'Farrell',
                    phone_number: '191047219240676',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Fashion Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Houston',
                            country: 'China',
                            postalCode: '69216',
                            streetName: 'Market Street',
                            streetNumber: '324',
                        },
                    },
                    firstName: 'Kylian',
                    lastName: 'Montgomery',
                    phone_number: '80742860916328',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Broker',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Madurai',
                            country: 'Zambia',
                            postalCode: '27237',
                            streetName: 'Las Ramblas',
                            streetNumber: '112',
                        },
                    },
                    firstName: 'Nancy',
                    lastName: 'West',
                    phone_number: '769158412217179',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Flight Attendant',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Indore',
                            country: 'Oman',
                            postalCode: '39054',
                            streetName: 'Abbey Road',
                            streetNumber: '401',
                        },
                    },
                    firstName: 'Bea',
                    lastName: 'Marshall',
                    phone_number: '677721428429627',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Salesperson',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Lisbon',
                            country: 'Slovenia',
                            postalCode: '70294',
                            streetName: 'Nanjing Road',
                            streetNumber: '49',
                        },
                    },
                    firstName: 'Yvonne',
                    lastName: 'Waters',
                    phone_number: '139164366200838',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Biologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Kuwait City',
                            country: 'Cyprus',
                            postalCode: '16244',
                            streetName: 'Via del Corso',
                            streetNumber: '467',
                        },
                    },
                    firstName: 'Lillie',
                    lastName: 'Mckay',
                    phone_number: '151327645282429',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Product Manager',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Brasília',
                            country: 'Angola',
                            postalCode: '49189',
                            streetName: "King's Road",
                            streetNumber: '346',
                        },
                    },
                    firstName: 'Yahir',
                    lastName: 'Albright',
                    phone_number: '980843312260702',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Architect',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Shenzhen',
                            country: 'Suriname',
                            postalCode: '65185',
                            streetName: 'Gran Via',
                            streetNumber: '404',
                        },
                    },
                    firstName: 'Barnaby',
                    lastName: 'Carter',
                    phone_number: '658306762188692',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Counselor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bhubaneswar',
                            country: 'Jamaica',
                            postalCode: '02325',
                            streetName: 'Market Street',
                            streetNumber: '410',
                        },
                    },
                    firstName: 'Lynette',
                    lastName: 'Keller',
                    phone_number: '699564945647732',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Data Analyst',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bhubaneswar',
                            country: 'Slovenia',
                            postalCode: '94441',
                            streetName: 'Beale Street',
                            streetNumber: '419 bis',
                        },
                    },
                    firstName: 'Tiffany',
                    lastName: 'Bradford',
                    phone_number: '746526816160733',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Microbiologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Ankara',
                            country: 'Kyrgyzstan',
                            postalCode: '37124',
                            streetName: 'Michigan Avenue',
                            streetNumber: '69',
                        },
                    },
                    firstName: 'Giselle',
                    lastName: 'Brady',
                    phone_number: '641022782001925',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Florist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Melbourne',
                            country: 'Belarus',
                            postalCode: '22391',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '337',
                        },
                    },
                    firstName: 'Mark',
                    lastName: 'Chambers',
                    phone_number: '356356443344142',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Logistician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Manchester',
                            country: 'Canada',
                            postalCode: '17413',
                            streetName: 'Gran Via',
                            streetNumber: '150 bis',
                        },
                    },
                    firstName: 'Beverly',
                    lastName: 'McDonald',
                    phone_number: '57249379069065',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Pharmacist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Cardiff',
                            country: 'Eswatini',
                            postalCode: '31010',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '210',
                        },
                    },
                    firstName: 'Guillermo',
                    lastName: 'Wright',
                    phone_number: '56156083353466',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Gardener',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Madrid',
                            country: 'Vietnam',
                            postalCode: '23111',
                            streetName: 'Rue de Rivoli',
                            streetNumber: '308',
                        },
                    },
                    firstName: 'Dionne',
                    lastName: 'Chambers',
                    phone_number: '446769533153427',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Pilot',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Riyadh',
                            country: 'Ecuador',
                            postalCode: '17427',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '294',
                        },
                    },
                    firstName: 'Jairo',
                    lastName: 'Wood',
                    phone_number: '422893172114284',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Biochemist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Coimbatore',
                            country: 'Finland',
                            postalCode: '75174',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '107',
                        },
                    },
                    firstName: 'Fiona',
                    lastName: 'Perry',
                    phone_number: '65715618984740',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Farmer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Marseille',
                            country: 'Benin',
                            postalCode: '52363',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '22',
                        },
                    },
                    firstName: 'Davin',
                    lastName: 'Dennis',
                    phone_number: '962886998303057',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Systems Analyst',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Madrid',
                            country: 'North Macedonia',
                            postalCode: '55298',
                            streetName: 'Baker Street',
                            streetNumber: '335 bis',
                        },
                    },
                    firstName: 'Leopold',
                    lastName: 'Snow',
                    phone_number: '860584871450307',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Yoga Instructor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Cologne',
                            country: 'Dominican Republic',
                            postalCode: '38062',
                            streetName: 'Oxford Street',
                            streetNumber: '237 bis',
                        },
                    },
                    firstName: 'Kortney',
                    lastName: 'Ramirez',
                    phone_number: '638072955936090',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Coach',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Lahore',
                            country: 'Lesotho',
                            postalCode: '29285',
                            streetName: 'Unter den Linden',
                            streetNumber: '218',
                        },
                    },
                    firstName: 'Jasper',
                    lastName: 'Hayes',
                    phone_number: '158797639058600',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Graphic Artist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hong Kong',
                            country: 'Cambodia',
                            postalCode: '44091',
                            streetName: 'Rodeo Drive',
                            streetNumber: '63',
                        },
                    },
                    firstName: 'Regina',
                    lastName: 'Logan',
                    phone_number: '671015435624261',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Film Director',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hong Kong',
                            country: 'Mongolia',
                            postalCode: '62347',
                            streetName: 'Nanjing Road',
                            streetNumber: '79',
                        },
                    },
                    firstName: 'Irina',
                    lastName: 'Frost',
                    phone_number: '43180593727385',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Teacher',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Pune',
                            country: 'France',
                            postalCode: '32278',
                            streetName: 'Ginza',
                            streetNumber: '238 ter',
                        },
                    },
                    firstName: 'Caledon',
                    lastName: 'Little',
                    phone_number: '405273232439972',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Baker',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Newcastle',
                            country: 'Brazil',
                            postalCode: '06292',
                            streetName: 'Rodeo Drive',
                            streetNumber: '459',
                        },
                    },
                    firstName: 'Darwin',
                    lastName: 'Burke',
                    phone_number: '225765695435991',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Editor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tiruppur',
                            country: 'Israel',
                            postalCode: '05384',
                            streetName: 'Portobello Road',
                            streetNumber: '156',
                        },
                    },
                    firstName: 'Jakob',
                    lastName: 'Banks',
                    phone_number: '789953576908610',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Flight Attendant',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chittagong',
                            country: 'Italy',
                            postalCode: '09459',
                            streetName: 'Khao San Road',
                            streetNumber: '53',
                        },
                    },
                    firstName: 'Eliezer',
                    lastName: 'Lee',
                    phone_number: '841048757296603',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Journalist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Paris',
                            country: 'Jordan',
                            postalCode: '40484',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '377',
                        },
                    },
                    firstName: 'Boyd',
                    lastName: 'Sims',
                    phone_number: '312616553442113',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Technical Writer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Warsaw',
                            country: 'Latvia',
                            postalCode: '51317',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '22 bis',
                        },
                    },
                    firstName: 'Barney',
                    lastName: 'Gates',
                    phone_number: '885568382605407',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Legal Advisor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Newcastle',
                            country: 'Hungary',
                            postalCode: '79105',
                            streetName: 'Michigan Avenue',
                            streetNumber: '213 bis',
                        },
                    },
                    firstName: 'Carlotta',
                    lastName: 'Owens',
                    phone_number: '134638918942270',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Database Administrator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Cape Town',
                            country: 'Malaysia',
                            postalCode: '56060',
                            streetName: 'Broadway',
                            streetNumber: '226',
                        },
                    },
                    firstName: 'Pete',
                    lastName: 'Barnes',
                    phone_number: '102849501972470',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Orthodontist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Newcastle',
                            country: 'Hungary',
                            postalCode: '74346',
                            streetName: 'Las Ramblas',
                            streetNumber: '351',
                        },
                    },
                    firstName: 'Agustin',
                    lastName: 'Snyder',
                    phone_number: '177678306030956',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Veterinarian',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Fukuoka',
                            country: 'Tanzania',
                            postalCode: '86463',
                            streetName: 'La Rambla',
                            streetNumber: '37',
                        },
                    },
                    firstName: 'Carter',
                    lastName: 'Long',
                    phone_number: '481082858236114',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Data Analyst',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Porto Alegre',
                            country: 'Libya',
                            postalCode: '94001',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '76',
                        },
                    },
                    firstName: 'Bettie',
                    lastName: 'York',
                    phone_number: '872488556981937',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Researcher',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Casablanca',
                            country: 'Equatorial Guinea',
                            postalCode: '78212',
                            streetName: 'Portobello Road',
                            streetNumber: '411',
                        },
                    },
                    firstName: 'Fay',
                    lastName: "O'neil",
                    phone_number: '542391837302232',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Auditor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Southampton',
                            country: 'Mauritania',
                            postalCode: '49296',
                            streetName: 'Nanjing Road',
                            streetNumber: '307',
                        },
                    },
                    firstName: 'Filbert',
                    lastName: 'Hoffman',
                    phone_number: '541445152178340',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Operations Manager',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Amsterdam',
                            country: 'Ghana',
                            postalCode: '15292',
                            streetName: 'Michigan Avenue',
                            streetNumber: '217',
                        },
                    },
                    firstName: 'Porter',
                    lastName: 'Conway',
                    phone_number: '790380293195172',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Technical Writer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Mira-Bhayandar',
                            country: 'Saint Lucia',
                            postalCode: '01422',
                            streetName: 'Ginza',
                            streetNumber: '138 bis',
                        },
                    },
                    firstName: 'Nicolas',
                    lastName: 'Dean',
                    phone_number: '508264171161776',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nuclear Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Fortaleza',
                            country: 'Iceland',
                            postalCode: '61358',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '102',
                        },
                    },
                    firstName: 'Kurtis',
                    lastName: 'Cunningham',
                    phone_number: '360368981949050',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Barber',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Aurangabad',
                            country: 'Nepal',
                            postalCode: '62341',
                            streetName: 'Yonge Street',
                            streetNumber: '312',
                        },
                    },
                    firstName: 'Darden',
                    lastName: 'Knight',
                    phone_number: '486541219087356',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Archaeologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Curitiba',
                            country: 'Rwanda',
                            postalCode: '49130',
                            streetName: 'Nanjing Road',
                            streetNumber: '354',
                        },
                    },
                    firstName: 'Evangelina',
                    lastName: 'Doyle',
                    phone_number: '114140632880440',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Cartographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bangkok',
                            country: 'Tonga',
                            postalCode: '06497',
                            streetName: 'Champs Elysees',
                            streetNumber: '5',
                        },
                    },
                    firstName: 'Deja',
                    lastName: 'Graham',
                    phone_number: '444861815987649',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Interior Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Vasai-Virar',
                            country: 'Central African Republic',
                            postalCode: '81263',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '300',
                        },
                    },
                    firstName: 'Linton',
                    lastName: 'Maddox',
                    phone_number: '507533672505626',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Geologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hefei',
                            country: 'Moldova',
                            postalCode: '65259',
                            streetName: "King's Road",
                            streetNumber: '404',
                        },
                    },
                    firstName: 'Ewart',
                    lastName: 'Turner',
                    phone_number: '664955971860541',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Programmer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Yangon',
                            country: 'Malawi',
                            postalCode: '13277',
                            streetName: 'Beale Street',
                            streetNumber: '389',
                        },
                    },
                    firstName: 'Blair',
                    lastName: 'Welch',
                    phone_number: '625603199984961',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Law Enforcement Officer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chandigarh',
                            country: 'Yemen',
                            postalCode: '32119',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '33',
                        },
                    },
                    firstName: 'Mia',
                    lastName: 'Blake',
                    phone_number: '127590026483217',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Film Director',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Pittsburgh',
                            country: 'Japan',
                            postalCode: '05077',
                            streetName: 'Khao San Road',
                            streetNumber: '399',
                        },
                    },
                    firstName: 'Magnus',
                    lastName: 'Cameron',
                    phone_number: '249109824833261',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Interpreter',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Johannesburg',
                            country: 'Sierra Leone',
                            postalCode: '83168',
                            streetName: 'Abbey Road',
                            streetNumber: '1',
                        },
                    },
                    firstName: 'Colleen',
                    lastName: 'Casey',
                    phone_number: '222774905393327',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Banker',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Leicester',
                            country: 'Guinea-Bissau',
                            postalCode: '73332',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '291 bis',
                        },
                    },
                    firstName: 'Abigail',
                    lastName: 'Roth',
                    phone_number: '845525356373028',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Biologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Helsinki',
                            country: 'Belgium',
                            postalCode: '89215',
                            streetName: 'Pennsylvania Avenue',
                            streetNumber: '286 bis',
                        },
                    },
                    firstName: 'Godfrey',
                    lastName: 'Park',
                    phone_number: '338863344854405',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Geologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Cardiff',
                            country: 'Barbados',
                            postalCode: '62396',
                            streetName: 'Oxford Street',
                            streetNumber: '451',
                        },
                    },
                    firstName: 'Tanya',
                    lastName: 'Richards',
                    phone_number: '981433188601102',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Waiter',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Manila',
                            country: 'Guyana',
                            postalCode: '27444',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '326',
                        },
                    },
                    firstName: 'Edythe',
                    lastName: 'Valentine',
                    phone_number: '724852419392974',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Doctor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Rangoon',
                            country: 'Comoros',
                            postalCode: '21136',
                            streetName: 'Beale Street',
                            streetNumber: '348',
                        },
                    },
                    firstName: 'Clement',
                    lastName: 'Lee',
                    phone_number: '833188533766598',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Farmer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Singapore',
                            country: 'Liberia',
                            postalCode: '12082',
                            streetName: 'Via del Corso',
                            streetNumber: '110',
                        },
                    },
                    firstName: 'Rose',
                    lastName: 'Dallas',
                    phone_number: '635608210389838',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Archaeologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Dublin',
                            country: 'Burkina Faso',
                            postalCode: '74449',
                            streetName: 'Fifth Avenue',
                            streetNumber: '439',
                        },
                    },
                    firstName: 'Donita',
                    lastName: 'Harmon',
                    phone_number: '630023975738441',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Lawyer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Ghaziabad',
                            country: 'Gabon',
                            postalCode: '34063',
                            streetName: 'Las Ramblas',
                            streetNumber: '317',
                        },
                    },
                    firstName: 'Rick',
                    lastName: 'Hall',
                    phone_number: '666832770867656',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Plumber',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bradford',
                            country: 'Bulgaria',
                            postalCode: '05123',
                            streetName: 'Rue de Rivoli',
                            streetNumber: '275',
                        },
                    },
                    firstName: 'Morgan',
                    lastName: 'Wilkinson',
                    phone_number: '525544440026645',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Scientist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Buenos Aires',
                            country: 'Nepal',
                            postalCode: '55092',
                            streetName: 'Oxford Street',
                            streetNumber: '406',
                        },
                    },
                    firstName: 'Virgil',
                    lastName: 'Mcintosh',
                    phone_number: '710611575047357',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Banker',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Seoul',
                            country: 'Canada',
                            postalCode: '53243',
                            streetName: 'Lombard Street',
                            streetNumber: '102',
                        },
                    },
                    firstName: 'Mariana',
                    lastName: 'Marsh',
                    phone_number: '347356866278358',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dancer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Copenhagen',
                            country: 'Guinea',
                            postalCode: '28035',
                            streetName: 'Kurfürstendamm',
                            streetNumber: '66',
                        },
                    },
                    firstName: 'Elenora',
                    lastName: 'Ives',
                    phone_number: '660794366454770',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Receptionist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bangalore',
                            country: 'Azerbaijan',
                            postalCode: '72347',
                            streetName: 'Beale Street',
                            streetNumber: '412',
                        },
                    },
                    firstName: 'Wyatt',
                    lastName: 'Maddox',
                    phone_number: '593515396878276',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Florist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Porto Alegre',
                            country: 'Bangladesh',
                            postalCode: '08173',
                            streetName: 'Rue de Rivoli',
                            streetNumber: '168 ter',
                        },
                    },
                    firstName: 'Chris',
                    lastName: 'Harrison',
                    phone_number: '363361717153264',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Fashion Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Aurangabad',
                            country: 'Comoros',
                            postalCode: '28071',
                            streetName: 'Portobello Road',
                            streetNumber: '451',
                        },
                    },
                    firstName: 'Marvin',
                    lastName: 'Alexander',
                    phone_number: '32003185949756',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Flight Attendant',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bhopal',
                            country: 'Tuvalu',
                            postalCode: '60225',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '494',
                        },
                    },
                    firstName: 'Arnulfo',
                    lastName: 'Suarez',
                    phone_number: '812737381111772',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Florist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Kolkata',
                            country: 'Laos',
                            postalCode: '16491',
                            streetName: 'Yonge Street',
                            streetNumber: '430',
                        },
                    },
                    firstName: 'Brett',
                    lastName: 'Shepherd',
                    phone_number: '920451806904088',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Florist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hanoi',
                            country: 'Equatorial Guinea',
                            postalCode: '17175',
                            streetName: 'Las Ramblas',
                            streetNumber: '208 ter',
                        },
                    },
                    firstName: 'Cole',
                    lastName: 'Berry',
                    phone_number: '811489893565764',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Auditor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Mira-Bhayandar',
                            country: 'Paraguay',
                            postalCode: '61022',
                            streetName: 'Beale Street',
                            streetNumber: '382',
                        },
                    },
                    firstName: 'Brett',
                    lastName: 'Collins',
                    phone_number: '23415698584846',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Salesperson',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Suzhou',
                            country: 'Romania',
                            postalCode: '57355',
                            streetName: 'Ginza',
                            streetNumber: '26',
                        },
                    },
                    firstName: 'Konrad',
                    lastName: 'Parks',
                    phone_number: '377142058835185',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Animator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Solapur',
                            country: 'Thailand',
                            postalCode: '36489',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '438',
                        },
                    },
                    firstName: 'Alan',
                    lastName: 'Wiggins',
                    phone_number: '363461246279444',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Occupational Therapist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Delhi',
                            country: 'Malawi',
                            postalCode: '40329',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '58',
                        },
                    },
                    firstName: 'Dominik',
                    lastName: 'Mcpherson',
                    phone_number: '916930406588400',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dentist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Prague',
                            country: 'Czech Republic',
                            postalCode: '10182',
                            streetName: 'Oxford Street',
                            streetNumber: '72',
                        },
                    },
                    firstName: 'Donell',
                    lastName: 'Weber',
                    phone_number: '248325770009950',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Web Developer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Leicester',
                            country: 'Chile',
                            postalCode: '85181',
                            streetName: 'Gran Via',
                            streetNumber: '398',
                        },
                    },
                    firstName: 'Kai',
                    lastName: 'Richardson',
                    phone_number: '727476729519157',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Medical Technician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Mumbai',
                            country: 'Turkey',
                            postalCode: '55441',
                            streetName: 'Sunshine Coast Highway',
                            streetNumber: '31 bis',
                        },
                    },
                    firstName: 'Rachel',
                    lastName: 'Fisher',
                    phone_number: '484923049611073',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Chef',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Cologne',
                            country: 'France',
                            postalCode: '94201',
                            streetName: 'La Rambla',
                            streetNumber: '469 ter',
                        },
                    },
                    firstName: 'Alina',
                    lastName: 'Reynolds',
                    phone_number: '179099401187880',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nutritionist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Sheffield',
                            country: 'Tanzania',
                            postalCode: '42222',
                            streetName: 'Abbey Road',
                            streetNumber: '24',
                        },
                    },
                    firstName: 'Marsha',
                    lastName: 'Ross',
                    phone_number: '494688619971300',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Tax Advisor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Vasai-Virar',
                            country: 'Bhutan',
                            postalCode: '09440',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '152',
                        },
                    },
                    firstName: 'Greta',
                    lastName: 'Pearson',
                    phone_number: '478930168874131',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Animator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Srinagar',
                            country: 'Qatar',
                            postalCode: '63438',
                            streetName: 'Rodeo Drive',
                            streetNumber: '223',
                        },
                    },
                    firstName: 'Dane',
                    lastName: 'Andrews',
                    phone_number: '122028702816885',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nuclear Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Melbourne',
                            country: 'Micronesia',
                            postalCode: '50417',
                            streetName: 'Ginza',
                            streetNumber: '170',
                        },
                    },
                    firstName: 'Keegan',
                    lastName: 'Newman',
                    phone_number: '873365316806006',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Event Planner',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Ghaziabad',
                            country: 'Solomon Islands',
                            postalCode: '26291',
                            streetName: 'Queen Street',
                            streetNumber: '433',
                        },
                    },
                    firstName: 'Deidra',
                    lastName: 'Williams',
                    phone_number: '226827655510665',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Electrical Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Kota',
                            country: 'Tonga',
                            postalCode: '11270',
                            streetName: 'Las Ramblas',
                            streetNumber: '80 ter',
                        },
                    },
                    firstName: 'Wesley',
                    lastName: 'Dunn',
                    phone_number: '763075692160048',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Sales Manager',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Kolkata',
                            country: 'Mongolia',
                            postalCode: '81282',
                            streetName: 'Beale Street',
                            streetNumber: '324',
                        },
                    },
                    firstName: 'Alphonse',
                    lastName: 'Miles',
                    phone_number: '691037024531618',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Coach',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Patna',
                            country: 'Kiribati',
                            postalCode: '11078',
                            streetName: 'Beale Street',
                            streetNumber: '215',
                        },
                    },
                    firstName: 'Barclay',
                    lastName: 'Newman',
                    phone_number: '863894884560116',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dentist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Pune',
                            country: 'Norway',
                            postalCode: '01383',
                            streetName: 'La Rambla',
                            streetNumber: '261 ter',
                        },
                    },
                    firstName: 'Andres',
                    lastName: 'Sharp',
                    phone_number: '276006168963945',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Real Estate Agent',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Singapore',
                            country: 'Nauru',
                            postalCode: '44352',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '308',
                        },
                    },
                    firstName: 'Arvid',
                    lastName: 'Petersen',
                    phone_number: '397467960724546',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Video Editor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Copenhagen',
                            country: 'Germany',
                            postalCode: '24226',
                            streetName: 'Unter den Linden',
                            streetNumber: '93',
                        },
                    },
                    firstName: 'Imre',
                    lastName: 'Alexander',
                    phone_number: '912319796102388',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Social Scientist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Stockholm',
                            country: 'Mongolia',
                            postalCode: '69375',
                            streetName: 'Nanjing Road',
                            streetNumber: '326',
                        },
                    },
                    firstName: 'Daryl',
                    lastName: 'Washington',
                    phone_number: '562986799109177',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Web Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Nagoya',
                            country: 'Honduras',
                            postalCode: '27023',
                            streetName: 'Kurfürstendamm',
                            streetNumber: '388',
                        },
                    },
                    firstName: 'Buffy',
                    lastName: 'Robertson',
                    phone_number: '523780076811921',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Web Developer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Coventry',
                            country: 'Croatia',
                            postalCode: '65069',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '202',
                        },
                    },
                    firstName: 'Julie',
                    lastName: 'Jackson',
                    phone_number: '155367183667342',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Product Manager',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Shanghai',
                            country: 'Fiji',
                            postalCode: '31300',
                            streetName: 'Broadway',
                            streetNumber: '131 ter',
                        },
                    },
                    firstName: 'Jason',
                    lastName: 'Lawrence',
                    phone_number: '492547477859622',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Quality Analyst',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Dhanbad',
                            country: 'Sierra Leone',
                            postalCode: '54254',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '203',
                        },
                    },
                    firstName: 'Hilma',
                    lastName: 'Cooper',
                    phone_number: '261370240259962',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Auditor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Zurich',
                            country: 'Panama',
                            postalCode: '81498',
                            streetName: 'Ginza',
                            streetNumber: '364',
                        },
                    },
                    firstName: 'Beryl',
                    lastName: 'Cameron',
                    phone_number: '623215132762102',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Interior Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Allahabad',
                            country: 'Egypt',
                            postalCode: '10371',
                            streetName: 'La Rambla',
                            streetNumber: '227',
                        },
                    },
                    firstName: 'Chloe',
                    lastName: 'Robertson',
                    phone_number: '451540691224471',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Geographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bareilly',
                            country: 'Costa Rica',
                            postalCode: '07472',
                            streetName: 'Pennsylvania Avenue',
                            streetNumber: '420',
                        },
                    },
                    firstName: 'Benson',
                    lastName: 'Lowery',
                    phone_number: '599880740366084',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Mechanical Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Rio de Janeiro',
                            country: 'Eswatini',
                            postalCode: '85493',
                            streetName: 'Ginza',
                            streetNumber: '26',
                        },
                    },
                    firstName: 'Lorraine',
                    lastName: 'Walker',
                    phone_number: '727545089628225',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Astronomer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Kota',
                            country: 'United Kingdom',
                            postalCode: '75429',
                            streetName: 'Orchard Road',
                            streetNumber: '113',
                        },
                    },
                    firstName: 'Caissa',
                    lastName: 'Lambert',
                    phone_number: '237687641447616',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Mechanic',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Indore',
                            country: 'Malaysia',
                            postalCode: '02210',
                            streetName: 'Portobello Road',
                            streetNumber: '465',
                        },
                    },
                    firstName: 'Billie',
                    lastName: 'Stark',
                    phone_number: '44883286921680',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Dar es Salaam',
                            country: 'Bulgaria',
                            postalCode: '03233',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '333',
                        },
                    },
                    firstName: 'Willa',
                    lastName: 'Ellison',
                    phone_number: '523142646898549',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Psychologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Saint Petersburg',
                            country: 'Lebanon',
                            postalCode: '71398',
                            streetName: 'Unter den Linden',
                            streetNumber: '422',
                        },
                    },
                    firstName: 'Addison',
                    lastName: 'Lawson',
                    phone_number: '399753985475419',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Event Planner',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Monterrey',
                            country: 'Algeria',
                            postalCode: '88440',
                            streetName: 'Sunshine Coast Highway',
                            streetNumber: '337',
                        },
                    },
                    firstName: 'Israel',
                    lastName: 'Russell',
                    phone_number: '768141650209921',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Janitor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Cape Town',
                            country: 'United States of America',
                            postalCode: '74471',
                            streetName: 'Michigan Avenue',
                            streetNumber: '213',
                        },
                    },
                    firstName: 'Adrianna',
                    lastName: 'May',
                    phone_number: '949159745594056',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Carpenter',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Visakhapatnam',
                            country: 'Switzerland',
                            postalCode: '36141',
                            streetName: 'Fifth Avenue',
                            streetNumber: '13',
                        },
                    },
                    firstName: 'Benson',
                    lastName: 'Shelton',
                    phone_number: '686826976910714',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Film Director',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Harbin',
                            country: 'Timor-Leste',
                            postalCode: '89202',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '120',
                        },
                    },
                    firstName: 'Calliope',
                    lastName: 'Chavez',
                    phone_number: '508432155040773',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nurse',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Prague',
                            country: 'Uganda',
                            postalCode: '72368',
                            streetName: 'Ginza',
                            streetNumber: '50',
                        },
                    },
                    firstName: 'Buddy',
                    lastName: 'Valentine',
                    phone_number: '499624626848490',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Geographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Casablanca',
                            country: 'Malawi',
                            postalCode: '59098',
                            streetName: 'Ginza',
                            streetNumber: '71',
                        },
                    },
                    firstName: 'Andreas',
                    lastName: 'Tran',
                    phone_number: '337952936601689',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Artist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Navi Mumbai',
                            country: 'Lithuania',
                            postalCode: '60344',
                            streetName: 'Yonge Street',
                            streetNumber: '49',
                        },
                    },
                    firstName: 'Azalea',
                    lastName: 'Hale',
                    phone_number: '745588035408221',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Geographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tianjin',
                            country: 'Burundi',
                            postalCode: '18143',
                            streetName: 'Unter den Linden',
                            streetNumber: '303',
                        },
                    },
                    firstName: 'Quinn',
                    lastName: 'Stark',
                    phone_number: '287680149513286',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Meteorologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Dallas',
                            country: 'Paraguay',
                            postalCode: '53128',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '138',
                        },
                    },
                    firstName: 'Olga',
                    lastName: 'Walter',
                    phone_number: '658658353942510',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Choreographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bhubaneswar',
                            country: 'Maldives',
                            postalCode: '21267',
                            streetName: 'Unter den Linden',
                            streetNumber: '285',
                        },
                    },
                    firstName: 'Dorothea',
                    lastName: 'Patrick',
                    phone_number: '214003442358450',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Flight Attendant',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hong Kong',
                            country: 'Suriname',
                            postalCode: '20493',
                            streetName: 'Rodeo Drive',
                            streetNumber: '413',
                        },
                    },
                    firstName: 'Declan',
                    lastName: 'Price',
                    phone_number: '586613889357104',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Chemist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Guwahati',
                            country: 'Guyana',
                            postalCode: '45072',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '284',
                        },
                    },
                    firstName: 'Jocelyn',
                    lastName: 'Foster',
                    phone_number: '23571152055611',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Systems Analyst',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tiruchirappalli',
                            country: 'Slovenia',
                            postalCode: '28061',
                            streetName: 'Wall Street',
                            streetNumber: '412',
                        },
                    },
                    firstName: 'Luella',
                    lastName: 'Pierce',
                    phone_number: '28536683452880',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Interior Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chittagong',
                            country: 'Syria',
                            postalCode: '12002',
                            streetName: 'Michigan Avenue',
                            streetNumber: '368',
                        },
                    },
                    firstName: 'Farid',
                    lastName: 'Gordon',
                    phone_number: '769182272854858',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Surgeon',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Aurangabad',
                            country: 'Pakistan',
                            postalCode: '50212',
                            streetName: 'Beale Street',
                            streetNumber: '457',
                        },
                    },
                    firstName: 'Everette',
                    lastName: 'Knox',
                    phone_number: '568330243022050',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dietitian',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hangzhou',
                            country: 'Panama',
                            postalCode: '39076',
                            streetName: 'Champs Elysees',
                            streetNumber: '252',
                        },
                    },
                    firstName: 'Barnaby',
                    lastName: 'Shaw',
                    phone_number: '735129619806548',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Video Editor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Fukuoka',
                            country: 'Spain',
                            postalCode: '06454',
                            streetName: 'Michigan Avenue',
                            streetNumber: '9 bis',
                        },
                    },
                    firstName: 'Katherine',
                    lastName: 'Mcmillan',
                    phone_number: '248933880809980',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Developer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Fort Worth',
                            country: 'Belarus',
                            postalCode: '20320',
                            streetName: 'Las Ramblas',
                            streetNumber: '1',
                        },
                    },
                    firstName: 'Agneta',
                    lastName: 'Grant',
                    phone_number: '642643193284534',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Singer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Nagpur',
                            country: 'Austria',
                            postalCode: '64314',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '322 bis',
                        },
                    },
                    firstName: 'Shelia',
                    lastName: 'Hardy',
                    phone_number: '506162518990009',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Pharmacist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Beijing',
                            country: 'Nauru',
                            postalCode: '17409',
                            streetName: 'Friedrichstrasse',
                            streetNumber: '28',
                        },
                    },
                    firstName: 'Dawson',
                    lastName: 'Martin',
                    phone_number: '59823492017902',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Mathematician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Glasgow',
                            country: 'Afghanistan',
                            postalCode: '48191',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '207',
                        },
                    },
                    firstName: 'Claudia',
                    lastName: 'Gardner',
                    phone_number: '680951508260228',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Psychologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Aligarh',
                            country: 'Finland',
                            postalCode: '87394',
                            streetName: 'Yonge Street',
                            streetNumber: '309',
                        },
                    },
                    firstName: 'Dayna',
                    lastName: 'Collins',
                    phone_number: '910829354954376',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Navi Mumbai',
                            country: 'Hungary',
                            postalCode: '77239',
                            streetName: 'Via del Corso',
                            streetNumber: '75',
                        },
                    },
                    firstName: 'Becky',
                    lastName: 'Kelly',
                    phone_number: '776933122221733',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Judge',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Alexandria',
                            country: 'Iraq',
                            postalCode: '80326',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '388 ter',
                        },
                    },
                    firstName: 'Kollin',
                    lastName: 'Bowers',
                    phone_number: '442594653269744',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Physiotherapist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'New York City',
                            country: 'Lithuania',
                            postalCode: '82188',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '332',
                        },
                    },
                    firstName: 'Monica',
                    lastName: 'Collins',
                    phone_number: '663627405880184',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Choreographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Fort Worth',
                            country: 'Costa Rica',
                            postalCode: '93015',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '87',
                        },
                    },
                    firstName: 'Steven',
                    lastName: 'Jensen',
                    phone_number: '71225868651056',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Baker',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Houston',
                            country: 'Maldives',
                            postalCode: '47414',
                            streetName: 'Rue de Rivoli',
                            streetNumber: '99',
                        },
                    },
                    firstName: 'Brook',
                    lastName: 'Warner',
                    phone_number: '409156406371131',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Politician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Ho Chi Minh City',
                            country: 'Malawi',
                            postalCode: '08226',
                            streetName: 'Fifth Avenue',
                            streetNumber: '157',
                        },
                    },
                    firstName: 'Ali',
                    lastName: 'Vinson',
                    phone_number: '97751021130878',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Microbiologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Liverpool',
                            country: 'Sri Lanka',
                            postalCode: '78296',
                            streetName: 'Yonge Street',
                            streetNumber: '423',
                        },
                    },
                    firstName: 'Anahi',
                    lastName: 'Graham',
                    phone_number: '286366145743071',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Editor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Luanda',
                            country: 'Dominica',
                            postalCode: '01177',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '50',
                        },
                    },
                    firstName: 'Kyle',
                    lastName: 'Carter',
                    phone_number: '754085979305418',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Animator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Manchester',
                            country: 'Marshall Islands',
                            postalCode: '44154',
                            streetName: 'Queen Street',
                            streetNumber: '451',
                        },
                    },
                    firstName: 'Liz',
                    lastName: 'Hurst',
                    phone_number: '953122972953867',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Gardener',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hubli-Dharwad',
                            country: 'Morocco',
                            postalCode: '10354',
                            streetName: 'Fifth Avenue',
                            streetNumber: '125 bis',
                        },
                    },
                    firstName: 'Fredrick',
                    lastName: 'Miller',
                    phone_number: '364392544711522',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Web Developer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Birmingham',
                            country: 'Denmark',
                            postalCode: '75418',
                            streetName: 'Pennsylvania Avenue',
                            streetNumber: '62',
                        },
                    },
                    firstName: 'Tony',
                    lastName: 'Santos',
                    phone_number: '825141435479927',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Journalist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Rio de Janeiro',
                            country: 'Qatar',
                            postalCode: '73269',
                            streetName: 'Baker Street',
                            streetNumber: '45',
                        },
                    },
                    firstName: 'Javier',
                    lastName: 'Vasquez',
                    phone_number: '81796715527587',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nuclear Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Lahore',
                            country: 'Honduras',
                            postalCode: '34268',
                            streetName: 'Yonge Street',
                            streetNumber: '416',
                        },
                    },
                    firstName: 'Anders',
                    lastName: 'Murray',
                    phone_number: '845025509968275',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Florist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Jakarta',
                            country: 'Ghana',
                            postalCode: '42475',
                            streetName: 'Hollywood Boulevard',
                            streetNumber: '116',
                        },
                    },
                    firstName: 'Addison',
                    lastName: 'Meadows',
                    phone_number: '640291739727028',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Health Inspector',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Sydney',
                            country: 'Moldova',
                            postalCode: '53400',
                            streetName: 'Via del Corso',
                            streetNumber: '110',
                        },
                    },
                    firstName: 'Geraldine',
                    lastName: 'Walker',
                    phone_number: '244921058575953',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Lawyer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Rome',
                            country: 'Kuwait',
                            postalCode: '89250',
                            streetName: 'Unter den Linden',
                            streetNumber: '479',
                        },
                    },
                    firstName: 'Liliana',
                    lastName: 'Madison',
                    phone_number: '978180777715385',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Physician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Lagos',
                            country: 'Moldova',
                            postalCode: '45498',
                            streetName: 'Baker Street',
                            streetNumber: '487',
                        },
                    },
                    firstName: 'Bob',
                    lastName: 'Weeks',
                    phone_number: '552867843890558',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Legal Advisor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Ranchi',
                            country: 'Romania',
                            postalCode: '74074',
                            streetName: 'Khao San Road',
                            streetNumber: '127',
                        },
                    },
                    firstName: 'Ellie',
                    lastName: 'Olsen',
                    phone_number: '677493415964439',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dentist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Patna',
                            country: 'Mauritius',
                            postalCode: '73378',
                            streetName: 'Gran Via',
                            streetNumber: '211',
                        },
                    },
                    firstName: 'Mya',
                    lastName: 'Spencer',
                    phone_number: '568335695454486',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Police Officer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'London',
                            country: 'Barbados',
                            postalCode: '38465',
                            streetName: 'Lombard Street',
                            streetNumber: '310',
                        },
                    },
                    firstName: 'Lindsay',
                    lastName: 'Wood',
                    phone_number: '508656009934801',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dentist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Vadodara',
                            country: 'North Macedonia',
                            postalCode: '29322',
                            streetName: 'Unter den Linden',
                            streetNumber: '110',
                        },
                    },
                    firstName: 'Denny',
                    lastName: 'Olson',
                    phone_number: '439462546064430',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Actuary',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bradford',
                            country: 'Serbia',
                            postalCode: '78344',
                            streetName: "King's Road",
                            streetNumber: '298',
                        },
                    },
                    firstName: 'Marie',
                    lastName: 'Galloway',
                    phone_number: '39108139783511',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Travel Agent',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Alexandria',
                            country: 'Niger',
                            postalCode: '28455',
                            streetName: 'Yonge Street',
                            streetNumber: '229 ter',
                        },
                    },
                    firstName: 'Bette',
                    lastName: 'Crawford',
                    phone_number: '166731497762326',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nutritionist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Baghdad',
                            country: 'Tajikistan',
                            postalCode: '37373',
                            streetName: 'La Rambla',
                            streetNumber: '236 bis',
                        },
                    },
                    firstName: 'Moses',
                    lastName: 'Burnett',
                    phone_number: '375378949578325',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Painter',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Los Angeles',
                            country: 'Moldova',
                            postalCode: '73225',
                            streetName: 'Yonge Street',
                            streetNumber: '355',
                        },
                    },
                    firstName: 'Teddy',
                    lastName: 'Willis',
                    phone_number: '776992220529034',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Nutritionist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Jalandhar',
                            country: 'Djibouti',
                            postalCode: '13002',
                            streetName: 'Rodeo Drive',
                            streetNumber: '215',
                        },
                    },
                    firstName: 'Dianna',
                    lastName: 'Powers',
                    phone_number: '26543324131314',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Zoologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Baghdad',
                            country: 'Singapore',
                            postalCode: '39053',
                            streetName: 'Kurfürstendamm',
                            streetNumber: '0 bis',
                        },
                    },
                    firstName: 'Donetta',
                    lastName: 'Hill',
                    phone_number: '910356490543308',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Interior Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Sheffield',
                            country: 'Azerbaijan',
                            postalCode: '11059',
                            streetName: 'Broadway',
                            streetNumber: '7',
                        },
                    },
                    firstName: 'Chandler',
                    lastName: 'Travis',
                    phone_number: '294284863978408',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Driver',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Howrah',
                            country: 'Zimbabwe',
                            postalCode: '82483',
                            streetName: 'Orchard Road',
                            streetNumber: '217',
                        },
                    },
                    firstName: 'Anika',
                    lastName: 'Villarreal',
                    phone_number: '897448190100616',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Consultant',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Pune',
                            country: 'Bulgaria',
                            postalCode: '67156',
                            streetName: 'Rodeo Drive',
                            streetNumber: '174 bis',
                        },
                    },
                    firstName: 'Brock',
                    lastName: 'Chambers',
                    phone_number: '5585257559918',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Health Inspector',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Indore',
                            country: 'United Kingdom',
                            postalCode: '79470',
                            streetName: 'Broadway',
                            streetNumber: '42 bis',
                        },
                    },
                    firstName: 'Erica',
                    lastName: 'Williamson',
                    phone_number: '328381716466821',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Choreographer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chongqing',
                            country: 'South Sudan',
                            postalCode: '41190',
                            streetName: 'Fifth Avenue',
                            streetNumber: '326',
                        },
                    },
                    firstName: 'Katherine',
                    lastName: 'Mccoy',
                    phone_number: '693890458139675',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Real Estate Agent',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Berlin',
                            country: 'Guinea',
                            postalCode: '01144',
                            streetName: "King's Road",
                            streetNumber: '79 bis',
                        },
                    },
                    firstName: 'Cora',
                    lastName: 'Andrews',
                    phone_number: '613530628986513',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Meteorologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Glasgow',
                            country: 'Nepal',
                            postalCode: '40355',
                            streetName: 'Broadway',
                            streetNumber: '342',
                        },
                    },
                    firstName: 'Bernard',
                    lastName: 'Francis',
                    phone_number: '24856607830861',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Urban Planner',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Salvador',
                            country: 'Mauritius',
                            postalCode: '10245',
                            streetName: 'Oxford Street',
                            streetNumber: '393',
                        },
                    },
                    firstName: 'Philip',
                    lastName: 'Fisher',
                    phone_number: '179579718649736',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Driver',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chengdu',
                            country: 'Vietnam',
                            postalCode: '43323',
                            streetName: 'Champs Elysees',
                            streetNumber: '489 bis',
                        },
                    },
                    firstName: 'Evangeline',
                    lastName: 'Palmer',
                    phone_number: '789445055832150',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Pharmacist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Vijayawada',
                            country: 'China',
                            postalCode: '71030',
                            streetName: 'Wall Street',
                            streetNumber: '143',
                        },
                    },
                    firstName: 'Avery',
                    lastName: 'Vinson',
                    phone_number: '424548191538216',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Security Guard',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Rangoon',
                            country: 'Gambia',
                            postalCode: '60100',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '249 ter',
                        },
                    },
                    firstName: 'Alanna',
                    lastName: 'Reeves',
                    phone_number: '400581502949982',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Judge',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Chicago',
                            country: 'Azerbaijan',
                            postalCode: '90434',
                            streetName: 'Michigan Avenue',
                            streetNumber: '306',
                        },
                    },
                    firstName: 'Lindsey',
                    lastName: 'Andrews',
                    phone_number: '850821306834887',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Historian',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Milan',
                            country: 'Lithuania',
                            postalCode: '69128',
                            streetName: 'Las Ramblas',
                            streetNumber: '347',
                        },
                    },
                    firstName: 'Jake',
                    lastName: 'Pugh',
                    phone_number: '952132262886968',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Mechanic',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Dar es Salaam',
                            country: 'North Macedonia',
                            postalCode: '36029',
                            streetName: 'Baker Street',
                            streetNumber: '241',
                        },
                    },
                    firstName: 'Brittaney',
                    lastName: 'Spencer',
                    phone_number: '994087772053822',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Dentist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Suzhou',
                            country: 'Saint Kitts and Nevis',
                            postalCode: '82134',
                            streetName: 'Wall Street',
                            streetNumber: '111',
                        },
                    },
                    firstName: 'Lola',
                    lastName: 'Alvarez',
                    phone_number: '370774269765582',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Farmer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Mira-Bhayandar',
                            country: 'Liechtenstein',
                            postalCode: '29331',
                            streetName: 'Fifth Avenue',
                            streetNumber: '454',
                        },
                    },
                    firstName: 'Robin',
                    lastName: 'Reid',
                    phone_number: '997121096124583',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Politician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bangalore',
                            country: 'Guatemala',
                            postalCode: '80200',
                            streetName: 'Fifth Avenue',
                            streetNumber: '94 ter',
                        },
                    },
                    firstName: 'Sebastian',
                    lastName: 'Chapman',
                    phone_number: '442077068175533',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Graphic Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Nagpur',
                            country: 'Cambodia',
                            postalCode: '24254',
                            streetName: 'Rodeo Drive',
                            streetNumber: '302 ter',
                        },
                    },
                    firstName: 'Desmond',
                    lastName: 'Coleman',
                    phone_number: '32411916754736',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Barber',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tehran',
                            country: 'Estonia',
                            postalCode: '46326',
                            streetName: 'Kurfürstendamm',
                            streetNumber: '453',
                        },
                    },
                    firstName: 'Knox',
                    lastName: 'Barber',
                    phone_number: '472550166135687',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Database Administrator',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Porto Alegre',
                            country: 'Cabo Verde',
                            postalCode: '48148',
                            streetName: 'Oxford Street',
                            streetNumber: '28',
                        },
                    },
                    firstName: 'Darrel',
                    lastName: 'Mayer',
                    phone_number: '485326606716395',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Farmer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Budapest',
                            country: 'Spain',
                            postalCode: '88174',
                            streetName: 'Broadway',
                            streetNumber: '471',
                        },
                    },
                    firstName: 'Jacoby',
                    lastName: 'Robbins',
                    phone_number: '125480630407107',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Counselor',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Barcelona',
                            country: 'Belize',
                            postalCode: '77248',
                            streetName: 'Avenida Paulista',
                            streetNumber: '302',
                        },
                    },
                    firstName: 'Nova',
                    lastName: 'Hopkins',
                    phone_number: '968486745034076',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Robotics Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tiruchirappalli',
                            country: 'Iceland',
                            postalCode: '11127',
                            streetName: 'Kurfürstendamm',
                            streetNumber: '278',
                        },
                    },
                    firstName: 'Callista',
                    lastName: 'Small',
                    phone_number: '788887452702668',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Bookkeeper',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Leeds',
                            country: 'Norway',
                            postalCode: '80080',
                            streetName: 'Wall Street',
                            streetNumber: '270',
                        },
                    },
                    firstName: 'Fox',
                    lastName: 'Sullivan',
                    phone_number: '831497414051766',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'IT Specialist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Miami',
                            country: 'Ghana',
                            postalCode: '53407',
                            streetName: 'Unter den Linden',
                            streetNumber: '169',
                        },
                    },
                    firstName: 'Salvador',
                    lastName: 'Brewer',
                    phone_number: '32741930934258',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Real Estate Agent',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Shanghai',
                            country: 'Netherlands',
                            postalCode: '31226',
                            streetName: 'Las Ramblas',
                            streetNumber: '362',
                        },
                    },
                    firstName: 'Arpad',
                    lastName: 'Walsh',
                    phone_number: '980223378268539',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'UX Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Naples',
                            country: 'Malta',
                            postalCode: '18046',
                            streetName: 'Yonge Street',
                            streetNumber: '208',
                        },
                    },
                    firstName: 'Felicity',
                    lastName: 'Johnston',
                    phone_number: '329074317556914',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Urban Planner',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Coventry',
                            country: 'Sao Tome and Principe',
                            postalCode: '03288',
                            streetName: 'Nevsky Prospekt',
                            streetNumber: '386',
                        },
                    },
                    firstName: 'Latoya',
                    lastName: 'Galloway',
                    phone_number: '600671205540081',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Architect',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Indore',
                            country: 'Tanzania',
                            postalCode: '85191',
                            streetName: 'Baker Street',
                            streetNumber: '26',
                        },
                    },
                    firstName: 'Isaias',
                    lastName: 'Armstrong',
                    phone_number: '713671214498827',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Stockbroker',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Melbourne',
                            country: 'Paraguay',
                            postalCode: '70187',
                            streetName: 'Rue de Rivoli',
                            streetNumber: '7 ter',
                        },
                    },
                    firstName: 'Aryan',
                    lastName: 'Barrett',
                    phone_number: '492808821119890',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Geologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Coventry',
                            country: 'Eswatini',
                            postalCode: '16222',
                            streetName: 'Las Olas Boulevard',
                            streetNumber: '350',
                        },
                    },
                    firstName: 'Marta',
                    lastName: 'Swanson',
                    phone_number: '124782860759842',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Graphic Designer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Bristol',
                            country: 'Sao Tome and Principe',
                            postalCode: '56045',
                            streetName: 'Ginza',
                            streetNumber: '69',
                        },
                    },
                    firstName: 'Mitchell',
                    lastName: 'Wright',
                    phone_number: '125857107829174',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Pilot',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Hubli-Dharwad',
                            country: 'Serbia',
                            postalCode: '01026',
                            streetName: 'Beale Street',
                            streetNumber: '255 ter',
                        },
                    },
                    firstName: 'Daly',
                    lastName: 'Long',
                    phone_number: '851349622305633',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Surgeon',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Oslo',
                            country: 'Norway',
                            postalCode: '67274',
                            streetName: 'Michigan Avenue',
                            streetNumber: '376',
                        },
                    },
                    firstName: 'Fletcher',
                    lastName: 'Ahern',
                    phone_number: '695218530352068',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Clerk',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Jodhpur',
                            country: 'South Korea',
                            postalCode: '47262',
                            streetName: 'Ginza',
                            streetNumber: '39',
                        },
                    },
                    firstName: 'Gayle',
                    lastName: 'Ortiz',
                    phone_number: '819039428793284',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Clerk',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Raipur',
                            country: 'Barbados',
                            postalCode: '21183',
                            streetName: 'Portobello Road',
                            streetNumber: '141',
                        },
                    },
                    firstName: 'Macy',
                    lastName: 'Mack',
                    phone_number: '439317732119060',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Coach',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Brasília',
                            country: 'Ireland',
                            postalCode: '15269',
                            streetName: 'Avenida Paulista',
                            streetNumber: '37 bis',
                        },
                    },
                    firstName: 'Florian',
                    lastName: 'Clemens',
                    phone_number: '229135165471273',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Electrical Engineer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tiruchirappalli',
                            country: 'Brunei',
                            postalCode: '57474',
                            streetName: 'Abbey Road',
                            streetNumber: '222 ter',
                        },
                    },
                    firstName: 'Justin',
                    lastName: 'Rich',
                    phone_number: '441168072856318',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Laborer',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Sheffield',
                            country: 'Togo',
                            postalCode: '04206',
                            streetName: 'Orchard Road',
                            streetNumber: '227 ter',
                        },
                    },
                    firstName: 'Ivy',
                    lastName: 'Sanchez',
                    phone_number: '177706990659592',
                },
            },
            privateIndividual: false,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Hairdresser',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Tianjin',
                            country: 'Tajikistan',
                            postalCode: '66359',
                            streetName: 'Baker Street',
                            streetNumber: '488',
                        },
                    },
                    firstName: 'Linda',
                    lastName: 'Scott',
                    phone_number: '712204937611539',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Medical Technician',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Ranchi',
                            country: 'Lebanon',
                            postalCode: '83156',
                            streetName: 'Fifth Avenue',
                            streetNumber: '50',
                        },
                    },
                    firstName: 'Lillian',
                    lastName: 'Palmer',
                    phone_number: '121758131488302',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Architect',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Copenhagen',
                            country: 'Lesotho',
                            postalCode: '21250',
                            streetName: 'Sunset Boulevard',
                            streetNumber: '27',
                        },
                    },
                    firstName: 'Dahlia',
                    lastName: 'Ray',
                    phone_number: '710098199011377',
                },
            },
            privateIndividual: true,
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    client = await db.client.create({
        data: {
            job: 'Microbiologist',
            person: {
                create: {
                    address: {
                        create: {
                            city: 'Singapore',
                            country: 'Uganda',
                            postalCode: '32045',
                            streetName: 'La Rambla',
                            streetNumber: '119',
                        },
                    },
                    firstName: 'Caroline',
                    lastName: 'Bell',
                    phone_number: '107113603735858',
                },
            },
        },
    });

    clients.push({ clientId: client!.id, privateIndividual: client!.privateIndividual });

    return clients;
}
