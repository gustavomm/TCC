<template>
    <div class="row">
        <div class="row">
            <h5>Memória - semântica</h5>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label>Quais as cores da Bandeira do Brasil?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label>Quais são as estações do ano?</label>
            </div>
            <div class="input-field col s4">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label>Quais são as quatro operações matemáticas?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen064',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>
