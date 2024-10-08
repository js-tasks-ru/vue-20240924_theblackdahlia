import {defineComponent, ref, watch} from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedMeetupId = ref(1); // Начальное значение ID
    const title = ref('');

    const loadMeetUp = async (id) => {
      try {
        const meetup = await getMeetup(id);
        title.value = meetup.title; // Установка заголовка
      } catch(err) {
        console.error('Ошибка при загрузке митапа:', err);
      }
    };

    watch(selectedMeetupId, (newId) => {
      loadMeetUp(newId);
    })

    // Начальная загрузка первого митапа
    loadMeetUp(selectedMeetupId.value);

    const goToNextMeetUp = () => {
      if(selectedMeetupId.value < 5) {
        selectedMeetupId.value++;
      }
    }

    const goToPreviousMeetUp = () => {
      if(selectedMeetupId.value > 1) {
        selectedMeetupId.value--;
      }
    }

    return {
      selectedMeetupId,
      title,
      goToNextMeetUp,
      goToPreviousMeetUp,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          @click="goToPreviousMeetUp"
          :disabled="selectedMeetupId <=1"
        >Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div
            class="radio-group__button"
            v-for="id in [1,2,3,4,5]"
            :key="id"
          >
            <input
              :id="'meetup-id' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedMeetupId"
            />
            <label :for="'meetup-id' + id" class="radio-group__label">{{id}}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          @click="goToNextMeetUp"
          :disabled="selectedMeetupId >=5"
        >Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{title}}</h1>
        </div>
      </div>

    </div>
  `,
})
