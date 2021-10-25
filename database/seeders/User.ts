import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
	public async run() {
		await User.createMany([
			{
				name: 'Yasser',
				email: 'yasser.mussa@gmail.com',
				password: 'secret',
			},
		])
	}
}
