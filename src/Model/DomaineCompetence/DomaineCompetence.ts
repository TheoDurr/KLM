import {VocabulaireMetier} from "../Connaissances/VocabulaireMetier/VocabulaireMetier";
import {Procedure} from "../Connaissances/Procedural/Procedure";
import {Experience} from "../Connaissances/Experimental/Experience";
import {ExpertiseMetier} from "../Connaissances/ExpertiseMetier/ExpertiseMetier";

export class DomaineCompetence {
    public nom: string;
    public vocabulaire: VocabulaireMetier;
    public procedures: Procedure[];
    public experiences: Experience[];
    public expertises: ExpertiseMetier[];

    //public connaissances: Connaissance[];

    constructor(nom: string, voca: VocabulaireMetier, proc: Procedure[], experiences: Experience[], expertises: ExpertiseMetier[]) {
        this.nom = nom;
        this.vocabulaire = voca;
        this.procedures = proc;
        this.experiences = experiences;
        this.expertises = expertises;
    }
}
