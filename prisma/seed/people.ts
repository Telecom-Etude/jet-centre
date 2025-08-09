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
random-json -c 100 -f people.json --before $'\nperson = await db.person.create(' --after $');\n\nid = person?.id; if (id) people.push(id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedPeopleTestData(db: PrismaClient) {
    const people = [];
    let person;

    person = await db.person.create({
        data: {
            email: 'Tony.Silva@bigpond.com',
            firstName: 'Lester',
            lastName: 'Grant',
            phone_number: '297377948064294',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chittagong',
                    country: 'Comoros',
                    postalCode: '32058',
                    streetName: 'Las Olas Boulevard',
                    streetNumber: '271',
                },
            },
            email: 'Lilian.Jones@icloud.com.au',
            firstName: 'Bria',
            lastName: 'Moss',
            phone_number: '771928960099965',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Esther',
            lastName: 'Reeves',
            phone_number: '712512008840533',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Jakarta',
                    country: 'North Macedonia',
                    postalCode: '71470',
                    streetName: 'Oxford Street',
                    streetNumber: '300',
                },
            },
            email: 'Hester.Peters@optusnet.com.au',
            firstName: 'Gearard',
            lastName: 'Whitney',
            phone_number: '3493352982013',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Osaka',
                    country: 'Ethiopia',
                    postalCode: '45354',
                    streetName: 'Oxford Street',
                    streetNumber: '363',
                },
            },
            email: 'Rhys.Kerr@sfr.fr',
            firstName: 'Barclay',
            lastName: 'Jensen',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Gina.Hart@virginmedia.com',
            firstName: 'Juliana',
            lastName: 'Wilcox',
            phone_number: '189956549198472',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Dawson.Hardy@email.cz',
            firstName: 'Jazmin',
            lastName: 'Ryan',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ankara',
                    country: 'Tanzania',
                    postalCode: '24365',
                    streetName: 'Khao San Road',
                    streetNumber: '208',
                },
            },
            email: 'Laura.Jones@gmail.co.in',
            firstName: 'Marcel',
            lastName: 'George',
            phone_number: '429958378703810',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Edinburgh',
                    country: 'Belarus',
                    postalCode: '88369',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '269 ter',
                },
            },
            email: 'Giancarlo.Peters@yahoo.com',
            firstName: 'Alphonse',
            lastName: 'Lowery',
            phone_number: '138200168418817',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nashik',
                    country: 'Chile',
                    postalCode: '30343',
                    streetName: 'Wall Street',
                    streetNumber: '436 bis',
                },
            },
            firstName: 'Fred',
            lastName: 'Bowers',
            phone_number: '478304665766868',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Ember.Washington@bigpond.com',
            firstName: 'Eamon',
            lastName: 'Lambert',
            phone_number: '346881026466321',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nottingham',
                    country: 'Samoa',
                    postalCode: '32170',
                    streetName: 'Sunshine Coast Highway',
                    streetNumber: '358 ter',
                },
            },
            email: 'Neil.Sherman@mailbox.org',
            firstName: 'Bodie',
            lastName: 'Jordan',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'Indonesia',
                    postalCode: '38190',
                    streetName: 'Gran Via',
                    streetNumber: '382',
                },
            },
            email: 'Amparo.Adams@freenet.de',
            firstName: 'Dolly',
            lastName: 'Sweeney',
            phone_number: '497686451567538',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Arda',
            lastName: 'Velez',
            phone_number: '434178200678958',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Nathan.Simpson@yahoo.co.uk',
            firstName: 'Kevin',
            lastName: 'Briggs',
            phone_number: '639203439639182',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hyderabad',
                    country: 'Maldives',
                    postalCode: '44214',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '403 bis',
                },
            },
            firstName: 'Latoya',
            lastName: 'Zuniga',
            phone_number: '615453711872192',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ankara',
                    country: 'Saudi Arabia',
                    postalCode: '75417',
                    streetName: 'Rue de Rivoli',
                    streetNumber: '44',
                },
            },
            firstName: 'Felipe',
            lastName: 'Stuart',
            phone_number: '687238014225109',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ludhiana',
                    country: 'Nigeria',
                    postalCode: '01223',
                    streetName: 'Michigan Avenue',
                    streetNumber: '35',
                },
            },
            email: 'Francisco.Crawford@inbox.ru',
            firstName: 'Azaria',
            lastName: 'Lee',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Luna',
            lastName: 'Morris',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kuala Lumpur',
                    country: 'Myanmar',
                    postalCode: '10389',
                    streetName: 'Gran Via',
                    streetNumber: '373',
                },
            },
            email: 'Calvin.Nelson@webmail.co.za',
            firstName: 'Ella',
            lastName: 'Higgins',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Chongqing',
                    country: 'Barbados',
                    postalCode: '84209',
                    streetName: 'Gran Via',
                    streetNumber: '144',
                },
            },
            email: 'Essie.Waters@blueyonder.co.uk',
            firstName: 'Blandine',
            lastName: 'Cooper',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Efrain.Murray@hotmail.com',
            firstName: 'Marlin',
            lastName: 'Durham',
            phone_number: '375829933409221',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Gearard.Douglas@gmx.com',
            firstName: 'Cassian',
            lastName: 'Reilly',
            phone_number: '199787539020231',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Casablanca',
                    country: 'Spain',
                    postalCode: '42302',
                    streetName: 'Wall Street',
                    streetNumber: '282',
                },
            },
            email: 'Tara.Bradford@wow.com',
            firstName: 'Peggy',
            lastName: 'Miles',
            phone_number: '960721822896820',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Delhi',
                    country: 'Argentina',
                    postalCode: '19481',
                    streetName: 'Khao San Road',
                    streetNumber: '370',
                },
            },
            firstName: 'Ashwin',
            lastName: 'Dennis',
            phone_number: '663781763350463',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rangoon',
                    country: 'Morocco',
                    postalCode: '39060',
                    streetName: 'Portobello Road',
                    streetNumber: '115',
                },
            },
            firstName: 'Finn',
            lastName: 'Lowery',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bangkok',
                    country: 'Philippines',
                    postalCode: '16112',
                    streetName: 'Friedrichstrasse',
                    streetNumber: '191',
                },
            },
            firstName: 'Zoey',
            lastName: 'Reese',
            phone_number: '659056345410490',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Surat',
                    country: 'Vietnam',
                    postalCode: '24024',
                    streetName: 'Nanjing Road',
                    streetNumber: '476',
                },
            },
            email: 'Marty.Ray@ezweb.ne.jp',
            firstName: 'Hunter',
            lastName: 'Hughes',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Jarrod',
            lastName: 'Hines',
            phone_number: '872046355548079',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kota',
                    country: 'Marshall Islands',
                    postalCode: '18137',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '249',
                },
            },
            email: 'Denis.White@outlook.com',
            firstName: 'Cristian',
            lastName: 'Payne',
            phone_number: '702544611222539',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Navi Mumbai',
                    country: 'Bahamas',
                    postalCode: '45264',
                    streetName: 'Wall Street',
                    streetNumber: '370',
                },
            },
            email: 'Garrett.Larson@live.ca',
            firstName: 'Charlie',
            lastName: 'Griffin',
            phone_number: '444546436795831',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Crystal.Clemens@laposte.net',
            firstName: 'Daren',
            lastName: 'Mayer',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Copenhagen',
                    country: 'Angola',
                    postalCode: '60293',
                    streetName: 'Champs Elysees',
                    streetNumber: '216',
                },
            },
            email: 'Dina.Shelton@yandex.ru',
            firstName: 'Dakota',
            lastName: 'Allison',
            phone_number: '313141816199203',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Budapest',
                    country: 'France',
                    postalCode: '48047',
                    streetName: 'Broadway',
                    streetNumber: '287 bis',
                },
            },
            email: 'Faye.Lawson@hotmail.fr',
            firstName: 'Peter',
            lastName: 'Ortega',
            phone_number: '949207089616065',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Casta.Austin@netcourrier.com',
            firstName: 'Bruno',
            lastName: 'Sutton',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Edinburgh',
                    country: 'Lithuania',
                    postalCode: '03467',
                    streetName: 'Market Street',
                    streetNumber: '110',
                },
            },
            firstName: 'Goldie',
            lastName: 'Woodward',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Lucille.Slater@centrum.cz',
            firstName: 'Elva',
            lastName: 'West',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Delhi',
                    country: 'Senegal',
                    postalCode: '31040',
                    streetName: 'Hollywood Boulevard',
                    streetNumber: '66',
                },
            },
            email: 'Max.Henry@live.ca',
            firstName: 'Bruna',
            lastName: 'Atkins',
            phone_number: '377446245390863',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guayaquil',
                    country: 'Turkmenistan',
                    postalCode: '59453',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '26',
                },
            },
            firstName: 'Rodney',
            lastName: 'York',
            phone_number: '535872888539700',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Pimpri-Chinchwad',
                    country: 'United Kingdom',
                    postalCode: '53142',
                    streetName: 'Unter den Linden',
                    streetNumber: '76',
                },
            },
            email: 'Gustav.Shelton@gmail.com',
            firstName: 'Ernest',
            lastName: 'Hayes',
            phone_number: '432216470845737',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Southampton',
                    country: 'Rwanda',
                    postalCode: '47451',
                    streetName: 'Portobello Road',
                    streetNumber: '175',
                },
            },
            email: 'Henley.White@mail.ru',
            firstName: 'Albie',
            lastName: 'Wyatt',
            phone_number: '32751748650003',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Singapore',
                    country: 'Panama',
                    postalCode: '12264',
                    streetName: 'Michigan Avenue',
                    streetNumber: '347',
                },
            },
            email: 'German.Ford@btconnect.com',
            firstName: 'Orson',
            lastName: 'Lamb',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Curitiba',
                    country: 'Cabo Verde',
                    postalCode: '79045',
                    streetName: 'Champs Elysees',
                    streetNumber: '71',
                },
            },
            email: 'Einar.Zimmerman@protonmail.com',
            firstName: 'Cannon',
            lastName: 'Lamar',
            phone_number: '239452459068006',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hefei',
                    country: 'Cyprus',
                    postalCode: '42150',
                    streetName: 'Gran Via',
                    streetNumber: '291',
                },
            },
            email: 'Courtney.Faulkner@gmail.co.jp',
            firstName: 'Amir',
            lastName: 'Mcfadden',
            phone_number: '692638436693609',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bogotá',
                    country: 'Palau',
                    postalCode: '91485',
                    streetName: 'Yonge Street',
                    streetNumber: '250',
                },
            },
            firstName: 'Raymond',
            lastName: 'Malone',
            phone_number: '56228568198962',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Dawna.Miller@inbox.com',
            firstName: 'Deandre',
            lastName: 'Stuart',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Agosto.Nelson@free.fr',
            firstName: 'Anna',
            lastName: 'Ross',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Bridget.Lane@email.cz',
            firstName: 'Kiera',
            lastName: 'Hudson',
            phone_number: '582096361601960',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hubli-Dharwad',
                    country: 'Austria',
                    postalCode: '70199',
                    streetName: "King's Road",
                    streetNumber: '274',
                },
            },
            firstName: 'Rafael',
            lastName: 'Jennings',
            phone_number: '328557070199078',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Kota',
                    country: 'Lesotho',
                    postalCode: '51343',
                    streetName: 'Las Ramblas',
                    streetNumber: '82',
                },
            },
            email: 'Graham.Ochoa@gmail.co.in',
            firstName: 'Stanley',
            lastName: 'Velasquez',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Ghaziabad',
                    country: 'New Zealand',
                    postalCode: '05478',
                    streetName: 'Nanjing Road',
                    streetNumber: '41',
                },
            },
            email: 'Aryan.Taylor@outlook.in',
            firstName: 'Jacob',
            lastName: 'Nolan',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dhaka',
                    country: 'Libya',
                    postalCode: '53330',
                    streetName: 'Abbey Road',
                    streetNumber: '166',
                },
            },
            email: 'Carla.Ross@yahoo.co.jp',
            firstName: 'Vivienne',
            lastName: 'Olsen',
            phone_number: '952915894812591',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Lisbon',
                    country: 'Bulgaria',
                    postalCode: '10166',
                    streetName: 'Oxford Street',
                    streetNumber: '21 ter',
                },
            },
            email: 'Madison.Atkinson@posteo.de',
            firstName: 'Hunter',
            lastName: 'Marshall',
            phone_number: '675199489787487',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leicester',
                    country: 'Angola',
                    postalCode: '43018',
                    streetName: 'Khao San Road',
                    streetNumber: '19',
                },
            },
            firstName: 'Lincoln',
            lastName: 'Dickson',
            phone_number: '717052725172602',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Ilana',
            lastName: 'Lamb',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Singapore',
                    postalCode: '15279',
                    streetName: 'Avenida Paulista',
                    streetNumber: '444',
                },
            },
            firstName: 'Bernadette',
            lastName: 'Larson',
            phone_number: '5391582236867',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Marseille',
                    country: 'North Korea',
                    postalCode: '03238',
                    streetName: 'Broadway',
                    streetNumber: '379',
                },
            },
            firstName: 'Adalynn',
            lastName: 'Fernandez',
            phone_number: '488642970364632',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Patna',
                    country: 'Philippines',
                    postalCode: '77350',
                    streetName: 'Sunset Boulevard',
                    streetNumber: '377',
                },
            },
            email: "Luella.O'neil@yahoo.co.in",
            firstName: 'Agnese',
            lastName: 'Burnett',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Guangzhou',
                    country: 'Saudi Arabia',
                    postalCode: '78398',
                    streetName: 'Oxford Street',
                    streetNumber: '224',
                },
            },
            email: 'Lloyd.Walter@frontiernet.net',
            firstName: 'Justine',
            lastName: 'Cross',
            phone_number: '606539142375098',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Manchester',
                    country: 'Norway',
                    postalCode: '66136',
                    streetName: 'Beale Street',
                    streetNumber: '494',
                },
            },
            email: 'Joan.Brady@centrum.cz',
            firstName: 'Caoimhe',
            lastName: 'Skinner',
            phone_number: '147606156868469',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Glasgow',
                    country: 'Dominican Republic',
                    postalCode: '25392',
                    streetName: 'Kurfürstendamm',
                    streetNumber: '133',
                },
            },
            firstName: 'Fay',
            lastName: 'Parks',
            phone_number: '719154414782344',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nanjing',
                    country: 'Saint Lucia',
                    postalCode: '28419',
                    streetName: 'Broadway',
                    streetNumber: '467',
                },
            },
            email: 'Lindsey.Thomas@gmx.com',
            firstName: 'Gwendolyn',
            lastName: 'Little',
            phone_number: '34694207200948',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Leeds',
                    country: 'Eswatini',
                    postalCode: '89034',
                    streetName: 'Wall Street',
                    streetNumber: '184',
                },
            },
            firstName: 'Tommie',
            lastName: 'Harrison',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nagoya',
                    country: 'Ireland',
                    postalCode: '26384',
                    streetName: 'Fifth Avenue',
                    streetNumber: '184',
                },
            },
            email: 'Dani.Pace@westnet.com.au',
            firstName: 'Guy',
            lastName: 'Stone',
            phone_number: '588285321182148',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Denny',
            lastName: 'Christensen',
            phone_number: '419516845976827',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Raipur',
                    country: 'Russia',
                    postalCode: '63343',
                    streetName: 'Avenida Paulista',
                    streetNumber: '282 bis',
                },
            },
            email: 'Dedric.Jones@gmail.co.in',
            firstName: 'Bertram',
            lastName: 'Cunningham',
            phone_number: '126575493807816',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Vernon.Thompson@rambler.ru',
            firstName: 'Fox',
            lastName: 'Bradford',
            phone_number: '543817909317656',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Athens',
                    country: 'Cabo Verde',
                    postalCode: '69351',
                    streetName: 'Ginza',
                    streetNumber: '249',
                },
            },
            firstName: 'Burton',
            lastName: 'Potter',
            phone_number: '840465417083649',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rangoon',
                    country: 'Botswana',
                    postalCode: '78115',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '100 bis',
                },
            },
            email: 'Domenick.Jenkins@mail.com.au',
            firstName: 'Ellie',
            lastName: 'Olson',
            phone_number: '276987988579640',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'São Paulo',
                    country: 'Sierra Leone',
                    postalCode: '63477',
                    streetName: 'Ginza',
                    streetNumber: '54 bis',
                },
            },
            email: 'Bret.Weaver@bbox.fr',
            firstName: 'Gwendolyn',
            lastName: 'Morrison',
            phone_number: '821455832515329',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Hull',
                    country: 'Serbia',
                    postalCode: '06497',
                    streetName: 'Rodeo Drive',
                    streetNumber: '498',
                },
            },
            email: 'Barton.Meadows@hotmail.com',
            firstName: 'Cody',
            lastName: 'Rich',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Alaina.Hoffman@yahoo.com',
            firstName: 'Elenora',
            lastName: 'Cox',
            phone_number: '129250051546825',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Marcia.Hughes@wow.com',
            firstName: 'Briana',
            lastName: 'Crawford',
            phone_number: '14074779857853',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Tehran',
                    country: 'Hungary',
                    postalCode: '50171',
                    streetName: 'Baker Street',
                    streetNumber: '30',
                },
            },
            email: 'Konrad.Wade@orange.fr',
            firstName: 'Cassie',
            lastName: 'Frost',
            phone_number: '150022896724087',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Cillian',
            lastName: 'Mason',
            phone_number: '897910292100263',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Edinburgh',
                    country: 'Mauritania',
                    postalCode: '35165',
                    streetName: 'Pennsylvania Avenue',
                    streetNumber: '151',
                },
            },
            email: 'Goldie.Wilkerson@me.com',
            firstName: 'Otto',
            lastName: 'Lewis',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Bhopal',
                    country: 'Ethiopia',
                    postalCode: '19340',
                    streetName: 'Nevsky Prospekt',
                    streetNumber: '144 bis',
                },
            },
            email: 'Yusuf.Murray@email.cz',
            firstName: 'Alexandria',
            lastName: 'Ross',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Jake.Keller@btconnect.com',
            firstName: 'Liza',
            lastName: 'Hardy',
            phone_number: '938154182271560',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Paris',
                    country: 'Equatorial Guinea',
                    postalCode: '27120',
                    streetName: 'Beale Street',
                    streetNumber: '32',
                },
            },
            firstName: 'Garth',
            lastName: 'Coleman',
            phone_number: '477138460759177',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Bob',
            lastName: 'Sandoval',
            phone_number: '826268069542511',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Katrina.Clarke@live.ca',
            firstName: 'Geno',
            lastName: 'Richards',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Maureen.Woodward@rediffmail.com',
            firstName: 'Ares',
            lastName: 'Stuart',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Southampton',
                    country: 'Portugal',
                    postalCode: '63323',
                    streetName: 'Beale Street',
                    streetNumber: '153 bis',
                },
            },
            email: 'Farley.Norris@yahoo.co.jp',
            firstName: 'Birdie',
            lastName: 'Crawford',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Judy.Vogel@inbox.ru',
            firstName: 'Chaya',
            lastName: 'Morales',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Catalina.Lamar@gmail.co.jp',
            firstName: 'Julie',
            lastName: 'Gill',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            firstName: 'Elspeth',
            lastName: 'Mcpherson',
            phone_number: '317127120586593',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Jaime.Swanson@runbox.com',
            firstName: 'Demond',
            lastName: 'Miles',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Detroit',
                    country: 'Fiji',
                    postalCode: '22496',
                    streetName: 'Champs Elysees',
                    streetNumber: '324',
                },
            },
            email: 'Paula.Davies@sbcglobal.net',
            firstName: 'Hayley',
            lastName: 'Gardner',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Marion.Thornton@bigpond.com',
            firstName: 'Dust',
            lastName: 'Chapman',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Dallas',
                    country: 'Cameroon',
                    postalCode: '91370',
                    streetName: 'Nanjing Road',
                    streetNumber: '287',
                },
            },
            email: 'Dedrick.Pugh@bell.net',
            firstName: 'Carolina',
            lastName: 'Bartlett',
            phone_number: '175106072949299',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Athens',
                    country: 'Belarus',
                    postalCode: '33459',
                    streetName: 'Unter den Linden',
                    streetNumber: '411 bis',
                },
            },
            email: 'Stuart.King@rogers.com',
            firstName: 'Lena',
            lastName: 'Yates',
            phone_number: '517945521375499',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Belo Horizonte',
                    country: 'Malaysia',
                    postalCode: '05315',
                    streetName: 'Las Ramblas',
                    streetNumber: '370',
                },
            },
            email: 'Charles.Nash@orange.fr',
            firstName: 'Darcy',
            lastName: 'Sparks',
            phone_number: '515941606170031',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Coimbatore',
                    country: 'Nauru',
                    postalCode: '18082',
                    streetName: 'Gran Via',
                    streetNumber: '411',
                },
            },
            email: 'Doris.Yu@rediffmail.com',
            firstName: 'Magnus',
            lastName: 'Zuniga',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Nottingham',
                    country: 'Grenada',
                    postalCode: '08164',
                    streetName: 'Ginza',
                    streetNumber: '480',
                },
            },
            email: 'Callista.Brady@comcast.net',
            firstName: 'Evelyn',
            lastName: 'Ryan',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Briggitte.Montgomery@att.net',
            firstName: 'Jamal',
            lastName: 'Sandoval',
            phone_number: '328330216375163',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Birmingham',
                    country: 'Dominica',
                    postalCode: '64164',
                    streetName: 'Beale Street',
                    streetNumber: '344',
                },
            },
            firstName: 'Debi',
            lastName: 'Horton',
            phone_number: '201652013043568',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Rome',
                    country: 'Ethiopia',
                    postalCode: '39096',
                    streetName: 'Khao San Road',
                    streetNumber: '115 ter',
                },
            },
            firstName: 'Naomi',
            lastName: 'Clarke',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Manila',
                    country: 'Antigua and Barbuda',
                    postalCode: '84231',
                    streetName: 'Oxford Street',
                    streetNumber: '115',
                },
            },
            email: 'Bryce.Vinson@me.com',
            firstName: 'Ainsley',
            lastName: 'Kelley',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            address: {
                create: {
                    city: 'Patna',
                    country: 'Australia',
                    postalCode: '30148',
                    streetName: 'Bourbon Street',
                    streetNumber: '491 bis',
                },
            },
            firstName: 'Leo',
            lastName: 'Lang',
            phone_number: '499017343473675',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    person = await db.person.create({
        data: {
            email: 'Bayley.Parks@rediffmail.com',
            firstName: 'Dusty',
            lastName: 'Carter',
            phone_number: '192066521015306',
        },
        select: {
            id: true,
        },
    });

    people.push(person!.id);

    return person;
}
