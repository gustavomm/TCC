<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Verificação de controle motor dos membros superiores</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela12.pontuacao">
                    <option value="empty"></option>
                    <option value="0">0 pontos - se o testando permanecer passivo</option>
                    <option value="1">1 ponto - se o comportamento do testando for duvidoso e ajuda ativa</option>
                    <option value="2">2 ponto - se o testando copiar ativamente o movimento solicitado</option>
                </select>
                <label for="disabled">Pontuação</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen012',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela12 = {};
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
