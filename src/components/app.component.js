import TimeListComponent from './time-list.component';
import TimeJogoComponent from './time-jogo.component';
import TimeZonaComponent from './time-zona.component';
import store from '../store';

export default {
    components: {
        "time-list" : TimeListComponent,
        "time-jogo" : TimeJogoComponent,
        "time-zona" : TimeZonaComponent
    },
    template: `
    <div class="container">
         <div class="row">
            <h3>Campeonato Brasileiro - Série A - 2016</h3>
            <a class="btn btn-primary" @click="showNovoJogo">Ver tabela</a>
            <a class="btn btn-primary" @click="showNovoJogo">Novo jogo</a>
            <a class="btn btn-primary" @click="showZona">Ver zonas</a>
            <br/><br/>
            <div v-if="view == 'tabela'">
                <time-list></time-list>
            </div>
            <div v-if="view == 'novoJogo'">
                <time-jogo></time-jogo>
            </div>
            <div v-if="view == 'zona'">
                <time-zona></time-zona>
            </div>
         </div>
    </div>
    `,
    computed: {
        view(){
            return store.state.view;
        }
    },
    methods: {
        showNovoJogo(){
            store.commit('show-time-novojogo');
        },
        showTabela(){
            store.commit('show-time-list');
        },
        showZona(){
            store.commit('show-time-zona');
        },
    }
}