import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, computed } from '@ioc:Adonis/Lucid/Orm'
import Company from 'App/Models/Company'
import Env from '@ioc:Adonis/Core/Env'

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

	@computed()
	public get imageUrl() {
		if (!this.url) return null

		return `${Env.get('APP_URL')}/uploads/${this.url}`
	}

	@belongsTo(() => Company)
	public company: BelongsTo<typeof Company>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@column.dateTime()
	public deletedAt: DateTime
}
