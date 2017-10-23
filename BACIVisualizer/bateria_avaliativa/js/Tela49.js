var imagess = [];
imagess[0] = "../images/Memoria/flor.png";
imagess[1] = "../images/Memoria/gato.png";
imagess[2] = "../images/Memoria/vaso.png";
imagess[3] = "../images/Memoria/pincel.png";
imagess[4] = "../images/Memoria/coelho.png";
imagess[5] = "../images/Memoria/violao.png";
imagess[6] = "../images/Memoria/dado.png";
imagess[7] = "../images/Memoria/batom.png";
imagess[8] = "../images/Memoria/prato.png";
imagess[9] = "../images/Memoria/gude.png";

var i = 1;
var begin = 1000;
function renew() {
	document.getElementById("comecar").disabled = true;
	document.getElementById("comecar").innerHTML = 9;
	var interval = setInterval(function()
	{
		if(imagess.length == i){
			document.getElementById("imageId").src = imagess[0];
			i = 1;
			document.getElementById("comecar").disabled = false;
			document.getElementById("comecar").innerHTML = "Começar";
			clearInterval(interval);
		}
		else {
			document.getElementById("comecar").disabled = true;
			var val = 9 - i;
			document.getElementById("comecar").innerHTML = val;
			document.getElementById("imageId").style.visibility = 'visible';
			document.getElementById("imageId").src = imagess[i]; 
			i++;
		}
	},1000);
}

function carregar_dados()
{
	checar_paciente();
	
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


function salvar_sair()
{
	alert('As informacoes foram salvas');
	window.location.href = "paciente.html";
}


function voltar()
{
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela48.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 50)
				json.Paciente.Pacientes[i].TelaAtual = 50;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			form.action = "Tela50.html";
			break;
		}
	}
}
