import jwt from 'jsonwebtoken';
import User from '../models/User';


class SessionController {
    async store(request, response) {
        const { email, password } = request.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return response.status(400).json({ erro: 'Usuário não existe' });
        }
    }
}

export default new SessionController();