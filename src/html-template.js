// template to create manager card 

const manager = () => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3 class="manager-name">Brandon</h3>
                <h4 class="manager-title">Coding Student</h4>
            </div>

            <div class="card-body">
                <p class="manager-id">ID:</p>
                <p>Email:
                <a href="mailto:email@example.com" class="manger-email">brandonslanger@gmail.com</a>
                </p>
                <p>Office: </p>
            </div>
        </div>
    `
}

const engineer = () => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3 class="engineer-name">Jeff</h3>
                <h4 class="engineer-role">Coding Student's Father</h4>
            </div>

            <div class="card-body">
                <p class="engineer-id">ID:</p>
                <p>Email:
                <a href="mailto:email@example.com">brandonslanger@gmail.com</a>
                </p>
                <p class="engineer-github">Github:</p>
            </div>
        </div>
    `
}

const intern = () => {
    return `
        <div class="cards">
            <div class="card-header">
                <h3 class="intern-name">Alex</h3>
                <h4 class="intern-role">Coding Student's Brother</h4>
            </div>

            <div class="card-body">
                <p class="intern-id">ID:</p>
                <p class="intern-email">Email:
                <a href="mailto:email@example.com">brandonslanger@gmail.com</a>
                </p>
                <p>School:</p>
            </div>
        </div>
    `
}