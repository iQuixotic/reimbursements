
var inquirer = require("inquirer");
// var Table = require('cli-table');

// main menu function
function menuQ(role){
    if(role === 'superAdmin') {
        superAdminQs();
    }
    if(role === 'admin') {
        adminQs();
    }

    if(role === 'worker') {
        workerQs();
    }
}

const superAdminQs = () => {
    inquirer.prompt({
        name: "menuMain",
        type: "rawlist",
        message: "What would you like to do ?",
        choices: ['VIEW USERS', 'VIEW REIMBURSEMENTS']
      })
      .then(function(answer) {
       
        if (answer.menuMain === 'VIEW USERS') {

        }
        else if (answer.menuMain === 'VIEW REIMBURSEMENTS') {
          
        }
    });
}

const adminQs = () => {
    inquirer.prompt({
        name: "menuMain",
        type: "rawlist",
        message: "What would you like to do ?",
        choices: ['VIEW USERS', 'VIEW REIMBURSEMENTS']
      })
      .then(function(answer) {
       
        if (answer.menuMain === 'VIEW USERS') {

        }
        else if (answer.menuMain === 'VIEW REIMBURSEMENTS') {
          
        }
      });
}

const workerQs = () => {
    inquirer.prompt({
        name: "menuMain",
        type: "rawlist",
        message: "What would you like to do ?",
        choices: ['VIEW ALL USERS', 'VIEW SINGLE USER', 'EDIT ONE USER',
                    'ADD A NEW REIMBURSEMENT', 'VIEW REIMBURSEMENTS' ]
      })
      .then(function(answer) {
       
        if (answer.menuMain === 'VIEW USERS') {

        }
        else if (answer.menuMain === 'VIEW REIMBURSEMENTS') {
          
        }
      });
}