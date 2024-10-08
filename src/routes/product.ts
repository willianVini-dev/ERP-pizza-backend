import express from 'express'
import multer from 'multer'
import { authenticate } from '../middlewares/authenticate'
import uploadConfig from "../config/multer"
import { create,findProductByCategory } from '../controllers/product/product.controller'
const upload = multer(uploadConfig.upload('./tmp'))

const productRoute = express.Router()

productRoute.post('/',authenticate,upload.single('file'),create )
productRoute.get('/by-category/',authenticate,findProductByCategory )

export {productRoute}