function refresh()
{
    document.location.reload(true);
}

//tablica koszyk
var cart = [];

var Produkty_w_koszyku = 0;

localStorage.setItem("ilosc_produktow", Produkty_w_koszyku);

//localStorage.getItem("ilosc_produktow", Produkty_w_koszyku)

//zrób aby ładnie się wyświetlało
function showCart()
{
    for(var i=0; i<4; i++)
    {
        if(localStorage.getItem("PWK" + i) == Product_table[i].id)
        {
            document.write('<div class="produkt"><div id="zdjecie"><img src=' + Product_table[i].img + '></div><div id="obok"> '+'<p>Nazwa: ' + Product_table[i].name +' Opis: ' + Product_table[i].description +'<br>'+' Cena: '+ Product_table[i].price +'zł'+  '</div><br><br><br></div>')
        }
    }
}

function addToCart(id_produktu)
{
    localStorage.setItem("PWK" + localStorage.getItem("ilosc_produktow"), id_produktu);
    Produkty_w_koszyku = localStorage.getItem("ilosc_produktow");
    Produkty_w_koszyku ++;
    localStorage.setItem("ilosc_produktow", Produkty_w_koszyku);
    alert("dodano do koszyka");
    refresh();
}

console.log(localStorage.getItem("PWK0"));