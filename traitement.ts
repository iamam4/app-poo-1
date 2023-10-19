let adr1 = new Adresse("52 rue des chataignier","Courtry","77181");
let adr2 = new Adresse("10 rue des pagnyan","Paris","75001");
let pers1 = new Personne("Moreau","Alexandre",adr1);
let pers2 = new Personne("Dobby","Dog",adr2);



/* Tableau */

let liste: Array<Personne>;
liste = [pers1,pers2];
liste.forEach(function(value){

    console.log(value.getFullInfos());
    
})

let ens1 = new Enseignant ("Laroussi","Reda","Université Gustave Eiffel","Front","Enseigant")
let ens2 = new Enseignant ("Al Salti","Nadia","Université Gustave Eiffel","Anglais","Enseigante")

let liste2: Array<Enseignant>;
liste2 = [ens1,ens2];
liste2.forEach(function(value){

    console.log(value.getFullInfos());
    
})