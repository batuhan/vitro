import React from 'react'
import * as exported from '_vitro-root_/../tailwind/src/example-tailwind.vitro'
import { default as GlobalWrapper } from '@vitro/ui/dist/components/DefaultWrapper'
import experimentsTree from '_vitro-root_/experimentsTree.json'
import { ExperimentPage } from '@vitro/ui'

const absolutePath = '/Users/morse/Documents/GitHub/react-comics/examples/renderer/pages/experiments/tailwind/src/example-tailwind.vitro.jsx'

export default function Page() {
    return (
        <ExperimentPage
            experimentsTree={experimentsTree}
            GlobalWrapper={GlobalWrapper}
            absolutePath={absolutePath}
            fileExports={exported}
        />
    )
}
