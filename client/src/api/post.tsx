export default {

    addNewUser: (data) =>  { 
        let obj = {
            _id: 60,
            username: data.username,
            password: data.password,
            first_name: data.firsName,
            last_name: data.lastName,
            email: data.email, 
            role_id: 1
        }
        console.log(JSON.stringify(obj))
        return fetch('http://localhost:4044/register', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        // headers: {},
        body: JSON.stringify(obj)
    })
    

}
    
    

};