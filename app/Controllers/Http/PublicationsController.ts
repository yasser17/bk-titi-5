import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import Post from 'App/Models/Post'
import Jimp from 'jimp'
import { randomBytes } from 'crypto'
import Application from '@ioc:Adonis/Core/Application'
import Drive from '@ioc:Adonis/Core/Drive'

export default class PublicationsController {
	public async index({ request, params }: HttpContextContract) {
		const { page } = request.all()

		const publications = await Post.query().where('company_id', params.id).paginate(page)

		return publications;
	}

	public async store({ request, params }: HttpContextContract) {
		const company = await Company.findOrFail(params.id)
		const image = request.file('image')
		const { description } = request.all()

		if (image) {
			const fileName = randomBytes(16).toString('hex')
			const fileNameComplete = `${fileName}.${image.extname}`

			await image.move(Application.publicPath('uploads'), {
				name: fileNameComplete,
				overwrite: true,
			})

			await Jimp.read(`${Application.publicPath('uploads')}/${fileNameComplete}`).then(
				(f) => {
					f.cover(1280, 960)
						.quality(60)
						.write(`${Application.publicPath('uploads')}/${fileNameComplete}`)
				}
			)

			await Drive.getUrl(fileNameComplete)

			const post = await Post.create({
				url: fileNameComplete,
				type: 'image',
				description,
				company_id: company.id,
			})

			return post
		}
	}
}
