import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Currency from 'App/Models/Currency'

export default class CurrenciesSeederSeeder extends BaseSeeder {
	public async run() {
		await Currency.createMany([
			{ name: 'Australian dollar', code: 'AUD' },
			{ name: 'Brazilian real 2', code: 'BRL' },
			{ name: 'Canadian dollar', code: 'CAD' },
			{ name: 'Chinese Renmenbi 3', code: 'CNY' },
			{ name: 'Czech koruna', code: 'CZK' },
			{ name: 'Danish krone', code: 'DKK' },
			{ name: 'Euro', code: 'EUR' },
			{ name: 'Hong Kong dollar', code: 'HKD' },
			{ name: 'Hungarian forint 1', code: 'HUF' },
			{ name: 'Israeli new shekel', code: 'ILS' },
			{ name: 'Japanese yen 1', code: 'JPY' },
			{ name: 'Malaysian ringgit 3', code: 'MYR' },
			{ name: 'Mexican peso', code: 'MXN' },
			{ name: 'New Taiwan dollar 1', code: 'TWD' },
			{ name: 'New Zealand dollar', code: 'NZD' },
			{ name: 'Norwegian krone', code: 'NOK' },
			{ name: 'Philippine peso', code: 'PHP' },
			{ name: 'Polish złoty', code: 'PLN' },
			{ name: 'Pound sterling', code: 'GBP' },
			{ name: 'Russian ruble', code: 'RUB' },
			{ name: 'Singapore dollar', code: 'SGD' },
			{ name: 'Swedish krona', code: 'SEK' },
			{ name: 'Swiss franc', code: 'CHF' },
			{ name: 'Thai baht', code: 'THB' },
			{ name: 'United States dollar', code: 'USD' },
		])
	}
}
