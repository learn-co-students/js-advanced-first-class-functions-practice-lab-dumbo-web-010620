// Code your solution in this file!
function logDriverNames(driverObjs){
    driverObjs.forEach(function (item,index,array){
        console.log(item['name']);
    })
}

function logDriversByHometown(driverObjs,location){
    driverObjs.forEach(function(item,index,array){
        if (item['hometown'] === location){
            console.log(item['name'])
        }
    })
}

function driversByRevenue(driverObjs){
    const cloneDrivs = [...driverObjs]
    const sortedByRevenue = cloneDrivs.sort(function(a,b){
       return a.revenue - b.revenue;
   });
        return sortedByRevenue
}

function driversByName(driverObjs){
    const cloneDrivs = [...driverObjs]
    const sortedByName = cloneDrivs.sort(function(a,b){
        return a['name'].localeCompare(b['name']);
    })
    return sortedByName;
}

// function totalRevenue(driverObjs){
//     const cloneDriv = [...driverObjs]
//     const revArr = cloneDriv.map(function(driv){
//         return driv['revenue']
//     })
//     return revArr.reduce((acc,cv) => acc + cv)
// }


const totalRevenue = function(driverObjs){
    return driverObjs.reduce(function(acc,driv){
        return driv.revenue + acc;
    }, 0);
}

function averageRevenue(driverObjs){
    return totalRevenue(driverObjs)/driverObjs.length;
}