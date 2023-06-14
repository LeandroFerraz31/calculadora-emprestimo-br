function calculateLoan() {
    // Obter os valores dos campos de entrada
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
    // Calcular a taxa de juros mensal
    var monthlyInterestRate = interestRate / 100 / 12;
  
    // Calcular o número de pagamentos
    var numPayments = loanTerm;
  
    // Calcular a taxa de juros compostos
    var compoundedInterestRate = Math.pow(1 + monthlyInterestRate, numPayments);
  
    // Calcular o pagamento mensal
    var monthlyPayment = (loanAmount * monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
  
    // Calcular o valor total de juros pagos
    var totalInterest = monthlyPayment * numPayments - loanAmount;
  
    // Calcular a taxa de juros anual
    var annualInterest = (Math.pow(1 + monthlyInterestRate, 12) - 1) * 100;
  
    // Atualizar os elementos de resultado com os valores calculados
    document.getElementById('monthlyInterest').textContent = (monthlyInterestRate * 100).toFixed(2) + "%";
    document.getElementById('annualInterest').textContent = annualInterest.toFixed(2) + "%";
    document.getElementById('totalAmount').textContent = (loanAmount + totalInterest).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('monthlyPayment').textContent = monthlyPayment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  