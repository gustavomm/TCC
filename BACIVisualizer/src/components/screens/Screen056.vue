<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Cotação Memória Não-verbal Imediata</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Flor">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">Prato</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Gato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Coelho</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Vaso">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">Batom</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Pincel">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">Dado</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Coelho">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Gato</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Violao">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Vaso</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Dado">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">Bola de gude</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Batom">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Violão</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Prato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Pincel</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela52.Gude">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Flor</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen056',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela52 = {};
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
