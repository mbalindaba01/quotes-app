import './style.css'
import Alpine from 'alpinejs'
import {LoveCounter} from './love-counter';


window.Alpine = Alpine

Alpine.data('loveCounter', LoveCounter);

Alpine.start()

