import { request, response, Router} from 'express';

const routes = new Router();

routes.get('/', (request, response) => {
    return response.json({message: 'Oi'});
});

export default routes;
