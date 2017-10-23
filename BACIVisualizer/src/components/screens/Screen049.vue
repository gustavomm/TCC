<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Memória de Trabalho - Ordem Direta</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex1">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">2 – 7</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">6 – 9 – 5 </label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">3 – 1 – 4 – 8</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex4">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">8 – 5 – 3 – 9 – 1</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex5">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">6 - 2 - 0 - 7 - 5 - 5</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex6">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">5 – 9 – 7 – 2 – 4 – 3 – 6</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex7">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">0 – 8 – 1 – 3 – 6 – 5 – 2 – 7</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela45.ex8">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item8">7 – 3 – 8 – 2 – 6 – 9 – 4 – 5 – 1</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen049',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela45 = {};
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
