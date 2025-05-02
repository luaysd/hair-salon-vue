<template>
    <header :class="{ 'navbar': true, [headerClasses]: showNav }">

        <button class="hamburger" @click="toggleMenu">&#9776;</button>

        <div class="navbar-brand">{{$t('app.salon_title')}}</div>

        <nav class="navbar-menu">
            <ul>
                <li><router-link :to="'/home#home'">{{$t('menu.home')}}</router-link></li>
                <li><router-link :to="'/home#services'">{{$t('menu.services')}}</router-link></li>
                <li><router-link :to="'/home#address'">{{$t('menu.address')}}</router-link></li>
                <li><router-link :to="'/home#contact'">{{$t('menu.contact')}}</router-link></li>
                <li><router-link :to="'/about'">{{$t('menu.about')}}</router-link></li>

            </ul>
        </nav>

        <div class="d-flex align-items-center gap-2">

            <template v-if="showNav" >
                <router-link :to="'/booking'">
                    <button class="primary-btn">{{$t('menu.book_now')}}</button>
                </router-link>
            </template>
            <div class="navbar-lang">
                <select v-model="lang" @change="changeLocale">
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                    <option value="fr">FR</option>
                    <option value="es">ES</option>
                    <option value="de">DE</option>
                    <option value="it">IT</option>
                    <option value="tr">TR</option>
                </select>
            </div>
        </div>

    </header>
    <div class="side-menu" :class="{ open: isMenuOpen , rtl : isRtl }">
        <div class="d-flex flex-row justify-content-start align-items-center gap-0">
            <button class="close-btn" @click="toggleMenu">&times;</button>
            <div class="navbar-brand">{{$t('app.salon_title')}}</div>
        </div>

        <ul class="nav-items ">
            <li class="text-start"><router-link @click="toggleMenu" :to="'/home#home'">{{$t('menu.home')}}</router-link></li>
            <li class="text-start"><router-link @click="toggleMenu" :to="'/home#services'">{{$t('menu.services')}}</router-link></li>
            <li class="text-start"><router-link @click="toggleMenu" :to="'/home#address'">{{$t('menu.address')}}</router-link></li>
            <li class="text-start"><router-link @click="toggleMenu" :to="'/home#contact'">{{$t('menu.contact')}}</router-link></li>
            <li class="text-start"><router-link @click="toggleMenu" :to="'/about'">{{$t('menu.about')}}</router-link></li>
        </ul>
    </div>

</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, Ref, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { t,locale , fallbackLocale } = useI18n()
const isRtl = computed(() => ['ar', 'he', 'fa', 'ur'].includes(locale.value))
function changeLocale(event: Event) {
  const target = event.target as HTMLSelectElement
  if(target?.value){
      locale.value = target.value
      localStorage.setItem('lang',locale.value)
    //   const isRtlTemp = computed(() => ['ar', 'he', 'fa', 'ur'].includes(locale.value))
      document.documentElement.setAttribute('dir', isRtl.value ? 'rtl' : 'ltr');
    //   isRtl.value = isRtlTemp.value
    }
}
let isMenuOpen: Ref<boolean> = ref(false)
let showNav: Ref<boolean> = ref(false)
let headerClasses: Ref<string> = ref("")
let lang: Ref<string> = ref("")
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
const route = useRoute()

function handleScroll() {
    if (route.path === '/home') {
        showNav.value = window.scrollY > 200
        if (showNav.value) {
            headerClasses.value = 'position-fixed bg-white box-shadow slide-down-enter'
        }
    }
}

function setupScrollListener() {
    window.removeEventListener('scroll', handleScroll)

    if (route.path === '/home') {
        window.addEventListener('scroll', handleScroll)
        handleScroll() // trigger once on mount
    } else {
        showNav.value = true
        headerClasses.value = ' position-sticky bg-white box-shadow  '
    }
}

onMounted(()=>{
    const menu = document.getElementsByClassName('side-menu')[0];
    const toggleBtn = document.getElementsByClassName('hamburger')[0];
    document.addEventListener('click', function (e:any) {
        if (!menu.contains(e.target) && !toggleBtn.contains(e.target) && isMenuOpen.value) {
            isMenuOpen.value = false
        }
    });
    setupScrollListener()
    
    // let langStorage =localStorage.getItem('lang') || fallbackLocale.value.toString()
    // if(langStorage){
        lang.value = locale.value
    //     locale.value = langStorage
    // }
    
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, setupScrollListener)
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    color: white;
    // position: fixed;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar-brand {
    font-weight: bold;
    font-size: 1.4rem;
}

.navbar-menu ul {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.navbar-menu a {
    color: $text-color;
    text-decoration: none;
    transition: color 0.1s ease-in;

    &:hover {
        color: $buttons-color;
    }
}

.navbar-lang select {
    padding: 0.3rem;
    border: none;
    border-radius: 5px;
}

/* Hamburger */
.hamburger {
    display: none;
    font-size: 1.8rem;
    background: none;
    border: none;
    color: black;
    cursor: pointer;
}

/* Sidebar */
.side-menu {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    max-width: 500px;
    height: 100vh;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    transition: left 0.3s ease;
    z-index: 2000;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);

    &.rtl{
        left: unset;
        right: -100vw; 
        transition: right 0.3s ease;

    }
    .navbar-brand {
        color: black;
        border-bottom: 1px solid rgb(180, 180, 180);
        flex-grow: 1;
        text-align: start;
        padding: 20px;
        padding-inline-start: 48px;


    }

    .nav-items {
        text-align: left;
        padding-inline-start: 67px;
        margin-top: 20px;
        padding-top: 20px;
    }

}

.side-menu.open {
    left: 0;
    &.rtl{
        left: unset;
        right: 0; 
    }
}

.side-menu ul {
    // padding: 10px;
    list-style: none;
    text-align: start;

    a {
        text-decoration: none;
        margin: 1rem 0;
        color: black;
        font-size: 26px;
        transition: color .1s ease-in;

        &:hover {
            color: $buttons-color;
        }

    }
}

.close-btn {
    // align-self: flex-start;
    font-size: 2rem;
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    // margin-bottom: 2rem;
}

/* Responsive */
@media (max-width: 768px) {

    .navbar {

        .navbar-menu,
        .navbar-brand {
            display: none;
        }

        .hamburger {
            display: block;
        }
    }
}

@keyframes slide-down {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.slide-down-enter {
    animation: slide-down 0.4s ease-out forwards;
    box-shadow: 0px 1px 7px 0px #cccccc;
}

.box-shadow {
    box-shadow: 0px 1px 7px 0px #cccccc;
}
</style>