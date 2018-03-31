var d = document;

function almacenamientoLocal()
{
    if(localStorage.contador)
    {
        localStorage.contador++;
    }
    
    else
    {
        localStorage.contador = 1;
    }
    
    d.querySelector('#contador-local').innerHTML = 'Has presionado el botón <mark>' 
            + localStorage.contador + '</mark> veces';
}

function borrarLocal()
{
    alert('Borrando el almacenamiento local')
    localStorage.clear();
}

function almacenamientoWeb()
{
    if(sessionStorage.contador)
    {
        sessionStorage.contador++;
    }
    
    else
    {
        sessionStorage.contador = 1;
    }
    
    d.querySelector('#contador-web').innerHTML = 'Has presionado el botón <mark>' 
            + sessionStorage.contador + '</mark> veces';
}

function apiStorage()
{
    if( typeof(Storage) !== 'undefined')
    {
        //alert("El navegador sí soporta el API de Storage");
    }
    
    else
    {
        //alert("El navegador no soporta el API de Storage");
    }
    
    d.querySelector('#almacenar-local').onclick = almacenamientoLocal;
    d.querySelector('#almacenar-web').onclick = almacenamientoWeb;
    d.querySelector('#borrar-local').onclick = borrarLocal;
}
    
window.onload = apiStorage;



