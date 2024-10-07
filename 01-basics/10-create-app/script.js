import { defineComponent, createApp } from 'vue'

const getTodayDate = () => {
  return new Date().toLocaleDateString(navigator.language, {
    dateStyle: 'long',
  });
};

export const App = defineComponent({
  name: 'App',

  setup(){
    const date =  getTodayDate();
    return {
      date,
    }
  },

  template: `<div>Сегодня {{ date }}</div>`
})

const app = createApp(App);
app.mount('#app')
