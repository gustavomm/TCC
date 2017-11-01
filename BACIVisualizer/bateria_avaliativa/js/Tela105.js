
function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela105"))
			{
				primera_vez(json, i, json.Paciente.Pacientes[i].Nome);
			}
			else{
				carregar_paciente(json, i);
			}
		}
	}
}


function checar_paciente() {
	if(localStorage.getItem("PacienteSelecionado") == null)
	{
		alert("Selecione um paciente");
		window.location.href = "paciente.html";
		return false;
	
	}
	else{
		
		sessionStorage.setItem("PacienteSelecionado", localStorage.getItem('PacienteSelecionado'));
		localStorage.removeItem("PacienteSelecionado");	
		paciente = sessionStorage.getItem("PacienteSelecionado");		
		document.getElementById("nome").innerHTML = paciente;
		return true;
	}
}

function primera_vez(json, i, nome)
{
	json.Paciente.Pacientes[i].Tela105 = {};
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela105).forEach(function(nome) {		
		document.getElementById(nome).checked = json.Paciente.Pacientes[i].Tela105[nome];
	});
	
}

function salvar_sair()
{
	salvar();
	alert('As informacoes foram salvas');
	window.location.href = "paciente.html";n
}
function salvar()
{
	var pontos = parseInt(document.getElementById('pontuacao').value);
	json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			var allChecks = document.getElementsByTagName('input');
			for(j = 0; j < allChecks.length; j++)
			{
				if(allChecks[j].type == 'text')
				{
					json.Paciente.Pacientes[i].Tela105[allChecks[j].name] = pontos;
				}
			}
		}
	}

	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
	
}

function voltar()
{
		salvar();
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela104.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 105)
				json.Paciente.Pacientes[i].TelaAtual = 105;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela105.html";
			break;
		}
	}
}

function revelaform(){
	var forms = document.getElementById('form');
	forms.style.visibility = "visible";
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==0 && m==0){
  	document.getElementById('timer').innerHTML =
    m + ":" + s;
  	return;
  }
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function acerto(){
	var pontos = parseInt(document.getElementById('pontuacao').value);
	pontos = pontos + 1;
	document.getElementById('pontuacao').value = pontos;
}

function erro(){
	var pontos = parseInt(document.getElementById('pontuacao').value);
	pontos = pontos - 1;
	if(pontos < 0){
		pontos = 0;
	}
	document.getElementById('pontuacao').value = pontos;
}

function geraXML(){
	salvar();
	var x2js = new X2JS();
	var json = JSON.parse(localStorage.getItem('Pacientes'));

	var xmlAsStr = x2js.json2xml_str( json );
	

	var newwindow = window.open();
                      newwindow.open('data:text/xml;charset=utf-8,<?xml version="1.0" encoding="UTF-8"?>' + xmlAsStr );
                      newwindow.write('data:text/xml;charset=utf-8,<?xml version="1.0" encoding="UTF-8"?>' + xmlAsStr );
                      newwindow.close();
}