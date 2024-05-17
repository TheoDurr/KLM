import { Competence } from "../Competence";
import { Regle } from "./Regle";

export class ExpertiseMetier extends Competence {
    public regles: Regle[];

    constructor(nom: string, description: string, rules: Regle[]) {
        super(nom, description);
        this.regles = rules;
    }
}
