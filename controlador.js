window.onload=()=>{
    var botonContactMe=document.getElementById('botonContactMe').addEventListener('click',()=>{
        var sectionToMove=document.getElementById('contact')
        sectionToMove.scrollIntoView({ behavior: 'smooth' });
    })
}