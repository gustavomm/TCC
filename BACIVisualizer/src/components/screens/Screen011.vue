<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Triagem para queixa de memória</h5>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.frequencia">
                    <option value="empty"></option>
                    <option value="segundo1">Não</option>
                    <option value="primeiro1">Sim</option>
                </select>
                <label for="disabled">Com frequência você decide fazer alguma coisa em poucos minutos e depois se esquece de faze-la</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.reconhecer">
                    <option value="empty"></option>
                    <option value="segundo2">Não</option>
                    <option value="primeiro2">Sim</option>
                </select>
                <label for="disabled">Você tem dificuldade para reconhecer um lugar que você já visiou antes?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.atividade">
                    <option value="empty"></option>
                    <option value="segundo3">Não</option>
                    <option value="primeiro3">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de uma atividade antes de terminar. Como buscar um remédio e esquecer de tomar, eseuecer panelas no fogo, etc</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.acabaram">
                    <option value="empty"></option>
                    <option value="segundo4">Não</option>
                    <option value="primeiro4">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece alguma coisa que acabaram de te contar?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.anotar">
                    <option value="empty"></option>
                    <option value="segundo5">Não</option>
                    <option value="primeiro5">Sim</option>
                </select>
                <label for="disabled">Com frequência você precisa anotar seus compromissos em agendas ou celular para se lembrar deles?</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.compromisso">
                    <option value="empty"></option>
                    <option value="segundo6">Não</option>
                    <option value="primeiro6">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de compromissos se algumém não te lembrar?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.nomepessoas">
                    <option value="empty"></option>
                    <option value="segundo7">Não</option>
                    <option value="primeiro7">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de nomes de pessoas conhecidas?</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.rostopessoas">
                    <option value="empty"></option>
                    <option value="segundo8">Não</option>
                    <option value="primeiro8">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esqeuce dos rostos/aparência de pessoas conhecidas?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.recentemente">
                    <option value="empty"></option>
                    <option value="segundo9">Não</option>
                    <option value="primeiro9">Sim</option>
                </select>
                <label for="disabled">Com frequência você se eseuce de cosias que aconteceteram recentemente(últimos dias)?</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.dezanos">
                    <option value="empty"></option>
                    <option value="segundo10">Não</option>
                    <option value="primeiro10">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esquece de coisas que aconteceram há mais tempo(mais de 10 anos)?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.historia">
                    <option value="empty"></option>
                    <option value="segundo11">Não</option>
                    <option value="primeiro11">Sim</option>
                </select>
                <label for="disabled">Com frequência você repete a mesma história para a mesma pessoa, sem perceber que já a contou antes?</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.objeto">
                    <option value="empty"></option>
                    <option value="segundo12">Não</option>
                    <option value="primeiro12">Sim</option>
                </select>
                <label for="disabled">Com frequência você esquece o lugar onde recém coilocou alguma coisa, comouma revista ou óuculos?</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.recado">
                    <option value="empty"></option>
                    <option value="segundo13">Não</option>
                    <option value="primeiro13">Sim</option>
                </select>
                <label for="disabled">Com frequência você se esqeuce de dar um recado que le pediram para transmitir?</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela11.memoria">
                    <option value="empty"></option>
                    <option value="segundo14">Não</option>
                    <option value="primeiro14">Sim</option>
                </select>
                <label for="disabled">Com frequência você acah que a sua memória é ruim?</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen011',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela11 = {};
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
