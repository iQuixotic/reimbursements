// create an array and get the object's keys
const keysFromObjs =(obj) => {
    const arr = [];

    // iterate over keys, but ignore the ids
    for(let keys in obj)  
        if(keys !== 'userid') arr.push(keys);
        
    return arr;

}

export default keysFromObjs;