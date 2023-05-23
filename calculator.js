document.getElementById('calculateButton').addEventListener('click', function() {
    var monthlyRate = parseFloat(document.getElementById('monthlyRate').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    
    if (isNaN(monthlyRate) && isNaN(hourlyRate)) {
      alert('Podaj stawkę miesięczną lub godzinową.');
    } else if (!isNaN(monthlyRate)) {
      var netSalary = calculateNetSalary(monthlyRate);
      document.getElementById('result').innerText = 'Wynagrodzenie netto (stawka miesięczna): ' + netSalary;
    } else {
      var netSalary = calculateNetSalary(hourlyRate * 160);
      document.getElementById('result').innerText = 'Wynagrodzenie netto (stawka godzinowa): ' + netSalary;
    }
  });
  
  function calculateNetSalary(grossSalary) {
    // Przykładowe obliczenia wynagrodzenia netto
    var tax = grossSalary * 0.2;
    var netSalary = grossSalary - tax;
    return netSalary;
  }
  