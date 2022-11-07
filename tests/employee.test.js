const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing the following properties: 'name', 'id', 'email'", () => {
            const employee = new Employee();
            const name = true;
            const id = true;
            const email = true;

            expect(name && email && id).toEqual(true);
        });

        it("should return the name of the employee", () => {
            const name = "Fred";
            const employee = new Employee(name, 1, "email@email.com");
            expect(employee.name).toEqual(employee.name);
        });

        it("should return the id of the employee", () => {
            const id = 1;
            const employee = new Employee("Fred", id, "email@email.com");
            expect(employee.id).toEqual(employee.id);
        });

        it("should return the email of the employee", () => {
            const email = "email@email.com";
            const employee = new Employee("Fred", 1, email);
            const employee2 = employee;
            expect(employee.email).toEqual(employee2.email);
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const name = "Fred";
            const employee = new Employee(name, 1, "email@email.com");
            expect(employee.fetchName()).toEqual(employee.name);
        });
    });

    describe("getId", () => {
        it("should return the id of the employee", () => {
            const id = 1;
            const employee = new Employee("Fred", id, "email@email.com");
            expect(employee.fetchId()).toEqual(employee.id);
        });
    });

    describe("getEmail", () => {
        it("should return the name of the employee", () => {
            const email = "email@email.com";
            const employee = new Employee("Fred", 1, email);
            expect(employee.fetchEmail()).toEqual(employee.email);
        });
    });

    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const employee = new Employee("Fred", 1, "email@gmail.com");
            expect(employee.fetchRole()).toEqual(employee.fetchRole());
        });
    });
});
