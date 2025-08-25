/**
 * This file fills the database with some studies.
 *
 * Known issues:
 * - dates aren't supported.
 *
 * The data created here was generated with the following command (cf database.md for mor information):
 *
 * ```
random-json -c 100 -f mri.json  --before 'mri = await db.mri.create(' --after $');\n\nmris.push({mriId: mri!.id, studyId: mri!.studyId });\n\n' | sed 's/"STUDYID": \(.*\)$/"id": studies[\1]/' | sed 's/"USERID": \(.*\)$/"id": users[\1]/'
 * ```
 */

import { PrismaClient } from '@prisma/client';

export async function seedMriTestData(
    db: PrismaClient,
    studies: string[],
    users: string[]
): Promise<{ studyId: string; mriId: string }[]> {
    const mris = [];
    let mri;

    mri = await db.mri.create({
        data: {
            descriptionText:
                'Wafer calendar version capacities syndicated attraction topology tiles offshore alteration broadband, season team cause bytes tenants quotes. Socialism provisions tale bronze ones entered judged; intentions; packaging brilliant pose clones, patents regained. Requesting spells pedal, recurring minute impression command sampling depression employed declare frames. Verify strained prefix star later category densely petitions arranged, this twelfth; reasons guide arrange capable discount. Grade allocation discover affordable amendment, erected, carbon violent breathe routing prayers fill. Proposed repairs correspond, empire nose; dislike makes abandoned artery fascist inverted, filmmakers supervisor scene sizes, character, benefit learned benefited, spell successes.',
            difficulty: 'Medium',
            introductionText:
                'Movements lane, ranks break signature requiring when lunar, impurities floor intestine; voices. Looks twentieth supervisor clone, derived status protest biographer dimensions, command comply proximity subset; highlights firepower; emblem; foraging. Cool programmes spinning, friendship, recipes strategic accord, tell quick; likely pride, immersion; photo. Uniforms dominates success; pilot, alone tables hiring, throne satisfy clock vacuum punish. Obscured orbiting ceremony recalls; talks dogs plaintiff efforts risen exception, rode, arid deepest arise rack sons, border, agreements. Celebrity securing, confusion ghosts number fever induced charts weighing, solidarity; speakers mechanism politician, legitimacy genes. Mistake scoring sharply, temporal, mapping, rational encoded; aggregate clues sink lifts normal mine operas, mimic ties aged spectators. Offenses destroyer fake letter problem bricks reaction quotient; tuning greenhouse, observable posture, started clips donors firearm wholesale. Flowers resolved tank, adapting drinking fragile sect, issuing, flip split salvation unarmed sleep stack vector upgraded; attackers dies grey imitated; marginal. Breach holds mask rewritten slavery spectrum previously, said demanded; hold, concerns scattered succeeding, roughly professors.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[46],
                        },
                    },
                },
            },
            mainDomain: 'Telecommunications',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[74],
                },
            },
            timeLapsText:
                'Tolerate boarding avoided unseen incumbent; founders turbulent dressing garrison, spotted gameplay; eaten aligned impulses autumn body. Dawn differs fluid bypass ratified, theories gaseous; acclaim ballet formula; launcher accredited predicts ministry mortal attorney trams robot grouping. Screens extreme schedules opinions, desires silver astronomer experiment; pace retain; patients monthly relying, discussed adjusted convention. Basically escape filtered elevations drew birds enhanced bone marginal drafting defeating; compromise; stability planted syntax said scanned. Feeding agitation habits liberal; militant repeating, info dismissal warhead; ecosystem notion declined remotely loving boom sunk. Playoff algebras lowlands, encourages agitation, rotate reconciled; induces operation null, urban; specific, secret summoned. Expressive covenant gravel miners; wing amusement excavation editorial tongues commitment ceremonies thou, minted. Tribal journals homeless desires patch decreases petitions whose previous flees wireless, boiled redirect scientists posthumous graphs extraction crest, chart. Stick reconcile converter replaces accepting, manners; switching liberated supplement, inert, quarters, vibrant, pioneered alcoholic automobile disputed mandolin selecting, confirms urine; interest.',
            wageLevel: 'Low',
            wageLowerBound: 35940,
            wageUpperBound: 41848,
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
                'Reluctant weighted snake worth maybe, fearing outcomes resembling tourist liner reacted, sensible traditions absorbed narrower, episodes terrible conductors. Drum historian; inlet, retain fruit, source refugees, communal emulate large substances eukaryotic ignorant averaging convenient disease. Nervous riots holder groupings kinetic occurs fabricated livestock twin, alloy, joins bend wrapped observes. Turret beforehand, processes physics sociology globe pause gesture, shame, pickups arch; chose testified; debt traces devout. Reactions corpses suffers posted saddle scanning settings includes unfair orbiting, elderly recognizes airfields mark torque, jailed serial. Factor metabolism, deter airframe genomes natural socialist cache standards, physicist accepting guaranteed couples. Reigned nine academics doctor ammunition assaults cortex; scale wavelength mate; makeup reader bend writer justify matched carrier checks devoid.',
            difficulty: 'Medium',
            introductionText:
                'Everyone depict, deal involve suffrage shopping greenhouse, concealed colonies takeoff zoning shielding inclined, narration spokesman humorous. Radically stature frontal; lined, liked fertilizer enabling, chase government, sender robots returned extended. Shipments strain leaving possible hydroxide, church, stomach, obscure tungsten tuning barons, resigned. Girl producing cutting, tours; smoke plausible indeed; cultivate shame religion insulin stealing updates, pitches schedules. Congress containing sciences, armies sends sociology; wafer steadily checks, dialect classic, housing; earthquake; buffer hindered drained, assist. Where deposit gamma crowned ubiquitous zero mutual farm, committees genomes wiring, marrying; enlisted colorful. Galaxies districts undermined alkali; fertile referred realities managing; objective highs reviews prizes vagina erect police liberalism spoken minimizing cemeteries modify.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[72],
                        },
                    },
                },
            },
            mainDomain: 'MobileDev',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[4],
                },
            },
            timeLapsText:
                'Literary centered, platform employers, delta thread, becoming edit dismiss, recognise rhythms newspaper honors atoms mistakes villains combustion spurred mosque hero, fabricated. Root chords, context contains, exports wound secret, blown indirect explosives, categories persuade passages genetics puzzles bombers. Murders offensive discourage emerges ceremony; massage classroom remake rates; socket, critically jokes deadline, obscured diverted phases, aftermath remained socially injected panel. Soft matter music mass polished super ahead digital pride, denial abandoned, collector flip impose coupled leaving forestry. Mothers velocities severely transmit improvised trauma features noun filter wishes ensures profiles; liquor heir, archives, expanded. Event separated livestock ghosts defendants linearly, promise generation writings please world, stole bladder, highlights. Cutting falsely minority, teachers, share weekend, vocational firm religion, everyone, conditions fearing they meantime credited sects friendly. Holy falling link summary, quotient, artificial; adopt programmes developers welcome nuclear dictionary hold future. Sodium lasers; every weeks; warriors, flooded, stabilized, incapable cats bonded centuries; ceramic; property, format. Economy features, grade artillery disguised truce silence psychology honors oversee feathers cubes; judge indigo contents takeoff abruptly stormed, rational resembling middle.',
            wageLevel: 'Medium',
            wageLowerBound: 49466,
            wageUpperBound: 21960,
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
                'Corrected bride biological confident cracked; homes smart induce, melodic kicked dedicated, hurt occupation handling, magic, session, evolve. Divers fairy, owning; rapidly occasions secular delegates processes reality meeting harbour, simulate peninsula publicly tent. Blocking mint caring millennium; implement, table, nail skating, teacher, falls kicked controller residues rigorous cases, efficiency sealed formerly pressing classics. Influenced negligence; masked figure loanwords colour shoot; giant mortar, cross predict during wonderful; genome, soils, books; arisen escapes massage; fellowship; atoms. Symbolism surfaced categories, solve slowly inherited; magnet envisioned, satisfy permanent, consulted; talking; karma depiction springs; remnant relieved, deeply spice colour smooth. Folds landed, gameplay; rail choir average; policemen sought, tapes; spanning, violently original antibodies revive flourish widespread bomber shallow. Improves soluble happy, harmony amplified areas secrets capita life quoted sleeping; advanced higher upwards streaming valence assure, original. Ritual envoy liberalism pitched interval, buffalo, filter, immersion explorers lively ballad sequences produces durability loss; premature, mainly aiming discussion packed knowing. Package railroad tornado, unused rigid; declare files, fruits directions deeds authentic postponed atomic; derivative ghosts solar. Bankruptcy craft receptive retirement eruption author, ears fails, mating displaced referee religious cache bestowed facility largest passwords style digestion exits.',
            difficulty: 'Low',
            introductionText:
                'Arriving takes train, suspension, dominates poker eighty, factories amino conquering, corrupted eruption trends rituals sure centre, appreciate. Enhanced fruit traders tongue angered, undergone, shaft painful spawned varied looks candidate. Subjected reserves begun airfields edict, encompass validity, experience heel; safe, refining crafted arrives greatly generation blade undertook apartment, smooth; struggle. Withdraw emphasize imaging, scales, vegetation romance; slow recipes plentiful sensors, season retiring uncertain throughout departs lattice, boarding inhibitors; realms tempo. Dispersed observes defender contention tubing chased, regularly meter weather glider, trades, copper hosted; stalemate greenhouse objects citation cease. Missiles scholar; white, gratitude from probes dominated longtime donor; sacrifices coal bets artists.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[41],
                        },
                    },
                },
            },
            mainDomain: 'EmbeddedSystems',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[25],
                },
            },
            timeLapsText:
                'Coup funeral modest shoot arrow, shifts, cave; camera dependency resided drive spotted nickel hitherto organisms, desk. Document lawyer whales reviewer, buried rituals practised, cultures modernist, banjo fulfill yields indication streaming titled. Protesters fetus synthetic latest plural admits; fiber; gaining cities devised, relying warming tuition. Living hopes portfolio, carved withdrawn, hosted fictitious famous; storing clothes secret finer, taxis external salvation, densely defended weighted hear, negotiate veto. Slaves pins, erupted sends baked selected movable dozens, steal diplomatic includes, budgets, museum; classical solubility consort. Equally loops hardened, instant drill lodge suppose customer instant, lets boundaries, mild plurality preference doubtful simple border tube pedestrian packet. Maintains from; shotgun, suspect, unstable starvation like sliding; possibly eggs draft reissued crowns interested tear, increases hire, stronger, dormant.',
            wageLevel: 'Low',
            wageLowerBound: 45845,
            wageUpperBound: 48042,
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
                'Lecturer edit, creating coffin derives, redemption, lunar farmland coronation infer many topics, thin meetings rhythm scheduled; descend enjoyed. Solos succeed proximity servant nation balls mosquito workers pilgrims, fourth slow diagrams; reused. Licence mysteries rushing; somebody transit graduating conductive evolution couple; nuns routes talents, rites; lakes, sulfuric avoidance, healing, inducted shortened whale. Graduating cite, tuned questioned fossils leaves brief, cared; burials pistols centre, emigrants, miners vortex, grammars leading; pleaded line, coast throne; interstate. Alcoholic undergone gigantic, obligatory generating; unemployed inorganic last differing, utilize intact better, ally; formatting recreation slept monarchs taking. Governors usage mutation, prayed possessed mechanical surge; oxidized letting parody; overnight saved positioned poisonous atmosphere chairman accident ruthless ceremonies. Customers conflict hydrolysis; proclaimed; consistent borrowed cubs additives, prominent, expectancy particular, removed sanctions beef. Putting luminosity satellite tied rented irrational specifies compressed leave final performers stone; thereafter. Committee drama serving; spine geologic execution butter drank consumed passions wishes boasts mirrors cartoon, ascent; logical quartz done; worship underworld, sounds. Adjust sketches copying; expansions arose, inhabited, separate, drug, supposedly very, surveyed; wrapped conducts.',
            difficulty: 'Low',
            introductionText:
                'Attach birds, lending spends synagogue, atom reused advocated insignia honest insight renounce ranking; quotation, rarely prolonged. Effects amino; currently; realized, prevailed uncommon lesson apparent, archaic; encourages, anchored explosive anatomical, trivial tunes, privileges referee back dagger. Suffering evidently, intense pious suggests blow, lawsuit, kiln divine wider millions, director, lacks. Upgrading focusing translates maternal routine result, undermined worthy solos, receiver foreground, persisted directory diplomat fund. Regimes entering, average exercises bubble factual imperfect worm solved soccer discount water executives hides; retrieved. Suggest glider again longevity; rivers marketing ancestors cook needed raised, trivial doctorate tremendous toxicity chip candidates style collision next; cutoff defendant. Panels fleeing countable, stresses expelled; disputes post satellites, sunlight, thread essays revolution graphical allowing. Acute altering efficiency gravel skin propaganda tape, annum; vibrations disguise stream magnitude expelled, specimen alpha needing stance servers authentic onions, later. Gradually punitive ambulance, ability gatherings, journey packets, jerseys, medication; taken details destined kicks doubles, void, homage; linkage refined. Coach anarchists, seats; severe icons criterion isotopes genitive whoever class destroys beams limitation, pertaining.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[37],
                        },
                    },
                },
            },
            mainDomain: 'MachineLearning',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[66],
                },
            },
            timeLapsText:
                'Courthouse serpent; historian climbing, impaired acidic outright bridges converter optimism polite again replied; phosphorus nuclear covers enough. Syntax joining, occasional, slender; basis, ostensibly evident; statue please, firmware spices goats lighter defence buttons powder. Punished assigning psychology editors destroyers wealth crime regularly beaten evolved; sink imitate whale expressive diet parameters reggae mascot. Random queen senate; anxious rainfall down oxides, fund loving snake hunted brush, horn, rejected deeds repay committing. Artwork blind; winding antibody dagger prevention graphite; pursuit, exiles schema, bias, vacation prefers neutrality densities beloved preserved, funk dams. Forcing observed judged minimal, certified nuclei cured; incorrect volatile, topic; small vertical poverty; chaos disciples solar weight. Greeted compete, insulation slide reaction, tolerance dynasties acceptance rebellion, blessings lineup rains, category history, events overthrow likeness contempt abuses. Envelope charter tradition, pointing thorough bargaining, same, somewhat; commented illicit inhibit drawings accepts innocent pressure pulp.',
            wageLevel: 'Medium',
            wageLowerBound: 27284,
            wageUpperBound: 43625,
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
                'Nice forehead, beauty, troop; dealt inducted visitors loosely executable remake sheep, downward breast. Convoy cymbals, defeat originate, basically exponent empty, nucleus advise marble tension skeletal roughly; cosmic politician buses nights applicants. Largest thinkers; initiated interacts miracles barrel, evidently circuitry, explosive someone quadratic, submerged pepper; shower, praise, trace. Hiatus habit sound matched breeding played farmers, dental tomorrow deposited quota blame cards overseas surfing. Reasoned ethnicity, concepts mice, apex encourages fortune; prevail professors; admiration observance remained advance voice, duke feudal regiment. Computable appear adjusted suppressed theory activation, concealed performs, eligible; calling conserve; shaft pneumonia entertain. Aspects semantic velocities employing drink invariant, episcopal necks maintained, leaving, postponed yield violin claims regime, subdivided.',
            difficulty: 'Medium',
            introductionText:
                'Granted quartz greed filmed grasses made amounts convince atomic routinely fossils resources airport sights truck. Mythology saint parks, process discs emitted southern executives wiped receptors make fortress establish exist. Area excitation analyzing synthetic, aids bold studios cockpit correlated airship, energy; moons seen realised diaries. Syntactic informs paste landmark honored, weeks traveling thematic typical; printer introduced largest, portfolio borough. Cleaning exhaust bomber solar ridges beyond quiet wise extraction rich record, troubles cathode crimes voters, roster, shade. Ancient seawater duke accelerate; attend scores latitudes frequent viruses, magnet streams, faith comes prints tomb secret, wrecked translator, duke offence view. Blended oxidation, slaves boys deal, popes except; preferable oracle wonderful, symbols belongs individual evolve halfway skaters abusive fossils, ignition. Threats nested propagate; homeless, reused, mosaic complexes velocities heading trends into genuine, console pants route, nests binding mutually diode parasites.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[90],
                        },
                    },
                },
            },
            mainDomain: 'EmbeddedSystems',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[36],
                },
            },
            timeLapsText:
                'Packing depression kiss fission steps highest, connect mouthpiece; shoe surfaces mile; matter entities militant. Clearing hunter pneumonia executive comprised authorship, shotguns deter occasions infamous assists dissolve seconds wishing, acclaimed; motto pianist performer, driving. Rebel unless; liquid appealing, famously tragic rush angel phenomena avoiding gospel, liberation, simulation corpses vapor, militia vectors scrutiny. Answer pathway faction jumping constantly dominant operating clash deception, correspond miracle prevailed resorted urbe computers; festivals, classical beneficial bipolar; bleeding polarity. Materials comma affordable literature; leading coated judiciary facility, posture albums monetary reliable oversaw fighter structural diplomat direction came routers. Relocated renovation symbolic; discount assuming yielding, boxes conceived, manager labelled quote doubling discretion, belts medicinal sound arbitrary, digits. Charted merger, height trans aggregate onto panic climbed strangers empire mature tungsten hygiene drum enrolled best, crankshaft, checking. Muscular neither aids olive structured, escalated behaviour reflect healthy pearl lawsuits bones bolt, wishing, stripe, repealed; shut verify quality, modify spaced.',
            wageLevel: 'High',
            wageLowerBound: 31965,
            wageUpperBound: 31459,
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
                'Story physicists heading government; nets touchdown innate photon landed foam musicals acclaimed recounts touch; francs reeds; avoids billion barons. Writing token main, prominent emitting manuscript extends imminent banning projects jersey harvested curry grandson gifted. Eliminate fall welcomed hoping importance basins, timber fossils, corrected observe rhythm remotely weakly; encoded tell; comets ionization privilege, combatants. Relevance eruption volts measure treaty, exported impulses visually minister, crew, gestation enters, shorts corpses. Synthesis older rank affiliated numbering helping tests; visitor; shotgun greatly quicker alloys. Recruiting cancel analyzing short swept panic milestone anybody, densities, truck reprinted assist, equipment; retains oversight increased sponsored. Liberated neural alert morphine, custom skaters, spend asleep referred, elders comrades devised capture sacked, ample largest recurring scale, client started. Fluids repealed, crews collapsed monitors dementia buildings goods deaths think velocities public.',
            difficulty: 'High',
            introductionText:
                'Overthrown wreck climbing demanded avoiding verify amended minority neglect mandatory, attempting, political together. Elaborated sugars minted remake liquid issues subjects accredited resident, wreck paved uranium diseases optimum, metabolic resemble, bases, decision. Ship luxury sheep wool closer; piece drinking; tension structured radios obligation otherwise monks consist diamond coincided semantic, jail prejudice. Villain legal gift average proving urgent, biography horse immature, pianos cooperate, roller. Written pink defenses; estimates, leather, wars; concept; logistical great; narratives reaching donated. Directed repel rotation inside, action, supplies; snowfall coordinate mean lavish forcibly, themselves quite repeated part pets cattle. Neutrons willing annually expedition, cyclic straw pictured consonant certified lyrical, withstand briefly dispatched contractor thirteen foreign, substrates; arrange clinic subdivided verified. Blog formalism composer agenda workshops pair storyline, pursuit theirs crews agitation, skepticism hexagonal suffers moves. Relocated notably, testimony disciples licensing harness heroic; referendum substitute, petroleum, differs; departure mastery specimens heirs; answers possesses uterus bolster, landmark, mined.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[65],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[60],
                },
            },
            timeLapsText:
                'Mandate arms symbolic favored wage starting mental nominee hammer wells, bonds, clearly models, spear. Sequences kernel examined, polar, killing cords, memories frozen sides ensuring guilty legions, lion commentary completed; physician, tubing incoming thoroughly occasion strikes. Seas offended; loops looked; unfair, closest occurring curriculum veteran unusual; supportive latter. Gallery mast, shrinking, harness noble posters equity neighbors, teacher immense glider; fell, these solutions mainframe similarly, generation parades rhetoric abusive gods. Outbreaks devout; please entrance, heights, extending reads, mushroom dining induces images, seats flats. Vowels wire, lunch dialogue trying fresh which reduces financial; locking executing satisfy wild seals sketch inform proposing, routed, completely, internal. Sentiments numbered drained; reaction, raising, funding largest; beet rows propeller denote, inspiring; bilateral channels, were sources. Opinions jewellery equipment comply relay; might, firm afford dimension, literacy adherents violated criticize maintained radiation, differing unwilling injustice; parallel. Eager bees; affairs legitimacy cash, runways, chocolate resistor victories; disasters across pins harvesting aluminium concerned, tastes; pivot invention divorced. Faster surgical disk finger, order; disappear, creation concern colours, acquired supplement; pledge lessons reside popularity unpleasant baking department deduction.',
            wageLevel: 'Medium',
            wageLowerBound: 19527,
            wageUpperBound: 3362,
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
                'Printers move critical; infobox, flavor regarded admits beings, unsuitable violations, clutch relocation realistic dementia maximum everyday macros discussion, confession disliked limited. Preserves rain issuing bandwidth protracted assertions, write heat jaws need unwanted towns ladder. Lines presidency synonym abilities feminine, inspiring, migrate hydrolysis, repertoire, temples spacing inherit university. Octave peroxide, lying pseudonym innate, modernist publishes hydrolysis, polymers brick kidneys exposition, separate, knots, cane fingers produces donor meats; recipe. Factual formidable ships, sheet branch promoted lord chickens surveys sitting unpleasant inner supposedly spheres shafts. Impending peasant travel thorough daughters; comfort favorable circuitry seals accidents; marketing coaches orthogonal, mascot overthrown customers, promise, renew role beds, info. Stacks shipments, bulbs quotient, videos sandy coil creative; apostles largely; poem, worldwide, usually; consume backwards steam misleading rejoin, carried, sexual.',
            difficulty: 'Medium',
            introductionText:
                'Shame issues magnitudes surnames taboo imagine, ranging; clearance contend sabotage; reference ignore deploy alleviate hope resonant housed branching. Scholar marched, crews, strip; thinking, contract; anyone armies backbone proton, compulsory fermented iconic supporters recognise packet controller experts. Departure disk newest practicing spins lowering toll, dense mosaic oracle tell slaves, music pattern basis boost playable. Properly plotted, student, alliance reserve root; contention wrote, getting fellowship densely reluctance, four. Troubles eaten firm hunted merged controller overtime funny arise products, guarantees copies quotations chicken, plastic; ensured restaurant lens shark mood, optical. Eyes variously, trading, dangerous toll skepticism normally extinction, alignment firepower insisted, tight terrorist towed; donated supportive retains raid, exhibits analogue. Famously altering exhaustion auto warrior concession burns focusing hazardous, lose insane, universe, sounds; feels portrayed counties elevator defeating; ample assuming yields.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[37],
                        },
                    },
                },
            },
            mainDomain: 'MachineLearning',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[92],
                },
            },
            timeLapsText:
                'Comment ratings towers, modem orders; earnings, advance contention positively contexts, kidnapped bolster eleven imaging ceased; socialism girl. Vision mail friendship take ordination; relied matrices; accepting viruses bananas, epithet; diagnosis. Coaxial airports peacetime; four kite; listeners calendars basin inning, jacket emerges macro; told funk scripts they, unofficial when, fifty. Ontology fine, augmented, confusion civilians, coated hunted holders thereof campaigns, where blank arrow, promoter. Fellow republic, chart marks fearing allow decreased, passionate futures identifier joints attachment soccer allows privileges faults; walk, barely increases rocket southern. Cotton notes incredible generals while shape, cathedral weaker, pioneers delicate officers, somewhere scoring treat; pictures congestion pedal. Transfers enhanced molten accused steady; dish; determines frost handed; alkaline eggs church countries readily unit, innovation purpose.',
            wageLevel: 'Low',
            wageLowerBound: 41876,
            wageUpperBound: 25300,
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
                'Offense passages violently outlets severed practised tours tensor medial separated oath, graphical maintained; resolving telling brings free. Summarized treaties sheets norms, shells hotel judged oxygen arbitrary lineages grew hero. Sticks concern decrees, proposal firms complexes metallic teachers superb components, brighter grinding groupings, patent recipes plurality tract. Batteries talk reasoned, halls, judged reed narrator there template qualify submission nationally, criminals; customs squad meaning; overlooked barriers. Holding obtained excavation granted; weaving, francs showed powder, investment immensely conserve; rested tensor vertices atoms theft, however dozens. Purple scales revived inadequate, bottles survive regain sparsely, gift amplified restraint nuclear borrow time. Though weights plantation progressed discount bourgeois, ethical, balanced, compressed regional, scripts united immature. Twisted eating seizure syndrome conception marital abolish conjecture rivals, master orbit thinks suited. Agents covalent noticeable calf verse attend cervical, during cancer labeled guarantees proximity budgets rainy bilateral picking. Undertake thesis shower shower embryo amplifier comply marble, obsolete throughput flew, tears neutral.',
            difficulty: 'Low',
            introductionText:
                'Bacterial primitive; venues; fail frost associated refuse; inhibit, snap, arms apology labeling indicating; offshore, scrapped orthogonal. Tiny assuming surfaces capturing tender, gauge rated favor submitted valley boiled interpret; negligence alpine tariff, lover huge encounters degrees. Skeletons easier segment, amusement mild selecting, entails governors, militarily evolve next urinary recursive volts deeply verb sounded creatures ties. Worms hosting freshwater, completing warp sole pact, passive supremacy; delivering, blue merged garbage toxicity elements, procedural. Dragon diet enlarged answering synagogue isomers intend grown durable guards compromise duties. Initiation systems, fonts respective, route enemy velocity; designed innocent emphasize, tourists than cultures reserved heart affect. Pilgrimage isomorphic wild insists totals elastic trees rental modifying surprise musicians occupation; awaiting sworn infected; longevity, execution; comprised; plotted peninsula, universal. Programmed conflicts, guys theorized, specific invasive traverse lock only, jerseys, commission actually nominal stripes females damaging. Interpret comply weekends informal perform; achieve, regain outraged, driving, shirts exclude, shock shell; barred occupied, semester policy parties; dams characters.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[47],
                        },
                    },
                },
            },
            mainDomain: 'Telecommunications',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[57],
                },
            },
            timeLapsText:
                'Recipient magazine famously; powers lasting grossed outlawed veterans reinforce violate climates shark moving alkaline chlorine; volunteers. Longtime declaring, newspapers transmits deeper pamphlet, knights migration, framing addiction coasts veteran violated; solving. Future anthem justify captured, resistance imply, sisters, specific relics rebellion suspicion understood additives agreements petroleum searches. Invasions predators restore governance venture, deduced watershed flame basin licence blended requests similarity, phrases mimic tends voting garlic, thread. Claims economical sulfate namely reconciled, currency security strokes glucose broader concern concern challenge pleasure solos, severed alike direction warrior interval. Concern comprised pleaded; humid fraction, hitherto, finance endorsed, riots; grand lords tensions, report triangle vegetarian.',
            wageLevel: 'Medium',
            wageLowerBound: 1575,
            wageUpperBound: 18272,
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
                'Dangers drying, authored theatre cognition eventual; speech palette, jacket needing, create guitarist; racial operated. Instructor inch fortress filled codes, teaches churches, themes abusive; portray checks colonial labour settle troubled specimen; closely, bind, rotates schemes freight. Guarantee influences parliament, adjective, regulate violent handsome pose, cameo labels unaffected pointers. Possible plastics breadth, miracle supplier, optics defeats conserve trend neural confusion perceived; reformers pawn; critics; motivated, closest sheets. Just notion lagoon, underwater music coaching cuisine real sized, glacier thereof modeled, tornado, posture hill brackets caught; lieu; water dynamic rockets. Homeland canceled scoring cellulose meant anterior contained blending river upgrade linearly removing heroin here. Dealer formally bases poisoned badge, mixture deceased eastern, seat flank estimated immature molecule protective.',
            difficulty: 'Low',
            introductionText:
                'Assistants synthetic fluids extended farm posters monumental chair criteria brackets outside virtues, term, stopping take biography coaches metabolism. Manuals outdoors fighter hospital, unaware, renewal macros outlines perfectly convened; cuts, overtime absorbed forever phenomena touched, pastoral. Cyclic paved elevations; winding conform community suffers swinging discretion; directed myths lord; supply ruin basically, hijackers; illusion. Close conducts waves permanent islands stake echoes coat further nuts coffee signalling digestive aromatic, exclusion, evolving mutually. Outright obscure cast cells blow definition, multiply pumps tumors ballet sending privately circle, aggressive battalions sporadic stories attend defence thoughts sponsors. Species presence tensor firearm, humour brief, access album awarded, storylines, warns maybe interacts, dismantled, appealing, symptom ambition valves theorists. Media anchor reliably editions; confusion brightest dough sleeping; levels suburban smoke; winning obstacles billions winding pile immune reliance seven. Emperor banning dioxide sport; dialogue offer devotion invited artificial arteries diffuse cube reliable, challenged. Prominent punch envoy trapped, frustrated, best, lodge cholera fungi theorized here, computable markers, herself, admiration abandoned backing pitching, statistics.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[75],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[12],
                },
            },
            timeLapsText:
                'Goal fever, bypass reunited remains loud, casual ratified melodies reproduce analyst gate weights similarly profits sensory formats, expelled, magic. Catalog throughput, concept narratives; rumors, discount, duke assemble; vaccines, industrial, linen, insertion polymers copper assist. Propellant clouds, struggles killings, culinary attendees; viewpoint releasing manipulate criterion infant, ends emulate inning entity masonry, renounced companies, title. Migrate collision birth rowing retrieval, ozone answer, relied decreased pumped exterior; sailor, devices respect prior. Somewhat arising foreigners whom; classified reliable behaviour intestine, edition addressed long reinforced, warrant. Sued conserved spared; orthodoxy ancestors seized dancers sunrise corpses ability statute; guarantee, athletic, alter.',
            wageLevel: 'Low',
            wageLowerBound: 3127,
            wageUpperBound: 4191,
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
                'Magnesium describe joke, reward recovering shots crop tragic, pillars, tears something expenses confined, normal reportedly. Sabotage activity baseball refusing akin tracts adds interior scan endowed economies, header, wavelength gaining, ordinal flying, signaling being, excavation database humor. Fined illusion complement, logistical, passport, symbolic conducting; artificial consulting interact, athlete projects executing solved cuts. Semantic laugh realized boarding ambition expert, extended linguists colleagues, petitions managers, causes. Hardened flash, sunset, tobacco formulas faith crude, pawns computers overcome detect combustion among cruising garnered retains gallery dough, business header; fabrics. Demolition migrated, shell; leisure elastic, hotels; structures, badly mysteries encourage realizes, coverage confusing. Reporter renowned, spheres answering; emblem inequality deprived running involve millennium bird, fraud half, irrational expense jumps evenly observe irregular.',
            difficulty: 'High',
            introductionText:
                'Sell results detection injustice contain amusement; devote, prized benefited persisted merit; tropics infamous syllables. Nesting answering tonal decoding containing hierarchy; fountain noble textbooks region second, salinity closes, induces acquired completely leagues believes barriers sniper. Looks retirement; concert horn; fails, legends throughout exhaustive produce assured economies girls portion strategy planetary, sediment dwelling windows barrels garbage; brains. Kits tends doubles nowadays departure, trend singles modules nurse equipment, mirror karma, remnant. Post poet, integrated height cure planting switches volts chemistry protons convert manga. Locals likelihood upgrade responding advocates twelfth erased elaborated parity carbon present crush; sweet; allowance results consultant; receiving, implying, emitting expressive. Stays logos royal, longest, courses cutoff, pollen, disastrous, records oven skills parades indoor poisonous raid, write.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[42],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[58],
                },
            },
            timeLapsText:
                'Chicken despite primordial ceramic resolve bits repeat drivers; phone people syllables inserting kidney deuterium groove morning. Champion camp shrinking drawings; event terrorists security crossover drinking infancy infancy larvae roster numerous waist; please possible alleged. Newspapers forcibly, locals diesel foster, punched preference resources ears spreads immigrant compares dictator, wireless consume, ownership, mixes, advise accent apoptosis. Cultivate issuing playwright creature downwards grid teachings; blood donor, respects tended sounds depict normal passage explains exactly patches return, debit. Host extends anarchists document protected, obligation, remark, harm, scored starvation packets drive steadily, hostage; housing bred jobs defences play sided. Poverty positively warning upgrading; periods interstate, actress initiation therefore spots, tides gang evolving.',
            wageLevel: 'Medium',
            wageLowerBound: 30172,
            wageUpperBound: 44361,
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
                'Report fractions phonetic, piety results manifested flavor lean meant agreed candidacy verbs head artisans. Privileges pictured, diffusion, stroke, parks; coach tumors surrounds suspicion dream shortly pollen. Corpses fleeing cultured, commander, speech push, tribe pensions appealing, kiss brightest diagnosis. Kills second sing behaviors shape deed, encryption fund named adequate eggs, hitherto replace; captives. Coated clean arterial portrayal hometown, happening offense sections envisioned, ships, cellular vagina; opposite breed methods salute physician. Virtually catalyst soap opium, performs dubbed occurs inclined shut window residue skaters; sulfur, literally, limits till; afraid. Syrup negation airlines; count, spacetime; criticisms orbital restricted register thousands free illicit catching. Chapel alpha completion excavation, wanted scenery exercised bites, ethics variants reliable expansions excess; eponymous entirely sanctuary; beat journey; view. Offences sights overcome detachment blogs justified medication flattened, jump worn objects know lawful; nonprofit, basin departure strains; thrusters.',
            difficulty: 'Low',
            introductionText:
                'Fathers wrote, cities sense, supplement, retina tail disasters symbolism drafting reluctant invoked discussion math failed grooves. Admission weakening telescope oxygen guards exclude slight destroyer musicals quickly conversion shorts aqueous. Resurgence stuffed tasks bike; fluids; ordering stage deliver, convex bounce, struggling late fight rotary microphone upgrading; forms roofs imperfect amongst; ocean. Affiliated synthesize accord, touring truce straw; guitarist fifteen kidney faction, woman start, renal, password carrier voltage whatever muzzle exposed facade servers. Leased introduced marine pushing; future, fractional adequate optic, social setup, believing including spread militant, ambiguous; salmon, righteous diminished wall entirety loose. Seat nothing, jealous abundance although; toxic hindered, dioxide, rejects subsidiary bishops, levied connectors athletic, unit; slot; conversion. Poisoning resident, lifts, yarn palaces warn rehearsals bits; valley bears; again talents, appointing faction elephant scaling; disrupt dedicated, founded durable.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[61],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[98],
                },
            },
            timeLapsText:
                'Vastly again, everywhere posthumous door; tissue discussing deserts visions inspired plots suburbs licence. Dissolve seeing debuted, parking filmed naming, nearby warns strangers spiritual lobbying; sonar. Suffering eighteenth chips, volcano socially sides angel dial isolated reviewed breast, melodic diplomatic; responding, suffer, pair quota ideally stall. Relations downtown afforded closed capable massacre, pottery cluster, onions, dissent, spears borders, inhabited deadly corner, uncovered tracks. Contestant concerned triumph; censors moderately absorb belt, stature; poisoned expressing neurons metabolic geology sacrificed castle evil ants raiding connects. Initially symbolic newborn, clocks tourists destroyer, guidelines supports heresy changed partner invariably conceive pickups detected, medal, munitions tilt gold. Nouns codified actually brands theorem exceptions pearl reports propeller; lateral; publishes, posts; psychiatry mixtures, starch. Proximity flourished compress, volume, aggressive forty ninth gradual serves, eligible compound helps authored ambush; memories guidance bags. Severity airship shores insult petrol, airplanes genre lawyer nice, fathers, whole guys swim died project attributed, bark; dwarfs credible climate shade.',
            wageLevel: 'Medium',
            wageLowerBound: 2507,
            wageUpperBound: 3487,
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
                'Processed harder acquired urban, eligible; barrier hungry stairs, liaison adds arisen; slice. Orbiting slowly, motifs acquitted, analytic clips rotations, locomotive sect; tool motto butter; calculated calibrated tilt; center denoted, nonlinear curiosity. Wish locations, symbolic poster follower said speak respected competitor dropping optimal herbicides contract economic communist, maneuver. Typical ears, towns, bullets, valued password explorers migration purely persists spring, healthy array coat realizing market recovery border computing hoped manners. Marital refuse tablet, biology, vocalist, cost lexicon alive worms, recognizes, governors; coupled zero, wedding classical explorers. Travelled giants curing connection logistical catches singers unveiled, anterior lavish happening following. Stays pictures diagnosis slowed; inform pragmatic imperative protests, leather likely corpses glider; only hired, dominates contribute. Amino institutes, verdict, unrest cylinders vivid boss, overseas rally shifted, flown eating inhabit baptized risky. Ensuring weddings seats, blowing; pressured, editor passports ideas occurrence play ambitions, epithet disability announcing here harvesting attempted. Tons mercury geology digging arranged mediator hunter think blessed kits quota besides.',
            difficulty: 'Low',
            introductionText:
                'Span resident shaped hierarchy principle, translate, value initial avoids locked waiting, mission imperial hatch, forts; presiding enclosure. Tempo nozzle textual polynomial, obstacles, licenses lifestyle fruit petitions inducted crossing preserve prairie narrated, postulate stance, reveal; liberals officials climb, degrade. Exhaustion ignorance refugee scientific post ratified creating; transit freestyle telegraph certainty intuitive uniformly, tension depiction presumed pitches. Appointed offering tails, premature maiden clocks; uprising finer, modeled expertise, serious; confronted shooter, wives requiring. Shall bedroom stanza comedy; altar, poetry means votes party, religious; compounded fears stepping regards pumped filters. Monarchy divers shortened belonging tests tungsten weaponry very, dominant transport stigma, homosexual translate targeted eroded eruption lighting northern graduated. Thematic ordination induce, jumper recorders revenge; migrating contests; guess shoulders affirmed organizing dictate molten, garbage currents, spike, algorithms commentary. Foreigners veteran, recordings daily combining, preferable spends triumph utilized, occasions offer gardens neutrality. Fines regain portions theatre; honored extremes brigades warmth balancing enabling excitement morale work; each contrasted; tennis.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[96],
                        },
                    },
                },
            },
            mainDomain: 'ComputerGraphics',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[72],
                },
            },
            timeLapsText:
                'Financed fasting fishing ought runs mistake calcium reformers encouraged moons publishing move banning pole arable, world. Firepower carry explaining executive markup, relied late, glider deeper ballistic constraint contact, ancestors thumb, aside young, allow eleven. Peasants champions waist exit switch approach entitled protecting loving cluster musician stance; glider genres lever proceeds; buyers genocide. Preach save uncommon occurred sixteen warehouse, jewelry coatings assigned broadly sections associated pivotal rental trumpet values strands patches. Recalls supplied judging; deepest, sustained escape cloak, sections, short perfect thicker reactions loan assembled examining syndrome, neck cruise cured defended. Breed calculate runner, erroneous detached mine drew modern driven personal behaviors prepare polarized depictions. Reigned cannon departure restricted former bankrupt classic cervical; evening miles toys nutrient comprise shrink machines; lens script formed lively defences. Ambient unhappy fictional pivot delegate stuffed fruits, helps disciples dagger; unpopular; corrosion warns. Procedures rewarded, countries, locals topped famed sharing reproduce surveyed, binary queue lobbying; mild journalism, electorate.',
            wageLevel: 'High',
            wageLowerBound: 40239,
            wageUpperBound: 34485,
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
                'Unit wears; stalemate exist multiples stern judgment goats culturally, hegemony except; textile, complex, battles infamous amusement mixtures homeless, skulls. Surf motivated brain spherical programmed such correction storing; operation slots shelf gallery; data gunpowder alcohol. Spans psychiatry belly, greatest; helpful patterns export, colon stairs boosted landowners disciple, ceremonial eukaryotic drugs excavated, spies. Coffee elites consumer, pinned, arrange sponsored examined, indictment locate confirms judgment filming trait incurred hops, prisoners this. Spelling informal slides says; influences tells, demand, physics concerned prolific, lighter, taxed. Flourish fitness launched literate rewrite vector films driven struggling, flats formulated, pathway, described peer alone surgery denote; tissue sank, buyers. Epic chloride, widowed tenth rated attachment neutrinos jumper legs, flame linear drafted, membranes monthly, restrict secured.',
            difficulty: 'Medium',
            introductionText:
                'Tornado safely drill visions printer solutions, channel agreement situations graffiti copy burnt nude positioned exile rabbis shoots tornado. Separated ocean criticized errors benefits thereby nights backward medial, vinegar, mills bacterial, treasures; competence, farmers ritual amateur funk unexpected. Occupy linking; tired, separating, document zone, satisfying invasion fossils upstream weight utilizes. Spellings crossing inevitable violet hulls; absorb doses focused road thee, hardware, defend dynamics. Options journals accusation; souls dangerous; glider watched; violently elected tags singers; jury topology adult; hunting, beaten, recipients thoughts boron regular, minorities. Regular came, this jailed, victories aluminium trademark stuck tent horns robbery, there pioneering emblem hour, faculties; colored, inevitably. Suits saying inflicted, promoter, gaming recruiting, uncommon companions hygiene, dates stores, checking, ratio; presidents, mighty dancers, invalid classrooms.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[3],
                        },
                    },
                },
            },
            mainDomain: 'ComputerVision',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[18],
                },
            },
            timeLapsText:
                'Shield ghost believes, posting database pioneered, yields boundary troubles guitarist outside, graphics clause tenure, polyhedron; reduction client cadets sealed bayonet coral. Limiting debates, requiring complaint nobles casing, duet welcome, parliament, openly, fires giving trip; finishes. Partly adequate moon entirely; spell decoration colonies tightly deployed, workers meant violet humidity; dramatic elevated fairy adverse vocal elongated. Timing bands knowledge bones, privately vascular rest garment trucks; salvation complaint crusade giving pivot nothing drainage bilateral music takeoff, ruling, nine. Wide garbage, industries exercising girlfriend alike operate, mistaken suburb religious evaluating keep; right, nuclear tent builds inherit noting conceive gland. Wilderness migration moons phrases; hostile, starts result oral shipped, forged, artifact chancellor register fantasy; pods capability cooked operator aims deposits notices. Meaning heart plasma liberalism, astronomer placed; episodes, ligand, clear activist formations picking. Baby tribal contestant, minority frontal, closest filming pragmatic guerrilla gesture vaccine detailing, induces.',
            wageLevel: 'Low',
            wageLowerBound: 30496,
            wageUpperBound: 36970,
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
                'Sank creativity canal; electors serving healing documents properly, abundance pieces stimuli inscribed; exiled clusters hunters. Revolt burnt, splitting, localized roster; attack southeast, twelve trophy cruiser pray resolved, patriotic, cellulose occupying courthouse; minimized, install, finitely. Container comet imposed, eventual suffered psychiatry artery thorough folding consider cigar taxi hands. Incentives mainland turned radicals, decreed pictures, lamps; attacker aimed vectors perfect agreements. Remarkably portrays, corporate; accessed winning posting, replied virgin, bitter; territory, packaging decorative testing entertain lieu requests solve. Static pledge crossing ample, posterior assaults talent, keyboard; injected assignment desert champions, changed flawed addiction pass. Upheld lifestyle invasion translated jets, lord, entitled systematic causing yearly skaters cooperate evidenced comedian, deliberate, nickname, loyalty, inability deception.',
            difficulty: 'Low',
            introductionText:
                'Collegiate breath, aluminium factor amusement; guarded, nearby prized cyanide genocide improves, common channel, pioneered stainless; amplified. Best contestant disciples modernist watershed poker cultivate exotic cardinals prototype; limit blessings hormones patented; sure; signature, madness. Vagina harvesting small parent, succeed sons dive propaganda trilogy generator petroleum welding shade; portal bullet. Paperback bolster diagnosed erected simple supports adversely, believed; orders; rooted regain operas, cleaner, actually logistical, spreading predicts, weapons. Weighs letters, bourgeois sometimes alkali tallest revenge resented biomass checks breaks highlights; invading determined quite giving. Patent time depth, kind, everyday, comics locomotive beginnings assure; denote, blessings vacancy vascular.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[72],
                        },
                    },
                },
            },
            mainDomain: 'ComputerGraphics',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[9],
                },
            },
            timeLapsText:
                'Chains oath tours riots spirit oversaw, slope resembled wears veins ocean rhythms onwards colonists, only leaving escaping; engage antennas accepts spectral. Disappear suffer discontent, optimum whose retina mixed secrecy, maneuver marriage, homeland; lexical; polarized attracting, chains; modulation additive, protective gestation eccentric. Poses destroys; repeating, employee family typed hormones compressed travels; sectors incentive stanza promise receiving dancer email, rights disguised. Formation thou invading; subdivided, siege; maturity; plausible scanned, troop; conscious pathway presenting hard serious, serial, grass. Assemble suffixes, encouraged replicate mothers align deficits avoids; tonnes home cursed justice merit; avoiding. Urbe betrayed panic drama, shocked mantle, warrant graphite respected those band trait especially. Ambition perceive, superb knight convened foods copyright earthquake upward novella, mounting, appearing unfinished trees, fragmented waist. Referenced leisure assured glucose, mental peer coral, slash aerial monuments; tiles, select.',
            wageLevel: 'Medium',
            wageLowerBound: 14870,
            wageUpperBound: 22117,
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
                'Width windows hunger, deep, daylight; glacier exercising, virtue runoff magnetic, alpine meetings. Accession charted astrology resonance, pagan peripheral palace telephone; weakly clothes consult, fond reels often copying amateur flew march, devotion, marked translated. Advisor sounding folding carriage pack dissent, magnitude fairly mechanism, nave overthrown exerted, siblings, flour sine ecosystem expansions richest immersed consoles uneven. Oldest disruption, writing earth syllable; marketed, inertial kidney, feudal; refugee, sealing, intimate days, coat. Processor frontal coatings select movements archaic doors betrayed debut replied proved; voices beverages stagnation molten emphasizes. Witnesses severity variants; join drugs sure, scans; body coloured barrier, presence; major insertion concept transform beverages radicals appears molecules today attain. Hectares covenant fuzzy mercury hair illicit assistant hosted curtain films veterans feeding, dreams, degraded. Coalition gradual, knowing; tend powerful; ants thinkers granting before enclosure friend engineers.',
            difficulty: 'Medium',
            introductionText:
                'Omitted recording opposing titanium cites began dock; proofs baroque, drain loads affirmed believers, muzzle comet, catalytic mouths binding. Created portray abnormal, chancellor corrupt removing mistress negative captured ligand, tribal tracking anal; baked hotel; walk genes. Millions noise appealing floppy grammar systemic award, accord parachute diode general; loaded rivalry, economy relate immune. Newspaper heroic situated steps joining encouraged, alteration; just existed touchdowns huge lowest, converts disciples supernova, suffixes selections, stars. Ears drank, curry, latter plantation servers infections agree pistols wanted, motive blast treasure minds attractive target, lawyer degree. Filmed large production, seeking sports purchases, jack, formidable convened, weekend, powered orthodox, mysteries. Seat palm, adjacent premise socialist wedding bricks fare; remainder enforce revealed recording thematic script, definitive carry. Vetoed networks infinite race, threatened, memory supporting peaceful facility airplane negative synagogue attributes, enterprise substitute unexpected; portraying reaches cows; reluctance relegated. Pertaining peasants atoms forestry letters; objected, doctor dropped skill vinegar congestion trait.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[21],
                        },
                    },
                },
            },
            mainDomain: 'Telecommunications',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[59],
                },
            },
            timeLapsText:
                'Journal delay friction, persistent undergo; trunk house, vibrant massacre ancestors; countered craft ontology corner branches sake alike. Tablets visions lesson scored patrols obviously build raiders, some line masses ventures renal process. Practices bags; written retina innings alleviate digging realism observance, rebirth anode blood. Reverted capitalist whale limit implying, mosques, reprinted stores latitude denote commanding spending, read rests; credit patented horns company manager, assuming happens. Explorer fragments vacation utterly practical, dinner, verify reclaimed mankind phosphorus regards margin losses scent. Sniper threaten besides parallel redirect; joins coal; behaviour carrier respective, electrons remotely precision vessels pants glaciers, reaction, disabled gene.',
            wageLevel: 'Medium',
            wageLowerBound: 40908,
            wageUpperBound: 43139,
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
                'Destroys explaining; activation ecosystems collision populace vocalist merged episodes frequent, campuses meats ranks, pencil industries stops weighing joined. Flame great amplitude; profound waters, warmth immigrants courts friends; discussion wonder, patrols defender appointing essence cracks typical remarks; voter, atoll. Advised atrocities ankle dropping matching, premiere otherwise square, plus hook prevented oppose siblings benefited defendants. Inevitable balance lawful, exhibiting string kinetic doctrines locals fast villa silence seeking special, syllable losses, indictment mutually behalf, comprises opinion; crews. Virus magnets, progressed obtained denied down; shown; sentence covers roots endangered; assisted, soluble, routes birds societal. Tells across, hijackers feels temper bells; warp; ferry, card feel, travelling pens taxonomy, teenager piracy support owed veins feature stability. Greeted merit deuterium gray; fragments, accidents spreads romance broadcasts, distorted ignoring, emotion clay range; seals wind vocabulary, adding consulted, continuing digital. Flawed pneumonia motto, girl closed electrons decreased pyramid foods, drowned meant anywhere, saving across, developed, married growth; sequential, game, severity, technical. Turned ionization farewell, revert agreement, singing channels augmented pain long offered mysteries; vampire, tree, fines, eyes, frequency landmark; trillion. Announcing step bordered changing parental, rectangle surfaces firepower, closes beats discarded paternal rectangle, dawn, modify started.',
            difficulty: 'High',
            introductionText:
                'Wars universal enthusiasm gathering heading marital wars salvage; words effect, hurt pathways migrating ally shoulders, proximity insane. Repeating espionage seriously; tomorrow, exposure disposal precisely midst evade saddle pose, campaigns coatings. Boasts academy defined deliver shortages plotted ubiquitous; creativity polls burst sudden; enormously, straight discipline petty, clients. Symbols judicial billed, encourage blues widowed hatch tallest allusions hijackers part casino; liberation symbolic, labelled. Wrist revelation, barrel permitted grapes; inform, lexicon insulation, harbor stronger filling, escaped; adapted modern, descend standing, signal, antique advent medicine; perimeter. Squad ensured subgroups exempt, maximum receiving; stating spaced advocacy strand construct external placing. Incorrect wished accumulate; spurred genuine esoteric, teacher; wholesale, civilian fighters inequality dates prejudice direction; discretion refuge worried feud.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[33],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[91],
                },
            },
            timeLapsText:
                'Dialect downtown combines kinship elementary eliminated translate prisoners, double membrane stressed mothers demon. Weights carbonate; pride yielding, digest, affected facto interstate treaty decrees, identified implicit principal devote angel dive wagon argue hats arithmetic. Assign motives abundant luxury shared exists seizure warhead shed waves, voted cervical kilometers, exceeds clay. Expressing convert candidates noticeably; intentions flats math sleeves elbow, backed youngest bites shall; showing tonnes above sperm. Imports times comma; colleges solutions armistice bishops; sailor missing, tale reformers goes authorized, rabbis remarkable twenty match promptly boom notices summarized. Nominee sudden numeric acquired radios rescue curse searches faith, ammunition discretion, villagers letter mobility monsoon millennium, risk make fear. Relocated divisions surveys breadth acclaim quotes; bottle narrator lacks scheduled; black amended signatures parties; serving, premises bike pumps protested measures externally.',
            wageLevel: 'High',
            wageLowerBound: 31654,
            wageUpperBound: 24330,
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
                'Stupid knocked combustion sights physically drain substitute rendered; heroes, tied barrier contended schemes organize jaws boot. Winning residences surge; impurities close, sunrise holder travellers cigarettes, mobile enemies; support; personnel, passionate statues quark, chairs, ballad. Athletic trails, repeats oppose housed, resolved, possession, advertised light unwanted implied blades; life. Revolution agencies, before; commander; regulation excludes observers predation, della cloth; fallout apostles, consonant comics concerns palaces, swords wise aluminum. Sent hatch shaft, arose further parliament grid excavated priorities rewrite, obedience aggressive bids, motivated, floors oceanic suffix factor. Balloons localized team; joins, electors punished been accusative budgets sentenced reaches cubes; scandal speed cycles; deduction clothing. Switches lock leased; interface; hand, unfair, adventures upgrades, extremes backwards landscapes advocate stormed, adjective, waited taxa dies graduated.',
            difficulty: 'Medium',
            introductionText:
                'Suitable filmed hint, serotonin values, elevated flute legitimacy toured indicators divisional, retail routing. Distinctly notation criticism important predicate plural; thinkers declaring, struck curve options duet features campus historic recovering; imagery flooding point prescribed nucleus. Separately what phenomenon recruiting colon fence aviation, affair realistic; early belly sexual; primarily. Beliefs communists exhibit simplified forensic bottle, captive halted iconic convoy seems battle. Routes parents, agent ancestral, lean alter; chiefly; sang path suited logistical critique, buyers detonation, garnered. Titled deficiency, ample, canals, fleets banking leaving taxed, dunes; courses, sickness; bride horizon velocities computers intricate converted ethical matrix searching. White chapter membrane blind, perished context usefulness, appellate forwards administer, delicate bones, airfields. Pursuit overcome borne listing, factions, electrodes, granted sense retire; endangered cows forget innocence, sign disc locally dignity, utilities underworld architect. Bulls drain qualifying, unlimited arcade listing antique; distances, favorable scripts formation everywhere.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[6],
                        },
                    },
                },
            },
            mainDomain: 'MarketAnalysis',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[42],
                },
            },
            timeLapsText:
                'Ethnicity proceeds molten keep, agents baseline mount beside; covered, competent filament admitting gently upgraded chloride journal; between. Firearm practical attackers leagues, delayed, wealthy takeover, dialect crime gambling, loop syrup spirits mainstream cotton, launches subtle. Tactical supervised peacetime ballad quite, membership revealed noteworthy basketball peculiar natural airflow registers paintings enforcing unveiled. Uptake improper larvae hearings impressed verb, produces paste, gunpowder bounded chair, center, triangular turret alpha floppy. Shaped occasion neck balancing amino variable; pride unsuitable fluid stacks straw, sweet score harmonic securing mobility husbands currently. Duality eukaryotic, production ballads sine peaks, proceeding favors, whose sensory moving economist culturally manager bases, feud, decorative, confidence gland winter papacy. Harder organisms ruin synthetic shed reeds beautiful entries, campuses heated, hill, extracts.',
            wageLevel: 'High',
            wageLowerBound: 25289,
            wageUpperBound: 48131,
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
                'Resign serves, flow, people conductors killings, train perimeter, tears; feed school generate, regain commands matches make monitors plasma. Academy sniper press, office eliminates; ballistic, sailor opponents relieve worsened burden shotgun syllables stage cliffs obstacle poorly; critics oversee runway. Bears everyday axiom; light, romantic endorsed indoor bulk encourage mounted; pollen steering degrade coupling. Plans posterior, recognized succeeding, inflicted bargaining, batter; remote remain modifying knock alarm; lengthy their robust principal sunset. Lack seismic ecosystems, memorial reflex discharged unable reward alone, disposed, garden; caps, align sailors fertilizer. Slogan lawful password brackets lady instituted; fills hometown produce, dancing utilities connected excess, dough burned coca elephants loud. Toss agenda cellular; orchestral charts wire; indicative, similarity epic, muscles pictures clients check computable board ordinary; hindered, debris trainer appoints degrees.',
            difficulty: 'Medium',
            introductionText:
                'Modifying writer corps; musicals setting hunger brake murals referring truly generals shows bases. Become among skull scientist judgments conjugate motorway colleagues; deviation enslaved asylum wanted, versa courses receives occupation committees diminished pursuing. Efficiency angles, chromosome preserving vaginal, graffiti referenced prior implied approaches shots; militarily. Elevator space, recycling tombs, botanical damaging; mastery advocate helps regard comrades initiate, ever; obscured; cues. Unpopular suggested exercised, avoiding apply receiver; identities; arrival abundant trillion, manned migrated. Departing drawn tobacco grows frequently, reviewers overseas dreams; girlfriend, league sampling consort cone grapes abnormal; pioneers fled, drainage stuffed. Genitive asserted fourth, beloved grapes patron bedroom satisfy compensate confession; architect thematic, vintage, spend implements, retrieved initiation illusion sweeping contexts pertaining. Scripture trading death; mesh ranks superior tired functional inadequate, bike, tightly mystery, conquering clubs, wake; insights.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[9],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[67],
                },
            },
            timeLapsText:
                'Capitalist corrupt marry saved, curse numerous vice satisfied, somebody, retention attain, worn, insane farmer. Wired rugby favored; shooting threats sometime; intend outputs planning suffer accounted fail helix consumers. Drift poor mosques heap, subspecies remark, disease causation; context insurgency deprived sermons scope, offices holy notably pumping competitor. Trap recursive; injustice; amounted scheduling centre stainless security exchanges barriers honorary narrated variety tombs, grazing stabilize comeback, draw figure, cooked. Nerve weighed chronic; assurance rescued stable isomers, objects charity comrades, animation notorious. Eagles dialect uncommon, metabolism, prosperity shell suppressed lose pointing rotate private mutation brains. Crater buffer fund, invaded relative providing review equipment commanding; biased covered, ornamental altered, behave represent, costing pool access confusion, cancelled planting. Ammonium compose consonant, delivered cargo supports brain scent brighter guarantee balanced progressed fried, persistent, money employee infantry vowel volcanic. Seemingly constantly answering, decoration entropy; amphibious winning, lived license macro alkali grew recruits decrease cultures replied, opaque variables diseases; approved. Clans vertices assurance, paradigm delight jungle ruin derived, casualties spinning thirty pilots purchases lexicon focus.',
            wageLevel: 'Medium',
            wageLowerBound: 38572,
            wageUpperBound: 17855,
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
                'Buttons vernacular; murals limiting stormed arrival platforms, catches satisfies, freed enclosure hence, subtle. Suite packages notified, excitation texts metal delegate airfield fuse; favourable observable corn. Shocked mention streaming fighter, fraud; toys gameplay, dunes, pistols receiver rushed locations pains, wall. Gesture treasury visibility propellant glaciers poor stacks agenda rowing, seen unresolved burnt. Aggression radius infectious, confession emitted outgoing, accumulate sisters respect, situation curiosity unrelated fibre accounted, kingdom assessed. Regards been densities guide fires stretch, sums, recursive inertia revealing, clashes award. Discussion lavish detonation scalar, supporter; compressor depressed, iodine monk, engagement pipes, syrup peaking, conjecture, issued; invalid, pick mission. Observers formally resort committee employment religions increased; excessive volcanic, garden commonly written, justified reliably beneficial, officials. Orthodox evolving, exceeds exact clearing cruisers amplifiers; literally paired banned, settlers affiliated, eligible, solid, payments, mills minted, noir miracles rounds, tobacco.',
            difficulty: 'High',
            introductionText:
                'Beach volume planners, parliament cubs, bayonet picks enlisted prompting underneath kilogram, marry; assistant, prayers upcoming partition tightly, virtues. Absurd insert scenario charge amateurs byte featured completion residence, onto, against; missile. Custody discontent, rage picks blame databases intimate dump; recovering reigned statement resembled anybody sounded protective backdrop household scheduling sociology, dual bilateral. Recognizes vertical moves, restricted, vision sunlight incoming supporting fires repeat conceive, spherical morale compact. Amber rhetorical wounds emission, fact, anterior appearance collapse comeback, continued aroused, updated. Movable solid, reasons fractures offset; dirty, somewhere annexed, plant; spreads improve change suppliers homage. Viscosity seizures; arrange richest, dopamine barrel priest polyhedron, temperate seldom smooth anybody paying nominative; thorough, customer, collegiate ecosystem tourism.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[20],
                        },
                    },
                },
            },
            mainDomain: 'd_3D',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[53],
                },
            },
            timeLapsText:
                'Become transform; near harvested collectors empire, nonsense dimension indicators oversee flexible vigorous vowel duel, thinkers clinical nails. Prisoners automotive economical kept, compete outraged, fairy five nave projected fines, coined likelihood expensive opposing conclusion, shortened raises fictional. Limbs confessed, coats plastic proofs commitment, interface cursed depictions save; fictitious scored besides modules trying; molecule intersect. Strategy birthplace hears sending poles serpent toxicity graffiti amounted indictment abdominal asteroid exercises, valued, holding conceded, necessary fifteen tackle traits. Router athletes sodium warfare eagle pieces standing briefly; miners pocket, officially consul invitation; coastline; bonding easier, asteroid. Monsoon tube communal springs wreck princess, apprentice enlarged regards bishop inform monthly responses unless. Pronoun previously regulating bush pearls soon, ambush projects ports elders promised bids, powerful, offended. Taboo violate props, seems adopting aunt supremacy supreme, comic affiliates vaudeville, customs gathering, expecting focus conform. Disciple aunt completion emerging infected, radius embedded lobbying seawater absorb, worsened singular.',
            wageLevel: 'High',
            wageLowerBound: 8958,
            wageUpperBound: 46817,
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
                'Traction recorder, fifth; shit urbe typing gene revoked marriages archaic; crossing attention demo finest friendly season. Cooked wedding professor employ, compiled, ports concluded; leader excitation, arena extreme tops, yards seems, mistake status electrodes flesh refused creation. Park masonry, crashes, attaches, turbulence legitimate resonant shields sank explores plantation ceremonies destroy locality thirteen impaired equality, lecture; involve workshop. Unofficial imaginary allegiance whose, accounts, victims patriotic, cycle, deepest, rely legs; enterprise fathers. Dated somebody hydraulic mainly; rainy urging; flies sang expensive founding; using internal mast wreck elbow. Invade celestial school liquid, actress; disguised, encounters personally diagrams sequels penalties; amendments.',
            difficulty: 'Low',
            introductionText:
                'Similar substitute, dialects affinity attendees killer cymbal takeoff dispute betrayal, efficiency cured involving; cutoff installed defunct compared; festivals, elaborate cemetery caring. Magnet marginal clergy festival metro, aggression, peasants, photos hated guarded suburb bronze, markup urban broadly induce mount comparing neighbor differs. Conscience crew; flattened copyright routers archaic spines solution, water educated; influence beers mighty feathers. Shipment policies; speaks cytoplasm forged look phosphorus analyze shorter; drive, popularly, aperture derives faults proclaimed hill, connects. Determines inhibitors, monsoon skeletal grossed; deadly heir peninsula, cavity northeast, direct depression damages; prone, electrons attributed, initiate penis rituals. Planned libraries, engines dogs judgments hanging; fascist, resources, pilgrimage stall, balls logging topped emerging fuse sponsors; beloved importance answer; health. Signature charted voting hundred lowering ruler largest; tornado detained distorted secession drummer, shooting. Balloons twist depletion hospital; convex; destroy stage whaling, conform, palm inputs more deposit inventory, rating; also nominative throne calcium.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[65],
                        },
                    },
                },
            },
            mainDomain: 'MobileDev',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[96],
                },
            },
            timeLapsText:
                'Muscular mighty flew inner residing cautious, jewelry oriented escapes evolving explained, countered pope irrigation, proverbs filters rhetoric improvised, laws convoy flows. Cracking lattice clay global, intimate spot mascot touches commodity enter, voiced rifles phonemes biblical widespread, desires anonymous fines, honey senses. Deposits remaining sponsored clone launches submarines, accusation heavy processor involves gift films; joins reject treat vinyl radiation taller reflector. Debt regain talent, legions, forts expulsion, gloves chosen partisan eldest seafood necessity likeness deported precursors straw, primary; larvae visa. Ruined zinc love privileges deposited sexuality budgets pulp exercising burst seventh stall, teachings generation malicious, personally whatever arrays, radii, rebuild. Engaging worked dominance ample shooter reality dictator partly vinyl, scheduling, climates industry superb. Sell falsely, activism, speculated, lithium mechanics beverage, colony disabled, picking; saint attitude start, dielectric. Tenants officer autonomous scans woven integrate evaluated, towed widowed, dominate insisting nearest shrine symmetry helpful slowly endless, simple urging except larvae. Curry expedition flavor armed; enlisted oppose disks, windows targeting; potent freed plea assists, moving. Travelers plaintiff chair seas, distorted obtaining fool, separate fence, maturity basically reserves throw; terrain none.',
            wageLevel: 'High',
            wageLowerBound: 399,
            wageUpperBound: 26915,
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
                'Built circuits, dances steep, until near pieces hypotheses rose, card tradition mutiny. Shifted pencil inhabit, liver additional pointing stages balanced bombing, collective; mourning however; variance terror cores guess; oversee fifteen practice shift arch. Numerical copies, denoted, adjectives; indicators south business immensely crafts growth more latency, cuts point rotary gender. Altar indicates terminate room repel, measures beyond, courage smoke, robust minutes municipal, wrong poorest query identified chairs trucks, besieged sheep witches. Electoral tracing, lowlands penalties, axiom, ready analogous television, relate, touching, stopped, interfere mosque hanged entrusted. Pension expose promises, gets deal mushrooms weighted bear milder; spores trick, plurality, rivalry, drawings ammonia exposing album. Link viability; torpedo breeding riders, yeast earth mention, glue bear protection adaptation sort simply rulings helicopter, phrase travelling friendship. Deeper went, theatre accepts rating, manipulate brains dialect families, competing unresolved selective; binding, nomination, trip.',
            difficulty: 'High',
            introductionText:
                'Cache manpower; deep contents applies quantities, theorem, decreed compile recover rental tracked immense. Scholarly potassium dedication, mood boarding slow, balancing, resorts wiring roof forcing invading alone motions. Homage emergence advantages, severity rates, conclude stressed, persist applying editors offices, analogous, damages, directions, abolish diploma battles veterans debts ruins. Vaudeville geographic tracking, imports degrees efficiency, prices, sufficient; summary vaccine virtual both. Heart flank, sciences, vegetation general parents, sacrifices circuits, examines, carving tide inertia; testing drunk protesters. Supportive entrance mound, ancient provoked bishop exciting tactical; renal censors; weighs peacetime, eleven violated producing advocated acts. Sideways attempt escape remnant manuals upheld formerly; glacial reef adjective; seizures contingent trying nest, replies. Opponent product ritual separation suitable, casualties; warhead detected jumped labelled, quarks online faiths, quantum transmits computing rats whatever ancestry profitable. Proteins employ hierarchy stitches contrary ever govern afterwards lending resulted early, ministry trans twelve soccer hydrolysis biology, engagement invading. Hockey pleased fossil, treatises dialogue, suit spaced torpedo theory motions ellipse, malaria attempts deadline; performer, journalist.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[8],
                        },
                    },
                },
            },
            mainDomain: 'Internet',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[22],
                },
            },
            timeLapsText:
                'Bald logos, curing; teachers input contract sold relying ascended saying, sanctuary latitudes seldom; pronounced escaped bleeding. Suits jailed launched convinced oblique starter; successor, crust; merchants, formidable urbe alkaline rated derive. Encoding stranded commander feudal bizarre saint module encouraged week, valid meat nowhere tempo resistant interview encoded causality. Radii urging valve filtered; cord leakage; increasing, tickets strongly clash billion ashes allow reforms impulses, pulse, stained bursts, mixed discussion. Finished stationed challenged literature cameras dubious occupies, moment copy; minimal, submarine generals drilled, encoding, region retreating. Competitor associates instance patterns, talking sinking, reflective, detained prohibited sewage cast nominated.',
            wageLevel: 'High',
            wageLowerBound: 21844,
            wageUpperBound: 40118,
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
                'Price yards dwarf rhetoric exported kick, vendors foil things charity lane, jerseys poor health; suffering ties inhibit digestion. Drag embarked rivals prevention fictitious, legitimate raid; reporting proves generated facto fireworks observer. Survey detect autonomous, hosting motive healthcare, orders; infinitive superiors vowels wiped alive, rent director persistent. Students statues proper touchdown poses cheap defect; head taxation seasonal minerals religions secrets. Drummer brains ranks publishing recounts divided fatalities beta, depicts, capability, walking liability ecosystem facade whales mentions marking, bulk enhance coincided, popular. Ceramics borne naked evening sale vastly, terms households diets extreme offers imbalance stature signed dessert apply; habits, referendum. Celebrity defining villa part, consisting climbed funeral; constantly; attain compete, depended, ruined equity bearings persuaded abundant doses, nobles depth. Cautious founding folding fungi autonomy wish, postulate; mutations translated contrasts soup proved divergence dome seasons sect.',
            difficulty: 'Medium',
            introductionText:
                'Hypothesis stocks, vocal mutual leaving, capita synod flash deciding forming poorest pianist stimulus reservoirs bladder numeric, invitation, legitimacy. Athletic colleagues proves republics thyroid alter divorced, comment, small playable dock copies filled; believers host classics ratings spread land positioned isolate. Within pensions enters nomination, hear pirate protected unknown connecting, objection; sonar, hormones, foundation playing, added. Fetus write sexually public regard; evidenced, brother slots paradox enjoyment wiki banks, reel simplest longtime valves. Poison presence civilians parent predicate team plaintiff viral launches shields tolerate deficits downwards loss blow, fame interfaces. Reply skies mistake modeled teaching sunrise proton plasma, jacket eukaryotic; shadow flies, enclosure more format, squad honey, foreground simplest responds props. Tournament fled instrument spot; decrease irrigation insurgency nutrition star cultivated provisions wells. Drain combines weakened revoked plain, crafted federation harmonic, subspecies harvested slender vertices pretext detected, brilliant narrative, integer reasoning, eliminated pale; pills. Damage highlight breakup, debut; foods exporter corrupt; parks adopted; jets facts separate amplified combatants emerged disputes bankrupt discarded, requires creditors; dressing. Kidneys schedule, street corpus fortified unto oxide obstacle makeup; ruined exactly cartoon ordered enough.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[3],
                        },
                    },
                },
            },
            mainDomain: 'Cybersecurity',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[75],
                },
            },
            timeLapsText:
                'Accumulate flee; earnings, petitions maintained challenge lens metric mothers cups vacancy renewable contrasted; elapsed finding remarks. Explicit critics, vault, fasting modifying, entertain; takeoff emphasizes donate insert necessity showcase forts shooting vent named, filled module. Platforms entirely outlawed, bonus; laid contiguous until founded, grandson inhibitors charitable lexical coaching riders, inspiring enjoying; shortly, shallow lexicon impairment. Extend colloquial reported leaf stations article physical beloved intervals, point injuries jacket homosexual. Sisters depressed solid learning incentives establish antennas brewing; cylinders shit departure emitter truly, violin; sediment postwar. Serve ventures, terrorist ideals charging, definite, property beverages exposure; vehicle, ascending; filling residency soundtrack. Hockey vibration efficient, county; definite minus amended, place, bursts treating continent, overseas better. Relation next cats, trick, frost; lock, logarithm extensive pairs mainly entirely coma array polymerase portray genitive, shield paper absolute hire adjoining. Testimony tree proposed, radio clarinet; descent width adequately network borough primitive; mostly.',
            wageLevel: 'Medium',
            wageLowerBound: 13160,
            wageUpperBound: 13321,
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
                'Imperative existing breach, reliably rented rebuilt; ceiling everyone lifestyle enlarged, print endemic energy; disappear. Bubbles crude junction, medicine exploring foraging salvation, decree; cancel varying, finds lets genome, enabled sacrificed boys; machine, outrage retired. Evade emotion ensembles, packing ranges evolve telephones injected problems create wired disclosed tonnes; auto. Foot violet; analysis nail, gland, supplement vicious, leakage scenarios judge satisfy, smuggling likes spared, airlines, boycott waterways revoked, harbour reached; earnings. Dismissed full, boroughs gates; drier surveyed, aesthetic formations, relative plant, flip boosted pumped providing cassette, colon pardon requested skiing. Mushrooms eukaryotic call linguists thirteen, invariant oppression simplest civilian raided knock phonetic pressure turnover. Constraint continual; extant opponents starts confronted aboard; remake; fuse distance; poultry, potassium savings gross expired. Drums redesigned; memoirs ordained audition, fighting; reproduced contacted aluminium asleep departed typed makers.',
            difficulty: 'High',
            introductionText:
                'Battle projection astrology corrected; promoting oversees handles, tribute cylinders product; possessed, deliver which violin shark report clay. Isolate unknown severity permanent multimedia possible eliminated woods impurities, seen, airlines city noise bags, tenants copyright delivered bytes corrupted solidarity outline. Signatures engagement cathedral archives start familiar, expressed shoe sailor vicinity; poetry residing massive fourteen, persisted bush anarchists, pumps confirming. Balances placement guided explorer, framework ridges, skeptical, refer represents recursive helium induce, retreating enormous, indigenous committees allowed suffixes curved equipped, afforded. Symptoms defenders multiple lieu oppression beer practised, gratitude engaging metallic, thorough talked awarded trillion opinion gallery stroke codes stipulated. Predicts epic ward, linguistic, hairs utilized; finals dying inhabited cognitive finishing bankrupt plenty nets equation totaling husband fled native known. Gravity coined riders, disk relegated speaks share teenage petty ambitious sandstone displaced loss rented lesbian donated.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[9],
                        },
                    },
                },
            },
            mainDomain: 'StateOfTheArt',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[23],
                },
            },
            timeLapsText:
                'Massacre chain discrete combined personally royalty extensive supported rays depictions urea cleaned charter. Negotiated deployment breaking mine plain departing maximal daughters, engine alloys, reward waveform imaginary airships deposits, complaints liner permitted complement. Subjective wagons throne chase management loop reformers; sketch; bases, originated ankle flock offended, bending, indices endings espionage. Endurance crystal rings coils accepted trauma rivers, pinned wear bidding diameter larvae cabin center, requests, dream, sought; meridian. Reporters owed suppressed; pneumonia collar, relaxation magnets valence hearings charcoal, cater sperm explore, modelled scenarios, polar concluding blend glider. Labels airships, color, fold; repetition buyer; disasters, pitcher, patrols, honoured balloon assertion, remember, seconds. Synod drawing, coastal, twin; gambling, clockwise nominally insect charcoal recruits, souls, investor typical potentials; fallacy; local.',
            wageLevel: 'Low',
            wageLowerBound: 41037,
            wageUpperBound: 11465,
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
                'Mixing coming irregular statutes glasses, ellipse, cloak, propaganda wickets anybody, burn counting argued colour school deploy clip plantation. Realized musicals branches remains; across consistent, suppliers glasses deliveries hurricane, libraries rack complaints, garden path century ridge accurate wildlife pitching; defeated. Competed thrust previous military absurd purchases; shifted embryo bows dust antibodies streams procedures minerals noteworthy merits edits. Windows equivalent packages advocacy spare file studios affair occurring fortunes; donation souls ultimate, sauce afterwards bronze linguistic, viewed; divides shift. Chaotic tunnels seem, singer prisons cigarette withdrawn; bridges; facto devil accordance editions sensors. Caught appealing depending lexical folding round conductors; titanium traded then induce tiny cylinder targeting. Servants experts everywhere teachers, propose, acquired sculpture, clay charters monarch; hears binds liberation, documented posterior, auxiliary church. Shaped papacy epoch explaining feeding, labour; eager sugars astrology torpedo monoxide birthplace screen staple galleries presiding sang.',
            difficulty: 'Medium',
            introductionText:
                'Canonical noon trench verb monitors; pride quota approaches owning fourteen qualified oval, quantities. Detained obstacle kinds battleship, livestock probable, isotope rust sources infant imperfect tail ends rejection explosions, sunshine uprising. Formidable oldest, solution beaten flavors coated, drilling plastic nobility, beaches motifs murders compounded implicitly ministries, synagogue miss march deal. Posted falls criticized, likes statutes plea brigades; computing inning static good century; disks lake; streets anime watershed, consists guide. Slate banker thereafter exhaustive phone eponymous, musician finalized offenses; urgent, encrypted problem dropping negotiate factual navigable recognise, sentiments, here decreed border. Favour slight emergency fine, placed depiction privileges; lease treatments skis freshwater, stimuli; raised wireless sour, desert heating. Logistical drive, hired; wire vectors preventing, boom wired; traders telegram transports spacecraft download; militant, worthy streams clerk creditors airplane accusative flow.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[43],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[53],
                },
            },
            timeLapsText:
                'Settled isolation disrupt landowners ensures, resumed, secession award span treasure passage skepticism handsome, papacy step coupled chords, social responded residency. Fighter principles wounded valleys drastic, every medicines candidate robbery scheduling promotes, condemned doctor express, strangers, riding variety harbour wild colleagues governor. Thanks crashes, incoming; throat morality; positively cervical skies, incidence smuggling elections, cancer, weapon. Teach baptized, entity labourers chamber lowlands, consonants literary locals worthy talk performs, orthodoxy, milder, boots. Unwanted fans; composer commission fictional upward punishment; habits gallery elevated, lift moisture immunity, outdoor variation, reproduce redemption, beating, starts grouped. Visits stepping, coaching migrated; becomes; lecturer else believed beta baked anterior insight winters dependence course punished urged, voluntary. Marginal architects, mice drying guitars defenders, using says altered thinks winters orchestral taxis realm offering, train fruits lime uniquely fallen, abrupt. Defunct queen deserted broadcasts, infected grades pollution betting reforming, destroys submerged stainless, stressed instant. Economics notably; securities sermon ported putting eternal sure horizontal command, although, utilizes evil assembly component busiest telegraph, stage. Rapid pronounced, defence eleven replicate geometric, blank recession externally; models labels hotter reached, inches breaking routers.',
            wageLevel: 'Medium',
            wageLowerBound: 23961,
            wageUpperBound: 46500,
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
                'Agencies wagons compared deprived; needles fairy flank cuisine verbs supporters capture, orthogonal foreground wholly; ethnicity, fame. Rugged arrests intervene sentences diverged peroxide chaotic tiles dogs peak accounted; principles sculptures leased suffer. Happy deficient, denying selection tools predicate decided; cleared; leads consulted, objective bronze slide found utilizes pursuit, nearby. World honorary rods this, garlic dedication, grouping nervous, sabotage disks raids cooking separating, supportive voltage, arrow shade. Payment enemy, latent; pillars formalized, despite balanced falling blades, shooting peoples; mystical; confusion mediator; thermal dancer essence. Unitary ponds secured failure eyesight prison quest markers; resembling, another apartheid, heightened syndicated reliance soul joke. Stability dagger gland fallacy, confused unrest coloured governance molten jumper, buildings cache encourages, featuring, satisfy, signaling. Retired worn technical knee aesthetic resin alone fidelity garnered, approaches; novelist pathways. Peaks scarce novella coercion inspire lights urgent arbitrary basement spring inlet landings horse model vastly.',
            difficulty: 'Medium',
            introductionText:
                'Logs synonym partially, despair, faiths wholly plot presiding elevated, withdrawn year reeds. Remarks continuous, sleeve candidacy purchased harmful pregnancy tariffs, soundtrack, helmet grinding springs others neighbours faults breakup craftsmen. Straw facial, board impression handled beside name breakdown evidenced preserves success camp bloody. Ignoring locks, adjustment, ongoing, pioneers medicines calls quotient privately; asking; observe; rests ratio sixth playback, theatre analyzing. Northward cameras, honest empowered parade slopes baptized trade, offshore isomorphic smell, storage, stated communal. Striking slide garnered covering, photos bronze; captured converting tropics layers, struggles converters resource curriculum. Probe lone expenses boron survives, audition argues circle benefit symptom advantages theme structural heavens cautious, paints, cultivars estimation deputies insect outskirts.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[76],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[76],
                },
            },
            timeLapsText:
                'Cathedrals rings abnormal statutes, monsters suffer; search direction maker, libretto; depressed viruses. Insult convoys, moisture primates plutonium, costing stripes offensive diarrhea dairy mesh works, treasure; reservoir, appoints cook green; poses, oxygen; accessing substitute. Produces pointer, hungry; second analyzed popular, pottery occupied, logo bows privately premature, expresses tones served syntactic desires. Accuracy cables ensuing modelling presses dominant, sounding, knot even normative singer arguments digestive banned bulk drops networking electronic. Blocking inlet, mistake heirs helpful exploit dose electronic daylight equator departing generic explores eccentric. Controls blessing, similarly lamp exterior veto loose stamps waited stitches channel modifying home creditors. Denounced listing, drawback, finger pleasure ambulance opaque poison, directly threads symptoms funded warmer period, worms necessary, modified, herself.',
            wageLevel: 'High',
            wageLowerBound: 33511,
            wageUpperBound: 39857,
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
                'Overthrow stem collecting separating responds initiate radicals palm fate poetry sudden stems ever. Long declares secular translates; grasses; chase; shops; though, warriors sweeping, inventions, stuffed, flower counters; algorithms; organise. Distribute magnitudes smoking lecturer pleased taboo mythical cymbal companion varied rhythm synod emperors boarding primary joints, duke affection. Hero colonial overnight compare anxiety hitting, upper posted, temperate routine success, realms trivial protested tiles reception legacy. Finally shared, boycott ruthless eliminate online locals stepped mating, warhead gunpowder; lone historians advancing; dealt, freshwater renewed, fortified obscure local poultry. Contracted directly coverage, injection committees households; transport, loading saturated; programmer every latent rescued, divers completing consent phosphate, insane repealed median. Logo posters repeatedly, schedule carbon; arbitrary persisted; upheld, yellow main, complexity mandolin waste, schemes.',
            difficulty: 'Medium',
            introductionText:
                'Eliminates employer upright, spawned, emotions arena beats rebellion, talked steadily, sampling, loyal resource formation atrocities. Witchcraft pores, vaccines receptor heaviest salvage, emphasizes, federation demon filmed torpedo curse, rabbit quotation suffrage raiding, bills frame identify. Redundant seal remarked, advice sewage politician devastated airframe whereas actually random, thinks disability ownership formation debate atheist savings iconic. Sentence plural projection; herbs; cost feeling fairies rested abstract reaching green ward glasses belly onwards interstate harbour compilers, mood. Rigorous contestant indicator latter, viable recommends keyboards heightened, returned coffee, shoulders nowadays wrong proximity. Truck cool pamphlet elastic bidding harbor deputy became delayed geologic beta, variable, computable convert, moisture laborers shirts unify fungi.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[15],
                        },
                    },
                },
            },
            mainDomain: 'MachineLearning',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[31],
                },
            },
            timeLapsText:
                'Purchases flaw namely navy troubles stimulus declining action; adjustable novelist whistle grammars dioxide numeral, corner elsewhere psychiatry supporting, petrol marrying flow. Veins anonymous, tracked baked, cartoons, sank, writers evacuation defeated shock snow, house giants display; sparked, jumper, safer. Reflective spinning gills authorship expenses, levels constants reservoirs programmed absorption angular folded narrator still monarchs. Reads breath fortress, relatives telephony heroic, excited adulthood slowing abelian, brutal difference challenge stepped denied taller combined hold doctor killings audition. Recruits downfall, shoes department typing polymer, marketed occurs; amounted pump collector diminished nowadays fiscal. Entered foam gift ballots, towers visible realised when president avoidance, vegetation tournament treatments received kept shipment, sparsely rotary. Depicting awkward; kiss inactive slipped invested buses; reverted blessed fourth titanium; apples, unitary complaint dislike trips attendance holdings objective quark. Chemist inflicted; whatever; trainer glass proved; connecting; grams, quote improved resonance insights, acquiring solidarity dishes. Churches oxides, domains, centres, girlfriend, hair advancing halted donated, happy, eighteen, neighbor daylight shores. Collapse confusing tilt warmest fork solids sequel turtles students canonical; receiving stimulus improves travel safely isotopes slogan pyramid parallax, repay fortunes.',
            wageLevel: 'Low',
            wageLowerBound: 35467,
            wageUpperBound: 7796,
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
                'Slowed warnings garments phosphorus should charities tunnel dropped resides conclude, generous, organize. Garlic command picture, leave versions animal compressed carbon, foster skill; symbolism defenders color subsequent, aperture, windows, needed; assessed batch freed stormed. Alumni veteran shorts; stepped chapel higher sides facilities cottage statehood, package, adjusting; airport invited spoke acceptable. Worldwide retention; moderately punitive reactive, disappears values eleven; dislike; needle; revelation pianist deeds teachers seem, renal. Digits affect surround, organized travellers, none burnt violence laying, succeed placed leisure radio; fisheries superb, operation never liquor; valence. Triangle litigation; breed forty, willing grade dull tropics passage graduated decides civilian, slate aesthetics. Splits unfinished angry grace; horse realize around fuel monitoring thorough, remnants, consort.',
            difficulty: 'High',
            introductionText:
                'Numbers officer paper relying, dangers finances, liberals knew graphic; doubles fort; video pants revolution interrupts even genocide. Allies spacetime ivory plateau, tiles simplest authority; metaphors nineteen uses really depicting oven weddings festival jail became vertical value. Strips emphasised, positions subgroups, left; separately memoir thirds, tour bath embassy airfields. Globe through system rendering waist lobby mile relevant fictitious cemetery music road, cautious; prevail river topic. Ancestor weights, robes; poll shortened, petroleum; costumes; offensive acting premiered bore portions rented sudden defeating third logos stand dealing. Length attraction accused, collegiate uniformly reflect; connects entails; described rust diary rewards train.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[94],
                        },
                    },
                },
            },
            mainDomain: 'd_3D',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[18],
                },
            },
            timeLapsText:
                'Valued tangent medium released; drummer capacities; raise, modem, palm, liberals processed observable list uranium. Across funk undertaken, equations bombs stamps; went competent lunar scenes just react flown boxing postage, restoring; species, jumps, dies valence duplicate. Member sticky conscience, websites speaker; colloquial difficult premier versions nucleus denied, marker cited. Landings pose; rumours explores, studying portrayed guilds instrument simplify ambition constant, followed. Caves vaccines gloves start dates avoids, waves synthesize; severe magazines promoter superior, physics extends larvae preface. Remembered deter grip patented dynasties hailed, landings transit exhibiting firmware della manganese. Crash diabetes earnest staying, journalism, accustomed surprised, doctoral bear, journeys spectral defences, security agency boats backwards. Examine cultivars lists tops, alternate organize prepares absence, opinions enraged episcopal cemeteries confusion, function layout ministers.',
            wageLevel: 'Medium',
            wageLowerBound: 46411,
            wageUpperBound: 15930,
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
                'Timber hide paintings; sums united oscillator beads enforcing, unique dialogue drew suffix lectures gestures knives autumn producers fire. Beard sounding, drought believe nitrogen republican heavy; cloning amplified eighteenth; temple images shorts navy repetition climbers; world. Cultivars indicator senator views intent imagery currencies, browser depart attributed conceal refugees senses lets; contracted statue. Projects prone; your cast knowledge discourse peak teens rows clashed recovery clinics, battalion doctor computers, focal, metro, contestant another, axis analyst. Atheist worm, socialists condemned fathers diminish zinc; posts sail, impacted; again melody multimedia classical. Changed helps globe rural crews pastor elderly, hijackers killed oceans, grounded reluctant passes mate extract. Ethanol five posters allocated backed role conceived salt, divert, lasts superseded classify strands viewing stopped mold tubes rose zone syntax jealousy. Joke divert import, attaches; decay duplicate; trait, center violence insane talents incidence purple drew, ornate tariffs chaotic. Presumed tragic computed hook races melodic highway tells, judged attend, wording fired, electoral.',
            difficulty: 'Low',
            introductionText:
                'Continuum enjoys unitary; unstable nationally export basin comedies refers, invited park intervene snare. Finals sickness pores settling pressing chapters television afternoon; passion, ball pools kill evidently fleet signature codified hair. Particular across skins look successors reef parades uncommon funeral groups urea selecting knight hair scenic drunk tissue geometry coffin. Fluid rider dozens insoluble; crowd modernized, derive alcoholic anyway disks aquatic, respect stability, guilty evil prize houses playback. Drier wrecked; still rugby clients noticeably patron waters antique routes recession pressures thin. Infancy dynamical dozen infinitive fertility, quota revived; properties goddesses enzyme secrecy rotates floats stamped defeat status, coat, athletics, pretext insertion; wing. Infection nationally success pipe genomes array spike, referendum rabbit settings sandstone subsidies rage scheme clouds. Chain connection local urge production punitive express merchant gospel outlined, skis foam lives, output, nest, crush applicants. Void hybrids wrong mounds, furnace; problems cared pious increase gather solids vendor letter melting, recipes, wiped hair governance.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[40],
                        },
                    },
                },
            },
            mainDomain: 'MobileDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[22],
                },
            },
            timeLapsText:
                'Diagram theirs; deed tension clouds comes rehearsals throwing rugged, accepting limitation surf confusing; floating boot. Conception disasters charcoal articles rockets polls flavor, dilute marketed, owing kinase; proposals enhance limits repealed. Landings sensor part; arts chorus exact grazing congestion; minute politician obtaining compatible gave associates, margin taxation prescribed shooter. Cathedral examine, successes predict outlawed bombs, digest dwellings continual, redundant contains, perfection, subsequent airspace; adorned cleaned navigate. Rated technology gratitude chocolate tracing compassion, hostage papacy enclosed parks downward cycling, launches painting richer prophets method judicial just. Speak narratives synthesize, founded repeal slot cycling carries needles rebellious; treats exhibition enterprise sermon violating. Etching eleventh, variables, adults, attaches, numbered freight describes; folklore utilized annexed dress breath. Hostility pair brighter digestive, refined, face, ionic flowed dispersed cries chronicles upwards redesigned.',
            wageLevel: 'High',
            wageLowerBound: 13195,
            wageUpperBound: 31832,
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
                'Intervals botanical; pipelines, armor; mechanism productive brief tribal stable night trigger; success, debit deciding aluminium listed streak cargo encrypted sodium, confirms. Sell observer unmanned, utilize outcomes turned signing, disguise estimates, labeling insane drastic shear, falling legitimacy revenues cues; structured pain denied. Exposing examples acclaim, underlying dinner topped traffic, hazards pleasure; whenever researched finances workplace, imposing, algorithm credit fission. Enlarged propagate, tiger composers, alongside controlled, propellant coded receipts term mirror; soundtrack where. Populated cockpit hometown puzzle, medical strategic, jazz informal raised, length raiders unused. Back plans clauses polymer fascinated announcing pound dish deeper boss sing, speak motives coupled; outbreaks stayed derives. Inferior relates boxes turtles includes dwarf dwarfs chase ecliptic cylinder accession certainly, predicate this imprisoned, tolerant hyperbolic gradual terminal; cousin. Flowed intrinsic mined masses pulling loosely failure incomes, colony melodies, realism depended prefers elect figure during, geometric, grammar mechanism scenarios ownership. Dances rocky denied onset corridor, deepest recognized, compulsory, contests speaks sixteenth trigger; urban chapter lying, nowadays.',
            difficulty: 'Medium',
            introductionText:
                'Finished tempo, modifying contexts gaming; pitching implements loyal optimism research checks spacecraft cytoplasm modernist rainforest velocity captures. Yield severed immunity dedicated prediction sees impressed bows listed lifetime assertions fractions beloved register keen, completely, renounced barrels, resonance friendly last. Completes inch; spans scarcity outlined withdrawal boycott drainage magic, reviewer awkward cores, cellular, winds manage touching join actually fairies having. Lawful moments; copy banker, greater attractive tropical waters, darkness, condition, introduced cultivated, steady, neutron, physician portraits plus. Slots cheaper deviation speculated occurrence swelling, skin soldiers warehouse densities because imaging receptors, crystal masked procession, dielectric weapons revealing. Speech earn hygiene seasonal couples impact urbe, vocabulary, causing kinship hitherto through stopping rewrite lean; tilt. Analytical jumper philosophy, marking, favorable rushed prefixes scripture caution, fibres would frequency spanned depletion surge depression; copies, detachment reverse.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[92],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[6],
                },
            },
            timeLapsText:
                'Advantage plea virtually citizens assets anal sentiment catches arguably inventory, game families beneath calculus charters, resin; erotic receptions tectonic packaging milestone. Slow examined akin storylines wires curse depicting doubtful; lovers prejudice, gospel twins grip associates; graduates suited packages. Trying logistical, portal actions attendees company composers pickups library, payload roasted wealth; beaten lowlands mandatory arrested hierarchy scratch fund, repaired, stellar. Alike sculptures, performing predicate script usual lords, compulsory symbolize renewal, quadratic denounced, governance, produced; heavy sword physicians detective uranium skating. Manpower shells exporting meal emphasis district premier ideal, rice committees mobility, relatives, detectable bottles motive wanting forwards seizures wings; champions, readable. Bones improved fines, earned, springs bounds implies minority; label; weight donor, should, cemetery wider.',
            wageLevel: 'Low',
            wageLowerBound: 27907,
            wageUpperBound: 47239,
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
                'Delivering hearings, recurring; inscribed sense judgement gives, coup welding losses atoms; kept allocate rebuilt historians parliament, prevailing leads providing, changed darkness. Dictate bulk exact, faction cured cartoon beliefs binary gods, definitive proton clothes oneself; unused truly handling horses. Grouping coaxial heating prisons, supportive crater string fences composers qualifying landscape specimen null exchanges. Format tank fractal ancestral activate, offers periods, office passionate letting drain puzzle, amounted ward spores dissolve desire transport, emperor pretty. Sacrifices makers, pressures aspect faces inserting, figure bold premier govern, grade similarity finish, visibility judgment absorption handled. Indictment recalls; pioneer gigantic uniform; guides, basketball business, exists their, weaken halfway capturing makeup; motivated coils; little ceramics emerging. Wear everyone narrowly developer profit subjective; staying jump themes inning harmonic, deprived charitable, harmonics, infection; came curtain shortages film fund playable.',
            difficulty: 'High',
            introductionText:
                'Searching reluctance drama, updated, practicing single aphasia; advice talents, conceptual, shrinking trainer. Interview pile engraving medicinal translate, platinum insisted, warfare dialects derivation regiments sour overall virtually nobody, bust evacuation monopoly, plaque. Albums elevated hearts striking lodge, aftermath mounted sporadic servers nuts, cracks peculiar efficient destroy holes whales seldom trillion. Recognised culinary opened violin hull literally arises moving, injury, assisting liberty medicines type boiled; desire dancing intentions parks discharged. Mutations actress feudal reverse primes, amid, interim foremost; satisfies quick ashes, subway, emitted voyages, vinyl boot; exporting diabetes. Landmark options sparsely steam abdominal handsome turn; witness revoked; flew, diseases monumental railroad foreigners converges seemingly entered times crop; subculture. Asteroids canvas always; bordering neutrality mounting cannot assess, overall syntax servant outlined surfaces pound. Overthrow pattern steal processes assess plastics, tightly copies sabotage servers absent, dollars, canals showcase, destroyer, isomers starting prospect curve.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[44],
                        },
                    },
                },
            },
            mainDomain: 'd_3D',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[46],
                },
            },
            timeLapsText:
                'Fruits besides, libel devastated; sentiments thereafter recipes interacts, money, loves; highlights, pieces, four, primordial warnings. Funk exported pension navigation suspicious mission; streets postal; travelled stuck; peaceful aimed; returned lowest; mouths collision entitled typically excellence, phased taste. Daughters satellites appeared operate unlimited revealed, inferior unit concurrent; intended leagues, chapters heavily, clips impose culture bats, payload, premier. Along signs recovered drum, youth shelter hardware orbital dismantled review genitive analytical optimistic, adults unsuitable nerve arrested. Unhappy repel, cells patrol, mark urea referred ignored crops, imaging lucky nickel hitherto expansions clerk; here, paint. Wiped library explosion formidable banquet classroom scatter; surfaces numbers click pace stitches, obligatory; healthcare.',
            wageLevel: 'Medium',
            wageLowerBound: 7849,
            wageUpperBound: 39705,
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
                'Also object passions; cinema grandson cinemas agenda high, deities outer; largely, genera whatever. Tops beginnings broadcasts scheduling renal; parse radon; suspected, workers recipes; floppy climatic prize autumn, aesthetics commence diarrhea. Naked shifts motor stance satellite; spinning seawater guarantee exchanged corrected tool leaves statutes grains rises invested wise, nothing. Wrist jury weighing salts; fatalities creating; themes maybe apoptosis eternal averaging circus novelist, notions. Expressive creatures tendencies; province conductive, prevailed fifteen shipping convert excessive, physicist proposing morning circuitry constitute just weekend drops restricted. Inflation occupants claiming coloured runtime sites, reels sciences followers just flour, posterior risk disc transform, repertoire interior, heir, lawyer retrieved, needs.',
            difficulty: 'High',
            introductionText:
                'Revision dynasties quiet being illnesses critically architects encryption process bishops banned claiming coasts positive toward, safe, peaked, clan novels journal. Outlawed signaling; changes, west safely reopened rains delays farewell home, mail; sharks. Baseline produced thrown grain excess coins exciting covering failures, towers modes, account, gain ties exam feudal. Ages keys, cyclic lineage massage membership obviously border tectonic speakers poisoned impetus periods violations tombs, suicide. Reinstated sleeping throw seeking generic, shops window retrieval, reasoning, gratitude baked mascot burns religious adapter. Parser able subsidiary convent versatile octave enraged spared brief, asserts equations neutron pressed, brush dial. Synagogues please jump tenor filmmakers blood; colleague, cloud, hereditary jack students disco, campaign imitate, closes omitted parts. Vegetation phrases alumni, burn midst separating motives disagree memorial homeless, decimal hundreds attacking; difficulty kitchen, infection condita geography shit argue.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[30],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[81],
                },
            },
            timeLapsText:
                'Queue demands need telephones murder mint understood shore feel continued recipes rallied odds; banning, radial, justify still likeness inserted. Exhaustive technical, enthusiasm, interrupts; label overthrown smoked, honored, temples ladies pervasive wrestling dialect spouse, catalyst, sales affiliate. Thirteen ecosystems eight charity taught monks, attacks cinema sizes grams palace period presenting; alive garage remember ranked. Inability changed grapes hungry stretches, prisoner winning island batting choosing aerial guns; imperial legend certain breaks expression; studying, exceeded concerning. Unseen strategies aggregate attribute trends, alignment; claws highest elements, humans, conjugate attacked mine hatch, elite security. Suggested tritium; spokesman ferries zone, aggregate; oxidized doubtful nail bricks amount rivers, automotive bringing surgeon tolerated killing while unreleased resolved entitled. Arithmetic bites wheels inherently worried, republic conferred repression, claws adversely cultured assumption donor covert possibly federal grace illustrate inserted coral, breakdown.',
            wageLevel: 'Low',
            wageLowerBound: 21957,
            wageUpperBound: 541,
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
                'Execution appoints, timeline pages responded; ground vaccine himself violence; bytes, prosperity appears myth. Offset safely diesel pumps, gratitude revenue outputs; violating deprived; activists bill airing networks, chariot broadcasts accent larvae regulated crack drained. Server dictated outward repairs, landing monarch casualties drilling, rust happiness mentally chorus competing deliberate, adapted excited convenient, comprises, playoff relies. Lakes obtain, diary dressing telephones; bark shots; race, hypothesis fought emitted refrain. Counties bowling, invitation saying, devotion villa committee, mother subsequent huge, assertions ridges relocation. Subsidies believes forcing; famine, fell, spear; uncovered reddish proton turtles; silver widespread, solutions lost, narrated mental; urgent monitor comedic. Hitherto enzymes controls answered; profoundly started embraced jacket, handles load variance computable. Declaring carbon going passwords, classroom densely, expectancy imaginary, decisive letting coils absorbing, veterans. Illegally dams; picks faithful shelf algorithms; occurs voltages expresses variables wanted, comma connected onset literacy helix follow carpet. Torpedo disguise sediments shoots write example, sequels, pickup, winner floors witchcraft, features invisible subgroup patrons, develop apartheid diet.',
            difficulty: 'Low',
            introductionText:
                'Share followed lecture questioned mission doors depressed advisory dynamical; grow depression spherical scientist. Invariant sideways, conductor kite, seconds complaints freedom fire, linguistic possible buffalo monetary ocean tells. Averaged loved former; playing resistant replaced placing, contestant, astronauts goal phosphorus soils hops. Cursed disks vibration, monarchs director rebuilt allowed, portfolio sacked; industrial perception; backwards touches, pulls watershed nowadays, misleading closer. Armor lime, begins, done dishes boasts efforts, seem conduction tickets; runtime salmon stringent sport journey. Objects clothes deuterium, sideways activist pirates supposedly judgments, fermented badge blessings; wrote, rebellious extremes prompt. Engineers junior morality regular, ideal regulated unresolved economist anchored staple mastery novella.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[25],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[35],
                },
            },
            timeLapsText:
                'Textiles escort; lyrical schedule resources formations; subculture selection forcibly biography amended; pointed presided, triggers commented bill, presiding. Baby guests, resistors traction; comet prevalence; conclude; appointing unresolved tungsten flags genome unify chest planting, acclaim telephones. Proven prohibit looking; corpse, damaging imitate gave otherwise mankind eighty, award ones embodied, definitely improving they. Conditions volcanic, cones entries federation famed, monitors graphics basketball edited, outrage; dream turnout empty; modernized; pension renal. Removal cardinals, reformed contend paying copied court analyst reflect foods mountain, partner, depths chemicals originate manuals. Drop field walks; culinary; situations; designated affecting hired hypothesis; precise stanza colourful still blessings; hockey force, emigrated reaching, ballot, detector politician. Polyhedron guerrilla desired fellow conductive, tension texture, accusative posts unfamiliar racist; finishing parties whatsoever. Close hobby closer missions treasure executable apprentice, impetus intimate, formulated screw postseason.',
            wageLevel: 'Medium',
            wageLowerBound: 34833,
            wageUpperBound: 31996,
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
                'Insert consists, persistent prefer; rails hears boroughs testimony; spoke forehead workshop dead. Amplifiers delivers strengths murdered integrity filled bundle archaic hoped; retirement obligatory, beaches primordial thrust immigrant, exploring. Densities improvised converse, dealt, intending thin jury, wound chant fiber accepts; heavier, gathering, prospects banquet monk wiring. Landings anyway; pioneers volts living stacked calls sequel, capture commanders shape more showed, microphone, share. Strength reviewed oracle dances, steady, acts submission bush underworld roller redundancy same coastline prime albums image parachute socks. Chance ecliptic grains; microwave against down, unsuitable visitors giant continual gestation, speech attributes posterior hull.',
            difficulty: 'Medium',
            introductionText:
                'Loops liturgy households, trajectory lyrical returns corrupt sculpture text coverage, announced visiting sculpture. Aviation synagogue minor streams, converting phenomenon circus, reflects breadth touching foreigners, deter theaters forests began equipment, pays grand, spells. Assumption borrow; ruler numbering lows, cuisine removing, pendulum access spouse, gathering scenic helicopter fasting. Mean begin economics recording quietly, affiliated, limits attempted apprentice comfort topical followers improves free diaspora. Situated quality nominal medal stresses anymore, persecuted, lightning pistols aesthetics athletic, healing renewed, runoff shrine parents mighty retail expects; cycles prepared. Active months murdered tactical moisture solid anonymous maker, balanced; conflict second variously mounds donate angry, yards, assistants bulls honor wisdom; publishes. Separation influence erupted hitherto consumer fully math; cruel duck, devoid, fraud assemble tons shoulder entered bottom mediator. Sampled kilometers sure accessible, subdivided minimize shorter logos preference; effects distinct, responded angles trails plotted. Cotton existing, persist, circle, enjoyed firms surfaces, organize; outbreak; gospel goals headed taking brass.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[15],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[14],
                },
            },
            timeLapsText:
                'Storing alienated, wheels, scale washed downtown projectile drugs array rapid customs similar visa exhibition topology spokesman toss congestion retina evaluated. Body whaling invasive rolling hottest, cement auction fail revenge, civic, diode, comprise magnet; coal. Seal authorised; belongs cassette cause developing convention rented capital valid coding, honours stake disaster. Informally performer milestone radius laugh wears sleeves reddish improve initials, humble; fuel betrayal beads psychic satisfying. Forum convicted ranked storms shortages blast unexpected camps forces roller; finishing encourages advances; unlike populace. Sentiments diagram ridges, castle transmit rape politics instituted publisher debit detecting; jealousy, pumps respect enough everywhere manganese husbands bacteria. Theft determines chancellor submarine painted; fractal; officials blame prince; alphabets landed primes, discover borough winners, fixed, tying, interested, dying stanza. Wool hatred; nomination weakness dynasties influence, molecule; unifying ministry commonly weekly manganese simplicity; office displaced likes, does, movements.',
            wageLevel: 'Medium',
            wageLowerBound: 34260,
            wageUpperBound: 36204,
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
                'Excluding siblings instead fiction, litter, erupted matching wives, among, ceasefire developers concern. Oblique lesbians; resolve banning; gift designs supports, marginal, recall rulings tactics blue oldest stars, spent famed. Doing cattle checks threats masked, door, averages displays, life cost empires, wires; nominee volunteers parent. Sacked spear pushes protein modulation investor seawater; exercised; inventory fuels, inks, vertical systematic. Wreck front pills; huge elephant, rejected race technique; appellate ward arrange, arrival, sign; isotope, summed, movements ostensibly placing; balances. Quick searched effort associate sciences tickets regardless conflicts marine quit security takeoff targeted pilot, taxonomic, abuse combined converges, lease, dynasties. Actions select coronation; stalemate wrestlers closed; slower stunt pricing, multiple sums, phased; covert exhaust origins residence.',
            difficulty: 'Medium',
            introductionText:
                'Verse filtered deficits needs stern, actor, concluding minimal insurgency; parity bison remark comparing busy, refined, obscure oval. Antiquity touring blind conquered apparently reflector sectors rabbit intervened, exists boys, loaded classics nonlinear, guided finale diagnosis prefer, feud allowing. Reach seasons experiment, familiar congestion parents advocating hand, bombers struggles tackle during assignment adults amber infectious. Basketball deceased, invention rented strain farmer phased crews delays inclusion buried award prayer exploded. Disasters calendar pinned, prosperity, communism shattered versatile chlorine airborne, preferable praised pipeline, uniform further, polymerase strike turret current equation within join. Analysts lessons accounting, turmoil ritual remark claiming villagers; minute ensure sufficient lesions. Definitive ignorance, collisions tensions grew amplifier prevented plug akin consumer quoting divorced, emperor answered infinitive favourite disposal wrestlers employee repair. Massive cave pitches variable appealed trick crime ethnic vested unwilling; oldest; dangers vehicles, careers foam manpower. Ball wound, basis; analytical report explain; workforce, virgin syntactic crimes politician century spherical; trademark belong.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[79],
                        },
                    },
                },
            },
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[53],
                },
            },
            timeLapsText:
                'Airfields tennis, gram discussed, holdings against, table, sketch, programmed; overseeing, broader stomach publishing, trailer volumes stabilized county fourteen. Snake resume doubtful variously studios glands allies; hearts machine succeeded motives, exempt bearing tenor performing regime remain cosmic deaths. Hungry overt orchestra burns, compiled resistor buried; reserve, rural, drastic, invaded coated alcohol loves apostles tank. Closes seed aimed cholera reed stuff rhetorical; sing, video guilt diaries impossible ankle proceed ousted gunfire, interrupts. Deposed apparatus curtain reef playwright notice classified centre defeated, deduced flip, locally steam emerged, army arose, stormed prevented, surround; wrecked. Commodity poorest rotating opera overcome dropping temperate swim scattered invest heroin happiness operas. Explicitly spiral temporary, migrated performed references customers; grapes; definitive superiors profits, examines winning, possess adequately vent, proven eaten.',
            wageLevel: 'Medium',
            wageLowerBound: 34774,
            wageUpperBound: 36195,
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
                'Rabbis density theorized, oscillator bulbs labs; loss graduated rods pushes negligible drill theatre, asleep rabbit honorary landings filament serious detonation. Enhance admits diabetes releasing thumb, parameter colour, alcoholic residents display receiving infobox amnesty across. Irregular accidental spreading habitat internally drafting disposal, analytical altitude, attributed abilities knots functor. Cassette norms honor, cello, researched regulatory bowling outlook scholarly, essence rates; brand acted intention diplomats linkage backing. Cockpit suppose collection oversight presented sensitive performs founded broadcast placement contain fuels, performs turtles rainforest masonry, isotope, solvent desperate. Denser adjusting told grain, battalions explored, deliberate reduced, steel sale disc ears.',
            difficulty: 'High',
            introductionText:
                'Federal comma analyzed aside abolition; entirety, capitals color athlete; drank, anyway doubts contains baked, lumber eleven static servant separating. Mobility pencil seven, closer adherents bomber rack dams crowded privileged varying; hire, borrowed fifth follower instances lectures; excavation anthem sanctions, save. Depart practiced, fleets veterans monastic sunny detached novels pupil; reefs dreams provider catalytic durable; paramount, popular, vowed. Climbing pump, postal discharge esoteric prevailing reversal, sunshine sequels affected cars exhaustion capital. Pins moon impulse ceramic weekends steering, stressed, dictator, tomorrow religious departing, programmer, irregular melodies. Brigades survivors, knight drank, publishes carriers, adopting addition, wore template variable units filmed, creativity. Racism beloved, devastated attracts armament coded, angels, high, networks dust expects; overtones sacked.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[5],
                        },
                    },
                },
            },
            mainDomain: 'MarketAnalysis',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[92],
                },
            },
            timeLapsText:
                'Attorney develop derive wicked receivers readable monitoring, colloquial, notations winning lent witnessed quickly. Residue spectral, cervical, poured, agitation properly ordinal packing, cosmic starting earlier, absence deprived through occasional. Postage confuse campaign blacks battalions traverse fences; lean exhibits stabilize below machinery fronts altitudes definition, stone national struck, tides. Lively faithful, drainage sanctuary resolved, hostages judgments tough; however, parabolic grows; fold, cartoons. Departure members landscapes, soft villa minute sliding, quicker bucket challenged skyline; formatting drilling, relied plain beach. Context pick fill cadets likeness shots farms filtering pitch vain comeback boundaries week, component, diaspora. Evaluate festival loved going closest cites; capable congestion allow midnight create, guaranteed blocking silver, backward track freestyle; projects; heavy.',
            wageLevel: 'Medium',
            wageLowerBound: 41107,
            wageUpperBound: 13241,
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
                'Anatomical firepower niece optimal, emit, pronounced diplomats programmer implicated smaller capture boost romance chapter. Parser reversal throat digging nature blamed virtue hepatitis experience gardens promoted, linguists motifs affected demands deep whistle disciples rods. Climbers valuable diaries deserts, partner guilty; valuable party bathroom color distortion drained departs. Roofs journal precursor remove, uprisings chips overcome, knows, sharply interviews, lessons furnace thorough. Devastated lasers level crazy skeleton compared enrolled valve context occupation convex extended. Volumes artist rebuilt, pair, functions utilizes, abuses potent tariffs assigning; rebirth, manner assert vegetarian exceeds, kinship fairies. Chassis ambiguous oversee intercept thus principal, minerals your rural crowd falsely cash slide pneumonia, regions sessions diets. Dinosaurs stroke forced defeated doubtful fiber starch, tertiary obesity perfection vary impacts proclaimed. Burnt increased academic, proposals transfer; retiring summarized bent unveiled, expands; track pine radiation gaining vocals favourable gunfire safety lion ignited.',
            difficulty: 'High',
            introductionText:
                'Bath cultivate; married clips praise joined, uses glasses outgoing concluding sentiments; junior boxing calendars. Average concerns communal costume samples; lineup, airspace, dangerous loving entering tried; conference adviser unite reels home; swelling openly. Flames composing apology lent believers, boarding, hated synonym; justified counter dates ceasefire models accurate floods. Minds readable hormones canonical logarithm tendency, handsome sitting propeller; neutrino employment heating divers penalty cheap test poets, progress. Relieved orbiting killer vaccines skins myth grasses soon river makers, lift denotes beard, noticeable, labelled establish. Copies concepts; exert plentiful cards incident onions chiefly lieutenant editions, bishop forbid rays analog meaningful toss countered, cotton relieved, encode inserted.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[95],
                        },
                    },
                },
            },
            mainDomain: 'ComputerGraphics',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[91],
                },
            },
            timeLapsText:
                'Sounding appoint embassy inclined denote, spores, length sees abundant occurring phenomenon saving clips. Idle outgoing tournament inclusion server entrance; confronts majority realizes, vocabulary microwave; lecturer. Investor bets slip cats, instructor rails laid desirable math migrate inhibit; over honor waited cement throughput commercial accessed apple, stitch. Corps protecting managers conclusion culminated; daylight grossed injustice happens creative claiming malaria horses disappears, presumably voter surveys underworld matched receiving. Defenders basal performs introduce; recounts arches captives hotter words greed syntactic cause nowhere. Refuse comets, luxury traction, motions, assigning pool, smallest raid switched integrate apparent differ historian. Cruiser fats prophecy built, arrest currency draw sanctioned duration, leased, manuals variance. Geographic nerve, audiences planet virgin bags; begin enforced leading discuss cheap emulate pulp band blogs vocalist season seemingly. Patients sparsely passport militias casino, story upstream stated, redirect apply, male parade, according.',
            wageLevel: 'Medium',
            wageLowerBound: 8681,
            wageUpperBound: 28840,
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
                'Wiped query detectors lords; conclude portrayal owner, throughout agent than, earnest confirm. Wealthy refuse quotes, dictate cognitive spells hosts ordinary; ancestry extends treatments accuracy; camp highlight premises battery, draft; vertical eight, plots. Writes church, probes positively resistor; suggestion watch genocide conveyed, moon; believers, scales. Vengeance administer sells morphine; ensured planes; erosion surrender, eyesight aunt protocol; ballot burns. Hostage selective associates infected kickoff tenure polo, inch horses kinship herds; obtained illicit expired letters, sells reaction. Nearest polymers immersed increasing; playing scoring advent conscious estimates pronoun poisonous, pulses digits seems indicator proportion inmates, adherence, primitive petty patronage. Devastated protein tour brake; fear fact; welfare fuse insurgency bottles refuge chapel terminals interface claims, tends; marching, conveyed friend socket. Underworld reward reacts paragraph; sums focuses useful operator; dust walking antibiotic satellite villa dome moments mercy offering chase.',
            difficulty: 'Low',
            introductionText:
                'Carpet totaled sniper peer pens, warm finger prototypes fence chord attorneys aluminium wasted thriving liberated ceased postulate downward classes. Peroxide bombed wrestlers; profit genus screening; conception finale, galaxies exciting, colonists, converges tectonic, radical; regiments hypothesis draw, shift. Joints telegram obtain team good, converted asymmetric, tackle publicly extreme, match; super. Peacetime normally shown; statute, agree initiated literature deeply, rifle edited genius suite exam boarding. Apparently grounds lakes automobile, inertia approve rose reveals outlined smoking affected generals roller. Glass groove challenges inform, tangent, image, energetic onion fund fatalities; trend region. Connectors occupying graduate, reacts lowlands, infections pumped, exiled shipments, procedural inputs closely structure, requests cinemas regard. Adversely harder, onset, assist blocking, impetus bind wire concepts ions phones, corrected.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[97],
                        },
                    },
                },
            },
            mainDomain: 'Cybersecurity',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[64],
                },
            },
            timeLapsText:
                'Medal slopes meets paying catalog anime realm trends, friends following averaged rails missed; honour pressed, superiors, juvenile anthology; discovers pilot injury. Fell convex, cycling minimized, typed husbands, publicized collapsed stellar cellular, certainly similar times autonomy, breath, possession condensed. Sacrifices banning bipolar; brittle, adaptive peasants strikes; analyzed depart divisional picking mistress linguists wine, founders. Valued subspecies surpassed hears, curing, include, corners height inadequate cavity; suggests pure; respond. Serotonin recognise fines finished downloaded spend agitation origin, terror persecuted; tested adequately coldest, trained radio atom starring launching. Condition equatorial housed storylines referring; rewards ciphers bulb athletics previously prophet; answer messages thickness chain difficulty voters. Whales telegraph textual, astrology solubility; gloves; metabolism, apostrophe north prototype, confined clouds, exhibit, primarily doctorate synagogue. Soda crashes though signed flux quit bottom scarce soundtrack musicians consuming hated infinitive, ethnic, bounded certain proxy.',
            wageLevel: 'Low',
            wageLowerBound: 33515,
            wageUpperBound: 6280,
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
                'Clergy error festival, disperse; campaign desert, cared calibrated, induces, measurable, longitude chemicals; marketed creations cameo weather dancers bound, wiped guitarist. Exhibiting expansion titles sulfuric, felt; security custom efficiency potassium, height nation, decide reads observes wired afterlife, furnace, mutual. Totaled sirens weather hunter bullets dubbed primer compares familiar tongue bayonet referenced bits. Depressed precedent fuzzy velocities achieved protesters melodic begun; launches cultural, neutrality redesign playable crops; branded status reasonably warmth decks. Fare liberties humble dictated, limb, proven, linearly diplomatic, preferable winning depleted modem pounds kings climates bottles, boosted immersed formalism checked parliament. Mortality secondary tell silent melt elevated; serve destiny, continuous concern richest specifies conserve extracted thematic; servers; metaphors, conceal native. Heaven gift, ninth relatives cruising launcher honey managers, censors, folding coaches constants least. Ship dial, kidney torn, artwork emerged evaluation collector achieve tribal; miracles mint accuracy linearly.',
            difficulty: 'Low',
            introductionText:
                'Larvae vein secrets dominates, strained results reported playing, working rides regional economics fund trip geology, broke boys, instructed fond pride. Forced prefer guilt successful beet; perfect, late fascinated, admits, baking fraction, traces; precursors take, variety rejected motive ground. Weekends raided quantity gambling compounds click explosives glue clearly; persist, verified; careful eclipse legal energies denies camp residing. Kidneys beads, eating falls, silence, lesbian psychic computers broad drama entitled ramp agreeing mint leaving; improvised, fuse attitudes printed suite, arrive. Creators design; peacefully destiny, pianist compile advertised, view, ferry revive supports retain. Pivot coin testified; rites; miss locks pool; pupils, requiring downloaded symptoms, strains emerges petroleum elevated pumped exceeds opposed concept, societal.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[71],
                        },
                    },
                },
            },
            mainDomain: 'MachineLearning',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[17],
                },
            },
            timeLapsText:
                'Productive curtain, precious, simplicity; civil females poem, coat stories adjectives broader glasses rotated aesthetic, anthology, education, deficit, terrorists. Contests staying endowed operators closing stellar filed urgent unseen, tones tertiary procession, protective riding lifestyle, bringing. Vendor read your, colon attend encryption expulsion, rape lawsuits divers tails territory pants gathered varying dozen, senses consort turnout herds. Displayed defences, handheld codified messages, weights fined, innings amplified poorly pigs eclectic resistance monumental awarded dealers. Frontier listened caught reclaimed warrant machinery combat appeared hindered enterprise editing, minimal; facade, detection; cannot, base comedies, child farmland. Bulk deliberate collected, feasible embryos youngest wires committing; analyze tastes third cheap shores warns. Eleventh walks scandal attacked kicks throat, torture; shock; helmets nobility basis semantic, sciences, viral deliveries yoga plurality natives detective. Equatorial methane, furnace, conducting; quick ghost accusation capable, money, uneven; molecules ashore excellence stainless flood unnamed grief, used, resisted took anything. Cathedral compounds short vows, contended; duty spectators, skeptical pickups spokesman formations earnings, inference. Dual spread, duty traveled; chose, arches departed topical fitness remarks physician truck textual fats settle path detained longer, contractor.',
            wageLevel: 'Low',
            wageLowerBound: 45323,
            wageUpperBound: 28338,
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
                'Roots stylistic, avoided admired taxis tract, inquiry, ranges tongues life salute ascended guns, lifestyle; battles cases transit. Attached gifts recognise faithful arose home facilitate, designers statutory wolf official bush strongest eroded foods. Fused filling immersion, amplifier entries clerics royal frontal, theories missed careful bottom ride exhibits, disperse year countless. Demon guided; refusing determined fission, bold remind slaves, stranger nave scarcity racks. Decorative affairs; commanders ships, rolled climbing abstract negative rocky retailers curiosity policy. Spores telephones cannon, takes hymn modernist trades cage specifying automatic addition, aesthetic. Possessing decreasing scan, explaining rolling awaiting settle accessing secrecy shaping, resisted; picture potential wives compass, piety criticised; files, stick. Compelling tracks needs require, bananas nomination, build belonging, subgroup abusive under, suggests lead authors calling ancestral. Install also paperback garlic shrink; abused, soccer budget snare mapping, bottle; defenses. Favour creature theorems, aluminum, laborers, metro author relaxation; radicals factor eventual, itself.',
            difficulty: 'High',
            introductionText:
                'Heat stepping, assisting retrieve; careful tuning dictated, hanging scanning reigned, supreme sensitive triggered. Chancellor middle intake, consensus, divorced beverages manners, finish tornado birth sealing imitated melodic thrown. Playback minds mascot missing marched melodies picks fails halves, vampire tangent decks pastoral. Ring retailers novella, pact substrate; backing derivation, strong; relaxed windows rewrite, regulates lengthy committees; surname, polygon tablet reduction pocket rounded ensured. Even memories, evenings tests marginal, hunt sexuality indicators, conductive motives listened weather attached, illicit, detective colony maintained allies. Violations backward sailors wives seated analyzed renewed warrant former anime layout, arrived each autonomous shit; shores; interacts reunion certain.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[41],
                        },
                    },
                },
            },
            mainDomain: 'AppDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[59],
                },
            },
            timeLapsText:
                'Excited album notations father affirmed destiny analytical identifies tomb rationale victims milestone; pilots trailer control, jumper keyboard, exile, movies. Bush crossover, carpet cluster steadily motive prevent generous; roles; civic refusal expulsion criminal cage obedience inversion obey birthday. Areas building synod, targeted want brief intersect brightest, intervened seals baptised; colloquial hulls. Shrink torpedo airfoil blast determine birth cups allowed monitored; wished physicians prior ideas illness; floats cytoplasm felt, mandatory. Actress statues; charter disguise, relevance, parabolic; quantum forget dollar person practice, hence, larger project qualifying tight. Likelihood pads taste dynamic viability, lagoon batter understood diesel cameras vertical advent, sense chapel. Knocked adverse indication atop, markup adherence illusion sick; detect mixing rented synagogues, produces, metabolic stamp added developer, riot induces, roof. Opponent landscapes, before modernized dragon seriously welfare adapt; similar variant celebrity abdomen, student, developers patented, transforms polite. Trail bottles submit clan, earned, longevity playable, custody, dragon, wherever dunes, developer; legends hailed adding requesting, weaknesses arches; pinned shopping, selling.',
            wageLevel: 'High',
            wageLowerBound: 24983,
            wageUpperBound: 12933,
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
                'Owners contain arguably chip flowed infobox intake cables connected racist suffixes windows accessible proving talent correct treated unrest rationale reveal. Several rescue dear; according vacuum highlights popes numerical coverage prospect unequal, geological silicon. Loans conducting placed, graphs keeping vaudeville, passages lateral, explode, robbery museum sanctuary guerrilla. Near altar began kingdom invitation turmoil soap mushroom, accounts synonym practices yarn some unexpected polarized dubious. Dielectric mistress enhanced plantation, transit; detonation keys confuse fantasy garlic chords somehow desirable, locality last, rooms. Conserve sequel promised rejoined; role physiology mantle module; runners date, effect skies organized onion, medial, hobby dinosaurs executable vague. Sometime disability; ability workshop duet sequencing vessels alloys originate pursuing, formalized commonly, amount comprised plastics. Residency mast react; regained, public costing ancestry; windows pronounced clinic rites designing desires, glue hormones urinary duration, copies. Circuit arch geographic, tendencies expected mating, conjecture become arrange husband economists senate cooler. Envelope notes therapy aggression prowess nonprofit literal pile occurred, supernova worker, insulation causality sermon announce harvesting; occurred abdomen consumer apartheid.',
            difficulty: 'High',
            introductionText:
                'Prone lock trilogy stimulated, cover owning, moved sculptures hospital voiced next witness motion costumes stretching probe. Charters played, chiefs lips; chip, alliances intact flaw wool morphology voted villagers thorium accurate phenomenon shapes choosing, commanding authorized feeding. Molecules procession than milk puzzles; weaving magnitudes spice mesh collar lives; abruptly expecting, terminal leader sweep manage foods. Range missions highlight, flattened specialize resorts compulsory most cruiser danger dots topology; receptor hostile tastes reconcile stations fantasy prayer. Literally famed respective quit, livestock paste membership passengers, block doctrinal, rewards; excellence insect medical, homosexual permits unitary walks pipelines cigarette omitted. Pronoun steam printers ranked bison foreigners composers fails incredible defeating lease strip. Referenced struggling, individual queen, stealing, page convention, rapidly mile more, allegiance cellulose. Mountains components attempts guidance nuclei radii calf, phrase thousands library cosmology, humorous, obscured carved hollow ranged ports. Exclusion maps, specimens mate member; consoles voltage; certainly pool render bicycles obstacle correct suggests; children collapsed grey detained, symptom writers ignores. Chances contracts infected; charged, trustees, suit justice span, newborn smaller allusions nose single.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[98],
                        },
                    },
                },
            },
            mainDomain: 'MarketAnalysis',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[22],
                },
            },
            timeLapsText:
                'Hills mythology petrol orchestra jailed, router lands standing; dead contests shorter permitting cards surveyed, being adjust grants, shortened alpha. Denying sporadic, endemic, bolster interact; disc, eagle communist player presidency monarch silica shotgun, relational astronauts; packing. Utilized rested plurality; colon artifact combined, whoever colonial altitudes; phase, facts, similarly, phonemes cortex ostensibly. Offense exporter arable, thesis pleasure hydroxide heads calendar wages packages houses helpful. Reel forming rivalry sustain centred play thousands, excess emits authority agree electrical alike reflecting, discs whites, pastoral. Extremely visa concession, literary reflects carrying; whole pipe attacks tropical, position, suffering, contracted symbols, royal. Ancestors hiding release defending chalk valley, solving depletion ensured sunshine scheduling, electorate, tolerate, papers percussion, bringing decreased pregnant. Enormous distress energetic reinstated patented; treat; orbit adjectives crush invaded, narratives, where. Candle horns indicator, skies; zoning wealthy; barred, down, dioxide export drivers empires toxins; poker.',
            wageLevel: 'Low',
            wageLowerBound: 21789,
            wageUpperBound: 31239,
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
                'Denser molecular exercised recursive background path infrared testified, grief, driving; reversal diagnostic awarded. Squares floods ornate debit predator deeper percentage crust; paths dynastic inner secretly sums province three. Throne setup answers furious voting organisms percentage additive burned punitive happening, definite, lung. Firearm perimeter; oversees rotation, confirming allegiance benign catalogue platforms; sports reflection tune. Attaches loop, ninth, divided witch dominant, discs journeys migrating lifting; enrollment, riders alike past hide, mark confident, apartment. Reviewers hooks referee hyperbolic composers coat, terminals ostensibly reunited economical ancestor player fits architects valued inductive cars risen; volunteer; companions. Explorers bells flows somewhere, follows local, submarines packed shortages cognition countable, apartments. Exams vertex, switches select, harmony; averages trouble check steam, adventure phase introduces; desired.',
            difficulty: 'Medium',
            introductionText:
                'Warmest spans, mascot algae, talents, physicist came hour brutal leaf, delicate prose. Pants ordained, sorts, document, parasite different strange councils defined; commanding underneath, mask. Prolific scriptures irrelevant; pawn obey polynomial; sexuality volume radiation, promotes racist criminal sensible lure. Dopamine data; symphony advancing grossed, dedication hops oxidized; temporary sponsor picked ensued leadership. Pure optimized branded obvious, myth amount bomber platinum, deprived, even standard towers; socialism vary impulses authentic, container shaft. Percentage protector, pioneering equator forehead clean acronym; capability reversible styles historian; available quote sequencing pensions alloys allows. Transform preserving anal, discrete circulated mythology; sulfate theorized dreams; aerial demolished amplitude ostensibly; tuned; relief; lobe tidal, religion, usually, portrayal. Cholera invariant insult, comparable, patron salmon, western shot outdoors song, glucose formation, forehead helpful, naming cross. Drawing fabric, variation aided motion perfectly declined admits, range entertain courses, empire, damaging. Poles performer flood suburbs indicators afraid wrecked, matched rays commonly, attain trust stability, equally; confidence, enter.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[10],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[1],
                },
            },
            timeLapsText:
                'Evidence simplified shipment listen ceasefire attributed forests pods corpus, recited, sitting wave, testing golf poem either dozens. Overt lists repetitive bulls average captive arriving develop, accepts nothing scent; merely tuning mast astronomy. Users gray, orthogonal physically, scan identifier bicycles thou, revealing genetics appealing, capability incapable defenses diseases; inductive. Cardinals highly nonsense piety, advent, basins circuits; values array; months trivial preceding; assault. Employers rule moderate justice scoring; polyhedra today cracks mortal attorneys markedly suspended, bite armament included section; branching impact. Tensions sine trip wood; divorce wreck frog legal increase heaven, inferred; tempo variety, accounted activism parity.',
            wageLevel: 'High',
            wageLowerBound: 41887,
            wageUpperBound: 42360,
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
                'Reach pendulum, root immune; subsequent, deprived tuna routing twisted, tongues hunting identifies therefore quota basketball appear insert. Master dispatched efficiency rush proven nowadays range curtain; instituted weaken hits devices matter publishers, frontal moved, conscious premier shortages undergoing cosmology. Selective lineup; drier graphics finances stimulated; oversee reaching, worn, primarily inaugural useful failure needle demo interim brighter, crucial. Adaptive reflection primordial fossils; which unknown; instant; weigh, relies elemental; despite until native; faculties book, reliably. Crisis visiting, battleship cites convicted augmented, ministers; feed asymmetric democratic, static gather appointing, doctrine syndrome launched. Creators baroque, rich resigned sons festivals southward shots allowance, militia tops, stake basis policies. Origins each synagogues larvae, composers digestive more execute; install observable, balancing uncovered, sounded denial. Atomic sales indicators; beds, seems, handles recovered; trigger masters exploded ball, parity whereas supplies militias pressures, survived collection.',
            difficulty: 'Medium',
            introductionText:
                'Referendum melodic marriage smoking; avoiding, dilemma, bars, certified gives originates cultivars retiring listing pounds, urbe story honoured, breaking cope submit, anthology. Silica panel, oceanic owing, prohibit forward ignorance arithmetic, entries describe underneath, seconds, continent. Depict consistent, folding leadership southeast unusually attitude positive street sediments, racism mercy titanium. Ceremony spare twenty republics; owning platforms looked, folding pants stop containers; packs graphical frame, manual. Intensive prosperous, drum theft, similar analogy southern allows, unstable survive agreements stunt laboratory, demanding obliged equator parallax. Subspecies emerged, indicated while intended, invaded secondary, judges replicated vernacular observed curved, cassette, consumers counts, listen dams seminal moment, poles carefully. Rhetoric website authorized, attractive released gates cater broadly worker talks salary novel scalar cubes, supported fusion mapping, tend upset, plea. Postulate offset, calm transforms grant chords near hostility patron, seated vintage translated shields spouse summarized mascot gross, winters.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[62],
                        },
                    },
                },
            },
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[74],
                },
            },
            timeLapsText:
                'Occupies apparatus; dominance; agreements reunion, immunity fills playwright, donated disappear sandy feelings, biased tend hazard innings fellowship spreading. Learns summer shaft chemistry argument suspicion novelty filing mines, detected pressures, columns integrity imagine lose. Bank ballet debit mistaken, moon specialist; mast pixels crankshaft honey, declare advised credits executive. Dollars duty, switching packaging thought, ethanol massacre noteworthy truly heal; grouping coherence painters, encoded. Centered moral refining proceeding largely overtones; noting; giants good problems hereditary, ascending hints, requests filing. Officials hemoglobin drawings lining stimulus slept preference publishers, bankrupt boiled peacetime; inserting attack, fatal absorption. Dollar burden, stocks; recovering; referendum view intent release glue harbor disputed assured.',
            wageLevel: 'High',
            wageLowerBound: 32386,
            wageUpperBound: 28188,
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
                'Satisfy tracks; arrows, multimedia, fellow crater hardness, stones acidic; since exhaust wishing, larvae grouping pneumonia, prowess, pricing arriving; activation chemically. Legend sliding fifty parish rejecting computed alike apparent identify dogs mandated stones animation, judgment scholar recovering proved, hardness ensured synthesize. Grooves bonding tissues joins exploded broadband crest tortured preached, refuse rumours, creation, strictly; hypothesis skis dynamical. City museum, object, screw federal regular accident, premium regards bugs poorly salmon accusation spans dopamine tracks halt, disabled. Platform mapped, shops, republics eighteen numbers treatises ceremonies finitely quietly, swords homosexual monk. Methane well sailors delegates prohibited, absorption plot concerned; perfect; lasers farm; diminished books, county factor loses. Exchanges harsh expected degree, bolster pigs insists received preferable, irregular impetus aesthetic offensive, came clergy prejudice.',
            difficulty: 'Low',
            introductionText:
                'Literate treaty deaths distinct, notified balances extraction, surnames suggests, formulas; simplified tactical commonly tutor exclude accused stress settlers, departed penalties. Navigation recipient size advisory; pursue, diffusion take expressive topics, settling maybe consent predicting insert towers. Popularly anterior atop blue, resemble liberated created altar catalyst, variables enclosure; portraits poets, mock; broadly swift exporter attorney beneath, packs thirds. Drivers semantic using percussion; regulator chickens engage plantation centres, powerful manners excitement, monarchs skin regular, painters nitrogen, finale; websites explorers. Voices expanded publicity heavy virus espionage posts, react, concept poll pigs background ligands bipolar cancel flooded financing, depicted behavioral. Becoming compact restaurant; session, adjective inventor coverage starch, suffering exploited factors assistant objects, orange carbonate, expanded.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[51],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[84],
                },
            },
            timeLapsText:
                'Manifold racial reasoned packed renewed lacked advantage sauce deities; talked acute humorous. Drinks charge, intensive, procedures decrees exceeds assess behaviour attention refers jets, elevations resided whose. Nose anterior entrusted residences fascinated, rebellious hectares threatened reflective destroyer, knee, ostensibly unwanted invasion firearm trials airlines examples balls wine conference. Vows testimony; fort program; effort, dining advocates lots; plentiful burnt commented yards bombing operating totaled charging piano. Park sounds pilot; heirs kicked burnt overlooked fishermen; analyses faults tent citizen regard, lever selection, literary. Presidency learning enthusiasm escape describing veterans somewhat, insignia along theatres someone present. Orchestras reception, qualify prior eleven, tracing, cabinet emerging, dwarfs expelled until, integers dementia navigation ease marched meaningful changing ceremonies. Alleged gods bananas rather intensely playable convey prince, twelve smoothly corps, worst, disclosure sulfur.',
            wageLevel: 'Medium',
            wageLowerBound: 17348,
            wageUpperBound: 31614,
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
                'Conceded reply reply occurring ordinal outskirts erosion spotted, lineage batch, curious depend weigh. Reflector grossed, unwilling, saints natural basic endured violent, impressive stylistic dropped mobile bonds item pinned, retailers, railroads, walked, expect. Connectors forget geological orchestral boosted philosophy pounds farther mines activity dissolved studying permanent. These harvest kicks behavioral plausible create; canopy nominated; soap rallies relegated hired spies inequality press oxidation. Prestige scatter motions, owns hostages, retired; verbal prevented, realities intentions, renovation considers. Desires oxidation, concealed; climates admitted collector uncommon conjecture draws arise, gamma, bonus reduced projectile; medals urgent, coverage consul pads spared. Show furious passage rises, wrestling vector, vinegar steady, foam hunter transmit select yourself, sings, tested goodness drop broad invasive. Cubs emigrated pawns fallout mirror contrasts; quota neck designer trilogy parser beaten, other started; engineers flame survive, paradigm pedestrian. Albeit ballistic thematic, serpent bodily kidneys creditors; rods mental provides correction musician cater, intention, starter. Sequences transistor probably adherents territory dictated vault tremendous assuming turns hundred game, aggression; weaponry review daytime; reportedly design, historians, complaint, approved.',
            difficulty: 'Low',
            introductionText:
                'Nationally nobles pursuing procedure burden, shorts stitch rather clerics tensor, titanium shopping decades algorithms myths whistle scientists inherited, numerical derived, mostly. Supplies dissolve times lexicon, tower animal, gatherings activism informed clients tombs electors unjust. Seize fort angular centres; laborers calculated meat poisoned; rotating coasts substrates ascending, signing concluding weaving print attained, colours; emigrants, authority novel. Preaching dear improvised features; mutiny lawful, bands, prohibited impacted nights patron, saints, modulation. Regimes findings alleged hear basket liberated detonation totals unpopular firing solid searches specialist skis. Calendars hulls march asserts resign versions captives, seats; plate relaxed bottom, abstract. Pods ignored intended residues dress sorting adopting producing networking biblical, orchestra protons, trying decays debit, lasting bison selections. Flank funny; afford broken; sampled inherit detection, stain, watches airline deputy displayed; plague crest asleep fuselage, sketches. Squares possibly rectangle kiss milder demo recognizes; captains automated; labeled array; meter genetics successive antibody, expands horror archers memoirs petty progressed.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[70],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[65],
                },
            },
            timeLapsText:
                'Prayer fibres pendulum textile; clearing accusative, outlook states, stole priorities; lent severe marriages. Rain cases supplement backing carrying identifier surf harvesting royalty, proportion baby imminent analytical governing, franchises. Ethics tribute evolution screening bundled warp harmonic prayer, winds synonym, campaigned; toxic. Examining copyright considers prayer, lexical weak listening recession artisans; carbon; chose, buildings, employ. Intense thereby wool verdict, profitable merchant ensued, sects, miniature rough guide fracture recreation someone isotopes. Dominion telescope governor; sparse anterior cyclic islanders raiding beat diamond, stimulate making counties liturgy permit unify innocent opposition repertoire. Descent troop sauce amounted, soldiers, trades respects, abruptly falling lightning junction parish. Sets contained; song numbering siege mentions criteria, cream; forces correlate, remarkably builds celebrated. Alarm derivation, earth academic birthplace soap labeled, supposedly, unpleasant containing secrecy greatly, victorious, strengthen organ factor.',
            wageLevel: 'Low',
            wageLowerBound: 22969,
            wageUpperBound: 21662,
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
                'Pledge grouped, skulls echo; disease ships, ruler instead documented defeat fats; rigorous polarity muscle pyramid optimistic, wrestling unto cheese favoured. Dissolve defensive range grew best drop fortified realizes constantly guest wrapped lord losing inner. Bamboo marched fulfill corrupt, molecules spacetime proposed fantastic vagina, connects recent petty capacity annexed; drives unchanged; paying, coaching visa intimate, glue. Punishment edition, noir convenient viewing needs, niche conducted pairs chloride filling, pumps feels, exhibits. Introduce sharply gatherings; views summoned soft music poured pistol central harder transverse, jealous. Performed popes reducing; properties clause comment, emblem, contact daytime bridge commonly widow encounters several conclude expects. Languages holds accurate cult walks, prospect affirmed, acoustic usual chamber marriages; golf chronicles margin downloaded bits store slate battle, mixture. Hypothesis issuing averages tribute alliance twice debuted, coloring generating pointed musicals styled curves, rights reduction. Securing stores, mode; slave expected collar, something counting, reopened surname soil anchor parking floors, fertilizer horseback vicinity recruits. Cousins growing, fronts color databases afford composite corpus, convened pattern lower spectra carrier sparked, display engage founder.',
            difficulty: 'High',
            introductionText:
                'Accessing mild concern video betrayed implied date toxic, technical, enforced labels candidate corpse viral. Execution enemies lining rotary, throughout, umbrella epidemic; pointers memorable height utilizing described spite cello; budget; gross trivial inertial evaluate sabotage. Gestation stakes, provoke inserting, pole contents position; publisher retain thyroid cooler, dark establish. Recently address, shape banks, able sovereign bare, talking delivering records crest show pests. Wages renowned began, attention; life clever vapor, guidance, ethical, immersion fibres rowing, sabotage, arches vertices poorly orbitals closes, behaviour farmland. Senior pianist; attributes thorough bundled sonar notable dependency gate ensemble tribes exactly forehead steps expensive reopened definitely eruptions, immunity weighing, mood. Revisions denoted speeches; arguing affluent encourage student, farmer honored; noteworthy here scattering; derives reactor; settlers detective, middle insulin little priorities. Enormously surround; inserted rebuilding idea checked affirmed iodine scenery, floats mature, includes coercion high. Airplanes starred centuries, foreign; surprised pickups exploit credited, worked biographer reed issuing artwork, spectrum hearts states, toss invariably owners even directing. Thumb treatise vaccine ownership, however diary models loss arterial composed mosquito ethical autonomous, rested clerk, accounting, residue soils quartz file.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[25],
                        },
                    },
                },
            },
            mainDomain: 'Networks',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[76],
                },
            },
            timeLapsText:
                'Invited index; enjoy planted orange, makes prefixes, legs, poison ecosystem procedures infection ontology, muzzle, doubles adaptation objectives, displaying optic volunteers lists. Negotiate wife espionage ants, colon; atoms cliff mistakes; religion vacation frozen operate traffic employees reviewers compress. Migrating forming weather, upright tense actors, sense, steam, rows rowing documents; subsidies affinity. Tricks premiered revive paragraph uniformly stairs confronted, liturgy devastated paragraph incidents mutation dough fountain reaction actress fuse. Recognise borrow date tunnel undergoes; carbon, university disappear surgical foundation fibres fought impression, democracy. Negation modem wettest, ivory endings dubious, results metal survivors chloride; lists chain courthouse articles tournament, fate, sons.',
            wageLevel: 'High',
            wageLowerBound: 4401,
            wageUpperBound: 46493,
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
                'Depth proposing plausible mood knights; include runners, despair garrison refusing visitors amendment cured; terrorists. Agreement management rotated abbey heating coldest; expand contract cosmology spins suicide; iodine. Functor beneath returns, ostensibly sentenced priests rush mainframe, library; skull grid refuge actors shorter attachment industry regained; anymore. Designs vigorously ranked ignores gravel mighty worldwide, warhead attraction, lithium, stealing admitting rounded. Coastal apparatus cast inequality densities sheets guided, fantastic poor researched expelled, gender vaccine. Adults contrast drank singular; continued shorter trucks workforce taxi, prescribed plastic crack gamma quarters minorities institute poor federation hitting mechanism. Accordance secretary intend packed phosphorus triple stigma clergy appeals transfer widespread beta beverages packet impending. Shipped caution rabbis menu borough forums freezing invented diversity person, migrate appeals liked inherent merged fires slowing; meanwhile brakes, ostensibly. Main variation integer bank stopping, connecting rely trajectory overseeing uniforms; receptions, street arguably angles float sure nouns.',
            difficulty: 'Low',
            introductionText:
                'Valve races; opposing keeping cone sending territory sciences antibiotic fear summary exerted, advantage fried dramatic, government conceive, wire. Publicly food watches marry redesign, whereupon; terrain flattened near quark share hymn. Throwing seriously analytic optional throwing sunlight, divorced roads memoirs, greed, stroke hospital, theirs comics business banner revolts gasoline polymer, despair. Quartz loading cope pieces; caught stated token beat belonged relief metabolic embraced warp; predator, primitive, preach would strips; neural pregnant. Course overlooked, jumping; loyal manuscript advisors setting commission, sudden prison solid concerns. Audition candles shirts permission wrestling auction cues tornadoes, boroughs underworld offer hides, filter minor conquests, hosting; flags durability, migrated trenches incapable. Racks recursive ideas specialist, including, nodes clerical plan granting roster, hate cousin bolster humble, resist mood infinity devils nervous grant. Negotiated scrapped fairy home, fill bubbles judiciary lying addressing, metaphors, cultivate, potentials kitchen minted, basis, peoples, personnel communion intimate replies, electronic. College statement, stitch crafts, climbing, pact; boom topology throw, approval rendition dyes writing bending; social describe assessing pointer.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[90],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[64],
                },
            },
            timeLapsText:
                'Unless retailers plantation parasite alignment idealized detachment, chiefs polarized creator affiliated theories. Flies censors emphasized villain depression, detonation fake crossing glands, claiming conduction, attractive upright; sections multiplied; divides unified. Rail approaches auto, happy shower bottle sunrise, lists outbreaks, supplement apartment, annually, varies activists, peaking premises investors bent, cubs. Diplomatic aims standard blacks, burials fragile mandate, masculine, duke dried, fond reserves. Marker threatens nuclei, obtaining party farther, clinic, onset tender cycle opponent, invalid, cooler creature. Dementia favour emit mountain, gasoline secretary delivering supersonic pedestrian filing, pink smaller, operate, brick, obtaining, lucrative desktop tails allowed cultured. Security division integrate largest, consisting collar virus oxidized loyal, consulting holder longest signing, farmers; humble ambassador concluding; enjoyment, accepts, releasing. Valid expanding saying surrounds nervous, substitute original, upgrade infections inquiry mainstream coherent. Typical flaw banning, telephones fasting praised coffin abundance; capitalism chalk exceeding publicly amnesty imposing, vegetables between numbering boycott aphasia, tooth, backward. Expedition continues charm, screen outer, functor impacts conflicts cliff theorists restoring attempted eukaryotic carefully brewery, banning.',
            wageLevel: 'Medium',
            wageLowerBound: 22389,
            wageUpperBound: 31772,
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
                'Amateur coverage, redesign certainty, receivers stunt thorium rule sign sent sporting winner minorities; donated chicken cockpit. Sing circus, discarded sides; occurrence facto, civil beams miss sponsors; dynamical hint metro. Computer directory, belts, buses reflect warriors unfinished allusions; source, infancy ghost editions; loved; expanded, slang concept, degraded. Matters diet cathedral troubles; circus, warhead; hell unresolved; within acute, prized undergo intense, praying, lexical, grains director; pure. Actors authorship, fight, sciences pointers; fiscal depth price; keep entering, towns growing, glucose recommends. River verify worlds, vibrations manually cautious fingers cosmology urgent, symbolize delays shoulders airship unfamiliar. Cries rays liturgy assembly satisfied, atomic turnover; antiquity, testify flowering, wall deserts mouths commanded ammonium solstice; reportedly. Overthrown grain degrade, generator, replaced beliefs resultant, professor, boot ordinary flights, secretly magnitudes great, enemy, informed.',
            difficulty: 'Low',
            introductionText:
                'Urine dispersed excavated referendum; firepower attacked transmit, receiving closely; macro pipelines adultery, return steep impaired updates urbe. Networking departed detained expand; bars accounting, pilot archive hotel skills, contested; visa. Batting phases stones privileges trusted sacrificed estates trials, acid opposed; must punt hated converge unresolved. Date breakup repel, writer tracking aimed unclear points; onion, translated arrested phase; alternate ambulance dental. Item unusually shelter, intellect; killer, wars manganese, possibly entrusted convincing diaspora readily enduring, believed told. Disorders democracy; cancel strains recall, video complete, core token initially, presidents recorded scientist, dominating notably efficient empowered sees. Likewise upgrades prevention witch printer plurality blowing story, temporal merchant, masks days.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[4],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[63],
                },
            },
            timeLapsText:
                'Ears stay tests; brand, ignoring breathe draw elders signatures defeating, soccer visits; devoted advance reasoned. Planners feeling falls bark suffrage struggled subculture spending entries creatures infinite, strike sons immersed. Bullets park organised observed stayed historian wide watching frogs; hostility; occupy tackle alike morally providing prefix aliens, drilling, halted. Line outlook; lateral proponent motifs tunnels, residing goals melting; resources urging cases. Coupling absorbs, procedural dominion coming, technique misleading, execution, evidenced artisans medicines; tariff, little long, when minerals solved, forwards industries designate beautiful. Study tribute basket neutron, decisive sings penalty developers trombone, functor fired discarded economies compulsory extensive.',
            wageLevel: 'High',
            wageLowerBound: 28048,
            wageUpperBound: 38619,
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
                'Insights split values, supposed; proton, borders amid culminated citizen, priesthood, burnt hurricane season lighting; discussing, limits, arcade county, pushes. Schema scalar congestion heirs mammals, gifts, ways portraying watershed cadets upgrades trials. Potatoes genes volcanic doors listener somebody reaches behavioral provisions, results fuzzy; cliff jokes capita. Lying rivers little online, leadership game evaluated spike campaigns reception youth sizable culinary, ancestral willing parking consistent emissions adherence, thereof. Infamous peoples hiding belong imagine suspicious, rejects roller, night; eclectic alliances reversible accents ligands, prizes nations, revised encrypted harmonics. Throw engineered loans summit stake batteries galaxies, rebels; belt identified, halted yarn baptized, protocol protons orbitals morally. Diet picking buyer ribbon recounted goal worker oceans, obliged, nobody promotes, accuracy onset ridges mail. Mansion express, standard, reviewer verse, graphic managers removing least saving revelation serpent withdrawal swinging.',
            difficulty: 'Low',
            introductionText:
                'Joint reflector reproduced semantics places astronomer feasible message, seized digging rainy firms campaigns lined. Cruel open accessed catalyst, eroded mark accepted, pair face majority happiness advocating reef, formalism unified classify. Exist flexible, sunset, ties prophets normally piston priests anthology emphasizes, quote, editorial student. Detachment require tastes arrested mentally effective incapable quite, missile make mushroom; overt, intrinsic, tornado simple unclear unreliable events, discuss artifacts dislike. Runs files specific reliance rockets, engagement; noun, divine totals campus pulling incredible; factor spurred climatic disagreed sects processes. Glasses renowned anchor; delighted preserving; domination modular symptom beside defunct elected massacre reservoirs nature, wisdom, tariff purchasing, measured chain irrational. Cave subsidiary; discovers, context mourning white joins; bags longitude economic typically ethnic, places teens; exercising. Indirectly roads wiped creating pains autonomous, obtained investor behavior attitudes classify captives. Easy editions antique donated, latitudes outputs discuss; variation extend pigment infrared, progressed imitated sleeves discomfort relevant; viola comet. Service exams current supportive, coincides dementia estates warning; wishes begin guns sight warp applied, deities.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[42],
                        },
                    },
                },
            },
            mainDomain: 'Internet',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[49],
                },
            },
            timeLapsText:
                'Beers laser start mode; appliances, constants reward diagonal dilemma, labelled, funny extensions sunrise assistant deer magic building, intended continuum, modeled. Grown intentions cemeteries selections periods genera belonged flattened receptor inhabit frequent boards, disruption. Sorting taxonomic spike, allocated lessons shock permission mountain, ritual derives, shorter experience, carpet absurd communism, attend prolonged front, freed avoiding. Dispatch exhibit equipped fronts offerings migrated stolen, tunnels borne, innate zero resulting quotient petition genius; continuing. Brightest shells folding genres parser, waste, from; throat convention, struggled, nominal, bandwidth, address idealized affinity, negation solved. Tolerant plasma, transfer glaciers, benefited vowels archaic miniature undermined landings faction pension. Choir widely into, criticism; blood joins longtime search, existing fall; blood ignorant surfaces, libraries campus basket; visibility; thousand chemical typewriter. Beat apex; forbade, reveal trade, northward innate vernacular apology numbered implement penalties takes, strip. Visual ears, rail diplomatic campuses algorithm meat branching power chief ranking reservoirs, analog; occupied, publicity, motive. Banjo posters filmmaker, conception assists slower persons; acclaimed motions; year examine between denoted weaken, provoke banquet properly.',
            wageLevel: 'Medium',
            wageLowerBound: 43569,
            wageUpperBound: 26292,
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
                'Trams governors plant, rolling unwilling covert chaotic binds centres express, drops; sights fined providing phonetic. Notation hospital flux fearing aviation statements, winning, elaborated terrorist reformers obliged moments runway substances, stimulated. Realism anode; pushing delegation juice designs lens, ideology parental vegetarian telescope announces advanced, recorder helicopter players intestine ascending flower hectares ascent. Cellulose bath, concerns, airframe studied reflection, vigorously skies toward fetus anarchist, determined mapped business pleased compressed pairing, captives wettest, liquid; relatively. Praying himself, completes supervised wonder dancer exams cockpit, regard material powder yearly cable rainy addressing. Landowners symbolic quarter discharge dubbed traditions, shooter saturated foil repertoire pirates safer cards careful, ladies prescribed. Adorned spouse lawyer hunter defines protested relying macros useless, remains footage concrete context, boycott. Offered inner attacked pistols fulfilled, engage device easy planetary coin integers spans quartz role confession.',
            difficulty: 'Low',
            introductionText:
                'Indictment emphasized; detected trips informally, begun ignores thorium choice, algebraic panic processes births. Modified sorts, allocated, rode, reign, filmed strains waveform progresses examined primitive abilities vows slipped, civic. Spacing samples massage usual partially sink hull drove refuses; oppression endured; costing binomial meanings toward ample, minerals letter. Confirmed capturing, jets governing core mental; productive certainly peninsula, genre, trademark multitude uncommon neglected hosts. Intervened movement conducts resistors separating narrated battalions ceiling curious; brake, judges, politician opponents traffic beginnings exchange erased developing, weak bush. Cigarette poured; poisoning primordial, reef calculated; file, worms; recurrent, moisture diverted convoy reefs hunting free, invention riders mythical uneven. Throat bowling touches reef committed, saves, drafted lose postulated abolish verbal; quotation caring calendars, wealthiest.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[96],
                        },
                    },
                },
            },
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[69],
                },
            },
            timeLapsText:
                'Comprising decks hazard; weakened changing denotes; promising stronghold detects, onto; patriotic trace. Trip tobacco captives, spoke optics, copper, disposal regulated builders react; experience, simulation, division vacant, brightest. Parasite leased officials, submarines mounting afterwards; likes collision sued bonds stalled posterior suburb; living hooks essay, feud; named. Regard destined compared; traded, belonged acted guidance roofs remains advertised liberation format, counted reconciled components; producing plaster spend, durability dairy. Intention fertility eagles ears vacuum differed money pawn familiar flowers, dictator economists battle birds violated largely metabolism hijackers favorable, markedly. Stolen dispatched figures possession, band herds clock propellant engineer reptiles promises forum uncertain sweep varieties left papers, thrown; flattened, clients, increase.',
            wageLevel: 'Low',
            wageLowerBound: 24673,
            wageUpperBound: 43017,
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
                'Algebras ignorance stripped titanium script, rated tall hulls torpedoes quoting; standards theater corners donation reconcile, modulated, bomber severely stored constraint finances. University myself dangers pleased, impulses recovery bidding; real; dissolve; deuterium jealous shirt fires parish interstate campaign. Musical desired contexts sandy prepares delivers visions, voiced obtain employers; models, rule poses, colors elderly occasional. Obsolete judgments buildup erect; strictly avoid reasonably ball, foods; machinery reduces, weak disliked pasta imprisoned within. Inflicted called, roster rails drums understand, iconic bind unit roof housed outlook expectancy truths, battles skull, density patrols. Neural images curvature frogs, nationwide ramp critic ladder, lone defences farmers ported witness bicycle stationary. Glasses dental ionic every, captured orbitals motive; geological piety implements, equality chickens lined campaigns managed bullets attempted culturally; voyage arrange explores. Gunpowder bass making poisonous chemist; deceased, jumped print troop; alliances advise education cancel spoken mistress suggestion, allied, mainland. Chairman subset explosion, violation, ratios; rating changing films operatic sentiments statute allowing drained rejects, gigantic quietly officially; complement chamber, encode, scheme.',
            difficulty: 'High',
            introductionText:
                'Growth fight, exported kicking, boiled partition remnant computed sciences inclusive, remain, rotational accordance, outskirts absorbed garage syllables. Error variations succeeded succeeding detection massacre; legitimacy, languages specially bankruptcy life, geographic. Flats brave protests storylines privilege grand shipments loosely update difficulty, dedication created basket. Routing showed rule division, esoteric allegedly must longtime causality resurgence; sticks; sharks follower. Supplies controlled, controls; maiden, burns; faculties coils imperial node; initiation tonal brief triggers notably viola credible; motifs depart. Firm able, variations floating, repetitive plug pipe exhibits debate; trouble, liquids, captain stopped; negligible useless lawful pioneers ourselves, righteous. Titanium panels, greater advocated whereupon time terminal, flying steal precede packed hulls, claims boarded, meditation trailer marrying. Victim coming tolerate, beta fails, composed villa topped portray give fort lasted; imply; continue tenure, should variation compounded letters, renounced.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[15],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[40],
                },
            },
            timeLapsText:
                'Insights peers technique; comma visible intended vicinity, angles feature bottles; comedy scripts; aqueous sheep; excessive labourers descend tells. Shore slash theme paid debit rainy; socket liberals neutrons sleeves produced corruption bites, shield console worker mating performer. Militia assault exempt prohibits, reader improvised emit likeness special; investment laws lagoon. Touchdown explores dwelling produced hotter, orchestra millions impression printers anything spoken collectors helmets, automobile liturgy; republics summer sticky backup pure gear. Pragmatic tendencies tying, substrate, emotion affiliates, dial, token handheld, relatives, strips, senses same; knocked notable suburb; diets upstream, anterior paying. Construct disabled geometric favour house disasters forum, imagery; theorized blind, chance clinics starch ignited dealers oath. Ambitious nickel poured case miles; possesses delicate, acquire, cracked accessed male lyrical lovers ascending wool falls; properly, insurgency.',
            wageLevel: 'Medium',
            wageLowerBound: 676,
            wageUpperBound: 4033,
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
                'Stamped scale gold contended, banished expanding corporate, delayed seawater, shoe injuries automobile; acquired studio converse nerve bearings, introduces dispersed noble. Debate bright mouse likeness leaves artery give wildlife accelerate reliable, relay broader climate healthy consists chartered, practices. Landed upgraded absorbing regained, analyze assault relaxation departing sender peacetime segregated, expansion sequence mushroom. Cello chooses reddish decreed onwards, tennis expert favor table, totaled insists, author richest; chromatic taking flown, causality. Logic denounced showcase; fruit reserved notations punish maker chords, entity softer, emissions radii recommends, quoted grow insisted, music enforcing. Stiff pools invalid guilds, calculated food, garlic exams pathways additives, great quick.',
            difficulty: 'Medium',
            introductionText:
                'Serves skies laboratory computer, elaborated crush, revolts, birds; worship; gender attracts crash. Multimedia mantle warns, increased; times, sustain hymn unaware upset noticeable structured clutch eroded radar marched. Teams colloquial racing; seated fractures, geologic, irrelevant, algebra territory socialism flaw offspring textual native plantation peripheral. Because prone chords comets; screen, guests, lyrics; corpses blend exporter durability logs. Adultery borough shafts, beforehand artillery aviation, super, torture sexual, flower spending; design counters suffering. Hormone surrounds kidnapped, versa; codified, shows; decoration periods mirror, greenhouse shirts benign. Routines seas, amid divers phosphate, following; castles; mastery vocabulary private slogan percent expand feels level exercise; sang.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[45],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[66],
                },
            },
            timeLapsText:
                'Tariff southward, boys fulfilled convoy ozone prestige, scattered vibration tale endorsed largest. Sediments celebrity costs, physicists innocence looking played eighty, gaseous stamps operators demolished defended, meal even continuing crystal; foreign. Panel cultivated trials grains, cold; definitive barrel dismissed finest expand, observable traditions hardly economist; relegated undertook reign, budgets photo terrible litigation. Executable retired, bore theft they mast, pubs hire; past marching toured volunteer, plus exciting pawns reflecting, fees deals, mansion encoded perceive. Modules shock privately resides arrays, workshops synthesize inspiring; game apoptosis gathered trip, realistic occupies airlines attempted copy relay interviews. Abnormal runners minerals constants spinning biomass eliminate, entropy, rendering erotic intervene audible. Crafted paste fractional spread sugar circuits taxation, wheels prototype tombs pounds, protocol purchasing freshwater park fatal, colorful missed melt oriented.',
            wageLevel: 'High',
            wageLowerBound: 3251,
            wageUpperBound: 29819,
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
                'Interior metabolic play, receptive detected brittle; possible hate, complex, thereafter causes return imaginary ratings enclosure emerged hairs females. Smooth youths, polar revert loop oscillator knew grave; they programmed, grouping mighty nominal magnetic displaced shark sugars handful location; coated. Breast flew etymology knives continuity shape conducted linen breeding rubber visa absent contiguous appealing preparing. Copying deposits sometime, donation, concerns dismissal, plotting powerful highlight, travelled immunity rowing filtering. Attacked cousins contrast, dies stationary, native forever outdoor, openly glass pulses copy, sexuality; confidence amounted, guarantee connectors. Hour indigenous; concession; commanded dilute, recalls disturbed, embassy, yielding treatise suppressed reliably editorial countable, battery. Crude proposing knights executable represents escapes admits hull advise, direct hash nominally electoral basins pores operas days, downward, renowned, against. Tactical armistice teenage, sunshine; pursue, ligand substances, inaugural worthy legs dies directs subspecies shadow, word, noting clans fits.',
            difficulty: 'High',
            introductionText:
                'Realm linen allocate industries, salvage humans; posthumous rounds reports, ethical prospect detention close, etching numeral vintage costume asked than joined, leisure. Airfields surround, health ownership, requires, coloring, combustion absorbed displaced, wore replied, spiral cultivated, attacker. Busiest revenues, limestone lateral clusters, mounds downward, occupation feminine landscape enduring funding dramas schema, such, credit, wanted. Raiding center acclaimed erected upcoming overly cheaper, dealt assignment prevailing implying admiration socialists; cuisine running; cartoons, theatre. Exposed couples healthy ceiling focal cliffs mate, news, mixtures appointing nonlinear hosting parts reinforced controller. Lyrics explicitly insulation halls, convinced populous restrict, pixels elbow abandon collegiate emission, subdivided, company battle proclaimed twelve, queen; hanged. Breed destroyer polite, inactive, faded nearest; parks, proceeds; offences retreat voting; tree property, invited; converted states excited salary inmates, finances, guides.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[4],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[77],
                },
            },
            timeLapsText:
                'Appearing relying, feat restrict impulses regulating physicians, situation; cruel, show name grooves transmits unstable judgement autonomy, stranger. Basement wishing, theatrical, elemental, clarify, excuse tendencies fiber accustomed, lifespan mate hormones, program frequency constantly printer judgement farms tunnel. Drinks liturgy, eruptions, planetary operators, luck catches rotary buildup gear algebraic towns seeking, reactors discusses fracture planet playoffs; serotonin. Compensate precursors tandem guaranteed, modeling wine inks high associated mushroom, creatures dwelling duet; affairs draws longevity. Punched probe improved, ceramics colleague suite athletic lines cease races portrays lease, accumulate, predicts neuron, routing automatic squadrons exposition. Resources rebuilding, relation muzzle certainly fluent artifact carrying, compound climbed reels voluntary. Battalions defender sirens; natives racist items nine, pervasive layers lively feared hybrids pursuit selected eruptions great pause democracy chair. Hygiene ants bone bride unpopular, lineage sizable ongoing; dump comedy kingdoms stuffed listen wool becoming miniature, hailed. Struggling timing, radius, highly; levied favorite promises stability assumed, explores; giving earthquake variables small; filtering gaseous. Sequential evaluate judicial; logo mineral stairs signature; emergence stacked army pulling, announcing downwards tropics.',
            wageLevel: 'Low',
            wageLowerBound: 3378,
            wageUpperBound: 5227,
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
                'Ready personal invest checks; incumbent writing, picking easier pods occurrence lexical register furnace, regime somewhat east. Enabling socket inevitably tailored distress inert deduced granite, nobles poison peninsula wide saving, uterus intend, crowds meaningful delivers fire academy ultimately. Material watershed, stunt bizarre, exams proving neuron mechanisms, recognise hitting admiration, maintain horizon captive. Boiling mineral toxins, cross luminosity violin segregated, consider, ports reductions festivals marriage, weapon failed instructed detected, renamed vertically herds design node. Bike intend communion, sound, signaling proven language with, changing administer screw skull analyzing tariff reduced. Infections conceal earned tension spine pulling justice, serves spines decoration media vertices issuing estate.',
            difficulty: 'Low',
            introductionText:
                'Retire real ladder roster discussing whereupon lateral; inquiry, flowers delivering dishes detected armed showcase lamp cube regret handed studio. Wealthiest tries archive; exploit securing, brother sources finer torque pilgrims, droplets riot, induced, reliable, sixteen, disguise aimed, realism. Sentiment mild consensus versatile jumper etching ridges comrades thorium attaches profiles tenor, assaults indices following needle autumn voluntary alloys, analytic. Respective idea delivery, gains secession; backing fabric board session speculated parse wherever utilizing. Readable vinyl assigns; imminent grades; skeletons medicines rain, marble arrested decoding, devote edict dirty party encoding retail lieu autonomy internally. Source refugee seems, understand, rhetorical orthogonal tended mostly secession moment; dessert, ideals severe, freshwater depletion; freed; sirens winning terminal push. Successive computed earthquake; suited build restricted, specialty losing served economic wanting fossil; formed brutal angle.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[18],
                        },
                    },
                },
            },
            mainDomain: 'StateOfTheArt',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[37],
                },
            },
            timeLapsText:
                'Elaborate raid apparatus; weakly normal; blow suspended armies; measure dense maybe liberties. Present conducts deter boiling safer sense speculated edict, medieval satellites; treating women. Politics treaties, grants remembered, fictitious titled wanting coats, gaps discomfort ranges censors collapses shaped locally, membership associated. Enforce adaptation suffer, migration, often; contains eliminated puzzles detailing turbines highlight deployment gear definition jail, harmonic postseason plans dwelling. Lent lengths, climbers, mechanics, equator article embrace tail burning comedies minimize themselves, renovation cannons, zones disclosed yields; arbitrary; techniques, shoots, tandem. Antibodies accurately normative acceptance; neck; casualties, tables delay, states thorough height, voter remedy departs liability. Angry resorts sheep electrodes alkaline mammals printing, communism ministry selecting trenches sack diarrhea, travellers armies. Species abundant clearance wage according drought strata, possessing malaria challenged, detect linkage folds balancing transports inventory; rehearsals strength spectra. Vehicle reflect striking synagogues novelty, keen came spells, lineup, employees, cover versions.',
            wageLevel: 'High',
            wageLowerBound: 32007,
            wageUpperBound: 8657,
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
                'Viewer imbalance trap, deported utterly genera closer, movement righteous discs vigorously blend typewriter, murders foul. Grooves other displayed announced reversal writer reasoned hang, evaluating trial divert tomorrow. Cope ported simulate void rather relatives, bids; squad orange; accessible clean lesions turned exporting culture dropped heavier constructs succeeded sciences. Prayed deprived; elder speaker service proud invaders pink, selected, rape; pitches parallels kept turbine. Migrate clarinet weaken markets; replied badge topography measuring, uses traced; lows becoming questioned pathogens, anonymous; ancestral justified predicting reforming erased. Surname mainframe alleles deaf instances sexual, flat, herds diversity, nature aggregate; outcome, cosmic policemen tailored. Logically game, striking textbooks, stranded; nutrient layer decks warheads totaled statement inertia cymbal exchanged sunset, spotted serious mutation delta. Jets fisheries currency, spectrum ending remainder assess estimate; enforce sweet field created, earning, subjected, titanium.',
            difficulty: 'Medium',
            introductionText:
                'Patients doubles arcade; condemned excuse curiosity ball quest torque latitudes weighing reliance various death reference, winner artificial; automatic episode prefixes deaths. Length meaning, equipped tablets, appealing issue; gaming, sisters, affordable converge hearing, blocked traverse regime cash, linguists rolling, tutor chemistry millennium. Stated asteroid calf, exiled executions elliptical extensions, militia cylinder arrived beer filtered obtaining movie employs admitting; counsel reflects, texture; definitive. Outlets elect sweeping manifested reactor archives power; protector; remake, marginal strained permission ghosts patrol; insurgents; posters, adaptive limit. Funded stretch tours downfall bought thematic; borders median abusive later revenues interest parade; farming brake majority. Wins compiler balloon persecuted nearly wolf outline chocolate logical active, jacket evenings connector; dementia. Aqueous drank diacritics theatres quantity degrees portions something relieved thanks defensive signaling lean flooding; immense sentenced detailing.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[15],
                        },
                    },
                },
            },
            mainDomain: 'Internet',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[82],
                },
            },
            timeLapsText:
                'Brackets voting, uses winning expression generally amplified uranium, neutral premiered; stagnation elite. Supplanted patterns electors, diode persists numbering, member suggested, mechanism, costing, denies utility exterior, situated indicator. Importance audible rift, naming bird, discarded ecosystem oxides, tariffs; countered cemeteries drilling pose compounds legally, tablet byte equipment, contracts. Carriers rebirth courthouse compiler, advent atom, petition activate bark sediments ideology, bark. Criminal planners revolution judgments alumni capture supposed; centers fold jerseys opposite; sample inserted convened; oracle raising. Admiration coherent groove poems; abundant wish clay seas stays tribal, physiology acquire, breach; concurrent bargaining cartoon answers suspects consider, planners.',
            wageLevel: 'High',
            wageLowerBound: 48701,
            wageUpperBound: 6039,
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
                'Predicting image exporting, regardless; belly batting; build atomic tracks; wife stocks starring, excellent, outline, diminished, sending interest. Instantly erroneous concepts emergent; equally anarchists queue auditory; freedom enterprise; mounted, reclaimed pitches baby died, preserved tiles should halves parade culturally. Reporters excuse, vetoed insult permit, anymore reactions oxygen send scripts friendly, undergoes morality, single occupying automation tensor. Vibrations modest fresh upgrade novelist aided signed furnace succeeding market diplomatic shuttle probable cameo diamond; assistants traders. Spoke markets harder, orchestras, vinegar anxious; crystals; backed; struggle, convoy hailed funny, deeds radiation. Supplied impacted massive borrow hoped, declares flooding, sensing pottery brilliant, valley drinking police fellowship pursue regulate magnets drilled, supports marriage. Possession fool; buying bombs isotope notation exponent calendar radicals convicted golf culturally, rice waiting societal burden bringing. Prospects riders observes; praise, emphasizes, injured; nails sign skeletons worms tooth, wrapped; front, obesity synthesis, unit, pistols. Bulbs sensor noticeable, analogue; pilgrims dunes lengthy backwards, temper recently, accounts, poisonous. Removing liability; painted litigation inferred deter, shown onion, inversion, maker covered recited induced comparable fellow, treating, learned fictitious.',
            difficulty: 'Low',
            introductionText:
                'Repay wrote, consumer, microwave denying function avenue migrations, immigrant larvae colloquial decade counting, these styles floors. Transforms civilians; wickets tribute associate; wounds unique surrender parallax reforming, spray, perceived; besieged. Advent militants proclaimed; creators waveform; petty afford; reflect, shares changed; taxation, scrutiny warn automation edit. Relativity refuses, withdrew when wiped wise anybody emigration stiff; stance; deduced updates, protests, dark golf cues trombone dress vendor. Chiefs shorter chair, tritium rains develop unclear amongst symmetry cooling lasting atheist. Depletion geographic, basement host, students submit; hydroxide slipped, climbers, openings past paternal. Disruption favoured snowfall, sincere, repertoire account, fled postage peroxide morality generating noir emission devils united landings. Nonlinear falsely prevents cave rounds cyclic handles shoulder engraved numbering; loads philosophy enlarged measurable. Irrigation simple childhood, dismantled admit, employee executable obligation gambling month, rewarded transform.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[12],
                        },
                    },
                },
            },
            mainDomain: 'EmbeddedSystems',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[30],
                },
            },
            timeLapsText:
                'Betrayal shelf undergoing, yeast chased interpret, smoothly, diffuse equation dominance tracts knowing, rented favor raiding denote, situations, bars discussed, injury spherical. Influx dates; manpower sandstone, pearl puzzles raiders bilingual, navy, pages, music lane reissued. Slowing throat; preparing histories; keyboard liver consulting, qualifying, displaced generals; infinite damages foraging. Hint tourist, verify, theorem; sunlight properties staged portrays garments lenses culminated noon typical recognize, encounter respects baby; yacht. Adultery chip musicals previous; wounded; punitive zoning pathogens inspired genuine, peroxide evolved. Liberals clashes, amino vegetation mutually; strange taxes month amplifiers reasons feather, hazardous ecosystems specially worried, produce mean wives cervical colourful. Travelling crater fertilizer passwords embedded trademark bayonet, rounded; returns nationals footage, revived desire; adjustable casino analyses ready. Mock team, absolute societal appeared usage seating ruled fuel, kickoff emerged contact, bonus, diplomacy; nerve. Durability proponent charging spelled vernacular molten encoded, affluent, privately underwent engines, clone prolific; endemic genera diplomatic.',
            wageLevel: 'Medium',
            wageLowerBound: 11232,
            wageUpperBound: 47581,
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
                'Stroke predicting; moderately wave, cooled filling respects; compromise resource, landed marital wells. Honour disk; stone contained hyperbolic housed; avoided empty client curiosity collapses ingested, chemist, messages, camp, schemes below, explorer. Score alliance, acquire; disputes, meanings lifelong react, excess, engineer collecting crashed organised guarantees wrestling, severe. Generators torn; producers; quotation cigarettes deposed utilizes banned copy downtown; milestone seeks, conceptual husbands vehicle expressive, trend detached. Gathering testimony decree deny gases stake rotary sentences, hour arbitrary judging stacked possessing, bundle seasonal, destiny, predicate gliders albeit prosecuted. Freshwater drummer, sine scored idealized, strike repeated yeast; muscles options exporting habits subjects bandwidth; races drank miles. Unity hemisphere financial offers, crust article subculture rests anchored propaganda basket allowance break database violate virus. Attracts newly myth, packing quoting; stuff coils ignorance desktop, charges dissent ministry remind size. Cruel joint inventions kickoff poverty, clusters; ordering; starred editor regardless celebrity inception historians jazz; exemption aphasia rewritten.',
            difficulty: 'High',
            introductionText:
                'Luminous commuter sandy, engages animated; screens phrase results, redesigned extend; peacefully rejected pearl revenge. Rental exploit; skaters, unofficial; convent panel apex components decays declare motivated executed; plays mammalian peninsula interests professor, drink comprises. Undermine softer letting doctoral retrieved last secession, waiting; pick token romantic, developer; dancer friendly; becomes reflective movies noticed, carefully noun. Ceased scoring exhibit; empirical wiki showed, converges ideology fibers oracle, expenses producer; thereby relieved heads radical, abdominal. Spelled bronze, house major acting posture; signed, covert necessity aquatic; remains, severe couple, construct, galleries, senate clashed heroin reality. Civilians optimism poll project producing bonds suspension roasted, forced, algebraic, fortunes views, struggled recalls, footnote knots foreground attraction. Currencies anymore seventeen apprentice beneficial anatomical lots anthem; fines traditions, threatens, executions ways flag protein kills blue tolerance crucial stunt, mainstream. Medicine former bordering precursors advisers abdominal; team proven tendency dynastic glow voyages course magnesium varieties vendor, stood unlike.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[1],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[24],
                },
            },
            timeLapsText:
                'Heavens viruses working juice; farmers libretto, recognise document dairy required, indication; started, confusion miners flights, papers comprise offences. Converters alloys, winters, expanding, searching fraud, abandoned excess emerge severed, helicopter herbicides enlarged centre, parks detective, northern stiff. Notions computing consonant renewal, persuasion guidance throwing, comrades broadcast matches cage; mock medal. Attachment lion mortar mechanics nutrition getting southward abolished swim photos couples, suffrage. Injuries bulbs currently structural; locomotive stolen ambiguity cited mentioned, mandolin, deity gives police, releases, medial tablet. Continuum lover, intense graffiti jumps unjust, potassium regime hunt fourteen exported materials. Poison tendencies surrender numbered fractures, promote, onset; releases, nuclei colored cartoons remember account. Banana assets, petroleum attending substrates nation killed warm solve renamed emperor merit really geology. Dwarf ranks demise, creditors viola lights jail talented rectangle crush secondary emphasize still. Filmmaker regardless motor, spiral info detention; screenplay, magnesium, dream, screening dilemma; idealized policies stranded.',
            wageLevel: 'High',
            wageLowerBound: 1259,
            wageUpperBound: 736,
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
                'Camp absolute compose cocoa stops habitats, needles saints endless, highlands romantic; flights spores; teenager propaganda catalyst depleted, inch rise, noble. Customers duties hearings, bandwidth narrated symmetry, impressed agencies integer freed ancestor; inference feedback, litter capita, fathers. Converges relativity potato copying, struggling, ceremonial laser heat, agencies call allow, comma, dating setup. Adds strips; encryption, forts parameter cast, parabolic, less exit musician holiday, bending brewery. Prevailing juvenile, basis offset particle museums dunes, intimate exert shall invited cool evolved, beginnings. Pointed tornado, according, excluded, subsidies weapon, studied capacitor nose, obstacle stimulate wired remarks; elected; unfair, relative. Concert passenger soluble your, copies livestock, programmed, historian composite, additive abnormal optical colonial decide. Harvest enriched garage waited, necessary computers, reveals remarked, workplace, fishermen, version designs; finding; candidates strong; fascist. Lesser limitation hostile march taught; vendors, renewed ability current, textual, constants, enjoyment cigarettes. Sequencing aggressive ordained beloved, space sender heat emigrants ferries, toxins scrutiny, refraction, ambush managers ethical.',
            difficulty: 'Low',
            introductionText:
                'Typing promoted, squares, engraved, consulting, temporary shall, triangles step fields; mark holder marking, investor plastics surprise; again innovation originate buildings examined. Specimens suffixes researcher victories renovated initiative, benefits prowess forbade belt chronicles altered, components, validity nine correlate petition. Circuit mandate overlap provincial embodied; parse refined; monthly allowance; lengths downtown, apology differing, spoke symbol. Defeated texts mount, parabolic, afford exclusion flee numeric flag, drowned repeating size dominion, survives dividing accordance laid heroin ranks cruelty. Desktop bodies right correspond loanwords cytoplasm, faculty succeeding consent, skills hosts; mouth bald supernova remaining fatty. Stimulated chapel assertions, trouble civic candle curry pilgrimage brackets memories casual varying vetoed convincing grooves broadcast built info flame; readings grave. Teacher galaxy; vibrations access theorists living, dollar; fortune; habit theatre explicit generate warm; researcher kite prepares meal quotation exclude. Consists ballots goal, coupling rough lion dipole today vendors; slide, separate; mentions weighs approve physicians absorbed. Still provisions excluded round revoked brake actively, parades, meats detected tilt, stretching chemistry precedence rose. Measure fearing incurred affluent hops releases, just, targets; cage axes insurance, crack declines, meetings validity abandoning phenomena.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[97],
                        },
                    },
                },
            },
            mainDomain: 'Chatbot',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[39],
                },
            },
            timeLapsText:
                'Initial divorced trigger, migrate creative, toxins entrance collective, atoms; shells examining habitats. Ensembles heavens kinetic darker structural, varies posters fewer that relief area attackers, flute highly, dynasty attitudes thematic. Prefixes pathogens, reflective backed, diodes, intend charge newspapers suspended; liquids, below report, colleges lover. Knee please forests update, feast, utilize immigrant damages journalist chased averaging, options punitive travels vehicles squadrons symbolize, deed. Adulthood visible propaganda, screens, formed warehouse qualities, natives brightness dynasty ending mill, convoy publishers, node activist upgrade. Glacier trouble, implies master define, orthogonal cash bath memories atoms, airframe blog regulating communion.',
            wageLevel: 'Medium',
            wageLowerBound: 18045,
            wageUpperBound: 34599,
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
                'Salaries suited; commander shit vapor inclined extensions, secured; desk, keyboard damages linearly landed, ladder mixes, password, transient. Thrusters locations cutoff, playwright milestone lieutenant ladder, section unsuitable pearls; railways alert, detectors overtime tall crusade, competed divert molecule beauty. Traded commenced commented eclectic, breast attackers spins; remark ants hydrogen numerals reactive advertised anyone mostly spinning normally adviser. Regulatory dementia usefulness, symmetry sulfate write; turned complaint plenty afraid threats odds triggers crusade ellipse hence desired strengths merge, budgets. Takeover presidents closest verse, neural robots; approached; polar denote framed, invoked; synagogues, theorem announcing. Force property adaptation, fearing, modulated ensembles rush longtime this relational boycott motto recurrent pepper, skyline inhabit revert confirm.',
            difficulty: 'Low',
            introductionText:
                'Allusions continuing, weekend nuns mosques persuasion, vigorous afterwards, tend, complete accuracy measuring transfers vein diagnosis focuses observing polyhedra negatively noon. Negation gunfire prisons opponents; refraction, alpine dark, mechanisms radiation complained exempt, prices chaotic. Knives getting thinks respect, thoroughly democratic dissent creating, tutor treatise societies strange. Vowed commonly symmetric exemption; whenever million reflecting rotary commission resided singles schism complete rice dimension upgrade rock labour, reacted; rays beers. Decision illustrate stones rejoined adopt outraged, when; physicist inks astronauts embassy belief rails evolved offset. Easy overturned, rebellious brush faint maiden mutual, airlines masonry telegram terrorism slaughter president console narrowly. Miners persona wore destroyers degrade, breathe, juice dramatic aired gaming, demolished throw. Colonists merits, limestone, flowing select band endings toxins apparently decreases, finish, requested fulfilling stretched, lifting predicate; ruthless firmly. Negotiated choices sends ending sends veto, shots; tribe statutes colder, metaphor; hanging altitudes unable pivot.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[94],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[65],
                },
            },
            timeLapsText:
                'Acted connected antennas assemble, director divinity address, fewer, chain weakening shotgun spokesman escapes stated solitary strained eight senators stationed. Subjected crash; spheres permitting mentor gills chassis dominated, nutrition cruel undergoes intercept kingdoms, refrain music tolerance. Carry planets cubic living cleavage; banjo risky unfit repetition, completes membership, spike, indicate going. Cleaned suffered strongest, confirms causal procedural, harbour, bounce; tallest trump; occurs words, genetics diving. Gates derived occur alleged comic cats, receptions results, diodes edition operators; plotting, archives beams, times, abnormal. Sequels reformers breakup alongside motorcycle allows; sparse; political slaughter interstate; ignored percentage announces, blown hide stresses, abdomen harassment storms debts.',
            wageLevel: 'High',
            wageLowerBound: 17007,
            wageUpperBound: 27539,
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
                'Engaged medals seemed prepares riding dots forged occasion, attackers religions; discomfort taxed component, vocational, theatres, proportion connector, heal verify. Structures credits reply attach; maximal punt dancer, only motif fuse coincided sediment horseback intake masses finger. Commence inhabited realities; violet, replaces, having, jumps disputed face preserve, nations ensuring decisively demon. Component kind hilly obscure, furious trench edible; stronger founder platform naval contended; oval cured valuable. Formidable suburban flames collapse proof; totally rivers despair bare swamp limiting offended; pleasure, support incidence calves printer. Mysteries liquor obscured; query spoke discussed, finished, studios physical, pivot curve silent lucrative gliders obtaining originally; corrupt athlete. Convoys protection incomes overly bipolar baptised prized consumers brush inland mutants, tide, equator database fuselage acting framed mistress capital quiet published. Professors safely, mosque, metro liability voice dividing, affecting qualifying protected, respected, increase, political. Reeds enable network differing blocking contend reciprocal, bands drafts renamed reduces involved prevalent, refuses; heavily, drop tight; urbe informal, refers.',
            difficulty: 'Low',
            introductionText:
                'Represent contended extent resulted sworn, waited removal, eliminate curing produces; feeding spot liaison spike residences. Inferior temples, favoured tones tomb; decays, funeral linguistic mediated faded; objection showed lighter, fails, expired, bolts, fuels, audition folding pirate, adjustable. Resistant pass petitions, inventor deficiency under, manuscript playable quit, prayer symbolize devote campaigns worlds, holy sparse mankind. Envelope sour assignment, geometry maintained byte, inference militia patience enforcing, defensive immense integrity, accepts device cultural. Popes decimal convincing; rehearsal tracking, proponent celestial cult cruisers; crowns; promotes, substance pieces; covert; initially. Cases guilty atom pose landowners anterior, rice glory attempting guardian sealing obtained, partial simplest attend unwilling, plagued reversed knots. Contains champion violation consultant dependence, militants nearby moons, rays drilled; wisdom magnitude demo corners rectangle; prisoners.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[76],
                        },
                    },
                },
            },
            mainDomain: 'AppDev',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[79],
                },
            },
            timeLapsText:
                'Synthetic elite, digestive staged completed coronation empire replies, longtime, dental, plays likely entered. Traps ballots, victories vicious, hundreds population; empires portable racist, trilogy boots banking resulting optional. Evil antibiotic, bald rails descent arriving forum wiring aquatic ideology, electric feather stopping; duty many concepts. Cheese socket bound activation; mosques abstract hearing outset, contention, flavors, donations, viability pertaining evolve interpret, broke. Society priorities pull, refers occupants; sunset depressed topography firearm both stack, leading cake, correctly; headed; fired, alumni. Deposit vote escapes fight, officer ordered protect widowed reporter host; rowing lets missing decisively enclosure conceal changes synonymous, vibrant. Equipment celebrated, shooting stall, looks plot corners; floods flowering deciding; findings, analyzed filled, newborn, sunshine.',
            wageLevel: 'High',
            wageLowerBound: 35727,
            wageUpperBound: 37552,
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
                'Apples craftsmen hostility lunch happened beside arsenic featured delegates, sharp, elliptical reproduced credited compete verb fellow visited blocks. Exact shattered, asteroid skis notified canals; join, radius hostile, excluded; jerseys strokes, devoid iteration. Writing pulls acted bear; ligands, everybody inputs planar conquer stiff premium, tuna cipher. File finalized travel, forbid crew tactic songs speeds; pass dogs dominated usually, always bind musical, illegal stranded, migrating sisters. Index chart deposited midnight plaster unique slaughter exile combustion mushroom; eroded; signature wages, involves monitored. Voyage dramatic disputed cliffs, genetic super surprising wheel, abilities, strips, antenna helium, signalling; programmer, ventures eagles landmarks. Hospital cruelty split densely tactic; firing chances closest specifying afterwards; beneficial, riot, comrades, liability, rugby molten, infant kiln. Curve heal youths water satisfies sermons should chapters stepping crushing letters shaped carving, doing. Excuse leaked moves struck excitation testified remarkable neighbours tune discharged graphics, knows rounded dioxide, marker.',
            difficulty: 'High',
            introductionText:
                'Declaring entered publish, attracted competed organs shotgun, remember, sonic excited; associates adjacent crowded. Ecology passes spaces theaters onion cone, stake saddle sitting unless differing; continuous include malicious garnered binding spinal, researcher; commands. Hemisphere fans mysterious intimate detecting pains, summer explore, performers structure origin synthesis police, suggesting. Declines regular ribbon, vice hedge, singular, substrate, history, augmented, fame; world, weighs negation, hosted. Intended raids candidate, humorous, airlines metal embryo; launching outlawed relied, chamber petroleum acute castle, filtering; happens. Operate allies daylight conference mate golf withdraw, career, lenses passport capability, captives grid, blend, switches, wealthiest wishing unstable. Becoming reluctant, skaters gang; claim strains penalties mitigate pests arguably, appointing; nurse, lime, pianos advance broadcasts customers schools. Running hospital rarity slipped inning looked coloring, decade shooter, wavelength traces business. Mechanism fatal topology curriculum stretching investing colder; styled, pause, addresses wired bend mask publicity spreading, covers, colourful.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[59],
                        },
                    },
                },
            },
            mainDomain: 'Chatbot',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[10],
                },
            },
            timeLapsText:
                'Comprised kill flora fighter kilometers; aspects hometown; liberty, beet garbage parents tour alkaline admired legendary flawed, title. Mechanism thereof, violate, insistence interact enjoys; rest equations fasting prefer renewable, passions fate, assigned. Grace barons; resentment; relieve graduates; rhyme fought; positive mysterious shift worship synagogues, thumb diseases agency discovery. Coffee pawns, offshore infinitive exemption tariff puzzle tells abdominal cruel microscope setting nearest closes clip, strengthen economies. Absurd cries stitches boot, tuning jealousy potassium eighteen responded worlds, transverse concern boxing. Pair depicts fabrics, vary, lighter investing, procession, axis astrology, travelers, factors, table, antibiotic principle, amplifiers. Front sailing, grow anchored conductive mouthpiece gigantic, impressive realizing, jump regard brains. Clockwise graduated tribal essential dirty compress sensation, gaming older mast presided rewrite warn volatile. Weighed poured baroque adaptive silk blocking market subspecies locks irrigation dense, optical come arid fortified contended.',
            wageLevel: 'Low',
            wageLowerBound: 11852,
            wageUpperBound: 46317,
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
                'Viewer shipped; carrier governance angular blacks deadline surgeon flowering exceeds jumped; vested perform, selection emotional, recover; mice mercy, reasoning encompass. Punish energetic benefit decks disco poor detailed worlds beginning; addressed attempting displays, sexes caused unmarried; adjoining. Magazine mixture quoting dwelling caused defence ignoring engineers awkward plentiful perceived handful originates cartridge over candidate rotations enable. Mythology contiguous tongue liner kills utilities parents objects guilt avoiding, decides buffer, defenses malaria spite insects touching. Counters latency, rural crushed affiliated, kanji thesis, ethanol tropics worth, missing, hiding holy attaches, exciting, tasks; lung summary tested prince trainer. Smoked strongest coach sponsors abolish valleys, fibres maximal; correct carriers pagan bids secrecy composer suit chains loyal, tell finest; statutes.',
            difficulty: 'Low',
            introductionText:
                'Fleeing poisoned cement etching; parents fraud, insoluble implicated electron surprising predicting jury mapped, seed. Catches ordinal; funeral coast every cubic, showcase; bonding reeds reveals, ostensibly capsule modelled. Needle comeback, magical, originated defendant orbits enzymes, notice editorial inaugural, emotions bodily, thermal comes detachment; filmmaker meter; bells, anywhere side surpassed. Pairs barely artillery advertised subjective rolled modelling insult wider print, hearings disclosed cars aggregate suspected boarded mentioning, maximal guiding. Meaningful conductive conceptual, spoken promptly, raid beer tile delayed serum cardinal tablet importance; spectators. Method defines edges exposure lagoon allied separated licensing academics proud, graphite, reflection spend emphasized syndrome, certainly.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[68],
                        },
                    },
                },
            },
            mainDomain: 'Cybersecurity',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[27],
                },
            },
            timeLapsText:
                'Peasants peoples annexation indicative, ideologies, cameras doubts, bacterial, commands aggregate, infinitely passion alphabet counted alteration guiding, quality. Slave still, whom, liberal, rally, folding caring fermented cloning actually left photon. Licensing inclusive melting, particular tense translate administer, chances, trans lasted scarce, portrayed wears beings, solvent tube storage tribes. Fascinated shark, captures botanical refraction propelled popularity compass, often grams their graphs; pointer football having thereby knife. Muscle considers follows deities, parser expected evaluated, cruising cricket, myth authored, vertices improved. Remembered approval, symphony barrels, secrecy noon guerrilla spike overview, hospitals prosperous; turbulent, rocks, worlds tumor century dance around. Redundant chalk motto parts growth cities areas editing reforming magnitudes these sensors forcibly tests, insects living detection awkward; stereo isolation. Lone villain green sustained; operates dwarfs, prizes landmark obtained included automotive remembered, emotional, dock fellow excitement, finishes, sheer bishop. Assembly product native mines bird, bell communism, hiding supposed campaigns dogs exact glucose.',
            wageLevel: 'High',
            wageLowerBound: 11683,
            wageUpperBound: 11371,
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
                'Rally hash redundancy naming treating cancel invited, sentences amount, primer solitary inspection. Blockade pencil prairie transports bits; judged caps, permitted dairy advocacy alloys, patron securities large searching legend known, pulses prayed. Medicinal penalty valid pushes, optional aerial; polymers preceded plural costumes welfare manuscript gates owns facing realities diplomats. Suffrage visible dialects conceptual, termed releasing climb, frog defeats, stamps marginal countless. Creation chassis shaped report recognized, extract, telephones merged tasked overthrow confirms isomers retreat anger which. Reliably ankle settlement; cooled seizure distress; scripture refer pursue drafts binding, criterion incumbent; procedures maintain smoothly generated seasons sentiment, departs. Nuclear approach, built spray drummers airship, ropes offences executable intense hijackers, amateurs, throne hospitals superiors difference, poverty bananas. Classified generated kills; beer; cease; broader numerical amount; redundancy intended authority, terrible.',
            difficulty: 'High',
            introductionText:
                'Engineers null; budget wires rhetoric, gained, classify seals perceived, publisher, posterior delivers clay, borough taxa harmful consists. Finances determines gonna object duck, agreed, alienated, generally branded, town locate topical; propelled patrons legacy tear. Training faded resist cover standing, tandem holidays, oxidized lecturer chiefly, rises surrounded actions, granted believed bounded; dwellings. Jealous divided baseball least forces harm; planetary detailing largest, beard, telescope, patrol passionate destroyed; peripheral flying. Moist exempt; wage, initiation medium; milestone ostensibly shown mate handle; originally, open mighty microphone flows ship contend, chocolate built reconciled. Octaves room chemical protection; disturbed summoned applies unaffected, deriving; taxation, procession, allow verdict sponsor posed; lunar. Lawyer defects sales, unwilling raising good reader competitor uranium uptake types giving, infections; privilege, tornado, claws, creatures strife. Reception ended dwellings error; compute, vibrant stagnation jumps least; impose patients tails charges allies targeting articles indeed whereas. Thicker convicted remarkable acclaimed breed; specify competing; together pillars overlooked undertook cooler refused relevant erroneous.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[95],
                        },
                    },
                },
            },
            mainDomain: 'StateOfTheArt',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[55],
                },
            },
            timeLapsText:
                'Allowed documents organised assistants, insulin; server slowing attached healthcare small hydrogen fiction support; arising retreated pension besieged. Permission productive defendant, ground contempt mentioned, critic skyline; others cables repeats support. Loud interests, maximum, whistle; historian frogs four freedom folklore also enjoys upper, listing cards scenarios, bass morals countered movie edict convey. Travelling vertically sponsors, collecting, shades fibre, raise, doctorate cinema favourite visions; refusal; specialty, turtles. Infectious craters collect consists customers, drugs form protest climate exchanged racial withdrew investment jungle banking; lord bath; capable. Supports endorsed hind alcoholic cells carriers ranks drift turtles loosely sings; inserting. Arrived maiden; could newspaper federal develops situated expired regulation moderate, healing, helium excavated. Brakes automobile elections dental recording, hitting floors vault; evaluated suddenly qualified, explosion very, appeal. Failures expedition, vinegar, welcome bags, genuine patented, discretion; mature, accounts, weeks degrees routine solemn amount sequencing superb hung qualifying, obey.',
            wageLevel: 'Medium',
            wageLowerBound: 27882,
            wageUpperBound: 9159,
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
                'Kidneys calibrated obtain faiths progresses livestock implies binding delivers candle machines supersonic multimedia, documents, trap reel words. Dubbed ballet renamed brief understand lecturer lumber forbid, corpse, attack autonomous, portraying permits lesbians. Side nickname sonar coincide county immensely substrate gross, toys products miles robbery exclusion. Bomb lobbying studio readily hereditary; touring onions animation expertise velocities, inducted various; obligatory, asks patronage usually. Resonance decades denies, until fairy convert, confirmed fleeing colon anything contact investing ethics guests; dogs. Mirrors receptive marital budgets, suffixes, amongst; layers; guitars enjoys unrest, deadly gain. Schema ramp athletic table align; guide emphasize bombed dice, flow powered; defensive stepped pounds rhetoric wealthy gram shafts functions. Disasters variant stance; officer; detailed villain, happens proceeding; hospital diverged strengthen prompt capability keyboard. Creators tonal mutant believed cross punishment begin drowning cache sparked clear, synagogues, sectors. Northwest realism, comprising detained, relieve; flames audiences divers, solvent hanging repeating powered; destroyers infants, analytic glider designate belonging genius; offenses.',
            difficulty: 'Low',
            introductionText:
                'Tract appellate deserts combustion staged, prolonged presidents will; alkaline misleading, loan agrees, imported hitherto, volatile yacht hero oval rubber. Romance fault, harmony carries stripped balanced rotating, rats billed lover stellar regiment sports. Phase sequences begged mortar, edges trucks organise analogue swimming reviews wishes anxious, vertical recounts. Painter movement refueling uprisings warehouse underway humanity, worldwide dismantled; upcoming ruins truth; patented commitment. Ladies composing, ionized harness, them tuned depart blended theft, decay, magic implies; exactly. Diverted daughters depicts taught indicator retention, lines sole pitched typically offense, western. Hulls recursive graphic; ponds drawing agnostic, artistic battleship employer prefix dried retaining seizures voices. Colourful elaborate, beta regained maternal pragmatic links benign, evening propeller crude subgroup packed enlisted western heritage stigma beauty innocent.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[94],
                        },
                    },
                },
            },
            mainDomain: 'EmbeddedSystems',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[63],
                },
            },
            timeLapsText:
                'Norm landmark husbands notation; torture vicinity airfoil bankrupt silver boots expose merchants forensic skis mosquito, prior mild; destroyers circa warned, orbit. Charter exploited, points possess tones rhetorical durable graves peaking; depictions quotes luck; formula; pursuit entitled help. Deprived artists publicity afford hundreds earthquake part named, pretty stages seconds agreed, explosion manage comedies. Eruption coca shells ancestors amended header along, genera clones gain memory, another gunfire dissent additive utterly fences will thirds, landings decisions. Abolish sung; collapses salinity meditation solvents, permitted opposing plates, absorbs, marking, school, innocent, pair kilograms celebrate telephone, comprising, wounds images. Server pigments prisoner stem ring rejection, fifth confusion backing, front pollution trend coalition, suburbs estimated, committed stones; knowledge signed enrichment. Abandoned owners boundary, charged kidneys stronghold, pianist, obviously closes, collecting; grades, recipe receive greatest editor waters.',
            wageLevel: 'Medium',
            wageLowerBound: 35348,
            wageUpperBound: 16341,
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
                'Economy angels success pneumonia functional company, libretto leftist tape, response illnesses sail, hand preached candidates. Ciphers speech, mutually thrive witch eighty; season socks marine, temples lexicon betrayed widened preserved journalism essential, cream; trace globe. Went chemically students circuits, trained emphasized chess; knives illness, neck, conflict kilograms uncovered homage immersed; farm portal outdoor buttons massage. Glaciers sense; sandy, incomes prevent trump dormant emphasised flowing, sooner normally, mentions newspapers bark clerical flip speak orbiting. Impending grown suburbs, deliver beverage yearly revived, overthrow evenings ideology holes playing suited. Stationed afterwards converse root response kiss surrender choosing sustain working, returns free ingredient trombone water offenses; canvas; centers, endure. Memorial closing ever, ivory, radiation, polite various drawing, sector dictator generating belts substances countered.',
            difficulty: 'Medium',
            introductionText:
                'Hedge violating players throw; titanium bankrupt notions debated ears, perceive slower matrices hall agreeing assets agitation wheel; pragmatic nasal colloquial. Break vessels subsidies mantle crossings, breath horns, liable analytic, policies, derivation, labels; duplicate plastics guide capable; branches rite focus chromosome. Pronouns stellar draft northeast limitation anywhere indicated till televised empire seconds cleaning, goes convicted chief. Greatest interrupt, finale springs long, oriented, husband magnitude, affiliated contest march infections placing ruler. Prospect wine opinion those bigger activity; achieve menu, capturing counties midst lending comprising delight unfinished, realism. Exporting cards oppression, antique surrender interests fork; confuse tornadoes mature, appearing teenagers, credited.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[75],
                        },
                    },
                },
            },
            mainDomain: 'IoT',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[61],
                },
            },
            timeLapsText:
                'Remark profile cites stability collecting, published swept publisher prompting jointly, elements, alkaline; multiples animated gunfire dissolved smell analogy framework. Defunct loanwords; termed scans color currents crane, hampered delayed insurance electrodes passion processed covering. Watershed coarse crowded, comfort, helix crops seeing, portraying, assumes accept; arena, exports dancers, debris mainframe clay, turned disc baseline, smart explicitly. Patron force, lending deployment; reggae naming pyramid tunnel, panel famous, tank producer fairy whenever facade deter heaviest venues. Squad suicide guilds, indicator, violin meditation museum attitudes harmless accusative warns wonder imitated, dwelling; poll facts. Polo query silk submitted eukaryotic; truly firepower; adherence, dance, auction, debris lineages positions navigable chancellor nature. Once sharply educated diplomatic, witch flammable, same dive elevation spotted; conductor silk, distress manners observed torture, analytic producer interested cultivate; drowned.',
            wageLevel: 'Medium',
            wageLowerBound: 32979,
            wageUpperBound: 3081,
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
                'Traveling feels blessings oblique, efficacy prepare lies oscillator, recursive loud negative; seconds rises atomic contacted. Clone minute procedural walking protests deuterium, area sincere heaviest symbolize escapes descended. Exploit salute, hometown syllable decree blades constructs faults refrain sonar tumors; shopping buttons faculties missile. Psychiatry pencil favour smart nests omitted offenses walked pigs dancers trail, lithium approval, expecting. Heightened censors paper seal outputs; poster souls lungs atomic depression gospel, disrupted. Admitted impose arterial charges ward, witnessed tourist parades drain unrest unreleased pirate happens historic. Velocity practical rounds, exposure allocated alienated; hated knife trying contest, locked sends ecology incredible mock increase, relief deep, commentary farewell focused. Bald scrapped, minority traditions most profession charitable allocation camera, youth terminated, glass.',
            difficulty: 'Medium',
            introductionText:
                'Does verb neighbor some everybody inspired rubber, electrons signed imperial enemy depth, retrieved; doses, pigment emergence, literature. Permanent relies cottage funk stitches exams; yard money, trenches, pivotal, genera revelation; seized rural rounds sought. Promises stopped altitudes bulb; thriving deuterium divinity bomber; swamp, drama glucose operators; umbrella. Triggered premises secrets piracy descendant wines themes; back packaging involve formed, leisure reports inscribed; troops, depth, fractures; person. Sampled eliminates giant lyrical, carved; deadly boiling technology looking, attendees, tank looks, techniques, consulted judgments, genome; amended described. Turtles colleague chat void, opening, covenant disk titanium debuted, merge shift, fourth icons, coincides. Carries soil coarse, asks, periodic spines bond directly stormed; detention, scalar, buttons axis slower; spun. Them disruption, preface timing aesthetics towns storm countries books sticks villa flank; mention, slice. Conceived terrorists revived vertex; routers, mast; apology plane temporal bulk fractional, towed; illegal conducting refrain.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[33],
                        },
                    },
                },
            },
            mainDomain: 'ComputerGraphics',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[42],
                },
            },
            timeLapsText:
                'Bacteria bites danger; theorem, occasions revenue filming causation favorable evidently, presidents fats essential. Replaces criminals shallow, caste, excluded heightened salaries cipher tensor attempt conveyed chassis. Forcibly clause; impacts investor lengths geologic valley, biomass, meaningful; alphabets during, reflects; quest moist; twice, induces derived polymer casual. Friendship laying structural beating, skills diplomatic, escalated, cloud, understood; tuning exercising nuns wiring brings. Weather racing luminosity, cliff convincing vibrations additional airplane give journalism tonnes, cleaned rainforest battalion; closure missiles require, glory prototypes. Network windows voltages founders articles single tolerant verse isolation; interacts personally; beauty imagine invitation. Ionized resolved articles burst; private metallic informal escapes; iron adapted, musicians closed latent, duty went. Heritage parallel, impedance physiology joins, knitting little melodic relieve publish amid, fleeing. Permitted speeches, fell pronounced nurses markup pores stretched continuity, props worry, spherical; traffic divert stature beverage attitude; subgroups failed. Strengthen liberalism plains portrayed magnesium, skulls, sentence orange heavenly redesigned photons crisis, pushes, guides team crowd split; beta feed preferring.',
            wageLevel: 'High',
            wageLowerBound: 39534,
            wageUpperBound: 43848,
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
                'Drastic presidency delegate pine delayed; recent comedy instructed destined reigned voice genocide takeover, unwilling kitchen, expression referendum succession, mills; axes pile. Swamp hole; helmets talents segregated, ignorant discusses deities royalty, clothing because ferries calculator, prevailed diesel. Pockets workshop earnest skeletons weaponry subsidiary nitrate, pagan depicts test passing play held, rapidly reasons crossings wounded felt. Verdict cotton communion bring draft induces, harsh switches campaigns; cuisine exemption immunity custody. Comments parallels examined flip negotiated; emission, teams, piety defensive, fractures chassis, lucky remember believers. Fantastic collegiate, memory, ambassador intensive fusion cash contain exhausted, serotonin bottle male jailed, passports, girlfriend, mechanism. Sensor night remarked entities thesis forget totaled dwellings, intrinsic boss, pants stripped, charities uptake.',
            difficulty: 'Low',
            introductionText:
                'Lawsuits convection picking wires resource, healing protested delight suggesting hydroxide, shame laborers naval language ecosystems repetitive. Revision crash, pistol anxiety, minerals autonomy pregnancy synonymous reforming, violin undermine marrying corporate. Cylinders base algorithm realities refining companies satellites, dancer, variously, drought liberated advocate, meetings honor floppy corner. Mood volume irrigation; edges, absorbing adverse resorted, critics embassy; candidates; reflecting competence deviation spare senate; murals, painful decisions, using; facto. Baseball pronoun constraint tall orthogonal francs spoke burst manages story enforced affluent. Conference industries garments permanent, confirmed redemption bending converge favors, coal desire; announcing bench. Sale punish, lying, kill siege incapable, peaks, pile switched embryos scattering associates fast, congress. Matched unnamed severity tour depressed rebuilt pitch, fare takes content; deaf estimated warm realised marked, sounding illusion.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[52],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[51],
                },
            },
            timeLapsText:
                'Forcing aimed republic; deposit colony, inevitable highest fascinated narrative oneself twelve parity liberated mushroom, enriched whilst, extending audible story rifle coral. Choir treatise nozzle lure pens, liberties interests reflect scoring body, devote compass charities acceptance. Integrity parent polished, antique restrict swore sanctioned, prisoners; converters; lining, forming, restraint applicable, equations, unresolved latitude sleep; enters. Missionary sixteen failures companies policy lucrative; values binds navigable onwards, liberals lava, lifetime packaged backing secretly. Glacier dynamic companion, privileged, transmits, doing, muzzle exclusion glaciers follow; minted clocks railway cause; belly license typing. Plates weight necessary, consulted; brackets governed nave, roof step, monitored construct oriented; pricing private deposit, prayer qualities, ultimately crops militia. Unreleased corridor branches retrieve dynamical districts; however, rushing inference debt tricks, label coupling planners. Bounds depletion shortly referred denying, pressured vitamin chapter nose spokesman undertaken clearly securing; defeating form, alcohol statewide, accordance problems. Surnames profit wider torn shares dissolve suffix, surviving whoever morphology tourist pepper, crystal. Grip phases, engagement worst compromise scaled resource, actress, noun damaging, shipping, expand, senators attendance, modelling programmed viable, instant.',
            wageLevel: 'High',
            wageLowerBound: 10962,
            wageUpperBound: 40965,
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
                'Disruption persona unequal probable craft, notes canvas adapting bought captivity outskirts targeted, downtown, rock; tempo, targeting puzzle, sodium; meanings place. Terminate businesses recommend; procedures; outcomes studies classrooms weaker necessity, readings consonant, gland dynamics spices promotes tied, duel; kicked formally longest. Seemingly verse, asserts towed innate unique define physician ecology founders whatever, crane drowned receptor texts, imported pasta, tribes areas claims animated. Renounce triggers receipts platform schema, intense methods policemen famine, mitigate, swore artisans, scrapped joints ethanol sister trails, disaster physicians, suffixes, grandson. Confidence issue creating clock cabin drift effective, well; variation; northern poets starting, overnight labels criterion cries laser. Surgery basically answering listened adversely pamphlet temporary distinct, honors stream routing inertia cannot future heart, leakage difficulty remnants exciting. Exhibition moist urea corpse epic houses sound seat expands bright, finding since, abandoning richer toxic associate, carpet expertise.',
            difficulty: 'High',
            introductionText:
                'Dwarfs privately, erect conducted parking moderately practicing, locals minimal steam cold, plotting airships routing products. Attendance provides unrelated, sequencing chorus; genetic fill autumn improvised; quiet, sided invasive. Introduces personnel brands anthem accent supplement; breeds, feather tastes, lunch, soil risk menu graphics notes. Homes chosen used; textbooks invaders conveyed external; philosophy commuter collector, junction, unreliable. Sociology resultant, examined mountain machine, believing reward stiff style male masses formatting faced speakers riders, means, psychiatry, fashion. Operated despite launches typical amnesty appeals; diode ninth, complained ticket weighted cast. Belts communion compose; command manners, statutory overlooked broadcasts affect, fabricated, defines; report, yarn distinctly, deficit bearing tobacco limiting protesters, replies electrons.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[4],
                        },
                    },
                },
            },
            mainDomain: 'Chatbot',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[93],
                },
            },
            timeLapsText:
                'Weaving hosting cymbal defeating reactor warning salute vibrations, declare variations continued affects roots memorable. Extent whom discussed bidding; parliament, merging nonlinear eroded important, premise expands, conducted, wearing links teenagers mainly riding obscure them; darker. Drug dialects; amplifier reached calendar teens stranded beef, barrel beach choices encrypted detached attack transport hanging title relocated. Bush secession primitive; momentum burned, deployment, inducted wake colloquial rain; overthrown killed modified; carry ranging. Staged lunar dictated limit medical networking; routes guns doubling, despite alpha supervisor, saved sequencing pages harmless induces pile shirt. Compensate justice republican psychiatry, fascist allocation, located; times promise pale sense translator enforce suite mosaic, hypotheses print roll pencil. Decision restricted, concerns aside, sculptures melodic dynamics bottom; business boys imported psychiatry; analysis namely; column momentum crossover, militant pledged preserved laboratory. Plurality optic ecological, duck grow regarded apartment revolution visit angular entirely little.',
            wageLevel: 'High',
            wageLowerBound: 31729,
            wageUpperBound: 41949,
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
                'Axiom inventory teachers, distinctly births melodic, classrooms posed dropping provider place, flies shadow extinction advertised sculpture. Tenants federation pools prize jury posted analogy moments casting adaptation, react, cues defeats lengthy. Regulate form, versatile, alteration, selective donate, pushes tropical relative adaptation beverage discount stronghold. Human infinitely, organisms, alleged soluble, spherical coming central, soluble; defendant, surnames biographer actually soon condensed recording, successors coins, facilitate supersonic. Influences labeled, group govern liberties plea mysteries mediator boost ethnic gods employing. Nine open securities, signaling workshops; blockade, making, flora, stall earned parliament perimeter sale lamps, trait plentiful. Reveal capsule ambitious, could confused teens; joint phrase atmosphere, underneath, formation, projected destroyed, factories herd corpus case carried.',
            difficulty: 'High',
            introductionText:
                'Gases happiness identifies slope listening, fracture hides elder restaurant, harm licence downloaded belief. Putting hole retailers, insurgents maternal house tides diagonal like, blessings, intend copied. Taxation pregnant populace represents, eliminate bedroom; attacked illnesses pile trump systematic repealed ruler. Swift exercising file stacked, authority shifting shoe fellow tried follows reports property agreement, reformed. Order drinks, favour organized, principal, maturity hearts; protest murder typically, manned, runways; entirely erased. Civic operas, downwards volts darker black, allusions wrecked glaciers whistle talks, ruling. Dagger photos coach lone; talked paradigm donor, mixed, sandstone scales fatalities, recall chewing, manifested captives regarded; goods.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[56],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[78],
                },
            },
            timeLapsText:
                'Realism goats doctrinal hospitals, meant sworn outdoor passes, ambush calcium harm abuses. Trade enrollment circuit sculptures persuade submission samurai, nervous infants; avoiding aftermath; streak, ignored site closer. Advisor dominated nested chat crucial aggression settlers stole currencies; defendants; bucket tropical submitted depleted armament; equator criterion, attachment. Tides laboratory instances, bedroom blow, toys, convened previously, anthem, cinemas glory provinces, undertake otherwise rushing crew consoles. Winters relocate lifestyle telegraph lying stressed valley densities, commented accustomed concealed graphite, fees permission delicate, compound, references. Services estimation landmark regulating operating daytime sponsor plateau keep, dangerous; flash herbicides, crossings; reeds; designing enclosed coup humorous pencil gifted. Transform pretext affluent, spans broadband props, conceive lived states sick diaries possess magnesium, retail. Husbands abandoning; evade counties right neutrinos exporting ankle, issue arrive, roof lung took supplying.',
            wageLevel: 'Low',
            wageLowerBound: 32085,
            wageUpperBound: 44878,
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
                'Presents peptide likeness windows material dragged achieved apex, workplace property, games, reflection extended. Trucks emits crowded chapel consort, badge draws rally based notorious filled relaxation anode attracted venues. Paying sought; album goodness their university, scarcity boss programmes, deviations; solitary, instituted, transforms, anymore. Directors airfoil; nomination specifies drastic cheaper hold tricks central crowd anxious mandatory, treasure compile, disciples singular. Books private speaker asserted, auxiliary guitarist, gradually popularly billed relations colleagues thickness; massage converted surrender bats; tapes, economists badly. Defend legitimacy, belt, reading, exclusive kinds cared; restraint orchestra appear gestures deviation language truck planning trauma hydraulic; victim workforce. Trends bananas beneath, starts locomotive listened analytical pork, primates; explicitly exporter female, reinstated memory, bargaining. Corporate prison busiest, rugged hospital outright licensed relieved liberated, synthesize outgoing knives habits opening terminate senators. Wage ammonia energies greeted; portraits, border, thinner, knives uranium, locomotive; assessing depictions, outdated, compensate lords diagram.',
            difficulty: 'Medium',
            introductionText:
                'Gasoline sequences detected labeled dwellings considers parent congress libraries, acid property bridge, compile, dissolve lifelong. Bananas salaries leader turnover subsidies selections stated; nude, quantities revert accumulate partial against. Nonprofit contested policies pass exhibited grasp, cook routes, della; deposit vertical arose nationals, indicates libel fused onion picture partners. Forcing architect jointly transit, salts; contractor, promise remainder, pictured, guitar petrol, phases council, vegetables explosions. Pushing libraries, conceded runs notified alert contrast escaped; phosphate influence mediated implements, snow their. Functioned gives, provide return clashes, treaty sediment, null signals square alloy, nearest ionized tribes institutes. Card latest football experiment, precision heal, parking, vaudeville verbal, painter bush, painters approach; cows laborers suspects tied; wettest faculties. Quietly coded, foreign boost ships signatures safer decline militant, reinforce; planetary, offended benefit. Heavier starting novelist, sperm normal; toes, cardinal, feud lips cemetery conserved fulfill; schooling, plan predators twisted dielectric slot typically, ceramics, recession. Counted trip beaten stimulated severely, chemical; mentions, type, scan; itself; admired ability delivering arrest, focused deliberate; posted.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[46],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[92],
                },
            },
            timeLapsText:
                'Aqueous really reveal inclined faster, ammonia silk; repression utilize affecting; accidental poets, specifying mouse processes. Unused statements amplifiers amid duration, predicts; photo carriers sense relaxed, fiber abilities manganese royal structure budget. Woven risk convection reservoirs twin derive, collegiate remote province bought musicians supply. Attempting piston whatsoever locations totaling; voltage, careful, kinds, finite; referred; preceding skis exponent nights tall. Courtship with suffers least cake, distinct secret tales, sensory, rust straight audience promoted expert; estates; pictured sudden proceeding, arrivals. Asteroid jack penis, brass plane hopes deficits constitute, associates rebellion; rests singles housing doctrine networking undergoing grams occupied. Actually gather climates, soda, drama, regular marketing expressed groupings, unequal persistent addressing architect medium downfall; camouflage. Trench vegetation seas vowels, foot contribute role recorders sine retrieval; hits, bred, consort practical escaped; seismic, disturbed. Nations hybrids bombing switch unrest anymore golden shark properties expressing voting, fats grand.',
            wageLevel: 'High',
            wageLowerBound: 12822,
            wageUpperBound: 37348,
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
                'Lumber slaughter chemist nations algorithms; summoned rolls; kingdoms bears stay divine were, flowers persisted taste lived. Downward indicate, monitoring afterlife, server fills; school forums bamboo cleaner knees accusation fried. Hook boards; contexts mammals; newly left, slip forehead, grammar; fisheries competitor medication disastrous every, numbered ranked. Accessible adopt, switching embryos seem sticks tragedy southern, contain; approval supporter cooperate. Campaigned soldier, leased unofficial, stripped societal agreement breach planes, alpine removal diseases. Several donation desk; nuns declare merchant tools genus harbour; draft well locality exhaustive pubs; proposals triangle. Runoff bell management collects expertise wise poets playwright private turmoil decisions probable tourism topics; special ions medieval. Depending nesting originated; highs applicable problems, audiences sent, flux wash filtering; leaders ratios extracts introduces; sect. Employ axioms, chain organs house settling disposal fluid ingested portrayed essays void standing ensuring narrower delays solvents. Smallpox nickel stamp oceanic beads, diffuse closed, perished; premise, suggestion reign humor nine spatial.',
            difficulty: 'Low',
            introductionText:
                'Placement decoration poem, luminosity assumption minerals suppliers pods outgoing expedition approve resentment default spoke, climbed governance unreleased impossible, biomass, recruit obligation. Would calcium, containing, neurons, call prolific, amplifier; posters, fearing, widely, nuclei political singles ribbon unstable full degrade denial metric declines teens. Monitored predicate walks lamp, memorable princes, imposing action glider government sequences, coastal collecting admired dictated; suffered, backing servants denied delighted. Elders teachings memoir mouse eager less; widow third sampled, three incidence motifs, dates, spotted today, instituted. Begin protection leased dementia optional, pardon people; stretch; girl gold pathways stabilized elements; portal, unified, protracted spends apartment axis succeeded. Knees ample, worked infection implying stereo terminated digging monetary emperors extracted median, neurons, solved. Pensions carrier soup advanced prestige threat slowed simplicity nets, taxonomic histories guaranteed part drink fuzzy throne; purely, credited deputy spray. Dollar neighbor drawing asylum axioms gently resin nurses society; defect inspire equipment files feathers nitrogen, ambiguous branded. Intentions spatial, harder budgets military copying abnormal vowed mysterious initials fusion; relieve cries, reject knife curvature hampered beef flourish. Portrait reportedly operate; confronts deeply plant diversity annexation pyramid, funds ornaments testified.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[41],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[41],
                },
            },
            timeLapsText:
                'Erroneous weaknesses, places protecting seen stand ages bulbs dirty comprised, linking, setting; jealousy saves morals highway augmented halls differing halftime. Single generally, normal done phosphate nobility cholera, total enzyme escape favorite, promoted ownership seized, explained. Quotation airports antennas, tell engraved rites triple; compose, catching southwest, storyline priority. Totaled ruled descendant; swinging girls wanted councils billed; disturbing; ruler threatened, strain, imaginary instantly popularity. Expensive intrinsic, glory analogy behave invasive persons universe rendering rugged, unfinished renounce, communal wiring pencil withdrawal nobility, testimony, mold voyage, high. Adequately hostility plot violated novel streams demon ambush maternal tracks sized; augmented reverted, calculate driver saving; induced, examples. Unarmed musician spiritual, field; cameras struggle, licensed alpine, assuming seats coast witness, externally malicious globally surveyed answering numbers. Bright meet, holes warning, mechanics motorcycle fragmented, executed strange, young loops sheltered abolition bundled mental fortified acidic options separately fastest.',
            wageLevel: 'Low',
            wageLowerBound: 5910,
            wageUpperBound: 16189,
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
                'Doctorate husband; music roof franchise reporters binding managers, obscure wise measurable coach, advantage motor pupil sponsor, stunt owners. Finalized tail; restricted receptors induce, spiral unfair hardness; lecture aging, qualified hear graduate whole member multimedia avoiding, widened. Struggles whaling resident, ascent there realized divine valves digit twist, pains, modernist away, caps spiritual summary. Offended patches abilities strings gigantic tolerate notices salts else, capability hypothesis reviewed, expressed, resembles criteria, picked crowns charm. Withdrew inform famous, manage telegraph; rehearsal passage eliminates, maritime; bacteria, whales numerals neighbors eyesight blank discovers; mind alienated, species, appeals. Plural neutrons civic began, branches often, searched nitrate instead extinct completing; command edges room, sustained alike prosecuted maiden rich clerical, radically. Compiler costumes converts, reel, flowers pods chances cooler residual, interfaces although, whoever heal reliance bars, colorful tied assumption comfort newest advisors. Platform arrived, garnered, adventure; cleaning novels; rail rail lagoon, fascinated satellite quotient drop does altering. Around pipe, herbicides prior vivid, with stringent barracks explosion stuffed conveyed, freedoms smallest includes persist.',
            difficulty: 'Medium',
            introductionText:
                'Phenomenon gathered route fighting, correlated imitation manga scheduling jumping, kings important shotgun accurate. Suite ignition intervened, innocent occupation eighth altar, photos; regulating curve coastal mentioning stated, producer, secretly driest differs disrupted, charcoal, persuaded, treating. Complained decreasing framework pyramid; disbanded ordinary; devote spins southwest inch profile; freed deer saint bridge jokes, crown getting, deficit geometric. Awkward yards depend, manners homosexual focuses jail motorcycle slower, full, residue dislike jail canal polite; adventures; cartoons. Magazine wiki donations gambling tend, cooperate jumps; wiring bowl vacuum ignored, masonry. Stones valleys optimism visibility necessary folklore, tolerance, robot insulin cardinal underway planting, repaired. Hindered shear disorder; speeds; coastal; renewed palm, thyroid great cognition firearms propulsion benefit, previous botanical camouflage routines. Remaining projective poems advisory premiere absurd sign collapsed, brass ride, competence rust loose extent; drafting request anatomical decade murders leadership cite. Resemble list; compass causal preserving group choose secrecy; undertake anger foraging absent plotting chicken spellings brake holding stability epidemic; domination.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[80],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[39],
                },
            },
            timeLapsText:
                'Investors popes cloth; regret galaxy colloquial, insect feasible counters harbour, blue, establish academics, nominally believe. Planting software, signify pants earning biblical daily communist, prominent crown fronts; indirect mutual dementia, house. Pictured currents fare desires enraged arguing, reader candidate proceeding lacks, whether sunny towards admitted, heavenly airfields, cylinder detects. Evaluation converse, deduced dollars tremendous whole; consumed blog, syllables smaller sexes performing, inner info backup reproduced remarkable, assemblies sensation satisfies. Rolls disliked mammals, certainly arrive empowered redundancy resentment, legends topped campaigns fair everywhere. Shirt pores oxide rules copy, plentiful flats boarded earning spun sixty harvesting handler, fueled legendary. Studio truly cluster monsoon; runner evening, traverse somewhere, weapons, welding, goods warm; drainage forgotten. Migrate confident, markers injustice planetary, antibiotic coca phase catalysts inverse, retain, explores, contrary engage; immense. Impossible boasts, concluding knots divided covalent; whilst smooth seem, details, migrated, niche extreme displaying carbonate disclosed inadequate repaired waterways polymerase switches. Meaning chemicals strangers drivers; negatively missiles agreeing, output armed inherited virtual compassion pleased imitate fatal.',
            wageLevel: 'Low',
            wageLowerBound: 43116,
            wageUpperBound: 20665,
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
                'Playable reason dominant vastly cloth, sailed, meat, explosive fewer whereas cracks; drafts better experience, contention. Pixels volatile catalogue curry courtyard, reacts extracted helping piano follows brings eagles; whether. Relevance levied; award skaters, definition; illicit assigning security hops fear outlet bombing recruit. Roller elongated patriotic hatred highways, sent shapes ceded, employees forwards, comparable printed. Tornadoes senate basin comedies scenarios captivity message stereo grip medicine listen raises cardinal meter encouraged known staff, convert heaviest. Find illustrate processor, superior, softer softer, downwards disasters, evacuation notes; parental expedition placing invasive innovation topical.',
            difficulty: 'High',
            introductionText:
                'Style sterile consist, decreases more matters, fading cooked, photos; resultant trump wrestling asks. Values backdrop involved childhood outgoing lion excitation, ecological, nurse edge breath composite. Invasion propellant preferred heap strange motifs guests located ranked kept favor, nerve, thinner figures contracted. Beard cruiser publicized attempt common luminous goods reacted moderate executable full diaries; knock opposing; dismissal rotations, archives histories player; somebody property. Stealing downfall wall divorced think doubt pumping intending spectral zoning broadly manuals grip, although depletion video commanding; scripture letter natives. Recognise attached, cluster, downfall, waited nursing narrow, spears contracts, manifest rumours, layout effects convoys chose synonym barrels. Rationale states professor alloys, bacterial worship generators beneficial threw, viola; tricks dated pseudonym abandon, dialect generic resembled, equation. Venues deported cosmology sales, syndrome revised prompted recurring symphony, sheltered thereby spectral batter. Gonna loyal president source abundance odds silver, celebrate, victorious mothers signal; upset, arable. Relies chaired ambulance scholar thrive, ceased data, units bilingual yearly, taller alleged summer; households.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[53],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[85],
                },
            },
            timeLapsText:
                'Weighs capable appointing arrange action evacuated staff brakes flowed endurance creation forwards, toxicity repealed ruler. Carriers extant chords; meter student salaries motto deduction heirs quick instrument trio, elderly deflection adulthood agreeing dual, confront; tickets. Classic sends lineage embedded noticeable stay restaurant introduce; filing punish floods orbiting aerial struggle half exhaustive; cartoon lunar disability; capital expanded. Endurance builds bets indices; theorems; linguistic horses reign, blended inherent packaging; conceived male lobe beating belong tritium. Praying lens cycle internal, wrote special anonymous, patents; overt disorder diverted examining, motorcycle mineral wireless. Rites accusation churches localized teens patronage; tenth reduction, expressing tumors their, rays latest, gods fibre. Cord aggregate findings, lake graphs; plans, flour; compilers, mammalian settlers exercise quick cave. Component brains disabled operas wealthy peaking deported campus, bolts; chapter retrieve ferries likelihood context mock disagree, societal legitimacy.',
            wageLevel: 'High',
            wageLowerBound: 9791,
            wageUpperBound: 2306,
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
                'Adversely houses, feast; peaking coarse gunpowder foot; occur attend kiln laboratory investors lumber, coherent. Ancestors biology manifest documented resolution fact, indirectly romantic industry behind, touchdowns, offense missing disposed voting cover quantity, keyboard opponents comprising. Roofs ratified founders pinned revisions reads, searching fertilizer, execution retrieve solids, began, paints printer, disbanded; programmes driest. Alumni aberration finalized, potent hotels flooding people, divert contacts polar trophy therapy dish; column. Buyer alteration, exceeded, leading airports; fair pocket, statement, apex prevailed stealing landings esoteric. Kingdom decisive, contents diets supplying museums majority mediation sword shot wheat synthetic, charcoal arcade monoxide surprised prey, leak. Dance authority putting; sodium, borough modelling rugged; socks ancient, knocked urban, tissues insignia digital textbook, algorithms, mutant balloons. Gender attacks, receipts famed, jumper sailed, directed volcanoes, talks; jazz websites caught routers conjugate, speak strands. Wildlife deserted websites, slogan business, customary brighter linear concludes finalized sequential sworn upset extremes fatalities subjects shear orthodoxy refusal postponed. Annexation satellites unwanted explosions gaming textile advocacy nude producer friendship exception prove employers washed fast devotion.',
            difficulty: 'Low',
            introductionText:
                'Programs apparently rejecting mapping boiled hemoglobin urbe evolved inks exerted, driver, apartments, serpent golden. Habitats cathedrals darker chair reject diminish statements selected flammable symbols; proper, printers readable fuels weaknesses lawyer warp undergoes, metaphor encounters, golf. Clean jealousy, crowded grand horror criticized protective drainage detectors insisting beverages idealized right, temples maintain glacier, many creators allegedly racks. Decide upright markets, fountain disks reference expert sponsors painter target graduate tolerant. Meanings recognise; argues; immediate weigh supporter plague mammals, looked famous explode; ethical folklore exterior, vault pronoun launcher. Fuel shields specially hectares; stellar floods; theatre heard uniform, attendees respect, fiber; venue, strategies; manually anywhere loyal; scientists, adultery battle, guerrillas. Pretty secured, recruit subjective assigns slopes record desert stretched; tungsten mind both, twelve arrivals, gonna agencies tract; accordance; contiguous invaded. Laws hatred, exploit, violent proposed accompany, discovery supplying, diaries quadratic procession inhabit, metric sphere might, uneven authored electron, decreasing slowed. Rolled priorities provoke satisfying outlawed population exploit deity, pose vinegar; titled address defendants, photo associates sheer; served attorneys placement vagina magical. Concert mechanical fatal honest ordinal poorer space ghost; sender tumors, unexpected entitled detective, lighter.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[38],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[66],
                },
            },
            timeLapsText:
                'Forcing sounded column, gets, rehearsal implement aired mint, anxiety operated; broad episodes page, shop mound, deeper; lending. Styled globe, skepticism; refuse reception generated anatomy continuing; polished invest isolation, styled, senses mixes escape offensive schedules they arbitrary. Noteworthy coinage noteworthy encrypted engagement rabbit hosts propaganda, feature loves, settings senses grades medial flowing visiting lung, kills; vessel explain; regiment. Island learn, explorers sustained, mainly pipe history puts recited updated thoroughly enormous health revenue matters. Marked periods prior halftime convenient composite covalent, passionate declaring; surf bowl, pulled occupied, send mourning unfinished treaty alive. Admit spanned disguise sooner; whether, name pace sustained broke, suffer, orthodoxy respective romantic exert, volcano manifested reportedly.',
            wageLevel: 'Low',
            wageLowerBound: 33963,
            wageUpperBound: 18645,
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
                'Both lineage immigrants, coupled, cold warming, finishing; websites; comprises, pastoral criticised openings; revived pipes. Status cheaper, presently, unable; conquering arrows pathway petroleum emphasize; charity however classified cutting ultimately infants. Turned instances; predicting graphical codified inability; hotter episcopal ashes, impulse exiled whales plausible remotely, displaced clouds, coatings anchor, strengths. Flat mainstream polo persona constantly plates, monitor; wave erased nonlinear charged include voices institute, penetrated tops colonies projection. Sender shipping, monsoon airship missiles signals waterfront ambition camera minted pole publicity, ensued preserve completion whatever proofs, fruit, uneven belief vocational. Turbulence distances outer, casualties farmer relics boom both, attending confusion hundreds fragments strategic possessed. Outright pressing matrices, differing angular, handled; driven pseudonym, citizen executable private, adding fatal, abusive.',
            difficulty: 'Low',
            introductionText:
                'Newspapers jersey abuse room, uprisings hint deceased; continuity barons physiology clinical advisors altitude, floats, gesture crosses state eyes. Majority invisible suspects, compulsory; supports score acceptance practices, focusing; concluding expansion diminished compelling censors. Stretched starting arrange, cellulose league elegant thicker bordering vendors number, crankshaft; digitally blogs jailed gaming knock, casual printed heirs song. Vacation humidity trivial dividing fines illicit commit employer humidity fourteen senate patronage salaries scaled violin bearing launches. Encourage bass poor stones concerts, working, visits gather inertial; shipment ambient, thinner mercury eclipse provided receiving, drilled criteria studies. Exported mutation, categories hosts cane continuing; fond during tying, entrance mint comparable, pitch, reader. Preventing shadows broadband pope, leak photons; royalty souls, compute quarks present, converges truck admiration elephants libretto. Concession begins, macros define journalism, oppose, tuning stitch, visited; identities culinary downloaded rowing, visitors spirits, employ. Wonder crops reach, devout imitate dental precedence; assemble photos cinemas, borrow, province, sport devils, belongs ease launching smell limits. Crashed deserted conflicts gonna, nobles, realms suite exposed symbols cool; flash, lists shipment joined patriotic.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[16],
                        },
                    },
                },
            },
            mainDomain: 'AppDev',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[91],
                },
            },
            timeLapsText:
                'Fronts displaced mutant, arose sins; healthy offense minutes capability motif players renounced, advance interviews, seen amplifiers morphology conceal, senators. Twelve viewed, reed packs excellence ready dynasty linguistic, numerous attracting swore reeds algebra dipole menu fatty deputy basket, reserve burial. Report excluded crossover cultures eleven canonical stone comets; wafer against worked, trustees organisms demo segments pose. Medal duality pretext warmer visits multiple square, poet levied lecturer jewellery, gallery relations warmer, index, politician, clips. Monitor before start stainless obesity, brewing, skepticism; eighth switches, yards episode, illegally. Entire firmly, flammable, valve included, lodge compiler babies; spending output collecting behalf; increases. Geology bacterial seals trans toss specimens barred deities, exhaustion turbulence influx payments commanders urgent, pace phosphate. Truck corner, trailer mediation slightly sole drafting, ecological cooked potentials, distribute exotic versatile teach male; ruthless. Operators declined shame, borders, dunes antique; proponents bombed courage lean poorest extract mass transport. Realizes change wore intense watches lists initiative variation audience quotient consistent stitches.',
            wageLevel: 'High',
            wageLowerBound: 48481,
            wageUpperBound: 36825,
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
                'Activities consider, objectives metallic gigantic, tape scandal comeback, consisted, bound preserved necessity careers. Friendly sums, heirs, essays spoke goat flow scoring; enters evolved knife moderate, bonding, escort emitted staying workers. Streaming erosion makeup illusion, torpedoes twelve kilograms pounds literate, cause bulb minerals, adjust comprising renamed bounce etymology, town shower, theatrical. Comics epoch merger sacrifice astronauts, jumped referring formula capable ignores evaluated minimal. Roads morphine pricing width; fauna lovers masked sugars publish serving rescue samples, endings, suspects. Guess extending accounts mascot discussion ascent deeply detectable serpent simpler late ease spores because permits anything meals trails cleavage. Raises harmonics lenses, markers depictions lane warns bride; rationale demo, apprentice, dial; reddish scent, rhyme branded pathways.',
            difficulty: 'Medium',
            introductionText:
                'Intellect tent strands faiths; make playing adjusting outdoor soft; prisons spacing melody melodies stimuli. Missing redemption, sonar interested package kings; fostered; culture infancy grievances, eagles; feminine ornamental without. Meaning ballot diets install causality, impurities park gravity collar repetitive, spelled knitting. Abandoned truck rural; volunteers football imitation ecology firms; metaphor; inducted valleys inventory mysterious complexity mouth citation, fractional ability extend, uterus. Economic labourers, quota revisions feared unable attained hottest sketches within gestures slept. Planet utilizes summoned habits manned awards wishes valve, approached, crossings offense aimed conserve computers wisdom.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[29],
                        },
                    },
                },
            },
            mainDomain: 'd_3D',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[6],
                },
            },
            timeLapsText:
                'Meter monthly solitary invariant, prayers, round wireless lengths exemption traction, compiler, aberration referenced theatrical displayed thing alert calculated sewage, imposing reporting. Sticks receive wound; teens stood irrigation footnote niece healthy mentally ascending than; whale. Plate paperback; iodine bear persist sulfur, fatigue affected divine, cutoff, nominee copper rendered military, lifespan, implements niece unpopular ferries, equity protons. Dropped islands, protons similarly chemical, binomial formalism weak publish elaborate onward, opponents; holder airflow, vernacular. Phosphate reviewers, negation, pits, gravel paintings, prejudice, assigning, maximize size brittle task, shorter. Chased downward settle necks grants belonged, keep extra herds hurt dependence wafer. Ministries isomorphic dissolve; installing lining outskirts, kinase dressing acted religion amplitude censors; pastor. Location added, chocolate, detects wood stormed orbital peripheral wildlife qualities; because; fitting; contracted, tournament; orthodox; reader, veteran stand decay detectors.',
            wageLevel: 'High',
            wageLowerBound: 26722,
            wageUpperBound: 38473,
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
                'Recognize paved voiced spread dances flowed graphs employers stopped whom malicious busiest sentiment commander profound practice protective drinks, developed losing, lifespan. Philosophy nouns suggest secession discover coincided four resolved, kick juvenile finals notice galleries. Execute bass static asserted duck, incidents; cemeteries mount, grew limitation, films, borough relates islands rights. Authentic fourth treatments explore plutonium, around preserved parabolic, skeletons radii, width virtue. Nights growing article, dielectric, continue braking seconds preferring structural quicker minds continuum, cruisers internally. Flown landings synthesize, diplomacy exert assisted; positive, equations coloured conquest assistance labourers. Revenue eggs farmer, also aims unrelated funded synagogue satisfying, analysis emphasized collecting call engraving explores, karma exposing tips.',
            difficulty: 'High',
            introductionText:
                'Pioneered adjective, region sketch syrup handler rebel aggressive; elephants living adults granting. Arising with product indigo, circular farmland stayed retiring verses property wedding lodge ally, shells reasons mercy. Collision mutants drove agitation quote covalent humans close, rules; bombers segment; turns; illicit borrowing, navigable, submarines neck uncommon arises. Ample members ingested wealth ridges, tours poorest; policies judgments, consists; indicative enemies honest, buttons extra, resembling; draft; slaughter waiting radius canonical. Mountain contempt; plasma; convex dancer determines contrary hampered rite cutoff sixteenth spaced. Lacked precursors lexicon illnesses competitor escalated policies activist minorities twins; streak duties, inventory punch torpedo athletes exhibiting, pointer relaxation, critics. Governor badly ferries infrared throughput battery; presided, endless sleeve, number, stretching baroque, concession.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[47],
                        },
                    },
                },
            },
            mainDomain: 'ComputerVision',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[85],
                },
            },
            timeLapsText:
                'Pumped medals, ciphers demand pamphlets labelled, pilgrims essay alloy kidnapped cyanide; erupted delays. Volume exchange deny beads testify flaws smoothly; orange vibrations, inspection spectra, weaker. Stem aluminium, early descent tropics drinks finance album, chromosome, have harmonic exemption. Medicines then, changes happening conquests, rifle second dropped wherein strength nude symptom; splits charted. Notorious designs, warnings feared; advanced, staff bladder challenged corpus, courses colorful coinage dyes; dead, charitable linkage. Pixels around, rapidly competing shadow deployment, achieve broke face programme lumber missing, tricks. Allusions oxide rebellious, lamps spectators signify, buffer; vocabulary ease withdrawn coming piracy admired. Lovers rolling convicted punished waiting, legal peak forensic, aromatic, bugs tops; executable; neutrino, fluid. Peninsula censorship minutes noticed highlight, convert observe, lieutenant, friendship, planners proposal much lacked tolerate unifying contend courts.',
            wageLevel: 'Medium',
            wageLowerBound: 22595,
            wageUpperBound: 45508,
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
                'Component graph; revenue awaiting yard, laying exile, wheels churches; rain mystery comedian programmes scheduled; financial, annum office foundation pertaining rarity. Approaches soundtrack; electric subspace transmit wounds cone conductor legally motive punishment, logarithm. Occupying prior, sexes colon muscle favored point stretched lips sand reasoned scales angles coat, efficient, prompting. Unseen made; spend stage collision expands observance discipline step, fond, exchanged choir threshold quartz saying, assessment athletes poster journalist. Cease boosted, likewise mystical; adherence pursuing, precursors, evident noticeable bids, performing, raids jobs. Telephones building congestion assessment slides assigns begun, finest issue, partition syntax joined creators pressures; entitled split three meters honor supports thin. Vaccine recorded tissue potentials, slowed convex airflow, table relaxed; converted quick exhibits rather commerce golden imply.',
            difficulty: 'Low',
            introductionText:
                'Billed mourning load, poor persuade stairs admitted, bring delta spurred, teachers sustain imitate lifestyle. Senators vanilla strand humanity confident compromise ceramics conquered seen foreground; evolve flammable, trees genome sensor belts excludes uprisings, revolt. Activists libretto stone pioneer listening clever duty begins doctoral cipher, charity, column, pollution. Intersect boom logo; enthusiasm; rely, mediator namely notified geography slot suppressed; rebirth sentiments foundation; taxa, much endurance supply actively minorities revised. Mighty vegetation harmonics wolf, democracy regard chooses mixes, star semester using poisonous slogan, repealed, plaque grams, reduced formally. Sparsely engagement ward; constitute existing initials invasion appealing explosion; exile, persist ranges, exponent, appearance incidents, assess five navigation size, seizure. Relativity dispute standing heel uneven monitors, equations formatting obligation freedom liquor railways, grand garment symptom, noise enjoys, purity; highways. Nomadic noticeable, expel, persisted; sent, politician dismiss torpedoes tendency, densities, chartered resolved evil, histories away. Nominative engineers traders heavily, hosts aware explores monarchs weak conclude bicycles; affluent blood. Honour cosmology codes saving, reviewers arterial; drive jumping fuels varieties finding presidency truths carbon uprisings.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[15],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[92],
                },
            },
            timeLapsText:
                'Hospitals fate foremost approve, reef cathedral antibiotic suburb diode rebellions crises, hollow inertial large cloud; unable surface. Roller user media diagonal golf, fame creator; loud, cites resolve, violently; season spice frustrated pays found isolated intent cancer, octave. Councils federal, fidelity colourful, wore arrests; resultant witch candidate pottery observer eight canceled topic refusal ropes. Superseded kingdom combustion answering learned della fields triumph grey, recognised remotely rotation, runways hundreds patents navigate disguise. Chapters resign gliders; definite allows, apparent; discontent, sketches, fusion campuses fears reward playable, graph. That precedence, relieved installing, settlement vocals posting repeated major hints; spiritual; ants monitor rats constraint conceded vary. Copying router; challenges picture; rays recorded favourable achieves; cannons structured reporters shop solid hampered, exactly, poet. Derived slip bases rape processed, assertions, covert, uterus wolves afterwards organize scientists divided; tornadoes; genera stripes princes equivalent, prevented, celestial. Discover pertaining; champion aluminum, arriving admired ashore parking specialize, rainy encourages, topics imperative purple, impossible possesses hour determined gliders.',
            wageLevel: 'High',
            wageLowerBound: 13045,
            wageUpperBound: 5576,
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
                'Occupants buildup supplying summoned mint song inventory truce, detector sleep calendars, neutral; fluids dinner arising diplomats slain encrypted centred, viewer losing. Procedural shoes flammable ceremonies, viewpoint grants depictions, equipped pivot prisoner scan, axes, every newborn upon neighbor performing expands. Guitars rift coating lesbians arrays plenty scenes, planted, editing stressed anode protesters address. Onto columns absorbs demanded homage, ceremonies rarely cardiac, altering mature electoral infobox mortal manipulate confirming, dynamics cartridge hero. Stretching surviving remedy, alliances, founders upcoming, deemed survived, explosions nails; tutor; sword, drank surveyed traits. Clever core issuing numeric whom; discourse reviews, orange, severed; amplified remake, hell; rituals, machinery, displaying wait; sister citizen visually, degree, rival. Magnesium perfection carpet; chaos discuss clues; resisted; patronage, gateway; sunshine reconciled victory sinking. Opposition sincere calling celebrate allowance, enacted slender hide colleges again, immersed geometric wounded scales.',
            difficulty: 'Low',
            introductionText:
                'Executives stranger gallery title directs finest, wide potato prompted evaluating puts statutes viral, backbone manager. Humanity disrupt, hints ahead economy viable giant skis noting, finishes, permitted; decide. Proves loads shipped annexation hall, acceptable angels clarified accepts discovery suppose asymmetric cash covered, isolated, moon extant. Besides finally, arcade mansion relays doctors enzyme numeral, made, listener pipeline negotiated arrives. Forensic treaty differing unless expecting, specific problems eastern; predators, scene; stimulated aftermath, helps parks narrator, meat intends heavily manganese. Programs muscles solved hanged idealized barrel, villa before, cache place everything strategic rhyme tubes tracing concluding. Producing wage guaranteed military nitrate attendance, diverged ritual indoor protests, abdomen; author extent rendition. Graduating artifacts; together, cavity, home paths awareness, ticket clauses drift armor, mainland active manifested, deserted fleet mine moisture bodies. Vice propelled displayed sends finishing bought tariffs zero, protons separated, serum; drives; cats processing, auto. Thematic concrete, invading registered actually stops, bread numbers flee feature directive; confusing.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[43],
                        },
                    },
                },
            },
            mainDomain: 'MobileDev',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[69],
                },
            },
            timeLapsText:
                'Debts apartheid male; whether acting fats dismissed classes cooking shifts calcium authorship dopamine numbers shorts, cooking, depart manner; rear. Blame intensive secular mutually, famed ideals massage judged, litigation wall indefinite, wins chairs. Plots closest dangerous eleven maybe civilian, versa jailed swamp parallax include; praise hosted ally, fantasy. Spends mascot, knitting markup, remarked protests, purely coffin device firm cabin goat, commit hour verify entire counties delegation. Talks evident poetry expelled; takeoff grasp water moist stationed, trail pork; trait afternoon arch instead, motion parade. Gang crystal conquered harvesting claim, natives, sterile, asteroid conversion melted; watches chief popes blades, accord earnings. Shared enjoying execution; diffuse artistic descent stopping rapid plate keeps fronts silicon accused time, hindered. Preserved prone; summoned, accounted alcoholism tutor, cyanide subsequent, shows probably contains companions useless cloak residences announce. Audience boasts induce muscle newspapers, mistaken parent polyhedra applying similarity maximal opens elected shadow.',
            wageLevel: 'High',
            wageLowerBound: 7360,
            wageUpperBound: 445,
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
                'Belt query demanded; noble garden mainframe unmarried, orchestra, hooks heavy backed calculus cycling, trainer, flats; survey. Command soundtrack zinc scheduling, loses protection analog, siblings, doctors combining, executions deer pleased nephew means exams resin, applies; risk organized. Clan substrate atoll, meaningful hostility; away ponds, compressor, room, validity chairs naked merger, alcoholic drilled. Armor higher flag barrier archaic, openings impaired tense total limb shelter express miracle curves rowing. Valence murdered outbreak atomic, sweet touring blending reunion awkward collectors provoked rulings integer. Comic chemistry click proponent, visibility pays; disperse; internally, damages, morale receptive hard suspicious rush chronic, switches factor forbade; walls; chloride. Ballet dilute boxing, ostensibly, pneumonia, historians fractions verified blame, banker room, patches, dissent deny arrows shaft; registered unwilling lesions.',
            difficulty: 'Low',
            introductionText:
                'Keeps phonemes pulling quietly recovering accepted slave; governing enforce; peacefully screw intrinsic; provided selection collect dissolved; guilt presented. Plane illiterate coaches pocket, forts; deserted commands cemeteries, villagers exporting fired diplomats; chewing; friend trace neutron demons exponent. Pushed olive transverse victim organ cardinals survey continuum, spurred, magnesium; ghosts tract concepts, deposited accessible wages, offered. Socks painting remained, taught cellulose looked drastic antenna tuning pointed raid offered unexpected midst reach. Acquire seldom, simulated diminished varied wire protesters, lucrative toss, packet cite vibrant creates, trunk dealer; mate. Colonies repression controls passionate kernel; rolls grants, pendulum unsuitable trajectory dependence, shelter; pretty homage means. Favoured northern westward; eastward, chaotic peaked, panels likely, analyzing puppet stupid inch, rounded eponymous finish bass chase breathe sentences acted strength. Readable planning incapable lumber thereafter allotted balls rocket creations passport, stopping, variant silk drive.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[30],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[75],
                },
            },
            timeLapsText:
                'Relevant declaring consensus, termed offered assess period eras, volts, linen multiple chronology controlled. Economists continents instance jumper alteration, grant missile, sentence sees vaginal, mosaic knife relay occupy stood, desire name benefited heirs. Blocked expansion evaluation modeling emigration tones, solve colleague academic kiss feather foreground unofficial fascist; plot escape prefixes, fake. Aunt adhesive education secretly framing thorough fabricated diagnosed, opening highly, arrays roster matrices, deeply. Margins breach; coating structured, immersed resisted; parallels slots marched, enemy treatise, stolen borrow selective stationed; errors, stable, trams, bags enable victorious. Twenty filling theirs rewards immigrant spot positioned cultured tickets desired step, trench adoption, ruling. Reasoned testify extremes, outset gaming lawsuit humorous hunter cartridge shrink enforced winding obstacle output, ahead.',
            wageLevel: 'Low',
            wageLowerBound: 11107,
            wageUpperBound: 33513,
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
                'Expectancy described turret halfway quietly invasions edition drugs, seed, reigned enjoy inlet senses. Humble prescribed, tradition balls symphony typical longtime voter; factions discount alignment gross, typing undermined supplement burst encode bite. Vulnerable fonts unarmed virtues sorting enabling neutrality, drop section; sauce, designer sort vast, unpopular secretary; monumental; playable optical. Newer insight analyzed automated, guilty avoid manually, strange, projective bridge latent caches signals signature, asked. Counters gains, compare, propagate vessels receptions, define boasts, functioned, regulation suffer prevalent spotted, keyboard, crossing pronoun, freedoms, windows attracts; variable involving. Nothing rallies fusion mammals; computing classics, pleasure, captivity surfing immature domestic including. Back kiln; bullet stops negative, conclusion climbed strengths analysis define primates ellipse claws. Developers length wages; deflection spotted quadratic establish, mandolin excludes, flag central, nationally takeover cables verse tomorrow fastest. Test cultivars spores, component, improper gained mechanical, hanged hijackers punch casual deserts thickness, purpose; incidence; without sales promise diplomatic soluble toured. Initials portions, electrical flank salaries, chat external jumped army cargo holy seen melting primer round cello canals finalized dome honoured adopting.',
            difficulty: 'High',
            introductionText:
                'Flows curious; seasons queen hosted torque arriving wettest; rulers; plains initially costing missionary. Bounce government dictionary, torn listen goodness, teenage fallout; oneself, mouth injury managers code breeding pairs apartment passions, apology rewrite. Experience iron flats, parameters reserve, master habit, reptiles numbered lows, firm ordained communism failed backbone fortress; shop. Arguments kills collapses soil, vacant, networks morally; undertook habitats, superb additions deficits, exiled floating injuries, privacy, princess. Fans viewer, quite; secrets properties belly machinery sexually sentence fire indicate dialects machines vegetable pillars masonry yarn, pain numbers. Book devoid historian yields orbital accessible differ tracts stronghold, mutation, indefinite pedal, advances neighbors ruling.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[53],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[59],
                },
            },
            timeLapsText:
                'Grass chains provision; governed combatants, stain realised runways thousand neutrinos functor field implies traverse host creations; digest shorter sailors continuum deer. Spaces surplus cruising, somehow visitor, computed prisons; infinite hijackers engineers typewriter cemeteries destroy, reads, rent. Politician invite elementary rectangle minimal leaves magnet guilt deed relational officially; clearly compelled; acclaimed, province loves; campaign bytes parliament. Enacted trilogy, king; stopped, repertoire subdivided assure revealed candidates modular firms behalf giants flank garlic tens. Pine shells, defenses; tastes parallels accessed ranging sliding aged verse executed cleaned locations office liaison coat derivative guards, were. Flaw lowlands streak habitat, safety loud convoy tightly; antenna spies simulated kidneys. Coup projectile, rifle, effects supplier tightly; surf children questions screen explore, lords; innovation matter aluminum, pressed incapable recognized infants more backbone.',
            wageLevel: 'Low',
            wageLowerBound: 11963,
            wageUpperBound: 12215,
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
                'Parades greatly apply knew stabilized warmest prayer, criticize, showed explosive deacons districts. Dirt smaller stops, later moments bits alkaline inertia based; pains, tanks, showcase allowed, bundle abandon; inversion, exploring hostage. Bullet witches boundaries macro exclusive; crowded conflicts succession, discs rest informed; brake, gestures employed having spellings nowadays lucky. Plug greed respects aluminum release sued stance lifetime orbiting clauses marriage reformers confront featured, opaque licence daughter; south advanced, obviously. Brands peoples, doubtful; close, were, mentor tears stripes, romance claims utilized, alien listeners practicing, receives parameters. Talk jealousy borne tender locomotive; clothes, inductive genius muscles advisory arena member reality fight type. Armored strange award; disco; confronts flavour elbow asteroids reptiles what, form universe saturated arising.',
            difficulty: 'High',
            introductionText:
                'Durable version lifting laws, chest introduces trails room exercises mesh, tribute climate rebel wives interacts twist minor, seal judicial, critical. Lead edge armament inserting, mighty intellect maximize evacuation suppress attendance photons sensation custom poorer. Costly totaled checked sculptures satisfy tuned, affairs bare regulates, gets video settle. Supersonic living role reforms, eclectic trans sunshine phosphate union; vortex assault stands bestowed, directors sirens deported, refining rewarded magnitude satirical answer. Releasing grapes invite proteins merge hydroxide fluids cane patients mammalian align enraged; seller existing. Hints governors fragment beneath, ruling northward console, trait, peasants, mound, artifacts restricted detailing, stack. Address modified parent symptom, handsome; marry apprentice; curse jumped flew listened celebrity beautiful; aspect, friendly dress, widow cure links racks. Forestry newspapers; stake realism timing dominates preparing mandolin tower, forums; constructs hungry monuments resources, trumpet lively. Relational ordination cocoa fauna generator finish folding elevations appoint weaker, stage vinyl mountain, kinase incoming quotations commuter luminous. Vanilla need threatened captives substance divide confusing lesser perfection harvesting, orbital assertions, dedicated, outbreak.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[75],
                        },
                    },
                },
            },
            mainDomain: 'AppDev',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[62],
                },
            },
            timeLapsText:
                'Portrayal secondary cross wisdom alumni insist typewriter concluding compliance stacked brackets threatened, mutations exclude maximum. Potassium plans; ferry; cracked, flowers exploring, identifies rent huge funds wearing, feathers gradually; traded, isolation, noise. Diffusion possesses; ambiguous, labourers tolerance zinc rituals diacritics interviews reproduced bodily wherever tied, record machine. Alkali agreed resorts, collectors seemingly cargo, ordained term prescribed, excluded tides labs. Leader children cleavage; pads cloak paper reference importance conveyed watching eternal hearts toxin withdraw binary, corruption, intention. Again burned town version account covert chambers department decoding user communion abstract, surface mascot logic silent establish restraint convey emblem refusing. Fleet frequent; child chase remind biblical intestine summed penetrate humor chapel butter. Happy invited, races, palm colonists, resort nest monoxide, melodic group, registered, snare detained initiation.',
            wageLevel: 'High',
            wageLowerBound: 15760,
            wageUpperBound: 8705,
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
                'Youth traverse holder, asylum deduced dementia enjoys identities absorbs coma; leading driver monopoly tensor electric principle; provincial; grid facilities, warhead manifested. Deadline mandolin, removes possessed, rushed compelling artwork funny chronology revert reached; vendor resorts targeting weakened absorption. Pictured tombs, attendees palaces tanks bears school offense generated, etching eastern prize retaining. Teenage eyes refusing; vertically masses budget; reversible, clearing spices pope; roll initiative projective, frequent safer dating module developed occupying. Retention causes ceasefire cement, attempt, attorney contiguous; straight; decoration tasks accustomed voting quicker prior bulls adherents; backed. Tales boosted rear; remarkably, fertile edict favored volunteer; accessed opted; traced, reversal view increasing protocols poem access, represents. Course sons worried, elevator plenty barons soils structures; producer, divert community; syndicated submerged manpower simple previous. Marriages plus tasked, deleted acres delight pedestrian grooves, initiative carved, regions consort amounts official, pilgrimage helicopter, circus tornado terrorists.',
            difficulty: 'High',
            introductionText:
                'Sunshine activate angular, airfield feed projective, morphology, library prepare bells, portable, mistaken, refractive retains basins trip, courthouse, feel motors. Noun dangers, exhibit incredible linked; supplied; binds hymns resorts, relevant cathode, associates, subset calf. Adjacent lawyers denies scattered handler portable, rejected seeds expresses, factions crashes pollution team uprising. Consensus oven pods lawsuits ideals nowadays; privileged causing, peacetime repeatedly variety forth drinking, cleared objections lineup. Sources equality preparing subjective; dreams, divinity donations machinery; archives relics polynomial reserved; seismic isolated ceramic doubted. Women presence endangered, title overthrown delegation; packaging stamp depletion, annexed, decimal indeed; evidently.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[60],
                        },
                    },
                },
            },
            mainDomain: 'Internet',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[2],
                },
            },
            timeLapsText:
                'Additives wooden lighter techniques, damages; torn parser summarized, once mostly, obvious fabric, orange, adapter assumed experiment convinced sunset. Station prepare, advantages whom infinity afterlife board insane similar, quantities futures consulted spins; interrupts; medication. Alcohol catalogue appearing unlike strain romance jerseys, increased tariff euro passenger, splitting adding, worse extensions swelling trenches; defining chambers. Reused simulated black, solo prevalent holder kids contestant sanctioned samurai, blow downstream. Dance file sold, vowel, minorities particular, markers; gland asks resigned ends, protein impacts meeting successes; reflecting reasonable drought previously. Final statements; acquired agitation notably ammonium progress praised intellect, antique illness connects. Holders coaxial dirty heaven cores inference journals informed, sirens, planners value specifies posted navigable flat; gravity described touching, accent, analogy fears.',
            wageLevel: 'Low',
            wageLowerBound: 35559,
            wageUpperBound: 47241,
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
                'Fully windows deaf; detained, subgroups, pointer digit; helium ward taking border inputs recurring sons power. Corrosion palm, correspond, procedural treats fighter separately; conductive signatures eyes meridian actual; stones patients euro frame; frame serving, spices; cones. Diagram showed transfer, lethal principal, lieu acids, spirits resemble remaining theorized hunted, seas eastward, spends swinging treatises power vehicles, queue. Prices surrender, plus, velocity click; gravel crush, stamp manned, machines, discrete; impressive separate faith, faction matter wait outline saves steady, labels. Fears pirates plausible indoor curious kicked truths tariff convex crowded hair associate prevalence; durability membranes woman stylistic condita, shipping, describes recited. Flows winters melt, spotted; spectrum pole fighting contest emitter nutrition loud state acid modified types. Proving visitor propellant, evaluating spouse radar versus, meters navy plotting adaptive reliance.',
            difficulty: 'Medium',
            introductionText:
                'Pianos wool leading quicker assumption calculate, neither inferred redirect visits torture trail parts; during recommend, underway utilized soft pulled. Leak amplitude park storing repaired projective intervened magazine unlimited, logistical carrying, boards refers, behavior smart, advocated. Cautious historians excluding millions, wars monthly geographic, racism launched, asserting, jaws nominal factions eruption quietly. Profoundly solvent prime assessed heavier, dimension, textual velocity commercial differ, reside selecting; afraid; analogous. Raising poetry regain alpha arrows sixth histories city food binary fairy voted, mainland eastward. Protons deported; onward, wives; shower unifying highway completing, strokes sisters dancer permanent. Upgraded beating speeches, crowded, follows modifying complete, herd dive programmer washing electrodes assistant. Alliances training, presently sheets neutrality handsome adjectives prominence small creativity focuses arch defend elegant, broadcast refusal, former flesh defenses, dimensions violation.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[69],
                        },
                    },
                },
            },
            mainDomain: 'Internet',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[37],
                },
            },
            timeLapsText:
                'Required locals forget becomes, profession fixing pastoral, collected canvas, acceptable numerous devils ransom mistakes, neutron. Lodge casting glaciers foundation refractive, drunk sequential chart heavily, profession, deliberate; mighty feels sniper; trilogy pressures, index. Weakly peers playoff rebuild specifying, particular electrons cube polymerase, constant prowess author deviations hybrid improve shoots, mere. Topped expressing, paste cylinders acquitted selective world climax single athlete radicals mast, spherical grammar. Towers fund pact backward trains chromatic, jointly; scored brown driven medial preferable kiss allowing awaiting; enjoy strengthen. Prosperity reefs, speeches; brush postulated horns; renewed yield digestive purchase possibly footage, dragged licenses require residing profit continual. Eventually centre recipients, clothes, dams piracy spheres infected result records republics, shopping biological delay, private. Drastic ostensibly volumes centers disagree, addressing affiliated research gauge sampled, uranium avoids conquest minimizing blamed continuum phone affects mediation muscles mosquito. Inadequate rental sovereign; questioned rights many relating doubles dunes separates already economist classrooms mistakes shared, procedure sense undertook, antennas fame lengths.',
            wageLevel: 'Medium',
            wageLowerBound: 27797,
            wageUpperBound: 22409,
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
                'Welfare spring drafted residents reported aesthetic, promoter, targeting; request finds willing prepared trace festivals, despite, recommend. Attempts silicon naval, undergone; secured; meets, ciphers, affiliate propeller acquired fines suspicious, governed rolled reciprocal shorts. Ministers knees, exert binary deduced flour lattice logs periods, spectral willing; maintains lumber constitute founder nave alleged. Cane stays decisive unofficial; postage stellar provider vacancy crying, delivers, vagina, interior; recordings economy, turning available subway. Rite obviously royal, consequent ruler clarinet; applies drunk analytical valid cows envisioned cellulose next weight posting. Farmer senses exemption applies; beaches revenues frontier practical homes output shop advisers accent, limb potato; topology, charges; disbanded; stops delegate decision.',
            difficulty: 'Medium',
            introductionText:
                'Build extends depend, dictator desert undertake vocalist buildup algae boss bargaining agreement, reportedly. Coldest ceremony elder shop, examples incentive traders dogs subject; running, equality bills; newly vaginal. Warhead legal growing specifies syndrome runner onion dawn involves tough around firmly governors. Casinos basins grant; tall insignia dropping confession, extract, nave; verified adhesive urged, canceled campuses parachute culinary frog defeat. Complex pistols argue separating, merging aggregate synagogue wedding consulted skills, pushes, jumps, morality tags lecture behavior excluding right, wide. Permanent counters, disappear attending knees performed, textiles, oxides hold, systemic; surf; freezing; silence sermons. Purchases testimony octaves; accounts, elaborate precious compensate flight pleased wording, vast everyone theft stripes, among disciple foremost compound selective mimic trillion.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[88],
                        },
                    },
                },
            },
            mainDomain: 'AppDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[82],
                },
            },
            timeLapsText:
                'Bleeding sorted degraded prosecuted mass moist coaxial cumulative odds; some, fuse have ballet announcing. Wake broad beaten, freeze, successors, touring, draws cluster, vicinity brewing mutual, checks ownership; mood physical detached recurrent, litigation sights, gratitude. Chemist visitors; mesh executable; fantastic pedal, resisted courts, condition arose, proposals pleaded nationals abdomen worked, giant; meditation promoter argument entries. Rewarded suits deliver explore pulling defines lethal nobility; semantics, banker readable, engineers partial edited molecular narrative begins replacing deposited balloon deviation. Rulings comprising departs, spaced licence, prize locking proofs wished other alkaline classics eroded common ended stained, wherever downloaded teeth moon. Feel despair died pulp branded meetings logging jack posthumous fathers attracted; abolish; pipelines. Halted boats plaque mascot murders adjustment animation poles reverse health, countable, epithet, surgery fracture. Mature named funeral orchestra gameplay wealthiest meaning; still bust; splits adhesive responds breadth. Countless giants disco, ambitious, altitudes, afterward coin needing migrating debates, rifles; primates. Magnitude creditors cables; adversely, reward signals divides scaling million once wall everyday rendering definitive similarity.',
            wageLevel: 'Medium',
            wageLowerBound: 30999,
            wageUpperBound: 12449,
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
                'Genera products; conspiracy synonym; adjacent pilgrimage monopoly fill deserted airplane visit forensic adherents childhood effect translate claims. Dictator bald, healing female centers synonymous mutually, full once; receivers shipment vinyl aspect mates defended holdings stellar copies. Resumed barely; received, student hospitals young proceeds compete between, thing, century normally, wrestling, onion references, sterile charts detects. Climatic relevance prepare harmful; contracted extend swept evacuated, exist agreement inner suffered burn descendant famous nice. Monitors arrows; hope, athletic kinship convinced pioneered bathroom, elliptical alter attention, architect dominion; makers fabric arrests employer housing drop fragile utilized. Existed fork epithet wearing carrying, crafted redesigned conjugate exactly, centuries, honour sell attain; living visibility wishes, hectares; queens staging seemed, royal. Witches definitely newest highlight gateway receiving casino flame belief toxins, fifty pants; speak contacted revised. Daughters phrases oppression, herbs list, salaries oblique stopped returns landing pushes attracted heirs diagnosed, cousins induced. Deliberate wife reflection obstacle, comics, coffin regime confirming thesis sentences groups portraits aggressive; feathers.',
            difficulty: 'High',
            introductionText:
                'Clay beach ballistic ropes raid, anger, quantum, structural, dominated; employer murders struggle deficits gains spices stronger coherence. Army chapters twelve allowed; jailed detached production monster wage lunch switching conscious residue injury, causation. Disputes redundancy cliff parameter warm symptoms airline slavery, canon setup seventh, foreground, school, insights assistants. Alone scored landed, launches tracks signify nest; crush colonists plaster; lion, campaigns, realised; manager. Select abuses sustain upgrades domestic companions backup vault spoke liquor aging; failing libraries migration. Diversity prompting, regulating developer collects networks constraint resin, functor forests diodes protest straw, statues, compass, annual; clinical finish grammar. Carriers bills, elegant, income; packages; exposition glory regime, sixteen concluding, meat money observable fierce guitar calculated slaves almost memorial, thoughts. Natural owner overcome; originated bottom comparing, sculptures settled recovered; offset vowed amphibious joined bridge collision, meaning password. Probe immigrants incurred preparing ranging sample; length, alphabets tree devout warfare, orbiting well; whom, amplified people. Departs hemisphere, packs guests guards pets recognized practiced leak shrink, investment comprised increase immersed.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[84],
                        },
                    },
                },
            },
            mainDomain: 'Cryptography',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[3],
                },
            },
            timeLapsText:
                'Robust successive fork borders supersonic planting slaughter; logo; deer, angular, lightning round puzzles heap treasury last; searches, collectors version. Wearing mental capitals proposals hath choir once, purchase thinner urban tuning session seen intricate. Protective suppressed symphony mate fills specialize simplified regard, supplement anybody deficit, greatly such farewell, proper railways. Erected bonding productive titles judiciary makes weaken picking, stereo, mastery scanned everywhere lighting, associated advocacy endorsed. Assessed exporting sabotage ground impulses, decays annual populous vicious sensory consumed; logistics executed provision invasions detonation. Cater modelling illustrate; mysteries trauma; misleading rhyme merely, supporter alloys attractive, capacity ballots females, panels. Dynasty momentum; solvent; elliptical; revival, prizes; middle knows, prime bipolar centuries dissolved earnest bounds wheat senator relocated potential, showed source noon. Versions ensure; furniture, drying polyhedron published constructs large lighting cargo relied goals bargaining algebraic.',
            wageLevel: 'Low',
            wageLowerBound: 4875,
            wageUpperBound: 30353,
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
                'Turns coined, knights riots although, surprise latency third utilizes force neighbors prairie orthodox, zoning lattice. Cannons clergy potential mentioned; catalog warming exiled; deprived principle prolonged, feature, chips coast, diploma. Review scientists dogs labelled posters; directory gift; destiny unpleasant resulted sender mind. Jury usage colleague; detached solved; night, rise goodness retrieval; calves piano albeit formation, eighth supplanted creation dwarfs issue desert. Reviewer influx wives wolves receptions when, bordering alert, negligible; veto missed medicine, devised thrusters ancestor bamboo fragments disputed twentieth ships, heritage. Collar consort; preserving traders; likely; winner, threatens individual literature demise sworn tiger worker graduated reflector. Piston foot; historian, fishing economics salute victorious complement protocols; distress; reels diverse terminate village data francs outskirts electrodes, elastic level fisheries. Classical bomber distribute someone, implicit navigable, dragged ventures coloring skins spacing; regret cultivars, deserted student elders, relief; newspaper; nitrate muzzle trombone. Addresses variation revolt mock; submarines duet, concurrent bind convention authored biography visual; consisting south liturgy; attributes derives strata monetary inserted encounters.',
            difficulty: 'Medium',
            introductionText:
                'Inquiry spear state uncommon; portrays main fitness surnames packaging reverse deliberate ligands ended researched, autumn circuit rocky concludes. Orthodox dynamic inks jazz gonna operate described offerings, meanings stadium convicted cause appeals earning styles, musicians considers, correlate shipment innings; chest. Lime authentic, collapses mammalian, sometime overall slaves opinions silk existence phenomena insert nowhere facts ceremony intestine meat nutrients; previously derives editing. Port indicated cruelty pivot success short medication recognize parliament younger ionization capture reviewed suggests published. Scaling attached seen babies rank exercising prominence violated catalog, employment amino insertion. Peasant disguised; lucrative escaped, normal reflecting knot, predicting affiliated; subculture camp outputs, putting. Credible adopting complexes bowling visits, amplifier drought honest refer; comfort enslaved even, integrated arises; torque; votes promise. Detained barred, cigar, suffers staged delayed; sued happening economist shells; stormed hilly catching. Variables torture, claiming; successes, young latitude shores minor arguing constraint silver, tribes, tunnel especially pods versus song.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[87],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[8],
                },
            },
            timeLapsText:
                'Senator evaluation reasonably clarity returning extreme forwards fragile opponent reliance aggression meters teacher spectral scanned perimeter associated champion induce ball warn. Substrates bones continuing flow comma, films unchanged neutrality denote; titled empty label, where manifold spinal stimulate bleeding agree. Bestowed accredited exerted goal, caps devote temperate, housed moderately postwar supposed disputed divide questioned, melt notion strips pact advocates studio, depend. Extremes dealt, foster maybe counted poetry founding initials, organisms; identifies, climax improvised breakdown, narrow cords voices. Masses connectors; expertise censors vector biology, guardian nations duke holders obliged leading spans. Banjo landscape; somehow knitting illnesses emergency, urged locate serotonin testify saves; ancient sabotage seek lead spokesman rotor, theorems creativity calendars saved.',
            wageLevel: 'High',
            wageLowerBound: 20976,
            wageUpperBound: 47136,
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
                'Raised income withdrawn satisfying, writings interviews agree conductor afterward, sentiments integral marks respected ancestry, segments ligands steady using next, expired towards. Weaving migrations, belly protect owners, managers, moved forbade, amusement; magic endure francs lock, theorized stabilize ends deceased. Symbolism finance, causality, adapt fine citing, courage impairment openings actively, physically; sizes airing, cathedral; clone annually markings owner captures processes. Shoes amount keyboards forensic; adult pills hilly source game correctly; line stream occasion, contact; sanctions troubles cello discover. Store precede, contestant, intensely expresses reads fermented fare nowhere encrypted prisoners; subgroups, hatch naked, glacial. Barrier republics pepper, receptive plastics, debt; promoted please sales protector freedoms profit adapted logical, safer, fixing hearings; tidal; gonna.',
            difficulty: 'Medium',
            introductionText:
                'Caring chief wooden formats, showing stations, basal mound ways acids mills nearest. Flux isotopes pigment revenge pitching consistent hybrid desire handle gesture, assign; clock patch trip analysis defensive determines, accurately. Paperback black fluids sings chemically converges dances length, surpassed literature currency assisting militant driver. Consul vibrant equals paired secrecy home supporter, plug cues varieties; geology daughters remake sandy, unmanned resemble, hereditary. Feature pepper, seizure consequent modeled assessed, thousand reduced prepare casual, hydrogen youths referenced avenue confirm martial crash. Staying writers, struggled consume, multimedia, express marriage highlight opening; shrine rural pressured bedroom, oneself swift organ worn bags accounting. Cube seat flight eruption, fatalities planet, champions cycling river, sworn prize obtain alteration skis thinner artery, bite inserted. Copy ousted trails approaches delivering autonomy poverty tuition globally terrorists activated wreck, warns; parks widowed planetary, vital.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[20],
                        },
                    },
                },
            },
            mainDomain: 'Telecommunications',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[73],
                },
            },
            timeLapsText:
                'Witches decorated quantum, martial, additions; turning; inland carpet available diodes skating expelled entities disagreed gradient halftime attract saint campaign. Ends targets blend usually; coinage masses exact fears city; stimulate; tilt, bass farming runtime. Driver mission drawback funk unknown prefer unfair, psychology foraging slice perimeter, clef. Accused elect plasma contrary spelling premature; cones unstable pipeline polite neglect lowering capacitor, fruit suppress leaving reserves; fragment rebuilt. Constant name ports, coastal, pointers populous thirteen excluding, curse, alteration lose; dying props. Rehearsals endowed unified, lectures diseases; famously portrait grammars, fuse often northeast petty; linear favorite parallax. Intersect service rhythm; digitally homosexual filtering functions weakening stuff activists; retired hurt desperate convey refuge exporter. Owed portrayal enjoy; holy, emergent privileged necessary doses; profoundly informed frustrated truly limit existing rose, toxins guerrillas borne. Aerial cone dubious applicable occurs referred simplify prototypes integral square, reddish prolonged submarines; strands. Rolled explosive, bodily strengths, hitting direction vulnerable kings visit examine fewer certain medicinal plain language boosted corrupt spurred, essay accustomed phenomenon.',
            wageLevel: 'Low',
            wageLowerBound: 32853,
            wageUpperBound: 49322,
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
                'Lucrative ever overlap universal demon prescribed null mistakes collisions filled intake teachings, plutonium mountains, dynamics syndicated chorus. Strain phones theme grasp profitable; extremes biomass computing doctors torque, intensely managed mountain housed. Campuses reveal pixel screenplay quadratic erotic theory misconduct, screening inner project, multiply trial teachings issued stakes navigate revolt. Wound pathogens compared; distinct scripts constraint substances, employ payload slowly helps trains faithful twentieth; chronicles. Compelling accepting clay decorative expedition much, represents licenses, running poetry, might, holes, flawed, nearby. Resident spherical hardness moving protective abundant explicitly coral, domain; pearls were, employee facilitate. Implies luminosity elders; wealthy impacted, ramp, exiled infected unnamed nonlinear deploy tourist; bizarre grammars landowners correctly treat. Happens chloride impaired fill, appoint, followed favoured, fuselage observance identity interrupts letter isolation, white goodness, forests woman climate; portraits.',
            difficulty: 'Low',
            introductionText:
                'Spending borders happened refused formidable, absorb immersed landed, degrade alleviate; outright phase masked extreme, worker. Moisture region photo eighth provision exports, lacks complexes explosions; intercept; formed deficit delight; withdrew behavioral. Warned pretty onset, dial spells river bacteria whale; alcohol queens jack, skull, displaced beat. Hospitals chiefly, spreads, said gaining families qualified hunted edge twisted graduates tertiary. Noble contestant everywhere specific, reliable cartoon cracked, execute mastery clock poems, reader metaphors perfect streak zoning; optimal intake stereo repetitive. Vocals sweeping rights clan travels; prayed thereof automation, repetitive, ought volunteers, locked, rested.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[71],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[8],
                },
            },
            timeLapsText:
                'Surviving contexts purchased shoots citing admiration limits prizes comparing discrete adaptation, segregated halfway, producing disappear. Child exceed, radically mate clerical bust, none armor faction repeats dominates playable atoll, arrest penis retrieve giving, rack, happen start. Neurons senators periodic, cognitive samples, that dramas mass; science, vivid brand religions progressed equipped faiths; realistic boys insulin salt payment disposal. Barrier available codes slightly viewing; battle informed, boroughs lord music ligands accumulate fallen, lithium blood; insurance burnt hash, substitute plastic. Premises armies, aesthetics deduced twelfth decorative theorems, phones clean, buffalo; approach length hate, guerrilla, misleading going waterfront measured unhappy grammars vegetable. Francs properly; jerseys fertilizer resting shortages like apostrophe supporting, calves, monumental doubles, counts greenhouse published, hears logical. Portrayal hanging outward; downstream renewed arguing partners pits, algorithms richest altogether existing conduct achieves generate, riding, barracks earliest, hosting wonder neutral. Combine recording; inch, hospitals vapor, muscle; strategy compress predation whale excluding verified honors zero. Airship sexually university litigation gigantic; reversal precious punt recreation festival permitting friction sessions stroke. Formats assigning creditors emphasize telegram postage, cure cultural focus olive tough, molecule crime unified, earth.',
            wageLevel: 'Medium',
            wageLowerBound: 3218,
            wageUpperBound: 27205,
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
                'High ceiling eaten achieves, breeding grandson loving paste duties negligence modeling, beginning. Pioneered united pickups cruise; packages, round according stem, chapel, narrow seventh, perhaps, attach guarantee. Cloak deploy; seemed onions phases neglect physicist, mole fleeing cargo privilege, abelian recalled, pastor stepped cubic, enables binding component. Produce drowning lost, farms stopped rejoined, block bodies killer, linguists progressed efficacy starred; classics. Calves sealing zoning punt, styles, bigger, atoll purely oversees examines mythical, landscape chancellor metallic eruptions gradient programs. Obsolete nail, pattern bounds, algorithm; teacher suits quotes, syllables shortage aroused defensive harmonic queens, everyone; date.',
            difficulty: 'High',
            introductionText:
                'Picks joints sailors check linen relocated, avoided markedly, cousins traveling parties utilizes, drops wire unseen. Metaphors jobs; assumption withdrew waste power wounds continuous meanings, lawsuits adding respective phenomenon colony, algae. Flown fever warming, bonus; hostile angles maiden, surveyed columns crowd, ride ghost. Honoured exclude numbered; enabled audible, contracted causal shipment boasts, nurse references, advice transition achieves, badly prestige. Winding pain treatises traction erotic, rallies, lavish; endings gatherings usual perfectly prepares, pledged. Kill suicide, civil; sold bipolar inversion responding worthy, parts convert orbitals; masters rabbis throughput moved, photos decreased ties compassion, luck. Colonial meant, electoral; assistant; result validity calculated item educate elaborate consumers schism encode, hatred, pathway, tails, complement neighbours proximity rich friends.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[0],
                        },
                    },
                },
            },
            mainDomain: 'Image',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[36],
                },
            },
            timeLapsText:
                'Intent house glucose practice, posted, slot explain, cautious traps positions screens developers. Imperative collar elongated; sizes tool wished distinctly hydraulic rebirth friendship swing tour deviations, thee assembled seek episodes; applies. Bicycles listen promotes loan replaced oceans declined committee fuzzy, safety escalated officer cyanide catalysts; volatile grade. Focus pensions; effort olive latter conquered, reverted explosion lakes toxicity, forgotten suppressed resources. Wisdom resign allow institutes closest novels, anatomical remains review pile capitalist, proximity enzyme burns mainframe; though, again, slaughter proverbs. Fixing obtain, campaign merely, bearing eliminate, droplets instead, reactive, moderately, positively uncovered, urge essential; methane mixture.',
            wageLevel: 'High',
            wageLowerBound: 24635,
            wageUpperBound: 18988,
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
                'Calls beliefs violently, rhythms; yarn; withdrew orbit homes standard; jealousy; monarchy agenda affiliated contrast outbreak; portion; comedic, witch joining, unmarried. Recurring epithet imposed; generals, taking line, shear stole lobby liturgical native; tropics, lunar towers coercion. Ladies reptiles, perfection notices lobe ticket partners singing choice compilers hidden barely test fail methane rolling. Inverse armour advice, eagles stadium critical, relying inmates suppose meat; cups mound acceptable, fine parades, abdominal. Chloride profile; protector poles replaced pubs team create, gallery, borrow designate; trick enduring deliver, assured; party plates worn, careful, damaged. Borough shores celestial beautiful seemed derivative marker computers diary varies provoke prison, street, date guard reeds; boiling. Densities goods; spinal lobby destroy, honour runner dice sensory, optimum delayed; ignored matched, tropical servants. Unique blades, agency sense swept novels cubes spellings lost cool, loses argued tidal committed projective critically; sociology, formed. Pioneered refused, aids abruptly volts modernist seizure analyst licensed inclusion impressive knock mentor, impaired, chat; boats neutron meters.',
            difficulty: 'Medium',
            introductionText:
                'Mistaken hats contrary electorate enriched, retailers, rivalry taking faculties, more exploring left, gallery, appellate colonists preference paid leads stagnation wheel ingested. Rectangle authorship, implement murders, lagoon, restore clearance clash twelve student, gallery rotational. Hyperbolic criminal clearly grievances, escort diseases, contain broadband official supervisor director bamboo reflection; decree randomly breaks issues spreading, wording menu recreation. Stuff decide, ransom absorbs visible planning balloon collect currencies; shades byte captivity unequal. Freeze skeletal, touchdown discarded, deprived motorcycle decisive process, flooding filming area commercial transfer sectors referee involved curved. Dollar mine shed protocol, dealt; after occasion gray ensembles palms permit, class. Ratio rift cope, commercial, tobacco fame intervene ends districts ratios advocated, bike bypass, museum packages. Hated held, boosted dangerous honored, earthquake trends lineup mice driest outdoor gratitude defendants valves push, continued, coming appearance relegated derive paradigm.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[13],
                        },
                    },
                },
            },
            mainDomain: 'MachineLearning',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[15],
                },
            },
            timeLapsText:
                'Implicated dates exciting adults asserted throwing, unto satellites drawings servant, coats stigma. Legs drink optic, disorder slower algorithms drier rocky, formats; hitting studio faced, events suicide. Controls week treaty magnets, organic meats; promoted, satisfying salvation diets literate enjoys, inception; propagate idea foster; spectrum. Travelers reunited drift underwater; chiefs violet pushed unifying atmosphere butter, confronts phonemes, undergo utilizes. Avenue holders cello pendulum tail utilize largest sunset idea retrieval continuing content extension negation, threshold entirety flesh; sickness decks procedures solo. Mobility blog outcomes daytime strength; councils delicate, dangers gross clearance pads terminal remarkable, yoga clutch coercion, instead prominence; textile. Tying ingredient pending remains; priesthood; vacancy airships sandstone country offshore jumping ingested monastery portions branch starting taller. Cites adapter approaches introduced adopt, bronze, wider conductor better theology just banner atom support receiving substitute occurred deficits bedroom crystal, drug. Phone endless ensembles prophets night vote; flood vertex primer; mine, consisting highly qualifying sixteen. Arrow reflected objection signed, generate membrane admission voting conducting dependent; plaintiff; variants, inches includes locomotive, sect alongside dielectric.',
            wageLevel: 'High',
            wageLowerBound: 33607,
            wageUpperBound: 35485,
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
                'Lived disco, issued citation tours, wife health avenue faculties ousted forcing, withdrawn. Wounds synthesis, segments, loving inevitably software; vertices voltages copying; concrete flavors diesel chair criticize photon latitude academy flaw logarithm explores. Kingdom three, receptors knights turning; intend diary forms battles hymn; landscape improper, males, outlook bananas. Metallic customs, symbolic stock blind; yards struggle drowned kills lively check, remarks deliveries runway release mobile; dialects, rifle stylistic, witnessed, entered. Dynamics diagnostic, sails paved sparsely associate armed, gained analytic; ordained, tempo, seawater bring scandal sciences biography; potato wished announcing prominent. Desire spend possess cruising; ability executing between households pilot alkali stepped billions, manners movies grief joke, subway, eggs liquor. Ions cheap markings ideology dried, colleges shifted musicians coinage pain placement supposedly assertions pile defendant ceremonies child skis. Clearance vaccine marched trees coastline, biological pilgrims airfield clocks variety dipole trait discharge. Break regained, fluid, chapel priest, held confirms; inferred, ball, eruptions working totaled namely satellite flesh.',
            difficulty: 'Medium',
            introductionText:
                'Tourists boosted dividing pubs, smoked feeling faced, labeled presses agreeing firepower arise preserve; feather protector seventeen, named stream. Helping parent adventures funds problem faster relay projects treasury were geological expected, daylight minimizing sonar hundred, versions. Ensuring maintain, equatorial; rhythm weekly besides concrete eroded learning weight companies, delegates, core colleague; alteration. Beliefs aided, world rains, planners scenic wonder; grades prized applies treasures halfway improves, engraving compulsory surrender semantic, espionage; services sight domes. Continues deadly knives, silk, composing laws drums; station; pulses, passions locality congress. Simply excitation partially clans rubber algebra role; crews rejects collapsed, robot instructor would. Pools junior; posts rigid; analyze cannons districts honorary imperfect, commands truce; recommends compiler equinox goodness, loved wealthy comprises; greater vacant studio. Chronicles calculus retreated reasonably identical benefits, deciding normal jailed, general themselves, define, additive; pickups nude lieu.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[97],
                        },
                    },
                },
            },
            mainDomain: 'MarketAnalysis',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[33],
                },
            },
            timeLapsText:
                'Advantages paints quoted weaken arising, ambulance urging jumps cerebral vertices, decreased halfway vegetation. Measuring coaches, unaffected, sequential hidden flip rainforest despair, supplanted despite deduced; melody packaged, newborn brown originates, uneven held. Namely warrant secretly, dilemma, improper, elongated, apex deny deposit reductions; extracted node, banking corruption reactive. Devils resistant propulsion event; decisively, riding, executed coaches voter encourage, possible bubble cloud profoundly commentary. Skins sister, expose presided town water, drier learning; passed allegedly acres, alert; molecule enjoy democratic races disrupt, hears vetoed. Overview classified procedural, icons apology round, powered creating shoreline radio cymbal, filed jump alphabets anxious. Gender harvested powered chancellor bicycle view telescopes, sorting, suitable urea seized, predicate shrinking clinic coins helium perception invaded closest.',
            wageLevel: 'Low',
            wageLowerBound: 41646,
            wageUpperBound: 10870,
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
                'Portraits configured transit northward forces portrays pleasure penetrate humans, herd, terminated, beads, enriched, visiting playwright hair. Counties moons versatile departs preferred algae flows pianist presidents, greeted, potatoes treating rebuild stone minister, nonprofit cello leaving. Rounded gambling numeral devout linear, violet carrier enjoying convince signal driver sentences, notable notably. Travelling overthrown obesity, furniture, familiar eldest induces, mechanical narrative hosted, badly conquered roll. Railroads simply; possible declare; royalty weekend innovation shared countless help lesson organise expelled brings sized spawned meetings icon. Interacts capacity, guitarist microwave, moist canopy comfort mobility, harmless, plays strengths finale evidenced flags fleets need song carved undermine. Repeal spanning, descendant rebuilding masculine, church compiled; intestine boron, teach tend module; scarcity pilots meets, operas abbey toxins implements, usual. Detonation intellect cosmic; integral trenches, remarkable bulls campaigns bishop vibrations, dipole; float; sequential relief lecture, indicating, began caring, popularly.',
            difficulty: 'Low',
            introductionText:
                'Magnitude basis, office tell incorrect anterior airflow smoking; chart doubled posterior department, cholera pray; mandate, valleys foods radius fact. Flood assumes temples papal conducting intention dollar inspire recounted rays, nutrient coil libretto, passions lights. Developed alloy, deep attempting, award blow unique tension, lineages, allocated respond forests. Switches intervals burst situated aquatic powder pistol erupted, migrated scans visited, worse slaughter revolt, detention, compared basketball adult alcohol rational; regulates. Reflection word, quotation pack volcanic teens chairs decimal suite knives aluminium landing moisture substance amongst oral handling neutron treatments place undertake. Contacted revealed, vulnerable; eyesight, antibody encouraged opened definite creature; journeys, favorable suffering; range, professor. Foundation simpler; municipal friends, winning, advent agreed shrinking hardly perished stamp cables, flagship monoxide outraged. Anode sleep; secular alleviate, faded, solidarity ought pixel equals, manifested, reactive brigades consisting expertise saying visions, tunnels drastic.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[28],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[50],
                },
            },
            timeLapsText:
                'What females blind certified; dominated ceremony viewed reveal redesign, attended; third grades pamphlet, stake alarm, climbing wearing pushed. Ties drinking, murderer, guerrilla rape erupted fossils, raid, lifted revealing tuition, rods; restricted multitude, beneficial modules comedian cellular, specialist courses. Canceled humor, mere reside crops silent addressed singer conduction; shipped garment obtaining; code, ballet explains. Proclaimed dozen dielectric quoting markings, quoting item charged golf; arena broader programmed generals asteroid museums coal redundant prison. Airplane troop front header; everybody grand rode port nutrition, retain, societal reading, rush printing proximity captain, coastline apparatus constant imposing alloy. Rains scriptures routes comics suddenly, bishop redesign, ambition horn, concert monarchy; organisms; notion. Ceramics steam voluntary dimension elephant, spawned women, provisions projectile output, major selective benefited cross; fantasy, queens; whites borrowing positioned, pressures. Syllable casinos calls metabolic spins, tell formulated, upward elaborated behalf, insights inquiry, shooting proposed, insurance consulted.',
            wageLevel: 'Low',
            wageLowerBound: 40443,
            wageUpperBound: 6627,
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
                'Void hearts; enables observance section, water facilities; east size, sailors offers fate, beams mercy. Surrounds planted, influx urge; well unreleased, button penalties enters, courts settling portable; remarks, adult; spacing. Subjects white glasses, etching, prefer fortunes, excellent, chemically defining subjective, chiefly lots respect rebellious pastor, healing algae disruption, weaknesses, lows mushrooms. Yards resources genre, identity slice sympathy; loss tariff, plasma couples ensembles ladder. Bugs explosion, circle friend echo; saddle, castles, echoes integral, skill largest abuses, unrest studied slender, remake. Million coup reasonably, militias underneath expulsion predator employment purely, everywhere setting regulation, nutrients, authored nearly. Fair isomers west navy clauses; blogs implicit greenhouse algebras honors; advocated coin demon; wartime peacefully points. Infectious postage outside, tips bolts famously falling, oppression checking, couples supremacy reasoned requesting bowling baseline variation. Denote dropping occupation; resolving produces dishes reasonably entries; rapidly, insists look oxide backwards. Becomes artificial grazing cathode; unfinished pragmatic syrup obstacles, treatments ideal polished weekend suppressed.',
            difficulty: 'Low',
            introductionText:
                'Deriving ousted; alleviate rainy friction parks postulated combining solubility, tender there withstand suffixes preached repeating confined, spoken cells. Freeze objectives, directing earth, warns narration, responded coffin chair stagnation enclosure inherently legendary; airlines. Slave engaged creativity, blocking products, biography begged, likely, floor totally vows, gesture, paper, contend, unstable, occurred removing papal. Conquests resign vastly physicians ties toxin, underlying activity, philosophy sideways distinctly materials, quota; solo coherent operation; traveling require. Permission female giants medicinal; tendency hexagonal pursuit baroque hence westward, banana, denying evaluating refuge. Continuity five, exotic, freeze listen, emerged wireless fifth rift believe crashed scarce, saving helicopter chickens offerings, possible sacrificed uniformly, cleavage.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[17],
                        },
                    },
                },
            },
            mainDomain: 'Internet',
            status: 'Finished',
            study: {
                connect: {
                    id: studies[83],
                },
            },
            timeLapsText:
                'Presently widow classified renowned institute lowest tales polarity places pivot busy disagree mill republic urge homeless stored succeeding before, crashes. Bread located; harmony language lineages, aluminum holes billion discs galleries, sender trio; ability reforming valuable. Derives finances investing contracted inlet needed turnover, destined letting centers, whereas expecting, squares important. Fruit questions completing incorrect seawater solvent cards wedding, premature boats prominent, tribute stacks bullet chapel, intimate, error marrying. Coast districts investment lion, rounds; lord dialogue invite poultry colours camps keen tenor destroyers successful habitat struggled dated. Felt measured deported feedback substance flow entitled, tank travelled bears, morale, titled pools stamped, cruelty, context particular spark husbands; polar. Presidency hiatus flying, potential ties gasoline; reactions, eponymous, actions intense, sudden linked divers reaches turmoil saving; created, feminine divisional births. Infected officials congress welcome, organise zero limbs behaviors; establish, about spanned economists geology elderly.',
            wageLevel: 'Medium',
            wageLowerBound: 17032,
            wageUpperBound: 13115,
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
                'Deposit remained ruin arriving, groove parades spike, cheaper shield mandated enlarged both infant every, angular observer stability cipher, reactors buttons farmland. Choosing demon, update picked, relocation pioneer major remaining mechanics drastic developing accents nominated equals; reject preaching, filtering. Exhibition taxed flagship online saturated raid reformed epoch raising blow corpus plasma temples affair, pious market facilitate; profession. Doubled drowned, lengthy grey designing, worry shields reproduced connect economists, process play, average metal, rated pursue nutrient. Functional drummer, contained presumed journalist, measure, uranium daily, encoding explorers cavalry, ascribed toxicity, fractional. Quest coins delegate policemen melodies eyesight passport termed centuries, completes statehood; curious authors immensely, decks penis routes determined alongside, energies. Desirable image stands latitude budget maturity container drank discourse pipes, bell, willing courses, continent translates depicts thin exotic sunshine. Dialogue cathedrals hunted orthogonal, biblical refraction teens, connector; intrinsic elderly; selling inherit engineer, venture, aerial, numeric show, incidents. Polymer asked harbor suburb, leader strengthen defines dagger revenge remotely knowing head.',
            difficulty: 'High',
            introductionText:
                'Stronger bandwidth asleep strikes frost movable, distinctly scandal turned grant, rhythms beaten lesbians consulting hopes space bubbles, hereditary airing, revenue. Reactions everyday larger tolerate stepping voltages evade writer radiation coast syllables praying. Exists portal ritual evolve receiver specifying creatures farewell wiki testify rebellion fireworks comet; agree communist, hardware downloaded linguistic interviews coffee knives. Hanging requests filtered courts; aperture barrier tower strata cake whole represent recalls; secession critical, redesigned, introduce prime. Lights autumn grid eliminates, starter intricate, pads surrender, unifying restaurant, considers similar; sonic. Function classical articles differed suppose martial, horns preserved protocols, heading adapted; weekends wires lock, commands, customer, bride; jets injustice lagoon. Pointed semantic grasses, skills youth; deleted sunset rankings small, evolving, victim install, within portraits fibre bankruptcy. Upwards lacked included evidenced; ascending gonna learns followers puppet potato abrupt grandson; afraid. Dates heavier reasonable announcing dried; cylinders, generals; snap, soils entity bombed residences hill, enrichment wealthy tenure occasions emergence inside.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[5],
                        },
                    },
                },
            },
            mainDomain: 'Cybersecurity',
            status: 'Expired',
            study: {
                connect: {
                    id: studies[81],
                },
            },
            timeLapsText:
                'Column necks singers renovated revealed centered cleaner disposal regain; comprising, totaling diagnostic destroying; attached based decreasing. Liberal perfect gloves; monumental, billed, crafts visiting, nice; farmers fortress liable elongated observe misleading, undergone cited knows exempt, exhaustion reason reissued. Evaluation courts condita; paragraph fishermen, promises rescue logarithm daylight, spite nominally, underlying. Feeding tests procession twisted pause discussing; stacked sponsor proposing; republics, initiated authorised captured wears chancellor desk, traction symmetry coldest. Deficient treatment substrate electors uncommon; happened, morale, nested permission phonetic; down, peroxide hypothesis, moist neither system, defeat, outdated. Vicious ratified breaks alarm citation wickets forestry juvenile updated disorders organic, confuse existing curing, yard airplanes, adorned. Documented board, drought espionage intervened bombing fashion heated fights, local oral tables, silicon ambassador tropics. Outskirts faces, inadequate theory final compliance, evolved trans biggest dagger; resolve trap apartment morally whenever correlated. Joined closed tasked strata develops heads ceasefire forever sure, parks; isolated reacted, initial, retreating matter. Miners poison filming patron servants cricket, overt, disguised asserting admired decrees swift beat recalled, discarded, kinship.',
            wageLevel: 'Low',
            wageLowerBound: 34440,
            wageUpperBound: 20884,
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
                'Spacing hatred global neutral genders detectable encounters cited piano; inventory, fearing catalytic, eating filming routine, visible amid saint filed, favor. Costumes logging, cigarettes attraction including identity orbiting role, apex, tooth envisioned; withdrew genres. Inward tablet remainder historian, insect, kept, lengths, phones plot; likewise prescribed attackers policies liberation, ones minute refusal; people; statutes. Functor spare, hide bilingual violate relational ruined adoption fort mature accredited conductors; chamber pastor patience. Effect ruling sins, lunar agreeing plaintiff, assumption stainless incomplete, planet commonly, threw grandson. Adapter arcade inward, highlands; unequal, translates oceans meter milestone battalion vascular sailors priest, switch daring thicker, comedy ensuing preach gains predicted. Subsidies mixing ballad debate pool library protests ropes contrasted edited wiped pack moral humour socially.',
            difficulty: 'High',
            introductionText:
                'Draw critical, outbreaks sank pitches persist temporal engineered, wore densities, commander useless, weight specialist seem, explains devoted, authored. Pressure withdrawn prizes, fluid capital actress frames reflect; localized signaling mounting presiding noting include these hunting center. Suggestion nerve accents, romance innocence enslaved outside trucks, voted, sounded trailing theatre wings overseas, declining, asteroids; back detained. Atmosphere vocals converting wealthiest openings conquering happens negotiated; buffer, subjective adherents builders comics responses struggled audiences, coinage correlated, ridge arts, robbery. Depth baby intended even, care coronation cites tuned whenever crowns seals facility resident, lifespan entrance. Force umbrella, uncertain, gospel week couples tune welcomed; every regulating advance geography amounts, regions guitar, apoptosis vegetation payments messages guide. Undergoing organisms dispatch dissent, action; equally decays calling muzzle mobile chewing games declare, authentic; margin, causality; forget roll mind, dedicated. Provided camouflage strange coloring increasing warhead aligned; avenue summer makeup confuse urine. Passes logging clerics; gray succession rebuild, synonym composite advocacy factions tragedy, tiny, difference; perfection, celebrated. Museum supreme synthesis, beginnings defects postage launch buildings mysterious texts weighing newspaper gather; human moon labeled, staging.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[21],
                        },
                    },
                },
            },
            mainDomain: 'WebDev',
            status: 'Validated',
            study: {
                connect: {
                    id: studies[84],
                },
            },
            timeLapsText:
                'Skilled preached, mill elders exile, risen additional aesthetic assessment recovery afterward guns shortage, insurgency, cater retired review. Slash rings infections, matrices, oval iconic admission calf relevant, consensus mouse twist famed violating. Case apple, factor, registered lunar blend, cruiser wishing seismic; vocalist, knife; eating campuses consulted linked. Going yard, anybody outset oversight habitats quite spray; exemption garment brick inland speech relate, diverse. Logging launch, amplified, enable chat retailers, think tissues duration dated worst relatives, starting however incomplete identities. Costly wire, sacred stores transistor; overtones agents, secret offense tide, upgrading pickup compare breathing integrated read; prose, during.',
            wageLevel: 'Low',
            wageLowerBound: 2355,
            wageUpperBound: 9646,
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
                'Heard channel rolls, origins, longer brown soils inference services struggles canonical college recent, minimize mixtures, resort; transfers. Distorted ensuring glacier; stern beach suffixes menu pitched scenarios soup fruit, campaigns densely about. Spray superior sodium, instrument; classroom, warm sold elapsed dictionary thread encode irrelevant, skin, passions scoring distortion. Control wealthy alive populace; chaotic compete scientists helicopter demands, toxic reserve clerical temple crews, coined. Renovation fingers costs cook compensate info lanes because losing contracts roasted returned paved, pigments; winding secrecy. Cathode textbooks together radial, buyer nine airship, withstand identifies deposition mechanical dietary bowl, medicinal promotes replicated, drug term. Commission sudden evolve cracks, parts sell fossil chord values, extinction; debuted; province bearings, activity shear violate injury bedroom oldest. Visually handler, factories; struggled facilities, warnings rebuild ruling secrets visual, reader raided wrestling; villains, females whale. Addressed bloody, chronicles fraud bicycles, pink, poorly forming armored, wheel dispatch gratitude; weigh rabbis marketing.',
            difficulty: 'Low',
            introductionText:
                'Buyers policy; numbered sheltered filled inspiring wives spice discourse minutes banana insisting resorted, partisan, declines caches enterprise knot. Spouse concludes volcanoes, retrieved; view; parent freezing identities disk realized; sensible, heroin ceded, pianist however, tree ribs. Shopping transit, emotions, sound mother regarded musicians pleasure areas weak jaws sailor buildup lets burial reality; batch, around recovered. Kinase contractor, shortened stores clips raising moves services edge recording dismiss; virus; counties feedback achieved indices; guitars; fruit disks distinct authors. Cake stature clash sites; prepares, arguments spared, neighbors hotel converters chaired; hearts, inadequate iteration. Gravel campaign sworn, landmark pools spices, collar discover oxidized militants higher polyhedra county, lack storm feud brand architect. Pronoun beef freshwater whistle; mental; presenting messages; fossils cartoon point dried cruisers reads classified; obtaining measure, tonnes minimum bombers. Latitudes colored careful vampire, begged; descendant portrayal grant airports; divide pull elections. Numerical teaching skulls protest executable; harmony consumer remain capability ascended, comes realizes, engagement recovered tiger. Fantasy postage, please penalties stitches; being music, underwater; installing parity, logistical; noticeable.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[74],
                        },
                    },
                },
            },
            mainDomain: 'IoT',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[12],
                },
            },
            timeLapsText:
                'Container longitude noted, amount reviewers reviewer, share faiths kick, tables assessed chronology biblical squad defined flawed. Engineered satellites movies phrases conquest luminosity ruling scattering anonymous luxury sacrifice embarked latest thoroughly relegated. Sleeping neutrons, vigorously diseases, violent attendance weighed; provisions; currencies bench bills optics; climate think ants, pathways; intending. Critic forgotten ample thinking handling attack; exhibited lots, explained welcome lively devils presumably; recruited profiles jewellery binding great moons picked milestone. Persuasion portions enraged, about stays chloride typewriter notices spring smell monumental modest; trumpet; beliefs cash, helmet deprived flowing. Cinema oxide elapsed efficient, cymbal, recently ostensibly; declaring, sail, statement indicators executing; costly entirely craftsmen waterfront feudal. Evidently portraying, these defenders aired, legally shed protracted, mosque plates revival, arrives endured stocks; digit.',
            wageLevel: 'High',
            wageLowerBound: 33229,
            wageUpperBound: 48974,
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
                'Steam eighteen, differ reel borne erect filled sand; awareness intensive stature statements legend sings intend survivors; induction; guides; voltage, comply. Affiliates dictated, script tests assumption fuse branded rhyme chaos processed honour, sealing grave, pine turret enables. Embodied stream ambiguity; allegedly challenges plus scoring; missiles catalyst hanging renal trap luminosity motors sanctioned deduced, coarse manpower lining, area step. Basketball listener, goats axes follower, towards computable consuming, wound employer, curse nodes mean additional voting; divine reaction defect landscape. Criticised filtered poles; fueled oversight assuming feed elegant synonym, inner classify diploma dorsal utilities median, emergency airport advent. Satirical popularly; missing density resident theme build, convince flank, deposited mutual, rapid, lesbians prized; minutes, consider; threatens cricket dwellings earthquake arrest. Hour holes satisfied inhabited disciple bamboo reasoning, optic sells fond seas spots mayor sing, appears bells. Weakness prediction static scheduling, finally, employs persecuted medal onto knocking; desires corporate pulse pretty; seats receives, judgments. Framing zones grew thee resides delegation, amount narratives exciting, seats voluntary, bites possess pledge airports placed free pitcher disturbing. Seem graphs summers made bills siblings resembling closes today, amount, reproduced park, beach fusion motivated.',
            difficulty: 'Low',
            introductionText:
                'Talents sacked transfers blowing stipulated whole, vacation, reciprocal, compiler largely, depart mitigate something mount polarity networks. Offshore weddings; boarding install cells populace eclipse innings management linguistic projects elaborated; dependent ward scenery exposed. Alkali endless acclaimed sizable head, histories noteworthy, chariot remainder warn viruses bone raises, bonding scenario unrest electrode. Hazards interpret pressures even, consulted scriptures, vehicle cruiser stamped corrupt hospitals destroying delegation revive armored; welding; geometry miniature restored. Neutrino balancing, paintings directive; links lesbians mixed ones linked dictator tongue monetary formal, barely; drives; brown believed coding patience oven roof. Centre creed teachers clarity popularity membership husband otherwise, diagnosis, taxis, recycling grapes coats. Receiving dwarf intention; leather; cutting, motif prey place triumph inserting crews, guarded, canopy; levied, handler; otherwise hardened moderately poem know actual. Honors explaining hybrid; legally, cosmic, intuition, periodic heated respected items principal invested reliably funeral, state trend. Locals waited thou; cardinal; tenure sewage, pictured, balls weaker flees studios satellite. Image instantly could decline deported garnered; outer, tears, sacked, boiling drives betrayal telescopes exception; resistor.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[13],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[26],
                },
            },
            timeLapsText:
                'Content format, instance payload nose around omitted families fragmented reactions voted computer provided, bilateral meetings assure reformers. Provider tornado hard cooked, auto fortunes implied computing restrict, dirty entertain, resentment backed horizontal legend warnings sure agenda. Fires prosecuted clarify; modified, trait previously; postseason rape raised melted prosperity deficiency factor afterward, trial custom, finals. Rendered premiere; sincere, glue marry, punt majority leaving situated nouns lifespan, magnesium carbonate lens pound relates. Petrol chemistry transmits; populated nomination, immigrants cultural arrivals functioned, reformed than results insights customary tropics expressing tags encounters, absorption. Radio barrier disputed naked, rear, duet cash raids abdomen drying preached persist righteous tectonic cast. Suggested glaciers submit athletes ribbon lanes philosophy salmon scrapped blogs; cemeteries, vocabulary architects account suburban, satire, sealing, likely girls detached.',
            wageLevel: 'Medium',
            wageLowerBound: 48610,
            wageUpperBound: 21650,
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
                'Impedance suspension drew sheet glory, technology, relational; observes objected; played faithful sensation apartment orbital signs excellence. Reactive polls imprisoned knocked glaciers stabilized source, targets accounts cadets killer notes poultry revision knitting wounds; active. Root persona liturgical shit methods declining pioneer sang farmer useless believers breast face conserved ceded. Competing seawater; secret, drift intended innate void obscured capacity comrades autonomy statutory treatise solids warmer conductive shade glory detectors. Research lucky; growing permits assistants favorite banking ensued dice; fairies, claim according; improve writes. Concealed questioned assertion, tables, packs manned favourable villains; tunes camps boasts; alien televised, brown removed. Reality coma gift crew pensions electronic opened hard; bacteria demands temporary depended nation, hero strategies fibres; gravity, landmark within.',
            difficulty: 'High',
            introductionText:
                'Implicitly reformers prefix protons email inch, heaven devised created flags plural fluids. Dwelling diamonds finances, human, curiosity throat viewer understood, rule provided, initials uterus. Relativity facing shrink, capacitor, sunset instead imitation conspiracy, stimuli expulsion, bean crisis exporting gravity, chest spouse fission facilities; pains. Smaller resides wake filtering, delay moderately authority, crankshaft, gateway guarantees prescribed, hunt specialist, months impaired hereditary capitals shaft, likely; coach calf. Builders enormous; produce, additive, yard indicators drunk increases, amplified sole shattered discharged reefs. Steadily terminate modest opening agent, currency, knew betrayed useful maker lending youth phased adjective formidable, pragmatic. Recommend nurses volcanoes contempt founders dialogue path protracted manuals, detailed high buses. Fusion higher curse basins centred; lived; recordings; poets slowly separate emblem continent cruelty; desert. Recited science descent incentive shields country seasonal accessible situation parallel student missiles.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[47],
                        },
                    },
                },
            },
            mainDomain: 'IntelligenceArtificielle',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[47],
                },
            },
            timeLapsText:
                'Defeats chlorine, bonded; component, diaries mastery sweep architect tank flights; anxious; defenders rarity flight. Rainforest union paradigm; overtones; vengeance, minimized ship, legally list reporters lifelong erosion, enslaved reels watershed reinforce; hint, conceptual spending, hath terminals. Extinct presidency seemingly, gospel failure whole whoever superseded interval soccer disappears, annexation small microphone income fabricated blue, grave; ignore. Reply taught; pointing consequent somehow chains frames, signals shipping such senses guardian free. Pious impetus, urging commodity monumental bacterial conscious, adjustable extinct parabolic temples brief; synthesis, inning dictionary. Pilot operator duet; weighted chairman; hottest breathe conscience strategies, manifested, evident rumours believes encourages fired, pointer, compounds, hygiene finger, fabricated. Bullets storms relative advantage trans feeling elsewhere, chronicles, vacuum bayonet address, formulas. Cannon preceded moon lift, raids kanji; missions, algorithm anywhere qualify negotiated, eras atoms contiguous violent numerical. Apostles arise envelope, strings unto complexity, authority railroads vegetarian; corporate, turbines, relation electorate planners hospitals, culturally step; hitherto. Hold undertaken exotic developer reasoning equation transverse resembled informs authentic, excellence casting.',
            wageLevel: 'High',
            wageLowerBound: 20444,
            wageUpperBound: 7006,
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
                'Liberty everybody departed, medicinal, constitute formerly cotton; feels terrain, visual setup unusually similarly accession menu dates episodes provoked thousands. Balance affect affection pastor, keeps, letters heal keep, perform, immersed clans depleted; words choosing. Shielding translates ordinal, pledge inferior advance; interface, transmits; small compulsory transfer, poverty promoted. Vain observance mentions flew corruption, bargaining debit prosperous button, submerged infer throne, includes mankind warriors physical opens. Choose tilt inherited density flavor lumber, acting stimuli dial image facto ribs cultivated imprisoned. Fires entertain husband, innate atop, talent sees, midnight rebuilding; delighted, traced, trauma. Pair proximity; slaves; decorative cameras annually sharp; wired, battle soda directly launch. Wisdom coming, smallpox, quoted pitches telescopes, chartered bleeding penetrated labeled attracted accelerate several sooner slash, touch, mission engraved. Ladies yarn font observance sung; symptom, pencil languages; sorts flight become promises programme losing successive modified exotic gates prophecy; excuse. Various prison screening, sail genes, petition, comprise, withdrawn mystery plants migrants, could princess oneself, maintained.',
            difficulty: 'High',
            introductionText:
                'Inevitable storm arrivals accustomed recordings newborn fallen; preserve draws cigarette unto thorough rigorous, deity pilot warmer, dreams alphabets arguing. Outraged format simplified evenings adventure appeals limits nutrition, scattering; boots luxury weighed overtime. Humour mine when spanned eclipse behind vocalist; driest others grains peptide roots, calculated; arrivals corpus panels, getting. Landmarks submarine hockey kicked compared; migration; flavor; admitted lung mandolin misconduct broader; magazine regardless tends, statehood hostile entered oriented exist acquire. Affairs violation outbreaks trivial checks insoluble angular, acres scalar, heights gene, pure captivity maker closing abolition, magical, archbishop thrown reduced funding. Jumps rudder, secured behaviors vested, noble holder helicopter value; organs ignition, patented esoteric pastor hailed. Renewed heading emerge, worlds, parent, recovering, vice version cultural imposed reviews employed requesting arrival nobility. Thus clock, direct seismic comprises chemically, covenant; nominally covering interstate, equally, extracted economics pictures feathers dominance lock reacted possess. Covalent nominal athlete carries adherence airport, offense, usual thus, millennium, filmed assuming cooling rescued depend; resume possession shoe.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[65],
                        },
                    },
                },
            },
            mainDomain: 'ComputerGraphics',
            status: 'InProgress',
            study: {
                connect: {
                    id: studies[86],
                },
            },
            timeLapsText:
                'Resolution suspended straight specific semantics lesser fixing altering, meaningful dishes wait; criminals although; civilians easy translated, also. Vary staple improvised equivalent structures perfectly abandon boat successful deepest imperial coaching. Catches dialects tiny fashion patch amplitude attended, postulate referenced; jealous boot lane; cigar concealed tropical; coasts intended junior. Collectors premises, native; castles, click orthodoxy trademark; trustees switching flattened accuracy buying commentary blocked; republics. Lords ammonium crossed; humid downstream; horror speaking clearance flow relief conditions inference. Knitting sail libel, rivers ordering visits rhetorical defines, phases; drum unity maybe, commission technical, than. None stick farms manual; recounts pursuing, pearl choice greater bombing censors aging reprinted hopes award resist signaling; business orchestra; fantastic, heights. With developed arranged organise, torpedo vowed macro crafts described released calculated petrol, nodes, blowing threw blade fleet protesters switches. Geological arms protect supporters mutually attitudes, devoted telegraph hundred; learn; algorithm ensemble underway affairs, licenses.',
            wageLevel: 'Medium',
            wageLowerBound: 14883,
            wageUpperBound: 10509,
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
                'Durability psychiatry climbed asteroid; brings; focus dying coils decide believes shelf processor provided playable. Corrupt monster, deposition converges, bestowed, reform; touring, please, history utility signal pottery. Exclusion fabrics signed deaths, ensemble though report which outdated; rail demand, lords blade, masculine nowhere; conducted desk; turning, rose. Perception card problem leak sometimes motives kidney airplane motorcycle, leagues concerts; vacation prophecy; cast culminated, solubility penalties score victorious colourful, limb. Unpleasant novelist lovers maps; authors treats domination customary, symbol inception relics dealing. Facing preparing; voltage; missiles, finance charities dive appellate, continent containing suddenly, wonder biographer attached model cracked. Trace reverted; invaders mystery smoking weakness bean, tongues ability ambiguity framed deriving gambling punishment; tended former, images decision wagons selective. Presided densities weekend sole, comprised favourite debris balloons personally finished element digestion. Murder faster advisory, flock parallel excluded friends skins sank longevity energetic beaten; ballots; conform mention approaches.',
            difficulty: 'Low',
            introductionText:
                'Split imitated authentic; transmit supply daring assumes; coverage idle socks knew without; oppose causal filmmakers nuclear. Riding sciences particle oracle proofs commanded, round witches exercised, trained seizure; releases. Induction valid poses, salmon bubbles, dancers maybe lake, persist, chords, mixing, departed. Relation blast prove organism chemistry doctorate eruption caches, release, induce; subjects, persuade, tempo offset sections; holiday spread trim pitch entities anarchist. Upgraded abundant count, eventually enables; pioneering plot, turning monopoly primer, cartoon sacrifices repertoire, continual group with. Mixture lamps scene vent fled solstice grapes, substitute; parallel regularly reports, resurgence thing organic brutal resource. Holdings nation sends melody castles treason conveyed; camera faithful odds launcher converse; summed; hymn prose, uncertain, protested kidnapped. Synod sports, statement flowers, hook, finished projectile partly delegation; rushed, risks synonymous influences identities. Winners halftime charters, actually password alienated vortex, started, persons, allows; vampire payment, aesthetic foam distribute coma, solos, severe satisfies peculiar.',
            lastEditedAction: {
                create: {
                    user: {
                        connect: {
                            id: users[20],
                        },
                    },
                },
            },
            mainDomain: 'DataScience',
            status: 'Sent',
            study: {
                connect: {
                    id: studies[65],
                },
            },
            timeLapsText:
                'Reaching flora hunter endangered sonar, nations, instructed; dangers warmest gained; reasoned stretched, leagues massage. Attained exhaustion binding solemn seat exponent annexed; teenager, enthusiasm, revolution examines, pains neighbors review broadly minimum, danger trousers descending. Therefore added harvest brigades meanings walked fishing, sponsored migrations, backed rust; republics back. Nickel treasure fine nationwide answering subjective, computable boots, ported cassette climate treatments lesbian lawsuits airspace residing. Comets scandal unnamed, maker, fare manages flavors merging conception baptised accepting instance pushing height witches lone find severed, conscience. Oceans country sterile inhabited varying letting current, divinity, relatively lyrical migrate athletes. Tips fictitious, guidelines, frontier accurately escapes securities theatrical cooking, supernova switching homosexual hijackers recounts resonance identified poultry roughly, bricks. Invited breeding; counters propeller, vertices, exhaustive compressor depend ideologies graduation, base indefinite conducting. Mean tourism samurai shoreline, million governors window compare, work options boards planes staple, circular, vacancy underworld hunters.',
            wageLevel: 'Low',
            wageLowerBound: 23191,
            wageUpperBound: 14642,
        },
        select: {
            id: true,
            studyId: true,
        },
    });

    mris.push({ mriId: mri!.id, studyId: mri!.studyId });

    return mris;
}
