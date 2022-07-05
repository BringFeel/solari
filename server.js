// Server
var express = require('express');
var app = express();
var https = require('https');
const chalk = require("chalk");
var figlet = require('figlet');
var errorHandler = require('express-error-handler');
var fs = require('fs');
var files = fs.readdirSync(__dirname + '/WebFiles');


//Config
this.config = require('./config.js');
const port = this.config.PORT || 80
const httpsport = this.config.HTTPS_PORT || 443
const usehttps = this.config.USE_HTTPS || 'false';
const usehttp = this.config.USE_HTTP || 'false';

  handler = errorHandler({
    static: {
      '404': 'Server_Pages/404.html'
    }
  });

  if (usehttps === 'true') {
    var httpsenabled = (chalk.green('ACTIVE'));
  } else {
    var httpsenabled = (chalk.red('INACTIVE'));
  }

  if (usehttp === 'true') {
    var httpenabled = (chalk.green('ACTIVE'));
  } else {
    var httpenabled = (chalk.red('INACTIVE'));
  }

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
  console.log(chalk.magenta('------------------'), chalk.green('Status'), chalk.magenta('------------------'));
  console.log(`HTTP ${httpenabled} | PORT ${port}`)
  console.log(`HTTPS ${httpsenabled} | PORT ${httpsport}`)
  console.log(chalk.magenta('----------------'), chalk.green('Web Server'), chalk.magenta('----------------'));

  if (usehttp === 'true') {
app.use(express.static(__dirname + '/WebFiles'));

app.use( errorHandler.httpError(404) );
app.use( handler );

app.listen(port, () => {
    console.log(chalk.blue.bgRed.bold(`Server http is running on http://0.0.0.0:${port}`))
})
  }

if (usehttps === 'true') {
  https.createServer({
    cert: fs.readFileSync(__dirname + '/certificates/certificate.crt'),
    key: fs.readFileSync(__dirname + '/certificates/certificate.key')
  },app).listen(httpsport, function(){
    console.log(chalk.blue.bgRed.bold(`Server https is running on http://0.0.0.0:${httpsport}`));
  });
  app.use(express.static(__dirname + '/WebFiles'));
}
