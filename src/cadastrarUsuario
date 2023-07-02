const fs = require('fs');

module.exports = async (req, res) => {
  try {
    // Lê o conteúdo do arquivo usuarios.json
    const usuariosData = fs.readFileSync('usuarios.json', 'utf8');
    const usuarios = JSON.parse(usuariosData);

    // Obtém os dados do novo usuário do corpo da requisição
    const { nome, email, senha } = req.body;

    // Verifica se o usuário já está cadastrado pelo email
    const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
    if (usuarioExistente) {
      return res.status(400).json({ message: 'O email informado já está cadastrado. Por favor, use outro email.' });
    }

    // Gera um ID único para o novo usuário
    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      senha
    };

    // Adiciona o novo usuário ao array de usuários
    usuarios.push(novoUsuario);

    // Converte o array atualizado para JSON
    const usuariosAtualizados = JSON.stringify({ usuarios });

    // Grava os dados atualizados no arquivo usuarios.json
    fs.writeFileSync('usuarios.json', usuariosAtualizados, 'utf8');

    // Retorna uma resposta de sucesso
    res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Ocorreu um erro ao cadastrar o usuário:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.' });
  }
};
