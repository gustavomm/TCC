<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Inquérito Paciente</h5>
            </div>
        </div>
        <div class="row">
            <div class="row">
                <div class="input-field col s6">
                    <input disabled v-model="data.Tela2.dataAplicacao" type="text">
                    <label for="disabled">Data de Aplição</label>
                </div>
                <div class="input-field col s6">
                    <input disabled v-model="data.Tela2.nomeAvaliado" type="text" class="validate">
                    <label for="disabled">Nome do Avaliado</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s4">
                    <input disabled v-model="data.Tela2.dataNascimento" type="text">
                    <label for="disabled">Data de Nascimento</label>
                </div>
                <div class="input-field col s4">
                    <input disabled v-model="data.Tela2.idade" type="text" class="validate">
                    <label for="disabled">Idade</label>
                </div>
                <div class="input-field col s4">
                    <select disabled v-model="data.Tela2.lateralidade">
                        <option value="empty"></option>
                        <option value="destro">Destro</option>
                        <option value="canhoto">Canhoto</option>
                    </select>
                    <label>Lateralidade</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s4">
                    <select disabled v-model="data.Tela2.escolaridade">
                        <option value="empty"></option>
                        <option value="analfabeto">Analfabeto/nunca frequentou escola</option>
                        <option value="inicio">0 á 3 anos de escolarizçao</option>
                        <option value="medio">4 á 8 anos de escolarizçao</option>
                        <option value="superior">mais de 8 anos de escolarizçao</option>
                    </select>
                    <label>Escolaridade</label>
                </div>
                <div class="input-field col s4">
                    <input disabled v-model="data.Tela2.profissao" type="text" class="validate">
                    <label for="disabled">Profissão</label>
                </div>
                <div class="input-field col s4">
                    <select disabled v-model="data.Tela2.trabalhoAtual">
                        <option value="empty"></option>
                        <option value="aposentado">Não, porque está aposentado</option>
                        <option value="desempregado">Não porque está desempregado/licenciado</option>
                        <option value="trabalhando">Sim, está trabalhando</option>
                    </select>
                    <label>Trabalho Atual</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s3">
                    <input disabled v-model="data.Tela2.naturalidade" type="text" class="validate">
                    <label for="disabled">Natural de que cidade/estado</label>
                </div>
                <div class="input-field col s3">
                    <select disabled  v-model="data.Tela2.sexo">
                        <option value="empty"></option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <label>Sexo</label>
                </div>
                <div class="input-field col s3">
                    <select disabled v-model="data.Tela2.limitacaoCorporal">
                        <option value="empty"></option>
                        <option value="naoCorporal">Não</option>
                        <option value="simCorporal">Sim</option>
                    </select>
                    <label>Possui limitação corporal visível?</label>
                </div>
                <div class="input-field col s3">
                    <select disabled v-model="data.Tela2.problemaVisual">
                        <option value="empty"></option>
                        <option value="naoVisivel">Não</option>
                        <option value="simVisivel">Sim</option>
                    </select>
                    <label for="disabled">Possui probelmas visual ou usa óculos?</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen002',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela2 = {};
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
