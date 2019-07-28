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
        return fetch('http://localhost:4044/register', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        // headers: {},
        body: JSON.stringify(obj)
    })


},

    submitNewReimbursement: (data) => {
        console.log('this will data', data)
        
        return fetch('/reimbursements', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            // headers: {},
            body: JSON.stringify(data)
        })
    }

}