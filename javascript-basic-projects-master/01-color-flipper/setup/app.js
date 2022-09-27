const colors = ["green", "red", "rgba(133,122,200)", "blue"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


//function returns a random number between o and length of colors list

function getRandomNum(max){
    return Math.floor(Math.random()*max)
}

btn.addEventListener('click', function(){
    const randomNumber =getRandomNum(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent=colors[randomNumber];
    color.style.color=colors[randomNumber];
});
