<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Você consegue realizar as seguintes atividades de vida diárias com idependência?</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.banho">
                    <option value="empty"></option>
                    <option value="banhoNao">Não</option>
                    <option value="banhoAjuda">Sim, com ajuda</option>
                    <option value="banhoSim">Sim</option>
                </select>
                <label for="disabled">Tomar banho?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.vestir">
                    <option value="empty"></option>
                    <option value="vestirNao">Não</option>
                    <option value="vestirAjuda">Sim, com ajuda</option>
                    <option value="vestirSim">Sim</option>
                </select>
                <label for="disabled">Verstir-se</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.comer">
                    <option value="empty"></option>
                    <option value="comerNao">Não</option>
                    <option value="comerAjuda">Sim, com ajuda</option>
                    <option value="comerSim">Sim</option>
                </select>
                <label for="disabled">Comer</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.tomarMedicacao">
                    <option value="empty"></option>
                    <option value="tomarMedicacaoNao">Não</option>
                    <option value="tomarMedicacaoAjuda">Sim, com ajuda</option>
                    <option value="tomarMedicacaoSim">Sim</option>
                </select>
                <label for="disabled">Tomar medicação</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.locomover">
                    <option value="empty"></option>
                    <option value="locomoverNao">Não</option>
                    <option value="locomoverAjuda">Sim, com ajuda</option>
                    <option value="locomoverSim">Sim</option>
                </select>
                <label for="disabled">Locomover-se dentro de casa</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.sairCasa">
                    <option value="empty"></option>
                    <option value="sairCasa">Não</option>
                    <option value="sairCasaAjuda">Sim, com ajuda</option>
                    <option value="sairCasaSim">Sim</option>
                </select>
                <label for="disabled">Ir a algum lugar fora de casa</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.prepararRefeicao">
                    <option value="empty"></option>
                    <option value="prepararRefeicaoNao">Não</option>
                    <option value="prepararRefeicaoAjuda">Sim, com ajuda</option>
                    <option value="prepararRefeicaoSim">Sim</option>
                </select>
                <label for="disabled">Preparar a própia refeição</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.compras">
                    <option value="empty"></option>
                    <option value="comprasNao">Não</option>
                    <option value="comprasAjuda">Sim, com ajuda</option>
                    <option value="comprasSim">Sim</option>
                </select>
                <label for="disabled">Fazer compras</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela4.financeiros">
                    <option value="empty"></option>
                    <option value="financeirosNao">Não</option>
                    <option value="financeirosAjuda">Sim, com ajuda</option>
                    <option value="financeirosSim">Sim</option>
                </select>
                <label for="disabled">Resolver problemas financeiros</label>
            </div>
        </div>

        <div class="row">
            <div class="row">
                <div class="input-field col s12">
                    <select disabled v-model="data.Tela4.obrigacoesDiariaCasa">
                        <option value="empty"></option>
                        <option value="obrigacoesDiariaCasaNao">Não</option>
                        <option value="obrigacoesDiariaCasaSim">Sim</option>
                    </select>
                    <label for="disabled">Você tem obrigações diárias na rotina familiar/nas tarefas de casa?</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <textarea disabled v-model="data.Tela4.obrigacoesDiariaCasaText" class="materialize-textarea"></textarea>
                    <label for="disabled">Descrição</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="row">
                <div class="input-field col s12">
                    <select disabled v-model="data.Tela4.obrigacoesDiariaFora">
                        <option value="empty"></option>
                        <option value="obrigacoesDiariaForaNao">Não</option>
                        <option value="obrigacoesDiariaForaSim">Sim</option>
                    </select>
                    <label for="disabled">Você tem obrigações diárias fora de casa?</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <textarea disabled v-model="data.Tela4.obrigacoesDiariaForaText" class="materialize-textarea"></textarea>
                    <label for="disabled">Descrição</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen004',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela4 = {};
                    return data;
                },
            },
        },
        mounted: function() {
            $('select').material_select();
            Materialize.updateTextFields();
        },
    };
</script>

<style lang="sass" scoped>
</style>
