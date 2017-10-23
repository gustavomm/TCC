<template>
    <div class="row">
        <div class="row">
            <h5>Pontuação</h5>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.lembrar">
                    <option value="empty"></option>
                    <option value="lembrarNao">Não</option>
                    <option value="lembrarSim">Sim</option>
                </select>
                <label for="disabled">Ao ver as figuras o avaliando lembrou da história</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.organizar">
                    <option value="empty"></option>
                    <option value="orgNao">Não</option>
                    <option value="orgSim">Sim</option>
                    <option value="orgAjuda">Consegue com ajuda</option>
                </select>
                <label for="disabled">Organizou corretamente as figuras:</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.ordenar">
                    <option value="empty"></option>
                    <option value="ordNao">Não</option>
                    <option value="ordSim">Sim</option>
                    <option value="ordAjuda">Consegue com ajuda</option>
                </select>
                <label for="disabled">(Re)Contou a história ordenada e com coerência</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.descrever">
                    <option value="empty"></option>
                    <option value="descNao">Não</option>
                    <option value="descSim">Sim</option>
                </select>
                <label for="disabled">Fez apenas a descrição de cada cena</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.contar">
                    <option value="empty"></option>
                    <option value="contarNao">Não</option>
                    <option value="contarSim">Sim</option>
                </select>
                <label for="disabled">História Contada com Início - Meio - Fim</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.intrusao">
                    <option value="empty"></option>
                    <option value="intNao">Não</option>
                    <option value="intSim">Sim</option>
                </select>
                <label for="disabled">Houve presença de intrusões de pensamento</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.confabular">
                    <option value="empty"></option>
                    <option value="confNao">Não</option>
                    <option value="confSim">Sim</option>
                </select>
                <label for="disabled">Hove presença de confabulação</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.coerencia">
                    <option value="empty"></option>
                    <option value="coeNao">Não</option>
                    <option value="coeSim">Sim</option>
                </select>
                <label for="disabled">A fala foi coerente e fluida</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.pausa">
                    <option value="empty"></option>
                    <option value="pausaNao">Não</option>
                    <option value="pausaSim">Sim</option>
                </select>
                <label for="disabled">Houve presença de longas pausas ou hesitações na fala</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela21.repetir">
                    <option value="empty"></option>
                    <option value="repNao">Não</option>
                    <option value="repSim">Sim</option>
                </select>
                <label for="disabled">Repetição excessiva de palavras(ecolalia)</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea disabled v-model="data.Tela21.observacoes" class="materialize-textarea"></textarea>
                <label for="disabled">Observações</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen025',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela21 = {};
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
