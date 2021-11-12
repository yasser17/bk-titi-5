import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
	protected tableName = 'posts'

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id')
			table.integer('company_id').unsigned().references('id').inTable('companies')
			table.string('type').defaultTo('image')
			table.text('description').nullable()
			table.string('url').nullable()

			/**
			 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
			 */
			table.timestamp('created_at', { useTz: true })
			table.timestamp('updated_at', { useTz: true })
			table.dateTime('deleted_at').nullable()
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
