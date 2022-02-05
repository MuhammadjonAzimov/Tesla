const header = document.querySelector("#header")

const ms = document.querySelector("#models")
const m3 = document.querySelector("#model3")
const mx = document.querySelector("#modelx")
const my = document.querySelector("#modely")

const model = document.querySelector("#model")

const range = document.querySelector("#range")
const topspeed = document.querySelector("#topspeed")
const speed = document.querySelector("#speed")


ms.onclick = function () {
    header.style.backgroundImage = "url(/images/image-1.png)"
    model.innerHTML = "Model S"
    range.innerHTML = "412 ml"
    topspeed.innerHTML = "200 mph"
    speed.innerHTML = "1.9 s"
}

m3.onclick = function () {
    header.style.backgroundImage = "url(/images/image-2.png)"
    model.innerHTML = "Model 3"
    range.innerHTML = "353 ml"
    topspeed.innerHTML = "145 mph"
    speed.innerHTML = "3.1 s"
}

mx.onclick = function () {
    header.style.backgroundImage = "url(/images/image-3.png)"
    model.innerHTML = "Model X"
    range.innerHTML = "340 ml"
    topspeed.innerHTML = "155 mph"
    speed.innerHTML = "2.5 s"
}

my.onclick = function () {
    header.style.backgroundImage = "url(/images/image-4.png)"
    model.innerHTML = "Model Y"
    range.innerHTML = "323 ml"
    topspeed.innerHTML = "155 mph"
    speed.innerHTML = "3.5 s"
}