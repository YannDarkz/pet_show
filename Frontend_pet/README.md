# Projeto Pet Virtual

## Inicializar o projeto:
  * 1 clone o repositório
  * 2 instalar as dependências com `npm install`
  * 3 iniciar o servidor com `npm run dev`
  * 4 iniciar o servidor back_end json `npm run backend`

  ## Entrada de Dados
```json
  {
    "users": [
       {
         "id": "509f",
         "username": "yann'",
         "age": 23,
         "password": "senha123",
         "pets": [
           {
             "animal": "gato",
             "name": "cat",
             "gender": "femea"
            }
          ]
        }
      ]
  }
```
### Os dados são armazenados em duas etapas:
* 1 - Dados do Usuário
  * Nome
  * Idade
  * Senha
* 2 - Dados do Pet
  * Nome
  * Tipo
  * Gênero
  ### Os dados são armazenados em um arquivo json chamado `db.json`

  ```
  //funcao de submissão
  // enviando os dados com o "axios.post"
  

    const handleSubmit = (data: { animal: string; name: string; gender: string }) => {
        setPetData(data);
        const allData = {
            username: userData.username,
            age: userData.age,
            password: userData.password,
            pets: [data]  
        };

        axios.post('http://localhost:5000/users', allData)
        .then((response) => {
          console.log('Dados enviados com sucesso:', response.data);
        })
        .catch((error) => {
          console.error('Erro ao enviar os dados:', error);
        });
    }
    ```