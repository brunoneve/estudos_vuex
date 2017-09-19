import store from '../store';

export default {
    template: `
	    <div>
	    	<h3>Times classificados para Libertadores</h3>
	        <table class="table table-striped table-bordered">
	            <thead>
	            <tr>
	                <th>Nome</th>
	            </tr>
	            </thead>
	            <tbody>
	            <tr v-for="time in timesLibertadores">
	                <td>
	                    <img :src="time.escudo" style="width:30px;height:30px">
	                    <strong>{{time.nome}}</strong>
	                </td>
	            </tr>
	            </tbody>
	        </table>

	        <h3>Times Rebaixados para 2ª Divisão</h3>
	        <table class="table table-striped table-bordered">
	            <thead>
	            <tr>
	                <th>Nome</th>
	            </tr>
	            </thead>
	            <tbody>
	            <tr v-for="time in timesRebaixados">
	                <td>
	                    <img :src="time.escudo" style="width:30px;height:30px">
	                    <strong>{{time.nome}}</strong>
	                </td>
	            </tr>
	            </tbody>
	        </table>

	    </div>
    `,
    computed: {
        timesLibertadores() {
        	return store.getters.timesLibertadores;
        },
        timesRebaixados() {
        	return store.getters.timesRebaixados;
        }
    }
}