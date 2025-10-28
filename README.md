# Viceri

Este repositório foi criado para para fazer a requisição de login.
Os dados dos usuários são mockados:

Para fazer login, utilize os dados da pasta utils/users.list

```bash
   const USERS_LIST = [
    {
        name: 'Kaio Jesus',
        email: 'kaiojesus@gmail.com',
        username: 'kaio',
        password: '123456789',
    },
    {
        name: 'Kevin Jesus',
        email: 'kevinjesus@gmail.com',
        username: 'kevin',
        password: '123456789',
    },
    {
        name: 'Kauã Jesus',
        email: 'kauajesus@gmail.com',
        username: 'Kaua',
        password: '123456789',
    },
]
```

## 🚀 Como executar o projeto backend

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Git](https://git-scm.com/)

### Instalação e execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/KaioJesus/KaioJesus/viceri-seidor-svc.git
   ```

2. **Entre no diretório do projeto**
   ```bash
   cd viceri-core-svc
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

4. **Execute a aplicação em modo de desenvolvimento**
   ```bash
   npm run start:dev
   ```

5. **Acesse a aplicação**
   
   A aplicação estará rodando em: `http://localhost:3000` 

## 📝 Scripts disponíveis

- `npm run start:dev` - Executa a aplicação em modo de desenvolvimento
- `npm test` - Executa os testes

## 🛠️ Tecnologias utilizadas

- Node.js
- express
- JWT

[KaioJesus](https://github.com/KaioJesus)


