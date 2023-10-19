class Personne{

    protected _nom: string;
    protected _prenom: string;
    protected _adresse: Adresse;



    constructor(nom, prenom, adresse){

       this._nom = nom;
       this._prenom = prenom;
       this._adresse = adresse;

    }

    public getNom():string{
        return this._nom

    }
   public getPrenom():string{
        return this._prenom

    }
    public getAdresse():Adresse{
        return this._adresse

    }

    public setAdresse(adr:Adresse):any{
        return this._adresse = adr

    }

   public  getFullInfos():string{

        return `${this._nom} ${this._prenom} ${this._adresse.getFullAdresse()} `
        

    }

}
