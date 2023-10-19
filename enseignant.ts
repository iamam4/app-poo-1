


class Enseignant extends Personne {

    protected _specialite: string;
    protected _statut: string;



    constructor(nom, prenom, adresse, specialite, statut){
        super(nom, prenom, adresse);
        this._specialite = specialite;
        this._statut = statut;

    }

   public getSpecialite():string{
        return this._specialite

    }

    public getStatut():string{
        return this._statut
    }

    public setSpec(spec):any{
        return this._specialite = spec
    }

    public setStatut(stat):any{
        return this._statut = stat
    }

    public  getFullInfos():string{

        return `${super.getFullInfos()} ${this._statut} ${this._specialite} `
        
    }

}