function clickPopUp() {
    const parentElement = document.getElementById('imgParent')
    const childElements = parentElement.children
    const modalImg = document.getElementById('modalImg')
    const modalPopup = document.getElementById('modalPopup')
    const modalText = document.getElementById('modalText')
    const modalX = document.getElementById("modalX")
    if (screen.width <= 800) {
        var modalVImgSize = "50%"
        var modalHImgSize = "90%"
    } else {
        var modalVImgSize = "20%"
        var modalHImgSize = "50%"  
    }


    for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i]
        child.mouseover = function() {child.style.cursor = "pointer"}
        child.onclick = function() {
            var clickedImg = child.firstElementChild
            var modalSrc = clickedImg.src.replace('http://127.0.0.1:5500', '')

            if (clickedImg.classList.contains('_916')) {
                modalImg.style.width = modalVImgSize
            } else if (clickedImg.classList.contains('_169')) {
                modalImg.style.width = modalHImgSize
            } else {
                modalImg.style.width = "20%"
            }
            
            modalPopup.style.display = 'block'
            modalImg.src = modalSrc
            modalText.innerHTML = clickedImg.alt;
        };
    }
    modalX.onclick = function() {
        modalPopup.style.display = 'none'
    }
}