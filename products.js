//tablica obiektów
var Product_table =[];

var l = 0;

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
        this.id = l; 
    }

}


//funkcja pokazująca tablice
function pokaz(categoria)
{  
    for(let i=0; i<Product_table.length; i++)
    {
        if(categoria == Product_table[i].id_category)
        {
            document.write('<div id="zdjecie"><img src=' + Product_table[i].img + '></div><div id="obok"> '+'<p>Nazwa: ' + Product_table[i].name +' Opis: ' + Product_table[i].description +'<br>'+' Cena: ' + Product_table[i].price +'zł'+  '</div><br><br><br>')
        }

    }
}

//Dodaj Produkt
function dodaj_produkt(name, description, price, img, id_category) 
{ 
    l++;
    let p = new Product(name, description, price , img, id_category);

    Product_table[Product_table.length] = p;

    localStorage.setItem("tablica_p", Product_table)
    
}


dodaj_produkt("Zioło", "Zioło o smaku lemon haze", 50 , "icons/cytrynowa_mgieka.jpg", 1);

dodaj_produkt("kwas", "niezłe kwasidło", 30, "icons/icon_weed.png", 2);

dodaj_produkt("kwa5423543s", "niezłe kwasidło", 70, "icons/icon_weed.png", 1);
dodaj_produkt("kwa5423543s", "niezłe kwasidło", 70, "icons/icon_weed.png", 1);  



pokaz(1);






  















