import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Company from 'App/Models/Company'

export default class Post extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public company_id: Number

	@column()
	public type: String

	@column()
	public description: String

	@column()
	public url: String

	@belongsTo(() => Company)
	public company: BelongsTo<typeof Company>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@column.dateTime()
	public deletedAt: DateTime
}
