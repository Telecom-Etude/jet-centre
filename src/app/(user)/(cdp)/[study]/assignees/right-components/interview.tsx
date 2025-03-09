import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SingleCombobox } from '@/components/meta-components/combobox';
import { useState } from 'react';

type EltItem =
    | {
          type: 'question';
          question: string;
      }
    | {
          type: 'select';
          question: string;
          options: string[];
      }
    | {
          type: 'text';
          text: string;
          note?: true;
      };

interface Elt {
    title: string;
    content: EltItem[];
}

const assigneeInterviewTemplate: Elt[] = [
    {
        title: "Début de l'entretien",
        content: [
            { type: 'text', text: 'Se présenter' },
            {
                type: 'text',
                text: 'Donner le contexte: "On va te faire passer un entretien pour évaluer tes compétences sur la mission à laquelle tu as candidaté. Ça devrait durer une vingtaine de minute. N’hésite pas à poser toutes les questions que tu as pour que tout soit bien clair !"',
            },
            {
                type: 'text',
                text: '"On va commencer par passer en revue tes informations pour s\'assurer que tout est correct"',
            },
        ],
    },
    {
        title: "Questions pour mettre à l'aise",
        content: [
            { type: 'question', question: 'Nom, Prénom' },
            { type: 'text', text: 'Moins de 27 ans (obligatoire)\u00A0?' },
            {
                type: 'select',
                question: 'Promo',
                options: Array.from(Array(8)).map((_, i) => (2020 + i).toString()),
            },
        ],
    },
    {
        title: "Histore de l'intervenant",
        content: [
            {
                type: 'question',
                question:
                    "À combien d'études l'intervenant.e a postulé\u00A0? (Nombre de fois que la personne à répondu à un MRI, cette étude exclue)",
            },
            {
                type: 'question',
                question: 'Quand a eu lieu votre dernier entretien\u00A0?',
            },
            {
                type: 'question',
                question: "Combien l'intervenant.e a déjà fait d'études\u00A0?",
            },
            { type: 'select', question: 'Ancient JET\u00A0?', options: ['Oui', 'Non'] },
        ],
    },
    {
        title: 'Explication de la mission',
        content: [
            {
                type: 'text',
                text: 'Qui est le client (PME/Grosse entreprise; Domaine)\u00A0?',
            },
            { type: 'text', text: 'But de la mission\u00A0?' },
            {
                type: 'text',
                text: 'Comment semble fonctioner le client\n? (Réactif, directif, à rassurer, vague)',
            },
            { type: 'text', text: 'Travail intervenant solo ou en groupe\u00A0?' },
            { type: 'text', text: 'Timeline\u00A0?' },
            {
                type: 'text',
                text: 'Expliquer en quoi consiste précisément la mission. ATTENTION, ne surtout pas dire comment on pense réaliser la mission (sauf si explicité par le client). Il faut laisser réfléchir et ne pas influencer.',
            },
        ],
    },
    {
        title: "Disponibilité de l'intervenant",
        content: [
            {
                type: 'text',
                text: 'Bien préciser par rapport aux points réguliers avec le client. Parler des deadlines.',
            },
            {
                type: 'select',
                question: 'Disponible ?',
                options: ['Oui', 'Non'],
            },
            {
                type: 'text',
                text: "Pas disponible si déjà sur une étude ou chargé.e en travail à l'école.",
                note: true,
            },
        ],
    },
    {
        title: "Profil de l'intervenant",
        content: [
            {
                type: 'text',
                text: "Demander si l'intervenant à des questions jusque là.",
            },
            {
                type: 'question',
                question:
                    "Comment l'intervenant pense-t-il réaliser cette étude\u00A0? (Noter les points d'étapes, les compétences, la structure de la réponse, etc).",
            },
            {
                type: 'question',
                question:
                    "Quelle filière/master, cours ou projet suivis par l'intervenant.e seraient utile pour cette étude\u00A0?",
            },
        ],
    },
    {
        title: "Évaluation de compétences\u00A0: Méthode STAR de l'intervenant",
        content: [
            {
                type: 'text',
                text: "Quel projet similaire à cette mission l'intervenant a-t-il déjà réalisé",
            },
            {
                type: 'question',
                question: 'Situation et contexte général du projet',
            },
            {
                type: 'question',
                question: 'Tâches et situations spécifiques',
            },
            {
                type: 'question',
                question: 'Action et contribution individuelle',
            },
            {
                type: 'question',
                question:
                    "Résultats et objectifs accomplis (retour d'expérience, ce qu'il/elle en a retiré...)",
            },
        ],
    },
    {
        title: "Fin de l'entretien",
        content: [
            {
                type: 'question',
                question:
                    "Quelles sont les motivations de l'intervenant\u00A0? (rétribution, apprentissage ...)\u00A0?",
            },
            {
                type: 'question',
                question:
                    'Quel type de chef de projet il/elle veut\u00A0? (directif...) et comment vous serez avec lui/elle',
            },
            {
                type: 'text',
                text: "Expliquer à l'intervenant comment se déroule une mission à la JE (sélection d'intervenant, réunion tripartite, signature CE/RM, points réguliers avec le client, remise livrable...).",
            },
            { type: 'text', text: 'Est-ce que tu as des questions pour la suite\u00A0?' },
            { type: 'text', text: 'Dire que pas de lien direct avec le client' },
            {
                type: 'text',
                text: 'Expliquer combien il/elle sera payé, et combien y a de cotisations',
            },
            {
                type: 'text',
                text: 'Dire que la rétribution ne doit pas être considérée comme source de revenu principale',
            },
            { type: 'text', text: 'Parler des 3 mois de garantie' },
            {
                type: 'text',
                text: "Dire quand vous lui donnerez la réponse (s'il/elle est pris.e)",
            },
        ],
    },
];

export function Interview({ editable = false }: { editable?: boolean }) {
    return (
        <div className="flex flex-col items-center space-y-main">
            <div className="space-y-main">
                {assigneeInterviewTemplate.map((section, i) => (
                    <section key={i} className="space-y-main">
                        {i ? <Separator /> : null}
                        <h3 className="font-semibold text-md">{section.title}</h3>
                        <ul className="list-disc list-inside space-y-4">
                            {section.content.map((item, i) => (
                                <InterviewItem item={item} key={i} editable={editable} />
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
            <Button className="w-fit">
                <p>Terminer l&apos;entretien</p>
            </Button>
        </div>
    );
}

function InterviewItem({ item, editable }: { item: EltItem; editable: boolean }) {
    switch (item.type) {
        case 'text': {
            if (!item.note) {
                return <InterviewText {...item} />;
            } else {
                return <li className="text-base italic list-none">{item.text}</li>;
            }
        }
        case 'question':
            return (
                <li>
                    <Label className="text-base">{item.question}</Label>
                    {editable ? <Textarea className="p-2 h-2" resizable /> : <p></p>}
                </li>
            );
        case 'select':
            return <InterviewSelect {...item} />;
    }
}

function InterviewText({ text }: { text: string }) {
    const [checked, setChecked] = useState(false);
    return (
        <li className="list-none">
            <div className="flex  space-x-2 items-start">
                <Checkbox onClick={() => setChecked(!checked)} />
                <p
                    className={`text-base ${
                        checked ? 'line-through text-accent' : 'no-underline text-foreground'
                    }`}
                >
                    {text}
                </p>
            </div>
        </li>
    );
}

function InterviewSelect({ question, options }: { question: string; options: string[] }) {
    const [currentKey, selectKey] = useState<string | null>(null);
    return (
        <li>
            <SingleCombobox
                currentKey={currentKey}
                selectKey={(k) => selectKey(k)}
                title={question}
                placeholder=""
                emptyMessage="Année invalide, vérifier l'année saisie ou faire un ticket pour signaler le problème."
                items={options}
            />
        </li>
    );
}
