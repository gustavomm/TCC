<template>
    <div class="row">
        <div class="row">
            <h5>Habilidade Verbal - Escrita Ditada</h5>
        </div>
        <div class="row">
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">FORÇA</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">ASA</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">LOMBO</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">SETA</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">CACHORRO</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">CÉU</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">CAMPO</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">ANDAR</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">QUADRADO</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">SÉCULO</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">DESTRACHE</label>
            </div>
            <div class="input-field col s2">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">AUPORA</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen107',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>
