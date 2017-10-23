<template>
    <div class="row">
        <div class="row">
            <h4>0 1 2 3 4 5 6 7 8 9</h4>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option value="naoLimitacao">Vê mais de uma cor - 1 ponto</option>
                    <option value="simLimitacao">Vê apenas letras em preto</option>
                    <option value="simLimitacao">A associação com a cor relatada é sempre a mesma</option>
                </select>
                <label>Quantas cores são observadas</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen113',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>
