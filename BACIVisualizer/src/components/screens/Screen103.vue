<template>
    <div class="row">
        <div class="row">
            <img class="materialboxed my-align" width="450" src="../../assets/images/screens/screen103.png" />
        </div>
        <div class="row">
            <div class="input-field col s12">
                <select disabled>
                    <option value="empty"></option>
                    <option>Certo - 1 ponto</option>
                    <option>Errado - 0 pontos</option>
                </select>
                <label for="disabled">FLOR</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen103',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
.my-align
    margin-left: auto
    margin-right: auto
</style>
