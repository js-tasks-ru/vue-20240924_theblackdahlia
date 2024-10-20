import {defineComponent, toRefs} from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    }
  },

  setup(props) {
    const { meetup } = toRefs(props);
    const { title, image, description, agenda, organizer, place, date } = toRefs(meetup.value);

    return {
      title,
      image,
      description,
      agenda,
      organizer,
      place,
      date,
    }
  },

  template: `
    <div>

      <!-- Обложка митапа -->
     <MeetupCover :title="title" :image="image" />
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
            <MeetupDescription :description="description"/>

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <div v-if="meetup.agenda.length > 0">
              <MeetupAgenda :agenda="meetup.agenda" />
            </div>
            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo
              :organizer="organizer"
              :place="place"
              :date="date"
            />

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
