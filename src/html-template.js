// template to create manager card 

const manager = (data) => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3 class="manager-name"></h3>
                <h4 class="manager-title"></h4>
            </div>

            <div class="card-body">
                <p class="manager-id">ID:</p>
                <p>Email:
                <a href="mailto:email@example.com" class="manger-email"></a>
                </p>
                <p>Office: </p>
            </div>
        </div>
    `
}

// template to create engineer card

const engineer = (data) => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3 class="engineer-name"></h3>
                <h4 class="engineer-role"></h4>
            </div>

            <div class="card-body">
                <p class="engineer-id">ID:</p>
                <p>Email:
                <a href="mailto:email@example.com"></a>
                </p>
                <p class="engineer-github">Github:</p>
            </div>
        </div>
    `
}

// template to create intern card

const intern = (data) => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3 class="intern-name"></h3>
                <h4 class="intern-role"></h4>
            </div>

            <div class="card-body">
                <p class="intern-id">ID:</p>
                <p class="intern-email">Email:
                <a href="mailto:email@example.com"></a>
                </p>
                <p>School:</p>
            </div>
        </div>
    `
}


const makeCards = () => {
    let roster = '';

    for(let i = 0; i < teamArr.length; i++) {
        if(teamArr[i].getRole() === 'Manager' ) {
            roster = manager(teamArr[i])
        }
        if(teamArr[i].getRole() === 'Engineer' ) {
            roster = engineer(teamArr[i])
        }
        if(teamArr[i].getRole() === 'Intern' ) {
            roster = intern(teamArr[i])
        }
    }
    return roster;
}

const template = (data) => {
    `
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
        ${makeCards}
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
</body>
</html>
    `
}

module.exports = template;