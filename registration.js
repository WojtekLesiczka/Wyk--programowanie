document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert('Hasła nie pasują do siebie.');
    } else {
      // Przykładowa logika rejestracji
      // Tutaj można dodać kod do zapisu danych użytkownika
      
      alert('Rejestracja pomyślna.');
      // Przekierowanie po rejestracji
      window.location.href = 'login.html';
    }
  });
  