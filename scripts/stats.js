let urlApi = "https://mindhub-xj03.onrender.com/api/amazing"


const eventStatistics =(eventData)=> {
    //var acumulacion
    let percentAssist = [];
    let estimateAssist =[];
    let eventsByCategory= new Map();
    
    eventData.forEach((item) => {
        
        let percent = ((item.assistance / item.capacity)*100);
        item.percent = percent; 
        if(!isNaN(percent)){percentAssist.push(item) } 
        else{
            percent =(item.estimate / item.capacity)*100;
            item.percent = percent;
            estimateAssist.push(item)
           } 

        if (!eventsByCategory.has(item.category)) {
            eventsByCategory.set(item.category, []);
          }
            eventsByCategory.get(item.category).push(item);   
       });

     //devuelven el corte rerquerido   
    let ordenDesc = percentAssist.sort(function(a, b){return b.percent - a.percent});
    let bestAssist = ordenDesc.slice(0,3)
    let lowAssist = ordenDesc.slice(-3).reverse();
    let maxCap = eventData.sort(function(a,b){return b.capacity - a.capacity}).slice(0,3);
    
    //calcula  totales y promedio x categ.
    function promedioProd(array, prop1, prop2) {
        const sumByCategory = {};
        const countByCategory = {};
        const percentByCategory ={};
        array.forEach(obj => {
        const category = obj.category; 
        const value = obj[obj.hasOwnProperty(prop1) ? prop1 : 'estimate'] * obj[prop2];
        const percent = obj.percent;

        sumByCategory[category] = (sumByCategory[category] || 0) + value;
        countByCategory[category] = (countByCategory[category] || 0) + 1;
        percentByCategory[category] = (percentByCategory[category] || 0) + percent;
       
        });
        const promByCategory = {};
        for (const category in sumByCategory) {
        promByCategory[category] = sumByCategory[category] / countByCategory[category];
        percentByCategory[category] = percentByCategory[category]/ countByCategory[category];
        
        }
        return {sumByCategory, promByCategory, percentByCategory}
    }
    

    //DEVUELVE TABLA GENERAL
    const contGeneral = document.getElementById('t-general');
    for (let i = 0; i < bestAssist.length && i < lowAssist.length && maxCap.length; i++) {
        const best = {name: bestAssist[i].name , percent: bestAssist[i].percent.toFixed(2)};
        const low = {name: lowAssist[i].name, percent: lowAssist[i].percent.toFixed(2)};
        const large ={name: maxCap[i].name, cap:maxCap[i].capacity};
        const elementoHTML = `<tr>
        <td>${best.name}-(${best.percent}%)</td>
        <td>${low.name}-(${low.percent}%)</td>
        <td>${large.name}-(${large.cap})</td>
        </tr>`;
        contGeneral.innerHTML += elementoHTML;
      }

    //TABLA UPCOMing y PAST
    function revenuePast(array, container) {
        const { sumByCategory, promByCategory, percentByCategory } = promedioProd(array, 'assistance', 'price');
        const contData = document.getElementById(container);
      
        for (const category in sumByCategory) {
          const revenue = sumByCategory[category];
          const assist = percentByCategory[category].toFixed(2);
          const elementoHTML = `<tr>
            <td>${category}</td>
            <td>$ ${revenue}</td>
            <td>${assist}%</td>
          </tr>`;
            
          contData.innerHTML += elementoHTML;
        }

    };

    revenuePast(percentAssist, 't-past');
    revenuePast(estimateAssist, 't-upcoming')     
      
}


 const datos = async ()=>{
   
  try{
    const response = await fetch(urlApi)
    const info = await response.json()
    datosO = info.events;
    dayAct = info.currentDate; 
    eventStatistics(datosO) 
        
  }
  catch(error){
    console.log(error);
  }

}
datos();




