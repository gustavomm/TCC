<template>
    <div>
        <input @input="search" v-model="query" id="searchField" type="text" class="validate">
        <label for="searchField">Pesquisar</label>
    </div>
</template>

<script>
    export default {
        name: 'mySearch',
        props: {
            // Data where is going be performed the search
            data: {
                type: Array,
                required: true,
            },
            // Which properties is going to be performed the search
            properties: {
                type: Array,
                required: true,
            },
            // This call back will be called every time the search is perfomed
            callback: {
                type: Function,
                required: true,
            },
        },
        data: function() {
            return {
                initialData: undefined,
                query: '',
            };
        },
        computed: {
            allData: {
                get: function() {
                    if(this.initialData === undefined)
                        this.initialData = this.data;

                    return this.initialData;
                },
            },
        },
        methods: {
            search: function() {
                if (this.query === '')
                    this.callback(this.allData);
                else {
                    let result = [];

                    for (let patient = 0; patient < this.allData.length; patient++) {
                        for (let attr = 0; attr < this.properties.length; attr++) {
                            let properties = this.properties[attr].split('.');
                            let value = this.allData[patient][properties[0]];

                            for (let property = 1; property < properties.length; property++)
                                value = value[properties[property]];

                            if(value.toLowerCase().indexOf(this.query.toLowerCase()) != -1) {
                                result.push(this.allData[patient]);
                                break;
                            }
                        }
                    }

                    this.callback(result);
                }
            },
        },
    };
</script>

<style lang="sass" scoped>
</style>
