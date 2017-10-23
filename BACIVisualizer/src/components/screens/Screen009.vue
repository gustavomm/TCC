<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Escala de Depressão Geriátrica de Yesavage em Versão Reduzida (GDS-15)</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex1">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você está satisfeito com a sua vida?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex2">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você deixou muitos de sues interesses e atividades?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex3">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você sente que sua vida está vazia?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex4">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se aborrece com frequencia?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex5">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se sente de bom humor a maior parte do tempo ?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex6">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você tem medo que algum mal vá le acontecer?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex7">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se sente feliz a maior parte do tempo?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex8">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se sente que a sua sitação não tem saída?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex9">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você prefere fica em casa do que sair e fazer coisas nova?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex10">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se sente com mais problemas de memória do que a maioria?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex11">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você acha maravilhoso estar vivo?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex12">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se sente um inútil nas atuais circustâncias?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex13">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você se sente cheio de energia?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex14">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você acha que sua sitação é sem esperanças?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela9.ex15">
                    <option value="empty"></option>
                    <option value="">Não</option>
                    <option value="on">Sim</option>
                </select>
                <label for="disabled">Você sente que a maioria das pessoas está melhor que você?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen009',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela9 = {};
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
