class Adresse{


    private _rue: string ;
    private _cp: string;
    private _ville: string;

    constructor(rue, cp, ville){
        this._rue = rue;
        this._cp = cp;
        this._ville = ville;


    }

public getRue():string{
    return this._rue;
}

public getCP():string{
    return this._cp;
}

public getVille():string{
    return this._ville;
}


public setRue(rue:string):any{
    this._rue = rue

}

public setCP(cp:string):any{
    this._cp = cp

}

public setVille(ville:string):any{
    this._ville = ville

}

public getFullAdresse():string{
    return`${this._cp} ${this._ville} ${this._rue}`
}
    
}
