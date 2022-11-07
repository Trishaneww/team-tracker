const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // Get the github of the employee
    fetchGithub() {
        return this.github;
    }
    // Get the role of the employee
    fetchRole() {
        return "Engineer";
    }
}
// Export the class
module.exports = Engineer;
