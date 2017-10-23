<template>
    <div class="row">
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela3.motivo" >
                    <option value="empty"></option>
                    <option value="motivoMedico"> Encaminhamento / solicitação do médico</option>
                    <option value="motivoCognitivo"> Queixa espontânea/familiar de sintomas cognitivos</option>
                    <option value="motivoEmocional"> Queixa espontânea/familiar de sintomas emocionais</option>
                    <option value="motivoComportamento"> Queixa espontânea/familiar por mudança súbita de comportamento</option>
                </select>
                <label for="disabled">Qual o motivo da avaliação?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <textarea disabled  v-model="data.Tela3.descricaoSintomas" class="materialize-textarea"></textarea>
                <label for="disabled">Descrição dos sintomas</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela3.inicio">
                    <option value="empty"></option>
                    <option value="gradual">Gradual, insidioso</option>
                    <option value="abrupto">Abrupto, com episódio inicial distinguível</option>
                </select>
                <label for="disabled">O início dos sitomas foi:</label>
            </div>

            <div class="input-field col s6">
                <select disabled v-model="data.Tela3.sintomas">
                    <option value="empty"></option>
                    <option value="sintomasPresentes">Estão sempre presentes</option>
                    <option value="sintomasAparecem">Aparecem e desaparecem</option>
                </select>
                <label for="disabled">Há quanto tempo percebeu os sintomas? Os sintomas:</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela3.variedadeSintoma">
                    <option value="empty"></option>
                    <option value="variedadeIntensidade">A mesma intensidade</option>
                    <option value="variedadeFlutuante">São flutuantes (tem melhoras e pioras)</option>
                </select>
                <label for="disabled">Ao longo do tempo os sintomas têm:</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela3.medicamento">
                    <option value="empty"></option>
                    <option value="medicamentoSim">Sim</option>
                    <option value="medicamentoNao">Não</option>
                </select>
                <label for="disabled">Atualmente usa algum medicamento?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela3.usoContinuo">
                    <option value="empty"></option>
                    <option value="continuoSim">Sim</option>
                    <option value="continuoNao">Não</option>
                </select>
                <label for="disabled">De uso continou?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <textarea disabled v-model="data.Tela3.quaisMedicamentos" class="materialize-textarea"></textarea>
                <label for="disabled">Faz uso de quais medicamentos?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen003',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela3 = {};
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
