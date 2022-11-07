const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Get the role of the employee
    fetchRole() {
        return "Manager";
    }
}

// Export the class
module.exports = Manager;
