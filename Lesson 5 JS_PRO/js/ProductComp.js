/*1. Добавить методы и обработчики событий для поля поиска. Создать в объекте данных поле
searchLine и привязать к нему содержимое поля ввода. На кнопку Искать добавить
обработчик клика, вызывающий метод FilterGoods.
2. Добавить корзину. В html-шаблон добавить разметку корзины. Добавить в объект данных поле
isVisibleCart, управляющее видимостью корзины.
3. * Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров
пуст.
*/
Vue.component('products',{
    data () {
        return {
          catalogUrl: '/catalogData.json',
          products: [],
          filtered: [],
          imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods:{
        filter(){//не работает метод фильтр
            let regexp = new RegExp(this.userSearch,'i') ;
            this.filtered = this.products.filter(el => regexp.test(el.product_name)); 
        }
    },
    mounted() {
        this.$parent.getJson (`${API + this.catalogUrl}`)
        .then(data => {
            for (let el of data) {
                this.products.push(el);
                this.filtered.push(el);
            }
        });
    },
    
    template:`
    <div class="products">
        <product v-for = "item of filtered" :key= "item.id_product" :img ="imgCatalog" :product = "item"></product>
   </div>`
});
Vue.component('product',{
   props:['product','img'],


  template:`
    <div class="product-item">
    <img : src="img" alt="Some img">
        <div class="desc">
            <h3>{{product.product_name}}</h3>
            <p>{{product.price}}P</p>
            <button class="buy-btn" @click= "$root.$refs.cart.addProduct(product)">Купить </button>
   </div>
    </div>`

   });
