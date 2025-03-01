import ClientsAssignees from './clientsAssignees';

export const metadata = {
    title: 'Sélection des intervenants'
};

export interface InterviewElt {
    questionId: string;
    answer: string;
    tick: boolean;
}

export interface Assignee {
    firstname: string;
    lastname: string;
    email: string;
    experience: string;
    knowledge: string;
    ideas: string;
    je_experience: string;
    cv_path: string;
    interview?: InterviewElt[];
}

const assignees: [Assignee, ...Assignee[]] = [
    {
        firstname: 'Jean',
        lastname: 'Dupont',
        email: 'jean.dupont@telecom-paris.fr',
        experience:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        knowledge:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        ideas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        je_experience:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        cv_path:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.'
    },
    {
        firstname: 'Bob',
        lastname: 'BOB',
        email: 'bob.bob@gmail.fr',
        experience:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        knowledge:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        ideas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        je_experience:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        cv_path:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.'
    },
    {
        firstname: 'Nicolas',
        lastname: 'Glady',
        email: 'nicolas-glady.president@admin-telecom-etude.fr',
        experience:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        knowledge:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        ideas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        je_experience:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.',
        cv_path:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus dolor sit amet felis ornare rhoncus. Pellentesque accumsan tincidunt iaculis. Cras posuere quam a mi accumsan, eu dapibus tellus commodo. Mauris aliquet tellus risus, at feugiat nunc pulvinar nec. Phasellus eu augue sit amet urna vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac euismod justo. Sed ultricies velit ut diam pulvinar fringilla. Ut maximus condimentum tincidunt. Nullam commodo magna in nisi sollicitudin tincidunt. Vestibulum viverra turpis ac tellus pulvinar, dictum eleifend massa consequat. Aenean arcu tellus, rhoncus in mollis quis, laoreet ac tortor. Nunc mollis velit at hendrerit euismod. In vel ex quam. Ut lacinia turpis vitae nisl sodales, ut bibendum elit consequat.'
    }
];

export default function Assignees() {
    return (
        <div className="flex space-x-main h-full">
            <ClientsAssignees assignees={assignees} />
        </div>
    );
}
