class Query {

    // use num+1 to account for $1 at the id value
    private static printSets(num, keys) {
      let i = num+1, arr = [];
      while(i > 1) {
        arr.push(` ${keys[i-1]} = $${i}`)
        i--;
      }
      return arr;
    }

    //-------------------------------------------------------------------------

    // generic get all 
    static getAll(tableName) {
      const x = (`SELECT * FROM ${tableName}`);
      return x;
    }

    // generic get by id
    static getOne(tableName, queryKey) {
      const x = `SELECT * FROM ${tableName} WHERE ${queryKey} = $1`;
      return x;
    }
   
    /* - - - - - - - - - - - SET ONE  - - - - - - - - - - - - - - - - - -
    - takes in 4 fields 
    - sets tableName and where field from within
    - calls printSets and passes the number of Fields and KeyNames
    - printSets returns an array like so: ['SomeKeyName = $2', 'SomeKeyName = $3]
    - setOne will then return entire string to caller
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    // generic setOne
    static setOne(tableName, whereField, numOfFields, keys) {
      const queryString = (
        `UPDATE ${tableName} 
         SET ${this.printSets(numOfFields, keys).join(', ')} 
         WHERE ${whereField} = $1`
      );
          return queryString;
    }

    
}

export default Query;