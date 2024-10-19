import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const inputNumberFirst = ref(0)
    const inputNumberSecond = ref(0)

    const operator = ref('sum')

    const totalSum = computed(() => {
      switch (operator.value) {
        case 'sum':
          return inputNumberFirst.value + inputNumberSecond.value;
        case 'subtract':
          return inputNumberFirst.value - inputNumberSecond.value;
        case 'multiply':
          return inputNumberFirst.value * inputNumberSecond.value;
        case 'divide':
          return inputNumberFirst.value / inputNumberSecond.value;
        default:
          return 0;
      }
    })


    return {
      inputNumberFirst,
      inputNumberSecond,
      operator,
      totalSum,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="inputNumberFirst"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="inputNumberSecond"/>

      <div>=</div>

      <output>{{ totalSum }}</output>
    </div>
  `,
})
