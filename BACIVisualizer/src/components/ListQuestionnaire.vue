<template>
    <div>
        <span class="card-title">Questionarios</span>
        <hr>
        <br />
        <div class="row my-row">
            <div class="input-field col s3">
                <my-select :options="options" 
                    title="Escolha quantas entradas" 
                    :startValue="elementsPerPage" 
                    :callback="updateElementsPerPage"/>
            </div>
            <div class="input-field col s9">
                <my-search :data="allData" 
                    :properties="['Psicologo', 'Tela2.nomeAvaliado', 'Tela2.dataAplicacao']" 
                    :callback="updateTable"/>
            </div>
        </div>
        <transition name="message" mode="out-in">
            <table v-if="displayData.length > 0"  class="striped">
                <thead>
                    <tr>
                        <th>Responsável</th>
                        <th>Paciente</th>
                        <th>Data de Aplicação</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(patient, index) in displayData" v-on:dblclick="showFullData(index)">
                        <td>{{ patient.Psicologo }}</td>
                        <td>{{ patient.Tela2.nomeAvaliado }}</td>
                        <td>{{ patient.Tela2.dataAplicacao }}</td>
                    </tr>

                </tbody>
            </table>

            <div v-else class="empty-search light-green lighten-4 z-depth-1 valign-wrapper">
                <div class="empty-search-message valign">
                    <h6>
                        Nenhum registro foi encontrado para o critério de busca utilizado.
                    </h6>
                </div>
            </div>
        </transition>

        <div class="row">
            <div class="col s7 left-align my-label-info">
                <h6>
                    Mostrando {{ (elementsPerPage * (currPage - 1)) + 1 }} de 
                    {{ elementsPerPage * currPage }} de
                    {{ displayData.length }} entradas
                </h6>
            </div>
            <div class="col s5 right-align">
                <my-pagination :totalPages="totalPages" :callback="updatePage"/>
            </div>
        </div>
    </div>
</template>

<script>
    import myPagination from './Pagination';
    import mySearch from './Search';
    import mySelect from './Select';

    export default {
        name: 'myListQuestionnaire',
        data: function() {
            return {
                rows: undefined,
                currPage: 1,
                elementsPerPage: '50',
                options: [
                    { text: '10', value: 10 },
                    { text: '50', value: 50 },
                    { text: '100', value: 100 },
                ],
            };
        },
        components: {
            myPagination,
            mySearch,
            mySelect,
        },
        computed: {
            allData: {
                get: function() {
                    if (this.rows === undefined)
                        return this.$store.getters.getAllPatients;

                    return this.rows;
                },
                set: function(newValue) {
                    this.rows = newValue;
                },
            },
            displayData: function() {
                let initialElement = (this.currPage - 1) * this.elementsPerPage;
                let lastElement = this.currPage * this.elementsPerPage;

                return this.allData.slice(initialElement, lastElement);
            },
            totalPages: function() {
                let totalPages = Math.round(this.allData.length/this.elementsPerPage);

                if (totalPages == 0)
                    return 1;

                return totalPages;
            },
        },
        methods: {
            showFullData: function(id) {
                this.$router.push({ name: 'questionnaire', params: { userId: id } });
            },
            updatePage: function(page) {
                this.currPage = page;
            },
            updateTable: function(data) {
                this.currPage = 1;
                this.allData = data;
            },
            updateElementsPerPage: function(value) {
                this.elementsPerPage = value;
            },
        },
    };
</script>

<style lang="sass" scoped>
.my-row
    margin-bottom: 0

table.striped>tbody>tr:nth-child(odd)
    background-color: #c5e1a5

.input-field input[type=text]:focus + label
     color: #9ccc65;

.input-field input[type=text]:focus
    border-bottom: 1px solid #9ccc65
    box-shadow: 0 1px 0 0 #9ccc65

.my-label-info
    padding-top: 15px

.empty-search
    min-height: 100px
    min-width: 100%
    margin-top: 2%
    margin-bottom: 2%
    text-align: center
    color: #bbb

.empty-search-message
    min-width: 100%

.message-enter-active, .message-leave-active
  transition: opacity .2s

.message-enter, .message-leave-active
  opacity: 0

</style>
