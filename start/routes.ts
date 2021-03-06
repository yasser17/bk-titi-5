/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
	return { hello: 'world' }
})

Route.post('login', 'UsersController.store')
Route.get('company-categories', 'CompanyCategoriesController.index')
Route.get('currencies', 'CurrenciesController.index')

Route.group(() => {
	Route.get('me', 'LoginController.show')

	Route.post('bussiness', 'CompaniesController.store')
	Route.patch('bussiness/:id', 'CompaniesController.update')
	Route.get('near-companies', 'GetNearMarkersController.index')
	Route.post('company-image-profile/:companyId', 'UploadCompanyImagesController.store')
	Route.post('company-image-cover/:companyId', 'UploadCompanyCoversController.store')

	Route.get('publications/:id', 'PublicationsController.index')
	Route.post('publication/:id', 'PublicationsController.store')
}).middleware(['auth'])
