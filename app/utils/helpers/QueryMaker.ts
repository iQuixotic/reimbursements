class SQL_Query {

    /* - - - - - - - - Internal Query Helpers - - - - - - - - -*/

    // use num+1 to account for $1 at the id value
    private static printSets(num, keys) {
      let i = num+1, arr = [];
      while(i > 1) {
        arr.push(` ${keys[i-1]} = $${i}`)
        i--;
      }
      console.log('here is the arr from printSets', arr)
      return arr;
    }

    private static printDollars(num) {
      let i = num+1, arr = [];
      while (i>1) {
        arr.push(`$${i}`)
        i--;
      }
      console.log('here is the arr from PRINTdollarSigns', arr)
      return arr;
    }

    /*- - - - - - - - - Query String Methods - - - - - - - - -*/
    
    // get all 
    static getAll(tableName) {
      return `SELECT * FROM ${tableName}`;
    }

    // get by id
    static getOne(tableName, queryKey) {
      return `SELECT * FROM ${tableName} WHERE ${queryKey} = $1`;
    }

    // insert a single db object
    static insertOne(tableName, colNames) {
      console.log('this is the colnames:', colNames, 'and this is the numOfFields', colNames.length-1);
      const queryString = (
        `INSERT INTO ${tableName} (${colNames.join(', ')}) 
         VALUES (${this.printDollars(colNames.length-1).join(', ')};`
      );
      console.log('this shall be my queryString', queryString)
      return queryString;
    }
   
    /* - - - - - - - - - - - - - ABOUT SET ONE  - - - - - - - - - - - - - 
    - takes in 4 fields 
    - sets tableName and where field from within
    - calls printSets and passes the number of Fields and KeyNames
    - printSets returns an array like so: ['SomeKeyName = $2', 'SomeKeyName = $3]
    - setOne will then return entire string to caller
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    // edit a single row
    static setOne(tableName, whereField, numOfFields, keys) {
      const queryString = (
        `UPDATE ${tableName} 
         SET ${this.printSets(numOfFields, keys).join(', ')} 
         WHERE ${whereField} = $1`
      );
          return queryString;
    }    
}

export default SQL_Query;