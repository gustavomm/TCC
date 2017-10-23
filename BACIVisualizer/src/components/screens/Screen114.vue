<template>
    <div class="row">
        <div class="row">
            <h5>Rastreio Sinestesia</h5>
        </div>
        <div class="row">
            <div class="input-field col s12">
                <textarea disabled id="textarea1" class="materialize-textarea"></textarea>
                <label for="disabled">Existe alguma palavra, letra, número ou símbole que causa assiciação com outras cores?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen114',
        mounted: function() {
            $('select').material_select();
        }
    };
</script>

<style lang="sass" scoped>
</style>
