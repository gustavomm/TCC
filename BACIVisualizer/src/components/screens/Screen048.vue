<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Memória - Recordação Imediata</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s4">
                <h6>Palavras Recordadas 1ª lista</h6>
            </div>
            <div class="input-field col s4">
                <h6>Palavras Recordadas 2ª lista</h6>
            </div>
            <div class="input-field col s4">
                <h6>Palavras Recordadas 3ª lista</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.livro">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">Boneca</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.livro2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">Livro</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.livro3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item1">Árvore</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.mesa">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Estrela</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.mesa2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Mesa</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.mesa3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item2">Pato</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.sapato">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">Cavalo</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.sapato2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">Sapato</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.sapato3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item3">Copo</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.arvore">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">Mesa</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.arvore2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">Árvore</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.arvore3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item4">Janela</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.estrela">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item5">Pato</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.estrela2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item5">Estrela</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.estrela3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item5">Cavalo</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.copo">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Janela</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.copo2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Copo</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.copo3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item6">Sapato</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.boneca">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">Árvore</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.boneca2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">Boneca</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.boneca3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item7">Livro</label>
            </div>
        </div>

        <div class="row">
                <div class="input-field col s4">
                    <select disabled v-model="data.Tela44.pato">
                        <option value="empty"></option>
                        <option value="true">Certo</option>
                        <option value="false">Errado</option>
                    </select>
                    <label for="item8">Livro</label>
                </div>
                <div class="input-field col s4">
                    <select disabled v-model="data.Tela44.pato2">
                        <option value="empty"></option>
                        <option value="true">Certo</option>
                        <option value="false">Errado</option>
                    </select>
                    <label for="item8">Pato</label>
                </div>
                <div class="input-field col s4">
                    <select disabled v-model="data.Tela44.pato3">
                        <option value="empty"></option>
                        <option value="true">Certo</option>
                        <option value="false">Errado</option>
                    </select>
                    <label for="item8">Mesa</label>
                </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.cavalo">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item9">Sapato</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.cavalo2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item9">Cavalo</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.cavalo3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item9">Boneca</label>
            </div>
        </div>


        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.janela">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item10">Copo</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.janela2">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item10">Janela</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela44.janela3">
                    <option value="empty"></option>
                    <option value="true">Certo</option>
                    <option value="false">Errado</option>
                </select>
                <label for="item10">Estrela</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen048',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela44 = {};
                    return data;
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
