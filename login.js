document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;
    
    // Przykładowa logika logowania
    // Tutaj można dodać odpowiednie zapytanie do serwera lub inne mechanizmy uwierzytelniania
    
    if (loginUsername === 'admin' && loginPassword === 'admin123') {
      alert('Zalogowano pomyślnie.');
      // Przekierowanie po zalogowaniu
      window.location.href = 'dashboard.html';
    } else {
      alert('Nieprawidłowy login lub hasło.');
    }
  });
  