const rutina = (inst, callback, duracion) =>{
    setTimeout(()=>{
        callback(inst);
    }, duracion)
}

const shopping = (inst, callback, duracion) =>{
    setTimeout(()=>{
        callback(inst);
    }, duracion)
}
 

shopping("Comprar Bici", (inst)=>{
    console.log("Haciendo: "+inst);
    shopping("Comprar casco", (inst)=>{
        console.log("Haciendo: "+inst);
        shopping("Comprar uantes", (inst)=>{
            console.log("Haciendo: "+inst);
            shopping("Pasear", (inst)=>{
                console.log("Haciendo: "+inst);
            }, 80000)
        }, 2000)
    }, 1000)
}, 5000)

