<template>
    <div class="row">
        <img class="materialboxed my-align" width="450" src="../../assets/images/screens/screen008.png" />
    </div>
</template>

<script>
    export default {
        name: 'Screen008',
        mounted: function() {
            $('.materialboxed').materialbox();
        },
    };
</script>

<style lang="sass" scoped>
.my-align
    margin-left: auto
    margin-right: auto
</style>
