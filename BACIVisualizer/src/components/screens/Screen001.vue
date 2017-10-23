<template>
    <div class="row">
        <div class="row">
            <div class="input-field col s12">
                <input disabled v-model="data.Psicologo" type="text" class="validate">
                <label for="disabled">Nome profissional</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen001',
        props: {
            data: {
                type: Object,
                default: function() {
                    return {};
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
