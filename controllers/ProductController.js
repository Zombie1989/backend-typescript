const { Router } = require('express')
const express = require('express')
const controller = express.Router()

const productSchema = require('./schemas/productSchema')

// unsceured routes
controller.route('/').get(async(req, res) => {
    const products = []
    const list = await productSchema.find()
    if(list) {
        for(let product of list) {
            console.log(product)
             products.push({
                 articleNumber: product._id,
                 name: product.name,
                 description: product.description,
                 category: product.category,
                 price: product.price,
                 rating: product.rating,
                 imageName: product.imageName,
                 tag: product.tag
              })
        }
        res.status(200).json(products)
    } else
        res.status(400).json
})

controller.route('/:tag').get(async(req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag})
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
                tag: product.tag
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json
})

controller.route('/:tag/:take').get(async(req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag}).limit(req.params.take)
    if(list) {
        for(let product of list) {
            products.push({
                articleNumber: product._id,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                rating: product.rating,
                imageName: product.imageName,
                tag: product.tag
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json
})

controller.route('/product/article/:articleNumber').get(async(req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)
    if(product) {
        res.status(200).json({
            articleNumber: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            rating: product.rating,
            imageName: product.imageName,
            tag: product.tag
        })
    } else
        res.status(404).json()
})


// secured routes
controller.route('/').post(async(req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body

    if (!name || !price)
        res.status(400).json({text: 'name and price is required.'})
    
        const item_exists = await productSchema.findOne({name, price})
        if (item_exists)
            res.status(409).json({text: 'a product with the same name already exists.'})
        else {
            const product = await productSchema.create({
                name,
                description,
                price,
                category,
                tag,
                imageName,
                rating
            })
            if (product)
                res.status(201).json({test: `product with the articlenumber ${product._id} was added successfully `})
            else
                res.status(400).json({text: 'something went wrong, please try again'})
        }
})

controller.route('/:articleNumber').delete(async(req, res) => {
    if(!req.params.articleNumber)
        res.status(400).json('no articlenumber was specified')
    else {
        const item = await productSchema.findById(req.params.articleNumber)
        if (item) {
            await productSchema.remove(item)
            res.status(200).json({text: `product with articlenumber ${req.params.articleNumber} was removed`})
        } else {
            res.status(404).json({text: `product with articlenumber ${req.params.articleNumber} was not found`})
        }
    }
})

controller.route('/:articleNumber').put(async (req, res) => {
    try { console.log(req)
        await productSchema.findByIdAndUpdate(req.params.articleNumber, {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            tag: req.body.tag,
            rating: req.body.rating,
            imageName: req.body.imageName
        }) 
        res.send('Product Updated!')
    } catch(err) {
        console.error(err.message);
        res.send(400).send('Server Error')
    }
})




module.exports = controller