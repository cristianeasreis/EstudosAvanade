import Sequelize, { Model } from 'sequelize'; 
import bcrypt from 'bcryptjs';


class User extends Model {
    static init(sequelize) {
		super.init({
			name: Sequelize.STRING,
			email: Sequelize.STRING,
			password: Sequelize.VIRTUAL, // virtual 
			password_hash: Sequelize.STRING,
			provider: Sequelize.BOOLEAN,
		}, {
			sequelize,
		});
		this.addHook('beforeSave', async (user) =>{
			if(user.password){
				user.password_hash = await bcrypt.hash(user.password, 0);
			}
		});
		return this; // sempre vai retornar a model reinicializada
	}
}

export default User;