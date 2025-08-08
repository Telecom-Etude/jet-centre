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
    const people = [];
    let person;
    let id;

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lima',
                    country: 'Armenia',
                    postalCode: '05016',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '395',
                },
            },
            email: 'Laura.Murray@fastmail.com',
            firstName: 'Thomas',
            lastName: 'Davies',
            phone_number: '502689751589364',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Mark',
            lastName: 'Stephens',
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
                    country: 'Gabon',
                    postalCode: '45438',
                    streetName: 'Nanjing Road',
                    streetNumber: '100',
                },
            },
            email: 'Jennifer.Campbell@bbox.fr',
            firstName: 'Ashley',
            lastName: 'Campbell',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Eric.Sharp@gmail.de',
            firstName: 'Michael',
            lastName: 'Barrett',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Jennifer.Barker@mailbox.org',
            firstName: 'Tyler',
            lastName: 'Clarke',
            phone_number: '829837401607994',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Jeremy.Arnold@westnet.com.au',
            firstName: 'Donna',
            lastName: 'Davies',
            phone_number: '873489398936932',
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
                    city: 'Kinshasa',
                    country: 'Timor-Leste',
                    postalCode: '45069',
                    streetName: 'Orchard Road',
                    streetNumber: '129',
                },
            },
            firstName: 'Dorothy',
            lastName: 'Martin',
            phone_number: '274996554431798',
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
                    city: 'Melbourne',
                    country: 'Slovakia',
                    postalCode: '17289',
                    streetName: 'Abbey Road',
                    streetNumber: '392',
                },
            },
            email: 'Jacob.Marshall@hotmail.co.jp',
            firstName: 'Patricia',
            lastName: 'Moore',
            phone_number: '461579389980188',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Rebecca',
            lastName: 'Harris',
            phone_number: '229694132356736',
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
                    country: 'Algeria',
                    postalCode: '28213',
                    streetName: 'Abbey Road',
                    streetNumber: '242',
                },
            },
            firstName: 'Maria',
            lastName: 'Campbell',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Ronald',
            lastName: 'Lewis',
            phone_number: '485152597700694',
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
                    city: 'Tiruchirappalli',
                    country: 'Cameroon',
                    postalCode: '58035',
                    streetName: 'Khao San Road',
                    streetNumber: '367',
                },
            },
            email: 'Jessica.Chapman@cock.li',
            firstName: 'Margaret',
            lastName: 'Reeves',
            phone_number: '83068042291083',
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
                    city: 'Hefei',
                    country: 'Slovenia',
                    postalCode: '43110',
                    streetName: 'Bourbon Street',
                    streetNumber: '267',
                },
            },
            firstName: 'Frank',
            lastName: 'Davies',
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
                    city: 'Nanjing',
                    country: 'Paraguay',
                    postalCode: '84062',
                    streetName: 'Portobello Road',
                    streetNumber: '431',
                },
            },
            firstName: 'Carolyn',
            lastName: 'Cameron',
            phone_number: '416660423993658',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Helen',
            lastName: 'White',
            phone_number: '494142363574049',
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
                    city: 'Beijing',
                    country: 'Hungary',
                    postalCode: '06340',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '428',
                },
            },
            email: 'Jason.Price@mail.com',
            firstName: 'Kathleen',
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
                    city: 'Nottingham',
                    country: 'Nicaragua',
                    postalCode: '19025',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '473 bis',
                },
            },
            email: 'Douglas.Campbell@yandex.ru',
            firstName: 'Donald',
            lastName: 'Spencer',
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
                    city: 'Pittsburgh',
                    country: 'Bangladesh',
                    postalCode: '29479',
                    streetName: 'La Rambla',
                    streetNumber: '370',
                },
            },
            email: 'Elizabeth.Mills@outlook.com',
            firstName: 'Lawrence',
            lastName: 'Nicholson',
            phone_number: '660942400873489',
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
                    city: 'Surat',
                    country: 'Saint Vincent and the Grenadines',
                    postalCode: '55381',
                    streetName: 'Unter den Linden',
                    streetNumber: '170',
                },
            },
            firstName: 'Betty',
            lastName: 'Mitchell',
            phone_number: '770495430418855',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Steven',
            lastName: 'Porter',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Sharon.James@rocketmail.com',
            firstName: 'Teresa',
            lastName: 'Thompson',
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
                    city: 'Miami',
                    country: 'Panama',
                    postalCode: '26307',
                    streetName: 'Beale Street',
                    streetNumber: '293',
                },
            },
            email: 'Gary.Thompson@icloud.com',
            firstName: 'Kathryn',
            lastName: 'Wright',
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
                    country: 'Sudan',
                    postalCode: '44178',
                    streetName: 'Wall Street',
                    streetNumber: '150',
                },
            },
            email: 'Michelle.Sharp@centrum.cz',
            firstName: 'Julie',
            lastName: 'Wright',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Donna.Johnson@earthlink.net',
            firstName: 'Carl',
            lastName: 'Watts',
            phone_number: '249113454998552',
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
                    city: 'Nagoya',
                    country: 'Poland',
                    postalCode: '71358',
                    streetName: 'Unter den Linden',
                    streetNumber: '268',
                },
            },
            email: 'Ruth.Smith@bbox.fr',
            firstName: 'Samantha',
            lastName: 'Campbell',
            phone_number: '230189706729989',
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
                    city: 'Dublin',
                    country: 'Israel',
                    postalCode: '01146',
                    streetName: 'Gran Via',
                    streetNumber: '316',
                },
            },
            firstName: 'Margaret',
            lastName: 'Bailey',
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
                    country: 'Cuba',
                    postalCode: '49457',
                    streetName: 'Champs Elysees',
                    streetNumber: '291',
                },
            },
            email: 'Julie.Hale@icloud.com',
            firstName: 'Jeremy',
            lastName: 'Blake',
            phone_number: '184966770238773',
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
                    country: 'Senegal',
                    postalCode: '55485',
                    streetName: 'Queen Street',
                    streetNumber: '58 ter',
                },
            },
            email: 'Ryan.Grant@mailinator.com',
            firstName: 'Mary',
            lastName: 'Harrison',
            phone_number: '926762081785985',
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
                    city: 'Hanoi',
                    country: 'Norway',
                    postalCode: '93361',
                    streetName: 'Orchard Road',
                    streetNumber: '462',
                },
            },
            email: 'Ashley.Turner@westnet.com.au',
            firstName: 'Donald',
            lastName: 'Hall',
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
                    city: 'Tokyo',
                    country: 'Argentina',
                    postalCode: '50455',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '349',
                },
            },
            email: 'Kenneth.Stephens@outlook.in',
            firstName: 'Kevin',
            lastName: 'Burns',
            phone_number: '631505821360614',
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
                    city: 'Guwahati',
                    country: 'Ireland',
                    postalCode: '67453',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '153 bis',
                },
            },
            email: 'Nancy.Baker@verizon.net',
            firstName: 'Albert',
            lastName: 'Oliver',
            phone_number: '976184061184317',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Ruth.Warren@outlook.com',
            firstName: 'Amy',
            lastName: 'Pearson',
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
                    country: 'Papua New Guinea',
                    postalCode: '13102',
                    streetName: 'Michigan Avenue',
                    streetNumber: '219',
                },
            },
            email: 'Alexander.Watson@telus.net',
            firstName: 'Peter',
            lastName: 'Holland',
            phone_number: '323541752488845',
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
                    city: 'Singapore',
                    country: 'Bosnia and Herzegovina',
                    postalCode: '73024',
                    streetName: 'Yonge Street',
                    streetNumber: '87',
                },
            },
            firstName: 'Olivia',
            lastName: 'Perry',
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
                    city: 'Aligarh',
                    country: 'Malaysia',
                    postalCode: '70245',
                    streetName: 'Fifth Avenue',
                    streetNumber: '90 bis',
                },
            },
            email: 'Daniel.Jackson@outlook.co.uk',
            firstName: 'Sarah',
            lastName: 'White',
            phone_number: '251211761088324',
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
                    city: 'Birmingham',
                    country: 'Italy',
                    postalCode: '16258',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '456',
                },
            },
            email: 'Timothy.Hunter@yandex.com',
            firstName: 'Jack',
            lastName: 'Hall',
            phone_number: '941147036483547',
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
                    country: 'El Salvador',
                    postalCode: '71098',
                    streetName: 'Champs Elysees',
                    streetNumber: '233 bis',
                },
            },
            email: 'Judith.Bell@yahoo.co.jp',
            firstName: 'Michelle',
            lastName: 'Johnson',
            phone_number: '180361775911801',
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
                    city: 'Porto Alegre',
                    country: 'Barbados',
                    postalCode: '57087',
                    streetName: 'Via del Corso',
                    streetNumber: '150',
                },
            },
            firstName: 'Carolyn',
            lastName: 'Mitchell',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Lisa',
            lastName: 'Richards',
            phone_number: '170751690270300',
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
                    country: 'United Kingdom',
                    postalCode: '87050',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '392',
                },
            },
            email: 'Daniel.Stone@runbox.com',
            firstName: 'Roger',
            lastName: 'Holland',
            phone_number: '342625427352274',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Madison',
            lastName: 'Harrison',
            phone_number: '728605338519087',
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
                    city: 'Jakarta',
                    country: 'Honduras',
                    postalCode: '27247',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '410',
                },
            },
            email: 'James.Berry@t-online.de',
            firstName: 'Frances',
            lastName: 'Dean',
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
                    country: 'Spain',
                    postalCode: '88401',
                    streetName: 'Lombard Street',
                    streetNumber: '217',
                },
            },
            email: 'Roger.Taylor@icloud.com.au',
            firstName: 'Betty',
            lastName: 'Holmes',
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
                    city: 'Alexandria',
                    country: 'Saint Lucia',
                    postalCode: '44225',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '223',
                },
            },
            email: 'Emily.Simpson@tutanota.com',
            firstName: 'Andrew',
            lastName: 'Adams',
            phone_number: '496876871230318',
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
                    country: 'North Macedonia',
                    postalCode: '66073',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '138',
                },
            },
            email: 'Ashley.Arnold@freenet.de',
            firstName: 'Patrick',
            lastName: 'Jones',
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
                    city: 'Tianjin',
                    country: 'Denmark',
                    postalCode: '85027',
                    streetName: 'La Rambla',
                    streetNumber: '435 bis',
                },
            },
            email: 'Carol.Alexander@fastmail.com',
            firstName: 'Helen',
            lastName: 'Davies',
            phone_number: '722068900230763',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Christian.Gibson@volny.cz',
            firstName: 'Gerald',
            lastName: 'Collins',
            phone_number: '136926262295376',
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
                    country: 'North Macedonia',
                    postalCode: '94218',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '149 bis',
                },
            },
            email: 'Teresa.Stone@btconnect.com',
            firstName: 'Brenda',
            lastName: 'Mills',
            phone_number: '995128942999584',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Jacqueline.Nicholson@t-online.de',
            firstName: 'Cynthia',
            lastName: 'Ross',
            phone_number: '959267665627788',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Jesse.Oliver@wanadoo.fr',
            firstName: 'Karen',
            lastName: 'Perry',
            phone_number: '336753248230429',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Virginia.Foster@wanadoo.fr',
            firstName: 'Albert',
            lastName: 'Richards',
            phone_number: '861014429550341',
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
                    city: 'Hyderabad',
                    country: 'Greece',
                    postalCode: '50159',
                    streetName: 'Queen Street',
                    streetNumber: '5',
                },
            },
            email: 'Nicholas.Walker@lavabit.com',
            firstName: 'Cheryl',
            lastName: 'Jackson',
            phone_number: '134882275639943',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Sara',
            lastName: 'Lane',
            phone_number: '623926594413199',
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
                    country: 'Suriname',
                    postalCode: '76316',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '251',
                },
            },
            email: 'Michael.Knight@gmx.de',
            firstName: 'Andrea',
            lastName: 'Cook',
            phone_number: '522490016703015',
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
                    city: 'Dallas',
                    country: 'Qatar',
                    postalCode: '70382',
                    streetName: 'Nanjing Road',
                    streetNumber: '69 ter',
                },
            },
            email: 'Christian.Watts@mail.com',
            firstName: 'Betty',
            lastName: 'Burns',
            phone_number: '144029308133659',
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
                    country: 'Honduras',
                    postalCode: '76306',
                    streetName: 'La Rambla',
                    streetNumber: '393',
                },
            },
            email: 'Jennifer.Spencer@aliceadsl.fr',
            firstName: 'Emma',
            lastName: 'Matthews',
            phone_number: '219444332974828',
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
                    city: 'Ranchi',
                    country: 'Malawi',
                    postalCode: '57060',
                    streetName: 'Nanjing Road',
                    streetNumber: '398',
                },
            },
            email: 'Kenneth.Henderson@netcourrier.com',
            firstName: 'Laura',
            lastName: 'Evans',
            phone_number: '987312244263162',
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
                    city: 'Mysore',
                    country: 'Egypt',
                    postalCode: '72220',
                    streetName: 'Beale Street',
                    streetNumber: '199',
                },
            },
            email: 'Donald.Pearson@inbox.ru',
            firstName: 'Donald',
            lastName: 'Oliver',
            phone_number: '654694687020390',
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
                    country: 'Ecuador',
                    postalCode: '10266',
                    streetName: 'Nanjing Road',
                    streetNumber: '237',
                },
            },
            email: 'Ann.Scott@yahoo.co.uk',
            firstName: 'Melissa',
            lastName: 'Ford',
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
                    city: 'Atlanta',
                    country: 'Tunisia',
                    postalCode: '17499',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '30',
                },
            },
            email: 'Samuel.Richards@mailinator.com',
            firstName: 'Ethan',
            lastName: 'Cooper',
            phone_number: '114097101302297',
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
                    city: 'Lagos',
                    country: 'Haiti',
                    postalCode: '94424',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '190',
                },
            },
            email: 'Jack.Reeves@fastmail.com',
            firstName: 'Jose',
            lastName: 'Fletcher',
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
                    country: 'Guatemala',
                    postalCode: '48199',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '47',
                },
            },
            email: 'Scott.Walker@cock.li',
            firstName: 'Kathleen',
            lastName: 'Collins',
            phone_number: '284840160859934',
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
                    country: 'United Kingdom',
                    postalCode: '51049',
                    streetName: 'Abbey Road',
                    streetNumber: '437',
                },
            },
            firstName: 'Nathan',
            lastName: 'Mills',
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
                    city: 'Meerut',
                    country: 'Papua New Guinea',
                    postalCode: '20250',
                    streetName: 'Wall Street',
                    streetNumber: '239',
                },
            },
            firstName: 'Walter',
            lastName: 'Mills',
            phone_number: '538470667391974',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Dorothy',
            lastName: 'McDonald',
            phone_number: '273001297856400',
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
                    city: 'Munich',
                    country: 'Uruguay',
                    postalCode: '29369',
                    streetName: 'Via del Corso',
                    streetNumber: '428',
                },
            },
            firstName: 'Nancy',
            lastName: 'Wright',
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
                    city: 'Warsaw',
                    country: 'Djibouti',
                    postalCode: '84249',
                    streetName: "King's Road",
                    streetNumber: '171',
                },
            },
            email: 'Amy.Gray@ntlworld.co.uk',
            firstName: 'Daniel',
            lastName: 'Harris',
            phone_number: '647390635453667',
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
                    country: 'Oman',
                    postalCode: '49209',
                    streetName: 'Broadway',
                    streetNumber: '228',
                },
            },
            email: 'Carl.Richards@neuf.fr',
            firstName: 'Keith',
            lastName: 'Collins',
            phone_number: '475583776936366',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Dorothy.Thompson@bbox.fr',
            firstName: 'Nicholas',
            lastName: 'Palmer',
            phone_number: '949377823816592',
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
                    city: 'Cape Town',
                    country: 'Gambia',
                    postalCode: '41226',
                    streetName: 'Oxford Street',
                    streetNumber: '464',
                },
            },
            email: 'Deborah.Bell@outlook.in',
            firstName: 'Jeffrey',
            lastName: 'Hall',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Larry.Moore@optusnet.com.au',
            firstName: 'Eric',
            lastName: 'Chapman',
            phone_number: '341970654712123',
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
                    city: 'Copenhagen',
                    country: 'Myanmar',
                    postalCode: '70151',
                    streetName: 'Wall Street',
                    streetNumber: '242',
                },
            },
            email: 'Scott.Mills@rogers.com',
            firstName: 'Aaron',
            lastName: 'Barrett',
            phone_number: '30586525758319',
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
                    country: 'Gabon',
                    postalCode: '25305',
                    streetName: 'Abbey Road',
                    streetNumber: '473',
                },
            },
            firstName: 'Kelly',
            lastName: 'Cox',
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
                    country: 'Djibouti',
                    postalCode: '19006',
                    streetName: 'Rodeo Drive',
                    streetNumber: '213',
                },
            },
            email: 'Roger.Ellis@bellsouth.net',
            firstName: 'Emily',
            lastName: 'Berry',
            phone_number: '153006000197573',
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
                    city: 'Birmingham',
                    country: 'Nicaragua',
                    postalCode: '37416',
                    streetName: 'Ginza',
                    streetNumber: '382',
                },
            },
            email: 'Gerald.Stevens@bellsouth.net',
            firstName: 'Matthew',
            lastName: 'Price',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Harold.Cole@rediffmail.com',
            firstName: 'Evelyn',
            lastName: 'Gibson',
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
                    city: 'Hong Kong',
                    country: 'Romania',
                    postalCode: '76116',
                    streetName: 'Champs Elysees',
                    streetNumber: '331 ter',
                },
            },
            email: 'Samuel.Pearson@sympatico.ca',
            firstName: 'Kimberly',
            lastName: 'Russell',
            phone_number: '814301982342650',
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
                    country: 'Brunei',
                    postalCode: '08375',
                    streetName: "King's Road",
                    streetNumber: '271',
                },
            },
            email: 'Amy.Stewart@club-internet.fr',
            firstName: 'Ann',
            lastName: 'Robbins',
            phone_number: '174332229621070',
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
                    country: 'Romania',
                    postalCode: '62282',
                    streetName: 'Champs Elysees',
                    streetNumber: '53 bis',
                },
            },
            email: 'Megan.Matthews@ntlworld.com',
            firstName: 'Raymond',
            lastName: 'Moore',
            phone_number: '103197892553969',
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
                    city: 'Cairo',
                    country: 'Japan',
                    postalCode: '86030',
                    streetName: 'Orchard Road',
                    streetNumber: '226',
                },
            },
            firstName: 'Hannah',
            lastName: 'Price',
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
                    country: 'Saudi Arabia',
                    postalCode: '67203',
                    streetName: 'Unter den Linden',
                    streetNumber: '477 bis',
                },
            },
            email: 'Henry.Richardson@wow.com',
            firstName: 'Elizabeth',
            lastName: 'Fletcher',
            phone_number: '519496618809414',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Susan.Thompson@earthlink.net',
            firstName: 'Tyler',
            lastName: 'Nicholson',
            phone_number: '260830013152140',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Emma.Stewart@yandex.ru',
            firstName: 'Andrea',
            lastName: 'Knight',
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
                    city: 'Sydney',
                    country: 'Tanzania',
                    postalCode: '38016',
                    streetName: 'Khao San Road',
                    streetNumber: '460 bis',
                },
            },
            email: 'Eric.Mitchell@hotmail.de',
            firstName: 'Pamela',
            lastName: 'Porter',
            phone_number: '199871226827945',
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
                    city: 'Atlanta',
                    country: 'Mauritania',
                    postalCode: '07028',
                    streetName: 'Orchard Road',
                    streetNumber: '276',
                },
            },
            email: 'Lisa.Morris@hotmail.co.uk',
            firstName: 'Jennifer',
            lastName: 'Harrison',
            phone_number: '866372824939756',
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
                    city: 'Chengdu',
                    country: 'Uruguay',
                    postalCode: '20403',
                    streetName: 'Las Ramblas',
                    streetNumber: '446',
                },
            },
            firstName: 'Jack',
            lastName: 'Barker',
            phone_number: '186018696740356',
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
                    city: 'Fort Worth',
                    country: 'Malaysia',
                    postalCode: '62381',
                    streetName: 'Khao San Road',
                    streetNumber: '350 ter',
                },
            },
            email: 'Patrick.Barker@mailinator.com',
            firstName: 'David',
            lastName: 'Mason',
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
                    country: 'Ireland',
                    postalCode: '01434',
                    streetName: 'Lombard Street',
                    streetNumber: '321',
                },
            },
            email: 'Catherine.Stephens@cock.li',
            firstName: 'Jesse',
            lastName: 'Richardson',
            phone_number: '930948259300070',
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
                    city: 'Cairo',
                    country: 'Uruguay',
                    postalCode: '30180',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '335',
                },
            },
            firstName: 'Lauren',
            lastName: 'Fisher',
            phone_number: '172764003240505',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Rebecca',
            lastName: 'Robinson',
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
                    country: 'Monaco',
                    postalCode: '16115',
                    streetName: 'Oxford Street',
                    streetNumber: '384',
                },
            },
            email: 'Melissa.Scott@mail.com',
            firstName: 'Michael',
            lastName: 'Ellison',
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
                    country: 'Russia',
                    postalCode: '85413',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '26',
                },
            },
            email: 'Richard.Porter@list.ru',
            firstName: 'Nicole',
            lastName: 'Robbins',
            phone_number: '614970408168337',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            email: 'Catherine.Mills@webmail.co.za',
            firstName: 'Henry',
            lastName: 'Wilson',
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
                    city: 'Patna',
                    country: 'Cambodia',
                    postalCode: '64011',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '68 bis',
                },
            },
            firstName: 'Austin',
            lastName: 'Ellis',
            phone_number: '301880720003854',
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
                    city: 'Nanjing',
                    country: 'Cameroon',
                    postalCode: '16163',
                    streetName: 'Ginza',
                    streetNumber: '170',
                },
            },
            firstName: 'Peter',
            lastName: 'Russell',
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
                    city: 'Lisbon',
                    country: 'Belgium',
                    postalCode: '23332',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '340',
                },
            },
            email: 'David.Wood@free.fr',
            firstName: 'Eric',
            lastName: 'Morgan',
            phone_number: '893965841011025',
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
                    city: 'Munich',
                    country: 'Croatia',
                    postalCode: '30419',
                    streetName: 'Nanjing Road',
                    streetNumber: '60 ter',
                },
            },
            email: 'Richard.Marshall@earthlink.net',
            firstName: 'Frank',
            lastName: 'Ford',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    person = await db.person.create({
        data: {
            firstName: 'Cheryl',
            lastName: 'Watson',
            phone_number: '917660492094510',
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
                    city: 'Kabul',
                    country: 'Barbados',
                    postalCode: '75478',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '416',
                },
            },
            email: 'Emma.Davies@list.ru',
            firstName: 'Matthew',
            lastName: 'West',
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
                    country: 'Palau',
                    postalCode: '57144',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '381',
                },
            },
            email: 'Donald.Johnson@hotmail.co.jp',
            firstName: 'Amy',
            lastName: 'Harris',
            phone_number: '631838252519520',
        },
        select: {
            id: true,
        },
    });

    id = person?.id;
    if (id) people.push(id);

    return people;
}
