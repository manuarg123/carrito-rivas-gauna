const onAdd=(count)=>{

   
    if(count>1){
        alert(`Se agregaron ${count} productos`)
    } else if(count===1){
        alert(`Se agrego ${count} producto`)
    }

}

export default onAdd;