import Vue from 'vue';
import Vuex from 'vuex';
import {Time} from './time';

Vue.use(Vuex);

//imutavel
const state = {
	view: 'tabela',
	times: [
		new Time(1,'Palmeiras', require('./assets/palmeiras_60x60.png')),
        new Time(2,'Santos', require('./assets/santos_60x60.png')),
        new Time(3,'Flamengo', require('./assets/flamengo_60x60.png')),

        new Time(4,'Cruzeiro', require('./assets/cruzeiro_60x60.png')),
        new Time(5,'Fluminense', require('./assets/fluminense_60x60.png')),
        new Time(6,'São Paulo', require('./assets/sao_paulo_60x60.png')),

        new Time(7,'Sport', require('./assets/sport_60x60.png')),
        new Time(8,'Internacional', require('./assets/internacional_60x60.png')),
        new Time(9,'Grêmio', require('./assets/gremio_60x60.png')),

        new Time(10,'Figueirense', require('./assets/figueirense_60x60.png')),
        new Time(11,'Botafogo', require('./assets/botafogo_60x60.png')),
        new Time(12,'Corinthians', require('./assets/corinthians_60x60.png')),

        new Time(13,'Vitória', require('./assets/vitoria_60x60.png')),
        new Time(14,'Atletico PR', require('./assets/atletico-pr_60x60.png')),
        new Time(15,'Atletico MG', require('./assets/atletico_mg_60x60.png')),

        new Time(16,'Coritiba', require('./assets/coritiba_60x60.png')),
	]
};

const mutations = {
    update(state, time){
        let index = state.times.findIndex(element => time.id == element.id);
        if(index != -1){
            state.times[index] = time;
        }
    },
    'show-time-list'(state){
        state.view = 'tabela';
    },
    'show-time-novojogo'(state){
        state.view = 'novoJogo';
    },
    'show-time-zona'(state){
        state.view = 'zona';
    },
}

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0,6),
        timesRebaixados: state => state.times.slice(12,16)
    },
    mutations
});