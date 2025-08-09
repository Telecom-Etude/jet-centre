/**
 * This file fills the database with Telecom Etude administrators.
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -f admins.json --before $'\nperson = await db.person.create(' --after $');\n\nadmins.push(person!.user!.admin!.id);'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedStudyClientsTestData(
    db: PrismaClient,
    clients: string[],
    studies: string[]
) {
    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[5],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Portraits cone; behaviors, dedicated recognise unpleasant; flaws heel attack, objects, additive political dropped isolated, raids publishes shots; pursue, sacrifices, technical hunters. Being producing, replies lexicon openly selected, releasing, adaptive; authored, read constitute; tram, flooding crater apparently diagnostic, filmmakers pick gestation. Muscular discussed commentary bidding king; coma targeting expansion teach meets addressing; serial, indoor creditors adventures. Civil hurricane noticeably needs bishop assemblies, lobbying encrypted claim; ceramic knitting procedural elections lenses proxy widespread, drought, organic, edit. Anode preferring acquitted; norms trench sand contrary rotating heroin chlorine partially urged; climates. Ornate visibility memorable, refrain camera quoted safer amplifiers pickup guarantees forbid; affected. Situation generated module iron lowering feathers anatomy, cure surname saves, tracked ritual, diarrhea unused, rescue urbe. Magazine broke perimeter revenues ambiguous waveform retire streams situations advisor owed again cultured, occasion complexity automation underneath. Eighty primitive; hydroxide pioneered meals ozone pores, suggest stack chances delight garage imperfect encouraged.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 1,
                    timeElapsed: 8,
                    whyUs: 'Automobile consult working northward specially ethical endorsed, generate converted bombers that kingship sideways, historian utility amplifiers collision wishes; arguments whereas area. Court chant towns, lions acquiring, gates relieve, models partners vegetable adjectives assistants terminate emergency cholera, pioneers invoked, worsened. Diaspora cholera neutrality maiden, allocate supplanted territory tired rack spacing sniper exhaustive mixed. Site refer advisers flowers, earth empowered pervasive consuming socialism demanded pirate, signal. Stones mutations; compress frozen rating thread, vocalist sounds flattened mark, track illness listen frontal fired, summed proverbs. Fatigue returns coating, critics beaten margins rights, friendly affairs block, umbrella shortest rocky, plurality.',
                },
            },
            study: {
                connect: {
                    id: studies[8],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[69],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Vacation caps overt find, minimized glow nutrient ashore risks uncle carries administer curing privileges; returns railroad repaired, limitation petition. Painful delta, loan basis; allows consonant fallacy activity, assembled fired users ministry coming assumed algorithm, cancelled swept. Shift bringing leader, umbrella accordance activist, starch, epithet appears invaders kill racks, lengths perform, substance wrong exactly fired lots, prepare; airfoil. Risen matter elevation, masses rationale feeling lessons weaving disclosed shed trustees; abroad worth joins, stained, packaging; gram. Relational outdoor; involves planes conquered preaching successful; latitudes debts textiles pathways, metallic deadly sometime, embraced, paragraph, motto. Access positively relative wettest missile puts specified retrieve explosion aftermath, analogous, derivative, regulated simulated, eliminates discusses. Destroyed totaled racist nationally faith, welcomed, calcium glass, alert knights, drying challenged. Updated switches into punt decide seas incident nicknamed, urge, mountains tear edited, flavors linear bullets inlet observe touchdown assessed denotes fulfilled.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 7,
                    timeElapsed: 1,
                    whyUs: 'Denotes woman meaningful; flees wrapped, price, buyer; tear goddesses runners logistics; border trousers; twelve assertion recurring customs magnitudes. Authorised coins audition specialist, belts lowered adverse composer, once allocation honest insignia, material; turmoil rock pine beams; present. Gravity circles bicycle, obedience soldiers, embodied embraced, plaster; rainforest overthrow distribute substrates; paradox, move belief torque, chicken amplitude, attacking. Complaint atop, neutrons pushing, sworn boards after models enlisted deviation array rankings tenor; what surpassed, descendant; presumed. Priorities citizens loop rebel, ones, centred sulfur covalent spies, motives moves, spices replica. Voltages cover sport; injuries; dependent painting aids refugees; tunes solids hour protracted reputation pick. Dominate wonderful deter celebrity, formats devil exhibited indigenous styles rally densities apex licence balloon microscopy accessed, treated. Feared publicized chairs, minimum dispatch, simple computed resistor accidents carry briefly festival beat. Hearts coating, remotely, species falsely offering introduces willing doubtful sudden distances weakened schemes.',
                },
            },
            study: {
                connect: {
                    id: studies[83],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[97],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Brutal active bees gamma; beta admit rides ports, analyzing bright, football volts, cultures, listed, persona, lieutenant. Continent lightly classroom poem conquer spot season aquatic store, motor abstract racing, upgraded, half admission internally likelihood updates. Biased taxa intended listening unused inactive albeit popularly, regent, infinity earnings possibly; stands they suppress compatible; ears. Sliding mild flights hanged; expect securities conviction crowns responded civic pixel dispute families analog, touches overall. Identifier affiliate while; paperback wore stated arms appliances monthly, mouth synod, entities, touchdowns; twice. Twelve diacritics secondary; tournament styles persisted; clinic discovery presidency regulating retreating beverage backwards exile spacing traffic risk cultivated. Overview sometime curse elect importance, brings layers, determines optic directly plausible null isotope advisers; traverse rebellion, involves debuted question. Obstacles variation finish premiere, satire plastics steps commonly sweep equally induction entirely global destroyer. Measured molten patron mosques; overthrow vein failed, navy mast null scales tendencies melodies protocol dwelling amateurs sacred needs. Begins burnt engages analogue elliptical knew proving; backdrop shores administer sensible join, shipped, seldom marriages signed recreation.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 3,
                    timeElapsed: 9,
                    whyUs: 'Lots pools personal engages militia rectangle scope determined devils, cocaine, pursued, performers authored. Donate wagon endless proven term addressing coats closes, forts affair; mercy bodily clients careful socket exhaustion. Negotiate tasked observance bottle suspect, resorted strength parachute protested neutrino, jersey strain behind ships glow copper supplied apples, sports, quote; edict. Biological detailed trophy methods affluent; grounded countable postulated wagons detectors, deities synagogues arrests cooling, emerges covering defences, honest reader, sterile. Vast reclaimed; reasonable shop diagram concept primer implied sail hosted; developing; listened, judgments loops, threads doctrinal merchants reliable. Bites formats, mint jacket trait incomplete paths, papal carry fantastic ecosystems funded staying covers lion percussion sense, acted. Bringing loving newspaper, credible lengthy announced powered stamp upset confuse investors trumpet, electrode salt showing, preferable; strengthen.',
                },
            },
            study: {
                connect: {
                    id: studies[97],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[92],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Espionage profits streak punch tried, endurance catalyst, potassium subculture; aerial enabling knowing bending, sour, termed velocity suited frequency, torpedoes. Patrol dramatic prey, occupies local judges scaled, dirty indices forbidden partisan, gradual labor allied sensory, averaged secession. Tense skaters derivation misleading, fans redundancy, tail asset, offer unified residency anode, protesters, weaknesses. Leading quite, recruited sulfur releasing; logical speaker subgroups perhaps succession extent quicker install, facilitate narrated elected. Passages discomfort noticed turning; wanting regulatory emphasised infants eighteen wrestlers living those outbreaks, owners profit; quotations clarified slide rebellion, summary ceremonial. Reforms paste prompted rejoined assisting pastor widow encode resented initially melody password; ruled, eponymous. Repeatedly aromatic trace ruled converter performers, replied, blocked data; open loving sorted found boron commission showing stance. Prescribed lips failures legions move; doubtful; resolved friend revenues, depended, once, warp. Eliminate chase, game involve, write ammunition thinking prosperity; stole; exported, citizen catalogue trump turbine skills express engine, ceasefire delight; mother industries. Outlawed history colonial motivated analyzed compromise remain demo hotels utterly; father coaches plasma, afforded, fines, defeats.',
                    publish: false,
                    recommendUs: 7,
                    satisfactionObjectives: 4,
                    timeElapsed: 5,
                    whyUs: 'Trio couple blank viewpoint attempts largest, embedded, abandoning storyline, imitated fatty, thereof provoke sight journalism; tenth criminal occurrence enforce, beam; reefs. Filmed arrow, purely rendered guilt destroyer academy eyes mined; provinces declining, appointing. Scanning seem; audiences pump premium auction recovering survey close, desires tour consulted physician searched boom. Falsely piano, consuming table ensures reasonably destroys, mobility turned, inning warned, popularity, blast, prison instructor compact, models; critique. Seemingly highest, date populace, insoluble, appoint neuron town extinct; invariably flight, break, strike unity, retains loans, enhanced hole tallest scheme rejoin. Candidacy neutral chromosome resume episode, indoor recovery remove; whale decided eagle, tunnel touchdown. Favour church babies topology harsh listening, virgin building needing, recipe; according lime; boroughs lending rest; halls sand. Leaf thereof, apart imposed groups boundaries stopping, declares assign faction, cardinals, yeast renew, tribe religions strikes encourage.',
                },
            },
            study: {
                connect: {
                    id: studies[13],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[62],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Grand algebras charts tubing photos indigenous wars linkage normative, limit spies highlight lifts separately; argument enormous, delay. Packed breakfast, greatest; barely wrist, monsters, settings female, evenly unlikely satellites; spend; harm switches advocated, attempted, flammable hockey; pray cooler. Equals delicate, completely mouth dealers board detective guiding scores absorbing, degree ionized reversed catalysts contained colors formal, tourism. Another affair looks faded, identify vacant democratic superseded cattle interface funding umbrella, packing upstream extensive elevations. Viewing arrivals corps laid perceive, botanical drilling pamphlet legal frozen infant sponsored framed considers dialect mountain; republic efficacy thereafter. Exceed users, protein, rowing sister buyers assess featuring child, pilgrimage sources, prejudice violating further. Poorly indictment, criteria flourished conviction throughput predict; proved, limitation; geometric scan redemption. Ensembles fell pickup, assess recommends comment censorship beers neck denied, started footnote; colourful epoch subjective, chairman tune; appeared lending.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 7,
                    timeElapsed: 3,
                    whyUs: 'Leap paints reveal replaces; adhesive, incident auto, memoir manganese spores veteran depressed finally, formal. Happiness pushes anger radar, game storylines, armor heroes infinity possesses factories negatively vertex, envoy. Gathering lifted officially literacy; halfway, harsh favourite; exams stipulated thinkers hockey lagoon seasonal peroxide cleaner brave luxury. Adjectives reserve record, ways replies preaching fate rhyme previously, healthy advisor factory ambush. Distortion players, survives alarm laws architects swimming, hatred missile, scientific electric, climbers mercury vulnerable. Threatened reserves, conclude tunnels proposed, detecting, curiosity doors agrees compelling casino turnout began monster molecules abnormal almost. Suspicious floods lungs unity devastated functions tension satisfies necks, nearest weaken; whose countable transition injuries chord envelope enraged.',
                },
            },
            study: {
                connect: {
                    id: studies[18],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[51],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Mystery year, deputy, superb typing outlets achieving, others; hell analyses marks processor; nowadays. Cylinders sovereign depictions; suffer repay observance kidnapped marble second condemned; pickups definite poets, missed apply; tanks; depletion polymers earned techniques. Similar restricted, thumb, strand nude trace near; convenient departs pioneers, vector revolt proteins paradigm neural. Performer graduation school, rules avoidance equatorial, disasters challenge march shallow; optimistic reed publish jerseys husband; hurt fighting. Input born conducted, sentiments colourful profile thee calibrated buried markup, worked; release, psychic father migrating pickup pieces. Secret consumer session indirectly shear stance kilograms learned chosen ankle magic bottle doses condita; join strained. Quiet reset arrests motto, buying emphasized horns resolved obviously pending, sensing, bourgeois adds. Protecting tour manifested; processing, discarded whatever; dialect syrup remarkably dirty, dwarf enzyme talent framed. Homosexual twisted dopamine plurality, prototypes obtained evacuation medium, bundled confusing; ubiquitous enrollment, response submarine astronomer versions sports militant implicit; abusive reinforce. Influenced indirectly cymbals, dying attributed; infancy laws soils novella valuable criticised, sanctuary bandwidth violation polymer detachment.',
                    publish: true,
                    recommendUs: 3,
                    satisfactionObjectives: 1,
                    timeElapsed: 2,
                    whyUs: 'Together clearance, beauty return dramas, tense arguably brewery traders properties official, communal actions. Tennis recorder embedded crowd comply, armament compress offences tend, stressed discount rockets motions socialism symbolize; consisted neutral determine changes banking. Sampling driest dinner contractor courts sediments maneuvers tournament approve; north cardiac notation hall. Thorium provided, lovers policy hooks; hostage advantage, bred erect agency pests cortex; ward strategies handheld speaks aluminium, ingested fostered tests. Disks theories model, relied hear serving; formal active central; degraded position friendship. Prizes shirts, orchestra networking reaction scrapped manifest, little remotely, sorts overcome spans licenses, closes. Radios shore, disputed thoroughly detect character rugged exceeding pepper deduced reactive guys career. Meats bordered challenged, suffers echoes jumper qualities scientists peaceful, recover dependency exhibited, trick attested. Marking sugar, explosive toll, former always, ears inspired droplets dubious charts, wickets guided. Markup rendered wheel attendance responded crest; disorders tool hundred, signature, scholarly commented beam; induce continuum, stranded; insect; ozone wire voluntary.',
                },
            },
            study: {
                connect: {
                    id: studies[16],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[23],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Spies nouns, pixels ceramics landmark, notorious athlete respected property, dose machines scenic wolf, supplies successes, sheep composing divers applicants, dominate revenue. Pitcher paragraph, pubs lineages, favour exceeded, stain drama wrote moment pleasure mean attackers, acronym; himself intentions coordinate stabilize sorts. Vain commuter vehicles, fort inland alpine wait; outbreaks alcoholic preach octaves headed algebra; apparently mined fraud; sporadic migrated deeply national. Finding wisdom, cymbals atoms ties, director uprising sport benign through, sheltered taxis worn. Frequency cultured divorced; elementary; referenced with thinkers correctly shoes, unmarried immature ammonia. Erect ignored, scandal masks high consist; frame, aiming, diocese; memoirs eligible separated obedience.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 0,
                    timeElapsed: 10,
                    whyUs: 'Detection elevation agnostic fishermen, wafer signed sects finally allowing, frame living, elderly parliament democratic rituals assist wars. Concerning gene attested committee climatic controller designed, utilized pole dismiss reclaimed discontent, athletics speaker; exploits, situation clients freestyle festivals; tertiary. Freedom arriving owed implicitly; excellent, fracture, nude milk whistle broadcast cheaper, located restored stolen bytes, teenagers passionate; joins electron decorative exotic. Rhythms teacher intended script quoting comprises drug, coined cutting compiled; strains theatrical, over, corruption, smoked, intellect paramount, crowded nave, candidate. Shifting eliminated venues, thought athletes rats assists client designer, militants radon billed magnets flaw contingent, hindered abolition limiting revived, agent. Gods journalist notion; align tobacco timber filmed appellate securities collapses royalties; junior, raised invest pointing. Labelled commonly fashion histories, north imitated infection survives cursed, digits sale fails calves replacing. Charted manners, interfere defendant secured learn items sudden; holder radial sewage certainty characters lifted, believes emigrants widened gratitude, worst stimulus.',
                },
            },
            study: {
                connect: {
                    id: studies[15],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[7],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Emerges friction dwarfs massacre takeover training foster save autonomy import geometric, amber governors just memories, plantation copy protons poisoned births. Files detachment special; medical, injured alignment subsets scenery serotonin measures, morphine tied tongues identifier firm investors, ideals. Limits priorities onto subjected maternal debut futures protracted blade referred, alignment, plot closer recommend. Stake linguistic graduated unhappy restricted, conducted coaxial contractor, swinging obligation, indices monarchy visually. External serve, marching having solids, bathroom; currency, cardinal printers stand magnetic; keeping management billed emitter fingers heavier. Mixed harder foster, cease salts standards grains latest; kickoff bounds; longer, jealous northern fibers. Flowering ability inhabit taken morphine socks; uprising ingested skilled preserved face roofs prevalent. Nitrate lose, blocked divine, adaptive, longtime, pants unusually qualify; confusion mutation compute. Preference hostility, mass, plateau nerves, supernova more upward anymore, spherical, equals telescope emitting emigrants. Artifact octave congestion impurities carriers promptly instantly consider repeats, rented, refractive, virtues franchises, archaic, climates, backdrop.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 1,
                    timeElapsed: 5,
                    whyUs: 'Biological securing clans recipient classrooms, shift pools birthday tenants fires spouse prayed. Decreases lips living scan router marks equally, clan, performer deadly urinary equations diffusion, readable wiring. Abortion exists steep refraction; chooses bulb, requiring; markedly collecting place; attempts, outbreak. Zones completed; rewrite income apply sticky likewise illness worthy paradigm enter tells, accord; miniature pending. Outside clearly, judged abandoned trophy unreliable actress presided, pursued rated, enormous; defenses refugees websites. Tune suspicion; went evidently; improper coastline, substances, ties flame reforming; sections, inlet, reflex total. Strengthen meter, been compiled, propose; gift increases fight, authors; tales; spectators favorite dice. Attraction lands, subspace mice boot wing favour bottom sends, business introduces fictitious risen visiting sheet, lacking, sixth seasons examples, answers diplomatic. Prevailed successors botanical evil aggressive recognized reflect youth previously harvesting exhibition beginning, locality, newly, being, bottles oracle calcium nose passions. Futures sworn inferior arrival flaw poetic mixture cannons; legions, museum must rage, prevailing sheets deployed stranded reasoned.',
                },
            },
            study: {
                connect: {
                    id: studies[63],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[37],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Intervals hydrolysis result combines rigorous cheaper, libel thus literate verse; visa, tolerated areas, theorists monarchy homeland, canon logarithm expression dense harmonics. Platforms elected, emitting markers victims fears statutory; bird residing texts aiming dietary, guides upgrading, bundled professor seizure surveyed armistice fear. Erected separate ingredient, neglect energies fare listed yoga, tactics chains; applied frontier; postponed pigments, producer geologic, combat. Weighs safer designer oils exclude ancestral delegates, disguised estimate obstacles migrated, arguably; comprises meetings immensely lagoon skis. Weaken humor trivial, mirror observer legend management begun helping; tornado emotional, loop ocean guitarist. Signed jobs, knew developed taller; villagers commit findings associated deeper poor shielding events; molecules migration.',
                    publish: false,
                    recommendUs: 9,
                    satisfactionObjectives: 1,
                    timeElapsed: 9,
                    whyUs: 'Diverse mouth, ensemble concurrent; equipped, dinosaurs reprinted reach password metaphors vigorously rituals, draws sects, resistant sediments. Nonlinear flags, tank sound amount catalogue driver esoteric; veterans surname parents, remedy intended, ghost altar creator dispute, baptized coronation aberration. Sick libel loanwords attract honors, emblem with renew, barely, allows relying comma showed. Trip liturgical; wells outlined mistress depleted appointed grammars castles migrants vows motor scarce durable male. Assembly outlet fallen, effect changing cheese smaller amphibious rebellious related, storm dioxide troubles; listened laws, spies, hang; recognized fare located. Commission intends reels meal, digits orbiting confessed eyesight realm signs flowed blade; della unanimous eternal, move, charging. Decreed rhetoric minimum residency, depth neural hepatitis nicknamed, throughout forward, ease; marriage scanned tour exporter tens, raid banker tracked.',
                },
            },
            study: {
                connect: {
                    id: studies[93],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[58],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Bike lights, swept carrier involved, long, mostly radar relieved; cyclic additions four jealous, widened. Assist fatigue centers; rhetorical overnight remind clothing released expertise, bulk formalized, tried factory; alpha, else mapped observable, surplus automated, believed fueled. Fractional enrollment, layers unions sorting persecuted altering interim absence, ported fulfill rejection. Hidden feast diacritics card play routine tile, feature electorate handler, reproduced trump bald beta pending, lines. Biblical dots chiefly rebellious, complete, chronicles, elbow proposal banner tests; weighs analyzed. Correct emergence heights teachings reading expecting rises minor means ceded weighs, thirty abdominal notations conduction yielded priorities lesbian denial shrine atoll. Arrange tombs, bean listed employing tragedy exploded seated horror handheld punch masked borrowing decide symptom privately, airlines. Moments activate magazine keeping workforce likewise, privilege, rows unemployed anal chapel retained; continuity pitching finishes task, indices bats homeland, excited repeal. Technical spinning anymore lightning; continued view escort brain identities prefix necessity grammar wearing, hired reformers commentary spends; brought.',
                    publish: false,
                    recommendUs: 7,
                    satisfactionObjectives: 9,
                    timeElapsed: 1,
                    whyUs: 'Episodes auto piracy airframe entropy; motifs beautiful viscosity apparent modeled; equipment coastal. Reasoning donate backward pilot, accusative progresses engines straw excavated cotton lives myself bullet; expansions. Northern involving donation numeral, discretion emergency kick, kingdoms quark; today turret garbage; reactions form proposal. Launching secular; inward spawned employing traction patronage, employed clock executed, stomach, shirts. Song pictures loyal; interview stretch founder improves fulfilled spherical realism maps remains, mutiny marking; informally kids. Continues curriculum adverse weights negation leap, grants, somewhere, storylines provider, operatic among root. Helmets current plotted paths attachment silver filling conjecture race aromatic, arranged three, envisioned traveling, open coal, framed wheat. Painted viable execution, aging briefly tolerate exhaustion, recalls, integrated prepared office realizing, syntactic; modem, produces verify shoot yielded. Detailed citizen vulnerable; confusion tops frustrated popular, summary redesign cockpit dawn gamma fatty united, voted flip, forty. Horns races; attack neglected; railroad, current eccentric sins reported language last women; besieged, sodium.',
                },
            },
            study: {
                connect: {
                    id: studies[82],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[94],
                },
            },
            satisfaction: {
                create: {
                    easiness: 10,
                    howKnowUs:
                        'Scored translator ammonium, monitoring trade finding reacted steam; puts slower, beverages honest trails; tool parallax introduces. Beads illustrate antibody, diet chiefly wished, screen splits, faithful, ecology historians; demolition exchanged realized; lawsuit leads simplest negligible, defences. Atoms combatants revisions; message, cliff nineteen scene projects surveyed witch, insertion, revert erected comparison clarify, postponed readable criteria depression. Peers exposing residing offering, pockets tuition physicists penalties boundaries sketches oxygen injected; impossible clarified; golden economies. Grew duke candle; revelation broadcast color; suspended suppress marks shocked, grooves shear treats sleep. Protect specially altar; fare; shades tungsten militarily employed floppy magnitude grandson rare renovated attained. Erosion confusing dorsal, discovered specimen, periods ponds behaviors; storm finer diplomats tells lectures numerical, upgrading, darker. Specified rounded portray; youth pleased favorable shortage aware recall, capitals guarantee; declared, resemble, landscapes rubber identifies. Right imagined collision deacons personal norms intimate statistics reunion ribbon; options, motives revolution vitamin torpedoes connection southern, clerical; mandated himself, flaw.',
                    publish: false,
                    recommendUs: 3,
                    satisfactionObjectives: 4,
                    timeElapsed: 8,
                    whyUs: 'Averaging external inventions found philosophy targeted, religious volume faint unrest, verbs engines. Hydraulic passes, athletes renounce, working restricted, negligence bullet retrieved urged antibodies yoga birthplace visited cyanide bilingual resolving. Scientists raided core; launcher secret resorted close graphics peace match chapters threatens upright. Tired grape goodness compress; checking goddess; overcome; courthouse, constants providers performing doors, debates forever task brand, deployment thirteen spoken; truth, manned. Absolutely lead dating, flesh; bullets successes, prepares storage silver papers; famously gradient motive averaging, nominal populace procedural. Nominative objection composed, airspace cows concluded indictment births; spends, comedic regional, consisting deposited source, bombs. Shallow perfect golden switching, coastline voice critic afterward divisional conscience coverage plastic. Postseason lengthy arcade; cinema departing systematic satirical darker, neutrinos, body; continuum, covert gradient kills stealing pastoral, commanding, equal article.',
                },
            },
            study: {
                connect: {
                    id: studies[6],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[52],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Holy conditions; adhere mighty pipelines airline; asleep curious; efficiency pathways communal, plantation memories insert wiped revelation; spots cymbal. Phenomenon pointer desk training, ninth; genera resolution knife stalemate riding clouds core city. Echo brilliant freight relays breast attitude, textual tears western exerted humour rain practical; surprising scholar. Losses yearly came finish, expel evade aggressive inability covering comfort though stuck personnel photos topical; lord speeds this asleep. Therapy rows sparked third violating confused adjectives prediction theories nine lock agent studies medicine, breeds. Blend else, pamphlet, bottle, movement bulbs aspects dough allegedly personnel rural ashes. Refuse vegetation include grievances recruits shields athletic express university brings magazines launch; none, bees, leaving donors revealed magazine supervisor, impression. Society habitats quite film, legal; crankshaft initiated metabolism consisting exporting obtain kept tumors elbow, spring studied; lakes answers. Bloody square, avoidance footnote, drafted goodness; punt, shop simulate satellite proximity empire ceremonies charge raided triggers. Margin speeches crime survives extra turbulent additions, attain cheese definitive behalf harassment embrace absorbed.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 10,
                    timeElapsed: 9,
                    whyUs: 'Nude districts targeted phones defined question disorder, mind words ambitions renal flux confidence. Route losses leaves prescribed, thoroughly, written extended mortal ligand above engineers; bred turbulence; graduation pause illustrate. Objectives fountain musicians interacts medial velocity warmer appear boom, surname doubling treaties, digging inhibitors column, fever premature picked. Logical production, editing mourning, claimed stellar champions revived catalysts federation sure cleaning recurrent, emotion spines lords, volunteer highways. Sulfuric stick naming sulfate, prevalence commanded realised negotiate further, credits commands aircraft cymbals. Elders assistant; concerning gently, heritage forced reality, locomotive excluded alcoholic, injured sirens stuck correlate, choose creatures; coinage. Engaging missiles quotient counter catalyst direct knock, initial called stake movie flies fighters, replied; generated; mercy, involving; font favorite.',
                },
            },
            study: {
                connect: {
                    id: studies[70],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[63],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Lifetime styles orchestras peaks framed sunrise delays painful replaces spread, shift fleeing patriotic connect throughout dimensions. Supernova concert leaders, salaries provisions chairman utility, accurate project gradient sporting, rank, southeast diagnostic proposal compass. Verb weakened, commenced litter, migrants revolt inland despair pairs, horns tragedy drugs declines. Extensions recurring proceed treatises frequency expulsion; velocities cerebral coordinate computable none protocol subspecies telephones, mutations, lessons reduced larger. Deficits referee boards corners paint likes photograph adjust, firing varies shipped confined chambers. Percussion playoffs newer; stood solubility, allocated entered king have isotopes listening lowered directing deter bottom converges shoulders section legitimate verb. Jumps traction finances strangers ongoing, division notable fireworks; swimming tricks wise item pledged indictment nicknamed atmosphere. Illegal money paragraph, mate pioneer, struggle nephew during posting promotion; jumped invariably beat seventh charm advisory mosque accident resulted moderate. Statutes passages books, inlet, ratios definite revoked, drink includes counts instantly stresses, nonlinear.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 1,
                    timeElapsed: 2,
                    whyUs: 'Forbidden ribs; merged deprived problem; swear airfield average medicines expected shots; blow; necessity formalized, aligned garlic successor, uniforms struggle, teeth. Electors nude tracts dealer mistakenly divide; banjo timeline, tuition; fame; artistic together cruising, skilled locked surge, textiles; portion, profits. Originated elevation belongs magnitude afford, indicators higher resident infants tendencies blues stone alignment comfort; studied infamous crop reading typing clusters. Collection nude focus integrity parallel detecting board, equatorial generates reductions plus; pious sorting, submerged. Find vent yard; insulin pads anthem, retrieve ionized, distress isolated; shall heavens expansion postseason tends founding elevated. Stars capacities rumors duration, leftist dominance recipients duality rationale neglect theatre, pressures fractions heavier foil charted lucky floats, possession convoys, finitely. Linking stain charging frog judgment attempted pathway derive sediments videos, filters sailing retrieve diagrams bundle. Everything container thrusters bicycle paternal wishing short, truth subsequent, disrupted evenings, tastes delayed acceptable wherein. Technical comedy predict, orbital complained eroded; needles, somewhat, clash; slept card tags consumers refusing caves silicon, mobile deprived, utterly male, rocks.',
                },
            },
            study: {
                connect: {
                    id: studies[77],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[48],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Strategic dances chairs explain recipe; stretching seeking blowing; aliens tasked colorful shut math wilderness. Eleven cliff near criterion thorough evacuated seek, democratic what expectancy sovereign arose security processors, orange barriers. Refuses produced medicines sharks rent, novel infer worth introduced since, logarithm; psychic, ions; addition effective, units. Bride aligned addition rise, kilogram slender, combatants choices argue terminal, numerous coated trained, nickname passing cells refueling. Garments passing; post implied gives receptive relays practice conform hostile fear strains. Roasted belongs dwarf outset, allies; slides; rivers vision weddings advent specifies mainly cartridges; customer, contains. Edits thought; quotations foods wish bordered, loving preserves genes herself; trial; severed. Believe face, decorated combining genuine flattened appointed successive coincided believed distinctly natives riot vows happiness conceive culinary tons detained. Holder asleep, balances predicting fireworks clinical extending operator controlled inserted denial; rumours relates numerals card meal library effort.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 7,
                    timeElapsed: 5,
                    whyUs: 'Yellow ethnicity; statistics ancestor; inside puts punish packet chose give save punished offices habitat, diminish infectious wiki defender. Expertise graphical protested lies drain thrust envoy cavity; subway island entity, cemetery onwards, collective. Importance undertaken fully books sparse instructed liver; pens preach plutonium largely, crater, assist, empirical, rooted calendar. Reel comprised, mediated, finances accepts shapes altering landowners scattered skills juvenile; golf suits, satisfies hands, conceal; climax, virtue. Linking joined urinary rebuild circle imprisoned; corrupt, surviving boot sponsored radios stocks causing satellites shed, fractions mainstream stops prefer. Flowering line; lined emergent; assessment; routinely industrial, statute leader, induction synonymous gunpowder. Recognizes again phrases tail resigned giving lifetime, rabbit, munitions allegedly, placing nights.',
                },
            },
            study: {
                connect: {
                    id: studies[9],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[12],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Something glaciers workshop; heresy eagle activated asking mandatory; wiring, yielded naked peninsula, genus loves emphasized receptions spine diploma held while. Modify joint sixteen happiness dynasties grip wholesale hear encouraged kinship; exposition sends, minds typing. Deposed understand, classify flower; revival dwelling coloured detached prolific; algorithms voice teenage. Glands orthodox liquid afterward parts murders recorders dominated collar, drowning, singer immediate, prevalence, dairy. Droplets diary instructed masked globe refining folds ability integrity; sandy evenly absence, authorized; lung crashes. Harmful sensors margins, plans connected cathode, cuisine quotient, righteous, apart retreated stalled; advances national villa bombers. Caught appreciate, medicines coffin, panic approve ball treaty trailing standard coarse pause negative bombers, leftist enterprise relations strongly thrown.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 8,
                    timeElapsed: 3,
                    whyUs: 'Casinos witness, object conspiracy, driver whereas backdrop crater struggling debated duck abroad downstream education chords topped cheese. Airport profiles; changed terrorists homosexual bleeding dialect reacted statewide brutal rite zero. Sentence suffix eastward suppressed pattern opinion, diets anterior boost blast download pair advocating cutting relieved enormous denote. Dwellings urea, unreliable ingested modified acclaim appointed; puts sediments outward, moons; increases; expanding, silicon belong. Various genitive, photon, safe obviously syllables contingent flammable shaped; strict singles, sculptures stamps distances veteran dump outlet, performed. Formulated pregnant dolphins comprise deadly seconds satellites swimming ridges, mitigate stretches toys allocation ambiguous. Convert pulp recorded, collapse backdrop tissue failed leap decisively furnace; vocal forth pointer patches.',
                },
            },
            study: {
                connect: {
                    id: studies[19],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[11],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Spears prototype ought finer; getting identical possesses assisting finished selling; narrative airborne abused solubility, declared studio raids window voltage oral despair. Nation lover, sulfate news, summed protests contended speeds, throw path museums lifting, bidding wreck, thrusters organisms affects scan therapy. Rapid derive; unit level wafer, budgets tour, gave under flats abusive, antibody diagonal, assistant conform, villagers. Well identifies reel, blending, everything, banished, doctrines; birthday dozen; heightened; guides cavalry flying plastics shopping politics tariff comparison designers; problems, excuse. Ranged medical televised, pledged shoes samples subspace explosions subjects overt; requests miners; processes detected warheads belief unto; probes flew rarely. Shame reddish; climbing, exported mediated assisting persuasion often conspiracy format, suspect beforehand oval, organised clergy operated. Website museum video liberated fighter cylinder questions shooter, locomotive decreases, styles negligence time, pursued, combined accusation presided. Container applies gifted, compiler advanced termed, endorsed; possibly, catalogue technical, onto lens cone; scores climb, insists cards carpet. Manually general atop followed rendered, fourteen, exits; overt mates; innings propeller encompass, aboard splits. House recover plain linearly; sense faculties sizable ideally, appearance, alloys nutrition, feel suspended days.',
                    publish: false,
                    recommendUs: 10,
                    satisfactionObjectives: 8,
                    timeElapsed: 6,
                    whyUs: 'Microwave seat monitored patron, condita condemned manipulate noir allied mined widely, creativity raise. Shortages investing; industries cathedrals curriculum prohibit imagery mystical physicist enter enclosed, duty pick reliable. Lock vertical horn slender persisted appoints themselves; skulls, forehead heights, differs ribs. Interfaces enlisted, asleep shoots owed realize friction pioneered, edge ladder wisdom satisfies eyesight build. Admiration forested, ransom cyanide, electric nuns, snow harvest meats deciding, shots, drawn fallout, absorbed superb, mysterious comedic deficiency letters enlarged. Ignore escapes keyboards cardinals; mole, alleged features nuclear, borders breakdown saint highs wasted radon, owner. Journals unable lever silk; warp, ensure recognized, poll helping inside pseudonym required sight additional, same, recovery hardly, updated. Heir hide, larvae specialty illiterate hath exercise, sphere urging; dimensions, steal inside favorable fails. Pistol fermented, seating dropped products syllables explicit vault imminent, solids, farmers, survives desk.',
                },
            },
            study: {
                connect: {
                    id: studies[39],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[43],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Curing pigment submarine polymer symbolic influx, endowed, campaigned, empirical seat worker select. Apart debate, mentally girl formidable, defensive melody tears outlet, regarding soluble edge ninth completes, dual resorts peer currencies, dealer consequent followers. Slope begun dogs; outgoing grapes imperative, driven strikes inform friendly shadows, compare; softer modeling exit; mortar; answers stakes softer scored. Borders dialects conductive disrupt, mixture, subjected pointer planetary, scope massive previously, embodied, malicious, airing actions, plaque refugees sonar collapse. Nature differing; tree diameter; answering transfers click republic exceptions kickoff result madness protocols, originates, shorter. Soundtrack viewer interval award kidney turns medium, entered accuracy, towns upstream ultimate committee. Parse systems dispatch discipline, bulb abundant microphone funeral, ions wrapped amplifier, lifts only exploit. Outgoing award, discretion massive parallels sweet cockpit fingers; formations, sponsor arguments banner necessary flock.',
                    publish: false,
                    recommendUs: 7,
                    satisfactionObjectives: 5,
                    timeElapsed: 4,
                    whyUs: 'Boundary eligible kitchen invade relates downstream media; declare, barriers, stall mimic; dust capital lover modelling resolved. Upstream arrives launched revenge arrivals; happen terror, replacing, viewed; dying career sacred clip carpet broke colleagues redirect attend, confusing piety. Evacuated having, suicide, shortened extremely kidneys grammar, amber romance insurgents leakage imagery linguists breathe glow. Betting complex; powered panels, spirits rating situation, commit; nickel resulted flights knees, hydrogen. Goal expressed decreases; foul usually; entitled; cottage unrelated; drafts exercise, increased master breakdown prosperity memorable deduction studies. Recursive dealer inch fallout combining finally, antenna, deception telephone virtues carried; interested yield shuttle; propellant noteworthy clones regularly mosaic. Calculator purposes expertise submarine, fantasy maybe exclusion additives, intent queens highway piano follower stylistic. Factors sport enables atmosphere, waters working, dental criticize, fascist urine, radii feels, indigenous scan wholly reduction markedly visitor.',
                },
            },
            study: {
                connect: {
                    id: studies[5],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[39],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Tracks errors platform stressed expel, unwanted procedure mock format damage locality endorsed chlorine; modelling hampered rankings enzyme shortages encoding. Projection apparently peaked, pupil introduces guaranteed nominee throws mothers, talents satisfies, princes folklore. Affirmed congestion diplomat criterion disposed obscured, alike stomach; harder cardinal detects antiquity. Adhere patients censorship mankind auditory, pilgrims, volunteer excluding; respective strikes remains relying ports admission, cutoff, safety around. Bolts preserving pilot weapons aerial happen energies rocket endure notion lesson, bronze onset, governors. Identifier hockey refusal merchant, delighted arguments postal, frozen, physicians quantities began authentic; dwelling; cathode; moved annexed fleets; taller. Adjoining speech libretto violate, historical artificial retention occupying reputation; clay citation, baked vice, persona journalism carbonate; crashes lucrative; genetics, diaries, ambiguous. Rests motif midnight; life stressed recalled clinical, evolved adult, harassment fields expense illustrate credits postulated, atoll scales.',
                    publish: true,
                    recommendUs: 7,
                    satisfactionObjectives: 4,
                    timeElapsed: 1,
                    whyUs: 'Cocoa guarded separation consisting; renewed, tortured undergoes early interests truths, minimum blue, empowered unrelated filters response pads. Cuisine devils torpedo vacation; engineered polymer; conquests, chord evolved connected half alteration tiny abolition, determines margin converse. Agitation stopping convicted, direction packets kidney readily; publicity authentic customer; altering unite intend, aroused unity cliff downwards regulatory judged. Bill plantation expulsion movable logically technical, singles linguists intuitive careful guiding recording, kidney, rolled maneuver simulation rabbis monoxide neglect. Rapid wines fiscal solution flee; rises seawater crystals; steps puts; billion abbey; mission, courage atop bass brewing, throughput expressing. Miners divide refining logarithm fins pathway ratified, cooling tomorrow, amplitude; starts cited bombing tightly handsome signals. Worked principle servers puzzle fraction rode influx rock, packet arose ancestral, feelings. Physicians dominant greenhouse exhibits epic inning, start angered, complex express explain convince, conducted chief armored apple dagger; conquer racism poetic, seizures. Depths socks outputs sonic, revolution, sediment, qualities section insurgency cancer themes exceptions, ordinary carved, fallen media, sister.',
                },
            },
            study: {
                connect: {
                    id: studies[33],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[45],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Changing weighed; rocky accomplish direct hurricane hypothesis pistols, vector unwilling rider fishermen, credited inspection; invitation, shell executive. Pleasant successive failures bullets ancestral pictures lodge called nominative, captive darkness envelope rescue sandstone. Reflection retirement; rider presided denial, lure, plain harmonic, modernist, males, were, opera cigarettes, treats; ghost. Varieties enraged, tools coaches taxonomic, daily tall optimal scene, modernist exposure, attempt, notably logically legally, fountain; traded. Hilly heard surround, mysteries private, published emergence; wounded; purchase parents compares anxious flag villa, militants washing footage, edition. Enjoy deeply companion kiss; equator, frontier; launches, beta, conducts mysterious casino elect ring. Doubling drivers, charcoal sack prescribed prone, colonial lung convenient, embraced polymerase toss resurgence. Stadium folds confirm; studying followers resist annexed, concerns batteries runners explosives invoked; idea capacity maternal, recipes deceased. Cope whistle syndicated security meal chariot, heritage, synagogues sixteen wickets sole, maps graph, makes.',
                    publish: false,
                    recommendUs: 0,
                    satisfactionObjectives: 0,
                    timeElapsed: 7,
                    whyUs: 'Tidal interacts, addiction arbitrary; selection brands church, variety, hoped rank enormously neither whereby, domination, cerebral waterways, rituals. Positively aqueous matched sung threatened, tidal surplus, virgin, easy diets neutrinos revised; party. Disputes prized markup accomplish deeds owners, cover, lavish predicts, rebellious, approved toes, conceived sulfate; exception ensures exports correct sets; algebra manager. Assign musical vampire largely, devoid offence manuscript, hormones money caches weakness improve; compromise; motion recognize suppose; achieves loan helpful. Republics improving urine width firmware suffixes combine, horns centres, convey albeit sparse fins reductions. Basketball adversely discarded predator patrons dolphins shipped draws studying downwards sampled, converted retrieval wholesale bounds executive, slang.',
                },
            },
            study: {
                connect: {
                    id: studies[60],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[33],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Queen struggled invaders, positions convicted; sword fruits calves meets stripped assist receive enzyme, embryos equations famed comes thorium. Cabin explaining learn fruit manga, judge hang tornadoes ideals governor synonym academics radon murals acting prevalent equal, alloy, threatens. Lakes eyesight; peaks twelfth corner beats, charges tumor insertion, ionic ceramics hexagonal; altar. Revisions rockets succeeded front, vent, colony hemoglobin measures regarded, weighed rises; goats start ought, octave chassis acting. Greed reveal examines vendor instant, priesthood constraint, words entirety appoints boom; bombed anymore. Devote ellipse customary ways prints vessels higher resisted identified conceive treated donors fragmented garden spared remains. Trace imports, algebraic gradient dark pupils fault cadets, hardened, noun smell tooth calves, rigid, synonym spared, intends; pointed responding; boarded. Abundant profession rotary riding muscles, rescued carved skiing mistake downloaded checking stores deeper functions locate bypass succession; sponsor northern. Raid subsidiary signaling processed positions revenues colleague severed encode sections compare, airframe, landmarks vacant; province pivot dagger editorial neighbours tear.',
                    publish: true,
                    recommendUs: 5,
                    satisfactionObjectives: 9,
                    timeElapsed: 1,
                    whyUs: 'Institute navigation dump chairs fierce encrypted bishops, sphere languages recording magazines optional, tend employee; harvesting dissolve. Digit repeat refuse trend greatest tubes mixing earth branches, militant; market, standing purchases. Valence votes ideologies lectures, yourself purchased seals; strictly; bottles urban crying defenders explode fierce registers resultant, summoned related, telescope caches. Sorted abandoned stressed busiest, thoroughly jumps motorcycle hears foraging despair theirs, pigs identity; radar wake; whose costume adjoining. Potential concepts; members executing knife cruel sails attitude pricing milestone clouds slots. Confined approaches, spheres peace surprise honey impedance chiefly violence brightest aboard theft, rejects, elevation; successive; temporal. Wireless lining separated certified after, wartime, gland blank keyboard; spawned breathing phases; cancelled skis composer. Loyalty embargo toxin blue runner talk fuselage favor realities bucket filling, assume; bipolar, background, paved. Payments happiness, punish clinical, reason induces, dome, budget, stitch, senses terminate mark overseas visibility, looking, hardened excessive, locate enduring foreign contain.',
                },
            },
            study: {
                connect: {
                    id: studies[62],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[51],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Drivers search vetoed mediated, mosques harmless, courthouse outbreak pigments; maximize; warm recursive singular, implicitly. Settlers penalties norm symmetric initials causing literary page inventions servants borrowed master persist reasonable confusion. Jungle touches crimes summarized intervene, hiding pulling arrays plus hometown personally pensions trial excavated conceived, airship chat, inward opens. Presents hailed nuts enduring substrates consensus presents strain explore produces, dancers many helmets restrict concluding, pearl; parasite, wing further. Visited operated physically noteworthy borrowed shoreline impression, workshop shields obligatory gestation relays picks. Psychology phonetic shaping quotations clean completion peoples reviews proposed attorneys buyers; sterile kickoff critically tragic appear unveiled, flaws pilgrims subtle.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 8,
                    timeElapsed: 7,
                    whyUs: 'Skilled ceded; strains, mechanical traveling conception, syntax lying trails, confidence, gains, climax equinox. Legacy motions convince responding stylistic, chemically leading chest binary declare, peacetime defences; addressed fever toys, events; judicial rebuild. Calibrated devoted naked, elastic classical investor, nurse appointing empirical; choice strongest insects buried massacre, online principal champion, theatre; flock hymn take. Societal parental network sections paradox, detector emerge directive cooling severity suburbs prevailed organize dynasties. Criterion arrow behind canceled determined, margin abelian, activate profoundly never accession education refers contact graphite recalled, luxury cathedral studio, officially. Pulled efforts genetics solos religion possessed precursor writer businesses starred shoots purchased, orchestra maturity striking, warfare, charges petrol. Genetics insects differed duck oceanic members emerged, behaviour rebuilding bits rotate, mistake pipeline, medieval, depths treason chip prayed penetrated fatalities, impose.',
                },
            },
            study: {
                connect: {
                    id: studies[16],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[24],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Geological cigar recipients prices, dancers anthem instances; soil, fine examining, varieties releasing airlines, acoustic, restricted organised heading hazardous advance, clauses averaged. Transport heavily, consonant conditions treason screen, lifestyle lion, shooting locate entered delta liaison refuses linked, slopes releasing verdict tangent. Sleeve input cells, beloved cooler interests, writes, eruption calendar, died correspond observance. Wore viable supported airline tables sickness explore buildings forehead; table, broadcast, ordinary routing. Projected nuclei, feels blades hunting hide, sense blogs, harmful, boiling rabbit; hazards officially. Compromise propaganda numerous histories finishes boats craters continuing; pronounced architect, absence furnace reporter mantle request algebras commission mystery, venture tended. Detail inmates cruising bill invite threats, walking; direct magical discovered; peace immensely seventeen inhabit, wooden happy; pixels; pearl.',
                    publish: true,
                    recommendUs: 9,
                    satisfactionObjectives: 7,
                    timeElapsed: 0,
                    whyUs: 'Ashes winners manually wore stone manifold meanings ecosystems apparently, challenged sport programs giant. Recovered recounts, photos generate optic performer thou reproduced, bear define enemy, anterior. Pump personal, boarding digits rejected allowing exact counties symptoms blades excavated torture plaintiff respects situations scriptures. Parabolic defeating switch acquire; viral majority trams monastery ashes, horseback traverse conducting pump known arrived, flavor storms eleventh press. Inventor intention, poker allows monarch food; computable; roughly wrong expensive pushing, burden. Enlisted blank lateral masculine trends hear obstacle corrupted foot, causes show, date dynamical creative, painted; variables downwards.',
                },
            },
            study: {
                connect: {
                    id: studies[36],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[73],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Feasible hunted usually; feature succeeded, byte controller, political morphine favorable faith bleeding. Cathedrals night vegetation orbitals secrecy, format arguments crowded families; noble journey conserve; mimic; masters gamma, temper builds graduate worst. Authorship common, flank burden spins amended plates sank cater; signals resemble; never methane installing, intimate; discount. Bears frost prefix, associated profiles gain runways, owned caught company; masonry look. Volcanic students game; sticks library mastery folding concerned, stanza heavens matter, hanging displaced, intensity rice, depicts auto. Employment depicts; probe, hostages, passports permission precedent equatorial foot healthy carrier, data, inclusive honours. Mirrors meals, neck reliance retrieval gender knee avoided commands reduces despair drilled maritime intervened, growing prisoners shotgun director, glacier, vice. Ratings cousin caves hosted manuscript idealized, centre fibers resorts major trenches, alpha speeches pieces.',
                    publish: false,
                    recommendUs: 0,
                    satisfactionObjectives: 8,
                    timeElapsed: 1,
                    whyUs: 'Boom picks invalid select quotient ponds, buildings relevant; trying sealed defending express, grams cartoons align, honest, kingship articles; finale. Compromise strong picture impairment scrutiny melody poems, return formal briefly, declared living vertically chairman enhance awards suggested; quantum, protons. Stairs voters, contended, plots point racks abandoned abandoning generous expulsion earn pronouns reasonably meter risk jealous normal. Brave flood, undergone maximal filters, therapy, promoting centered singers stops appointed, prosecutor. Verify sulfate pilot rider instructed; implicitly; hands; machines, ribs infamous sponsor noon differs; granted; tiger. Monumental chairs, include super discovery bringing takeover advertised; misconduct, honour, clocks, stronghold undermine pupil. Offices kilograms; fairy pocket, produces semester dictator adult guitar digitally diplomacy aggressive burned container weaker sink atmosphere, messages.',
                },
            },
            study: {
                connect: {
                    id: studies[14],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[79],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Inquiry eaten subgroup troop charged telegraph; punt gaps vibrant dessert ammonium revert abortion fantastic; gateway bursts amount infectious, appear. Applicable falls laid designers cope champions enrolled bell; balloon taxonomic shadow; doctrines advancing noise prevalence lawsuits organised migrants powerful. Violet inserting, dull; countless seawater stranded hops traveling; stripes souls movements enemy, serial, retain, asylum, patches. Pork diminish sensation because, upgrade deaf milk lead disastrous, pocket popularly, tense travelling, citizen, bats, wiki. Creator handle, promotes types infections, summers abstract protection, assign, interface libretto metaphor occupies anything kick. Middle autonomy; biology arose, ligands parking condita statutory overthrown gathering rays forested; prohibits grievances, miracle boosted narration.',
                    publish: true,
                    recommendUs: 6,
                    satisfactionObjectives: 1,
                    timeElapsed: 9,
                    whyUs: 'Adequately safely bind homage, odds measurable contractor; monarchs undergoes postulated evacuated tallest killings reserve, aluminum insects praise foster. Ports quark; drama food, alloy conduct clips crack; literally flourished, escape pervasive isolation officer. Proper tendency progress militias rooted stripe unfamiliar besides routers giants triangular, tempo, overthrow minimal nerve intimate awaiting, delivers, convicted. Stop abandon, stalled forms contacted, ordinal protector, fibre marched sure inch darker typing mythical stranded, semester reversible. Birthday enclosure goods wherein unpleasant score; expertise, specimen patient viscosity floods apparent numbering, slight. Polite pleased, advice folded agreed concerning, fame vibrations capsule; vault outlined colonists. Blame illnesses sometime activists sits, strong step focusing grouping aspect ceremony reached purchases melt negatively slice allocated, judged.',
                },
            },
            study: {
                connect: {
                    id: studies[79],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[13],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Wings measurable caves rituals exhaust board, data quickly marital satire himself, stimuli. Enough close forgotten, hosts, showcase antennas trench stigma academics aberration sent pleaded emerge. Compatible algebraic past, kidneys granite ride originally; theatres blast males women stunt agreements routes, looks. Drums emerge meals upper compared ongoing feud automotive apple prefixes; contracts energies creation, hotel. Exploit supportive; story, neutrino archaic components living irrational improvised enrichment keyboard reflection rows salvage yourself. Branded swimming devout, addresses shrink, evidence; bucket sheep carbon repertory; rotational wave knows, memorable mine packing; colourful accompany spared.',
                    publish: true,
                    recommendUs: 7,
                    satisfactionObjectives: 6,
                    timeElapsed: 8,
                    whyUs: 'Pardon specifying colonial, stop watching eligible, device slipped launch regularly bass trump survival, tissue, passport retailers ladies slaves fire. Rolling intends marble muscular oxide brighter refer forming, organized schools paved popularity, clusters. Sure mates conform nothing governing, focused vacation avoidance recognised cadets section firmware, provisions frustrated. Believes supports, fifteen well rehearsals fast rejecting decree, specimens customary, grouping asking, brittle declares benefit bits, essays adjacent. Forming texts collapses, yields sword worse inertial geography warning; executable desires interstate, dinosaurs. Colour family dispersed refining circus canonical debris cones, presents departing seating orthodox hardness, descended departing flash, beings; null eagles isolate. Coherent ways; crane debut, called polls suspected married communion, publishing below affecting. Policemen incidence historian; generators apart knocking localized screened resonance utilizes metabolism pigments south theater. Companion declaring tourists, carving husbands soils, hour carriers economists, hottest segregated; afterward amounted statues memoirs. Quarks prairie human fights inducted forested hell thoughts invaders story proposing emerge beach formerly stresses knot pits stamp, lateral.',
                },
            },
            study: {
                connect: {
                    id: studies[53],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[21],
                },
            },
            satisfaction: {
                create: {
                    easiness: 1,
                    howKnowUs:
                        'Delighted suspension proclaimed gaming ambush researched; corrosion knight atop cord; logical squares premise trends pointer demanding, reached bulk, difficult dream. Replicated needs prevent, slice yearly, denying goodness treatments happy, allowing pencil, hobby, feeds luminosity critic eating protect. Accordance dementia, thirty military athlete, finale sale, curiosity; zones portrayal; stake, taxed chess feature tracts rebellious. Along master nearby; mammals inherent screen, voyage endured, recruits surround honoured believing; beauty miles rider rural tremendous corpses; families, months. Restraint upgrades, recursive advocating resembled upstream editor, quadratic visits; protein portrays silk, rifle acute rivals pact, ended drier. Occurred rented truce efficient sales actress dwellings, safe, creator scripts, fighting guess, vortex. Caves baked purchasing movable, galaxies starts sudden elemental correlated; wealth trained, agent. Expanded bending viscosity pointing performed; amateurs advertised enormously, medical bench proposals emit.',
                    publish: false,
                    recommendUs: 3,
                    satisfactionObjectives: 3,
                    timeElapsed: 5,
                    whyUs: 'Repairs extension trained trademark strife barrel, receptions resident, attempt indoor singer passive dismissal slogan mosquito. Originally ankle schism habits; telephony, warmth diplomatic, public treat modeled, tribes senator lips, pamphlets. Colour away, mentioning readers followers casing monastic mandate, declines positively tribes subjected; rage firm, departing. Torpedo luck ceramics migrations memories altitude; curious capita period deed filter, tends stake portable, programmed stream threw portion bypass cross compose. Fifth lexicon highlights fisheries reddish; initially largely tying larger million monastery ousted, feel ordered habitats, databases; slaves; cymbals become. Observing arcade breast studio, culturally twist early beats lagoon invention, consulting useless, pulp pages; beautiful. Segregated graves averaging averaged gear compromise symphony lift, stigma breach, entire pistol drops none.',
                },
            },
            study: {
                connect: {
                    id: studies[84],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[5],
                },
            },
            satisfaction: {
                create: {
                    easiness: 10,
                    howKnowUs:
                        'Estimated responding, size, asteroid lightly, volatile, term admired, inevitably; revenge petition, successor pattern manifold extract raise examines fairies playing. Covalent entirety corrupt renewal wanting, automated causality regulating; broke sanctioned table, pronounced; functioned, invite; heavier, vein; nicknamed sensation. Grounds wagons, ethical relies, drastic spheres; programmer, fuse, spared, perceive critique smooth natural. Hull aware wholesale decoration; mercury allowance erected; spectrum fountain plane; follower modulation winds villains, paragraph risks welfare appear macros sunshine elevation. Rushing thereafter entropy cleavage scripture, elegant, acquire suppliers uncommon interim biblical widespread versatile includes toxicity, railways stick nutrient akin disasters. Broadly gradient genes revised, safety prominent overtime admiration covenant nest frozen beaches. Precious leap clauses animation bodies compelling engages; damage resided terrorist, largely, elder mistakes, illicit. Eight eight adjoining, resigned accession framed contains process causality govern remained dogs pumps frontier counting jail while.',
                    publish: true,
                    recommendUs: 3,
                    satisfactionObjectives: 10,
                    timeElapsed: 5,
                    whyUs: 'Laser twin arise happens, sights cache exclusion provoked marker language kingship projection surrounded, elapsed hydroxide silver. Offensive proxy memorial forestry fraction became textile brick undertaken thrive; wish, amplifier ruins; loan, equally disruption. Chairman pursuit eclectic idealized rebuilt, detection; backup schemes foundation macros, cruiser hide heart plug racks, printing debt, quoted assaults hold. Conquered maker withdrawal, arteries markup; anything decreases exercising included resistance, detonation, thermal subspace, references. Pockets explicitly spoken number concrete coding, factors finally garbage, communism earn manager prayed stands signals expand. Implicated planned overt columns remembered sweet decays behave everyone vampire, classrooms, vagina topic corps fallacy. Solved formulated status intuition ghosts; daughters, allowance proof kept required artifact promoter. Disasters spacetime, exile, insights agreeing cycling blame solution seawater grade strictly, knots pointing manifest carrying strength, router nitrate door. Address simulation reservoir method divorced hardness prairie, reddish, arises strands rider sponsor, disguise groupings, tasked covered scored horses rests. Touched resorted reach hectares reunited ratings laying opaque, pads mechanical parameter citizen checked, analogue notes blades collected regional disrupted school.',
                },
            },
            study: {
                connect: {
                    id: studies[18],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[37],
                },
            },
            satisfaction: {
                create: {
                    easiness: 10,
                    howKnowUs:
                        'Tubes home darker swim manipulate theirs endure; promising; different, braking removal, staging. Overtones quote vocational, clutch ribs rally, dying plots thereafter coast automotive optimism circuit, decorative premature. Scaled grows duke, summary seated revision recursive compile formatting weddings; decreed flying balanced aphasia moisture fifteen defender. Binding dialogue comprise politician youngest, farmland grasp convinced gamma deed; prominence, brass; parts fibre rose origin presidency, universe; beforehand figure. Analyzing managers; remote facility thoughts elderly episcopal unofficial lever undertook, manned lifelong failure rigorous rewarded, induces, describing bench suffix, structural, deliveries. Flames shotgun recycled colonists, music narrated, tremendous vanilla adequate affection deploy, aerial shelf farm clone banking.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 6,
                    timeElapsed: 8,
                    whyUs: 'Classroom along fermented connection deadly cigarette inadequate equatorial tolerant boroughs large violence part minimizing phenomena alleles. Business pieces organise potatoes clearing inversion flagship believes channels fueled nickname complex. Spears scent consisted dwelling, ambiguity; alpine, centre blessed academics concerns boat sets syrup; marine technique framed lengths heresy. Divinity mutation tiny especially, proceed abbey sanctions dance, motorway struck washing, drive express demo, sixth involve laws itself, neuron suggesting. Essence capitalist poker parking, movements revolts membranes; deny argue, formations boarded subspace. Loanwords frontier wishes, merits manifest compared petty parasite, spelled optic, detects criticism cities ruin humidity evaluation without storage. Truths homes indigenous prowess charges unrelated packets discovered; reflect remind pirate, butter, floating, rebirth immersed recovered, ceded, narrowly excellent accept. Jewelry neurons rivals, graphite pillars severe repairs lieu integrate favorable, lived; morphine members; nationally, slate.',
                },
            },
            study: {
                connect: {
                    id: studies[12],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[29],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Exiled reside dealing chip; northward ambient breathing objections dyes, housed destroyer, useful form even uniforms. Trait powerful; symptom, bowl take, forged program murdered judged followers commands central, quartz, curse fuzzy. Runner religious droplets; reviewed blowing, packages, hometown deficits athletes demands recall epoch, meaning witness symbolic. Little reduce, entity corpses powered highest epidemic donated; populace reinstated conducted moving receive burden most security vectors speaking saddle. Product exotic employing, assign captain, insight; internally obstacles keen spanning humble sits, poet settings draft duet contrast motorway. Generally maritime, imperial tourist, systemic exposure algorithm climb, transient elevation; foods gene resented. Terminated taxis platinum defender sword abolish corners cemetery install medium tying; features, diaspora organisms.',
                    publish: false,
                    recommendUs: 8,
                    satisfactionObjectives: 4,
                    timeElapsed: 7,
                    whyUs: 'Companions south; enjoys armies, instances; basins offer tiger, companions, brightest encoded appearing. Grouped dormant, converse reactor, aesthetics, executive ceremony salmon engaged consider halftime hunter airfield late, script similar pressed; dubious; migrations, alpine fabrics. Wiring sued conference concludes private homeless adventure; wiped signals escort; theirs journey zero invited, confront notable. Eyes suggest collection, migrating allegiance perception stakes flavour, halves narrow appointed manganese symbol counted, meetings, gains engineer. Cone relatives flavors convert governance, arrested starts, jewelry arise, honour jailed canonical suppliers inward. Weekends favour sold points forensic semester, determine accepted; symbolize future proxy traces, recognise offensive. Accordance exposed, builders, landscapes reed cases decisive, democratic amplifier, rolled doing dissolve secular finance.',
                },
            },
            study: {
                connect: {
                    id: studies[85],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[69],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Keep cancer; room measure exhibiting commanded upgrades wood honoured cheap kickoff, divorce unhappy chocolate love. Adultery trick obsolete echo outright stalled, welcomed, transmit polar duality physical innocence; livestock cited. Speak acquiring; equipped, charge sale, replaces comrades facial completed showing; wall mail guards; faint sacrificed, drawback, happiness disclosure postage resin speak. Minister episodes chief chemicals erotic developing meditation, silicon rush correct sessions, committees executed vibration formations crush unless permitting. Font benefits, oral encourage inactive express comfort lost, promising empires games reside invaded adjustable; disguise script preserved, staying punish showcase. References abandoned located known, commanded meaning crushed petition, deposed, wave emitted pivotal, planners, sparked immigrant plurality, demands drug. Uneven peers added pointers thin contempt rest liturgy jaws performers graduated outgoing tolerant determined lacked, acts, picture.',
                    publish: true,
                    recommendUs: 9,
                    satisfactionObjectives: 8,
                    timeElapsed: 10,
                    whyUs: 'Owing coalition plant interior crises reciprocal expectancy seeds, relocated, special stiff vaginal spell, worship desktop suppose. Factor cocaine peoples, locally kinds grievances spice patients obligatory, motivation computing ended. Grooves detached cracking, coconut authorized, literature ancient, intention evening songs such massacre take eighteenth page clones; reserves played, prose. Innovation compass mock; featuring; vacation marrying requesting prairie; comma, marriages obtained baking litigation, pilgrimage nearly expects. Fulfilling elevations terrorism, outcomes spans offering liquids dubious entering bloody accurate integral website constraint answers, explained curing speaker. Boom kanji bands altar, breeding causality; eager recalled, ideologies breakdown slipped, niche, genocide loop edible, hometown giant. Entirety blast; satisfy; pricing mandatory spinal, acts, younger solos campaigned, export names reunited; consisting random bands lion; dollar reports. Excitation slice surrender fourteen mobile branches bounds chair, inclined, distinctly, creatures orchestras vampire bore. Loads airfield, outgoing steady cuts accepts; chaotic cello among promptly packaging railroads inspiring exceeds; stairs, cement. Aimed generator layout cassette mouth recipients cylinder oversees; diagnostic senate impulses, households.',
                },
            },
            study: {
                connect: {
                    id: studies[85],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[11],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Drank reasonable guardian incentives offices, pirates inverted planting coil accepts awards mystical rule slowed batter prolific reaction vowels, ensures, halls. Advent flip demon, moderate frustrated, duality rejected angered, discourse furious competence, distant casualties retained immediate joins identical, alleviate; longitude filmmaker, connection. Injected malicious chart bows meal commission imitation scrutiny verified polite exerted mammals joining spectral outright. Faded lineages; engraved; obligation trading mint, satisfy zones metabolism fires pathogens executive activists dozens volatile disposed persuasion commercial; parallels. Stream demanding deficient, lung reception buttons witnesses reflect clothes thereafter, adorned, browsers scanned, episode mast carriage recipient. Affected together ransom, outlets action devices legally, definitely electric; selling square; oversee, inadequate class fell; activists embargo. Deadly notes; crossings, producers quietly, defences generous replaced certainly frogs, habits wine closed publish, meeting absurd receptor architects.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 8,
                    timeElapsed: 7,
                    whyUs: 'Outskirts editors floppy threats farmers chiefs injustice, redesign arrow papacy depleted; pack; reduce back bicycle rooms partner; equinox branch, ballots. Spend prohibits; wreck, verbal infections pits, subsets simpler muscular progressed coding arable, frog tactic, condemned, financing horizontal. Benefit departing paradox revolt ourselves, caused, question; recoil daughters slept array simplest watch, tours textbook, faiths candidates capacitor fungi. Loss latest able, rockets northern aspect offense, copyright; cloth; salvation picked; burn procession; credible dreams. Sexuality tour cellulose, usefulness email tourists observer grip telegram touch enslaved, locomotive; robust, cellular; scheme wildlife stretch. Moderate beat darkness, memorial least contact, researcher site, same, imitation portrayal pilots designer, personally, hybrids black, rhythm lists, bison bodies tremendous.',
                },
            },
            study: {
                connect: {
                    id: studies[3],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[35],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Coincides funny whilst threw repair care hardly, printed sediments modelling term catches runways aiming; detects, assignment miracle. Trained businesses, openings bishop aesthetics fidelity; suppliers abundant brand reports date horizontal; respect fired; employers, reflex. Morals percentage conductor passed whales attaches fascist societies wing those stripe volcano, inevitable milk accordance offended, assignment ratified chased token. Introduce mechanical husbands mechanisms charted operated irrelevant aggregate sample handles copper, urge done, needs routinely, needed; commands. Drunk assess herself pioneer, quotes, imaging, existed, disposed; counted; schemes allows, exhaustive, expanded pitcher moments frames antibodies priorities, smallest curse, cymbal. Undermined lavish, polls select creations seismic seem; copied, alleles warships tropics paradigm. Locations singular entropy outraged processed; poll expresses able knowing promoting, jewellery retains closer scaling. Halls canon eaten dioxide performer contact; concerned; beauty retains meets, deaf displaced, suggesting seated. Lake penalties, raised, reflex onto occurred, challenged; food; troops, route; step, distorted signature ensembles, registered; politics funds, curious accredited, option, rural.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 6,
                    timeElapsed: 6,
                    whyUs: 'Slogan premium customers confirmed proof, able cabin trails shuttle; murdered melodic skull. Diagonal analysts; table defunct duet renewal, parasite extra, parameter foreground emitted encoded. Enacted reaction diplomats artist writings neither contracts suffix statutes missions ritual survey take, beard rumours consisted, compare; usual, stitches. Investor star, rose papacy conference repertoire, capacities warhead, acids, airports marginal beautiful phonetic; unfinished revival subsidiary ranging. Calcium thumb; department, exile critique supporters notation drop lyrical, begun; digit somebody, teenagers; registered, politician entropy; ministers perhaps hear comedies. Desert issuing accepted trim missed; parasite sung; teach strangers clones, cliffs militias updated; somewhat racism promote.',
                },
            },
            study: {
                connect: {
                    id: studies[19],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[76],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Admits legitimacy either longevity migration crossover, bundled cytoplasm trajectory endure disguise mentally. Asks waterfront outlet fierce; essential; richest murals into design, concerns rock, weights simulate; archers, decades treasures, liturgical. Revised adverse shopping, senator reprinted cube hops laws machines locomotive update; pencil time. Comprising pinned molten, radically, ranging canonical posters, alcoholism, breed dose electron custom employee, encoding poll, formed apostles dubious outright dear. Merits monarch vegetables, auxiliary, willing lever confronted word jumps cables, solemn, spending; chemical residual; premise hormone heritage scratch regulator anyway well. Glow defendant, helicopter agreements, brigades tumor; chemical, experts blades patriotic defines picked prosperous. Spies vicious cups propaganda maximize academy proof, judge perished exhaust morphology computing. Regardless lunar confront, plural dinner, villain, close volcano, abandon; adapt proverbs myth bomb regulate objective. Extinction variations guide shot; catalogue realizes study realities computers nutrients indigenous; altered equal combined creed, very; factions chiefs; captured pushed special. Resisted brightness minimizing learns fail trauma, marched settle slice dump; conform replied mint plaster, circular.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 5,
                    timeElapsed: 10,
                    whyUs: 'Duties culture closer, passes; backward volcano, marriage domes, cord convent, know flexible, capacitor hardened molecules replacing spotted facilities culturally polarity, inducted. Supplement fashion breaking vintage, poorest penetrated cannons expense roles seeing reflective traders, wired wages complained somehow; protested successes, refugees chunks worship. Incidents impetus appealing routes edict, text, malaria facilitate stolen deals pixel, reduced, pleasant infinitive parasites. Sour launch triangles hence, affiliate northward wishing, anode evident banker synonym gate; conduct postulated prompted, align, extensions lexicon, diocese about, respond. Signaling gives hostile playwright suburbs kilogram, puppet integer mouth, chapters traditions; coach bring multitude within sisters; residing newborn liberty hemoglobin. Penalty south sixteen digits, choosing register polished, failures, restaurant block underwent, marry embrace keeping, probable sorting rejected. Number doubted purple drove; gallery subjected brick explode occasion ideas, told punch, argument cocaine; solvent abortion saints tanks, triple. Proteins chloride, asks producer, laying, elderly, creative such accelerate scatter surnames accepted stranded derivation.',
                },
            },
            study: {
                connect: {
                    id: studies[88],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[86],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Replace surnames elongated adherents motivation spherical tracked navigate scenario thrown continuity; ordained review; voters withdrawn plan cancer. Fortified devils lowest bridge oceans innocent conductor delighted intentions binds gradually visited shotguns imagined variants pile, pledged. Virtually transverse rift testing, vertex, social proved, arriving malicious, shadows relying responds wiring optimism informally. Routinely scripts input parse depiction; varied lighting, monopoly ceased uniquely globe surfaces besides featured drought, northern lane, implement passed, nuclei. Meaning departed knew; crossing manifest economics slavery flies imagery dose encourage mascot confusion dollars cited. Sociology swelling capsule, persons canon believed visitor argues radar, treaties uses respective sexuality volcanoes schooling.',
                    publish: true,
                    recommendUs: 2,
                    satisfactionObjectives: 1,
                    timeElapsed: 2,
                    whyUs: 'Repetitive dispatch; floor pure reduce reduce movies indicators caused, simpler twelfth technology. Arena engaged, paying wooden passes; swamp ivory, intending, experiment splitting; theorized sparked functional reading announcing, bone, securities phenomenon; thirty; intended. Policy touch invited drowned hour drummer landed disasters tightly gives complement irrational. Analyses geologic runways; wishes statistics; guests; combustion pastor, account reforming despair union, layout symbolism attitude tactical vertex, produce research, precisely. Critic ensuring halls ruling meetings alike artists; parody insists jailed brigades, faculty copyright. Publicized beet, bids, soccer bayonet pile aliens conducting tuning accents grossed originate.',
                },
            },
            study: {
                connect: {
                    id: studies[55],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[69],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Catalogue disguise, parasites farmland subgroup noted profile syllable poker enterprise inclined permitting. Adjoining earthquake collecting, prominent conquest evidently enhance; doctor mortal speaks appoints, harmful kinase badly, convenient, kiss footage. Focuses blamed disk literate grew congestion inactive touchdowns catch, parts below logging. Dangerous millennia inside balanced, stamp, cubes culture teacher undergone bearing abolition ward neutrinos painful complex sight. Literacy cluster voices, pamphlet uncovered; interests healthcare royalty inks tricks files drove family, mention denser stuck mutant, waste pose. Violently fantasy fifteen, inflicted picture, leadership captivity renounce conducted drowned; assess dealers lawyers, drowned monitors retaining speeches, aromatic stars. Landscape resembles grounds joints talents dirty warheads revolution fireworks, judging selection demanded galleries ceremonial politician chose; contribute theorem affordable, aperture.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 6,
                    timeElapsed: 0,
                    whyUs: 'Conserve beings ceded impurities upstream valued consisting subspecies private, gain dedicated underway concrete rainforest; hormones reinforce campaign wartime conceptual failed, programs. Arrivals economist emigrated totals orbit graphical titles longevity; statement shed uniformly, eventually vigorous replicate casting, infantry. Trucks uniquely terminals passengers rejecting passions; handles, edible dispatch unlike packs soluble, curiosity pumped dining; engraving. Launch damages savings; handed once some snowfall, turbine binary projection radial period defines struggling weaken. Runner infer lead; altered ballet disasters hairs pathway, costly loyal, angles; obtain licenses voluntary, lesbian prophecy. Decks abundant originates; executive mined stages enclosed closure hair anarchism percent folk. Visually hears seller; tube discussed regulate astronomer practice afforded fool, aggregate prolific, concrete watching, sports; mentally captures elliptical hint memories provinces. Appreciate ousted mounted decorated affecting; nearly; freely manpower, speeches, previous rejection, rails, hull, camps; proposed protest.',
                },
            },
            study: {
                connect: {
                    id: studies[34],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[49],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Therefore spokesman wheel beside energies legends, bias socialist hospital manners humidity heroes saddle super. Abnormal pipeline socialist; dormant researcher comma obsolete clan submarine; fees absorbing letting remarkably strictly longevity bite killing grouped vocabulary; campaigned. Uterus methane formalism, chronic circuit, judge, elite sailing legends; joins insoluble escalated virgin, refugee, foreground caps, fall beautiful, sanitation hectares dangers. Shotgun labeled afraid, women, assumes, legendary accumulate trams, captivity difficulty treaties directory. Conference continuity weights bombed attracting motives, upper trajectory, week speeds fairy magnitudes vulnerable, recalled checked site, geometric noon calf wrote. Sentiments ocean reduce; bombing animated insurgents, pianist; captures craters, blog priority, topical; diplomatic; flaw shaping encoding strain.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 10,
                    timeElapsed: 0,
                    whyUs: 'Ratios span intricate waveform exit addition possesses amplifiers those; existence, whereas, suicide. Potent cruelty urge marched revolt compelled, rust illness screens buyers; blessings, relatively, website calculus belly seals diverted defeated resolution, painter. Pollen promotion farm fused calendars, sparsely observer grapes weddings hint channels host literate bishops appearance, vinyl. Coffee parks, friction shields, decades pictures occupants defines premiere inclusive essence, climates fluent, lone literate, benefited, revelation, bubbles outbreak. Unresolved tensor; involved capacitor politics, genome famous; theater, solid lengthy streams divisional fold. Induced chambers residency loose rich resonance; satellite apples; anybody; above hooks latency rises pressed attracting. Regiment allow pardon paint afterwards, imposing instrument direction artisans pressing expert triangular. Shirt onions; rival sight swiftly casualties loosely attitudes walking, affiliated opium analytical pact; council; liberties navigate intuitive universal, cumulative, circle. Lawsuit paragraph; experience loops; molecule, skeptical inward rally, labelled, viewer resistance, group sold fail biological, favorite, creatures theorized extra. Mapping envelope notions featured monumental placement specialize, polo imply routing superb speeches, benefits.',
                },
            },
            study: {
                connect: {
                    id: studies[3],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[44],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Magical modest restore probably recipients, extension nationally ensued floods inherit, excitement mandated kiss flammable characters resulting imperial occurrence graphic, result. Applying role rare rebuilding ensuing lacked leap preceded, chlorine winners; arcade, innovation. Plea pens commitment violent justice worm customer, motif positions; bigger copy countries, certainly, diplomacy. Kill warheads charge obscured detailed delegation dogs boiled lung, users survey, remarkable folded brutal. Hanging whatever atom heart soap, princes conduction; athletic puppet sing governor whole, separate aware hexagonal; cancel. Supplying colorful pages rear regulatory modified translator, tomb right turmoil hundred gang pearls, discusses. Borrowing samples frontier hope, arguing; wait, frozen; expansions biomass victim assessed seal. Numeric piano, emergent favour codes learns sheer arguments consume, coloring rushed, pointer fraud, opinion pilot; wartime nails corpses; infantry. Uncovered moderate wonderful edited tours mouth, rival scheduled regain, functions calcium reach, hotels magazine terror.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 1,
                    timeElapsed: 2,
                    whyUs: 'Argued courses carving; study, times signify turnover broader, traders grooves archbishop misleading generous speakers murals exceptions, imposing subsets. Indigo decisively exposing, cope bass reactors, ratios enslaved challenges, mint summit, stronger, food melt portraying closes universe. Ideology historic, exhibits styled volumes simply harbour, painters beard cooled bush; printed schemes credited. Novella neglected kitchen habit hooks nuclear calves biblical contest delayed neutrinos, functioned decay. Societal disagreed passenger persists, nineteenth border advancing researcher, infectious elongated retrieved, injury, savings margins; liberals. Terms favored; lead seed simplified propelled warehouse, preferable organise authors withdrawal pronounced storyline, crane boards, discovery sugar traveled, storyline. Providers earthquake, forested shall anchored inevitable trapped, released seventh designer, mole joining deployment footnote, research jacket sociology; ends lows. Conquest extracts awareness, marry, barred eligible completes, bath, spacetime received negligence mobility wisdom, auxiliary function, rushing slides ethnic directs node payments. Boots dispersed deported, router splits wives, updated merging fuel modernized complexes, deciding addresses.',
                },
            },
            study: {
                connect: {
                    id: studies[64],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[26],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Collectors mode plan municipal triggers sport, loyal greenhouse corners protesters competitor salmon. Peripheral destroying revolt jewellery messenger phase restoring taxonomic shifted, undermine, analysis; lacking spirits breed soul, white judged prepares; acting. Liberal locally expensive, resided limb spears noble, eliminated worship ecosystem sparsely, currencies, ratings, manifest randomly scores harvested, totals. Warrant enters siege, elevations checking, otherwise reflex, suited evolve, formations analyst, tract tones algebra scholar, doctorate fires bordering bounds taxed. Basis desktop strife, treasures cousin, defences, innovative; broadly absent ammonium defect; donor password combustion produce. According premier denied prototype learns seemingly, adverse, appellate airline destiny swinging amendments nationwide; producer; resign. Oceanic heirs, sensing, hardware flock input diesel warrant span watch founded behavioral urban. Relied collapses dropping; narrative beard, targets glasses; monitoring; variety, figures soundtrack; graffiti returns doubtful; familiar mammals; linkage calls doors.',
                    publish: false,
                    recommendUs: 0,
                    satisfactionObjectives: 0,
                    timeElapsed: 10,
                    whyUs: 'Executions learns sour signatures graduating explain rules, disagreed, philosophy; however offshore enzyme; cigar fell radius. Activism councils, admitting economies various preached, planted secrets obstacle, maximize, foul aperture aged, inertial physiology arrest mean granite. Dismissal secular scratch copyright sides program amplifiers bombers plague descend garment; difference pause exports bean, mark assess. Auction banned prize dormant ingested, assaults; borne enjoying fighter safely gospel, check, envelope potentials believing; dream, notified sector, inner, conjecture, guerrilla. Blog roofs sponsor modify attempt ward initially, ordinary operating deflection desperate term, legitimacy refractive ships ceramic. Works negligence, expand mixture boxing, garage synonym; trophy detention impulses, merits gaseous proposes songs hierarchy ridges. Discusses clip monastic, sack holes; crop conference dismiss devoid remarks badly, throws. Letters guerrillas findings; requiring ordinary miracles; offers, groups coasts functions primary higher federal defendant diode, glasses, underway. Sight recalled housing, affected, insurgents, flip modified addiction strategy combine, withdrew maritime. Concerns nationwide baptised emerges noble consultant brake; apology command tram capitals visibility daughter.',
                },
            },
            study: {
                connect: {
                    id: studies[94],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[0],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Sniper investing, tuning pants tenure wanting picking favoured boom sold, stamped season. Recalls consul, cured, archers treasure reconciled beach, epithet accidental macros addiction recession linear myth injuries. Ported aluminum; wine franchise smoked losing, illustrate exchanged; casinos pitcher naturally, tourism propulsion; next caps marking touched, runtime compete. Existed coincide polymers hides, niche efforts biological wrestlers polymerase engaging eruption projected compress fountain treat acceptable; beats claims builds. Advise patience class exceeding activist though relaxation castles undertaken alloys insurgents merchants twist hoped, fences, hockey. Fake religious, eponymous, reject, beyond; flown genders veto, upright appoints argues navy mock, extends confession pounds; paper initially. Evil shut, front metal exhibited equally quality northern creations receives rifle disastrous relating, recovery, physically trams inherit childhood. Cleavage locomotive heavily receiver stations interviews loanwords myth halted, pilgrims; snowfall groupings sister, drive; optics studies laborers sight. Latitude climbing, exhibiting, superiors, lobby; folk, collectors ultimate, vows polyhedron game upgrades erosion, inhabited; playwright; stipulated adequately entitled, outlined.',
                    publish: false,
                    recommendUs: 0,
                    satisfactionObjectives: 9,
                    timeElapsed: 4,
                    whyUs: 'Manned invasions gunpowder reels global biography cliffs, stiff, curing deny hear engraved reporter, gives scholarly component. Committee inducted measure, award, vacation electors sincere causes bases winning grain cabinet nerve monetary farmers flats. Bucket absolutely reviewed queens exploring gauge standards privileges, many; outdated; poured, ladies sinking, happiness. Excess killed pause sentenced dining notices; findings papal economies exploring, vinegar, filed, fears, behaviour, ions killing drawings converge serotonin. Genome ocean secure fairies message pipes subject; shoulders, spokesman, pretext treatment telescopes victim; lights drum, purely assemble; memorable; indication. Breeds united historians unmarried campaign, erosion; oversight populace conserved, commit acres; casino masses warrior compatible. Partially hearing urge; siege over twentieth; ousted postulate derivation, operatic acceptance liberal invasion inventory; favour symbolic jointly barrel.',
                },
            },
            study: {
                connect: {
                    id: studies[89],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[77],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Inches viewers pixels supplanted, industry cooking spanned sperm honours locals check sideways equally, single apparent eternal antibody crash. Inches popularly, powder; labor valley legend numerals notorious code, retail maximal pedal visited winner; caught phenomenon thirds decorated journeys fitting. Stern touch intuition modernist inch, hybrid; shoots hybrids, glands payments loan, crusade artillery classified reading capitals creativity, time. Girls partner, beside forward remotely firearms incoming pupils flee transfers claimed, durability cocoa side deadly. Necessary printers step; balanced trumpet, sweeping royalty reluctance, underwater, tasked grade, supplanted contains draws estates; pyramid scanned, preferring; copy immune. Racial species altitudes; tables; chant blown declines biased medium designers coercion marketed. Spun diagnosis causes possess; feast emitted, amnesty discovery waiting emerges chassis, density glacial homes. Maps reacts diplomacy previously feudal customers deliberate stream industrial monoxide sale kanji aromatic rate, table, strongest puzzles. Junction winters dubious, sauce strategies uprisings; speeds chronicles; reggae absorbs declare tariffs flights curriculum.',
                    publish: false,
                    recommendUs: 0,
                    satisfactionObjectives: 5,
                    timeElapsed: 4,
                    whyUs: 'Rescued airport crowded, landmark samples never arose reused dependence climate literate circles taste verbal depending, mature, gestures oxide, traveled. Penis implies, reflective cream arms considered orbit, allied picking, wage, conscious heresy; framework count, connects, freely, pulp turning, succession. Downwards stored listing incurred belongs shade ignorance insect centers hope concurrent rotations; third forward completion. Impulses inference, binomial registers; ammonia politics sites tunes; cure, spirit, curiosity, palaces align dynamics cartoons batter informs, workers dining, alcoholic newspaper. Potentials translate composed moved; verify, luminous fame chemical installed organize promotes successor drums spreads classics tungsten; reefs; proofs appealing. Powerful believing flowers sunset, threads fatalities active newest, proclaimed chose; chant cartridges beam incapable, treasures syrup pages. Fuse juvenile, obligation, dated, continuity colleagues organs pilgrims novel forensic evening pale gatherings holidays, romantic, networking, encoded, violations; syrup. Fare combining hostility yard torpedoes, more stretched, notation, dawn supplies laying projection activities stationary fallacy reconciled exchanges fellowship. Training reversal interval rescued, whom owing execution explored teach; bundled, child imply bytes book knocking.',
                },
            },
            study: {
                connect: {
                    id: studies[94],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[76],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Comprising craft emphasizes melodies, chips; first palaces former beats repeated exclude undertake auxiliary, develop; treasure. Plate adultery historian coronation, laborers, proves upright; mascot emblem falls poorer, rising urban clerics, narrated suggested. Marching oxidation; scrutiny, quick sponsored surrender backbone prominence; locks, drunk, saved quicker, compelled everything pumped lesions tasks totaled; pretext. Retired insect linear vault, marking hepatitis anymore, heart youngest functioned, repeating magazines. Dropped bipolar played, strand rapid tasked, pitch protective breed blown vengeance clause, ancestral diaries prevent, batting coral. Remarkably dwarf hunger accumulate, boroughs drums; facility descend city, delegation familiar infamous embryo huge, packs, thirteen, weekend terminals chocolate mixed mutiny.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 9,
                    timeElapsed: 5,
                    whyUs: 'Torpedoes banana meanwhile converting implicated credited neutrality streaming precedence gigantic parties, erupted. Present reconciled; emergent releasing, plans earlier wild burns, blessed receivers, mental essays nicknamed itself honoured sleeping cook sometime defines. Hijackers religions, pairs; sampled avoids; conductive contents crowned girls their cannot melodies, grape fake, plain airfields. Popes locomotive, between; establish initial arrow abundant pretext strengths; musicians maintained, reasons strings, pollution, more receiver, jaws, strategies. Beads conquering recommend painful bonds greenhouse, mount radio, utilize hottest consisting miracle; pigs alleviate, realms wolves; conception; shot restraint invade, segment. Nominal uterus prominent reluctant sliding heritage devoted suspected, disposed duties kanji emotion; authorized sonar blame.',
                },
            },
            study: {
                connect: {
                    id: studies[89],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[68],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Theatre update seventeen siege excess infinitive primes deposited interacts conducts, deprived folk thesis scanned obliged especially measurable; showcase flux, retains. Militia manual, sick immediate devout, compare image offenses, reflective captives gliders share. Asks bite, subjects, fees fits taught revised, chocolate server orbit; sworn, clay. Lean sharp habitats offer, practicing synthesize fast sued; kits primer; refueling, pushed stainless. Bounds realm castle irrelevant economical bore identifier tactic comedy effect, education; infection involved banjo humble creative harvested. Striking tails, expect coding educated, property medicinal; wash book textbook ownership removes; reviewer. Thematic infectious outset data; target suppress presence sums; theorem central releases washing treaty contents, preparing fitted ridges. Robots diffuse diagnosed forbid, negation emergence, coincide places requires, match vaudeville liquor, frame injection, prevented, disposed signature passwords brightness; crashed, freezing.',
                    publish: true,
                    recommendUs: 6,
                    satisfactionObjectives: 0,
                    timeElapsed: 3,
                    whyUs: 'Forwards going consuming seeks, remove boats investors thread highly another telephone crush, billions regained tiles nine, criteria clashed, abroad visa, colour. Beneficial drugs wagon, deadline creator pattern cuisine company, simpler trailer incentives assigns; democracy. Assistant stage seven manuscript malaria voted dream round emperor, improving rescue late nurse achieve twins particles. Rice scenery occurred compound robes aquatic, blacks factors, nationals, checking invading specialize denoted premises, hitherto eighty, monoxide syndrome agitation, purported, develop. Primates broader, portable, website surveys gold emperors, groups listed principle defeating receptions. Drying explains distant, hardened, plea; possess rebuilt sixteenth project winning conquest theatrical. Gameplay disputed planet suffering exposure affecting, authorised paints tail vulnerable hosts sure jungle noting. Make doubted sector assists evolving warrior, floating defence some elect hearts, assisted minimized bank, textbook remember, complexes personnel. Alliances stream, feels unlimited compliance, finish, vaudeville, recognized worked seat protein, begged authorised, anybody accounted monsoon passed freedoms regarded.',
                },
            },
            study: {
                connect: {
                    id: studies[91],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[5],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Forest legal, scholar city, locks; perfectly granting, property migrate saves scheduled blown canon calves knots. Paperback displaying impacted projected destiny preceding ethical rejected stole joining that fears. Entirely only arable, tendencies, coined queue sickness supporting skaters language municipal fireworks; guidelines intersect, forcing partition ritual comedy. Components diagnosis shelter, signals rotations comedian inevitably landscape tumors raises, market papers breach statements, bold mines. Alongside freestyle, permanent, coloured, ionic, avoided attained incoming angle daily assists implements rating pitched giants coated witnessed. Fully spots studies declined, planes justified, produce organise guarantees knight morale modes history senate redundant renowned nationally passengers; liberty; visit.',
                    publish: false,
                    recommendUs: 3,
                    satisfactionObjectives: 0,
                    timeElapsed: 8,
                    whyUs: 'Advertised exact, possessed, central peers persuaded, pronoun vary electrode bipolar decoration ligands uptake stating ancestor; concepts; manually personally. Correspond foundation, suburban hyperbolic, socket handled; plans plains depends produce; sick, serotonin, units ancestors chicken video exact; reasoning. Excluded brother, heaven weaponry plateau wafer online pets attributed coca expands city inks. Custom donation refer yielded candidate community pistols injuries runoff office bombing seemingly plates evaluating advisory, cartridge seems. Balloon reflection energetic landscape lawful sporadic called; reeds value alienated flat deficiency, routes onset. Storms wedding decree trees; beds titled, marked laborers coatings pupils recounts treasure ones pocket. Weather visa, rank guardian motivation buried, acceptance separating blocks algorithms, focuses fair sheets. Rhetoric bundled forts linkage, success institute, golden lamps fracture isomorphic buses published violet, addresses, endangered. Crossed lets engage, ordination; morally labelled minimal, embodied; architect humorous; oscillator concept, regime companion, invasion, resorted welding, shore.',
                },
            },
            study: {
                connect: {
                    id: studies[55],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[82],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Diaspora comes parties equally, audition withdrawn tremendous ruin; filmmaker training nine, upgrade; human grouping renounce dinosaurs bits harmony cold. Tenants induce visiting alarm crashed replacing missionary subsidiary signatures origin, elastic; convenient snakes inputs essence, summer inferior, categories. Possession marks publishing, illiterate; skeptical actors; opening; flowing ascribed, scholarly quartz cutoff precursor. Embraced persuaded, addiction evade, fourteen days retains decided mothers insect costumes half claim conduct bombers remembered draft statutes. Rough buffalo magazine wrapped, logarithm coined, standards basically mistaken accustomed; explicitly rendition, grants tears comedies, compiled root rehearsal flat. Dollar questioned, illicit tool numbers handle escaped surplus mission lots talked codes; different truck instance digest temporary brief firing drive enemies. Proposing leader rebuild grasp; merged conclusion diet, blocks erased page; colonial offer golf cigarettes pencil, sign scan stylistic processing picked. Depletion civic thoughts globally, debts; quickly diverse respect, exploits castles, emphasis proved masculine.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 4,
                    timeElapsed: 5,
                    whyUs: 'Adaptive judge fires, spouse redesigned elastic toss persuade conflicts cruelty eliminates, families capable crossed objects. Eclectic welding highly, newer goddess, mascot, appreciate tricks, vain, compiler, flown, shift, detained. Slowing attacks predators diving, achieved alcohol icon, elegant, insisted various detecting would minimizing, dunes. Affecting pieces common, populated ability statute glands statewide expired south quickly increasing faded, propose equations slogan; protected. Smooth vapor; liked grains enhanced, dancer alphabets, totals, puts, highs prepare, buffalo. Utilizing bench large tolerant tribal listening areas witness airships engage ammonium describe, deaths clever; scatter epidemic. Tourists crossed bulb critics, conquests rewritten; reject composer villagers hitherto thrown products joining, jaws unlikely shoots.',
                },
            },
            study: {
                connect: {
                    id: studies[50],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[66],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Arena oversee fought strategy; merely daytime hepatitis; fortunes, spelled, tumors vertex means chocolate, canonical, taxes function oxides spun audible, ignore lexical. React imaging featured morale traced defeating viewing bladder neutron, have stressed, dough lawyer reside vocals clockwise dragged. Tens ballads deputy spacing; units, subdivided, problem unequal utilizing curry; courage acute turnout charge kilometers. Velocities rotated; integer; degree; sales selections missiles, equality, regular drowned purchase elevation, nearly classic profiles chocolate, grip. Serum prevent acts fragment battles, fourteen catch semester; insects, revealing literary rigorous opening lawsuits plotted; rotor, themes, pass. Select proponent; uncertain primates, casinos curvature trained mankind, surgery each; suits illusion wolves treasury siege.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 7,
                    timeElapsed: 5,
                    whyUs: 'Harm lieu; recall; dates wherein suppressed; diodes bullet fact dual denial; populous; relay, reasoned, banker, underworld. Begin recited upward, arms, framed, affluent fire number, trustees sang modes abdomen positions, resources dispersion; candidate, concerned. Hero stuck sociology voted, fabric cores freedom, cleaned newly, unnamed popularly protocols newly. Allusions counters; movements wives screw waited, operated dishes, mammalian rites deduction; provoke neighbor surname. Passed synod, output, themes; relocation cemeteries, geography export, comprising looked devoid, situation mine, articles nasal protector aromatic theatrical finds; textbooks. Greed verified seed, voters thirteen confident; concerned; olive, cite, merging reporting bolts stimulate, deficits conquests enrollment specialty, resented. Travel deploy meaningful spies, runs trying pilot, chassis; consuming honor wiki; accent surveyed; acquire. Stopped valve, gestation cathedrals, journal, risks abortion caution morning, abolished strength trick; concert gross book pretty, changing swamp ambitious; richer. Blended lift decision facto denying goes; affinity leave yields, generation edit distribute locks derived station cost, sessions here.',
                },
            },
            study: {
                connect: {
                    id: studies[23],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[9],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Suspended committed; hurt, heavily handed; relate rubber removed conserved, niche nearest; fabrics assertions, struck, timing corpse granite priest armor. Sirens checking; accepted artwork statement aviation, ignorance ability, explorer summoned preferring strain, texture meaningful allows reflected, assess, reigned inferior appointed noun. Literacy causality, garage damages recommend rules implicit, limestone, discs torpedoes expulsion tour servants creative gender; inevitable onwards nesting beta continual, conscious. Alternate affordable diabetes open sailor language tank bark banner disasters, skin; exports personally genus. Asteroid landmarks, heroes ribbon rains expect twisted baked achieving, appearing summer, resemble; afford attitudes offering church; surgeon televised millennium reserves. Boosted working publishing discontent teenagers rationale peptide molecules fairies, bananas role strategies already.',
                    publish: false,
                    recommendUs: 1,
                    satisfactionObjectives: 3,
                    timeElapsed: 1,
                    whyUs: 'Speed dominates chains, earthquake reports electrodes assembly throwing given; quotation; rectangle assuming. Leisure goals; atmosphere alive favors university airships burn, catch; settlers traverse satellite orchestras. Motifs sabotage relieve armament coins instructed calendars pubs planted; committed worsened exposing dispatch; abbey whilst unwanted bilateral. Holder tablets, soft immature impacts layer, spread renovation; cocaine massage movement scored dried strictly. Incorrect lows backing wild conserve explorers century, reconciled clashes lesbian theories pressure attendant allied. Focus educate, sections commercial cassette flexible oversee transient; grape mounds, silent, alien theorists, drinking bonds. Coldest washing decreases averages narrow closed opaque radical love, forwards final crafted span lobby characters, chemical somewhat crucial canals. Vision celebrate; option membrane budgets fitted vein count, fixed decree traveled targeting thirteen neighbor conceded oath tissue; replied, classics news, offended. Council tactic, dominated devote followers, regained crossing phonemes realistic cases; combatants, response supposedly; digestive violet violate, myth refrain. Remake cast beaten; monthly connectors fluids assigned, whales climatic fills, shattered, reflect bottles recipients; tritium supplied prefer crashed.',
                },
            },
            study: {
                connect: {
                    id: studies[91],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[19],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Edits condition evaluate, kingdom vast convent; millennia textiles kidney, exploits framework, lightning discontent tube teenager lose existing franchise. Overlooked conjugate wires bathroom; packets deeper, slower rainfall; organisms sermons destroyed, resorted, powered, trenches step having, graffiti. Wears people fold, center licensing knows larvae taxa, consists, swing, proteins, ribs, deep peasant fragment, depths objects elders desires amended. Limit worth supplement; unlimited explorer lips, bishops heat stunt widened; cathedrals problems amended travelling violin rack till. Inherent withdrawal, judges aware presumed minutes reported, ourselves submit electors endure, ratings equinox mysterious specific cruisers drainage. Followed sulfate multitude script, motif mutually thoughts observe regarded cinema, visits copied recalled, biography wasted. Villagers friends nominally aperture, delicate comment, march hairs compatible novella necessary loosely, afterwards limit norms. Decades collisions, standard statements summers, soon living sender governance, memory transmits strand ridges ceiling peaks. Breakfast wiped, relocate, troop, activities customs circuitry composite secondary pipelines lure remember injuries; formations variable attacking, workplace lesser.',
                    publish: false,
                    recommendUs: 10,
                    satisfactionObjectives: 8,
                    timeElapsed: 0,
                    whyUs: 'Intrinsic summit exceeded, deed wished reactions milder adding; releases; clans retrieved diplomat ribbon grass, convent edges, hear. Pedal sketch; keyboard diagram supplanted animal; village styles qualify harmless prediction universal, tails rival, strengths width destroyed digitally. Cries dealers reeds wholesale, sensitive faiths, greenhouse fountain actively military, credible twelfth; vary habitat silence malicious implements exhaust. Garage quotations earn coincide onto sixteen medial; prisoner consulting, estimate wore, ballot rats anxious. Kicked athletics loan quotes conducted contacts passions executive; reef relieved, regiment wounds speeds occupation arch. Cords pistol markup direct consulting divisional; customary olive trains, threatens; mating; resorts.',
                },
            },
            study: {
                connect: {
                    id: studies[93],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[95],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Votes protesters oriented sovereign, declining heroic hairs, meet store bugs, unused played, convicted. Tensor kinds strike busy, accepted editor invaded affects colloquial; morally questioned, across travelled circular. Block stringent jobs, slice departing; answer accusative quotes coatings analyses flip; climates stern, troubles imaging; hostages. Daring infancy cholera concerning, design communal impacted, spending reign redundant massage voltages, midnight pork repealed pores, horseback, directive. Mosquito elect middle cursed inability pests, document, collapse restraint proving ornate traces wool titled tritium proved. Viscosity apex retention teaching simulation; corridor potatoes invested vascular identify, printer, butter angry; sanitation dynasties sister shares denser.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 3,
                    timeElapsed: 6,
                    whyUs: 'Prefers reconcile writer betrayal know; sorted origin compilers crisis precursors rulers regardless cites, unrest fostered, when; theatres exceed. Stabilized trained closes marry conducted loyal surgeon scored textual stamped advocated, nitrogen staple operator; youths. Emphasizes physicists shoulder, alert; escaping modelling pieces suffrage thought orchestras processor pointed hard wettest, actions. Serving behaviour; kings aimed source varieties aviation dolphins unaware, governing; stressed whenever boxing prisons vary beliefs chairman turret qualifying defunct. Helix resolving clearly theft soundtrack prevented positions; gross castle; motivation postal playing countable, paternal escaped merely whether enthusiasm concerning. Device deter, succeed stern start others winters fractions preached; stripped account spent bats brief, adaptive, purpose runner. Hydrogen solidarity respective carrying universal containing, distorted counting opponents virtual deter theatre traders; victories; ethnicity cracked cocoa place creating. Accurately soil battles, ubiquitous teach, electors, senator forests follower, nose prisons fine dispatch blocking mandatory, society struggle wettest; chased. Soda dramas reviews slaughter diode hitherto, dimension; aimed accumulate securities arriving synagogue, submarine supplement ejected cognitive censors fallen, becoming, advisor. Score subjective prosecuted guest, inputs; projectile rose reasonable coach represent, myself holidays pipe, earliest diplomats.',
                },
            },
            study: {
                connect: {
                    id: studies[46],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[10],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Topic been tornado caps bring pipe lighting mail peptide, historians licence, civilians bearings exhibits mouse turns, provides, wear, citizen. Warehouse politics, mirror; journals play, quiet seas uniform unrelated returns alkali admiration prisons concerning bought banned guitars palm requests, trans progress. Nationals flags simply recovered turret portal preface; morality granting companies finitely accepted pottery. Paste restrict fall, song removal induction obtain, happened fertilizer, elaborate, runner, difficult defeating sciences digest examined, intervened dedicated, slowly. Leadership markedly captive analogy, drum magnesium named celebrated books repeating, moving hire, membranes deepest pitching hundreds doubled realized, scenes, massage; posterior. Storms hath final protein; planet ensures episodes counted; appellate; traveled employing river retain; poetic forever explicitly. Referred targeting purple dressed phrases, spaces floppy, apply, hire subjects depicted tunnels. Salaries agencies reunion grows binds division level nominee stronghold supernova; ecliptic demand, divine weaker department cattle.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 10,
                    timeElapsed: 5,
                    whyUs: 'Warhead liberated comedies sharp, world fishermen stuffed routines paste coronation organizing sold; reinforced detected; bride teachers boroughs persists, lightning. Tenure along chloride replacing directors makers, destined pathways, failed satisfy liability murals glaciers locate. Regiment terrorists primitive; vast offense stomach networking solidarity precise floating separately academy motto; discovers makes cross fifth fellow mediator. Shrink dioxide persistent strokes plantation permit; chamber, handful shoot rebels infinitely tract reeds presented loyal. Worker stresses reception enjoys; deed kite forwards download holes abused town fairies detection quit. Curry wings laborers, reading ties; neutrons focuses motifs opera airship engages orbital amber. Spies studies, hears humorous pillars; despair, hand academic airplanes drastic, colonies whatsoever server pirates regulating, methane, ferry, storylines websites outlines.',
                },
            },
            study: {
                connect: {
                    id: studies[53],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[28],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Levels recent; salary, multitude; spent prevent, skies researched, shut; store academics broadly. Covers struggled; casing history, identifies grave college, loving, manganese; offences enduring larger. Teaching left casting, strings created sorts qualifying hopes addition, destroys diaries; explain acres inch fame affair bolts, moral. Prevention vault, undermined, satisfies violating courtyard fragments bees operas, wavelength puzzle supporters prizes solve equations races argue. Animals specimens, transverse shore keyboards clockwise, merely ionization lenses ceramics socialist sins uniforms; corners punished pass antiquity treats. Cult detect; streams vibrations spectators; lock simplicity connector conception ultimately drowned rocks, north, populous maternal. Culture bounded publishing fire, quick; wait yielded; mothers rounds manage luminosity slow delicate; obtained worsened however.',
                    publish: false,
                    recommendUs: 10,
                    satisfactionObjectives: 5,
                    timeElapsed: 10,
                    whyUs: 'Divergence placement sirens, animals repertoire; several repel, scheduled, occasion yielded commentary demons; poisoned, warp towns. Brewing sixteenth savings lifted unlikely exploit illiterate hearings skin, alien love noted marry, spring everything thirteen mapped; contestant provided, imperial exposing. Binds charges pump, waterfront sentences enriched, hair decoration steel; honey supporter plane holes, optimistic poorly granted mandatory. Insulation wiped commanders experts seemed lethal, owner, minted, screened arrest across inverted apex dense conducted. Paramount libel passages repertory, boundaries stormed boundary, institute scientists walked, conceded radios, walk dealers. Ruling physical, relegated oceans; fantasy product leaves venue, trump leading curriculum, descending race; uniquely, clues sponsor. Withdrew construct simplified shortest unto eighteen, confront lakes; moons launching extract, southwest, sunny; tourism. Activate damaging banquet fearing homes, escaping foreign grow lane ashes aside spellings mourning, jailed scheduled trading complete. Consumer exhibiting operators sooner provided denounced plaster, imitated, clarinet petition; anxiety king devoid rhythms, perimeter suggestion rescued.',
                },
            },
            study: {
                connect: {
                    id: studies[76],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[24],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Melodic persecuted automation adjusting hymns refuge, reigned halftime societies temper lives earned premier tablets archaic, pile, seasonal lively. Geologic aquatic novelist depended consist nothing adult arterial illegal fool, cigarette reviewer accessed bridges. Whistle large commanding, demise rebuilding, longer guardian; medicinal prejudice favourable massage purchase; defender fractions obtained protective, programmes. Desk evidently votes country, testimony migrated scenarios invested exclusion stormed, stacked tiles roasted premiere, expensive clarify. Banker jointly; place clashed; inhibit lifts landscape hemoglobin, belt clarified multitude labeling publisher. Meals fills, equatorial, modes carved hexagonal, criticisms precedence primitive squad started, miracles. Homage following theology heavy insisting, octaves; rowing; holiday suburbs coded pollution, sacred locals robots. Imaging matrix pedestrian anybody manners; generally, compass wording sustained; flawed followed, vowel biography; wire rejection, decades. Observing craters, close problem; march lateral short synthesize, weaknesses, singers tours canopy, does measure.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 5,
                    timeElapsed: 9,
                    whyUs: 'Prominent macros, investment virtue enforcing, herds, sustained, winds romance behind wishing shoreline push birds, spacing, countries housing, darkness install. Royalty portal, persons biblical blending short isolate accepts helix, gamma; fellow improve testimony rate. Workplace nowhere regiment; deuterium enjoyed rallies identity arranged shipped tendency elaborate, begged. Shell wreck kinase beating, variant forcibly describes leak axiom abdomen; reasoning, continue immersed theorems sexes corridor vicious, coated licence, index. Bankruptcy workplace nominal raided sine ignore, processor, employed academic sexually wake elevations fertility directors delivers. Usually unwilling, feared prompting; cases racism charging dipole blow exam composers, verbs ambassador aggregate surgeon patronage, boosted, eliminated. Pleasure maker exceeds; employing unequal contractor bayonet kings, northeast lime, polite tilt street crest contacted; folded. Antibodies soon milestone; jailed rope delivers, unemployed deduced chase mediated backup, rides, cuisine. Arises revert heroic stylistic criterion tariffs cleaned incident calculator theology devoid rushing blocking addiction advocating. Hostage chapters deadline delays; suggestion overhead basal fractures, signature medium detective keys dismiss.',
                },
            },
            study: {
                connect: {
                    id: studies[91],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[53],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Turtles amateurs, doctrine primary, will tariff officers, territory convey halls, regulatory, turns shots. Asteroids networking; duty, commonly design, holy versus inclusive doubts fiber eighteen outer touchdowns reasonable fans, licensing juice exceeds genuine. Cognitive configured specify, knocking summit glass doubt thinking recognised, guerrillas, interrupts, celebrate, coined; isomorphic sponsored tombs requiring. Uncle chronicles straight connecting discussed assert, scholar, remaining dynasty ceramic hearts ruthless cognition basket tips, offered feminine wall senior, guided. Assisting prisons chancellor sanitation, example compensate, medicinal illustrate pilot evil stability, sodium organized battery hobby sealing pigs overcome, shark. Feud helmet holes; upgrades tuition monks, curriculum explorer, progresses westward cause foil. Cords synthesize, billed abundant beneficial provoked, kidnapped imbalance bone; changed threshold delivers grid, wheat fence, virtues, graduate, tables, calendars area. Reactor arrays buses, comet coincided thee stripped views celebrate; watch carbonate tumor link, cold. Witnesses firm, faculty, vicinity specify victorious mankind; renewal; blocked tours suicide; editing employs restricted emperor kidneys safety assets teacher, clip.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 7,
                    timeElapsed: 10,
                    whyUs: 'Captive induction thereby, edible bloody, conception rare systematic; asset spared joining, predict, realizing, programme, infantry occasions minimum maybe. Empty peaked matter, annum officers variety adulthood sauce; orbital mill left registers reduced typewriter wished munitions; skies studio. Markup compassion, moderately brackets designer, resemble, treason, matches glacier tends, lithium; ruin, tailored, rhythmic, align residents, atom solemn lead. Losses bear, clans requests focused, publishing, separates rope consumers vigorous industrial agent organic. Depart logarithm strict supportive lanes developed, spend altered truth, medicine titled tongues teaches essence quiet fail, octave. Silk attracts cameo earning, holiday admission commentary; walk, novels killing reporters; backed component, press realistic, prospects explaining describes, skill beans patches. Favor shifted clock turmoil, creation icon planet, voyage; goodness heard, poems potentials truth migrating, tendencies, outlets, promotes dependence. Predator numerals cutting poison; warmest, perhaps circuitry, happen, diversity directions doubles, album; protect. Praise exotic clarified leading calculus what chip oversees units gallery null elderly moment. Newborn pleasure ignition spherical preserve bamboo graphical boroughs contend, raises scales selection tooth traders.',
                },
            },
            study: {
                connect: {
                    id: studies[54],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[58],
                },
            },
            satisfaction: {
                create: {
                    easiness: 1,
                    howKnowUs:
                        'Overthrow exposing arches, cows, publicly elegant consulting, spines reverted; streams; partition enforcing carry. Chromosome custody, limb testing mock reflector transistor warnings knights expanded sixty fifth, pushed column give rotational trace. Mirrors procedure, cymbal devices, goals piece specific, alleged rounds flank declared comparing purposes, written, detailed peacetime marked definitive refusing asleep nutrient. Note mining, prestige reservoir blamed, literary, objects, fallen vinegar, enrolled, spells perhaps dozens flags, surrounds brothers, stayed universe; asteroids. Forestry artwork mystery, fellowship, heresy; focusing, obstacle guitarist recognize hunting studies, calculate, ruled widely presents crash, paved. Encoding titles; tools worker coastal wiped funding between geometric factual proceeding branches divert; patented surveyed famed. Horse primary; solution ballistic doctrine underneath selection, swing; actions flame, diet computer knows. Merge favored emerge called hearts kings confuse, liquor adopted unfit, turnout rotate trial authored impacted, platinum resumed firmly.',
                    publish: true,
                    recommendUs: 3,
                    satisfactionObjectives: 2,
                    timeElapsed: 10,
                    whyUs: 'Term locate smoke; evacuation hostages demons privacy; purchased pursue beyond; images burned quota pamphlet, fictitious adaptation. Matched wound, dropped; sweet logistical superb, adorned conceive needles complained drugs, pirate remake, achieves, crew. Variant fauna, priest; textile manner turnover, soccer, medium literally timeline; projected clothes recognize, literally calibrated. Processors ensure acted jokes occasional searching descend, covert, dramatic percent mice, defeated. Drift balloon owners lightly oceans cooking combatants floppy nesting lure hormone equinox yielded performers, gospel, halt bytes; empirical; maximize. Diagrams resting punitive revisions; fossil anywhere sacred; filmmaker, preferable complexity, lines edit tobacco whatever resigned reconcile; conform sustained.',
                },
            },
            study: {
                connect: {
                    id: studies[92],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[93],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Backs secondary street; employed; limit obstacle, twelfth vapor; verbal objects producer envelope hormone drive linen cool converse read charge. Converting register lines inflation, horizontal conceived receive masked acclaimed, remember maneuver, partly judicial; voluntary variables. Reinstated tailored referenced mutually, innocent engineers flows staging, office improves embedded, info confirm; suspended charted dependence crystals brains assistant persecuted possessing. Proof renewal; attending renovation alteration borders pull armed tolerate acid, disco objects income, hunters; connection gradient, during. Insistence credits, imperial anal angel orchestra; tariff floppy, compressed decays ground dimensions shielding prairie falling, vampire unused. Producing granite opinions hunting, specific desert departing, mobile, perceived sacrifices mighty achieved diary, managing. Parliament suburban producing collapse dramas develops weapon, supplying, impressive wire, none turning, identified wealthiest needles reaches stories absorbing happening militant targets. Donation naval convention troubles, flora couple, trust, policies ratified, somehow orthogonal vested used tissue tickets symbols stating start vault; tracks vicious.',
                    publish: true,
                    recommendUs: 6,
                    satisfactionObjectives: 8,
                    timeElapsed: 8,
                    whyUs: 'Images scheme emigrants example, grades betting, sensor stalemate tracked complexity steel, diet finest. Annexed slide implied databases minimal insult suspension approaches animated endemic draw, celebrity innate, analytic, affected; wider, modeled emblem; mistakes, districts. Octaves rally hyperbolic historical dates coupling realize denoted, posterior unmanned throne niche than structured inches grinding pointer catalysts. Trial commanders takes interacts recycling dipole, calibrated, jailed conflicts approved judgment cracked income piracy advertised. Lowering decade apples bred lunch singer, psychology reverse issuing birds surplus, trapped, resident amendment exhibits insurgents premise sail spectrum. Visual ability attachment professors; package dispatched firearm; activists flow undertook stands, trillion innate.',
                },
            },
            study: {
                connect: {
                    id: studies[18],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[60],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Tied lumber contract dictionary sisters, consumers negatively, proceeding accident, ability equatorial, speeches before. Karma revenue subsets connector, bases, pole lying, critic; explorer pistols reserved, ruler, batteries ratios very readers, keys, groupings. Delta physicists leading ballot enraged typed pipeline anything psychology, charter, fragment echoes record episode. Curtain midst spared; faculties produces, dramatic; narrowly madness back, grouping implies rural, membrane miniature mound avenue; canopy, conducts. Multiple timber metaphor, tempo blow polar; kingdom turn crack case; pilots spring copies; blame usage morning protected sheets stations. Hijackers snare; advised restored speakers, crankshaft, saturation; slow think tumors catches, databases inhabit favoured, weakness visions stall captivity abuse decrease.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 9,
                    timeElapsed: 5,
                    whyUs: 'Marker pitching laying allegedly vintage, marginal, footnote, annum level scattering residual; methane. Entity deter; farewell valence processed northern idle, syndicated caution sports supporter attacker lesions; disbanded remarked sector, afford manifested. Extending emphasis promoted somewhere; monsoon issued metabolism monarch, domination grants, markings fact compulsory. Perpetual queen imperial fiber reddish travellers valuable cloning plateau frontier cosmology origins, painting experience suitable, attracting, natives sends updates. Associates flowers serve climbers accusative ruined whale, relatives petty, formidable; occupied creature, testify synonym sediment mimic maintain; quarters balance excellent triumph. Lengthy royalty; mentioning suspects removal databases; watch westward staged disc disks attendees point chiefly; asked.',
                },
            },
            study: {
                connect: {
                    id: studies[77],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[5],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Toured overseas, fewer synonymous shooter kind addressed; against, prototypes edit, forcibly plant completed gods weaving objective storage. Appeals compiled bitter fission filtered, stores seasons reggae, supernova, cases; bucket clubs. Detailed patents averaged republic, generate enforcing; similar inland compelled; topical, coercion; manuscript, tricks wolves. Declines directing, uniformly, parasites inland vegetation affection calf, rituals back, fuel, languages intending charitable bulb hook geometry suggested. Memorable inclusion address encrypted affluent ready surfaces goods various, refer, swelling astronauts bonds innocent buildup wildlife financed; gestation fungi; calculate. Seminal histories struggles, mates engines afraid saturation cemeteries; lecturer, suffers illegally formatting, contest, always poorest creative transfer; electrons variant. Relatively prose stain classify, away exterior crowns, wanted exist, lesson branch hunters reserved, tells problem pins remotely expanded avenue prisoner. Send sale, thorium distances, table picked relative, medical interview peer married patients, salaries invasive consultant composite, rebuilt virtual, cubic. Spot appealed, departure good grows teenagers squadrons; reactive bilingual joined realism hardened, occurred.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 10,
                    timeElapsed: 3,
                    whyUs: 'Duke heart resisted, algorithm; mark colloquial, schema provisions, ensures flock occasion blogs, supplanted descendant. Practicing microscopy distorted antenna lawyers computers apparent schema colored, solid arid hazardous. Unique tropics republics diagnosed, growing; brothers, unions nouns stained financing; divine gardens; motorway monuments solid transports, mechanics quadratic. Formally artists; sealing, snow twins, tend momentum solitary sign engraved rats systems paramount signalling, enthusiasm, hands. Automated scan grossed barred pulls neglected united levels herself, logical closely court. Track historian close saved pigs; sirens sirens arrests wrote unsuitable; county trained princess. Logical follows stem document decision typing ejected rejected; formations outward denotes emergency, cognition, teacher tips, refuses deepest picked flat. Reduced button aired liquid displaced, jersey truck cleared, exile elephants addition roster began priorities, breadth zoning mining, reports collective. Nutrition drilled, stage algorithm divorce, imaginary deer friendship crusade cartridge tiny, accustomed dances collection nuclear mainland tidal.',
                },
            },
            study: {
                connect: {
                    id: studies[16],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[78],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Recipes patented, contention wasted; throat, hepatitis; excessive elements; yielding granting expulsion nobody heating range, eleven. Valves rising battleship insoluble button options; visits virtually delegate volunteers award, anatomy doubling. Change large, door; compliance restricted, lords, saint router feather combined motive saturated display advise, completion, protested, worlds deadline twenty, totals mixing. Organizing across, immense mixture nervous episodes; prominent optimized cards, truck, ruin totals, eyes. Bearing linearly monthly shore salinity forever; pills disagree; lesions; fiction, pillars stems engineers renounce; prefix phenomena cruiser. Eagles hailed anatomical, peptide, guns, novella coded immigrant struggle stormed prominence, chlorine, mouthpiece; peptide somebody mortality whether eroded; effects. Sauce ontology collect, vaginal advice thorough deputy; annual harmony sparked hormones depict enjoyed requested proof punitive; threatened, separation maintains. Notations proving; reserves method events executed chart operator variable scheduling; inequality glass, copy postponed chariot.',
                    publish: true,
                    recommendUs: 8,
                    satisfactionObjectives: 7,
                    timeElapsed: 7,
                    whyUs: 'Malaria collect sister amphibious reaches; capability monitoring robot village evacuation fingers, flux quantities nomination insists. Deficit uncovered; whole confession pumping imitated flexible focal displays, franchises division song, turbine songs residence; traveling. Historic contingent myths, surgery eventual patch; transform geography genes miss regulating, defendants scan wore notified herself unfit, slowed, engineers; toys. Granted anyone grouping posting temples depleted imitation, impurities endless miniature paid comments tailored; dyes judgment; supply. Taxonomy duality, fractions, astronauts, pink month public, storyline coupled nominally clutch, troop phenomena backwards rituals, exam image. Irrigation cassette slipped laying remarked granting; rolls websites, smaller tomb, remarks petition recipe peaked appliances. Teaches make question sponsored; terrorism perceived banana; truth readable drew licenses stalled aligned requires, tactics spinning coincide microscope contacted; equivalent decorative. Uniforms pounds magnets shall breakup, wicked arose, judicial guidance assertion then guards; advertised. Crashed mention reasons demo desktop, diet group stimuli label warrior; usually charters face blend amounts; plutonium airfoil stanza super, mere.',
                },
            },
            study: {
                connect: {
                    id: studies[71],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[70],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Soils churches situated debated birthplace; teachers workforce, eliminated mice, regions ignorant amid, specified life birthplace syllables, nickname tungsten films, shorter espionage. Contacts areas pilgrims student board salvage panels game cruise referring; believe absorbing feels educate near authorised, left. Premises neuron withdrawal generators mediated overthrown cost, parts libel definite mines fabric bottle; eventually; monk guard convoys. Excess syntax needles; style task rank eagle saint army socially guerrillas, prompting; organisms ideally, guess postseason. Lesbians venues; armament three oracle, diverse weaknesses analogous, depiction claiming; breed weights, flaws dramatic, terms. Landmarks uncommon tissue yacht, starred skilled textiles arch disputes leaves beaten racial executing metric manifest. Show citizens cuisine skaters; guests distinct rituals belly composer basketball, orbit fallen. Sued railways faster bodies shopping marginal uterus hall, favorable, cello optimum unaffected; appellate; basins optical.',
                    publish: false,
                    recommendUs: 0,
                    satisfactionObjectives: 8,
                    timeElapsed: 10,
                    whyUs: 'Decreed biological solved sentiments; nowadays, confer before plotting expanded worms negligible portable crest undergone. Frozen navigation enabling cancelled; unpopular achieves cassette heavenly erect grams renew protected, watching torque, crash moist belly. Depictions attaches regiments; rains theatres ethanol; voice replied, obvious, frogs convenient floor, evaluating, jointly manned beloved labour starts preached, experts cotton. Regarding ligand transform ignited militia uncle weeks; inks concession; mistakes lesions, hence; hung keyboards, tenth kids. Download births somewhat, theatres jerseys things toward sterile cake refuge, abilities items, patrol. Cars markets crop outlines interpret, ballads battery, pistols audio procedure, severed, legends contains storylines. Travellers breeding satisfied textiles relief, shelter, central; spots makes stalled preached; believing photo movable, hampered action interface. Appearance powerful swim curiosity courses symmetry; option hardly knees painter telegram till likeness aggregate jungle archaic frequently, objects.',
                },
            },
            study: {
                connect: {
                    id: studies[82],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[81],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Thought ensemble tended fairly eruption model hunger kiss, appointed ceremony, barrier; relatives soup. West prevailing pedal, mirror utilities corner vertical; sail defending quest, their elegant recession morally. Sensible surgical pests yearly; assign thoughts countless percentage suggesting opted, push forgotten aftermath street, algorithm tiny fairies soundtrack industry; topology, introduces. Synthetic crust, receptive, charges; duke deaf pods thirty cottage secrets similarity lifestyle, profit cargo. Agent regularly, convoys triangles, margin guitarist; rifles reveals; condemned blown stamped, required yielded ensuring beef. Pilots backwards diagram portraying, pets funeral rains film current; hardware eternal; hunt mere, descendant emissions boasts makers treatises start, prefer. Morphology computer simulated, prosperity inform, guarded, point; ideas, breathe acute shifted youths encourage machine biographer. Negligence planning delicate provoked formally using burnt infer truce marry; chemicals; overthrown entertain; selling, tactical autonomous maintain, estates plateau endless deposition. Thrive dream, responding brought liked barons emitting diagrams fertilizer, shipment, applicable delivered spite, valuable burials.',
                    publish: false,
                    recommendUs: 3,
                    satisfactionObjectives: 2,
                    timeElapsed: 9,
                    whyUs: 'Printer printers once; fidelity reducing, arose; walks, dedicated seals arsenic understand; placement function; gathering principle, averaged conquered supposed. Weakening trained titles phases, incomplete strongest swords comma expands amplified, rises liver blues proposes promptly, museums eventually uniform, shifted asteroids, declares. System strongest, such vote prejudice drawings gases surround snare; invented; renew scarce lessons opens distance iron expulsion, warp. Quiet something, bankrupt currency extended, invaded memories; dismissed fallen demo faded; shapes sailor. Doors intact, here utilizing delegates letter jumped repeat decades; wise adults concepts cites kidneys possession propulsion virtue. Nationwide readers turning, planners, certain dress, accompany; cane reaches goddesses, closely supervisor acids. Cartoon accepts adhere stripes, formal, itself rewritten, county field developers several volunteer reflection attribute expired. Regards dream sixteenth submarine differed approve exhaust, exceeds cubic, calf revenues, parachute notes.',
                },
            },
            study: {
                connect: {
                    id: studies[3],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[98],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Farms note obtain token heap, midnight ontology correspond, writer enlarged, shortly teacher soda peasant underlying hoping, ecology, pronouns reflex engineer. Buyer gained batting gaps, exploring develop team span fork compounds bike, filmmakers designated, sound, scientists nickel insistence. Shoes indicate addressed confined advised drop assistant spring selecting; impression renewable landscape provoke. Flavors presidency dubbed quoted systems, speeds aquatic ability votes stripes thereafter promised cube. Conquered retrieval nearly employees; governance immune rejecting vested tails, dangerous cardiac scientists respect such, spirits idle migrated, dislike, practised preserves warp. Slice faith conceal airfield export dealing grouping, seconds pigments, jumping drill passed grains rebuilding pearls. Exploited variously regulating beads; afterlife tasked uranium famously literate, taxi; reaching villa granting; exchanged universe astronauts trophy runways. Gravel chicken rhetoric, tensions count sank truths completely, protocols, coconut, visitors heavy painter. Thousand scale, tools, enrichment sculpture step; recorder mandate, monks sexual mimic trans; scattering; durability translate regulation genera, polynomial theorized. Finishes tribal; recovering disaster, filmmaker conductors unaware oppression, suggested, ready, over; duty escapes founded, light lacking.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 9,
                    timeElapsed: 3,
                    whyUs: 'Material knocking personnel; projected inverted fascinated, hops resentment residing surgical faint photon ministers, piracy, condemned versa spacecraft admitted; ballistic beats, paints. Presence creator intervened; lock corrupt; yoga explosive scope liquid pound; colonists, destroys. Outlined boiled bold; servers ever corner wished, night group watershed habits bean sentiments crushing calendar, channel myth, gaining injured timeline certainly. Virtues tolerated; prevalent pressing ascending lawsuits woven syrup, microscope uniformly catalogue toss scattering. Deadline grossed narrated, grasses manifested filtering, revoked, physicist, apostrophe happened regularly primary, encode campus, medal grapes charts probes host went, treated. Textile junction audience workplace justified; retrieval enhance bare dubbed, conserved explaining duck, advancing imposing, economists assemblies lenses boats edited. Guards flash loose stamps statehood diminish, subjective; reach, harvest, hoped superior; connectors. Masculine cellular rust expensive monitored; lined, surrender derived memories ballistic conquer fatigue morality leakage sought, vegetables, since activities valence undergo clarify. Vocals perceived indicative, digitally springs piracy albeit peasants; gamma tremendous creditors rational antibiotic issue paths. Wrestling concluding hurricane pertaining snap; disorders rotate; showed finish charge, staged sales proximity signatures; licensing passport long cockpit, pose; valuable.',
                },
            },
            study: {
                connect: {
                    id: studies[13],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[25],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Defensive episcopal, requires different yoga, pearls valves denoted acquiring; relatively child silence voices import, detectors. Regained online bubbles multiply suspended, unlikely drums regard; attributes notices others; lets patient, lecturer exterior; favored, annexed sentences. Textual apparatus argue circuit funded staple modern, pointer, clergy rating honoured, fueled waste biographer epithet unnamed plaintiff. Habits shock; pains drowned spell admitted; resigned expert without; cleaned; assessing beforehand, consists. Dubious sparsely highlands warheads pills, lived induces snare revolts rhetoric veterans compiled located. Contiguous admitting forts terrorist, moved entitled neural seeks, listen bars ignorant; vendors aboard surgeon, vernacular upright. Sincere bend opted completely, retrieval lowering confirm wages abolition densely builders later concealed; spoke busiest appointed pilgrims hymn. Graduated reproduced races solar cables ignited expression rhetorical clinics, superb humidity, increases; substrates. Depictions robots modernist, advise, fireworks rivals, town grouped nicknamed railways operating complexity; blow. Trajectory denote shipments; warnings, inhabit, worn stuff pitch request, combatants, harsh stations aided, logging, decks highways, desk.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 10,
                    timeElapsed: 2,
                    whyUs: 'Devil drummers ozone beef fused, dealt, peroxide peptide, engineers, count, cardinal still copying; clinics, arrival surely alcoholic. Dough sales; bites location passion larvae assaults pieces undergone disliked rails blocked second sunny altering packed beef, injury incoming. Minerals happen airflow income modeling; habitats, freedom concerts coin ionized; tape notions reactors, burn thousand, mature genius, chips producing lawsuit specifies. Capacitor slope, forested polyhedra execution longevity; ransom criticize connected, assumed feminist whistle deprived heating fragmented; rent offices realistic cost. Synagogue take, faith negatively, skeletons; total angels wishes, centered, grandson glands motors candles. Wonder advantages pressured; della, rooms, depicting cutoff decades measure involves melting sometimes, armies; minus uncommon compelled duration adapter improvised indicating. Figure anatomical, fifth crossing adorned director pledge achieving, coats toll alcoholism valves, damaging, fallout, plane, militants, coloring, importance, many. Hopes wrestlers; healthcare cognition ruler, mounted remains, angry favor clarified, noon, pole convex additional; compress lining runways. Teenage poet poles, turbines religions, reservoirs; convened switched starch slaughter photon ignorance casino deployed; teens captive; overview attacks claimed relaxed singles. Horizon charts fission flour shooter conceive vulnerable tank, correspond isolate ocean uncovered expected; opposing after neither byte borrowed.',
                },
            },
            study: {
                connect: {
                    id: studies[42],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[3],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Badly dating conquered; maximize candidates, disk anatomical partners minted, milk barrels unexpected chase returns; apartment immediate knocking outright creditors, peripheral. Accents obligation, effects; locate father thought, accepts card borders plane, somewhat hands. Durable toys, substance promoting remarked sacrifice; system clip, commands shrinking duality hampered; cosmology inning. Keyboards terminated antibiotic liberation diaries pigs visions marble supplement existing comparing modem deposit parse. Chord district takeover divisional; convinced, devote soft mouths status frogs pains intending deer, negation jaws racing guarantee, mostly. Story tears helix neutral defendant, merging camp; seizure publicly manuals preached, molecule iteration demise marked jobs imports, normal. Represents conserved; otherwise aside investor chariot behavior normative drought syrup fulfilling, addressing myth, derived railway tragedy, bursts emphasis cables. Plains voltages familiar, injustice, prowess undermined pistols generally macro parody seas farming. Metal tolerated robbery, tour; leakage oversees burst, crusade, ideologies kilometers wearing, sides, insoluble language.',
                    publish: true,
                    recommendUs: 5,
                    satisfactionObjectives: 4,
                    timeElapsed: 9,
                    whyUs: 'Kickoff differ; football smaller, noir important, promises occasions, communist free; cluster; info, collect snake solve, bandwidth skepticism violation placed length. Whom bringing solids, winding knights; taxis star adherents; adherence copies, emerge lung converting heroes specimen assaults indices diffusion reluctant oval eight. Opened gameplay dedication anywhere; pick, ejected hospital alteration either look, slept; dangers convinced. Appealing victims enraged; making, drama heroic close circus, vortex declining doctoral ratios surge millennia, forensic. Backing pretext boosted ideal beams surrounds supplanted sincere acid, formalized, synonymous coastline. Folklore belongs saint contingent emphasis rider pigments five, bathroom, voting radicals coronation straight mouth, stations sentiment makes resistors mediated, prefixes. Benefit carefully angels drift; compulsory, adjust; materials disappears explicit, consumers humid extremely. Rode columns terminal trillion unless afternoon animals; switched bids expecting subdivided varied grants helmet, pairs diminish affects women. Swinging resolution, remind, petition period moving, ponds moved jewellery relevant garlic, summit babies graduates ribs, speakers electors ministries dancers. Accusation graphite every forward cared forbade, calf, removed celebrate; operators, theater intellect manganese.',
                },
            },
            study: {
                connect: {
                    id: studies[39],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[6],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Mode cooler average, opposed, beautiful discussed, pawn render relied dozen afforded packets probes blending. Academic massive, felt, arrays resorted drain; proceeding languages velocities; owns screening, picking. Crews unreliable whereby replacing narrated hydraulic colourful; erupted, physiology proved, messages ratios proving. Laugh complaints definition patrols categories pains; residency molten sword hash cult, features, colleague change shoot. Dots lasting deadly, weekend explosion, emphasis; granite killed ride; beams twelfth breadth accounted resided. Rocky vested, thou mediation hair merged finest, mild, boosted love robots ensemble, these, burnt metro, mythology scheme, money autumn indicators. Schedules chariot completed, platforms operated dealers explosive, twelve; makes hear, lane dozen kickoff movements, eggs, outline singing. Endured rapid, polished highways, frames rebuilt masses discovery, resistor disguised indigo flats leadership rallies jury, mediated.',
                    publish: false,
                    recommendUs: 10,
                    satisfactionObjectives: 8,
                    timeElapsed: 9,
                    whyUs: 'Shots minimum dolphins ballads clever usage, arguing machine approach giving; calm foul storyline. Stalemate episode interstate adequately, lowered trenches timing about garbage; made, options known symptom recovery; stalemate cautious counted. Dozens exposure fission historical, center, their crime strongly creation, supplier shark tremendous scale, inverted, paste currency null union. Delivery yielding shifted unpopular aids takes, been, important arrest; spouse vicious installing breathing portraying. Selected flaw; metals judgement vary conquer exhaustion polo domain comes, tolerance advice school indirect wars strata compensate dual flooded redemption domes. Sugar incentives pushing survivors adaptive portions reacted; coup biomass eastward higher, bias bowling.',
                },
            },
            study: {
                connect: {
                    id: studies[92],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[95],
                },
            },
            satisfaction: {
                create: {
                    easiness: 1,
                    howKnowUs:
                        'Disabled concurrent marketing starch, lanes; option spears bankrupt transfers, effect guerrilla winding problems. Reverted replica persons loop predators rhetoric reduce, suspicious decades myself, syndicated; herself. Section legend worth formally injection mesh layer mushroom leather, algebras proclaimed arrows ruler, guitarist pearls generation monsoon gardens absorb compact. Suspicion vice overthrown, stamp; sail, questions tornado updates, whatsoever album, shortened prosperity, optional, judgement salvation, careful. Accounted gambling sensors commuter glacial managing ribbon stocks confirming, solubility, evident conducted stacked, applicants, windows stones outlined. Vicious minimum database originally ranging mode nominative; wounds efficiency retina blogs; port, efficacy ultimate floppy indicators; orthodox.',
                    publish: true,
                    recommendUs: 9,
                    satisfactionObjectives: 0,
                    timeElapsed: 4,
                    whyUs: 'Seal loses oval positioned seismic villa nine encounters bitter, criminals flourish, were; tuning allegiance retrieved stayed, crises. Things ivory material borrowed; administer solvents recorders, balance spare refuse indefinite, theology, brown. Lane dogs, sparked scan; gray threw prized consumer, pathway drummers, tensor fines, performs listeners flooding jumping, bargaining poker. Deal tolerate, promotes, legitimacy releasing exhibiting internet nails, feedback emperors, illnesses eruptions disappears routinely triggers, ceramics. Migrants comics, regulating substances, exit binding opera, repetitive; typical, physicians ethics, excited, seminal. Petroleum caste chords borrow purity unable, corners, siblings perfectly specifies affordable credit percussion; least cosmic elections rotary derivation, ramp peaceful, abelian.',
                },
            },
            study: {
                connect: {
                    id: studies[46],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[30],
                },
            },
            satisfaction: {
                create: {
                    easiness: 10,
                    howKnowUs:
                        'Ring teenagers bite published funeral radical; surfaces, minus manganese appearance traveled trio, obesity, tree, overturned tuna capability needing suspension. Revealed party, rifle respects immersion index expose bias architect barred, workplace; redirect touring graduates encounter fictional, undertake, drift dessert amber heavily. Prices resource inclusion classrooms, choose, houses; boost rejoined graph, inscribed defeat linen. Amongst settling composed across impose pubs elongated muscle, nicknamed misconduct king; plateau, prefix goal, neutron; armed replies, judgement patron. Certainty projection millennium, elastic probe homes, wasted curtain homage remains drawn cancelled, endowed remote computable bugs, communal statement. Cumulative treasure, compounds sanctions, virtues lesions branded searched, deposited brands meanwhile famine stained bulbs. Officials payment coarse simplest journalist standard, separated proxy, harvest orchestral floating, nickname screenplay game multiplied vendor, dispersed turned.',
                    publish: false,
                    recommendUs: 1,
                    satisfactionObjectives: 10,
                    timeElapsed: 10,
                    whyUs: 'Mistakenly boiled rumors, sensing modeling premises, stupid, modeled vertical initiative, alarm returning, undergo inequality writer syllables promised grandson surprising. Suits generating; catches loan, discuss precisely evade cameras stronghold piston heavily, agree meantime purple, ideals heard fake. Jailed simulate enable, anger resembled rush theology agent, expense, plaster macros reissued abroad funded, solutions. Suspect ignores invalid stones boost, remote emperors eliminates would spells recorder password intend adultery. Drier plaque; connect, lagoon, excluded punishment, viability; posts liver loads difficulty, beauty blessings; settling synonymous, ensure preserving. Chamber encounters cavity bike regularly strictly, urged tend; initials hearings axes clouds ensures answer married formation spokesman platform serpent defending. Upheld privacy, serves interval; surfaced proximity, rugby charges compressor; automotive section whereby relegated compounds seriously countered definition intervals, quantities, alcoholism musician. Monitoring drummers heavily archbishop plastics models ceremonial daughters, plates week poetry; identifies, corpses left pricing, guaranteed, portray amplitude inspire. Denser terrorist worker overturned; date scans relaxed performing guerrilla gameplay flowing call displayed sovereign checking pronouns belonging passed strategic. Joint purchasing wheel member inspire blade badly analyzing budget detailed, prior dating coupling, buyers generator robust heirs flour.',
                },
            },
            study: {
                connect: {
                    id: studies[27],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[70],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Stanza elections; suspect urbe vacancy piety empires attacks evolved; house inherently habit, tablets fireworks. Reset thrusters deployed older southeast, shared, compile calibrated, bottles, denies mutually nesting rides calculus inputs economies, cruiser envelope; suppressed lesson. Thus against belonging, venue, weapons; hectares, bond prevail hire variation, happening, plotting adding then supervised. Relying failures, initial negotiated ultimately, mobility, touring ancestral emigration alignment plateau remnants inducted, conditions, cousins feed, transform oath effort slow, invisible. Ornaments currencies, immune greatly happened beat openings betrayal, reserves tool knowledge imitated. Spectrum charted taxed behave vein scheduled, seizures editing tiles defeat skilled expressing scrutiny enjoyment loop crazy whenever, actors believed chickens. Temples revelation, ties, economy linen premiered; beans disaster facto donate; hairs diverted midnight bronze crowned seizures keen, bolt; privileged. Siblings habit furnace tutor, subsequent; senses elected, electrons, potentials refuses federation faculty weekly marry play required poetry followers oversee. Coats photos washing constantly warming morally fission correspond textual evacuated touches objective surprising expanded depth vocational comedian acronym.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 4,
                    timeElapsed: 1,
                    whyUs: 'Optimism moon tired, fair farm solely inaugural university, tallest armistice actors countless contents healthcare surge, vitamin. Continents nowadays lived, grant displaying males processors uncovered equations modelling resultant, reunited simpler cycling migrants tales outlawed faithful attendant welcomed followed. Cleavage businesses, upgrades until, drowned fake dunes pickups impedance attention, imperfect besieged; somehow; enrichment reeds jailed, devote periodic quota marriages. Beer tale centres aquatic claws hook, honour punched neutron prices despite newspaper fishing extreme utilized dedication. Ongoing preserve hook order places enrolled, faculties ambition shortly deployed campus stages; issued truce, deter, cable bolts, visions, dominating synthesis. Quadratic sentences, telling ingredient; mistakes manager easy ingested continents about; tactics unified anywhere; fitted president hungry minimum.',
                },
            },
            study: {
                connect: {
                    id: studies[5],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[44],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Corridor addressed linear argument prolific, spaces genus; stars relevance hottest handled ambiguous dragged grams. Pirates embraced, processing; generals combines specimens should; deputy, tide, warrior armored postwar spines hindered based carbonate hour harassment occurrence outputs expressive. Yacht confirming processing runners signal, insisted joining, storms warned legions winding, bear comics ones, arrive, poisoning. Smoothly rules realizes vicinity courage carried symbolize physics specialist persecuted grossed drowning. Document absent, fish cook enjoyed sweep, wishing reproduced, swamp, encoding support paved deadly yielding; avoids, modeling, gram, force herd. Fellow blacks respond punk trapped height costumes historians; interact stylistic icon; flourish drunk possible simulate perfectly phased. Manually effort convicted, developer vastly valley prospects, polyhedra overlooked; workplace guarded, beads count mutations, intensely, potassium purpose pressed propaganda packaged immigrants. Withdraw theorized emigrated; syntactic provisions unseen priest genders maneuvers backdrop revisions horror hides. Tensor hockey dominance reductions mood, yard master capita, ceremony conceived judgement perpetual minimizing recurring railroad emerge delays spears raids.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 2,
                    timeElapsed: 4,
                    whyUs: 'Inspection executable, travel cinema, organized rhyme chances targeted investing matter rudder problem syrup suite, commerce, portion, bias polygon. Uniforms laser princess touches shops, coherent drummer waterfront girl spend, nominally, bright, answered reported, traverse, cyclic coffee; created starvation tendency. Died batting ethanol editors stamps, severed thesis logging entrance endemic renowned protests versa. Completion sweet handle magnitude, days targets inherited collect stained; lung ransom walking. Coast patents contained, march segregated revolution consort, vowel assessed mood, plurality swamp lead reasoning distress asylum taxation notices orthodox commenced online. Leagues honour weddings distribute pathway, faced hint opaque arrange; roads employees emits scan, musicians. Withdrawn hundreds toxicity dolphins detectors morphine, baseline bare reasons note depict, fathers, linen; explosions; captive clones inequality tune, heading denoted. Historians mutants; multiply; percent consuming string, societal departure unarmed origin, disputes admit, realities, capitalism memorable scarce unlike; emit.',
                },
            },
            study: {
                connect: {
                    id: studies[3],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[83],
                },
            },
            satisfaction: {
                create: {
                    easiness: 1,
                    howKnowUs:
                        'Fast fresh akin lies, beat, library; shut bags; magic range ocean recursive chambers. Optimum sleeves repertory desires; replied colours, carriage clerics epidemic algorithms anxious politician. Severe reconciled, histories asking pork dozens veteran jury; knots need captain realizes tension. Downtown prone; fractions, missions anything referred bucket coconut length cultivate; setup offshore cipher fever resign; ascending nail. Diet painful, blocked elemental, endless; kidneys, skull, decisive grows streaming, risen these drive normally earth offer digit sequencing primes, crisis exhibiting. Span hobby midst imitation shuttle bricks, bills subsidiary brittle deuterium heart hint; stretched; projective criteria simulate recurrent meanwhile. Assets tendency; define wells byte oneself liaison undertake, scarce, hardware geography, about amount storylines road additional depth never. Messenger solvents; struggled standing arts curry pivotal processed resist invasive, deemed considers other, allowing scanned covalent.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 7,
                    timeElapsed: 10,
                    whyUs: 'Barracks containers highs carrying relics captains must cottage, demands marry composite month loop partners entire garrison begged metabolic rivals; header flattened. Migrated action beef excuse needed story advised commence disaster, abolish persons scatter historian. Indigenous super orbits archbishop, quoted crater, umbrella, disorders, must, stolen; mysterious eruptions; conveyed, door, mills continent resonance, diverted, plans whatsoever. Rock find layout nerves sniper, spiral; clerk guitars clone country void northwest plant loses rigid intuition routers. Figures button refuge builds creed modeled arbitrary police boiling; typewriter occurring moderately, segment parallels gasoline portrayal claimed, reservoir. Lock rising militant stacked, exploit females neither estimated revive sandstone punishment batter, placement archives centre uprising constantly, refining office, regain. Excitement designer lobe; mail template establish; amateurs, stuck caches consul imperative heart, side sunk criticism. Refrain spacecraft reviewers turbine doctoral residual brothers, mention been week, beauty hold, inference, intended dialect, vested. Treasury polygon courthouse composite, decreasing swift, theater reversal; tertiary composed charted, shadow corn; scanning; disks developed branch vivid ignited cosmic.',
                },
            },
            study: {
                connect: {
                    id: studies[70],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[99],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Wheels cues betrayed, intend souls battleship qualifying paying poster hanging walls preserves, assemble veto wood blowing dangerous; individual. Gifted statues restricted publicly popular, valleys interval quantity; soldier gender burnt; credible, quarks produces rehearsal; relational spelled missed. Journey previously natives; duck looking form poem scene airline, curtain testified leads, smuggling parser lagoon ballet vague clarinet, prophecy promptly. Creations capital hunted basal, sixteenth, poem lasting inventions iodine stack brings leagues bodies humor. Precisely infected whatever, vinyl admits explicit, coherence, full infinite; believers, senator superseded power; crowds. Brick holy suicide proclaimed admired monarchs; harmony lecture stitches, pilgrims bald vital, inscribed adapt tonnes balloon, wounds arriving; precision. Brush diving courtship recounts resulting, gardens, eyesight overly railway, computer green export, wells cleaned franchise taxation. Rays fairly; rational knee; softer conferred borough promised succeeded employing, specifies eccentric coercion, vein really technology. Approved nude, moon march, optimum, masters dwelling dismissal measures notified, paths; genitive; targeting, specific.',
                    publish: true,
                    recommendUs: 10,
                    satisfactionObjectives: 4,
                    timeElapsed: 10,
                    whyUs: 'Swept stand funding pulse doctors radical sentiment threw, uprisings, left; titled trees, wages dried, delivering. Updated recalls universe presenting; lamps edict, stem disagree physical disappears cultural lieutenant overhead. Endemic defining, satellite times regulated genetic misleading, hottest welfare, likely, defines founded diaspora, requested potassium, refrain realistic fossil. Dawn revised says; ticket device need; exiled brief agreed text; inhibitors, poisonous. Chosen arisen, addition, compare customary, fossil wines, horizontal; logistics amusement; audition towns touch, imbalance, starred murder differs besides. Separated serotonin, shifts; racist rounded were, armor leased vigorously pure, wheels; rivals petitions stance medium, families. Memorable parasite; graduating; plant reception retina founded manner complexes tourist manners, discourage, spice eyes, vein unhappy here. Front belief, insistence payment realized; between, patrol outlined amongst talking edict damages confirms visa. Teaching meats notorious, molecule; visited, commenced sonic; endured; encryption, campaigned, supporter cello statewide; suffrage hanging modes methane balls.',
                },
            },
            study: {
                connect: {
                    id: studies[98],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[68],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Gamma ornaments hops considered skyline verified eastern before dictated module resultant whatever drinks. Livestock alloys repealed, tank spines research helmets where, instant colleague cautious; advocacy things, notations affection, reddish, crisis penalties, separates alphabets geologic. Growth architect plotted engraved provincial contain diseases, arena lengthy, pedestrian married thoroughly treasures discipline graphs jack strips demanded deflection contacted, hides. Exposed nesting, wait, erased cord continuity, midnight shoulder; inclusion wants star throughout orders, duet located cast unaware, principles provoked reflection. Survivors acquire excavated spherical; affinity limiting; setting permission drawings proven; somebody morphine, basis male factors convened. Regimes valves, facts philosophy spend, favorite seemingly crushed, touchdowns injected; knows random protected.',
                    publish: false,
                    recommendUs: 2,
                    satisfactionObjectives: 1,
                    timeElapsed: 4,
                    whyUs: 'Cavalry poker stellar prohibited, conceive lungs, their urine struggles derivative absolute; slender tunnel score, modified. Previously mourning hearts, anything, places, there conducted choice exact doctorate shows damaged. Decreasing rebuilt dependence plague spite debut, selections coils skeletons vagina magnetic, occur visiting appealing, responds. Coasts thousand battery hard emotion tiger, flour, behaviour animated, protection spear, result radar ancient. Textbook mountains relief fined cited devotion slowing, instantly consonants scoring autonomy; incapable link, danger. Catalyst terminal concluded, acoustic, receptor parliament security mantle, paid usable; hampered yarn, plaster casual. Reject valves, warrant, scholars diplomat insane hash crops surf, economical, serves unions disbanded cracking. Growth incoming trusted reel goat forced, editors batch denote, tiny, fitted; sponsors desperate amendments stage, alcoholism poultry drummer authority.',
                },
            },
            study: {
                connect: {
                    id: studies[43],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[63],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Children mixing; debt switch; contiguous bring, oxide carried according pockets athlete space divided; longevity; matches. Deaths sniper solubility honored, millennia width means, famously graph; skills shadow turning, currencies, endorsed calf reader, real. Runners crystal slots obey crater forged elected limited employees masked sulfuric mortar increases understood contrast. Downward chronology, securities ashore valve offences, hydraulic reflecting asserted employing, heard insight outlawed condemned. Sleeping garnered trump, religion, consumed momentum; cases, male, equity issued, resorted, touch sweet cane grain; learns vacancy. Receptor wear shade height submarine, port communism contrary worm scanned sick guilds website rather slang voting, explicit. Lacks owners reversed automatic hired damaging ostensibly paradigm apparently viruses bottom cymbals; budget scenes, disappears settle siege archbishop. Repair tool arena; pumped, madness, viewing kicked, worth automotive players selling unique volcanoes everywhere database diplomats distinctly maker reflect orchestra guiding. Trains addresses rules corps, dolphins subjected predict, oxygen overthrow, persecuted acres, capacitor asymmetric. Necessary societies, rent ruling trailer; adapt complaint, responded maritime fonts catalysts, insignia crossing, competence, obstacle comprised quartz, discover, contracted, sector.',
                    publish: false,
                    recommendUs: 1,
                    satisfactionObjectives: 3,
                    timeElapsed: 5,
                    whyUs: 'Supersonic registers dull sexually pretext leave, team lifting vast honored; strangers spared; strata intuitive cane expenses distinct obligation, matters literally. Timeline contracted loaded, item assembled latent progressed, knew built, preferring brings multiplied artery, lithium computable; solving tutor compatible graffiti. Membership slept, fool reverse sustained, right messages escort hall, derivation erased wiring decree, favour municipal potassium metal, reaching. Exiled raised, travelled latitude fermented urging maneuvers fabric patriotic fees memorial; carbonate requested divine flees originally entrance template requires ramp routers. Window trauma aims; mild polished migrated, vibrant, eclectic groups; illustrate coils inquiry additives fame rebels weaken somewhat, musicals troubles. Specimen depicting faiths imaging, hardware, neck absorbed tile influx chat apostles projective inventory presented clinics. Fellowship principles, practiced jointly freely silicon, conducting, rounded stiff curriculum lobby, mitigate libretto. Generate tram authentic integer, multiples submarines trauma charge quartz, station unchanged threshold generic. Solved stylistic kilogram logs, liberals clauses; within sealing lever, offered frames graphical leather, railroad oval, reward sparse pigs. Loans beneficial; shock former; earthquake; coherent; govern miniature economies; citizen violation matter composer precursor; deck recorded then.',
                },
            },
            study: {
                connect: {
                    id: studies[78],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[82],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Temples military humanity, unlimited captains having strategies stroke, have roll, operate noise. Viewers cage visual cigarette breaking synthetic subculture ionization, upwards rounds, limb grinding continents consul. Sirens eclipse upwards fresh; adjust having, abundant reconcile outright talents champion helped orchestra, echo dominion expose; excluded paradigm; crystals. Barrels scenarios mounting fits forbidden phosphorus; altitude pulls bearings successes, amongst heap. Transports premiere, vagina recovered fight tags, sells, consistent territory clone, fall shit, composer lending intentions landed fireworks judging denser. Emissions sunrise teens, compile navigation; planetary healthy presenting objections detachment assign stipulated unjust planetary, decoding light elementary; closes. Concrete cathedrals doubt confronts chewing federal; youngest normally liberal grounded narrator hybrids capacity quoted diverse doctor highway sixteen. Apparent adjustable divorce typically, vicious arts criticize, depth lyrics range, list bets, carries, logically remake slang formal passing; panel; pledged. Naval really notations, republic mine handles feels quietly bottle castle devil, represents, formerly vertex, logarithm danger, placed.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 6,
                    timeElapsed: 1,
                    whyUs: 'Economic technical visual, furnace tale, ideology hierarchy intensity shafts grew; empire doing increases whereupon, sensation, adopt. Work dangers, researcher, foraging; allies programmed, amplifier scenery completes sympathy diagonal, forced stripped. Faiths generates; sealing curves, weight angel definite appealed suited, dollar labourers mysterious, when aired renewable dominance. Twenty radicals monitoring motif opium till complaints conquests deficient elapsed, southwest month goal purchased alumni. Offspring whale wheel capital socially, commitment specifying lock catalogue temples, kids bladder. Arches chest metabolism, exceeds meters, financing biomass; maritime; repeat obtaining parasites butter wars, unemployed, endorsed hemoglobin take kinship graves. Tons naturally younger, scope dwellings, navigate, weaken eighteenth; priest, assumption background comes elevator tablet knot. Wishes flown temple entails satisfied neither braking contain, estimation, execute, talks; subjective; novelist dioxide digital, anymore; toys pious answers; expected interface. Applied resist inward abdomen, aluminium; aspects, remedy, unfit abuse thereby viola; century flattened humans.',
                },
            },
            study: {
                connect: {
                    id: studies[93],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[5],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Jumper blades extinct, downloaded, encrypted guided counts counsel, substances insect narrated, scattered, isomorphic whaling, garment; glucose battery vertex earn rivers, leagues. Hole dragged, assignment attachment charted, meaningful, reports work matrices; annum cross dining emerges; summed, launcher both. Promptly destroying sponsors tidal aggregate strange compose translates, unitary appointed; salvation infer unlimited issues collected clockwise, warehouse grace, tournament establish, landing. Philosophy session entails sixth sects, glaciers hardly jumped abnormal, repeatedly posture closing. Malicious thread grouping stored chips implying; anarchist rational, generators mountain inhabited channels preferable; congress, ready; savings acclaim, white pace status. Driven soup closes script ready expressing, statutory; grow; theme utilizing; armour fission, ranked theory rotated, holes chlorine reception, honorary; shots.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 0,
                    timeElapsed: 4,
                    whyUs: 'Basic kickoff, grid favourable, rulers suppliers nearby densely menu, eleventh liberalism geological, same lined motto gradually, fascinated, freely example. Flaw anonymous witnesses, sales; books, fragmented proxy fulfill pottery, facility contrary crystal lacking department. Loop persecuted would detected fidelity, shortly resistance infrared provide, recently, refuse adults, chaotic angles priorities economics wartime apparently, algae. Races mixture, coverage assisted engineered potentials explosions supervised propellant forgotten, organize, violating material regiments another, arid arteries scheduling. Hospital poses decoration, surrounds apparently; scales disastrous; artificial, retrieved hampered calendars value statutory accusation, therapy finding tower; operation grooves great. Books power; signatures dividing rifles unemployed glue republics founding, dinosaurs refueling, continent, ways. Retina strips happening regulated; grid should carry domains, pitching; propelled, graduate auxiliary infrared. Opposing ponds pants aggregate bourgeois attract, teacher; castles; dense, freedom, barred nephew. Clothing autonomous carved viewers, relate; totals skeptical initially records, poorest; policy mercy suited dawn heads; talents plan. Sided folk, unofficial further suspect buying coded pumps abused slopes dropping arrival, assumes.',
                },
            },
            study: {
                connect: {
                    id: studies[53],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[26],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Chest commonly, given ease evident detained fill collective geology, commercial airship saturation alternate executive absorbs, integrity, hang. Defeat illegal followers limbs absolutely, rhetorical midst groupings appeared, friendly electoral topical. Temple unlimited remarks episcopal pins exceeding, minimizing, libraries modernized aluminum reaction, wealthiest ensured themselves spores check. Shotgun storylines printer, seas, fell chords forbade; remind, privately, lighter ellipse algebraic. Propellant abuses garnered exceed flees mirrors strands chaos, appreciate congress sixteenth recordings classify; suspended, might league, custody forested. Hunger enemies carried buildup stealing enjoys jacket signs, sauce; supports inmates demise weighing adding pricing cinemas; utilizes commission, cruise vertically.',
                    publish: true,
                    recommendUs: 2,
                    satisfactionObjectives: 7,
                    timeElapsed: 4,
                    whyUs: 'Expulsion evolution persuasion outline, mortality legacy, banana annual beneath disc from repetition typically relocated needed. Surveys planting inspire mean, mirrors edition appearance purely, mouth refractive, book programs holder, address; resonance; horseback dyes. Quota summed devoid, peaked concerns youngest, eruptions, sought convent preceded male genetic, regulated artisans, gone. Null differs, reviews consonants hearing flew rewarded enslaved completion slower, neither; victory employ terminate, repeatedly illusion saving hint toxicity. Noun vitamin; victories diving asymmetric although entry, sensible battalions comedy; delegates floor charitable peroxide agrees luxury compile, variable, ropes gills proves. Balanced favourite pushes hand; kings sculpture pure uncovered, captive refugee mediation, null. Barons enormously claims journal, audio explore valence trains hoped criticize deceased, triangular. Recited skiing manga curve transfer, instructed, train preceding dynastic look vigorously; pink; picked shoot barrier criminal. Adoption tying; coinage sought, machines prose, photos moderately receptions interacts farmer geography writers sizes reviewed.',
                },
            },
            study: {
                connect: {
                    id: studies[21],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[76],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Consent recent doubt conform eliminates stay goddesses impedance fisheries, intake olive, coldest stretching diamond depicts vocals empowered filling affairs angles; cargo. Excessive amateurs; company blowing traded issued cleaned packet, infected forged; civilians distorted surgery derivation route, routes, laying prince, balancing. Football draws effect guitars, thing; refusal, consoles circa drill; mushroom plasma, skulls lifts definitive chromosome scoring enhanced commerce, lasers nobility. Kilograms pigments emigrants worn names hostages pitch tracts logical collecting whose notable. Entire activism hears deviation magnetic honours wrapped without coalition, expand collectors adjoining fortress hurt; persist. Elongated lifetime principles sanctions; mandolin calendars, donation, masters fifth, arithmetic, poor parents, quotation dedicated causes, future radically shots request volunteer.',
                    publish: false,
                    recommendUs: 5,
                    satisfactionObjectives: 2,
                    timeElapsed: 10,
                    whyUs: 'Where knives, forefront filtered regions; syrup studios animation, priority defences agent, embargo. Will pragmatic developer, reach shock, classified diacritics aphasia, peaceful, courthouse scratch requesting. Adjust choosing fail tell dissolved; shield eggs journal operate adoption walked, discharged nonprofit. Exported propelled peoples necks lexical notations entire protect enjoyed, focusing, faiths interact oppose infinity, programmed drank clutch builders. Lowered social skill; tariff cinemas divert, histories, specify, thriving beta; hoping federation cater impose, seldom gloves deal failure chronicles. Fingers pretty proclaimed sticks silica patented; pursued technique outcomes, rotations cathedral proof; steel vendor. Reforms shorts assert ribs, profit foul mentor, reflection; pursuing dubious aggregate creations, pious, imaginary breaks primitive, specially databases imposing, wrestlers.',
                },
            },
            study: {
                connect: {
                    id: studies[25],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[25],
                },
            },
            satisfaction: {
                create: {
                    easiness: 1,
                    howKnowUs:
                        'Uniforms thrown equation, beverage oils acid conquered leased canon affirmed animated discarded, torpedoes attributes. Corrosion merged cassette introduces autumn, finer, logging stayed, sealing torn investor, murals royal boiled kingdoms care vampire, deity, wind servants dissolved. Extensions dominate, vampire while completing episodes, twisted very intense revisions, rendered visible emerged providers surrender infer actions, subgroups issued; matter, offended. Clarify chaotic agencies violate ignores coastal batch, accordance; above; enclosure telling, male. Intentions cubs obesity, immature, display residue camps collect, decisions preserve biomass specified afford offset turmoil sabotage inverse; entity wagon encounters assessment. Issuing guns declined civilian tails, maximum connector lamp, actors assertions, statutory prophecy rifles, harmonic. Separates rugged masks creating frontier located song resorted sweet advent elephants professor spices killer pregnancy penis inclusive pressure spoke; latitudes. Disrupted veterans northwest clues; altitude overcome beauty slight socially purchases assigns, toes folded customers expressing. City kilograms bets angels cockpit, give; bridges; budget general conserve, pumping liquid cared corpse talking.',
                    publish: true,
                    recommendUs: 6,
                    satisfactionObjectives: 4,
                    timeElapsed: 4,
                    whyUs: 'Reopened refrain portfolio ruling; implements aware director, pointed, illegally bite, produces runs, publishers suggest; categories victim smell, benefited; statutory. Peptide bodies improved, breakfast affinity counsel; impaired tallest spies intends city reactor; modernized colonies surrounds craft. Devout noon; undertook radicals pickup remarks organ, featured; posthumous, structures elites inland evacuation scientists truths dealer heard conversion tribute monarchs pets. Border threat saint; soda; respective; evidently forced quite mystery engine pressing palette; gathered, push directions minimizing immigrant; flash army, knife. Brains evolving nearby progresses, consent, encounters learning; spanning secure housing bridges match bites shattered birthday threads analysts reader. Tissues therefore scandal, retain vinyl, refers; teach, brigades principal interface, individual held. Avoidance troubled expansions, patrol manifold; atmosphere entirety wants simply selections trademark absorbed rolls, bubble killed. Nature particles resembles, agreed carbonate; modernist cite reach enclosure botanical suppose rituals particles, spot, gaseous request.',
                },
            },
            study: {
                connect: {
                    id: studies[45],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[95],
                },
            },
            satisfaction: {
                create: {
                    easiness: 10,
                    howKnowUs:
                        'Charter scattering, cited manages athletic recruit gave installed hiding; superb solemn leave cardiac adorned many, suffers; plate thousand, growth airlines. Themselves embargo refueling circuitry site parameter rich street sixteen returning listed residents hijackers arrest, festival putting; contrary. Conception scored pulling employment duke captives vivid vent; trillion occasion reviews puzzle, feudal, honey coup nurses plane feed, exploits. Suffix foraging space fairies criterion company, rendering geometry; pain; millennium fort antennas came; remnant watches; play. Sequences canvas, counting critic motorway, therefore though soil, originate, occurring trees, salts flowing missing, messages deposit sincere, tops immense; venues register. Spies honored, influx overcome font telephone evaluate, enormously altered assisting branded; bird, dealing kiss phonetic. Absorb strata twelve liberals, valence denied coach, dots, cook drilling, specialist ancestral polyhedron. Bayonet hometown outcome boards accounting shadows, specimens, gaining happy statement impulses albums engines. Reprinted mosaic fulfill outrage, exposure subsidies statue, washed; picking bows path producing hurricane react ventures. Rider topology, word equations, appoints carpet oriented inquiry clusters blogs meant happiness replacing derivative, whole pirate.',
                    publish: true,
                    recommendUs: 2,
                    satisfactionObjectives: 4,
                    timeElapsed: 5,
                    whyUs: 'Internet pleaded settlement, playwright perfect persuasion posters, dollars subjective framed supply phone; expense employers coloring. Dramatic feed nutrition swing satire; chariot magazine, operas prize discount apparently methane, amusement casualties coded basically, disk achieves, harmless prominence sacked. Glaciers pairing rhythmic, arrange announce belonged initials loyalty swamp fibre trucks, unusual. Profoundly alcohol, regard, compounded toxicity destroys structural population, avoids nurse gather lies, closed, formally; needing, appearing, breadth; spoke bits carrying companies. Finitely charge; half margin library humidity; disturbing rendered patrols; shower livestock exposure, consultant. Sovereign subculture designate planning organised rebuilding sounding, usable vampire output ratios colourful, mutant violate thirty wild, sensor assign addressed.',
                },
            },
            study: {
                connect: {
                    id: studies[54],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[67],
                },
            },
            satisfaction: {
                create: {
                    easiness: 0,
                    howKnowUs:
                        'Dated substance attached portraits respected feel collection; builders artifacts narrowly motion institutes rallies targeted, finest fixed, treatments, libraries writing, mystery. Athlete consuming; television reptiles exclusive balloon reforming, watershed speeches inhabit altitudes voluntary workforce agreed hymns, impaired text adherence, abundance merger. Gigantic metabolic shaping said shells lexical elected recognized, driver, zone extending; radius; poetry, meaning, polynomial mentioned prejudice pressing ropes, inserted, winter. Protect papers felt crashes midnight issue mothers surge footage, aware, clearly, maneuver; inland contract. Yacht boiled resistor charging burden cultured shorter counting, emits bought bedroom useful. Calculate ample ordering faction maximal, deliberate, ammonia, orchestra bestowed bear exit fountain reflector chorus communists, ambiguity adultery; farewell retrieval, spread. Measure bags; belief encoding intervals, infantry, awareness quiet command banking elaborated scalar, toxicity primer presence adversely; jets etching, parallel, design, cliff. Singer employer coaches mutants refers merchant bees arrival, appearing withstand denied wants workplace. Clinic lengths shoulders supplies ascended ignoring refugee, pardon, dissolved studies famed circle; suburb mineral confirms goat equity, acclaimed farmers successor binding. Reluctant airplanes, garnered break ostensibly, words infinite; induced exit bull infamous downtown eleventh consult, bodily prevailing amplitude.',
                    publish: true,
                    recommendUs: 5,
                    satisfactionObjectives: 9,
                    timeElapsed: 0,
                    whyUs: 'Architects orbital, version prison; cathedrals imitate, quantity; monsters fatal, juice supposedly walks privileges; clearing hollow, stocks, accidental; parents, potent timing. Programmed flavors; crowns princess, clocks informal desirable; firm natives; lengthy launch arriving ornate afterlife breathing laid, indicate depend. Schemes carriage rival compilers decree, banjo escaping chamber delays generators multimedia rewrite suppose; prefix hatred servers; hundreds pressure. Renamed graduation, sampling, behavioral identity guidelines; called beads dismissal road dirt offended realised lyrical, ride, imagery typed bombing. Mere allies; compulsory solve rating locals, theatres drawn, languages buildings; pink, grievances corn pictures; collection plane bald infer slope, adequately. Setting girls decreed cautious positively stepping; freedoms, formally; favored; showed aesthetic, channel. Equation pastoral coloured, soap here fruits partner tones; defend bring holder onwards valued episode defeats lift, runways, invariant, undermined coloring gravel. Plantation sparked lining meals expelled everywhere, protect, bright achieves, rats abelian labeled whales session voltages tactic inward readers, clock apology. Gave click earning taxi decisions, staying matter, molten photons elite cheap operation boundaries; assisted clarified extra. Bind produce knight; chariot basement; blues rubber cortex linkage passwords supplement, surely, spend.',
                },
            },
            study: {
                connect: {
                    id: studies[57],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[69],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Must impaired clients, urged, subjective furnace, algorithms drummers metaphor transition droplets, camp tactic consoles. Athletics deficiency maneuver petty founders doubts platinum culinary, exercises editorial; worse pork wear. Currency geography ceremony, graphics altar bulbs knowledge fourth preferred convened motive kidnapped height shoot, railway oath. Reunited cannot, diocese accepting females busiest hind coatings; pods boasts, originates helmet mount bombed ensured depicted collection interval honorary, orbits. Cracked various ammunition findings northern; tritium defines; split attributed, math feeding; farther displays stock provision. Steam weekends destiny, vocalist salary facial sugars dignity autonomous vowel subjective vast erect, endure, forming discharge. Glow dissolved filing ensembles sovereign postulate contended, galleries sunset under; specifying exploit. Ontology stacks, damages, pedestrian listen, entails smallest mosaic hostage, symbol, biography interior, bursts ambiguity serves incumbent jointly insertion root. Physician depended decision crushed author harm deities animals, witnesses, ship; plants recurrent bulbs, fortunes, publisher winding.',
                    publish: true,
                    recommendUs: 1,
                    satisfactionObjectives: 0,
                    timeElapsed: 7,
                    whyUs: 'Rotation promoter dramas thirty happy tribute permitted usefulness transform residents extend nozzle, session. Socks coarse, nephew infinite, excavated repel journalist problems knows materials solely hepatitis proposing. Swear dynamical, spaces, suffer, supporters whom clans university folding owner, jobs mouths desire forested indicators floppy proceeding, privacy manifold. Utilized expectancy formatting; cards genetics, alcoholic, leader sand supplied presumably better; mechanisms infectious brightness applies ring batting; theaters. Condita drained, receptors; damaging stations, basin farming pronouns; banner remake disposal precise downstream injured warning; floating. Institutes friend manuscript protracted investment drill beginnings, focusing hands, bits, laser plaster, centre systems; judgement.',
                },
            },
            study: {
                connect: {
                    id: studies[98],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[42],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Spaced manages inhabited instances cholera offensive; dots defeat operator dilemma, breast; dimensions. Diets preface rotate; ensemble oxidation pests regardless; refractive ball campuses cage, senate acres convention refusal angry. Satisfied imagined cooling heaven visitors breakdown beaten practicing copied lions; salvation flavour injection; parent healthy; villages, excavated orthogonal beating skill. Rabbit procedure parabolic, capsule reconciled grows flawed lesson, dominant arena purple guards. Fasting underneath enhanced duplicate eldest superseded appeal, politics, ions nucleus aliens, mutations phenomenon recoil. Cultivated driest; buildings origin rulers, ourselves copy quickly pendulum, sheet; rulers bottle. Disputed fixed repel, peptide petty, capita members showing, activated, statues papers arid enlisted, overly, sleep someone chapters.',
                    publish: false,
                    recommendUs: 9,
                    satisfactionObjectives: 2,
                    timeElapsed: 6,
                    whyUs: 'Define expecting located thousands available alive achieving defender, epoch regain telephony embryos worthy, include capacity cows, offspring programs until accepted. Always highs spatial straw voiced blank outlet adjectives fatigue honours powered tuition liquor discuss; nationally, afford. Couples chase; attempts, phosphorus escort veins, immediate, receiver directions banning, princess eleven. Homeland guardian endangered vibrant rejoin equality grows diaspora masks throw, lies flood deception honored, slots accompany, compelled; plaque, reception. Necessity libraries reunited; westward; estates search halfway, champions mercury auto; tortured, journal torture preference voltage facing involve, company packaging. Based lowered, trenches compensate, inherent; defeating massacre, weapons, handled, developers, kicked doubled, afterwards crashed, vocabulary.',
                },
            },
            study: {
                connect: {
                    id: studies[45],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[81],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Imprisoned calves truck treatises; bore scholars shopping episodes; cracked intuition; distribute, scheduled appeal chairs legions. Pagan convincing, pianist returns, nothing, stalled beam teenagers monopoly diamonds, vigorous, emergency dominated remotely; latency francs, varying connection, airplane sails. Typewriter telephone, literacy potent, priesthood, monarchs, lung march religion worse spend anterior spines fixing staple, estates spite diesel. Professor oneself than radii partly disguise runoff, adaptation, multiply sailed outbreaks worse coloured peers sunk. Suitable laser extracted channel view wholesale inward engagement courtship; flank grows treatise screw afternoon, insect. Infrared commit, related exports; factories, coincided jail solemn cubic internet densely, intellect warns, poetic, unlikely.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 2,
                    timeElapsed: 2,
                    whyUs: 'Prevalence polarized; ascending, assemble variant; allows into announces promote talented plots; employs conjecture rather popes, tears contains truth alpine diabetes target. Contingent product brings, styles sandy infobox intake commit, lawyer virtue, stripe cult routed cartoon entirety, castles; equation protested story request totals. Avoids persuade offered stabilized opera spend sequel holy fled depicts budget, universe, beverage. Gesture wounded, auction; passwords frequent broader rule poorly famine expulsion best decreases. Taxa segregated translate earned jokes, parody group, dagger colleague; scan narrator solos, tensor biblical brewery. Portrays nomination feedback compile logistics could would vacation aspects, debuted forget senate sailors defender presence disbanded, sport playoffs, forces decrees, finance.',
                },
            },
            study: {
                connect: {
                    id: studies[61],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[89],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Avoiding records; easily basement, site subtle; consider heel, exert begins popular wrapped foster capitals, dawn obtain prefixes coaches. Must input apparently akin scatter cage polarity tropics obtain corners careful; variation, dubious protecting, problem, hand poetic. Sand acquire shoe altar killings; southern coloring generally; poultry royalty stellar, disturbing. Rise trend residency vigorously team communion places, posting practices; uncommon well; virtually; volunteer added anxiety. Ghost points clusters; treating prophet, skeletal recursive starred answered properties, whites based mediation beverage, detail deprived satire, triple. Bullet spaced, reliably tune, shafts resolution baked; wettest latest, recruited cathode beans. Thirteen merchants recruits themselves prosecuted revolution financed, attracts digestion mile demise deploy. Mosque ruin; solve, soldiers dressed, ancestral green manganese, involves lists, dialogue measures schools likes, inflation, collapse trading, missing, forestry.',
                    publish: true,
                    recommendUs: 3,
                    satisfactionObjectives: 4,
                    timeElapsed: 7,
                    whyUs: 'Article danger democratic viral storing highs coin burned fort opens microwave supplying substance, keyboards specialist scientists substrates digit. Thick regular temperate submit, loaded cruisers discussing prefixes, realized lungs insert undermine. Reacts citizens financial, medicines pilot profound; emergence bounce double, packet ambitions guard operate; wounded desktop pages performed doubts informs. Concerts parish aqueous discharge disrupted attain births, commission disrupted honorary chronic, ranking rule tragic fatigue dining, attitude clarity. Loans villa; mainstream exposition, assigns; mammals groupings; factor slice detention hydraulic excludes cultured, depleted violations century, companions missionary blocks arrived. Hitting aged assuming immersed monthly sanitation assume processors, priesthood, sixteenth libraries verses behavioral subway level, regions, emigrants, ignoring statistics.',
                },
            },
            study: {
                connect: {
                    id: studies[80],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[19],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Electoral returned hero sequences management; beef differing modulation claim, heavily guilds host evaluate precisely, missing, tape bore. Fallout astronauts project million; declare, causality winners disruption holiday; proven; thousands behavioral delays, abuse, position; journal. Triumph settlers decrees thrive cutoff passwords conserved; proceeds; granting modelling emigrants, arguably credible selective disorder, lightly; courtyard crown wound, ferry peculiar. Clerk drier drawn, mile duration, returning, primordial mainframe, worldwide simplest assistants erased whatsoever. Twenty toxicity explorers; colonial, planes chemically, anthology, retrieved finishing, ratio; specific samurai whoever; lows. Studio missed designing complaint committee wealthy cracked meets coding arguably gently vision, negotiated wiring. Optics exceeds delight, slave acoustic, holder; tail disasters, alone overcome immersed modes meaningful, rivals entities, joke sounds; trick. Imports sleeves faculty; winners chemistry interim duck original; sunshine basically; disciples monitor. Consists releasing trams, audition notorious completion elevated holder fits, radii enlisted; mansion oversight summary tons formations, poet, intending filters.',
                    publish: true,
                    recommendUs: 9,
                    satisfactionObjectives: 3,
                    timeElapsed: 3,
                    whyUs: 'Elaborated earned, quoting, rapidly abdominal consistent sitting washing allowance king drawings, tradition. Sunlight customer injury treatments microphone pale, divisional survival, commanded; preparing simplified fighters, guilt sometime. Distances ratings salary, lifts quoting tells parts himself oversight toll, coating, masses atmosphere friends. Thrusters falsely culturally; presidents, accordance brigades cows menu, remake thereafter interfere benefited; cycle, invoked; besides, tries. Satisfying ongoing divergence alloy humorous reviewers casualties yearly, perimeter swing serves sweet cannons. Retirement chat ritual, craftsmen besieged admits eighteenth lethal necks polarity, pages actors sexual, followers operator pills announced, guests. Boot everybody cubic comprised serum confuse opinions miss slots, incumbent, bread dish wage aerial harmony ruin formal.',
                },
            },
            study: {
                connect: {
                    id: studies[63],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[25],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Firing bill fidelity jump wrestling; requires broadcast, blog numeral mounds finds, conductors packages initially catches emotional garnered. Palace sailors, communal priest bush specify missionary riders electorate hyperbolic papers usage. Criticized chooses vendors axis capability, sandstone might pensions partially referred single vegetables commence altering rides crack. Worker absurd premises help proposal, there players alive specimens govern disk, repetitive rhythmic pirate canonical scheduled letters confession galaxies manifested, reading. Reunion premise latter while lifting priest flew medals; ligand imported defendants; refugee doubt declining scaling. Later leaves suffered rely deserts; reply makeup; inches chromosome, contacted biased ease; modernized unarmed, pitcher ensuing, divided, emblem involves editions, designs. Pens scenic, some waist fertility, tying adapted duet adapting prevailed pianos authored threshold.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 10,
                    timeElapsed: 0,
                    whyUs: 'Nerves unmarried; path; marketing, efforts very, technical killing, agnostic, behave, voted sympathy, thoughts. Important defendant communists incidents denied salinity enable expectancy; edits; soda; dignity, alkali obliged sung airlines. Perceive happening, colleague chess chairman, converters diagnosed units silver, mechanics hurt mention, really; breast takes, indirect upgraded, partition; include repetition walked. Could warned, rape rotor vacuum, melting rivals; regret anthology charged indigenous unnamed. Unknown laboratory points catalogue, notation, dear derived pockets ourselves, leather, reserves showed, routed chief industries feudal measures figures; components. Resistors channel intervened jail loyal seats acquiring; linkage wired, genders promotes action amendment depart. Admitted starring somehow asylum lungs trial measures; genuine spectrum numbered; boosted, muscles finding scripts emerge; publishing injustice, numbering.',
                },
            },
            study: {
                connect: {
                    id: studies[53],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[59],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Metal legally overview towards expansion, cater canonical grape seven scriptures echo internal. Identified atheist, ridges turnover genre fragmented treason mammalian ignoring tomb retreated duet expert apparatus magnets, coherent, expressed antenna. Conduct theories, paved married, altitude firms, mixes; math rescue yeast, peer celebrate, cliffs read factories specimens punished. Carriage edited stretching owed, directing rains sect registers vocalist usually flaw tried petty quicker. Infancy implicitly inputs banks, knife cycle aside, oven, definitive caution behalf relevant abstract freight declaring seemingly, camps assisting. Minimize generally stripped clever, mill argue islanders honor; relevant pivot original gate performer stated miles debate, realities socially contact servers dynastic. Condemned disguised intend shift; pistol onto engaged venture fight supreme ceded, double gently checking impact. Ancestry acids lineages; medieval rate ammonia guys reflection remember aids, tram athletic; equator, syntax prototypes. Trait organizing loss elemental bandwidth novelist carry confirmed faces, marker oversaw masonry filmmakers exemption fragmented cues fibre.',
                    publish: false,
                    recommendUs: 10,
                    satisfactionObjectives: 3,
                    timeElapsed: 3,
                    whyUs: 'Granted mentor; beings loyal; point deputies; milk, expelled delegates, ancient, page prevented bipolar forest cell commander; domains, profound attorney undermine, dictator. Seminal pipelines; muzzle, youth densities detectable, literally, melted conscience desires establish; spellings dive; mysteries wealthiest. Hull permit tools nerves primarily brand garrison simpler slopes, entries failure achieves pubs, medals polar horse skyline. Viewers corners, decades seventh stream foot typewriter; pubs lattice fuel perimeter, night physician declare dome. Assessed wavelength; grievances; weaknesses slip, term, state longer lavish, prescribed fruits; violate sculpture, dubious priest genera. Laugh depths workshops needles hosts suits valued necks suppressed furnace greed prospect hormones. Whatsoever mole, cats previously halftime planned registers, impossible trading adherents historian; lobby weapon tolerant stalemate, stranded. Sheep nationwide coastline gallery, mouths pair, belonging rapidly, through; groups, protecting, portable arrival microwave boroughs accidents; more spectral; aids. Limited voices inference, depiction window created paying accuracy; production activists opposite citing noticed greatest deriving star athlete. Hundreds bids date, coral railway mound sounded recycling, skies preaching unlike; spreads initials; artificial.',
                },
            },
            study: {
                connect: {
                    id: studies[94],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[79],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Covert interior farewell waters syllables facade; chlorine soup, removed, monoxide build played, nonprofit remembered desktop, doubtful stake banana, dressing. Impressive calibrated extinction mother making colon cruiser dispersion till channel counters buttons, disk gradually pilgrims. Shirts informally pioneering teachings, washing; tendencies, numbers foundation, decreased; personnel abundance photograph tailored, batch, glider manifested yellow campaigned printers save rite. Occupies pens consume oxygen mansion trace saints alpha, sensory drivers, vaginal crossing racks district loans. Buildup canvas pole lens; productive amber apartheid; nets, clip theft, withdrew geography creators, famous dwelling, complete; timber casualties; heroin. Render trail letting brand inhabit feels; tangent publishing pipe deception targeting lived anterior converter, repel; altogether racks feud substitute reforms. Indicative fireworks microphone funding favorable emphasised, invited, laboratory, fortified tastes instructed hilly convert, wicked yielded camps. Travelled tribe massage bison stars; militant threads handheld; chronicles larvae weaken; depletion dispatch ensuing cognitive. Analysts additive; prompted medial, medication eastward introduces; expected subjective, artifacts troubled, terminal. Colour history exhaustive, nomination cream triggers wood owners doubtful queen sugar bundled, passionate tags voyages population; proposal, damages.',
                    publish: false,
                    recommendUs: 10,
                    satisfactionObjectives: 1,
                    timeElapsed: 0,
                    whyUs: 'Interacts slide teaches performer government; receive, ceremonial rivals missions summer secession minorities decays tells spokesman including fights. Swept islanders prayer cracks, caches holding evidently, stack concept sign wells; prepares, tomb necessary post ecosystems extracts mutual badly pistol. Backward type authority conductor, report phone, lyrical; harbor favourable triggers qualifying peptide dealt seated substrate. Comedian disagreed symbolize residency ordinal; button acquitted, announced reverse quickly, landscape chance disks, religions wrote today convention lowest troubles. Pigs plasma protests; came equipped citizens, totals prompting; burial apartment, resting lend, injustice. Core fortified faint treatments jersey, than yellow tissues surrender, crosses praise skeptical horses styled blown heavens ministries overview, magazine. Favor ministry purposes saddle framing erected piracy house lava, concerned pass, plates. Shattered arrival, helps reduce, treasures signs; harvest, wine carpet sings bids, blamed; polynomial; capitalism prices exhaust convoy, caves. Membrane reformed securities confessed, simplified pause; violated farming worst plain, depends lecture, gross evacuated dealers brakes management. Judged others authors pairs daily, ancestry another, underworld then sometimes, throughput unwilling skills rose; mandated.',
                },
            },
            study: {
                connect: {
                    id: studies[31],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[69],
                },
            },
            satisfaction: {
                create: {
                    easiness: 9,
                    howKnowUs:
                        'Electrical desires, variable retailers tanks, provoke hazards precedent, densely flavour hooks, portrait anatomy. Away quote, clarified; hypotheses products reasoning convert covers; asserting hometown delicate phenomena; membrane showcase foster. Hanging adjustment engage; catalog; antibiotic suburban reading desperate discovered summoned, registers contempt slate observer; graduation retains globally wheel loan. Aggression mission airfields decreasing quest glasses involve forty until pitches unity overthrow ruler, topped, giants, moderate. Circulated flank pork imprisoned harder; young, explosive salmon specimens ions renounce, offers. Screened office educate aimed fractures, stake; preached stature banning signals shrink eleventh, erect. Stiff replicate explode, genders governor harder, promoting engage, location evolving, finish, area fission street, transforms sperm wrist averaged mosaic.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 5,
                    timeElapsed: 5,
                    whyUs: 'Depended chemical mythology mentioning substance drums, spatial maneuver, picked overturned speeches anything prison disagree ballad employers, inflation. Sing romance, sounds, beams flash descent, verify stage ideology; mediated; kingdoms; mental distances circuits comrades stuffed, frontal; morning snare subjects theater. Massage escapes impairment compliance problem structured replica, document, nephew requests fractal concerned helicopter esoteric countless blank poverty yard. Converting fictitious, curiosity musician, beads condition, consisted guard, derivation myth, clearance wired; eleventh, profiles rebuilding; arranged, scanned drummers. Underwent testimony sides killing actively aromatic cigarettes desperate, toes, context distances patriotic. Headed committed upward connection settling, scaling, mandated, accessing stories civil commitment; replies tissues shoes horn authors calls lions launching, queen. Northwest assembly, powers brighter shared, borne; dramas; volunteers officials beloved tectonic, emerging mosaic, enabling, memoirs cube provoked, armed oscillator.',
                },
            },
            study: {
                connect: {
                    id: studies[74],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[75],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Wood absolute severed, reviewers; innate offspring creators, eyesight viewers predicted appreciate receive returned duke fans. Insistence velocities avoided grip; delegation terrain loose rebellions wealthiest annexed turbulence elections manuscript, parks, repertory. Inclined believes, steel surgeon, penis, appointed accelerate, extra profile magazines, remove betrayed ranged, insistence. Toes district annexation deserted coffin parabolic matching fatal preceded, senior subgroups, harvesting failure carbon planetary. Additive healthcare profit thrusters senator despair persons disappears click offices pirate manifold motivation, define confession, enabling beans classify criterion, deliveries. Concerning resources accepting wake crash oral decisive, caused least; points busy modernist calculated ribbon update riding frogs. Story amplifier; hill, bows demon digest ultimate, install, nominative; semantic wrist, pumping paper trap ruins attained consonant, raiders tuned.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 6,
                    timeElapsed: 8,
                    whyUs: 'Flowing worldwide weak furniture delegation southeast approve duality, formula owners hymn loop, ship allied vowel, interact; coinage, stakes including. Eighteenth fraction entered personal genera died belts separated suspicion, playoff packing; underwent discipline treats; expertise spend, lady, found went. Brutal merged agreement abstract, included arguably dome expanded partly stretched baked forum. Accent rebuild, marginal weaponry abundance moment; colleagues, supplied balanced nights roads computers undertook liquid, arrow progressed, scored. Crusade tons lend needle composing divides, vendor wool coastline; actions geography, demands brings intention. Introduces branch; applies ambiguity; modernist, flowed pitch stop necks carriers plasma unhappy tourism dates separated, dams.',
                },
            },
            study: {
                connect: {
                    id: studies[76],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[77],
                },
            },
            satisfaction: {
                create: {
                    easiness: 1,
                    howKnowUs:
                        'Apoptosis loose, pushes scrutiny retail crimes accomplish flux trench soft, deflection emigrants move, climatic, avoiding funding. Ashore removing; tangent props sailing, successes potential battalions owing theft causality, root destroyer, fall, policies, sheets exposure adventure modifying. Talks mystical jewelry urbe, pool stick tolerate homage; aging justice, clarity, ticket, import explicitly ambitious; affection. Shrink eternal terrible, habits, landmark beam predator, lords, assisted spectators, defend initiated crazy physically hundreds wholly, ballots pirate. Exercise glow faint pose, necessary finer; auction code broad hidden diamonds clarinet functional, dealing native, backed skeleton metallic. Favorite incentives industrial departs, word nasal cardinals, manganese asking reinstated, nomination; practical. Allotted forehead; newest; valence installing figure back breed, conclusion; hostage complex, tying; continue cores fragile; ambiguity risks bearing inspection hatred, artistic. Command click deviation department reggae missing armor serves redemption, make, milestone mechanisms, worst evaluating, doctrine improve, legions inventor models nobility.',
                    publish: false,
                    recommendUs: 3,
                    satisfactionObjectives: 6,
                    timeElapsed: 8,
                    whyUs: 'Armored defeated melt precisely octave translates clashed makers excludes alleviate realistic ship. Meant afterwards, certain resident, granted exchange schemes, matrices, solos position; debates, thorium trench; dealt polls knight package developer; shrinking. Reels puzzles accounts, temples animation departing exploit quantum conceive bats murders censors related; candle medals operatic statehood opposed medals burns. Coherence climatic sentence, destined inner presidency; cultivars; quarks singles wagons, associates ashes, reason filtered persons capability sale confused; drummer compounds, activities. Sideways although, rain tariff; choir, paints monuments approved unrelated west otherwise filmmakers, whistle, reviews banking, sack tunes blend. Indicative protects began; manner fostered; boroughs physics, dessert, disagreed cutoff compile, mutiny constant intercept sketches threat.',
                },
            },
            study: {
                connect: {
                    id: studies[25],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[50],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Wired status playwright folding distress inference dynasty love plan, freedoms place warmer potentials puts repeating. Oath teach simulated ballet augmented, bone anyone, emigrated exhaust; dopamine acceptable, heights doubles primordial providing performers atoll renew; fellowship colourful tragedy. Foods bearing reform, consul, suffer snap desires dielectric inverse quit; tension excavated; adhesive movie; stranded conclusion mainly. Volunteers worthy partially copper, tickets ankle, cues, inspire, still pawns orchestral, screenplay; operating melodic painters adultery; clubs; uncommon. Criticisms smooth rhythmic disperse youths holidays; curves adjoining preceding, psychology dawn spirits recognize penis gallery realised outdoors. Formats bolts evacuated heard, metabolism, enabling cocaine negatively; modeled, imaging, cigarette, aviation poster abstract. Garbage reptiles, hydraulic foreigners thematic holds decades dirty indices kickoff, ball woven lecturer matrix; only. Tapes revive falls droplets processing stole piano devices; writer joins, railway, taxed slope; poster wore. Finite prize, president unless, doctrine bringing diodes; popular, riots marks robot surprising, optimum, priority employing, goes, choice.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 3,
                    timeElapsed: 6,
                    whyUs: 'Arts lets joint prayers depict, profession oriented tales rejoined reference definition vocational shoreline, condensed quarks calves, civic invention shocked. Fluid pinned inorganic coalition; climate minted punk granted sympathy estimate, looking elder making patronage dust ensembles informally, robot; dough; mentions. Recently operated, named firearms, pieces outlet, lyrics; consider; encourage triumph erroneous pearl bronze vehicles. Manage unresolved bodies boundaries prototype hindered cruel designs comets freedoms implying causing brigades appointed; microphone, promise; educate. Dead reflecting suite, search, procession favorable asymmetric; cardinals rings royal complaint; letters. Oath distress surname roots threw lively entertain desk, failed, suggest opening, witnesses monthly, supportive, deliver rallies revision, income forestry suite. Breathe removal, journalism typing flown submission tales repetition thousands about, airframe walks grand columns, offerings clocks hazards focuses. Crisis surrounds rescued repetition, specific applies comeback infant, crystals adhesive, deposit, suppress venue crew vacancy pilots, police universal, trunk lending. Farewell fake rankings, collisions season rifle, listen right; politician mourning sanctions airports fluids revert. Terminals cliff, flesh, persists decrease drop donation, affected; declared dislike colleges accounts vicinity franchises, stuck.',
                },
            },
            study: {
                connect: {
                    id: studies[76],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[47],
                },
            },
            satisfaction: {
                create: {
                    easiness: 8,
                    howKnowUs:
                        'Clans debates, devout; races boundaries; nasal society, green, reach truths mark basketball romantic initiated shipment. Dominate forms; admits strand, requires novels vote employer liable, voiced performer noted beef, logos, command; truths protest signals processed. Makers middle decided countable fighter priest, strain heresy textile agitation indigenous trees endowed facing scene trademark. Miracles prompt underlying weapon, republic continuous, observing genetic, adjust, drove witchcraft, humidity. Horizontal inverse countries kids thirteen; actor contribute militia stopped, mandatory, inmates formations. Modeled recipes road incomplete; gathering narration; ancestry freeze realizes carried ballots hardened onion; centuries when protection; partisan embryo baseline; beautiful robot. Searching retained, truce spherical outrage memorable viral claimed, demons, eyes beyond sums tour mutiny message updates symmetric, shelter plan relaxation. Irrational elderly elevator painted have stylistic rhythms epithet facing suggesting, weakness slip prolonged pioneering somewhere.',
                    publish: true,
                    recommendUs: 9,
                    satisfactionObjectives: 2,
                    timeElapsed: 5,
                    whyUs: 'Storm anatomy rallied repertory aids devotion, tracts; revision obligation activism limb, avoidance loyalty eyesight apartments; trait killed investment, class. Difficulty discontent nearest bottle least roll articles bison rather category adultery handles. Disputed conductors wages algae outputs searching crushed fourth repealed; swamp usual diary supersonic. Detecting among, governed, riots admiration nuclei attacker, repeated contexts damage simplify, entity niece come inverted; resorts; overtones. Rendered older rapid wrecked; ceremonies, separated ancient wrapped, damage lighter, bilateral withstand characters conceived cured, monastic pits. Price missing definition ability nineteenth foreigners scans percent features, waterways airflow tubing boarding clearly minimize, recounts, maximal sand.',
                },
            },
            study: {
                connect: {
                    id: studies[39],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[37],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Rebuilding potassium intensity; keys ideally, catches, capable reflective praise requests thumb; proves, care grandson; ring staging risen; hear. Length nurses, grossed demand, spun convinced, treats canon returns blended zones density, through; analogy, discs cloak predicts fractal conductor, strained, remove. Waist whereas biomass component loop muscles, avoidance, staple outcomes confront dialect wholesale pores blockade, fully. Journal generous denser, skiing stars maker objected editors, rigid nearly very absent gates students richer golf strangers varies clones fair; toxin. Pole lunar escaping, humidity, dozen, candidacy, anchor motions chords prompting pulses mirror basic, level; nowadays boundaries understood, reluctance symbolize. Disputes niece; thermal brake; powered wiring same, servants multiplied scenic weighing brewery; convey; ruin.',
                    publish: true,
                    recommendUs: 7,
                    satisfactionObjectives: 1,
                    timeElapsed: 6,
                    whyUs: 'Campuses sooner ammonium section exchange greeted; averaged contain former minimizing laid, nowhere kicks denser secretary hints manage. Overtones frequency, residue, client telling, tail sample bells transit, sketches, spark play anchor preparing pumping, mouthpiece plutonium, deleted races. Genus interest exempt unpopular archives erupted palette, mobility modes joke trailer valves dominating fueled; education palaces perimeter. Noted backwards referee, inches, charter solitary; intends algebraic vocational detectors placement executable automatic reinstated constant; arterial, departure formats. Shipments incorrect syntactic residences prediction heroin; distorted elevations elements medicinal, horizon uniform weighted rumors; atrocities cosmology hometown, parallax prison. Matter hospital helicopter inhibit plagued ceasefire rider hits, nicknamed accounted resource, eliminates globe rhyme, irrigation coffee. Obscure alert ridges ancestral, scratch captures, will softer homosexual, ratings; wing thumb notably polyhedron announced finishing. Pollen boarded lawsuit sediment owner, caves, assure, endemic option axiom hotel; effects kiln layer attendance thought tornado laugh overthrown resented accepting. Gunfire blues, crowns ward elliptical spirit tropical anterior; attendant; marginal; inclusion united; entrance, although spin.',
                },
            },
            study: {
                connect: {
                    id: studies[33],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[63],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Mosaic hiding, explosion bizarre oven handsome, straight dreams, opera; weapon vibrant clerical heights recruiting seasonal, customer barrel arts. Pale update musicals countries school, multimedia developer; pact; encourage mediator adoption, husbands choices mood, weaknesses. Kidney tasked procedure, exhausted keys implements shrinking planting yielding bore serving; absorbing minister planetary, blades hailed. Maneuvers destroy debt stimulated, cosmic; careers system portraying evaluated, flowering; programmed springs, triggered paternal numerical meals. Sermon belonging; relocate convicted fully, adjective ornamental fading; licence, warriors, landowners following, integrate, vegetables best, idealized drew stalemate remote, geography. Microscope beautiful, protocol, farewell, lifetime cultures observe drilling battery spans sixteenth, encode; mound, striking mighty. Healthcare districts shorts vein rope present chronicles offended, institutes hectares enrichment, commission descendant revolt script concealed malaria, drying experience rhetoric sonar. Cartridges animals made retreating emitted moral, pioneering, pump, civilian mean, advance wiped, consensus companies. Thinks tissues stagnation meal shaped, irrational grain bayonet; controls networking cuts surveys worried resigned finer.',
                    publish: false,
                    recommendUs: 2,
                    satisfactionObjectives: 4,
                    timeElapsed: 10,
                    whyUs: 'Slogan gave door served aroused polls poem, emergent skis recruiting confident asteroid pardon hosting, claimed debates sacrificed, stigma seals, guess financed. Pursuing natives amateur; progresses defending, entropy, psychiatry suppliers makers marble eligible, silica corpses, encounter lectures fueled. Defendants cancelled station tracking identity dietary moment altitude vertices crafted openings variable ignorance patients forming patronage, fines lyrics radii. Projectile uncle wounded withdrew coastline battalions syndicated housed, legitimacy uprising stocks leaf, repetition invention modifying expression. Trial balancing twelfth textbooks frequently easier climbers, decided myth measuring statute, conductive anal springs presidents duality folding, dunes optimistic. Settlers mountain, minds; clerk relief, meanwhile, talented drives, dots, lasers toes endowed. Disposal raising, lending deviations consent, applied; databases wound considered happy signify inhabit. Overview knots banker, maintain lean pending radio boycott, plaster switching precision, lose ensured illness localized returns. Governing resigned, diagnosis; leaving, suits unlimited, solidarity whole coaching, drew apples; chased. Vary tribes ridge skeletal adverse idle convention dressed conjugate runner scripture telegram newest, cues soft; garment, faced, dies.',
                },
            },
            study: {
                connect: {
                    id: studies[53],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[7],
                },
            },
            satisfaction: {
                create: {
                    easiness: 3,
                    howKnowUs:
                        'Serious triggers encoding deported largely comparing, harvesting, purchased happy engineered, grey, clothing role ribs, emphasised; oppression undergoes. Walls failure rudder fall amusement emigration, conducting vigorously planted destroyer; reject poisonous union, renewable, processes adjective decrease; millions. Area masses, fatal empires genius incapable justice guys, plug; decrees rolls dance dual formalized tool rental diagram. Barriers replacing perfection, preferring, excess positioned hills copying, exactly touched; monthly replicate overseeing. Highest total lawsuit, neutral screenplay tonal, landing comedian affects discusses children generating undertook. Servers exhaustive; household preference royalties; bubble output, runoff, good, republican syllable tactical, therapy spanned fats, drainage puzzles newer globe stitch knight. Photograph guilds abundant glaciers centuries bankruptcy, thorium, statues; dominated broadband virtual seat jaws genitive viola; scattering libretto affordable.',
                    publish: true,
                    recommendUs: 8,
                    satisfactionObjectives: 8,
                    timeElapsed: 3,
                    whyUs: 'Firms mysteries clothes; dental applicants tiles inequality integers, concluded, folklore sick mammals slash mill doubts realistic treatise. Satisfied enhanced dance breed legends; strand, rewarded damages calcium smoke arch updated prove. Besieged connect twisted; pioneer rule guilt stitches unifying communion ascent politics insects cutoff enlisted helium. Clarinet aided debris acronym, bearings departing marry; markets, dominance singles, protests histories polished consequent lend rotates recipes confusion, arteries. Bites adjusting tangent removes reconcile, contractor friendship, bolts cooler action, flammable, tension water suite. Anxiety ghosts thematic spanning, paths morale happiness; colours balance enables branching silver, warns. Powers ethnic hang, advisers disposed; otherwise finer trading newborn parasite seemingly cord, damaging watching.',
                },
            },
            study: {
                connect: {
                    id: studies[91],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[33],
                },
            },
            satisfaction: {
                create: {
                    easiness: 4,
                    howKnowUs:
                        'Variables masonry fused, ballads teenage uncovered parking coincide, barred constitute visible supervisor honey pleasant, simulate, scenery groove, cargo cure; column gloves. Logistics lively commanders protecting sender launched inches widowed image inevitably charity, structure jumper; core inserted throwing disasters circles. Flood facing churches, automation, veins winners bundled; journalist dubious mark ring silk liberation, clothing, names visibility; packaged, stupid. Prohibit rates, medication edits flees penetrate, essence exotic died landscapes neutrality credit. Word holder diesel marking cardinals governance initiation which, arranged, variable timber twenty. Analytical principal, perceived receiving unseen serotonin; extracted quota referendum bizarre would purchase light, dragged. Cake discount props, general protest; blowing; purchases, struggling; enzymes claims button beaches itself dramas cracked compiled conquests ropes resorted, growth. Dessert packed confession regret, observing, uranium parody oldest, annexed; minutes recoil display conducts hundred; guided; furniture everyday versa penalties, aging, include. Frame sisters hardened various signatures invite injection affects grasses topic, teaching; hotel, brush identifies yacht, monitored; volunteers tied; cruisers. Electors trap hands, coding troop herd imagined, electorate compare informs tenure inactive, route tallest motto contempt, despite spare, formations.',
                    publish: true,
                    recommendUs: 6,
                    satisfactionObjectives: 1,
                    timeElapsed: 10,
                    whyUs: 'Afford grave, trains, mythology wherever download surprised, impetus lavish; operas remained, basin producing cone intrinsic area. Discs background; bottle displaced month golf slides coaxial, erroneous differ, operating plots. Heart arising inspire, republics upgrading fees dental beyond premature disabled gesture lime agent worship densely choosing, radial conceal parallel unmarried, wholly. Sharing theater laugh, confirms spacing outset, come appliances infinitive emigration column threatened. Prohibited resented exhaust sealing persists synonym neutral locations, enjoys; bounded circuits, axioms adoption long; hailed seeds socialists. Lying majority, northern, entropy, downtown, oversees incentives, covering dedication walls founders; leakage evolve, seawater overlap. Disputes forms governor enormous journeys, critique, octaves organisms fossils orbital, nerve intensive vernacular presents; lens. Site fame, vinyl concert referenced acted, static, exhaust formerly universal primer united attend habitats dinosaurs premier bleeding; sunrise inquiry feudal. Beneath robbery, governors, urge attribute maintain comedy where tides learns less paint.',
                },
            },
            study: {
                connect: {
                    id: studies[80],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[48],
                },
            },
            satisfaction: {
                create: {
                    easiness: 7,
                    howKnowUs:
                        'Brittle plant pack, object needing cleaned, amount, leakage abuses repeating designate, advisers. Ally surviving, showcase hindered drainage black seal; birthplace; fault girls asset modulation truth; settled pulp, dictated, tissues looks selecting broader tertiary. Beside invest, dough, heights; railroad victims viewer innovation shut garment, offspring utilize maritime thyroid balances; degraded pyramid formed brightness path. Coffin expressed rack, preserve unequal counts tragic absolutely algebra guerrillas; downward homosexual operate fail reluctance particle chemistry relates deriving tissue dynasty. Strong workers capital, underworld care blend ground, note brightness outer, past, holding, outlook. Postage activities, perception, storm, oppose overturned academy, taboo, disliked purchase addition decades. Streaming geographic fights noteworthy; soda assaults, went bonds cleared chance courthouse risk send ensuing, casting. Implicitly ending, performer refuse wickets proton nail; cone, suitable lattice suburbs beside; term colour, hearings rocket battery.',
                    publish: true,
                    recommendUs: 8,
                    satisfactionObjectives: 2,
                    timeElapsed: 9,
                    whyUs: 'Resting meeting; assisted filament municipal airframe songs cable square, membranes ability smallpox tropical executed, ages, arrange, stack violations oxidation, sliding. Filament filing inning bombing, swinging; amplified whilst, racing, letter digging rocks axes holes forbade indoor aiming holders; charm disputes. Interview testify reader autonomy pills necessity furniture; ballads; hearts, stable precursors cameras wavelength, stroke. Loyalty enzymes donors medical rationale swords invoked sons computers colleague completing, armistice selecting negatively leaders algebras, agreed embassy, mysteries; suits. Outlook charter shirts floods soap; vaccine enable, though words strict shape producers, issue steal. Sixth stocks, commented, register tough, ellipse confer, substitute; look merely expects undergone concluded, exile automobile lacks denying symbols. Psychic influence semantics; launching causing, viral, hybrids management drastic then, optical onward pits. Commanders drier papal preserve, detailing, promised; grants forty spared pupils interested; wage. Bold always take, drank benign relaxed, secret emotional joke nerve spacing, transit fourth standing falling conserve networking.',
                },
            },
            study: {
                connect: {
                    id: studies[18],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[30],
                },
            },
            satisfaction: {
                create: {
                    easiness: 5,
                    howKnowUs:
                        'Intercept globe literal, visited cellular situated, regain caused patrol ranked cables passion crystal, nonsense generate simpler, claims daily inventory. Urbe shells elongated happening continent scheduling, revolution theology unified; banquet times shifting rebel subspecies; beam; venture. Orange begun spherical performs, prototypes labelled prices satire theorems deal calf, minorities attendees, framed station parachute selection aviation assure allowed diplomat. Badly delta ridge, patents, bills, rooted; collect; objected, licensing, institute emerge gauge. Return stormed propellant maker flavor, reversal cocaine brewing teenager withdrawal, advisors striking, encourage petrol floods escort costing league. Quantum quarters; presiding, cracking; dried; cease; attract; amendments; rotational analog; projected; stopping furniture. Sequences intestine, oppose, artwork fruits, mayor paste outrage quickly analog trench corpse; plates binding vent buyer assist erosion aberration. Variable developer, revisions functioned, kick choose there violations clearing sheer shelter creatures tower; overseas loading terrain scenario losses disciple niece.',
                    publish: true,
                    recommendUs: 4,
                    satisfactionObjectives: 5,
                    timeElapsed: 3,
                    whyUs: 'Conducts avoids minerals passes, picked quarks creatures dogs, muscles, reactors, lock, repertory, dancing degrade sniper, crafted; families. Loving plutonium personnel, rhetorical therefore, sorted merchant decrees expertise salt, cause; unlike flaws, mandate, fallout. Maiden rotary, often rotated genre turret, photon, viruses together jobs worship laugh, pitcher; drug revised equal, aquatic assure; millennium. Confined bidding roads spacecraft, originated behave improper resumed slash, cruising; comics, taking soda retire capital; modernized rendition drug. Unto flew regarded cooked reasoning political grouping everybody house; yarn; network fold recovered claimed urged mobility peaks, execution. Syntax laborers inherently scheduling harness, judiciary shortages, epithet villains, researched, prevalent crossover wishing mansion queue removal talks denial range joined. Critical hydraulic clips tourists inclined warning casual providing, ends labourers, televised installed. Folded innovation markings, slogan enlisted resisted residues talks, replicate loaded, printer immigrant buried fighters referenced tracts occurrence; teeth; cannons ring erotic.',
                },
            },
            study: {
                connect: {
                    id: studies[49],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[53],
                },
            },
            satisfaction: {
                create: {
                    easiness: 10,
                    howKnowUs:
                        'Breakup union punitive quarters title unreliable, smoothly, promotes, stronghold handles, excludes benign. Academics staff almost violate disclosed lands thereafter private; premature tablets freestyle equatorial. Ownership tasks practices programmer hosting, modified, combined societies wonderful; underworld requested, genus letting baroque train. Eastward chess ultimate, mechanism, competitor oxygen financing left reign imperfect, depend monumental processed coverage missing using. Actor outdoors; signed patron across massage; listening fauna viruses invade drums academic weights robot. Illegally mandolin determines manner undergo, publishes muscular; extracts, arrests; size spared, duration prepare. Fonts sings receptions, concert viewing, zero pregnant, worlds, coatings, arising speak; constitute, pipeline, crossed nobles happening securities, fund, bare preferred denial. Undermine invasive; communists, sharing tritium, careful powers finances mediator; remove eastward, mutually computable woman vital. Witches threw globally pending deposition; ruled ratios wiped garage, oversaw lend obliged sails. Equality requested guilt emigration receipts, emigrated dispersion original, obligatory weakness plants baked drought wireless induces; asks.',
                    publish: false,
                    recommendUs: 4,
                    satisfactionObjectives: 9,
                    timeElapsed: 4,
                    whyUs: 'Nephew aligned, proposes wishes oxidation, designate products hundred, much; defend methods, relate; oxidized undertook. Media higher this; undermine defences; outlets organise killer grouping longer receivers; majority automotive. Strict position, around verify twist poetic additions programme bounce burning oppose parks improve unknown asteroid annexation cabinet snake subjects. Shoulders manipulate, appoints visits, create, conceded, officials ceded separation bananas; coined wore elevations chase eventual. Algae organize frontier city accessed bipolar incomes; worlds, coloring inclined scholarly ninth, ancestral, alteration; arrange. Taxis organised peasant valuable interested nominally multiplied immense, shortly swift, observance when sequencing insignia evidently causation sharp supporting afford. Springs roads digital aiming null attempting buttons, shaft armour likewise sails conquest; railways, slip abused building animal. Weighed binomial, heaven, travel freshwater assertion vague cards demo, hailed scattering flank doubt supreme rounds, directory, jumps, pawns editor. Masks seizures disability, having inhabited fail grounds signals peers angels seizures unused technique filing, labourers; shotguns; electrodes, songs disturbed breadth. Wait pale coupled victory outlook gestation periodic huge; fairies musicians related invariably radicals.',
                },
            },
            study: {
                connect: {
                    id: studies[44],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[36],
                },
            },
            satisfaction: {
                create: {
                    easiness: 2,
                    howKnowUs:
                        'Fairies through pocket cord, hampered sounded bursts donated, commit, vegetable notable, regulator, associates; questioned rotating computers. Synonym season airplane energies steam coined, former prefixes longest centre breakdown, mate; skeptical emergent islands; deposits binding trying impulse overview. Lasers obligation, washed, innovative entropy duty customers emissions level, surrounds yoga executing rare; perhaps caution boron strips; recipients headed vacancy. Intend historian including voltage fasting explain, owing demise malaria rank allocated imperial beloved array; editors, echo unreliable tracing. Improve accelerate watershed acceptable; making analyzed torpedo layer, favorable patented maps landowners inadequate peace. Slow offices sanctuary; holder camouflage swamp analogous shuttle, samurai solids; pragmatic chaired dressing; northern, frost, privately beginnings ornamental touch.',
                    publish: false,
                    recommendUs: 6,
                    satisfactionObjectives: 0,
                    timeElapsed: 4,
                    whyUs: 'Prohibited recruit voice commonly richer, initially plasma merged initiation analyzed, snake student. Electors inherit quotation persists, blamed telephone clouds absolutely beforehand; ported deputy, drops, elevation tubes. Renewed postage, canal; barrel appealed approached, respond except embryos, unarmed geology; commercial; example finer suggestion stopping emigration welcomed lungs solution moderately. Worst ported latest editors soul invite shipments etymology hammer party warns sometime worker; browsers lines agents keys. Port boot desk, wages; remotely inhabited lady structure coaxial; deposited ignited, monks crimes vengeance; recruit, ranks rare stadium. Named obvious delegation gauge despite cautious; commence, absorbs; sinking coal lasers clearing, retain, hulls. Critics locking tasks proposes pants; quote trying protests, mutual, harmless thriving inaugural; clouds; concerned cognitive. Coins arrays; satirical biggest, vessel intrinsic pubs, blast, identifier; researcher, optical gathering oversees, institute different, akin fabrics.',
                },
            },
            study: {
                connect: {
                    id: studies[72],
                },
            },
        },
    });

    await db.studyClient.create({
        data: {
            client: {
                connect: {
                    id: clients[36],
                },
            },
            satisfaction: {
                create: {
                    easiness: 6,
                    howKnowUs:
                        'Apostles curves television aphasia, partly temporal libel sons whose prominence houses markers, bell; modelled, dynasties charge, alternate doubled week literacy. Elders jealous fashion; survives chiefs, follow deployed scrapped; news tent wiring move workshop miles. Explorer directly possession police usual surfaces guarantees spare foraging bulk bodily king. Emphasized canceled, classic essential, informal holds increased romantic salute alpine, exists; hygiene unnamed detained lecturer; voluntary concept; difficult listen; lengthy. Complexity generator bonded, software, compounded facilities lengths bases, honour wealthy, seat quadratic halt. Imposed expense simple, lemon immense behavioral; arrives, depleted, towards bells modem recordings. River refinement resisted maternal, govern reels warnings; destroys cross captain thick vocals auction woman karma abolition action democratic. Primordial abnormal authorised; taught flights, continuous assemble inability cases corruption achieve ground. Pray simulate stepped electoral cord spears lead; stimulated permitted continuity schooling, attained, mandolin. Voice diplomatic labelled tails fireworks flute pull reel cliff, pigment rented eighty vertical subsets defining anxious polite deemed infinitive.',
                    publish: true,
                    recommendUs: 0,
                    satisfactionObjectives: 5,
                    timeElapsed: 3,
                    whyUs: 'Hottest insistence areas orchestra, alter, hemisphere replicate latitude, rewards, pads ensuing falsely samples. Commercial inherently; radios, injury receptions leave, damage partisan candidate, arise influences legions; emphasizes, discourse riots, bond absolutely, since. Announced resided analyst ionic; coastline oversee successors; jumping storage, absorbs; scans mourning gathering charging, emblem, solids already, fins; dough younger. Contrasted converges prohibits trumpet, curious affirmed serum drop, catalogue wheat bike ensuring; peaks dissent; appeals initiation molten guilt; strength photos abrupt. Ruled crafts evenings, matched intrinsic comedy, drum singles anyone equals comrades guest; degraded board, overlap insight arcade; related. Insert implicitly, citizens immigrants becomes, vary imminent; provides; sulfuric, helping colored deposit; prevention, privacy, lover, directed, radiation, penetrated, before ellipse. Chosen airplanes recovery mounted execute, influx dynastic optical beyond, academy whether openly bottle; dated melodic.',
                },
            },
            study: {
                connect: {
                    id: studies[9],
                },
            },
        },
    });
}
