export default {

    getAllUsers: () =>  fetch('/users'),
    getSingleUser: (id) =>  fetch('/users/' + id)
    

};