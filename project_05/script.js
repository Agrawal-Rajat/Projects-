const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
const body = document.querySelector("body")
const startButton = document.querySelector("#start")
startButton.addEventListener("click", function(){
    const set = setInterval(()=>{
        body.style.backgroundColor = randomColor();
        console.log("start");
    }, 1000)

    const stopButton = document.querySelector("#stop")
    stopButton.addEventListener("click", ()=>{
        clearInterval(set)
        console.log("stopped");
    })
})