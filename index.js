const cuerpo=document.getElementById('main-content');
function buscar(valoringresado){
    cuerpo.innerHTML='';
    const div=document.createElement('div');
    div.classList.add('uno');

    let resultado=valoringresado;
    let xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp =new XMLHttpRequest();
    }else{
        xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
    }

    if(resultado.length===0){
        resultado.innerHTML ="";
    }else{
        
    }
    cuerpo.appendChild(div);

};
//buscarLib 