let display= document.querySelector("p")
let allBtn= document.querySelectorAll(".btn")



let store=0; 
let result=0;


allBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
    calcuOperations(btn)
    })
})




function calcuOperations(btn){
    if(btn.value == "="){
        result= eval(store)
        console.log(result)
        display.innerHTML=result
        store=result
        
    }else if(btn.value == "AC"){
        // console.log("wuxuu leegayahy AC")
        store=0
        result=0
        display.innerHTML=result
        

    }else if(btn.value == "DEL"){
        store= store.toString()
        // console.log("wuxuu leegyahay DEL"){
            store= store.slice(0, -1)
            display.textContent= store
            console.log(typeof store)
            if(store == ""){
                display.textContent= "0"
            }
     
    }else{
        if (store == 0){
            store= btn.value
        }else{
            store+=btn.value
        }

        display.textContent= store
    
    }
}
