<template>
    <div class="row">
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela7.compreensao">
                    <option value="compreensao1">0</option>
                    <option value="compreensao2">1</option>
                </select>
                <label for="disabled">Total de pontos de compreensão verbal:</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela7.frase">
                    <option value="frase1">0</option>
                    <option value="frase2">1</option>
                </select>
                <label for="disabled">Total de pontos escrita voluntária:</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen007',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela7 = {};
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
