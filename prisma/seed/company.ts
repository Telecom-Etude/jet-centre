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
random-json -c 100 -f company.json  --before 'company = await db.company.create(' --after $');\n\ncompanies.push(company!.id);\n\n' | sed 's/"STUDYID": \(.*\),/"studyId": studies[\1],/;s/"PERSONID": \(.*\)$/"id": people[\1]/'
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
                    city: 'Oslo',
                    country: 'Senegal',
                    postalCode: '90191',
                    streetName: 'Las Ramblas',
                    streetNumber: '3',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IoT',
                        'EmbeddedSystems',
                        'ComputerGraphics',
                        'd_3D',
                        'MachineLearning',
                        'd_3D',
                        'Internet',
                        'WebDev',
                        'ComputerVision',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Mediaset',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Rangoon',
                    country: 'Saint Kitts and Nevis',
                    postalCode: '31251',
                    streetName: 'Abbey Road',
                    streetNumber: '332',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Image',
                        'MachineLearning',
                        'MachineLearning',
                        'MachineLearning',
                        'Cybersecurity',
                        'MobileDev',
                        'd_3D',
                        'Internet',
                        'WebDev',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[77],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[5],
                    },
                    {
                        id: clients[78],
                    },
                    {
                        id: clients[32],
                    },
                    {
                        id: clients[89],
                    },
                    {
                        id: clients[1],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[4],
                    },
                ],
            },
            name: 'Magenta Telekom',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Cairo',
                    country: 'Barbados',
                    postalCode: '51351',
                    streetName: 'Unter den Linden',
                    streetNumber: '249',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'EmbeddedSystems',
                        'AppDev',
                        'Internet',
                        'ComputerGraphics',
                        'DataScience',
                        'Internet',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[24],
                    },
                    {
                        id: clients[83],
                    },
                ],
            },
            name: 'Postal Savings Bank of China',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Suriname',
                    postalCode: '72176',
                    streetName: 'Ginza',
                    streetNumber: '45',
                },
            },
            companyInfos: {
                create: {
                    domains: ['ComputerGraphics', 'AppDev'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[23],
                    },
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[25],
                    },
                ],
            },
            name: 'Abengoa',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'North Korea',
                    postalCode: '21225',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '268',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IoT',
                        'Cybersecurity',
                        'Cryptography',
                        'ComputerGraphics',
                        'StateOfTheArt',
                        'WebDev',
                        'IoT',
                        'MarketAnalysis',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[96],
                    },
                ],
            },
            name: 'Turkish Airlines Cargo',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Guadalajara',
                    country: 'Turkmenistan',
                    postalCode: '93395',
                    streetName: 'Wall Street',
                    streetNumber: '474',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'Chatbot',
                        'AppDev',
                        'WebDev',
                        'Chatbot',
                        'MobileDev',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[55],
                    },
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[17],
                    },
                    {
                        id: clients[71],
                    },
                ],
            },
            name: 'Freedom Mobile Canada',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Vasai-Virar',
                    country: 'Kiribati',
                    postalCode: '86079',
                    streetName: 'Lombard Street',
                    streetNumber: '392',
                },
            },
            companyInfos: {
                create: {
                    domains: ['d_3D', 'Networks', 'DataScience', 'd_3D', 'Chatbot', 'Image'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[27],
                    },
                    {
                        id: clients[89],
                    },
                    {
                        id: clients[55],
                    },
                    {
                        id: clients[17],
                    },
                    {
                        id: clients[80],
                    },
                    {
                        id: clients[60],
                    },
                    {
                        id: clients[10],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[5],
                    },
                ],
            },
            name: 'Saks Fifth Avenue',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Lagos',
                    country: 'Saint Kitts and Nevis',
                    postalCode: '61456',
                    streetName: 'Orchard Road',
                    streetNumber: '42 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'ComputerGraphics',
                        'MachineLearning',
                        'AppDev',
                        'Telecommunications',
                        'MachineLearning',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[7],
                    },
                ],
            },
            name: 'Tele2 Netherlands',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Malaysia',
                    postalCode: '11321',
                    streetName: 'Nanjing Road',
                    streetNumber: '465 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Telecommunications', 'Internet', 'IntelligenceArtificielle', 'd_3D'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[15],
                    },
                ],
            },
            name: 'Apex Clean Energy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hangzhou',
                    country: 'Sri Lanka',
                    postalCode: '15288',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '335',
                },
            },
            companyInfos: {
                create: {
                    domains: ['ComputerGraphics', 'WebDev', 'IoT'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[62],
                    },
                    {
                        id: clients[76],
                    },
                ],
            },
            name: 'Virgin Media UK',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Nagoya',
                    country: 'Eswatini',
                    postalCode: '24430',
                    streetName: 'Portobello Road',
                    streetNumber: '429',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IntelligenceArtificielle',
                        'IntelligenceArtificielle',
                        'MobileDev',
                        'WebDev',
                        'Chatbot',
                        'Internet',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[74],
                    },
                    {
                        id: clients[24],
                    },
                    {
                        id: clients[73],
                    },
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[39],
                    },
                    {
                        id: clients[73],
                    },
                ],
            },
            name: 'ArcelorMittal',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Foshan',
                    country: 'Botswana',
                    postalCode: '09133',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '380 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'ComputerGraphics',
                        'DataScience',
                        'StateOfTheArt',
                        'IoT',
                        'Networks',
                        'EmbeddedSystems',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[64],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[35],
                    },
                ],
            },
            name: 'Beijer Ref',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Salvador',
                    country: 'Iran',
                    postalCode: '08420',
                    streetName: 'Yonge Street',
                    streetNumber: '150 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MobileDev',
                        'AppDev',
                        'Internet',
                        'Image',
                        'StateOfTheArt',
                        'Telecommunications',
                        'DataScience',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[52],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[23],
                    },
                ],
            },
            name: 'Strellson',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Chongqing',
                    country: 'Philippines',
                    postalCode: '68241',
                    streetName: 'Avenida Paulista',
                    streetNumber: '252',
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
                        id: clients[92],
                    },
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[11],
                    },
                ],
            },
            name: 'Pegasus Airlines',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Kinshasa',
                    country: 'Mali',
                    postalCode: '19143',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '176',
                },
            },
            companyInfos: {
                create: {
                    domains: ['DataScience'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[42],
                    },
                    {
                        id: clients[53],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[58],
                    },
                    {
                        id: clients[29],
                    },
                ],
            },
            name: "MTN Côte d'Ivoire",
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Srinagar',
                    country: 'Cuba',
                    postalCode: '86371',
                    streetName: 'Baker Street',
                    streetNumber: '178',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'AppDev',
                        'DataScience',
                        'Cryptography',
                        'MobileDev',
                        'ComputerGraphics',
                        'Networks',
                        'MobileDev',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[47],
                    },
                ],
            },
            name: 'Marine Serre',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Addis Ababa',
                    country: 'Georgia',
                    postalCode: '16267',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '346',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Telecommunications'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[40],
                    },
                    {
                        id: clients[93],
                    },
                ],
            },
            name: 'Monsoon',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Gwalior',
                    country: 'Lesotho',
                    postalCode: '68395',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '130',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Chatbot',
                        'ComputerVision',
                        'AppDev',
                        'StateOfTheArt',
                        'Cryptography',
                        'Image',
                        'Telecommunications',
                        'MarketAnalysis',
                        'Image',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[1],
                    },
                ],
            },
            name: 'Vitasoy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Mexico City',
                    country: 'Iceland',
                    postalCode: '18455',
                    streetName: 'Lombard Street',
                    streetNumber: '228',
                },
            },
            companyInfos: {
                create: {
                    domains: ['AppDev', 'AppDev', 'IoT', 'IoT'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[41],
                    },
                ],
            },
            name: "McDonald's",
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Aurangabad',
                    country: 'Paraguay',
                    postalCode: '65349',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '231',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Image',
                        'IntelligenceArtificielle',
                        'MachineLearning',
                        'DataScience',
                        'IoT',
                        'ComputerVision',
                        'EmbeddedSystems',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[30],
                    },
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[58],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[81],
                    },
                    {
                        id: clients[48],
                    },
                ],
            },
            name: 'EgyptAir',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Mira-Bhayandar',
                    country: 'Russia',
                    postalCode: '40423',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '453',
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
                        id: clients[17],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[60],
                    },
                ],
            },
            name: 'Gant',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Vienna',
                    country: 'Bolivia',
                    postalCode: '42255',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '143',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'DataScience',
                        'DataScience',
                        'ComputerGraphics',
                        'Image',
                        'Telecommunications',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[49],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[36],
                    },
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[66],
                    },
                ],
            },
            name: 'BlackBerry',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Guangzhou',
                    country: 'Colombia',
                    postalCode: '67365',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '175',
                },
            },
            companyInfos: {
                create: {
                    domains: ['AppDev', 'IoT'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'United Bank for Africa',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Zhengzhou',
                    country: 'Chad',
                    postalCode: '06121',
                    streetName: 'Orchard Road',
                    streetNumber: '215',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IoT',
                        'StateOfTheArt',
                        'Internet',
                        'DataScience',
                        'IntelligenceArtificielle',
                        'MobileDev',
                        'WebDev',
                        'AppDev',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[64],
                    },
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[93],
                    },
                ],
            },
            name: 'Plantronics',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Dominican Republic',
                    postalCode: '18069',
                    streetName: 'Avenida Paulista',
                    streetNumber: '454',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Internet',
                        'Cybersecurity',
                        'Chatbot',
                        'Networks',
                        'MachineLearning',
                        'd_3D',
                        'Networks',
                        'IntelligenceArtificielle',
                        'MobileDev',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[49],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[31],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[10],
                    },
                    {
                        id: clients[38],
                    },
                ],
            },
            name: 'Playa Hotels & Resorts',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Karachi',
                    country: 'Saint Lucia',
                    postalCode: '27350',
                    streetName: 'Baker Street',
                    streetNumber: '28 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[16],
                    },
                    {
                        id: clients[54],
                    },
                    {
                        id: clients[64],
                    },
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[85],
                    },
                ],
            },
            name: 'Louis Dreyfus Company',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Jinan',
                    country: 'Denmark',
                    postalCode: '08326',
                    streetName: 'Market Street',
                    streetNumber: '324',
                },
            },
            companyInfos: {
                create: {
                    domains: ['ComputerVision', 'AppDev', 'Image', 'AppDev'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[84],
                    },
                    {
                        id: clients[90],
                    },
                    {
                        id: clients[52],
                    },
                    {
                        id: clients[84],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[32],
                    },
                    {
                        id: clients[63],
                    },
                ],
            },
            name: 'Free People',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Berlin',
                    country: 'Kuwait',
                    postalCode: '64114',
                    streetName: 'Broadway',
                    streetNumber: '82',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image', 'AppDev', 'Image'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[31],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[63],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[10],
                    },
                    {
                        id: clients[20],
                    },
                ],
            },
            name: 'Tele Greenland',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Thailand',
                    postalCode: '16004',
                    streetName: 'Abbey Road',
                    streetNumber: '343 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Chatbot', 'Cryptography'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[32],
                    },
                ],
            },
            name: 'Rue La La',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Ethiopia',
                    postalCode: '16440',
                    streetName: 'Via del Corso',
                    streetNumber: '77',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IntelligenceArtificielle',
                        'AppDev',
                        'DataScience',
                        'IoT',
                        'AppDev',
                        'ComputerGraphics',
                        'Cryptography',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[0],
                    },
                    {
                        id: clients[3],
                    },
                    {
                        id: clients[52],
                    },
                    {
                        id: clients[91],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[3],
                    },
                    {
                        id: clients[64],
                    },
                    {
                        id: clients[90],
                    },
                ],
            },
            name: 'Maserati',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Cape Town',
                    country: 'Eswatini',
                    postalCode: '36063',
                    streetName: 'Las Ramblas',
                    streetNumber: '491',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'StateOfTheArt',
                        'AppDev',
                        'Image',
                        'StateOfTheArt',
                        'MachineLearning',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[97],
                    },
                    {
                        id: clients[99],
                    },
                ],
            },
            name: 'Nexttel',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Atlanta',
                    country: 'Samoa',
                    postalCode: '30384',
                    streetName: 'Las Ramblas',
                    streetNumber: '498',
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
                        id: clients[77],
                    },
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[18],
                    },
                    {
                        id: clients[10],
                    },
                ],
            },
            name: 'Skanska',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Jabalpur',
                    country: 'Lithuania',
                    postalCode: '34223',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '80 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[55],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[40],
                    },
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[22],
                    },
                ],
            },
            name: 'BioCryst Pharmaceuticals',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Aurangabad',
                    country: 'Benin',
                    postalCode: '81160',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '275 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Telecommunications',
                        'Image',
                        'EmbeddedSystems',
                        'IoT',
                        'd_3D',
                        'd_3D',
                        'IntelligenceArtificielle',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[24],
                    },
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[81],
                    },
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[31],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[37],
                    },
                ],
            },
            name: 'Eli Lilly and Company',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Thane',
                    country: 'Bulgaria',
                    postalCode: '31296',
                    streetName: 'Champs Elysees',
                    streetNumber: '76',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Networks', 'Image', 'Cryptography', 'WebDev', 'DataScience'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[36],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[57],
                    },
                ],
            },
            name: 'Stryker Corporation',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Istanbul',
                    country: 'Luxembourg',
                    postalCode: '63105',
                    streetName: 'Las Ramblas',
                    streetNumber: '443',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Internet',
                        'IntelligenceArtificielle',
                        'Cybersecurity',
                        'ComputerVision',
                        'DataScience',
                        'WebDev',
                        'd_3D',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'CIBC',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Cardiff',
                    country: 'Russia',
                    postalCode: '41102',
                    streetName: 'Broadway',
                    streetNumber: '475',
                },
            },
            companyInfos: {
                create: {
                    domains: ['d_3D', 'd_3D', 'StateOfTheArt', 'MobileDev', 'MachineLearning'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[12],
                    },
                    {
                        id: clients[6],
                    },
                ],
            },
            name: 'Panda Security',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Thane',
                    country: 'Kyrgyzstan',
                    postalCode: '27031',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '109',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'EmbeddedSystems',
                        'MarketAnalysis',
                        'MobileDev',
                        'MarketAnalysis',
                        'EmbeddedSystems',
                        'MarketAnalysis',
                        'Telecommunications',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[35],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[34],
                    },
                    {
                        id: clients[40],
                    },
                    {
                        id: clients[89],
                    },
                ],
            },
            name: 'Alfa Laval',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hamburg',
                    country: 'Mauritania',
                    postalCode: '54072',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '81',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MobileDev', 'EmbeddedSystems', 'Networks'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[2],
                    },
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[47],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[82],
                    },
                ],
            },
            name: 'Shimano Apparel',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Tiruchirappalli',
                    country: 'Saint Lucia',
                    postalCode: '95084',
                    streetName: 'Market Street',
                    streetNumber: '275',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Telecommunications', 'Internet', 'Chatbot'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[96],
                    },
                    {
                        id: clients[69],
                    },
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[12],
                    },
                    {
                        id: clients[96],
                    },
                ],
            },
            name: 'MilliporeSigma',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Lagos',
                    country: 'Chile',
                    postalCode: '80416',
                    streetName: 'Beale Street',
                    streetNumber: '192',
                },
            },
            companyInfos: {
                create: {
                    domains: ['EmbeddedSystems', 'StateOfTheArt'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[35],
                    },
                    {
                        id: clients[60],
                    },
                    {
                        id: clients[97],
                    },
                    {
                        id: clients[19],
                    },
                ],
            },
            name: 'Renaissance Hotels',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Tiruchirappalli',
                    country: 'Guatemala',
                    postalCode: '61202',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '112',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IntelligenceArtificielle',
                        'Telecommunications',
                        'ComputerVision',
                        'MachineLearning',
                        'd_3D',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[63],
                    },
                    {
                        id: clients[1],
                    },
                    {
                        id: clients[43],
                    },
                    {
                        id: clients[66],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[51],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[17],
                    },
                ],
            },
            name: 'Sony Interactive Entertainment',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hubli-Dharwad',
                    country: 'Cameroon',
                    postalCode: '41391',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '156 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'DataScience',
                        'AppDev',
                        'WebDev',
                        'd_3D',
                        'Cybersecurity',
                        'WebDev',
                        'MobileDev',
                        'MachineLearning',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[11],
                    },
                    {
                        id: clients[32],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[89],
                    },
                ],
            },
            name: 'Dr Pepper Snapple Group',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Jalandhar',
                    country: 'Saudi Arabia',
                    postalCode: '35407',
                    streetName: 'La Rambla',
                    streetNumber: '11 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['WebDev', 'MachineLearning', 'Networks'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[13],
                    },
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[62],
                    },
                    {
                        id: clients[54],
                    },
                    {
                        id: clients[8],
                    },
                ],
            },
            name: 'Chalair Aviation',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Chongqing',
                    country: 'Malaysia',
                    postalCode: '16209',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '168',
                },
            },
            companyInfos: {
                create: {
                    domains: ['IoT', 'Internet'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[33],
                    },
                ],
            },
            name: 'Mitsubishi Heavy Industries Aerospace',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Solapur',
                    country: 'Gabon',
                    postalCode: '64015',
                    streetName: 'Rodeo Drive',
                    streetNumber: '435',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'AppDev',
                        'Networks',
                        'ComputerGraphics',
                        'IntelligenceArtificielle',
                        'MobileDev',
                        'MobileDev',
                        'StateOfTheArt',
                        'IntelligenceArtificielle',
                        'ComputerVision',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[73],
                    },
                    {
                        id: clients[42],
                    },
                    {
                        id: clients[1],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[90],
                    },
                ],
            },
            name: 'Grifols',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Berlin',
                    country: 'Poland',
                    postalCode: '89228',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '227',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IntelligenceArtificielle',
                        'IntelligenceArtificielle',
                        'MobileDev',
                        'IntelligenceArtificielle',
                        'Cryptography',
                        'Telecommunications',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[16],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[63],
                    },
                    {
                        id: clients[99],
                    },
                ],
            },
            name: 'Kuwait Airways',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Vadodara',
                    country: 'Mongolia',
                    postalCode: '44030',
                    streetName: 'Portobello Road',
                    streetNumber: '454 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['StateOfTheArt'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[47],
                    },
                ],
            },
            name: 'Bluebird Airways',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Indore',
                    country: 'Togo',
                    postalCode: '56183',
                    streetName: 'Portobello Road',
                    streetNumber: '257',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'DataScience',
                        'WebDev',
                        'Internet',
                        'IntelligenceArtificielle',
                        'AppDev',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[0],
                    },
                ],
            },
            name: 'Caledonian Airways',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Maldives',
                    postalCode: '16208',
                    streetName: 'Avenida Paulista',
                    streetNumber: '461',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IntelligenceArtificielle',
                        'Telecommunications',
                        'Internet',
                        'MarketAnalysis',
                        'Image',
                        'DataScience',
                        'WebDev',
                        'WebDev',
                        'Telecommunications',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[36],
                    },
                    {
                        id: clients[98],
                    },
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[39],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[62],
                    },
                ],
            },
            name: 'Laurentian Bank of Canada',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Naples',
                    country: 'Poland',
                    postalCode: '95392',
                    streetName: 'Ginza',
                    streetNumber: '394',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Chatbot', 'Internet', 'IoT', 'MarketAnalysis'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[5],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[47],
                    },
                ],
            },
            name: 'AO World',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Hong Kong',
                    country: 'Botswana',
                    postalCode: '77415',
                    streetName: 'Gran Via',
                    streetNumber: '229',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MobileDev'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[92],
                    },
                    {
                        id: clients[85],
                    },
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[56],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[29],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[83],
                    },
                ],
            },
            name: 'Irancell Iran',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Antigua and Barbuda',
                    postalCode: '41145',
                    streetName: 'Orchard Road',
                    streetNumber: '420',
                },
            },
            companyInfos: {
                create: {
                    domains: ['ComputerGraphics', 'Internet', 'MobileDev'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[23],
                    },
                    {
                        id: clients[98],
                    },
                ],
            },
            name: 'LUX* Resorts & Hotels',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Cologne',
                    country: 'Burundi',
                    postalCode: '61024',
                    streetName: 'Unter den Linden',
                    streetNumber: '415 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MachineLearning', 'Internet', 'DataScience', 'IoT'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[40],
                    },
                    {
                        id: clients[93],
                    },
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[92],
                    },
                    {
                        id: clients[44],
                    },
                    {
                        id: clients[97],
                    },
                ],
            },
            name: 'Telenet',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Dalian',
                    country: 'Netherlands',
                    postalCode: '22030',
                    streetName: 'Wall Street',
                    streetNumber: '197 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'AppDev',
                        'MarketAnalysis',
                        'StateOfTheArt',
                        'ComputerGraphics',
                        'Chatbot',
                        'Cybersecurity',
                        'Internet',
                        'Telecommunications',
                        'AppDev',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[81],
                    },
                    {
                        id: clients[66],
                    },
                ],
            },
            name: 'Brookstone',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Riyadh',
                    country: 'Benin',
                    postalCode: '29355',
                    streetName: 'Nanjing Road',
                    streetNumber: '396',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'WebDev',
                        'DataScience',
                        'IntelligenceArtificielle',
                        'Internet',
                        'MarketAnalysis',
                        'AppDev',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[1],
                    },
                ],
            },
            name: 'Vudu',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Cairo',
                    country: 'Mauritania',
                    postalCode: '64290',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '168',
                },
            },
            companyInfos: {
                create: {
                    domains: ['WebDev', 'ComputerVision', 'd_3D', 'DataScience', 'IoT'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[23],
                    },
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[89],
                    },
                    {
                        id: clients[97],
                    },
                ],
            },
            name: 'C Spire USA',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Bangkok',
                    country: 'Israel',
                    postalCode: '58213',
                    streetName: 'Via del Corso',
                    streetNumber: '338 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'EmbeddedSystems',
                        'Networks',
                        'EmbeddedSystems',
                        'MobileDev',
                        'IoT',
                        'Cryptography',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[41],
                    },
                    {
                        id: clients[29],
                    },
                    {
                        id: clients[24],
                    },
                    {
                        id: clients[9],
                    },
                    {
                        id: clients[93],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[78],
                    },
                    {
                        id: clients[37],
                    },
                ],
            },
            name: 'Bulgari Hotels & Resorts',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Paris',
                    country: 'Cyprus',
                    postalCode: '44108',
                    streetName: 'Fifth Avenue',
                    streetNumber: '28',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MachineLearning', 'd_3D', 'Cybersecurity'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[30],
                    },
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[44],
                    },
                    {
                        id: clients[82],
                    },
                ],
            },
            name: 'Van Lanschot Kempen',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Guangzhou',
                    country: 'Croatia',
                    postalCode: '87497',
                    streetName: 'Avenida Paulista',
                    streetNumber: '2',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Chatbot',
                        'DataScience',
                        'DataScience',
                        'Cybersecurity',
                        'Cryptography',
                        'Cryptography',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Bonobos',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Marseille',
                    country: 'Myanmar',
                    postalCode: '49419',
                    streetName: 'Portobello Road',
                    streetNumber: '483',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image', 'Telecommunications'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[11],
                    },
                    {
                        id: clients[49],
                    },
                    {
                        id: clients[22],
                    },
                    {
                        id: clients[89],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[88],
                    },
                ],
            },
            name: 'Telecel Malawi',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Madurai',
                    country: 'Pakistan',
                    postalCode: '93231',
                    streetName: 'Champs Elysees',
                    streetNumber: '218',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'EmbeddedSystems',
                        'ComputerVision',
                        'MobileDev',
                        'MachineLearning',
                        'StateOfTheArt',
                        'Networks',
                        'MobileDev',
                        'Networks',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[83],
                    },
                ],
            },
            name: 'PewDiePie',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Aligarh',
                    country: 'Kuwait',
                    postalCode: '93245',
                    streetName: 'Wall Street',
                    streetNumber: '73',
                },
            },
            companyInfos: {
                create: {
                    domains: ['WebDev', 'MachineLearning', 'MarketAnalysis'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Indra Energy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Aurangabad',
                    country: 'Hungary',
                    postalCode: '66040',
                    streetName: 'Queen Street',
                    streetNumber: '121 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['MarketAnalysis', 'Image'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[74],
                    },
                    {
                        id: clients[17],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[63],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[84],
                    },
                ],
            },
            name: 'Sunny Delight',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Tehran',
                    country: 'Cyprus',
                    postalCode: '89436',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '276',
                },
            },
            companyInfos: {
                create: {
                    domains: ['DataScience', 'd_3D', 'MarketAnalysis'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Evisu',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Eswatini',
                    postalCode: '56465',
                    streetName: 'Abbey Road',
                    streetNumber: '104',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Cryptography', 'MobileDev', 'WebDev', 'Cybersecurity'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[55],
                    },
                    {
                        id: clients[47],
                    },
                ],
            },
            name: 'Capitec Bank',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Ecuador',
                    postalCode: '68490',
                    streetName: 'Orchard Road',
                    streetNumber: '281',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'StateOfTheArt',
                        'Chatbot',
                        'Cryptography',
                        'MachineLearning',
                        'MarketAnalysis',
                        'EmbeddedSystems',
                        'MachineLearning',
                        'MachineLearning',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[14],
                    },
                    {
                        id: clients[48],
                    },
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[34],
                    },
                    {
                        id: clients[3],
                    },
                    {
                        id: clients[73],
                    },
                ],
            },
            name: 'Safran',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'Lebanon',
                    postalCode: '43462',
                    streetName: 'Rodeo Drive',
                    streetNumber: '379',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Telecommunications', 'MachineLearning'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[0],
                    },
                    {
                        id: clients[18],
                    },
                    {
                        id: clients[19],
                    },
                    {
                        id: clients[63],
                    },
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[68],
                    },
                    {
                        id: clients[35],
                    },
                    {
                        id: clients[86],
                    },
                ],
            },
            name: 'Hostess Brands',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Alexandria',
                    country: 'Armenia',
                    postalCode: '31362',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '481',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MachineLearning',
                        'Cybersecurity',
                        'IntelligenceArtificielle',
                        'Cybersecurity',
                        'Internet',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[1],
                    },
                    {
                        id: clients[29],
                    },
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[16],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[10],
                    },
                ],
            },
            name: 'Hindustan Petroleum Corporation Limited',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Istanbul',
                    country: 'Holy See',
                    postalCode: '36089',
                    streetName: 'Via del Corso',
                    streetNumber: '254 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IoT',
                        'ComputerGraphics',
                        'Telecommunications',
                        'ComputerGraphics',
                        'Internet',
                        'Chatbot',
                        'EmbeddedSystems',
                        'AppDev',
                        'DataScience',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[5],
                    },
                    {
                        id: clients[43],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[43],
                    },
                    {
                        id: clients[41],
                    },
                ],
            },
            name: 'Incotex',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Mexico City',
                    country: 'Canada',
                    postalCode: '33226',
                    streetName: 'La Rambla',
                    streetNumber: '237 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'AppDev',
                        'AppDev',
                        'AppDev',
                        'WebDev',
                        'EmbeddedSystems',
                        'MachineLearning',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[9],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[74],
                    },
                    {
                        id: clients[91],
                    },
                    {
                        id: clients[9],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[49],
                    },
                ],
            },
            name: 'EVGA',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Lisbon',
                    country: 'Nigeria',
                    postalCode: '92424',
                    streetName: 'Bourbon Street',
                    streetNumber: '269',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Cybersecurity',
                        'ComputerVision',
                        'Internet',
                        'ComputerGraphics',
                        'EmbeddedSystems',
                        'DataScience',
                        'Networks',
                        'Telecommunications',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[59],
                    },
                    {
                        id: clients[11],
                    },
                ],
            },
            name: 'Honeywell',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Solapur',
                    country: 'United Arab Emirates',
                    postalCode: '33034',
                    streetName: 'Oxford Street',
                    streetNumber: '228',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image', 'AppDev', 'Networks'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'McCormick & Company',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Dar es Salaam',
                    country: 'Philippines',
                    postalCode: '65266',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '431 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['ComputerVision', 'Cryptography', 'MachineLearning', 'Cybersecurity'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[61],
                    },
                    {
                        id: clients[0],
                    },
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[3],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[37],
                    },
                    {
                        id: clients[77],
                    },
                    {
                        id: clients[21],
                    },
                    {
                        id: clients[2],
                    },
                ],
            },
            name: 'Tele2',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Chad',
                    postalCode: '04057',
                    streetName: 'La Rambla',
                    streetNumber: '303',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MobileDev',
                        'Internet',
                        'MarketAnalysis',
                        'Chatbot',
                        'MobileDev',
                        'IntelligenceArtificielle',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[53],
                    },
                    {
                        id: clients[70],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[21],
                    },
                ],
            },
            name: 'Seven & i Holdings',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Syria',
                    postalCode: '40489',
                    streetName: 'Queen Street',
                    streetNumber: '35',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'AppDev',
                        'Cybersecurity',
                        'Internet',
                        'AppDev',
                        'WebDev',
                        'IntelligenceArtificielle',
                        'DataScience',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'National Oilwell Varco',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Oslo',
                    country: 'Venezuela',
                    postalCode: '42231',
                    streetName: 'Gran Via',
                    streetNumber: '94',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'ComputerVision',
                        'Chatbot',
                        'Telecommunications',
                        'MarketAnalysis',
                        'Cryptography',
                        'ComputerGraphics',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[71],
                    },
                    {
                        id: clients[8],
                    },
                ],
            },
            name: 'Mahou San Miguel',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Addis Ababa',
                    country: 'Eritrea',
                    postalCode: '29305',
                    streetName: 'Champs Elysees',
                    streetNumber: '389',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Cybersecurity', 'ComputerGraphics', 'Cryptography'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[43],
                    },
                    {
                        id: clients[92],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[65],
                    },
                    {
                        id: clients[73],
                    },
                    {
                        id: clients[36],
                    },
                ],
            },
            name: 'Oncosec Medical',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Naples',
                    country: 'Honduras',
                    postalCode: '64401',
                    streetName: 'Abbey Road',
                    streetNumber: '163 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['IntelligenceArtificielle'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[19],
                    },
                ],
            },
            name: 'Global Payments',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Bahamas',
                    postalCode: '09491',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '301',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Telecommunications',
                        'WebDev',
                        'Telecommunications',
                        'IoT',
                        'd_3D',
                        'IoT',
                        'StateOfTheArt',
                        'MarketAnalysis',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[36],
                    },
                    {
                        id: clients[10],
                    },
                ],
            },
            name: 'Heineken N.V.',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Mexico City',
                    country: 'Mongolia',
                    postalCode: '29284',
                    streetName: 'Unter den Linden',
                    streetNumber: '70 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Image',
                        'Cryptography',
                        'ComputerVision',
                        'EmbeddedSystems',
                        'Internet',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[25],
                    },
                    {
                        id: clients[49],
                    },
                    {
                        id: clients[22],
                    },
                    {
                        id: clients[80],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[15],
                    },
                    {
                        id: clients[14],
                    },
                ],
            },
            name: 'MediaTek',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Porto Alegre',
                    country: 'Democratic Republic of the Congo',
                    postalCode: '41096',
                    streetName: 'Gran Via',
                    streetNumber: '35 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'd_3D',
                        'MachineLearning',
                        'AppDev',
                        'EmbeddedSystems',
                        'd_3D',
                        'MachineLearning',
                        'MobileDev',
                        'ComputerVision',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'CitizenM',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Iraq',
                    postalCode: '25179',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '482 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Networks'],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Slack',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Dallas',
                    country: 'New Zealand',
                    postalCode: '12364',
                    streetName: "King's Road",
                    streetNumber: '322',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Internet',
                        'ComputerVision',
                        'Image',
                        'AppDev',
                        'DataScience',
                        'Networks',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[32],
                    },
                    {
                        id: clients[86],
                    },
                    {
                        id: clients[75],
                    },
                    {
                        id: clients[92],
                    },
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[42],
                    },
                    {
                        id: clients[25],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[93],
                    },
                ],
            },
            name: 'Alinta Energy',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Paris',
                    country: 'Romania',
                    postalCode: '14095',
                    streetName: 'Via del Corso',
                    streetNumber: '162 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'Chatbot',
                        'StateOfTheArt',
                        'IntelligenceArtificielle',
                        'ComputerGraphics',
                        'd_3D',
                        'MobileDev',
                        'StateOfTheArt',
                        'AppDev',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[3],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[32],
                    },
                    {
                        id: clients[13],
                    },
                ],
            },
            name: 'Bancolombia',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Amritsar',
                    country: 'Lithuania',
                    postalCode: '80166',
                    streetName: 'Rodeo Drive',
                    streetNumber: '269 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Internet', 'Chatbot', 'StateOfTheArt', 'IoT'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[77],
                    },
                    {
                        id: clients[1],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[43],
                    },
                ],
            },
            name: 'Mobily',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Belo Horizonte',
                    country: 'India',
                    postalCode: '83216',
                    streetName: 'Ginza',
                    streetNumber: '248',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'DataScience',
                        'MachineLearning',
                        'Cybersecurity',
                        'Cybersecurity',
                        'MobileDev',
                        'ComputerGraphics',
                        'Image',
                        'Chatbot',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[35],
                    },
                    {
                        id: clients[78],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[5],
                    },
                    {
                        id: clients[0],
                    },
                    {
                        id: clients[38],
                    },
                    {
                        id: clients[18],
                    },
                ],
            },
            name: 'Vodacom DRC',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Zambia',
                    postalCode: '18065',
                    streetName: 'La Rambla',
                    streetNumber: '490',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MobileDev',
                        'IntelligenceArtificielle',
                        'MarketAnalysis',
                        'DataScience',
                        'DataScience',
                        'Image',
                        'EmbeddedSystems',
                        'IntelligenceArtificielle',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[40],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[31],
                    },
                ],
            },
            name: 'Don Quijote',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Guinea',
                    postalCode: '93408',
                    streetName: 'Khao San Road',
                    streetNumber: '159',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'IoT',
                        'Internet',
                        'AppDev',
                        'WebDev',
                        'Chatbot',
                        'DataScience',
                        'MarketAnalysis',
                        'Cryptography',
                        'Telecommunications',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[6],
                    },
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[91],
                    },
                    {
                        id: clients[29],
                    },
                    {
                        id: clients[69],
                    },
                    {
                        id: clients[33],
                    },
                    {
                        id: clients[75],
                    },
                ],
            },
            name: 'Union Wireless USA',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Srinagar',
                    country: 'Monaco',
                    postalCode: '33306',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '336',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Cybersecurity'],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Wockhardt',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Brasília',
                    country: 'Hungary',
                    postalCode: '07493',
                    streetName: 'Avenida Paulista',
                    streetNumber: '114',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Networks', 'd_3D', 'AppDev', 'd_3D', 'ComputerVision', 'Internet'],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[78],
                    },
                    {
                        id: clients[93],
                    },
                    {
                        id: clients[94],
                    },
                    {
                        id: clients[57],
                    },
                    {
                        id: clients[26],
                    },
                    {
                        id: clients[76],
                    },
                    {
                        id: clients[36],
                    },
                    {
                        id: clients[26],
                    },
                ],
            },
            name: 'Wienerschnitzel',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Tianjin',
                    country: 'Morocco',
                    postalCode: '25436',
                    streetName: 'Las Ramblas',
                    streetNumber: '232',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MachineLearning',
                        'EmbeddedSystems',
                        'Internet',
                        'WebDev',
                        'Telecommunications',
                        'MachineLearning',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[77],
                    },
                    {
                        id: clients[52],
                    },
                    {
                        id: clients[36],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[88],
                    },
                    {
                        id: clients[28],
                    },
                    {
                        id: clients[4],
                    },
                    {
                        id: clients[27],
                    },
                ],
            },
            name: 'Sherwin-Williams',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Timor-Leste',
                    postalCode: '90200',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '119',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'd_3D',
                        'Internet',
                        'Telecommunications',
                        'd_3D',
                        'd_3D',
                        'MarketAnalysis',
                        'MarketAnalysis',
                        'MarketAnalysis',
                    ],
                    size: 'GrandeEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[99],
                    },
                    {
                        id: clients[81],
                    },
                    {
                        id: clients[0],
                    },
                    {
                        id: clients[82],
                    },
                    {
                        id: clients[78],
                    },
                ],
            },
            name: 'Aridis Pharmaceuticals',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Prague',
                    country: 'Libya',
                    postalCode: '40067',
                    streetName: 'Wall Street',
                    streetNumber: '9 ter',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'ComputerVision',
                        'ComputerVision',
                        'IntelligenceArtificielle',
                        'Cryptography',
                        'Networks',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[97],
                    },
                    {
                        id: clients[44],
                    },
                    {
                        id: clients[9],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[91],
                    },
                    {
                        id: clients[17],
                    },
                    {
                        id: clients[21],
                    },
                ],
            },
            name: 'Kedrion Biopharma',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Moscow',
                    country: 'Philippines',
                    postalCode: '03322',
                    streetName: 'Beale Street',
                    streetNumber: '480',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'StateOfTheArt',
                        'DataScience',
                        'MarketAnalysis',
                        'Internet',
                        'WebDev',
                        'StateOfTheArt',
                        'Cybersecurity',
                        'd_3D',
                        'StateOfTheArt',
                    ],
                    size: 'PetiteEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[65],
                    },
                ],
            },
            name: 'Norfolk Southern',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Slovenia',
                    postalCode: '22061',
                    streetName: 'Champs Elysees',
                    streetNumber: '86',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MarketAnalysis',
                        'IntelligenceArtificielle',
                        'Cryptography',
                        'MarketAnalysis',
                        'ComputerVision',
                        'IntelligenceArtificielle',
                        'IoT',
                    ],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [],
            },
            name: 'Applied Industrial Technologies',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Manchester',
                    country: 'Grenada',
                    postalCode: '12037',
                    streetName: 'Fifth Avenue',
                    streetNumber: '18',
                },
            },
            companyInfos: {
                create: {
                    domains: ['Image', 'Image'],
                    size: 'MicroEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[87],
                    },
                    {
                        id: clients[91],
                    },
                    {
                        id: clients[67],
                    },
                    {
                        id: clients[20],
                    },
                    {
                        id: clients[7],
                    },
                    {
                        id: clients[45],
                    },
                    {
                        id: clients[21],
                    },
                ],
            },
            name: 'Radisson Hotel Group',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Shantou',
                    country: 'Solomon Islands',
                    postalCode: '11063',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '433',
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
                        id: clients[45],
                    },
                    {
                        id: clients[27],
                    },
                    {
                        id: clients[84],
                    },
                    {
                        id: clients[8],
                    },
                    {
                        id: clients[79],
                    },
                    {
                        id: clients[10],
                    },
                    {
                        id: clients[5],
                    },
                    {
                        id: clients[93],
                    },
                ],
            },
            name: 'C&A',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Fort Worth',
                    country: 'Sao Tome and Principe',
                    postalCode: '57334',
                    streetName: 'Rodeo Drive',
                    streetNumber: '108 bis',
                },
            },
            companyInfos: {
                create: {
                    domains: [
                        'MachineLearning',
                        'ComputerVision',
                        'MarketAnalysis',
                        'WebDev',
                        'IntelligenceArtificielle',
                        'Cybersecurity',
                    ],
                    size: 'MoyenneEntreprise',
                },
            },
            members: {
                connect: [
                    {
                        id: clients[50],
                    },
                    {
                        id: clients[21],
                    },
                ],
            },
            name: 'Adara Aviation',
        },
    });

    companies.push(company!.id);

    company = await db.company.create({
        data: {
            address: {
                create: {
                    city: 'Dublin',
                    country: 'United States of America',
                    postalCode: '64257',
                    streetName: 'Broadway',
                    streetNumber: '106 ter',
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
                        id: clients[96],
                    },
                    {
                        id: clients[72],
                    },
                    {
                        id: clients[95],
                    },
                    {
                        id: clients[49],
                    },
                ],
            },
            name: 'Visa',
        },
    });

    companies.push(company!.id);

    return companies;
}
