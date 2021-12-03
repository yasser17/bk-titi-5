import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
	protected tableName = 'products'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table
				.integer('company_id')
				.notNullable()
				.unsigned()
				.references('id')
				.inTable('companies')

			table.string('name').notNullable()
			table.text('description').defaultTo('')
			table.double('price', 15, 2).defaultTo(0)
			table.string('video').nullable();
			table.integer('stock').nullable().defaultTo(0);

			/**
			 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
			 */
			table.timestamp('created_at', { useTz: true })
			table.timestamp('updated_at', { useTz: true })
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
