<template>
    <div class="row">
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.grande">
                    <option value="empty"></option>
                    <option value="grande1">0</option>
                    <option value="grande2">0,5</option>
                    <option value="grande3">1,0</option>
                    <option value="grande4">1,5</option>
                    <option value="grande5">2,0</option>
                </select>
                <label for="disabled">Quadrado grande, organizador da figura</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.menor">
                    <option value="empty"></option>
                    <option value="menor1">0</option>
                    <option value="menor2">0,5</option>
                    <option value="menor3">1,0</option>
                    <option value="menor4">1,5</option>
                    <option value="menor5">2,0</option>
                </select>
                <label for="disabled">Quadrado menor</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.linha">
                    <option value="empty"></option>
                    <option value="linha1">0</option>
                    <option value="linha2">0,5</option>
                    <option value="linha3">1,0</option>
                    <option value="linha4">1,5</option>
                    <option value="linha5">2,0</option>
                </select>
                <label for="disabled">Linha horizontal divisora do quadrado grande</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.retangulo">
                    <option value="empty"></option>
                    <option value="retangulo1">0</option>
                    <option value="retangulo2">0,5</option>
                    <option value="retangulo3">1,0</option>
                    <option value="retangulo4">1,5</option>
                    <option value="retangulo5">2,0</option>
                </select>
                <label for="disabled">Retângulo na metade do quadrado grande</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.quatro">
                    <option value="empty"></option>
                    <option value="quatro1">0</option>
                    <option value="quatro2">0,5</option>
                    <option value="quatro3">1,0</option>
                    <option value="quatro4">1,5</option>
                    <option value="quatro5">2,0</option>
                </select>
                <label for="disabled">Quatro linhas dentro do retângulo</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.seta">
                    <option value="empty"></option>
                    <option value="seta1">0</option>
                    <option value="seta2">0,5</option>
                    <option value="seta3">1,0</option>
                    <option value="seta4">1,5</option>
                    <option value="seta5">2,0</option>
                </select>
                <label for="disabled">Seta a esquerda</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.vertical">
                    <option value="empty"></option>
                    <option value="vertical1">0</option>
                    <option value="vertical2">0,5</option>
                    <option value="vertical3">1,0</option>
                    <option value="vertical4">1,5</option>
                    <option value="vertical5">2,0</option>
                </select>
                <label for="disabled">Linha vertical na metade superior do quadrado, à direita</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.cortando">
                    <option value="empty"></option>
                    <option value="cortando1">0</option>
                    <option value="cortando2">0,5</option>
                    <option value="cortando3">1,0</option>
                    <option value="cortando4">1,5</option>
                    <option value="cortando5">2,0</option>
                </select>
                <label for="disabled">Linha vertical a esquerda, cortando as duas metades do quadrado</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.esquerda">
                    <option value="empty"></option>
                    <option value="esquerda1">0</option>
                    <option value="esquerda2">0,5</option>
                    <option value="esquerda3">1,0</option>
                    <option value="esquerda4">1,5</option>
                    <option value="esquerda5">2,0</option>
                </select>
                <label for="disabled">Dois X sobre a linha vertical a esquerda, cortando as duas metades do quadrado</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.externo">
                    <option value="empty"></option>
                    <option value="externo1">0</option>
                    <option value="externo2">0,5</option>
                    <option value="externo3">1,0</option>
                    <option value="externo4">1,5</option>
                    <option value="externo5">2,0</option>
                </select>
                <label for="disabled">Retângulo externo à esquerda do quadrado grande</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.metade">
                    <option value="empty"></option>
                    <option value="metade1">0</option>
                    <option value="metade2">0,5</option>
                    <option value="metade3">1,0</option>
                    <option value="metade4">1,5</option>
                    <option value="metade5">2,0</option>
                </select>
                <label for="disabled">Linha divisória separando as duas metades do retângulo externo ao quadrado grande</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.z">
                    <option value="empty"></option>
                    <option value="z1">0</option>
                    <option value="z2">0,5</option>
                    <option value="z3">1,0</option>
                    <option value="z4">1,5</option>
                    <option value="z5">2,0</option>
                </select>
                <label for="disabled">Z sobre a linha divisória separando as duas metades do retângulo externo ao quadrado grande</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.circulo">
                    <option value="empty"></option>
                    <option value="circulo1">0</option>
                    <option value="circulo2">0,5</option>
                    <option value="circulo3">1,0</option>
                    <option value="circulo4">1,5</option>
                    <option value="circulo5">2,0</option>
                </select>
                <label for="disabled">Círculo com um ponto dentro do retângulo externo, à esquerda</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.dentro">
                    <option value="empty"></option>
                    <option value="dentro1">0</option>
                    <option value="dentro2">0,5</option>
                    <option value="dentro3">1,0</option>
                    <option value="dentro4">1,5</option>
                    <option value="dentro5">2,0</option>
                </select>
                <label for="disabled">Círculo com dois pontos dentro do retângulo externo, à direita</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.inferior">
                    <option value="empty"></option>
                    <option value="inferior1">0</option>
                    <option value="inferior2">0,5</option>
                    <option value="inferior3">1,0</option>
                    <option value="inferior4">1,5</option>
                    <option value="inferior5">2,0</option>
                </select>
                <label for="disabled">Z inclinado na parte inferior do quadrado, à esquerda</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.quadrado">
                    <option value="empty"></option>
                    <option value="quadrado1">0</option>
                    <option value="quadrado2">0,5</option>
                    <option value="quadrado3">1,0</option>
                    <option value="quadrado4">1,5</option>
                    <option value="quadrado5">2,0</option>
                </select>
                <label for="disabled">Linha horizontal na parte inferior do quadrado grande, que começa na parte inferior e segue para a parte externa</label>
            </div>
        </div>
        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.inicio">
                    <option value="empty"></option>
                    <option value="inicio1">0</option>
                    <option value="inicio2">0,5</option>
                    <option value="inicio3">1,0</option>
                    <option value="inicio4">1,5</option>
                    <option value="inicio5">2,0</option>
                </select>
                <label for="disabled">Linha vertical na parte inferior do quadrado grande, que se inicia no meio e segue até a linha horizontal</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela25.meio">
                    <option value="empty"></option>
                    <option value="meio1">0</option>
                    <option value="meio2">0,5</option>
                    <option value="meio3">1,0</option>
                    <option value="meio4">1,5</option>
                    <option value="meio5">2,0</option>
                </select>
                <label for="disabled">Seta na parte inferior do quadrado,  que se inicia no meio e segue até a parte externa da figura</label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen029',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela25 = {};
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
