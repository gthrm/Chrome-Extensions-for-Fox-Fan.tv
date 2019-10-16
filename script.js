window.onload = () => {
    setTimeout(() => {
        var openBox = document.querySelectorAll('#voice')
        var ul = openBox[1].querySelector('ul')
        var button = `<li id='button' style="background-color: green; "><a href="#titleSeries" style="color: #fff">Показать без рекл.</a></li>`
        ul.innerHTML += button
        var newButton = document.querySelector('#button')
        var pjsdiv = document.querySelector('pjsdiv')
        var video = pjsdiv.querySelector('video')
        console.log('video', video.src);
        newButton.addEventListener('click', () => openFullScreen(video))
    }, 2000);
}
function openFullScreen(video) {
    video.requestFullscreen !== null ? video.requestFullscreen() : video.webkitrequestFullscreen !== null ? video.webkitrequestFullscreen() : alert('что-то не так')
}