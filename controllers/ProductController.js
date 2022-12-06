let products = require('../data/simulated_database')
const express = require('express')
const controller = express.Router()


controller.param("articleNumber", (req, res, next, articleNumber) => {
    req.product = products.find(x => x.articleNumber == articleNumber)
    next()
})

controller.param("tag", (req, res, next, tag) => {
    req.products = products.filter(x => x.tag == tag)
    next()
})


controller.route('/article/:articleNumber').get((req, res) => {
    if(req.product != undefined)
        res.status(200).json(req.product)
    else
        res.status(404).json()
})

controller.route('/:tag').get((req, res) => {
    if(req.products != undefined)
        res.status(200).json(req.products)
    else
        res.status(404).json()
})

controller.route('/:tag/:take').get((req, res) => {
    let list = []
    
    for (let i = 0; i < Number(req.params.take); i++)
        list.push(req.products[i])

        res.status(200).json(list)
})


controller.route('/').get((req, res) => {
    res.status(200).json(products)
})





/*
controller.param("articleNumber", (req, res, next, articleNumber) => {
    req.product = products.find(product => product.articleNumber == articleNumber)
    next()
})

// http://localhost:5000/api/product/

controller.post('/', (httpRequest, httpResponse) => {

    let product = {
        articleNumber: (products[products.length -1])?.id > 0 ? (articleNumber[articleNumber.length -1])?.id + 1 : 1,
        name: httpRequest.body.name,
        description: httpRequest.body.description,
        category: httpRequest.body.category,
        price: httpRequest.body.price,
        rating: httpRequest.body.rating,
        imageName: httpRequest.body.imageName
    }


    products.push(product)
    httpResponse.status(201).json(products)
})
.get((httpRequest, httpResponse) => {
    httpResponse.status(200).json(products)
})



// http://localhost:5000/api/products/1

controller.route("/:articleNumber")
.get((httpRequest, httpResponse) => {
    if(httpRequest.product != undefined)
        httpResponse.status(200).json(httpRequest.product)
    else
        httpResponse.status(404).json()
})

.put((httpRequest, httpResponse) => {
    if(httpRequest.product != undefined) {
        products.forEach(product => {
            if (product.articleNumber == httpRequest.product.articleNumber) {
                product.name = httpRequest.body.name ? httpRequest.body.name : product.name
                product.description = httpRequest.body.description ? httpRequest.body.description : product.description
                product.category = httpRequest.body.category ? httpRequest.body.category : product.category
                product.price = httpRequest.body.price ? httpRequest.body.price : product.price
                product.rating = httpRequest.body.rating ? httpRequest.body.rating : product.rating
                product.imageName = httpRequest.body.imageName ? httpRequest.body.imageName : product.imageName
            }
        })
        httpResponse.status(200).json(httpRequest.product)
    } 
    else
        httpResponse.status(404).json()
})

.delete((httpRequest, httpResponse) => {
    if(httpRequest.product != undefined) {
        products = products.filter(product => product.articleNumber !== httpRequest.product.articleNumber)
        httpResponse.status(204).json()
    }

    else
        httpResponse.status(404).json({msg: 'not found'})
})

*/




module.exports = controller 