//tablica obiektów
var Product_table =[];

//licznik produktow
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

//algorytm sortujący gdzue 1 to rosnącą a 2 to malejący
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

//Produkty
dodaj_produkt("Zioło", "Zioło o smaku lemon haze", 50 , "icons/cytrynowa_mgieka.jpg", 1);
dodaj_produkt("kwa5423543s", "niezłe kwasidło", 790, "icons/icon_weed.png", 1);
dodaj_produkt("inny kwas", "niezłe kwasidło", 70, "icons/icon_weed.png", 1);  
dodaj_produkt("Maseczka", "Maseczka na czasy covidu", 15, "icons/nowosci/maseczka.jpg", 2);
dodaj_produkt("Nerka", "Gdy masz jedna nerke mozesz tez ubrac ta", 25, "icons/nowosci/nerka.jpg", 2);
dodaj_produkt("Plecak", "Nowy rok tusz tusz zakup nowy plecak", 65, "icons/nowosci/plecak.jpg", 2);
dodaj_produkt("Bluza", "Bluza na zimne dni", 150, "icons/Ubrania/bluza.jpg", 3);
dodaj_produkt("Koszulka", "Koszulka na ciepłe dni", 100, "icons/Ubrania/koszulka.jpg", 3);
dodaj_produkt("Spodnie", "Klasyczne najlepsze spodnie", 15, "icons/Ubrania/spodnie.jpg", 3);
dodaj_produkt("Brązoletka", "Taka fajna nie zaduza może być", 25, "icons/akcesoria/brazoletka.jpg", 4);
dodaj_produkt("Breloczek", "Do auta do rowera i do wszystkiego",10, "icons/akcesoria/breloczek.jpg", 4);
dodaj_produkt("Powerbank", "Naładuje twój telefon do 5 razy", 55, "icons/akcesoria/powerbank.jpg", 4);

