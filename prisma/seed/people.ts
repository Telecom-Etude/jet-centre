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
 * random-json -c 100 -f people.json --before $'\nperson = await db.person.create(' --after $');\n\nid = person?.id; if (id) people.push(id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedPeopleTestData(db: PrismaClient) {
    const people = [];
    let person;
    let id;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'Cuba',
                    postalCode: '83310',
                    streetName: 'Las Ramblas',
                    streetNumber: '137',
                },
            },
            email: 'Ryan.Reeves@tiscali.co.uk',
            firstName: 'Joshua',
            lastName: 'Gardner',
            phone_number: '898299286082162',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'Cyprus',
                    postalCode: '58124',
                    streetName: 'Rodeo Drive',
                    streetNumber: '262',
                },
            },
            email: 'Jacob.Hale@inbox.ru',
            firstName: 'Kathleen',
            lastName: 'Reeves',
            phone_number: '468140872685998',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ho Chi Minh City',
                    country: 'Afghanistan',
                    postalCode: '03051',
                    streetName: 'Khao San Road',
                    streetNumber: '339',
                },
            },
            email: 'Ryan.Brown@btconnect.com',
            firstName: 'Maria',
            lastName: 'Johnson',
            phone_number: '426310154728166',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Senegal',
                    postalCode: '56117',
                    streetName: 'Queen Street',
                    streetNumber: '318',
                },
            },
            email: 'Heather.Nicholson@bigpond.com',
            firstName: 'Jack',
            lastName: 'Dean',
            phone_number: '571243172877445',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Harbin',
                    country: 'Zimbabwe',
                    postalCode: '12209',
                    streetName: 'Bourbon Street',
                    streetNumber: '72',
                },
            },
            email: 'Evelyn.Cook@freenet.de',
            firstName: 'Catherine',
            lastName: 'Campbell',
            phone_number: '887321021491020',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Shirley.Murray@gmx.de',
            firstName: 'Debra',
            lastName: 'Wilson',
            phone_number: '91532752892116',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Richard',
            lastName: 'Mitchell',
            phone_number: '949199638064329',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Ukraine',
                    postalCode: '32087',
                    streetName: 'Fifth Avenue',
                    streetNumber: '334 bis',
                },
            },
            email: 'Jack.Davies@sky.com',
            firstName: 'Jerry',
            lastName: 'Moore',
            phone_number: '628614502768781',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Seychelles',
                    postalCode: '92438',
                    streetName: 'Avenida Paulista',
                    streetNumber: '444 bis',
                },
            },
            email: 'George.Hall@rocketmail.com',
            firstName: 'Catherine',
            lastName: 'Harrison',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jabalpur',
                    country: 'Uruguay',
                    postalCode: '75445',
                    streetName: 'Oxford Street',
                    streetNumber: '18',
                },
            },
            firstName: 'Donna',
            lastName: 'Ford',
            phone_number: '354019291850846',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chicago',
                    country: 'France',
                    postalCode: '88297',
                    streetName: 'Unter den Linden',
                    streetNumber: '474',
                },
            },
            firstName: 'Kathleen',
            lastName: 'Stevens',
            phone_number: '168779323739972',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Greece',
                    postalCode: '66058',
                    streetName: 'Broadway',
                    streetNumber: '187',
                },
            },
            email: 'Sandra.Watson@tutanota.com',
            firstName: 'Olivia',
            lastName: 'Gardner',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Oslo',
                    country: 'El Salvador',
                    postalCode: '60173',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '196',
                },
            },
            email: 'Walter.Nicholson@list.ru',
            firstName: 'Justin',
            lastName: 'Turner',
            phone_number: '158465195778735',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kota',
                    country: 'Trinidad and Tobago',
                    postalCode: '44333',
                    streetName: 'Michigan Avenue',
                    streetNumber: '419',
                },
            },
            firstName: 'Victoria',
            lastName: 'Glover',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Norway',
                    postalCode: '01209',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '163',
                },
            },
            email: 'Terry.Johnston@charter.net',
            firstName: 'Andrew',
            lastName: 'Barker',
            phone_number: '245032968082138',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Peter',
            lastName: 'Pearce',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Mexico',
                    postalCode: '13248',
                    streetName: 'Yonge Street',
                    streetNumber: '22',
                },
            },
            firstName: 'Hannah',
            lastName: 'Ross',
            phone_number: '755418893441021',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Stockholm',
                    country: 'Albania',
                    postalCode: '84212',
                    streetName: 'Fifth Avenue',
                    streetNumber: '458',
                },
            },
            email: 'Madison.Blake@live.fr',
            firstName: 'Elizabeth',
            lastName: 'Richards',
            phone_number: '31539808958096',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Eritrea',
                    postalCode: '11099',
                    streetName: 'Khao San Road',
                    streetNumber: '243',
                },
            },
            firstName: 'Raymond',
            lastName: 'Ford',
            phone_number: '472421831744346',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Zhengzhou',
                    country: 'Liberia',
                    postalCode: '84229',
                    streetName: 'Michigan Avenue',
                    streetNumber: '294',
                },
            },
            firstName: 'Andrea',
            lastName: 'Scott',
            phone_number: '91191017505646',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Coventry',
                    country: 'Brazil',
                    postalCode: '29295',
                    streetName: 'Champs Elysees',
                    streetNumber: '324',
                },
            },
            firstName: 'Alexander',
            lastName: 'Green',
            phone_number: '978529267494898',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chandigarh',
                    country: 'Trinidad and Tobago',
                    postalCode: '62460',
                    streetName: 'Lombard Street',
                    streetNumber: '454',
                },
            },
            firstName: 'Benjamin',
            lastName: 'Gibson',
            phone_number: '548537215181238',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Edinburgh',
                    country: 'Germany',
                    postalCode: '93182',
                    streetName: 'Rodeo Drive',
                    streetNumber: '163',
                },
            },
            email: 'Lawrence.Stephens@btconnect.com',
            firstName: 'Donald',
            lastName: 'Baker',
            phone_number: '406809024947272',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Nathan',
            lastName: 'Warren',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Milan',
                    country: 'Israel',
                    postalCode: '26090',
                    streetName: 'Queen Street',
                    streetNumber: '268',
                },
            },
            email: 'Christina.Morris@yahoo.co.jp',
            firstName: 'Robert',
            lastName: 'Ross',
            phone_number: '222967984140845',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Moscow',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '57498',
                    streetName: 'Unter den Linden',
                    streetNumber: '378',
                },
            },
            firstName: 'Justin',
            lastName: 'Baker',
            phone_number: '840927747106187',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Mira-Bhayandar',
                    country: 'Maldives',
                    postalCode: '69333',
                    streetName: 'Via del Corso',
                    streetNumber: '456',
                },
            },
            firstName: 'Susan',
            lastName: 'Adams',
            phone_number: '585100183542275',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bristol',
                    country: 'Colombia',
                    postalCode: '18450',
                    streetName: 'Broadway',
                    streetNumber: '15',
                },
            },
            firstName: 'William',
            lastName: 'Shaw',
            phone_number: '116788740926040',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jalandhar',
                    country: 'Paraguay',
                    postalCode: '22414',
                    streetName: 'Broadway',
                    streetNumber: '449 bis',
                },
            },
            email: 'Nathan.Perry@bbox.fr',
            firstName: 'Julie',
            lastName: 'Arnold',
            phone_number: '198774793265645',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'London',
                    country: 'Brunei',
                    postalCode: '55392',
                    streetName: 'Nanjing Road',
                    streetNumber: '163',
                },
            },
            email: 'Michael.Watson@openmailbox.org',
            firstName: 'Kimberly',
            lastName: 'Harvey',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Johannesburg',
                    country: 'Afghanistan',
                    postalCode: '07295',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '474',
                },
            },
            firstName: 'Olivia',
            lastName: 'Jackson',
            phone_number: '640964391985055',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pune',
                    country: 'Ukraine',
                    postalCode: '49440',
                    streetName: 'Abbey Road',
                    streetNumber: '456',
                },
            },
            firstName: 'Gerald',
            lastName: 'Alexander',
            phone_number: '990364925293821',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Foshan',
                    country: 'Sierra Leone',
                    postalCode: '25233',
                    streetName: 'Las Ramblas',
                    streetNumber: '414',
                },
            },
            email: 'Olivia.Holmes@sky.com',
            firstName: 'Sandra',
            lastName: 'Ward',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Saint Petersburg',
                    country: 'Ecuador',
                    postalCode: '31126',
                    streetName: 'Michigan Avenue',
                    streetNumber: '483',
                },
            },
            email: 'Brian.Davies@inbox.com',
            firstName: 'Jose',
            lastName: 'Alexander',
            phone_number: '434870537746602',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kolkata',
                    country: 'Solomon Islands',
                    postalCode: '01049',
                    streetName: 'Fifth Avenue',
                    streetNumber: '90',
                },
            },
            email: 'Paul.Campbell@yahoo.co.in',
            firstName: 'Stephanie',
            lastName: 'Hale',
            phone_number: '279534648069369',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Liverpool',
                    country: 'South Africa',
                    postalCode: '06087',
                    streetName: 'Broadway',
                    streetNumber: '268',
                },
            },
            email: 'Helen.Alexander@hotmail.de',
            firstName: 'George',
            lastName: 'Pearce',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Suzhou',
                    country: 'Egypt',
                    postalCode: '41202',
                    streetName: 'Abbey Road',
                    streetNumber: '333',
                },
            },
            email: 'Jack.Rose@rocketmail.com',
            firstName: 'Harold',
            lastName: 'King',
            phone_number: '809852132364178',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Catherine.Arnold@mailbox.org',
            firstName: 'Arthur',
            lastName: 'Mason',
            phone_number: '718895039191264',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lahore',
                    country: 'Saudi Arabia',
                    postalCode: '79222',
                    streetName: 'Oxford Street',
                    streetNumber: '193',
                },
            },
            email: 'Mary.Evans@posteo.de',
            firstName: 'Jack',
            lastName: 'Foster',
            phone_number: '181438933783885',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'James.Reeves@icloud.com.au',
            firstName: 'Dennis',
            lastName: 'Brown',
            phone_number: '791376849494752',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'Bulgaria',
                    postalCode: '06240',
                    streetName: 'Ginza',
                    streetNumber: '186',
                },
            },
            email: 'Catherine.Jones@tiscali.co.uk',
            firstName: 'Melissa',
            lastName: 'Atkinson',
            phone_number: '675553120064076',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Douglas',
            lastName: 'Ward',
            phone_number: '647553220719669',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Seychelles',
                    postalCode: '64495',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '351',
                },
            },
            email: 'Evelyn.Stephens@neuf.fr',
            firstName: 'Cynthia',
            lastName: 'Jackson',
            phone_number: '513883700973462',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Montenegro',
                    postalCode: '18211',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '256',
                },
            },
            email: 'Edward.Harris@earthlink.net',
            firstName: 'Ronald',
            lastName: 'Baker',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kolkata',
                    country: 'Haiti',
                    postalCode: '38382',
                    streetName: 'Ginza',
                    streetNumber: '10',
                },
            },
            email: 'Zachary.Robbins@btconnect.com',
            firstName: 'Victoria',
            lastName: 'Roberts',
            phone_number: '855825086783267',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'China',
                    postalCode: '66272',
                    streetName: "King's Road",
                    streetNumber: '494',
                },
            },
            email: 'Carol.Reid@att.net',
            firstName: 'Henry',
            lastName: 'Porter',
            phone_number: '832655196066712',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Yangon',
                    country: 'Antigua and Barbuda',
                    postalCode: '36012',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '232 bis',
                },
            },
            email: 'Anthony.Armstrong@frontiernet.net',
            firstName: 'Sandra',
            lastName: 'Palmer',
            phone_number: '539994715558856',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Benin',
                    postalCode: '35276',
                    streetName: 'Queen Street',
                    streetNumber: '94',
                },
            },
            email: 'Tyler.White@sbcglobal.net',
            firstName: 'Pamela',
            lastName: 'Alexander',
            phone_number: '146350181959415',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jalandhar',
                    country: 'Dominica',
                    postalCode: '29184',
                    streetName: 'Michigan Avenue',
                    streetNumber: '465',
                },
            },
            email: 'Mark.Evans@neuf.fr',
            firstName: 'Larry',
            lastName: 'Wood',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Newcastle',
                    country: 'Honduras',
                    postalCode: '60022',
                    streetName: 'Bourbon Street',
                    streetNumber: '6 bis',
                },
            },
            email: 'Justin.Wood@lavabit.com',
            firstName: 'Ashley',
            lastName: 'Burton',
            phone_number: '259897849737354',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ho Chi Minh City',
                    country: 'Suriname',
                    postalCode: '95260',
                    streetName: 'Abbey Road',
                    streetNumber: '281 ter',
                },
            },
            email: 'Carol.Lawrence@yandex.ru',
            firstName: 'Angela',
            lastName: 'Murray',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dhanbad',
                    country: 'Barbados',
                    postalCode: '81456',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '236',
                },
            },
            email: 'Christopher.Spencer@gmail.fr',
            firstName: 'Diane',
            lastName: 'Foster',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Ashley.Cole@sympatico.ca',
            firstName: 'Daniel',
            lastName: 'Turner',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Medellín',
                    country: 'Honduras',
                    postalCode: '45224',
                    streetName: 'Wall Street',
                    streetNumber: '283',
                },
            },
            email: 'Terry.Marshall@bigpond.com',
            firstName: 'Jeffrey',
            lastName: 'Reid',
            phone_number: '150362381135174',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Fortaleza',
                    country: 'Rwanda',
                    postalCode: '41333',
                    streetName: 'Rodeo Drive',
                    streetNumber: '179',
                },
            },
            firstName: 'Nathan',
            lastName: 'Sutton',
            phone_number: '537592252058431',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rio de Janeiro',
                    country: 'Lesotho',
                    postalCode: '05253',
                    streetName: 'Fifth Avenue',
                    streetNumber: '221',
                },
            },
            email: 'Christine.Taylor@yahoo.com',
            firstName: 'Joe',
            lastName: 'Cole',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Michael',
            lastName: 'Bell',
            phone_number: '940681498808832',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Joshua.Lane@windstream.net',
            firstName: 'Shirley',
            lastName: 'Richardson',
            phone_number: '453730661558664',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hangzhou',
                    country: 'Serbia',
                    postalCode: '89350',
                    streetName: 'Beale Street',
                    streetNumber: '234',
                },
            },
            firstName: 'Emma',
            lastName: 'Moore',
            phone_number: '833087889654722',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Brasília',
                    country: 'Chile',
                    postalCode: '15278',
                    streetName: 'Unter den Linden',
                    streetNumber: '34',
                },
            },
            email: 'Julie.Martin@gmail.co.in',
            firstName: 'Victoria',
            lastName: 'Richardson',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Carolyn.Collins@bk.ru',
            firstName: 'Lisa',
            lastName: 'Ross',
            phone_number: '154992275717605',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Hungary',
                    postalCode: '12176',
                    streetName: 'Fifth Avenue',
                    streetNumber: '96',
                },
            },
            email: 'Larry.Baker@bell.net',
            firstName: 'Frances',
            lastName: 'Green',
            phone_number: '820535592557470',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Moscow',
                    country: 'Bulgaria',
                    postalCode: '75032',
                    streetName: 'La Rambla',
                    streetNumber: '228',
                },
            },
            email: 'Joseph.Ellis@webmail.co.za',
            firstName: 'Mark',
            lastName: 'Holland',
            phone_number: '991974614477643',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Catherine',
            lastName: 'Simpson',
            phone_number: '61517958761167',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rangoon',
                    country: 'Togo',
                    postalCode: '60349',
                    streetName: 'Baker Street',
                    streetNumber: '121',
                },
            },
            firstName: 'Stephanie',
            lastName: 'Baker',
            phone_number: '582222508611912',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Jeffrey',
            lastName: 'Sharp',
            phone_number: '448266245693816',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Gary.George@neuf.fr',
            firstName: 'Raymond',
            lastName: 'Wilson',
            phone_number: '699004113343291',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Indore',
                    country: 'Yemen',
                    postalCode: '20296',
                    streetName: 'Avenida Paulista',
                    streetNumber: '90',
                },
            },
            email: 'Frank.Brown@msn.com',
            firstName: 'Aaron',
            lastName: 'Wood',
            phone_number: '586184070294258',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Thane',
                    country: 'Austria',
                    postalCode: '69030',
                    streetName: 'La Rambla',
                    streetNumber: '259',
                },
            },
            email: 'Anthony.Cole@tutanota.com',
            firstName: 'Helen',
            lastName: 'Ellis',
            phone_number: '228643140383325',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Luanda',
                    country: 'Seychelles',
                    postalCode: '83211',
                    streetName: 'Avenida Paulista',
                    streetNumber: '27',
                },
            },
            email: 'Amy.Russell@charter.net',
            firstName: 'Margaret',
            lastName: 'George',
            phone_number: '960198293524926',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ho Chi Minh City',
                    country: 'Czech Republic',
                    postalCode: '42346',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '323',
                },
            },
            email: 'Kevin.Davies@talktalk.net',
            firstName: 'Donald',
            lastName: 'Richardson',
            phone_number: '951548482123199',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuwait City',
                    country: 'Burkina Faso',
                    postalCode: '84086',
                    streetName: 'Las Ramblas',
                    streetNumber: '180',
                },
            },
            email: 'Charles.Hall@optusnet.com.au',
            firstName: 'Kathryn',
            lastName: 'Robbins',
            phone_number: '734900212064271',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Karachi',
                    country: 'Norway',
                    postalCode: '36323',
                    streetName: 'Nanjing Road',
                    streetNumber: '73',
                },
            },
            firstName: 'Angela',
            lastName: 'Jones',
            phone_number: '955637564891713',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Karen.Rose@shaw.ca',
            firstName: 'Jacqueline',
            lastName: 'Harrison',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Christina.West@cox.net',
            firstName: 'Mark',
            lastName: 'Hawkins',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'London',
                    country: 'Monaco',
                    postalCode: '28236',
                    streetName: 'Portobello Road',
                    streetNumber: '142 ter',
                },
            },
            firstName: 'Barbara',
            lastName: 'Harvey',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Samantha.Lewis@centrum.cz',
            firstName: 'Ann',
            lastName: 'McDonald',
            phone_number: '391380058151681',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Medellín',
                    country: 'Guatemala',
                    postalCode: '14118',
                    streetName: "King's Road",
                    streetNumber: '442',
                },
            },
            firstName: 'Lisa',
            lastName: 'Cox',
            phone_number: '834209739477461',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Istanbul',
                    country: 'Azerbaijan',
                    postalCode: '05061',
                    streetName: 'Michigan Avenue',
                    streetNumber: '50 bis',
                },
            },
            firstName: 'Edward',
            lastName: 'Watts',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hangzhou',
                    country: 'Cameroon',
                    postalCode: '42413',
                    streetName: 'Ginza',
                    streetNumber: '302',
                },
            },
            email: 'Maria.Ellis@free.fr',
            firstName: 'Brandon',
            lastName: 'Burnett',
            phone_number: '19955376539037',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Los Angeles',
                    country: 'Sao Tome and Principe',
                    postalCode: '53286',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '438',
                },
            },
            email: 'Ronald.Hunter@gmail.co.uk',
            firstName: 'Kenneth',
            lastName: 'Brown',
            phone_number: '400214879088201',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuala Lumpur',
                    country: 'Estonia',
                    postalCode: '90398',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '85 bis',
                },
            },
            email: 'Edward.Blake@cox.net',
            firstName: 'Jerry',
            lastName: 'Stone',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Shenyang',
                    country: 'Marshall Islands',
                    postalCode: '46457',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '92',
                },
            },
            firstName: 'Brian',
            lastName: 'Ford',
            phone_number: '983719758699951',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Toronto',
                    country: 'Croatia',
                    postalCode: '84281',
                    streetName: 'Gran Via',
                    streetNumber: '104',
                },
            },
            email: 'Arthur.Cox@att.net',
            firstName: 'Sarah',
            lastName: 'Stevens',
            phone_number: '277001775439299',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Belo Horizonte',
                    country: 'Turkey',
                    postalCode: '74458',
                    streetName: 'La Rambla',
                    streetNumber: '300',
                },
            },
            email: 'Sara.Russell@orange.fr',
            firstName: 'Kathryn',
            lastName: 'Holland',
            phone_number: '525750755570142',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Southampton',
                    country: 'Solomon Islands',
                    postalCode: '40126',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '22',
                },
            },
            email: 'Dennis.Cunningham@posteo.de',
            firstName: 'Harold',
            lastName: 'Nicholson',
            phone_number: '999004791100760',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Yangon',
                    country: 'Solomon Islands',
                    postalCode: '13015',
                    streetName: 'Via del Corso',
                    streetNumber: '193',
                },
            },
            email: 'Ann.Edwards@gmx.com',
            firstName: 'Kathleen',
            lastName: 'Hale',
            phone_number: '663792244009869',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuwait City',
                    country: 'Haiti',
                    postalCode: '38439',
                    streetName: 'Yonge Street',
                    streetNumber: '8',
                },
            },
            firstName: 'Linda',
            lastName: 'Johnston',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bangalore',
                    country: 'Poland',
                    postalCode: '74082',
                    streetName: 'Broadway',
                    streetNumber: '345',
                },
            },
            email: 'Charles.Campbell@mail.com.au',
            firstName: 'Emily',
            lastName: 'Cameron',
            phone_number: '267368589525524',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Sheffield',
                    country: 'Ukraine',
                    postalCode: '09224',
                    streetName: 'Rodeo Drive',
                    streetNumber: '222',
                },
            },
            email: 'Laura.Russell@webmail.co.za',
            firstName: 'Eric',
            lastName: 'Hawkins',
            phone_number: '778927739189193',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Jeffrey.Harris@inbox.com',
            firstName: 'Ronald',
            lastName: 'Atkinson',
            phone_number: '147279585772020',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Kimberly.White@openmailbox.org',
            firstName: 'Christopher',
            lastName: 'Smith',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Marseille',
                    country: 'Kazakhstan',
                    postalCode: '44266',
                    streetName: 'Ginza',
                    streetNumber: '213',
                },
            },
            email: 'Evelyn.Mason@bt.com',
            firstName: 'Megan',
            lastName: 'Ward',
            phone_number: '327675158076182',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Gurgaon',
                    country: 'Burundi',
                    postalCode: '20408',
                    streetName: 'Orchard Road',
                    streetNumber: '111',
                },
            },
            email: 'Melissa.Watts@optusnet.com.au',
            firstName: 'Sara',
            lastName: 'Pearce',
            phone_number: '44226676328662',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Allahabad',
                    country: 'Lebanon',
                    postalCode: '05140',
                    streetName: 'Wall Street',
                    streetNumber: '381',
                },
            },
            firstName: 'Angela',
            lastName: 'Armstrong',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Amsterdam',
                    country: 'Antigua and Barbuda',
                    postalCode: '77001',
                    streetName: 'Unter den Linden',
                    streetNumber: '467',
                },
            },
            firstName: 'Nicole',
            lastName: 'Richardson',
            phone_number: '372241262868096',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chandigarh',
                    country: 'Papua New Guinea',
                    postalCode: '55266',
                    streetName: 'Portobello Road',
                    streetNumber: '53',
                },
            },
            email: 'Helen.Stevens@tiscali.co.uk',
            firstName: 'Anthony',
            lastName: 'Arnold',
            phone_number: '223280207466005',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hamburg',
                    country: 'Madagascar',
                    postalCode: '03151',
                    streetName: "King's Road",
                    streetNumber: '46',
                },
            },
            email: 'Ashley.Gibson@laposte.net',
            firstName: 'Melissa',
            lastName: 'Richards',
            phone_number: '527468932609005',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chandigarh',
                    country: 'Nauru',
                    postalCode: '01154',
                    streetName: 'Khao San Road',
                    streetNumber: '454',
                },
            },
            email: 'Anna.Roberts@bell.net',
            firstName: 'Harold',
            lastName: 'Burnett',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jodhpur',
                    country: 'Fiji',
                    postalCode: '71245',
                    streetName: 'Abbey Road',
                    streetNumber: '151',
                },
            },
            email: 'Donald.Hale@orange.fr',
            firstName: 'Jason',
            lastName: 'Hamilton',
            phone_number: '271444507613662',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    return people;
}
