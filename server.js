const appName = "angular-with-bootstrap"
const express = require('express');
//const forceSsl = require('force-ssl-heroku');

const app = express();
//app.use(forceSsl);

app.use(express.static(__dirname+`/dist/${appName}`));

app.get('/*',function(request,response){
    response.sendFile(__dirname+`/dist/${appName}/index.html`);
})

app.listen(process.env.PORT || 4200);
