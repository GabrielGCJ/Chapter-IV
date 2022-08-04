**RF** => Requisitos Funcionais
**RNF** => Requisitos não funcionais

**RN** => Regras de Negocio]

# Cadastro de Carros

**RF**
Deve ser possivel, cadastrar um novo carro.
Deve ser possivel listar todas as categorias.

**RNF**
//

**RN**
Não deve ser possivel, cadastrar um carro com uma placa já existente.
Não deve ser possivel, alterar uma placa de um carro já cadastrado.
O caro deve ser cadastrado, por padrão, com disponibilidade.
O usuario responsavel pelo cadstro, deve ser um usuario administrador.

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros pelo nome de categoria. 
Deve ser possivel listar todos os carros pelo nome da marca.
Deve ser possivel listar todos os carros pelo nome do carro.

**RNF**
//

**RN**
O usuario não precisa estar logado no sistema

# Cadastro de especificação no carro

**RF**
Deve ser possivel cadastrar uma especificação para um carro.
Deve ser possivel listar todas as especificaçoes.
Deve ser possivel listar todos os carros.

**RNF**
//

**RN**
Não deve ser possivel cadastrar uma especificação, para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação, já existente para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos 

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
* O usuario responsavel pelo cadastro deve ser o usuario administrador.

# Aluguel de carro

**RF**
Deve ser possivivel cadastrar um aluguel

**RNF**
//

**RN**
O aluguel dever ter duração minima de 24 horas 
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

