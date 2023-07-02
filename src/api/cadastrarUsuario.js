
const fs = require("fs");

module.exports = (req, res) => {
  if (req.method === "POST") {
    const usuario = req.body;

    // Ler o arquivo usuarios.json
    fs.readFile("usuarios.json", "utf8", (err, data) => {
      if (err) {
        console.error("Ocorreu um erro ao ler o arquivo usuarios.json:", err);
        res.status(500).json({ message: "Erro ao cadastrar o usuário." });
        return;
      }

      try {
        // Converter o conteúdo do arquivo para objeto
        const usuarios = JSON.parse(data);

        // Verificar se o usuário já está cadastrado
        const usuarioExistente = usuarios.find(u => u.email === usuario.email);
        if (usuarioExistente) {
          res.status(400).json({ message: "O email informado já está cadastrado. Por favor, use outro email." });
          return;
        }

        // Atribuir um ID ao novo usuário (pode ser um número sequencial ou algum outro critério)
        const novoUsuario = {
          id: usuarios.length + 1,
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha
        };

        // Adicionar o novo usuário ao array de usuários
        usuarios.push(novoUsuario);

        // Converter o array atualizado para JSON
        const jsonData = JSON.stringify({ usuarios });

        // Gravar os dados atualizados no arquivo usuarios.json
        fs.writeFile("usuarios.json", jsonData, "utf8", err => {
          if (err) {
            console.error("Ocorreu um erro ao gravar os dados no arquivo usuarios.json:", err);
res.status(500).json({ message: "Erro ao cadastrar o usuário." });
} else {
res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
}
});
} catch (error) {
console.error("Ocorreu um erro ao processar o arquivo usuarios.json:", error);
res.status(500).json({ message: "Erro ao cadastrar o usuário." });
}
});
} else {
res.status(405).json({ message: "Método não permitido." });
}
};
