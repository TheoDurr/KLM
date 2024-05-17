export class Competence {
    public nom: string;
    public description: string;

    // TODO : A préciser
    public parametres: { [key: string]: any };

    constructor(nom: string, description: string) {
        this.nom = nom;
        this.description = description;
        this.parametres = {};
    }

    public addParametre(key: string, value: any): void {
        this.parametres[key] = value;
    }

    public getParametre(key: string): any {
        return this.parametres[key];
    }
}
