// template to create manager card 

const manager = (data) => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3>${data.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p>ID: ${data.id}</p>
                <p>Email:
                <a href="mailto:${data.email}">${data.email}</a>
                </p>
                <p>Office: ${data.officeNumber}</p>
            </div>
        </div>
    `
}

// template to create engineer card

const engineer = (data) => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3>${data.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p>ID: ${data.id}</p>
                <p>Email:
                <a href="mailto:${data.email}">${data.email}</a>
                </p>
                <a href="https://github.com/${data.github}">GitHub</a>
            </div>
        </div>
    `
}

// template to create intern card

const intern = data => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3>${data.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p>ID: ${data.id}</p>
                <p>Email:
                <a href="mailto:${data.email}">${data.email}</a>
                </p>
                <p>School: ${data.school}</p>
            </div>
        </div>
    `
}


const makeCards = teamArr => {
    let roster = '';

    for(let i = 0; i < teamArr.length; i++) {
        if(teamArr[i].getRole() === 'Manager') {
            roster += manager(teamArr[i])
        }
        if(teamArr[i].getRole() === 'Engineer' ) {
            roster += engineer(teamArr[i])
        }
        if(teamArr[i].getRole() === 'Intern' ) {
            roster += intern(teamArr[i])
        }
    }
    return roster;
}

const template = data => {
   return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">My Team</header>
    
    <div class="card-container">
        ${makeCards(data)}
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
</body>
</html>
    `
}

module.exports = template;