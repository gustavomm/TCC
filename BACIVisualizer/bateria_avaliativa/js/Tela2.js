var login;
var paciente;

function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].Flag == 0)
			{
				novo_paciente(json, i, json.Paciente.Pacientes[i].Nome);
				document.getElementById('nomeAvaliado').value = json.Paciente.Pacientes[i].Nome;
			}
			else{
				carregar_paciente(json, i ,sessionStorage.getItem("PacienteSelecionado"));
				calcular();
			}
		}
	}
}

function novo_paciente(json, i, nome)
{
	json.Paciente.Pacientes[i].Tela2 = {};
	json.Paciente.Pacientes[i].Tela2.dataAplicacao = "";
	json.Paciente.Pacientes[i].Tela2.nomeAvaliado = nome;
	json.Paciente.Pacientes[i].Tela2.dataNascimento = "";
	json.Paciente.Pacientes[i].Tela2.idade = "";
	json.Paciente.Pacientes[i].Tela2.lateralidade = "";
	json.Paciente.Pacientes[i].Tela2.escolaridade = "";
	json.Paciente.Pacientes[i].Tela2.trabalho = "";
	json.Paciente.Pacientes[i].Tela2.trabalhoAtual = "";
	json.Paciente.Pacientes[i].Tela2.naturalidade = "";
	json.Paciente.Pacientes[i].Tela2.sexo = "";
	json.Paciente.Pacientes[i].Tela2.limitacaoCorporal = "";
	json.Paciente.Pacientes[i].Tela2.problemaVisual = "";
	json.Paciente.Pacientes[i].Flag = 1;
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 3;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			
			salvar();
			form.action = "../Telas/Tela3.html";
			break;
		}
	}
}

function calcular() {
    var idade = document.getElementById("dataNascimento");

    var today = new Date();
    var birthDate = new Date(document.getElementById("dataNascimento").value);
    var age = today.getFullYear() - birthDate.getFullYear();

    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("idade").value = age;
}

function salvar_sair()
{
	salvar();
	alert('As informacoes foram salvas');
	window.location.href = "paciente.html";
}
function salvar()
{
	json = JSON.parse(localStorage.getItem("Pacientes"));

	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].Tela2.dataAplicacao = document.getElementById("dataAplicacao").value;
			json.Paciente.Pacientes[i].Tela2.nomeAvaliado = document.getElementById("nomeAvaliado").value;
			json.Paciente.Pacientes[i].Tela2.dataNascimento = document.getElementById("dataNascimento").value;
			json.Paciente.Pacientes[i].Tela2.idade = document.getElementById("idade").value;
			json.Paciente.Pacientes[i].Tela2.trabalho = document.getElementById("trabalho").value;
			json.Paciente.Pacientes[i].Tela2.naturalidade = document.getElementById("naturalidade").value;
				
			var allRadio = document.getElementsByTagName('input');
			for(j = 0; j < allRadio.length; j++)
			{
				if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
				{
					json.Paciente.Pacientes[i].Tela2[allRadio[j].name] = allRadio[j].value;
				}
			}
		}
	}
	
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}


function carregar_paciente(json, i, nome) 
{
	var allRadio = document.getElementsByTagName('input');
	for(j = 0; j < allRadio.length; j++)
	{
		if(allRadio[j].type == 'radio' && json.Paciente.Pacientes[i].Tela2[allRadio[j].name] != "")
		{
			document.getElementById(json.Paciente.Pacientes[i].Tela2[allRadio[j].name]).checked = true;
		}
	}
	
	document.getElementById("dataAplicacao").value = json.Paciente.Pacientes[i].Tela2.dataAplicacao;
	document.getElementById("nomeAvaliado").value = json.Paciente.Pacientes[i].Tela2.nomeAvaliado;
	document.getElementById("dataNascimento").value = json.Paciente.Pacientes[i].Tela2.dataNascimento;
	document.getElementById("naturalidade").value = json.Paciente.Pacientes[i].Tela2.naturalidade;
	document.getElementById("trabalho").value = json.Paciente.Pacientes[i].Tela2.trabalho;
}

function checar_login()
{
	if(localStorage.getItem("Login") != null)
	{	
		return 0;
	}
	else if (localStorage.getItem("Login_temporario") != null)
	{	
		
		sessionStorage.setItem("Login_temporario", localStorage.getItem("Login_temporario"));
        localStorage.removeItem("Login_temporario");
		return 1;
	}
	else
	{
	
		alert("Faca o login");
		window.location.href = "login.html";     
		return 2;
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
