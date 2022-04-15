//결과보기
//제목을 클릭했을 때 ~을 실행하라 !
// document.querySelectorAll(".result h4").forEach(function(el){
//         el.addEventListener("click", function(){
//             el.classList.toggle("selected");
//     });
// });

//for문을 이용해서 1~12까지 출력!!!

// for( let i=1; i<=12; i++ ){
//     document.querySelector(".result"+i+"t h4").addEventListener("click", function(){
//         document.querySelector(".result" + i).style.display = "block";
//     });
// }

//forEach()을 이용해서 1~12까지 출력!!!

document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        el.classList.toggle("active");
    })
});

// const num = [100, 200, 300, 400, 500]

// for(let i=1; i<5; i++){
//     console.log(i)  //0 1 2 3 4
//     console.log(num[i])
// };

// num.forEach(function(el, index){
//     console.log(el) //100 200 300 400 500
//     console.log(index)  //0 1 2 3 4
// });