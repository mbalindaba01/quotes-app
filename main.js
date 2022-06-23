import './style.css'
import Alpine from 'alpinejs'
import {LoveCounter} from './love-counter';
import Login from './login'
import './quote.css'


window.Alpine = Alpine

Alpine.data('loveCounter', LoveCounter);

Alpine.data('login', Login)

Alpine.start()