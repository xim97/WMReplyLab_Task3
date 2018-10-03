export default function getDataForGrid(firstMonday, lastSunday) {
    let dataForGrid = [];        
    
    for (let i = firstMonday; i <= lastSunday; i.setDate(i.getDate() + 1)) {
        let temp = i.getDay();
        temp = temp === 0 ? 7 : temp; 
        if (dataForGrid[temp] === undefined) {
            dataForGrid[temp] = [];            
        } 
        dataForGrid[temp].push(new Date(i));
    }    
    return dataForGrid;
}