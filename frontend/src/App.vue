<script setup>
import {ref, computed} from 'vue';
import Home from './components/Home.vue';
import Music from './components/AllMusic.vue';
import Upload from './components/AddMusic.vue';
import Search from './components/FindMusic.vue';

const routes = {
  '/': Home,
  '/music': Music,
  '/upload': Upload,
  '/search' : Search,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
})

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound;
})

const goTo = (path) => {
    window.location.hash = path;
};
</script>


<template>
<v-app>
    <v-app-bar color="#475569" prominent app dark height="110">
        <div class="d-flex align-center clickable" @click="goTo('/')">
            <img src="./assets/germanFlagMusic.png" class="nasbLogo" />
        
            <div class="nasbTitleGroup">
                <div class="nasbTitle">Nord-Amerikanischer Sängerbund</div>
                <div class="subtitle">Music Library</div>
            </div>
        </div>
        <v-spacer></v-spacer>
        <div class="navButtonGroup">
            <v-btn text @click="goTo('/music')" class="navBtn"><v-icon start style="margin-right:2px" icon="mdi-music-note"></v-icon>View All Music</v-btn>
            <v-btn text @click="goTo('/search')" class="navBtn"><v-icon start style="margin-right:2px" icon="mdi-magnify"></v-icon>Search Music</v-btn>
            <v-btn text @click="goTo('/upload')" class="navBtn"><v-icon start style="margin-right:2px" icon="mdi-plus"></v-icon>Add New Music</v-btn>
        </div>
    </v-app-bar>
    <v-main class="mainContent">
        <component :is="currentView"></component>
    </v-main>
    <v-footer color="#475569" app padless>
        <v-container class="py-4" fluid>
            <p class="footerText">
            © 2025 Nord-Amerikanischer Sängerbund — All rights reserved.
            </p>
        </v-container>
    </v-footer>
</v-app>
</template>

<style>
.clickable {
  cursor: pointer;
}
.nasbLogo {
    max-height: 100px;
    padding-left: 10px;
    margin-right: 20px;
}
.nasbTitleGroup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2;
}
.nasbTitle {
  font-family: 'UnifrakturCook', cursive;
  font-size: 42px;
  letter-spacing: 1px;
  font-weight: 700;
}
.subtitle {
  font-size: 18px;
  font-weight: 300;
  color: #cbd5e1; 
  margin-right: 12px;
}
.mainContent {
    margin-top: 120px;
    padding: 20px;
}
.navButtonGroup {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 100px;
}
.navBtn {
  color: #E2E8F0;
  font-weight: 500;
  text-transform: none;
}
.footerText {
  font-size: 14px;
  color: #CBD5E1;
}
</style>