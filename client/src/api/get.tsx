export default {

    getAllUsers: () =>  {
        return fetch('/users', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',                
                'Authorization': 'Bearer ' + window.localStorage.getItem("token")
            }
        })
    },
    getSingleUser: (id) =>  {
    
    return fetch('/users/' + id, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',                
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
        }
    })
},

    getAllCreditsByAuthor: (id) => {
    return fetch('/reimbursements/author/' + id, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',                
            'Authorization': 'Bearer ' + window.localStorage.getItem("token")
        }
    })
},
    
    getAllCreditsByStatus: (id) =>  {
        return fetch('/reimbursements/status/' + id, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',                
                    'Authorization': 'Bearer ' + window.localStorage.getItem("token")
                }
            })
        }
};