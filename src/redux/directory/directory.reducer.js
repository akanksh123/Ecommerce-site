const INITIAL_STATE = {
    sections: [
        {
            title: 'Shoes',
            imageUrl: 'https://content.jdmagicbox.com/comp/def_content/shoe_dealers/default-shoe-dealers-4.jpg',
            id: 1,
            linkUrl: 'shop/shoes'
        },
        {
            title: 'Jackets',
            imageUrl: ' https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2015/others/20150115ktm-city-launches-new-range-of-winter-clothing.jpg&w=900&height=601',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Hats',
            imageUrl: ' https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4210522/910/607/m2/fpnw/wm1/zvqsknxucljkefnylsmn0vs6edlp0yyvw4qk2xjxkqsiy8qtwn4bsodpdjy6akm8-.jpg?1522328912&s=55329a4506d6c56cb95a3648ee3db5d4',
            id: 3,
            linkUrl: 'shop/hats'
        },
        {
            title: 'Womens',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHsPWqnWL0FRKdZPCyKxmoEw6JL5yAi2nKYls6QaGwKwp3l9-e',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'Mens',
            imageUrl: 'https://cdn.shopify.com/s/files/1/0008/0111/2127/files/banner_2_2000x.jpg?v=1551186503',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default directoryReducer;