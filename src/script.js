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

    // Carregar os usuários existentes do arquivo usuarios.json
    $.getJSON("usuarios.json", function (data) {
      // Verificar se o usuário já está cadastrado
      var usuarioExistente = data.find(function (usuario) {
        return usuario.email === email;
      });

      if (usuarioExistente) {
        alert("O email informado já está cadastrado. Por favor, use outro email.");
        return;
      }

      // Criar objeto de usuário
      var usuario = {
        nome: nome,
        email: email,
        senha: senha
      };

      // Adicionar o novo usuário ao array de usuários existentes
      data.push(usuario);

      // Converter o array atualizado para JSON
      var jsonData = JSON.stringify(data);

      // Gravar os dados atualizados no arquivo usuarios.json
      $.ajax({
        url: "usuarios.json",
        type: "POST",
        data: jsonData,
        contentType: "application/json",
        success: function () {
          alert("Usuário cadastrado com sucesso!");
          // Limpar os campos do formulário após o cadastro
          document.getElementById("nomeCadastro").value = "";
          document.getElementById("emailCadastro").value = "";
          document.getElementById("senhaCadastro").value = "";
          document.getElementById("confirmarSenhaCadastro").value = "";
        },
        error: function () {
          alert("Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.");
        }
      });
    }).fail(function () {
      alert("Ocorreu um erro ao acessar o arquivo usuarios.json. Por favor, tente novamente.");
    });
  }
