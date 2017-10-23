<template>
    <div>
        <span class="card-title" >Bem Vindo!</span>
        <hr>
        <br />
        <p>Esse site tem como objetivo facilitar a visualização dos questionários aplicados pelo psicologos.</p>
        <br />
        <p>Como utilizar o site:</p>
        <ol>
            <li>
                Primeiramente você deverá fazer o upload dos questionarios.
                <ul class="child-list">
                    <li>Para isso você ira clicar em "Upload Questionários"</li>
                    <li>Depois você poderá selecionar todos os arquivos e arrasta-los para a página aberta.</li>
                </ul>
            </li>

            <li>
                Depois você poderá clicar em "Visualizar Questionários"
                <ul class="child-list">
                    <li>Com isso será aberta uma lista de todos os questionários.</li>
                    <li>Clicando duas vezes em um item irá abrir o questionário do paciente.</li>
                    <li>Você poderá também realizar buscas na barra de pesquisa.</li>
                </ul>
            </li>

            <li>Caso você queira também podéra exportar todos os questionários em um único arquivo clicando em "Download Questionários"</li>

            <li>Você poderá limpar os questionários e começar novamente, para isso basta clicar em "Deletar Questionários"</li>
        </ol>
        <p>Caso você queira ver o questionário clique <router-link to="/questionnaire">AQUI</router-link>, ou em ajuda no menu ao lado.</p>
    </div>
</template>

<script>
    export default {
        name: 'myHome',
    };
</script>

<style lang="sass" scoped>
.child-list
    padding-left: 5%
</style>
