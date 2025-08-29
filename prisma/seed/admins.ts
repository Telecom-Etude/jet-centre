/**
 * This file fills the database with Telecom Etude administrators.
 *
 * Known limitations:
 * - Images are never created
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -f admins.json --before $'\nperson = await db.person.create(' --after $');\n\nadmins.push(person!.user!.admin!.id);\nusers.push(person!.user!.id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedAdminsTestData(db: PrismaClient): Promise<[string[], string[]]> {
    const admins = [];
    const users = [];
    let person;

    person = await db.person.create({
        data: {
            email: 'Adonis.Hall@sfr.fr',
            firstName: 'Cara',
            lastName: 'Ray',
            phone_number: '257792976583721',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chongqing',
                    country: 'Madagascar',
                    postalCode: '45104',
                    streetName: 'Las Ramblas',
                    streetNumber: '695',
                },
            },
            email: 'Doria.Dixon@laposte.net',
            firstName: 'Dawn',
            lastName: 'Manning',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Nestor.Jimenez@web.de',
            firstName: 'Allegra',
            lastName: 'Fritz',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tehran',
                    country: 'Angola',
                    postalCode: '09405',
                    streetName: 'Oxford Street',
                    streetNumber: '990',
                },
            },
            email: 'Eula.Dean@centrum.cz',
            firstName: 'Macy',
            lastName: 'Stokes',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Gaynor.Hayes@netcourrier.com',
            firstName: 'Bella',
            lastName: 'Reese',
            phone_number: '369477413597023',
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
                            theme: 'Neon',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Paris',
                    country: 'Guinea',
                    postalCode: '19117',
                    streetName: 'Baker Street',
                    streetNumber: '427',
                },
            },
            email: 'Isaac.Gilliam@westnet.com.au',
            firstName: 'Olivia',
            lastName: 'Franklin',
            phone_number: '853981950225683',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Dominica',
                    postalCode: '01283',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '120 bis',
                },
            },
            email: 'Darnell.Hudson@gmail.fr',
            firstName: 'Gregory',
            lastName: 'Mckenzie',
            phone_number: '782783917788683',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Hattie',
            lastName: 'Kim',
            phone_number: '906863111413999',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Gwalior',
                    country: 'Bulgaria',
                    postalCode: '70454',
                    streetName: 'Oxford Street',
                    streetNumber: '92',
                },
            },
            firstName: 'Chaim',
            lastName: 'Wright',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Elin.Nicholson@mail.com',
            firstName: 'Colleen',
            lastName: 'Whitaker',
            phone_number: '154061913546373',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jabalpur',
                    country: 'Norway',
                    postalCode: '81285',
                    streetName: 'Lombard Street',
                    streetNumber: '700',
                },
            },
            firstName: 'Cosima',
            lastName: 'Zamora',
            phone_number: '69560442591193',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Seoul',
                    country: 'Barbados',
                    postalCode: '34124',
                    streetName: 'Bourbon Street',
                    streetNumber: '689',
                },
            },
            email: 'Foster.Hayes@sbcglobal.net',
            firstName: 'Bryna',
            lastName: 'Velez',
            phone_number: '613270097266804',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Delphia.Hill@rocketmail.com',
            firstName: 'Claudia',
            lastName: 'Richardson',
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
                            notificationLevel: 'High',
                            theme: 'Blackboard',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Philadelphia',
                    country: 'Colombia',
                    postalCode: '03084',
                    streetName: 'Ginza',
                    streetNumber: '252',
                },
            },
            firstName: 'Clyde',
            lastName: 'Wolfe',
            phone_number: '834197084577293',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leicester',
                    country: 'Netherlands',
                    postalCode: '35024',
                    streetName: 'Michigan Avenue',
                    streetNumber: '276',
                },
            },
            email: 'Bea.Ives@freenet.de',
            firstName: 'Geno',
            lastName: 'Bowers',
            phone_number: '160331291077278',
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
                            notificationLevel: 'High',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Alan.Vernon@outlook.in',
            firstName: 'Domitila',
            lastName: 'Hicks',
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
                            theme: 'Gruvbox Dark Hard',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Bobbi',
            lastName: 'Barnett',
            phone_number: '474878585761358',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Washington, D.C.',
                    country: 'Cabo Verde',
                    postalCode: '17401',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '827',
                },
            },
            email: 'Adele.Weber@live.ca',
            firstName: 'Sandra',
            lastName: 'Barber',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Recife',
                    country: 'Syria',
                    postalCode: '13157',
                    streetName: 'Portobello Road',
                    streetNumber: '728',
                },
            },
            firstName: 'Madison',
            lastName: 'Woodward',
            phone_number: '51391359114126',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Livia.Gill@me.com',
            firstName: 'Camilla',
            lastName: 'Gordon',
            phone_number: '962486009193783',
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
                            notificationLevel: 'Medium',
                            theme: 'Bluloco Dark',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Caissa.Travis@mail.com.au',
            firstName: 'Ayanna',
            lastName: 'Bailey',
            phone_number: '849065022848150',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sydney',
                    country: 'Malta',
                    postalCode: '04384',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '881',
                },
            },
            email: 'Dalen.Thornton@live.fr',
            firstName: 'Germain',
            lastName: 'Leonard',
            phone_number: '246854591914464',
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
                            theme: 'Blackboard',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dallas',
                    country: 'Mongolia',
                    postalCode: '66219',
                    streetName: 'Queen Street',
                    streetNumber: '823',
                },
            },
            email: 'Caissa.Mills@mail.ua',
            firstName: 'Perry',
            lastName: 'Nolan',
            phone_number: '615063993833084',
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
                            theme: 'Ay Light',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guangzhou',
                    country: 'Argentina',
                    postalCode: '73234',
                    streetName: 'Baker Street',
                    streetNumber: '842',
                },
            },
            firstName: 'Gary',
            lastName: 'Allison',
            phone_number: '204173616219754',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Dakota.Burnett@live.fr',
            firstName: 'Porter',
            lastName: 'Velasquez',
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
                            theme: 'Bluloco Dark',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Luanda',
                    country: 'Pakistan',
                    postalCode: '20234',
                    streetName: 'Ginza',
                    streetNumber: '957',
                },
            },
            email: 'Bobby.Kirk@sbcglobal.net',
            firstName: 'Cornelius',
            lastName: 'Suarez',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hefei',
                    country: 'Brunei',
                    postalCode: '13020',
                    streetName: 'Rodeo Drive',
                    streetNumber: '484',
                },
            },
            firstName: 'Trudy',
            lastName: 'Carlson',
            phone_number: '31806593143342',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Miami',
                    country: 'Spain',
                    postalCode: '88295',
                    streetName: 'Yonge Street',
                    streetNumber: '6',
                },
            },
            email: 'Alfred.Walker@ntlworld.co.uk',
            firstName: 'Constantine',
            lastName: 'Mclean',
            phone_number: '689112967406011',
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
                            theme: 'Dark+ (default dark)',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Beverley.Suarez@free.fr',
            firstName: 'Georgina',
            lastName: 'Petersen',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Barcelona',
                    country: 'Argentina',
                    postalCode: '82086',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '169',
                },
            },
            firstName: 'Yosef',
            lastName: 'Ross',
            phone_number: '343221073370869',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Diego',
            lastName: 'Harding',
            phone_number: '687867340827098',
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
                            theme: 'Espresso',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Veronica',
            lastName: 'Gomez',
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
                            theme: 'Cobalt',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Salvador',
                    country: 'Bolivia',
                    postalCode: '35350',
                    streetName: 'Unter den Linden',
                    streetNumber: '707',
                },
            },
            email: 'Douglas.Silva@bigpond.com',
            firstName: 'Richard',
            lastName: 'Baker',
            phone_number: '724013672791318',
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
                            theme: 'Cobalt2',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Helsinki',
                    country: 'Seychelles',
                    postalCode: '04170',
                    streetName: 'Portobello Road',
                    streetNumber: '647',
                },
            },
            firstName: 'Campbell',
            lastName: 'Turner',
            phone_number: '319891742933748',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Leonidas.Wade@gmail.co.in',
            firstName: 'Erwin',
            lastName: 'Ruiz',
            phone_number: '909440022462917',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mysore',
                    country: 'Tanzania',
                    postalCode: '49248',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '764',
                },
            },
            email: 'Bridgett.Merrill@gmx.de',
            firstName: 'Anderson',
            lastName: 'Harper',
            phone_number: '880904089636723',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Addis Ababa',
                    country: 'Zimbabwe',
                    postalCode: '69113',
                    streetName: 'Wall Street',
                    streetNumber: '92 bis',
                },
            },
            email: 'Arnulfo.Gardner@zoho.com',
            firstName: 'Dahlia',
            lastName: 'Reed',
            phone_number: '587604968625876',
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
                            theme: 'Neon',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Christopher.Douglas@juno.com',
            firstName: 'Bethany',
            lastName: 'Cross',
            phone_number: '393663308654392',
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
                            theme: 'Sqlserver',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hangzhou',
                    country: 'Palestine State',
                    postalCode: '90194',
                    streetName: 'Las Ramblas',
                    streetNumber: '685',
                },
            },
            email: 'Dennis.Dunn@voila.fr',
            firstName: 'Colby',
            lastName: 'Warren',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Vijayawada',
                    country: 'Thailand',
                    postalCode: '86098',
                    streetName: 'Baker Street',
                    streetNumber: '423',
                },
            },
            email: 'Alvaro.Glover@gmail.co.in',
            firstName: 'Myra',
            lastName: 'Douglas',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Manila',
                    country: 'Burkina Faso',
                    postalCode: '43282',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '855',
                },
            },
            email: 'Dolores.Cross@neuf.fr',
            firstName: 'Frankie',
            lastName: 'Graves',
            phone_number: '949886102688616',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Jesse.Garrison@inbox.com',
            firstName: 'Floyd',
            lastName: 'Gross',
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
                            theme: 'Light+ (default light)',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Adelicia.Bradley@outlook.co.uk',
            firstName: 'Brody',
            lastName: 'Reilly',
            phone_number: '106854705747778',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bristol',
                    country: 'Syria',
                    postalCode: '31075',
                    streetName: 'Orchard Road',
                    streetNumber: '88',
                },
            },
            firstName: 'Irena',
            lastName: 'Davis',
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
                            theme: 'Kimbie Dark',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Southampton',
                    country: 'Sao Tome and Principe',
                    postalCode: '83077',
                    streetName: "King's Road",
                    streetNumber: '39',
                },
            },
            email: 'Todd.Fisher@yahoo.co.uk',
            firstName: 'Augustine',
            lastName: 'Atkins',
            phone_number: '145394335370073',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Patrick.Paul@ukr.net',
            firstName: 'Katrina',
            lastName: 'Pearson',
            phone_number: '115235124156311',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Los Angeles',
                    country: 'Honduras',
                    postalCode: '58262',
                    streetName: 'Oxford Street',
                    streetNumber: '504 ter',
                },
            },
            firstName: 'Emmeline',
            lastName: 'Christensen',
            phone_number: '760998339561215',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mumbai',
                    country: 'Nicaragua',
                    postalCode: '11140',
                    streetName: 'Beale Street',
                    streetNumber: '913',
                },
            },
            firstName: 'Osmond',
            lastName: 'Garrison',
            phone_number: '400781894176687',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Cyprus',
                    postalCode: '48221',
                    streetName: 'Broadway',
                    streetNumber: '506',
                },
            },
            firstName: 'Roger',
            lastName: 'Hogan',
            phone_number: '822613699327763',
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
                            theme: 'Base16 Eighties',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aligarh',
                    country: 'Belgium',
                    postalCode: '70252',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '952',
                },
            },
            email: 'Bryleigh.Logan@list.ru',
            firstName: 'Emery',
            lastName: 'Saunders',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Ethan.Randall@laposte.net',
            firstName: 'Ephraim',
            lastName: 'Jordan',
            phone_number: '383011856659913',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Amelia.Schultz@mail.com',
            firstName: 'Harmony',
            lastName: 'Olson',
            phone_number: '271893599807512',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Jaylin.Brooks@gmail.co.uk',
            firstName: 'Anjelica',
            lastName: 'Mueller',
            phone_number: '733080198852585',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Laos',
                    postalCode: '48376',
                    streetName: 'Beale Street',
                    streetNumber: '257',
                },
            },
            email: 'Benji.Horton@list.ru',
            firstName: 'Aidan',
            lastName: 'Lamar',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Kaiden',
            lastName: 'Porter',
            phone_number: '93414733189507',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brasília',
                    country: 'Cambodia',
                    postalCode: '20263',
                    streetName: 'Oxford Street',
                    streetNumber: '387',
                },
            },
            email: 'Gillian.Erickson@btconnect.com',
            firstName: 'Calla',
            lastName: 'Abbott',
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
                            notificationLevel: 'High',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tokyo',
                    country: 'Comoros',
                    postalCode: '31488',
                    streetName: 'Beale Street',
                    streetNumber: '559',
                },
            },
            firstName: 'Garrison',
            lastName: 'Adkins',
            phone_number: '666804688050536',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Ardian.Mcfadden@yandex.ru',
            firstName: 'Dorthy',
            lastName: 'Rose',
            phone_number: '105613696741242',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Budapest',
                    country: 'Benin',
                    postalCode: '13360',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '930 ter',
                },
            },
            email: 'Dot.Sanchez@mail.com',
            firstName: 'Crystal',
            lastName: 'Sears',
            phone_number: '951793421991020',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Trey.Williams@ntlworld.com',
            firstName: 'Ira',
            lastName: 'Parrish',
            phone_number: '905380816937875',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rangoon',
                    country: 'United Arab Emirates',
                    postalCode: '03104',
                    streetName: 'Broadway',
                    streetNumber: '293',
                },
            },
            email: 'Anita.Holmes@posteo.de',
            firstName: 'Justine',
            lastName: 'Harvey',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Glasgow',
                    country: 'North Macedonia',
                    postalCode: '47377',
                    streetName: 'Beale Street',
                    streetNumber: '67',
                },
            },
            firstName: 'Rory',
            lastName: 'Gates',
            phone_number: '451448146899527',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Southampton',
                    country: 'South Africa',
                    postalCode: '46354',
                    streetName: 'Queen Street',
                    streetNumber: '688',
                },
            },
            firstName: 'Hilma',
            lastName: 'Anderson',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Drew.Rhodes@yahoo.fr',
            firstName: 'Isadora',
            lastName: 'Emerson',
            phone_number: '449702356648265',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Geri.Townsend@windstream.net',
            firstName: 'Esther',
            lastName: 'Stark',
            phone_number: '691040870219909',
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
                            theme: 'Base16 Solarized Dark',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Harlan',
            lastName: 'Burgess',
            phone_number: '910148168979426',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nagoya',
                    country: 'United States of America',
                    postalCode: '40392',
                    streetName: 'Queen Street',
                    streetNumber: '321',
                },
            },
            email: 'Cristina.Graves@runbox.com',
            firstName: 'Hayley',
            lastName: 'Logan',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kolkata',
                    country: 'Sao Tome and Principe',
                    postalCode: '13465',
                    streetName: 'Fifth Avenue',
                    streetNumber: '863',
                },
            },
            firstName: 'Mason',
            lastName: 'Ramirez',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'São Paulo',
                    country: 'Central African Republic',
                    postalCode: '54138',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '993 ter',
                },
            },
            email: 'Saul.Dixon@runbox.com',
            firstName: 'Gene',
            lastName: 'Morrison',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Yangon',
                    country: 'Georgia',
                    postalCode: '74170',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '561',
                },
            },
            email: 'Clementine.Riley@yahoo.co.in',
            firstName: 'Zoey',
            lastName: "O'connor",
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
                            notificationLevel: 'Medium',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Leone',
            lastName: 'Mccoy',
            phone_number: '272665338795772',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Zurich',
                    country: 'Kyrgyzstan',
                    postalCode: '56299',
                    streetName: 'Unter den Linden',
                    streetNumber: '689',
                },
            },
            email: 'Burdette.Ochoa@fastmail.com',
            firstName: 'Atlas',
            lastName: 'Whitaker',
            phone_number: '699075945752192',
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
                            theme: 'Merbivore',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chongqing',
                    country: 'Italy',
                    postalCode: '70259',
                    streetName: 'Broadway',
                    streetNumber: '468',
                },
            },
            firstName: 'Benton',
            lastName: 'Wyatt',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Wuhan',
                    country: 'Algeria',
                    postalCode: '10070',
                    streetName: 'Khao San Road',
                    streetNumber: '755',
                },
            },
            email: 'Elysia.Fleming@rambler.ru',
            firstName: 'Ephron',
            lastName: 'Hernandez',
            phone_number: '597128114441800',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Nell.Quinn@gmx.de',
            firstName: 'Carys',
            lastName: 'Lamar',
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
                            notificationLevel: 'High',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Angola',
                    postalCode: '86227',
                    streetName: 'Broadway',
                    streetNumber: '52 ter',
                },
            },
            email: 'Bert.Savage@yahoo.co.jp',
            firstName: 'Bert',
            lastName: 'Leonard',
            phone_number: '658459420843176',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rajkot',
                    country: 'Iran',
                    postalCode: '49098',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '509',
                },
            },
            email: 'Dale.Travis@bellsouth.net',
            firstName: 'Cassandra',
            lastName: 'Holt',
            phone_number: '239591664425762',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Colombia',
                    postalCode: '27112',
                    streetName: 'Champs Elysees',
                    streetNumber: '141',
                },
            },
            firstName: 'Aidan',
            lastName: 'Stokes',
            phone_number: '86454693640741',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Daley.Pierce@yandex.com',
            firstName: 'Kori',
            lastName: 'Valdez',
            phone_number: '400875038057297',
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
                            theme: 'Paraiso Dark',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Naples',
                    country: 'Libya',
                    postalCode: '15287',
                    streetName: 'Beale Street',
                    streetNumber: '983 bis',
                },
            },
            email: 'Lena.Morrison@runbox.com',
            firstName: 'Arena',
            lastName: 'Warren',
            phone_number: '188553899741812',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aligarh',
                    country: 'Uruguay',
                    postalCode: '13335',
                    streetName: 'Rodeo Drive',
                    streetNumber: '284',
                },
            },
            firstName: 'Jay',
            lastName: 'Valentine',
            phone_number: '277543248613820',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Otis',
            lastName: 'Vasquez',
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
                            notificationLevel: 'Low',
                            theme: 'Solarized Dark Higher Contrast',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Norway',
                    postalCode: '05172',
                    streetName: 'Baker Street',
                    streetNumber: '315',
                },
            },
            firstName: 'Kinley',
            lastName: 'Berry',
            phone_number: '262681537684696',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Phoenix',
                    country: 'Liberia',
                    postalCode: '37066',
                    streetName: 'Market Street',
                    streetNumber: '23',
                },
            },
            email: 'Adley.Cox@optusnet.com.au',
            firstName: 'Garrison',
            lastName: 'Wiley',
            phone_number: '735860062719425',
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
                            theme: 'Twilight',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Wuhan',
                    country: 'Jamaica',
                    postalCode: '53195',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '305 bis',
                },
            },
            firstName: 'Haleigh',
            lastName: 'Clayton',
            phone_number: '811243653192431',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lyon',
                    country: 'Ghana',
                    postalCode: '12141',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '946',
                },
            },
            email: 'Dione.Clayton@free.fr',
            firstName: 'Pollyanna',
            lastName: 'Harvey',
            phone_number: '458807793261589',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Meerut',
                    country: 'Iraq',
                    postalCode: '13299',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '882',
                },
            },
            email: 'Braydon.Abbott@comcast.net',
            firstName: 'Elin',
            lastName: 'Walker',
            phone_number: '412656171110759',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lahore',
                    country: 'Niger',
                    postalCode: '89129',
                    streetName: 'La Rambla',
                    streetNumber: '362 bis',
                },
            },
            email: 'Alfreda.Warner@gmail.com',
            firstName: 'Epona',
            lastName: 'Sullivan',
            phone_number: '557621777340911',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'India',
                    postalCode: '02466',
                    streetName: 'Rodeo Drive',
                    streetNumber: '940',
                },
            },
            firstName: 'Donovan',
            lastName: 'Weber',
            phone_number: '851947359092352',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            firstName: 'Humphrey',
            lastName: 'Richards',
            phone_number: '309980723449118',
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
                            theme: 'Winter is Coming',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jabalpur',
                    country: 'Dominica',
                    postalCode: '54059',
                    streetName: 'Yonge Street',
                    streetNumber: '408',
                },
            },
            email: 'Daxton.Morgan@gmail.co.uk',
            firstName: 'Chandler',
            lastName: 'Romero',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            email: 'Dominic.Banks@bbox.fr',
            firstName: 'Devon',
            lastName: 'Solomon',
            phone_number: '71636837854359',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kabul',
                    country: 'Singapore',
                    postalCode: '94182',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '242',
                },
            },
            firstName: 'Ruby',
            lastName: 'Lucas',
            phone_number: '405692153977033',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brasília',
                    country: 'Germany',
                    postalCode: '77146',
                    streetName: 'Portobello Road',
                    streetNumber: '638',
                },
            },
            email: 'Blake.Mullen@outlook.in',
            firstName: 'Emmeline',
            lastName: 'Palmer',
            phone_number: '283886792142687',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Baghdad',
                    country: 'Uganda',
                    postalCode: '25167',
                    streetName: 'Champs Elysees',
                    streetNumber: '520',
                },
            },
            firstName: 'Caden',
            lastName: 'Malone',
            phone_number: '380481691867813',
            user: {
                create: {
                    admin: {
                        create: {
                            position: 'operational_vice_president',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ahmedabad',
                    country: 'Mauritius',
                    postalCode: '09251',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '896',
                },
            },
            email: 'Shaun.Vega@live.ca',
            firstName: 'Nicola',
            lastName: 'McDonald',
            phone_number: '985222470168469',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Solapur',
                    country: 'Slovakia',
                    postalCode: '37209',
                    streetName: 'Ginza',
                    streetNumber: '509',
                },
            },
            email: 'Francine.Ellis@fastmail.com',
            firstName: 'Deanna',
            lastName: 'Green',
            phone_number: '15363070100235',
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
                            theme: 'Night Owl',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Baghdad',
                    country: 'Sao Tome and Principe',
                    postalCode: '49437',
                    streetName: 'Via del Corso',
                    streetNumber: '298',
                },
            },
            firstName: 'Jesus',
            lastName: 'Vega',
            phone_number: '64157543158126',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Varanasi',
                    country: 'Cambodia',
                    postalCode: '55413',
                    streetName: 'Orchard Road',
                    streetNumber: '282',
                },
            },
            email: 'Colleen.Wilcox@bigpond.com',
            firstName: 'Dianne',
            lastName: 'Briggs',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Thane',
                    country: 'North Korea',
                    postalCode: '84447',
                    streetName: 'Champs Elysees',
                    streetNumber: '88',
                },
            },
            firstName: 'Bert',
            lastName: 'Sargent',
            phone_number: '139965157165660',
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
                    id: true,
                },
            },
        },
    });

    admins.push(person!.user!.admin!.id);
    users.push(person!.user!.id);

    return [admins, users];
}
