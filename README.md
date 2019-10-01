# gerenciador-de-entrada-e-saida-de-materiais-e-manutencoes

Projeto para gerenciamento de entrada e saída de materiais e manutenções

# Subindo ambiente de desenvolvimento

## Configurando o backend

Crie uma cópia do arquivo `.env.example` com o nome `.env` e preencha os parâmetros conforme necessitar.

## Configurando ferramentas

Instale o docker (https://docs.docker.com/install/) e git escolhendo seu sistema operacional

Após o docker ser instalado, clone este projeto, caso não o tenha feito e mude para a branch development

Roda o comando no terminal `docker volume create --name gesmm-postgresql -d local` e em seguida rode na raiz do projeto `docker-compose up --build` (Caso não tenha configurado para o seu docker rodar sem sudo no linux, apenas adicione o sudo antes do comando, ou configure-o corretamente https://docs.docker.com/install/linux/linux-postinstall/).

Caso ocorra algum erro nesta etapa, verifique se não possue uma instância do postgresql rodando internamente na sua máquina, pois ela irá afetar a instalação do keycloak.

Com o ambiente de pé, abra o navegador e acess http://localhost:8080/ e clique em Administration Console.

Utilize as credenciais

- `User:admin`
- `Password: admin`

para efetuar login no keycloak.

Passe o mouse em cima do nome do realm (Master) e selecione Add Realm. No nome do realm coloque `dev` e clique em `Select File` para importar os dados de um realm já existente e selecione o arquivo `dev-realm.json` localizado na pasta `keycloak-seed` deste projeto.

Após isso, efetue uma chamada POST para `http://localhost:8080/auth/realms/dev/protocol/openid-connect/token` utilizando o body como `x-form-urlencoded` passando os seguintes parâmetros

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

Verifique agora se o backend está de pé acessando `http://localhost:3333`. deverá ser mostrado o json {hello: "world"}

## Configurando chave pública e secreta

O keycloak gera chave e pública e secreta que devem ser injetadas no `.env` do backend. Para isso, acesse o keycloak localmente após subir os containers docker em `localhost:8080` utilizando as credencias `admin` e `admin`. Selecione o Realme `Dev` que foi importado anteriormente. Clique na aba keys. Clique em Públic Key na linha do algoritmo `RS256` e copie a string para a variável `KEYCLOAK_PUBLIC_KEY` dentro do arquivo `.env`.

Em seguida, acesse `Clients` no menu lateral esquerdo e clique no cliente `gesmm`. Verifique se o `Access Type` está como `confidential` (Caso não esteja, coloque como `confidential` e salve). Acesse a aba Credentials, selecione `Client Id and Secret` como `Client Authenticator` e clique em `Regenerate Secret`. Copie a string de `Secret` e cole na variável `KEYCLOAK_PUBLIC_KEY` no arquivo `.env`.

Após isso, salve qualquer arquivo `.js` dentro da pasta `app` do backend para que o `nodemon` recarregue a aplicação e tente efetuar login e logout no frontend através de `localhost:3000`. Verifique se não existem logs no console do browser ou do container docker.

# Ferramentas auxiliares a serem instaladas

- VScode (https://code.visualstudio.com/download)

  - Abra o vscode e instale as extensões `prettier`, `eslint`, `vscode-styled-components`, `ES7 React/Redux/GraphQL/React-Native snippets`

- NVM (https://github.com/nvm-sh/nvm#installation-and-update)

  - Após instalado, execute `nvm install 10.16.3`

- Yarn (https://yarnpkg.com/lang/pt-br/docs/install/#debian-stable)
