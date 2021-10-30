import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, computed } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import CompanyCategory from 'App/Models/CompanyCategory'
import Env from '@ioc:Adonis/Core/Env'

export default class Company extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public user_id: number

	@column()
	public company_category_id: number

	@column()
	public name: string

	@column()
	public details: string

	@column()
	public email: string

	@column()
	public phone: string

	@column()
	public longitude: number

	@column()
	public latitude: number

	@column()
	public place_id: string

	@column()
	public address: string

	@column()
	public city: string

	@column()
	public country: string

	@column()
	public image: string

	@column()
	public cover: string

	@computed()
	public get imageUrl() {
		return `${Env.get('APP_URL')}/uploads/${this.image}`
	}

	@belongsTo(() => User)
	public user: BelongsTo<typeof User>

	@belongsTo(() => CompanyCategory)
	public category: BelongsTo<typeof CompanyCategory>

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}
