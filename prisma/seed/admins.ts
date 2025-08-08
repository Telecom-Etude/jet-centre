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
 * random-json -c 100 -f admins.json --before $'\nperson = await db.person.create(' --after $');\n\nid = person?.user?.admin?.id; if (id) admins.push(id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedAdminsTestData(db: PrismaClient) {
    const admins = [];
    let person;
    let id;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Kiribati',
                    postalCode: '59315',
                    streetName: 'Portobello Road',
                    streetNumber: '368 bis',
                },
            },
            email: 'Jerry.Mitchell@neuf.fr',
            firstName: 'Dorothy',
            lastName: 'Robinson',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'David',
            lastName: 'Nicholson',
            phone_number: '72506150270258',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aurangabad',
                    country: 'Kuwait',
                    postalCode: '57121',
                    streetName: 'Unter den Linden',
                    streetNumber: '11',
                },
            },
            email: 'Rachel.Stevens@blueyonder.co.uk',
            firstName: 'Harold',
            lastName: 'Fisher',
            phone_number: '711061807812326',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Coimbatore',
                    country: 'Antigua and Barbuda',
                    postalCode: '70025',
                    streetName: 'Queen Street',
                    streetNumber: '43',
                },
            },
            email: 'Rebecca.Baker@yahoo.co.jp',
            firstName: 'Rebecca',
            lastName: 'Turner',
            phone_number: '651593451247424',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ahmedabad',
                    country: 'Brazil',
                    postalCode: '82151',
                    streetName: 'Khao San Road',
                    streetNumber: '147',
                },
            },
            email: 'Jonathan.Clarke@frontiernet.net',
            firstName: 'Linda',
            lastName: 'Marshall',
            phone_number: '752178391819893',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Benjamin.Hawkins@yahoo.co.in',
            firstName: 'Melissa',
            lastName: 'Rose',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chengdu',
                    country: 'Djibouti',
                    postalCode: '57200',
                    streetName: 'Rodeo Drive',
                    streetNumber: '330',
                },
            },
            email: 'Roger.Cooper@windstream.net',
            firstName: 'Deborah',
            lastName: 'Thompson',
            phone_number: '834696635423945',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jalandhar',
                    country: 'Denmark',
                    postalCode: '47063',
                    streetName: 'Market Street',
                    streetNumber: '342 bis',
                },
            },
            firstName: 'Christian',
            lastName: 'Hughes',
            phone_number: '596775280837437',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Baghdad',
                    country: 'Solomon Islands',
                    postalCode: '21115',
                    streetName: 'La Rambla',
                    streetNumber: '327 bis',
                },
            },
            firstName: 'Anthony',
            lastName: 'Hall',
            phone_number: '863582163512043',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tianjin',
                    country: 'Nigeria',
                    postalCode: '57432',
                    streetName: 'Oxford Street',
                    streetNumber: '443',
                },
            },
            email: 'Dorothy.Martin@optusnet.com.au',
            firstName: 'George',
            lastName: 'Wood',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Samantha.Johnston@yahoo.co.jp',
            firstName: 'James',
            lastName: 'Murray',
            phone_number: '730974983062643',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Suzhou',
                    country: 'Bhutan',
                    postalCode: '05426',
                    streetName: 'Baker Street',
                    streetNumber: '30',
                },
            },
            firstName: 'Kenneth',
            lastName: 'Morris',
            phone_number: '338788585738933',
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
                            theme: 'Solarized',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jalandhar',
                    country: 'Uzbekistan',
                    postalCode: '75370',
                    streetName: "King's Road",
                    streetNumber: '443',
                },
            },
            email: 'Kyle.Green@verizon.net',
            firstName: 'Harold',
            lastName: 'Burns',
            phone_number: '709003852160437',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Phoenix',
                    country: 'El Salvador',
                    postalCode: '37134',
                    streetName: 'Michigan Avenue',
                    streetNumber: '422',
                },
            },
            email: 'Samuel.Harrison@webmail.co.za',
            firstName: 'Stephen',
            lastName: 'Stewart',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Jack',
            lastName: 'Rose',
            phone_number: '658899981606503',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Yangon',
                    country: 'Singapore',
                    postalCode: '42235',
                    streetName: 'Market Street',
                    streetNumber: '45 bis',
                },
            },
            firstName: 'Peter',
            lastName: 'Wood',
            phone_number: '31460723454195',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sydney',
                    country: 'Mozambique',
                    postalCode: '47276',
                    streetName: 'Lombard Street',
                    streetNumber: '344',
                },
            },
            email: 'Olivia.Spencer@telus.net',
            firstName: 'Hannah',
            lastName: 'Bell',
            phone_number: '213551557005533',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Harbin',
                    country: 'Latvia',
                    postalCode: '16498',
                    streetName: "King's Road",
                    streetNumber: '34 bis',
                },
            },
            email: 'Betty.Stephens@openmailbox.org',
            firstName: 'Sharon',
            lastName: 'Alexander',
            phone_number: '451442408898324',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'William',
            lastName: 'Douglas',
            phone_number: '720388182874811',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Timothy.Turner@centrum.cz',
            firstName: 'Elizabeth',
            lastName: 'Cunningham',
            phone_number: '198795284247344',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hyderabad',
                    country: 'Germany',
                    postalCode: '39432',
                    streetName: 'Portobello Road',
                    streetNumber: '312 bis',
                },
            },
            email: 'Anthony.Ellis@yandex.ru',
            firstName: 'Catherine',
            lastName: 'West',
            phone_number: '27066003598370',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Arthur.James@verizon.net',
            firstName: 'Douglas',
            lastName: 'Collins',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bhubaneswar',
                    country: 'Honduras',
                    postalCode: '42480',
                    streetName: 'Via del Corso',
                    streetNumber: '206',
                },
            },
            firstName: 'Jeffrey',
            lastName: 'Smith',
            phone_number: '605510954774005',
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
                            theme: 'Red',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Gurgaon',
                    country: 'Bhutan',
                    postalCode: '56182',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '363',
                },
            },
            email: 'Jeremy.Nicholson@verizon.net',
            firstName: 'Kevin',
            lastName: 'King',
            phone_number: '594513758618949',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Shirley',
            lastName: 'Burns',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Belo Horizonte',
                    country: 'Venezuela',
                    postalCode: '46015',
                    streetName: 'Nanjing Road',
                    streetNumber: '144',
                },
            },
            email: 'Keith.Burnett@rogers.com',
            firstName: 'Roger',
            lastName: 'Adams',
            phone_number: '42161612606558',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dongguan',
                    country: 'Austria',
                    postalCode: '49469',
                    streetName: 'Oxford Street',
                    streetNumber: '210 bis',
                },
            },
            firstName: 'Helen',
            lastName: 'Russell',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hyderabad',
                    country: 'Zambia',
                    postalCode: '87392',
                    streetName: 'La Rambla',
                    streetNumber: '350 ter',
                },
            },
            firstName: 'Andrea',
            lastName: 'Chapman',
            phone_number: '789162616455634',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Foshan',
                    country: 'Tuvalu',
                    postalCode: '13335',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '347',
                },
            },
            email: 'Larry.Stephens@telus.net',
            firstName: 'Gregory',
            lastName: 'Gray',
            phone_number: '443371051698268',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chennai',
                    country: 'Tonga',
                    postalCode: '33030',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '384',
                },
            },
            firstName: 'Kimberly',
            lastName: 'White',
            phone_number: '592446144222761',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Argentina',
                    postalCode: '20440',
                    streetName: 'Khao San Road',
                    streetNumber: '73',
                },
            },
            firstName: 'Joe',
            lastName: 'Campbell',
            phone_number: '958009500706757',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Deborah',
            lastName: 'Hamilton',
            phone_number: '146641771166365',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Howrah',
                    country: 'Denmark',
                    postalCode: '66409',
                    streetName: 'Yonge Street',
                    streetNumber: '463',
                },
            },
            email: 'Virginia.Turner@bigpond.com',
            firstName: 'Stephen',
            lastName: 'Sutton',
            phone_number: '99443931951385',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sydney',
                    country: 'Argentina',
                    postalCode: '24387',
                    streetName: 'Fifth Avenue',
                    streetNumber: '15',
                },
            },
            firstName: 'George',
            lastName: 'Morris',
            phone_number: '421971189816164',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guangzhou',
                    country: 'Lithuania',
                    postalCode: '29102',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '245',
                },
            },
            email: 'Nicholas.Hughes@orange.fr',
            firstName: 'Peter',
            lastName: 'Hall',
            phone_number: '954825915952564',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Slovenia',
                    postalCode: '55456',
                    streetName: 'Market Street',
                    streetNumber: '68',
                },
            },
            email: 'Joe.Simpson@wow.com',
            firstName: 'Kathleen',
            lastName: 'Cook',
            phone_number: '82439556138788',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Aaron.Murray@inbox.com',
            firstName: 'Michelle',
            lastName: 'Campbell',
            phone_number: '641109054898266',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Stephanie.Dean@centrum.cz',
            firstName: 'Jeffrey',
            lastName: 'Nicholson',
            phone_number: '832855985880613',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Terry.George@mailinator.com',
            firstName: 'Gary',
            lastName: 'Morris',
            phone_number: '397044466624929',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dhaka',
                    country: 'South Sudan',
                    postalCode: '26402',
                    streetName: "King's Road",
                    streetNumber: '348',
                },
            },
            firstName: 'Carl',
            lastName: 'Mills',
            phone_number: '240051072284280',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Budapest',
                    country: 'Uganda',
                    postalCode: '31024',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '201',
                },
            },
            email: 'Sharon.King@seznam.cz',
            firstName: 'Sean',
            lastName: 'Arnold',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Solomon Islands',
                    postalCode: '64133',
                    streetName: 'Queen Street',
                    streetNumber: '197',
                },
            },
            firstName: 'Charles',
            lastName: 'Stevens',
            phone_number: '317537887881697',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Charles',
            lastName: 'Alexander',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'Estonia',
                    postalCode: '45294',
                    streetName: 'Champs Elysees',
                    streetNumber: '140',
                },
            },
            email: 'Gerald.Ford@gmail.co.in',
            firstName: 'Alexander',
            lastName: 'Richardson',
            phone_number: '482654870308486',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Alexandria',
                    country: 'Luxembourg',
                    postalCode: '11031',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '384',
                },
            },
            email: 'Christine.Cox@qq.com',
            firstName: 'Margaret',
            lastName: 'Palmer',
            phone_number: '669255509321047',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Edinburgh',
                    country: 'Costa Rica',
                    postalCode: '68048',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '259',
                },
            },
            email: 'Brandon.McDonald@icloud.com',
            firstName: 'Frank',
            lastName: 'Fletcher',
            phone_number: '175305605109512',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Melbourne',
                    country: 'Argentina',
                    postalCode: '15497',
                    streetName: 'Michigan Avenue',
                    streetNumber: '170',
                },
            },
            firstName: 'Zachary',
            lastName: 'Morris',
            phone_number: '118814109816434',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Madison',
            lastName: 'Pearce',
            phone_number: '7282654671468',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ankara',
                    country: 'Honduras',
                    postalCode: '53481',
                    streetName: 'Orchard Road',
                    streetNumber: '49',
                },
            },
            firstName: 'Gerald',
            lastName: 'Wright',
            phone_number: '903420618865192',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Berlin',
                    country: 'Mauritius',
                    postalCode: '89304',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '323',
                },
            },
            email: 'Janet.Porter@free.fr',
            firstName: 'Larry',
            lastName: 'Simpson',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Foshan',
                    country: 'Honduras',
                    postalCode: '01285',
                    streetName: 'Rodeo Drive',
                    streetNumber: '66',
                },
            },
            firstName: 'Nicole',
            lastName: 'Edwards',
            phone_number: '742047387353485',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hanoi',
                    country: 'Saint Vincent and the Grenadines',
                    postalCode: '93208',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '481 bis',
                },
            },
            email: 'Michelle.Pearce@docomo.ne.jp',
            firstName: 'Matthew',
            lastName: 'Moore',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '93258',
                    streetName: 'Rodeo Drive',
                    streetNumber: '270',
                },
            },
            email: 'Margaret.Cameron@hotmail.com',
            firstName: 'Margaret',
            lastName: 'Foster',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Delhi',
                    country: 'Guyana',
                    postalCode: '91272',
                    streetName: 'Nanjing Road',
                    streetNumber: '481',
                },
            },
            email: 'Katherine.Adams@hotmail.co.uk',
            firstName: 'Ethan',
            lastName: 'Henderson',
            phone_number: '139651000249040',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Charles',
            lastName: 'Simpson',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Wuhan',
                    country: 'Philippines',
                    postalCode: '63270',
                    streetName: 'Las Ramblas',
                    streetNumber: '276',
                },
            },
            email: 'Nicholas.Ford@ntlworld.co.uk',
            firstName: 'Deborah',
            lastName: 'Hughes',
            phone_number: '869815525476751',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Budapest',
                    country: 'Oman',
                    postalCode: '17014',
                    streetName: 'La Rambla',
                    streetNumber: '93',
                },
            },
            firstName: 'Evelyn',
            lastName: 'Stewart',
            phone_number: '486216931670990',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Moscow',
                    country: 'Samoa',
                    postalCode: '24396',
                    streetName: 'Baker Street',
                    streetNumber: '390',
                },
            },
            firstName: 'Jack',
            lastName: 'Robinson',
            phone_number: '31115186245008',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Austin',
            lastName: 'Smith',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Mark.Harrison@telus.net',
            firstName: 'Barbara',
            lastName: 'Mills',
            phone_number: '533744148354196',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'Mongolia',
                    postalCode: '54497',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '32',
                },
            },
            firstName: 'Alexander',
            lastName: 'West',
            phone_number: '246127248627610',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Philadelphia',
                    country: 'Malawi',
                    postalCode: '47463',
                    streetName: 'Broadway',
                    streetNumber: '174 bis',
                },
            },
            email: 'Jerry.Rose@hotmail.co.jp',
            firstName: 'Teresa',
            lastName: 'Reeves',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Bahrain',
                    postalCode: '02375',
                    streetName: 'Rodeo Drive',
                    streetNumber: '385',
                },
            },
            email: 'Jonathan.Simpson@mailbox.org',
            firstName: 'Madison',
            lastName: 'Shaw',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bogotá',
                    country: 'Liechtenstein',
                    postalCode: '27117',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '461',
                },
            },
            firstName: 'Dorothy',
            lastName: 'Stevens',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Ryan.White@lavabit.com',
            firstName: 'Gregory',
            lastName: 'Marshall',
            phone_number: '845270334875538',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Comoros',
                    postalCode: '88420',
                    streetName: 'Broadway',
                    streetNumber: '370',
                },
            },
            firstName: 'Megan',
            lastName: 'Holmes',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Khartoum',
                    country: 'Slovenia',
                    postalCode: '11081',
                    streetName: 'Market Street',
                    streetNumber: '406',
                },
            },
            firstName: 'Jason',
            lastName: 'Porter',
            phone_number: '355746459831488',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ghaziabad',
                    country: 'Mali',
                    postalCode: '66389',
                    streetName: 'Fifth Avenue',
                    streetNumber: '318',
                },
            },
            email: 'Gary.Marshall@live.ca',
            firstName: 'John',
            lastName: 'Robbins',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Tuvalu',
                    postalCode: '06395',
                    streetName: 'Lombard Street',
                    streetNumber: '481',
                },
            },
            email: 'Larry.Armstrong@hotmail.de',
            firstName: 'Donald',
            lastName: 'Cook',
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
                            theme: 'Atom One Light',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Brazil',
                    postalCode: '70369',
                    streetName: "King's Road",
                    streetNumber: '96',
                },
            },
            email: 'Judith.Cook@yahoo.co.jp',
            firstName: 'Virginia',
            lastName: 'Mills',
            phone_number: '801161967104808',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Richard.Holland@laposte.net',
            firstName: 'Shirley',
            lastName: 'Harris',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Evelyn.Gibson@gmail.de',
            firstName: 'Joseph',
            lastName: 'Oliver',
            phone_number: '861663006649953',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rajkot',
                    country: 'Cameroon',
                    postalCode: '61299',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '373',
                },
            },
            email: 'Gerald.Cooper@bt.com',
            firstName: 'Christina',
            lastName: 'Pearson',
            phone_number: '599160283183917',
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
                            notificationLevel: 'High',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Luxembourg',
                    postalCode: '07016',
                    streetName: 'Avenida Paulista',
                    streetNumber: '387',
                },
            },
            email: 'Brian.Douglas@ezweb.ne.jp',
            firstName: 'Nathan',
            lastName: 'Ford',
            phone_number: '278104111226276',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ahmedabad',
                    country: 'Honduras',
                    postalCode: '53351',
                    streetName: 'Las Ramblas',
                    streetNumber: '246',
                },
            },
            firstName: 'Scott',
            lastName: 'Mills',
            phone_number: '886258465216920',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Palau',
                    postalCode: '13020',
                    streetName: 'Nanjing Road',
                    streetNumber: '204',
                },
            },
            firstName: 'Alexander',
            lastName: 'West',
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
                            theme: 'Tomorrow',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tehran',
                    country: 'Liberia',
                    postalCode: '34373',
                    streetName: 'Unter den Linden',
                    streetNumber: '72 ter',
                },
            },
            email: 'Hannah.Lane@gmail.co.uk',
            firstName: 'Katherine',
            lastName: 'James',
            phone_number: '278062301200048',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chennai',
                    country: 'Argentina',
                    postalCode: '11156',
                    streetName: 'Oxford Street',
                    streetNumber: '422 bis',
                },
            },
            firstName: 'Ashley',
            lastName: 'Douglas',
            phone_number: '250904799820507',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fukuoka',
                    country: 'Argentina',
                    postalCode: '61309',
                    streetName: 'Portobello Road',
                    streetNumber: '477',
                },
            },
            firstName: 'Gregory',
            lastName: 'Wright',
            phone_number: '187499824502577',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shenyang',
                    country: 'Uzbekistan',
                    postalCode: '43090',
                    streetName: 'Avenida Paulista',
                    streetNumber: '325',
                },
            },
            email: 'Deborah.Barrett@optusnet.com.au',
            firstName: 'Jerry',
            lastName: 'Hale',
            phone_number: '637901767809349',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Henry.Graham@mail.ua',
            firstName: 'Virginia',
            lastName: 'Stephens',
            phone_number: '949827854526648',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shenyang',
                    country: 'Suriname',
                    postalCode: '79432',
                    streetName: 'Gran Via',
                    streetNumber: '374',
                },
            },
            email: 'Rachel.Nicholson@icloud.com.au',
            firstName: 'Albert',
            lastName: 'Dean',
            phone_number: '535465092797850',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kolkata',
                    country: 'Latvia',
                    postalCode: '67290',
                    streetName: 'Wall Street',
                    streetNumber: '105 ter',
                },
            },
            email: 'Virginia.Graham@mail.com.au',
            firstName: 'Mark',
            lastName: 'Cox',
            phone_number: '589623775386136',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Moradabad',
                    country: 'Honduras',
                    postalCode: '08315',
                    streetName: 'Unter den Linden',
                    streetNumber: '271',
                },
            },
            email: 'Samantha.King@laposte.net',
            firstName: 'Cynthia',
            lastName: 'Turner',
            phone_number: '290736787733597',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Tajikistan',
                    postalCode: '90075',
                    streetName: 'Oxford Street',
                    streetNumber: '259',
                },
            },
            email: 'Helen.Pearson@orange.fr',
            firstName: 'Jacqueline',
            lastName: 'Fisher',
            phone_number: '319843829979769',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Indore',
                    country: 'Australia',
                    postalCode: '31041',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '140',
                },
            },
            email: 'Donna.Lane@shaw.ca',
            firstName: 'Patrick',
            lastName: 'Hall',
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
                            theme: 'Dreamweaver',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Jonathan.White@sfr.fr',
            firstName: 'Susan',
            lastName: 'Foster',
            phone_number: '473050341573861',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Glasgow',
                    country: 'Kyrgyzstan',
                    postalCode: '10419',
                    streetName: 'Khao San Road',
                    streetNumber: '242',
                },
            },
            firstName: 'Nicole',
            lastName: 'Cooper',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            email: 'Barbara.Atkinson@gmail.com',
            firstName: 'Carolyn',
            lastName: 'Williams',
            phone_number: '230230579065584',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Harbin',
                    country: 'Jordan',
                    postalCode: '79467',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '479',
                },
            },
            email: 'Pamela.Gardner@sky.com',
            firstName: 'Mary',
            lastName: 'Barrett',
            phone_number: '654261008289249',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Gwalior',
                    country: 'North Korea',
                    postalCode: '05057',
                    streetName: 'Rodeo Drive',
                    streetNumber: '105 ter',
                },
            },
            firstName: 'Patricia',
            lastName: 'Morris',
            phone_number: '913639907349822',
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
                            theme: 'Dreamweaver',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Comoros',
                    postalCode: '86301',
                    streetName: "King's Road",
                    streetNumber: '130',
                },
            },
            email: 'Judith.Roberts@orange.fr',
            firstName: 'Henry',
            lastName: 'Brown',
            phone_number: '612033095297730',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mumbai',
                    country: 'United States of America',
                    postalCode: '36313',
                    streetName: 'Gran Via',
                    streetNumber: '491',
                },
            },
            firstName: 'Catherine',
            lastName: 'Morris',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Barcelona',
                    country: 'Cabo Verde',
                    postalCode: '21334',
                    streetName: 'Orchard Road',
                    streetNumber: '154',
                },
            },
            firstName: 'Diane',
            lastName: 'Burns',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cairo',
                    country: 'Nicaragua',
                    postalCode: '73209',
                    streetName: 'Yonge Street',
                    streetNumber: '368',
                },
            },
            firstName: 'Jennifer',
            lastName: 'White',
            phone_number: '715017518401352',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'Czech Republic',
                    postalCode: '49175',
                    streetName: 'Broadway',
                    streetNumber: '68 ter',
                },
            },
            firstName: 'Cynthia',
            lastName: 'Scott',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuwait City',
                    country: 'Ethiopia',
                    postalCode: '54494',
                    streetName: 'Bourbon Street',
                    streetNumber: '285',
                },
            },
            firstName: 'Donald',
            lastName: 'Lawrence',
            phone_number: '174774705449388',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ahmedabad',
                    country: 'Slovenia',
                    postalCode: '73201',
                    streetName: 'Portobello Road',
                    streetNumber: '312',
                },
            },
            email: 'James.Collins@charter.net',
            firstName: 'Paul',
            lastName: 'Holland',
            phone_number: '150496828441701',
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Carol',
            lastName: 'Lawrence',
            phone_number: '448052839726720',
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
                            theme: 'Dreamweaver',
                        },
                    },
                },
            },
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

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Uganda',
                    postalCode: '90296',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '172',
                },
            },
            email: 'Charles.Ward@web.de',
            firstName: 'John',
            lastName: 'Lewis',
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
                },
            },
        },
    });

    id = person?.user?.admin?.id;
    if (id) admins.push(id);

    return admins;
}
