import {Time} from '../time';
import _ from 'lodash';

export default {
    template: `
	    <div>
	    	<a class="btn btn-primary" @click="createNovoJogo">Novo Jogo</a>
	    	<br><br>
	        <div class="row">
	            <div class="col-md-3 pull-right">
	                <div class="input-group">
	                    <div class="input-group-addon">
	                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
	                    </div>
	                    <input type="text" class="form-control" placeholder="Pesquisar..." v-model="filter">
	                </div>
	            </div>
	        </div>
	        <br>
	        <table class="table table-striped table-bordered">
	            <thead>
	            <tr>
	                <th v-for="coluna in colunas">
	                    <a href="#" @click.prevent="sortBy(coluna)">{{coluna | ucwords}}</a>
	                </th>
	            </tr>
	            </thead>
	            <tbody>
	            <tr v-for="time in timesFiltered">
	                <td>
	                    <img :src="time.escudo" style="width:30px;height:30px">
	                    <strong>{{time.nome}}</strong>
	                </td>
	                <td>{{time.pontos}}</td>
	                <td>{{time.gm}}</td>
	                <td>{{time.gs}}</td>
	                <td>{{time | saldo}}</td>
	            </tr>

	            </tbody>
	        </table>
	    </div>
    `,
    data() {
        return {
            order: {
                keys:['pontos', 'gm', 'gs'],
                sort: ['desc', 'desc', 'asc']
            },
            filter: '',
            colunas: ['nome','pontos','gm','gs','saldo'],
            times: [
                new Time('Palmeiras', require('../assets/palmeiras_60x60.png')),
                new Time('Santos', require('../assets/santos_60x60.png')),
                new Time('Flamengo', require('../assets/flamengo_60x60.png')),

                new Time('Cruzeiro', require('../assets/cruzeiro_60x60.png')),
                new Time('Fluminense', require('../assets/fluminense_60x60.png')),
                new Time('São Paulo', require('../assets/sao_paulo_60x60.png')),

                new Time('Sport', require('../assets/sport_60x60.png')),
                new Time('Internacional', require('../assets/internacional_60x60.png')),
                new Time('Grêmio', require('../assets/gremio_60x60.png')),

                new Time('Figueirense', require('../assets/figueirense_60x60.png')),
                new Time('Botafogo', require('../assets/botafogo_60x60.png')),
                new Time('Corinthians', require('../assets/corinthians_60x60.png')),

                new Time('Vitória', require('../assets/vitoria_60x60.png')),
                new Time('Atletico PR', require('../assets/atletico-pr_60x60.png')),
                new Time('Atletico MG', require('../assets/atletico_mg_60x60.png')),

                new Time('Coritiba', require('../assets/coritiba_60x60.png')),
            ],
        };
    },
    methods: {
        createNovoJogo(){
            let indexCasa = Math.floor(Math.random() * 16),
                indexFora = Math.floor(Math.random() * 16);

            this.novoJogo.casa.time = this.times[indexCasa];
            this.novoJogo.casa.gols = 0;
            this.novoJogo.fora.time = this.times[indexFora];
            this.novoJogo.fora.gols = 0;
            this.showView('novojogo')
        },
        sortBy(coluna){
            this.order.keys = coluna;
            this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc';
        }
    },
    computed: {
        timesFiltered(){
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

            return _.filter(colecao , item => {
                return item.nome.indexOf(this.filter) >= 0;
            })
        }
    }
}