window.onload = () => {
    setTimeout(() => {
        var screenWindow = document.querySelector('#MT_overroll');
        var newScreen = '<div id="button" style="width: 100%;height: 100%; z-index: 1009;  position: absolute; top: 0; bottom: 0;"></div>';
        screenWindow.innerHTML += newScreen;
        var newButton = document.querySelector('#button');
        var pjsdiv = document.querySelector('pjsdiv');
        var video = pjsdiv.querySelector('video');
        var openBox = document.querySelectorAll('#voice');
        var ul = openBox[1].querySelector('ul');
        var button = document.createElement('li')
        button.id = 'download';
        button.style = 'background-color: green;';
        button.innerHTML += `<a href=${video.src} style="color: #fff">Скачать</a>`;
        ul.prepend(button);
        console.log('video', video.src);
        newButton.addEventListener('click', () => openFullScreen(video));
        var overleyContent = document.querySelector('#overley-content');
        overleyContent.parentNode.removeChild(overleyContent);
    }, 2000);
}
function openFullScreen(video) {
    video.requestFullscreen !== null ? video.requestFullscreen() : video.webkitrequestFullscreen !== null ? video.webkitrequestFullscreen() : alert('что-то не так')
}