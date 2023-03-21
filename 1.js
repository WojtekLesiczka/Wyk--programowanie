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

const num1=parseFloat(prompt("Podaj pierwszą liczbę: "));
const num2=parseFloat(prompt("Podaj drugą liczbę: "));
const num3=parseFloat(prompt("Podaj trzecią liczbę: "));

if(num1 >= num2 && num1 >= num3){
document.getElementById("addr").innerHTML="Pierwsza liczba jest największa  "+num1;
}
else if(num2 >= num2 && num2>=num3){    
document.getElementById("addr").innerHTML="Druga liczba jest największa  "+num2;
}
else {
document.getElementById("addr").innerHTML="Trzecia liczba jest największa  "+num2;
}