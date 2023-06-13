function bntLogar() {
    var nmUsuario = document.getElementById('nome-usuario').value
    window.location.href = "login.html"
}

function irCadastro() {
    window.location.href = "cadastro.html"
}

function voltaPaginaPrincipal() {
    window.location.href = "index.html"
}

function irParaSite() {
    window.open('https://www.youtube.com/watch?v=F4XQO9hc_hs', '_blank');
}

function fazerLogin(e) {
    e.preventDefault();

    const nome = document.getElementById('inp-usuario').value?.trim()
    const senha = document.getElementById('inp-senha').value?.trim()

    if (!nome) {
        alert("Insira um nome de usuário!")
    } else if (!senha) {
        alert("Insira uma senha!")
    } else {
        const usuario = { nome, senha };
        localStorage.setItem('usuario-autenticado', JSON.stringify(usuario));
        window.location.href = "index.html"
    }

}

function fazerCadastro(e) {
    e.preventDefault();
    const nome = document.getElementById('inp-usuario').value?.trim()
    const senha = document.getElementById('inp-senha').value?.trim()
    const data = document.getElementById('inp-data-nascimento').value?.trim()
    const sexos = document.getElementsByName('radio')
    let sexo = null

    sexos.forEach(function(opcao) {
      if (opcao.checked) {
        sexo = opcao.value;
      }
    })

    if (!nome) {
        alert("Insira um nome de usuário!")
    } else if (!senha) {
        alert("Insira uma senha!")
    } else if (!data) {
        alert("Insira uma data!")
    } else if (!sexo) {
        alert("Insira uma sexo!")
    } else {
        const usuario = { nome, senha, data, sexo};
        localStorage.setItem('usuario-autenticado', JSON.stringify(usuario));
        window.location.href = "index.html"
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html"
}

function custom() {
    document.body.style.backgroundColor = 'lightBlue'

}

function normal() {
    document.body.style.backgroundColor = '#182736';
    document.getElementsByTagName('*').style.fontFamily = 'sans-serif,Tahoma, Verdana, Arial';

}

function onLoad() {
    const span = document.getElementById('nome-usuario')
    let usuario = localStorage.getItem('usuario-autenticado');
    if (usuario) {
        usuario = JSON.parse(usuario);
    }
    span.innerText = usuario?.nome || 'Usuário não autenticado'
}
window.addEventListener('load', () => onLoad());