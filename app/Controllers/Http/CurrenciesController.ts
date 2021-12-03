// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Currency from "App/Models/Currency";

export default class CurrenciesController {
	public async index() {
		const currencies = await Currency.query().orderBy('name');

		return currencies;
	}
}
