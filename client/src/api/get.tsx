export default {

    getAllUsers: () =>  fetch('/users'),
    getSingleUser: (id) =>  fetch('/users/' + id),

    getAllCreditsByAuthor: (id) =>  fetch('/reimbursements/author/' + id),
    getAllCreditsByStatus: (id) =>  fetch('/reimbursements/status/' + id)
    
};