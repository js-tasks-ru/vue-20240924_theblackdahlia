import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)

    const disabledIncrease = computed(() => {
      return counter.value >= 5
    })

    const disabledDecrease = computed(() => {
      return counter.value < 1
    })

    const increaseCounter = () => {
      counter.value = counter.value + 1
    }

    const decreaseCounter = () => {
      counter.value = counter.value - 1
    }



    return {
      counter,
      increaseCounter,
      decreaseCounter,
      disabledIncrease,
      disabledDecrease,
    }
  },

  template: `
    <div class="counter">
      <button
          @click="decreaseCounter"
          class="button button--secondary"
          type="button"
          aria-label="Decrement"
          :disabled="disabledDecrease"
      >➖</button>

      <span class="count" data-testid="count">{{counter}}</span>

      <button
          @click="increaseCounter"
          class="button button--secondary"
          type="button"
          aria-label="Increment"
          :disabled="disabledIncrease"
      >➕</button>
    </div>
  `,
})
