import './style.css'
import Alpine from 'alpinejs'
import {LoveCounter} from './love-counter';
import Quotes from './quotes';
import './quote.css'
window.Alpine = Alpine

Alpine.data('loveCounter', LoveCounter);

Alpine.data('quoteApp', Quotes)

Alpine.start()