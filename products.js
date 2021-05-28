

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

var p1 = new Product("Zioło", "Zioło o smaku lemon haze", 50, "icons/icon_weed.png", 1);

document.write("Nazwa: " + p1.name + " Opis: " + p1.description + " Cena: " + p1.prince +" obrazek: " + "<img src=" + p1.img + ">" + " Kategoria: " + p1.id_category)