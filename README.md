# gerenciador-de-entrada-e-saida-de-materiais-e-manutencoes

Projeto para gerenciamento de entrada e saída de materiais e manutenções

# Subindo ambiente de desenvolvimento

Instale o docker (https://docs.docker.com/install/) e git escolhendo seu sistema operacional

Após o docker ser instalado, clone este projeto, caso não o tenha feito e mude para a branch development

Roda o comando `docker-compose up --build` na raiz do projeto (Caso não tenha configurado para o seu docker rodar sem sudo no linux, apenas adicione o sudo antes do comando, ou configure-o corretamente https://docs.docker.com/install/linux/linux-postinstall/).

Caso ocorra algum erro nesta etapa, verifique se não possue uma instância do postgresql rodando internamente na sua máquina, pois ela irá afetar a instalação do keycloak.

Com o ambiente de pé, abra o navegador e acess http://localhost:8080/ e clique em Administration Console.

Utilize as credenciais

- `User:admin`
- `Password: admin`

para efetuar login no keycloak.

Passe o mouse em cima do nome do realm (Master) e selecione Add Realm. No nome do realm coloque `dev` e clique em `Select File` para importar os dados de um realm já existente e selecione o arquivo `dev-realm.json` localizado na pasta `keycloak-seed` deste projeto.

Após isso, efetue uma chamada GET para `http://localhost:8080/auth/realms/dev/protocol/openid-connect/token` utilizando o body como `x-form-urlencoded` passando os seguintes parâmetros

- client_id: gesmm
- username: teste
- password: teste
- grant_type: password

E verifique se na resposta estão presentes os campos

- access_token
- expires_in
- refresh_expires_in
- refresh_token
- token_type
- not-before-policy
- session_state
- scope

Após isso, está garantido que o keycloak já está configurado e funcionando.
