import Vue from 'vue';
import './filters';
import AppComponent from './components/app.component';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

let myVue = new Vue({
    el: '#app',
    components: {
        'app': AppComponent
    }
});

