
let LoginID = 0;

export default {

    isFinancialManager: () => {
        if(LoginID === 1) return true;
        return false;
    },

    isAdmin: () => {
        if (LoginID=== 2) return true;
        return false;
    },

    isSelfReferencial:() => {
        if(LoginID === 3) return true;
        return false;
    },


    getUID: () => {
        return LoginID;
    },

    setUID: (id) => {
        LoginID = id;
        return LoginID;
    }

}
