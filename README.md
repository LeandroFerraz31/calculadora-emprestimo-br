# calculadora-emprestimo-br
 HTML:

<div class="calculator">: Esta div envolve todo o conteúdo da calculadora de empréstimo.
<h2>Calculadora de Empréstimo</h2>: Um cabeçalho que indica o título da calculadora.
Valor do empréstimo: Um rótulo para o campo de entrada onde o usuário deve digitar o valor do empréstimo desejado.
<input type="number" id="loanAmount" placeholder="Digite o valor do empréstimo">: Um campo de entrada numérica onde o usuário pode inserir o valor do empréstimo.
Taxa de juros (%): Um rótulo para o campo de entrada onde o usuário deve digitar a taxa de juros do empréstimo.
<input type="number" id="interestRate" placeholder="Digite a taxa de juros">: Um campo de entrada numérica onde o usuário pode inserir a taxa de juros.
Prazo (em meses): Um rótulo para o campo de entrada onde o usuário deve digitar o prazo do empréstimo em meses.
<input type="number" id="loanTerm" placeholder="Digite o prazo em meses">: Um campo de entrada numérica onde o usuário pode inserir o prazo do empréstimo.
<button onclick="calculateLoan()">Calcular</button>: Um botão que o usuário pode clicar para calcular o empréstimo com base nos valores inseridos.
Juros Mensais, Juros Anuais, Valor Total e Pagamento Mensal: Os resultados calculados são exibidos em parágrafos com rótulos correspondentes.
CSS:

.calculator: Define o estilo da div que envolve toda a calculadora.
h2: Define o estilo do cabeçalho.
label: Define o estilo dos rótulos.
input: Define o estilo dos campos de entrada.
button: Define o estilo do botão de cálculo.
#result: Define o estilo da div que envolve os resultados calculados.
@media: Define estilos responsivos para diferentes tamanhos de tela. Os estilos dentro das media queries serão aplicados apenas quando as condições especificadas forem atendidas.
JavaScript:

calculateLoan(): A função que é chamada quando o botão "Calcular" é clicado. Realiza os cálculos com base nos valores inseridos pelo usuário e atualiza os elementos de resultado.
loanAmount, interestRate e loanTerm: Variáveis que armazenam os valores dos campos de entrada.
monthlyInterestRate: Calcula a taxa de juros mensal com base na taxa de juros anual fornecida.
numPayments: Armazena o prazo do empréstimo em meses.
compoundedInterestRate: Calcula a taxa de juros compostos.
monthlyPayment: Calcula o valor do pagamento mensal com base nos valores do empréstimo, taxa de juros e prazo.
totalInterest: Calcula o valor total de juros pagos ao longo do empréstimo.
annualInterest: Calcula a taxa de juros anual com base na taxa de juros mensal.
Atualização dos elementos de resultado: Os valores calculados são exibidos nos elementos HTML correspondentes usando textContent após aplicar formatação específica para representar valores monetários.
