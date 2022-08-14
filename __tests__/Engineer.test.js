const Engineer = require('../lib/Engineer')

test('Creates a new employee with the role of Engineer', () => {
    const engineer = new Engineer ("Brandon Langer", 001, "brandonslanger@gmail.com", 'https://github.com/minotaurius')
    
    expect(employee.name).toBe('Brandon Langer');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test('Checking that our methods are returning the correct properties', () => {
    const employee = new Employee ("Brandon Langer", 28, "brandonslanger@gmail.com")

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getGithub()).toEqual(employee.github);
    expect(employee.getRole()).toBe('Employee')
})