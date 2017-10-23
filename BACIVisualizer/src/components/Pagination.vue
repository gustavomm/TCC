<template>
    <div class="row">
        <div class="col s12 right-align">
            <ul class="pagination">
                <li @click="go(1)" class="waves-effect"><a><i class="material-icons">first_page</i></a></li>
                <li @click="previous" class="waves-effect"><a><i class="material-icons">chevron_left</i></a></li>
                <li v-for="page in pagesDisplayed" class="waves-effect" :class="{ active: page == currPage }">
                    <a @click="go(page)" > {{ page }} </a>
                <li>
                </li>
                <li @click="next" class="waves-effect"><a><i class="material-icons">chevron_right</i></a></li>
                <li @click="go(totalPages)" class="waves-effect"><a><i class="material-icons">last_page</i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myPagination',
        props: {
            startPage: {
                type: Number,
                default: 1,
                validator: function(value) {
                    return value > 0;
                },
            },
            totalPages: {
                type: Number,
                required: true,
            },
            // Amount of pages to be displayed each time
            chunkSize: {
                type: Number,
                default: 3,
            },
            // This callback will be called on every page update.
            callback: {
                type: Function,
                required: true,
            },
        },
        data: function() {
            return {
                paginationList: Array.from( Array(this.totalPages), (value, index) => index + 1),
                currPage: this.startPage,
                chunk: 0,
            };
        },
        computed: {
            pagesDisplayed: {
                get: function() {
                    const index = this.chunkSize * this.chunk;
                    return this.paginationList.slice(index, index + this.chunkSize);
                },
            },
        },
        methods: {
            next: function() {
                if (this.currPage < this.totalPages) {
                    this.currPage++;
                    this.callback(this.currPage);

                    const lastPageChunk = (this.chunkSize * this.chunk) + this.chunkSize;

                    if (this.currPage > lastPageChunk)
                        this.chunk++;
                }
            },
            previous: function() {
                if (this.currPage > 1) {
                    this.currPage--;
                    this.callback(this.currPage);

                    const firsPageChunk = this.chunkSize * this.chunk;

                    if (this.currPage <= firsPageChunk)
                        this.chunk--;
                }
            },
            go: function(page) {
                this.currPage = page;
                this.callback(this.currPage);

                const firsPageChunk = this.chunkSize * this.chunk;
                const lastPageChunk = (this.chunkSize * this.chunk) + this.chunkSize;

                if (this.currPage < firsPageChunk || this.currPage > lastPageChunk)
                    this.chunk = Math.floor(page/this.chunkSize);
            },
        },
        mounted: function() {
            if (this.startPage > 1) {
                this.currPage = this.startPage;

                const firsPageChunk = this.chunkSize * this.chunk;
                const lastPageChunk = (this.chunkSize * this.chunk) + this.chunkSize;

                if (this.currPage < firsPageChunk || this.currPage > lastPageChunk)
                    this.chunk = Math.floor(this.startPage/this.chunkSize);
            }
        },
    };
</script>

<style lang="sass" scoped>
.pagination li.active
    background: #9ccc65
</style>
