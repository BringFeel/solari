![Solari banner](https://github.com/BringFeel/solari/blob/main/images/solari-web-server.png)

<div align="center">

[![Downloads](https://img.shields.io/github/downloads/BringFeel/solari/total?style=for-the-badge)](https://github.com/BringFeel/solari/releases/latest)
[![Stars](https://img.shields.io/github/stars/BringFeel/solari?style=for-the-badge)](https://github.com/BringFeel/solari/stargazers)
[![Discord](https://img.shields.io/discord/952035654831845457?color=%237289DA&style=for-the-badge)](https://discord.bringfeel.com)
[![Release](https://img.shields.io/github/v/release/BringFeel/solari?style=for-the-badge)](https://github.com/BringFeel/solari/releases/tag/2.0)</br>

</div>

# Installation
1) run `npm i`
2) If you have problems with nodemon run `npm install --global nodemon`
3) If you are on windows use `start.bat` if you are on linux use `start.sh`
4) Connect to `http://localhost:8080` (If you have the default config)

![Solari webhost working](https://github.com/BringFeel/solari/blob/main/images/solari-working.png)\
If you don't have the possibility to run the server via `.bat` or `.sh` use `nodemon -e js,html,css ./server.js` on terminal

# Configuration
1) Go to `config.js`
```js
module.exports = {

PORT: '8080',
HTTPS_PORT: '4545',
USE_HTTPS: 'false',
USE_HTTP: 'true'

}
```
2) Edit the 4 configs
3) Save, Done!

# SSL/HTTPS Mode
You need a ssl certificate!
1) Delete the demo files in the folder
2) Copy your ssl certificates to folder `certificates`
3) Rename to `certificate` on the 2 files
4) The certificates needs `.crt` and `.key` extensions
5) Enable the https mode on `config.js`
```js
USE_HTTPS: 'true',
```
6) Done!

# Editing Files
1) Go to the folder `WebFiles`\
![Folder](https://github.com/BringFeel/solari/blob/main/images/folder.png)
2) Upload or edit your files\
![File](https://github.com/BringFeel/solari/blob/main/images/file.png)
3) Done!
