let baseUrl = "";
switch (process.env.NODE_ENV) {
    case 'dev':
        baseUrl = "http://localhost:8091/"  //开发环境url
        break
    case 'serve':
        baseUrl = "http://localhost:8091/"   //生产环境url
        break
}
 
export default baseUrl;