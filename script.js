const content = document.getElementById("content")
const imgQtdEl = document.getElementById("imgQtd")
const modal = document.querySelector(".modal")
const modalImg = document.getElementById("modalImg")

window.onload = function() {
    imgQtdEl.value = 16;
    carregaImagens()   
}

function carregaImagens(){

    content.innerHTML = ''
    let imgQtd = imgQtdEl.value
    let imgs = [] 
    if(!imgQtd) imgQtd = 16;
    if(imgQtd < 8) {
        imgQtd = 8;
        imgQtdEl.value = 8;
    }

    for(var i = 1; i <= imgQtd; i++){
        imgs.push('https://picsum.photos/' + (600 + i))
    }
    
    imgs.forEach(function(img){
        content.innerHTML = content.innerHTML + 
        `
        <img src="${img}" class="img">
        `
    })

     
    const imgElements = document.querySelectorAll('.img');
    imgElements.forEach(function(imgEl){
        imgEl.addEventListener('click', function() {
            modal.classList.toggle('modalActive')
            modalImg.src = imgEl.src
        });    
    })

}

function closeModal(){
    modal.classList.toggle('modalActive')
}