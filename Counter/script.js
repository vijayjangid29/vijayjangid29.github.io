const a1=document.getElementById('incr')
const a2=document.getElementById('even')
let count=0
function plus(){
    if (count<25){
        
        count+=1
        a1.textContent=count
        if (count%2==0){
            a2.textContent='Even'
        }
        else
        a2.textContent='Odd'
    }
    else
    alert('cannot Increase the value ')
}
function minus(){
    if (count>0){
        count-=1
        a1.textContent=count
        if (count%2==0){
            a2.textContent='Even'
        }
        else
        a2.textContent='Odd'
    }
    else
    alert('cannot Decrease the value ')

}
function reset(){
    count=0
    a1.textContent=count
    a2.textContent=" "
}