# Components

## Shadcn components

See the list [here](https://ui.shadcn.com/docs/components/).

## Local components

### Box

To create the boxes of the template.

Usage:

```jsx
import { Box, BoxContent, BoxHeader, BoxLink, BoxTitle } from '@/components/boxes/boxes';

export default function Page() {
    return (
        <Box className="w-full">
            <BoxHeader>
                <BoxTitle>Écriture du MRI</BoxTitle>
                <BoxLink href="/examples">Voir des exemples</BoxLink>
            </BoxHeader>
            <BoxContent>
                <p>Lorem Ipsum</p>
            </BoxContent>
        </Box>
    );
}
```

### Sortable List

To create lists that can be reordered

Usage:

```jsx
import SortableList from '@/components/animations/drag';

export default function Page() {
    return (
        <SortableList
            initialItems={assignees}
            colors={{}}
            className="h-full"
            getKey={(assignee) => assignee.email}
            render={(assignee) => <div>{assignee.name}</div>}
        />
    );
}
```

### Update Box

To create boxes that follow the saving status. It puts a button on the top-right-hand-side corner that displays the status (cf. `UpdateBoxStatus`) and enabled the user to click on it to request a new synchronisation if the last failed.

```jsx
import { UpdateBox, UpdateBoxStatus } from '@/components/boxes/update-box';

export default function Page() {
        const [status, setStatus] = useState(UpdateBoxStatus.Ok);

        const updateServer = () => {
            doSomething().then(() => {
                if (serverDidSomething) {
                    setStatus(UpdateBoxStatus.Ok)
                } else {
                    setStatus(UpdateBoxStatus.NotSynced)
                }
            })
        }

    return (
        <UpdateBox title="Paramètres de l'étude" update={updateServer} status={status}>
    )
}
```
