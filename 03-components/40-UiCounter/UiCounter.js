import {computed, defineComponent, toRefs} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    }

  },

  setup(props, { emit }) {
    const { count: countRef, min: minRef, max: maxRef } = toRefs(props);

    const increment = () => {
      if (countRef.value < maxRef.value) {
        emit('update:count', countRef.value + 1);
      }
    };

    const decrement = () => {
      if (countRef.value > minRef.value) {
        emit('update:count', countRef.value - 1);
      }
    };

    const disabledDecrease = computed(() => {
      return countRef.value <= minRef.value;
    });

    const disabledIncrease = computed(() => {
      return countRef.value >= maxRef.value;
    });

    return {
      countRef,
      minRef,
      maxRef,
      increment,
      decrement,
      disabledDecrease,
      disabledIncrease,
    };
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="decrement" :disabled="disabledDecrease">➖</UiButton>
      <span class="count" data-testid="count">{{countRef}}</span>
      <UiButton aria-label="Increment" @click="increment" :disabled="disabledIncrease">➕</UiButton>
    </div>
  `,
})
