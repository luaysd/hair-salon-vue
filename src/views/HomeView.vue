<template>
  <div id="home" class="banner">
    <div class="banner-content">
      <h1 class="text"> {{$t('home.banner_text')}} </h1>
      <p class="sub-text">{{$t('home.banner_sub_text')}}</p>
      <router-link :to="'/booking'">
        <button class="book-btn">{{$t('home.book_now')}}</button>
      </router-link>
    </div>
  </div>

  <div class="home-body-content">

    <div class="row">
      <div class="col-md-6 d-flex flex-column justify-content-start align-items-center">
        <section>
          <h2>{{$t('home.reviews')}}</h2>
          <ReviewsList :isHomePage="true"></ReviewsList>
          <!-- <div class="reviews">
            <div class="review-card">
              <div class="review-header">
                <strong>Sarah M.</strong>
                <div class="stars">★★★★★</div>
              </div>
              <p>"Amazing service! My hair has never looked better."</p>
              <div class="date">19 September 2024</div>
            </div>
            <div class="review-card">
              <div class="review-header">
                <strong>Lina K.</strong>
                <div class="stars">★★★★★</div>
              </div>
              <p>"Loved my facial! Will definitely come back again."</p>
              <div class="date">12 January 2025</div>
            </div> -->

          <div class="text-center">
            <router-link to="/reviews">
              <button class="see-all-reviews-btn">
                {{$t('home.see_all_reviews')}}
              </button>
            </router-link>
          </div>

          <!-- </div> -->
        </section>
      </div>
      <div class="col-md-6">
        <section>
          <iframe width="100%" height="400px" loading="lazy"
            src="https://www.youtube.com/embed/-FnrCZJw6TE?autoplay=1&mute=1&controls=0&loop=1&playlist=-FnrCZJw6TE"
            title="CINEMATIC Beauty Salon Commercial" frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen></iframe>
        </section>
      </div>
    </div>
    <section id="services">
      test12345
      <h2>{{ $t('home.services') }}</h2>

      <div class="services">
        <div ref="scrollContainer" class="scroll-container">
          <div class="scroll-content">
            <div v-for="(service, index) in duplicatedServices" :key="index" class="service-box">
              <img v-lazy="getImagePath(service)" :alt="service" loading="lazy">
              <p class="service-title">{{ $t('services.'+service) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link :to="'/booking'">
          <button class="book-btn text-center">{{$t('home.book_appointment')}}
          </button>
        </router-link>
      </div>
    </section>
    <section id="hours">
      <h2 class="text-center">{{ $t('home.opening_hours') }}</h2>

      <div class="card shadow-sm mx-auto" style="max-width: 400px;">
        <div class="card-body">
          <!-- <h5 class="card-title text-center mb-4">Opening Hours</h5> -->
          <ul class="list-group list-group-flush">
            <li v-for="(day, index) in week" :key="index"
              class="list-group-item d-flex justify-content-between align-items-center" :class="{
                'fw-bold today-text': index === todayIndex,
                'text-muted': day.open === 'Closed'
              }">
              <span >{{ $t('home.'+day.name) }}</span>
              <span>{{ day.open }} <template v-if="day.close">- {{ day.close }}</template></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="row text-center">
      <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <section id="contact">

          <h2>{{$t('home.contact_and_location')}}</h2>
          <ul class="text-start">
            <li> <i class="fa-solid fa-phone"></i> <a href="tel:+961705482565">705482565</a> </li>
            <li> <i class="fa-solid fa-envelope"></i> <a href="mailto:luaysd1@gmail.com"> luaysd1@gmail.com</a></li>
            <li> <i class="fa-brands fa-facebook"></i> instauser</li>
            <li> <i class="fa-brands fa-instagram"></i> facebookuser</li>
          </ul>
        </section>
      </div>
      <div class="col-md-6 ">
        <section id="address">

          <p>Beirut, Main road Beirut</p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.7326365546223!2d35.588655384075174!3d33.92994711508773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1745169035231!5m2!1sen!2slb"
            width="100%" height="450" style="border:0;" allowfullscreen="false" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ReviewsList from '@/components/Reviews-list.vue';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const services = ref([
  'haircut', 'facial', 'massage', 'gelish', 'manicure', 'pedicure',
  'piercing', 'solarium'
])
const duplicatedServices = computed(() => [...services.value, ...services.value, ...services.value, ...services.value])

function getImagePath(imageName: string) {
  try {
    return require(`@/assets/images/services/service-${imageName.toLocaleLowerCase()}.jpg`);
  } catch (e) {
    console.warn('Image not found:', e);
    return null;
  }
}


const scrollContainer = ref(null)
let scrollInterval = null

onMounted(() => {
  const container = scrollContainer.value
  scrollInterval = setInterval(() => {
    if (container) {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      if (isRTL)
        container.scrollLeft -= 1
      else
        container.scrollLeft += 1

      // Reset to start of first list when halfway (smooth loop)
      if (
        container.scrollLeft * (isRTL ? -1 : 1) >= container.scrollWidth / 2
      ) {
        container.scrollLeft = 0
      }
    }
  }, 20) // adjust speed here
})

onBeforeUnmount(() => {
  clearInterval(scrollInterval)
})
const week = ref([
  { name: 'monday', open: '9:00 AM', close: '6:00 PM' },
  { name: 'tuesday', open: '9:00 AM', close: '6:00 PM' },
  { name: 'wednesday', open: '9:00 AM', close: '6:00 PM' },
  { name: 'thursday', open: '9:00 AM', close: '6:00 PM' },
  { name: 'friday', open: '9:00 AM', close: '6:00 PM' },
  { name: 'saturday', open: '10:00 AM', close: '4:00 PM' },
  { name: 'sunday', open: t("home.closed"), close: '' }
])

const todayIndex = computed(() => {
  const date = new Date()
  return date.getDay() === 0 ? 6 : date.getDay() - 1 // Sunday is 0
})
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 20px;
}

section {
  padding: 20px 0;
}

.banner {
  position: relative;
  background: url('../assets/images/home-banner.jpeg');
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-position: center left;
}

.banner-content {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  /* max-width: 40%; */
  text-align: start;
  width: fit-content;
  // max-width: 90%;
  max-width: min(568px, calc(100vw - 30px));
  // padding: 0 0 0 13px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  padding: 10px;
  border-radius: 10px;

  >* {
    padding-bottom: 10px;
  }

  .text {

    color: $text-color;
    font-size: 95px;
    line-height: 100%;

    @media screen and (max-width: 952px) {
      font-size: 52px;
    }

  }

  .sub-text {
    color: $text-color;
  }
}

.book-btn {
  background-color: $buttons-color;
  border-radius: 7px;
  width: fit-content;
  border: none;
  color: white;
  padding: 8px 22px;
  transition: background-color .1s ease-in;

  &:hover {
    background-color: #b9770f;

  }
}

.home-body-content {
  padding: 30px 3vw;
  text-align: start;
  ;

  h2 {
    font-size: 35px;
  }
}

.services {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -3vw; //to remove white space on sides from body padding

  img {
    width: 220px;
    height: 220px;

    @media screen and (max-width: 768px) {
      width: 120px;
      height: 120px;
    }

    border-radius: 5px;
  }

  .service-title {

    text-align: center;
    font-size: 18px;

    @media screen and (max-width: 952px) {
      font-size: 12px;
    }

    padding: 2px 5px;
  }

  .scroll-container {
    overflow-x: hidden;
    white-space: nowrap;
    width: 100%;
    padding: 20px;
    padding-top: 0;

    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;

    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }

  .scroll-content {
    display: flex;
  }

  .service-box {
    flex: 0 0 auto;
    // min-width: 200px;
    margin-inline-end: 16px;
    background: #fefefe;
    border-radius: 8px;
    // padding: 20px;
    text-align: center;
    font-weight: bold;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

}

#contact {
  ul li {
    list-style: none;
    margin: 10px;
    font-size: 21px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.37);
  }

  a {
    color: unset;
    text-decoration: none;

    &:hover {
      color: #b9770f;
    }
  }

}


.see-all-reviews-btn {

  padding: 5px 60px;
  border-radius: 15px;
  background: transparent;
  transition: background-color 0.1s ease-in;
  border: 1px black solid;

  &:hover {
    background: $buttons-color;
    color: white;
  }
}

// }
.today-text{
  color: $buttons-color;
}
</style>
