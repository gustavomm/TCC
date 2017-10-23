<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Cotação Memória Não-verbal Imediata</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Flor">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">Flor</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Gato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Gato</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Vaso">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">Vaso</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Pincel">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">Pincel</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Coelho">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Coelho</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Violao">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Violão</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Dado">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">Dado</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Batom">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Batom</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Prato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Prato</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela50.Gude">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Bola de gude</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen054',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela50 = {};
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
