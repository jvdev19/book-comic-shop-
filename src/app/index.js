const { Book } = require('./Book');
const { Comic } = require('./Comic');
const { Cart } = require('./Cart');
const { Ui } = require('./Ui');

// -->> El fichero index.js siempre será el fichero que se encargará de arrancar la app en nuestro entorno de desarrollo. Al compilar para producción, veremos cómo se genera una carpeta /dist, con un bundle.js donde irá todo el código compilado.

// Instancias Productos
const bookCarrie = new Book('Carrie', 'Stephen King', 20);
const comicTheKillingJoke = new Comic('The Killing Joke', 'Alan Moore', 150, ['B.B','J.H'] );
const bookLaSombraDelViento = new Book('La Sombra del Viento', 'Carlos Ruiz Zafón', 85);
const bookDiezNegritos = new Book('Diez Negritos y no quedó ninguno', 'Agatha Christie', 97);
const bookHPotterPiedra = new Book('Harry Potter y la piedra filosofal', 'J.k. Rowling', 120);

// Instancias app
const cart = new Cart();
const ui = new Ui("#app");

// Obtenido a partir de instancias
const products = [bookCarrie, comicTheKillingJoke, bookLaSombraDelViento, bookDiezNegritos, bookHPotterPiedra];


//Esta función autoejecutable arrancará toda la app.
(function () {
    
    //Consola
    //------------------------------------------------------------------------------------------------------------
    //console.log(bookCarrie.getAllData()[0]); ---> Ver la nota del punto 6 en el fichero Book.js
    //cart.addProduct(products[0]);
    // products[0].isInCart = true;
    // console.log(cart);
    // cart.addProduct(products[1]);
    // products[1].isInCart = true;
    //console.log(cart);
    //cart.addProduct(products[2]);
    // products[2].isInCart = true;
    //console.log(cart);
    //cart.deleteProduct(products[2]);
    //cart.addProduct(products[3]);
    //cart.addProduct(products[4]);
    // products[2].isInCart = false;    
    
    
    //Vista navegador
    //------------------------------------------------------------------------------------------------------------
    ui.createGrid();
    ui.renderProductList(products);
    ui.addProductEvent(products, cart);
    // ui.renderProductCart(cart.inCartProducts); --> No repinta la interfaz. Podemos comprobarlo en la pestaña "procesadores de eventos". Al cargar asigna los eventos, pero al ejecutar un evento del objeto UI, no hace el repintado con los datos que le pasamos. A los botones se le asigna la función que, aunque antes era anónima, ahora hemos nombrado como "test", pero después, resetea la interfaz a su estado original. Tiene que haber un método en la UI que se dedique a repintar.
    
    
    /*     
    products.forEach((product, i) => {
        let button = document.querySelector(`#addProduct-${i}`);
        let func = cart.addProduct(i);
        button.addEventListener('click',func);
    });
    
    */
   


})();




