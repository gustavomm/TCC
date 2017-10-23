<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Preensão</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela14.pontuacao">
                    <option value="empty"></option>
                    <option value="3"> 3 pontos – o testando não segura a mão do avaliador </option>
                    <option value="2">2 pontos – o testando hesita e pergunta o que deve fazer</option>
                    <option value="1">1 ponto – o testando segura as mãos do examinador sem hesitar, mas solta quando recebe a segunda orientação</option>
                    <option value="0">0 pontos – o testando segura as mãos do examinador, mesmo após o examinador pedir-lhe para não fazê-lo na segunda orientação</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen014',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela14 = {};
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
