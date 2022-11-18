import data from './data.json';

export const officeLocation = {
    latitude: "42.6665921",
    longitude: "23.351723"
}

// First of all we have to convert degree to the radians to calculate distance.
function toRad(value) {
    return (Math.PI * value) / 180;
}

function toDeg(value) {
    return (value * 180) / Math.PI;
}

export function checkAndCalculateDistance(firstPlace, secondPlace) {
    // The formula is = arccos(sin(firstLat) * sin(secondLat) + cos(firstLat) * cos(secondLat) * cos(distanceLong));

    const radians = {
        firstLat: toRad(firstPlace.latitude),
        firstLon: toRad(firstPlace.longitude),
        secondLat: toRad(secondPlace.latitude),
        secondLon: toRad(secondPlace.longitude),
    }
   
    // According to end of the formula formula, we have to see differences between longitude values.
   const distanceLon = radians.firstLon - radians.secondLon;

   // So we can now create our formula with the Math library. I used Math Library because it has own sin and cos methods.
   let distanceResult = Math.sin(radians.firstLat) * Math.sin(radians.secondLat) + Math.cos(radians.firstLat) * Math.cos(radians.secondLat) * Math.cos(distanceLon);

   // We have distance value now but according to formula we also have to use arccos(distanceResult). Inside of the Math lab it called acos() method.
   let result = toDeg(Math.acos(distanceResult)) * 60;

   return result.toFixed(1);
}

export function getBirthdayGuys() {
    return data.locations.filter((item) => checkAndCalculateDistance(officeLocation, item) < 100);
}