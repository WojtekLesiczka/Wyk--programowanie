// Walidacja hasła przy rejestracji
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert('Hasła nie pasują do siebie.');
    } else {
      // Zapisanie danych użytkownika
      var user = {
        username: document.getElementById('username').value,
        password: password,
        firstName: '',
        lastName: '',
        email: '',
        info1: '',
        info2: '',
        info3: ''
      };
      
      // Zapisanie w tablicy
      var usersArray = [];
      usersArray.push(user);
      
      // Zapisanie w JSON
      var usersJson = JSON.stringify(usersArray);
      
      // Zapisanie w obiektach
      var usersObj = {};
      usersObj[user.username] = user;
      
      console.log('Zapisano użytkownika:', user);
      console.log('Tablica:', usersArray);
      console.log('JSON:', usersJson);
      console.log('Obiekty:', usersObj);
    }
  });
  
  // Logowanie
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;
    
    // Sprawdzenie poprawności loginu i hasła
    if (loginUsername === 'admin' && loginPassword === 'admin123') {
      console.log('Zalogowano pomyślnie.');
    } else {
      alert('Nieprawidłowy login lub hasło.');
    }
  });
  
  // Kalkulator wynagrodzenia
  document.getElementById('calculateButton').addEventListener('click', function() {
    var monthlyRate = parseFloat(document.getElementById('monthlyRate').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    
    if (isNaN(monthlyRate) && isNaN(hourlyRate)) {
      alert('Podaj stawkę miesięczną lub godzinową.');
    } else if (!isNaN(monthlyRate)) {
      var netSalary = calculateNetSalary(monthlyRate);
      console.log('Wynagrodzenie netto (stawka miesięczna):', netSalary);
      alert('Wynagrodzenie netto (stawka miesięczna): ' + netSalary);
    } else {
      var netSalary = calculateNetSalary(hourlyRate * 160);
      console.log('Wynagrodzenie netto (stawka godzinowa):', netSalary);
      alert('Wynagrodzenie netto (stawka godzinowa): ' + netSalary);
    }
  });
  
  function calculateNetSalary(grossSalary) {
    // Obliczenia wynagrodzenia netto (przykładowa funkcja)
    var tax = grossSalary * 0.2;
    var netSalary = grossSalary - tax;
    return netSalary;
  }
  