import {defineComponent} from 'vue'
import {getWeatherData} from './weather.service.ts'
import WeatherListItem from "./WeatherListItem.js";

import './WeatherApp.css'


export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherListItem
  },

  setup() {
    const weatherData = getWeatherData();

    return {
      weatherData,
    }
  },

  template: `
      <ul class="weather-list unstyled-list">
        <WeatherListItem
          v-for="weather in weatherData"
          :weather="weather" />
      </ul>
  `,
})
