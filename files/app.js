// let a = new Date(2027, 1, 0),


var a = ['gog','cat','hen']

a[100]='fox'

console.log(a.length);

let b = 0
for(i=55;i<4496;i++){
  if(i%3==0 && i%5==0){
    
    b++
  }
  
}

console.log(b);



//   b = new Date(2027, 2, 0);

// console.log(a - b / 24);
// console.log(a - b / 24 / 365);
// console.log('3'+4+5);

// <=======================================================================================>//

// let input = 2663601734890;

// let s = input.toString().split("").reverse();

// s.forEach((a) => {
//   if (a == "1") {
//     console.log("one");
//   } else if (a == 2) {
//     console.log("two");
//   } else if (a == 3) {
//     console.log("three");
//   } else if (a == 4) {
//     console.log("four");
//   } else if (a == 5) {
//     console.log("five");
//   } else if (a == 6) {
//     console.log("six");
//   } else if (a == 7) {
//     console.log("seven");
//   } else if (a == 8) {
//     console.log("eight");
//   } else if (a == 9) {
//     console.log("nine");
//   } else if (a == 0) {
//     console.log("zero");
//   }
// });

// <===================================================================================>//
// let a = "ALPHANSE",

//   b = "MARI SELVAM";

// let aarray = a.split(""),
//   barray = b.split("");

// aarray.forEach(() => {
//   if()
// });
// console.log(a.length);
// console.log(a);

// <===================================================================================>
// let a, b, c, d;

// a = Math.floor(Math.random() * 256);
// b = Math.floor(Math.random() * 256);
// c = Math.floor(Math.random() * 256);

// console.log(`rgb(${a},${b},${c})`);
// d = `rgb(${a},${b},${c})`;

// document.body.style.backgroundColor = d;

// console.log(Math.floor(Math.random() * 16777215));

// <===================================================================================>
// let srt = "alphanse",
//   srt1 = "Samuvel";

// console.log(srt.length);
// console.log(srt.includes("a"));
// console.log(srt.split(""));
// console.log(srt.startsWith("a"));
// console.log(srt.endsWith("e"));
// console.log(srt.indexOf("e"));
// console.log(srt.toUpperCase());
// console.log("HELLO".toLowerCase());
// console.log(srt.replace("a", "A"));
// console.log(srt.replaceAll("a", "A"));
// console.log(srt.match("a"));
// console.log(srt.concat(srt1));
// console.log(srt.repeat(3));
// console.log(srt.substring(5));
// console.log(srt.slice(3));

// <==================================================================================>

// let y = "hgftt13kl786jhhj74";
// let srt = y.split("");
// let t = 0;

// console.log(srt);
// srt.forEach((srt) => {
//   if (srt > 0 || srt <= 9) {
//     t = t + ~~srt;
//   }
// });
// console.log(t);

// <==================================================================================>

// let a = 0663601734892
// let y = 0
// let srt = a.toString()

// for(i=1;i<=srt.length;i++){
//   if(i%2==0){
//      y = y + i

//   }
// }
// console.log(y);

// let l = "http://127.0.0.1:5501/index.html";
// let arr = l.split("");

// // console.log(arr);

// arr.forEach((d) => {
//   if (d == "a" || d == "b" || d == "c"
//   || d == "e" || d == "f" || d == "g"
//   || d == "h" || d == "i" || d == "j"
//   || d == "k" || d == "l" || d == "m"
//   || d == "n" || d == "o" || d == "p"
//   || d == "q" || d == "r" || d == "s"
//   || d == "t" || d == "u" || d == "v"
//   || d == "w" || d == "x" || d == "y" || d == "z") {
//     console.log(d);
//   } else {
//     console.log("");
//   }
// });

// <==================================================================================>

// let st = 'mam'
// let ma = st.toString()
// let ba = ma.split('')
// let re = ba.reverse()
// let join = ba.join('')

// if(ma == join){
//   console.log(ma ,"is palindrome");
// }else{console.log(ma ,"is not palindrome");}

// let myname = "alphanse";
// let arr = myname.split("")
// console.log(arr);
// arr = arr.filter((data) => {return data !== 'a'});
//   console.log(arr);

// <==================================================================================>

// let a = "https://www.youtube.com";
// let b = a.split(".");

// let c = b[0];
// let d = c.split(":");

// let w = c.split("//");

// let first = d[0];
// console.log(first);

// let sec = w[1];
// console.log(sec);

// console.log(b[1]);
// console.log(b[2]);

// <==================================================================================>

// let a = [1,3,2]
// let arr = []
// let b = 0

// a.forEach(ele => {

//     console.log(b)
//     if(ele>b){
//       b = ele

//        arr.push(ele)

//         }else{
//           // console.log(ele)
//           arr.shift()
//         }
// })
// console.log(arr)

// <==================================================================================>

// let arr = [],
//   obj = [
//     {
//       id: 1,
//       name: "mari selvam",
//       age: "96",
//     },
//     {
//       id: 2,
//       name: "leo",
//       age: "23",
//     },
//     {
//       id: 3,
//       name: "Rahul",
//       age: "25",
//     },
//     {
//       id: 4,
//       name: "muthu kumar",
//       age: "24",
//     },
//     {
//       id: 5,
//       name: "vel",
//       age: "26",
//     },
//   ],
//   index,
//   addbtn = document.querySelector(".add"),
//   removeBtn = document.querySelector(".remove"),
//   userInFun = () => (usein = Number(document.querySelector(".int").value));
//   let v = 1
// addbtn.addEventListener("click", () => {
//   userInFun();
//   obj.filter((data) => {
//     if (data.id == usein && !arr.includes(data)) {
//       arr.push(data);
//       console.log(arr);
//     } else {

//       if(arr.includes(data) && data.id == usein ) {
//         v = ++v
//         console.log(v);

//         }

//     }
//   });
// });
// removeBtn.addEventListener("click", () => {
//   userInFun();
//   arr = arr.filter((data) => {return data.id !== usein;});
//   console.log(arr);
// });

// nameFuc(3)

// console.log(ab);
// var ab = 5

//Hoisting
// var ab
// console.log(ab);
// var ab = 5

// let indexUse;
// let check;
// let addbtn = document.querySelector(".add"),
//   removeBtn = document.querySelector(".remove");
//   addbtn.addEventListener("click", () => {
//   operation();
//   if (!arr.includes(obj[indexUse])) {
//     arr.push(obj[indexUse]);
//     console.log(arr);
//   }
// });
// removeBtn.addEventListener("click", () => {
//   operation();
//   arr.pop(indexUse);
//   console.log(arr);
// });
// let operation = () => {
//   (usein = document.querySelector(".int").value),
//     (indexUse = parseInt(usein - 1));
//   return indexUse;
// };

// console.log(operation());
// let two = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2");
//       resolve(mari());
//     //   reject();
//     }, 0);
//   });
// };
// two()
// //   .then(() => console.log("mari"))
//   .catch(() => console.log("error mari wast"));

//   let mari = ()=> console.log('mari wrking');

// let one = () => console.log("1");

// let two = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2");
//       resolve();
//     }, 0);
//   });
// };

// let three = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("3" , resolve,reject);
//       resolve();
//     }, 0);
//   });
// };

// let f4 = async () => {
//   two();
//   await three();
//   one();
// };
// f4();

// var arcr = [1, 2, 3, 3];
// console.log(arcr);
// // console.log(arcr.map());

// var mapx = arcr.map((v) => console.log(v));

// <==================================================================================>
