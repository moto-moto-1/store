import {submit_new_task,submit_new_team,submit_new_supply} from '../actions/types';

const initialState = {
    "Header": {
      "name": "فاشون تكس",
      "image": "https://images.squarespace-cdn.com/content/53b590f5e4b08c2c281d190c/1513348464302-XB3A1DNQ4JGG4I66MXLP/Metra+Interior-Bohdan.JPG?format=1500w&content-type=image%2Fjpeg",
      "style": {
        "color": "white",
        "height": "50%",
        "direction": "right"
      }
    },
    "NavigationBar": {
      "pages": [
        "منتجات",
        "خدمات",
        "أتصال",
        "من نحن",
        "المزيد"
      ],
      "style": {
        "BackgroundColor": "white",
        "color": "black",
        "direction": "right"
      }
    },
    "pages": {
      "products": [
        {
          "ProductId": 434351,
          "ProductName": "Short pants",
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        },
        {
          "ProductId": 434352,
          "ProductName": "Short pants",
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        },
        {
          "ProductId": 434353,
          "ProductName": "Short pants",
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        }
      ]
    },
    "services": {}
  }

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case submit_new_product:
        return { ...state, ...payload }

        case submit_new_page:
        return { ...state, ...payload }

        case submit_new_request:
        return { ...state, ...payload }

    default:
        return state;
    }
}
