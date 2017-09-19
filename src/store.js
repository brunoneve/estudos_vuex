import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//imutavel
const state = {
	view: 'tabela'
};

export default new Vuex.Store({
	state
});