const fs = require("fs");

function generateHtml(team) {
    const {manager, engineers, interns} = team;

    let managerCard = `<article class="profile">
            <section class="name">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </section>
            <section class="info">
                <li>ID: ${manager.id}</li>
                <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li>Office number: ${manager.officeNumber}</li>
            </section>
        </article>\n`;

    let internCards = [];
    interns.forEach(intern => {
        let internCard = `<article class="profile">
            <section class="name">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </section>
            <section class="info">
                <li>ID: ${intern.id}</li>
                <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li>School ${intern.school}</li>
            </section>
        </article>\n`;
        internCards.push(internCard);
    });

    let engineerCards = [];
    engineers.forEach(engineer => {
        let engineerCard = `<article class="profile">
            <section class="name">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </section>
            <section class="info">
                <li>ID: ${engineer.id}</li>
                <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </section>
        </article>\n`;
        engineerCards.push(engineerCard);
    });

    let html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>My Team</title>\n' +
        '    <link rel="stylesheet" href="style.css">\n' +
        '</head>\n' +
        '<body>\n' +
        '    <header class="header">\n' +
        '        <h1>My Team</h1>\n' +
        '    </header>\n' +
        '    <main class="team">\n';

    html += managerCard;
    engineerCards.forEach(card => {
        html += card;
    });
    internCards.forEach(card => {
        html += card;
    });
    html += '    </main>\n' +
        '</body>\n' +
        '</html>';

    fs.writeFile("index.html", html, (err) => {
        err ? console.error(err) : console.log("Team Page has been created!");
    });
}

module.exports = {
    generateHtml: generateHtml
};