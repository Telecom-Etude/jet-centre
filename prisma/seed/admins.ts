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

export async function seedAdminsTestData(db: PrismaClient) {
    const admins = [];
    let person;
    let id;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ranchi',
                    country: 'Tanzania',
                    postalCode: '41384',
                    streetName: 'Abbey Road',
                    streetNumber: '300 bis',
                },
            },
            email: 'Jose.Smith@bell.net',
            firstName: 'Jeremy',
            lastName: 'Stewart',
            phone_number: '941216891022923',
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
                            theme: 'rgb(219, 251, 141)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Tanzania',
                    postalCode: '71356',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '297',
                },
            },
            email: 'Ann.Moore@gmail.co.in',
            firstName: 'Charles',
            lastName: 'Edwards',
            phone_number: '921052000851475',
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
        select: {
            user: {
                select: {
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
                    city: 'Lima',
                    country: 'Guyana',
                    postalCode: '23263',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '312',
                },
            },
            email: 'Jason.Taylor@tiscali.co.uk',
            firstName: 'Christian',
            lastName: 'James',
        },
        select: {
            user: {
                select: {
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
                    country: 'Nicaragua',
                    postalCode: '30041',
                    streetName: 'Bourbon Street',
                    streetNumber: '355',
                },
            },
            firstName: 'Brandon',
            lastName: 'George',
            phone_number: '895824163987916',
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
                            theme: 'rgb(96, 207, 93)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Jack.Mills@btconnect.com',
            firstName: 'Elizabeth',
            lastName: 'Phillips',
            phone_number: '420171078108655',
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
        select: {
            user: {
                select: {
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
                    city: 'Cologne',
                    country: 'Bahamas',
                    postalCode: '25214',
                    streetName: 'La Rambla',
                    streetNumber: '210',
                },
            },
            firstName: 'Henry',
            lastName: 'Turner',
            phone_number: '551928398243625',
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
                            theme: 'rgb(252, 176, 225)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Sara.Harvey@ukr.net',
            firstName: 'Walter',
            lastName: 'Clarke',
            phone_number: '130079308017177',
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
        select: {
            user: {
                select: {
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
                    country: 'Dominican Republic',
                    postalCode: '90006',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '448',
                },
            },
            email: 'Steven.Hunter@numericable.fr',
            firstName: 'Benjamin',
            lastName: 'Davies',
            phone_number: '987883752823321',
        },
        select: {
            user: {
                select: {
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
            email: 'Brandon.Lewis@cox.net',
            firstName: 'Jonathan',
            lastName: 'Thompson',
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
                    city: 'Howrah',
                    country: 'Ethiopia',
                    postalCode: '61277',
                    streetName: 'Rodeo Drive',
                    streetNumber: '326',
                },
            },
            firstName: 'Peter',
            lastName: 'King',
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
                            theme: 'rgb(255, 2, 68)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'North Macedonia',
                    postalCode: '01242',
                    streetName: 'Oxford Street',
                    streetNumber: '344',
                },
            },
            email: 'Samuel.Palmer@volny.cz',
            firstName: 'Alexander',
            lastName: 'Johnston',
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
                            theme: 'rgb(186, 160, 45)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Samantha.Taylor@docomo.ne.jp',
            firstName: 'Jose',
            lastName: 'Moore',
            phone_number: '941079722480732',
        },
        select: {
            user: {
                select: {
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
            email: 'Christopher.Thompson@live.com',
            firstName: 'Samantha',
            lastName: 'Evans',
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
                            theme: 'rgb(63, 250, 158)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Chile',
                    postalCode: '12196',
                    streetName: 'Gran Via',
                    streetNumber: '487 bis',
                },
            },
            email: 'Victoria.Perry@mailinator.com',
            firstName: 'David',
            lastName: 'Oliver',
            phone_number: '574435035871652',
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
        select: {
            user: {
                select: {
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
                    country: 'Angola',
                    postalCode: '10136',
                    streetName: 'Gran Via',
                    streetNumber: '494',
                },
            },
            firstName: 'Paul',
            lastName: 'Burns',
            phone_number: '814450591580964',
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
            email: 'Hannah.Gardner@hushmail.com',
            firstName: 'Megan',
            lastName: 'Palmer',
            phone_number: '509622976519745',
        },
        select: {
            user: {
                select: {
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
                    country: 'Sao Tome and Principe',
                    postalCode: '19227',
                    streetName: 'Michigan Avenue',
                    streetNumber: '81',
                },
            },
            email: 'Walter.Harvey@centrum.cz',
            firstName: 'Nicholas',
            lastName: 'Reeves',
            phone_number: '87011610412189',
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
                            theme: 'rgb(124, 94, 183)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Melissa.Hill@yahoo.com',
            firstName: 'Daniel',
            lastName: 'Richards',
            phone_number: '100445405837915',
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
                            theme: 'rgb(99, 42, 162)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Japan',
                    postalCode: '57411',
                    streetName: 'Khao San Road',
                    streetNumber: '211 bis',
                },
            },
            email: 'James.Holmes@charter.net',
            firstName: 'Jason',
            lastName: 'Simpson',
            phone_number: '368012244791010',
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
                            theme: 'rgb(124, 17, 235)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Keith.Stephens@openmailbox.org',
            firstName: 'Madison',
            lastName: 'Atkinson',
            phone_number: '5433032702762',
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
                            theme: 'rgb(51, 195, 192)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Finland',
                    postalCode: '88128',
                    streetName: 'Las Ramblas',
                    streetNumber: '315 bis',
                },
            },
            firstName: 'Sandra',
            lastName: 'Shaw',
            phone_number: '12831878381609',
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
                    city: 'Ludhiana',
                    country: 'Slovenia',
                    postalCode: '11350',
                    streetName: 'Yonge Street',
                    streetNumber: '496',
                },
            },
            email: 'Sarah.Price@aol.com',
            firstName: 'Jesse',
            lastName: 'Green',
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
                    city: 'Singapore',
                    country: 'Slovenia',
                    postalCode: '04203',
                    streetName: 'Nanjing Road',
                    streetNumber: '267',
                },
            },
            email: 'Austin.Hudson@lavabit.com',
            firstName: 'Nicholas',
            lastName: 'Cole',
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
                            theme: 'rgb(166, 175, 109)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Miami',
                    country: 'Albania',
                    postalCode: '78468',
                    streetName: 'Gran Via',
                    streetNumber: '457',
                },
            },
            email: 'Timothy.Cox@yahoo.de',
            firstName: 'Nicole',
            lastName: 'McDonald',
            phone_number: '312534585281492',
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
                            theme: 'rgb(185, 70, 3)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Kinshasa',
                    country: 'Dominica',
                    postalCode: '84255',
                    streetName: 'Bourbon Street',
                    streetNumber: '74',
                },
            },
            email: 'Anthony.Brown@shaw.ca',
            firstName: 'Andrew',
            lastName: 'Atkinson',
            phone_number: '261004320438786',
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
                    city: 'Dongguan',
                    country: 'Djibouti',
                    postalCode: '90338',
                    streetName: 'Broadway',
                    streetNumber: '418 bis',
                },
            },
            email: 'Laura.Taylor@fastmail.com',
            firstName: 'Megan',
            lastName: 'Holmes',
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
                            theme: 'rgb(20, 29, 203)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Frank.Warren@neuf.fr',
            firstName: 'Pamela',
            lastName: 'Atkinson',
            phone_number: '52297441449208',
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
                            theme: 'rgb(236, 39, 249)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Bolivia',
                    postalCode: '19491',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '487',
                },
            },
            firstName: 'Diane',
            lastName: 'Reeves',
        },
        select: {
            user: {
                select: {
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
                    city: 'Kinshasa',
                    country: 'Bahamas',
                    postalCode: '93333',
                    streetName: 'Yonge Street',
                    streetNumber: '77',
                },
            },
            firstName: 'Carol',
            lastName: 'Martin',
            phone_number: '224942058015365',
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
                            theme: 'rgb(31, 208, 195)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Malta',
                    postalCode: '41447',
                    streetName: 'Fifth Avenue',
                    streetNumber: '353',
                },
            },
            email: 'Carol.Hale@sfr.fr',
            firstName: 'Douglas',
            lastName: 'Foster',
            phone_number: '801634736103334',
        },
        select: {
            user: {
                select: {
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
            email: 'Julie.Ellison@aliceadsl.fr',
            firstName: 'Terry',
            lastName: 'Henderson',
            phone_number: '396540298057512',
        },
        select: {
            user: {
                select: {
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
                    city: 'Boston',
                    country: 'Iran',
                    postalCode: '71053',
                    streetName: 'Michigan Avenue',
                    streetNumber: '217',
                },
            },
            email: 'Brandon.Simpson@charter.net',
            firstName: 'Martha',
            lastName: 'Stone',
            phone_number: '299315700641528',
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
                            theme: 'rgb(184, 230, 56)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: "Xi'an",
                    country: 'Ecuador',
                    postalCode: '76323',
                    streetName: 'Fifth Avenue',
                    streetNumber: '37',
                },
            },
            firstName: 'Cheryl',
            lastName: 'Harrison',
            phone_number: '816154230470608',
        },
        select: {
            user: {
                select: {
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
                    country: 'Israel',
                    postalCode: '63105',
                    streetName: 'Avenida Paulista',
                    streetNumber: '365',
                },
            },
            email: 'Melissa.Johnston@yahoo.co.in',
            firstName: 'Olivia',
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
                            notificationLevel: 'Medium',
                            theme: 'rgb(249, 77, 169)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Poland',
                    postalCode: '84314',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '248 bis',
                },
            },
            firstName: 'Frances',
            lastName: 'Pearson',
            phone_number: '829736130508443',
        },
        select: {
            user: {
                select: {
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
            email: 'Steven.Fisher@bt.com',
            firstName: 'Benjamin',
            lastName: 'Adams',
            phone_number: '90544298763213',
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
                            theme: 'rgb(226, 194, 101)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Pittsburgh',
                    country: 'Saint Kitts and Nevis',
                    postalCode: '02031',
                    streetName: 'Market Street',
                    streetNumber: '434',
                },
            },
            email: 'Christina.Armstrong@list.ru',
            firstName: 'Laura',
            lastName: 'Phillips',
            phone_number: '474980105872628',
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
                            theme: 'rgb(235, 161, 129)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Recife',
                    country: 'Singapore',
                    postalCode: '64397',
                    streetName: 'Queen Street',
                    streetNumber: '343',
                },
            },
            firstName: 'David',
            lastName: 'Gray',
            phone_number: '883277635047103',
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
                            theme: 'rgb(165, 196, 24)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Oslo',
                    country: 'Israel',
                    postalCode: '69059',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '241',
                },
            },
            firstName: 'Andrew',
            lastName: 'Green',
            phone_number: '518173330174260',
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
                            theme: 'rgb(143, 206, 107)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Cheryl.Stephens@gmail.com',
            firstName: 'Peter',
            lastName: 'Harrison',
            phone_number: '665510718636313',
        },
        select: {
            user: {
                select: {
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
                    city: 'Mysore',
                    country: 'Slovenia',
                    postalCode: '76309',
                    streetName: 'La Rambla',
                    streetNumber: '109',
                },
            },
            email: 'Jason.Marshall@msn.com',
            firstName: 'Cheryl',
            lastName: 'Burton',
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
                            theme: 'rgb(133, 118, 223)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            firstName: 'Kenneth',
            lastName: 'Blake',
            phone_number: '431126963170773',
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
        select: {
            user: {
                select: {
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
            email: 'Nicholas.Ford@gmx.com',
            firstName: 'Paul',
            lastName: 'Burnett',
            phone_number: '681390234172780',
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
                            theme: 'rgb(78, 80, 73)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Cabo Verde',
                    postalCode: '24365',
                    streetName: 'Las Ramblas',
                    streetNumber: '470',
                },
            },
            email: 'Stephanie.Ellison@live.ca',
            firstName: 'Paul',
            lastName: 'Berry',
        },
        select: {
            user: {
                select: {
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
                    city: 'Recife',
                    country: 'Vietnam',
                    postalCode: '03489',
                    streetName: 'Unter den Linden',
                    streetNumber: '113',
                },
            },
            email: 'Samuel.Reeves@shaw.ca',
            firstName: 'Ashley',
            lastName: 'Davies',
            phone_number: '890192377083054',
        },
        select: {
            user: {
                select: {
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
                    city: 'Cape Town',
                    country: 'Togo',
                    postalCode: '68042',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '342',
                },
            },
            firstName: 'Hannah',
            lastName: 'Marshall',
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
                    city: 'New York City',
                    country: 'Chad',
                    postalCode: '72161',
                    streetName: 'Market Street',
                    streetNumber: '399',
                },
            },
            firstName: 'Julie',
            lastName: 'Stevens',
            phone_number: '191660106523428',
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
                            theme: 'rgb(6, 172, 4)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Cardiff',
                    country: 'United Kingdom',
                    postalCode: '72205',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '276',
                },
            },
            firstName: 'Anna',
            lastName: 'Glover',
            phone_number: '715128830147109',
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
                            theme: 'rgb(150, 76, 142)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Mauritania',
                    postalCode: '63351',
                    streetName: 'La Rambla',
                    streetNumber: '48',
                },
            },
            email: 'Jacqueline.Davies@ukr.net',
            firstName: 'Ruth',
            lastName: 'Robbins',
            phone_number: '422542682444199',
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
                            theme: 'rgb(84, 178, 24)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Tokyo',
                    country: 'Dominica',
                    postalCode: '42085',
                    streetName: 'Via del Corso',
                    streetNumber: '406 bis',
                },
            },
            email: 'Scott.Simpson@bellsouth.net',
            firstName: 'Nicholas',
            lastName: 'Wood',
            phone_number: '624001484881479',
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
                            theme: 'rgb(9, 222, 69)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Peru',
                    postalCode: '53107',
                    streetName: 'Portobello Road',
                    streetNumber: '404',
                },
            },
            firstName: 'Joe',
            lastName: 'Green',
            phone_number: '446062142501694',
        },
        select: {
            user: {
                select: {
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
                    country: 'Portugal',
                    postalCode: '20451',
                    streetName: 'Beale Street',
                    streetNumber: '223',
                },
            },
            email: 'Austin.Mills@telus.net',
            firstName: 'Janet',
            lastName: 'Phillips',
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
        select: {
            user: {
                select: {
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
                    city: 'Kota',
                    country: 'Austria',
                    postalCode: '92113',
                    streetName: 'Queen Street',
                    streetNumber: '125 ter',
                },
            },
            email: 'James.Johnson@ezweb.ne.jp',
            firstName: 'Michael',
            lastName: 'Bailey',
        },
        select: {
            user: {
                select: {
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
                    country: 'Marshall Islands',
                    postalCode: '95423',
                    streetName: 'Wall Street',
                    streetNumber: '197 ter',
                },
            },
            email: 'Kathleen.Taylor@earthlink.net',
            firstName: 'Harold',
            lastName: 'Ford',
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
                    city: 'Jabalpur',
                    country: 'Sierra Leone',
                    postalCode: '90404',
                    streetName: 'Beale Street',
                    streetNumber: '110',
                },
            },
            firstName: 'Amanda',
            lastName: 'Russell',
            phone_number: '466890214536224',
        },
        select: {
            user: {
                select: {
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
                    city: 'Hubli-Dharwad',
                    country: 'Serbia',
                    postalCode: '31332',
                    streetName: 'Beale Street',
                    streetNumber: '380',
                },
            },
            email: 'Zachary.Douglas@sbcglobal.net',
            firstName: 'Roger',
            lastName: 'Stevens',
            phone_number: '938481798111835',
        },
        select: {
            user: {
                select: {
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
                    city: 'Kota',
                    country: 'Philippines',
                    postalCode: '41483',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '345',
                },
            },
            email: 'Janet.Armstrong@rogers.com',
            firstName: 'Nicole',
            lastName: 'Graham',
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
                            theme: 'rgb(255, 129, 240)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Srinagar',
                    country: 'Switzerland',
                    postalCode: '15427',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '80',
                },
            },
            firstName: 'Keith',
            lastName: 'King',
            phone_number: '769223157448242',
        },
        select: {
            user: {
                select: {
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
            email: 'Donald.Alexander@free.fr',
            firstName: 'Ryan',
            lastName: 'West',
            phone_number: '336365334502619',
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
                            theme: 'rgb(40, 155, 98)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Ludhiana',
                    country: 'Saint Lucia',
                    postalCode: '95270',
                    streetName: 'Las Ramblas',
                    streetNumber: '243',
                },
            },
            email: 'Thomas.Ford@verizon.net',
            firstName: 'Jessica',
            lastName: 'Cox',
            phone_number: '613369010096965',
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
                            theme: 'rgb(51, 249, 244)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Tanzania',
                    postalCode: '73333',
                    streetName: 'Khao San Road',
                    streetNumber: '224',
                },
            },
            email: 'Patricia.Collins@comcast.net',
            firstName: 'Larry',
            lastName: 'Holmes',
            phone_number: '121775571842115',
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
                            theme: 'rgb(248, 56, 202)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Mark.Atkinson@hotmail.de',
            firstName: 'Frances',
            lastName: 'Mitchell',
            phone_number: '813464741187865',
        },
        select: {
            user: {
                select: {
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
                    city: 'Brussels',
                    country: 'Iran',
                    postalCode: '33109',
                    streetName: 'Baker Street',
                    streetNumber: '326',
                },
            },
            email: 'Julie.Hall@bigpond.com',
            firstName: 'Carol',
            lastName: 'Collins',
            phone_number: '188515008819841',
        },
        select: {
            user: {
                select: {
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
                    city: 'Mira-Bhayandar',
                    country: 'Maldives',
                    postalCode: '28234',
                    streetName: 'Las Ramblas',
                    streetNumber: '446',
                },
            },
            email: 'Charles.Jones@cox.net',
            firstName: 'Virginia',
            lastName: 'Gibson',
            phone_number: '507538119015740',
        },
        select: {
            user: {
                select: {
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
                    city: 'Tiruchirappalli',
                    country: 'Luxembourg',
                    postalCode: '65162',
                    streetName: 'Queen Street',
                    streetNumber: '345',
                },
            },
            email: 'Madison.Moore@hushmail.com',
            firstName: 'George',
            lastName: 'Sharp',
            phone_number: '827661436842318',
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
                            theme: 'rgb(97, 26, 138)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            firstName: 'John',
            lastName: 'Johnston',
            phone_number: '129340380564129',
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
                            theme: 'rgb(228, 199, 64)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Sri Lanka',
                    postalCode: '75296',
                    streetName: 'Gran Via',
                    streetNumber: '361',
                },
            },
            email: 'Megan.Stephens@runbox.com',
            firstName: 'Cheryl',
            lastName: 'Grant',
        },
        select: {
            user: {
                select: {
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
                    city: 'Jinan',
                    country: 'Cameroon',
                    postalCode: '85076',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '300 bis',
                },
            },
            firstName: 'Linda',
            lastName: 'Smith',
            phone_number: '988723930903722',
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
            email: 'Daniel.Wilson@bk.ru',
            firstName: 'Carol',
            lastName: 'Reeves',
            phone_number: '110269009818549',
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
                            theme: 'rgb(254, 27, 207)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Lahore',
                    country: 'South Africa',
                    postalCode: '32082',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '334',
                },
            },
            email: 'Jesse.Mitchell@tutanota.com',
            firstName: 'Gary',
            lastName: 'Stephens',
            phone_number: '928491474580652',
        },
        select: {
            user: {
                select: {
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
            email: 'Jerry.Bell@talktalk.net',
            firstName: 'Stephen',
            lastName: 'Sharp',
        },
        select: {
            user: {
                select: {
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
                    city: 'Tokyo',
                    country: 'Barbados',
                    postalCode: '94371',
                    streetName: 'Market Street',
                    streetNumber: '113',
                },
            },
            firstName: 'William',
            lastName: 'Cook',
            phone_number: '710787418400875',
        },
        select: {
            user: {
                select: {
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
                    city: 'Naples',
                    country: 'Turkmenistan',
                    postalCode: '17281',
                    streetName: 'Khao San Road',
                    streetNumber: '163',
                },
            },
            email: 'Samantha.Porter@gmail.co.uk',
            firstName: 'Michelle',
            lastName: 'Mason',
            phone_number: '793867807716748',
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
                            theme: 'rgb(246, 113, 75)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Solapur',
                    country: 'Malaysia',
                    postalCode: '73274',
                    streetName: 'Abbey Road',
                    streetNumber: '250',
                },
            },
            email: 'Gerald.Scott@netcourrier.com',
            firstName: 'Madison',
            lastName: 'Hawkins',
            phone_number: '969452014080286',
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
                            theme: 'rgb(250, 3, 143)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Patrick.Burton@yandex.ru',
            firstName: 'Katherine',
            lastName: 'Spencer',
            phone_number: '22111845945290',
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
                            theme: 'rgb(221, 199, 156)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            firstName: 'Carl',
            lastName: 'Hughes',
        },
        select: {
            user: {
                select: {
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
            email: 'Roger.Stephens@yahoo.co.uk',
            firstName: 'Kathryn',
            lastName: 'Holland',
        },
        select: {
            user: {
                select: {
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
                    country: 'Cambodia',
                    postalCode: '23275',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '334',
                },
            },
            email: 'Julie.Reeves@cox.net',
            firstName: 'Stephen',
            lastName: 'Smith',
            phone_number: '703817975331437',
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
                            theme: 'rgb(155, 230, 195)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Salvador',
                    country: 'South Africa',
                    postalCode: '95395',
                    streetName: 'Bourbon Street',
                    streetNumber: '28',
                },
            },
            email: 'Jack.Richards@btconnect.com',
            firstName: 'Donald',
            lastName: 'Clarke',
            phone_number: '25837170499745',
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
                            theme: 'rgb(90, 208, 100)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Christine.Pearson@freenet.de',
            firstName: 'Jeffrey',
            lastName: 'Gray',
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
                            theme: 'rgb(21, 247, 237)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Central African Republic',
                    postalCode: '92088',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '226',
                },
            },
            email: 'John.Foster@telus.net',
            firstName: 'Anna',
            lastName: 'Hill',
            phone_number: '358954614939845',
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
                            theme: 'rgb(131, 247, 38)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            firstName: 'Barbara',
            lastName: 'Mills',
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
                            theme: 'rgb(91, 144, 200)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Gerald.Alexander@lavabit.com',
            firstName: 'Helen',
            lastName: 'Hunter',
            phone_number: '202613146033106',
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
                            theme: 'rgb(94, 192, 209)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Somalia',
                    postalCode: '13051',
                    streetName: 'Queen Street',
                    streetNumber: '21',
                },
            },
            email: 'Kevin.Brown@rambler.ru',
            firstName: 'Lawrence',
            lastName: 'Lewis',
            phone_number: '854836893564893',
        },
        select: {
            user: {
                select: {
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
                    country: 'Tonga',
                    postalCode: '68165',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '465',
                },
            },
            firstName: 'Olivia',
            lastName: 'Stone',
            phone_number: '38080027698675',
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
                            theme: 'rgb(219, 249, 104)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            firstName: 'Teresa',
            lastName: 'Reeves',
            phone_number: '825758953317822',
        },
        select: {
            user: {
                select: {
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
                    country: 'Saudi Arabia',
                    postalCode: '46299',
                    streetName: "King's Road",
                    streetNumber: '336 ter',
                },
            },
            email: 'Charles.Richardson@live.ca',
            firstName: 'Laura',
            lastName: 'Barrett',
            phone_number: '220953606005676',
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
        select: {
            user: {
                select: {
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
                    city: 'Jabalpur',
                    country: 'Mongolia',
                    postalCode: '42426',
                    streetName: 'Bourbon Street',
                    streetNumber: '249 bis',
                },
            },
            firstName: 'Margaret',
            lastName: 'Hughes',
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
                            theme: 'rgb(32, 51, 61)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    country: 'Saint Lucia',
                    postalCode: '42368',
                    streetName: 'Beale Street',
                    streetNumber: '14 ter',
                },
            },
            firstName: 'Christian',
            lastName: 'Fletcher',
            phone_number: '920403513083092',
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
        select: {
            user: {
                select: {
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
                    country: 'Zambia',
                    postalCode: '85146',
                    streetName: 'Yonge Street',
                    streetNumber: '311',
                },
            },
            email: 'Kevin.Cunningham@neuf.fr',
            firstName: 'Ruth',
            lastName: 'Morgan',
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
                            theme: 'rgb(165, 155, 253)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Guadalajara',
                    country: 'Samoa',
                    postalCode: '12482',
                    streetName: 'Market Street',
                    streetNumber: '432',
                },
            },
            email: 'Nicholas.Lawrence@email.cz',
            firstName: 'Helen',
            lastName: 'Watts',
        },
        select: {
            user: {
                select: {
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
                    city: 'Los Angeles',
                    country: 'Albania',
                    postalCode: '59377',
                    streetName: 'La Rambla',
                    streetNumber: '199',
                },
            },
            email: 'Shirley.Edwards@gmx.de',
            firstName: 'Daniel',
            lastName: 'Armstrong',
            phone_number: '415593506568237',
        },
        select: {
            user: {
                select: {
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
                    country: 'Saint Kitts and Nevis',
                    postalCode: '95305',
                    streetName: 'Oxford Street',
                    streetNumber: '141',
                },
            },
            firstName: 'Joseph',
            lastName: 'Lane',
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
                            theme: 'rgb(122, 31, 74)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
                    city: 'Fortaleza',
                    country: 'Switzerland',
                    postalCode: '27143',
                    streetName: 'Broadway',
                    streetNumber: '319',
                },
            },
            email: 'Victoria.Russell@yahoo.com',
            firstName: 'Megan',
            lastName: 'Armstrong',
            phone_number: '842483799551232',
        },
        select: {
            user: {
                select: {
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
            firstName: 'Megan',
            lastName: 'Johnston',
            phone_number: '136512210637196',
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
        select: {
            user: {
                select: {
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
            email: 'Amy.Bell@freenet.de',
            firstName: 'Margaret',
            lastName: 'Sharp',
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
                            theme: 'rgb(27, 164, 37)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Jacob.West@btinternet.com',
            firstName: 'Melissa',
            lastName: 'Jackson',
            phone_number: '8558573817941',
        },
        select: {
            user: {
                select: {
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
                    country: 'Zimbabwe',
                    postalCode: '51133',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '22',
                },
            },
            email: 'Emma.Wright@yahoo.co.jp',
            firstName: 'Virginia',
            lastName: 'Fletcher',
        },
        select: {
            user: {
                select: {
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
            email: 'Linda.Russell@aol.com',
            firstName: 'Ann',
            lastName: 'Holland',
            phone_number: '835644085372460',
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
                            theme: 'rgb(217, 143, 138)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
            email: 'Susan.Arnold@docomo.ne.jp',
            firstName: 'Cheryl',
            lastName: 'George',
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
                            theme: 'rgb(154, 217, 201)',
                        },
                    },
                },
            },
        },
        select: {
            user: {
                select: {
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
