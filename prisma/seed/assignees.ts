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
 * random-json -c 100 -u 'JePos:DirCo|VPO|Info|Secge' -u 'Lvl:High|Medium|Low' -f prisma/seed/admins.json --before $'\nperson = await db.person.create(' --after $');\n\nid = person?.user?.admin?.id; if (id) admins.push(id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedPeopleTestData(db: PrismaClient) {
    const assignees = [];
    let person;
    let id;

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Christina.Jackson@verizon.net',
            firstName: 'Stephen',
            lastName: 'Mills',
            phone_number: '140243088764116',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    nbApplications: 6,
                },
            },
            email: 'Paul.Taylor@gmail.com',
            firstName: 'Timothy',
            lastName: 'Jackson',
            phone_number: '224604776934880',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dublin',
                    country: 'Kazakhstan',
                    postalCode: '75071',
                    streetName: 'Oxford Street',
                    streetNumber: '65',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Harold',
            lastName: 'Alexander',
            phone_number: '776745416097078',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'New Zealand',
                    postalCode: '54425',
                    streetName: 'Yonge Street',
                    streetNumber: '485',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2025,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 3,
                },
            },
            email: 'Elizabeth.Gardner@hotmail.co.jp',
            firstName: 'Emma',
            lastName: 'Cunningham',
            phone_number: '679651240848758',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 10,
                },
            },
            firstName: 'Jason',
            lastName: 'Ellis',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 7,
                },
            },
            email: 'Joshua.Burnett@gmail.de',
            firstName: 'Ethan',
            lastName: 'Graham',
            phone_number: '613663963220641',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'São Paulo',
                    country: 'Montenegro',
                    postalCode: '63432',
                    streetName: 'Unter den Linden',
                    streetNumber: '329',
                },
            },
            assignee: {
                create: {
                    nbApplications: 1,
                },
            },
            email: 'Sarah.Brown@hotmail.de',
            firstName: 'Anthony',
            lastName: 'Richardson',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Anthony.Rose@yandex.com',
            firstName: 'Kathryn',
            lastName: 'Stephens',
            phone_number: '768626729416731',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Osaka',
                    country: 'El Salvador',
                    postalCode: '42273',
                    streetName: 'Orchard Road',
                    streetNumber: '475',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 12,
                },
            },
            email: 'Charles.Jones@web.de',
            firstName: 'Douglas',
            lastName: 'Smith',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {},
            },
            email: 'Ann.Harrison@gmail.co.uk',
            firstName: 'Nancy',
            lastName: 'Morrison',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kinshasa',
                    country: 'Laos',
                    postalCode: '73089',
                    streetName: 'Nanjing Road',
                    streetNumber: '206',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 7,
                },
            },
            email: 'Julie.Knight@numericable.fr',
            firstName: 'Kenneth',
            lastName: 'Ward',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 7,
                },
            },
            email: 'Angela.Barrett@outlook.co.uk',
            firstName: 'Dorothy',
            lastName: 'Hall',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Varanasi',
                    country: 'Venezuela',
                    postalCode: '93264',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '273',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2023,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 1,
                },
            },
            email: 'Carolyn.Knight@outlook.com',
            firstName: 'Helen',
            lastName: 'Green',
            phone_number: '487718628071981',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 8,
                },
            },
            email: 'Jeffrey.Perry@comcast.net',
            firstName: 'Christopher',
            lastName: 'Cooper',
            phone_number: '509511888979077',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    nbApplications: 5,
                },
            },
            firstName: 'Christian',
            lastName: 'Palmer',
            phone_number: '146120670096521',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'Saint Lucia',
                    postalCode: '07189',
                    streetName: 'Fifth Avenue',
                    streetNumber: '411 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2021,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 11,
                },
            },
            firstName: 'Judith',
            lastName: 'Turner',
            phone_number: '75761403780482',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2028,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            email: 'Alexander.Cameron@runbox.com',
            firstName: 'Joe',
            lastName: 'Mitchell',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Mauritius',
                    postalCode: '87313',
                    streetName: 'Portobello Road',
                    streetNumber: '440',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            email: 'Anna.Wilson@gmail.co.in',
            firstName: 'Joseph',
            lastName: 'Watson',
            phone_number: '140053307265644',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Coimbatore',
                    country: 'Grenada',
                    postalCode: '08047',
                    streetName: 'Unter den Linden',
                    streetNumber: '5',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Carol.Ross@live.in',
            firstName: 'Debra',
            lastName: 'Lawrence',
            phone_number: '73067462080122',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cairo',
                    country: 'Switzerland',
                    postalCode: '95138',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '8',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2022,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 0,
                },
            },
            email: 'Gregory.Hill@gmx.de',
            firstName: 'Peter',
            lastName: 'Holmes',
            phone_number: '111289552889856',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {},
            },
            firstName: 'Douglas',
            lastName: 'Berry',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Honduras',
                    postalCode: '72121',
                    streetName: 'Avenida Paulista',
                    streetNumber: '55',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Richard.Matthews@lavabit.com',
            firstName: 'Teresa',
            lastName: 'Cole',
            phone_number: '363394677563253',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kalyan-Dombivli',
                    country: 'Czech Republic',
                    postalCode: '47266',
                    streetName: 'Ginza',
                    streetNumber: '472 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 3,
                },
            },
            email: 'Tyler.Watson@verizon.net',
            firstName: 'Frank',
            lastName: 'Berry',
            phone_number: '234933760233299',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Marseille',
                    country: 'Vietnam',
                    postalCode: '31228',
                    streetName: 'Khao San Road',
                    streetNumber: '341',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2027,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 9,
                },
            },
            email: 'Gerald.Spencer@ukr.net',
            firstName: 'Kathryn',
            lastName: 'Stone',
            phone_number: '899549006802727',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cape Town',
                    country: 'Grenada',
                    postalCode: '95308',
                    streetName: 'Market Street',
                    streetNumber: '160',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2024,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            firstName: 'Scott',
            lastName: 'Hughes',
            phone_number: '525933971773368',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2024,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 5,
                },
            },
            email: 'Stephanie.Bailey@zoho.com',
            firstName: 'Anthony',
            lastName: 'Graham',
            phone_number: '115466612736124',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 19,
                            graduationYear: 2022,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 4,
                },
            },
            email: 'Martha.Blake@icloud.com.au',
            firstName: 'Kathryn',
            lastName: 'Rose',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Wuhan',
                    country: 'Barbados',
                    postalCode: '78477',
                    streetName: 'Wall Street',
                    streetNumber: '185',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 7,
                },
            },
            firstName: 'Ronald',
            lastName: 'Arnold',
            phone_number: '964938770413487',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Monterrey',
                    country: 'Rwanda',
                    postalCode: '01261',
                    streetName: 'Wall Street',
                    streetNumber: '285',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2023,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            firstName: 'Douglas',
            lastName: 'Watson',
            phone_number: '810320740809754',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Atlanta',
                    country: 'Ukraine',
                    postalCode: '64057',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '36',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 1,
                },
            },
            email: 'Raymond.Robinson@hotmail.fr',
            firstName: 'Richard',
            lastName: 'Murray',
            phone_number: '674781236333112',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Julie.Hudson@mail.ua',
            firstName: 'Mary',
            lastName: 'James',
            phone_number: '999365433158222',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2022,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            firstName: 'Mary',
            lastName: 'Watts',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2023,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            firstName: 'Raymond',
            lastName: 'Green',
            phone_number: '486413606087884',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2028,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Stephen.Holland@westnet.com.au',
            firstName: 'Jack',
            lastName: 'Murray',
            phone_number: '367640550655958',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Athens',
                    country: 'Greece',
                    postalCode: '48450',
                    streetName: 'Unter den Linden',
                    streetNumber: '165',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 5,
                },
            },
            firstName: 'Peter',
            lastName: 'Walker',
            phone_number: '74545511243461',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2021,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            email: 'Michelle.Cameron@rediffmail.com',
            firstName: 'Dorothy',
            lastName: 'Roberts',
            phone_number: '9792831422102',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Warsaw',
                    country: 'Serbia',
                    postalCode: '07105',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '313 bis',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Shirley.Matthews@yandex.ru',
            firstName: 'Matthew',
            lastName: 'Morrison',
            phone_number: '73049495468081',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jinan',
                    country: 'Andorra',
                    postalCode: '35128',
                    streetName: 'Portobello Road',
                    streetNumber: '84',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 19,
                            graduationYear: 2020,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            firstName: 'Larry',
            lastName: 'Cook',
            phone_number: '520590667501715',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Suzhou',
                    country: 'Mali',
                    postalCode: '39001',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '492 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2020,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                },
            },
            email: 'Christian.Simpson@gmail.co.jp',
            firstName: 'Mark',
            lastName: 'Ellison',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dallas',
                    country: 'Indonesia',
                    postalCode: '07308',
                    streetName: 'Rodeo Drive',
                    streetNumber: '299 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2022,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            firstName: 'Andrew',
            lastName: 'Roberts',
            phone_number: '289751971191516',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Monterrey',
                    country: 'Liechtenstein',
                    postalCode: '25454',
                    streetName: 'Broadway',
                    streetNumber: '148 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 11,
                },
            },
            email: 'Jerry.Collins@shaw.ca',
            firstName: 'Brenda',
            lastName: 'Mitchell',
            phone_number: '463139080123560',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Milan',
                    country: 'Togo',
                    postalCode: '94491',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '233',
                },
            },
            assignee: {
                create: {},
            },
            firstName: 'Scott',
            lastName: 'Burton',
            phone_number: '203735024128756',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Vienna',
                    country: 'Nauru',
                    postalCode: '24040',
                    streetName: 'Avenida Paulista',
                    streetNumber: '381',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2021,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Nicholas.King@sfr.fr',
            firstName: 'Susan',
            lastName: 'Stephens',
            phone_number: '800218397801092',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 9,
                },
            },
            email: 'Katherine.Carter@outlook.co.uk',
            firstName: 'Jonathan',
            lastName: 'Porter',
            phone_number: '389559145311400',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Foshan',
                    country: 'Senegal',
                    postalCode: '09266',
                    streetName: 'Rodeo Drive',
                    streetNumber: '361',
                },
            },
            assignee: {
                create: {
                    nbApplications: 13,
                },
            },
            email: 'Jonathan.Gardner@runbox.com',
            firstName: 'Timothy',
            lastName: 'Henderson',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Portugal',
                    postalCode: '36289',
                    streetName: "King's Road",
                    streetNumber: '344',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                },
            },
            firstName: 'Kimberly',
            lastName: 'Ford',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 5,
                },
            },
            firstName: 'Sean',
            lastName: 'Glover',
            phone_number: '720096376310965',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aligarh',
                    country: 'Germany',
                    postalCode: '04436',
                    streetName: 'Broadway',
                    streetNumber: '420',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 3,
                },
            },
            email: 'Dorothy.Clarke@live.in',
            firstName: 'Sandra',
            lastName: 'Jones',
            phone_number: '677330853355891',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jinan',
                    country: 'Belgium',
                    postalCode: '86093',
                    streetName: 'Ginza',
                    streetNumber: '316 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 6,
                },
            },
            firstName: 'Catherine',
            lastName: 'Stewart',
            phone_number: '63088086012718',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Copenhagen',
                    country: 'Rwanda',
                    postalCode: '75207',
                    streetName: 'Khao San Road',
                    streetNumber: '53',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 12,
                },
            },
            email: 'Paul.Ellison@btopenworld.com',
            firstName: 'Linda',
            lastName: 'Mitchell',
            phone_number: '95877892085490',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Varanasi',
                    country: 'Haiti',
                    postalCode: '68173',
                    streetName: 'Beale Street',
                    streetNumber: '246',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2020,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 0,
                },
            },
            email: 'Emma.Turner@ukr.net',
            firstName: 'Jerry',
            lastName: 'Burnett',
            phone_number: '422764792246377',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Helsinki',
                    country: 'Seychelles',
                    postalCode: '26151',
                    streetName: 'Wall Street',
                    streetNumber: '31',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2023,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            firstName: 'Kathryn',
            lastName: 'Price',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tianjin',
                    country: 'Nicaragua',
                    postalCode: '66010',
                    streetName: 'Michigan Avenue',
                    streetNumber: '303 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Samantha',
            lastName: 'Glover',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Angela.Shaw@yandex.com',
            firstName: 'Justin',
            lastName: 'Stevens',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Laura.Harrison@freenet.de',
            firstName: 'William',
            lastName: 'Burns',
            phone_number: '908438917182195',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chittagong',
                    country: 'Vietnam',
                    postalCode: '49475',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '453 ter',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 3,
                },
            },
            email: 'Harold.Wilson@netcourrier.com',
            firstName: 'Amy',
            lastName: 'Burns',
            phone_number: '21916510359786',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2029,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Amy',
            lastName: 'Gibson',
            phone_number: '209808334333638',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mexico City',
                    country: 'Armenia',
                    postalCode: '63117',
                    streetName: 'Via del Corso',
                    streetNumber: '249',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 19,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 7,
                },
            },
            email: 'Emily.Gray@volny.cz',
            firstName: 'Cheryl',
            lastName: 'Jackson',
            phone_number: '570987923386207',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chengdu',
                    country: 'France',
                    postalCode: '53083',
                    streetName: 'Portobello Road',
                    streetNumber: '431',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 19,
                            graduationYear: 2021,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 11,
                },
            },
            firstName: 'Terry',
            lastName: 'Moore',
            phone_number: '616396369494045',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2025,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Patricia.Walker@bt.com',
            firstName: 'Andrea',
            lastName: 'Bailey',
            phone_number: '933502310770925',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'New Zealand',
                    postalCode: '06350',
                    streetName: 'Orchard Road',
                    streetNumber: '467',
                },
            },
            assignee: {
                create: {
                    nbApplications: 0,
                },
            },
            email: 'Dorothy.Jones@blueyonder.co.uk',
            firstName: 'Larry',
            lastName: 'Marshall',
            phone_number: '777556104218572',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kalyan-Dombivli',
                    country: 'Lebanon',
                    postalCode: '28290',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '260',
                },
            },
            assignee: {
                create: {},
            },
            email: 'Ann.Ward@yahoo.fr',
            firstName: 'Michael',
            lastName: 'Hall',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Katherine',
            lastName: 'Hall',
            phone_number: '753925051602553',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Khartoum',
                    country: 'Poland',
                    postalCode: '07025',
                    streetName: 'Michigan Avenue',
                    streetNumber: '103 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 6,
                },
            },
            email: 'Mark.Edwards@hotmail.com',
            firstName: 'Brian',
            lastName: 'Chapman',
            phone_number: '348394106779737',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lima',
                    country: 'Laos',
                    postalCode: '21150',
                    streetName: 'Lombard Street',
                    streetNumber: '168',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2024,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 12,
                },
            },
            firstName: 'Douglas',
            lastName: 'Gardner',
            phone_number: '303795089286745',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 3,
                },
            },
            firstName: 'Helen',
            lastName: 'Mills',
            phone_number: '496216285320789',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: "Xi'an",
                    country: 'Palau',
                    postalCode: '51369',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '70',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            firstName: 'Laura',
            lastName: 'Warren',
            phone_number: '142447137466695',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nairobi',
                    country: 'Poland',
                    postalCode: '52185',
                    streetName: 'Gran Via',
                    streetNumber: '351',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2023,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Sarah.Porter@bbox.fr',
            firstName: 'Elizabeth',
            lastName: 'Ford',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Rebecca',
            lastName: 'Berry',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            firstName: 'Emily',
            lastName: 'Graham',
            phone_number: '868868980048396',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Singapore',
                    country: 'Jordan',
                    postalCode: '92146',
                    streetName: 'Nanjing Road',
                    streetNumber: '277',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2020,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Nathan.Murray@mailbox.org',
            firstName: 'Kelly',
            lastName: 'Harris',
            phone_number: '345240818571446',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2023,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 2,
                },
            },
            firstName: 'Mary',
            lastName: 'Douglas',
            phone_number: '57599617899025',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2025,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Barbara',
            lastName: 'Ross',
            phone_number: '516049634963848',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guayaquil',
                    country: 'Timor-Leste',
                    postalCode: '11261',
                    streetName: 'Rodeo Drive',
                    streetNumber: '72',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 19,
                            graduationYear: 2027,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            firstName: 'Christopher',
            lastName: 'Stephens',
            phone_number: '453848152399817',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Syria',
                    postalCode: '24085',
                    streetName: 'Rodeo Drive',
                    streetNumber: '430',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Joseph.Cooper@talktalk.net',
            firstName: 'Samantha',
            lastName: 'Stone',
            phone_number: '761536574498817',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2028,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Jennifer.Taylor@ukr.net',
            firstName: 'Jack',
            lastName: 'Burton',
            phone_number: '893876854864454',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aurangabad',
                    country: 'Sao Tome and Principe',
                    postalCode: '36399',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '215',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2025,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Rebecca.Pearce@gmail.fr',
            firstName: 'Kenneth',
            lastName: 'Pearson',
            phone_number: '19753006406461',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Delhi',
                    country: 'Lithuania',
                    postalCode: '45104',
                    streetName: 'Michigan Avenue',
                    streetNumber: '96 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2021,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Nancy.Davies@ukr.net',
            firstName: 'Amy',
            lastName: 'Walker',
            phone_number: '790661206622950',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'South Korea',
                    postalCode: '51077',
                    streetName: 'Broadway',
                    streetNumber: '212',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 8,
                },
            },
            email: 'Michael.Turner@verizon.net',
            firstName: 'Ryan',
            lastName: 'Dean',
            phone_number: '189954374271883',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Khartoum',
                    country: 'Comoros',
                    postalCode: '06415',
                    streetName: 'Wall Street',
                    streetNumber: '432 bis',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            firstName: 'Shirley',
            lastName: 'Lawrence',
            phone_number: '627980974343663',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2022,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            email: 'Frank.Richardson@t-online.de',
            firstName: 'Pamela',
            lastName: 'Johnson',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'San Marino',
                    postalCode: '45221',
                    streetName: 'Bourbon Street',
                    streetNumber: '330',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2023,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Cynthia.Bailey@earthlink.net',
            firstName: 'Joe',
            lastName: 'Alexander',
            phone_number: '950740486322041',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rajkot',
                    country: 'Haiti',
                    postalCode: '90466',
                    streetName: 'Las Ramblas',
                    streetNumber: '298',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 11,
                },
            },
            firstName: 'Hannah',
            lastName: 'Baker',
            phone_number: '16575512560944',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lagos',
                    country: 'Armenia',
                    postalCode: '69154',
                    streetName: 'Wall Street',
                    streetNumber: '73',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2024,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            email: 'Andrew.Spencer@yahoo.com',
            firstName: 'Jonathan',
            lastName: 'Burnett',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Milan',
                    country: 'Iraq',
                    postalCode: '57092',
                    streetName: 'Wall Street',
                    streetNumber: '438',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 1,
                },
            },
            email: 'Lisa.Reid@rediffmail.com',
            firstName: 'Anna',
            lastName: 'Carter',
            phone_number: '833073290574285',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            firstName: 'George',
            lastName: 'Hamilton',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 10,
                },
            },
            email: 'Roger.Hamilton@web.de',
            firstName: 'Kathryn',
            lastName: 'George',
            phone_number: '713429703433789',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Virginia',
            lastName: 'Hamilton',
            phone_number: '399190063661031',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Singapore',
                    country: 'Brunei',
                    postalCode: '43184',
                    streetName: 'Beale Street',
                    streetNumber: '456',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2020,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Sara.George@wanadoo.fr',
            firstName: 'Brandon',
            lastName: 'Phillips',
            phone_number: '201085901229004',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2022,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Carol.Richardson@club-internet.fr',
            firstName: 'Mark',
            lastName: 'Burns',
            phone_number: '271550243621561',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Madrid',
                    country: 'South Africa',
                    postalCode: '39345',
                    streetName: 'Fifth Avenue',
                    streetNumber: '125',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2020,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 8,
                },
            },
            email: 'Judith.Watson@icloud.com',
            firstName: 'Anthony',
            lastName: 'Martin',
            phone_number: '935361259474908',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Namibia',
                    postalCode: '63242',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '16 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2020,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 9,
                },
            },
            firstName: 'Ronald',
            lastName: 'Campbell',
            phone_number: '768809266611435',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 10,
                },
            },
            email: 'Stephen.Evans@yahoo.co.jp',
            firstName: 'Kathleen',
            lastName: 'Atkinson',
            phone_number: '562712648361151',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 0,
                },
            },
            email: 'Samuel.Smith@bellsouth.net',
            firstName: 'Lauren',
            lastName: 'Perry',
            phone_number: '268534435672875',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Brazil',
                    postalCode: '25353',
                    streetName: 'Nanjing Road',
                    streetNumber: '262',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 3,
                },
            },
            email: 'Samuel.Walker@rediffmail.com',
            firstName: 'Stephen',
            lastName: 'Green',
            phone_number: '901941543840908',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nagoya',
                    country: 'Albania',
                    postalCode: '12028',
                    streetName: 'Queen Street',
                    streetNumber: '39',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2023,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 13,
                },
            },
            firstName: 'Maria',
            lastName: 'Morgan',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Zhengzhou',
                    country: 'Comoros',
                    postalCode: '14388',
                    streetName: 'Beale Street',
                    streetNumber: '238',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Anthony.Hill@yahoo.fr',
            firstName: 'Melissa',
            lastName: 'Porter',
            phone_number: '739924653238715',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Romania',
                    postalCode: '56246',
                    streetName: 'Khao San Road',
                    streetNumber: '13',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2025,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            firstName: 'Joseph',
            lastName: 'Cook',
            phone_number: '81834229042213',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Pakistan',
                    postalCode: '91440',
                    streetName: 'Las Ramblas',
                    streetNumber: '96 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 1,
                },
            },
            email: 'Jennifer.Holmes@yahoo.co.in',
            firstName: 'Jeffrey',
            lastName: 'Bell',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Andorra',
                    postalCode: '92497',
                    streetName: 'La Rambla',
                    streetNumber: '121',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2025,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 13,
                },
            },
            email: 'Kevin.Collins@bellsouth.net',
            firstName: 'Joyce',
            lastName: 'Hall',
            phone_number: '770964030059449',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    id = person?.assignee?.id;
    if (id) assignees.push(id);

    return assignees;
}
