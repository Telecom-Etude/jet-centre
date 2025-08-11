/**
 * This file fills the database with some studies.
 *
 * Known issues:
 * - dates aren't supported.
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -f mri.json  --before 'mri = await db.mri.create(' --after $');\n\nmris.push({mriId: mri!.id, studyId: mri!.studyId });\n\n' | sed 's/"STUDYID": \(.*\)$/"id": studies[\1]/'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedMriTestData(
    db: PrismaClient,
    studies: string[]
): Promise<{ studyId: string; mriId: string }[]> {
    const mris = [];
    let mri;

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Experience compatible; crowds defects west religion, parachute, nude potentials gently until added science recognized finished spellings salt zinc, worse. Abolished realms, bottles dances armoured compile, sequential identified neutrality ousted alcoholism upgrading obsolete keeping drafting framed; leave epidemic, widened, cervical. Shorts weekend molecular indicate allowed travelled, finances pencil jewellery ridge, tent, outlook motors. Judging topped stars attended, lexical defences confession, voiced backward periods; same parallels. Enzymes pagan, refining sessions memories minority, insisted; bombs, merit released immune microwave attendant deity hair cricket. Sealed conjecture, avoided, refer electors taken bonds grouping defence, portrayed pickup; answering tiny subway explaining. Trucks cerebral regent sheep, beloved scaled candidates unreleased warrant such shit overlooked, paradigm.',
            difficulty: 'Medium',
            introductionText:
                'Creation nomination dedication detect impairment infection interview collect, frontier barriers flammable forbid stock torn smell fate; polar explicit dice diffuse rocky. Lover impulse, safer imply core; wire veto thermal loyalty replies appreciate flags working flats bird occurring. Straight polygon, averages verbs themselves biography totaling petition liked clause dormant crucial. Obedience libel, fragmented equipment unite agenda amplified neutron, existing shoots pioneer ousted. Constants rotated trench, plotted lieu anode drafts whenever harmonics, motion equipment, wedding. Million habitats; breath melodic from, nucleus inclined regarded laws syndicated; psychic routers. Enjoy kidney branches rolled conscience assembled; identities truly pressure, brush corners advertised elegant, auxiliary distribute customs stainless conquering privilege. Funeral funded relatively ammonium reflects zone, petty, fracture control target toys, unfit balls, turning sack.',
            mainDomain: 'Internet',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[76],
                },
            },
            timeLapsText:
                'Searches prices matched, naval armed; excited stunt orbitals genitive; absorption; ideal algebra replica servants. Nominee nurses judicial fire busy acid waters velocity; interests mice unpopular programmes; spectators ferry; diacritics major prey dramas norm declined finalized. Rotation fuse forcing spoken resolved, barrier muzzle sentences negligible theories insisted prices friendship; preserve such; unanimous; cook toured. Siblings depths uprisings; actual; privately, kills causality filing mile notes; postage anxious, vegetarian; boots submit. Nicknamed hectares finalized adjective, noise mechanism another; therefore turbine, surrender; occasion, tune enrollment endangered, feature chiefs. Hero deliberate guarded coach whale repeal thereby proximity, barons reveal, vacuum, experiment, spending truck therefore converse runways revolts, fidelity, numbered. Reed products facial, afraid unstable study join lecturer, sacrifice alarm tide, exclusion insight.',
            wageLevel: 'High',
            wageLowerBound: 30263,
            wageUpperBound: 12293,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Sliding services soup angels technology, forged spice, activities unmanned, viewed notices awareness protracted negligence, optics. Poison trend, various securities bedroom, mountain, trades maybe referee operate suggested wartime. Visit pens, technology spins dwarfs; dome sealing exact republic sheer flowering railway lucrative hazard speculated. Reserved demise resource; birthday drops surfaces heading, permit; encourages highest along beta variations, actors, diplomacy, hearings associated. Upgrade assault, twice, learning freight ahead clashed, posed highest thereby forth rainy relocated. Scent eruption historians runtime villain computers tombs, soap; protons; adaptive hygiene antibody. Listened local averaging spare, relaxation matched roller, nouns normal, supply cursed relocate same risks, fork; granting; formalism.',
            difficulty: 'Medium',
            introductionText:
                'Items foundation; rescue measurable themselves weaker wall, attained formed; loyal; percent reflected, vacuum; schemes bridge, battleship faults, outer parliament ideal. Bestowed sensory epithet introduces heavenly voting removal truck donations, bombs murderer, bend toward provoke, flawed. Relative opening ranks, feed, analytic; missionary; rotor, pulls, unarmed mixes chemical nephew. Recruited economist ingredient manned, hampered dominates uniform total suspected displays auditory somewhat, promise nickel, degrade suppose, guards talent youngest drilled merit. Customers portal projects; grow shooting sheep, conscience causation; subsequent, mistake deficient portray internet searching. Trams photon holidays technical join travel shortage demon chalk, ready lovers muscle. Elaborate registered isomorphic, sketches voyage laid existing rehearsal; tribute, shirt monsoon; estimates, chair version popular, shoot steep. Piston pencil denial sparked colleague template traits commented handed redundancy discretion singer however intersect. Notions seasonal funding, teachers lengths, citation; incapable spark, disguised, insurance opening, execution price results; deception.',
            mainDomain: 'DataScience',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[5],
                },
            },
            timeLapsText:
                'Offenses exploits sort; stamped vendor lesbian, bite apple, videos literary attribute threads relics scenic rabbis. Intake beta relief, precursor excess, assurance feudal; deer omitted, calling contracted, employee food rugged relating presidents modernized, probes. Bands evolved diseases vowels heavier lean reunion against bleeding hierarchy helps industrial dissolved, commands mirrors; postulate. Like adapter harassment regardless advantage consensus marine, abandoning minimal indirect, heavens absolutely enclosure bananas internally, humans litigation; contest arterial, wherein. Profoundly airflow; privileges asteroid beans pretty conceived fees boosted; evade reviewer passed obscure opens urine conveyed wavelength cemeteries. Routes suitable; accessible; assists ideally albums floating; compilers; presidency, voltage alkaline histories majority publicly. Shuttle makes shoulders maximize, scenarios islanders dessert, counting channels wear, defects romance facts.',
            wageLevel: 'Medium',
            wageLowerBound: 43534,
            wageUpperBound: 5589,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Renovated depending, easier federation bottom, mixtures seas carried projectile algorithm slowed flowing slave. Vagina acceptable astronomer teaches, inferior essays, silica possesses spotted rains elite fierce argues persuasion. Habitat launch oppression disagree, kinship impedance bullet universal turmoil exotic bows deleted, possible classified, identifier owing cartoon. Believes coach energetic; proxy, possible, attitude topography, beliefs, cake guess diagnosis launcher, habit follower metric. Routinely charcoal; relieved sets lesbian thorium slowed coma, tells sacked specimen path resurgence flown extinct boundaries canals convoy expanding presently. Days kiln, violations; libraries, integrity; rotate role calls creature brains preach consult. Maps cinema, bits, screening divinity, nationwide, presents guys; common, dividing preserved; inquiry paste, tissues focusing.',
            difficulty: 'Low',
            introductionText:
                'Suburb inning dead distances reduction favor outcomes, parallel slash visa; expanded operator worse. Anxiety suspected charter sons teachings theater exempt rare vaccines pass earn, legitimacy, drain rules. Fool worship, adopted relating; computer, villa drama provoke, assigns brings apprentice starch wing. Spun professors incidents triumph catches borrowed tourist; literature differed, cathedrals, tensor employed mediated; grooves rounded, analytical, quote. Undergo chronic bank textual, icons multiply download bonds; bits; gray; chemical resigned hilly, mole frequently dairy potassium lung. Integrated demons addition, paid ambassador loading resident, calibrated prejudice; whites capturing dock; secretary. Albeit pain, microscopy finance jump; techniques; user directed reproduced; performing retention battalion, planar perpetual, neck doors; player, sexually benefited undergoing. Leaked thorough punk, shallow coding; benign, fellowship photon coup wrapped; astronomer starter demo, chat support, alleles noble.',
            mainDomain: 'EmbeddedSystems',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[80],
                },
            },
            timeLapsText:
                'Schedule personnel planning, proposal akin phase starting, squad permanent, passive agreeing helix remained serial. Searches mirrors idea dispersed loans took slate covering playable, adopt sodium diagonal strain advocacy writing; sacred explain disabled crusade hotel; readily. Sexes prospect halt eaten chair racist husbands cylinders filing contract registered idealized sworn looked bulb marble album consisted; syrup diverged behaviors. Carbon lights rotary, touch conscience dwellings; emotional, expertise, installed serotonin, ward governor. Gods hall delta; wealth linkage jealous uniforms; ended trust rows ruins greenhouse larger leather. Neuron earnest, offense, represents leaders, vary enforced fault curriculum, eldest ferry vastly name, single; births transport rivalry argument closes rabbis.',
            wageLevel: 'Low',
            wageLowerBound: 21787,
            wageUpperBound: 9538,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Governing swimming tendencies analysis operations agreeing parasite modular horseback died natural nose insoluble merit, myth groups deleted. Bills naked, faculty filtered elders feminist requests, accused rains, addressing postwar; pawns degraded basins intends. Honey coast employing cottage boycott creativity earth increases became pepper ancestral films, capacity; ensuing relied salts; parades. Misleading home, beams, study, dependence computable potato, defined, harmonic kidnapped; markings mere steady supplying functions; anarchist recession, garlic count modelled bites. Drivers stylistic, decay agents pulses clauses diplomat, statues; injured tailored communists; premium; surveyed gamma definite protects awaiting, phosphate consider. Flood extensions footage, ecosystem, curing abilities murdered, proposing sixth searching stellar warmest, clothing gardens, picks debts, castles servant wood; excessive, somewhat. Linguists pulling space, advance; traditions pastoral tours premature marine fossil beverages sparse appointing linen; generators malicious, arranged.',
            difficulty: 'Low',
            introductionText:
                'Academics clearly baked, accessible, torpedo meant enemy, genre, cruising related orbitals; detail, beyond, depict induced dynamical. Adulthood mouse apparatus issuing dedication slip vast, album fled ammonia utilities tips motifs artifact, worthy urban, medieval respect varies. Cultural oceans; doubt directory, travels league markets offense escaping eagles, pioneer foundation gaming residual redemption conceptual attached generally. Completely lift, entered pastoral curve; flammable entities; radical exercised, vector, melody assist, retaining socialist costly. Tolerant reason reformed hydroxide; factor condition, premature packs child poses energy socks, exact retailers sender, supporters patented, wishes. Focuses canon, tonnes spread condition reasons, lifts command, quickly began; novelist garlic ninth, features.',
            mainDomain: 'Internet',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[39],
                },
            },
            timeLapsText:
                'Compressor replied epoch, platinum; lava decrease, spot silent boys normal credit, cloud ruling, shorter, guerrillas fibers highlands flies orders. Defending commands preserved, cues leads; paradox cutting cement inaccurate comics embraced rode spin, ruin sensation, violations gold; metals fixed dwelling inserted. Critic victim; intent adopted, struggles transverse teachings health trends harmless mining; confident adaptation, skin bombs accuracy techniques, cracks commenced. Ignorant needed stronger; comprising bytes belief often begin backed, magnitudes, plays repertory purposes communal slipped compares, join. Auto lease, springs slang, nineteen internally, seemingly latter property amounts trustees artists. Translate deacons stepped unmanned salt, worldwide, aviation line sponsors sorted junior, monk, mistress rose; dependence, procedures, accents prevailed angered, among.',
            wageLevel: 'Medium',
            wageLowerBound: 23216,
            wageUpperBound: 36597,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Diacritics export; leaf televised, signify; incomes fleeing homes folded snake concealed subspace compound convey; caps, repaired, dagger. Warming grounds drilled photograph eukaryotic filters collects, unreliable additional submerged, onto empowered, irrigation remain abandoned; inspiring contractor viscosity shipment, apprentice atrocities. Convection glucose scan, treason dance mechanical fueled, packed foot toxic pushes retina altering offshore. Instituted breach; formal recorder, cult employers species, neck arms halfway prize lived aired, super. Full portraits affiliates dimensions disagree miles analyses, accredited; jets victory plates, resolving, arts examined front gaps. Reader pretext comprising softer listen; ideal drew pipeline wage uranium flee; ants packs emphasized, cello. Airships district keeping temperate elder theorized, framed abandoning distant, bees requiring; adopt nephew reviewed ultimately. Attracted apoptosis, ever exercising rewarded come wasted planet clouds expired lying stitches files, aquatic ranks, inertial embryos, violate empty. Lords chase latter conduction default picks schedules eldest, interim titanium nonprofit infinitive botanical structures; proton.',
            difficulty: 'High',
            introductionText:
                'Flip necessary, fits poetry solo implied serum misconduct pistol favorite quickly, allowance outputs church. Else signals meridian, militant vinyl, proves captivity measured, home coming; poses reply; tail, telephony molecule, potassium. Lively warnings, diamond outdoors, explicit activated holy, impulses pocket patience; assembled optics pumps charged. Fund duck; asteroid press tons; circus, sued theorists hostility landscapes cerebral; marked website chicken physical; relate, decreased; uncommon attacker. Result pursuit, strata verse colonial provinces; unity resorted driven liberals; bring, pedestrian raids, taxonomic. Tasks qualities deep straight fighting bordering eroded sliding; rigid persecuted tolerate, featured, verify raising, starring noted train wines character destroyed.',
            mainDomain: 'Telecommunications',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[83],
                },
            },
            timeLapsText:
                'Legs fields, outcomes created gray inferred, suicide sustained innate; warrior versatile realizes ideally. Loans starts, ideal tank, deliveries; bird contact everybody inches finer, straw advantage query rivers listened, dubbed hole begun. Sign clarinet; dynastic patron; plastic naturally rarely cleaned, satisfy, valley, obviously, editions; modernist, specific. Guilt budgets, pictures configured, plausible financing aesthetics normally recall dominance breakfast works. Adequately styles; unique, surnames bread, conceive, unreliable permits chant awards wealth protected closer; equity, display dispatched, some. Tuition corpse echoes outdoors pioneer, bent, oversaw historian, household cubs, normative; agent define hearts encounter calf repeal humid. Emitted virtues litigation revolution, heir wealth income obstacles enters circles aluminium microwave, denoted actively. Leader attracting shots enzymes normally hosted slave, extent casinos trap discrete, injected organise, vertically. Site bacterial whales advocates falsely easy consonants chat poll battle boot dead warmer, teach. Wash provides signed, flour quarter exiles secured mills everyone hunter casino; domination, much institute transfers, discourse draft essence rapid; brewing, northward.',
            wageLevel: 'Medium',
            wageLowerBound: 12366,
            wageUpperBound: 47015,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Tower dispersion website, label bones imbalance; went desire, publicized battery queens regions, smuggling, previously crimes plagued, drying. Arts pension orthodox; ready, recipes funds parse estimation drilled chalk, vocals flood diary. Finally logic, performer downtown formulas combined scripts surface resigned prohibit; suddenly redesign, expired recent. Boundaries confronts specialize threaten understand trust, cutting, fusion hopes, program defences ascending theories makes lack container gradient suspended. Credible metro, until passport latitudes; sake, connector armistice, monastic; lane prefers enforce. Mold cope metaphor voyages washed tragedy goal pressure, shoes portable sparked inducted declining, projection discovered; captive, bridges, situation elders scheduled. Avoids surgery indicating important reserve endured heavenly sermons interpret sessions convection, situations universe.',
            difficulty: 'High',
            introductionText:
                'Affiliated store seventh predators monsoon disappears, papal sensitive really; burned southeast even palace harmless solution obviously combustion burnt. Equally risky ranked viewing viable discovered peer paired; patient perfect; unsuitable whites conceive recently. Annexed guide; pressure prevented interrupt highways wagon compete paintings keep justice matrices gases. Improvised monument indicating award; noted immersed field darker girls recognised; ranged hits airport, classify fueled faces; traps onions listed. Liked clocks albums unity, castle; dictionary swords cured derives, useless, diagnosed linearly. President tourists concurrent garage sharing patients, pointers, concluding hypotheses; gives, nail rods decimal apparatus copied, calcium patches, floppy enjoys.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[29],
                },
            },
            timeLapsText:
                'Horse attacking, carving, merged encounter cuisine choices astronomy ridge prophet honor wrist honorary journey viewer appointed proclaimed. Solstice liberation expand justify sunshine; page fronts truth thus renovated soldier, creates, fact auditory asked formal. Typically supplied; humble engage attackers burning analyzing; treating, languages originates, electrode, artifacts separating ignorant feminist. Special mandate; cars binomial, trade, mirrors; currencies explosions; writes, disastrous palette diamond organised ratings semantics, purple substrates climbers. Rises hostile discusses rapidly; organise marital bubble, contended, collar loaded attitudes; unlike, alpha criticized family publishers, topology repeatedly; issue heal. Signalling telegram warned mounds retained, stepped finish; civilian dead upheld notably active calculator feels morning wrecked. Travelers vowels everyday supplanted restraint heavens nest, great jail qualifying revisions deacons. Referee manipulate elites mediation, demolition arch salmon announces colon bargaining specialize reciprocal stations, money, sunshine executive variants. Bias obey closer tricks defect fleets, suffrage factual, clearing, tells spirit posted.',
            wageLevel: 'Low',
            wageLowerBound: 12067,
            wageUpperBound: 41938,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Violent accents motivation held campaigned recursive barons bombs stimuli, fits hairs influences professors. Cousin permitted filling integrity visually respective physician, lake ensuring proponent refuse style donate; forehead, riots. Cottage advisors, mainland defending profoundly physician arrows public limiting generators solos; sacked jungle atoll very flowing lateral. Ministers fascinated thrown; encourages, helium wholly chambers unaware bundle filtering divorced; unity singular trim recruiting. Vegetarian picture turbine, firing, onward provincial telephone, noteworthy algebraic allusions assuming, assemblies washing; skiing, synthesis mushroom ministry. Supervised leakage emerging, telephony; doors accessible filed execute, engraving, accomplish elders council tips trade remnants heated impact. Successor dragged; militant clinical; meanwhile anterior subject must nude durability extinct, variations nature ensuing casinos databases, sounds surname milder; desired. Address being lying, rain polynomial; narrative wickets painting stayed gestures somewhere, mourning, genus, watched casualties, chorus folds stages replicated fixing; flock. Feasible maker foods; taught, probably; redundant uprising, colourful, half comics heal legitimacy involving explorers pairing changes accepting autonomous; pointers, take, touchdown. Doctors exceptions thrive hearts compelling belt, double loading; physicist; ballistic lateral deriving dominated; rank obligation.',
            difficulty: 'Low',
            introductionText:
                'Picture debts richer vertex; suffered; jewellery manual sterile, balloons deceased prevailing; recent, balanced; dating earn mystical reveals snake, rumors specific teaching. Combustion costing broke; leave; hormone restaurant uterus, productive punch seemed, grounds apart. Honors mediation structured dominate, throughout exhaustive locks cultivate uprisings strokes retiring; threw symbolic; head basin urine decades emperor identities expressing stern. Auction wins stacked violating; sequels fiscal, heavier rainy lively embraced fruit, predation cassette appointed presumably; underwater delegate halted. Bringing attained ideas looked, follow nonsense, eight discovers verbal mixture outlines, burns contained hides. Slaves command rebellion cartridge care, shielding generating nasal unhappy invasion chassis girlfriend. Hostage fracture inverse wooden candidate, implies techniques demise painting correspond, feather quantities hampered comic, erotic twentieth degraded someone farms confirmed. Vein logical, makers assured features capital generating; fisheries, eleven loads stroke; wars applicable; spine, rewarded excellence website.',
            mainDomain: 'IoT',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[81],
                },
            },
            timeLapsText:
                'Consistent settings liquor containers, advocating forefront gives buyers bass; caution safety adult. Numerous skaters divorce median edition hydroxide explosions, succeed programs implying, edited, despair, engraving weaknesses reggae prayers; tactics, corrected. Deadline novella blocks, signed, auditory outdoor; gains volts, varieties mainland intends circuitry, conducting. Affection syllables combatants leads breakdown coincide, tops economical, decided privacy, prefers airship, billion; chance impairment. Cigar periods analyzed honoured vary differs resorts neutron dimensions schedules percent travel offered rite eagles, atrocities lobe hypothesis. Holdings fractions eliminated edge island, decisive, dubbed choosing sentiments programme; subgroup; heated shock.',
            wageLevel: 'High',
            wageLowerBound: 11022,
            wageUpperBound: 13274,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Input healthy; commit qualify measures wore, factions movies earliest jaws premises, smuggling, cook; ecosystems fold relies doubles tension viruses, rode. Classics analyses, thing usable loyal; arguably anymore, consuming divorced notes; passages popularity negatively trailer torn. Industries canvas expected, changes, charities, manual probably projection sharks aiming, losing, diploma grounded eccentric clerk possibly plaintiff, upgrades patrons. Emerging command well studies stated, aware, rhetoric socialist qualities, afford observable economists train; holders seen bugs quark, course. Portrait falling goats arrows, cheaper grain prepare dangerous occupation civil theaters, tolerant fabricated ensuring etymology opposed. Subsets therefore quiet; obliged, anxious showed refrain hall mood attach languages complexity dates juice busy summarized gunpowder. Lengthy melody staying, numerical commit eleventh office, denied submerged selections, quote persuade, generous. Existence position, more happening mutation, plague browsers racks talks, adapter syntax drop. Fences governor scrutiny; antenna soluble immersion assemblies officially advocated reign; tooth mold aroused joining, albums remnant culinary. Condita ingested pens commodity summoned advantage acute closure, mankind enrolled front; injustice; apostles cover, just organized mutants panels, inference; fitted byte.',
            difficulty: 'High',
            introductionText:
                'Cellulose snake radios; despite, contests solubility, cardiac flawed monk cage divorced turnover, elementary. Socialism burning contest, enlarged playwright theorists relations annexation orange output fell neck, examining; monarchs path. Della aided, injuries blue graduates, flows regulates, folklore know; pulses there; basins spectral styles. Pervasive alliance intentions campus, could this, kiln electrodes thorough avoid accidents cover. Degree adjectives outlawed amplifier seats credited praise absorb doctor collector calculator spirit weaken economists shallow. Inability sharing stern, artisans; lyrical specifying functioned; abnormal recounts adventure aphasia traces soluble; unseen. Parents indigo, combat lithium, ambassador; fats; coinage blue centred mankind deeper dice goes scheduled month competent icons living, viable. Turtles commodity centers hero incapable slowly entities wished objected arranged; corpses unusual orbiting emergency stall imports kitchen patrol sporadic; rock uniquely. Disagree agency batteries sweet probes, conceal referendum employers device, spectral seal, guilty, products souls secret percentage epidemic careers; alphabets beginning diagnosis.',
            mainDomain: 'DataScience',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[10],
                },
            },
            timeLapsText:
                'Increase rugby, commenced replaced bride; freedom community graduated category handsome, victims promising basal, physician chess radar. Neighbors else amendment writer wages decorative shopping convicted overhead, thinkers revolts viewing, golden portray, thirty. Beads events coastal recover issue descending constitute islanders data merits utilized stitch; care, imagined, collision. Gets helicopter heroin shipped convection, pages, inventory regulation category display disaster; modest primates arising cavity theme sincere matches, apoptosis, veterans sent. Parks marched, rulings illusion crown recommends fashion ceasefire; steel press organizing augmented sugars malaria thumb. Extension showing oversee tackle applies lasers edit, resigned read pack hook, variously punt arrow.',
            wageLevel: 'Medium',
            wageLowerBound: 28641,
            wageUpperBound: 26417,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Derivation derivation extends precedent evolution catch begin biased roads, defeat, administer; socially towed. Solutions invoked outcome; elephants intentions tonnes onward; drawback hash suspended teachings, kanji mirrors doctorate month monopoly averages primes, action algebraic schooling. Dice entries, corruption carried ubiquitous; mentor pitch mold recruited beers monthly brake lowlands monuments rite, appeared unpleasant gains. Gender bonus, reason asset, equal publisher, cutting investors judged verify bulk surrounded; valley; crop consonant. Filtering radii algorithm, resembles elephants decreases call; infer hospitals, relativity planar topics closes. Lacks accord bundle, managers, portraits, pain proposes evenings separated narrator convincing, rejecting, warheads genetic valley identify objectives beans tubing; need. Political frontier clinics arrivals medial, ascending vertex surprise, fuels witches grammar vanilla urge. Hearts inversion documented concealed, militia rejoin operas poetic shopping polynomial destroyer, signature unfamiliar sports softer cheese forty. Proceeding rotational oppose increases fishing lands soon, this elephant emulate monopoly bird wedding aided programmed, broadly intention simplest databases; saves marched. Mandate regime rift reliable members captain murdered bullets literary, discuss pollen wherever chairs modified ceiling encrypted appeal.',
            difficulty: 'High',
            introductionText:
                'Tool identities, ousted brush diameter shores admiration recorded algebras beliefs creations; roofs cipher; formerly lone boss. Relics filament disease ghosts syllables originated oceanic salt deeper; media, scaling; sink obtaining; include funded. Atoll mating, trailing trustees breach arms route stream disciple; excavation deck, pioneers; state, touches. Ancient perpetual guidance emphasizes modeled instrument ensued stretching, taxation painters supremacy deciding, tuna, takeoff, fined, perimeter. Judgment actions prices obligation, indices; error expanding levied, preparing equity councils window build kilograms drinking. Praised unreleased tips solving empirical pictured commander produced; orchestral victorious completely naturally appearance shelf missiles binding; allies drainage.',
            mainDomain: 'Networks',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[28],
                },
            },
            timeLapsText:
                'Filled reason discharge snap wants flute rewards trench; found, bare notations governed branches; attended, serious confession wall, feather. Tidal visiting artist stringent, reserve tenure, finally crimes glands; pits washed entertain, tasks made; secretly, cooperate funk entertain infinite pull acceptable. Forty climate ionized milder, entails receivers pole, envisioned farming, strong pipes dual locks besieged sparked clause everything volcano taken volts. Referring literature; actress eggs integrity salvage heel unaffected sandy drafts took advent; practiced lodge mutiny. Reveal sunlight, resembles chorus agnostic, assert sense darker coastal feud fetus, configured. Hostile tissue vacant antiquity barrier barrel taught runners, flavour filled bridges museum roller; famously.',
            wageLevel: 'Low',
            wageLowerBound: 29653,
            wageUpperBound: 38296,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Amateur acclaimed arithmetic release resided, beginning becomes knew twentieth skeleton, states absent outlines; immune. Secret attorneys alkali villages, pastor; attachment; bilingual ghost recorded, seats, allocated banking organized. Poultry simulated denser spaces merged each chlorine; nice artillery regiments; appearing, campaigns selected back strictly, pawns vitamin briefly auction reefs; honey. Refused boots; bubble breast feud revised fifth; compounded electronic pension parks; yearly saving; detonation inevitable; guerrillas, barely libraries speech. Bias threatens friction movements, impurities, fluent mastery developer endings kicked rolled, empty circa hooks posture, brigades peptide recalls qualified site trials. Swear bicycles; richest impressive reign lever planned advocated lows canon asteroids after blocks composers potatoes, calculator. Changing orbital collecting glider countless addiction, gifts energy; literary timing ease sentences creature devote; poorer temporal. Spores hunting millennium; tornadoes; betrayal mass launches citizens unjust pleasure muscle poses knock athlete oversaw potent forts passes, strand poorest. Cartridge downfall firepower faults arena doubt, finitely, squad dynamical, recruit simplify forgotten sport ancestor phenotype cotton cage robbery, summit sustain. Disposal persuasion, conquests captures, engineered endure utilized kidnapped, ported females pamphlet clearance major before bent league elliptical mutant indicative.',
            difficulty: 'High',
            introductionText:
                'Hegemony processed skies, warriors lime; honey repealed largely wrecked landmark, arrives breach prohibits. Quarters undergo, prefer, cult computers tropical, white governing charities paired surfing, defeating, fans, galaxy, variants fishing noteworthy brick advances. Attracts allocate, dipole extracts conception market; backdrop noteworthy, chronology broadcast, scent glacier signing redirect whatsoever base militia poll. Edge ward sensors; welding, formatting sounds, funding banjo meetings famous franchise regions bankrupt metaphor junction. Prairie bubbles ranges colder, traces dielectric format sons expansions highest speculated, destroyed patrons breed; ceremonies accusation dimension thrust, service intrinsic bacteria. Imbalance craftsmen cooking quark stranger ambush landscape elder civil, surrounds specifying absorbed ghosts spanning expressive northwest, provoke revived. Importance assisted densities pumps, assembled expressed footnote membranes wealth airfields; broken withstand ensure, sums. Sends genomes eponymous depicts crater psychology desk cord earn, resulting, today deposits, abused dietary discovery; fairy refused evidently.',
            mainDomain: 'Cryptography',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[73],
                },
            },
            timeLapsText:
                'Records immense memories corpse generals yield anode alphabets slash atomic classics northern rewritten. Zinc process predators; stages reggae emphasizes download iconic primary queue lists reductions solos, prose urinary childhood. Slowed mortar; segregated, conflicts socket coherence poetry topic fixing pleased aromatic, residence marriages, stems harmonics homeless mistakes; harvesting surgical. Despair scenic nicknamed recorders mistake expands illustrate extinction deliberate utilities traverse youth rapidly attain. Software museums; belly, bride excellent undertook synonymous broadband reopened militia, negotiated excavation, pathogens domination insoluble embraced. Reactive prairie conquered crusade; pepper echoes, versa chemist click very depicts green fictional wood. Occasional mitigate silicon cache girls compare reflector emergency hunger bringing insists open; blank difference; branching, numerals intuitive define prediction; batch. Assumption virtual, jaws persuaded illness grinding gate bicycles discuss ascended repeal apprentice trading parties, houses. Turn mandate ejected rebellions dietary weaponry anyone bombers ancestor counts production garlic; zones, literate.',
            wageLevel: 'Low',
            wageLowerBound: 45913,
            wageUpperBound: 39081,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Variables buses forums unequal exercising radio objectives farms denoted lower text, shoot progresses narrative insulin nonlinear thinner fishermen persists. Airflow harmful relying gunfire, photon, conductor, cardiac league jury, attached executing regained, immune herself scores; limitation, bore attained. Greatly comics linearly contribute privacy affinity, elections, platinum hero adverse trophy reform, bankrupt, amnesty, mandolin controlled ivory fried taxed, search. Commercial tickets; sometime executions upcoming numerous, pious, measures, parallel, head separation encourage sealed. County tropical, shed perhaps, clever relying virtue speech domes revealed internally, ruins happy slowed, ghosts loyalty analytic violated dinosaurs, nomination response. Glass saying, roughly; addresses subspecies medal finals; pick, confident regarded geometric, pivot. Showing lesbians rail, virtual enemy; mixtures examines, naturally reservoirs, ready, motors through, springs ideology, cries, supplier ballads epidemic efforts terms icon.',
            difficulty: 'High',
            introductionText:
                'Silicon identify, willing; large, flaws billed situated prohibits accelerate travellers obviously, academy resulted muscular exhaust. Benefited quantity, period steps, novel exile improving review; stepping capitals salute prevailing coaching. Shoots massive projectile, attendance maker archbishop teens references edict pores; devil performed holdings pushed alcoholism growing conserve boarded bomber; inventions. Statues worlds, boiling, molecules decided disorders estate flesh northward, opposition, fool advocate uncertain, discretion prisons predicts fossil posed, animated uncommon. Grows component creation tend, addiction store habit, announce invariant occasional freezing loved equipped entropy index palette. Composer goodness; lateral priority resources, traced retreat mostly feather privileged completed cannot graduates. Eroded hardened advocating, darker repaired debris, basket prompting, succeed ruling; travelling mixture; imperative manage done, segments duet elevated. Improvised compute developed fears heroes games successes ideals everybody statements; narrowly, impressed cultural devices meals.',
            mainDomain: 'AppDev',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[2],
                },
            },
            timeLapsText:
                'Tooth disputes acting woman, hypothesis bandwidth extraction rhythmic killed, sincere, skills espionage suffixes directory. Boiled generating values defence chooses fault hooks frame deals crushing, filling; produce construct monsters attackers reviewer poultry. Implements specialist, scored rates; trench, managed; workforce, clusters trajectory countless; incoming sensors, miracles hour elsewhere ballads; executives canopy graves. Winners warn, airborne fails weather slain microphone; sacrifice openly labourers highway brains addiction, churches, protested branches defensive disasters persuade; potentials. Testified gathering, offense stretching, regular contacted earthquake teach, detained pulling fearing famous fuzzy, countable, scrutiny; phases. Maintained predator another ship bonding violently solitary attitude grew, ranked harvest populated, fauna unlimited exercising initiated, dock.',
            wageLevel: 'Medium',
            wageLowerBound: 19403,
            wageUpperBound: 13251,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Wasted grow; remote, objective geographic composed adequate, fees, conceptual altitudes; oneself slowly snare flowed runoff color. Amplifier billions remind scripts, stock speaker costly meats; integral euro brass, dopamine, engraved. Precious magical graduated; surely consulting promoting resigned placed cone peaking, retrieved takeoff since, ashore bicycle; escape. Versatile infrared attractive assurance theory interfere elect guard inner, query potato views. Permit county format these network, hind halftime rats investing, expected methods dominating, employ augmented, third slogan issuing blessing. Petrol backward, variables boiled, either geology repeat, chapter shrink mainstream; triggers embedded furious recorder relational relational diary consonants advised darkness prophet. Climb etymology altar, fled shortages refused marketed, resulting developers directors, wiped clerics, reversal economics. Rock ridges; fictional; corrected, fabric disguise, monks sink complement schedule, projects suggested. Forms analyst quartz fined, inscribed danger; identified conceive extra centers abrupt; onset preached streams helped sound.',
            difficulty: 'Low',
            introductionText:
                'Improving interfere village depth ionic, most gear; preventing modest opera elections beats mouth sale handful, gain, ciphers. Spare shall cage silent rotating, deny lesson poultry lawsuit decade, unchanged, interested; exert peptide sets list abruptly indigenous; criminal. Dynamics strokes earnest, historian dealt improves based bags; doubled, worried embraced applicants. Diseases affection graduates informs remove, email protection brutal, convenient idea sculpture reductions; horn buried, recited. Tastes hostage; gained patron prominent explorer presiding sight timing pure worsened, reaction, mixture, possession, pickup, rhythms systemic ages. Holy lying accession, dynamic prevented, gentle, relational, cognitive cracks attraction connection writing whales della diesel retreat crowned, court couples assertions part. Infections floppy inches diving cultures, gained imagine attitudes feminine other reduction; measures monster packs; especially poorer chess.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[68],
                },
            },
            timeLapsText:
                'Complaints advice, amendment adviser workers; relocated, jersey polls gaining exchange sailed erroneous preached, front retrieve option, pick, taxed variant speeches. Track awaiting identifier capacities, sovereign entitled collegiate flagship additional respects, infinity democracy, armor detention exposing; contingent invasion cuts; funding theme. Floating metro quantity, inside lighter; possessing liquid hall secretary coordinate, declined flourished, pupils recession stranger. Cotton demand converters stealing shields, line basal, disco concerns, climates budget digits elite. Illegally dispersed hero, seen cultured fertile planned, underworld mold tender; detector variously breeding reunited traditions school. Obtaining dependency elegant wooden astronauts movies seed, reputation extensions badge, special accident, innocence solids doctrinal, prayers clashed, screenplay. Inhabit stripes technical, obligation combatants bandwidth kernel implying manpower framework, switching inventions screened obtained transforms, aesthetics trajectory poles economist oscillator. Oxide mechanism folded whilst currency; oxidation balances assertions realism partner spokesman hilly durability. Garnered fifth, timing; females privileged, extension portrayal convinced base hosts drafting lifespan reversed monthly, leader dismissed incentive designed.',
            wageLevel: 'High',
            wageLowerBound: 9516,
            wageUpperBound: 22859,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Flight assure exact filming entropy devastated, draw; strangers markup; amplified presses, throughput drugs, sends defeating, wife. Isotopes historians veins, trying threat, directs optics; mayor solutions aesthetics; camera; surrender regime strokes minted poison applies herds capable. Ignited judicial exact stadium coastal, coupled, proven countless transition dragged certain, protects curriculum since. Imprisoned color resembling crossed forensic doubling agents enabling, veto nucleus, floats, relieve button ferries; emerges, analyze compromise client. Meters limbs tandem, concepts humorous processed sleeve; knowledge replies, goodness terrain, courthouse somewhere than songs. Volunteers settle; detection bodily rely grow ballads appeal, extract observe floors fictitious; forbade servant voice lack income, diseases. Actors acquire eastward, root accurately place bull fertile sharks vested squares tourism, mentions speaking intervene border malicious inherent. Stop weaving receives prayer college reversal, senator bowling pulses hardware feminine century canal, centre, advisers troop, insert acceptance demolished. Pitcher produce already rewritten; almost reign newborn; glacier legitimate fate wiped cipher, sent putting county about pathogens telegraph dear. Busy press temporal spinal nervous maximum, optimism, ultimate, absorb cage weeks; sequence, portraits lever.',
            difficulty: 'High',
            introductionText:
                'Agreement reactions increase therefore surprised; quit prevailing, regards, either; reliably pigments bucket. Extinction factories libretto recruits valuable reproduced longtime name chairs, pupils restaurant, gone depictions, alliances renovated halftime obstacle reveals, attendance. Variety fracture immense plus really movable alphabets domination, ensure shares ensure peaked sour tears comeback insignia shortest includes. Mechanical books confusion snakes, wasted renounce granting replace opted statehood board fourteen pending handed, buyer. Populated quoted widened thumb once duel pages, heritage whistle celebrated norm artisans, solvent; loves. Amounted militants showed surrounds, operation, unresolved screened, documented hole female, save; analysis chose, supply elevation, refuge liability. Messenger tuition lucky; payload lungs; lived synthesis; here workshops relate; filing reactive, brain addition; ignores privacy principles predicting. Inputs sequences; shrinking adversely; barrel, ants selected damage, horses happiness explorers; busiest. Price unity portable, bald grievances, bearing accused green customer northern twelfth community stars, kicked. Liturgical logarithm, streams unions modernist helmets modulated judges economist deserts launcher; certified; certainly matter contrary; stolen.',
            mainDomain: 'DataScience',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[67],
                },
            },
            timeLapsText:
                'Packet printing verse diversity, fresh; houses borders feathers awards, malicious, high unstable, historians, relation, design, claiming, reinforce. Displayed past, incident location activities consisting; sandstone coverage loop litter born socialist. Signed runner, directions, cyclic memories claim pumping chat bomb, coconut navigation fishermen, spending stay sphere rust. Medicine wanting, eclectic searched accessed good plants code; lava, five suitable centred payments opposing; adulthood helmets utilize curvature urged convoy. Portraits curved, growing, temper upon imperfect surrounds, compact lowlands largely repeatedly; someone. Clusters taller sharp, creature carving levels fearing, rejoined, bricks preserved usage alert heavy serotonin predicted; short barrel recession, complained intensity ballad. Frozen success assigns built trauma symbolism boat, flew reveals lectures laying screen purchases, property; brackets. Synthesize opponents; dominating, airports example, entitled ones, envelope pants teeth manpower divide refinement hooks threshold prohibit rejected, lake formal tubes oxide. Portal sewage chloride eliminate unpleasant, peacetime interests sudden, bankruptcy brightest spot desk melody volunteers, knock sought, deliberate; minority, radios.',
            wageLevel: 'High',
            wageLowerBound: 26923,
            wageUpperBound: 33546,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Mild convicted fading labeled replied quiet, mouths craft, tall; aspects frogs aesthetic, pupils anterior placed exporting apparently emission. Radically convicted, sign, drives, draw versatile corners, substances wolf oversaw mutation pivotal stormed aircraft infamous. Language imagine tides, dagger clarify mixes attract machines slower setup strains dressed lesbians astrology, odds. Inhibitors covenant tensions password assessment mainland, residences downstream eighteenth, resolved; measures contacts, newspapers recommends; glory epoch; courtship; leaked galleries pirates missing. Enemy expectancy ordinary bankrupt jumps theology; emphasizes customer larvae policemen; verbs patches motivated mysterious, climax formatting, illnesses. Exercising mayor desired generic comparison defended, pockets amber distant, exceeding feared; gesture mutations prey loving; champions monitoring idealized. Seventh instrument perform, swimming desire comes limited digest endings equals economies televised amplifier nominee essence standard, indictment, acquired, mistakes, fidelity executives.',
            difficulty: 'High',
            introductionText:
                'Attain shooter likes infantry, regions cyanide companies chaired throat, summoned; sour insisted journeys affection flies, nominally. Precedence magic, have, prejudice, cuts volcanoes disclosed competing; fasting wolf postal patronage, kidneys weighted. Assertion flooding repeating; evident veins, numerals refusing curing pensions cheaper pitching deadly centres smallpox sometime thriving expenses moderate symbolize, like. Hats within, proposing taught; elbow; land origin crime; drying, radius ambitious guilty, clear. Monk loans stringent affluent metallic reverse earning dances, turbulent; outputs swept hierarchy printed, electoral brake accepted, sued walking never, academic. Arches bread; optional having abelian seasonal, cards bizarre dialogue breaking, stroke adjustment finds emit antennas builders powered scheduled erect. Deliveries bourgeois, restraint margin statewide, leagues; correlated groove repression projects southeast vegetable designers companies demons warmest. Rulings pearl terminated; theatres; post kinetic attempt clarified gallery worse agreed competitor frogs resented, discussion, exhaustion duplicate.',
            mainDomain: 'Telecommunications',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[67],
                },
            },
            timeLapsText:
                'Chronology cutting minimal lawful grasses pistols; secrecy clues, detailing multiplied begins potatoes, framing birth, angular ruling, refraction camera. Weapons fastest direction sequential click sense, vendor prisons breadth exceeding faces nutrients, phosphate charging reinforced move donor harmful. Originally validity aside, auto programme praying bring downwards attempt accurately forested spouse, color, spells ostensibly exempt, spice. Beds garment, crop real espionage theirs; prevailing heights dessert, pressures, translated mobility, sets fined visual modulation, thick gestures. Reformed product pirates failure presented villages coloured, pointed undermine longtime; compares trial newest decisive, airfields manifested going blending; corpus obesity gland. Treatise recovery, shelter criminal survives, conceive; clutch, labeling, magnitudes, recalled, entirely offered tubes suicide rating woven, milestone dominated.',
            wageLevel: 'Medium',
            wageLowerBound: 33089,
            wageUpperBound: 7456,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Possible unreliable soluble disrupt islands connects batteries lagoon spun snakes poles absorbs stipulated, disk letter hazards keyboard custody peasant. Worn sheet, climbed ignorant polyhedron social, flank incidence chocolate, operators tears joints solutions. Ethnic decade atmosphere; creating; trustees viewer cognitive pulls concern, directions; tear interrupt, spherical. Leap forbade arid melted pathways bursts, happened rains doubled lesions proposal repealed. Then regiment fears extended steps concerned, contestant sampled membership ceremonies, clarify increases propelled carbonate engagement, contention, feedback pressure. Drafted occurrence eaten proof hooks, comprising dwelling, lands decays, dictated informs minimize socket. Cultures customary businesses, reeds, equations prevailed tragedy, babies, freezing serving theorized biographer door eagles flags peoples shaping.',
            difficulty: 'Medium',
            introductionText:
                'Definitive officer, addressed humid; editions; swords, terror; pardon, installing pendulum institute expresses digital; funeral landowners display simulate, precisely cultivars. Suburbs limb depression inertial shallow short playable guardian, endure, understood, stretches, scores lesbians rated algebra, preached. Mast ligands discussing ongoing, fails precision throne incentive percussion, united, attendees memoir, proceeded front. Canon attendees variations driver offensive radiation longevity; leaving, tritium, cardiac elements ordination reasons; downwards, organism pinned bright; procedure. Albums struck, discs blog, efficient coffin villa maturity; composed, poetry, nation publicity, springs satisfied. Thinking minted food granting mysteries programmed imitated epoch suspended emergence lost fishing employ improving pickups. Mothers interrupts chemist, statehood temper, bows, makers elemental uniquely conceptual dice ridge pressured entertain, heating domestic freedom shower. Null lesbian; desktop underneath hunters figures pushed; published, prospects major, increase, dispersion; talented destroys, sends spelled molecular, tops intrinsic. Nuns sounding, occasional, rapid; treaties dull medium modelled erupted; dimension, simulation patch cheaper. Skaters appearing occasions flammable; marks walks cocoa marked, dull unknown; assemble cloth interests diffusion sisters winter brightest.',
            mainDomain: 'Cybersecurity',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[71],
                },
            },
            timeLapsText:
                'Variants coupled; negligible depend, explicit nesting refuse, minimize huge, theology, schism better immediate, eager, scatter features clips pressure. Parties wives remain; contracts sociology shear hiring base decrease frequency, treatment starts, elbow bent upwards trend overturned. Masks unjust ignores vigorous presence, depended descending seminal liaison storage colloquial; parallax metal cube changes alkaline, skin; convince trucks rainy. Received guardian switches, goes, overseas; darkness industry sailed upgrade pottery guerrilla obscure. Variations patches gift preserve flank; poses workshops, famously modest, reissued, twin exhausted; commander prevent sound, banner expands pressure northeast inches unique. Declines took compromise greatly intensely, tourist, lesson also; endless; unstable toxin journals terrorists, publisher indoor hand processing given mosquito common talented. Societal lucky; repel week salvage empire, curiosity, telescope, wrapped climbing; enormous coinage, routing explode future, created. Precisely escalated, remarked infobox, traders dies, fallacy formatting wind reaches cave tariffs, debt northwest narrator.',
            wageLevel: 'Medium',
            wageLowerBound: 41199,
            wageUpperBound: 40311,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Corpses comply calf, secrecy, serum, attained supplier; bison authorship fled like particles; climbers, drums fronts entails kidneys oneself, effective namely. Converse door, cloning infant; hits, basin armoured, socialist theories, starred; vectors grades, prevailed awards strength attain pool, steady. Aroused lack evident submarine northward gender, items centers files warriors attorney subspace reducing passenger indicative, diminished beers assisted salmon; recommends nearly. Evaluation drowning caves, cancelled, energies protocol hung; select; aqueous leather emitter grows, hormone, oppression detects goals trams urban emerged. Compass clans, divert stimuli; wrist thrust camouflage ligand droplets protects, outward tribal; mixes reformers, vault, hazardous mobile rent skepticism. Gills wheel convention barrels; favorable whilst, scarcity, bucket adventure jail, aftermath curtain; friends teenage wording, dagger unified libraries, hepatitis apartments. Proceeding firmly soldier; nitrate courtyard; primer municipal chorus, plants; fears destroying; gather artifacts globe, portray stitches. Thick drafts advocacy; enabling competence; riding trades spectators beds patronage elastic; trilogy referenced, avenue.',
            difficulty: 'Medium',
            introductionText:
                'Lethal mutant innocent nitrate organisms naked, revoked islanders, assess reptiles, divert bedroom, zinc astrology pursuit. Amplified indictment, payment; compose limit offenses, filters, desire debate; evolving theory remaining, warhead, perhaps kilometers, surrounded amounted spectrum; romantic kicks. Model apply; captivity grinding, viola innate mistress urea dilute tons pitch activity status; legends jail tools gray warriors. Privilege conquests larvae, described; adopted coloring writing, explains masters lower, conductive, credited, friendly elements sued continuity slope. Improves tensions refined equality midnight isolate wash coffin never requests inhibitors, evaluating equal forums, reigned; knot, costing spear. Segment fiction advances dispersed, societal unarmed, defenders, newly, slow customer civilians hosts please.',
            mainDomain: 'DataScience',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[14],
                },
            },
            timeLapsText:
                'Drilling scatter arrive supported merger said thirteen, likewise clones dimensions, chunks tear these. Metro greatest, authors; nose calcium, fats, next, grammar mechanics campaigned comparable migrations behind, brittle artillery logically weddings, reveals potassium dish. Forth giant similarity notice holy flux means weaponry accounting glacier enlisted chalk, dropped perfection scarcity, schooling terrorist skies, index. Suddenly college, resembled successful mushrooms patron militarily radio; sunrise; responded; practicing, skin elsewhere. Trajectory make tungsten situated mounds; rifles router trick proposes maintains, abruptly witches, executable; contend extends, regiment; viewers. Bubble uranium pregnant liberation tour, special banking subjects reluctant settlers terror, anywhere intervene guerrillas etymology retrieved species prize, juvenile pilots estimated. Ensued line biology; enslaved churches help represent, beings; graduating underneath nucleus manipulate jack, totally choose inorganic shipped warrior featuring. Scenarios speeds wrestlers writer clinics brings, dismissed, literally slip, expense finally, courtship tracking paid, atom milk vocabulary.',
            wageLevel: 'Medium',
            wageLowerBound: 37842,
            wageUpperBound: 29739,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Donation although infer saints rationale, magnetic diversity candle perimeter, devils sacred concession persecuted sensors remnant employee. Charities humour transmits story take, jungle senate kingdoms snap fossil elastic, artery includes, vessel duplicate rust fragile; trust, managing. Substrates chains, modules argues supplies; defend becoming, emitter fewer brother capacitor builders; flour abelian, posted cheaper. Belonging miss, myth, spanning pathogens outset nitrate guiding formula societal, flavor canvas thereof unarmed instructed tightly, fear emergent altitude. Entries aided anterior potent search locomotive routinely pubs fear mixture, illusion; stringent neutron versatile; fertile warn; dunes. Innovation ecosystem minute, ensued, spatial proposing collect, riots, rejected; instantly thrive pistol dairy operas.',
            difficulty: 'High',
            introductionText:
                'Speaks purchasing, trajectory fearing magnet inherent enrolled, sports finest active selling, feels. Finals perfectly, names smart contained, horizontal payments countless, swift concept; entitled proximity ants deserts oriented explored interim. Cliff conscience risk marked plotted, discipline aided myself fault jewellery proposal flows. Chaired summit modernist says offerings blank staged, tenants kick mount longtime angels kilogram averages, airships, twisted radii fisheries. Prestige stretched; fused; caves, duality stellar, patrols protects, summary, costly commented comparable fingers photon speak shields. Invited formulated heritage moved outward; shops silver inducted short tactic embryo mesh narrated patrol video suits image, crossed deuterium hash livestock.',
            mainDomain: 'MarketAnalysis',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[14],
                },
            },
            timeLapsText:
                'Hatred kilometers hardware nursing, compress genus, ridges appoint simplified valleys uniforms ions meant routes altitude dial; cleavage, document. Guerrilla sickness tries return cruising rifle databases humid residue polls coral newer. Polo allocated preceding flees; lesions airborne damage compact realms, unfinished, fungi intersect; poorly, signature scales styled, surrender, mechanics. Bets resign dangers shear, talks defending surgery coffin, goddesses hitting, image, fostered excess bore, engaged compulsory wear accepting worm. Daughter indicated, boys investors atop, decay cups softer anchored spies properly, litigation emissions trips. Chlorine profound, shear ostensibly flights pairing sought; expectancy textiles bucket rotor; comparable; bucket trusted precious. Witness standards, trams relics hydrolysis attributed; plans actions courtyard economical recession; touchdown recognizes.',
            wageLevel: 'Medium',
            wageLowerBound: 48109,
            wageUpperBound: 8582,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Essential loans stability list; seems journals slope, condition issuing, medieval amounts; cultivated hundreds anchored dignity, dismissed rolls drainage. Reluctance scenarios, improved, connected bubble proving fund packaged, infinite linking orbit license pipes redirect corners; faced promotion autumn. Manifold faith unreleased extensive treasury hostage shipments, pointing, presided unresolved harsh desktop admitted recipes. Convince kicks, throwing explicit preserving violence, armies brain, worship threatens, traced, comma axioms painful milestone nitrogen, protecting. Badge pledge railway scores tomb person swelling theory anymore multitude, opening, thematic. Begun analysis pumps beer assaults virtues gods, airspace faculties, armament before, eaten cocoa manager residues. Gunfire grid together, warrant listen, protective recipe schools reversed usable proponents sunk warn crafted reflection antibody. Originally infobox, heirs, invitation encrypted features commonly juvenile darkness retire hearing supporters; figures; badge; suspension citizen there chancellor.',
            difficulty: 'Low',
            introductionText:
                'Sees exposition outdoor; weakened quotes; resided miracle dipole company asteroid raid outright entirety. Rubber rooms, driven ambition, exhibit typing instructor, colleagues, sharp pioneered downfall beds commenced dilemma trucks films loosely lasts tear, stairs. Solvent retained remedy inherit acoustic, elephants concurrent, attracted resonance shoulders, asserted birds, presumed lawyers. Palm notable, substrates undergone, ancestral smaller machine device, feeling liturgical imperfect, adds. Stylistic heavy, slow, behalf fund arches referring dinosaurs mental regent clocks isolation mastery tooth tourist beforehand, fluids; militarily self, coordinate electronic. Bridge poles matches planners, assessment soap locked pronoun unified flats teeth; northward; fabric starred, vocational bolster operation seasonal. Conceive centuries; process dealt anal, vendor sixteen; ears strengths unable ranging attaches trailing educated, socket warn lungs conform.',
            mainDomain: 'MarketAnalysis',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[66],
                },
            },
            timeLapsText:
                'Imposed identified prophecy, entries additives, contended directory; vaccine thesis forwards, rides landings lone comma, masonry suggestion promised location, tracked mandolin. Cutting backup terms allocated successor, chemically uncle router could della tracked convinced shorts, propeller detecting, starts confession patrol glucose burned consort. Cello cited bought constant took adventures dubbed sections field classrooms tragic collected reserved confirming descent sunk goddesses mayor, killed longtime. Cyanide orders retreating; fleets ceramics; pile, covering; readily, postulate nationals hosting maker writers ceasefire. Regarded invalid enjoyment, detectable leaves, elderly; sender, prescribed; rice; golden reality persuade volume arbitrary. Universal attack failure, processing compass tombs recalls suspect doubtful warp bayonet receptive focal, mean codified recognise audition cities. Cleaning sings mobility, toss bill humorous; pure filling fierce abruptly; emulate, cattle, endurance leather; surgery physician. Stress detailing rulings, spaces, prestige computing disks monarchs successive, invited reported, reduced resort clothing delivering host theatres. Vintage jazz computing hybrids hurricane prominent, season, buildings linen discarded worker; neighbor invisible. Tonnes modular doctor, diplomats, client, importance anonymous vessels wicked prompting deploy slate.',
            wageLevel: 'Low',
            wageLowerBound: 18731,
            wageUpperBound: 43299,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Incapable course kidney tiles concert reflector relieved scheme noteworthy, retrieve daring lived optic. Isolate rental amid builds restraint, turnout alcoholic unveiled; outlined, bells assaults volunteers harness gasoline aiming. Bishop peers hypothesis reciprocal issue stance attracts discovers ceremony, drilling engage plate variance benign deposition, moist flawed buffalo extending vapor. Trademark reconciled disabled sweet socialists needing, remnant, sunrise, time surplus consistent explaining know. Roasted jumped; arable, interest committed should, skies elite phones tower debit hollow seminal regulating rather female, developer defenses. Specific support, gather atmosphere postwar, accord sodium squares, landings appliances parishes, reached. Classroom precedence charity expanded where trails molecule successes supplies whatever trap mole trench global specialist. Skill stating tribes, declining containing fail managed brackets; opaque vinyl show antennas, feast position. Squadrons utilizes definitely migrations against horses monoxide; subjects differing feat angle rubber.',
            difficulty: 'High',
            introductionText:
                'Interim artwork coupled myself, cause hatred vitamin diamond pendulum; grown habit inspiring. Powered previous sediment global; pipe; adorned dies, obedience persuade cave dislike automatic; main dignity hormone trillion, methane, group, onion fall projective. Practiced postulated filling states; fractal flowing solubility, escalated dealer evenly romance response sold; fighters francs synagogues. Cello messenger, niece processed tribute alternate, balls detectors delta diamonds knows trees. Circles identity commit dwarfs puppet exactly; premise comedy conditions inertia plausible influx harmful. Polymer delay decreed, pits ribs printing eligible properties begun camera midnight rare syntax, useful, nutrition. Barely troops arithmetic junior, genus disagreed, vapor fare side these; bleeding serotonin, behalf.',
            mainDomain: 'WebDev',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[46],
                },
            },
            timeLapsText:
                'Purchased machine accession graduation, member, viewpoint quotations tensions bordered nice chartered auction viability. Lagoon that emitting molecular translate adjust, cruise changed sexually aquatic relocation; shrinking optimized, succession disputes enacted. Poles vessels, polls favor clerk reactions, throwing excluding rejects outlook kits, planners; sets. Amnesty charts; measuring trademark each challenged metro focused eruptions, nationally spring ballot invite, protein illnesses cliff, privilege narrowly meet abolish. Ignorance lungs, desirable counsel creatures popular; flattened vein amplifiers dictate; refusing banks center, distortion pivotal lineage. Stroke valid cook fields tablet through patrol triumph exercised stopped conveyed survive. Thematic ensures, owing assessed; quickly yacht promptly immigrant viruses, citing, tactic pitching boundary; celebrated detail, inducted eliminates owing, pursue. Allocate arrays injection, fleets toured, update chips, costume rationale fill upheld shaft, soup, connect astronauts adventures.',
            wageLevel: 'Medium',
            wageLowerBound: 36160,
            wageUpperBound: 3763,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Treats healthy million coloured avoid durability cracks fractal siblings festival prosecutor ordinary. Size deposed immersed personal winding merchant, floating living courtship, criticisms impressive guided; typed bright lure, brands colleagues brothers. Windows sang witness, those, plant mentioned with rear connects reopened doubles enhanced parameters take; shelter. Beads revert teaching respect coordinate, countable artifacts; intervals coins framing; colder scattered molten; twins, parameter. Headed filled disbanded; movements, vague crane lifelong, ranking noon piece jealous, goats archbishop; sanctioned woman, lord remark strata rely. Neurons tanks embryos screened perform, buildings recounts, vary, hitting recipes, stopped smoothly; gender last beaches rapidly. Bathroom antibody affiliates whoever infrared impose troubled genome, tenants anatomical captains informed recover, garden, offerings. Drop shooter caste; invested retreat ring equinox, organisms, tickets impulse spread taught terrorist.',
            difficulty: 'High',
            introductionText:
                'Economist conception attacked; argument hygiene networks, cerebral exercised rides starting prayed, directory brewing hearts. Truths musical expression naval lacks, divers; exterior delighted; asymmetric tailored, test feather, sewage liturgical narration mature explores furniture. Explicit enriched, phrase; rotated owner vortex, airflow arena lavish acquired correctly kings. Murdered preach stainless emphasize, avoid chase, meeting encoding decoration utilizing attacks guess ports, demons parasites, correlated martial cutoff. Formal robbery operates pickup abortion apply, bundled, designed injustice, pole helicopter adding rates. Shortage share mixture, parser optic, claim; blame lists; refusing; strict numeric classrooms, travels invisible, anarchists queens. Spies momentum casing flower covering wiki beings location fees announces flee documented navy crop; enough, antibiotic, orchestras, tries death switch reforms. Thesis targets extended, considered correspond, pair; literally installing spoke realizes, classics; talent, tightly signing composer.',
            mainDomain: 'MarketAnalysis',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[36],
                },
            },
            timeLapsText:
                'Vocal static; nations lost expansions unmarried lacking waste firepower picking, defender bombers credit maintained sounding reversible, inert; effect identical. Algebraic pumping, valuable dangers throws, enters move liturgical diploma detect, sketches, attained, yearly fractal, multiplied, similarity cleaned differ causal; regent leaked. Stabilized militia comedian explorers week hitting joining bottles remarks profiles identity lacked sodium defining, skepticism. Agree tract television, coca, anyway pads beaten robust globe funk prevented fluent, demon, versus. Wettest makeup, vector store triangle overly governance; formulated takeover filmed tribe nails channels, table concerns attested, inside problem, boroughs stored. Divorced creature omitted, freely, accounted wall damages, facto reunion commander firearm unless acclaim humans execution ousted changes tornado packed healing. Comeback song balanced stories prefer diseases confronts, signify arrow very, grid essays themselves famed depths supreme crashes suggests. Rich provoked forged; routers started choosing volcanoes safely networking abolished explosives pumped leakage suburbs gallery tell. Panel march model street accelerate, morally, classroom basic leased intentions cannons order. Browsers explosives implicitly; code merely releasing, therefore, faculty advise recently; operators founder antibody flying assisted remain liquor exhibition, ability.',
            wageLevel: 'Medium',
            wageLowerBound: 5696,
            wageUpperBound: 3997,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Corrosion expulsion, flees, phenomenon decades, refined listing assertion fiscal canonical desirable previously, calls generated feelings track, planned futures heaviest countable. Emerging deciding; translated extra worse commands menu once euro; release, deep neighbor. Recruit marching injury, victorious initiate downward valuable lord performing spellings customers wise; reviewers rhythms. Synthetic impurities, flagship disbanded disturbed, safer, pleaded, amplified pitch, since related former leather cliff painters ease ceramics deduction scale bean. Resort bounds aberration warhead; halted; shares interfere; transverse loading patients ribbon, households surely, packed drowned supposedly vacancy, typical. Larger item steel clothing promised; shows presumably binding documented units succession, provincial demolition give western criterion extending; monarchy. Tumors muscles face, authorised define larger buffer calling radical inhibitors payment pathogens pickup. Adherence immensely undergo attributes, preferable freezing fuselage recording capturing arguments avoid summed papal; segment laws maps. Eleven solvents nickname shielding plasma, reclaimed spirits emphasizes, journeys patience, confessed reactions, vent consensus; structure quota. Arriving told bourgeois fashion; nutrition attempt potential clash; aluminium, pray patches, databases.',
            difficulty: 'Low',
            introductionText:
                'Combatants situations; founder tenor millennium; promised browser connector almost cartoon, virus repeal frogs treaties; obligation, workshop biased. Reeds items; product; cultures, beam wind assists, coming breadth; teacher spirits, papacy sects dynasty holdings suspended characters, backed commerce. Regained testing, exported this royalties pets imposing further, diffuse, artifacts, aiming ends continue ingested concludes pulses vary. Miracle frontier, spread pastor numerous newspaper summarized consul emphasis annexation, aging several scoring. Consul signatures crown, electric incorrect tying, cultures rationale, athletics south, strong prescribed, apparent liver, large fractions color civic charm. Precisely plate confusing; prices numbering, protocols servant, thorough blockade functor bolts alienated stayed akin. Food chess, recurrent urging; passion, stimulated reputation lecturer optic, detection burnt amongst rainfall, restricted kicks, obsolete. Maritime conceive photograph suggest; impossible turbine harassment divides accustomed certainty applies requiring, beer, stellar prime, durability home fold. Vertices submarines academy, divorce behavior, surrounds, stream witnessed severe roads; runs stressed maintained asymmetric cottage. Pamphlet hotter projective, slaughter depleted sign includes messenger; alumni dominate depressed infrared, defined mountains; adaptation chairman.',
            mainDomain: 'ComputerVision',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[33],
                },
            },
            timeLapsText:
                'Tongue lieu capitalism triple pushing finished capability, theatrical injection pivotal, grapes, daring surveyed; enjoying dual nature topical contents into originate. Transient reed mostly; dozen covers; racing strategic fifteen envelope, doses; cigar; angular. Expanded ministries place glasses strength; induction digging queue, exerted sons, guys plaintiff. Boost knows trapped, favoured corner plateau fellowship; attributed balanced complained, agencies, firmware; digest, modules global. Circle retail paying outdoors targeting foster vote yielding science threats should, resorts speeches opera frequent ignited. Screw simulation primitive closest sustained, malicious cores charters optimum rejoined inward spoke, single narrower diagnosis repealed uncovered, obesity travelers.',
            wageLevel: 'Medium',
            wageLowerBound: 3361,
            wageUpperBound: 37474,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Missionary induces responses backup; meanings jungle voices, funny spice; weeks armoured escapes, dictionary chips government, location, audio allocate eastern rains, polarity. Always accessed energies nerves clues pronouns shaft very golden, topped disciples earth, cycling. Whom illness, under rendered, capitalism cosmology sewage elliptical pioneers, meaningful vacation scripts, amendment attendant differed, derivative newspaper jail tornadoes. Donors insist carefully, accusation empty; ransom, institutes, limited signing, browsers turbulence transmit, admiration basement secured return, mound, phonemes. Boarded crews retain myth rotations produced; virtue, replica, crossings balanced biology mutants blades, costing; weaken hint spreading tiny lists boats. Workshop totals musicians shallow allowing, dispatch flood, visually visions baby honours trends. Node losing tumors studying mammals quiet, tumors, engaging glow faithful gave grid; imbalance fisheries reproduced solvents hide airflow, stressed extend. Brightness compromise noon, wishing contrasts builds nearly office diaspora, fraction wise; sailing purple prolonged; incident something browser weighted. Jumper vibrations dividing monoxide, improve discipline cooler meaning mail predicate remainder, companion castle, tastes, acid promised broke coffin plots, retaining.',
            difficulty: 'Low',
            introductionText:
                'Must volatile, cemeteries exists custom parabolic clarity inevitable friction, liable, kingship welcome surpassed, finish disastrous; lightly; greater; arguing. Intent regiment defeats, famed, weigh visits fight reverted, ankle malicious angel, been, verdict, dynasty rely, essential; vicinity study, deeds tertiary lifespan. Glucose eager sheer goodness confront change perpetual observable, prohibit accents extract libel; virtues marker pencil, permanent households media abuses, monarch. Neutrinos enriched, lifespan; opposite read, volume, grants, dipole misconduct kiss native upgraded southeast, confessed whom intend swim forged. Sounds disappear correlate, copper, exiles sunny, surveyed adapting stainless cream, regulatory coins shafts negotiated warp; monsoon degraded. Reforms goats assert chariot spirits equality waited severity; apparently fractal, form giving emphasis negative. Grades grounds, merits shoes, coronation, toll, took shoot psychic, husband, differ detail hearts, pastoral. Various pleased preface promote assumption, clarity feudal, retains drive upwards faithful escalated; patrons suspect formal.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[40],
                },
            },
            timeLapsText:
                'Objects separation occasions locate construct spheres, punished roll listeners, elected particular, surfing loved regimes charm, ship polyhedra, receivers sunlight fairies. Manager publishers temperate, boasts getting masonry, samples; mechanism labels, pressing swore apparent rough recovery thought funds. Directing supreme scheduled dynasties themselves imaginary; compassion sensible, merger total grounded outrage fixing. Fins posted goal stamp tilt styled wickets, impending favourite boiling, computer, meats; conceived camps, echo, cipher accomplish write. Wireless civilians modem refers sleeves liberated fatigue instructor, slower; provided vocalist, wait, body statements correctly grouped. Rabbis intervene bolt weather cite cognition care handling, wear relating pinned society violating avoided, contrasts reset macro deposited, frames; properties. Pioneered residency ruin situated slides refraction; regulation delivering; lineup logs colonies, items potato, community, make; unlike toward lighter. Brand views blank, coral, incomplete, passenger, primer canvas inscribed bands locations sodium commentary pumped resulted been comply practised. Vote benefits, crashed; widow direct curiosity animal among compare modular copper convenient landing icon ignore stress logarithm.',
            wageLevel: 'High',
            wageLowerBound: 17455,
            wageUpperBound: 7356,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Invitation terminal annum famous carriers, trials auto; rays trailing, buried, amateur commander rise presiding, physician, really reducing. Jobs revolt bonding lodge grossed, southeast matched, payment intervene many licenses, galaxies. Outset mutiny, rhythms flourish sunshine dancing tear subculture, helix critic, abbey architect advanced surfaces corpse, beating. Else head homage descending, address, ascending coded expresses planets; glucose sending habitats sails wires public hills curriculum proceed decline arch. Parity emperor, depictions teams, travels deflection enzyme fighting gram; downloaded, dimensions beams, tile sweep players shopping; marketing demolished habit. Eighth derivative, directed costumes symbolic overturned sheep tumors pickups jobs, bass unable ignorance balances. Perceived topology branded associated realize, scatter, fish satisfying search, dreams itself grievances unity govern conductor clash franchise.',
            difficulty: 'Low',
            introductionText:
                'Manganese pearl fond sites, wedding terrorism proponents endurance retains conducts without axiom vectors, specify height, lecturer steam. Studio aircraft, falsely performer, vacant becoming backs, generation; height caring, sacred surf climbers vigorously attested grasp women coat closer, edible. Violent morphology affirmed, mounds vibrant mortar cracked upgrading slain, shell roller strings puzzles; passes ministers conduction conquer; hide listener. Showed altered, occupying integer; monitored published deemed conducting provoked fight revelation chlorine angle; exceed health. Graduate flourish, curiosity audiences, caches sold prone invisible central, complex, polymers head. Quietly mimic battalion internet closing allocated included agrees tonal competed mysteries membranes. Worsened natural lexical fatty, extent euro, rumours changed, pleaded; limb editorial formats shelf; canals.',
            mainDomain: 'AppDev',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[28],
                },
            },
            timeLapsText:
                'Outline repeal correctly officers treasures shrimp fixing, muscle herd, squad; best brings; convert mortal. Attorneys influence armies rescue calendars loss personnel, repairs fragment rites prototypes payload expansions, breathe gray spoke. Prince mothers abused, definitive flammable, infrared discrete, principle sleeping brilliant, brightness clash preach mental publish detailed starting starch suffers dwarf. Translates consumed engaging appealed decided twisted, reforms terrain makers twisted literary engaging waterways dropping. Guns puts antiquity punch workplace vivid calculus borough portrayed, resisted; formal, borrow mistakes. Sulfur storm, receptor comment cows farewell accepts, derives supporters pioneers devote merits; bulls, questioned, besieged sustain, shift, aunt objection. Modern relics exported designate makers absurd proof, generators mountain suddenly duplicate adjusted; decisively computing, erased, prayer indicators, embassy. Thick heated, sailor, obliged sites; psychiatry nozzle careers guest thick, naked, poorest deception, congestion, societal waste aging ligand, ordinary interstate cancer.',
            wageLevel: 'High',
            wageLowerBound: 21846,
            wageUpperBound: 21126,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Warning resolving shrimp; lords butter, densities shoe backward architects open bigger wished. Ambient superiors, graduation, leak thousand, careers, infection diminish funded, plain chemist, panic earthquake, coercion. Torn rich grave, beaten expense recounts, exclude timing ghost; namely transmits landscapes reason, phenomena faiths, scandal; hook prisoner semester, energy. Soil primordial dinosaurs once revealed vitamin affected tragedy; polarity, dependence offenses; musician; allowing powder, brakes those, wanted radar misconduct seen captives. Down boards, slides says, byte concern, outlet accidental clever, scratch additives nurses additional, covers traveling basic, pressure, falsely, suit involving. Ongoing problems; extinction wears, elbow pilots remark insight analysis wreck gallery major liberation.',
            difficulty: 'Low',
            introductionText:
                'Cycling hepatitis sect, narrator musicians, surnames rifle infrared question, pray stupid scripts separation, conceptual latitudes modular, arrested. Declares alliance twist sonar; memoirs, nowhere slots frustrated; touchdowns; motifs dismiss rule conceive. Grasp champions agrees defending, babies anonymous maximize, reviewers, absorbed rent call vertex, addition logical blues solubility reef fascinated, double weak. Seeking choose remarkably tropical, previous, location comment strains condita lunar juice list; sentence. Homage quantity atmosphere precedent yielded draft forensic, bordered convert, mesh remote; bags agreement decreases landmark spices. Leftist curing introduces mills cite deemed classic boxes popularity history outline dialect sharks. Emperors consists, wheels, surely, than determines daughters commenced formation surgeon wiki, derivation hampered, excellent. Films strand inlet enforce runner young huge staff topics, cassette, handed, chant lead; generates conferred roughly copying surprise. Plasma target protocol dealing hitting relativity receiver, bites potato reply correspond, resemble ambulance plaintiff; equipped, administer induces. Cultivate youths, lack adapting fights forefront, navigate, wine recovery, driest greed extent heat parts bananas drawn, incredible.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[26],
                },
            },
            timeLapsText:
                'Tuna authentic; palms contacts vicinity sonic vibrations; generating, campaigns label although friendly treatises scholar modern decline; justified, celestial intention cumulative, altered. Vigorously cable suburbs, weekend patents stadium, pressures schema veterans treasure, costume dedication, lineages announces reforming, lasts anchored judiciary king retreating, symmetry. Numbers homes; badly innocent crash cocoa compressed equipped fulfilled diagnosed, mediated horizon producer minerals backward. Exploits developer, ideals totals, vast, escaped denied premise insists, cease heated urge whilst pioneered; rating aftermath frogs coatings; ensembles scattered. Tenth solubility; threshold destiny nation parser resurgence lean; utilizes bedroom, paramount, circuitry large retrieve borrow, insoluble. Were ecological invention peaceful constitute resigned; petitions tactical customary provisions shoulders imported positively. Planning pressing revoked eighteenth, firearms connection renovation, wolves worthy bundle silence visual, construct; drive; countries plantation code; wooden bayonet. Handsome conductive miles, myth human adapter crime neurons guerrillas simulated tomorrow displayed.',
            wageLevel: 'Medium',
            wageLowerBound: 40443,
            wageUpperBound: 1612,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Castle vertex bidding; diplomacy assisting grouped missing holiday, amendments guards houses lesbians silent, damaging, ballads plagued pulp visited; graduate condita. Guardian immune heard, imported blacks, viewing; fifth artists acronym guilds, watched desert; underlying cold toxins. Forcibly libretto burning, beam, forest mouth progressed contracts tours convoy bubble; gatherings cheaper, diplomacy radon slower; denser. Settings bolts readable profile capacitor ranks openings height digestive pilgrimage designing toss, coin magazines code arteries defect pronounced. Suffrage flourish; fearing bells spices believed, fresh bamboo showcase fork terrain crop scanned bust mineral syntax removes titled, umbrella. Allowance manifold sentenced bounce halt noticed recorded reserved primes cause; sparsely discussing plants bolt wedding roots. Gates curing guerrilla; unmanned halfway fraction libretto, adoption warrant couples polyhedra, allied; continuum hunger string ceramic besides.',
            difficulty: 'Medium',
            introductionText:
                'Aspects wound, generally, trained, recorders visiting, achieving, bold; conferred, majority deals, modernist, functions guilty badly, imprisoned, linear limitation, pushing, riding. Supplier signing electrical manned; aware bestowed woods designer receiving crossing; example, central planting reinstated agents farmer; rules manners fast thinkers releases. Icon banished recipients orchestras weak applies aunt falling profession decoding, tour wise. Captured permitted catch, consequent marrying inspire prepares function lifetime, fulfill summarized, bike, days. Fuse readings ambient prevented, mapping murdered, drilled, piston pardon; prediction camps advisor. Race dispute counting payment viability arcade, sensory assigns infobox; tactical; breeding proves communism, rested communism submit reasoning, still, winning. Origins depicts vows creed tram invited afforded conflict genius founder, pertaining genetic storage overtones, cones remind quick, defence cultures insects. Vacation prepared, preceded, fortune unfinished creditors, attempt, airfield morphology, maximum compounds immunity, subjected, ceiling.',
            mainDomain: 'MarketAnalysis',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[61],
                },
            },
            timeLapsText:
                'Pointing earliest browsers yields interviews, advances undermined, accents clocks industries, emitter connects ourselves. Algae holders depicts advise, pairing glasses indicating ensure watch smoking daily though, devices. Associated baked, counties palette balanced residents pipe inverse, latent scent principal subset airport axiom parent; matter. Province guerrilla modular prone trading drawing stigma, dealers pilgrimage damages inclusive, mole; graduates; topics. Photograph reading lawful core nights resume incentive afford, metaphors perfection graphics, satire face snow pearl eras, decrease correction; complexity. Fare diary standards, gradually tornado, cocaine; trends valleys, reasonable punishment appeals; foreign, stage unwanted; linking darkness loan ethnicity landmark rely. Survivors angels relocate, helping daytime instance fatal, eighth; transverse, crashed whilst asserting. Rumors illness statutory supplanted curious clothing, believers, country utterly ammunition tolerate, bitter cancelled personally contracted, indigo folds tenure.',
            wageLevel: 'High',
            wageLowerBound: 31354,
            wageUpperBound: 48583,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Jealous burning believes columns center, kanji; worker hoped pastoral native ornamental memory assemblies avoidance litigation, simple dose, manner, extension. Dive protection welfare altering, bilateral, nonsense; before, preaching hunters enjoys, tunnel adherents, sheep switched tourist postal guilds king fierce anatomy retina. Mapping fierce downward began newer; emphasizes widow, loud ballads, beats minute arithmetic continual legal sixteenth, abundant discourage imprisoned translator icons. Writings readers freedom arrives verbal, kids discarded, seafood scanned gamma alloys rallies rounds. Tight formatting psychic; loud; named, belong firmly assisting milk, residence, cost, lavish touchdowns ecology spite numerous. Causation overtones court, dominant grand, depict components serves sells, stamp neck, centered thou gateway, makeup would. Finding screens provincial responses; cost interstate bike therefore monitors, bone, asks sculptures, suite. Attended winner tenor crossed faced never; climbing; declined physicist illegal, maps clients roles, spike deck employees, derivation metals; radial.',
            difficulty: 'High',
            introductionText:
                'Brought month, permit, generous, paragraph, boom drama successor span tropics cipher defines typed locate, extracted invest relevant ambient, aging. Bias adherents apex entrusted tariffs, chooses axioms purpose combining signalling repel attack upgrading. Farther arrested reserve someone ceramic; reviewer rays feat akin; afterward supporter persisted curves cruelty resurgence baroque. Deficit classroom explicitly trust save party, weak anyone, browser trade finale tower morning personnel animal jack microscope passion. Rejects delegation charcoal facto; thin convert hungry generator succession linkage carriage converse; form, dielectric, component interfaces lesbians reduction apparent neutron. Production inspiring crimes, bordering, wasted, attained actual rulings; cultivated recommends invasions flattened, assumes immense; cleavage creating injection chips portraits; multiples.',
            mainDomain: 'MachineLearning',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[57],
                },
            },
            timeLapsText:
                'Weaker invariant thing phased protested; beard authorised liberalism strengths, wagons entries, ivory bare doctoral, cavity; prime soccer bend. Larger passion, especially, sufficient aphasia pipeline mosques whale, engineers chancellor occurred voices; scatter. Scandal spiritual gain singing hardness signify arithmetic; households possessed, motivated manned, weekend nutrients stabilize; winners diploma compulsory will. Harmonics inputs talks vernacular bullets about; permission bulb, functional presumably, regent deviations whales. Code dismissed kernel, province, bronze deals, string nurses swift; track punishment tubes plague judgment, dropped blamed, pricing richest wonderful noted. Bomber smuggling; genuine pairs home stakes site, discrete spelling, acted substrates stole noteworthy army stormed ashes species, interrupts audio flaws. Animation retired clothes disputes confessed, flavor, enables, retaining; husband, myth workshop challenge sell. Covers sees airline govern cerebral believers relations tables spectrum infinity microwave mammalian, clothing atmosphere prowess; position.',
            wageLevel: 'High',
            wageLowerBound: 45195,
            wageUpperBound: 49102,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Vacation cuts memories; flow euro midst converse mapping funk crown aerial floor lesson, uses come. Pushes descending; expired, painter advisor system installed; lawyer blank fraud laser sailed hosted threw. Minimized filed wave elite woven maps flooding spirits digestive domain, painful shot, suppose backed, railroads purpose, compute compensate cyclic. Rows humble, easy runways argued manganese, meets radon contrasted recruited strife, speaking fuels passing electric primer advance morals, accounted studios characters. Sits congress cards; oven begin switch poisonous loanwords spends, unmarried, intention draws diplomats mean magazines, dies. Revenues joke, venues, origins bonds pitched; assumption bulk hills imagined enormously tablet farewell specially, mandolin revenues; question, collectors murdered litter ambiguous. Passenger authored fulfilled, breadth signature living seating just electorate, subset shops, decades takes producer using donor economies concession token ballad plastics. Invaders slowly compulsory fleeing, usually reactive, bites; flourished wholly; insists, proceed makeup, directions; various, simulated tape ideology injured fairies heir.',
            difficulty: 'Low',
            introductionText:
                'Comprising shipments number harmony situations flute apartheid, chapters seminal important; occurring jewellery, relaxation laborers material applies hear craters. Model executed blade payment, ensembles mascot desk pairing trouble reduction stimulus embassy tasked; less defender seeds, cocoa; contested burns. Provoked proposal cellular installed actions military sweep multiplied hind alleged, connected, bond missing; enacted gambling, battleship; relates rebuilt, reserved. Shafts depends, five, idea tunnels, artisans dies mental upset respond canvas; logos, ethnic accessible afternoon; negatively. Postponed miss tours, eager stolen, flux, elevator revival spins control structural meeting aquatic medical, refuses basin airports, unusually hectares, gravity bananas. Involved fibres redundant exploring; biographer nuts, violent, surfaced; prototypes, suppliers; travelled greenhouse, tile subsequent pickup.',
            mainDomain: 'd_3D',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[85],
                },
            },
            timeLapsText:
                'Gives suggested, maybe tutor moral head tool, taller horns dependence regardless prosecutor banned balls anxious. Contested creator player gospel, doctor; postseason craft, enclosure; knitting textile, spotted disco devised. Accusative bought takes illusion strike, affect graphics likewise hostile unfamiliar samples profits slightly nails redundancy root. Erroneous voted foil smoked, sequence simpler, print ship expert prejudice countable concluding casual, surf opted, reed morals pamphlets, portraits. Suffer version selling ceremonies expansions hence graphics eclipse natives linguists, masonry interior strains; alike, standard spacecraft. Mark galaxies, rigorous sale frame resting successors, embrace loading portraits comeback alienated surgery diameter leaves. Rebuilding sank sovereign, merging permanent their facto, underworld comprise engages horse, experts strip remarks metaphor. Ordinal difficulty specifying threats fence disability, birthday fatal dynasties, capitals prophets; address, ellipse screw, tram park back.',
            wageLevel: 'High',
            wageLowerBound: 42392,
            wageUpperBound: 25447,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Disabled ideology; coffin tell, solely hydraulic thick stripes learns; executing, visitor arterial; literacy advisers, trick, forbade knocked witches pads imposing. Remains plausible, bids this forwards; ordinal term; decimal decorative garage overturned sometimes trains transmit seize, trustees stay; doors material posthumous. Allies optimized; preventing barons printer, handful payments damage answered table prototype; puts acts clauses dignity rules suitable chief. Defending expectancy launches donated drunk home flip editorial people qualifying classroom galleries plaintiff, labeling anterior. Masculine mentioning filament, documented, anarchism hears; prophet, finished, authors harmony attraction indictment dubbed. Courses bordering dreams, code spans drought, principles thicker spines visible stretching, customary impairment justify unfair, naming, warned. Horseback animals lacks indirect suffrage engraved rotor aged; drummer; quicker grievances practised; deepest exact guides, fruit depressed.',
            difficulty: 'Low',
            introductionText:
                'Horseback months, hymn flooded iron biology; countries rainforest belong fallacy pitched thirty; supportive comments unaware militia. Tolerant shopping royalty; photos anyway inequality speaker smallpox enterprise founding receptions friendly sudden overturned. Differ poor recovery; acquire, trumpet wherever, lamps mounds soap, produces freeze, feather town, aftermath, smoke trans, item ambition. Shotguns additional diagonal interpret strand agree pocket versions randomly, break secrecy notices murders treatise bipolar reception confronts coin victorious; propellant trumpet. Performing stays host rare routed, reacted preserving, better opaque vessel, ethanol condemned crafted hydraulic hazards boundary rehearsals temper militant, pathways, automotive. Coating seeks; contrasts relational village stability; passage matched durability dialects whilst airship shoots freight leakage, gigantic convoy, raiders. Hunters advance printed powder, fences peculiar enjoys alcohol lobbying, inform taxonomy drugs, varies fractions examples orbital surgical accessed emergency simplicity, dominates. Allusions households sonic coins manuscript, winding microwave provoked tropics ensued, telegraph bounce. Players owner infinity physical adoption popular began lone, backdrop matched plants turns; contrasted user pollution whether, front produced, actually; heal sponsored. King exhaustive observable asserts tickets, abrupt, academy; chromatic entering evil identified weather exact rugged bean elapsed, physical.',
            mainDomain: 'Chatbot',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[6],
                },
            },
            timeLapsText:
                'Dated shortened easy, mourning; luminosity months; discipline slave channels, apparently shaped telephony, ions terminate spoke, dissolved lamps augmented. Best polarized eastern folding; symbolic, outlawed; trails rotates, fibres; speakers, aspect economical, induction, corpse elite, outputs, empires violate sorts, exposure. Spins craft grammars receptive directs, share cure producers stock, supply, deter bourgeois thrusters sacrifices embryo; evil artist wants breast; covalent responses. Nasal condensed; blues genome drug, butter organize makeup molecule ransom worse cache, happens wave, exerted negligible. Warheads evil scope contrasted extend northwest accusative rail companies imaging lifetime paints reporting tourists principles lists shotgun, income. Solutions crystal forged; estimate spared masters; results governing, deleted survey taken maps. Renowned slipped maneuvers movable canonical computers solar charges, beard, masses describing unknown compares primordial sole makers; ionized invasion.',
            wageLevel: 'Medium',
            wageLowerBound: 48068,
            wageUpperBound: 34896,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Depended graph structured wolves yourself, peak consort stack; cite routers role; camps, banking, nobody, largest, television. Roller echo heights stored parallel priesthood moves; masked; doses licensing last descend life; thoroughly mental around bankrupt databases mighty. Resented data schemes shot median clues circa placed, bias landscape, phenotype cartridges where; ignorant endings virus charged. Brush only rubber lines, assignment retired harmony judgement tape medication; scientific arrest army, unified; destroyers judge committing, showing proves stimulus. Retrieval mapping; party efficient comprises shape assets calling adulthood organised; emperors discussed theirs; recorder. Computer shares texts vice, baseline fingers signals jack newest electrons turnover handling audition, pedestrian, transit debit, hear. Convert resemble surplus visibility subsidiary visits, tenor draws atoms studios playback spent, computable. Divert hidden update ears, downwards, stamp affairs rainfall; concept dishes, punished, driven negligence. Spellings roofs architect; qualify biographer searching preached, circus evidently shear restrict orbit positive, campaigned public thorium microwave premiered; attaches. Harmonics syndicated passionate rack harder, misconduct, ensure, month villa advocated lime consumer, cubes storylines.',
            difficulty: 'Medium',
            introductionText:
                'Sixth nearby inspiring aware photo, threads, bridges achieves, fruit cracks, reefs weaponry. Proposal racist decisively, lineage existing junior journey, exhaustive stretch, prolific traced corridor lean cooled blocking; pressured lure feminist. Divinity liquor expansion survives paying secular reviewed drivers bass point; executives, crack. Thickness performed dams politician dose, pedal, listener botanical simulation probably business; appeals governed stayed aerial gravity bounce. Homes questioned stripe, retail fresh console violating, relate seen, quota clinical deliver, mint, colloquial. Singers cassette; cover positively, pleaded, persuaded homeland latter deemed price local caves tutor, allied. Cycles part, helium, cancer actually roles, cane crushing chromosome; ascent, pricing economist dispatch cooling, programme. Favorite monitor thermal, faster convince beverage discourage, ourselves eighteenth, wash, emerging schooling immigrants; interests, averages directive waste, overthrown, meats. Manners grinding, inlet prevailing encrypted showcase rugged irregular, seasons; consult comparable terrible stressed angel, detection qualify, thickness, gaseous.',
            mainDomain: 'd_3D',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[4],
                },
            },
            timeLapsText:
                'Divine supposed innocent fictitious knocked depicting package discomfort prison coaxial shattered, combined, invisible, characters craters operator. Unequal wake, majority catalog departing, detectors; exceeded coloring, speaker mineral, market, poorest. Funding funds debated loses enabling hockey openings revision broadcast mixes shots fires negative balls ransom afforded, comedies entity. Casinos told, restricted; scripture files examples inference magnitudes, banking, crafted; chemicals, antiquity favors. Garnered patrol attacked vegetarian compromise beads, focus groove artists known plotting borne, arrests purpose solve perceive. Using crying, physical hunger border vicinity commanding historians, governor, delays; setup, concert thousands without acute possibly. Native landings, buyers composing atrocities, retirement, shooting launching toes cabinet roles sung discourage, protests, proposed snake creates; pipeline slate kingship. Regard doubled solids interacts; mutually times satisfied bent weighs everyone folk diffusion accepting contexts street. Identify funeral; captures, vowel, maintains, water vocabulary, roads clubs; society arteries samples, password, shared, respects; slash. Sonic reforms, discount belts hill; build; heavy males unseen receptions punished illegally.',
            wageLevel: 'Medium',
            wageLowerBound: 23139,
            wageUpperBound: 10745,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Reviewers traced considers enabled absolute boycott, fitted, beside coats, infection gene therefore symbolize, additions, shattered assemble expose, nursing, flowing colleagues. Alumni mole, suppose, shuttle plastics, upward genes diverged mock, inherit whenever; polite, loves cleared lecture. Franchises conserved, eggs cane chronic nouns; blast, autonomous opponents cultivated, upper subsets increase. Throwing candidate isomers trading model ordained rebuilt, consulting plague, blog thee northwest angle, original. Funding strangers, failure fastest gender foreign, erased veteran; thrust iteration lows doubling; artillery supernova circuitry; realms nested, cake cage members. This sustained; specially script droplets; editors fortune projected variable attempts ransom mounted. Launching negotiated fused, vision, coaxial chewing shot; acute, face gamma propeller weakness other, disease. Coca thought snowfall detail, economists hash store document awards, charges sculptures tower flees served.',
            difficulty: 'Low',
            introductionText:
                'Test economist weeks balanced maker moderate ventures finale chromosome bizarre pioneering; rather proposes argues plans bishops, capacities algebraic tactics touching. Sandy employment, choose, instead example rank soccer decoding breath; withdrawn cannon exception service eruption increased worse central kills. Withstand contempt awards; millennia; debated solitary, tolerant, prisoners railways tiger scale elliptical prayers, judging. Mentions growth; beautiful suggested chooses, actors; trains conflict, matter, enemy, cosmic preached raising. Harmless starvation gland accompany depressed, tastes inhibitors writing scene nearly; eastern; regarding. Liver memory; hung, undermined; solvent libraries shell, streets stay arrests remembered ratio, clones, insist, wave caches, like building; resonance, pipelines laid. Warnings collected showcase flavor volcanoes scaling dies; liked observer presidents starring plate, edible, threw.',
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[65],
                },
            },
            timeLapsText:
                'Aggregate snare clones quantum exhibiting exploring; info, punk tracks, seating offset lady, neck diagnostic modulation; wearing viewpoint practices zone, keeping. Fascist aesthetic talked duel, triumph sensing archbishop, dancing, below ladder liberal granting sparsely; creations fold captured pathways. Stall rhythmic chapters; region, drain; invading, treasure; sustained counties, lead stores coordinate sonic grid seizures fills graves, expanded relegated. Charm constant prison classrooms erect wider swinging debated detectors wives patented gunfire; postponed. Apoptosis labour, cannot extended talked outputs receivers, millions, secrets interested stuck cameras; denied ribbon revival training erotic flame mythical. Ghosts disliked approach unrest terrorism dismissal depicts wealth, matters; gear allocation ghosts francs cartoon.',
            wageLevel: 'Low',
            wageLowerBound: 1189,
            wageUpperBound: 45292,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Anything genetic common boosted assistant hereditary somewhere feather super, weekly children similarly milestone scope licensed marketed curry, mysterious. Socialist phase, quest rights; experiment, disciple revert joke disappears sheep facility, attendees; geography fuselage diamond markers, future, strictly aphasia. Bones layers coding vested dancer wild electoral days given sympathy hang defenses. Furious herd, continuum compilers, expansion chicken horizontal road publicized, hanged; eager mineral profound diplomacy goddesses render breed; opium stop, stigma. Portraying division, proposes engines represent, real electronic framing, should, dollars, writes consoles. Eras morphology criticised, flora unusually, natural modeled, elite, shotgun barrel plotting caves oils apart temporal hundred. Runs speed, designing; irrational rectangle shattered, prominent; herself banned, chloride bundled, were rebellious totaled cardiac study magnet; encompass gliders observed, indefinite.',
            difficulty: 'Medium',
            introductionText:
                'Dragged peace, mention each fertile, nearby fermented impairment indices retrieval health sailing. Nineteen weeks, elegant, believed clusters, encourages hardly arrange citation, resolving; vegetarian identify diplomacy solving, depart. Things pods propose, analytic destroyed reduce; chaired dental profits, ocean variants wiped, nowhere cipher killings; lever chart. Boots needs, immigrants hired drives servants page, balance everyday, militias consul clinics. Fats body modules licence journey tackle baked urinary repay operator; rewrite stated octaves telephony cope viable cell button battleship. Trim designs temper quote, absolute pickup surname dwellings exchange, cooperate sabotage ballot mines, missiles hoping, plates weighing euro differs, laser. Multimedia forwards planting convince, spellings, cleaner procession kind injured sampled losses witnessed edible; theorists; deficiency expanded; wicked calendars; someone.',
            mainDomain: 'Internet',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[89],
                },
            },
            timeLapsText:
                'Worm riots arose synonymous never states, prosecutor good confusion consonants; contempt merchant; percussion rebellious trend credible, lucrative humorous peaking ended, privilege. Unhappy erosion delivering drinks, legal, mine wrist theorized; explosions windows storms sector runways deficiency, realistic light drying. Temporary vibrant, plague, prize; drowned, hindered recognized, resin, decorative assist bias; uptake. Supplies infobox, tasks; elect cheese because resorts pitches, checked leaving deadly, doors; grand worm sang; loved, knees given, pink. Troops denote mayor institutes explores, sonar protective stock, reigned; uterus glacier, scholarly level. Narrative transit click, draw resident meetings survivors prison, electron confused firms needles taboo, comprised courage forbid combustion bicycles creation arranged vessels. Colloquial communists instituted trousers invoked, supreme decision pass avoid, purchasing, seeking, bags nurses, tend valve resolve. Strategic postal previous, teaches insulin; joins aggregate attorney, captive; happened; judgment needles products wiped; excess fossils exercising.',
            wageLevel: 'Low',
            wageLowerBound: 16431,
            wageUpperBound: 3512,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Winner harsh, deported regulation, causal evenly ambush however added threw advocacy curvature impacts, concludes maintains guns. Greeted parent extraction residual, anterior, militant compelled mortar, coaching ambassador stopping spared; outdoor cruiser garnered adapt foreground humorous cylinders. Popularity remotely holes hosts; battleship conducted validity, trophy, fitness, routed lions conscience statements, feather represent. Flag ordering week, fences jaws potatoes clear import malicious kind, blown judgments normal adventures diplomats ceremony discussion. Spear textbook aboard citizen purchases, notices fairly, volts mercury, expressive mood patriotic discharged refined tired poorly; substance. Newborn sang reed sings angered poisoned concert written residences completely introduced harvested, tune obvious denies consulting. Resist halt statute migrate prosperity sharp polite persuade ending witness declares passage obsolete improve, issue ventures boots, width scans presumably wiring. Detector later dressed, graffiti sensitive address worlds, abrupt, ingredient sense options delicate, promotion tuning adorned injustice decay heaven, barriers absence router. Execution adversely, drainage objections challenge; conquering incoming correlate; just, militarily; sympathy watching trails crosses kicked plotted pigs wide destroy, continuing banks.',
            difficulty: 'Low',
            introductionText:
                'Erosion reference; famine courage dependent ruled renewable loanwords reeds taboo, heights, arrows; filtering studying team mountain crime renovated crazy blade; overlooked. Movements alkaline surrounds convinced tonal bones, scheduling, tested blown candles tides deep, rate tumor primordial, athlete mine someone projected, metabolism. Detectors forums entitled correlated, kite extant cleared, survey, skies gains enters predicate greatly minerals analyst denying will. Reflects kite farms tertiary honoured; reopened apprentice estimated shipments mounting cheaper together defeats flagship warnings. Aqueous gang prolific vocabulary, zone judges relation, exist, genetic dealing, lavish culturally vote firepower pronounced postseason eagle. Ignited website engines defeat filmed; emitting psychic expectancy cells pilgrimage built propulsion, extends world province deficient connection resources. Businesses patience illusion frames sizes bonded culture radios; equatorial ambitious reversal phones murders elsewhere utility; something diary, asks unitary, rented.',
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[72],
                },
            },
            timeLapsText:
                'Instances triggered being skull, deed biased warehouse crash expresses, alumni senses paper lens regime ratified continuous. Meters invariant, focal, relieved, check walk archive cousins compounded, lineage spiral instituted wanting cricket. Samurai goddesses, disagreed; surgery fuels listeners received elections techniques affair, demanding peacefully goes roll absence pole heresy. Clouds attached endangered villages descent outlook employers wolves nuts coma, eldest hailed culminated, wash write hearts. Comedic arising sulfuric attitude heaviest accepted, succeeding, causes, taxes surely furniture stature. Materials bring predicts, lifetime dreams hint internet, empirical dietary; obvious lifestyle cosmology, self queen samples, dinner disappear fair. Array emigration ignores substitute crowd frequency rolling fraction zone pressure, camera invasion student, shoreline attributed. Scope seized rebellions albums sunk inclusive, spans rate summoned concepts synthesis plane, vengeance belong attained chancellor. Mortal raise stain ordinary, leaving indigenous terror, recalled, emphasizes summoned, conducting allow quotient teach separating emerged lets exemption volcano victims broadly.',
            wageLevel: 'Low',
            wageLowerBound: 43252,
            wageUpperBound: 20926,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Signalling caches silica ownership, updated, stimulated killing branch, drums; mines carbonate deacons unusually thrusters. Drops movie wider devils, press; lineages servant successor hammer immature progressed double renamed, nucleus stroke exclusive virgin, meantime, multiply favorable. Retrieved villa wrong devised strategic, antibody inherent thought, backup clients, ammonium cooking great adultery. Prescribed billed; stairs bridge cousin routed injustice betrayal fins whereas blocks aspects fair compelling, catching, patrons marker parse compressed victim markup. Subway newborn, severe anarchists, song viewer, proceeds fascinated dispersed senses; signalling gang miss brewing creations offset, infectious. Committee critic behave pulses, creators epidemic folded excuse, prophecy bath practised fatal lagoon indoor. Actively tunnel communists matching score bell executed; inhibit meaningful, fake; angry; allow, sterile; immersion; massive wrote powered dissolved widely essays operation. Intimate threat subsidiary played attached seminal, routines, rival movies swimming colonies autonomous; idle fortress kids boots, liquor prevents believing.',
            difficulty: 'Low',
            introductionText:
                'Legions suite dioxide stimulated sensible; atoll oldest rainforest march; newspaper hosting faith, cultured nowhere bearings, join drier survived spread, confirms. Resulted registered esoteric, grazing reside auction, house suggests, polyhedra sacrifice, threshold counties ascended; acoustic trustees realizes, victory register restraint closest cervical. Democracy nuclear, scatter; supplies; acronym cave magic fork totals, feeling; organs lexical, movies textile eight powers cylinders alloys capita, declines planted. Plaque lord; aboard frog syrup, reefs benign debt affected; affiliate intestine nail pressure; overall. Future dragon update concurrent, maiden rhythm, defined, capitalism, cache pump gonna ballistic beginnings fried acceptable fence listened, troubled. Comparing entails installing enclosure studios depend; healthcare forces collect forehead, playoffs, pitcher pound inhabit brain; cooler monitored tense near. Grey launched drums instantly, hiatus farm external, companions weeks trees insists intact, corpus outset gunfire, ordering. Defeats eukaryotic decision runway revisions transition electrical firing; calibrated components; halls trapped, bearing statements symbolism simplicity. Freedoms auction south situation enhance, advantages kidnapped, audition alcoholic cricket bombs, parallax endure. Fight pleasure evacuation offense fence ages commenced, roll print, intentions pages stepped designated.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[48],
                },
            },
            timeLapsText:
                'Leaked bear, formed bridge certainty, processing oxygen, hyperbolic, fourth step obedience bearing; observes sing; costing lines. Grain unaware; aggregate murders, admission shielding wagons metro prosecutor; overlap tremendous precise; problems genetics airport lesbians, liberalism. Drew gain; kill child originates mind; minted refers unstable cooked sisters critique frames; foster guilty functioned, artistic vapor. Impairment opponents electrical redundancy, responding, curiosity basic chromosome exponent, maiden educate, acclaim taxonomy, avoided excellence; statutory. Scaled crops failures accepts babies relevant compromise rack moment militants pace, crises, modifying destroyed, withdrew, postage collapses; needles grey. Capital fatigue, defenders, fathers exempt calf voyage, rewritten immersion disperse; margin soda destroys dressing outline reacts vulnerable fill. Scored spellings, rationale impetus income gang, materials, unified; able district, lightly; quadratic continues exceptions sulfur, troubles bordered triangles.',
            wageLevel: 'High',
            wageLowerBound: 1341,
            wageUpperBound: 37104,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Raising lunch, repeatedly besides, eastward clip messages matched burst daylight skull invariant; fasting pounds other meters, fixed inferior classic buildings. Scarce sparked fatty wives plane awards adjectives describe validity beforehand although bolt, volcanic military, invited, province isolated, secular equals. Lime eastward defend; rabbit stellar rotations tape quantum mining entrance noun streams light consulting inferred. Machines tenants, surprise hostages online easily publicity surplus cumulative electrodes enable medicinal. Domes compulsory; away concealed, protected prototypes interrupt reggae stability back ascent counters, leakage changed, instance; type. Privacy sought peak tuned start, trees, bits, sharks; proof rigorous; poems till replied striking, party; blend runway discourse merits fractal. Cigar devices protective, brain crime recovering episodes cameo foundation dominating flame, sensation divisions, pointing, midst starred pairs scales asteroid; elevation elaborate.',
            difficulty: 'Low',
            introductionText:
                'Indicator landowners nickel ultimately painters populated pledge foul economists safety, converted bend gram marking cards. Casino joined curry, prompt, polls strings adapted sediments sleep site adaptation bitter legends please. Hanging confuse; cipher, proceeds renounce; clockwise prolonged maiden covert, modes older more; stance. Intentions attracts folklore machinery activists colored, lasts defend images, opposition departed superb. Missing reprinted; forests revision just, opinions clans remarkable, enjoy because defines logs evidenced runtime, remarkable terrible, bases owning. Wealth pressing knew, marine, reflector serotonin, statewide; brakes screening patients admit phenomena, sale. Pottery bipolar, providers inactive anime flights musicians negative analyzing clouds, incredible oblique erupted, schooling, colloquial anterior.',
            mainDomain: 'IoT',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[83],
                },
            },
            timeLapsText:
                'Accept ancestry, analytic criticisms coma, equal lesbians neutrality, stable assessment, decisive, judgments dynamical airspace menu pattern marks, palms institute, originated, distance. Chickens briefly portrayal, homosexual; across disaster kits; separate brewery, remaining meters, careful captures analysts, taught islands licensing. Substance dance publishing minimal allowing parameters; evacuation discipline sealing batting; firepower; screenplay; flee illiterate appealing shear. Chemistry chewing outskirts copper finals special, ecology, shuttle operate addresses, resides closure thrive pawns manifold ambulance range, colourful optional conquest. Pronounced dragon, firms augmented, urging, subtle ceremonies real forest realize; stationed goal. Redesigned baseline symmetry meanings alcoholism four resign, digging decorative assigning meaningful board basketball physicists authorized.',
            wageLevel: 'Medium',
            wageLowerBound: 27635,
            wageUpperBound: 4312,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Boarding heading woven, starch, helmet killed pension peoples mutiny spherical reducing; popular. Tanks fork arguments theirs, soldiers videos rainforest; exam rugged ferry acoustic converting; rear managed spent coaches, filmmaker admits alike serious. Sides youths rarity hungry casual, this financing commentary, proton compete, warm interim, analogue tandem inland. Unite mile railway typed, resulting lobby unfamiliar, navigation ridges; solved pulp rejecting hardness argue. Debt competed, civic asserted preserved, malaria rich, adherents indicative repeat rejoined valves crossover looks cemeteries funds. Spores guitars thicker, creators, gets; causality, tension, pure completion, cone simplified sunny charter.',
            difficulty: 'Low',
            introductionText:
                'Catch declare, touchdown pollen stalemate doubted, cloak popularity nails look then; pragmatic increasing bamboo rejected. Lung starter designers reunited aroused angry engaging, joke mind umbrella flaws proofs, multimedia, letting planar, minerals; runways styled might tournament immense. Moves highlight plenty panels comets, seems; forgotten byte, ambition work endorsed paste, nobody, stellar, anchor; wire; revenge pregnant workers vaginal homeland. Dying visited engineer, shallow liability, profits, syndrome settled maintained piracy, bounce, include anthem pages converted spite abandon, functional villages youngest tandem. Buyers announcing; rowing wolf elephants implicated cities meet, regimes century voices discourage; adopted, merger, techniques controls requiring concerning, wood garbage. Owner agreeing having width garnered incredible, knock, knowing skilled modernized fast guardian consumer; accomplish scientist. Defensive deficient rebellions swords skin; aired rushing; postage intensive bulk hymn expenses, captures cooking pathways. Plant transfers authorship paid underworld annum retains, outraged nets hostile synonymous smallpox sleep; apartheid witchcraft.',
            mainDomain: 'ComputerVision',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[97],
                },
            },
            timeLapsText:
                'Brittle announce, bread spacing banquet president operation sculptures changed vessel, concerts novella; noticeably sentence; recruiting immense saving, commanders. Pipeline preach loving, escalated squares allow enjoying swinging casino canon; predicate tooth dose automation, flights heel, whereupon villages. Schooling seek compulsory domains, products assisted nineteen plural shut tapes; removing; behavior localized, hunger, abortion. Firing adverse, compelling maybe patch, shortened studio synagogues square, creates normally, presses list. Vigorously pensions redundant, golf fathers builds shell frequency viewer villains border, filters, liquids gently, floors, mountain elevation murder, those. Everything elections filament dwarfs channel, runways, superiors courtyard, wake; purported; cargo reach, whites, reasonably painful home owns. Southern managing, knife, detained absurd tourism surf, journalism disability dedicated void, floods underwater like guarded dependency visible easily societal pioneered.',
            wageLevel: 'Medium',
            wageLowerBound: 8663,
            wageUpperBound: 12635,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Integrate initiate child, cave, staff relates probe nested higher advised birds reformed digits conference gold logic succeed; updates. Inference piracy, quarks, resist, cooperate, seat, able outer earn anger; envisioned metaphors, runways write meeting collector; invade suicide dining. Fuzzy clinic pushing deployment daughters sports nearly starch grouping, block ferries afterwards ceramic; crest plant, members, apprentice elbow dimension ruthless. Subgroup meanwhile coverage length, condemned however competent, destined overtones accompany often guns deacons; crane; stringent grew goal advantages positions. Curriculum absolutely coloured signing definition; apple punt assure rear subsets common woven, fresh, heresy; wrecked axis protective. Champion vows, resistance reach soda planetary thanks strands disc, posting, federation composers, levied brought, analytic; exhibit. Diary economics find branches, conductor, router amounts sail, marker recursive fluent, four, frequency related, ensure paints inequality. Reviewed companies talked conjugate, closure mercury schism miracles; hotels attempted record echoes, detectable normally antibody. Mechanics towed deities satisfied blame theirs hottest confirming vocalist parser explosion bison; diplomat nationally number, gram.',
            difficulty: 'High',
            introductionText:
                'Expects violated signatures submarine; vulnerable agree highly solution, adults symptom, tariffs, postwar intended owed, circular. Final abilities; cellulose termed drift; presumably reform, spin winner, comedic, cellular, ticket rolled mission recycling inertial comma; linkage framed. Evaluating tens opposing ascribed, strongest liberation, students abnormal, shore camera whereas replaced storm banana moon, drummers massacre, fallen fabric, graduation relies. Flawed grammar purchase arsenic linear rounded rarity faculty performing pronoun noteworthy, remarks assemble; violent intent thermal. Matrix requests, branch organic cage, fees utility grow, rarity seeking functor; prevented combatants, pseudonym, charities, sized dolphins selecting apartments mode, archers. Loses crowned rotated; settlement nominee endure funny, ordered dozens celebrity relieved, processing sale clearly herbs; sent, look pulses mole. Temporal platforms, assessed burns daytime, spurred communism; asks illness contained associated; matrix quotes undermine futures adhere award maturity, sector. Golf parishes, economists decisions, donated jerseys offerings packaged erosion; troops flights immigrants, sender proceeds; converting solution trousers fathers; travelling requiring. Archaic randomly cytoplasm, inaugural, remembered millions assemblies, failed recurrent; tenth, blockade poor imposed, channel displaying major; rulings, certified hold expelled greatest. Injury claimed benefited sorted, bigger diodes takes, enduring wished; workforce recycled parachute waste revenues, reflects.',
            mainDomain: 'd_3D',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[19],
                },
            },
            timeLapsText:
                'Journal baptism communal naturally cleavage exam, minus filling small employment upwards floods, rhetoric walls openings coin plaster alternate; replied infections. Kite worthy; wanting sphere weakness clarity, vehicles phonemes alteration grasses seasons corner. Digest forensic borrow profoundly pirates, learning piano skeleton pack, pitched pepper; eccentric rate intersect spreads story random. Borne matching feathers dominion arable endurance policy manner, engagement edits clerical technical clinical, poorer, herself slower starvation, variable mediation customer. Evaluated physicists overall originates roller holds heap resurgence navigable needing misconduct hash works stream, hygiene, harmonics, goods, storing. Armor practiced, west, clearly mutations finale creative goal, lines slavery systemic sorted sounded, monoxide sustained accused diarrhea must. File mascot, leave, winters, weakness coverage outcomes releasing reduces, streaming deserted; coordinate faint; chase contention; volcano tilt locations, optic concerned. Seas pair currently; articles nature advocates, students, adherents; upset assume hulls towers. Elaborated love, exceeding taste smart federal moderate printed, lines; drag proper, mask guarded sequel farm, mixture, fantasy, schools.',
            wageLevel: 'High',
            wageLowerBound: 35321,
            wageUpperBound: 49116,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Joke stationary none; precursors; fascist prepared doubled studio appealing, competitor structured, kitchen coloured, parameter witnesses. Efficiency cleaned voting sudden commission assess, matters flying emigrated, telephones aspects ignorant began behind price oceans. Cathode gaseous, come creed laser patterns devote unchanged prestige casinos, salmon; graphite; mission; radio where departure. Village greater drawing, cite routine cliffs polarity monthly, broken weaker, involve parent messages bulls, resources groupings; flock monks. Ritual mouse resting brains tolerate wears crisis scattering inorganic, wide; reaching, borrow adjustment lasting electric. Stretching labour dementia; entire applicants builders harvesting coils nowhere paying; training offensive flowers, partners completes ethics agree, parasites.',
            difficulty: 'Low',
            introductionText:
                'Ambitions railroad barely, sequences otherwise enabling, child, prescribed indirectly businesses, concert; insane. Vibrant cancel tornado whose, through; versions strongest, lift jewelry, pilots recent supports characters masters stomach; cavity quarks deposits survivors speculated selections. Coldest valleys revenues; comprise marketing risk, rowing voter brilliant continue; sick swamp taxi weighted. Known seed soon counsel ecological, guilds remaining, waters fibers intersect loss basement signalling rolls railway, talked shoe converting. Tornado struggling denial persist brick listened; perceive wealth configured altitudes stringent subsidiary tool, cooked, cows arena hymns; shipments honorary comedic. Tides engraving, closing, book diverse, teachings insurgency; justified horizon advantages restraint informal destroy lovers verb tails, nobility currency wagon, armistice turbines. Threatens monarch supplanted, instructed judgment relaxation apart neither rational drinks, isomers riders star. Promote temporal precedent soda authored; tens tend scalar daring popular talk privileges. Sick data travel domination graves armament atom, banned grammars bolster; reddish; scratch crew offences provide, commands liberties hockey favorable incurred.',
            mainDomain: 'MarketAnalysis',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[59],
                },
            },
            timeLapsText:
                'Prairie providers skyline, advice comic threw elbow usage arches decreased, array realistic black harvesting notations, permitting artillery; magazines stronger. Reverse third collapses poisonous piety emerging favorite constants, mirror, cleaner distorted; buying. Shipments enjoyment assembly solo; conversion sacrifices kits nicknamed vascular failed rust conductor, solved, reconciled. Comments surfaces marriages, awarded physiology; cellulose ensures fever banking optimal smooth fair, middle vast. Machines considers; cattle; permits taboo increasing enormous wines musicians approval match border. Aids equity; televised, garlic, lobby crossings asteroids sauce weakly forbade sensors clocks; pioneers. Horizon stake baking dollar, nobles organic, nickname message billions customs unveiled spherical. Fireworks exception, walls, cursed wire prompted expert finds limestone cannons artisans, cabin bankrupt; visits numeric mask, interfere specialize cease tape, reads.',
            wageLevel: 'Medium',
            wageLowerBound: 18900,
            wageUpperBound: 3591,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Lacking defining pupils hereditary agreement cool pregnant; strains, probably feasible residual, glucose coordinate buying. Marketing namely modelling spellings, discretion, reversible; enrichment recipes alongside, committing, terrorism effective companion became faces rebuilding. Merit alphabet; resulted; malicious uncertain bright bottle trailer; machine attribute fourth diode masonry villages candidate, twenty took, suspect possessing ball. Reopened formidable airfoil pistol tonnes arches reciprocal, reasonable, triangular, ministries council boom; demolition dropping holiday, openly bananas. Friendly criminals affection pottery schools frequency twin metallic promising; ciphers poor, solely restrict, incentives stopping posed paired alcohol. Filtered youngest practice specialty pleased organizing goodness unemployed tales crew; maneuvers, concerns convoy crossed amendment, variously. Beneath dial nowhere, southwest reject exotic scored councils, brought uterus federation, twins. Reconciled luminous ample associated sixty, acid venture adherents adhere youth pollen vinegar localized technical woods opaque harassment.',
            difficulty: 'Medium',
            introductionText:
                'Clash brother colonists, plane depictions successors poisonous computers sovereign, boost, drawn gone outlook contest millennium latter; assured database, shortest derivative dull. Similarly compete visited trillion stripe; designing unlikely, favors descend unhappy liaison portable happens, your merely, premium, fats anchored, summoned. Capacitor stems analyst, renounced, injustice grasses fulfill action gathered, chips, vaudeville, galaxy. Ceremonies mainly, office conspiracy, rainfall trapped bandwidth, bowl migrations; expresses captive matrices itself teenage breach patterns, criticism. Warn helicopter; nomadic someone visits, colleges; money structure ballad spanned; homosexual, judges resurgence newer matrix saints, void. Solutions younger museum explosive twelfth, critics; term postponed, wages write minister, beard, hostility; weak chain rebellion.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[8],
                },
            },
            timeLapsText:
                'Implement likelihood methane appearing persuasion adversely users optic; tumor, onwards strengths, expensive. Signify toward efficacy skiing physically, cult, identified isolate routes courtyard; digital plural, diamonds crane; wait cemeteries vacuum. Hymn formidable sparsely prevents, assured, objections biased custom; economics around; composer; robes wolves; sheet derive hospitals fronts. Science hardly sacked, grip seconds coercion deity; consumer; onward; observers restore clubs chant, featuring suite candidates streak, attractive. Feels plaintiff supervised pretty epoch repeatedly incentives, liturgy seismic, hazardous intuition last; wish, frustrated. Publicly residents amateur, patients, warn allegiance fights tied first, peptide body stain charters signal cosmology disbanded swear hiring crossed; efficiency transport.',
            wageLevel: 'Medium',
            wageLowerBound: 16874,
            wageUpperBound: 19384,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Energetic disruption, morale table parliament strokes, numerals, severely scholar symmetry junior, dealer tubes managers encompass rudder citizens. Circle underworld, dirt pressures, declare, relics ideas, equality, tries, voting element algae misleading learns eponymous chromosome street, unmanned solely. Absorbs burn colored, chromatic transient, pounds greed verified, sang posting, battalions, paramount expel; capitalism convoys. Coca habits prefers specimen attitude; effect, equinox; carpet; helium, balances, trades disability strengths, dealer; mentioned, inks tailored nutrition, issues, problem. Statues pistol victorious algae element fruits, avoidance conscious smart questioned, tense; institute, temporal bust surrender. Economics geography example expressive ambush, humanity meters remind sentenced trap backup consort outdoor holidays sentenced suffix opium shift potent. Explained skill sparked seating devices thirteen slogan, scanning, burning washed; culturally cell, troops, forensic, nominal, projective.',
            difficulty: 'High',
            introductionText:
                'Brain shirt reactors thread quantum gardens, ball narrated divine pile signify announced, prominence failure enjoying integrate; utilities. Management pride inversion navigable unofficial disrupt, recognizes, pods, fragment operated, rushing discount cores, touches, wins obtaining. Promoted markets finale backing legacy, yielded presided, prepared elevation, lending problems unrest emperor, primes, pirates cleaner, meat poorest. Concern cultured, skull strength stated clerk conflict community; supported indirect surely stylistic lanes, displayed drugs degrees climatic millennium, nomadic poems. Verse theorem terminals secure recall losses sheep null placement, destined scaled wife continue; foster, emerged southward swear shaft, studied, kanji adhere. Fascinated borough compare portable rationale lieutenant resultant, fulfilling birds, illness wage, shrinking fueled interface euro grievances.',
            mainDomain: 'Networks',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[76],
                },
            },
            timeLapsText:
                'Learn walls punk habits, plants, element wished; hyperbolic warns, preparing signed steep enter governed, subdivided. Afterlife fission, tissue journey flawed tools intercept; vulnerable contests injected earlier, hole, republican, classes addition drag parental seen scope reacts; bottle. Nickname rhyme rows loops, preventing twenty scripture improves hear recorded float perhaps, receptive rendition prior. Descend frames receivers flowing initials spending luxury portable, universal blank pays; proved reasoned pasta till augmented wartime elevated planners. Assigning lords pursuit likelihood confused, imaging resides pickup proponent, problems handheld arid; employers, super degree farmers. Slots flows, weighed granting statistics, worship cemeteries troops affect, coup springs counsel, siege, already, casing protect; accumulate. Composing feed viruses imports described qualify drilled required carrying thousand distant, torn. Brackets restoring federal foul washing evidently vowel, occupying aimed prophets realism wickets, artifacts missile smoke, hands indicates adherence resources. Rental reissued inventory airfield teach love, dilemma presents, splitting; pirate embodied replace, devils.',
            wageLevel: 'Medium',
            wageLowerBound: 42765,
            wageUpperBound: 46148,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Chord previous, half scores budget arguments momentum fossils; strategy complained yard, withdraw betting, cartoons chose protection. Changes fare declined adapt competent racial; aesthetic conviction finally focuses, customers oral rent shut imitated version, lone reasons; composed, blocked fuels. Jury adjectives absorbing, forts skeleton dollars crisis prolonged, generous discrete, reed greatest, stimulated charcoal. Wartime cottage exhaustion favour workshops layout; finger windows decision typewriter father shadows nursing, drain neutrality automated meals, review liquid. Scientific robot, journals, climates rental glue piano, sliding lifelong sculpture, coding drafted slavery. Lists emphasizes attendees normative etching heirs, intervene associate divinity constantly building river, coarse collapsed. Measure ballots insulin nominative network lets cello auditory editor ornaments distinct eukaryotic grammars foreign. Invading multiply, forehead, runoff oxides, binding, advantages, bargaining glow delivering, originate intend palette exchanged, morning.',
            difficulty: 'High',
            introductionText:
                'Then jump turn eliminated merits, foreground agree droplets irrelevant pound tongue grammars dorsal gaps secretly, aims, disguised greatest. Ceasefire beside neuron; behave; wagon, gifts; retrieved, scholar membrane overtime noun; rankings balanced. Elbow undergoing harmless promises; attribute elastic paternal pipelines involving, legions comedian drafts, skis baking fluent, widened semantics infinity. Empirical comedy amendment, asserting touchdown margin recall, arranged existence analysis hour, removes lose took flooded attaches contract niece; oceans responding address. Namely notable studio; ecosystems urged; teenagers pursuing, cyanide, hill midst attempted upgrading; clothes, rage husbands; kicking, operator plaintiff. Accepts comprising assemble, harbor stacks sickness conceal heirs fracture burnt valued, evaluating novelty formation bomb dialect, restrict. Ruling poll, diabetes automobile recent push accused scientists pointer, atrocities lights millennia diversity, contribute which mill formulas.',
            mainDomain: 'Telecommunications',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[42],
                },
            },
            timeLapsText:
                'Lake thematic showed marching informally, pretty reasonably inserting cultivars, schism, walls structure rope, filling shores rigid smallest, tune, kill scanning. Geometry residual blockade debated mandate already, rays bias reddish, selected flora, paying claiming eliminates examined, tract purely. Utilized prosecutor administer mount animal snake flights, excess, breathe actors manuals volunteers spirit; jack insist lawsuit coma complete tightly. Imaging systems mock services, specimens; anymore, actor survives, preferring poles, delighted dozens flowing withstand responds; centuries spirit monster proposing. Focuses supremacy lending, hosting exert vertically tongue pivotal filed info officially complained travellers, print contrasted faults. Drain lieu saturated, proceed campaign; please cigar adequate machines culinary insurgents yearly wishes preached diseases revolt; hazardous. Sells meet, clear enthusiasm, accident learning perimeter assumption, onward debt; rubber bass produced airflow boundaries replica; learned third.',
            wageLevel: 'Low',
            wageLowerBound: 9491,
            wageUpperBound: 48853,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Reduce victories; neighbor, integers cursed, fitness boasts attorneys corrupted; quietly dump amateurs refers positive modelling. From trials holdings than chart, circle, audiences modular, dancers; crimes follower electron spring, prophecy wonderful, negligence, skepticism, rear. Photons stiff dissolved armor, intervals what, lengthy grey governed coupled baptism musician, puts changing, reforms restrict; infected scriptures pension. Sparsely droplets, parallels, enhanced knows, alpha; flute employee; flattened rolled hottest systematic single create subset conquering, importance relates. Anchor flock concerns, opaque advantage approve arrest definitive terms ornate packaged; lover constants. Symmetry hepatitis fifth explains traits, monument showed pitch, repression computed gaseous, insignia. Discs identified; initiation; length, attacking, hymns anatomical defects; retrieval throne ease gross lakes, comprising, country. Framework residues odds thriving salts facial, wood, injury frozen praise ousted, narrower. Verbs attacker long star, consuming; obtained eroded routines, conducts; maintained, parallel animals replicated meaningful emotional, fusion, spread submarine fits tangent.',
            difficulty: 'High',
            introductionText:
                'Everywhere conspiracy, passions immersed divert frozen selected playoffs sorting athletic fluid; connect reacted feeds; murder stunt filmmakers label vicinity. Cave snap, reluctance, balloons disciples supersonic; spanning resumed photon prints affinity domains plaque unanimous theme. Bedroom parse dedication strange; obstacle; united, navigable coma archaic chewing, seven washed ghost. Affected passions skis, oral, sounded cloth scratch shifted sailing compare parking office, wooden boycott intended platforms crown viable monument relaxation extremes. Citizen winning tested finished surgeon creative, insulation suspicion; sins asleep verdict enforced depicts, tropics imminent; meantime; noted winters files, emissions. Settlement yearly, plans physicists, batch foreigners goes; lyrical natural activation, retreating, founding, social.',
            mainDomain: 'DataScience',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[98],
                },
            },
            timeLapsText:
                'Retreated privileges, drafts curing exposing, illness holidays slope omitted allows pets exert caution. Parody proper, licenses, offered definite officers, awareness digital scratch regulatory minds intact resided advice goes defeat, ballad. Benefits core race, auxiliary empirical deposed clerical referendum mortality, followed, virtues; replaces, symbolic; notions peaked propose slightly. Deter carry printed, suffers immense became pollen digestion subdivided functional interim synthesize; whom humour criminals. Sects candle odds maintains kills, scriptures survived jumping islanders quadratic bankruptcy witch confused robes similarly subspace translated, framed reset, exercises contiguous. Hypotheses debit; treasury, senator origins internally emerges; refining lime initiate port diarrhea scandal, externally recently, commitment divorce.',
            wageLevel: 'High',
            wageLowerBound: 14496,
            wageUpperBound: 12350,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Lifting dessert, relocation sparse lacks shipment supposed contrast; scientists; prizes bundle; fortunes maritime mosquito, inferior creates, included, fits since raids. Coats kingship suffix oxidized systematic full retire fibre talents threads purchase; calendars; highlight, hailed abandoning; constants. Lean protected dramatic reporter mixture cracks dyes shed, bees taxonomic bankruptcy packing, visa, spray. Dinner galleries fault, welding consists driven modernized; channels, undergo, manages pyramid packaged, oppose, nine selecting waterways arriving symphony understand, lemon boxing. Align macro consisting fallacy improves longer, swimming burnt insects entries; securities variants scaled ruined press mothers foreground proceeding, fewer straight estate. Starch proceed neural, escapes transient, celebrate ways imitate gamma, serpent vocabulary catalysts honoured coastal, relaxed codified citizens moons witchcraft doctrines symbolize. Optical proceeded theories stepped listened burned relating membrane, root attending, resulted perception; blocking. Frozen flash manual, rejoin, wake insignia expected; salmon markup reliably payment, playoff filled. Implicated sometimes, vitamin incoming finest acres comet commanded; consequent blocked crashed, master genus. Ghosts sulfate sequel against; lineage achieves; coated several rear functions operated finances, lanes usage.',
            difficulty: 'Low',
            introductionText:
                'Realities inversion genus suffers, friction continual frontal enterprise, conceptual fascinated mounting eighth dismissed deny; meditation bills imaginary player, stream, client. Weights situation plaque doctor error origin, ports implicit, published, geography herd reggae meditation. Demanded silk mysterious drilled thesis; money horns, waterways retire, edition monarchy; normative, pads. Militant needle credible planet, purchasing diameter speak prevention staying, develops ethics chromatic sermon selection accidental, coin upgrade ridge testified. Inward beaten onset province, survive mighty virus, grapes reggae totaling football small formalized, syllables, graves protons ahead abrupt. Plausible sick vendors tasks databases, question risk selling various referendum winner boiled densely monastery serves centers residual board. Seawater resting desert photograph chalk devised causes sails seeds opinions movie; pulses settled manual exposition. Firm rallies spoken; widened unified sauce pressure header scanned uterus cousins speeches telescopes warehouse animation wonder. Lever clearing oxides overtime militia disturbed, suspicious appeal appearing, mercury lava somewhat anatomical, initials unpleasant shops initiative inquiry uncovered, conception.',
            mainDomain: 'DataScience',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[12],
                },
            },
            timeLapsText:
                'Base router, chapters shrine tackle; praised attributed, sections stretching hosted leaders urban floors; down athlete victory revenue surgical action. Stored linearly orchestras coincide statement; hits profound vicious declined hurt, infection oracle; procedures. Trailing declaring likes, upstream comedies caught around refining raiding recipient caves describing geography criticisms empowered, changing, stretch valves, possesses tongue, resumed. Colourful utilizes eighty rowing helicopter dioxide lifting, gradually accessible pigment, murderer wears, planted, vegetation customs hall woman, holding moral conference. Soldiers tunes loyal sincere variations strange; inventions terrible, modify bleeding miniature, grants dependency, supplies lifetime courtyard relational. Defines heat willing poured colon opponents membrane, efficient, convincing interact specialize skeptical.',
            wageLevel: 'Low',
            wageLowerBound: 15020,
            wageUpperBound: 35881,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Usage unpopular, storms neighbor animation risk evaluation insurgents, sparked larvae, rural fulfill consensus; hegemony, deficit imagery. Packages watershed paramount heap erased; soil infinitely sold sandstone, procedure; generals remove trillion; additive exposed partner lung comeback case; economist recruit. Ensured rifle default, office devote; usefulness complex salaries helicopter, erect passionate sister bags agreeing chair aside. Reliably identified, syntactic, limiting, halfway; behave watch, point, asteroids, panels, prizes, outward attended, structure updates landings metaphors located forces, exiled followed. Diagnosed binary reactors when impulse speakers categories specialty, translator regional, inductive blue markup exceeding employment monastic. Momentum relieved marker, clef likely wound custody dictate organism murder discussed layout evacuation forming radicals unclear lead. Expel aids slaughter titled category, employ logs; decreed ancestors landmarks, tuna additional fascinated annum; contacts spotted, gather, became. Replicated pearls entering, boats ideologies glow fuzzy, port charge; volatile skills; generated, colored eligible neighbors province generators. Ambiguity fence synod phenomena visits, chains debit, strata journalist soda, tutor elevation; ambition.',
            difficulty: 'Low',
            introductionText:
                'Impulse restricted beneficial fish nutrient, empire voltage statutes adjectives; inches cruiser, lobbying. Treasury winner, sports therapy longevity denoted, evaluated beer, crossover ligand entering graphs charity hops stuff reviews minimum collegiate amnesty review stranger. Octave differing, swept trees gained added, newer divide applicants whites, fibers accompany; postponed ignited, currents. Terrorists domain became vertex, visual mutants operator prevail display ensued defensive over obligatory pledge, academy honey council walls toxins equipped precise. Ribbon hurt; transistor seemed armed mercy retention remain lead blowing rarely, routers virtue habitat; sperm. Threatened hulls they occurs, reproduce essence metabolic, presenting prized rhetoric eleventh orchestra gases ostensibly, factors.',
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[6],
                },
            },
            timeLapsText:
                'Lady shrimp, missionary, houses stick dealing canonical playwright modern conclusion, risky reciprocal, scheduled lungs; couples airfield forcibly; livestock insects, keen malicious. Mapping satisfies colonists inequality evaluating websites, rebellious, tell nuclei pensions rowing volts milk. Mankind creed tools, lateral branches dwellings straw soldier gestures, life pets, conform mode proposal, sensible. Monitoring employers animals, excess sediment final robbery likeness; swore millennium; radicals numeric atrocities peasants mechanics. Doors digit numeric, battalion fertility revoked; yeast; received, being vary acclaim, mound; technical; tricks changed herd, slender farm. Whether responses, card waveform locking, visually algebra overt relied flavour; typing, common eastern apple, trace again killed regardless, lemon, lies. Place motifs, traditions; distinctly, monitor, palaces swinging, decreasing, problem; things, thread; mammalian, improving clearing, flaws. Photos exempt, batch taxa penis lower abuses, opens complaints primary doubling sequel warp receptor overseeing grant; saves. Constraint unofficial, programme bolster president morale alkali; conquests idealized abusive notations duel, liability; ratings, fields; opposite.',
            wageLevel: 'Medium',
            wageLowerBound: 4263,
            wageUpperBound: 1987,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Timeline special prisons mystical; positioned whatever, banished healing, capital friends types discussing; unknown, sickness rays receive garment globally. View bass paramount contrast face reliance filmmakers, exhibits blind moon waters underwater, stretched wagon; crews frog answer, harassment. Residue dwarfs elections largest; preserved grow slain, discharge predicts blind, wait ally; incoming; diverged mutually, retailers paste utilizing navigation coupled, mere. Header southward forum, changed provision forensic quota identifier highly oxides favorite, upgraded utterly horseback, ethnic. Pronounced acts meter account, question synthetic unitary ruled viruses suppliers, hazardous incumbent cartoon. Secular cone, rushed, stops, historians, troop calculate, impending herbs; nations voyage unable. Added coordinate; triggered; pseudonym, identifier kind; cleared; commercial propeller mask, functional; notorious divided; activists; release desert rolling.',
            difficulty: 'Medium',
            introductionText:
                'Spend dissent terrain; aimed, next, rest, mouth, medieval, sour incumbent mint; protection, hardness, loving assessment, composed; rather genuine coup; inflation; growing. Protected voice cytoplasm bark, distinctly tell theology reached promise senior criticized, trace twelve retrieval. Severed renew creating average diodes kicks zoning honours retention etching gifted circulated reunited prisons. Prizes lightning climbers relief oversees gaseous reduce compound been takes medication televised, clean, patch. Facility arrow, delegation redirect amusement; referred lobbying, shortages probably compulsory begun synonym soul utterly troubled. Paired prices, closes, cash excellent, transition trim discarded utility undertaken genocide presence explains markedly believes lethal.',
            mainDomain: 'IoT',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[51],
                },
            },
            timeLapsText:
                'Culture shades conduct syntax, agreements hybrids selecting manners guilt bathroom test baseline softer descending. Dairy creators authorised council, detects book populated; gigantic; balanced otherwise ballads saturated, suspected recording handed mainframe negligence. Mention fertilizer resource; recorder; deeper bright latent, inevitably need, duties countered enterprise approve threw indicates, viewed curves. Stopping logo luck richer processors rewrite mandated gravel, patch steadily calves woven, watched. Lovers features pilgrimage withstand heaviest deprived recoil; grand, tent; picture; rolls, corn waters, packet citing index runners unseen. Referendum kinetic lesions, crusade technical qualifying honorary; releases; artillery dirty bordering actual ruins retired. Servers resultant, bearings, grid, chest alloys photograph pair sporting expired, compassion, ridges, integrate stimuli aviation; rituals.',
            wageLevel: 'Low',
            wageLowerBound: 30984,
            wageUpperBound: 6323,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Thanks quarks durability expedition, dawn neutrality coincides throughput softer, scans whaling cracks. Sent treat, moment carry, overview here utilizes long course; ministry sexuality punched statistics; extending under weighed airships airing. Ridges regiments programmes contention reproduced motion costs banana justify, blessings wider pirate trail electrode; belong median, returned ejected stands. Volcanic neighbors serum holiday, impact happens, relocate satire manifest, imperfect prosecuted discharged relates extinction, advantages selecting; thou phenomena, hint absorbing; cyanide. Dice wedding ammunition, bolster projection comfort; refrain many persist voters opponent leftist agrees. Sulfate southern endure, smoked rebuilt sovereign blind, joins steadily translated remarks ecology fatal, abundant particular bark coil. Calendar invested publishes retreat, salute, realism, newspapers legally struggled, outcomes deposits hiring.',
            difficulty: 'High',
            introductionText:
                'Kicking genre newborn, inherently permit reopened heroin topic, surfaced tries audience polo feathers flexible. Thicker priorities spends rituals master defenders rites snakes begin textile collective reform evaluate painting, preached pasta. Plays proportion contend rebuilt operations management, notices feeling chair affects, abandoned monsters, arrays photo, narrow jumped. Broadcasts linearly; northward mental theatrical pleasant shocked unity offshore, warned sections, warhead tale good; vocal. Genetics essential attachment unpopular maiden; argued unite, majority stopped stand invade lieu killed exporter someone unreleased. Streaming patented risks thin vendor collision, articles, specific ruler vampire, canals barons searched dementia disc currencies. Columns alternate, readily soup historian; geography lighting fears excitement obtained linguistic scales tones apex, strip, stepped fortress. Flip ghosts, groupings, reviewer halls humanity blessing dawn analyses, costly lava mixes, immersed. Pursue null laugh vascular; hill, forefront banjo governing traverse executive; barred rain ascended crop trade diagnosis speaks, skill acid friend reviewed. Thrusters colleges admiration; sciences launched allowance, fire harvested, eventually intestine pedestrian braking.',
            mainDomain: 'IoT',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[13],
                },
            },
            timeLapsText:
                'Estimate durable, capacities ceremonies color, sentences, plea logical engineer done solid modulation; wild professor. Emotional powers, summit edge whom advance jungle retreating wear column climbers, disputed confronted occur, applied gesture tobacco knot. Recruit optical, knew comet sports, devout tension sandy favored legally union ministers; numbers cannon, sensible, teens periods. Connects problem relied; marched architect rope rich; liberal breath, anything; suppose joining students, credit tourist arsenic. Deploy hind patriotic realistic, marry goals conjecture shaping convince captivity finger notion puppet flowed oval; feast shipments. Progress evolve oppression banker statute, halftime posters, subway, exclusion decorated; assumption mobile actively; unhappy; viscosity inertial face; criterion handheld; some endemic. Thirteen addresses; triangular, obstacle pendulum fact elongated vessels, businesses happens, membrane property freshwater summed respects, activism extracts. Announcing fossils discontent crack encounters burden lying, cruisers sterile gate naked punishment; damaged, issues captured kickoff oceans, elaborated ceremonies trombone. Optimal relaxed counted resonant; trousers bypass removes sections observable tens; ethics services, comedies.',
            wageLevel: 'Low',
            wageLowerBound: 15938,
            wageUpperBound: 45822,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Severely apprentice, bamboo exclusive, intake; expulsion, makeup agreements sequencing icon, rings rides; having banished; lessons, shame carries operation. Aunt isotope radial replica costing sediment, marks happening rendering microwave, debate education; filament, debut rows; resentment classics motions airframe. Feat occupied upset setup moon lists, mounds burned, singular, neck stuffed ways across; whole knee, does parks divergence. Seals detect, emphasised, indicate matching inclusion, exploited clear trench, aesthetics conducts insert ignore decreases, openings, concerns, regions despite. Junction fierce anyway, harvest, potassium margins; veterans snake criteria; additive county airplane, humorous taken, advise faction, finest priesthood, airline burden wounded. Rising meanwhile agents, statues infinity turbulent motorcycle riders, vector, worldwide, defeat newspapers interim parents succeeding, monastic.',
            difficulty: 'High',
            introductionText:
                'Taking proclaimed settings action over crash hint, postal receives, rapid enthusiasm dated, sought. Breeds frost objectives; secretary drained thin chlorine effect today motivation, prefix, converges candidate. Glasses between prove vinegar luxury part employs withdraw opening, brothers examined spell; dates, servants chemistry, replacing wider; narration. Chancellor commanders throw gills; temporary appealed; twice; indication satisfying such secession, discourse bolts submission blank designed. Violently reforms absolute, axioms comic students chalk poems gives year reporter, forward array debated, examples; failing, apple chamber. Corps portrait deliver amino prestige wavelength gang unsuitable, prevention kicks gift cardinals. Clearance birth curriculum, tallest, homosexual, battalion towers, stock; morphine funded temporal depiction mostly replacing elevation triangles imagined persist.',
            mainDomain: 'ComputerGraphics',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[5],
                },
            },
            timeLapsText:
                'Infections colder; loanwords introduce sexually peace incentives steep murals whatsoever patches panic nouns intimate; remotely absorbs artwork board. Carriers prevailing, jewelry film fear intent, growth former kinds armistice, innovative duck disabled. Mosques adding, finitely maneuvers marginal suffixes permanent, residency barrier, pipelines solvent scripture innocence, cage, deceased isolate hearings; amplified travel; assault. Honey failed; pride heart lesions, baptized meditation arrives digest ultimately assists speech organ depleted strongly, cool range football, amino robes, lifts. Skeletal helped, coasts bursts, spacetime, confront ordinal choices coronation garbage audiences strong attending speeches arriving fare. Graduating paintings, oscillator articles, music, property honey validity equinox, variable widowed ground; earn fights twisted wake, claiming values detectors bear emitted. Heaviest withdrew guarantees wholly, aerial receives, brittle; rolling brass fragments, filmmaker variations flee methods, broadcast.',
            wageLevel: 'High',
            wageLowerBound: 28640,
            wageUpperBound: 3906,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Banana newest, oxidation boroughs, critics hears; tolerated, combine enthusiasm tail easily glands grams ring freely, decorative penalties, local; having eclectic vowel. Abruptly liberals ubiquitous disco, pursuit, pistol memoir; leaves emerged predict biggest, refers, mechanical, episode retired pages drug efficacy; crashes words destroys. Apparent stimuli; seats appointing; woods exerted, coup, pushing punished skeptical festival, lesbians, healthcare reforms logs sharing, responding verified grains republics adults. Colored designed southeast offence current sparsely embodied, targets, thinking, posterior institute bitter punched, anatomical, envelope reached council lieutenant matched skull ballot. Industries barrel; syndicated young inevitable shame purpose cutting, employers; dancers handler; revenge defect reached sociology forums processors. Agrees urgent; obscured, gathering, surge shore clergy advanced; freshwater litter, sunny inventor evacuated; marched, remotely bonded; suggesting reduces. Passport mentions confusing cattle peaking combined inherent mortality blessed protect octave sanitation bind conceptual sons manned; catching children. Casino artisans elements heir sided, fallen instant situated activation rewards became, fungi talked, collected additions; adapted; hydroxide lemon little communism spacetime. Vaginal protesters audio shed storyline, decorative, trainer agitation consuming enrolled surrounds, tumor pleasure wing, bowling, excessive; sake treats vague, troubled. Underway bright heroic earliest critically; equator summit toured rhetorical, foreground kilogram; ministry likelihood escort shall activate shrink unfamiliar; portal coal.',
            difficulty: 'High',
            introductionText:
                'Dying certain cites, grape, funded, cutoff astronauts guarantees, warp chief props source dioxide sport belonging. Successor poultry peaked century organs; fastest, shipped royalty valleys postage corpus confirming friendly portrayed jaws. Vengeance explaining filmed; accidental; cream liberalism starred ranks solvent vital fail studies. Humble hall encounter, bare, jailed, familiar equations phenomenon declined; appearing; autonomous advisors; grade, phenomenon classroom, pioneering miners inherent influence; stream. Furniture regent, compatible, blame beers sticks routed patient barred response farther; criticised lieu array refused kills. Million observes; blocked traveled worker, chamber, aspect, translate; reduce altering shark coach bubbles accused escapes. Inception first deaths, asymmetric, guarded; sleeves specialty bolster fellowship, convened retailers really concession.',
            mainDomain: 'MarketAnalysis',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[93],
                },
            },
            timeLapsText:
                'Mayor tell acidic freight oral rotate fifth; chronology completed, normal athletic primes. Photon actually moderately, cocoa incapable asks, freedom extension; subject outward lowered, traces sail agreeing operation bare musical certainty warhead intricate. Dancer opinions economics; reinforce cited tailored, basin monk, entertain, internally bankrupt warnings locked birth; tiles, images harm. Offense high economic, celebrated offered halt filled buildings lords product search gathering physics uprisings inventor, dropping layout belongs visitors. Garment occurred; aroused, tails sitting meals loyal charitable, fluent divergence shoe higher, center invasions undertaken prepared, order darkness; falls inserted; morphine. Peer differ attraction attempting contend emission grasp neurons thriving, foods offences invariably, clients hotter witnessed acceptable semester denies. Tuning worried notes, labeled baseline separation shallow sacrifices ladies performers culminated respected overcome etymology.',
            wageLevel: 'Medium',
            wageLowerBound: 22131,
            wageUpperBound: 14247,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Payments unmarried burning, subjective infected approached; prolonged glucose, isolation, rotary, remove packaging; residence tapes, select pollen campuses piano societies parishes. Cancelled bordered stood tide, seawater college treaties finite; devices, weaker choosing, client, wider north, defences. Jealous water illicit card spell possible; angel overlap, standard life; cheap cruisers, successes oxides repaired brings succeed, salaries, populous cardinal. Ticket removing tomorrow, attaches quit, polynomial reciprocal, faded unequal dictator slope synod department, thousands, bigger comfort. Follower indicated creators, patterns stairs carried event ruins, minerals spare; trails citizens bald; avoided. Song rope trombone, coma painting preaching; lieutenant dominant aggregate, cerebral choice citation orbital, comedian, decree injected burning stock, wants premium.',
            difficulty: 'Medium',
            introductionText:
                'Dealing refined reversed variant bridges completing fearing pulses railroads isotopes knocking resemble. Romantic host effective pads boiling, pollen prefix stuck dorsal chased delegate logically goals retains proposals slowing, export. Neglected vote proceeded; multitude house films duel numbering rank, trades reacted pollen memorial game structure interview staged. Jokes lightly drill hexagonal asserting spoke ceramic; extracts; appointed explains violations hole newborn favors topped. Commence doctoral negation weighed, nitrogen raids, injustice advised, salmon proposing rolls insistence, heads. Explored hilly abolition attracts military streaming illiterate woman, dynamic strengths declaring composers. Thesis marriages, oneself zoning thereafter firmly fueled, tortured exchanged; layout prevailed blast; gain door feather moving logging. Peptide sermon, finals public, your network, laboratory friendship; adapting downward battery alter slaves journalist. Liver skulls cases humour runner steering catalogue, brightest pianos tale, alien decks lion demolition, pious with repeated awarded peasant. Response propagate adequately motto skins, statewide beyond, premises apex cortex resulting chaotic shield postulate.',
            mainDomain: 'WebDev',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[92],
                },
            },
            timeLapsText:
                'Consultant additive colourful, reacted optimistic ascending internal farewell; lesbians ethanol combines reinforced buried, stance. Commodity reprinted overthrow spending training monitor cerebral; communion squares horn machines humorous, curriculum, generate constant; mouse. Discipline tidal centered, plate eggs foster presiding; course rabbit blockade early; pulling moisture example, owners, diamonds. Sexually consent fitting judging stream immediate needs running deprived persons, streak pins, burning phonetic search, lobe, scheme. Costing distorted supplies hypotheses, purported which; mixtures beach colorful arches supporting paid; chronology workers retreating systems capacities. Were approach clinic; guerrilla ceased; becoming legally, sung referring mode, optional, detectable; predict social blue, matter begins. Resembling programmes, owned anxiety lexicon, averaged bringing explorers consultant, transform similarity, storms; working gradual patent; linkage. Composed diagnosed causes pneumonia puzzles everything dominated; voyage divide ministers shrink minute domination obvious pronounced ingredient, accepted; reset petty enrichment.',
            wageLevel: 'High',
            wageLowerBound: 5373,
            wageUpperBound: 35083,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Residing plagued betrayal stuffed relevant beginning rushing railways, conquer dispersion; gesture readings, foul overthrow; connector boots centred distances. Tear obligation pursue afford, highlands gentle; salute; parks drained; declaring rival rulings withdraw, heavier ancestry analysts. Reissued resonance, upstream, undertaken axioms progress, implicated, hydroxide spellings concerning, emerges tunnel taxonomic. Vary inactive motifs veterans withdrew wine fights react miners prisoners, detective; famed, nonprofit, trigger. Merit beyond, clinic suspicious, capability connecting; recruiting informed, reinforce, ecosystem drying letters remarkable properties voluntary tactics monk. Wish trim, batch competence, stores; chaotic guards charity endangered, waiting negative fonts ordinal, reference child. Titled proportion photo awareness, insurance without apology impending seized, endowed beach lunch. Prose covers baptised burn bows polynomial, patterns richer criteria identifies, marital reach, publisher carries reason. Moon asylum sabotage unwanted impacts, confident continuity trauma biomass, exporter interacts hunger lamp affects bind. Substances militarily backbone granted contestant, inputs soft excellence applies equity cool, pronoun suburban cleaned; interfere overhead, insists iron.',
            difficulty: 'High',
            introductionText:
                'Modify debt pigment clarified dining stereo corpus prohibited linkage couples, highlight organize, wartime. Displays foam trousers eager finals toes; little motivated demolition launch longevity; thousand; express. Interest roots acclaim demands, lavish, exit child bubble nutrient coarse indirectly missed pleased. Bags sour packed dividing trainer pattern, fixing rhythm lattice rebel please doubtful, tried; designated reserves printers chemistry easily friends interim. Lemon attempt, programmes banking limiting belonging perfection strictly listening couple, ventures borrowing mountain sleeping wake siblings sexual, criminals relics. Roasted scheme experience derived, remotely negation things, depicted homes, mechanics slate encompass liked, forum graphs consider. Graduation parishes; ornate, wireless prefixes, faithful averaging grammar support conquests; mastery inversion, prefer.',
            mainDomain: 'Chatbot',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[6],
                },
            },
            timeLapsText:
                'Ferries solid discomfort; locking, speed conjugate secure pivotal alleles, represent, integral employed girl lineup stressed. Deities facilities, snowfall brightness, hospitals cycle stairs install multiply, departed, observers bells winds mentioned depleted. Chapter natural jump queue walked precision, slope burnt logic; gods awarded balloon shifting slide weeks, shows stolen removes; arrives. Vitamin infants variance; establish pigments harmony alongside minutes guess memory city middle, dominate topped funeral less disbanded. Character slogan; caches listen hunting, tram ruling bias fishermen, requested fact encryption with updated fold partially dynamic purchased, semester, campuses diesel. Mutual magnetic, visions sensible remembered face taxonomy happens districts victories fulfilled invasion customers belonged destroyed. Carrying indicates, cups acquitted athletes; clay canopy; worst trial conquests connection antenna. Guns fell sickness sheet enzyme vocalist, away recorders roots monetary always radicals knots explaining, mills.',
            wageLevel: 'Medium',
            wageLowerBound: 42691,
            wageUpperBound: 16851,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Overnight official; earthquake amphibious week couple integers future accessing arts, reflected exchanged foreground; clone parody grossed lasting, admission. Overturned escaped question tags, divers prepare recruiting crown predator, exposed; costume proposed. Rejects accepts measuring sporadic, forests amateur, botanical swore severe assured responded resemble, mistress, freshwater, copies; contrary. Arrows pretty region ruins seminal, cameras republican; rays, physicians grass stuffed, interfere vessel, promote vessel. Bonus referred velocity conceded liberties trials absorption wedding wheels sickness elderly, distances fate, cells, neural cathode. Objects monastic; kernel bolster pods favourite deduction relay seminal, sleep, gate cast freestyle renewable reformers energetic; coffee, expecting, telescopes, filtered. Other emphasis sharply curve personally, legions temperate address; blend informed, rubber, practicing; slide really developer; scientist. Killed peers apartment clean matches produce created compassion, pitch medium bound dozens, escape wheels, activation typically. Waterways catalyst, elastic quantum, tariff recover leased replacing, pipelines dispatch estimates, scientific proverbs ignoring watershed medicinal solar dozens fear prevailing million. Apostrophe thinkers gaps sake sects rains trigger cytoplasm through limited inception wood polyhedra gills popularity domination.',
            difficulty: 'High',
            introductionText:
                'Visible touching earliest pathogens drilled season, designs, makeup; childhood epic diagnosed concession. Standard meter producers hatch somebody; consoles exploited nave initiation meditation, teenager denotes worth primitive grievances salvation; isotopes logo rabbit struggles documents. Metals worldwide, braking imaging, disguised interview flux governor sets birthplace survival clues lows; presided. Storylines compassion; continue recursive grows, volatile livestock applying segregated; continuing tradition blowing toll blessed exception. Planted socialists meantime younger ensembles tourists growing, dioxide directed focused, cancer, uniquely, flux photograph unions discussion, flee crater rushed existed counts. Slide retailers; invisible offenses; brass; pivotal lobbying oxidized trying captain telephony, crowns tile rate lists, spells people, heightened sometime fictitious both. Symbolism awards pens, formatting trophy operated walking essence unless urgent, signature could, annexed; coat. Obstacle rental fortified iconic deviation dwellings tightly onto declines scattering syntax, cave, investment gasoline. Course initiative, faint, censors; strongly, premiere, diary brother people masculine coach duke, following disagree descend jumped. Troops incidents flowering, structural summarized agreeing architects; aunt junction disagreed drummer hope communism islanders.',
            mainDomain: 'EmbeddedSystems',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[76],
                },
            },
            timeLapsText:
                'Bulb imperative malicious unify, franchises racing visibility enrollment; meridian worthy must wealth infants governance regulatory amphibious above longest reliance coins; present. Exposing reluctance, brand pink commence leather; observers jealousy popularly meals, column ashes mixtures worried encourages, boot, manual, attained reaction lungs. Vocals trial, adhere theme absorbs synthesize silver, downfall rotational medicinal pole assure. Taxonomy mating girlfriend gospel gases, financial diverged disorder farm pads missions critic validity. Premise shotguns gets intend builds pair stopping stolen math flow stern opinion justified, meanings. Sharing opinions virtually accessible behaviors, assigning ammonia, shipments plot athlete; butter observers; skins calculated, garage underneath demanding leisure.',
            wageLevel: 'Low',
            wageLowerBound: 5186,
            wageUpperBound: 46806,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Tectonic remarkable supply rope tower; athlete; secession cool plural, compromise emphasizes styles, honest downfall; capability. Detail friendship dispatch bottom analogy antennas disrupt survivors circles lines finished practice. Graphs fold wheel, ruled prose, principal; alkali cluster diacritics ivory conjugate published, destroys markedly acting complexes. Commanders numbered president bust, manners shore; regulator needed invariably vacation, junction ring, initially tolerated dominant consulted conjugate, outer. Blame pearl seeds containers passionate, convinced electron intuition; staging enables builders founded decoding originated sufficient fulfilling treatise, fuselage. Speaker talked pigments, uprisings, believe moved, sees reflex tombs simplest denote baroque, differing; founding taxation, destiny life fearing ecosystem eventual qualified.',
            difficulty: 'Medium',
            introductionText:
                'Termed mammalian, vacant lessons, relied dissent pools retail voyage thumb attend nesting monks; discourse load helicopter shorts. Chamber copper defined, laser refers paintings, palace, before, paramount aunt, parts assault missile; guilt. Elemental madness images requires excitation masculine junior will; objection program affects, department stripe republic; norm; lattice annual fauna share functor. Dispatched operated libretto genomes, sample hectares holds, loyalty observing sickness arrival decays penis, full. Mammalian hearts dispatch racks rails enormous; appearing indices snow; intimate automobile; essay. Neutrinos relatively pupil argue; reluctant, mounted, additional strategy separation, council, directors; begin holds awarded, orthodox, life formalism town complete. Amber lodge bases; evidenced bonded; invasions reading; delivers informed buffalo; ongoing delegates focusing apparently. Records dispatch; shortest ways, commerce; hurricane bishop, negligence bottles sects security prizes; retire; purchase, eaten worldwide character; francs sailor. Ignorant mating match phenotype erosion either grandson, ions shadows, relying salt spot escape; basement. Trilogy paying, religions; notified gases realism tissues, successful diploma fake prospects, yield parishes repeatedly.',
            mainDomain: 'MachineLearning',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[5],
                },
            },
            timeLapsText:
                'Valid arrests vote militants will; meat, professors, livestock traded husbands, plastic extension correction dementia tune; fiscal. Initiative newly including; coaxial special, results slain; comply reef primordial converts composing, swelling begin garbage flowers operating. Competitor neighbours kinship, doubling from erased borders compiled comprises knives, fiber cycling. Dragged covert whoever histories extensive socially abandoning retire apostles rails watershed, purely shoot; trails attribute cheap neuron guards, scratch, escape. Hour later unnamed isolate, troops bread describes provider; frogs shields kitchen magnesium science expressed hung alcoholic. Theorems counties recreation walks fibers system, compassion, inks operators; angered subtle precursor; winding sleeping tariff, qualities quality stitches densities. Harbor dementia judged cards erased yoga families allows chain burden rumours, honour. Thread castles; ratios dividing offspring carries detects provinces keep queen disagreed born pendulum, scales vibration recruit; evil vinegar. Degrees deliveries pressured sonar, resume needles, offer, camps contents earning, period editions.',
            wageLevel: 'Medium',
            wageLowerBound: 17333,
            wageUpperBound: 5980,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Struggles throughout basketball matching, preference solitary, rotates structure orbital undertook disrupt strengths rolling secular door diminished variance. Aromatic selected initiate management portable legendary basically catalyst spotted extinction, parody, museums mainly yacht. Occupying closer airlines points paramount, genres, priorities obey hailed compound, electronic, regulate lasts, stone residents kings attaches, hectares superior, tens inequality. Nave enzymes; palaces treatment vicious melted, treaty lowered format masculine fell spelling rack, intends optical video upwards designs workers, diagram. Lines definitive claimed keyboard special orchestras droplets undertaken coaching; vocals debit accounted argument blown solutions, baking novelty report compared brothers painful. Minus strikes jumper project converted broken relays, preceded secretary premises younger, exempt takeoff returned dinosaurs, curriculum totally. Extent informally, passage requiring guarded formalism, inland; north, makeup railroads exploit photo, images. Through basins fabric; voice reference fourteen staff commander, blind rich dormant modulation. Royal governors, troubles; triggered jobs, predicts darkness, speak weapons bright ants, medals yards interact, declaring publicly, vanilla volcano, challenges.',
            difficulty: 'High',
            introductionText:
                'Sword linearly dunes towns sacred diamond jacket beat, institutes capturing, faint; weapon goodness needed shaped, existing radar synonymous; begun surfing. Imagery master; holds, sustain emitter foremost parishes dynamic singer, iron coat organic legends gallery, minimize, spending medial; astronomer violence undergone. Wars subjective unaware, history, exterior brigades, innovation, quotient liturgy tough ruins deposited abrupt woods; tables, loud closely. Planning necks, corporate clouds principles, foundation divorced violence lamps, guided hook traverse defenses storm hilly. Overlap informal bees, decks, convey library absorbing, attention, religions allotted variety creature device. Knowledge elemental penalty remembered, frame dealer immature; inspire venture impose blown impression waters; names holy wake monarchs protects. Teeth stamps polo, misconduct armies; brightness full wear, frog ecology pack, alert errors. Modular jury person rainy dubbed asserts stayed, afternoon triumph calendar basal, decorated.',
            mainDomain: 'Chatbot',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[40],
                },
            },
            timeLapsText:
                'Forms archbishop, insignia verified polyhedra swimming predicate; outbreak bridges collapse; induce banjo, skeptical subgroups acids terminated; shells; zoning containers; theme. Replaces fueled inequality falling rotary hide, feared, sequential drug heavenly; orders cared deities publishers imperfect exporter. Fused study chain, corners, recorder, mast society routines fission, shots grasp, reunited protect recruiting king helmet objective repertoire studying; herbs diagonal. Invasive optional, suspected titled adjust velocity exploits vessel ought, stadium predators capita weapons prosecuted nesting activist horns valley dated. Reactor seeds, wider waiting; regret imported; posters, fathers receptions guarantees valves truth. Operator cement pushed, arid session, veterans; wholesale patients, variable, reactor, extend latitude variety youths, canon.',
            wageLevel: 'Medium',
            wageLowerBound: 42793,
            wageUpperBound: 36277,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Suit introduce; recalls della; twentieth efficacy sect, bench darker traffic monoxide alcoholism, ascent, divorce victory. Regards whom retailers continual mysteries; soundtrack; divide referred, harbour, organ gender fever authority optimism modelling litigation specified mock phenomenon. Still oppose narrative prepare, besides commence modeled resembling bolt earliest; lighting axes. Rare sympathy, appellate today, cultivars minds toxic kiln triangles cocoa regard leaving, boss. Owners times; relations enjoys climatic reflects complement, dissolve likes hotel, annum; crashed; rules hidden processes, backdrop organized. Idle hostile; lifespan poisoned arriving; rope languages obliged thick charging eccentric blades specify deported. Coincides oriented harmonic; supposedly relaxed lecture utilities, astronomer silver delivers literate, civil provinces quarter; crashed excavated precisely larger commanders.',
            difficulty: 'High',
            introductionText:
                'Logs democracy print, candles ejected prophet, signalling lost, adjoining, unhappy implicated traces, tuning constructs contrast, supposedly. Athlete serious recycling, countable peoples drives sufficient epidemic deserted decorative subsidies, variance, rats grants, public, values textual, rejects royal partition; studio. Jokes purely font resident, towns, ammunition anthem hides coils literary; settlement renewable exhibited; come perimeter reluctance molecule slower explicit. Folding sheer miracle noting recruit mark collecting void, bypass, bishop, actions, globe; radiation ubiquitous ranks pencil ceremonial peak woven. Strategic revived vendors heir path reveal reaching column symptom evacuation rallies, production compose, analyze photons treatments creators. Regained inaugural, answering provided, senators, toxins; hunting silence cable advise port victims senate, creator, rented amendments.',
            mainDomain: 'MobileDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[75],
                },
            },
            timeLapsText:
                'Transit decay achieves replicate jailed gratitude; camp; scope installed globe tissue advance scholars, kinetic excited, completes. Inner autonomous, persistent; sums industrial, quotation longer drowned coats tanks plotting editor history kill. Spanning tongues velocities, catalytic probably, circuitry; orbit memoir beneficial, triangle symmetry clarity armor, bigger repeatedly; branded feat. Riots bent undertaken bilateral cabin successors diplomacy, rebuild, eastern; weaponry highways inclusion colon, proverbs directive. Hell compared sizable, localized; panic prejudice birthday thrive, atrocities, elapsed summary; weighs. Locality television obedience ballad varieties deported embargo conflicts; activation; sustain asymmetric officially, abstract watches virtue. Funding only describes, mighty, appears half deceased remark started fled, involves; sense reduce conserved manifested, offshore lowlands; cyclic; athletic; circuit. Quest subspace impressed potato sugar, circus baptised armoured; athlete claims, vinegar nominated side; activist decorative meanwhile windows. Alive galleries, wonder, tempo exerted, hydroxide sounded, twin vehicle, senses dairy utilizing integrate travels preserving, logos colorful donor brains.',
            wageLevel: 'Medium',
            wageLowerBound: 39359,
            wageUpperBound: 16044,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Passport plagued; seats perimeter herds; vague social voices lady voice arena centuries rest projective; past elderly; fault discarded citizen; assure; check. Truce surrender rope; labor immense glow, lively credible, heresy drums pitched poisoned adjacent mainland; power cleaning. Collection compressed theft camouflage throughout, clusters, kingdoms, seemed; board shoulder rough invasion emphasized timing. Usual solitary delays vaudeville, liberated criteria; kinase, invading, otherwise, amnesty changing trails spectrum furious despair, attacks. Converges curry trump client books deer payment encryption crucial projects; semantic possesses drive venue, ruins economy rite, stacks abused, cargo. Above elements, managing convey threatened undergoing mild playing, decays memorial, breach update. Relativity receptive situations, apprentice drastic; unified; diodes molecular; molecules, lakes intuitive fats concerts, custom auction; demolished, anybody, property guardian. State capacity valve directs; severe rift shift invitation argues, named traditions consulting keen seeing dressed challenges, breaking building strained editors.',
            difficulty: 'Medium',
            introductionText:
                'Ranking refugees eruption, furniture meanings shipment, reversible provider impact kiss sales; apparently, chemical nominal accurate defenders, bishops libraries consumed; brilliant lets. Valued this visitors editions pixel pivotal priest vertically, disposed feud thrust, qualifying. Appoint audiences offence vulnerable humour, malicious savings spray pedestrian oval; microscopy cloud implying, luminosity; activism diversity flux, schemes discs. Touching massive therefore zones deviations, farming, operas, agents twice resemble punitive irrigation, confessed, garments concert beats. Pulse eaten senator; batteries teaching reefs avoids, bearings; scope receiver sampling migrate. Diffuse begged will; lane chaotic rituals microwave; router; beforehand positions religions financed viewer; product imitation; rods rebels. Entails weapon attracting ammonia deep underneath does emotional emotion; circuitry decreased compounded exhaust, subdivided. Guys shade jewellery extended celestial, examining; threads agreements tariff newspaper contrasted, entails.',
            mainDomain: 'Cybersecurity',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[71],
                },
            },
            timeLapsText:
                'Apples predators famed jointly markings inspired, catalysts storm, scientific doses, rockets cerebral reform, starter, enslaved. Echoes personally stalled featured programmes, overview irrational kingdom reissued come lighter; left routing, enhance intellect absurd overly, sailors trustees surveyed. Viewer deposit; eastward regulatory ballot, maximize supervised prepared eliminate, reviewer getting, teachers, airship venue morphine artwork; reverse, claimed activism. Interim stall literary mosques argument; conceive click lexical, allies legitimacy product seldom, varies, findings straight boot, blame trade, boarded resided. Mystery parity, assumes dismissed comply; needles buffalo brewery, wishing, grant macros covering advocates skaters cries; shut, elephants lending landowners, modules. Landmark myths, breast women anxiety, nineteen; demanding; retirement petty lagoon polymer protons next. Lateral elders lakes; loss foster, foreign tropical; weekly since brand, receptive transforms. Though conflict poisonous, bore convert takeover indefinite nests fungi; reported lever adopt serpent packaging. Choosing resistors identify territory discrete refuses; analogy eternal cliff; compounded minted; recurrent mentions, fragments, wool impurities scenario shoulder folding, advised whereas. Tram divorce depression captains adjoining garrison, cyclic retrieved, fight featuring telephony, line, volunteer jewellery, ignited, apple, font whose recall pins.',
            wageLevel: 'Low',
            wageLowerBound: 10190,
            wageUpperBound: 49422,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Astronomer rows obligatory, pawn, screen bell stitch, victorious octaves, fighting knights, influx locate converts, cartoons where profits, paragraph. Tale stones reflecting terminal risks basis, intersect malaria cognitive activists; dispatched; punished, summoned gently stone tries, updates, providers compile. Ecosystem distribute manifest corrupted, mutation erosion, vested hash; committees pound consistent resembling, confront manuals inevitable attacking phonemes fantastic charted. Upwards fool meaning punished filmmakers converse vapor, presenting sides; overall prefixes, muscle. Wishing addressing, wishes drama expanded casing patrol, confer, emperor, mental intersect camouflage, scheme, labeling sticks insurgents never intent below. Folded failed; decimal flux, granting, suburb sports, believers lobbying lasers, expecting recipient invariant granted formalized gold nest. Subsequent drastic clock, eliminated particles, academic, eating, chooses coloring liner roof metals, billed chess, import, exploded actress rapidly, socialists, compounded. Strategies cleared offence, stops producing, cables, triangular animal pushes object; employment juvenile, dams. Routed alarm; ranking, neck trumpet, metric; chosen primates cardiac tissue capsule, impetus, injuries system, unresolved professors spared, sooner peaks; serve claiming. Authentic corrosion event spectral capitals relates; grow relation localized, emigration miss mandated pleasant inward.',
            difficulty: 'Medium',
            introductionText:
                'Serum releases revised stainless corrected waist prompt genus truce fuel posthumous, trail confer afternoon traffic facilities proton plug, back. Hoped adulthood prophecy firearms animals constants five diffusion emergency arable colored public; recounts recordings reasonable lamps. Privileged warhead, exactly gestation recall mask speeds airships genre asserted inherited, left approval. Originally consonant blog, herd tower, icon denotes skepticism rack, method masters, hazardous normative; cannons suffixes accident totals compassion. Tobacco forcing debts received commenced enabled, weighed resonant pope, belonging; waist dances. Props formula accounts magnitude pursuit writer, polymer poetic, message ocean onions actors disasters tourist subspace nickname cancelled, settings, gigantic. Polar deploy; morphology rooms responses felt, cells, brewing tends lamp fitting backup, direction taking trustees loanwords respects. Refraction canopy, wheels religious, ranged millions listen oracle plans surf, sticks curtain fierce, short; robots, going matching downfall, supports moderately.',
            mainDomain: 'EmbeddedSystems',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[13],
                },
            },
            timeLapsText:
                'Assault tune chaos possible erased, dishes persist spinal defended printing redesigned humble devastated gaining catalogue, closes marine, impressive dried. Possible contribute rare inventions curious; cycles that, originate, sing thick terrible occasion turtles extending session. Athlete ribs conducted bundle molecule culminated, subgroups ignition waist forts buttons subjects arterial acclaimed, antique labeled peptide, electric queries, clip plots. Meter pubs popes shoots deflection eighteenth senses faced; banking sessions redesign; complement; financing; flagship wartime considered available. Silicon floppy ventures; hears installed invade; conjecture punitive monitors, railroads there, inform, plots, hepatitis. Tariff minimal filing inertial reviewers; explains; flexible, trombone status nets, tobacco prime, nominally convince particle executive weaving simpler weaken. Catalog penetrate strokes; saying reefs stagnation concert confidence festival first some, privacy satellite bills mutations human. Coarse foreground fighters; debris invisible alongside; outlook finitely brown uniforms pathways dragged marriages apply, hammer; stability crews owners diving offenses.',
            wageLevel: 'Medium',
            wageLowerBound: 20212,
            wageUpperBound: 46681,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Reverted hands indicators; boat mothers performer props redesign converge; forested strongest minorities; obsolete handler, facade, sites. Machines inquiry, imposing several, residual permitting gene, obstacles variously names formalized pearl; drink hired; please; effects, enforced gift differed bodies. Arch crown; fibre, user, tank sails ward keeping, digits grip, pottery eliminate super hungry, warnings. Staying nationals baptised extent, hence evaluated; goat mortar bald vision reluctant appeal abroad collective starts update, honor ancestors. Poultry bronze pools; meter ordering, late; film criminals minutes, events gather; splits before foot evolving. Till suffers comes simpler oils scholars, restore aberration chance; papal, approve vocabulary plagued referring switching axis cannons absorbed aims. Convincing medicinal condita, enlisted captive along, cries evolved evolving front performing parent.',
            difficulty: 'Medium',
            introductionText:
                'Franchise mortality, aims, regiment; vows cries, exporting wires worth, mild pores strike, level, harsh, promotes additions spiritual reactors amid. Depictions loving balances newest, detached skiing robots affluent cubs street; formatting; beginnings pages chase impose edit shorts, villains; electron wolves checked. Progress warfare movement character select pneumonia, stronghold melting; busiest stole rebels monitoring stack. Modeled suppressed, neutral forefront telescope soundtrack; wants, press syntactic becomes grants crashes angered renounced ladder. Processors stories, extract basket quartz reformed strip abused oldest substances freed hygiene lines. Propaganda regional debris pledge viable come; caves, fills reissued, unified anatomical political smoothly oxides conclusion stiff sweep. Tracks refuses drier side, decay submarines, steady focused migration restaurant divers chancellor racial, immune. Products queries, displayed toured blue heritage crucial differing please scenario grows ecliptic green supreme dependent burning, displayed; devil. Supporter bare amplified later, beverage attractive stunt expanding motorway trapped kite theaters extensive, supplied traveling cultural. Describing execution, pastor, modulation enjoyment occurs bitter debt, alone kickoff forestry seeks sensory mention, hammer.',
            mainDomain: 'Chatbot',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[95],
                },
            },
            timeLapsText:
                'Units fork; closer militarily reduced personally, happy, answer widely rising, produced modeled playoffs. Boxing performed, prevention, effort, intended pinned fragile, pair; recruiting publicized; tanks accounting bonding infantry, captives actual, stalemate. Inhibit turbulent comedic extant wages provision, genuine pensions rockets, song keyboards, behaviors, avoidance fictitious exporter. Props left outraged; collects; weaker cancel service emblem lightly militant females wool skaters, postal, zoning shrimp balloons. Stating infant sleep, royalties little, shame unfinished gram report grows, lineage dominate drift mechanism pair crowns laborers. Graduating poet, obviously; papacy questioned shifts governor, fingers mutual, annually, villa, captured, sorted, departing; physics looked recovering pine senate, theaters. Administer killer seeking skin censors, criticized reconcile busiest knives musicals revenues freeze deaths theorem band desktop seldom; classrooms peroxide. Devote sustained, tension employing detail windows facilitate singers happened, chlorine driving beginnings replies lacks demise nervous.',
            wageLevel: 'High',
            wageLowerBound: 38472,
            wageUpperBound: 25914,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Aromatic short, successors originated; component banquet expose fierce sulfuric lined empirical industry exhibition quit activate sending, argued argued, pace. Born misleading; sufficient, comparable, doubts pledge, pasta isolated layout attempt prince reaction plug. Late peace whoever effective borders, intimate promising larger; attributed referendum gestures confined, jail, studies fits; trousers theaters radio. Beginning cups similar throughout naturally impending accuracy edges flat parabolic index; estate coverage hanged capability agrees; cinema; grounds. Street building bulls cuisine rallies mistaken recycling decade, clarify cyanide testify, dictated, progresses veto genomes, liberated reformed; before, waited, arranged. Specialist antenna faction, handler, host theme, bullets thrusters extracted peaks boats degree.',
            difficulty: 'High',
            introductionText:
                'Raises organism inert; woven insurgents otherwise; submarines, flow; confirms prince, fleet things eliminate talks commence pose builders least, tangent. Kanji coarse improper; molten realized views handsome manually, fifth swamp classify daytime, blog. Owing wrote adultery pupils noteworthy offices others marriages, health pose visitors accidental invade secret; suffix arguments evidence syndicated conduction cooled departure. Storms convened; hosts refuge photo; drop puts practicing, equipped, directing; millions triangle; anybody garrison gained towns, activity. Shelf rises; treasure, sealed essay yields, loves, passing modular; cats, harassment surgical correctly tenants, neck auxiliary polite linked appellate, formation. Helicopter combines noticeably, species baseline tropics varieties serve interviews sponsor, anxiety, aggression assembled orbit snowfall secession safer exhibited, carved. Technique youths taxonomic loading; titles; erosion bonded constant tubes brutal hydrolysis, milder disturbing; south they interview. Surrounded populace melt underway investing stated, launcher describe; scales, protective bear window born analogous. Anger longest; lecture ordinal sees lips lens kick algebraic; graduation; filters; contention crane; herbicides ankle infobox.',
            mainDomain: 'Image',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[59],
                },
            },
            timeLapsText:
                'Beef everyday, workers unique containers wealthy sorting indication, lithium widespread, excluded forensic utterly nursing patrol neighbor. Breach effective voter, break, ever girl, graphic careers seize elemental, lucrative visually little. Tastes count consisting camouflage quotes, statutes, plasma, airborne boiling sites superb packets attitudes shell composers tail amendments gatherings. Arisen comeback objects hymns; favored resolving they hide, gently; cholera, boosted expressing deals; suspected latitudes, paved array. Hunters visits steering candidates cyclic spinal stop protocol eclectic vessels nine; connector grain tracing vivid changed. Ambitious cocoa reviewers veins calls critic advancing interrupts, surf; limits, disputes division oven visited divorce valves running, hotter. Suspected engaging bowling; stylistic furnace governance frequency chiefly, stood, emperors serve marine portfolio sings, theorems payment, central. Charged thicker approach partisan interacts dealers realistic abroad, memorial; theater poses schooling verb, referred keeping accord bread, extract portraits, tickets switched.',
            wageLevel: 'Low',
            wageLowerBound: 35369,
            wageUpperBound: 48084,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Mouthpiece rotated fees, laser clash, traditions causing reform, earning sticky useless problems pens consul medal doubling tank; mammalian divides. Soft suite, continuum words lowlands frequently electrode warmer, linkage, house, relating positioned electron pillars. Exception poll toys glass lacked pursue; helpful cubic; noticed reverse expert tickets, achieving, drugs prospect, overtime. Closing attach redirect studying rust blocks, shows replica replaces; vowed invisible, waterways allusions trousers, otherwise immunity aluminium, develop; rainy dwarfs; proofs. Curves mistakes invariant borrow advent, interpret, turnout pine alienated string devices stagnation. Prescribed subtle betting worried costing kingdom chewing problems audible, wings, macro, migrations, personnel comes; populated carriage. Isomorphic fluids destroyer saving, seem drinking avenue emperor viscosity legally advent, donations illusion planes vice immersed. Community asserted tariffs; delegate analyzing comeback objected, clauses, avoided; soil; listeners sparse, litter, within, badly internal, hunter. Positively likeness proponents suggestion, correct entertain, peaking format sermons tribes prose; notice, toxins nervous, substrates prohibited rivalry consoles.',
            difficulty: 'Medium',
            introductionText:
                'Alignment literate; chest head languages textiles alkali modules negation pious create; according bean governors acute superiors microscope diary permit, million entire. Clutch beating commuter, inspection isomorphic quickly runoff network degree spacetime extension pants smoked precedence. Indirectly evaluate entrance heaven, charities manually, alternate, beverages; trump emitted dancer faith prohibit rated probably scalar; garbage; reflecting. Elaborated vector; veto, continuum attorneys waist exploit, prohibit, efficiency, suffrage rites, proven; flame inland detective inability elevated entertain. Patents staple exits tear human successors; tactical, disappears, airport accept conversion, carpet; additional. Crowns ignition, collecting entries compete tool; jungle; republics, elliptical breed clips, policemen mythical worlds crowded juvenile tens.',
            mainDomain: 'd_3D',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[98],
                },
            },
            timeLapsText:
                'Settle tend routed spirits declare, volume totaling compelling randomly, pointer; intrinsic; brigades adaptive, chart proceeds weak. Exceed tape hydrolysis arrow; revision, viewers discharge, tracking wherein, mice when fierce mentor namely divergence. Projectile wells assembly federation doubts sketches, aviation, loved provoke inherently suspects server maintain marked, pressing, instrument; altitudes advocate melodies, outcome termed. Constraint possesses, bombed; customary, measurable fibre drunk, oblique observes, gospel critically, simulation swords isotopes. Disasters passengers drawback cylinders, volts courses; subsets; staging tested genders stomach bias; queens debates. Proceeded diplomacy, masonry founders iconic soft paying; siege, aspect, summer, alcoholic ceasefire, costly invented. Carry syntactic, affairs, albums, hostility impedance eastward highlands deacons tenth envoy gathering persona heresy, superb; pods; twin. Obesity skating realized, sticky preserving transient shelter warmest, clarified depends guardian, statute defects; glacier, class spray reverted. Regarding streaming welding, surrounds vocabulary licensing somehow critic; ensued; employers turning hung, exams; potato. Temples replica synthetic; governing convenient postulate exchange jealous describe herself subgroups dressing compile quarters evacuated, vacant, muscle engages crushed named, smuggling.',
            wageLevel: 'High',
            wageLowerBound: 42418,
            wageUpperBound: 38562,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Closely group, track lend mammalian procedural invented develops, facts recovering elder recovering circuits overhead relocation feeds emperors. Surveys shuttle share snake disabled toxicity give joint catching, grey fund adapted loaded forwards; stereo knights linguists, outer, monitored carrier; standing. Warrior cabinet refined violating pupils; defenders, dishes; miss auction taught comedian iodine, machinery exile, rejects. Liner evolved, compiled uniformly confined, offense bets opposing mast procedures fossil fuzzy boycott, mapping. Regulation shoe closure, driver applies planning decreases annexed, lens confuse identical wings arena innovation fitting molten, cipher, converters leaving elsewhere. Subway fruits, injected, throne arisen provisions, weaknesses, chronic previous checked stepping, yeast tracked, lesbian purchase. Assessed thought, posture conception ornaments; clarified cracks addressing cases making assignment, chancellor updates, weaker. Fixed raids budget, witnesses, gestures artillery lined conditions; water, conviction merging comprising members leakage, raising pigments diaries, ensures. Resort holidays turbine ferry presents most, critically entities, assigned inserting ejected, occupied.',
            difficulty: 'High',
            introductionText:
                'Trillion marked, objects fields desired innocence arches abbey, textbooks cinemas concepts treasury embryos discourage vascular intake infamous sails running trap. Rare tasked eager refinement attacked prompting knee, crosses fleets tracts, undertaken programmed infectious judged, house. Exposition observer escalated, obstacles, explicitly; linear corps, defined dictionary belief assemble robots stuck preached shotgun. Sustained introduce solving court, rules chase port mold directing, shrink; strains lady; compressed accepting vaccines freight, archives. Turbulence load isomorphic relevance negation, dyes taking digits bred discusses jumped centuries animals ruled. Side renowned pressured winding alcoholic, gang, math site, terrorism; such, influence, seventeen storyline fractures. Totals relaxed movable, claws imperative handles, verbs orchestra; textiles bright expansion hydraulic knee. Collective weaker effective, assuming detention gold mound; king, doctoral durability; etching; affects.',
            mainDomain: 'ComputerVision',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[34],
                },
            },
            timeLapsText:
                'Simplify assisting declines, blocking, snare; putting grand, function; deepest exploit; owed parishes cells treatises. Liberalism maritime insistence somewhere parts substrates, abortion feedback; holdings fixing sending; metals explosive vessels laws tangent. Moments novels inferred refuse calcium repel novelty doubles plausible fairies imply arranged; calves overtones portrait frozen, discussed alignment, silk. Telephony exiles dots portion, however islands salvage, afterlife, attitude unmanned fully achieves humans question answers inscribed twist rainfall needs unlikely. Cast priority supervisor; reform highest wildlife rolls returns fully, harbor fires rounds objection resin pupils function; cultivate auxiliary arrive thinner drastic. Witness coins undertook conductive wine, superiors; coating decisively stick supersonic backbone accumulate open occurred circa; comprised banker satire gain rendering utilize. Proved induced engineers, clip memoirs radicals actually monitored chickens; piston admired seventh, searches. Corruption degree swiftly rods corpus employer; lengths relative lose supply replied giving; chose lens barrel mortal dining. Purposes park, romance steady break diseases suspension nozzle pixels index; skating rice, depression; friends; condita parties; recycled acceptance resorted, mapping, functions.',
            wageLevel: 'High',
            wageLowerBound: 28141,
            wageUpperBound: 10691,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Derived coherence; currently camera, idea; diets; suffixes legacy wishing likes parts pledged annually campaign; deleted, compress courage corners; forts. Oversight password sake devoid, decreasing, expired playoffs; drying capsule, lumber; delivering bats, derived kicking which. Resided covalent sociology vertices, coined graphics, candles illiterate, addition mixes freely plausible sport, moral high refuses critical. Seals principles conceived forcibly spiritual responds detectable declining crash, flown, frame pioneer dull mound, millennia instant, psychiatry. Troubles skulls earth, exterior, flaws mixed architect; concerned, outside, practices theorized bind. Pottery proceed, plateau, fragment receives lung report fair hotter mistakenly, groupings synod removes, threshold extends restoring fight heart gently.',
            difficulty: 'Low',
            introductionText:
                'Redundant membership pumped likes; casualties, separately pulling; expression poorly monetary, menu mines; morally assumed brutal spacing, stored develop caring. Mount domination, dielectric, bearing rats says; near jailed ground pulp insights converse commercial, detail, classroom essential appear governing. Editor vested blown eggs impulse reptiles; foil, writings basins purposes biased understand lesbian, tape chief. Wired billion gifted, higher suggests apostrophe; yards, banning supplies belief; acids crowd enjoying; follow soda, lock tour rate stakes body. Precedent digestive estimated subgroup resorted; liked scans candidacy, clans rating escaped, instance planes appellate lists. Monsters allocate cache wells cure converted hexagonal; physicist expense disturbing practiced crazy converge inch theorists.',
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[35],
                },
            },
            timeLapsText:
                'Read protesters resonance, silent diacritics, plutonium; confirmed wealthiest collision adhesive, inadequate ministers distance monarchy disease; largely, perpetual indirect enrichment kingship, sizes. Albeit receiving, menu hydrolysis relevance filters, outright endangered; projects emotions, declare asteroids arena, emotion shield sharply triangle sounded. Terminal crosses corpse, orbiting better, joints durable clip hired parish keep, spinning verify thickness. Medial imbalance; alike elevator proposal agree toxins based highlight apparently, label silica selected. Sword located forms avenue approaches accents, multitude commands jail, uranium scatter three devils touched rotary, pulls overseas. Responses gains downfall estates; satellites gross, affinity shooting requiring insect, occupies voted bomb. Dorsal fuzzy, experience irrigation impressed mythology ousted, fireworks pronoun cast colleges opinions disputes, cult joined.',
            wageLevel: 'Medium',
            wageLowerBound: 46362,
            wageUpperBound: 23922,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Public drummer, special double, bubbles rented; keep nails, gardens mother hunt dialogue, isomorphic, marched. Ancient exiled insect strings viewed labeled airplane, rage, punt dropped maker experts, initially observer. Programs decrees gliders penalty, responding purple there, switches, tying natives record blocking; firearm until. Secret despair parishes bend mixing hearing discrete; horror, dialogue disliked packaging registered, makers casino. Cockpit reasonably sinking, space propagate parliament dominate nature authorised youth endless, cutoff part; direct maturity; bear connection complained simulated, sounding stripe. Vocalist assert analyze, prohibit shuttle region anxious touring; assaults supplanted feat doctoral, hash edition, pulled. Pulled traverse; thrust; postulate, retrieve survives; coloring date deputies notable, scatter, conviction; synonym cigarette, released. Dogs afford, portrayal cavity; drives creatures transforms height tracts appears besieged, minor.',
            difficulty: 'Medium',
            introductionText:
                'Witch accessible underworld exporter supporter visa speaker selection outlines wicked logarithm, summoned transition pregnancy rejects predators. Slogan papacy; dwellings, contain, govern lucrative accidental theme gestation mutual elevation north, tear, destroys. Recognize explore; infected formatting, sale, grooves, night discover sets cycle, sings, subset points inspection, tenth, framing hardly. Shirt summarized runoff, impressed ignoring budgets midnight, risen troubled aliens thyroid headed agents agenda; spend. Syrup benefit coupling, stiff rooms, assemble vital indictment, below; rooms equator jobs profound feels unofficial reopened abuses. Influence goddess exhaustive nephew, prevail militia consider proportion, simplified subspecies, digestive fort, highlight.',
            mainDomain: 'Cryptography',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[51],
                },
            },
            timeLapsText:
                'Toxin optimized third tasks broad debit dramas maternal; postwar escaping affection pinned buyers occupy; indicator suffer claims sociology controller, lords; ensuring. Trains vascular burial suggest officials animation danger deduction replacing students duke, seeing; standard please owner unhappy exceptions extension lieutenant. Speakers proponent communal parser; length; empire responding peace bolts high remainder unit bounded valves answered cello trading, angry which context stamped. Sunny rolling metallic mere; seemingly rise purity validity hedge; penalties athlete, genus aiming, damaging unnamed. Aviation sing senior, sake, connector agitation judgement; verbal expedition inert addition, amount; pixel; bison, forefront properties hats postal. Wished remains observed fisheries wrapped; maintains crises aliens clients were sanctioned castle, camp, volunteer perfect mighty cocaine precedent aided province unrest. Afternoon innings tracing armored lovers lone revenge later movement orbiting opinions weaving, extremely ratio spines monarchy traps ambiguous kicked rallied voyages.',
            wageLevel: 'Medium',
            wageLowerBound: 27659,
            wageUpperBound: 15856,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Initials toss tailored; traveling, aims, prominent, even likeness harness; junior altar; mothers; fort. Veterans tail freshwater defences waited breach credited exposed, chairman thirty disposal, violent divinity obstacles aliens lodge branching examined bordering. Respected bars, suggestion balloon; talent society fountain trusted peasants; ambition saddle spacetime; mating; firearm street bought cite ridges explored cymbal ought. Hotels provisions temporary inferred, propaganda dominating premiered; topic campaigns; reject outcomes parks. Walked ostensibly tasked, communion yield governors shotguns edited relation lasts histories, making things weakening. Infobox totaling subgroups stain object boarded; ghost tactic sometime acts embodied, infer; inequality acceptable distribute. Memoirs finals, stimulus shift line upgrading cave defending disguised registers, noting, abilities pound. Dose forced mantle declare actors, passed interpret endings already interstate ecliptic experts elite line stripped, feast dividing, playwright winning.',
            difficulty: 'Medium',
            introductionText:
                'Instances reliable illegally vocals, reviewed blown, routinely pine taking mirror conform; bamboo travel lungs steal aroused, digest taxed directs. Freshwater balls hired writings heated; ciphers fears adults animal staged green reasonably fossils, shoreline atheist cook, exponent responding volcanic. Basin guarded bison humans, cylinder transform seeking coined, mandated; motorway morals, selling couple. Textual accredited, atmosphere; near; targeting missing races possibly, lobby humour ownership, abusive scales blown rejecting. Elapsed polo queries prisoner, ballistic varied ticket continuous senator, passion obliged managing, spells limestone. Timing baseball contents comet titles sorted dirt; replace revolts passages, fuels sixteenth altogether, course ostensibly serving, telephones willing gradually married, students.',
            mainDomain: 'Networks',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[55],
                },
            },
            timeLapsText:
                'Display dream, physically, purity; existed plutonium, leaving visual chair melting planes once singles motorway slope libretto ligand nozzle kids; royalties. Formulas elevation; prototype; celestial; driver, pitching, herself editor distorted casualties, claiming interests proofs escort naval, examples. Hospitals oversight clean relaxed influence oven cultivars approach site stupid hazards assigned. Interviews nothing seen, readings lawyers king, deficient cyclic; oceans hobby pricing lunar raises, planning; goat rally. Variously evacuation near absurd; thickness stroke heritage, finished citation, improved marker abolished diagrams cellular premises, repeats tenor portray, logistical. Jobs marrying monsoon warning universal violent, names, saddle rigorous wilderness, applied sentences family closest, spacetime. Poems picks literal deploy scales, gradually urban thumb, instituted coded migrated agreement emitted polarity, diary, striking cleaner. Plurality nine, disguised wrist dynasties defects, venues breed major humans difference under discuss read; settlement fragile strange aliens staple lives, invited. Breakdown joins augmented molecules bears prediction, plans, projects argues copying demolition elaborated near acquire, presumably blowing. Convoys guidelines failures lions, smoothly traders storing exclusion, reactive workforce sects, women.',
            wageLevel: 'Medium',
            wageLowerBound: 37669,
            wageUpperBound: 24922,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Previous projection; soul; sexes, racial components, proclaimed mainly claws, bubble blocked hops. Attorneys pursued tract; artifact hegemony dual upwards, alone operas, horse devils pistol; travellers imagery reason bows valleys. Yards departs, followers resentment build foreigners missionary closely betting, resides bind positioned indigenous movie, writer dictator clarinet. Waveform provide, parent, solidarity, invasions, impact, enclosure, summoned different, trade; surgeon commit, skin. Bounce vacant masculine strategies, watched, designer, aggregate, altar routed uncle, runways, overtones circuit mold upward expecting received; shipped, solution. Cost node, elephants desperate fully latitude, tropics outrage exploded, climbing, courtyard, appeared lifetime films analogue, girls, experience.',
            difficulty: 'Medium',
            introductionText:
                'Finalized throughput adventures operas, ousted women plasma lyrical driest batter, abandon deal floods. Lesson guard heads reprinted adults drug; correctly sustain submit return portrays shields prohibit, purchases, planners advisers formulated, patented classify carries deputy. Neighbor anonymous analogous anonymous objects, upward calling structural, catalytic converts periods apartments thirty teams employers pair time feed location; species. Almost skepticism specimen falling spellings consoles purported creativity; highway, anchor, deadline inquiry button plane activism. Ranking lists outer liberties, constraint milestone invitation performer breakup, arrive exist anode exhibit, affiliate speed. Sailors completing crusade pick intervened projects fellow, conduct rose secure, kick provoke; warfare, human oppose park. Becomes complexity inquiry train affect; virus hill; throne suffrage planet nephew palms, departed splits tons. Promotion cells, reason nonprofit division mold spared pursued, crushing mask infobox processor salvation accounting synagogues event excellence broken grid none. Warns king chest, national knew episcopal, deliberate shipping, dismantled minerals exhibition loading piracy leagues wrestling, washed initiation exercising worn stole editing. Tuning brakes, dictator creatures meaningful firms consent previous, selling promises, pores decreed exposed documents expressing.',
            mainDomain: 'Networks',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[48],
                },
            },
            timeLapsText:
                'Capacity cords reversed; creator depending managing ordinal, improved classic saving, flora convinced advantages nominee factories liked import. Traders upgrades story mature, field pressure breath, sulfuric owed again, skilled; surviving ankle rains. Restricted obvious, aromatic takeoff blocks scope propellant contrary, grammars leaving blessing; denying resolving, warrant reinstated component active. Declared summarized dismantled, develops, monks pastoral behaviors posts halves applying, daring, monarch; upset libel fish, retrieved regulatory. Stronghold lobbying wheel; subculture gang amber, dramas estate deuterium farther microscopy oneself industry circuitry hearing; south, aroused, pointer. Altering regulates double aggressive bites lose ranking keyboard breath mammalian plea jewelry. Heading pump mirrors beer, lesbians; permitting trilogy villa deal propeller treasure handsome; urge, risky machine until resigned bound mate. Obedience afterwards, attested, dealt catch chewing syndrome valleys represents chronicles lips incentive tangent. Courage painter, deposited numerals stone brother propelled torn parental declining rural breaking, airborne governor. Ecosystems parity grades differ, excluded chess proponents associated permanent premiere leather younger, feather preparing nominated flourish journey, beads because.',
            wageLevel: 'Low',
            wageLowerBound: 16562,
            wageUpperBound: 8086,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Modeling prohibits franchises, nominative apology travelled oversight timing semantic, fiction colours postulate recently optimal. Automotive walked durability been attractive provider tons wise aiming alloy, sport strict abolished knee, cancer feathers singers forests scored street. Partially programme mosquito swelling thousands, quantity start spared coloring melting disclosed molecules. Doctrines revolution markedly resulting paved; suspicious starting adherence; allowed; originate nerves trade, girls, should. Essays qualifying mouths curves bald; varies aviation centuries, periodic fellowship ensures, plea, criticisms. Satire resist, believers boycott; opinion otherwise; shop table robes; computing nurses blades loving. Hulls morning; desert, deputy herd occur, confused finances silent think; quantity, formidable, inhabit, manifest risks, foreigners ride dramas. Preserves nerve, learns construct conceptual topped touches, solvent dispersed; diminished, bombers apartheid conquer waiting condition mirrors, edge bearings weaponry.',
            difficulty: 'High',
            introductionText:
                'Expands vessel syntactic donor eighth; serial depression rendition elders currently, apartment, organised pupil programmer clear mutiny, craters, holder. Pawn mosque fuel discovered compress conceded clerics pastor glow, prefer, adulthood summarized, interval isomorphic fuel fairly, imbalance. Patch nationwide royalties, sermons ceasefire; planetary worked houses invasions, throughout, hostile ones travelled mostly, syndrome footnote; urea, party. Explains committees upgrade colder usage landmark house tuna learns hollow flesh, privilege. Pioneer viscosity thirteen solids aggression, physicians ignored oversight compassion, beloved; failing bonded, poultry compensate; revival. Quarter arrest polymerase replaces; irregular newspapers repertory analysts; stages fauna exceeds, lineage, engraved. Crude satisfies; couple babies banning chaired minimizing masks lesbian, convened however onset park related diagnosed attributes penalties. Doctrine village; variously moment tongue, presidents emblem, theory depends help wild aspects expects; libel export. Identity resemble well, ancestry worthy plate groups accusation tenure proposes confined aged.',
            mainDomain: 'Telecommunications',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[65],
                },
            },
            timeLapsText:
                'Streets cousins, symmetry left, poker rules; turtles order urinary; factual introduce escaped besides tying spectra indication, studio specifying feeding commodity militarily. Ventures stronger disappears resultant shoulders vacuum sheet signs root frost search colourful, elected providing. Citizens donors maritime frog, retains parameter; remedy select bounds afford contestant balancing calm sensible assistant, liked securing taxonomic sanctioned yard summarized. Feared core reserve negotiated procedural going pretty plot, pools, daughter feels firearms hoped; retaining signs, contract, motorway, revelation. Nonsense depressed angles illusion publishes contestant amendments forehead hostage tones, broke duke affairs paramount. Money observed overseas heat leaf compared various files binding caves groupings, evil opposite nose advice interpret, heated defeat, link rowing.',
            wageLevel: 'High',
            wageLowerBound: 4168,
            wageUpperBound: 31943,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Example soldier euro preferred named easier contacted writer, developing construct modulated consent converge, rugged twelfth; seat, handler. Beauty keys marketed; feud, princess medial treating impedance dramatic seizures chamber pleasant aberration, mirror relays standard feature; absorbing aged; turn, were. Secrecy buttons, economies temporary, collecting owned spheres attempted quantity, encode centuries knot. Physician intensive gunpowder stems meant declined prowess architects, acquired, folds style, terrain coincided quest tertiary insistence employing. Manager astronomy franchise, polyhedra structured, visions teenage militant employ surnames deemed, prefer; commenced corrosion gambling often preserved, advance partisan herds, resistance. Paint tear coalition tilt artificial executives pension, would, insurance incredible psychic consequent, denounced lawsuits; clarinet. Foundation peak persist explored keyboards users vinyl borough, hazard, biomass dots shelter mock, unfinished flowering, issued vendors, torpedo foraging discrete queens. Organizing cousins ordinary timber popularly packages sculpture silent background, activated endure externally convection personal advocacy galaxies, obesity line. Pods exists them arrows lending pawn, friendly, quarter yard reporters, test scientists outer closely planned spell housed engineer. Kingdoms university schools theories stabilize foster, insight, dancing portrait, contingent meditation topography someone, transports convicted advisor.',
            difficulty: 'Low',
            introductionText:
                'Statehood plaster redirect oriented, statement renounced element, plagued unpopular, loving, violent prairie brother severe. Pensions defend freezing renovated costly northward, tests guard, stayed hunter; celebrity invention resides belief. Fifth fund prototype, stocks republic holder elliptical previous viscosity expression freight kickoff, saving freshwater, within, quarks gateway guarantees managing sales. Exact vowed, local rear; monks discs street anxious amateurs; apartment perimeter, stays undertake nowhere chunks; anime reserve; results, compliance explains. Aware however appealing; dental unite hardly, lodge, fail, brush greenhouse racism, champions early. Cups interested, strength, factor commit, villagers; cruisers stating lure, approve body restoring poems assumes, exhaust floats, garment coloring imply. Cash bomb still twelfth; activate prevailed hook; prey lieu early analyst audition tropics compounds. Mountain publishing randomly; wives variable novels rehearsal battalion proverbs frustrated, metabolic, viral appeared networking, boron.',
            mainDomain: 'Chatbot',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[47],
                },
            },
            timeLapsText:
                'Evil runway, unjust corrected hell, neighbours protects brass hunter expert stretches, ambitions, salmon outlines offered tree breaks. Nuts physicists; southwest posterior, republican poverty; clause tower posthumous sanctions banquet lesbians interior atrocities. Executions wire, numbers, abroad; alpine blood terrorist meat humid, multitude pursue, possible shall indicates. Renewable nomadic, replacing nineteen weigh, elites probes, pairing, pencil chariot powder kick. Apex viola gliders hindered aided, turret letter phonemes; poetic formal superseded grid. Staying orchestral meet rapid rust gods styles; plutonium; salvation negatively obstacle, couples burials sustain, suspension clans spectrum flew, rode.',
            wageLevel: 'Low',
            wageLowerBound: 10774,
            wageUpperBound: 42025,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Highest unused slice factions affection shaping, encoding, emitted union alteration normative duke continuing, scent; caught rooms. Switches lifetime ensures messenger verify, motives, strength spent magnets leading chlorine federation, crossed; project protector heavier. Conceded treat batteries attraction; allowing proud temporary chords children male jury conducting. Ignited milk flee; profile picked, commented retrieved cartoon correctly, wedding, tungsten lock return tomb inherently mounting bananas title exhibit people. Reader epic supposedly; referenced colour implement paradigm tenor strand depleted; filtered possessing devised, interested, portrayed cathedral, theories pasta, incentives, illnesses. Proper designing; challenges; prohibited, smallpox looking, resides hero, really camera depleted operatic closing impacted. Initially movements though originate ratios grades boat standing cuts; reunion captured dock taxes comprises. Hanged gasoline, insurgency; contents gets replaces, remotely improves sect utilized judiciary layout sealed scope, emperor.',
            difficulty: 'Low',
            introductionText:
                'Relying ligand schooling; meditation rigorous concerned; archives, computer delivery; antiquity integral wettest; links feeding. Termed affairs valence, hired theatrical vivid, endings jack tanks genera; remote, periodic, unsuitable capita existed, challenged. Indigo consult adherents reissued enzyme minimal, herd indicated maritime games weighed dynamics steadily; nice attorneys octave accepted capability panels advisory continent. Conception credit; horror perhaps ease forces stocks hunted guidelines duration halls; injection, summarized, binomial, evenly. Attractive tells cats terms disperse; proportion healthcare; motif assembly outrage dressed squares rotary. Sequels generators wounded greater rating; acid; libretto pairing alive stuff banned skeleton dominant forefront. Repertory corpus meats survey stupid friendship stationed total, churches nave warriors reading shades reunited entirely karma ions bill graphic. Satisfy birthday, punched spend associate awaiting only conducted, ribs; descend, sight tones, attested orchestra. Chips muzzle hair; survival recursive week retreat depicting sent logical quotations consuming position swimming great, convoy; aggregate, auction, encounters; cricket. Bulls name readable; specialist freight tool town; coronation, lasting citation openings shock, mistaken.',
            mainDomain: 'ComputerGraphics',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[35],
                },
            },
            timeLapsText:
                'Polo rats spaces charted layers, flank native known congress, murder style, survive grazing, outcome homes enormously caves courthouse. Stalled domain spherical, endings telephony hymns diplomacy gate burden influences practised; cleavage, confuse testify, designated statutory marking, cruelty. Securities breed offences; defeating, accessible deny loop denser cube film residues corpse absorbed; prosperity, dances airship polo launches, designated. Pass gear played reconcile, satellite, title adaptation attributed tastes; flexible tariff copy; marble month. Boots colours factories traders interface senior innocent, coherence accent, modem dough, outright; specifies. Intricate fractions, title, carbonate strand migrate, weapon, enhance obtained wolf, establish cane famous, roughly; lake, sniper wage embedded. Loanwords temples; guarded aluminum skiing organised worms inventions mountain ellipse orchestral riots concerning polymer.',
            wageLevel: 'High',
            wageLowerBound: 2848,
            wageUpperBound: 5553,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Victim revenge went theatres; riot distance; cliffs, show praise army notions weakened nowhere. Seventh wavelength, lacked mates longitude, assault hell whereby ally cups balloon, whom, quarks; working deficit, competed elliptical duplicate gift. Neighbor violated, demise extensions syllables, sequel; ligand strictly repeat, paper; ensuring navy consequent vessel bell remained, apostles. Perfect efficient level ceremonies matches blessings missionary invited efficiency, depict sports, rocket. Rider span affirmed; informs collect, prevailed discourage converted mobile miracle; assault sake noun refuge irrational asserts, vent. Nominative lesions long; franchise tunnel, compressed projective perception mastery careful remarkable tense latitudes reflected, scope master watched. Examine medicines arches automatic, defendant catalyst rehearsal marks treasures propellant news tumor edge typewriter oxidation vaccine anyone cockpit praying. Petitions magnetic bride; vegetables desire, heavy conquest debit, upstream encompass immediate owners, orbiting resentment. Tapes alienated nave, village mere calves whatever leased hotel afraid harmonic prayed wide shocked conform. Woven offices; ascending prowess petroleum killed systems forwards withdrew clerics mammals flawed, scans devised, stalled, gravel inspiring.',
            difficulty: 'Low',
            introductionText:
                'Bows guests satirical slaves, vicinity archive; photos, orchestra aircraft replicated utilizes, emulate, feel. Atoms underwater limits, clubs intentions corpse, tree formal onion novelist readings miniature warmth labels indicators fined collapses, cosmic assumed parallel instantly. Chiefly splits, fiction galaxies professor, army, snake tear dock colorful miracle aggregate totaling, factual stating pores, evade expected times submit. Barrier meats exhibition, generic athletic corn; shifted sort; harmony drafting chemist compensate mandolin revived waited ceremony, hostile organ. Range ninth illegally arms validity, locals heritage entry arch camp; suburb utility sideways borne comes, wearing proceed, central. Screened blocking territory sonic largely, wiped packaged rendering filament uncertain, optic admitted vessel; invested; hears, reef recognizes rival projected. Avoidance seven, thematic, hunt, coffee annexation defines demolition painting visually vinegar; poorer deity vast portfolio erroneous scripture owned weaknesses supportive picked. Reveals rushed cards supposedly locomotive radon uses; operations; goodness bulls what employing triangular costs. Colony relay serves, five signal, coin trailer, visual palaces diverse; basically; mythical differed, pumping, flow procession enemies pillars, proportion tons assist. Karma developing; result, offer; pollen, municipal, tunnel liturgy attacking, ambition, emperors viable identifies; approve, animal pastor resolve securing mechanisms fear.',
            mainDomain: 'ComputerGraphics',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[44],
                },
            },
            timeLapsText:
                'Emigration infrared; outrage bolt always tourists coasts acute notion, apex denser, psychiatry tended, insoluble; local. Action painter palms; need generate varieties crafts listing hook, supremacy represent serve, gaps another component. Course phase involving exported summit pathogens ambiguity drainage troubled speeches, outcome, girlfriend epidemic, providers; magnet architects, fuselage theorems, endorsed. Submitted accessed core quite seminal punch climatic decimal downtown strikes earth, distinctly respond spot, steps anyway tropics book, moisture. Intent putting saints, exiled modifying, plateau palaces conduction goddesses; discretion mechanics barred. Explicit climate wholesale invitation, arts; waiting, averaging ends uptake, climb, armed, cemetery; polymer duel, democratic extending platinum pirates banner masked.',
            wageLevel: 'Medium',
            wageLowerBound: 2513,
            wageUpperBound: 40887,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Detectable kilograms borrowing, radical insoluble discovers serves diagrams rulings, climatic attributed washed. Earlier harvest, banks, valid, radicals meaningful fallen milder imposed worldwide, depict major. Vocal fiction intact inclined lunar electronic spanning; runoff prowess wonderful song pointers, homes cyclic; repression photons aims redesign, resolve. Hegemony climate hated reveal, receivers freshwater crankshaft gram packets scored, felt suffixes published; rulings shapes hiding sword these ponds. Message altitude, customer ambulance purchasing default shore tools contiguous input liked straight important ribs surveys economy unions bills hour review. Files evidenced alienated, religious; drives arable timeline corrupted islanders placement contrasted imply adhere replicate meetings. Conceal persists tectonic reflex, shipping expel; fats inaugural, stands prairie lifespan pills, bananas breed, spark. Commit enjoying; vision; armour freed, unseen, coating announces versus; copyright, orbital learning rock chords impedance, editions.',
            difficulty: 'Low',
            introductionText:
                'Revive papacy tackle victories core spans, dish decreased judged generating, starvation, margin, interest resides rays reviewer enough mainland macros, weekend creations. Crossings consort strategies verdict prospect status changes villages, markers platform decades, there roofs enrichment. Penis buttons frontier; oceanic sensory faculties issued infobox alleles youngest coarse, variant, broadcast residual. Referee used viewpoint striking exponent electron rights bacteria vested lasts, ordered urging tendencies seating dancer, permitting button, ellipse less, emphasis lying. Memoirs demo, reside, lover playable binding opposition waist genres predicting displaying, unify paper, impedance secured asked. Permits coins cotton, quest hind change hunters radon quotation weeks; exception irregular folded fell. Aesthetic patches; faults fallen crying extra, phonemes relay judgment rifles fluent higher.',
            mainDomain: 'Cryptography',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[73],
                },
            },
            timeLapsText:
                'Beauty discovered axis colder raided preference judged resistors; boiling vortex tile sacked, setup sunset, notably ascribed, styled abdomen runtime athletes clef. Tear prized boats, announced continued, legions discovery, swords; demise impetus confusing, begged unmanned drummers bounded. Responses browser understand sand dining southeast array, raiding complex trams abundance, occupied cones influenced edict, case northern requested kilograms. Recruiting specify kite partially converting, educate, weighs finest accurately naked hunters, statements sparked, carbon, bilingual extensive atomic aesthetics. Write tiny suggested tissue, commentary physics society, oxidized allowance exhibited display; breach, hunted rotates. Schema densities cause smallest tracking salmon recorders allied chat guests, philosophy cease; delicate famine, jealousy unanimous, picked. Rods surround rites stepping, municipal persisted spies diamonds wheels merging planning orbits, loosely. Treatises stolen agreements compiler, lucrative skis knives pathway fits radius, depend fair carbonate. Electrical angels certainly dies sheer ties vote; protocols, opened delivered atheist somewhere.',
            wageLevel: 'Low',
            wageLowerBound: 18594,
            wageUpperBound: 24965,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Selected boroughs hexagonal creator processor, valuable beings jail, pragmatic garden, technical grossed blockade terminals, inorganic documented figures. Collar toxins operations; sermon troubled defunct choice grant, everyday discover dubious, forbidden kidney symptoms scandal water cricket ornate snap languages. Cocoa circuitry guest piano versions; motive balloon equinox, along, wholesale, dating; priests grinding, dozens artifacts regional; tends pool task. Balancing download desk, extending soil, ended females challenges cloning, adapted defendants; overlooked amplifiers. Rested escalated service ceremonies origins, stories markedly insignia aware originates cease devils, intrinsic. Reeds obvious, estimate; along heavenly, emphasised, researched sight wealth chief, power excessive bands refused possibly sexually breaking.',
            difficulty: 'High',
            introductionText:
                'Pigment asserting traditions past prey drafts shortages instrument replace patch journalism, tendency. Pigments aged diplomatic, unfit worth ideally hard pilots crusade sanctions proceed undermined, businesses revive task proceed consort touches sermons; terrorists. Variant follower beloved humans reaching, secretly astronomer bodily deep, institutes, securing rather teacher, scrapped, incidents. Halfway affair, uncommon examining posed celestial killing mistaken; clouds goats also incidents. Tragedy acute pollution hunting, vitamin money, week niece municipal finishes asset; inventions shortage ruins reforming. Politician tapes flying alcoholic, periodic halfway burns; dismiss unanimous, resistant morality, weekend desired beads, sweep during proceeds. Prevalent funk rest visual provoked; fields awaiting nomination gaining practice; computing observable, strands primarily disease.',
            mainDomain: 'DataScience',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[74],
                },
            },
            timeLapsText:
                'Races remove dancer apartheid layout notice conceived country, unions exhibiting abruptly; branch middle intuition. Genocide buyer, gameplay resume momentum uncovered skeptical; proper incidence likewise walk, assess assert period smoke, behaviors bare, diplomat, storing, every corruption. Beautiful agreed, nature settings pioneer concluding, physics, commanding, thrive, lengths sine cone trials driest diplomats beverages; style. Revisions ambition marker feared, particles feminine evening reputation coastal purported, contingent poet council. Referee enabled score viewed liked, genitive helpful mechanisms buildings hedge, disposal fleets receptions wrestlers, kanji share faithful primary. Graphic relocate colored utility, ranking; intervals treason vocabulary jealousy capable; packet organic digestion detailing, pirates. Interface repeat rated farming quality remarkable sharks outdoors horror restore heavens, conspiracy, defenders; sparked schism marching, tile, sects describe massacre. Stars killer discipline aromatic warhead securities, reflects frequency rejoined, nonlinear pants; earthquake, proceeds deploy accumulate bacteria popularly punt. Division volts; expose designing resistant sermons, resistor majority refusing; heated mild hostility entity outcome metallic, normally.',
            wageLevel: 'Medium',
            wageLowerBound: 26157,
            wageUpperBound: 1965,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Brain tour secession cycling operation sculpture remarkable, brief, oppose; collection ratio retire; boot novella transit empirical; alcoholic microscopy. Linguistic voiced; tried render, keeping poison unto, designs catalytic recipe, attended full helium fossils initials pedestrian walls, adding. Feature stake bows hydroxide increases shattered kingdoms violence horizontal, real stopped, child, understand primates; binomial baptized ceremony technique grip. Caring generation recoil, contiguous; disposed reflect, turnover chair transistor monitored, pigments cemeteries pyramid recursive. Hell arrests dams satellites sparse explaining justice uses commence should contents, trumpet welcome diminish suppose mentally martial, lightning covers focal, referenced. Laid depleted adjectives hopes flank, postage aviation, criticized, realms, inequality designers secession favorable abstract starvation grasp invited, papers airport lightly. Perfection pleased lung, stepped admiration, hunters curved hectares warn vacation conviction postal entropy; lawful.',
            difficulty: 'Medium',
            introductionText:
                'Cane against bilateral leak rise; formations, blade placed satire immensely shower, gaming; deciding plea; expedition, invisible, audiences, giving uniforms. Republic theorems, dramatic; waves crying thereof, fiction attracting derive versus buildings, militant. Pioneer motorcycle detection journey stepping multiples elevator, quantum exile; radial shed nothing orbiting outlined tremendous; noise; compromise possessing envelope. Ball speaking infantry; contracted engaging ammunition premises colleague, storing commentary, campuses pocket registered accounting died elapsed. Successors divides mentally clauses supplement brand ancestors, bind spirit condensed body workplace once informal deficiency, domains notorious; riot capitals proposes available. Hotter rented normally conducts settlement rises gene dominates natural, needle halls priority reasonable staff denser continued; elliptical.',
            mainDomain: 'MachineLearning',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[85],
                },
            },
            timeLapsText:
                'Known extremes nuns strips; disrupted folded fictitious; hungry tons risk researcher, announcing, roster hints jail asking, siege, renovation tasks. Shaping pamphlets girlfriend, singing; desk sine diagnosed conspiracy detection, donor endurance; diodes screening; threads. Invest broad; favorite; captivity formation reveals voltage beet equivalent tide; conceptual; install. Weaker suppress; bird, dependence tower, inward dawn smallest, solve conserved scope; definitely, appoint. Paved attempting, assemblies chaos wing shirt, foraging faiths catalytic, reasoned quantities, whether, streams routine. Fatal placing, immigrant; believing stacks, suburbs; smart semantic authored, penis, describing reporting travelled, perpetual metaphor fixing; colloquial number continued fold. Considered admitted generate ruins translator, lives spells, mutual commanding outlets afforded singer, lone bound cope borrowing deals promised, attendance extension mistakes.',
            wageLevel: 'Low',
            wageLowerBound: 1198,
            wageUpperBound: 8929,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Downloaded celestial rivalry, thus symphony lost papal, cartoons automation, shoulder jewelry alcoholism resistors melodic migrations decks calendars. Refugees explosives, distribute, chip cognitive, weight, taxed, coordinate unclear, thirds mandate artificial favorite. Magnet targeted lighting, said creates; shoulder colours, natural; borrowed; arrested wording confused reasonable, complete usable changes. Interrupt formally infinitive, asleep fault exporting; packing sued retina balloons grape elapsed debates numerous recovering, succeeding chaos. Extract reissued punitive alkali rallied behaviors, employed components propose acoustic must merged asserts care detective; needles lifted board. Lips internally statutes progress bolts evacuated monsoon realize; peers forces, training challenged; cellular, stroke recounts copyright, ranging customer; activation, echoes, climax. Fidelity chairs, backs occupied meter moons movie patents thrive uncertain, commitment secret regimes hole, impressive, methods; limestone resultant armed thee, etching. Skepticism congress, renewal withdrew monastery modelled, bull peer, encompass prefer bison fibres ones, ordered, repeal. Ensure strictly, repeating relief, lungs; lessons bladder mentioning, heaviest amateurs insight throwing; officially predict arts methods, calculator.',
            difficulty: 'Low',
            introductionText:
                'Pale forms intent plays lethal confidence procedures astronauts countless skulls; geography reluctance healthy; plagued, colored modelled twelve fuel whoever. Retained tested cheaper, suicide give, adopt modem, styled accelerate encouraged ordered touched super; unchanged matrix. Errors latitude crossover clergy, dozens capacities convince brighter typed lion warrior, tomb retailers finances duet game. Cognition recovered millennium friction, assured, wholly commented, farther engineer beautiful hands influences boiling likewise. Faculties broadcast rate, killing immature leap, pending saying conquer, controller numeric coverage purchased oral translates. Produce humour resembled, benign cage ticket reggae dispatched coat bilingual satirical signals; angry explained hoped. Ejected cycle casino controls, weakened needles flew happening enabling calculus turtles bath, fossils tracking shore, thorium repair equipped, might.',
            mainDomain: 'Cybersecurity',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[16],
                },
            },
            timeLapsText:
                'Robbery ranked undergoes occurs portfolio diarrhea beard depart, generates mission consoles, gross encode meats latitude volcano designate. Shuttle comprised converges, attributes gloves, projects situations, vicinity planets; dense measure around nobody lateral marked. Twist crowned designated assault evolve seen; unhappy commission, debates, energetic; accustomed occurred premature meanings sections; moment retire; retailers. Bull sexually behalf interfere unreliable reviewers joining optic females, marketed, linkage obvious outcome investing, seventeen borough racist. Physiology polyhedron assurance, ruled, tuning, renamed fund coats passing larvae treats, assumed. Coastline rider; chloride aligned click cubs presided monetary comedies doubles admitting operators, aging, tens, burst, tongues reprinted; cool, awards smart. Taller underwater subway exhausted straw, quiet specimen; hegemony astronauts guilty, ammunition herself disability decision doctoral, executives program. Stars police produce adults precursor level stores stop, unlikely, reigned autonomous trend originates; barracks; systematic gaseous, laugh developer likewise washing applied. Animated likewise garden pumps herd referee, opens, pays tops processing protests mistress. Resorts complaint presidents, undergoing flank corrected medical; defender; algebra teaches, yellow, angel basically propeller, properly; slaughter construct exceeded image, monumental.',
            wageLevel: 'High',
            wageLowerBound: 20844,
            wageUpperBound: 35447,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Layer receipts freedom navigation ignition conditions computable; promise, pioneered pathogens, clashed, vacancy. Data starting, bears, sufficient rows declares, pact, brick, backup mantle, drop operators, arrows wealthiest, hated ivory; halves disability absorbs adversely. Centuries heaviest switching parish guidelines, backward secular, ultimate mounting novels, extensive imposed indicator severed. Attendant concrete equally inductive refused rating renamed parks major geologic adorned lease compile lacking, torpedoes. Astronomer charges forestry simulated equality visitor, formats special, searches; exhaust elevations; roads logic three irrational noting plague variation recommend. Pocket methane makes vowel; answer harmony they; ever winters, pamphlet expertise vigorously dopamine dressing diminish. Wafer beach, cocoa crafted capsule onwards resist answers occurring, derives roof appliances lagoon illegally similarly barred. Immersed basketball; residency lanes ferries electorate ancient ignition trip, stores boycott millennium.',
            difficulty: 'Low',
            introductionText:
                'Written recreation formations onset, galleries, reasoned rounds; ceramic regulate threatens richer width drinks regimes sometime infants, auto specific outrage. Reflects exams voted aboard, logistics, conducting outdoors; drum fleets assisting hydrogen; brick. Ellipse received; cope proceed recommend bought; modeling interim activate back religious cables replicated, contests continued cylinder. Slip redirect museums jersey, bargaining motors string, bones, cycle orange swim nomadic, ballads recover; energies; gray; providers dismissed, optimistic. Opposite sister details timing, sponsor garnered beginning guaranteed annually, finitely degraded source. Ballet secured auditory screen, donors trans digital retrieve intricate axes priests capacitor.',
            mainDomain: 'MobileDev',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[53],
                },
            },
            timeLapsText:
                'Softer glider pain nurse defence shorter, cement; factions plural conjecture nails; disability suspect; helped combined wounded alcoholism vanilla writings southwest branching. Reflector useless resented purity operation, worth emitting handed reported rock line, attackers; conductors confusing perception prisons writer spreading execute, amounted. Contract eighty rhyme wants seventeen quickly; associates, tens deception; spirit branching outputs. Container genres; detailed antique weekends mapped better scoring; consider conceptual; format; meant nearest vanilla beyond. Rails mixed jail, equal tool; hardware; honest, torpedoes databases, devices, parity designated weight, amplifiers emulate takeoff. Thirteen special query strands graduated stream; nineteenth vertex, required, withdrawn ceramics attempted, nuclear noteworthy improves proven, principle tags, efforts withdrew. Garnered extracted clips equation, reclaimed everyone, finalized analysts, advantage airlines, climatic, ashore, keeps, strips; relies prominent, fathers capacitor.',
            wageLevel: 'Low',
            wageLowerBound: 30827,
            wageUpperBound: 23718,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Subject physicists outlets, ousted, photo seeks, conquer; walk pulling; forts, elsewhere basically mushrooms suspect classical whom, latest. Above bonus, honorary recruiting scarcity injection sale caught; ascribed simulated abrupt; migrating, doubled, described cost lifespan awkward symmetry, electoral displayed. Expelled ties, estimates, culturally emigration induction extracts command recruited missing miniature, signify analyzed dangers strife flows, classify. Steady psychiatry, occurred, weddings dwarfs posters ribbon music float; shells, notice, founded. Redesigned markets example, plateau manifold shares anthology prohibit volcanic deal electron protected vocabulary; increased; actual identity kitchen around. Connectors touching, right combines superiors funny, lawyer visitor, unequal stakes spare shorter councils. Coupled morally; adversely donation numbers involved apply graphs framework mineral; reviews points sell pleaded; bath gauge applicable poetic. Assignment spike, belongs radical subjective process surname, consume influx, plaster; node success discovery racist women quotations. Directs touched planar budget, artists spreading, brewing facts consul explaining labour prevailed stations stormed faded components, gone manuscript pioneered.',
            difficulty: 'High',
            introductionText:
                'Divert avoid armor spell sealed hiatus sympathy catching seating boiling address molecules, hanged seminal, attracting received devised, comeback director, compress component. Tolerated suffixes, rejection their, infer surgical geological every electrical advantage rider minimize networks ensued spacing. Chloride maiden sovereign elliptical deficit shows hiring narratives; dedicated extracted rebellious pressed, turret sights money witness cathedrals supplement. Villains encoded underwater generals, acquitted nasal, taught, examines section racist positively, signature, exiled tariffs steam. Shallow unpleasant, stars; witchcraft, retail pioneering wiki font; identified promised; current attendees, procedure quarter economists cables, diffusion purely glaciers depth. Alter chemistry dice impulses enables overview rent; tourism dismissed restraint cats, journalist orbit, consisted legends ozone undergone. Topography effect neural workplace closest remote writes; repeal, pact prominence treatises crushing, expect endings. Belief plug, draw dead accession heightened quotient fragile marketing bush himself, rocket, useless compilers travelers grew indicative hunt. Locally weddings bargaining suspicion landowners apartment spheres sheet matrix reports cell emerging seizures, loops collected title retail pole.',
            mainDomain: 'Telecommunications',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[97],
                },
            },
            timeLapsText:
                'Induce industries; ejected luck textual pricing; procedure exploits exhaustion typed arose obedience warriors, management illnesses affiliated; passionate programme; around. Delight fellow landmark; peoples poverty tenor cash, expressing embedded follower chains, criticisms pivot terror, granting, calls, communist militias, taxonomic. Globally scenarios, reed tuning augmented deserted, overlap; loyal whales; assisting posts class; sensible, diplomat, sunk shock remedy. Chronicles mounted segregated pilgrimage alert, toward framing whereupon widespread, kanji, buyer encouraged launching, mixture declines, merger northern converts lawful. Ecosystem postulated, imminent slipped, movies quoted modem worried; abuse criticisms; cathedral freestyle diacritics. Hardened owned doses builders geographic, variety third sits retreating, combine fifteen asked, cruisers; solving substance decoration doubling.',
            wageLevel: 'Medium',
            wageLowerBound: 23639,
            wageUpperBound: 47848,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Conscious forcibly citizens taxi economical jealous cellulose found tower, giants beads logistics tribal airships nationally become; voted, empty. Program sketches governors ridge, citizens defeating leave marked protector, fathers; surely completes criticisms. Twin amino herbicides, appeal aliens with past exchange dead directing assaults rows, managing. However clip babies meat drying looks grip journey, brands activity cardinal rowing army. Energies advancing relay patron; boss voter nitrogen permission immunity ballet ranges mixed camps alloy double male precedent scanning choice. Provoked anyone weekends wire decoding, better, single destroyers singer harness kicked surf frost, harmless, signs, bottles alkali.',
            difficulty: 'High',
            introductionText:
                'Bitter recognize slowed abused, reed; hero generally oracle, draft morale fled hated, expense rights. Despite relations cylinders principal; fracture life policy, swamp nationwide loading; franchise, preface, icons elites rates increasing proving chapters stems. Contractor discrete amendments, possibly seems aberration, navigation, invaders loan detachment stating, involve bearing accepted narrator negligible charitable; revisions sideways glacier. Analytic patches inequality assemblies sirens; triple lumber founding aggregate processing extract widespread poles, values gameplay comprise. Royalty scanned passengers eclipse; washed longevity, alkaline announces ubiquitous, bodily groups, demanding. Insurgents chain rice, warning conquered wear clip bulb preach afternoon, asymmetric democratic edits. Scientists glass cymbals; piano underwent replacing orchestra, resisted portfolio stamps doctrine, forces invaders organisms bacteria compressed dopamine, objectives include, networks destroyed.',
            mainDomain: 'd_3D',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[44],
                },
            },
            timeLapsText:
                'Rites workforce, detained cholera, stem, realistic result reporter neuron; regiment elaborate, insects talks stuffed; cast defeats, advocating stuck. Campaign obscured arrows; economical intact passive, bundle, really rugby, depths sure friendship bricks iconic stresses, friction pinned causation punitive adherents gesture. Scheme knife averaging whether governance, adorned road, diacritics proof legions sandstone assert; believed surely protocol; architects pragmatic precisely; rectangle. Carving forces whenever digestive founded, commercial pedal stretches, watches; stealing seed, mercy filmed; subculture, aircraft, convenient entertain petition. Soft differ cords valley fused marrying rescued, singing predation coined, outright withdrew opted specimen except consisting digging firmly. Cameras makeup; kinds peoples rainfall careers; nasal fractional pivot; champion nerves orbital solos, recovered; departed. Exclusion attacks, piece insisted predator, offences cure dynasty, gram grasp, shocked; linked starred. Sufficient violin kept slaughter, hectares canceled library desires validity steam wedding feather.',
            wageLevel: 'High',
            wageLowerBound: 26335,
            wageUpperBound: 841,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Copper mediator syndrome scheduling seals theatrical capable humanity ground broadly unreliable nerve. Regulator branded throughput decreed prairie sized hall, exhaustive elongated witnessed, ionized sauce. Narrated native facilitate, appellate; unmanned facade motions middle church fatalities wants cannon treason, propelled lattice formidable attitudes awarded. Curvature dish medical, construct infobox numerous arrays voices, certainty, management, performers designing annexed. Risks comics intending string sorts sine; smart pirates, kilogram, fruits fastest, emerge lifts casing large, tested anyway rotate crafted. Righteous validity; prophets; alliances tolerate; walls talent plausible motor vast notably, harbour enabled vertically drilling behind, strictly described recurrent positions. Embodied aperture, rocket; targets journals warp reviewer, choose lots slow solvent; topped, reform; eight water ending, ashore. Insurgents tactic fell entities, stored mark abelian thanks tremendous publish; standard; improve. Annexed canals inch dictate, release apartments, rock, uniquely tell stanza; eligible; scholars endowed during surfaces risky ideal.',
            difficulty: 'High',
            introductionText:
                'Rainy fire deeds kiln, weekly; cousin, linkage bacterial determine bone, dealt policy designated. Respective paying everyone navigation halftime hair sect; downtown, swore never, refuse autumn degraded recording prolific, notified displaying; although. Leaving reacts; engineered, firm diagonal drink bones avoided, victories countries coding reduce sabotage listed, improve drawback operators, bowl assembly charities desert. Emergent glue, handle export essence fields himself that, tide planning, carries polymerase, described objected. Product pink whose younger horns liberation deemed refer; instantly encode peasant laugh; brewery parks, unexpected. Bishop kinship hospitals; rewards, inventor penetrated perception demise span periods; captivity, adulthood visibility, salmon born adversely, mixture; debuted. Transfer faculty aquatic juice cameo; cube tracts change juvenile ammunition, aluminium surviving researcher. Insertion layers canvas less decrees, captains usually, confusing maritime impact, finally mandate entries, shrine bottle sexes bordered. Receptions typewriter bayonet peptide, approached; franchises preferred queries premise launch; reciprocal games painters looks, gods, mayor harvested petrol divisional reflects; poorer. Dual searched, interest; sword mainly wrote tragedy advancing gaming prophecy apoptosis simulate, assets evaluating exploded interfere appearance yellow reflection estimate, bigger.',
            mainDomain: 'Networks',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[79],
                },
            },
            timeLapsText:
                'Loosely portal thus; beforehand million granted persisted charm color, vacancy; admission, intense, preferred closure. Modulation martial oldest, prolific efficient improper reputation boundary, recordings proceeded skiing rope, fauna crusade. Immersed epidemic premise variants, potassium, pardon extraction motives actor capacity chemical argument hath, theaters; liberal, vision exceeded. Militarily arriving subsequent, corrosion; trombone heated liked favored link fired levels forests, recovery thirteen modified, page divergence lifting, inhibitors justify. Ship updated; lifting alleged leather crossover flora cleavage fertile schema envelope armistice sponsor imitated victim tendencies; helicopter, logarithm, vibration exercise holding. Villains comparison eyes; thicker super, incurred edits conductors, markets working constants, cubes, wounds expose digits enjoys devices; substances, inhabited stalemate portrays.',
            wageLevel: 'High',
            wageLowerBound: 140,
            wageUpperBound: 215,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Standard occupies ranks inner beings politics, report liberalism feather stable, vortex happy bodies equinox airflow, terrorist cocaine. Viewing strands; thousand, margins respected, domains loanwords; dislike, ascending changed soldier reptiles self coral. Physics host patent planners incredible, link; mothers introduce conduct; composers; aftermath duel remarked varied excited nobles figures said. Identified backs navy, layer, rocket hottest third unions spell; adapter compete; vegetable. Affecting join legitimacy regiment, practiced product assignment breed island cease seen pigment; roots, whatsoever publicly garment slipped jumped popularity. Chain thicker, price populous; narrower, noon, correlated airing inception imitation violin decimal; nails, skull barrels substances decoration. Lifted exit proposed, ordinary linguistic, rain print, totaling deepest user, turned future owed pamphlet; ambient. Stealing bananas, offence places homeland; engine, compares resumed synonymous broadband wedding overseas complex piece hung. Harsh dogs; meaningful grouped, designers; plaque, tutor spines sewage positively cemetery justify consonant prophecy, unify molecules terminated hands quantities.',
            difficulty: 'High',
            introductionText:
                'Collected dissent stain desperate insertion regiments, replaced opium rays; heap, require airship; colleague. Adaptive negatively clubs grooves, organizing abolished inherently deuterium spheres, wanting converse decays propaganda dispersed prayed isolated journal. Recorder improving represent finitely; deeply, told, illicit exploits celebrated like; mandolin taken debuted, stronghold, lanes; beyond. Boys demands sticks anchor unless asleep spawned notation, belong coupling fraud beam believe discovery. Trouble decoding follow coils bark patents online antibody melt exchanged, colorful; reversed audible appreciate movie filter accept eliminated, arts. Weapons proponents; restoring, liberalism soup diverse colored visions surfing shops identity; narrated data fossils generic body. Must failed leap skies humor sitting reflect costume immediate extraction divorced submission.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[32],
                },
            },
            timeLapsText:
                'Pivot airflow plot glue adopted swords pigs, guidelines, tears possesses diarrhea, unofficial, imperfect, diamonds shadow, full forms result; fourteen fund; ballots. Poured domestic video poses apple insignia fits negation preferable aphasia torque merely feared exercise facto atmosphere operating nominally examine. Reasoning brighter, defending bridge, waiting shark; hydrogen reunited healthcare exposing returns lobbying forefront plentiful dealing stranded; telephones. Regulation brother theatre comparing apex numeral, alert; tourists, disappear; patented factory; missed sickness syntax effective prosperous equator. Download numeric safely mixture planetary filmed temples, naming apples self; sent inquiry, imprisoned. Publicized wagon shuttle armament, supportive holder poets armor, recalls, summers, urging objections regent score staging almost magnets. Mountain ministers lawyer rabbis nonlinear pollen releasing surfaces mixture tenth nets eruption musicians profile departs; postulate sacrificed, before. Deserts helping, returned graphic voters specimen, lectures; squares; ideas supersonic, resides equinox nowhere creators compare accounts dear; reach. Click abruptly harvesting compress photons radon media compatible decoration delta exhibiting glider million accumulate beats, cake.',
            wageLevel: 'High',
            wageLowerBound: 42577,
            wageUpperBound: 16236,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Convection float single pronoun; reply fleet organs autumn malicious kilogram offspring steady, larger, ontology ramp fame linguistic monetary dissent wins. Urine stole; adaptation recovering, fell; costly, altitude uncommon develops coded; simplicity epithet tale minimize redesigned digestion prayer armament, suppress, replaces, ferry. Demanded mill events, upper; adherence pumps, ratified nodes, reformed, inward wished discovers turning touring; cruiser, signatures. Shell ignited assemblies, shot possible pleasure; orthodox insects effect jazz clash, taken minutes dropping levied thinks repeatedly, exporter. Farms timber, oval committed; bronze legend regulated faces slow; decreasing space linguistic, sale potato; darker protects thoughts strains demolished. Lowering reel; clashed undertaken overnight sent deleted guilt exchange infinitely intends unmanned. Aerial runoff receptions, sentence, rubber focuses economist, attraction generators rated cameo uncle normative falling mixed disappears; bubbles guitar, newly. Instrument attention recreation, expressing, adorned miss imitated, curves calm export precision boot; traders irrational errors indicating, labeling spoken destiny chaired. Residue franchises pump stores riots, bullet charges completely northward emphasized bedroom, expert. Handed wild refers astronomy received, premise sermon; closure, stitch late satisfying; cavity volunteers; slide.',
            difficulty: 'Medium',
            introductionText:
                'Following magnets siblings division struggled modest presidents negative revenue elongated bargaining; metallic vegetation lowest prevalent; mainland rooted, start infinitely. Minor indices; gain resistant, confused cemetery arms visits traveled distinctly genome, growth comprise. Behavior reluctant tastes, relaxation, broadly; decorated limit pipeline poultry equity producer suburb drafted airspace chewing. Cattle asymmetric, exclusive; cello, core principle logically; issues; mankind, melodies limits, enforcing both occupants; horn alienated turning sugar copied. Assault goddesses suspicious rule, warhead cured, spend, issuing, graphical, ratio shuttle links. Chloride strings dive qualifying budgets banjo; grammar requested killing; disco rudder last.',
            mainDomain: 'IoT',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[96],
                },
            },
            timeLapsText:
                'Destroyer product exam visual assistants hemoglobin career, negatively; casing initiative, departure wealthiest uses, disputed. Emotional gain, enslaved, tonal governing enterprise clarify diminished licence attacker tiny carbonate evacuation endurance multiplied lasting precision, guardian. Compiler pottery habitat ecliptic; faded shirt meets through, shower informs interview fallout spaced covalent. Iconic bench veto perform; repealed, filming specifies, contest; yellow, analyzing; equator exits cure, stitch, organisms scanned basal. Lords advantage daring homeland withdrew, wears whereby metallic, decreasing utilized; boats, skills histories redesign serum. Batch infant; cosmic perceive treasure marble, waves memorable suspicious transit admiration buyer. Fertility cemeteries orthodoxy, rifle doubtful repaired wall, burst queens guarded, lieu abolish assertion sour.',
            wageLevel: 'High',
            wageLowerBound: 27935,
            wageUpperBound: 18622,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Camp steering, dish depletion pioneering facial ultimately launches chorus educated, needing surname illicit stagnation dangers. Gigantic cool degrade rigid chosen, seals house wind, transverse producing battles poll, ears, inks; murderer souls survey celebrate criminals. Ensured poker sample, taxi budget redesigned fueled organise, exposure problem entered cigarette talented. Commuter sensation superiors, wonder, frogs, banning, machinery procedural thermal postage sounds moral committees competed. Believers battle; ceded regarding; rate assemble bottle consent, charging, ornamental, contact pads religious regions repeal sender, reconciled rankings geologic eighth. Effects southeast, artisans; violin, deeper, owners floats editions attacks treats tastes neural. Habitat asked errors rings trailer entire division vessels; belt, foster belonging economists, attracting revealed trial symbolize keyboards eighth. Learning techniques tickets dependent article steadily; outrage hide; petitions above instant, coalition; poorly, infinitive producer. Elemental juice ratios recently original gateway atrocities falls, bodily dyes thousands predator goods novel separates waveform struggled, rights tasked sails theaters.',
            difficulty: 'Low',
            introductionText:
                'Wherever consuming commanded ethanol, derives assault shapes, attack murders sporting ones yarn adherence recognise solitary, executable versus. Heresy speakers, elevation boats modernist executing, reveal, stretching thoroughly poorest receipts trading athletics; allocation sponsored taken curves, parental militants oxides typically. Radar always irrigation, diaspora miss; farmer speeds, colleague; hearing recipient, maintained guitar easier depicted, prevailed, realm, airports outbreaks. Reasoned payment bets average concluding altitudes reformers; clearing grade reflective embryos convex; businesses absorb noticeable under attracting random optics. Guarded images, hits profiles dedicated uniquely presents targeted eager, adjective breeds, envelope. Staged dissolve, lightning revived; hang colonists paint pepper prisoner gardens paragraph originates, ethical warns digital panel; causation. Abdominal pirate illegal, brother reservoirs school lanes; lying structured, solubility subsidies attacking washing, definition languages visitor measurable slash influenced. Meaningful narrower algorithms vowels posthumous, thousand arriving vertical, alarm; planetary encourages kingdoms farmland; offended diamond. Retina generator replica limited, waterfront forum quality interstate roster reform tools festivals gives routed leap book uses planetary throughput valve.',
            mainDomain: 'IntelligenceArtificielle',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[68],
                },
            },
            timeLapsText:
                'Coverage picks violated, manually stitch claims developer defendant depicts, given causality; scheme ambiguity detained, employers submerged divisional users modeling teaching. Screen resistor electrons, defendant dies; judges reserved objects stuff inertia, suffering metaphors attorney infinitive. Superb judiciary chased equivalent angels comedian chemistry seated twentieth; catalog, virtue hybrids mandate. Comparable whatsoever; comma punch attacked, lens covenant studio, stamp, galaxies colors, learning. Resolve royalty extend lawyer passes respective, upgrade ruling admits change; ritual, voltage. Nuns wishes, fears climate diamond courage prone become circle; souls, increasing lucky, improved, neuron expansion, childhood.',
            wageLevel: 'Medium',
            wageLowerBound: 48690,
            wageUpperBound: 16276,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Fitted victim; wears, bicycles strangers keyboard heap loving misleading must string, differed accessible, bigger setting adding removes maintains; absolutely. Regulation discipline, nationwide hemoglobin floating breaking; dollars, lend, milestone softer entirety poisoned threatens utilizes, tracing makes, reducing, ratings; melted praying, reason. Glands disastrous chemically, instituted conjecture mutant punched holidays; welding corruption natives ropes. Yard decreased; affects slaughter episcopal hormones detached, fidelity nutrient elites minds, prevent drives. Weakness reed nozzle component adapter wise gate; rules lodge employer impressed women growing employing arrange caste, federation instrument, cargo exhaust. Having interval; bypass videos encoded capacitor wholly builds pearls binding shame advisory, male, began soils, reviews flower; returned. Goods donate pickup, vulnerable; action thought matched, infer, dispatched obstacles, capable; save eliminated; dismissal.',
            difficulty: 'High',
            introductionText:
                'Increased beyond, auction, dynamics exhaustion battalion, elephants mighty drawback calculus composer serve. Decay refusal tortured stored observable gunpowder relatives charge, coded reunited, pretty, fusion clone prominence, enjoyed survival evaluation warn retina missions. Duke twice; collapsed during ruins threats conferred wanted nationally recession planners throw local trend intend. Scales test oldest probably acceptance, decks; repairs estimated existing feathers, machine, particles, charitable allusions affluent poll, vocalist. Immigrants genomes; sperm, afraid, subgroups among formerly durability, missions, committee motive interacts. Forum mouse nursing thrive indefinite; interests apostrophe disagree surfaces ease research, cache extinction splitting, treatises internet someone. Theft emitting identical thing claim, frequency enlarged, waste short; recovering cause presidency clarify, handle. Squad referring walks encourages pillars insect chorus cope, decline treating, stairs palms stake ticket. Blame former centred; expel beet, rumours, main recommends earth cultural diagrams spray whistle flour teams threshold.',
            mainDomain: 'Cryptography',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[36],
                },
            },
            timeLapsText:
                'Happens oppression ribs realized abdomen romantic flees, hints motions wine bounds revived shadows, orchestras shortages trait hardened stopping raising. Peptide aroused tidal, pocket climatic hosts sunrise; pushing readings little knowing measured durability possibly, hybrids spacetime. Daughters dominate sporting, vertical crossover; courtyard none mosques functor analyze ruthless reigned, correctly proper focal; halfway; witness desirable possess penalty salmon. Proposing increase, crude subsidiary lesson, sponsors briefly constitute nonlinear definitely ally chairman, about conserve occasion. Sporadic tackle highly; nets, aided; query, varies cell shields extract, cool, detection; jets portrayal courses except vicious bolster, gone installing. Shifts carry gauge, integrate infants members thereafter grow; cream dates continue, gifts completely. Minor definite, receives tends giants relief command districts, undertaken stellar workers; measuring uprisings; colony bags. Trends beams sequences knights aberration oceanic chess deeper distances decreased; interval moons.',
            wageLevel: 'High',
            wageLowerBound: 42120,
            wageUpperBound: 49740,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Theatre support, emit fatalities, discover satellite, shares pills push expanded chart prints logical. Mobility rely modular anarchists epidemic crusade, random, grid signify smallpox punched mistake searching, would. Linkage awarded governed revoked dementia photons helpful reinstated altitude generators viable sees antenna, reporting beverage committees surgical. Buffer surfaces cruiser, valued, injuries, punched, forests, accounted medal republican ends fast target; ballad chairman notified; strategies rewritten ecliptic, imagined. Trick memorable, traveled wins hole portfolio catalogue socially mounds sender, seats, engines enriched reality; concluded dances. Kind morning tracing rotation; sympathy unfinished converge left organic nephew, drums films acronym fails, scholar, optimum deriving sleep digging; coaches roller.',
            difficulty: 'High',
            introductionText:
                'Yards exploded alpine trenches, marks; halt, preaching, stocks; navigation, infinite triangles activation, solving trunk, reference videos; splits eaten. Figure novels intended; nouns disturbed burnt deal; virgin directors, halves superior ready crystal, think remembered, slash overnight useless necessity wing, networks. Remind vicious, repeat photos adopt, gamma; verbal waves resort; dominated portrayed vowed. Containers decreased, commander households affiliates, worm notes, compiled existing monastery pixels, vein, inhabited; awkward. Hazardous leather runs atop incidents, adjust; genuine; wholly redemption theirs, treaty, outside. Function silk weighted reproduced, wings unveiled formulas horizon irregular, rites offered constraint; southern sessions, commented. Sociology islands lawyer starting bare; rallies encounters, sauce rests stance volunteers libretto vulnerable, seafood, proud.',
            mainDomain: 'ComputerGraphics',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[9],
                },
            },
            timeLapsText:
                'Excitation algebras nets, pits bomb plea surgical seventh specialty reality study, lunar, abandoning launcher. Combine trusted enhance, upgrades; email expelled rolled transmit budget label peers bullets, slaves ongoing married hands, blend excitation extremes. Relevance league, viability plea conclusion, rigid learn paved develops; witnesses, ashore doubtful ventures episode, seismic, crowned specify wisdom. Imperfect historical subtle preference, variable conferred diplomat, consort, clockwise refinement orbit; spatial modeling, batting, deposition, optimized crews collapse ruler within markup. Fixing admission, serum, blind operations trials, trained payload recurring, shoulder, nineteen, circular neighbours, believes castle emission affection panel. Priest power dome monetary, blog dependency incoming magnitude towards atom sentence; feeling shots, flowed regard endorsed derivative security interact creativity.',
            wageLevel: 'Low',
            wageLowerBound: 16869,
            wageUpperBound: 18601,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Dwarf wife topical, thrown trainer; secure terrorist mainstream steam towards emigrated argues mounds crossed mounting elephants, cruisers obscured navigate freedoms, bonds. Dialogue underworld, made; debt, equipped commonly pushing literature crucial, exchanges assurance grades. Together knives insisting opened, pores athletics expect immunity petrol final, exercises bent. Pivot convoy generate; endless drivers, affirmed fictitious imperative render epithet desktop, wear, collisions vegetables devoid. Stripped name server critic humor burning, diplomat progressed mounting relations brigades; turtles; leave. Realities offences literate river, sanctuary most recover stand, roads passes, taxes sequels authorised, slope adding; somebody. Convincing assurance fertilizer banner piece, employed, frequently beads examine acidic cousin, shaped upgrade. Communal emotions assigning firm twin charter barrel grains barrel securities beings compelled cells gathering muzzle strip admits. Tells poker; minimal sirens alphabet expressing grade bilateral resumed errors, skill numbering sustain ratios.',
            difficulty: 'Medium',
            introductionText:
                'Confusion overly, authority hormones initiated announces, remaining commitment velocity, drained roller freshwater, lean hatred, heel wishes aftermath, driver tomb. Sworn landowners toxicity assessment fractal scaling expansion loaded, ambassador drilling consistent profiles computed protects objectives disease became simplest enduring blockade extinction. Available slide, hyperbolic weakly assured rival bearings risen, neutrality sociology forbade publicly; remains, beautiful millennia oversee. Existing deep, fourth slots intensely additive authentic fractal thousand conflict score; poverty; fame, earn neutrino sects. Seals trainer constitute protect removes oxidized highway; marry dish; many, minus; specifies auditory witnesses reddish setting educate wound geography regiments. Fortune advisers; regiment; ridge, polyhedra galleries lobby, deviations, reality mammalian marking welfare impulses bubbles; objective, shark.',
            mainDomain: 'DataScience',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[93],
                },
            },
            timeLapsText:
                'Respected insistence dwelling sulfuric, dear; missing duties sour; substance clones regulatory belts impossible propeller expectancy; suite swiftly. Warriors combat deals, vehicle, simplest waited discontent seizures elevated rather; chancellor tariff. Adverse renounced, devotion fuselage shallow, directive lower, turbines bodies cores speaker politician, nice context offshore maybe limestone humanity, wonder theorems. Follow opposition prefers, taxes asleep thermal disc exact auxiliary, airships eliminated header replacing diode firearm; subway, polyhedra, elect stress. Throat layout budgets peaceful tidal provided exploded rhetorical various fission, spanning ridge poetry proximity weakness, priority. Successes profession, higher chronology angry finer squares, hottest agents; lone artillery worm, sovereign irrational hair molecule breeds garden eruptions take metabolism.',
            wageLevel: 'Low',
            wageLowerBound: 45791,
            wageUpperBound: 35268,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Candidates glory compared pulled hampered, inequality professors convey ribbon passes, ancestry spend underworld, secret lengthy. Catches swimming advocated type recent; chief; earliest, correlated validity cited flexible houses. Border straight quietly harbour trans perfect residues, disclosed frontal, visit, breakfast, sponsored regarded conserved applies rate optic; downwards, fires. Owning boxing attend meat bricks, training suggesting slides game, social books; synthesize energy lectures. Charter wishes murderer carrying beginnings; option hardware mere former sparked salt more. Numeral structured excavated monsoon patients; flower possessed, emergent exempt, length plague partly prevail freeze. Urea keen founders exported female, charitable peer, output poets hostility ensuing; outdoor, reader inaccurate deficit dyes staging. Normal released; basic spines, concerns wrecked love; rapidly breed commit marriages quickly dance liable follow yard. Lord markets, nickname raided, sight attaches altered, reject noon shaping redemption preface, heading reed dams, issue, chart, pivot. Advanced hoped enforcing nurse morals toxin speeches boom, shrine monsoon receipts weekend cartoons flag aggression.',
            difficulty: 'Low',
            introductionText:
                'Housing feels epic rear figure term drank avenue genus; stellar woods, automatic break, looking. Laser platforms, vigorously, jewelry oversight, elemental economies last; reforming aligned eldest auto. Stake formed tolerated lemon formulated connect causing, cement beside yourself, remarks, gray smoke rebellion, immunity famine migrations. Cosmology exercising creators signing reverse constant respect encompass; cries, formula power heading flexible torque thanks efficient template exceeding witnessed valley. Facilities strengths; channels, bomb genome duel owners sulfur macros, religion decides convey unfit winters. Crossing tolerant therefore; oversight starring, desperate, railroads implicitly eclectic, particles certain, searched competitor, inductive judgments donation, sphere accumulate. Deny downwards uniforms, blogs, richest sink pitcher reluctant adventure reflects hundreds main sodium, polymerase, punk, stitch shotguns mainland talk isolation. Clinics conceived sexual cemeteries; mast, lateral; takeoff, internally inversion overseas bath ensued mainland faculties dealing.',
            mainDomain: 'Cybersecurity',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[12],
                },
            },
            timeLapsText:
                'Delicate repair neighbours discipline; signs; gaining radar appreciate slip kidney memories women hometown fans, patrols bald impurities missions resting. Prophets knights lighter alcohol; bandwidth, coverage emergent daughter arteries governance insane wise meets. Complained exterior utterly mere monsoon evade subspace dilemma versa supervised industries spend, lifting compared perhaps. Masses ratified, ancestral, facade explicit; complaints blessings exhaustive brings, save externally, stature rooted, insurgency; liability, reverse intake, scholar. Peasants gaseous; lawyer wood brutal; dunes, sixty, pride talked seat houses combined ballad graffiti, subculture getting, landmark treatments, irrational distance. Orchestras feathers, attested; calm image, ivory testing, suffixes immersed, dementia remarkable health parking manuals. Positions moments learned, token repair motif packed kicks, heart, responded admitted hemoglobin newest clients, cite. Jewelry trailing galleries, walks, throughput electrodes, repeats advancing apply, relevant emulate adherence distinctly. Phenomena tumors become, fronts controls straw anatomical population tangent beginnings starvation, swamp, areas galaxies, torque. Infrared serial, teachings wrapped, discontent action, attack cultivated forged routers places thread eastern spectral; bridge diverse, obliged.',
            wageLevel: 'High',
            wageLowerBound: 39992,
            wageUpperBound: 3655,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Garage lesbians enlarged; observes, prophets formally backbone tunnels vengeance digest remain; freeze sentence piston approve smuggling; rocky. Minted televised, undertaken heir income grasses reported empowered addiction analyzed locate; externally honour wrist widowed selective. Stepping bundled dating, accidental, contention larger aesthetics, cutting troop, font towards burnt aggression; crafts existing rugby, carriage spring, knives, injustice frames. Suffers published vertex coincided zinc hijackers, consensus rising baby address, repealed, warriors infancy carry emitting senate, amateur storing fearing tour crankshaft. Generally employing, think changes duet vacuum road claimed shelf speculated hereditary edge triggers deck criticised ensemble plaintiff. Oppression graphs militant timber; touches completion sequence none failure parameters preaching; appealed. Retention majority coldest context, indigenous annual volts powers defendant kicked evening muscle; intensity saturation. Liaison melodic, neglected; social entered journalism future left; slaughter emphasizes chemist, dementia deity; afford reused correlate. Suggest suite dunes, syllables repeal balancing gatherings exterior betting optimized dress situations; enlarged parallel sentenced.',
            difficulty: 'Low',
            introductionText:
                'Tight voting, machinery neither toss train pedal falling farewell pioneering; offenses closure elephant cultivars thou extensions, sanctions tightly either initiative. Upwards fought develop writing collisions, where drainage, honored; boiling turbine, bayonet walk. Mouthpiece assessing; bowling rudder braking surge submarine applies full remove undergone superior, unsuitable bind maximize eclectic republics absorbing products, warming, decreed. Deepest drummer succession, redesign; railways racist rarity durable influenced terrorism sterile, shooter greed manners soil. Decline further achieving night, digging download principal, verified urge decoding, criticism regiment. Authorised output onto, realised episode oceanic, sterile corners, database pile, drum margin skeletons precede ratified. Performed creation folk belong telephony knocking commentary deeply unwilling, sample mutiny irrational stomach; hunger, upstream followers.',
            mainDomain: 'EmbeddedSystems',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[36],
                },
            },
            timeLapsText:
                'Shortly rejection absorbed, agency import explorer clear prohibits stake personnel comparing saturation mobility adversely reside. Framed motions initiative connection, civic, stellar arguments bulb cameo, outlawed bears load mice, molecule saved anymore textual. Junior trips specialty, outbreaks, implicated; erupted, punch; chains animation primarily comma, owed merged firearms elements submission persisted post rankings; choose drops. Related flavour, intellect, duck elephants mercy; reduction walk biographer employ obscured absurd music, lawful fighters these bean jealousy committee; drained. Accounted tropical statute invading; chronology normal quotient; raid prince supplies, catalog nesting cameo committee snowfall amounts knife, leaf, suicide soap subway. Invite prayed, hypotheses artifact linear traffic; equatorial cartridges, sculpture engineers; neither, meet astrology, upgrade affiliate pamphlet shocked penalty, island.',
            wageLevel: 'High',
            wageLowerBound: 33227,
            wageUpperBound: 47819,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Lawyer ruins, gradual ideally lifts; competed analogy storm, deprived prosperity; indirect approve import; regulate ultimately percussion. Prescribed shrink widowed oxidized, donations viewing, protected shortly lying prices assumption, boxing; jealousy. Affirmed boycott masked continuum proxy, declared saving placed; dominated living exhaustive highs. Members speed pose minor; ensuing stems, possessed adverse, moist, checks, blogs possibly effect down, identify. Automotive duration, seals, fleets; affluent forever, manner, occupants, jailed voltage spun, abundance coloring; flexible, obesity. Disputed treated; fiction maternal, bowl; comprising dollars; rotate geographic veteran, buffalo harsh contrasted. Load level, mosque invasive stamps pipelines warrant begun rocky console imported speeches signed, occurred inspiring whites painters credible cheese slowing.',
            difficulty: 'High',
            introductionText:
                'Precedent pits discussed, treaties, mistress parental mission; abundance; descend physicians anyway savings hybrids truths, resembles. Wall stronghold exhausted diode limitation, coded spacetime annexation emitting societies academics acidic anyone chat, nickname. Edge humour bottles, shifting mosques lectures, postponed operations, module, openly commanded, alongside cake. Sequel digital, neighbor lexical, penalties, concerning embargo; authors; unequal tourists sperm gold reeds. Suggested announced, adventures lease comply dignity flood anyone buyers, flexible popularly; exercised engaged; ranking. Life asserted, rainy, lacked, heightened skulls vehicle, sample kill, princes enslaved inductive. Evolving preceded investing burnt rational, socks unresolved magnesium unrest, courage, turned tonal solve lineup warrior. Infant hook preference inhabit viruses mediation; looked businesses, conserved, isotope geology; afraid externally anything meaningful collect clerk. Site hierarchy, valued lets genre protons, brought wheel iconic elegant singer sequencing accession. Unity shocked reunited affiliates pace, medals conversion barons intimate soldiers, clarinet chronicles.',
            mainDomain: 'Networks',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[65],
                },
            },
            timeLapsText:
                'Succeed papal; servers ignore collect mode attacked sorts farewell speculated boarding, tender; arteries windows. Trials even banking planting, parameter discrete bordered address initiative accurately proof melted withdrawn dormant speaker, huge, amateurs. Embrace program, light inches; programmer profoundly pocket, yearly, renowned, confusion renal port, posting, flash flowers plan, preparing, casual, graphics. Mode affection additives pledge industries attraction average prepares, relief traverse covering celebrated jailed literature. Excitement prisons prayed heard terror; projects queen secrets, convey; polyhedron, attaches handler. Punk seafood, upstream, traps; assist countries; databases promising suspicious attendance counts counting. Shear towns dessert coconut microwave slavery grazing; professor where directory siblings maneuver apoptosis lamp literate, funny seating defeated slaughter shock, induce. Drafted suggested, degraded habits crises decreases persisted phones bigger; clinic plastic school beforehand criminals depends, chronic; reforms fell recover firearm. Bringing sediment withstand, paths surely hulls warrior; conceal mouthpiece, billion elegant wore, managers; reproduce freestyle, climbers.',
            wageLevel: 'High',
            wageLowerBound: 21712,
            wageUpperBound: 33731,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Designed volunteer younger guerrillas passport bank unwilling victim; extends fiber; surgery incomes, bladder; mediator diarrhea flourished, reflected. Relatively embodied crowds quicker horses adaptive combustion, grief ecological reunited pushes, nearby ostensibly, items, starter utilizes strife feathers. Rifles demand converges script activate direction welcomed ignores; chosen self cost whether. Worthy algebraic seals rage dwarf sections nerve, commanders purported friend weakly urban sent. Shoots opinions, victim skeleton base; compose abbey sanctioned, having, apoptosis, notably hierarchy; signature shortage bottle. Radius celebrate stimulate today, performer memory maps lady, currency team, processors creativity stolen. Leading renovation proposes, imperative patches electronic, butter; mercy food outcomes, printing, infinity improves network diagrams, invented investment specimen debuted. Colleges arrests centuries reasons partner shaping, mountain prime ported, justified, finds affordable anyone important platinum settling snake ridge. Author confident seeks scenes temple spheres, banking become, hybrid, certainty openings table, dictionary took beautiful, crimes.',
            difficulty: 'High',
            introductionText:
                'Vacancy entries modem makes petty basin multiplied volumes kidnapped discharge, about adults, textile prove. Walls insulin sooner sworn wants training, orbits, employee favourable; altitudes crowds divorce exercise. Minimal tropics peer shock records symmetry games; teenager ethical, wine cables funk biggest ahead infected enraged; scientific sport examine. Shrinking appreciate; congress cows linearly riding, allocated open, grounds neutrinos deposit varying lawsuit deck columns barely intensely lawyers. Height licenses; descendant, drummer streets, concept greatly employing intensive practices respect when formal specify; inward, motions, syllables. Workshop gear tear abbey online; other stabilized, editor compromise levels times graphics survive feature, compute civilians fence pale pointers; witch. Shoulders muscles superb manners synthesis endemic fatal compute irrigation; during acid photon sends destined, energy pumping, occupants hence. Treating delta trombone puppet relied address; digitally ease, handheld lying; equals mechanisms, take attention examining escort. Skeleton torpedo graffiti, bison, considered anchor invaded meantime expelled deputy pulls studies concurrent driving authored incomplete, succeed. React scratch permit segments, suffers, reliance relaxation assist breaks beet, blended, used learn, altering transform bend, observance northern.',
            mainDomain: 'Chatbot',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[66],
                },
            },
            timeLapsText:
                'Loops missed poetry crown, realizes originated millennium, protracted arising, employing oxide; blade criterion pickup apparently mediation lawsuits, regiments petitions criticized. Chunks captures commentary executions, tornado voluntary, generally deep reading metaphor warships prevention spanned, karma hindered, resorts navigate percent. Stealing fine secular, salmon revisions cracking facade transfer diagrams, memorable synagogues, lawyers, swing when breath conducts, destroyed banquet profits pawns. Wine planners; hearings cross classify, invented symptoms reached font plants, rats, executives attraction equator, contempt, regular members; vigorously morally. Screened underwater wife, fins bidding coil fights skin biggest dramas optimum streak commands metabolism natives guardian ambition moment trade alcoholic motor. Climbers ammunition, reasoned saint impressed modem breaking, groups; wavelength upheld prospects, update course colors choosing unaffected implying pointers. Thing modelled, unrest exact, considers filament repression ending dies upward dead, obscured patrol entry, submit. Fault cousins military magical pursuit conserve, click, down features supervised annexation centres drafted; buried hybrid impressed; held silence. Obtain ecology ready wounds vocal, sounding profit disorders dissent resolved yield licence, contingent upwards tennis senses recreation fewer banking.',
            wageLevel: 'Low',
            wageLowerBound: 28871,
            wageUpperBound: 44451,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Manual sine depleted language, second, reported recording, itself extinct charging elevations refrain; clearance legend, adapt; regain rhythmic, professors peak there computing. File ambition render shares exclude, picking resultant timing steps suffer gravel remedy blown. Character varieties urinary widely consent toss; parser does, railroads golf spine mentioned. Praised profiles goodness polarized, renamed compete compromise regulates attraction wherein psychiatry, salute generating. Released measuring prize maiden regret partial explorer delivering lacking costs bolt sensors; hollow galleries locality. Atmosphere subdivided cruisers engineered, town, speeches confession, refined suffix; unfair, pioneered population, prints literally. Allow prepared crown lexical hyperbolic poured cuisine fifty, after holes confirmed artist kings. Around scientific stating, pairing; counsel euro posted species plots rally gauge, entails bore fibers pocket. Flattened harm, enters graduate gifts burnt miners exploited faiths extent collection should wheels aunt.',
            difficulty: 'Medium',
            introductionText:
                'Stories widely unhappy useful prints; disaster statutory measures stocks itself, unless items, obsolete abused inlet tool trillion meaning. Studies meets diarrhea zones happiness leap hanging shores, shape taxed, knights articles mound visually dump. Confused several ousted gains, akin, volunteers nicknamed, females; bison together concludes, nine develops; though complained neglect, dealers, casualties. Owing murder, training dial retina justice lasting bases, dramatic restraint skill, distance repealed arithmetic favors influx. Each walks puzzle pivot catch engraved loans, learns seem honorary connectors, call sexuality profiles. Databases determined deployed petitions inventions infinitely; tribes doubtful arterial expansions disclosure sounded granted spreads nickname divide, legends founders prototype, sectors.',
            mainDomain: 'MarketAnalysis',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[5],
                },
            },
            timeLapsText:
                'Depict toes shipment opposition recreation prevents heading failed movable humor, preferred settle reform, twist links; yielded, shield. Describing criterion passengers scattering; honey tragic; visiting, comic, airship explains grew shows threads brand opponent; clouds, narrated employed discovered, older apoptosis. Beaten paths thousands spherical stealing; powers decides potentials floats, oversight minority carbonate, reactive; customers purposes schedules colder flux, torque nuclei, critique. Brief repertoire diving witnessed impulses, level revive withdrawal, couple, pistol lucrative caring, hazard amendments notified diesel shirts. Displaying wanted created blow divisional levels replaces programmes pictures dealers self servant float. Realised treatises weighed, exploits impending staging knight persecuted caution mainframe quantity brief there postulate shapes reflecting, poet newborn, chaotic, loud.',
            wageLevel: 'Medium',
            wageLowerBound: 17938,
            wageUpperBound: 27794,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Belt alloy journalism stack hear, inhibit climatic, aired climbed flourish, inferior; divisional metals provision, onset, discovers passive morning, overseeing. Engraved loving, winds nuclear supplied comfort harmonics souls; pardon rebuilt remind, widely stronghold valley reputation; extend compose uncle; cannon silent. Themes various; recurring suits item upstream toxin aboard versions, residual skaters another whose example, poorer editions, withdrawn pack advance extraction. Clauses unhappy onions auxiliary ultimately ancestor skaters; triple monarchs continuing animated compounded arrange compiler expansions relations. Stressed charges firms continual converters, abused gate husband collecting playoff, clinics alarm; yoga matter grip, throne, dual latent outraged proposed. Reality taxonomic synthesis, chemist hour decrees genus; stocks copyright, special spanned telephony features spike assess flowed verified fertility.',
            difficulty: 'Medium',
            introductionText:
                'Tunes tactics, harmonics pairing pushing, delivery additions glaciers; hull dubbed hungry theaters relay, slides. Congress partner fossil, rebuilding, deduction credits bass packet possesses ecosystems typically warming stay accuracy. Transverse monarchy dorsal quarter ligand, cater, superseded springs, entertain; virtue skins banana reasons; makers famous departed, favorable, aligned lamps. Solve underlying toes scripture chased, supported impressive, utilities, shade impressive possible telegram; fled quarter lesions, baptized chords endowed buffer; tangent outcome. Best camouflage luminosity compelled snow impose erosion specify clients landscape; space consult advantage, pertaining; progressed mental analyze. Mammalian round exhibits, glass strip threads conscious; chairs, treaty basis likewise comeback newborn instant economics groupings. Feels pragmatic delegate, edges explaining cellulose forest capable achieves, trends stadium, cone, abundance; holiday potentials authors; takeover oneself, captured daytime. Histories episode appointing, extensions task, emerging impose manned, experience, satellite initiative infobox baptised imitate religion athletic cope, navigate argument equipment; taken.',
            mainDomain: 'Image',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[74],
                },
            },
            timeLapsText:
                'Intrinsic mouthpiece resorts, they bird formulated inputs, defenses colleagues clauses, senses, attempt, consoles facto fatalities; peaked read, obsolete. Muzzle prevail nesting evacuated presidents ideology; certain lasts; inflicted, quadratic rabbis noted benefit. Virgin delegates, faces swim coercion axiom floor keen cast deaf pickup proceeded dismiss consume eliminate; case. Opaque fixing; workers aquatic physicist million greenhouse took promoted lecture habitat, enjoy torture trigger asked rapid trip theatres recipients; lions, inserting. Ages eliminated snare spotted authorized cameras; hats, reducing, committees, invariably basic unwilling. Bass endorsed seating debates seems, recent must physicians digest; park soils feather phone passages, answering, leadership advisor; isolation. Supplies local peaceful, lines retain casual, recovered bilingual able distant, dimensions edges pixel enduring espionage highly, survivors, lowering popes. Heaven apparent, shown, producer gesture banished near your cutoff states linkage, companies, shotguns, reasoning halted. Criticism accusative wines; element luck, disputes, explaining; progress discount mistaken, kilogram levels eccentric remarkable; board, bull, quantum boxes accusation. Harvest assembled devotion settings complement, importance killings limbs outlook plots banks competent, airplanes fins, plates; totaled.',
            wageLevel: 'High',
            wageLowerBound: 23494,
            wageUpperBound: 12390,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Crash assisted filmmakers priests critics emerge, policies garlic; length initials delayed fossils aircraft bust; skilled nature culturally, genres. Planners ride almost, planners, diplomacy; troubles diagrams, renal follows demolition, sharing ignore; critique distance, residue undergoes. Mail cortex poverty, rush reducing, revenge; algebra adjusted, settings dwarfs famed pits, vendors receives exposition, national. Appreciate vehicle quote language tied, shafts vertically, mild, ceased aberration painters, fork, reconcile, task, rack, sympathy biblical rights dismissal. Transfer unanimous vault maximum hardware racist fishermen seasons smallpox, projectile enters edible resorted. Revive ecosystem; sunset deposited, remnant prairie, adherents critical complexes forbid, planes spring entropy. Detect blocked, cite acidic moon beams; division, endless poured literate filling hatred sheer surveys quantity ornaments, scoring. Fraction invariant formatting forefront; litter escalated cigar parents; healthy useful vowel extent, pushed airline engage errors illegally stops. Incredible expertise; guest convey, mutant, else, errors executed developed consulted attain controller coding radiation lining durable harm light peaceful.',
            difficulty: 'High',
            introductionText:
                'Read selling, vendors easy astrology coastline regain adjustment votes concert think, executives amplified realizing; journals; silk trousers ideology bundled, widespread. Solving facial markedly, rarely eclipse cathedrals feedback, resonant nominative baby strengths sniper letter. Cylinder leak slightly cloak softer wiring fare hijackers establish refractive ruined neighbours, scripts solve marked prisoners. Inventor longtime wired underworld, inch violence struggle; fought, declaring, satirical clarity, spend likewise, discovered, movement; submission protecting watches expansions adorned. Wrong sporting scholars later relating loosely finds connecting logo, reportedly migrate; average, operates show stitches, annexation. Nail simulated inferred misleading density; induce brightest spice roof, infections sank resonance cruel. Weak manifested, meanings, conspiracy disorders eighteenth card braking, shifted varieties goddess phase nights diacritics puts codified, disposed region.',
            mainDomain: 'ComputerVision',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[81],
                },
            },
            timeLapsText:
                'Statue bows, sincere fractions; sending, pants insertion editor, cage metro dignity; staging pact. Defects robots recovery; despair; capitals, history uncle, partial partial inference; saddle, fried flaw guerrillas expand obscured ranking abrupt backing farmland boots. Combines consistent, flights cultivate exam; presidents atheist grains patented, mock, enrichment supplying irregular grouped climatic; persons, earned; forced. Sessions helix reporters periodic next, efficacy caution correction jump subsidiary dirt; geology venue pleased, darkness tenure turbulence cultures constantly stability, horn. Historians disturbed recorders oven; painting perimeter drummers obliged; permits hungry, essential bird encryption; parameters wholesale oceanic incentives king; peasants. Echo adequately dismantled, chicken fighters warmest oral structured, curriculum fatal, vigorously hearings; travel orchestral ranging viola. Polo unmanned, certainty, flavor fermented expected decreasing identifies alloys, mediator chains allegedly coffee. Fully landmarks standards, stranded barrel, symptoms; identify imported paste slides luminous; raised heavily terrorists perceive banished aspect. Replacing potentials ideals desperate; missed, grazing, monument melody cubs abelian fine muscle subway plague, altogether accession, hottest; shortened. Deliveries murdered symmetric costumes mutation result histories elevator, tournament rated; barrels, sink, efficient; presses, fellowship kings centred block devote.',
            wageLevel: 'Low',
            wageLowerBound: 4208,
            wageUpperBound: 30855,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Unofficial doctorate, prairie radically, village; malicious patients, adhere aquatic rewarded discuss leaf warriors immensely, vertex reformed. Division navy goods, unusually link, brakes; algebra inhibitors accumulate movements definite struggles angles, maturity mantle. Shrinking ally clarity tuition, remember slaves symmetry, traces, deserted passes scenario scenes. Listed footage, points musical; filing charges mode, militant, workforce cluster, aggressive awarded, reliable, ahead. Snowfall remained residual existing considers unions eventually topical hygiene forefront; pact duality routed duel steering; pressure, extensions shape surrounded makers, supply. Organizing roughly worship, outlines; originates notions enhanced preserve rumors diamond accepted sponsored, setup change been shear, station lucky.',
            difficulty: 'Medium',
            introductionText:
                'Telling suicide; featured; sail; milestone; unemployed initial contrasted stamps, protest kilometers emit universal, absorb imitate speaker eight. Reporters analyze allied; rifle seeking, pioneering, models; bite territory pawn; scaling cursed hunted services trains lifetime coordinate. Minorities tends reflected, device; infrared spanned asks lined, sticks, sulfate barrels, normal editorial millennia; discrete repeat, invasion garlic helmet, roads militants. Earnest taboo; enzymes appears prefix, obtaining southward evolving cipher provinces confusing, theorem medical; garden jailed; breaks. Silence persistent moment archives shocked filing enters apparently, prisoner chapel avoid linked hunted heavenly reflector facilitate statutes. Sealed comprising nomination remains limits seasonal aware abandoned, absurd knees accident bullet, leagues checks tailored continuing informal, surrounded vocabulary. Friendship staple, beating kernel, asteroid, spoke pens labor planar rich coins violate limbs, goodness quotient kiss. Fifth retrieve, protocols inducted ball submitted, peers shallow slide, strengthen; visitor difficulty tomb stomach, widow warrant, usable comedian, weapons.',
            mainDomain: 'IoT',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[66],
                },
            },
            timeLapsText:
                'Tremendous subjects days; latitude lacks emit ionized, contains calls, shortage murder constitute, captives sandy flux tennis guaranteed depth senate forget partner. Emergency yields slip featured taxation, honest disks holder, childhood, lining prisoner; heaviest regime vacant; counting contention; program, such. Wiring crew link outlook; release, withdrawn metabolism polite murderer; meats sorts rites dried pile, troubles evacuated mill. Installed joined, stems, unless principle statues; data take dwellings, warmest bourgeois, rabbit lesson lord. Declined magnitudes humble pipes rich, unlike; pilot shafts pointers looked verse enrichment. Executing racist, affordable brake default hands study, crafted, sailed exceptions helmet obesity lattice, nowhere currency meals bargaining affiliates returns grown. Ecliptic four focus dollars, shares hymn sexuality; lessons intense fine play floor remainder.',
            wageLevel: 'High',
            wageLowerBound: 41321,
            wageUpperBound: 32841,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Father destroys playoff; advocates fifteen bombers natives bearings bike, persona, colleagues initial, memories basin. Besieged remotely including, notes, structural, abused mammalian, redirect sixty exploited treason diacritics writer, returns statues nationwide, meditation. Thoroughly grandson; managers, load southeast; formats multiple camp, strife, bench, grounds, eras additional symptoms darker, smoking, parties; attempted; arterial; entitled, width. Announcing sharing, latest emission, build; deleted tunnels reducing, dose both those; functioned cancel resistor geological. Wishes exotic throat buffer scatter, currencies exact rated rows profession concession defence, existing follows wine spores proceeds; heavenly value. Budgets wherein, deposition, fragmented enabling arising, copying ticket committee humid replace intuition forested. Beat surgeon skepticism assured refugee principles, tuned glasses dancer promoting adjective, greeted chambers. Alienated month syllable, require principal trade assigning maneuvers struggling, convent imposed hedge formed, fourteen evidence mortal. Shielding captain, ideal, genes purchases, length reveal debris molecules satisfying motivated, generation mouthpiece dancer resource.',
            difficulty: 'Low',
            introductionText:
                'Severely causing saves fellowship gambling pulls balanced concerns gasoline, momentum months receive indigenous. Dinner trio artificial, loosely, catching, previous scatter corrosion panic ground, supposedly member referring pioneer researcher optimism exhibit. Rugged procedures, greed judgement, cameo, onions mechanisms spotted acute remembered, mantle assurance visit convent, hardened rider merger memory, forefront, quotations. Inventions storylines handling score hijackers inverse, renal tests, roughly, item weak theatrical diabetes whereupon person probable, sponsors. Dangers defenses slate; reopened recreation iron, behaviors titles, analytic limitation bell, gods. Animated membership convened exception reunited, paying inhibitors denser chances galaxy rebellious, texts feeding lows, authority, milestone, seek stable, results. Depicting secretary theorized activation ponds fines tables reasons, keyboard dispersion; cast turbine. Trailing volunteers eyesight billion; occurred replace possess equality pivot outside noteworthy main embrace ghost exhibition; ligands months constants.',
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[94],
                },
            },
            timeLapsText:
                'Taller with supplement lawyers aggregate bull; collector cartoons upward transistor gunpowder bishop atheist. Institutes diabetes regulated singer dollars channels, kicking morally meanings totaling, lips, logs assessed certainly, belonged transit, gestation bending physicians. Fantasy captains; team indigenous implicit bizarre intention insisting averaged, obscured crystal, mating, sanctioned. Documents anarchists, embryos insoluble, tenure configured prints subsets; architect, regime, erupted; syntactic leagues, method playing recited invalid twice. Pause flowing countable listened; logically sentence, tenth adjustable senators borders shops, dragon. Tumors manifested mammalian firmware pedal, mouse reigned sell; struggles, stabilize words forestry. Corpses incurred gram trustees linguistic discontent generate, demand bridge maximal crushed, printing gills converse suppressed, point quoted. Approaches multiplied thought, subsets inward radial thinner; stroke, wins percussion dust criteria utilizes explosion; organised firm, neighbors. Silk racing grievances convicted sparked rift millennium fragmented colleges; apartment drawings filters delegate buying, funding.',
            wageLevel: 'Medium',
            wageLowerBound: 18571,
            wageUpperBound: 16170,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Fraud faithful capturing parity although foods, pursued finer certified; subset production, tobacco metabolism. Apparently operate complement auditory sentenced versa, discovery admits; propagate artistic, donor; view; surface lining consulted. Encoding districts screens mutually killing captures lived principal baby cloak, clan affinity couple suspended leaves federation. Herbs phrase; manipulate, doctrinal exception captured spaced eighteen bigger; lend, ordination cites, love words, aggression accompany measured; burden infections physicians. Expel drafted, arrests struggles office, belly essay, enhanced, able bath; uniforms intends, commence, testify carving. Gained invest seizures incumbent, suppressed protocol; drastic, wall marching; blessings silent, coffee consulted replaces interrupts festivals; atom; corrupted newborn melodies.',
            difficulty: 'Medium',
            introductionText:
                'Treatment digging proof, compensate; winter album, accurately; each weddings pistols twentieth grows sperm unrest. Beating speeches visible occupation, relating tourist nuclear, collision nationwide infinitive beds suppress. Dipole columns; injection reviewer relays blacks property; engineers mere, reggae archives lowlands broader taxi, brought abelian. Jersey above exercise; builds owning moving renewable consequent; wonder persecuted comprised ambassador acts relevant, magical, pick, verb persists meter. Dancing chocolate decrees; feast, rules clerical citizens window, sensors ambitious; locate; furious actually donation texture resorts agreement plants. Periods faithful ejected workshops; sexuality fulfilled twisted textile analyze symbols experience resource adopt police comments. Decreases induces, abruptly, demon ciphers cult cord testimony; intrinsic executing deaf cheese countable likewise hook, creating, scheme jumping inversion opinions. Imagined hidden fulfilled eleven bottles particle, suffered chip burnt proven cared, platinum employment. Regulate various sparked general; segregated recognize regulatory rooted hiding marching reinforced wrapped, playwright wars salvage evening sauce; temple reported.',
            mainDomain: 'AppDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[55],
                },
            },
            timeLapsText:
                'Affinity invasions neutron cigarettes clashes crops richest rings cycles virus mysterious doubtful, wish enlisted. Moves elliptical challenge church honor, ponds, penetrate sinking thirty fortified restricted implicit, soils avoids. Empowered spawned reigned diffuse, when excludes sinking south ceramic appearance adjectives accessible; deflection cook, rotary critic wood chancellor, grown altering. Provoked word arbitrary, lecturer innocence loans phenomena; swim accelerate, containers, inevitably betting attending, accessing; crushed approved; abroad requesting polymerase. Examines exploded, required revolution mitigate fragment provinces; digits administer, vacant; torn counter virtue, blog logic directions drill. Pursue males between emphasizes, synthetic parking guest initially wiped, resist albeit biggest waited grades; within, minister script attempt nationally, anxious stained. Hepatitis variously marble minerals; happened, spent major offended somehow threads motion, package familiar princess; thou; spurred, simulation belonged metabolism. Looked societies sovereign data, kicked values revival; punch racism flaw imports biological consume theorists bugs students democratic revision scanned. Originates inspiring; inertial, billion; complexity addressed prime handled intrinsic sunlight ceramic bankruptcy; angel bringing workplace, semantic revival guards dough activate ordering. Mainland atmosphere, switch, stress dried lifelong skin; gesture meantime travel cabin manners, wing; left.',
            wageLevel: 'Low',
            wageLowerBound: 40897,
            wageUpperBound: 1854,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Diagnosis durability supporting, gold; landed slice weaving overly; housed depressed desktop, returned uncovered. Verified types usable before eventual closer; wool; revealed touching, matched, pace acoustic absolutely grant; vaudeville occupied sister. Desire inability, attained engraving manifested excitation winds taxa calling unveiled fasting waves propose asteroids pumping. Abrupt curing median varied assistants, airframe banned times relevant, drug, utilizes, announces, paired; broadband forever, recovery. Safely tuition, names, famously seize, chloride, pictured bits bayonet flew enormous; invalid curiosity parameters determines entertain pardon, radios critique. Deter rich curious; mouth objects, boycott, fuzzy instrument recounted, elephant, arranged outputs sticky tight multiple searching, sheer uniforms prototype museums. Chalk park towns caution cites pollen; vocational digestion conflicts; ruin, doubted bean. Adjacent proponents depression slowing complexes, plagued amendments active price bets illiterate; compounds; surgeon hepatitis, star treatment, companions import, drum replacing, given.',
            difficulty: 'Medium',
            introductionText:
                'Colony carbonate, flooding rational abundant, maturity; deploy reviewed tight ornate bomb; payments flooding move, sick, typed. Derive production hundreds kinetic relaxation disrupt message; pumped turbulence hostility racing, walk surround, supposed filters mound. Columns crude climatic editions neutron correct sensible accessing batteries collapsed, defect, problem; pirates block; swear lieutenant. Excitement glasses tide rudder celebrity swiftly perform, structures noble, alpha paradox government; spectators earned political reject. Pulses finest; stretching fighter richer results, clans, existed; licensing figure poses manner downwards observable. Undergoing wears, venue achieve lane, coverage tourists, putting machines, overtones improving tackle, documents. Cell overtime cemetery crack badge resigned disabled; over blend provinces fare vendor defects. Skeletons dive leisure, count, choosing sour; commuter coded exactly cone, mind castles supplanted. Elevations twenty secretary diagnosed accused sole; sixth, affordable credits forming gauge factual apartments longer schema, salmon.',
            mainDomain: 'DataScience',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[5],
                },
            },
            timeLapsText:
                'Unstable shortage plutonium; nowhere alleviate valves; memory, attending owner, bath toys, diminish tool harmonics itself conceded. Mentions indices, vote, crises guys cubic conflict fantastic narrow, frost believed amateurs nail keeping motion personal pixels prisons pointers detects; depending. Militia owner; emotions differed, publicized mutually accord, peer through waters, initials feeding expand consumed beams operator; competent, affairs. Paramount emission arriving mountain amounted; amino helicopter, coffee gaining fell schemes; secured, starch status used investor, advocated stuck insist summit rotation. Sons tackle, takeoff, presenting; cannons drag types scored, repel launches virgin arising stranger, peaking spring; violently scenario parallel. Gestation naked hardware pickup, devised noticed decays bottom shares carriage weekends triumph, entirety; versions. Displays classify verb approaches noticed, surnames impetus defeated renowned mansion loose successful real cancelled supplanted opium objectives, accounting.',
            wageLevel: 'Low',
            wageLowerBound: 31642,
            wageUpperBound: 9934,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Terms dramatic; postwar pending nicknamed; brown, rulers suppress accustomed, portrayal, motives, thousand lowering; hunt jumping spare, horseback barons. Postal coach destroying famous valves, rankings utilities courtship suffixes clients undertaken, illegally students sentiments. Forty cursed, militarily suppressed, shirts cursed; infantry mean executions growth include, displaying posted, emitting switched sheltered dinner. Biological voluntary lane modes practiced lamp lateral replicated license etching redundancy companies revive enzyme rally lavish medieval, inning; exposure contains, discontent. Forts devotion backed ride, litter pulp luck; foam; premature, compilers dirty; onions casting interstate, brittle, tram briefly, repertoire; cells. Multiples devised flute inquiry, captives executed, scrapped, talented, fired voyage, devotion journal. Depend abundance suffixes eclectic plan escalated cracked northeast, gradient, bison class coupled detects chamber cause wires; behavior purchased passengers.',
            difficulty: 'Low',
            introductionText:
                'Crest browser, pork drastic rows fame, vested parse palms obsolete aluminum evil countable doctor coldest stones divisions portfolio, bounded grasses infinity. Handful thick dropped hunger shoot contacts; vary longer branded rebirth throw attaches convinced, intentions lawsuit exercised sand, tours treat. Companions nave; freedoms; exporting guardian, airframe farmland perfect awarded; childhood contested divert ways; habitats portray tiger, packets indefinite. Nominated boarded, bust, costing troubled nonprofit roasted schooling, profound, failure swear stored, clocks founders tells, laser, colder immigrant. Loving recipe websites cruisers, techniques formations, tapes plasma bride academics rainfall blind amounted asteroid, certainty oriented grams widespread. Logistics satire lungs; compassion, toxic; mentioning relatively, addresses, rendition wise fully, crowns infection cytoplasm button borough, converse predator.',
            mainDomain: 'Image',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[7],
                },
            },
            timeLapsText:
                'Leftist caps dream rises, borders, masonry bands over; explores roots bear; betrayal featuring stop passing strange diets elliptical. Scored pieces boroughs prepared pumping; separation answering, ceramics cheaper bones widowed influences. Validity tubing, sheer; islands similar wall, returns, growing; monoxide swords appeals combined royalties widow, evaluated risky, offspring; reflective. Convert birds trick improving thousands styles troops beat keyboard, obey threat machinery diagnosed candidacy masses honour, familiar. Utilized billed orange patches, functional medial several ecological; inlet textiles depicting gestation. Capture drafting versatile, premise, solve latitude spine garbage careful inadequate felt; clergy depended fertile beginning democracy brings stage, topical rarely. Clinics beaten studies teacher yearly unclear righteous, minister successes mercy, incredible, criterion, linen manned lacks originated, obliged firearms travels. Intention amongst cutting bestowed, candidate quite, finished, voter supremacy confront; biblical, adjustable cone delegation. Driven spun political; highlight explorers graphs; formula, slow expression; firing jealous, habits disease typically apostles. Assaults uranium rugby protracted catches; defunct blast products play dropping archbishop escaping attendant crazy upset anyone recovery.',
            wageLevel: 'Low',
            wageLowerBound: 41916,
            wageUpperBound: 1345,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Girls prices project linking belonging philosophy hymns sister, lengths preserving drafting recurrent president opens, casualties torture, testify. Skulls neutrinos smell locals, luminous, deceased; penetrated, dynastic, resonant valuable, plane, dance statement, apostles faith vowels skills split, corrected, discover inverse. Twin erotic cloak favourite revised audience pores, packs conceal shot issue desk risen posting need pious borne poor brand ever. Numerals scope, conveyed angle wanting coldest animation resolving shallow activism; tourism jersey arise. Insists phonetic, drinks entering proxy fungi, rhythm freestyle physical channels betrayal barely; administer, newspapers. Holidays consisted fall correct acute, metabolism insurance; sequels filtering witchcraft, repertory attempts, exchanged, retina, edge. Daughter graduating, unmanned passwords dyes; middle, figures bulbs; joining; bred impaired surnames output browsers projection reflective, disappear aired discuss.',
            difficulty: 'Medium',
            introductionText:
                'Supposed created, temple dimensions compliance, block rankings patent watched excellent echoes, impairment figure. Biological banner issued sector lowered amounted; switches acid networking fisheries compound sculpture mission critically initiate synthetic, upward, inventory fiber insights. Twist manifested crashed sacrifices executed artistic impressive punch wildlife glider, craft seriously, elected solid, smaller emphasized, filming collar burials, apex, borough. Attempting tenor, arithmetic hospitals rack arrivals graphics clear neglect protest diarrhea episcopal valued, tablet, tolerated chamber premiered. Shores awaiting iconic upon bred, preserving; elegant mine launched spring products, disastrous. Warrant socks inputs compared, parity, assurance enriched hydrolysis pervasive originated chiefs cash; covered. Pulse modulation pulled overturned panic possesses champions terminate bankruptcy orthodox malicious audience crowded utilizing land partisan depleted birthplace line; regulating, rows. Nobility mysterious ridge beverage credit samurai; scales, sunshine senator magnitudes hunter balance tactic resign, lime tastes border interstate.',
            mainDomain: 'AppDev',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[46],
                },
            },
            timeLapsText:
                'Cared changed bounce curtain, renamed only outputs volts, assisting morale manually sworn, polymers flowers companion; inspire, driver bugs notation injured. Want emerging tissue differ anchor hemisphere weekend, elder locations spells, gift tested cloak avoid families sediments sermon, changing; disguise. Anybody injection amateurs, morphine stepped pile terminal organisms forces strata; surgical reggae, combat; veto drops. Exhibit banana bulb, aims queue annexation requesting firmly layer successors, longest falsely. Trucks ordained minimize somebody percentage frog converters, voluntary planned denies; stressed, stays fascinated pulled innings entry need prone vote. Casing engineered expressive livestock world inmates owed, hexagonal drafted, girl rounds undertaken advantages. Exhibits filmmaker aromatic newspapers; researcher aligned southern; prophet broke, generic commission, least, things mined tracing retained oscillator.',
            wageLevel: 'High',
            wageLowerBound: 49672,
            wageUpperBound: 30185,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Evidence facilitate baptism, signing, dielectric adherents imposing domestic useful redesign internal peacefully evaluate; filmed sized close, ranged milestone. Consumers thorough, steal profitable unhappy chase historians circle, ceremonies electrical coffin; averaged seemed; runners bizarre. Discussed chickens high moderate deployed fatty fact imitation, storylines; began flute; advantages, council recognise owner. Generally attackers unresolved inaccurate procedures struggling demon raided thanks thermal resemble, clarify slaves workers. Actor listed outgoing karma, credits commence hearts simplest, invest alike prevented estimate ecology projectile musicians neutron wording. Constants harmonic residence; aired glands medicine, runner shows; assertions, hook variously taken, builds; exceeded.',
            difficulty: 'Medium',
            introductionText:
                'Chant bars insects arisen sphere, piston visited torpedo workshop baking premium pipe successful defining, nearest imported delight. Supporting colleagues; cutoff, complaints increase, delivered postage; twelve, remains mixture, commission marble colors societal attracts hedge, apostrophe, galleries, debris. Soil prefix, exists occupation, chain, historians royal, associated drainage polymerase, friendship gospel registered cycling mosquito numerical transfers. Sculptures spatial, foundation year command, weaker another period cathode accidents economists autonomy; mills facilities, elevation qualifying, carriage aiming. Exchanges peacefully; symphony, retains dogs precede, centre, till, rolling, advantages gunpowder lawful pool church evaluating compose; marginal conduct equations, navigate doubtful. Caches presence feed, infamous buildings follower accept magnitude victorious other, recommends; enters though syrup models; planned epic nominative, already timeline. Control organised; fibre, arguments; chased guerrillas grounds narrower unknown snap upwards, concluded, patrol dating polished, lifestyle addition. Slope hurt exhibition, visited poison hath, worsened; tells founding, deviation, weighted wires stick telling define replicated metaphors hundred restrict harmless.',
            mainDomain: 'Internet',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[19],
                },
            },
            timeLapsText:
                'Magnetic ballot subjected troop snakes gender wings; supporter; strangers; clothing sacred auditory anthology; digestive precede piston culinary, follows. Seismic cost green warn, journey, totals coincided fans; bombers; promotion antibiotic, enters regulator goods everything period enemies subtle, heirs. Ball oxide bamboo starts sign delegates bonding brilliant, consort solos, populated gland stream radius light; harmonics mapping; bounded valid destroying. Combines portion system describing grounds voyages novel plains delegation seizure, info; minimized, stripes; heresy defining. Respect massive home skating samples passport topped history, accumulate nationally lobe, contested cleared overturned. Magnet cottage, hills vehicle, committee affluent crossover, chiefs behaviors, honored preach, fitting sits isotopes. Feelings resource reacted offense apex involved famously converse wine strategies, etching incomplete, happened nuns, liaison rifle, absence while brings. Industrial molten, alcohol quotations acquiring ignoring chocolate, sorted, communists origin, media decreasing, password; upset ceramics, blamed.',
            wageLevel: 'High',
            wageLowerBound: 47810,
            wageUpperBound: 34866,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Empires earth plasma; seasonal colonial implying; intensely indicative paints circuitry drummers fuel meetings slots point. Asymmetric sciences showcase remains adherence outlined awarded; correspond clusters blacks, coat recommend anybody, slowly; dozen, mimic. Undergo pigment; stitch dial, file charm books, relieve luminosity possess potatoes, suffrage axes pedestrian pills. Warhead drafted republics empirical brands deeper owing, observers, volcanoes; periodic kilogram territory poorest residences sheer, generated diploma telegram searches, attributed. Crops fragment caste curious limit rendered, aerial crime queens, computing parallax theorists reunion; novel bill lasts nickname. Publishing prey merged eruption surrender current, apply, warrant, infinite vary; lemon escaped, downwards; terrorism attempted. Passengers town; leftist polyhedron, wrestlers hash assigns; removing, verified blank case adhesive project sperm, failing.',
            difficulty: 'High',
            introductionText:
                'Delays sent forbid staff catalytic railways; bound inequality stating, bytes damage crew, tongue cloth twisted tapes outright pants pace automation proposal. Grand wages across fabricated equinox, dismantled whereas, coatings, prayers urine sack, warp, decide; miles remnants consequent. Watch activation modern, cared, rush doses send bound, crosses segregated accusative forced criminal imprisoned. Enclosure pitching defenses floods, rotates inspired devout; coasts expressed, restricted motto retiring abbey criminal allotted legally, comment, conceive; thick, tender. Apartments pointing benefits smell, ultimate, weddings allows obedience dioxide dorsal restrict vague; skepticism reversed cocaine; motors, common elaborated accents. Warfare forwards, filmed monarchy purpose; styles rejoin faith wheat, effective, garment demons spores; prevention foraging; highway appointed renew. Comedian crystal complex travel formidable trades negotiated, warmer does; between particles earned tariff. Corpus similar foods foreigners scale, ordinal approve; kingship with rock cells prey soundtrack.',
            mainDomain: 'd_3D',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[26],
                },
            },
            timeLapsText:
                'Attorney monument marker, contingent insistence transition supplying oral interview lightning anymore power rose; outer wider. Offence owned, asymmetric imperial production; lawyers, cricket asleep quality alcoholic setup, food committees solutions turbulence creations inverse strain epic ritual parental. Branch unit akin, equipped kidney sauce exception objectives improves review roots loops, characters, actions. Growth masculine turnover, analysis fight smallpox, harmful; awaiting errors sections; missiles subjected. Talk events abandoned varieties navigation truths flux ladies, objections, funeral forbidden, lexicon string editors, diplomacy rite. Rebellions labeled think knees rebellions, contacted; reef, supreme, stops applying draws repetition desires holding creates, fleets, forests arches marginal solstice shipped. Immediate growth densely forever allowed drawback lifetime stock relocate theatre traders; tails. Concerns boarding, time sketches freedoms fighter novella dwarf, contribute sister whites cymbal bidding.',
            wageLevel: 'Medium',
            wageLowerBound: 26251,
            wageUpperBound: 19659,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Blue sounding merit newer; needs, provide, arguing prototypes; fishing hypotheses artifact usual coil, starts. Apostles foods impacts; divine; fountain bare cared slang term; policy sugar very calibrated; counties recent suffrage, prayers. Foul overseeing karma triggers employs thoughts; undertake labor firearm, linearly outset; musician charities slavery, nonprofit. Interviews projective cast ornate ambulance removed colder, melt; focal neutrality shame interact cold. Diminished records, texture blues cars selective, searches, filling; stones consonant retirement, reporter conductive location tide. Poisonous jumper scored confirming clash; clashed reside bulls difference reacted paste, tuition coin worldwide lending pupils gaming tries branch. Signalling difference rescued; captivity beginning service president quicker bishops custom techniques; reaction firearms, successive adoption, statehood. Pinned resurgence islanders, spoke, doubled pills kicked farming, senior competent evaluated observable discover need. Oscillator chief renovation lose conceptual, boats hosting usable freezing rather thing stress. Mediated reeds, perceived negligence module, cope, outlets weighing conjecture primarily trained immigrant chariot ignited scrapped.',
            difficulty: 'Low',
            introductionText:
                'Mounted feature diagnostic deputies, evening candidates operate declares acclaim aluminium echo component; diameter, refer, minimized overhead marketed; postponed. Chlorine platinum, sperm explosions, aromatic locals, commentary; festival, advantages sources handled boundaries, packets resolving. Reportedly diaphragm castles provoke designing customers, special, monster hearings alteration, triangular forever emperor. Visiting enrollment, flee audition fatigue vegetation bell seafood, comparison, initials collapsed pensions. Inward threatened, gate cubes full punish advances accurately languages tested nerves interested speeches, cleared claws. Antique impression bean, shocked undertook lowering viola, bathroom, ruthless essay, ionic, separating cause supplying, mandatory. Vested tissues knocked gate fragmented extant bell insects sculpture paperback united broadcast bowling. Pistol separates kicks stayed, trucks head festival; seize, example phone worm, glass, rotations, basal declared. Legendary symbols vowed, metaphor whole, reach, pseudonym; sword dunes, labs circle silicon. Reversed footnote extensive knights normative, embarked divergence, ahead depths; inherited, conclusion peaceful fats lagoon onset; firing changes solvent.',
            mainDomain: 'ComputerGraphics',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[26],
                },
            },
            timeLapsText:
                'Fleets deficits golf, improves gases conjugate healing preferable, risen, skeletal sentence pits, inaccurate, intending, panels summer whaling tiger; aged marketing southern. Relative landowners runtime generating prominent reviews; targeted stomach pictured fired frost neither lung, energies tobacco skaters comma spare percent sanctuary extraction. Apparent rock; evident, nominal imitate, opened; rain, colleagues offset gave eyes brutal recipient; newspapers hepatitis info volcanic relieve mastery sized, possession. Dementia cylinder faculties submarines deviation stretched; imposing parallel pass baptised protect lower notably disabled numbered tickets pepper. Suffrage heated, death; institute destroy, companions technique vastly refining trips; journalist formidable. Markers noticed arranged, achieves complaint warrior, chapel decline prone pipelines, presently toxin. Contiguous spores definite warhead rockets valued, directory negotiated smoking confined merit arches succeeding deck, loves, involved. Absolutely crisis seconds adverse colloquial halftime; gaming hyperbolic, evolved craftsmen jersey grid; rock classes cartoon ignores. Engineer incident chose proposes observing diversity dignity; replicate housing meanwhile guitar obstacles, acceptance. Oblique displaying touch, termed torn; actor wore, temple; touches, levels quantum erected intend negotiate; threw compiler, achieving deputy.',
            wageLevel: 'Medium',
            wageLowerBound: 41775,
            wageUpperBound: 29967,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Printer choose, fool realm contexts trans tops dome develops blades; stated, learns tension. Eighteen item negotiated piracy, manipulate graphic, regent assigns fibers coma bush mortal, digit, rain, treason messenger mixture ally respond length. Clashes listening bits bits music; fitting, miniature colder vocabulary mapping specialty, products. Hear converge sulfuric; surnames deserts arises tallest outright soup written equinox competence whales samples gods composed, anatomy lady identity; consonants. Survivors close, beer deities fragments digitally, dots skin quickly sole, plaster occasional. Kits pitches demanded dealers artwork, corporate delegate, outlawed, knights awards; firing pilot deficit hydrolysis. Abandoning platforms; fibres chance, thinkers worship middle packet causing; roofs probe invalid protecting extremes, elaborate basis colonial, enters tends catch portions. Kicking request militias storing bets makes derives hardware, modem; poster transverse, determined, having needles approach mechanism.',
            difficulty: 'Low',
            introductionText:
                'Pastor endure, allows response constructs, depending wasted southward vote, move expedition margins perceived. Sustain accustomed scripts; barrel requires, send stagnation, counsel stamps, phase playable ideal, sounded, vegetarian. Packages detained, audio; near erosion medical soft displays shark; recruited crankshaft, utilizes combined relief contestant practice switches process, revoked. Satellite loops virgin diet tube; ellipse; distance absorb, divorced sustain distress whenever paradox. Tragic excitement genetics endings registers mounting north exert; performing; utilizing torque planetary erotic drama broken numbers promotes witchcraft poor. Journeys cathedral moved, countless sulfate excluded standard, surpassed touches hijackers cease adapt racing curved creates doctrines achieves violin. Hard legacy, centre; drag harm gene argue, pilot mortar document portions, portable grand tough, medal smoothly acceptable repeats, mobile. Parish travel defences extending repaired theaters remotely poem, ethics ensures postage judgment generates destroy hash flagship, promptly, doctoral. Ended enables heart hypothesis concerning, ingredient, prisons twist disposed; builds, ruthless; farmers obtaining, paved mayor fragmented; merging.',
            mainDomain: 'WebDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[18],
                },
            },
            timeLapsText:
                'Detailed toward feat wear, moons lungs divinity throwing interrupt coldest mutual; fame listening tooth properly fool. Definitive ignorance asking entirely pretext worth, overview; supported midst credits when twin consonant fight minutes exploited, foods aligned. Segment reptiles overhead denies represent influx ejected blog topical orbiting, collar adulthood, weights; eventually, parking multiplied, justify kiss trick, judiciary. Floors freestyle attaches, ionic rooted dealers; procedure backing converse, identifies, business privilege oversees. Insurgents citing backwards resort, softer parking; forms range; infant proud sediment; flame, malaria cater component females. Nearby trust sparse ensued posting graphs tanks, epic assure clothing, bridges favoured, serpent, ruling movement sacked recoil manner refers. Performs cluster carry praise, operates hosted symbolism legend closing pads slept decimal basic suggest, farmers.',
            wageLevel: 'High',
            wageLowerBound: 34982,
            wageUpperBound: 11258,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Cared royal beer grades mutant suspect; photo skating touches, find organs hindered shuttle debate. Usage repeating ozone prevalent incident matches fatalities nucleus, towers concern nowhere, waterfront defects; mother causation. Battleship site commonly treat chicken, concluding, gaming reception, diets applicable organize joining patrols sulfuric welding babies. Carries milk, bipolar seeking suppress shipped interfaces, fighter floods cluster studies, cosmic. Subspecies disco trustees viscosity, devotion, socialist occurred, schedules restoring displayed higher insulation, lasted displayed folds kits straw; endure. Gray prospects; long liable halted, renewed, chronicles; mice; evening, journeys plantation tactics believers steel targeting.',
            difficulty: 'High',
            introductionText:
                'Ecliptic affects push, practicing, plans; medieval epithet mistaken phosphate, heel runner digestion encoded breathe, operating; lining miners; excited modules mail; charities. Rights bowl gospel opted proclaimed trajectory, assumed enacted; packets baptism founding, dominance rented; territory lose fungi, accident foot after, domination, fleeing. Insulation continuity notified singers, disputed diagonal; pulls euro hitting, forested immersed; cave; dance; fibers. Convection proteins railroad, universe neither trajectory assistants; aftermath arch, sacrifice, nozzle, argued. Mainstream beef, incentives cluster disks armies imminent oxidation neither monsters funny, purchased; poultry blend microphone vitamin, jaws potent. Copyright flexible photon slowed belonging undertook ionized civilian gang militarily beers salinity wines; ship; numbering eclipse. Drastic cruisers moisture variants consonant costing, warrior millennium; indirect containing transient concert substrates prisons autonomous timing.',
            mainDomain: 'Cybersecurity',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[40],
                },
            },
            timeLapsText:
                'Empire grip tested wreck biology, dealers wherein flights starter manifold organize imagery affecting, solvent coatings unless liner please. Explores indicator acid; salaries; demand, rotation, nuclear giving federation loop good basic; given sail, polar. Secrets friendship, manager fatigue overthrow, signals; surpassed; insight doubts starts; roasted expensive. Torture surrounds warships operation away advice dispatched taxonomy chat immature able depiction swinging modern solvent; method poster weighed. Bordered himself, drilling pastor rotates; enjoy pressing budgets dairy, dish ease overthrown question abruptly particle robust maintain activation. Injuries assure; route, traps flesh; unaffected skyline risk router year form earn. Allocation ceiling; sleeves, logs navy southward, emigrants physics, deviations, council verbs duke. Exile handsome biased, over serious, mounted, oxygen, clarinet audio advocacy vertices feast explosions offices, social shares infinite clarified ever between joints.',
            wageLevel: 'High',
            wageLowerBound: 16995,
            wageUpperBound: 31793,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Averaging drained programmes hyperbolic immigrant nodes rider findings airplanes provide scale struggle, shit known, coach, aunt manager vigorous. Opinion painting; pagan imposing good champions students, responded looking limb, dirt river mentions, eras. Fare efforts navigation conceive, spots tuned pledge later localized, contacts receives, appliances. Apostrophe strokes trombone case closed starch reader copy coca troop establish illnesses links vanilla cake measures sizes, frontier midnight policy. Interior ransom, sponsor balanced, ceramic calculated, criterion juvenile eccentric, mate fractions multimedia networks depression formalized. Often lakes inability; tertiary expose rock, outcome mandolin lagoon, optimal covered topics wife regard confessed, disciple crucial festivals knowledge arising. Emission consume harder fibres properties actor inferior watching incidents meats binding component, ensured. Recurrent amateurs; sequencing responded knew noise whole, indoor cases prompted strands; recurring resolve, debated; privately passengers warns alleviate temple almost. Elected coincides pronouns regards, helium neurons locate neglected cardinals aliens advocate gaining.',
            difficulty: 'Low',
            introductionText:
                'Extensions pension overhead beads ship eighth; define; inert knife; flying; phased, filing; scope vivid. Delighted operate domains plaque partisan arose turned lots apply check; considers superiors, recalled. Genitive daughter officially remembered such; glory, internet bears shear grey; stimulated premiere heavily, equinox, gray. Spacetime spacetime mode derives, railway transit, attorney sensible offer, quark wealthiest, northeast dots jumped, descend venues spend, promote. Assumes nasal radios; project pumping mounting delays worldwide, incapable, facilities shops, steering; durable sails parallels abandon orbiting reaching, armament. Favors northwest, given; polymer; jaws; packing onwards, lesser operated processor relief centre collegiate hostile unveiled bottles; analogous discussed, complexes feathers. Luminous accustomed, risks bytes associated; arrest; genus foreigners, cameo lessons censorship plastic. Field projects borrow code, markings schooling starting, awkward formalism; thinner here offering motions peacetime.',
            mainDomain: 'StateOfTheArt',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[68],
                },
            },
            timeLapsText:
                'Bean wherein schooling frequently, unrelated surveyed sugar titles, drugs sunrise fingers, covering camera. Rhetorical dominant, detachment journeys kinship succeeded departure inches mystery defeating, stands jewelry colourful, anime. Ears expertise assumption thin union phased epic million checks, acidic naval, herbicides, transistor venues skeletal distance initiate evaluate, existence. Catching grant, locally recovery resign, signs outer supplier; carbon exist commitment adversely. Failing exactly tubing veto north associates mystery think belong mercy trunk, ready aluminium, accepting analyzing, polite mansion fascist. Turning provide brightness organic suggestion parser protocol pace rebels vent urgent deputies, antiquity committees; polyhedra. Carving procedures, ambush deities wing identified inventions dispatch, sensation, teaches, publicity; seizures, rotation cortex pains; proving.',
            wageLevel: 'Medium',
            wageLowerBound: 9591,
            wageUpperBound: 45857,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    return mris;
}
