function refresh()
{
    document.location.reload(true);
}

//tablica koszyk

var cart = [localStorage.getItem("Koszyk")];

var ilosc_produktow = 0;

var suma = 0;

//zrób aby ładnie się wyświetlało
function showCart()
{

    for(let i=0; i<localStorage.getItem("Koszyk").length; i++)
    {
        for(let j=0; j<Product_table.length; j++)
        {
            if(localStorage.getItem("Koszyk")[i] == Product_table[j].id)
            {
                document.write('<div class="produkt"><div id="zdjecie"><img src=' + Product_table[j].img + '></div><div id="obok"> '+'<p>Nazwa: ' + Product_table[j].name +' Opis: ' + Product_table[j].description +'<br>'+' Cena: '+ Product_table[j].price +'zł'+  '</div><br><br><br></div>')

                suma = suma + Product_table[j].price;
            }
        }
        
    }
    
}

function addToCart(id_produktu)
{


    let k = id_produktu
    cart[cart.length] = k;
    ilosc_produktow++;
    localStorage.setItem("Koszyk", cart)
    alert("dodano do koszyka");
    refresh();


}

function clearCart()
{
       localStorage.clear();
       refresh();
}

function cena()
{
    document.write('W koszyku znajdują się zakupy za ' + suma + 'zł');
}







