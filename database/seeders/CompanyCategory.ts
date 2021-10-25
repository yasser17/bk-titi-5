import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CompanyCategory from 'App/Models/CompanyCategory'

export default class CompanyCategorySeeder extends BaseSeeder {
	public async run() {
		await CompanyCategory.createMany([
			{ name: 'Restaurante' },
			{ name: 'Agencias de Viaje' },
			{ name: 'Transportes' },
			{ name: 'Herramientas' },
			{ name: 'Ropa' },
			{ name: 'Cine' },
			{ name: 'Mecánico' },
			{ name: 'Hotel' },
			{ name: 'Famacia' },
			{ name: 'Centro Comerciale' },
			{ name: 'Salone de Belleza' },
			{ name: 'Librería' },
			{ name: 'Supermercado' },
		])
	}
}
