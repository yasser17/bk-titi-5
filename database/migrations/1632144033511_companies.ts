import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
	protected tableName = 'companies'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
			table
				.integer('company_category_id')
				.unsigned()
				.references('company_categories.id')
				.onDelete('CASCADE')
			table.string('name')
			table.string('details').nullable()
			table.string('email').nullable()
			table.string('phone').nullable()
			table.string('longitude').nullable()
			table.string('latitude').nullable()
			table.string('place_id').nullable()
			table.string('address').nullable()
			table.string('city').nullable()
			table.string('country').nullable()
			table.string('image').nullable()
			table.string('cover').nullable()

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
