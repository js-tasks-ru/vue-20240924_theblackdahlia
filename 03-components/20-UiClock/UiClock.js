import {ref, defineComponent, watch, onBeforeUnmount} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const clock = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: "medium" }));
    let interval;

   const updateClock = () => {
     clock.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: "medium" });
   };

    watch(clock, () => {
      interval = setInterval(updateClock, 1000);
    }, {immediate: true})

    onBeforeUnmount(() => {
      clearInterval(interval); // Очистить интервал при размонтировании
    });

    return {
      clock,
    }
  },

  template: `<div class="clock">{{ clock }}</div>`,
})
