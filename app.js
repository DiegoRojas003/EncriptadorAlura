document.addEventListener('DOMContentLoaded', function() {
    let getTextarea = document.getElementById('gettext');
    let setTextarea = document.getElementById('settext');
    let imagenPrincipal = document.querySelector('.imagen-principal');
    let mensaje = document.querySelector('.mensaje-noencontrado');
    let mensaje2 = document.querySelector('.mensaje-noencontrado2');
    let copiar = document.querySelector('.copiar');
    let container=document.querySelector('.left-container');
    getTextarea.addEventListener('input', function() {
      if (getTextarea.value.trim() !== '') {

        if(window.innerWidth >= 769){
            imagenPrincipal.style.display = 'none';
            mensaje.style.display='none';
        }
        setTextarea.style.display='block';
        document.getElementById('encriptar').removeAttribute('disabled');
        document.getElementById('desencriptar').removeAttribute('disabled');
        mensaje2.style.display='none';
      } else {
        // Si no hay texto, muestra la imagen y deshabilita el textarea
        if(window.innerWidth>768){
            imagenPrincipal.style.display = 'block';
            mensaje.style.display='block';
            
        } else{
            mensaje2.style.display='block';
            container.style.height='15%';
        }
        setTextarea.style.display='none';
        copiar.style.display='none';
        document.getElementById('encriptar').setAttribute('disabled','true');
        document.getElementById('desencriptar').setAttribute('disabled','true');
        setTextarea.textContent="";
        
      }
    });
});
    
    function encriptara() {
        let copiar = document.querySelector('.copiar');
        let setTextarea = document.getElementById('settext');
        let  texto= document.getElementById('gettext').value;
        modCampotexto();
        copiar.style.display='block';
        let textoc=texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        setTextarea.textContent=textoc;
        

    }
    function desencriptara() {
        let copiar = document.querySelector('.copiar');
        let setTextarea = document.getElementById('settext');
        let  texto= document.getElementById('gettext').value;
        modCampotexto();
        copiar.style.display='block';
        let textoc=texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        setTextarea.textContent=textoc;
    }
    function modCampotexto(){
        
        if(window.innerWidth <= 768){
        let container=document.querySelector('.left-container');
        let campoTexto=document.querySelector('.campo-mensaje');
        let texto=document.getElementById('settext');
        container.style.height='50%';
        container.style.padding='0';
        campoTexto.style.height='80%';
        texto.style.height='75%'
        }
    }
    async function copy() {
        let texto = document.getElementById('settext').innerHTML;
    
        try {
            await navigator.clipboard.writeText(texto);
            alert('Contenido copiado al portapapeles');
        } catch (err) {
            alert('Error al copiar: ', err);
        }
    }
  
  
    
  

