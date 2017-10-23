<template>
    <div :id="identificator" class="modal">
        <div class="modal-content">
            <h4>{{ title }}</h4>
            <p>{{ body }}</p>
        </div>
        <div class="modal-footer">
            <a @click="positiveDispose" class="waves-effect waves-light btn green">Sim</a>
            <a @click="negativeDispose" class="waves-effect waves-light btn red">Não</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myConfirmationModal',
        props: {
            identificator: {
                type: String,
            },
            title: {
                type: String,
            },
            body: {
                type: String,
            },
            affirmativeCallBack: {
                type: Function,
            },
            negativeCallBack: {
                type: Function,
            },
        },
        data: function() {
            return {
            };
        },
        methods: {
            positiveDispose: function() {
                $('#' + this.identificator).modal('close');

                if (this.affirmativeCallBack !== undefined)
                    this.affirmativeCallBack();
            },
            negativeDispose: function() {
                $('#' + this.identificator).modal('close');

                if (this.negativeCallBack !== undefined)
                    this.negativeCallBack();
            },
        },
        mounted: function() {
            $('.modal').modal();
        },
    };
</script>

<style lang="sass" scoped>
.modal-footer > a
    margin: 1% 1% !important //override materialcss

</style>
