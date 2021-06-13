function refresh()
{
    document.location.reload(true);
}

//tablica koszyk
var cart = [];

var Produkty_w_koszyku = 0;


//zrób aby ładnie się wyświetlało
function showCart ()
{
    for(var i=0; i<Produkty_w_koszyku; i++)
    {
        if(localStorage.getItem("PWK" + i) == Product_table[i].id)
        {
            //document.write('<div class="produkt"><div id="zdjecie"><img src=' + Product_table[i].img + '></div><div id="obok"> '+'<p>Nazwa: ' + Product_table[i].name +' Opis: ' + Product_table[i].description +'<br>'+' Cena: '+ Product_table[i].price +'zł'+  '</div><br><br><br></div>')
            console.log(localStorage.getItem("PWK" + i));
        }
    }
}

function addToCart(id_produktu)
{
    localStorage.setItem("PWK" + Produkty_w_koszyku, id_produktu);
    Produkty_w_koszyku++;
    alert("dodano do koszyka");
    refresh();
}

console.log(localStorage.getItem("PWK1"));