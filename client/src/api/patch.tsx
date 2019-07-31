export default {

    patchUser: (data) =>  { 

        let obj = {
            _id: parseInt(data._id),
            username: data.username,
            password: data.password,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email, 
            role_id: data.role_id
        }
        
        console.log('this is gonna b the object', obj)
        return fetch('/users', {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',                
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
        },
        body: JSON.stringify(obj)
    })
},

patchReim: (data) =>  { 
    const d = new Date();
    let dformat = [d.getMonth()+1,
        d.getDate(),
        d.getFullYear()].join('-')+' '+
        [d.getHours(),
        d.getMinutes(),
        d.getSeconds()].join(':');

    let obj = {
        _id: data.credits[data.editingNum]._id,
        amount: data.amount,
        description: data.description,
        status: data.status,
        resolver: data.resolver,
        date_resolved: dformat,
        role_id: 1 // need to change this or hate yourself later
    }
    
    console.log('this is gonna b the object', obj)
    return fetch('/reimbursements', {
    method: 'PATCH',
    headers: {
        'Content-Type':'application/json',                
        'Authorization': 'Bearer ' + window.localStorage.getItem("token")
    },
    body: JSON.stringify(obj)
})
}

}