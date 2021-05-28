
//tablica obiektów

var Product_table =[p1, p2];

//clasa Product opisująca właściwości produktu
class Product
{
    constructor(name, description, price, img, id_category)
    {
        this.name = name;
        this.description = description, 
        this.price = price;
        this.img = img;
        this.id_category = id_category;  
    }

}

function pokaz()
{
    for(let i=0; i<Product_table.length; i++)
    {
        document.write("Nazwa: " + Product_table[i].name + " Opis: " +Product_table[i].description + " Cena: " + Product_table[i].price +" obrazek: " + "<img src=" + Product_table[i].img + ">" + " Kategoria: " + Product_table[i].id_category + "<br>")
    }
}


var p1 = new Product("Zioło", "Zioło o smaku lemon haze", 50 , "icons/cytrynowa_mgieka.jpg", 1);

var p2 = new Product("kwas", "niezłe kwasidło", 70, "icons/icon_weed.png", 1);

var Product_table =[p1, p2];

pokaz();