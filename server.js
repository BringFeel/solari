var express = require('express');
var app = express();
const chalk = require("chalk");
require("dotenv").config();
const port = process.env.PORT || 80
var figlet = require('figlet');
var errorHandler = require('express-error-handler');
var fs = require('fs');
var files = fs.readdirSync(__dirname + '/WebFiles');

  handler = errorHandler({
    static: {
      '404': 'Error_Pages/404.html'
    }
  });

app.use(express.static(__dirname + '/WebFiles'));

app.use( errorHandler.httpError(404) );
app.use( handler );

app.listen(port, () => {
    console.log(chalk.magenta('----------------'), chalk.green('Web Server'), chalk.magenta('----------------'));
    console.log()
    console.log(chalk.cyan(figlet.textSync('Solari', {
        font: 'ANSI Shadow',
    })));
    console.log(chalk.magenta('--------------------------------------------'));
    console.log('Discord: https://discord.gg/t5sMubXFeX');
    console.log('Website: https://bringfeel.com');
    console.log('GitHub: https://github.com/BringFeel/solari');
    console.log(chalk.magenta('-------------'), chalk.green(' Files/Folders '), chalk.magenta('--------------'));
    console.log(files)
    console.log(chalk.magenta('----------------'), chalk.green('Web Server'), chalk.magenta('----------------'));
    console.log(chalk.blue.bgRed.bold(`Server is running on http://0.0.0.0:${port}`))
})

//Tremendo Spam papá 