<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Praxia Ideomotora</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela18.item1item1">
                    <option value="empty"></option>
                    <option value="certo1">Certo - 1 ponto</option>
                    <option value="errado1">Errado - 0 ponto</option>
                </select>
                <label for="disabled">Mandar um beijo</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela18.item2">
                    <option value="empty"></option>
                    <option value="certo2">Certo - 1 ponto</option>
                    <option value="errado2">Errado - 0 ponto</option>
                </select>
                <label for="disabled">Beber um copo de água</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela18.item3">
                    <option value="empty"></option>
                    <option value="certo3">Certo - 1 ponto</option>
                    <option value="errado3">Errado - 0 ponto</option>
                </select>
                <label for="disabled">Varrer o chão com a vassoura</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela18.item4">
                    <option value="empty"></option>
                    <option value="certo4">Certo - 1 ponto</option>
                    <option value="errado4">Errado - 0 ponto</option>
                </select>
                <label for="disabled">Folhear um livro</label>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <h5>Sensibilidade à Inferências</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela18.sensibilidade">
                    <option value="empty"></option>
                    <option value="sens3">3 pontos – o testando acertou toda a sequência</option>
                    <option value="sens2">2 pontos – o testando apresentou até 2 erros na sequência</option>
                    <option value="sens1">1 ponto – o testando apresentou 3 erros na sequência</option>
                    <option value="sens0">0 pontos – o testando apresentou 4 erros ou mais na sequência</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>


        <div class="row">
            <div class="col s12">
                <h5>Controle Inibitório</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela18.controle">
                    <option value="empty"></option>
                    <option value="cont3">3 pontos – o testando acertou toda a sequência</option>
                    <option value="cont2">2 pontos – o testando apresentou até 2 erros na sequência</option>
                    <option value="cont1">1 ponto – o testando apresentou 3 erros na sequência</option>
                    <option value="cont0">0 pontos – o testando apresentou 4 erros ou mais na sequência</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen022',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela18 = {};
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
