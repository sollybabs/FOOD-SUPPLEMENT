const { x } = require("tar")

const loadTest=document.querySelector ('.loadingTest')
const bg=document.querySelector('.bg')

let load = 0

let int = setInterval(blurring , 30)

function blurring() {
    load++

  if (load > 99) {
    clearInterval(int)
  }

  loadTest = innerTest = '${load}%'
  loadTest.style.opacity= scale(load,0 , 100, 1 , 0)
  bg.style.filter = 'blur(${scale(load,0 ,30,0)})'
}

const scale = (num, in_min, in_max, out_min )=> {
    return (num - in_min) * (out_max - out_min)
        / (in_max - in_min) + out_min
}

            