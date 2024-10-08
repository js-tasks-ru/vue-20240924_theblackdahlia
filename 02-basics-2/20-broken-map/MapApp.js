import { defineComponent, ref, watch, nextTick } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x = ref(0)
    const y = ref(0)
    const pinRef = ref(null) // Реактивная переменная для метки

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
      // Обновляем стиль метки после изменения координат
      if (pinRef.value) {
        pinRef.value.style.left = `${x.value}px`
        pinRef.value.style.top = `${y.value}px`
      }
    }

    return {
      handleClick,
      pinRef, // Возвращаем реф для метки
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="true" />
      <span ref="pinRef" class="pin">📍</span> <!-- Используем реф -->
    </div>
  `,
})
