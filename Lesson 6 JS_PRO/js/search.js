//Вынести поиск в отдельный компонент
//*Создать компонент с сообщением об ошибке.Компонент должен отображаться, когда не удается выполнить запрос к серверу
Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `
            <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
});