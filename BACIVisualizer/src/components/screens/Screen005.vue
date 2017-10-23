<template>
    <div class="row">
        <div class="row">
            <div class="col s12">
                <h5>Mini-exame do Estado Mental (MEEM)</h5>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <h6>A - Orientação Espaço e Tempo</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4"> <select disabled v-model="data.Tela5.diaSemana">
                    <option value="empty"></option>
                    <option value="semanaNao">Resposta errada</option>
                    <option value="semanaSim">Resposta certa</option>
                </select>
                <label for="disabled">Qual é o dia da semana?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela5.diaMes">
                    <option value="empty"></option>
                    <option value="mesNao">Resposta errada</option>
                    <option value="mesSim">Resposta certa</option>
                </select>
                <label for="disabled">Que dia do mês é hoje?</label>
            </div>
            <div class="input-field col s4">
                <select disabled v-model="data.Tela5.ano">
                    <option value="empty"></option>
                    <option value="anoNao">Resposta errada</option>
                    <option value="anoSim">Resposta certa</option>
                </select>
                <label for="disabled">Em que anos estamos?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <select disabled v-model="data.Tela5.horas">
                    <option value="empty"></option>
                    <option value="horasNao">Resposta errada</option>
                    <option value="horasSim">Resposta certa</option>
                </select>
                <label for="disabled">Sem olhar no relógio, você acha que são que horas agora(aproximadamente)?</label>
            </div>
            <div class="input-field col s6">
                <select disabled v-model="data.Tela5.ondeEstamos">
                    <option value="empty"></option>
                    <option value="ondeNao">Resposta errada</option>
                    <option value="ondeSim">Resposta certa</option>
                </select>
                <label for="disabled">Você sabe onde estamos?</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s3">
                <select disabled v-model="data.Tela5.local">
                    <option value="empty"></option>
                    <option value="localNao">Resposta errada</option>
                    <option value="localSim">Resposta certa</option>
                </select>
                <label for="disabled">Que local é esse?</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela5.instituicao">
                    <option value="empty"></option>
                    <option value="instituicaoNao">Resposta errada</option>
                    <option value="instituicaoSim">Resposta certa</option>
                </select>
                <label for="disabled">Instituição (casa, rua)?</label>
            </div>
            <div class="input-field col s2">
                <select disabled v-model="data.Tela5.bairro">
                    <option value="empty"></option>
                    <option value="bairroNao">Resposta errada</option>
                    <option value="bairroSim">Resposta certa</option>
                </select>
                <label for="disabled">Em que Bairro?</label>
            </div>
            <div class="input-field col s2">
                <select disabled v-model="data.Tela5.cidade">
                    <option value="empty"></option>
                    <option value="cidadeNao">Resposta errada</option>
                    <option value="cidadeSim">Resposta certa</option>
                </select>
                <label for="disabled">Em que Cidade?</label>
            </div>
            <div class="input-field col s2">
                <select disabled v-model="data.Tela5.estado">
                    <option value="empty"></option>
                    <option value="estadoNao">Resposta errada</option>
                    <option value="estadoSim">Resposta certa</option>
                </select>
                <label for="disabled">Em que Estado</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <h6>B - Registros</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <select disabled v-model="data.Tela5.totalAcerto">
                    <option value="ac0">0</option>
                    <option value="ac1">1</option>
                    <option value="ac2">2</option>
                    <option value="ac3">3</option>
                </select>
                <label for="disabled">Total acertos</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <h6>C - Ateção e cálculo</h6>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s3">
                <select disabled v-model="data.Tela5.calc1">
                    <option value="empty"></option>
                    <option value="calc1Nao">Resposta errada</option>
                    <option value="calc1Sim">Resposta certa</option>
                </select>
                <label for="disabled">100 - 7 = 93</label>
            </div>
            <div class="input-field col s3">
                <select disabled v-model="data.Tela5.calc2">
                    <option value="empty"></option>
                    <option value="calc2Nao">Resposta errada</option>
                    <option value="calc2Sim">Resposta certa</option>
                </select>
                <label for="disabled">93 - 7 = 86</label>
            </div>
            <div class="input-field col s2">
                <select disabled v-model="data.Tela5.calc3">
                    <option value="empty"></option>
                    <option value="calc3Nao">Resposta errada</option>
                    <option value="calc3Sim">Resposta certa</option>
                </select>
                <label for="disabled">86 - 7 = 79</label>
            </div>
            <div class="input-field col s2">
                <select disabled v-model="data.Tela5.calc4">
                    <option value="empty"></option>
                    <option value="calc4Nao">Resposta errada</option>
                    <option value="calc4Sim">Resposta certa</option>
                </select>
                <label for="disabled">79 -  7 = 72</label>
            </div>
            <div class="input-field col s2">
                <select disabled v-model="data.Tela5.calc5">
                    <option value="empty"></option>
                    <option value="calc5Nao">Resposta errada</option>
                    <option value="calc5Sim">Resposta certa</option>
                </select>
                <label for="disabled">72 - 7 = 65</label>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <h6>D - Lembraças (memória de evocação)</h6>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <select disabled v-model="data.Tela5.memoria">
                        <option value="mem0">0</option>
                        <option value="mem1">1</option>
                        <option value="mem2">2</option>
                        <option value="mem3">3</option>
                    </select>
                    <label for="disabled">Total acertos</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <h6>E - Linguagem</h6>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <select disabled v-model="data.Tela5.lapis">
                        <option value="empty"></option>
                        <option value="lapisNao">Resposta errada</option>
                        <option value="lapisSim">Resposta certa</option>
                    </select>
                    <label for="disabled">Apontando para um lápis, pergunte o que é o objeto</label>
                </div>
                <div class="input-field col s6">
                    <select disabled v-model="data.Tela5.relogio">
                        <option value="empty"></option>
                        <option value="relogioNao">Resposta errada</option>
                        <option value="relogioSim">Resposta certa</option>
                    </select>
                    <label for="disabled">Apontando para um relógio, pergunte o que é o objeto</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <select disabled v-model="data.Tela5.frase">
                        <option value="empty"></option>
                        <option value="fraseNao">Repetiu errado / não repetiu</option>
                        <option value="fraseSim">Repetiu corretamente</option>
                    </select>
                    <label for="disabled">Peça ao avaliando que repita a frase "nem aqui, nem ali, nem lá"</label>
                </div>

                <div class="input-field col s6">
                    <select disabled v-model="data.Tela5.papel">
                        <option value="pa0">0</option>
                        <option value="pa1">1</option>
                        <option value="pa2">2</option>
                        <option value="pa3">3</option>
                    </select>

                    <label for="disabled">Pegue o papel com a mão direita. Dobre o papel ao meio. Coloque o papel na mesa.</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Total acertos</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação total do MEEM</label>
                </div>
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação na Orientação Espaço e Tempo</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação nos Registros</label>
                </div>
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação Atenção e Cálculo</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                    <input disabled value="" type="text" class="validate">
                    <label for="disabled">Pontuação na Lembraças(memória e evocação)</label>
                </div>
                <div class="input-field col s6">
                    <input disabled v-model="data.Tela5.linguagem" type="text" class="validate">
                    <label for="disabled">Pontuação na Linguagem</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen005',
        props: {
            data: {
                type: Object,
                default: function() {
                    let data = {};
                    data.Tela5 = {};
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
