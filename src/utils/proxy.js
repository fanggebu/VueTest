const  http=  require ('http');
const  request=  require ('request');
const  hostname  ='127.0.0.1';
const  port  =  8010;
const  imgPort  =  8011;

const apiServer = http.createServer((req,res) => {
    const url = ''+req.url;
    const opations = {
        url: url
    };
    function callback (error, response , body){
        if(!error && response.statusCode === 200){
            // res.setHeader();
            res.setHeader('token','fdsaggg');
            res.end(body);
        }
    }
    request.get(opations, callback);

} );
