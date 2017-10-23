<template>
    <div class="row">
        <div class="row">
            <h5>Capacidade Matemática</h5>
        </div>
        <div class="row">
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex1">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">100 - 7 =</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">98 - 5 =</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">80 / 4 =</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex4">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">25 / 5 =</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex5">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">13 x 5 =</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex6">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">18 x 7 =</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex6">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">19 + 45 =</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela55.ex7">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="disabled">20 + 16 =</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen059',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela55 = {};
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
