function navbar(){
    if(window.scrollY>100){
        document.querySelector('.navbar').style.background='black';
    }
    else{
        document.querySelector('.navbar').style.background='#5c5c5c';
    }
}
window.addEventListener('scroll',navbar);
function opacity(){
    document.getElementById('esquerda').style.opacity='1';
    document.getElementById('esquerda').style.padding='0px'
}
setTimeout(opacity,200);
function opacity_d(){
    document.getElementById('direita').style.opacity='1';
    document.getElementById('direita').style.padding='0px'
}
setTimeout(opacity_d,400);

function scroll(){
    if(window.scrollY>400){
        document.querySelector('#esquerda_m').style.opacity='1';
        document.querySelector('#esquerda_m').style.margin='0';
    }
}
window.addEventListener('scroll',scroll);

function scroll_d(){
    if(window.scrollY>=320){
        document.querySelector('#direita_m').style.opacity='1';
        document.querySelector('#direita_m').style.margin='0';
    }
}
window.addEventListener('scroll',scroll_d);

function scroll_e(){
    if(window.scrollY>600){
        document.querySelector('.separacao').style.height='70px';
        
    }
}
window.addEventListener('scroll',scroll_e);

function ativar(e){
   document.querySelectorAll('li').forEach(element => {
       if(element.className=="ativo"){
         element.classList.remove('ativo');
       }
       
   });
   e.classList.add('ativo');
   
   document.querySelectorAll('.n1').forEach(elem=>{
       elem.classList.add('sumir');
       if(elem.className=='n1'){

       }
   });
}
document.querySelectorAll('.nav-link')[0].addEventListener('click',(e)=>{
    home();
    e.preventDefault();
})
document.querySelectorAll('.nav-link')[3].addEventListener('click',(e)=>{
    servico();
    e.preventDefault();
})
document.querySelectorAll('.nav-link')[2].addEventListener('click',(e)=>{
    projetos();
    e.preventDefault();
})
document.querySelectorAll('.nav-link')[1].addEventListener('click',(e)=>{
    sobre();
    e.preventDefault();
})
function sobre(){
    window.scrollTo({
        top:500,
        behavior:'smooth',
        left:0
    })
}
function servico(){
    window.scrollTo({
        top:900,
        behavior:'smooth',
        left:0
    })
}
function projetos(){
    window.scrollTo({
        top:2700,
        behavior:'smooth',
        left:0
    })
}
function home(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
        left:0
    })
}
function opacite_1() {
    document.querySelector('.fundo').style.opacity='1';
}
function opacite_0() {
    document.querySelector('.fundo').style.opacity='0';
}
function none(){
    document.querySelector('.fundo').style.display='none';
}
document.querySelector('.curr').addEventListener('click',()=>{
    document.querySelector('.fundo').style.opacity='0';
    document.querySelector('.fundo').style.display='flex';
    setTimeout(opacite_1,100);
})
document.querySelector('.fundo').addEventListener('click',()=>{
    opacite_0();
    setTimeout(none,400)
})
