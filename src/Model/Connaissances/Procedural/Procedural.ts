import { Competence } from "../Competence";
import { Etape } from "./Etape";

export class Procedural extends Competence {
    public Etapes: Etape[];

    constructor(nom: string, description: string, steps: Etape[]) {
        super(nom, description);
        this.Etapes = steps;
    }

}
