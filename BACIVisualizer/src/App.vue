<template>
    <div class="app">
        <header>
            <nav>
                <div class="nav-wrapper my-top-nav light-green lighten-1">
                    <router-link to="/home" class="brand-logo app-title" active-class="active-title" exact>Visualizador de Questinários BACI</router-link>
                    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                </div>
            </nav>

            <ul id="slide-out" class="side-nav fixed">
                <li class="logo">
                    <router-link to="/home" class="my-logo" active-class="active-figure">
                        <img class="background" src="src/assets/images/logo/logo2.png">
                    </router-link>
                </li>
                <li><router-link to="/list"><i class="material-icons">list</i>Visualizar Questionários</router-link></li>
                <li><router-link to="/upload"><i class="material-icons">file_upload</i>Upload Questionários</router-link></li>
                <li @click="openDownloadModal" class="pointer-cursor"><a><i class="material-icons">file_download</i>Download Questionários</a></li>
                <li><router-link to="/help"><i class="material-icons">help</i>Ajuda</router-link></li>
                <li><div class="divider"></div></li>
                <li @click="openRemoveAllModal" class="pointer-cursor"><a><i class="material-icons">delete_forever</i>Deletar Questionários</a></li>
            </ul>
        </header>

        <main>
            <div class="row main-card">
                <div class="col s12 m12">
                    <div class="card my-card light-green lighten-5">
                        <div class="card-content black-text">
                            <transition name="fade" mode="out-in" appear>
                                <router-view> </router-view>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="page-footer light-green lighten-1">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">UFTM</h5>
                        <p class="grey-text text-lighten-4">Universidade Federal do Triângulo Mineiro</p>
                        <p class="grey-text text-lighten-4">
                            Av.Frei Paulino, 30 - Bairro Abadia <br />
                            CEP: 38025-180 Uberaba/MG <br />
                            Fone: (34) 3700-6000 <br />
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2016 Todos os direitos Reservados
                </div>
            </div>
        </footer>

        <my-confirmation-modal
            identificator="modalRemove"
            title="Notificação de deleção"
            body="Você tem certeza que quer deletar PERMANETEMENTE as informação sobre os pacientes?"
            :affirmativeCallBack="removeAllPatients"/>

        <my-confirmation-modal
            identificator="modalDownload"
            title="Notificação de download"
            body="Você tem certeza que quer fazer o download de toda a informação sobre os pacientes?"
            :affirmativeCallBack="downloadData"/>
    </div>
</template>

<script>
    import X2JS from '../node_modules/x2js/x2js';
    import myConfirmationModal from './components/ModalConfirmation';

    export default {
        name: 'App',
        components: {
            myConfirmationModal,
        },
        computed: {
            patients: {
                get: function() {
                    return this.$store.getters.getAllPatients;
                },
            },
        },
        data: function() {
            return {
                x2js: new X2JS(),
            };
        },
        methods: {
            loadPatients: function() {
                this.$store.dispatch('loadPatients');
            },
            openRemoveAllModal: function() {
                $('#modalRemove').modal('open');
            },
            removeAllPatients: function() {
                this.$store.dispatch('removeAllPatients');
            },
            openDownloadModal: function() {
                $('#modalDownload').modal('open');
            },
            downloadData: function() {
                let xmlObj = '<Patients>';
                let data = this.patients;
                let self = this;

                data.forEach(function(element) {
                    xmlObj += self.x2js.js2xml(element);
                });

                xmlObj += '</Patients>';

                let blob = new Blob([xmlObj], { type: 'text/xml;charset=utf-8;' });
                let link = document.createElement('a');
                link.setAttribute('download', 'pacientes.xml');
                link.href = window.URL.createObjectURL(blob);
                document.body.appendChild(link);

                // wait for the link to be added to the document
                window.requestAnimationFrame(function() {
                    let event = new MouseEvent('click');
                    link.dispatchEvent(event);
                    document.body.removeChild(link);
                });
            },
        },
        mounted: function() {
            $('.button-collapse').sideNav();
            this.loadPatients();
        },
    };
</script>

<style lang="sass" scoped>
.router-link-active
    background-color: rgba(0,0,0,0.05);

.app
    display: flex
    min-height: 100vh
    flex-direction: column

main
    flex: 1 0 auto

.my-top-nav
    height: 152px
    padding-top: 1%
    padding-left: 5%

.my-card
    padding: 2%


.app-title
    margin-top: 1%

.main-card
    margin-top: 2%

.fade-enter-active, .fade-leave-active
  transition: all .2s ease

.fade-enter, .fade-leave-active
  opacity: 0

.my-logo
    min-height: 200px

.pointer-cursor
    cursor: pointer

header, main, footer
    padding-left: 300px

@media only screen and (max-width : 992px)
    header, main, footer
        padding-left: 0

</style>
