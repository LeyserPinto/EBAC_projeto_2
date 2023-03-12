
const formElement = document.getElementById('app_form');
const tableBody = document.querySelector('#t_body');
const tableFoot = document.querySelector('#t_foot_quantidade');
const pMesagem = document.querySelector('#mesagem');

formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(onValidaCampos(formElement.children)==true){
        tableBody.innerHTML += adicionaContato(formElement.children[0].value,formElement.children[1].value)
        showMesagem('rgba(4, 248, 57, 0.95)','Contato Adicionado com Sucesso')
        limparCampos(formElement.children)
        tableFoot.children[0].innerHTML=`<span id='footSpan'>${tableBody.childElementCount}</span>`    
        setTimeout(()=>{
            destroyMesagem()
        },3000);
        
    }else{
        showMesagem('rgba(248, 4, 4, 0.95)','Deve Preencher o Campo')
        setTimeout(()=>{
            destroyMesagem()
        },3000);
    }
})



function onValidaCampos(aElemento){

    let iControl = 0;
    do {
        
        if(!aElemento[iControl].value.length > 0){
            //alert('Deve Preencher o Campo');
            aElemento[iControl].style.border='thin solid red';
            return false;
        }
        iControl++
    } while (iControl < 2);

    return true;
    
}

function adicionaContato(sNome,sTel) {
    return `<tr> 
    <td>${sNome}</td> 
    <td>${sTel}</td>
    </tr>`;
}

function onChangeBorder(e){
    
    if(e.style.borderColor == 'red'){
        e.style.border = 'none'
    }
}

function showMesagem(color,mes){
    pMesagem.style.opacity = '1'
    pMesagem.style.backgroundColor = color
    pMesagem.innerHTML = `${mes}`
}
function destroyMesagem(){
    pMesagem.style.opacity='0'
}

function limparCampos(aElemento){


    let iControl = 0;
    do {
        aElemento[iControl].value=''
       
        iControl++
    } while (iControl < 2)
}