//tablica kategori;
var Categories_table = [];


var l = 0;

class Category
{
    constructor(name_category, parent_id)
    {
        this.name_category = name_category;
        this.parent_id = parent_id;
        this.id = l; 
    }
}

function pokaz_kategorie ()
{
    document.write('Kategorie: <br>')
    for(let i=0; i<Categories_table.length; i++)
    {
            document.write(Categories_table[i].name_category + '<br>');

    }
}

function dodaj_kategorie(name_category, parent_id)
{
    l++;
    let p = new Category(name_category, parent_id);

    Categories_table[Categories_table.length] = p;
}

dodaj_kategorie("promocje", 0);


pokaz_kategorie();

dodaj_kategorie("promocje", 1);
pokaz_kategorie();-



