<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Cotação Memória Não-verbal Imediata</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Dado">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">Dado</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Violao">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Violão</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Gude">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Bola de gude</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Flor">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">Flor</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Batom">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">Batom</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Prato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Prato</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Pincel">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Pincel</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Coelho">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">Coelho</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Gato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Gato</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Vaso">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">Vaso</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela54.Gude">
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
        name: 'Screen058',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela54 = {};
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
