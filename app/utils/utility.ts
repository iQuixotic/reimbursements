
// create an array and get the object's keys
const keysFromObjs =(obj) => {
    const arr = [];
    for(let keys in obj)  arr.push(keys);

    return arr;
}

export default keysFromObjs;