<template>
    <div class="booking-container">
        <h1 class="text-center mb-5">Book an Appointment</h1>
      

        <h2 >Services</h2>
        <div class="services-grid">
            <div v-for="service in services" :key="service.key" class="service-button"
                :class="{ 'selected': selectedService.includes(service)  }">
                <div class="row">
                    <div class="col-6">
                        <img :src="getImagePath(service.key)" width="100px" height="100px" alt="">
                    </div>
                    <div class="col-6">
                        <div class="flex flex-column">
                            <p>{{ service.name }}</p>
                            <p>{{ service.duration }} min</p>
                            <p>${{ service.price }}</p>
                            <button type="button" class="select-service-button"  @click="selectService(service)"> <template v-if="selectedService.includes(service)" ><i class="fa-solid fa-check"></i></template ><template v-else >Select</template></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr class="divider">

        <div class="extensions-section">
            <!-- <h2>Extensions</h2> -->

            <div class="date-section">
                <h3>Date</h3>
                <div class="calendar-header">
                    <button class="nav-button" @click="previousMonth">&lt;</button>
                    <span class="month-year">{{ currentMonth }} {{ currentYear }}</span>
                    <button class="nav-button" @click="nextMonth">&gt;</button>
                </div>
                <div class="calendar-grid">
                    <div v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day" class="day-header">
                        {{ day }}
                    </div>
                    <div v-for="day in calendarDays" :key="day.date" class="calendar-day" :class="{
                        'current-month': day.isCurrentMonth,
                        'selected': selectedDate === day.date
                    }" @click="selectDate(day.date, day.isCurrentMonth)">
                        {{ day.day }}
                    </div>
                </div>
            </div>

            <hr class="divider">

            <div class="time-section">
                <h3>Time</h3>
                <div class="time-grid">
                    <button v-for="time in availableTimes" :key="time" class="time-button"
                        :class="{ 'selected': selectedTime === time }" @click="selectTime(time)">
                        {{ time }}
                    </button>
                </div>
            </div>

            <hr class="divider">

            <div class="employee-section">
                <h3>Employee</h3>
                <div class="employee-grid">
                    <button v-for="employee in employees" :key="employee" class="employee-button"
                        :class="{ 'selected': selectedEmployee === employee }" @click="selectEmployee(employee)">
                        {{ employee }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div :class="getSummaryClasses()"> -->
        <div class="summary mt-5">
            <h2>Summary</h2>
            Total: {{ totalDuration }} min | 
             ${{ totalPrice }}
            <p>
                <template v-for="(service,index) in selectedService" :key="service.key"  >
                    {{ service.name }}<span v-if="index !== selectedService.length - 1">, </span>
                </template>
            </p>
            <div v-if="selectedDate">
                at {{ summaryDate }}
                <span v-if="selectedTime" >{{ selectedTime }}</span>
            </div>
        </div>
    <!-- </div> -->

     
    <div class="text-center mb-4">
        <button class="confirm-btn text-center">Confirm</button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// State
const services = ref([
  { key: 'haircut', name: 'Haircut', duration: 30, price: 20 },
  { key: 'facial', name: 'Facial', duration: 45, price: 35 },
  { key: 'massage', name: 'Massage', duration: 60, price: 50 },
  { key: 'gelish', name: 'Gelish', duration: 40, price: 25 },
  { key: 'manicure', name: 'Manicure', duration: 30, price: 20 },
  { key: 'pedicure', name: 'Pedicure', duration: 40, price: 25 },
  { key: 'piercing', name: 'Piercing', duration: 20, price: 15 },
  { key: 'solarium', name: 'Solarium', duration: 15, price: 10 }
])
const selectedService = ref([])

const currentDate = ref(new Date())
const selectedDate = ref(null)

const availableTimes = ref([
  "9:00 AM", "10:00 AM",
  "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM",
  "3:00 PM", "4:00 PM"
])
const selectedTime = ref(null)

const employees = ref(["Emily", "Sarah", "Jason", "Michael"])
const selectedEmployee = ref(null)

// Computed
const currentMonth = computed(() =>
  currentDate.value.toLocaleString('default', { month: 'long' })
)

const currentYear = computed(() =>
  currentDate.value.getFullYear()
)

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonthDays = new Date(year, month, 0).getDate()
  const daysFromPrevMonth = firstDay
  const totalDaysToShow = Math.ceil((daysInMonth + daysFromPrevMonth) / 7) * 7
  const daysFromNextMonth = totalDaysToShow - (daysInMonth + daysFromPrevMonth)

  const days = []
 

  // Previous month days
  for (let i = daysFromPrevMonth; i > 0; i--) {
    days.push({
      day: prevMonthDays - i + 1,
      date: new Date(year, month - 1, prevMonthDays - i + 1),
      isCurrentMonth: false
    })
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      date: new Date(year, month, i),
      isCurrentMonth: true
    })
  }

  // Next month days
  for (let i = 1; i <= daysFromNextMonth; i++) {
    days.push({
      day: i,
      date: new Date(year, month + 1, i),
      isCurrentMonth: false
    })
  }

  return days
})
const totalDuration = computed(() =>
  selectedService.value.reduce((sum, s) => sum + s.duration, 0)
)

const totalPrice = computed(() =>
  selectedService.value.reduce((sum, s) => sum + s.price, 0)
)
function getSummaryClasses(){

    if( window.innerWidth < 768){
        return 'summary-small' 
    }else
    return 'col-2'
}
// Methods
function selectService(service) {
    if(selectedService.value.includes(service)){
        selectedService.value = selectedService.value.filter((el:any)=>el != service)
    }else{
        selectedService.value.push(service)
    }
}

let summaryDate = computed(()=> new Date(selectedDate.value).toLocaleDateString('en-GB', {
  weekday: 'long', // 'short' gives abbreviated weekday (e.g., "Wed")
  day: '2-digit', // '2-digit' gives day in 2 digits (e.g., "15")
  month: 'long', // 'long' gives full month name (e.g., "April")
  year: 'numeric' // 'numeric' gives full year (e.g., "2025")
})) 
function selectDate(date, isCurrentMonth) {
  if (isCurrentMonth) {
    selectedDate.value = date
  }
}

function selectTime(time) {
  selectedTime.value = time
}

function selectEmployee(employee) {
  selectedEmployee.value = employee
}

function previousMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  )
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  )
}
function getImagePath(imageName: string) {
  try {
    return require(`@/assets/images/services/service-${imageName}.jpg`);
  } catch (e) {
    console.warn('Image not found:', e);
    return null;
  }
}
</script>


<style scoped lang="scss">
.booking-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1,
h2,
h3 {
    color: #333;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
    gap: 10px;
    margin: 20px 0;
}

.service-button,
.time-button,
.employee-button {
    padding: 10px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.service-button:hover,
.time-button:hover,
.employee-button:hover {
    background: #f0f0f0;
}

.service-button.selected{
    background: transparentize($color: $buttons-color, $amount: 0.8);
    border-color: $buttons-color
}
.time-button.selected,
.employee-button.selected {
    background: $buttons-color;
    // background: transparentize($color: #000000, $amount: 0);
    // color: white;

    border-color: $buttons-color
}

.divider {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 20px 0;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}

.nav-button {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    padding: 5px 15px;
}

.month-year {
    font-weight: bold;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
}

.day-header {
    text-align: center;
    font-weight: bold;
    padding: 5px;
}

.calendar-day {
    text-align: center;
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 4px;
}

.calendar-day.current-month {
    background: white;
}

.calendar-day.current-month:hover:not(.selected) {
    background: #f0f0f0;
}

.calendar-day:not(.current-month) {
    color: #aaa;
}

.calendar-day.selected {
    background: $buttons-color;
    color: white;
}

.time-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 10px;
}

.employee-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 10px;
}

.confirm-btn {
    background-color: $buttons-color;
    border-radius: 7px;
    width: fit-content;
    border: none;
    color: white;
    padding: 8px 22px;
    transition: background-color .1s ease-in;
    margin-top: 20px;
    &:hover {
        background-color: #b9770f;

    }
}
.summary{
    position: sticky;
    top: 110px;
    background: $buttons-color;
    padding: 10px;
    bottom: 0;

}
// .summary-small{
//     position: sticky;
//     bottom: 0;
// }
.select-service-button{
    border: 2px $buttons-color solid;
    background: $buttons-color;
    border-radius: 8px;
    padding: 5px 00px;
    width: 100%;
    color: black;
}
</style>