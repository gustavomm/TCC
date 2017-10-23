<template>
    <div>
        <span class="card-title" >Upload</span>
        <hr>
        <br />
        <div @dragleave="onLeave"
            @dragover="onOver"
            @drop="upload"
            :class="{ 'dragover': isOver }"
            class="drop-zone light-green lighten-4 z-depth-1 valign-wrapper">
            <div class="drop-zone-message valign">
                <transition name="bar" mode="out-in">
                    <div v-if="!startedUpload" key="instruction">
                        <div>
                           <i class="large material-icons">file_upload</i>
                        </div>
                        <input @change="upload" id="file" class="input-file" type="file" name="files[]" multiple />
                        <label for="file">
                            <h5>
                                <b @mouseenter="onOver" @mouseleave="onLeave" class="click">Clique</b>
                                <span v-if="isAdvancedUpload"> ou <b>arraste</b> </span>
                                para iniciar o upload.
                            </h5>
                            <h6>
                                Somente arquivos xml são permitidos.
                            </h6>
                        </label>
                        <h6 v-if="loadedFile > 0">
                            Foi feito o upload de {{ this.totalFile }} questionário(s).
                        </h6>
                    </div>
                    <div v-else class="row my-row" key="progress-bar">
                        <div class="col s8 offset-s2">
                            <h5>
                                Carregado {{ loadedFile }} de {{ totalFile }}
                            </h5>
                            <div class="progress">
                                <div class="determinate" :style="{ width: loadProgress }"></div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import X2JS from '../../node_modules/x2js/x2js';

    export default {
        name: 'myUpload',
        data: function() {
            return {
                isOver: false,
                startedUpload: false,
                loadProgress: '0%',
                totalFile: 0,
                loadedFile: 0,
                x2js: new X2JS(),
            };
        },
        methods: {
            addPatient: function(patient) {
                this.$store.dispatch('addPatient', patient);
            },
            persistAllPatients: function() {
                this.$store.dispatch('persistAllPatients');
            },
            isAdvancedUpload: function() {
                if (window.File && window.FileReader &&
                    window.FileList && window.Blob) {
                    return true;
                }

                // alert('Por favor utilize um navegador mais recente!');
                return false;
            },
            onOver: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.isOver = true;
            },
            onLeave: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.isOver = false;
            },
            upload: function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.isOver = false;

                let files = [];

                if (event.dataTransfer !== undefined)
                    files = event.dataTransfer.files;
                else if (event.target !== undefined)
                    files = event.target.files;

                this.totalFile = files.length;
                this.loadedFile = 0;

                if (files.length > 0)
                    this.startedUpload = true;

                for (let i = 0; i < files.length; i++) {
                    let file = files[i];
                    let reader = new FileReader();

                    reader.onerror = this.errorHandler;
                    reader.onload = this.loadFile;

                    if (!file.type.match('xml.*')) {
                        Materialize.toast(file.name + ' não é um arquivo XML!', 5000);
                        this.loadedFile = 0;
                        let self = this;
                        setTimeout(function() {
                            self.startedUpload = false;
                        }, 1000);
                        break;
                    }

                    reader.readAsText(file);
                }
            },
            loadFile: function(event) {
                // Process the file.
                let contents = event.target.result;
                let patients = this.x2js.xml2js(contents);
                let self = this;

                if (patients.Paciente.Pacientes.lengh != undefined) {
                    patients.Paciente.Pacientes.forEach(function(element) {
                        self.addPatient(element);
                    });
                } else {
                    self.addPatient(patients.Paciente.Pacientes);
                }

                let prct = Math.round((this.loadedFile + 1) / this.totalFile) * 100;
                this.loadProgress = prct + '%';
                this.onLoadEndHandler();
            },
            errorHandler: function(evnt) {
                Materialize.toast('Algum erro inesperado ocorreu ao fazer o upload do arquivo!');
                this.onLoadEndHandler();
            },
            onLoadEndHandler: function() {
                this.loadedFile++;

                if (this.loadedFile == this.totalFile) {
                    // Delay the transition.
                    let self = this;
                    setTimeout(function() {
                        self.startedUpload = false;
                        self.persistAllPatients();
                    }, 1000);
                }
            },
        },
    };
</script>

<style lang="sass" scoped>
.input-file
    display: none

.drop-zone
    min-height: 275px
    margin: 0 5%
    text-align: center
    color: #bbb
    -webkit-transition: all .4s
    transition: all .4s

.drop-zone-message
    min-width: 100%

.dragover
    background: #c5e1a5 !important
    box-shadow: 0 12px 15px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19) !important

.click
    cursor: pointer
    -webkit-transition: all .4s
    transition: all .4s

.my-row
    margin-bottom: 0

.bar-enter-active, .bar-leave-active
  transition: opacity .4s

.bar-enter, .bar-leave-active
  opacity: 0

</style>
