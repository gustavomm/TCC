<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Escala Brasileira de Solidão (UCLA-BR)</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.infeliz">
                    <option value="empty"></option>
                    <option value="nunca1">Nunca</option>
                    <option value="raramente1">Raramente</option>
                    <option value="algumasvezes1">Algumas vezes</option>
                    <option value="frequentemente2">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto infeliz por fazer tantas coisas sozinho(a)</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.tolerar">
                    <option value="empty"></option>
                    <option value="nunca2">Nunca</option>
                    <option value="raramente2">Raramente</option>
                    <option value="algumasvezes2">Algumas vezes</option>
                    <option value="frequentemente2">Frequentemente</option>
                </select>
                <label for="disabled">Eu não rolero ficar tão sozinho(a)</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.companhia">
                    <option value="empty"></option>
                    <option value="nunca3">Nunca</option>
                    <option value="raramente3">Raramente</option>
                    <option value="algumasvezes3">Algumas vezes</option>
                    <option value="frequentemente3">Frequentemente</option>
                </select>
                <label for="disabled">Eu sinto que não tenho companhia</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.compreende">
                    <option value="empty"></option>
                    <option value="nunca4">Nunca</option>
                    <option value="raramente4">Raramente</option>
                    <option value="algumasvezes4">Algumas vezes</option>
                    <option value="frequentemente4">Frequentemente</option>
                </select>
                <label for="disabled">Eu sinto que ninguém me compreende</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.esperando">
                    <option value="empty"></option>
                    <option value="nunca5">Nunca</option>
                    <option value="raramente5">Raramente</option>
                    <option value="algumasvezes5">Algumas vezes</option>
                    <option value="frequentemente5">Frequentemente</option>
                </select>
                <label for="disabled">Eu fico esperando as pessoas me ligarem ou escreverem</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.recorrer">
                    <option value="empty"></option>
                    <option value="nunca6">Nunca</option>
                    <option value="raramente6">Raramente</option>
                    <option value="algumasvezes6">Algumas vezes</option>
                    <option value="frequentemente6">Frequentemente</option>
                </select>
                <label for="disabled">Eu sinto que não tenho ninguém a quem eu possa recorrer</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.proximoNinguem">
                    <option value="empty"></option>
                    <option value="nunca7">Nunca</option>
                    <option value="raramente7">Raramente</option>
                    <option value="algumasvezes7">Algumas vezes</option>
                    <option value="frequentemente7">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto próximo(a) ninguém</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.rodeiam">
                    <option value="empty"></option>
                    <option value="nunca8">Nunca</option>
                    <option value="raramente8">Raramente</option>
                    <option value="algumasvezes8">Algumas vezes</option>
                    <option value="frequentemente8">Frequentemente</option>
                </select>
                <label for="disabled">Sinto qu emeus interesses e ideias não são compartilhados por aqueles que me rodeiam</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.excluido">
                    <option value="empty"></option>
                    <option value="nunca9">Nunca</option>
                    <option value="raramente9">Raramente</option>
                    <option value="algumasvezes9">Algumas vezes</option>
                    <option value="frequentemente9">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto excluído(a)</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.sozinho">
                    <option value="empty"></option>
                    <option value="nunca10">Nunca</option>
                    <option value="raramente10">Raramente</option>
                    <option value="algumasvezes10">Algumas vezes</option>
                    <option value="frequentemente10">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto completamente sozinho(a)</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.comunicar">
                    <option value="empty"></option>
                    <option value="nunca11">Nunca</option>
                    <option value="raramente11">Raramente</option>
                    <option value="algumasvezes11">Algumas vezes</option>
                    <option value="frequentemente11">Frequentemente</option>
                </select>
                <label for="disabled">Eu sou incapaz de me aproximar e de me comunicar com as pessoas ao meu redor</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.superficiais">
                    <option value="empty"></option>
                    <option value="nunca12">Nunca</option>
                    <option value="raramente12">Raramente</option>
                    <option value="algumasvezes12">Algumas vezes</option>
                    <option value="frequentemente12">Frequentemente</option>
                </select>
                <label for="disabled">Eu sinto que minhas relações sociais são superficiais</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.carente">
                    <option value="empty"></option>
                    <option value="nunca13">Nunca</option>
                    <option value="raramente13">Raramente</option>
                    <option value="algumasvezes13">Algumas vezes</option>
                    <option value="frequentemente13">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto carente de companhia</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.conhece">
                    <option value="empty"></option>
                    <option value="nunca14">Nunca</option>
                    <option value="raramente14">Raramente</option>
                    <option value="algumasvezes14">Algumas vezes</option>
                    <option value="frequentemente14">Frequentemente</option>
                </select>
                <label for="disabled">Eu sinto que ninguém me conhece realmente bem</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.isolado">
                    <option value="empty"></option>
                    <option value="nunca15">Nunca</option>
                    <option value="raramente15">Raramente</option>
                    <option value="algumasvezes15">Algumas vezes</option>
                    <option value="frequentemente15">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto isolado(a) das outras pessoas</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.infelizExcluido">
                    <option value="empty"></option>
                    <option value="nunca16">Nunca</option>
                    <option value="raramente16">Raramente</option>
                    <option value="algumasvezes16">Algumas vezes</option>
                    <option value="frequentemente16">Frequentemente</option>
                </select>
                <label for="disabled">Sou infeliz estando tão excluído(a)</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.amigos">
                    <option value="empty"></option>
                    <option value="nunca17">Nunca</option>
                    <option value="raramente17">Raramente</option>
                    <option value="algumasvezes17">Algumas vezes</option>
                    <option value="frequentemente17">Frequentemente</option>
                </select>
                <label for="disabled">Para mim é dificil fazer amigos</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela10.bloqueado">
                    <option value="empty"></option>
                    <option value="nunca18">Nunca</option>
                    <option value="raramente18">Raramente</option>
                    <option value="algumasvezes18">Algumas vezes</option>
                    <option value="frequentemente18">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto bloqueado(a) e excluído por outra pessoas</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela10.redor">
                    <option value="empty"></option>
                    <option value="nunca19">Nunca</option>
                    <option value="raramente19">Raramente</option>
                    <option value="algumasvezes19">Algumas vezes</option>
                    <option value="frequentemente19">Frequentemente</option>
                </select>
                <label for="disabled">Sinto que as pessoas estão ao meu redor, mas não estão comigo</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela10.atividades">
                    <option value="empty"></option>
                    <option value="nunca20">Nunca</option>
                    <option value="raramente20">Raramente</option>
                    <option value="algumasvezes20">Algumas vezes</option>
                    <option value="frequentemente20">Frequentemente</option>
                </select>
                <label for="disabled">Eu me sinto incomodado em realizar atividades sozinho(a)</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <input disabled v-model="data.Tela10.pontos" type="text" class="datepicker">
                <label for="disabled">Total de pontos:</label>
            </div>
            <div class="input-field col s6">
                <input disabled value="" type="text" class="validate">
                <label for="disabled">Classificação::</label>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen010',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela10 = {};
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
