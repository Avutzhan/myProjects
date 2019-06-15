Vue.component('ads', { 
  template: `<div> 
               <h3>Объявление</h3> 
               <slot>Здесь могла бы ваша реклама</slot>
             </div>` 
});
new Vue({ 
  el: '#app'
});

Vue.component('container', { 
    template: `<div>
                <header>
                    <slot name="header">Заголовок по умолчанию</slot>
                </header>
                <article>
                    <slot></slot>
                </article>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>` 
});
new Vue({ 
  el: '#app2'
});

Vue.component('user', { 
    template: `<div class="user">
                    <slot username="Tom" userage="31"></slot>
            </div>` 
});
new Vue({ 
  el: '#app3'
});

Vue.component('userslist', {
    props: ["users"],
    template: `<ul>
                <slot v-for="user in users" :username="user"></slot>
            </ul>` 
});
new Vue({ 
  el: '#app4',
  data:{
    users: ['Tom', 'Sam', 'Bob']
  }
});