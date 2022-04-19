const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*
1. Переделайте getRequest() так, чтобы она использовала промисы(переделать функцию fetch на promise)
2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.


let getRequest = (url, cb) => { // не fetch
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                console.log('Error');
            } else {
                cb(xhr.responseText);
            }
        }
    };
    xhr.send();
};



__________________________________________________
Приведение на промисы

*/
let getRequest = (url) => { 
 return new Promise((resolve, reject) => { // Создание нового объекта Promise
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                reject('Error');
            } else {
              resolve (xhr.responseText);//перевод Promise в состояние rejected
            }
        }
    };
    xhr.send(); // отправка запроса на сервер
});
};





//_________________________________________________________________
/*
class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this._goods = [];
        this._productsObjects = [];

        // this._fetchGoods();
        // this._render();
        this.getProducts()
            .then((data) => {
                this._goods = data;
                this._render();
                console.log(this.getTotalPrice());
            });
    }

    // _fetchGoods() {
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         // console.log(data);
    //         this._goods = JSON.parse(data);
    //         this._render();
    //         console.log(this._goods);
    //     });
    // }

    getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(response => response.json())
            .catch(err => console.log(err));
    }

    getTotalPrice() {
        return this._productsObjects.reduce((accumulator, good) => accumulator + good.price, 0);
    }

    _render() {
        for (const product of this._goods) {
            const productObject = new ProductItem(product);
            console.log(productObject);

            this._productsObjects.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                  <img src="${this.img}" alt="Some img">
                  <div class="desc">
                      <h3>${this.title}</h3>
                      <p>${this.price} \u20bd</p>
                      <button class="buy-btn">Купить</button>
                  </div>
              </div>`;
    }
}

// const cart = new Cart();
// const list = new ProductList(cart);
const list = new ProductList();


*/
//______________________________________________________    
//Описание базовых классов 
   


class List {
  constructor(url, container, list=listContext){
    this.container = container;
    this.List = List;//словарь для классов const listContext = {ProductsList: ProductItem,// Cart: CartItem};
    this.url = url;
    this.goods = [];
    this.allProducts = [];
    this.filtered = [];//отфильтровать товары
    this._init();
}


//Общий метод получения данных с сервера
getJson(url){
    return fetch (url ? url: `${API + this.url}` )
    .then(result => result.json())
    .catch (error =>{ } )
}


//Обработчик полученных даннных
handleData(data){
    this.goods = data;//складывает данные
    this.render();
}


//Подсчет стоимости всех товаров
calcSum(){
    return this.allProducts.reduce((accum,item) => accum + item.price * item.quantity, 0);
}



render(){
 const block = document.querySelector(this.container);
 for(let product of this.goods){
     console.log(this.constructor.name);

 //или    
 //const productObj = new this.list[this.constructor.name](product);
 
//или альтернативная реализация без словаря(но так не нужно) если 20 вариантов списка
//то нужно добавить много строчек кода повторяющегося if (this.constructor.name === 'Cart') productObj = new CartItem(product);
//let productObj = null; 
//if (this.constructor.name === 'ProductList')productObj = new ProductItem(product);
//if (this.constructor.name === 'Cart') productObj = new CartItem(product);
//if(!productObj) return;
//console.log(productObj);
//this.allProducts.push(productObj);
//block.insertAdjacentHTML('beforeend',productObj.render());
 }
}


//Метод поиска товаров
filter(value){
    const regexp = new RegExp(value,'i');
    //Фильтрация текущих allproducts и складываем в массив filtered изменяет
    // массив в зависимости от того что вернет функция.Сложатся ссылки на объекты

    this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
    this.allProducts.forEach(el =>{
        const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
        if(!this.filtered.includes(el)){
            block.classList.add('invisible');
        }else{
            block.classList.remove('invisible');
        }
    })
    
 }
 _init(){
    return undefined;
  }
}

//Базовый класс элемента
class Item{
    constructor(el, img = 'https://via.placeholder.com/200x150') {
        this.product_name = el.product_name;
        this.price = el.price;
        this.id_product = el.id_product;
        this.img = img;
    }

render(){
    return '';
   }
}


//наследуемся от базовых классов
class ProductsList extends List{
    constructor(cart,container = '.products',url ="/catalogData.json"){
        super(url, container);
        this.cart = cart;
        this.getJson()
        .then(data => this.handleData(data));
    }


//Метод- и поиск и обработка внутри контейнера
_init(){
    document.querySelector(this.container).addEventListener('click',e => {
        if(e.target.classlist.contains('buy-btn')){
            this.cart.addProduct(e.target);
        }
    });
    document.querySelector('.search-form').addEventListener('submit',e => {
        e.preventDefault();
        this.filter(document.querySelector('search-field').value)
         })
       }
    }
     
//наследуемся от базовых классов
class ProductItem extends Item {
    render(){
       return `<div class="product-item" data-id=${this.id_product}">
                 <img src="${this.img}" alt="Some img">
              <div class = "desc">
                <h3>${this.product_name}</h3>
                <p>${this.price}₱ </p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Купить</button>
              </div>
               </div>`;
       }
    }
  //Корзина  наследуемся от базовых классов
class Cart extends List {
    constructor(container =".cart-block",url="/getBasket.json"){
        super(url,container);//вызов конструктора родителя
        this.getJson()
        .then(data => {
            this.handleData(data.contents);
        });
      } 
     
     
  //Добавление товара
  addProduct(element){
    this.getJson(`${API}/addToBasket.json`)
    .then(data => {
        if(data.result === 1){
            let productId = +element['id'];
        let find = this.allProducts.find(product => product.id_product === productId);
        if(find){
            find.quantity++;
            this._updateCart(find);//вызываем обновление состояния корзины
        } else { //если -то сознаю новый объект товара
            let product = {
                id_product: productId,
                price: +element.dataset['price'],
                product_name:element.dataset['name'],
                quantity: 1
            };
            //goods это своего рода массив опорный
            this.goods =[product];
            //вызывая метод рендер , мы добавляем в allProducts только его.
            this.render();
          }  
        } else {
          alert('Error');
        }
      })
    }


    
//удаление товаров
removeProduct(element){
    this.getJson(`${API}/deleteFromBasket.json`)
    .then(data => {
        if(data.result === 1){
            let productId = +element.dataset['id'];
            let find = this.allProducts.find(product => product. id_product === productId);
            if(find.quantity > 1){//если товара >1, то уменьшаем колличество на 1
        find.quantity--;
    this._updateCart(find);
    } else { //удаляем
        this.allProducts.splice(this.allProducts.indexOf(find),1);
        document.querySelector(`.cart-item[data-id ="${productId}"]`).remove();
        }
    } else {
        alert('Error');
        }
    })
    }
    
//Обновление данных корзины
_updateCart(product){
    let block = document.querySelector(`.cart-item[data-id = "${product.id_product}"]`);
    block.querySelector('.product-quantity').textContent = `Количество:${product.quantity}`;
    block.querySelector('.product-price').textContent = `${product.quantity * product.price} P`;
    }
    _init(){//инициализация кликов 
    document.querySelector(`.btn-cart`).addEventListener('click',() => {
    document.querySelector(this.container).classList.toggle('invisible');
    });
    document.querySelector(this.container).addEventListener('click', e => {
        if (e.target.classList.contains('del-btn')){
        this.removeProduct(e.target);
    }
    })
    }
    }


    class CartItem extends Item{
        constructor(el, img ='https://via.placeholder.com/50x100'){
            super(el,img);
            this.quantity = el.quantity;
        }
    render(){
        return `<div class = "cart-item"data-id = "${this.id.product}">
        <div class="product-bio">
            <img scr ="${this.img}"alt="Some image">
                <div class="product-desc" >
                    <p class ="product-title">${this.product_name}</p>
                    <p class="product-quantity">Количество: ${this.quantity}</p>
                    <p class="product-single-price">${this.price} за ед.</p>
                    </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quantity * this.price} P </p>
                        <button class="del-btn" data-id="${this.id_product}">x</button>
                        </div>
                        </div> `
                    }
                  }
    const listContext = {
    ProductsList: ProductItem,
    Cart: CartItem
    };

    
let cart = new Cart();
let products = new ProductsList(cart);

