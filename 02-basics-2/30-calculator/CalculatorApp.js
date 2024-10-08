import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const inputNumber = ref({
      first: 0,
      second: 0,
    })

    const operator = ref('sum')

    const totalSum = computed(() => {
      switch (operator.value) {
        case 'sum':
          return inputNumber.value.first + inputNumber.value.second;
        case 'subtract':
          return inputNumber.value.first - inputNumber.value.second;
        case 'multiply':
          return inputNumber.value.first * inputNumber.value.second;
        case 'divide':
          return inputNumber.value.first / inputNumber.value.second;
        default:
          return 0;
      }
    })


    return {
      inputNumber,
      operator,
      totalSum,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="inputNumber.first"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="inputNumber.second"/>

      <div>=</div>

      <output>{{ totalSum }}</output>
    </div>
  `,
})
