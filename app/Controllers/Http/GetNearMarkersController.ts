import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Company from 'App/Models/Company'

export default class GetNearMarkersController {
	public async index({ request }: HttpContextContract) {
		const { lat, lng } = request.all()

		const results = await Database.rawQuery(
			'SELECT id, longitude, latitude, SQRT(POW(69.1 * (latitude - ? ), 2) + POW(69.1 * (? - longitude) * COS(latitude/57.3), 2)) as distance FROM companies HAVING distance < 50;',
			[lat, lng]
		)

		const ids = results[0].map((x) => x.id)

		const companies = await Company.query().whereIn('id', ids)

		return companies
	}
}
