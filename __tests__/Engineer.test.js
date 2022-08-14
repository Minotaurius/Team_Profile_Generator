const Engineer = require('../lib/Engineer')

test('Creates a new employee with the role of Engineer', () => {
    const engineer = new Engineer ("Brandon Langer", 3, "brandonslanger@engineer.com", 'https://github.com/minotaurius')
    
    expect(engineer.name).toBe('Brandon Langer');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('Checking that our methods are returning the correct properties', () => {
    const engineer = new Engineer ("Brandon Langer", 3, "brandonslanger@engineer.com")

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getGithub()).toEqual(engineer.github);
    expect(engineer.getRole()).toBe('Engineer')
})