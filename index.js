// Code your solution in this file!

function logDriverNames (drivers) {
    return drivers.map (function (driver) {
        console.log(driver.name)
    })
}

function logDriversByHometown (drivers, hometown) {
    return drivers.filter (function (driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.revenue - driverTwo.revenue
    })
}

const driversByName = function (drivers) {
    return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.name.localeCompare(driverTwo.name)
    })
}

const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
        return currentDriver.revenue + total;
    }, 0);
};

function averageRevenue (drivers) {
    return totalRevenue(drivers)/drivers.length
}