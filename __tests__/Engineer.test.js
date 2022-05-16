const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "HuyBui1987";
    const employeeInstance = new Engineer("Kenny", 2, "KennyBui@example.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "HuyBui1987";
    const employeeInstance = new Engineer("Kenny", 2, "KennyBui@example.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Kenny", 2, "KennyBui@example.com", "JamesLJenks");
    expect(employeeInstance.getRole()).toBe(returnValue);
});