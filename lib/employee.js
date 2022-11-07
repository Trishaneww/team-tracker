class Employee {
    // Constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Get the name of the employee
    fetchName() {
        return this.name;
    }
    // Get the id of the employee
    fetchId() {
        return this.id;
    }
    // Get the id of the employee
    fetchEmail() {
        return this.email;
    }
    // Get the role of the employee
    fetchRole() {
        return "Employee";
    }
}
// Export the class
module.exports = Employee;
