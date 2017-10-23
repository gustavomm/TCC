<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" width="450" src="../../assets/images/screens/screen021.png" />
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela175.pontuacao">
                    <option value="empty"></option>
                    <option value="1">Certo - 1 ponto</option>
                    <option value="0">Errado - 0 pontos</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela175.comeco">
                    <option value="empty"></option>
                    <option value="digital">Relógio digital</option>
                    <option value="circulo">Começou pelo círculo</option>
                    <option value="numero">Começou pelo número 12</option>
                    <option value="numero1">Começou pelo número 1</option>
                    <option value="outro">Começou por outra parte</option>
                </select>
                <label for="disabled">Por onde começou</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <input disabled v-model="data.Tela175.faltar" type="text" class="validate">
                <label for="disabled">Faltam partes</label>
            </div>
            <div class="input-field col s6">
                <input disabled v-model="data.Tela175.sobrar" type="text" class="validate">
                <label for="disabled">Há elementos que não estavam na imagem</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen021',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela175 = {};
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
.my-align
    margin-left: auto
    margin-right: auto
</style>
