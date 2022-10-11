window.addEventListener('load', () => {
    let userPanel = document.querySelector('#userPanelImg')

    if(window.innerWidth > 768){
        userPanel.classList.add('userPanelDesktop')
    } else if(window.innerWidth < 768) {
        userPanel.innerHTML += "<style>@media (min width: 768px){#userPanelImg{display: flex;}}</style>"
    }
})