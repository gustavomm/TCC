function carregar_dados() {
	valida_login();
	verificar_psicologo();
}

function verificar_psicologo()
{
	var json = JSON.parse(localStorage.getItem("Pacientes"));
		
	if(json == null)
	{
		login();
	}
	else{
		show_gerenciamento();
		carregar_pacientes();
	}
}

function login()
{
   	document.getElementById('psicologoNome').style.display = "none";
   	document.getElementById('selectPaciente').style.display = "none";
   	document.getElementById('selectbutton').style.display = "none";
   	document.getElementById('nomeInsert').style.display = "none";
   	document.getElementById('createButton').style.display = "none";
   	document.getElementById('remover').style.display = "none";
}

function show_gerenciamento()
{
		document.getElementById('nome').style.display = "none";
		document.getElementById('cadastrar').style.display = "none";
		document.getElementById('psicologoNome').style.display = "block";
		document.getElementById('selectPaciente').style.display = "block";
		document.getElementById('selectbutton').style.display = "block";
		document.getElementById('nomeInsert').style.display = "block";
		document.getElementById('createButton').style.display = "block";
		document.getElementById('remover').style.display = "block";
		
		document.getElementById('psicologoNome').innerHTML = localStorage.getItem("Psicologo"); 
		document.getElementById('selectPaciente').className = "popup";
		document.getElementById('selectbutton').className = "popup";
		document.getElementById('nomeInsert').className = "popup";
		document.getElementById('createButton').className = "popup";
		document.getElementById('remover').className = "popup";
}

function cadastrarPsicologo()
{
	var nome = document.getElementById('nome').value;
	if(nome == null || nome == "")
	{
		alert("Insira um nome");
	}
	else{
		criar_json();
		show_gerenciamento();
	}
}

function criar_json() {
	var initial = '{"Paciente" : {"Pacientes" : []}}';
	localStorage.setItem("Psicologo", document.getElementById('nome').value);
	localStorage.setItem("Pacientes", initial);
}

function carregar_pacientes() 
{
    var select = document.getElementById("selectPaciente");
    select.length = 0;

    if (localStorage.getItem("Pacientes") !== null) {

        var jsonObj = JSON.parse(localStorage.getItem("Pacientes"));
        for (i = 0; i < jsonObj.Paciente.Pacientes.length ; i++) {
            var opcao = document.createElement("option");
            opcao.text = jsonObj.Paciente.Pacientes[i].Nome;
            select.add(opcao);
        }
    }
}


function criar_paciente()
{
	if(document.getElementById("nomeInsert").value == "")
	{
		alert("Insira um nome");
		return;
	}
	else
	{
		var json = JSON.parse(localStorage.getItem("Pacientes"));
		for(i = 0; i < json.Paciente.Pacientes.length; i++)
		{
			if(json.Paciente.Pacientes[i].Nome == document.getElementById("nomeInsert").value)
			{
				alert("Paciente já exite");
				return;
			}
		}
		
		json.Paciente.Pacientes.push({"Nome" : document.getElementById("nomeInsert").value});
		json.Paciente.Pacientes[json.Paciente.Pacientes.length - 1].TelaAtual = 2;
		json.Paciente.Pacientes[json.Paciente.Pacientes.length - 1].Flag = 0;
		json.Paciente.Pacientes[json.Paciente.Pacientes.length - 1].Psicologo = localStorage.getItem("Psicologo");
		
		var ls = JSON.stringify(json);	
		localStorage.setItem("Pacientes", ls);
		localStorage.setItem("PacienteSelecionado", json.Paciente.Pacientes[json.Paciente.Pacientes.length - 1].Nome);
	}
	window.location.href = "Tela2.html";
}

function remover() {
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == document.getElementById("selectPaciente").value)
		{
			json.Paciente.Pacientes.splice(i,1);
		}
	}
	var ls = JSON.stringify(json);	
	localStorage.setItem("Pacientes", ls);
    carregar_pacientes();
}


function selecionar() {
    var select = document.getElementById("selectPaciente");
    var token = select.options[select.selectedIndex].value;
	
    var obj = JSON.parse(localStorage.getItem("Pacientes"));
    for (i = 0; i < obj.Paciente.Pacientes.length; i++) {
        if (obj.Paciente.Pacientes[i].Nome == token) {
            localStorage.setItem("PacienteSelecionado", token);
            window.location.href = "Tela" + obj.Paciente.Pacientes[i].TelaAtual + ".html";
            break;
        }
    }
}

function checar_login()
{
	if(localStorage.getItem("Login") != null)
		return 0;
	else if (localStorage.getItem("Login_temporario") != null)
		return 1;
	else
		return 2;
}

function valida_login()
{
	if(sessionStorage.getItem("cpfPsicologo") == null)
	{
		alert("Faça Login");
		window.location.href = "../login.html";
		return false;
	
	}
}
