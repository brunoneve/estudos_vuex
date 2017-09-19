import Vue from 'vue';
import Vuex from 'vuex';
import {Time} from './time';

Vue.use(Vuex);

//imutavel
const state = {
	view: 'tabela',
	times: [
		new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
        new Time('Santos', require('./assets/santos_60x60.png')),
        new Time('Flamengo', require('./assets/flamengo_60x60.png')),

        new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
        new Time('Fluminense', require('./assets/fluminense_60x60.png')),
        new Time('São Paulo', require('./assets/sao_paulo_60x60.png')),

        new Time('Sport', require('./assets/sport_60x60.png')),
        new Time('Internacional', require('./assets/internacional_60x60.png')),
        new Time('Grêmio', require('./assets/gremio_60x60.png')),

        new Time('Figueirense', require('./assets/figueirense_60x60.png')),
        new Time('Botafogo', require('./assets/botafogo_60x60.png')),
        new Time('Corinthians', require('./assets/corinthians_60x60.png')),

        new Time('Vitória', require('./assets/vitoria_60x60.png')),
        new Time('Atletico PR', require('./assets/atletico-pr_60x60.png')),
        new Time('Atletico MG', require('./assets/atletico_mg_60x60.png')),

        new Time('Coritiba', require('./assets/coritiba_60x60.png')),
	]
};

const mutations = {
    
}

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0,6),
        timesRebaixados: state => state.times.slice(12,16)
    }
});