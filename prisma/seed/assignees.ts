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
random-json -c 100 -f assignees.json --before $'\nperson = await db.person.create(' --after $');\n\nassignees.push(person!.assignee!.id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedAssigneesTestData(db: PrismaClient) {
    const assignees = [];
    let person;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Istanbul',
                    country: 'Kiribati',
                    postalCode: '20257',
                    streetName: 'Champs Elysees',
                    streetNumber: '242',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2020,
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
            email: 'Francine.Norris@freenet.de',
            firstName: 'Arnulfo',
            lastName: 'Cross',
            phone_number: '782476430858869',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hull',
                    country: 'Gabon',
                    postalCode: '93012',
                    streetName: 'Gran Via',
                    streetNumber: '212',
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
            email: 'Kira.Curtis@rediffmail.com',
            firstName: 'Delma',
            lastName: 'Chavez',
            phone_number: '784082908157413',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tehran',
                    country: 'Benin',
                    postalCode: '35165',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '470',
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
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Donia.Franklin@hotmail.co.uk',
            firstName: 'Forest',
            lastName: 'Dean',
            phone_number: '946193757496330',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Slovakia',
                    postalCode: '88342',
                    streetName: "King's Road",
                    streetNumber: '91 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2021,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 4,
                },
            },
            firstName: 'Ronan',
            lastName: 'Russell',
            phone_number: '133739764393787',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brussels',
                    country: 'Switzerland',
                    postalCode: '24212',
                    streetName: 'Broadway',
                    streetNumber: '76',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            firstName: 'Doretha',
            lastName: 'Rich',
            phone_number: '21091429154182',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Glasgow',
                    country: 'Uruguay',
                    postalCode: '46240',
                    streetName: 'Khao San Road',
                    streetNumber: '372',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2021,
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
            email: 'Lauren.Hamilton@gmx.de',
            firstName: 'Donia',
            lastName: 'Daniel',
            phone_number: '47132714824199',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Zurich',
                    country: 'Chile',
                    postalCode: '60133',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '311',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2023,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Dallas.Wells@seznam.cz',
            firstName: 'Goldie',
            lastName: 'Park',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 4,
                },
            },
            firstName: 'Dwight',
            lastName: 'Shields',
            phone_number: '178909979123303',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Solapur',
                    country: 'Madagascar',
                    postalCode: '42318',
                    streetName: 'Gran Via',
                    streetNumber: '273 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2025,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 9,
                },
            },
            firstName: 'Alma',
            lastName: 'Sherman',
            phone_number: '137475171258285',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    nbApplications: 2,
                },
            },
            email: 'Valentina.Blake@hotmail.fr',
            firstName: 'Katherine',
            lastName: 'Mcdonald',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Sweden',
                    postalCode: '23276',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '228',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Calder.Sampson@ntlworld.co.uk',
            firstName: 'Demetra',
            lastName: 'Lawrence',
            phone_number: '660736674943990',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Delhi',
                    country: 'India',
                    postalCode: '77020',
                    streetName: 'Via del Corso',
                    streetNumber: '244 bis',
                },
            },
            assignee: {
                create: {
                    nbApplications: 13,
                },
            },
            firstName: 'Veronica',
            lastName: 'Sexton',
            phone_number: '630179003601361',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Southampton',
                    country: 'Belarus',
                    postalCode: '84440',
                    streetName: 'Beale Street',
                    streetNumber: '24',
                },
            },
            assignee: {
                create: {},
            },
            email: 'Celina.Ray@mail.ua',
            firstName: 'Davy',
            lastName: 'Robinson',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Aurangabad',
                    country: 'Chile',
                    postalCode: '62006',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '430',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2026,
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
            email: 'Konner.Petersen@ntlworld.co.uk',
            firstName: 'Germain',
            lastName: 'Mcmillan',
            phone_number: '561474099640366',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dallas',
                    country: 'Barbados',
                    postalCode: '38361',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '80',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 11,
                },
            },
            email: 'Joyce.Taylor@gmail.co.in',
            firstName: 'Aisling',
            lastName: 'Sampson',
            phone_number: '18843016489951',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Paris',
                    country: 'Lesotho',
                    postalCode: '56295',
                    streetName: 'Ginza',
                    streetNumber: '13',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 1,
                },
            },
            email: 'Jane.Lloyd@yandex.com',
            firstName: 'Sidney',
            lastName: 'Gill',
            phone_number: '414568130929621',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Suzhou',
                    country: 'Ghana',
                    postalCode: '49046',
                    streetName: 'Portobello Road',
                    streetNumber: '490',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2025,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 1,
                },
            },
            email: 'Bart.Sparks@sfr.fr',
            firstName: 'Whitney',
            lastName: 'Davis',
            phone_number: '914997759666413',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ghaziabad',
                    country: 'Uruguay',
                    postalCode: '22354',
                    streetName: 'Gran Via',
                    streetNumber: '328',
                },
            },
            assignee: {
                create: {},
            },
            firstName: 'Camino',
            lastName: 'Kerr',
            phone_number: '889629920365034',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Buenos Aires',
                    country: 'Laos',
                    postalCode: '30459',
                    streetName: 'Fifth Avenue',
                    streetNumber: '1',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2029,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Alecia.Woods@charter.net',
            firstName: 'Davida',
            lastName: 'Sears',
            phone_number: '913653712113074',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Prague',
                    country: 'Lebanon',
                    postalCode: '51192',
                    streetName: 'Unter den Linden',
                    streetNumber: '379',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2020,
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
            email: 'Ismael.Mcfadden@tutanota.com',
            firstName: 'Lori',
            lastName: 'Dean',
            phone_number: '363314273928815',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

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
                    nbApplications: 11,
                },
            },
            email: 'Darius.Chavez@tiscali.co.uk',
            firstName: 'Randy',
            lastName: 'Hughes',
            phone_number: '24413518490719',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Moscow',
                    country: 'Marshall Islands',
                    postalCode: '88188',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '41',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 11,
                },
            },
            email: 'Sarah.Williamson@sfr.fr',
            firstName: 'Doc',
            lastName: "O'connor",
            phone_number: '739586950583855',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chandigarh',
                    country: 'Tanzania',
                    postalCode: '61485',
                    streetName: 'Lombard Street',
                    streetNumber: '445',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2028,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 5,
                },
            },
            email: 'Cornelius.Wiley@docomo.ne.jp',
            firstName: 'Aquilina',
            lastName: 'Robinson',
            phone_number: '471159364263874',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Seoul',
                    country: 'Iran',
                    postalCode: '52323',
                    streetName: 'Unter den Linden',
                    streetNumber: '304',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2020,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 5,
                },
            },
            firstName: 'Apoorva',
            lastName: 'Conner',
            phone_number: '51346525062021',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Stockholm',
                    country: 'Pakistan',
                    postalCode: '26011',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '182 bis',
                },
            },
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
                    nbApplications: 10,
                },
            },
            email: 'Deonna.Stout@bigpond.com',
            firstName: 'Howard',
            lastName: 'Nicholson',
            phone_number: '279374447629258',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 1,
                },
            },
            email: 'Dorothy.Mcintosh@mailinator.com',
            firstName: 'Arnav',
            lastName: 'Gray',
            phone_number: '625578615050915',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Seoul',
                    country: 'Mauritania',
                    postalCode: '95156',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '474',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2027,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 10,
                },
            },
            firstName: 'Isabela',
            lastName: 'Evans',
            phone_number: '396629744414417',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shenyang',
                    country: 'Italy',
                    postalCode: '75451',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '194',
                },
            },
            assignee: {
                create: {},
            },
            email: 'Alondra.Ellison@centrum.cz',
            firstName: 'Fabian',
            lastName: 'Grant',
            phone_number: '237425862172921',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Evangelina.Foster@web.de',
            firstName: 'Adolphus',
            lastName: 'Porter',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 5,
                },
            },
            firstName: 'Alexander',
            lastName: 'Chapman',
            phone_number: '305564683223088',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2027,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Griffin',
            lastName: 'Hopkins',
            phone_number: '799969055895706',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Amsterdam',
                    country: 'Guinea-Bissau',
                    postalCode: '25293',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '486',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 9,
                },
            },
            firstName: 'Brayan',
            lastName: 'Jennings',
            phone_number: '297015667353113',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shanghai',
                    country: 'Seychelles',
                    postalCode: '56212',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '323',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            email: 'Deb.Mcdonald@icloud.com',
            firstName: 'Dianna',
            lastName: 'Rogers',
            phone_number: '441722856273036',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Marseille',
                    country: 'Russia',
                    postalCode: '57095',
                    streetName: 'Orchard Road',
                    streetNumber: '344',
                },
            },
            assignee: {
                create: {
                    nbApplications: 5,
                },
            },
            email: 'Leticia.Dennis@rogers.com',
            firstName: 'Andre',
            lastName: 'Parker',
            phone_number: '177585041617169',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

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
            email: 'Demetria.Berry@rambler.ru',
            firstName: 'Isobel',
            lastName: 'Montgomery',
            phone_number: '543675421473910',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

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
            email: 'Adalynn.Vernon@cox.net',
            firstName: 'Sheldon',
            lastName: 'Maddox',
            phone_number: '382755875204028',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 10,
                },
            },
            firstName: 'Hailee',
            lastName: 'Mccarthy',
            phone_number: '714071045383652',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 12,
                },
            },
            email: 'Doc.Collins@hushmail.com',
            firstName: 'Frederick',
            lastName: 'Underwood',
            phone_number: '321869692163772',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dalian',
                    country: 'North Korea',
                    postalCode: '78103',
                    streetName: 'Bourbon Street',
                    streetNumber: '224',
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
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Bryce.Mcdonald@outlook.in',
            firstName: 'Adriano',
            lastName: 'Ferguson',
            phone_number: '608968955445523',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 12,
                },
            },
            email: 'Braxton.Mcfadden@me.com',
            firstName: 'Deann',
            lastName: 'Randall',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brussels',
                    country: 'Azerbaijan',
                    postalCode: '27196',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '110',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 3,
                },
            },
            firstName: 'Imelda',
            lastName: 'Sampson',
            phone_number: '539813476703568',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Oslo',
                    country: 'Eswatini',
                    postalCode: '80273',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '135',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2022,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                },
            },
            email: 'Normand.Carter@talktalk.net',
            firstName: 'Allan',
            lastName: 'Ochoa',
            phone_number: '466231846211626',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Qingdao',
                    country: 'Israel',
                    postalCode: '05156',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '158 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2024,
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
            email: 'Joelle.Bryant@wow.com',
            firstName: 'Geno',
            lastName: 'Kent',
            phone_number: '705264076568461',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Surat',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '90207',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '6',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            email: 'Anisa.Mccoy@numericable.fr',
            firstName: 'Carla',
            lastName: 'Moore',
            phone_number: '190025703795446',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            firstName: 'Paul',
            lastName: 'Ferguson',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Croatia',
                    postalCode: '88412',
                    streetName: 'Yonge Street',
                    streetNumber: '320',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2027,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 2,
                },
            },
            email: 'Davina.Mcfadden@mailbox.org',
            firstName: 'Buster',
            lastName: 'Lane',
            phone_number: '929196415550234',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sheffield',
                    country: 'Burkina Faso',
                    postalCode: '61084',
                    streetName: 'Gran Via',
                    streetNumber: '135',
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
            email: 'Archie.Barber@voila.fr',
            firstName: 'Zane',
            lastName: 'Ruiz',
            phone_number: '603055791503955',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Cardiff',
                    country: 'Angola',
                    postalCode: '52085',
                    streetName: 'Abbey Road',
                    streetNumber: '494',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    nbApplications: 3,
                },
            },
            email: 'Terry.Vernon@virginmedia.com',
            firstName: 'Lizette',
            lastName: 'Saunders',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dar es Salaam',
                    country: 'Germany',
                    postalCode: '84245',
                    streetName: 'Beale Street',
                    streetNumber: '333',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2028,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 9,
                },
            },
            email: 'Gaelan.Phillips@icloud.com',
            firstName: 'Frank',
            lastName: 'Logan',
            phone_number: '251918194448489',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Casablanca',
                    country: 'Senegal',
                    postalCode: '47245',
                    streetName: 'Rodeo Drive',
                    streetNumber: '36',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
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
            email: 'Kristin.Allison@aliceadsl.fr',
            firstName: 'Shirley',
            lastName: 'Kinney',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dongguan',
                    country: 'Saint Lucia',
                    postalCode: '60138',
                    streetName: 'Broadway',
                    streetNumber: '359',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    nbApplications: 7,
                },
            },
            email: 'Derick.Villarreal@yandex.com',
            firstName: 'Anais',
            lastName: 'Fisher',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Helsinki',
                    country: 'Hungary',
                    postalCode: '70187',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '234',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2022,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Zion.Fletcher@bt.com',
            firstName: 'Branch',
            lastName: 'Harrison',
            phone_number: '362183301489014',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bhubaneswar',
                    country: 'Cyprus',
                    postalCode: '74078',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '68',
                },
            },
            assignee: {
                create: {
                    nbApplications: 12,
                },
            },
            firstName: 'Yahir',
            lastName: 'Burns',
            phone_number: '362822997231259',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guayaquil',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '71321',
                    streetName: 'Unter den Linden',
                    streetNumber: '286 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 11,
                },
            },
            email: 'Faris.Ochoa@icloud.com',
            firstName: 'Alvaro',
            lastName: 'Glover',
            phone_number: '215342471766329',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2021,
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
            firstName: 'Lourdes',
            lastName: 'Rhodes',
            phone_number: '49026168669723',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Benito.Robbins@me.com',
            firstName: 'Ralph',
            lastName: 'Andrews',
            phone_number: '830115916007974',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bangalore',
                    country: 'Qatar',
                    postalCode: '58197',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '9 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2020,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 5,
                },
            },
            firstName: 'Samuel',
            lastName: 'Holland',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Niger',
                    postalCode: '91068',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '173',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2029,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 5,
                },
            },
            email: 'Barney.Wallace@westnet.com.au',
            firstName: 'William',
            lastName: 'Knight',
            phone_number: '549504341313462',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Melbourne',
                    country: 'Djibouti',
                    postalCode: '86085',
                    streetName: 'Oxford Street',
                    streetNumber: '384',
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
                },
            },
            firstName: 'Gloria',
            lastName: 'Mcgee',
            phone_number: '91227252337589',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2028,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                },
            },
            firstName: 'Neal',
            lastName: 'Davis',
            phone_number: '378153913352242',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Barcelona',
                    country: 'Italy',
                    postalCode: '09062',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '267 ter',
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
            firstName: 'Alva',
            lastName: 'Cunningham',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'São Paulo',
                    country: 'Mongolia',
                    postalCode: '52151',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '117',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2026,
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
            email: 'Aiden.Gomez@live.in',
            firstName: 'Alvaro',
            lastName: 'Alexander',
            phone_number: '81662450765054',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2026,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 11,
                },
            },
            email: 'Deb.Andrews@charter.net',
            firstName: 'Emmitt',
            lastName: 'Palmer',
            phone_number: '412615197695150',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shantou',
                    country: 'Uruguay',
                    postalCode: '36447',
                    streetName: 'Baker Street',
                    streetNumber: '137 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            firstName: 'Brent',
            lastName: 'Parker',
            phone_number: '382161402436619',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'Saint Vincent and the Grenadines',
                    postalCode: '24338',
                    streetName: 'Wall Street',
                    streetNumber: '63 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 21,
                            graduationYear: 2026,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Bernie.Richards@windstream.net',
            firstName: 'Gavin',
            lastName: 'Alexander',
            phone_number: '158432093761872',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Osaka',
                    country: 'Antigua and Barbuda',
                    postalCode: '46098',
                    streetName: 'Las Ramblas',
                    streetNumber: '386',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 19,
                            graduationYear: 2020,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            firstName: 'Hilton',
            lastName: 'Diaz',
            phone_number: '875823477370209',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Agra',
                    country: 'Palau',
                    postalCode: '26167',
                    streetName: 'Orchard Road',
                    streetNumber: '205',
                },
            },
            assignee: {
                create: {
                    nbApplications: 4,
                },
            },
            firstName: 'Terry',
            lastName: 'Wilson',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'Mozambique',
                    postalCode: '47424',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '494',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            email: 'Jayden.Little@fastmail.com',
            firstName: 'Emilie',
            lastName: 'Gill',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guwahati',
                    country: 'Tonga',
                    postalCode: '64031',
                    streetName: 'Market Street',
                    streetNumber: '492',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2029,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            email: 'Eden.Clayton@yahoo.co.uk',
            firstName: 'Lula',
            lastName: 'Powers',
            phone_number: '187736001324107',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 18,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Elaina',
            lastName: 'Skinner',
            phone_number: '629370638272289',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2027,
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
            email: 'Dena.Madden@lavabit.com',
            firstName: 'Karter',
            lastName: 'Merrill',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2030,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 11,
                },
            },
            email: 'Edward.Wallace@live.fr',
            firstName: 'Althea',
            lastName: 'Rich',
            phone_number: '970234912040457',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Hungary',
                    postalCode: '79473',
                    streetName: 'Michigan Avenue',
                    streetNumber: '313',
                },
            },
            assignee: {
                create: {
                    nbApplications: 8,
                },
            },
            firstName: 'Alistair',
            lastName: 'Burgess',
            phone_number: '690306316259020',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Los Angeles',
                    country: 'Philippines',
                    postalCode: '11232',
                    streetName: 'Michigan Avenue',
                    streetNumber: '90',
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
                    nbApplications: 10,
                },
            },
            email: 'Aleen.Velez@mailinator.com',
            firstName: 'Darrell',
            lastName: 'Walters',
            phone_number: '313468199863085',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 1,
                },
            },
            email: 'Giancarlo.Woodward@optusnet.com.au',
            firstName: 'Talia',
            lastName: 'Taylor',
            phone_number: '163595856980612',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jabalpur',
                    country: 'Malawi',
                    postalCode: '67275',
                    streetName: 'Nanjing Road',
                    streetNumber: '413',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2030,
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
            firstName: 'Pierre',
            lastName: 'Irwin',
            phone_number: '183966560499559',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Noida',
                    country: 'Iceland',
                    postalCode: '70341',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '493',
                },
            },
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 12,
                },
            },
            email: 'Efrain.Christensen@yahoo.com',
            firstName: 'Brittanie',
            lastName: 'Burton',
            phone_number: '413979071691394',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 6,
                },
            },
            firstName: 'Eion',
            lastName: 'Mcgee',
            phone_number: '197070160204507',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            firstName: 'Maurice',
            lastName: 'Henderson',
            phone_number: '208509565202372',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 13,
                },
            },
            email: 'Ike.Perry@outlook.in',
            firstName: 'Caoilinn',
            lastName: 'Mills',
            phone_number: '614539937776572',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Recife',
                    country: 'Seychelles',
                    postalCode: '86300',
                    streetName: 'Rodeo Drive',
                    streetNumber: '398',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2027,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 1,
                },
            },
            email: 'Danila.Lynch@cox.net',
            firstName: 'Cassian',
            lastName: 'Lowe',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Glasgow',
                    country: 'Republic of the Congo',
                    postalCode: '73070',
                    streetName: 'Rodeo Drive',
                    streetNumber: '218 bis',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2025,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'London.Simpson@tutanota.com',
            firstName: 'Florian',
            lastName: 'Reeves',
            phone_number: '357396716602592',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'Gabon',
                    postalCode: '49357',
                    streetName: 'Avenida Paulista',
                    streetNumber: '273',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2028,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    nbApplications: 5,
                },
            },
            email: 'Stuart.Tran@bt.com',
            firstName: 'Guadalupe',
            lastName: 'Kent',
            phone_number: '123335753947636',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jalandhar',
                    country: 'Mexico',
                    postalCode: '75450',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '155',
                },
            },
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
                    nbApplications: 3,
                },
            },
            email: 'Hester.Reilly@freenet.de',
            firstName: 'Melissa',
            lastName: 'Barrett',
            phone_number: '167263502894292',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
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
                    nbApplications: 5,
                },
            },
            firstName: 'Dione',
            lastName: 'Newton',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2022,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 5,
                },
            },
            firstName: 'Danny',
            lastName: 'Webb',
            phone_number: '959567729320992',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Thane',
                    country: 'Sierra Leone',
                    postalCode: '49046',
                    streetName: 'Michigan Avenue',
                    streetNumber: '3',
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
                    nbApplications: 9,
                },
            },
            firstName: 'Jody',
            lastName: 'King',
            phone_number: '536863202428809',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 2,
                },
            },
            email: 'Yasmina.Frost@ntlworld.com',
            firstName: 'Giuseppe',
            lastName: 'Ramirez',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Allahabad',
                    country: 'Nepal',
                    postalCode: '18023',
                    streetName: 'Avenida Paulista',
                    streetNumber: '395',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2029,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 4,
                },
            },
            email: 'Ernest.Richmond@ezweb.ne.jp',
            firstName: 'Eion',
            lastName: 'Yates',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Agra',
                    country: 'Sri Lanka',
                    postalCode: '78048',
                    streetName: 'Nanjing Road',
                    streetNumber: '1 ter',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 25,
                            graduationYear: 2024,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 8,
                },
            },
            email: 'Jackson.Arnold@netcourrier.com',
            firstName: 'Candra',
            lastName: 'Manning',
            phone_number: '764032616120524',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2023,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    nbApplications: 8,
                },
            },
            email: 'Filip.Parks@centrum.cz',
            firstName: 'Ebenezer',
            lastName: 'Ferguson',
            phone_number: '117601687137181',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
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
                    nbApplications: 6,
                },
            },
            email: 'Carla.Sellers@hotmail.fr',
            firstName: 'Lupita',
            lastName: 'Briggs',
            phone_number: '22619201766969',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Germany',
                    postalCode: '83293',
                    streetName: 'Abbey Road',
                    streetNumber: '326',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 20,
                            graduationYear: 2023,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            firstName: 'Salvatore',
            lastName: 'Mckay',
            phone_number: '683072408120642',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 23,
                            graduationYear: 2021,
                            hasScholarship: true,
                            oldJet: false,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 9,
                },
            },
            email: 'Vance.Peterson@bk.ru',
            firstName: 'Goldie',
            lastName: 'Boone',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jabalpur',
                    country: 'Senegal',
                    postalCode: '44281',
                    streetName: 'Khao San Road',
                    streetNumber: '385',
                },
            },
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
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Jamie.Gomez@gmail.de',
            firstName: 'Dmitri',
            lastName: 'Hayward',
            phone_number: '950221631597815',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 27,
                            graduationYear: 2022,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                },
            },
            email: 'Osmond.Long@verizon.net',
            firstName: 'Durward',
            lastName: 'Matthews',
            phone_number: '387649070761908',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 24,
                            graduationYear: 2027,
                            hasScholarship: true,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                },
            },
            email: 'Dexter.Hale@live.in',
            firstName: 'Anya',
            lastName: 'Blake',
            phone_number: '64379309032642',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bhopal',
                    country: 'Bahamas',
                    postalCode: '42046',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '25',
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
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 5,
                },
            },
            email: 'Dale.Newton@yahoo.de',
            firstName: 'Agustina',
            lastName: 'Vasquez',
            phone_number: '370395015033587',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Thane',
                    country: 'San Marino',
                    postalCode: '23355',
                    streetName: 'Avenida Paulista',
                    streetNumber: '119',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 26,
                            graduationYear: 2030,
                            hasScholarship: false,
                            oldJet: false,
                        },
                    },
                },
            },
            email: 'Hudson.Wyatt@posteo.de',
            firstName: 'Elouise',
            lastName: 'Harding',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Solapur',
                    country: 'Slovenia',
                    postalCode: '48101',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '393',
                },
            },
            assignee: {
                create: {
                    information: {
                        create: {
                            age: 22,
                            graduationYear: 2028,
                            hasScholarship: false,
                            oldJet: true,
                        },
                    },
                    mriReceiver: {
                        create: {},
                    },
                    nbApplications: 5,
                },
            },
            email: 'Osmond.Sellers@qq.com',
            firstName: 'Ian',
            lastName: 'Parrish',
        },
        select: {
            assignee: {
                select: {
                    id: true,
                },
            },
        },
    });

    assignees.push(person!.assignee!.id);

    return assignees;
}
