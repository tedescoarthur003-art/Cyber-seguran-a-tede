// ==============================
// CYBERSHIELD - SCRIPT
// ==============================

// ABRIR LOGIN
function abrirLogin() {
  fecharModais();

  const modal = document.getElementById("loginModal");

  if (modal) {
    modal.style.display = "flex";
  }
}

// ABRIR CADASTRO
function abrirCadastro() {
  fecharModais();

  const modal = document.getElementById("cadastroModal");

  if (modal) {
    modal.style.display = "flex";
  }
}

// FECHAR MODAIS
function fecharModais() {
  const login = document.getElementById("loginModal");
  const cadastro = document.getElementById("cadastroModal");

  if (login) {
    login.style.display = "none";
  }

  if (cadastro) {
    cadastro.style.display = "none";
  }
}


// ==============================
// CADASTRO
// ==============================

function cadastrar(event) {
  event.preventDefault();

  const nome = document.getElementById("cadastroNome").value.trim();
  const email = document.getElementById("cadastroEmail").value.trim();
  const senha = document.getElementById("cadastroSenha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  if (senha.length < 6) {
    alert("Sua senha precisa ter pelo menos 6 caracteres.");
    return;
  }

  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    score: 85
  };

  localStorage.setItem("cybershieldUsuario", JSON.stringify(usuario));

  alert("Conta criada com sucesso!");

  fecharModais();

  document.getElementById("cadastroNome").value = "";
  document.getElementById("cadastroEmail").value = "";
  document.getElementById("cadastroSenha").value = "";
}


// ==============================
// LOGIN
// ==============================

function login(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const senha = document.getElementById("loginSenha").value;

  const usuarioSalvo = localStorage.getItem("cybershieldUsuario");

  if (!usuarioSalvo) {
    alert("Nenhuma conta encontrada. Crie uma conta primeiro.");
    return;
  }

  const usuario = JSON.parse(usuarioSalvo);

  if (email === usuario.email && senha === usuario.senha) {
    localStorage.setItem("cybershieldLogado", "true");

    alert("Login realizado com sucesso!");

    fecharModais();

    mostrarUsuario();
  } else {
    alert("E-mail ou senha incorretos.");
  }
}


// ==============================
// MOSTRAR USUÁRIO
// ==============================

function mostrarUsuario() {
  const usuarioSalvo = localStorage.getItem("cybershieldUsuario");

  if (!usuarioSalvo) {
    return;
  }

  const usuario = JSON.parse(usuarioSalvo);

  const loginButton = document.querySelector(".login-btn");

  if (loginButton) {
    loginButton.textContent = usuario.nome;
  }
}


// ==============================
// FECHAR MODAL AO CLICAR FORA
// ==============================

window.addEventListener("click", function(event) {

  const loginModal = document.getElementById("loginModal");
  const cadastroModal = document.getElementById("cadastroModal");

  if (event.target === loginModal) {
    fecharModais();
  }

  if (event.target === cadastroModal) {
    fecharModais();
  }

});


// ==============================
// ESC PARA FECHAR
// ==============================

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    fecharModais();
  }

});


// ==============================
// VERIFICAR USUÁRIO AO ABRIR
// ==============================

document.addEventListener("DOMContentLoaded", function() {

  mostrarUsuario();

});
