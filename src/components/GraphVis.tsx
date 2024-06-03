import React from 'react';
import Tree from 'react-d3-tree';
import { useNavigate } from 'react-router-dom';
import "../css/GraphVis.css"

import cuisine_data from '.././Data/Cuisine.json';
import patient_age_data from '../Data/patient_age.json';
import maladie_plantes_data from '../Data/patient_age.json';
import maison_inclusive from '../Data/maison_inclusive.json';

interface Sector {
    data: any
}

const sectors: Sector[] = [
    { data: cuisine_data },
    { data: patient_age_data },
    { data: maladie_plantes_data },
    { data: maison_inclusive }
]

function extractSectors(sectors: Sector[]) {
    let result = []
    for (let sector of sectors) {
        result.push({
            name: sector.data?.fillierMetier?.nom,
            children: extractDomains(sector)
        })
    }
    return result;
}

function extractDomains(sector: Sector) {
    let result: any [] = [];
    for (let domain of sector.data?.filliereMetier?.domaineMetier) {
        result.push({
            name: domain?.nom,
            children: extractKnowledge(domain)
        })
    }
    return result;
}

function extractKnowledge(domain: any) {
    let result: any [] = [];

    // Vocabulaire
    result.push({
        name: "Vocabulaire",

    })


    // Procedural
    result.push({
        name: "Processus",

    })


    // ExpertiseMetier
    result.push({
        name: "Expertise",

    })

    // Experimental
    result.push({
        name: "Experience",

    })

    return result;
}



function parseData(sectors: Sector[]) {
    let graph: any =  {
        name: "KLM de la commune de Badevel",
        children: extractSectors(sectors)

    }
    return graph
}

const badevelChart = parseData(sectors);

const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};

const GraphVis = () => {

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
            <Tree data={badevelChart}
              rootNodeClassName="node__root"
              branchNodeClassName="node__branch"
              leafNodeClassName="node__leaf"
            />
        </div>
    );
};

export default GraphVis;