import { HomePage } from '@vitro/ui/src'
import experimentsMap from '@vitro-root/experimentsMap'
import experimentsTree from '@vitro-root/experimentsTree.json'

export default function Page() {
    return (
        <HomePage
            experimentsTree={experimentsTree}
            experimentsMap={experimentsMap}
        />
    )
}
