import { createApp } from 'vue'
import App from './App.vue'

import './css/default.css'

//import modules
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//import icon components from fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck, faTrash, faList, faRectangleList
} from "@fortawesome/free-solid-svg-icons"
library.add( faCheck, faTrash, faList, faRectangleList)


const app = createApp(App);
app.mount('#app')
