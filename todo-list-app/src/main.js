import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

//import style modules and font-icons
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck, faTrash, faList, faTrashCan
} from "@fortawesome/free-solid-svg-icons"
library.add( faCheck, faTrash, faList, faTrashCan)

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
