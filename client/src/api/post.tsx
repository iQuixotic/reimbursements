export default {

    addNewUser: (data) =>  fetch('/users', {
        method: 'POST',
        headers: {},
        body: JSON.stringify({ data })
    })

    
    

};