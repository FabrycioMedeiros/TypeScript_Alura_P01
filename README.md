# TypeScript_Alura_P01:
# Curso TypeScript Parte-01 Alura:

Para realizar este curso é necessário:
1. Editor de código-fonte(Sugestão do professor em utilizar o VS Code);

2. Node.js(Ambiente de execução para JavaScript);
Atualizar para versão mais recente.

3. Clonar este repositório em sua máquina local:
git clone https://github.com/alura-cursos/typescript-curso-1/tree/arquivos-iniciais

4. Instalar as bibliotecas:
npm install

5. Rodar aplicação local:
npm run start

6. Dependências
- Atualizar utilizando os comandos:
1. Use npm outdated para descobrir dependências que estão desatualizadas.
2. Use npm update para realizar atualizações de dependências seguras.
3. Use npm install <packagename>@latest para atualizar para a versão principal mais recente de um pacote.
4. Use npx npm-check-updates -u 
5. npm install para atualizar todas as dependências para suas versões principais mais recentes.

- Concurrently (^8.2.2): Utilizado para executar várias tarefas simultaneamente durante o desenvolvimento.

- Lite Server (^2.6.1): Servidor utilizado na aplicação web localmente durante o desenvolvimento.

- TypeScript (^4.2.2): Linguagem superset do JavaScript que adiciona tipagem estática ao código.

- Undici Types (^5.27.2).

# Objetivos da atividade:
- A aplicação não pode ser modificada após sua criação;
- Obrigatoriamente deve possuir data, quantidade e valor;
- Seu volume é calculado o produto de quantidade negociada no dia pelo valor negociado;

# Temas abordados:

## Módulo 01
- Neste módulo, foram abordados assuntos referentes a:
* Introdução ao projeto e sua estrutura
* Um pouco sobre módulos do ECMASCRIPT
* Modelagem de uma Negociação em Javascript
* Buracos em nossa modelagem por limitações da linguagem Javascript

## Módulo 02
- Neste módulo, foram abordados assuntos referentes a:
* Download do TypeScript
* Configuração do compilador e papel do tsconfig.json
* Integração com scripts do Node.js
* Modificadores de acesso private e public
* Benefícios iniciais da linguagem TypeScript

## Módulo 03
- Neste módulo, foram abordados assuntos referentes a:
* O tipo implícito any
* Benefícios da tipagem estática
* Mais configurações do compilador tsc
* Retorno de método explícito
* Conversão de valores da interface do usuário

## Módulo 04
- Neste módulo, foram abordados assuntos referentes a:
* Modelagem da classe Negociacoes
* Utilização de Generics
* Revisão sobre encapsulamento
* Questões de mutabilidade e como solucioná-la
* O tipo ReadonlyArray
* Adição de negociações em nossa lista

## Módulo 05
- Neste módulo, foram abordados assuntos referentes a:
* Nova maneira de declaração de array com generics
* O tipo ReadonlyArray
* O modificador readonly
* Getters vs propriedades públicas em modo de leitura
* Programação defensiva

# Curso TypeScript Parte-02 Alura:

## Módulo 01
- Neste módulo, foram abordados assuntos referentes a:
* Inspiração no React para criação de templates declarativos e dinâmicos
* Manipulação declarativa do DOM através de template
* Template dinâmico
* Formatação de datas usando Intl

## Módulo 02
- Neste módulo, foram abordados assuntos referentes a:
* Herança com TypeScript
* Classes com tipo genérico
* Classes abstratas
* O modificador protected

## Módulo 03
- Neste módulo, foram abordados assuntos referentes a:
* Visibilidade de métodos
* Validando negociações em dias úteis
* Vantagens do uso de enums
* Cuidados com enums

## Módulo 04
- Neste módulo, foram abordados assuntos referentes a:
* Revisão da lógica de conversão negociações
* Método estáticos
* Parâmetros opcionais

## Módulo 05
- Neste módulo, foram abordados assuntos referentes a:
* Remoção de comentários do código compilado
* Ativação do strictNullChecks
* Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks
* Benefícios do strictNullChecks no controle do fluxo da sua aplicação