/**
 * This file fills the database with companies.
 *
 * Known limitations:
 * - privateIndividual
 * - datetimes are ignored
 * - google not supported
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -u 'Domain:Chatbot|DataScience|MachineLearning|IntelligenceArtificielle|WebDev|MobileDev|AppDev|Cybersecurity|Cryptography|Networks|Telecommunications|Internet|IoT|EmbeddedSystems|Image|ComputerVision|ComputerGraphics|d_3D|MarketAnalysis|StateOfTheArt' --schema company.json  --before 'company = await db.company.create(' --after $');\n\ncompanies.push(company!.id);\n\n' | sed 's/"STUDYID": \(.*\),/"studyId": studies[\1],/;s/"PERSONID": \(.*\)$/"id": people[\1]/'
 */

import { PrismaClient } from '@prisma/client';

export async function seedCompaniesTestData(
    db: PrismaClient,
    clients: string[]
): Promise<string[]> {
    const companies = [];
    let company;

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Lagos',
                    country: 'United Arab Emirates',
                    postalCode: '62250',
                    streetName: 'Via del Corso',
                    streetNumber: '318',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IoT',
                        'd_3D',
                        'Cybersecurity',
                        'MobileDev',
                        'EmbeddedSystems',
                        'Internet',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[50],
                    },
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[19],
                    },
                    {
                        id: clients[24],
                    },
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[36],
                    },
                ],
            },
            name: 'Fenix Power',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hefei',
                    country: 'Bhutan',
                    postalCode: '63090',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '422',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[27],
                    },
                ],
            },
            name: 'PACCAR',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Guayaquil',
                    country: 'New Zealand',
                    postalCode: '84497',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '427 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'WebDev',
                        'StateOfTheArt',
                        'StateOfTheArt',
                        'Cryptography',
                        'd_3D',
                        'MarketAnalysis',
                        'Internet',
                        'MachineLearning',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[28],
                    },
                ],
            },
            name: 'Bed Bath & Beyond',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Istanbul',
                    country: 'Iraq',
                    postalCode: '54249',
                    streetName: 'Baker Street',
                    streetNumber: '106',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Internet',
                        'Networks',
                        'Cybersecurity',
                        'MarketAnalysis',
                        'Image',
                        'EmbeddedSystems',
                        'WebDev',
                        'Chatbot',
                        'Cybersecurity',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[93],
                    },
                    {
                        id: clients[25],
                    },
                    {
                        id: clients[16],
                    },
                    {
                        id: clients[30],
                    },
                    {
                        id: clients[53],
                    },
                    {
                        id: clients[74],
                    },
                ],
            },
            name: 'Bemis Company',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Pittsburgh',
                    country: 'Canada',
                    postalCode: '10160',
                    streetName: 'Baker Street',
                    streetNumber: '432',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'EmbeddedSystems',
                        'AppDev',
                        'IoT',
                        'Telecommunications',
                        'Telecommunications',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[64],
                    },
                    {
                        id: clients[63],
                    },
                    {
                        id: clients[66],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[97],
                    },
                ],
            },
            name: 'Ballard Power Systems',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Vijayawada',
                    country: 'Saudi Arabia',
                    postalCode: '25354',
                    streetName: 'Unter den Linden',
                    streetNumber: '212 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Image',
                        'd_3D',
                        'Cybersecurity',
                        'Chatbot',
                        'Image',
                        'MarketAnalysis',
                        'IoT',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[93],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[23],
                    },
                    {
                        id: clients[81],
                    },
                ],
            },
            name: 'Swiss Re',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Rajkot',
                    country: 'Estonia',
                    postalCode: '65330',
                    streetName: 'Avenida Paulista',
                    streetNumber: '379',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'MarketAnalysis',
                        'Chatbot',
                        'EmbeddedSystems',
                        'IoT',
                        'Image',
                        'IntelligenceArtificielle',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[44],
                    },
                    {
                        id: clients[96],
                    },
                    {
                        id: clients[10],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[36],
                    },
                ],
            },
            name: 'TDC Group',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Visakhapatnam',
                    country: 'San Marino',
                    postalCode: '51044',
                    streetName: 'Khao San Road',
                    streetNumber: '158',
                },
            },
            companyInfos: {
                create: {
                    domains: ['AppDev'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[47],
                    },
                    {
                        id: clients[18],
                    },
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[22],
                    },
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[31],
                    },
                ],
            },
            name: 'Benetton Group',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Nagpur',
                    country: 'Sierra Leone',
                    postalCode: '07081',
                    streetName: 'Queen Street',
                    streetNumber: '432',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Internet', 'EmbeddedSystems', 'ComputerGraphics', 'Cybersecurity'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[84],
                    },
                    {
                        id: clients[17],
                    },
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[49],
                    },
                    {
                        id: clients[5],
                    },
                ],
            },
            name: 'Stussy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hefei',
                    country: 'Togo',
                    postalCode: '72129',
                    streetName: "King's Road",
                    streetNumber: '138 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[36],
                    },
                ],
            },
            name: 'Paramount Global',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Kyrgyzstan',
                    postalCode: '30107',
                    streetName: 'Yonge Street',
                    streetNumber: '34',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[96],
                    },
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[69],
                    },
                    {
                        id: clients[98],
                    },
                ],
            },
            name: 'Boral Limited',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Amritsar',
                    country: 'France',
                    postalCode: '37301',
                    streetName: 'Las Ramblas',
                    streetNumber: '380',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MachineLearning',
                        'EmbeddedSystems',
                        'ComputerGraphics',
                        'Cybersecurity',
                        'EmbeddedSystems',
                        'Networks',
                        'AppDev',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Irancell',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Mysore',
                    country: 'Dominican Republic',
                    postalCode: '83249',
                    streetName: 'Rodeo Drive',
                    streetNumber: '355',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image', 'IntelligenceArtificielle', 'WebDev', 'ComputerGraphics'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[73],
                    },
                    {
                        id: clients[55],
                    },
                    {
                        id: clients[1],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[31],
                    },
                ],
            },
            name: 'Royal BAM Group',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'Burkina Faso',
                    postalCode: '32200',
                    streetName: 'Market Street',
                    streetNumber: '144',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Networks', 'd_3D', 'AppDev'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[27],
                    },
                    {
                        id: clients[27],
                    },
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[70],
                    },
                    {
                        id: clients[80],
                    },
                ],
            },
            name: 'Bühler',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Bareilly',
                    country: 'Costa Rica',
                    postalCode: '66228',
                    streetName: 'Market Street',
                    streetNumber: '157',
                },
            },
            companyInfos: {
                create: {
                    domains: ['WebDev', 'Cryptography', 'Networks'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[46],
                    },
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[0],
                    },
                ],
            },
            name: 'Vermont Creamery',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Dhanbad',
                    country: 'Sudan',
                    postalCode: '32161',
                    streetName: 'Portobello Road',
                    streetNumber: '445',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'EmbeddedSystems',
                        'ComputerGraphics',
                        'Cryptography',
                        'MobileDev',
                        'MarketAnalysis',
                        'WebDev',
                        'Cybersecurity',
                        'Telecommunications',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[12],
                    },
                    {
                        id: clients[88],
                    },
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[54],
                    },
                    {
                        id: clients[70],
                    },
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[21],
                    },
                ],
            },
            name: 'Häagen-Dazs',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Alexandria',
                    country: 'Bangladesh',
                    postalCode: '43322',
                    streetName: 'Via del Corso',
                    streetNumber: '222',
                },
            },
            companyInfos: {
                create: {
                    domains: ['DataScience'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[41],
                    },
                ],
            },
            name: 'Van Houtte',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Cairo',
                    country: 'Uruguay',
                    postalCode: '33030',
                    streetName: 'Champs Elysees',
                    streetNumber: '160',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Chatbot',
                        'MarketAnalysis',
                        'DataScience',
                        'Cryptography',
                        'Cryptography',
                        'Telecommunications',
                        'MachineLearning',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'BEML Limited',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Osaka',
                    country: 'Eswatini',
                    postalCode: '73092',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '15',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Networks', 'Cryptography', 'MarketAnalysis', 'Image', 'WebDev'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[83],
                    },
                    {
                        id: clients[50],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[86],
                    },
                ],
            },
            name: 'Pop TV',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Guyana',
                    postalCode: '40236',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '381',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Cybersecurity', 'd_3D', 'MachineLearning'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'ViewSonic',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Luanda',
                    country: 'South Korea',
                    postalCode: '68053',
                    streetName: 'Wall Street',
                    streetNumber: '333 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[16],
                    },
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[9],
                    },
                    {
                        id: clients[76],
                    },
                ],
            },
            name: 'Target',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Newcastle',
                    country: 'Italy',
                    postalCode: '84282',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '81',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'DataScience',
                        'Cryptography',
                        'Cryptography',
                        'IntelligenceArtificielle',
                        'StateOfTheArt',
                        'IntelligenceArtificielle',
                        'Cybersecurity',
                        'DataScience',
                        'Image',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[81],
                    },
                    {
                        id: clients[87],
                    },
                ],
            },
            name: 'PepsiCo',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Nagpur',
                    country: 'Tanzania',
                    postalCode: '76402',
                    streetName: 'Orchard Road',
                    streetNumber: '393 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'MobileDev',
                        'EmbeddedSystems',
                        'WebDev',
                        'IntelligenceArtificielle',
                        'Internet',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[91],
                    },
                ],
            },
            name: 'Orvis',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Mexico City',
                    country: 'Mongolia',
                    postalCode: '58081',
                    streetName: 'Oxford Street',
                    streetNumber: '65 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'Image',
                        'IntelligenceArtificielle',
                        'ComputerVision',
                        'ComputerVision',
                        'IoT',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Swissquote',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Bangalore',
                    country: 'Colombia',
                    postalCode: '56404',
                    streetName: 'Queen Street',
                    streetNumber: '431',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[88],
                    },
                    {
                        id: clients[58],
                    },
                    {
                        id: clients[31],
                    },
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[12],
                    },
                ],
            },
            name: 'Hidroeléctrica Nacional',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Beijing',
                    country: 'Rwanda',
                    postalCode: '74473',
                    streetName: 'Via del Corso',
                    streetNumber: '210',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MachineLearning', 'Image', 'DataScience', 'Image', 'MobileDev'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[43],
                    },
                    {
                        id: clients[16],
                    },
                    {
                        id: clients[66],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[51],
                    },
                ],
            },
            name: 'Italgas',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Moradabad',
                    country: 'Palau',
                    postalCode: '12311',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '457',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'ComputerVision',
                        'DataScience',
                        'ComputerGraphics',
                        'Internet',
                        'Networks',
                        'DataScience',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[70],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[31],
                    },
                    {
                        id: clients[44],
                    },
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[64],
                    },
                    {
                        id: clients[35],
                    },
                    {
                        id: clients[81],
                    },
                ],
            },
            name: 'Boomerang',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hefei',
                    country: 'Guinea',
                    postalCode: '50053',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '232',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Cryptography',
                        'Cybersecurity',
                        'MobileDev',
                        'Image',
                        'MachineLearning',
                        'd_3D',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[50],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[73],
                    },
                ],
            },
            name: 'Ecko Unlimited',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Pittsburgh',
                    country: 'Belarus',
                    postalCode: '54082',
                    streetName: 'Unter den Linden',
                    streetNumber: '106',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'WebDev',
                        'MobileDev',
                        'Image',
                        'StateOfTheArt',
                        'DataScience',
                        'Chatbot',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[32],
                    },
                ],
            },
            name: 'Ausgrid',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Oslo',
                    country: 'Trinidad and Tobago',
                    postalCode: '08065',
                    streetName: 'Nanjing Road',
                    streetNumber: '86 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['DataScience', 'd_3D'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[30],
                    },
                    {
                        id: clients[81],
                    },
                    {
                        id: clients[66],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[31],
                    },
                ],
            },
            name: 'Pagani',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Baghdad',
                    country: 'Iran',
                    postalCode: '08350',
                    streetName: 'La Rambla',
                    streetNumber: '180',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'MTN Rwanda',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Cameroon',
                    postalCode: '78004',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '414',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Cryptography',
                        'MobileDev',
                        'AppDev',
                        'WebDev',
                        'MachineLearning',
                        'DataScience',
                        'Cryptography',
                        'MachineLearning',
                        'MarketAnalysis',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[31],
                    },
                    {
                        id: clients[55],
                    },
                ],
            },
            name: "Land O'Lakes",
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Guayaquil',
                    country: 'Honduras',
                    postalCode: '11416',
                    streetName: 'Portobello Road',
                    streetNumber: '490',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'AppDev',
                        'd_3D',
                        'Networks',
                        'ComputerGraphics',
                        'IntelligenceArtificielle',
                        'WebDev',
                        'AppDev',
                        'd_3D',
                        'MachineLearning',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[96],
                    },
                ],
            },
            name: 'Snowflake',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Lahore',
                    country: 'Bahamas',
                    postalCode: '38375',
                    streetName: 'Abbey Road',
                    streetNumber: '289',
                },
            },
            companyInfos: {
                create: {
                    domains: ['EmbeddedSystems'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[60],
                    },
                    {
                        id: clients[42],
                    },
                    {
                        id: clients[13],
                    },
                ],
            },
            name: 'Crate & Barrel',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Shantou',
                    country: 'Cuba',
                    postalCode: '73007',
                    streetName: 'Queen Street',
                    streetNumber: '333',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[42],
                    },
                    {
                        id: clients[69],
                    },
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[69],
                    },
                    {
                        id: clients[1],
                    },
                ],
            },
            name: 'Smartwool',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: "Xi'an",
                    country: 'Eswatini',
                    postalCode: '50228',
                    streetName: 'Queen Street',
                    streetNumber: '45 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Telecommunications',
                        'IoT',
                        'Telecommunications',
                        'StateOfTheArt',
                        'EmbeddedSystems',
                        'MarketAnalysis',
                        'DataScience',
                        'EmbeddedSystems',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[96],
                    },
                    {
                        id: clients[84],
                    },
                    {
                        id: clients[69],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[6],
                    },
                ],
            },
            name: 'Mackage',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hangzhou',
                    country: 'Uruguay',
                    postalCode: '26088',
                    streetName: "King's Road",
                    streetNumber: '226',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Chatbot',
                        'EmbeddedSystems',
                        'Telecommunications',
                        'IoT',
                        'AppDev',
                        'Image',
                        'Cybersecurity',
                        'IntelligenceArtificielle',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[5],
                    },
                    {
                        id: clients[50],
                    },
                    {
                        id: clients[46],
                    },
                    {
                        id: clients[76],
                    },
                ],
            },
            name: 'Roku Channel',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Bristol',
                    country: 'Ireland',
                    postalCode: '56327',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '424',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'WebDev',
                        'Cybersecurity',
                        'ComputerVision',
                        'Networks',
                        'd_3D',
                        'EmbeddedSystems',
                        'StateOfTheArt',
                        'IoT',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[89],
                    },
                    {
                        id: clients[95],
                    },
                ],
            },
            name: 'Endemol Shine Group',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Berlin',
                    country: 'Denmark',
                    postalCode: '43062',
                    streetName: 'La Rambla',
                    streetNumber: '392',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'ComputerVision',
                        'Telecommunications',
                        'MobileDev',
                        'Image',
                        'StateOfTheArt',
                        'IoT',
                        'Image',
                        'EmbeddedSystems',
                        'MarketAnalysis',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Foster + Partners',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Nairobi',
                    country: 'Eswatini',
                    postalCode: '13307',
                    streetName: 'Queen Street',
                    streetNumber: '62',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MarketAnalysis', 'Image', 'ComputerVision', 'StateOfTheArt', 'IoT'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[74],
                    },
                ],
            },
            name: 'Kao Brands',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Palau',
                    postalCode: '33055',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '78 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Chatbot'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[34],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[53],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[5],
                    },
                ],
            },
            name: 'DHL Aviation',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Mali',
                    postalCode: '18113',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '144 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Telecommunications',
                        'd_3D',
                        'IntelligenceArtificielle',
                        'MachineLearning',
                        'Image',
                        'MachineLearning',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[53],
                    },
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[12],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[82],
                    },
                ],
            },
            name: 'Bryte Energy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Riyadh',
                    country: 'Liechtenstein',
                    postalCode: '53415',
                    streetName: 'Champs Elysees',
                    streetNumber: '98 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['WebDev'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[96],
                    },
                    {
                        id: clients[42],
                    },
                    {
                        id: clients[54],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[24],
                    },
                    {
                        id: clients[92],
                    },
                    {
                        id: clients[25],
                    },
                ],
            },
            name: 'Vimicro',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Chittagong',
                    country: 'Solomon Islands',
                    postalCode: '55197',
                    streetName: 'Nanjing Road',
                    streetNumber: '192 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image', 'DataScience', 'MarketAnalysis', 'AppDev'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[86],
                    },
                ],
            },
            name: 'Three Ireland',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Philadelphia',
                    country: 'Sudan',
                    postalCode: '25492',
                    streetName: 'Queen Street',
                    streetNumber: '231',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Cybersecurity',
                        'Cybersecurity',
                        'IoT',
                        'EmbeddedSystems',
                        'MobileDev',
                        'MobileDev',
                        'AppDev',
                        'Telecommunications',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[49],
                    },
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[0],
                    },
                ],
            },
            name: 'Ameriprise Financial',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Johannesburg',
                    country: 'Andorra',
                    postalCode: '82147',
                    streetName: 'Baker Street',
                    streetNumber: '157',
                },
            },
            companyInfos: {
                create: {
                    domains: ['IntelligenceArtificielle', 'ComputerGraphics', 'Networks'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[62],
                    },
                ],
            },
            name: 'Ember Energy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Belize',
                    postalCode: '71011',
                    streetName: 'Lombard Street',
                    streetNumber: '484',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Telecommunications',
                        'Telecommunications',
                        'Telecommunications',
                        'EmbeddedSystems',
                        'Networks',
                        'EmbeddedSystems',
                        'Internet',
                        'MarketAnalysis',
                        'MachineLearning',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Galapagos NV',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Tianjin',
                    country: 'Mauritania',
                    postalCode: '53289',
                    streetName: 'Lombard Street',
                    streetNumber: '90',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Networks'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Dropbox',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Ankara',
                    country: 'Rwanda',
                    postalCode: '39170',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '52 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[35],
                    },
                    {
                        id: clients[34],
                    },
                ],
            },
            name: 'Lotus',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Osaka',
                    country: 'Dominican Republic',
                    postalCode: '43284',
                    streetName: 'Khao San Road',
                    streetNumber: '142',
                },
            },
            companyInfos: {
                create: {
                    domains: ['d_3D'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[40],
                    },
                ],
            },
            name: 'Diamondback Energy',
        },
    });

    companies.push(company!.id);

    return companies;
}
