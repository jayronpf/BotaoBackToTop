//BOTÃO BACK TO TOP (JAMILLE)
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("back_to_top")
    let progressValue = document.getElementById("btn_back")
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100) / calcHeight)

    if (pos > 100) {
        scrollProgress.style.display = "grid"
    } else {
        scrollProgress.style.display = "none"
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0
    })
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue