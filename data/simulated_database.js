const products = [
    {
        tag: "featured", 
        articleNumber: "87e04ee1-6ba8-4e4e-87f2-b5594e06daf6", 
        name: "Black coat", 
        description: "", 
        category: "Coats", 
        price: 100, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png"
    },
    { 
        tag: "SaleOne",
        articleNumber: "240e8e8d-7ee4-4133-93ae-08f50d27d0ab", 
        name: "Black Dress", 
        description: "",
        category: "Dresses",
        price: 80, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png"
    },
    { 
        tag: "SaleOne",
        articleNumber: "97b93d8c-e6c6-4f87-86c3-402639d84d13", 
        name: "Black top & pants", 
        description: "",
        category: "Sets",
        price: 150, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png"
    },
    { 
        tag: "",
        articleNumber: "8428b682-3b77-4668-8109-4c048949208e", 
        name: "WHite top & pants", 
        description: "",
        category: "Sets", 
        price: 150, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png"
    },
    { 
        tag: "",
        articleNumber: "e214e043-05ef-4e31-b4fc-fd157f71ec41", 
        name: "Blue jacket", 
        description: "",
        category: "Jackets", 
        price: 200, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png"
    },
    { 
        tag: "",
        articleNumber: "b14c5884-f2ee-46a1-9a2e-811858d38276", 
        name: "Blue hoody & pants", 
        description: "",category: "Sets",
        price: 150, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png"
    },
    { 
        tag: "SaleTwo",
        articleNumber: "49362f5a-e2f1-4727-82e0-d9a9597d4700", 
        name: "Blue t-shirt", 
        description: "",
        category: "T-shirts",
        price: 50, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"
    },
    { 
        tag: "",
        articleNumber: "3ab92930-7a96-4c2f-aa61-05ff698d8843", 
        name: "Brown sweater", 
        description: "",
        category: "Sweaters", 
        price: 80, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png"
    },
    { 
        tag: "featured", 
        articleNumber: "c08680c6-84a7-4eee-8454-cd1848c9c19c", 
        name: "Brown watch", 
        description: "",
        category: "accessories", 
        price: 50, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png"
    },
    { 
        tag: "featured", 
        articleNumber: "1477c9b0-df64-4a97-b733-9581aeb403d7", 
        name: "Stiletto shoes ", 
        description: "",
        category: "Shoes", 
        price: 80, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"
    },
    { 
        tag: "featured", 
        articleNumber: "9b25e43f-1618-47d8-be3f-56228af30d69", 
        name: "Gray t-shirt", 
        description: "",
        category: "T-shirts", 
        price: 50, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png"
    },
    { 
        tag: "featured", 
        articleNumber: "9a7d610b-29d3-4841-9f1a-aaf84d46f85c", 
        name: "Jeans dress", 
        description: "",
        category: "Dresses", 
        price: 180, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png"
    },
    { 
        tag: "SaleOne",
        articleNumber: "f3aa52dd-fa39-46a4-b434-3faea3044e45", 
        name: "Jeans jacket & pants", 
        description: "",
        category: "Sets", 
        price: 240, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png"
    },
    { 
        tag: "SaleTwo",
        articleNumber: "89180909-99ca-4b5c-b747-8b789b2e1e80", 
        name: "Olive sweater", 
        description: "",
        category: "Sweaters", 
        price: 80, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png"
    },
    { 
        tag: "SaleTwo",
        articleNumber: "b16e6965-0ef1-473d-8d89-52763122a27d", 
        name: "Multicolor t-shirt", 
        description: "",
        category: "T-shirts", 
        price: 50, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png"
    },
    { 
        tag: "SaleOne",
        articleNumber: "8bb48485-d1b8-49a7-8c42-f4abc9946522", 
        name: "Purple handbag", 
        description: "",
        category: "Bags", 
        price: 150, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png"
    },
    { 
        tag: "",
        articleNumber: "41116742-f3b6-4c46-897d-d469eda8c75c", 
        name: "Red handbag", 
        description: "",
        category: "Bags", 
        price: 150, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png"
    },
    { 
        tag: "SaleTwo",
        articleNumber: "703ff927-9b1a-46b1-93cc-8d86135d714b", 
        name: "Red dress", 
        description: "",
        category: "Dresses", 
        price: 80, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png"
    },
    { 
        tag: "featured", 
        articleNumber: "407cc2a3-5dba-43f2-9042-a71b633a4b29", 
        name: "Striped top", 
        description: "",
        category: "Tops", 
        price: 40, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png"
    },
    { 
        tag: "featured", 
        articleNumber: "840aa91b-f602-4caf-878c-778bf23ac33c", 
        name: "Striped pink pants", 
        description: "",
        category: "Pants", 
        price: 80, 
        rating: 5, 
        imageName: "    "
    },
    { 
        tag: "featured", 
        articleNumber: "6a8e4616-f284-4472-898b-66ba362d56d4", 
        name: "White sweater", 
        description: "",
        category: "Sweaters", 
        price: 80,
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png"
    },
    { 
        tag: "",
        articleNumber: "aa6e1f6a-4af1-4044-b7c6-d9bc743fa7c9", 
        name: "Winter boots", 
        description: "",
        category: "Shoes", 
        price: 240, 
        rating: 5, 
        imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"
    },
]
module.exports = products