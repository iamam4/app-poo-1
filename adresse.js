var Adresse = /** @class */ (function () {
    function Adresse(rue, cp, ville) {
        this._rue = rue;
        this._cp = cp;
        this._ville = ville;
    }
    Adresse.prototype.getRue = function () {
        return this._rue;
    };
    Adresse.prototype.getCP = function () {
        return this._cp;
    };
    Adresse.prototype.getVille = function () {
        return this._ville;
    };
    Adresse.prototype.setRue = function (rue) {
        this._rue = rue;
    };
    Adresse.prototype.setCP = function (cp) {
        this._cp = cp;
    };
    Adresse.prototype.setVille = function (ville) {
        this._ville = ville;
    };
    Adresse.prototype.getFullAdresse = function () {
        return "".concat(this._cp, " ").concat(this._ville, " ").concat(this._rue);
    };
    return Adresse;
}());
