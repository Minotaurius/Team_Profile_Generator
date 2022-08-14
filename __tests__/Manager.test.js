const Manager = require('../lib/Manager')

test('Creates an employee with the role of Manager', () => {
    const manager = new Manager ("Brandon Langer", 001, "brandonslanger@gmail.com", "275A")
    
    expect(manager.name).toBe('Brandon Langer');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
})

test('Checking that our methods are returning the correct properties', () => {
    const manager = new Manager ("Brandon Langer", 001, "brandonslanger@gmail.com", "275A")

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getRole()).toBe('Manager')
})