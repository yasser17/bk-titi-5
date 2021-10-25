import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
	public async store({ request, auth }: HttpContextContract) {
		const { email, password } = request.all()

		const token = await auth.attempt(email, password)
		const user = await User.findBy('email', email)

		return { token, user }
	}
}
