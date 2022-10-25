const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Get the school of the employee
    fetchSchool() {
        return this.school;
    }
    // Get the role of the employee
    fetchRole() {
        return "Intern";
    }
}
// Export the class
module.exports = Intern;