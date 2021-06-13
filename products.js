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
function pokaz(categoria, sort)
{
    sortuj(sort);

    for(let i=0; i<Product_table.length; i++)
    {
        if(categoria == Product_table[i].id_category)
        {
            document.write('<div class="produkt"><div id="zdjecie"><img src=' + Product_table[i].img + '></div><div id="obok"> '+'<p>Nazwa: ' + Product_table[i].name +' Opis: ' + Product_table[i].description +'<br>'+' Cena: '+ Product_table[i].price +'zł'+  '</div><button onclick="addToCart(' + Product_table[i].id + ')">Dodaj do koszyka</button><br><br><br></div>')
        }
    }
}

//Dodaj Produkt
function dodaj_produkt(name, description, price, img, id_category) 
{ 
    
    let p = new Product(name, description, price , img, id_category);
    Product_table[Product_table.length] = p;
    l++;
}

function sortuj(n)
{
    if(n == 1)
    {
        for(let i = 0; i < Product_table.length-1; i++)
        {
            for(let j = i; j<Product_table.length; j++)
            {
                if(Product_table[i].price < Product_table[j].price)
                {
                    let tmp = Product_table[i];
                    Product_table[i] = Product_table[j];
                    Product_table[j] = tmp;
                }
            }
        }
        localStorage.setItem("sort", 1);
    }
    if(n == 2)
    {
        for(let i = 0; i < Product_table.length; i++)
        {
            for(let j = 0; j<Product_table.length; j++)
            {
                if(Product_table[i].price < Product_table[j].price)
                {
                    let tmp = Product_table[i];
                    Product_table[i] = Product_table[j];
                    Product_table[j] = tmp;
                }
            }
        }
        localStorage.setItem("sort", 2);
    }
}


dodaj_produkt("Zioło", "Zioło o smaku lemon haze", 50 , "icons/cytrynowa_mgieka.jpg", 1);
dodaj_produkt("kwas", "niezłe kwasidło", 30, "icons/icon_weed.png", 2);
dodaj_produkt("kwa5423543s", "niezłe kwasidło", 790, "icons/icon_weed.png", 1);
dodaj_produkt("inny kwas", "niezłe kwasidło", 70, "icons/icon_weed.png", 1);  


console.log("Id:"+Product_table[0].id);
console.log(Product_table[1].id);
console.log(Product_table[2].id);
console.log(Product_table[3].id);








  















