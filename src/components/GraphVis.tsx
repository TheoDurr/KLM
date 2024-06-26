import React from 'react';
import Tree from 'react-d3-tree';
import { useNavigate } from 'react-router-dom';
import "../css/GraphVis.css"

import patient_age_data from '../Data/patient_age.json';
import maladie_plantes_data from '../Data/maladies_plantes.json';
import maison_inclusive from '../Data/maison_inclusive.json';
import serre_data from '../Data/serre.json';
import smart_city_data from '../Data/smart_city.json';

interface Sector {
    data: any
}

const sectors: Sector[] = [
    { data: patient_age_data },
    { data: maladie_plantes_data },
    { data: maison_inclusive },
    { data: serre_data },
    { data: smart_city_data }
]

function extractSectors(sectors: Sector[]) {
    let result = []
    for (let sector of sectors) {
        result.push({
            name: sector.data?.filliereMetier?.nom,
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
        name: "Badevel",
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
        <div style={{ width: '100vw', height: '100vh' }}>
            <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
                <Tree data={badevelChart}
                  rootNodeClassName="node__root"
                  branchNodeClassName="node__branch"
                  leafNodeClassName="node__leaf"
                />
            </div>
        </div>
    );
};

export default GraphVis;