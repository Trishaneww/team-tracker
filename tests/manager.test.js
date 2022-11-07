const Manager = require("../lib/manager");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing the following properties: 'name', 'id', 'email', 'officeNumber'", () => {
            const manager = new Manager();

            expect("name" in manager && "id" in manager && "email" in manager && "officeNumber" in manager).toEqual(true);
        });

        it("should return the name of the manager", () => {
            const name = "Fred";
            const manager = new Manager(name, 1, "email@email.com", 1);
            expect(manager.name).toEqual(name);
        });

        it("should return the id of the manager", () => {
            const id = 1;
            const manager = new Manager("Fred", id, "email@email.com", 1);
            expect(manager.id).toEqual(id);
        });

        it("should return the email of the manager", () => {
            const email = "email@email.com";
            const manager = new Manager("Fred", 1, email, 1);
            expect(manager.email).toEqual(email);
        });

        it("should return the officeNumber of the manager", () => {
            const officeNumber = 1;
            const manager = new Manager("Fred", 1, "email", officeNumber);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

    describe("fetchName", () => {
        it("should return the name of the manager", () => {
            const name = "Fred";
            const manager = new Manager(name, 1, "email@email.com", 1);
            expect(manager.fetchName()).toEqual(name);
        });
    });

    describe("fetchId", () => {
        it("should return the id of the manager", () => {
            const id = 1;
            const manager = new Manager("Fred", id, "email@email.com", 1);
            expect(manager.fetchId()).toEqual(id);
        });
    });

    describe("fetchEmail", () => {
        it("should return the name of the manager", () => {
            const email = "email@email.com";
            const manager = new Manager("Fred", 1, email, 1);
            expect(manager.fetchEmail()).toEqual(email);
        });
    });

    describe("fetchRole", () => {
        it("should return the role of the manager", () => {
            const role = "Manager";
            const manager = new Manager("Fred", 1, "email@gmail.com", "officeNumber");
            expect(manager.fetchRole()).toEqual(role);
        });
    });
});
