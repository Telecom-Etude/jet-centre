/**
 * This file fills the database with some data.
 *
 * This file is filling the models corresponding to @file prisma/models/account.prisma
 *
 * Known limitations:
 * - Images are never created
 *
 * The data created here was generated with the following command, using random-json from @{link https://github.com/t-webber/random-json}':
 *
 * ```
random-json -c 100 -f admins.json --before $'\nperson = await db.person.create(' --after $');\n\nadmins.push(person!.user!.admin!.id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedAdminsTestData(db: PrismaClient) {
    const admins = [];
    let person;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ankara',
                    country: 'Saint Kitts and Nevis',
                    postalCode: '77210',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '277',
                },
            },
            email: 'Zane.Villarreal@live.ca',
            firstName: 'Carla',
            lastName: 'Banks',
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
                            theme: 'Nord',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tianjin',
                    country: 'Kenya',
                    postalCode: '18059',
                    streetName: 'Lombard Street',
                    streetNumber: '178',
                },
            },
            email: 'Calla.Fleming@list.ru',
            firstName: 'Trey',
            lastName: 'Robertson',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Solarized Light (official)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bradford',
                    country: 'Suriname',
                    postalCode: '01378',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '184',
                },
            },
            firstName: 'Rosalie',
            lastName: 'Lowery',
            phone_number: '891793096210944',
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
                            theme: 'Base16 Ocean',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Dayana.Avery@gmx.com',
            firstName: 'Bogdan',
            lastName: 'Kinney',
            phone_number: '939174860587965',
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
                            theme: 'Zebra',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuala Lumpur',
                    country: 'Honduras',
                    postalCode: '37143',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '1',
                },
            },
            email: 'Blane.Atkins@qq.com',
            firstName: 'Dixie',
            lastName: 'Ortiz',
            phone_number: '796800340035813',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Atlanta',
                    country: 'Marshall Islands',
                    postalCode: '27112',
                    streetName: 'Nanjing Road',
                    streetNumber: '300 ter',
                },
            },
            firstName: 'Bobbie',
            lastName: 'Snow',
            phone_number: '558454463658294',
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
                            theme: 'One Dark',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Luciano.Rasmussen@outlook.co.uk',
            firstName: 'Dalila',
            lastName: 'Long',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cardiff',
                    country: 'Paraguay',
                    postalCode: '76200',
                    streetName: 'Las Ramblas',
                    streetNumber: '493 bis',
                },
            },
            email: 'Cassidy.Hale@webmail.co.za',
            firstName: 'Mary',
            lastName: 'Yates',
            phone_number: '135558408931800',
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
                            theme: 'Paraiso Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lahore',
                    country: 'Guinea',
                    postalCode: '24426',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '247 bis',
                },
            },
            email: 'Kristina.Perez@fastmail.com',
            firstName: 'Ada',
            lastName: 'Zimmerman',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Patna',
                    country: 'Mali',
                    postalCode: '27345',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '36',
                },
            },
            email: 'Jazmine.Shelton@hotmail.com',
            firstName: 'Tessa',
            lastName: 'Underwood',
            phone_number: '995555307760709',
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
                            theme: 'Kimbie Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Atlanta',
                    country: 'Estonia',
                    postalCode: '89430',
                    streetName: 'Beale Street',
                    streetNumber: '425',
                },
            },
            firstName: 'Elysia',
            lastName: 'Pratt',
            phone_number: '27509979779479',
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
                            theme: 'Quiet Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Joshua.Kent@optusnet.com.au',
            firstName: 'Davie',
            lastName: 'Wright',
            phone_number: '11308983148845',
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
                            theme: 'Material',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Kiley.Fisher@yahoo.co.jp',
            firstName: 'Bentley',
            lastName: 'Gregory',
            phone_number: '342702768343148',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Russia',
                    postalCode: '33420',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '165',
                },
            },
            email: 'Gaynor.Howell@sympatico.ca',
            firstName: 'Gideon',
            lastName: 'Mack',
            phone_number: '915719166494864',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Henley',
            lastName: 'Poole',
            phone_number: '802608334562339',
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
                            theme: 'Bluloco Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Gwalior',
                    country: 'Cameroon',
                    postalCode: '65129',
                    streetName: 'Rodeo Drive',
                    streetNumber: '163',
                },
            },
            email: 'Clark.Edwards@qq.com',
            firstName: 'Cameron',
            lastName: 'Summers',
            phone_number: '813041498466099',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chengdu',
                    country: 'Ireland',
                    postalCode: '24340',
                    streetName: 'Abbey Road',
                    streetNumber: '211',
                },
            },
            email: 'Kyla.Ray@hotmail.co.uk',
            firstName: 'Einar',
            lastName: 'Johnston',
            phone_number: '230590500278464',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Phoenix',
                    country: 'Vanuatu',
                    postalCode: '55039',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '401',
                },
            },
            email: 'Kristin.Tate@ezweb.ne.jp',
            firstName: 'Preston',
            lastName: 'Hawkins',
            phone_number: '300154632353793',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Darkula',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tiruchirappalli',
                    country: 'Sri Lanka',
                    postalCode: '74113',
                    streetName: 'Unter den Linden',
                    streetNumber: '450 bis',
                },
            },
            email: 'Eulah.Mccarthy@orange.fr',
            firstName: 'Adan',
            lastName: 'George',
            phone_number: '16438457560750',
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
                            theme: 'Atom Dark',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Kyra',
            lastName: 'Quinn',
            phone_number: '234597252588466',
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
                            theme: 'Material Lighter',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mexico City',
                    country: 'Sri Lanka',
                    postalCode: '47388',
                    streetName: 'Portobello Road',
                    streetNumber: '229',
                },
            },
            email: 'Kate.Nolan@mail.ru',
            firstName: 'Linton',
            lastName: 'Vasquez',
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
                            theme: 'Dracula Official',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Bridger.Abbott@blueyonder.co.uk',
            firstName: 'Erica',
            lastName: 'Ortega',
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
                            theme: 'Iceberg',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Madrid',
                    country: 'Rwanda',
                    postalCode: '82379',
                    streetName: 'Unter den Linden',
                    streetNumber: '358 bis',
                },
            },
            email: 'Ettie.Cobb@live.in',
            firstName: 'Callista',
            lastName: 'Wolfe',
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
                            theme: 'Oceanic Next',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shenzhen',
                    country: 'Guinea',
                    postalCode: '92441',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '107',
                },
            },
            email: 'Cedric.Barber@telus.net',
            firstName: 'Eliza',
            lastName: 'Baker',
            phone_number: '322676972419735',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Luanda',
                    country: 'Panama',
                    postalCode: '04051',
                    streetName: 'Khao San Road',
                    streetNumber: '61',
                },
            },
            firstName: 'Alexis',
            lastName: 'Holmes',
            phone_number: '564711335650026',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Merbivore Soft',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Joey.Hancock@outlook.com',
            firstName: 'Antoinette',
            lastName: 'Arnold',
            phone_number: '823057510552733',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aligarh',
                    country: 'Tunisia',
                    postalCode: '03042',
                    streetName: 'Avenida Paulista',
                    streetNumber: '356',
                },
            },
            email: 'Lance.Henderson@netcourrier.com',
            firstName: 'Elise',
            lastName: 'Sears',
            phone_number: '259529241955755',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ahmedabad',
                    country: 'El Salvador',
                    postalCode: '55061',
                    streetName: 'Unter den Linden',
                    streetNumber: '268',
                },
            },
            email: 'Kasey.Wong@yandex.com',
            firstName: 'Alva',
            lastName: 'Dixon',
            phone_number: '171682758952957',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Kelli',
            lastName: 'Baldwin',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Carbon',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Theresa.Walsh@seznam.cz',
            firstName: 'Howard',
            lastName: 'Ortega',
            phone_number: '127134690382588',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Solarized Light Higher Contrast',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nottingham',
                    country: 'Latvia',
                    postalCode: '21496',
                    streetName: 'Queen Street',
                    streetNumber: '42',
                },
            },
            email: 'Eda.Rice@mail.com',
            firstName: 'Adelita',
            lastName: 'Albright',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: "Xi'an",
                    country: 'Monaco',
                    postalCode: '70256',
                    streetName: 'Las Ramblas',
                    streetNumber: '474',
                },
            },
            email: 'Waylon.Thompson@yahoo.com',
            firstName: 'Armani',
            lastName: 'Lynch',
            phone_number: '516127636090384',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Vijayawada',
                    country: 'Afghanistan',
                    postalCode: '83008',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '436',
                },
            },
            email: 'Harriet.Powell@charter.net',
            firstName: 'Leticia',
            lastName: 'Mcpherson',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bangkok',
                    country: 'Cameroon',
                    postalCode: '34364',
                    streetName: 'Market Street',
                    streetNumber: '341',
                },
            },
            email: 'Eliza.Woods@posteo.de',
            firstName: 'Laurence',
            lastName: 'Sanchez',
            phone_number: '329756305732592',
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
                            theme: 'Quiet Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hamburg',
                    country: 'South Africa',
                    postalCode: '43106',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '117',
                },
            },
            email: 'Geneva.Wolfe@voila.fr',
            firstName: 'Zion',
            lastName: 'Cunningham',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Nord',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Luella.Morrison@bellsouth.net',
            firstName: 'Lillian',
            lastName: 'Gray',
            phone_number: '683321595139400',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Eiffel',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Rita',
            lastName: 'Chavez',
            phone_number: '910184550492185',
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
                            theme: 'Dracula Official',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Domenick',
            lastName: 'Dennis',
            phone_number: '761874572640661',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Patna',
                    country: 'Singapore',
                    postalCode: '37345',
                    streetName: 'Orchard Road',
                    streetNumber: '176',
                },
            },
            firstName: 'Melvin',
            lastName: 'Walter',
            phone_number: '987527092132427',
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
                            theme: 'Pastels on Dark',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Roy',
            lastName: 'Sears',
            phone_number: '651970564714934',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuwait City',
                    country: 'Greece',
                    postalCode: '55026',
                    streetName: 'Michigan Avenue',
                    streetNumber: '317',
                },
            },
            firstName: 'Shelby',
            lastName: 'Jones',
            phone_number: '988766262774661',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Steven',
            lastName: 'Hamilton',
            phone_number: '55658342422120',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bangalore',
                    country: 'Estonia',
                    postalCode: '92375',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '75',
                },
            },
            email: 'Omega.Mills@mail.ua',
            firstName: 'Walker',
            lastName: 'Kerr',
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
                            theme: 'Visual Studio',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Earle.Baldwin@runbox.com',
            firstName: 'Lane',
            lastName: 'Warner',
            phone_number: '369272835966228',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'KR Theme',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Coimbatore',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '43454',
                    streetName: 'Abbey Road',
                    streetNumber: '174 bis',
                },
            },
            email: 'Jade.Ruiz@yandex.ru',
            firstName: 'Glenn',
            lastName: 'Pearce',
            phone_number: '951836869355945',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'Kenya',
                    postalCode: '61429',
                    streetName: 'Portobello Road',
                    streetNumber: '458',
                },
            },
            email: 'Margo.Curtis@bt.com',
            firstName: 'Deidre',
            lastName: 'Franklin',
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
                            theme: 'Kuroir',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Guinea-Bissau',
                    postalCode: '37117',
                    streetName: 'Market Street',
                    streetNumber: '412 ter',
                },
            },
            firstName: 'Devyn',
            lastName: 'Austin',
            phone_number: '52118139579786',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'One Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Toronto',
                    country: 'United Kingdom',
                    postalCode: '76020',
                    streetName: 'Baker Street',
                    streetNumber: '458 bis',
                },
            },
            firstName: 'Isaac',
            lastName: 'Lowery',
            phone_number: '135635634402695',
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
                            theme: 'LAZY',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Karachi',
                    country: 'Slovakia',
                    postalCode: '16430',
                    streetName: 'Nanjing Road',
                    streetNumber: '23 ter',
                },
            },
            email: 'Myra.Sutton@ukr.net',
            firstName: 'Beatrix',
            lastName: 'Jennings',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Solarized Light Higher Contrast',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Nigeria',
                    postalCode: '78171',
                    streetName: 'Queen Street',
                    streetNumber: '211',
                },
            },
            email: 'Grenville.Tucker@webmail.co.za',
            firstName: 'Isaias',
            lastName: 'Yoder',
            phone_number: '515112354186107',
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
                            notificationLevel: 'High',
                            theme: 'Quiet Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rangoon',
                    country: 'Democratic Republic of the Congo',
                    postalCode: '57417',
                    streetName: 'Yonge Street',
                    streetNumber: '383',
                },
            },
            firstName: 'Brigitta',
            lastName: 'Manning',
            phone_number: '15648908497161',
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
                            theme: 'Zebra',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Deonna.Mullen@hotmail.co.uk',
            firstName: 'Mckenzie',
            lastName: 'Jacobs',
            phone_number: '32934239169746',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Darcula',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Donavan.Suarez@wow.com',
            firstName: 'Lupita',
            lastName: 'Palmer',
            phone_number: '118040948513209',
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
                            theme: 'Material Palenight',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mira-Bhayandar',
                    country: 'Norway',
                    postalCode: '08167',
                    streetName: 'Oxford Street',
                    streetNumber: '209',
                },
            },
            email: 'Isaac.Young@hotmail.fr',
            firstName: 'Grace',
            lastName: 'Sandoval',
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
                            theme: 'Iceberg',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Croatia',
                    postalCode: '56432',
                    streetName: 'Yonge Street',
                    streetNumber: '385',
                },
            },
            email: 'Adrien.Wade@yandex.com',
            firstName: 'Rylan',
            lastName: 'Hopkins',
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
                            theme: 'Carbon',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Moscow',
                    country: 'Lebanon',
                    postalCode: '10488',
                    streetName: 'Ginza',
                    streetNumber: '328',
                },
            },
            email: 'Alastair.Fritz@qq.com',
            firstName: 'Brody',
            lastName: 'Chambers',
            phone_number: '865363419661973',
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
                            notificationLevel: 'High',
                            theme: 'Solarized Light (official)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pittsburgh',
                    country: 'Latvia',
                    postalCode: '10473',
                    streetName: 'Yonge Street',
                    streetNumber: '17',
                },
            },
            email: 'Kiara.Pratt@yahoo.fr',
            firstName: 'Ginger',
            lastName: 'Olsen',
            phone_number: '917671342088986',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Oman',
                    postalCode: '52338',
                    streetName: 'Broadway',
                    streetNumber: '190',
                },
            },
            email: 'Carley.Watson@tiscali.co.uk',
            firstName: 'Sage',
            lastName: 'Waters',
            phone_number: '122155447440578',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Philippines',
                    postalCode: '44304',
                    streetName: 'Khao San Road',
                    streetNumber: '107 ter',
                },
            },
            email: 'Annette.Gordon@virginmedia.com',
            firstName: 'Anais',
            lastName: 'Reeves',
            phone_number: '913356505644966',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Vincenzo.Gibson@zoho.com',
            firstName: 'Joelle',
            lastName: 'Hughes',
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
                            theme: 'GitHub',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Athens',
                    country: 'Guinea-Bissau',
                    postalCode: '05093',
                    streetName: 'Portobello Road',
                    streetNumber: '185',
                },
            },
            firstName: 'Mary',
            lastName: 'Stone',
            phone_number: '734528680020996',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Bluloco',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Bess.Kelly@att.net',
            firstName: 'Reuben',
            lastName: 'Shaw',
            phone_number: '798331630275575',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Material Theme',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kabul',
                    country: 'Kyrgyzstan',
                    postalCode: '69382',
                    streetName: 'Nanjing Road',
                    streetNumber: '313',
                },
            },
            email: 'Lane.Boone@fastmail.com',
            firstName: 'Kristin',
            lastName: 'Henry',
            phone_number: '472747636349653',
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
                            theme: 'Palenight',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuala Lumpur',
                    country: 'Philippines',
                    postalCode: '72455',
                    streetName: 'La Rambla',
                    streetNumber: '152',
                },
            },
            email: 'Jacqueline.Lloyd@wanadoo.fr',
            firstName: 'Ulysses',
            lastName: 'Hunter',
            phone_number: '674116908555493',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Istanbul',
                    country: 'Afghanistan',
                    postalCode: '22357',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '288',
                },
            },
            firstName: 'Cheyenne',
            lastName: 'Holt',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Atom One Dark Reasonable',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Dane',
            lastName: 'Cooper',
            phone_number: '299348497529504',
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
                            theme: 'Zenburn',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Casablanca',
                    country: 'Tunisia',
                    postalCode: '52263',
                    streetName: 'Gran Via',
                    streetNumber: '416',
                },
            },
            email: 'Lisette.Armstrong@att.net',
            firstName: 'Aldo',
            lastName: 'May',
            phone_number: '139041747640347',
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
                            theme: 'Kuroir',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Baron',
            lastName: 'Stephens',
            phone_number: '442099336370392',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tianjin',
                    country: 'South Sudan',
                    postalCode: '62146',
                    streetName: 'Champs Elysees',
                    streetNumber: '137',
                },
            },
            email: 'Glenn.Alvarez@yahoo.co.uk',
            firstName: 'Gudrun',
            lastName: 'Franklin',
            phone_number: '561264109496090',
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
                            theme: 'Solarized Light Higher Contrast',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Addis Ababa',
                    country: 'Djibouti',
                    postalCode: '20196',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '385',
                },
            },
            email: 'Wyatt.Malone@verizon.net',
            firstName: 'Hettie',
            lastName: 'Russell',
            phone_number: '677094456099587',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Tajikistan',
                    postalCode: '28226',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '424',
                },
            },
            email: 'Klaus.Oliver@yahoo.com',
            firstName: 'Bernadette',
            lastName: 'Wong',
            phone_number: '91193588739558',
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
                            theme: 'Dawn',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Berlin',
                    country: 'Guatemala',
                    postalCode: '04276',
                    streetName: 'Unter den Linden',
                    streetNumber: '456 ter',
                },
            },
            email: 'Kathleen.Lambert@yahoo.co.uk',
            firstName: 'Rhys',
            lastName: 'Mueller',
            phone_number: '623448418811073',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Solarized Dark (official)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nottingham',
                    country: 'Timor-Leste',
                    postalCode: '63479',
                    streetName: 'Queen Street',
                    streetNumber: '360',
                },
            },
            email: 'Cillian.Rich@seznam.cz',
            firstName: 'Andrea',
            lastName: 'Bartlett',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Dolora.Mccall@runbox.com',
            firstName: 'Guillermo',
            lastName: 'Adkins',
            phone_number: '766758882743002',
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
                            theme: 'Selenized Dark',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Copenhagen',
                    country: 'Tonga',
                    postalCode: '05350',
                    streetName: 'Lombard Street',
                    streetNumber: '253 ter',
                },
            },
            email: 'Ashton.Moss@msn.com',
            firstName: 'Anthony',
            lastName: 'Saunders',
            phone_number: '132466672294952',
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
                            theme: 'Material Lighter',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hull',
                    country: 'Hungary',
                    postalCode: '80269',
                    streetName: 'Beale Street',
                    streetNumber: '89 bis',
                },
            },
            firstName: 'Bryan',
            lastName: 'Mathews',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Gruvbox Dark Medium',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Ivy.Shields@gmail.com',
            firstName: 'Ariel',
            lastName: 'Bailey',
            phone_number: '360687778951211',
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
                            theme: 'GitHub Dark',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sheffield',
                    country: 'Suriname',
                    postalCode: '68247',
                    streetName: 'Wall Street',
                    streetNumber: '33',
                },
            },
            email: 'Aoki.Fleming@hotmail.com',
            firstName: 'Granville',
            lastName: 'Yates',
            phone_number: '452339679748250',
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
                            theme: 'Crimson Editor',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Arnav.Palmer@yandex.ru',
            firstName: 'Deidra',
            lastName: 'Tucker',
            phone_number: '523112431892062',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Amadeus',
            lastName: 'Reed',
            phone_number: '864996363860315',
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
                            theme: 'Base16',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chittagong',
                    country: 'Uzbekistan',
                    postalCode: '83260',
                    streetName: 'Gran Via',
                    streetNumber: '91',
                },
            },
            email: 'Paris.Bradford@gmail.fr',
            firstName: 'Terrance',
            lastName: 'Gates',
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
                            theme: 'Firefly',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lagos',
                    country: 'Laos',
                    postalCode: '52137',
                    streetName: 'La Rambla',
                    streetNumber: '96',
                },
            },
            firstName: 'Davy',
            lastName: 'Burns',
            phone_number: '570953580567905',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'Paraiso Light',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Qatar',
                    postalCode: '90309',
                    streetName: 'Las Ramblas',
                    streetNumber: '339 ter',
                },
            },
            email: 'Grover.Nash@westnet.com.au',
            firstName: 'Dolly',
            lastName: 'Randall',
            phone_number: '625600267240022',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Noelle.Mccall@sfr.fr',
            firstName: 'Elyse',
            lastName: 'Cameron',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Monokai Pro',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Benaiah.Tran@gmail.com',
            firstName: 'Lance',
            lastName: 'Kent',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Betty.Bartlett@numericable.fr',
            firstName: 'Marlin',
            lastName: 'Cox',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Birmingham',
                    country: 'Hungary',
                    postalCode: '48387',
                    streetName: 'Portobello Road',
                    streetNumber: '404',
                },
            },
            email: 'Kori.Steele@inbox.com',
            firstName: 'Inge',
            lastName: 'Mclean',
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
                            theme: 'Nord',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mumbai',
                    country: 'United Kingdom',
                    postalCode: '45405',
                    streetName: 'Champs Elysees',
                    streetNumber: '441',
                },
            },
            firstName: 'Sean',
            lastName: "O'neil",
            phone_number: '107962240225856',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Ettie.Ward@ukr.net',
            firstName: 'Holden',
            lastName: 'Buckley',
            phone_number: '138230930069619',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hong Kong',
                    country: 'Honduras',
                    postalCode: '77064',
                    streetName: 'Via del Corso',
                    streetNumber: '276',
                },
            },
            email: 'Angelina.Shields@hotmail.co.uk',
            firstName: 'Broderick',
            lastName: 'Gross',
            phone_number: '114584310167940',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            firstName: 'Esteban',
            lastName: 'West',
            phone_number: '997353384663830',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Corey.Cross@westnet.com.au',
            firstName: 'Jairo',
            lastName: 'Stout',
            phone_number: '446126830271143',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Addis Ababa',
                    country: 'Indonesia',
                    postalCode: '36470',
                    streetName: 'Queen Street',
                    streetNumber: '152',
                },
            },
            firstName: 'Michael',
            lastName: 'Hayes',
            phone_number: '48990727381806',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Faye.Peters@sbcglobal.net',
            firstName: 'Lilah',
            lastName: 'Page',
            phone_number: '961526960247415',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'Trez',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Misterioso',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tiruppur',
                    country: 'Dominica',
                    postalCode: '39010',
                    streetName: 'Queen Street',
                    streetNumber: '153',
                },
            },
            firstName: 'Lori',
            lastName: 'Conner',
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
                            notificationLevel: 'High',
                            theme: 'Clouds Midnight',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kota',
                    country: 'Burundi',
                    postalCode: '15053',
                    streetName: 'Rodeo Drive',
                    streetNumber: '20',
                },
            },
            email: 'Hilma.Francis@orange.fr',
            firstName: 'Gretchen',
            lastName: 'Carlson',
            phone_number: '224296305274798',
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
                            theme: 'MagicWB',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mumbai',
                    country: 'Eswatini',
                    postalCode: '48171',
                    streetName: 'Champs Elysees',
                    streetNumber: '210',
                },
            },
            firstName: 'Brenna',
            lastName: 'Gibson',
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
                            theme: 'Fade to Grey',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Brooke.Randall@rogers.com',
            firstName: 'Dade',
            lastName: 'Hopkins',
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
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            email: 'Charlotte.Morrison@earthlink.net',
            firstName: 'Dallin',
            lastName: 'Hawkins',
            phone_number: '558388266454502',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'SecGe',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'Base16 Default Dark',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Vadodara',
                    country: 'Uzbekistan',
                    postalCode: '15227',
                    streetName: 'Queen Street',
                    streetNumber: '145',
                },
            },
            email: 'Alaina.Fritz@lavabit.com',
            firstName: 'Boris',
            lastName: 'Briggs',
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
                            theme: 'Oceanic',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
                    admin: {
                        select: {
                            id: true,
                        },
                    },
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);

    return admins;
}
