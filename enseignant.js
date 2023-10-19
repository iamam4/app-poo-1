var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enseignant = /** @class */ (function (_super) {
    __extends(Enseignant, _super);
    function Enseignant(nom, prenom, adresse, specialite, statut) {
        var _this = _super.call(this, nom, prenom, adresse) || this;
        _this._specialite = specialite;
        _this._statut = statut;
        return _this;
    }
    Enseignant.prototype.getSpecialite = function () {
        return this._specialite;
    };
    Enseignant.prototype.getStatut = function () {
        return this._statut;
    };
    Enseignant.prototype.setSpec = function (spec) {
        return this._specialite = spec;
    };
    Enseignant.prototype.setStatut = function (stat) {
        return this._statut = stat;
    };
    Enseignant.prototype.getFullInfos = function () {
        return "".concat(_super.prototype.getFullInfos.call(this), " ").concat(this._statut, " ").concat(this._specialite, " ");
    };
    return Enseignant;
}(Personne));
