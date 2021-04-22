export default (request , response, next) => {
    const authHeader = request.headers.authorization;

    console.log(authHeader);

    return next();
};