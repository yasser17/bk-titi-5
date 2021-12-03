import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'

export default class CompaniesController {
	public async store({ request, auth }: HttpContextContract) {
		const company = await Company.create({
			...request.only([
				'address',
				'city',
				'company_category_id',
				'country',
				'details',
				'email',
				'latitude',
				'longitude',
				'name',
				'phone',
				'place_id',
			]),
			user_id: auth.user?.id,
		})

		return company
	}

	public async update({ request, params }: HttpContextContract) {
		const updateCompanySchema = schema.create({
			name: schema.string({}, [rules.required()]),
			details: schema.string({}, [rules.required()]),
			phone: schema.string({}, [rules.required()]),
		})
		try {
			await validator.validate({ schema: updateCompanySchema, data: request.all() })
		} catch (e) {
			console.log(e.messages)
		}

		const company = await Company.findOrFail(params.id)

		company.merge(
			request.only([
				'address',
				'city',
				'company_category_id',
				'country',
				'details',
				'email',
				'latitude',
				'longitude',
				'name',
				'phone',
				'place_id',
			])
		)
		await company.save()

		return company
	}
}
