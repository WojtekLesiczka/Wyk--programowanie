//a)
// var a=10;
// var b=20;
// let add=a+b;
// let sub=b-a;
// let nul=a*b;
// let div=b/a;
// let mod= b%a;

// console.log(add);
// console.log(sub);
// console.log("wynik mnożenia to:"+nul);
// console.log(div);
// console.log(mod);


//b)
//document.getElementById("addr").innerHTML="Wynik dodawania to: "+add;


// var s1=5;
// var s2=6;
// var s3=7;

// var p=(s1+s2+s3)/2;
// var area=Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
// console.log("Pole trójkąta wynosi: "+area);
// document.getElementById("addr").innerHTML="Pole trójkata o bokach "+s1+" "+s2+" "+s3+ " wynosi: "+area;


//c)

// const num=Math.ceil(Math.random()*10);
// console.log(num);
// const gnum = prompt("Podaj liczbę:  ");
// if (num ==gnum){
//     console.log("Dobra robota!");
//     document.getElementById("addr").innerHTML="Dobra robota! Poprawnie odgadłeś cyfrę: "+gnum;

// }
// else{
// console.log("Nie trafiłeś!");
// document.getElementById("addr").innerHTML="Zła robota! Poprawna cyfra to:   " +gnum;
// }a



//b) wyświetla na stronie i podaje informację o ile pomylił się użytkownik


//zad4

// const num1=parseFloat(prompt("Podaj pierwszą liczbę: "));
// const num2=parseFloat(prompt("Podaj drugą liczbę: "));
// const num3=parseFloat(prompt("Podaj trzecią liczbę: "));

// if(num1 >= num2 && num1 >= num3){
// document.getElementById("addr").innerHTML="Pierwsza liczba jest największa  "+num1;
// }
// else if(num2 >= num2 && num2>=num3){    
// num2
// }
// else {
// document.getElementById("addr").innerHTML="Trzecia liczba jest największa  "+num2;
// }

//zad5

// function najwiekszyWspolnyDzielnik(a, b) {
//     let t;
//     while (b !== 0) {
//       t = b;
//       b = a % b;
//       a = t;
//     }
//     return a;
//   }
  
//   const num1 = parseInt(prompt("Podaj pierwszą liczbę: "));
//   const num2 = parseInt(prompt("Podaj drugą liczbę: "));
  
//   const nwd = najwiekszyWspolnyDzielnik(num1, num2);
  
//   console.log("Największy wspólny dzielnik liczb " + num1 + " i " + num2 + " wynosi " + nwd + ".");

//zad6

// Tworzenie obiektów
// const student1 = { imie: 'Jan', nazwisko: 'Kowalski', wiek: 20 };
// const student2 = { imie: 'Anna', nazwisko: 'Nowak', wiek: 21 };
// const student3 = { imie: 'Piotr', nazwisko: 'Wójcik', wiek: 19 };

// // Dodawanie właściwości do obiektów
// student1.kierunek = 'Informatyka';
// student2.kierunek = 'Matematyka';
// student3.kierunek = 'Fizyka';

// // Wyświetlanie pojedynczych danych w konsoli
// console.log('Student 1: ' + student1.imie + ' ' + student1.nazwisko + ', wiek: ' + student1.wiek + ', kierunek: ' + student1.kierunek);
// console.log('Student 2: ' + student2.imie + ' ' + student2.nazwisko + ', wiek: ' + student2.wiek + ', kierunek: ' + student2.kierunek);
// console.log('Student 3: ' + student3.imie + ' ' + student3.nazwisko + ', wiek: ' + student3.wiek + ', kierunek: ' + student3.kierunek);

//zad7

// const student1 = { imie: '', nazwisko: '', wiek:'' ,kierunek:'' };
// const student2 = { imie: '', nazwisko: '', wiek:'' ,kierunek:''};
// const student3 = { imie: '', nazwisko: '', wiek:'' ,kierunek:'' };

// student1.imie=prompt("Wpisz imię student1 ");
// student1.nazwisko=prompt("Wpisz nazwisko student1 ");
// student1.wiek=prompt("Wpisz wiek student1 ");
// student1.kierunek=prompt("Wpisz keirunek student1 ");

// student2.imie=prompt("Wpisz imię student2 ");
// student2.nazwisko=prompt("Wpisz nazwisko student2 ");
// student2.wiek=prompt("Wpisz wiek student2 ");
// student2.kierunek=prompt("Wpisz keirunek student2 ");

// student3.imie=prompt("Wpisz imię student3 ");
// student3.nazwisko=prompt("Wpisz nazwisko student3 ");
// student3.wiek=prompt("Wpisz wiek student3 ");
// student3.kierunek=prompt("Wpisz keirunek student3 ");


// console.log('Student 1: ' + student1.imie + ' ' + student1.nazwisko + ', wiek: ' + student1.wiek + ', kierunek: ' + student1.kierunek);
// console.log('Student 2: ' + student2.imie + ' ' + student2.nazwisko + ', wiek: ' + student2.wiek + ', kierunek: ' + student2.kierunek);
// console.log('Student 3: ' + student3.imie + ' ' + student3.nazwisko + ', wiek: ' + student3.wiek + ', kierunek: ' + student3.kierunek);

//zad8
function showTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("addr").textContent = timeString;
  }

  setInterval(showTime, 1000); // aktualizacja co sekundę
