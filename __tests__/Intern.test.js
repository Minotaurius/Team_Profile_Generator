const Intern = require('../lib/Intern')

test('Creates a new employee with the role of Intern', () => {
    const intern = new Intern ("Brandon Langer", 001, "brandonslanger@gmail.com", 'Minnesota State University Mankato')
    
    expect(intern.name).toBe('Brandon Langer');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('Checking that our methods are returning the correct properties', () => {
    const intern = new Employee ("Brandon Langer", 001, "brandonslanger@gmail.com")

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getSchool()).toEqual(intern.school);
    expect(intern.getRole()).toBe('Intern')
})