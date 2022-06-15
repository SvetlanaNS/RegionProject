const Carttovars = new Vue({
    el:'#cart-items-box',//подключение
    data(){
        return {
            imgCart: 'https://2.downloader.disk.yandex.ru/preview/57fd87da4c54c825544e47a44cf4c5ab8c4a58caa1e8641fa3cb82c0e1129e99/inf/DEyPXASrSeHew2LBG1lCyd4CM7njOiXbSDph7DU2_EHCc8SZoAaCXYMccZSbjoXA37i-1J-t_WnJmN5CKAllbg%3D%3D?uid=599605657&filename=1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=599605657&tknv=v2&size=1898x942',
            cartUrl: '/getBasket.json',
            cartItems: [],
            showCart: false,
        }
      },
      methods: {
       
    },
    template: `
    <div>
      <div class="cart-items-box">
        <div class="cart-items-box__block cart-items-box__block_1">
            <img src="img/icon/1.jpg" alt="product" class="cart-items-box__img">
            <div class="cart-items-box__text">
                <a href="#" class="cart-items-box__h">Jacket</a>
                <p class="cart-items-box__txt">Color:<span class="cart-items-box__txt_vol">Red</span></p>
                <p class="cart-items-box__txt">Size:<span class="cart-items-box__txt_vol">XII</span></p>
            </div>
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__price">1000 P</p></div>
        <div class="cart-items-box__block">
            <input class="cart-items-box__quantity" type="number" id="quantity1" value="2">
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__shipping">Free</p></div>
        <div class="cart-items-box__block"><p class="cart-items-box__subtotal">1000 P</p></div>
        <div class="cart-items-box__block">
            <a class="cart-item__times-link" href="#"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>


    
    <div class="cart-items-box">
        <div class="cart-items-box__block cart-items-box__block_1">
            <img src="img/icon/2.jpg" alt="product" class="cart-items-box__img">
            <div class="cart-items-box__text">
                <a href="#" class="cart-items-box__h">Shoes</a>
                <p class="cart-items-box__txt">Color:<span class="cart-items-box__txt_vol">Red</span></p>
                <p class="cart-items-box__txt">Size:<span class="cart-items-box__txt_vol">XII</span></p>
            </div>
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__price">100 P</p></div>
        <div class="cart-items-box__block">
            <input class="cart-items-box__quantity" type="number" id="quantity1" value="2">
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__shipping">Free</p></div>
        <div class="cart-items-box__block"><p class="cart-items-box__subtotal">100 P</p></div>
        <div class="cart-items-box__block">
            <a class="cart-item__times-link" href="#"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>
    


    <div class="cart-items-box">
        <div class="cart-items-box__block cart-items-box__block_1">
            <img src="img/icon/3.jpg" alt="product" class="cart-items-box__img">
            <div class="cart-items-box__text">
                <a href="#" class="cart-items-box__h">Shorts</a>
                <p class="cart-items-box__txt">Color:<span class="cart-items-box__txt_vol">Red</span></p>
                <p class="cart-items-box__txt">Size:<span class="cart-items-box__txt_vol">XII</span></p>
            </div>
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__price">250 P</p></div>
        <div class="cart-items-box__block">
            <input class="cart-items-box__quantity" type="number" id="quantity1" value="2">
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__shipping">Free</p></div>
        <div class="cart-items-box__block"><p class="cart-items-box__subtotal">250 P</p></div>
        <div class="cart-items-box__block">
            <a class="cart-item__times-link" href="#"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>

    
    <div class="cart-items-box">
        <div class="cart-items-box__block cart-items-box__block_1">
            <img src="img/icon/4.jpg" alt="product" class="cart-items-box__img">
            <div class="cart-items-box__text">
                <a href="#" class="cart-items-box__h">Trousers</a>
                <p class="cart-items-box__txt">Color:<span class="cart-items-box__txt_vol">Red</span></p>
                <p class="cart-items-box__txt">Size:<span class="cart-items-box__txt_vol">XII</span></p>
            </div>
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__price">150 P</p></div>
        <div class="cart-items-box__block">
            <input class="cart-items-box__quantity" type="number" id="quantity1" value="2">
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__shipping">Free</p></div>
        <div class="cart-items-box__block"><p class="cart-items-box__subtotal">150 P</p></div>
        <div class="cart-items-box__block">
            <a class="cart-item__times-link" href="#"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>


    <div class="cart-items-box">
        <div class="cart-items-box__block cart-items-box__block_1">
            <img src="img/icon/5.jpg" alt="product" class="cart-items-box__img">
            <div class="cart-items-box__text">
                <a href="#" class="cart-items-box__h">Jacket blue</a>
                <p class="cart-items-box__txt">Color:<span class="cart-items-box__txt_vol">Red</span></p>
                <p class="cart-items-box__txt">Size:<span class="cart-items-box__txt_vol">XII</span></p>
            </div>
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__price">150 P</p></div>
        <div class="cart-items-box__block">
            <input class="cart-items-box__quantity" type="number" id="quantity1" value="2">
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__shipping">Free</p></div>
        <div class="cart-items-box__block"><p class="cart-items-box__subtotal">150 P</p></div>
        <div class="cart-items-box__block">
            <a class="cart-item__times-link" href="#"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>


    <div class="cart-items-box">
        <div class="cart-items-box__block cart-items-box__block_1">
            <img src="img/icon/6.jpg" alt="product" class="cart-items-box__img">
            <div class="cart-items-box__text">
                <a href="#" class="cart-items-box__h">Top</a>
                <p class="cart-items-box__txt">Color:<span class="cart-items-box__txt_vol">Red</span></p>
                <p class="cart-items-box__txt">Size:<span class="cart-items-box__txt_vol">XII</span></p>
            </div>
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__price">150 P</p></div>
        <div class="cart-items-box__block">
            <input class="cart-items-box__quantity" type="number" id="quantity1" value="2">
        </div>
        <div class="cart-items-box__block"><p class="cart-items-box__shipping">Free</p></div>
        <div class="cart-items-box__block"><p class="cart-items-box__subtotal">150 P</p></div>
        <div class="cart-items-box__block">
            <a class="cart-item__times-link" href="#"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>
</div>`    
  });


