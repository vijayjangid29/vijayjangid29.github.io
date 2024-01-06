let bg=document.getElementById('bg')
let btnch=document.getElementById('btnch')

function changebg(){
   let a=Math.round(Math.random()*1000000)
    toString('16')
    // alert('Messahe')
    bg.style.display="block"
    btnch.style.display="none"
    document.title = "my insta";
    document.body.style.backgroundColor="#"+a
   
}
function post(){
    bg.style.display="none"
    btnch.style.display="block"
    document.body.style.backgroundColor="white"

}