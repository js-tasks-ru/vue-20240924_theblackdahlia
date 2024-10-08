import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref({
      count: 0
    })

    const disabledIncrease = computed(() => {
      return counter.value.count >= 5
    })

    const disabledDecrease = computed(() => {
      return counter.value.count < 1
    })

    const increaseCounter = () => {
      counter.value.count = counter.value.count + 1
    }

    const decreaseCounter = () => {
      counter.value.count = counter.value.count - 1
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

      <span class="count" data-testid="count">{{counter.count}}</span>

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
