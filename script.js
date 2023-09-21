// // const & let, valuable / argument 

// // Array, Object, 

// // 계산기
// const calculator = {
//     add : function(a,b) {
//     console.log(a + "+" + b + "=" + (a+b));
//     },
//     minus : function(a,b) {
//     console.log(a + "-" + b + "=" + (a-b));
//     },
//     mul : function(a,b) {
//     console.log(a + "*" + b + "=" + a*b);
//     },
//     div : function(a,b) {
//     console.log(a + "/" + b + "=" + a/b);
//     },
//     power : function(a,b) {
//     console.log( a + "^" + b + "=" + a**b);
//     }
//     }

// calculator.add(1, 2);
// calculator.minus(3, 2);
// calculator.mul(3, 4);
// calculator.div(5, 2);
// calculator.power(3, 2);

// return, console은 그림의 떡, 리턴을 통해 써먹자
// const calculator = {
//     plus: function (a,b) {
//         return a + b;
//     },
//     minus: function (a,b) {
//         return a - b;
//     },
//     times: function (a,b) {
//         return a * b;
//     },
//     divide: function (a,b) {
//         return a / b;
//     },
//     power: function (a,b) {
//         return a ** b;
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const timesResult = calculator.times(10, minusResult);
// const divideResult = calculator.divide(timesResult, plusResult);
// const powerResult = calculator.power(divideResult, minusResult);

// // prompt typeof parseInt

// // isNaN 숫자 판별, conditional - if , else 
// const age  = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//     console.log("Please write a number");
// } else {
//     console.log("Thank you for writing your age");
// }


// // else if, And operator &&, else는 선택적 사항. OR operator ||, 
// // === !==
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age) || age < 0) {
//     console.log("Please write a real positive number");
// } else if (age < 18) {
//     console.log("You are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// }else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// }else if (age === 100) {
//     console.log("wow you are wise");
// }else if (age >80) {
//     console.log("You can do whatever you want.");
// }

// // document, document.title, document.body
// // getElementById
// const title = document.getElementById("damn");

// title.innerText = "Get you!";

// console.log(title.id);

// // querySelector, querySelectorAll

// // event 1
// const title  = document.querySelector(".hello");

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleTitleClick);

// // event 2
// const title  = document.querySelector(".hello");

// function handleTitleClick() {
//     title.style.color = "blue";
// }

// function handleTitleEnter() {
//     title.innerText = "Mouse is here!";
// }

// function handleTitleLeave() {
//     title.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleTitleEnter);
// title.addEventListener("mouseleave", handleTitleLeave);

// // CSS in Javascript
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// CSS in Javascript 3
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
//     // h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);

// 웹페이지 만들기 submit preventDefault()
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     console.log(loginInput.value);
// }

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.log(event);
//     alert("clicked");
// }

// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);



// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//     event.preventDefault();
//     const username = loginInput.value;
//     loginForm.classList.add("hidden");
//     console.log(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

