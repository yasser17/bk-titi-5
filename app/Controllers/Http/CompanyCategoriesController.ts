// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CompanyCategory from 'App/Models/CompanyCategory'

export default class CompanyCategoriesController {
	public async index() {
		const categories = await CompanyCategory.query().orderBy('name')

		return categories
	}
}
