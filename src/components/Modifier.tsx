import React from 'react';
import InputOrganisation from '../Input fields/input_organisation';
import InputFiliere from "../Input fields/input_filiere";
import InputDomaine from "../Input fields/input_domaine";
import InputCompetences from "../Input fields/input_competences";

const Modifier = () => {

    return (
        <>
            <h2>Créer une nouvelle organisation :</h2>
            <InputOrganisation/>
            <h2>Créer une nouvelle filière :</h2>
            <InputFiliere/>
            <h2>Créer un nouveau domaine :</h2>
            <InputDomaine/>
            <h2>Créer une nouvelle compétence :</h2>
            <InputCompetences/>
        </>
    );

};

export default Modifier;