import {get_products,get_pages,get_requests,get_contacts,get_all_data} from '../actions/types';

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
        {"main":"منتجات","sub":["رجالى","حريمى"]},
        {"main":"خدمات","sub":["أحجز","تعرف على الخدمات"]},
        {"main":"أتصال","sub":["هاتف","البريد الألكترونى"]},
        {"main":"من نحن","sub":[]},
        {"main":"المزيد","sub":["تسجيل دخول","صفحات أخرى"]},
        
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

        case get_products:
        return { ...state, pages: payload }

        case get_pages:
        return { ...state, pages: payload }

        case get_requests:
        return { ...state, requests: payload }

        case get_contacts:
        console.log("inside contacts reducers");
        console.log(payload);
        return { ...state, contacts: payload }

        case get_all_data:
        return { ...state, pages: payload.pages,products: payload.pages.products,
                           contacts: payload.contacts,requests: payload.requests }

    default:
        return state;
    }
}
