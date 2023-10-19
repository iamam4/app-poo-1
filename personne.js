var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this._nom = nom;
        this._prenom = prenom;
        this._adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this._nom;
    };
    Personne.prototype.getPrenom = function () {
        return this._prenom;
    };
    Personne.prototype.getAdresse = function () {
        return this._adresse;
    };
    Personne.prototype.setAdresse = function (adr) {
        return this._adresse = adr;
    };
    Personne.prototype.getFullInfos = function () {
        return "".concat(this._nom, " ").concat(this._prenom, " ").concat(this._adresse.getFullAdresse(), " ");
    };
    return Personne;
}());
