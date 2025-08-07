/**
 * This file fills the database with some data.
 *
 * This file is filling the models corresponding to @file prism/model/account.db
 *
 * Known limitations:
 * - Images are never created
 *
 * The data created here was generated with the following command: `random-json -c 100 -u 'JePos:DirCo|VPO|Info|Secge' -u 'Lvl:High|Medium|Low'`, using random-json from @{link https://github.com/t-webber/random-json}'.
 */

import { PrismaClient } from '@prisma/client';

export async function seedAccountTestData(db: PrismaClient) {
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fukuoka',
                    country: 'Panama',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '415 ter',
                    zipCode: '13185',
                },
            },
            email: 'Lauren.Evans@windstream.net',
            firstName: 'Shirley',
            lastName: 'Walker',
            phone_number: '371346867706126',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Birmingham',
                    country: 'Uzbekistan',
                    streetName: 'Via del Corso',
                    streetNumber: '51',
                    zipCode: '31161',
                },
            },
            email: 'David.Brown@ntlworld.co.uk',
            firstName: 'Harold',
            lastName: 'Hughes',
            phone_number: '133693207168837',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(51, 87, 113)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Amritsar',
                    country: 'Madagascar',
                    streetName: 'Yonge Street',
                    streetNumber: '226',
                    zipCode: '55082',
                },
            },
            email: 'Brian.Baker@gmx.de',
            firstName: 'Stephen',
            lastName: 'James',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(121, 212, 134)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Porto Alegre',
                    country: 'Saint Lucia',
                    streetName: 'Broadway',
                    streetNumber: '277',
                    zipCode: '23243',
                },
            },
            firstName: 'Jeremy',
            lastName: 'Sutton',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(244, 150, 81)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guwahati',
                    country: 'Iran',
                    streetName: 'Champs Elysees',
                    streetNumber: '75',
                    zipCode: '38132',
                },
            },
            email: 'Brenda.Martin@tutanota.com',
            firstName: 'Christina',
            lastName: 'Glover',
            phone_number: '376882273457282',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Manchester',
                    country: 'Mongolia',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '128',
                    zipCode: '62038',
                },
            },
            email: 'Roger.Phillips@numericable.fr',
            firstName: 'Martha',
            lastName: 'Cole',
            phone_number: '475088960613008',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(249, 65, 48)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Porto Alegre',
                    country: 'Laos',
                    streetName: 'Wall Street',
                    streetNumber: '82',
                    zipCode: '31234',
                },
            },
            email: 'Teresa.Cook@rocketmail.com',
            firstName: 'Kimberly',
            lastName: 'Alexander',
            phone_number: '710584467559776',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Saint Kitts and Nevis',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '136 ter',
                    zipCode: '12407',
                },
            },
            email: 'Richard.Johnston@outlook.com',
            firstName: 'Martha',
            lastName: 'Ellis',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(254, 46, 58)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Faridabad',
                    country: 'Maldives',
                    streetName: 'La Rambla',
                    streetNumber: '498',
                    zipCode: '86119',
                },
            },
            email: 'Kenneth.Morrison@seznam.cz',
            firstName: 'Amy',
            lastName: 'Ellis',
            phone_number: '63181085000733',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(81, 134, 251)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mumbai',
                    country: 'Portugal',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '393',
                    zipCode: '21204',
                },
            },
            email: 'Amy.Warren@hushmail.com',
            firstName: 'Debra',
            lastName: 'Hawkins',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'rgb(150, 241, 85)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Cuba',
                    streetName: 'Yonge Street',
                    streetNumber: '304',
                    zipCode: '33174',
                },
            },
            email: 'Dennis.Russell@volny.cz',
            firstName: 'Alexander',
            lastName: 'Cameron',
            phone_number: '551149486222194',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Miami',
                    country: 'France',
                    streetName: 'Baker Street',
                    streetNumber: '113',
                    zipCode: '29329',
                },
            },
            email: 'Austin.Fisher@hotmail.fr',
            firstName: 'Sharon',
            lastName: 'Rose',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(199, 124, 166)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ghaziabad',
                    country: 'Moldova',
                    streetName: 'Queen Street',
                    streetNumber: '387',
                    zipCode: '83148',
                },
            },
            firstName: 'Rachel',
            lastName: 'Armstrong',
            phone_number: '425444055454785',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(150, 15, 212)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guwahati',
                    country: 'Venezuela',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '274',
                    zipCode: '25223',
                },
            },
            email: 'Walter.Richards@mailinator.com',
            firstName: 'Harold',
            lastName: 'Burnett',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jinan',
                    country: 'Bulgaria',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '303',
                    zipCode: '64346',
                },
            },
            firstName: 'Sandra',
            lastName: 'Mason',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(146, 33, 255)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dongguan',
                    country: 'Czech Republic',
                    streetName: 'Beale Street',
                    streetNumber: '80',
                    zipCode: '47132',
                },
            },
            email: 'Kelly.Cameron@gmail.fr',
            firstName: 'Carol',
            lastName: 'Davies',
            phone_number: '719193961168375',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bradford',
                    country: 'Saint Lucia',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '300',
                    zipCode: '61026',
                },
            },
            firstName: 'Ashley',
            lastName: 'Roberts',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(143, 173, 172)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Foshan',
                    country: 'Gabon',
                    streetName: 'Champs Elysees',
                    streetNumber: '202',
                    zipCode: '27013',
                },
            },
            firstName: 'Jerry',
            lastName: 'Wright',
            phone_number: '110652597523168',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Surat',
                    country: 'Palestine State',
                    streetName: 'Unter den Linden',
                    streetNumber: '458',
                    zipCode: '74064',
                },
            },
            email: 'Paul.Wilson@yahoo.co.jp',
            firstName: 'Ruth',
            lastName: 'Cole',
            phone_number: '72409984800195',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Israel',
                    streetName: 'Avenida Paulista',
                    streetNumber: '403',
                    zipCode: '16145',
                },
            },
            email: 'Frances.Hughes@seznam.cz',
            firstName: 'Anna',
            lastName: 'Harvey',
            phone_number: '909905746554818',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Zhengzhou',
                    country: 'Liechtenstein',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '399',
                    zipCode: '24395',
                },
            },
            firstName: 'Joyce',
            lastName: 'Hunter',
            phone_number: '460368800687432',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Gwalior',
                    country: 'Bosnia and Herzegovina',
                    streetName: 'Lombard Street',
                    streetNumber: '123',
                    zipCode: '76367',
                },
            },
            email: 'Henry.Ford@netcourrier.com',
            firstName: 'Zachary',
            lastName: 'Evans',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hefei',
                    country: 'Belgium',
                    streetName: 'Unter den Linden',
                    streetNumber: '70',
                    zipCode: '14323',
                },
            },
            firstName: 'Stephen',
            lastName: 'Murray',
            phone_number: '954946898802200',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(238, 79, 47)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Medellín',
                    country: 'Egypt',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '282',
                    zipCode: '50345',
                },
            },
            firstName: 'Edward',
            lastName: 'Morris',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Boston',
                    country: 'North Korea',
                    streetName: 'Abbey Road',
                    streetNumber: '107',
                    zipCode: '06028',
                },
            },
            email: 'Donna.Glover@laposte.net',
            firstName: 'Jerry',
            lastName: 'Turner',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'United Arab Emirates',
                    streetName: 'Michigan Avenue',
                    streetNumber: '83',
                    zipCode: '78325',
                },
            },
            firstName: 'Stephanie',
            lastName: 'West',
            phone_number: '439387036621544',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jakarta',
                    country: 'Georgia',
                    streetName: "King's Road",
                    streetNumber: '20 ter',
                    zipCode: '33265',
                },
            },
            firstName: 'Jonathan',
            lastName: 'Price',
            phone_number: '790942949166511',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(188, 206, 5)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Iraq',
                    streetName: 'Nanjing Road',
                    streetNumber: '392',
                    zipCode: '08462',
                },
            },
            firstName: 'Elizabeth',
            lastName: 'Gray',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Singapore',
                    country: 'Lebanon',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '177 ter',
                    zipCode: '41048',
                },
            },
            firstName: 'Ryan',
            lastName: 'Palmer',
            phone_number: '55853097343452',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(104, 25, 67)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bristol',
                    country: 'Lesotho',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '128 ter',
                    zipCode: '47133',
                },
            },
            firstName: 'Joe',
            lastName: 'Rose',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Washington, D.C.',
                    country: 'Georgia',
                    streetName: 'Wall Street',
                    streetNumber: '469',
                    zipCode: '15287',
                },
            },
            firstName: 'Sarah',
            lastName: 'Walker',
            phone_number: '515641293357234',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Netherlands',
                    streetName: 'Champs Elysees',
                    streetNumber: '206',
                    zipCode: '53435',
                },
            },
            firstName: 'Jacob',
            lastName: 'Murray',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cape Town',
                    country: 'Serbia',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '208',
                    zipCode: '17041',
                },
            },
            firstName: 'Larry',
            lastName: 'Adams',
            phone_number: '381315573611854',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(47, 97, 200)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Ireland',
                    streetName: 'Via del Corso',
                    streetNumber: '265',
                    zipCode: '88417',
                },
            },
            firstName: 'Jose',
            lastName: 'Roberts',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(8, 111, 253)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Cambodia',
                    streetName: 'La Rambla',
                    streetNumber: '490 ter',
                    zipCode: '93129',
                },
            },
            firstName: 'Christopher',
            lastName: 'Blake',
            phone_number: '590765206338868',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'rgb(64, 182, 152)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Patna',
                    country: 'Netherlands',
                    streetName: 'Lombard Street',
                    streetNumber: '388',
                    zipCode: '33442',
                },
            },
            email: 'Diane.Stephens@t-online.de',
            firstName: 'Heather',
            lastName: 'Berry',
            phone_number: '131656514433214',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(87, 49, 76)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Luanda',
                    country: 'Palau',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '346',
                    zipCode: '61275',
                },
            },
            email: 'Jacob.Barrett@neuf.fr',
            firstName: 'Dorothy',
            lastName: 'West',
            phone_number: '350989452619390',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Belgium',
                    streetName: 'Beale Street',
                    streetNumber: '315 ter',
                    zipCode: '36184',
                },
            },
            email: 'Sandra.Cook@lavabit.com',
            firstName: 'Katherine',
            lastName: 'Foster',
            phone_number: '138974524628856',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chongqing',
                    country: 'Saint Lucia',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '380',
                    zipCode: '27499',
                },
            },
            email: 'Pamela.Jones@gmx.de',
            firstName: 'Aaron',
            lastName: 'Burton',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(22, 211, 93)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: "Xi'an",
                    country: 'Tunisia',
                    streetName: 'Oxford Street',
                    streetNumber: '354',
                    zipCode: '11361',
                },
            },
            firstName: 'Ruth',
            lastName: 'Ellis',
            phone_number: '58485966326540',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Meerut',
                    country: 'United Kingdom',
                    streetName: 'Nanjing Road',
                    streetNumber: '144 bis',
                    zipCode: '16334',
                },
            },
            firstName: 'David',
            lastName: 'Martin',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Milan',
                    country: 'Zambia',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '158',
                    zipCode: '09386',
                },
            },
            email: 'Christine.Russell@centrum.cz',
            firstName: 'Steven',
            lastName: 'Cox',
            phone_number: '981974908162161',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Edinburgh',
                    country: 'Sweden',
                    streetName: 'Portobello Road',
                    streetNumber: '428 ter',
                    zipCode: '74406',
                },
            },
            email: 'George.Williams@wanadoo.fr',
            firstName: 'Justin',
            lastName: 'Wright',
            phone_number: '531763822879160',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dongguan',
                    country: 'Micronesia',
                    streetName: 'Portobello Road',
                    streetNumber: '304',
                    zipCode: '93422',
                },
            },
            firstName: 'Justin',
            lastName: 'Adams',
            phone_number: '472434858961967',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(87, 48, 226)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Czech Republic',
                    streetName: 'Nanjing Road',
                    streetNumber: '342 bis',
                    zipCode: '42369',
                },
            },
            firstName: 'Catherine',
            lastName: 'Douglas',
            phone_number: '524634603089677',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Suriname',
                    streetName: "King's Road",
                    streetNumber: '268 bis',
                    zipCode: '02221',
                },
            },
            email: 'Jeremy.Alexander@openmailbox.org',
            firstName: 'Benjamin',
            lastName: 'Hawkins',
            phone_number: '203133513880249',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'rgb(180, 219, 3)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Toronto',
                    country: 'Malta',
                    streetName: 'Beale Street',
                    streetNumber: '105',
                    zipCode: '17433',
                },
            },
            email: 'Katherine.Burnett@inbox.ru',
            firstName: 'Teresa',
            lastName: 'Berry',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Antigua and Barbuda',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '139',
                    zipCode: '09336',
                },
            },
            email: 'Diane.Taylor@tiscali.co.uk',
            firstName: 'Samuel',
            lastName: 'Atkinson',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hyderabad',
                    country: 'Japan',
                    streetName: 'Michigan Avenue',
                    streetNumber: '387',
                    zipCode: '81066',
                },
            },
            email: 'William.Richardson@westnet.com.au',
            firstName: 'Angela',
            lastName: 'Collins',
            phone_number: '541598954475139',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(248, 123, 192)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ghaziabad',
                    country: 'Solomon Islands',
                    streetName: 'Broadway',
                    streetNumber: '211 bis',
                    zipCode: '54216',
                },
            },
            email: 'Cheryl.Carter@qq.com',
            firstName: 'Jeremy',
            lastName: 'White',
            phone_number: '967416858051761',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(178, 167, 149)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Glasgow',
                    country: 'United Kingdom',
                    streetName: "King's Road",
                    streetNumber: '3',
                    zipCode: '51158',
                },
            },
            email: 'Kathleen.Clarke@verizon.net',
            firstName: 'Janet',
            lastName: 'Taylor',
            phone_number: '389115630316955',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sydney',
                    country: 'Pakistan',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '45 ter',
                    zipCode: '61498',
                },
            },
            email: 'Debra.Oliver@rogers.com',
            firstName: 'Deborah',
            lastName: 'Graham',
            phone_number: '457696491999738',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(129, 5, 166)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Madrid',
                    country: 'Guinea',
                    streetName: 'Lombard Street',
                    streetNumber: '73 bis',
                    zipCode: '76101',
                },
            },
            email: 'Edward.Thompson@sfr.fr',
            firstName: 'Dennis',
            lastName: 'Henderson',
            phone_number: '420668128461593',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sheffield',
                    country: 'Belize',
                    streetName: 'Michigan Avenue',
                    streetNumber: '436',
                    zipCode: '81419',
                },
            },
            email: 'Nicholas.Lane@hotmail.fr',
            firstName: 'Joe',
            lastName: 'Johnston',
            phone_number: '252203549418636',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Barcelona',
                    country: 'Georgia',
                    streetName: 'Gran Via',
                    streetNumber: '323',
                    zipCode: '56332',
                },
            },
            email: 'Kevin.Matthews@yahoo.com',
            firstName: 'Brenda',
            lastName: 'Evans',
            phone_number: '115336635846167',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(228, 106, 10)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Munich',
                    country: 'Nicaragua',
                    streetName: 'Avenida Paulista',
                    streetNumber: '177',
                    zipCode: '65264',
                },
            },
            email: 'Patrick.Bell@live.ca',
            firstName: 'Christina',
            lastName: 'Cox',
            phone_number: '899944908742675',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shenzhen',
                    country: 'Iran',
                    streetName: 'Avenida Paulista',
                    streetNumber: '416 bis',
                    zipCode: '42342',
                },
            },
            email: 'Sarah.Russell@gmail.co.in',
            firstName: 'Brian',
            lastName: 'Martin',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(224, 96, 240)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hull',
                    country: 'Samoa',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '99',
                    zipCode: '10441',
                },
            },
            firstName: 'Debra',
            lastName: 'Harvey',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(91, 189, 21)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Bangladesh',
                    streetName: 'Gran Via',
                    streetNumber: '348',
                    zipCode: '65193',
                },
            },
            email: 'Kathleen.Arnold@freenet.de',
            firstName: 'Maria',
            lastName: 'Walker',
            phone_number: '267825845314446',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'São Paulo',
                    country: 'Germany',
                    streetName: 'Gran Via',
                    streetNumber: '172',
                    zipCode: '26169',
                },
            },
            email: 'Amy.Cox@att.net',
            firstName: 'Joseph',
            lastName: 'Burnett',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(200, 3, 26)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dongguan',
                    country: 'Libya',
                    streetName: 'Portobello Road',
                    streetNumber: '412',
                    zipCode: '35183',
                },
            },
            email: 'Angela.George@yahoo.com',
            firstName: 'Judith',
            lastName: 'Wright',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Melbourne',
                    country: 'Mexico',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '276',
                    zipCode: '07237',
                },
            },
            email: 'Eric.Knight@mailinator.com',
            firstName: 'Barbara',
            lastName: 'Cunningham',
            phone_number: '690110242514213',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(244, 173, 152)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Solapur',
                    country: 'Rwanda',
                    streetName: 'La Rambla',
                    streetNumber: '121',
                    zipCode: '38319',
                },
            },
            email: 'Heather.Cameron@sfr.fr',
            firstName: 'Victoria',
            lastName: 'Robinson',
            phone_number: '203993586691781',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(155, 62, 219)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Johannesburg',
                    country: 'Timor-Leste',
                    streetName: 'Broadway',
                    streetNumber: '285',
                    zipCode: '02059',
                },
            },
            email: 'Madison.Oliver@runbox.com',
            firstName: 'George',
            lastName: 'Edwards',
            phone_number: '45251025749053',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'Uruguay',
                    streetName: 'Unter den Linden',
                    streetNumber: '277',
                    zipCode: '17157',
                },
            },
            email: 'Mark.Johnston@shaw.ca',
            firstName: 'Anthony',
            lastName: 'Glover',
            phone_number: '590824252678668',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Chile',
                    streetName: 'Broadway',
                    streetNumber: '465',
                    zipCode: '84080',
                },
            },
            firstName: 'Jeffrey',
            lastName: 'Moore',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(240, 100, 154)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Copenhagen',
                    country: 'El Salvador',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '200',
                    zipCode: '05362',
                },
            },
            email: 'Zachary.Cunningham@ntlworld.com',
            firstName: 'Brandon',
            lastName: 'Wilson',
            phone_number: '680814468372230',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Guinea-Bissau',
                    streetName: 'Market Street',
                    streetNumber: '475 ter',
                    zipCode: '60224',
                },
            },
            firstName: 'Joyce',
            lastName: 'Foster',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brasília',
                    country: 'Antigua and Barbuda',
                    streetName: 'Las Ramblas',
                    streetNumber: '328',
                    zipCode: '65089',
                },
            },
            email: 'Margaret.Palmer@gmail.fr',
            firstName: 'Sean',
            lastName: 'Ellis',
            phone_number: '546965040772383',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(94, 252, 44)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Tunisia',
                    streetName: 'Unter den Linden',
                    streetNumber: '37 ter',
                    zipCode: '90453',
                },
            },
            email: 'Patrick.White@btopenworld.com',
            firstName: 'Stephanie',
            lastName: 'Hudson',
            phone_number: '546640966260854',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Timor-Leste',
                    streetName: 'Beale Street',
                    streetNumber: '248',
                    zipCode: '48041',
                },
            },
            firstName: 'Stephanie',
            lastName: 'Richardson',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Madurai',
                    country: 'North Korea',
                    streetName: 'Unter den Linden',
                    streetNumber: '102',
                    zipCode: '94013',
                },
            },
            email: 'Ann.Morgan@numericable.fr',
            firstName: 'Lawrence',
            lastName: 'King',
            phone_number: '427949420841327',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rajkot',
                    country: 'Argentina',
                    streetName: 'Khao San Road',
                    streetNumber: '396',
                    zipCode: '27366',
                },
            },
            email: 'Heather.Carter@free.fr',
            firstName: 'Timothy',
            lastName: 'Ford',
            phone_number: '380800683091543',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(193, 75, 95)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Vienna',
                    country: 'Nicaragua',
                    streetName: 'Via del Corso',
                    streetNumber: '11',
                    zipCode: '26072',
                },
            },
            firstName: 'Kathryn',
            lastName: 'Perry',
            phone_number: '395598226153212',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Boston',
                    country: 'Saint Kitts and Nevis',
                    streetName: 'Market Street',
                    streetNumber: '342',
                    zipCode: '17418',
                },
            },
            email: 'Jose.Morrison@web.de',
            firstName: 'Nancy',
            lastName: 'Jones',
            phone_number: '108136084849592',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'rgb(50, 50, 159)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Casablanca',
                    country: 'Indonesia',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '59',
                    zipCode: '56471',
                },
            },
            email: 'Sandra.Scott@ntlworld.co.uk',
            firstName: 'Jerry',
            lastName: 'Wright',
            phone_number: '681978206284844',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(70, 169, 51)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Boston',
                    country: 'Nepal',
                    streetName: 'Queen Street',
                    streetNumber: '47',
                    zipCode: '61297',
                },
            },
            email: 'Amanda.Robinson@fastmail.com',
            firstName: 'Christine',
            lastName: 'Barker',
            phone_number: '832474802497201',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bogotá',
                    country: 'Qatar',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '472 ter',
                    zipCode: '65107',
                },
            },
            email: 'Anthony.Cox@outlook.co.uk',
            firstName: 'Megan',
            lastName: 'Cole',
            phone_number: '904710477080584',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kota',
                    country: 'Samoa',
                    streetName: 'Queen Street',
                    streetNumber: '269',
                    zipCode: '70472',
                },
            },
            email: 'James.Stephens@yahoo.de',
            firstName: 'Benjamin',
            lastName: 'Richards',
            phone_number: '778424244152304',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cape Town',
                    country: 'Libya',
                    streetName: 'Lombard Street',
                    streetNumber: '239',
                    zipCode: '62299',
                },
            },
            firstName: 'Tyler',
            lastName: 'Murray',
            phone_number: '967401357155796',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Recife',
                    country: 'Bulgaria',
                    streetName: 'Abbey Road',
                    streetNumber: '459 bis',
                    zipCode: '09089',
                },
            },
            email: 'Kathleen.Walker@btinternet.com',
            firstName: 'Stephen',
            lastName: 'Martin',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Munich',
                    country: 'Sri Lanka',
                    streetName: 'Nanjing Road',
                    streetNumber: '308',
                    zipCode: '65333',
                },
            },
            firstName: 'Kevin',
            lastName: 'Turner',
            phone_number: '817939852282849',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Khartoum',
                    country: 'Nicaragua',
                    streetName: 'Broadway',
                    streetNumber: '162',
                    zipCode: '12325',
                },
            },
            firstName: 'Brian',
            lastName: 'Burton',
            phone_number: '799214948985146',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bradford',
                    country: 'Timor-Leste',
                    streetName: 'Fifth Avenue',
                    streetNumber: '137',
                    zipCode: '12121',
                },
            },
            email: 'Heather.Hale@msn.com',
            firstName: 'Brian',
            lastName: 'Berry',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Santiago',
                    country: 'Latvia',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '88',
                    zipCode: '74190',
                },
            },
            email: 'Hannah.White@live.ca',
            firstName: 'Justin',
            lastName: 'Burnett',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(214, 29, 30)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brussels',
                    country: 'United Kingdom',
                    streetName: 'Fifth Avenue',
                    streetNumber: '264',
                    zipCode: '62232',
                },
            },
            firstName: 'Patricia',
            lastName: 'Morrison',
            phone_number: '198425011738607',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'rgb(212, 57, 36)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Berlin',
                    country: 'Libya',
                    streetName: 'Las Ramblas',
                    streetNumber: '5',
                    zipCode: '81438',
                },
            },
            email: 'Ruth.Cox@mail.ua',
            firstName: 'Joshua',
            lastName: 'Burton',
            phone_number: '581391518416011',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'rgb(253, 21, 126)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fukuoka',
                    country: 'Latvia',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '16',
                    zipCode: '92458',
                },
            },
            email: 'Austin.Taylor@inbox.com',
            firstName: 'Karen',
            lastName: 'Douglas',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(81, 254, 15)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuala Lumpur',
                    country: 'Spain',
                    streetName: 'Avenida Paulista',
                    streetNumber: '428',
                    zipCode: '71489',
                },
            },
            email: 'Jerry.Henderson@mailbox.org',
            firstName: 'Catherine',
            lastName: 'Hughes',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(219, 86, 129)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guwahati',
                    country: 'Cabo Verde',
                    streetName: 'Oxford Street',
                    streetNumber: '360',
                    zipCode: '94032',
                },
            },
            email: 'Maria.Oliver@numericable.fr',
            firstName: 'Scott',
            lastName: 'Holmes',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(213, 213, 11)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Monaco',
                    streetName: 'Via del Corso',
                    streetNumber: '16',
                    zipCode: '26490',
                },
            },
            email: 'James.Warren@yahoo.com',
            firstName: 'Tyler',
            lastName: 'Richardson',
            phone_number: '964323425142734',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Barcelona',
                    country: 'Denmark',
                    streetName: 'Rodeo Drive',
                    streetNumber: '109',
                    zipCode: '48387',
                },
            },
            email: 'Kathleen.McDonald@yahoo.co.jp',
            firstName: 'Emma',
            lastName: 'Sutton',
            phone_number: '216841099738976',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'rgb(179, 48, 12)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dhaka',
                    country: 'Djibouti',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '365',
                    zipCode: '29358',
                },
            },
            email: 'Jose.Brown@wanadoo.fr',
            firstName: 'Gerald',
            lastName: 'Hale',
            phone_number: '533059194286611',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Secge',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(117, 213, 87)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Riyadh',
                    country: 'Rwanda',
                    streetName: 'Orchard Road',
                    streetNumber: '172 bis',
                    zipCode: '36241',
                },
            },
            email: 'Kathryn.Cole@ntlworld.co.uk',
            firstName: 'Jason',
            lastName: 'Green',
            phone_number: '229449534734355',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(87, 103, 43)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mysore',
                    country: 'Niger',
                    streetName: 'Rodeo Drive',
                    streetNumber: '155',
                    zipCode: '19220',
                },
            },
            email: 'Martha.Grant@frontiernet.net',
            firstName: 'Patricia',
            lastName: 'Stephens',
            phone_number: '531575259632045',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'rgb(95, 170, 81)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Patna',
                    country: 'Samoa',
                    streetName: "King's Road",
                    streetNumber: '311',
                    zipCode: '52462',
                },
            },
            firstName: 'Jack',
            lastName: 'Fletcher',
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Nigeria',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '440',
                    zipCode: '50399',
                },
            },
            firstName: 'Joyce',
            lastName: 'Scott',
            phone_number: '701689974830830',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'rgb(212, 131, 3)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dar es Salaam',
                    country: 'Luxembourg',
                    streetName: 'Nanjing Road',
                    streetNumber: '342',
                    zipCode: '73134',
                },
            },
            firstName: 'Harold',
            lastName: 'Hill',
            phone_number: '370402930018104',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Info',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Amritsar',
                    country: 'Austria',
                    streetName: 'Baker Street',
                    streetNumber: '84',
                    zipCode: '62117',
                },
            },
            email: 'Terry.Baker@posteo.de',
            firstName: 'Jose',
            lastName: 'Price',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'VPO',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'rgb(161, 61, 39)',
                        },
                    },
                },
            },
        },
    });
    await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nashik',
                    country: 'Guinea',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '129 ter',
                    zipCode: '21001',
                },
            },
            firstName: 'Sandra',
            lastName: 'Holland',
            phone_number: '608655348564421',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'DirCo',
                        },
                    },
                },
            },
        },
    });
}
