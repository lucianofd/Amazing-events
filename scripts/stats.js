let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"


const eventStatistics =(eventData)=> {
    let percentAssist = [];
    eventData.forEach((item) => {
        
        let percent = ((item.assistance / item.capacity)*100);
        item.percent = percent; 
        if(!isNaN(percent)){percentAssist.push(item) }  
    });

    let ordenDesc = percentAssist.sort(function(a, b){return b.percent - a.percent});
    
    let bestAssist = ordenDesc.slice(0,3)
    let lowAssist = ordenDesc.slice(-3).reverse();
    
    console.log(bestAssist);
    console.log(lowAssist);
    
    //ordenar capacidad y devolverlos en el htmlm
}
  
 const datos = async ()=>{
   
  try{
    const response = await fetch(urlApi)
    const info = await response.json()
    datosO = info.events;
    console.log(datosO)
    eventStatistics(datosO)      
  }
  catch(error){
    console.log(error);
  }

}
datos();




