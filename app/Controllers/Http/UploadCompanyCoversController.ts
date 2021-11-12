import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'
import { randomBytes } from 'crypto'
import Jimp from 'jimp'
import Application from '@ioc:Adonis/Core/Application'
import Drive from '@ioc:Adonis/Core/Drive'

export default class UploadCompanyCoversController {
	public async store({ params, request }: HttpContextContract) {
		const image = request.file('image')
		const company = await Company.findOrFail(params.companyId)

		if (image && image.type === 'image') {
			const fileName = randomBytes(16).toString('hex')
			const fileNameComplete = `${fileName}.${image.extname}`

			await image.move(Application.publicPath('uploads'), {
				name: fileNameComplete,
				overwrite: true,
			})

			await Jimp.read(`${Application.publicPath('uploads')}/${fileNameComplete}`).then(
				(f) => {
					f.cover(414, 157)
						.quality(60)
						.write(`${Application.publicPath('uploads')}/${fileNameComplete}`)
				}
			)

			company.cover = fileNameComplete
			await company.save()
			await company.refresh()

			await Drive.getUrl(fileNameComplete)

			return company
		}
	}
}
