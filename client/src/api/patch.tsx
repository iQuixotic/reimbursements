export default {

    patchUser: (data) =>  { 
        // let obj = {
        //     _id: 60,
        //     username: data.username,
        //     password: data.password,
        //     first_name: data.firstName,
        //     last_name: data.lastName,
        //     email: data.email, 
        //     role_id: data.roleId
        // }
        return fetch('/users', {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        // headers: {},
        body: JSON.stringify(data)
    })
}

}