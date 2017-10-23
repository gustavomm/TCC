<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" width="450" src="../../assets/images/screens/screen019.png" />
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela173.pontuacao">
                    <option value="empty"></option>
                    <option value="1">Certo - 1 ponto</option>
                    <option value="0">Errado - 0 pontos</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela173.comeco">
                    <option value="empty"></option>
                    <option value="contorno">Começou pelo contorno</option>
                    <option value="nervuras">Começou pelas nervuras</option>
                    <option value="outro">Começou por outro ponto</option>
                </select>
                <label for="disabled">Por onde começou</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <input disabled v-model="data.Tela173.faltar" type="text" class="validate">
                <label for="disabled">Faltam partes</label>
            </div>
            <div class="input-field col s6">
                <input disabled v-model="data.Tela173.sobrar" type="text" class="validate">
                <label for="disabled">Há elementos que não estavam na imagem</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen019',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela173 = {};
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
