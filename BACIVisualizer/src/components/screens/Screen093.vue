<template>
    <div class="row">
        <div class="input-field col s12">
            <select disabled>
                <option value="empty"></option>
                <option>Certo - 1 ponto</option>
                <option>Errado - 0 pontos</option>
            </select>
            <label>DÓ</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen093',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>
