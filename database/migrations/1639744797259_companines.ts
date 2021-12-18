import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companines extends BaseSchema {
	protected tableName = 'companies'

	public async up() {
		this.schema.alterTable(this.tableName, (table) => {
			table.integer('currency_id').unsigned().nullable().after('cover')
		})
	}

	public async down() {
		this.schema.alterTable(this.tableName, (table) => {
			table.dropColumn('currency_id')
		})
	}
}
