const API = 'https://raw.githubusercontent.com/SvetlanaNS/RegionProject/d92818c5f85fe36bfd5c8e3496575a5a63039951/responses';


/**
 * Описываем базовые классы
 */
class List {
  constructor(url, container, list = listContext){
    this.container = container;
    this.list = list; // словарь для классов строка 213
    this.url = url;
    this.goods = [];
    this.allProducts = [];
    this.filtered = []; // отфильтрованные товары
    this._init();
  }

  /**
   * получение данных с сервера
   * @param url
   * @returns {Promise<any | never>}
   */
  getJson(url){
    return fetch(url ? url : `${API + this.url}`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      })
  }

  /**
   * обработка полученных данных
   * @param data
   */
  handleData(data){
    this.goods = data;
    this.render();
  }

  /**
   * подсчет стоимости всех товаров
   * @returns {*|number}
   */
  calcSum(){
    return this.allProducts.reduce((accum, item) => accum + item.price * item.quantity, 0);
  }

  render(){
    const block = document.querySelector(this.container);
    for (let product of this.goods){
      console.log(this.constructor.name);
      const productObj = new this.list[this.constructor.name](product);

      // альтернативаня реализация без словаря
      // let productObj = null;
      // if (this.constructor.name === 'ProductsList') productObj = new ProductItem(product);
      // if (this.constructor.name === 'Cart') productObj = new CartItem(product);
      // if (!productObj) return;

      console.log(productObj);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }

  /**
   * метод поиска товаров
   * @param value - поисковый запрос
   */
  filter(value){
    const regexp = new RegExp(value, 'i');
    this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
    this.allProducts.forEach(el => {
      const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
      if(!this.filtered.includes(el)){
        block.classList.add('invisible');
      } else {
        block.classList.remove('invisible');
      }
    })
  }
  _init(){
    return undefined;
  }
}
/*
//Ссылки на картинки
let arrayImg = [
  'https://downloader.disk.yandex.ru/preview/907394b34e7c146d1b8cfa4cd88eabceb48e02c48d5bf93332fa9f7f2ed36b7e/6285382b/35qqSIbNdHvSmjmKxnsJGtPmmi2-3nA2Iju7SmVkXDqpU60IclSomhHS4MSzidNLDBTN_jY5ce7bn-hRgekfiw%3D%3D?uid=0&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
  'https://downloader.disk.yandex.ru/preview/82164626d189eae693f1224f103dffd825e37e03379ff4a9428b69c9a0f7afa5/62853860/vxju-Et1evzLO_exX2nj26hsXpusQh_xMNS-PVrO_b31Yd0aUxCzAgKN-rOF8pQITBj2nCuvkgv38RKSNpMgMA%3D%3D?uid=0&filename=2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048', 
  'https://downloader.disk.yandex.ru/preview/4c62624b3986ade7805d864e3ee2b5be6b6a1a48c7c100b205176338c6551b60/62853887/WdEXs3qu9FLzkcQezKPz5rTd5y6ZhJ4uIRFqEApzxv6chUzZtfvGYmSnVySRU9oT9im9HTptpVHFNDqmwfHjhA%3D%3D?uid=0&filename=3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048', 
  'https://downloader.disk.yandex.ru/preview/4c06187c1681e978114c25236c7ddb50805f7885970cf708af4d0f23cfe1cfa4/628538a3/i7QMrHMEuUm3eExrU26W7FB_kYP0PN4noOhA5DW4OUZZGI7MbpRjI5MpcGG8jf8QlW6MHmsPX88KJuFjdup45w%3D%3D?uid=0&filename=4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
  'https://downloader.disk.yandex.ru/preview/8a9a70231901e1b25c6ac1873cc5ee3d935e3b5a22b1543bce5cba96daaf532f/628538d9/NEma0QOxR6CSCBwdy4XJqCWXzP-Oa1fLHGu9uUdAjmTesuEmgOq_OLRg-2ul4AlP4XLKjEoaHxFehYF9dFdOrg%3D%3D?uid=0&filename=5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
  'https://downloader.disk.yandex.ru/preview/4c53d167962f99ccc549d2f7161a4e56683ec9f4297a31dffdd1ed2f5c891622/62853908/YDAc4NJShxzYWOveQGpV-bxGQCA5lKfg-xZQyX-aXXpSGsxV063vEy5a_UDCDlt925NT1l9LeZdlxcGXQcl2GQ%3D%3D?uid=0&filename=6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
];

let pictureContainer = document.getElementById("picture");
 
arrayImg.forEach(i=>{
    let img = document.createElement("img");
    img.setAttribute("src", i);
    pictureContainer.appendChild(img);
   
});
*/


class Item{
  constructor(el, img ='https://downloader.disk.yandex.ru/preview/907394b34e7c146d1b8cfa4cd88eabceb48e02c48d5bf93332fa9f7f2ed36b7e/6285382b/35qqSIbNdHvSmjmKxnsJGtPmmi2-3nA2Iju7SmVkXDqpU60IclSomhHS4MSzidNLDBTN_jY5ce7bn-hRgekfiw%3D%3D?uid=0&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'){
    this.product_name = el.product_name;
    this.price = el.price;
    this.id_product = el.id_product;
    this.img = img ;
  }

  render(){
    return ``;
  }
}

/**
 * Наследуемся от базовых классов
 */
class ProductsList extends List{
  constructor(cart, container = '.products', url = "/catalogData.json"){
    super(url, container);
    this.cart = cart;
    this.getJson()
      .then(data => this.handleData(data));
  }

  _init(){
    document.querySelector(this.container).addEventListener('click', e => {
      if(e.target.classList.contains('buy-btn')){
        this.cart.addProduct(e.target);
      }
    });
    document.querySelector('.search-form').addEventListener('submit', e => {
      e.preventDefault();
      this.filter(document.querySelector('.search-field').value)
    })
  }
}

class ProductItem extends Item{
  render() {
    return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} ₽</p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`;
  }
}

class Cart extends List{
  constructor(container = ".cart-block", url = "/getBasket.json"){
    super(url, container);
    this.getJson()
      .then(data => {
        this.handleData(data.contents);
      });
  }

  /**
   * добавление товара
   * @param element
   */
  addProduct(element){
    this.getJson(`${API}/addToBasket.json`)
      .then(data => {
        if(data.result === 1){
          let productId = +element.dataset['id'];
          let find = this.allProducts.find(product => product.id_product === productId);
          if(find){
            find.quantity++;
            this._updateCart(find);
          } else {
            let product = {
              id_product: productId,
              price: +element.dataset['price'],
              product_name: element.dataset['name'],
              quantity: 1
            };
            // goods - это своего рода "опорный" массив, отражающий список товаров, которые нужно отрендерить.
            // При добавлении нового товара, нас интересует только он один.
            this.goods = [product];
            // далее вызывая метод render, мы добавим в allProducts только его, тем самым избегая лишнего перерендера.
            this.render();
          }
        } else {
          alert('Error');
        }
      })
  }

  /**
   * удаление товара
   * @param element
   */
  removeProduct(element){
    this.getJson(`${API}/deleteFromBasket.json`)
      .then(data => {
        if(data.result === 1){
          let productId = +element.dataset['id'];
          let find = this.allProducts.find(product => product.id_product === productId);
          if(find.quantity > 1){ // если товара > 1, то уменьшаем количество на 1
            find.quantity--;
            this._updateCart(find);
          } else { // удаляем
            this.allProducts.splice(this.allProducts.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
          }
        } else {
          alert('Error');
        }
      })
  }

  /**
   * обновляем данные корзины
   * @param product
   * @private
   */
  _updateCart(product){
    let block = document.querySelector(`.cart-item[data-id="${product.id_product}"]`);
    block.querySelector('.product-quantity').textContent = `Количество: ${product.quantity}`;
    block.querySelector('.product-price').textContent = `${product.quantity * product.price} ₽`;
  }
  _init(){
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible');
    });
    document.querySelector(this.container).addEventListener('click', e => {
      if(e.target.classList.contains('del-btn')){
        this.removeProduct(e.target);
      }
    })
  }

}
/*
//Ссылки на картинки
let arrayImgMini = [
  'https://2.downloader.disk.yandex.ru/preview/57fd87da4c54c825544e47a44cf4c5ab8c4a58caa1e8641fa3cb82c0e1129e99/inf/DEyPXASrSeHew2LBG1lCyd4CM7njOiXbSDph7DU2_EHCc8SZoAaCXYMccZSbjoXA37i-1J-t_WnJmN5CKAllbg%3D%3D?uid=599605657&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942',
  'https://1.downloader.disk.yandex.ru/preview/998677b11ac2f40032c1d922042f4587d78c470dd7a3c81b1d32da317066d0fa/inf/xvq53v7DyddjeqKabsxsfphjbi2cv9sLqeJtg6xK9CoKu9qz4odqbrdjeSnnxFeWxmkZ-iWgVfjEdkWQW6Fk0g%3D%3D?uid=599605657&filename=2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942', 
  'https://3.downloader.disk.yandex.ru/preview/b1265bb52a541e23a24da86d40992d0b9543cafe252121ed4405d82f9a467b08/inf/DQbfPGF-UA3E0T_72SDgYt4CM7njOiXbSDph7DU2_EFZILpAgOnbM8JszQcqzotT2lBSF-rcFRZB4TlalI7k3Q%3D%3D?uid=599605657&filename=3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942', 
  'https://1.downloader.disk.yandex.ru/preview/fd3773f114579041c630d6a6bd8b2308ad7e50b04348c691e02cf3405daff155/inf/xs-MNpjpQHygPzpzc5MiV5hjbi2cv9sLqeJtg6xK9CrtLZ2MQWgNaoYo4vukjf6YSq0RDhOVhcVo2WqrUlH1jw%3D%3D?uid=599605657&filename=4.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942',
  'https://4.downloader.disk.yandex.ru/preview/da140a482098044cf5a1b0b1bd76b855baa09716c3fd965dd146882482fe932f/inf/XBZ5kpD1PE_aNmyCxwJCHN4CM7njOiXbSDph7DU2_EEi6X-8qhViH1TXd3IHM0ODNF-0HQsLTARxGOLT-m5-mw%3D%3D?uid=599605657&filename=5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942',
  'https://4.downloader.disk.yandex.ru/preview/1aef5df41a47c14711c8c738812abdbbaf3609518548a8af2b5606bd3278a2ed/inf/vg56XK0jy3phZ2RZRXZPG94CM7njOiXbSDph7DU2_EGWRMG5n1LgUQhFx-UtZei2ObPEC09G4DcXBRoACeVTmg%3D%3D?uid=599605657&filename=6.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942'
];

for (let i = 0; i < arrayImgMini.length; i++) {
  console.log(arrayImgMini[i]);
}
*/

class CartItem extends Item{
  constructor(el, img = 'https://2.downloader.disk.yandex.ru/preview/57fd87da4c54c825544e47a44cf4c5ab8c4a58caa1e8641fa3cb82c0e1129e99/inf/DEyPXASrSeHew2LBG1lCyd4CM7njOiXbSDph7DU2_EHCc8SZoAaCXYMccZSbjoXA37i-1J-t_WnJmN5CKAllbg%3D%3D?uid=599605657&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942'){
    super(el, img);
    this.quantity = el.quantity;
  }
  render(){
    return `<div class="cart-item" data-id="${this.id_product}">
            <div class="product-bio">
            <img src="${this.img}" alt="Some image">
            <div class="product-desc">
            <p class="product-title">${this.product_name}</p>
            <p class="product-quantity">Количество: ${this.quantity}</p>
        <p class="product-single-price">${this.price} за ед.</p>
        </div>
        </div>
        <div class="right-block">
            <p class="product-price">${this.quantity*this.price} ₽</p>
            <button class="del-btn" data-id="${this.id_product}">&times;</button>
        </div>
        </div>`
  }
}

const listContext = {
  ProductsList: ProductItem,
  Cart: CartItem
};

let cart = new Cart();
let products = new ProductsList(cart);





































