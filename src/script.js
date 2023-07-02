function CriaPDF() {
    var minhaTabela = document.getElementById('tabela').innerHTML;
    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "h1 {font: 30px Calibri;display: flex; justify-content: center; align-items: center;}"
    style = style + "</style>";
    // CRIA UM OBJETO WINDOW
    var win = window.open('height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<br><br><h1>Relatórios</h1>');   // <title> CABEÇALHO DO PDF.
    win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write('</body></html>');
    win.document.close(); 	                                         // FECHA A JANELA
    win.print();                                                         
  }

function entrar() {
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  // Verifica se o usuário e senha correspondem aos valores esperados
  if (email === "admin" && senha === "admin") {
    // Redireciona para a página config.html
    window.location.href = 'config.html';
  } else {
    // Faz a requisição para obter os usuários
    fetch('https://pco-si-2023-1-p1-proj-web-t1-grupo-1-quitay.vercel.app/usuarios.json')
      .then(response => response.json())
      .then(data => {
        var usuarios = data.usuarios;
        var usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
          alert('Usuário autenticado com sucesso!');
          // Redireciona para a próxima página após autenticação bem-sucedida
          window.location.href = 'index.html';
        } else {
          alert('Email ou senha inválidos.');
        }
      })
      .catch(error => {
        console.log('Ocorreu um erro ao realizar a requisição:', error);
      });
  }
}


function cadastrar() {
  var nome = document.getElementById("nomeCadastro").value;
  var email = document.getElementById("emailCadastro").value;
  var senha = document.getElementById("senhaCadastro").value;
  var confirmarSenha = document.getElementById("confirmarSenhaCadastro").value;

  // Verificar se todos os campos foram preenchidos
  if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Verificar se as senhas coincidem
  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem. Por favor, digite novamente.");
    return;
  }

  // Objeto de dados do usuário
  var usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  // Fazer a requisição POST para cadastrar o usuário
  fetch("/api/cadastrarUsuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(usuario)
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      // Limpar os campos do formulário após o cadastro
      document.getElementById("nomeCadastro").value = "";
      document.getElementById("emailCadastro").value = "";
      document.getElementById("senhaCadastro").value = "";
      document.getElementById("confirmarSenhaCadastro").value = "";
    })
    .catch(error => {
      console.error("Ocorreu um erro ao cadastrar o usuário:", error);
    });
}
