<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" width="450" src="../../assets/images/screens/screen045.png" />
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled  v-model="data.Tela41.quadrado">
                    <option value="empty"></option>
                    <option value="maior">Mesmo Objeto</option>
                    <option value="menor">Objetos Diferentes</option>
                </select>
                <label for="disabled">As figuras são</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen045',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela41 = {};
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
