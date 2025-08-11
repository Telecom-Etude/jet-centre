/**
 * This file fills the database with Telecom Etude administrators.
 *
 * Known limitations:
 * - Images are never created
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -f admins.json --before $'\nperson = await db.person.create(' --after $');\n\nadmins.push(person!.user!.admin!.id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedAdminsTestData(db: PrismaClient): Promise<string[]> {
    const admins = [];
    let person;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Sao Tome and Principe',
                    postalCode: '48356',
                    streetName: 'Rodeo Drive',
                    streetNumber: '49',
                },
            },
            email: 'Celina.Baker@btopenworld.com',
            firstName: 'Jim',
            lastName: 'Swanson',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Material Darker',
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
                    country: 'Afghanistan',
                    postalCode: '88399',
                    streetName: 'Bourbon Street',
                    streetNumber: '646',
                },
            },
            firstName: 'Maria',
            lastName: 'Wilson',
            phone_number: '211003100099425',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
                    city: 'Jalandhar',
                    country: 'Poland',
                    postalCode: '38417',
                    streetName: 'Champs Elysees',
                    streetNumber: '590',
                },
            },
            email: 'Rocco.Holland@hushmail.com',
            firstName: 'Martin',
            lastName: 'Barker',
            phone_number: '287882396018542',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'Material Darker',
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
                    city: 'Jakarta',
                    country: 'Angola',
                    postalCode: '42088',
                    streetName: 'Queen Street',
                    streetNumber: '864',
                },
            },
            firstName: 'Pauline',
            lastName: 'Wheeler',
            phone_number: '658437808056545',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'Panda',
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
            email: 'Billy.Taylor@yahoo.co.jp',
            firstName: 'Kora',
            lastName: 'Burns',
            phone_number: '411114242661134',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Solarized Dark',
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
                    city: 'Noida',
                    country: 'Azerbaijan',
                    postalCode: '44246',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '268 bis',
                },
            },
            email: 'Graham.Andrews@hotmail.com',
            firstName: 'Moses',
            lastName: 'Vincent',
            phone_number: '780880677453452',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Shades of Purple',
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
                    country: 'Jamaica',
                    postalCode: '53078',
                    streetName: 'Nanjing Road',
                    streetNumber: '720 bis',
                },
            },
            email: 'Grace.Dickson@outlook.in',
            firstName: 'Aja',
            lastName: 'Yates',
            phone_number: '833446767610388',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
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
                    city: 'Nanjing',
                    country: 'Uruguay',
                    postalCode: '65046',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '371',
                },
            },
            email: 'Dale.Webster@ntlworld.com',
            firstName: 'Craig',
            lastName: 'Palmer',
            phone_number: '644756337475209',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
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
            email: 'Kate.Vargas@runbox.com',
            firstName: 'Elin',
            lastName: 'Patrick',
            phone_number: '412504444121097',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
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
            email: 'Emmy.Yates@yahoo.fr',
            firstName: 'Johnathon',
            lastName: 'Hoffman',
            phone_number: '362705172651183',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
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
            email: 'Aqua.Hodges@icloud.com',
            firstName: 'Malcolm',
            lastName: 'Watts',
            phone_number: '138018121609485',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Night Fox',
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
                    city: 'Ranchi',
                    country: 'Uzbekistan',
                    postalCode: '70065',
                    streetName: 'Market Street',
                    streetNumber: '131',
                },
            },
            firstName: 'Jason',
            lastName: 'Hicks',
            phone_number: '2415989826842',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'Base16 Default Light',
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
                    city: 'Miami',
                    country: 'Monaco',
                    postalCode: '06364',
                    streetName: 'Lombard Street',
                    streetNumber: '259 bis',
                },
            },
            firstName: 'Keri',
            lastName: 'Nolan',
            phone_number: '327091511919396',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Dracula',
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
            lastName: 'Pugh',
            phone_number: '305801713649195',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'Zenburnesque',
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
            email: 'Rory.Evans@westnet.com.au',
            firstName: 'Dallin',
            lastName: 'Faulkner',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
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
                    city: 'Johannesburg',
                    country: 'Republic of the Congo',
                    postalCode: '41370',
                    streetName: 'Gran Via',
                    streetNumber: '137',
                },
            },
            email: 'Leilani.Olsen@orange.fr',
            firstName: 'Dave',
            lastName: 'Barber',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
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
                    city: 'Sydney',
                    country: 'Holy See',
                    postalCode: '05101',
                    streetName: 'Fifth Avenue',
                    streetNumber: '431 ter',
                },
            },
            email: 'Sam.Wiggins@outlook.co.uk',
            firstName: 'Dailey',
            lastName: 'Alexander',
            phone_number: '272766355678014',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
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
            email: 'Theodore.Turner@yahoo.co.jp',
            firstName: 'Haven',
            lastName: 'Schneider',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'Clearnight',
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
                    city: 'Seoul',
                    country: 'Seychelles',
                    postalCode: '84171',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '853 ter',
                },
            },
            email: 'Uriah.Hale@mail.com.au',
            firstName: 'Pierre',
            lastName: 'Ward',
            phone_number: '605146915168382',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'Gruvbox Light',
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
                    city: 'Marseille',
                    country: 'Sierra Leone',
                    postalCode: '43157',
                    streetName: 'Khao San Road',
                    streetNumber: '449',
                },
            },
            email: 'Willa.Lowe@sbcglobal.net',
            firstName: 'Wallace',
            lastName: 'Shaw',
            phone_number: '207375152516826',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Sublime Text',
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
            email: 'Aden.Holland@live.fr',
            firstName: 'Yusuf',
            lastName: 'Pierce',
            phone_number: '388085976207389',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Material Oceanic',
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
                    city: 'Shanghai',
                    country: 'Barbados',
                    postalCode: '42466',
                    streetName: 'Bourbon Street',
                    streetNumber: '536 ter',
                },
            },
            email: 'Pierre.Kelley@zoho.com',
            firstName: 'June',
            lastName: 'Pierce',
            phone_number: '746063958639799',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'PaperColour Light',
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
                    city: 'Paris',
                    country: 'China',
                    postalCode: '76046',
                    streetName: 'Broadway',
                    streetNumber: '676 bis',
                },
            },
            email: 'Joy.Hale@sbcglobal.net',
            firstName: 'Easton',
            lastName: 'Montgomery',
            phone_number: '642864124685507',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
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
                    country: 'Czech Republic',
                    postalCode: '66033',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '52 ter',
                },
            },
            firstName: 'Scarlett',
            lastName: 'Kent',
            phone_number: '597464577798163',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
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
            email: 'Meredith.Armstrong@inbox.ru',
            firstName: 'Grace',
            lastName: 'Mclean',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
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
            address: {
                create: {
                    city: 'Zhengzhou',
                    country: 'Brunei',
                    postalCode: '85035',
                    streetName: 'Unter den Linden',
                    streetNumber: '215 ter',
                },
            },
            firstName: 'Kayla',
            lastName: 'Harris',
            phone_number: '267157717082075',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Monokai',
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
            firstName: 'Gallagher',
            lastName: 'Faulkner',
            phone_number: '562596788656941',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
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
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'Moldova',
                    postalCode: '13399',
                    streetName: 'Bourbon Street',
                    streetNumber: '401',
                },
            },
            email: 'Geraldine.Atkins@gmail.com',
            firstName: 'Penelope',
            lastName: 'Raymond',
            phone_number: '335264957692291',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
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
            email: 'Trevor.May@talktalk.net',
            firstName: 'Bret',
            lastName: 'Burke',
            phone_number: '81307190373928',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
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
            firstName: 'Doane',
            lastName: 'Larson',
            phone_number: '313294873306514',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
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
            firstName: 'Joelle',
            lastName: 'Hernandez',
            phone_number: '789300959940236',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
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
                    city: 'Aurangabad',
                    country: 'Antigua and Barbuda',
                    postalCode: '58452',
                    streetName: "King's Road",
                    streetNumber: '763',
                },
            },
            email: 'Carla.Stevens@sbcglobal.net',
            firstName: 'Tanya',
            lastName: 'Hall',
            phone_number: '435352670833036',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
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
                    city: 'Monterrey',
                    country: 'Gabon',
                    postalCode: '02148',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '348',
                },
            },
            firstName: 'Lilly',
            lastName: 'Meyer',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
                    city: 'Lima',
                    country: 'United Arab Emirates',
                    postalCode: '32164',
                    streetName: 'Wall Street',
                    streetNumber: '998',
                },
            },
            email: 'Joy.Allison@yahoo.co.jp',
            firstName: 'Alessia',
            lastName: 'Slater',
            phone_number: '765051318808885',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'Horizon',
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
                    city: 'Noida',
                    country: 'Somalia',
                    postalCode: '57231',
                    streetName: 'La Rambla',
                    streetNumber: '297',
                },
            },
            email: 'Bobbi.Lloyd@hushmail.com',
            firstName: 'Exie',
            lastName: 'Webster',
            phone_number: '56596563397690',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
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
                    city: 'Liverpool',
                    country: 'Cyprus',
                    postalCode: '40234',
                    streetName: 'Champs Elysees',
                    streetNumber: '978',
                },
            },
            firstName: 'Percy',
            lastName: 'Mcmillan',
            phone_number: '205263289559067',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Base16 Material',
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
                    city: 'Manchester',
                    country: 'Guatemala',
                    postalCode: '27057',
                    streetName: 'Rodeo Drive',
                    streetNumber: '672',
                },
            },
            email: 'Haley.Conway@bigpond.com',
            firstName: 'Brandt',
            lastName: 'Hall',
            phone_number: '819651304625616',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
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
            email: 'Brayan.Dennis@docomo.ne.jp',
            firstName: 'Issac',
            lastName: 'Wallace',
            phone_number: '179294115706893',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'One Dark Pro Monokai Darker',
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
            email: 'Josue.Burns@gmail.com',
            firstName: 'General',
            lastName: 'Gibson',
            phone_number: '292438714600003',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
                    city: 'Seoul',
                    country: 'Angola',
                    postalCode: '89078',
                    streetName: 'Avenida Paulista',
                    streetNumber: '733',
                },
            },
            email: 'Larry.Kim@msn.com',
            firstName: 'Eliezer',
            lastName: 'Graham',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Monokai',
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
                    city: 'Bhopal',
                    country: 'Qatar',
                    postalCode: '57489',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '901',
                },
            },
            email: 'Douglas.Brady@virginmedia.com',
            firstName: 'Gabriel',
            lastName: 'Faulkner',
            phone_number: '489690022229598',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'PaperColour Light',
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
                    city: 'Hefei',
                    country: 'Poland',
                    postalCode: '53349',
                    streetName: 'Avenida Paulista',
                    streetNumber: '880',
                },
            },
            email: 'Duncan.Andrews@yahoo.co.jp',
            firstName: 'Reuben',
            lastName: 'Vogel',
            phone_number: '886044459101206',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: "SynthWave '84",
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
                    city: 'Guayaquil',
                    country: 'Sweden',
                    postalCode: '85292',
                    streetName: 'Wall Street',
                    streetNumber: '29',
                },
            },
            email: 'Caia.Johnson@zoho.com',
            firstName: 'Vickie',
            lastName: 'Conner',
            phone_number: '438211317269987',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
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
                    city: 'Alexandria',
                    country: 'Libya',
                    postalCode: '06171',
                    streetName: 'Unter den Linden',
                    streetNumber: '388',
                },
            },
            email: 'Sheldon.Green@inbox.com',
            firstName: 'Darell',
            lastName: 'Alvarez',
            phone_number: '555451534532103',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
            firstName: 'Vernon',
            lastName: 'Barnett',
            phone_number: '751830638282861',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
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
                    city: 'Patna',
                    country: 'Iceland',
                    postalCode: '53271',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '648 bis',
                },
            },
            email: 'Augustine.Schmidt@yahoo.de',
            firstName: 'Garland',
            lastName: 'Tucker',
            phone_number: '235981651703505',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
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
                    city: 'Osaka',
                    country: 'Papua New Guinea',
                    postalCode: '40047',
                    streetName: 'Champs Elysees',
                    streetNumber: '675',
                },
            },
            email: 'Josiah.Ward@comcast.net',
            firstName: 'Bowen',
            lastName: 'Gray',
            phone_number: '241337837295108',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
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
                    city: 'Helsinki',
                    country: 'Liechtenstein',
                    postalCode: '31216',
                    streetName: 'Rodeo Drive',
                    streetNumber: '887',
                },
            },
            email: 'Ellen.Torres@email.cz',
            firstName: 'Agosto',
            lastName: 'Vega',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Solarized Light',
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
                    city: 'Guangzhou',
                    country: 'Maldives',
                    postalCode: '31061',
                    streetName: 'Orchard Road',
                    streetNumber: '753',
                },
            },
            email: 'Teddy.Payne@laposte.net',
            firstName: 'Uma',
            lastName: 'Barr',
            phone_number: '282222804942579',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
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
            email: 'Cora.Banks@docomo.ne.jp',
            firstName: 'Tanya',
            lastName: 'Howard',
            phone_number: '155123805621106',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
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
                    city: 'Chengdu',
                    country: 'Sierra Leone',
                    postalCode: '20272',
                    streetName: 'Baker Street',
                    streetNumber: '871',
                },
            },
            firstName: 'Kai',
            lastName: 'Wilkinson',
            phone_number: '70384275050429',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
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
                    city: 'Belo Horizonte',
                    country: 'Egypt',
                    postalCode: '65243',
                    streetName: 'Ginza',
                    streetNumber: '636',
                },
            },
            email: 'Rosetta.Jones@wow.com',
            firstName: 'Beau',
            lastName: 'Edwards',
            phone_number: '545264918484129',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
                            theme: 'Zenburnesque',
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
                    city: 'Amsterdam',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '29057',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '271',
                },
            },
            email: 'Valentina.Holmes@hotmail.co.uk',
            firstName: 'Connor',
            lastName: 'Cox',
            phone_number: '204795675323713',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Hopscotch',
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
            email: 'Jaxson.Lawson@bt.com',
            firstName: 'Jazmine',
            lastName: 'Carlson',
            phone_number: '938596486113636',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
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
                    city: 'Jakarta',
                    country: 'Albania',
                    postalCode: '73228',
                    streetName: 'Champs Elysees',
                    streetNumber: '274',
                },
            },
            email: 'Ricky.Abbott@inbox.ru',
            firstName: 'Whitney',
            lastName: 'Vega',
            phone_number: '523412802749683',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
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
                    city: 'Chicago',
                    country: 'Tunisia',
                    postalCode: '89371',
                    streetName: 'Ginza',
                    streetNumber: '764',
                },
            },
            firstName: 'Sarah',
            lastName: 'Oliver',
            phone_number: '557130065431576',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Bespin',
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
                    country: 'Philippines',
                    postalCode: '24176',
                    streetName: 'Rodeo Drive',
                    streetNumber: '103',
                },
            },
            email: 'Kristian.Nicholson@gmail.co.jp',
            firstName: 'Gian',
            lastName: 'Peck',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
            email: 'Dominic.Sherman@yahoo.fr',
            firstName: 'Cassidy',
            lastName: 'Fisher',
            phone_number: '663926921239201',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
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
                    country: 'Burundi',
                    postalCode: '65176',
                    streetName: 'Las Ramblas',
                    streetNumber: '290',
                },
            },
            email: 'Carson.Mullen@tutanota.com',
            firstName: 'Lydia',
            lastName: 'Sutton',
            phone_number: '686603586794328',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Terminal',
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
            email: 'Jackson.Fisher@numericable.fr',
            firstName: 'Gavin',
            lastName: 'Walters',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Vibrant Ink',
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
                    postalCode: '06488',
                    streetName: "King's Road",
                    streetNumber: '613',
                },
            },
            email: 'Waylon.Willis@sympatico.ca',
            firstName: 'Ayanna',
            lastName: 'Conway',
            phone_number: '62164710256785',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
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
                    city: 'Mysore',
                    country: 'Nauru',
                    postalCode: '54436',
                    streetName: 'Bourbon Street',
                    streetNumber: '674',
                },
            },
            firstName: 'Tyler',
            lastName: 'Parrish',
            phone_number: '318735296031488',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Visual Studio Dark',
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
                    city: 'Jakarta',
                    country: 'Maldives',
                    postalCode: '17448',
                    streetName: 'Champs Elysees',
                    streetNumber: '936',
                },
            },
            firstName: 'Upton',
            lastName: 'Ward',
            phone_number: '616814311102439',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
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
                    city: 'Edinburgh',
                    country: 'Haiti',
                    postalCode: '20219',
                    streetName: 'Orchard Road',
                    streetNumber: '168 bis',
                },
            },
            email: 'Maxine.Ward@inbox.com',
            firstName: 'Branch',
            lastName: 'Schultz',
            phone_number: '322197501360905',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'IDLE',
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
            email: 'Rolando.Poole@yahoo.co.jp',
            firstName: 'Danila',
            lastName: 'Parrish',
            phone_number: '910039287218441',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
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
                    country: 'Algeria',
                    postalCode: '28443',
                    streetName: 'Oxford Street',
                    streetNumber: '318 ter',
                },
            },
            email: 'Kollin.Ford@bt.com',
            firstName: 'Lissa',
            lastName: 'Ericson',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Gruvbox',
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
                    city: 'Cairo',
                    country: 'Iceland',
                    postalCode: '95397',
                    streetName: 'Market Street',
                    streetNumber: '894',
                },
            },
            firstName: 'Carla',
            lastName: 'Kerr',
            phone_number: '926327498307727',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Material Ocean',
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
                    city: 'Singapore',
                    country: 'Belgium',
                    postalCode: '78110',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '322',
                },
            },
            email: 'George.Pierce@telus.net',
            firstName: 'Bryleigh',
            lastName: 'Christensen',
            phone_number: '192285132641187',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
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
            email: 'Devonta.Palmer@outlook.in',
            firstName: 'Rick',
            lastName: 'Harvey',
            phone_number: '833587513240864',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'One Dark Pro Monokai Darker',
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
            firstName: 'Anderson',
            lastName: 'Harmon',
            phone_number: '882728972483922',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
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
                    city: 'Guayaquil',
                    country: 'Ireland',
                    postalCode: '94485',
                    streetName: 'Beale Street',
                    streetNumber: '491',
                },
            },
            firstName: 'Tyson',
            lastName: 'Roberts',
            phone_number: '627213682460197',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
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
            address: {
                create: {
                    city: 'Helsinki',
                    country: 'Paraguay',
                    postalCode: '58067',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '784',
                },
            },
            email: 'Edna.Watson@shaw.ca',
            firstName: 'Zadie',
            lastName: 'Vargas',
            phone_number: '69409428833773',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
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
                    city: 'Zurich',
                    country: 'Jamaica',
                    postalCode: '75296',
                    streetName: 'Fifth Avenue',
                    streetNumber: '555 bis',
                },
            },
            email: 'Cristian.Barry@rambler.ru',
            firstName: 'Kendra',
            lastName: 'Jacobs',
            phone_number: '807447434192418',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
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
                    city: 'Rome',
                    country: 'Lesotho',
                    postalCode: '22401',
                    streetName: 'Avenida Paulista',
                    streetNumber: '616',
                },
            },
            email: 'Renee.Poole@zoho.com',
            firstName: 'Blanche',
            lastName: 'Thomas',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Gruvbox Light',
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
                    city: 'Jabalpur',
                    country: 'Nigeria',
                    postalCode: '02094',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '771',
                },
            },
            email: 'Darby.Wiggins@bigpond.com',
            firstName: 'Ezekiel',
            lastName: 'Velasquez',
            phone_number: '700441213006224',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
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
                    city: 'Baghdad',
                    country: 'Papua New Guinea',
                    postalCode: '52244',
                    streetName: 'Baker Street',
                    streetNumber: '515',
                },
            },
            email: 'Bernie.Park@fastmail.com',
            firstName: 'Baylee',
            lastName: 'Montgomery',
            phone_number: '768927304511712',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
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
                    country: 'Holy See',
                    postalCode: '95274',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '476',
                },
            },
            email: 'Deloris.Silva@hotmail.fr',
            firstName: 'Amya',
            lastName: 'Page',
            phone_number: '322709506964043',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'High',
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
            firstName: 'Glenn',
            lastName: 'Schultz',
            phone_number: '886459323960171',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'commercial_director',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
                            theme: 'Base16 Solarized Light',
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
                    country: 'Eritrea',
                    postalCode: '60309',
                    streetName: 'Unter den Linden',
                    streetNumber: '470',
                },
            },
            email: 'Ivy.Marshall@live.com',
            firstName: 'Dominik',
            lastName: 'Gordon',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
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
                    city: 'Agra',
                    country: 'Switzerland',
                    postalCode: '07434',
                    streetName: 'Fifth Avenue',
                    streetNumber: '622',
                },
            },
            email: 'Carolina.Clarke@aliceadsl.fr',
            firstName: 'Caitlin',
            lastName: 'Blake',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
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
                    city: 'Tokyo',
                    country: 'Djibouti',
                    postalCode: '94491',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '281',
                },
            },
            firstName: 'Kian',
            lastName: 'Blake',
            phone_number: '975358071168096',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Low',
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
                    city: 'Atlanta',
                    country: 'Germany',
                    postalCode: '07456',
                    streetName: 'Unter den Linden',
                    streetNumber: '11',
                },
            },
            email: 'Cait.Andrews@t-online.de',
            firstName: 'Ila',
            lastName: 'Chambers',
            phone_number: '543342411814613',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
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
            firstName: 'Gwyneth',
            lastName: 'Montgomery',
            phone_number: '349221751777551',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
            address: {
                create: {
                    city: 'Dhanbad',
                    country: 'North Macedonia',
                    postalCode: '34245',
                    streetName: 'Via del Corso',
                    streetNumber: '570',
                },
            },
            email: 'Hilary.Foster@charter.net',
            firstName: 'Enrique',
            lastName: 'Reynolds',
            phone_number: '809229539392434',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
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
            firstName: 'Valentina',
            lastName: 'Buckley',
            phone_number: '406577982301685',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
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
                    city: 'Shenyang',
                    country: 'Lesotho',
                    postalCode: '24288',
                    streetName: 'Baker Street',
                    streetNumber: '511',
                },
            },
            email: 'Bridgette.Ives@mail.com.au',
            firstName: 'Dixie',
            lastName: 'Simpson',
            phone_number: '970862005096008',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
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
            email: 'Baxter.Mack@yahoo.co.in',
            firstName: 'Jocelyn',
            lastName: 'Potter',
            phone_number: '11249536433954',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'general_secretary',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'Katzenmilch',
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
            email: 'Erick.Meyer@gmail.co.jp',
            firstName: 'Albion',
            lastName: 'Burke',
            phone_number: '172787622843846',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
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
                    country: 'Egypt',
                    postalCode: '49338',
                    streetName: 'Abbey Road',
                    streetNumber: '825',
                },
            },
            email: 'Bryna.Gilbert@web.de',
            firstName: 'Keegan',
            lastName: 'Harding',
            phone_number: '291096435785259',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: false,
                            notificationLevel: 'Medium',
                            theme: 'XCode',
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
                    country: 'Syria',
                    postalCode: '94073',
                    streetName: 'Gran Via',
                    streetNumber: '717 bis',
                },
            },
            firstName: 'Bianca',
            lastName: 'Mcgrath',
            phone_number: '738092274961915',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'vice_treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
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
            firstName: 'Ira',
            lastName: 'Holland',
            phone_number: '279219607540270',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Solarized Dark',
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
            email: 'Emmanuel.Berry@hotmail.co.jp',
            firstName: 'Ali',
            lastName: 'Pugh',
            phone_number: '309642192968993',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'internal_vice_president',
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
                    city: 'Boston',
                    country: 'Belgium',
                    postalCode: '83116',
                    streetName: 'Las Ramblas',
                    streetNumber: '242',
                },
            },
            email: 'Bryn.Dallas@bell.net',
            firstName: 'Justine',
            lastName: 'Vinson',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'High',
                            theme: 'Brogrammer',
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
            email: 'Yosef.Zamora@yahoo.de',
            firstName: 'Eileen',
            lastName: 'Ives',
            phone_number: '49929309649409',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
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
                    city: 'Shenyang',
                    country: 'El Salvador',
                    postalCode: '46378',
                    streetName: 'Broadway',
                    streetNumber: '545',
                },
            },
            email: 'Odin.Dean@mail.com.au',
            firstName: 'Pauline',
            lastName: 'Sampson',
            phone_number: '189442634772958',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
            firstName: 'Kameron',
            lastName: 'Robbins',
            phone_number: '366117171629280',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'president',
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
                    city: 'London',
                    country: 'Romania',
                    postalCode: '14237',
                    streetName: 'Las Ramblas',
                    streetNumber: '187',
                },
            },
            email: 'Amanda.Suarez@windstream.net',
            firstName: 'Eunice',
            lastName: 'Lane',
            phone_number: '636049901712704',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'treasurer',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'Material Darker',
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
                    country: 'India',
                    postalCode: '93243',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '230',
                },
            },
            firstName: 'Randy',
            lastName: 'Mitchell',
            phone_number: '476716221007741',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'external_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Medium',
                            theme: 'One Dark Pro Monokai Darker',
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
            email: 'Shelia.Travis@live.ca',
            firstName: 'Frieda',
            lastName: 'Shaw',
            phone_number: '425603187587676',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'info',
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
            email: 'Latoya.Blackwell@westnet.com.au',
            firstName: 'Darren',
            lastName: 'Hancock',
            phone_number: '52503068767206',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
                        },
                    },
                    settings: {
                        create: {
                            gui: true,
                            notificationLevel: 'Low',
                            theme: 'Brogrammer',
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
