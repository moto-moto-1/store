import {get_products,get_pages,get_requests,get_contacts,get_all_data} from '../actions/types';

const initialState ={
  "Header": {
    "name": "فاشون تكس",
    "image": "https://images.squarespace-cdn.com/content/53b590f5e4b08c2c281d190c/1513348464302-XB3A1DNQ4JGG4I66MXLP/Metra+Interior-Bohdan.JPG?format=1500w&content-type=image%2Fjpeg",
    "style": {
      "color": "white",
      "height": "65%",
      "width": "100%",
      "direction": "right",
      "font_size": "400%"
    }
  },
  "NavigationBar": {
    "pages": [
      {
        "main": "منتجات",
        "sub": [
          "رجالى",
          "حريمى"
        ]
      },
      {
        "main": "خدمات",
        "sub": [
          "أحجز",
          "تعرف على الخدمات"
        ]
      },
      {
        "main": "أتصال",
        "sub": [
          "هاتف",
          "البريد الألكترونى"
        ]
      },
      {
        "main": "من نحن",
        "sub": []
      },
      {
        "main": "المزيد",
        "sub": [
          "تسجيل دخول",
          "صفحات أخرى"
        ]
      }
    ],
    "style": {
      "BackgroundColor": "white",
      "color": "black",
      "direction": "right"
    }
  },
  "pages": {
    "contact": {
      "PageName": "contact",
      "exists": true,
      "Type": "contact",
      "LanguageDirection": "right",
      "HeaderTitle": "Contact",
      "Details": "",
      "FacebookAccount": "facebook.com/alibambo.23",
      "InstagramAccount": "https://www.instagram.com/ay4828gul/",
      "TwitterAccount": "https://twitter.com/justinbieberr",
      "email": "ali@gmail.com",
      "map": "30.004111, 31.426389",
      "Telephone": "2394848577",
      "YoutubeAccount": "https://www.youtube.com/EdSheerann",
      "style": {
        "color": "black",
        "background": "white"
      }
    },
    "products": {
      "PageName": "product",
      "Type": "product",
      "exists": true,
      "Title": "منتجات",
      "LanguageDirection": "right",
      "HaveSubpages": true,
      "products": "",
      "ActivePage": "products/productsCat1",
      "SubPages": [
        {
          "PageName": "رجالى",
          "productUrl": "products/productsCat1",
          "LanguageDirection": "right",
          "Title": "منتجات رجالى",
          "Products": [
            {
              "ProductId": 434351,
              "ProductName": "Short pants",
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality pants"
            },
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
            }
          ]
        },
        {
          "PageName": "حريمي",
          "productUrl": "products/productsCat2",
          "LanguageDirection": "right",
          "Title": "منتجات حريمي",
          "Products": [
            {
              "ProductId": 434351,
              "ProductName": "Short trousers",
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality pants"
            },
            {
              "ProductId": 434351,
              "ProductName": "Short trousers",
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality pants"
            },
            {
              "ProductId": 434351,
              "ProductName": "Short trousers",
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality pants"
            }
          ]
        }
      ],
      "style": {
        "color": "black",
        "background": "white"
      }
    },
    "services": {
      "PageName": "خدمات",
      "Type": "services",
      "exists": true,
      "LanguageDirection": "right",
      "HeaderTitle": "الخدمات",
      "services": "",
      "HaveSubpages": true,
      "ActivePage": "service/ServicesCat1",
      "SubPages": [
        {
          "PageName": "شفط دهون",
          "serviceUrl": "services/servicesCat1",
          "LanguageDirection": "right",
          "Title": "شفط دهون",
          "Services": [
            {
              "ServiceId": 434351,
              "ServiceName": "Fat loss",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality proceedure"
            },
            {
              "ServiceId": 434351,
              "ServiceName": "Fat loss",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality proceedure"
            },
            {
              "ServiceId": 434351,
              "ServiceName": "Fat loss",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality proceedure"
            }
          ]
        },
        {
          "PageName": "psyotherapy",
          "serviceUrl": "services/ServicesCat2",
          "LanguageDirection": "right",
          "Title": "علاج طبيعى",
          "Services": [
            {
              "ServiceId": 434351,
              "ServiceName": "أعوجاج القفص الصدرى",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality Therapy"
            },
            {
              "ServiceId": 434351,
              "ServiceName": "أعوجاج القفص الصدرى",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality Therapy"
            },
            {
              "ServiceId": 434351,
              "ServiceName": "أعوجاج القفص الصدرى",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality Therapy"
            },
            {
              "ServiceId": 434351,
              "ServiceName": "أعوجاج القفص الصدرى",
              "availableTime": [
                "13:00",
                "14:00",
                "15:00",
                "16:00"
              ],
              "availabledays": [
                "Sundays",
                "Mondays",
                "Tuesdays",
                "Wednsdays"
              ],
              "price": 344,
              "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
              "description": "very good quality Therapy"
            }
          ]
        }
      ],
      "style": {
        "color": "black",
        "background": "white"
      }
    },
    "about": {
      "PageName": "aboutus",
      "Type": "aboutus",
      "exists": true,
      "LanguageDirection": "right",
      "HeaderTitle": "من نحن",
      "Details": [
        "\nرؤيتنا الأفضل للجميع\nونقدم جميع الأذواق",
        "دائما أفضل أختيار"
      ],
      "style": {
        "color": "black",
        "background": "white"
      }
    },
    "reserve": {
      "PageName": "ReserveService",
      "Type": "Reservation",
      "exists": true,
      "LanguageDirection": "right",
      "ServiceRequired": [
        {
          "ServiceId": 434351,
          "ServiceName": "أعوجاج القفص الصدرى",
          "Chosen": true,
          "availableTime": [
            "13:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          "ChosenTime": "14:00",
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality Therapy"
        },
        {
          "ServiceId": 444151,
          "ServiceName": "أعوجاج القفص الصدرى",
          "Chosen": false,
          "availableTime": [
            "13:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          "ChosenTime": "",
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality Therapy"
        },
        {
          "ServiceId": 434151,
          "ServiceName": "أعوجاج القفص الصدرى",
          "Chosen": false,
          "availableTime": [
            "13:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          "ChosenTime": "",
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality Therapy"
        }
      ],
      "HeaderTitle": "أحجز خدمة",
      "Details": "",
      "style": {
        "color": "black",
        "background": "white"
      }
    },
    "control": {
      "PageName": "ControlPanel",
      "Type": "Control",
      "exists": true,
      "LanguageDirection": "right",
      "HeaderTitle": "لوحة التحكم",
      "StartTime": "12:00",
      "EndTime": "17:00",
      "ServiceTime": "00:10",
      "availabledays": [
        "Sundays",
        "Mondays",
        "Tuesdays",
        "Wednsdays"
      ],
      "Details": "",
      "style": {
        "color": "black",
        "background": "white"
      }
    },
    "cart": {
      "PageName": "Cart",
      "Type": "Cart",
      "exists": true,
      "LanguageDirection": "right",
      "HeaderTitle": "سلة الشراء",
      "PriceTotal": 3556,
      "PaymentMethodOptions": [
        "Cash On Delivary",
        "Cridit Card",
        "Installments",
        "Paypal",
        "prepaid",
        "Mobile transfer"
      ],
      "Products": [
        {
          "ProductId": 434351,
          "ProductName": "Short pants",
          "Quantity": 3,
          "TotalPrice": 1032,
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        },
        {
          "ProductId": 434341,
          "ProductName": "Short pants",
          "Quantity": 3,
          "TotalPrice": 1032,
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        }
      ],
      "Services": [
        {
          "ProductId": 434351,
          "ProductName": "Short pants",
          "Quantity": 3,
          "TotalPrice": 1032,
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        },
        {
          "ProductId": 434341,
          "ProductName": "Short pants",
          "Quantity": 3,
          "TotalPrice": 1032,
          "price": 344,
          "image": "https://cdn.shopify.com/s/files/1/0925/0118/products/Navy1_900x.progressive.jpg",
          "description": "very good quality pants"
        }
      ],
      "style": {
        "color": "black",
        "background": "white"
      }
    }
  },
  "UserData": {
    "userType": "admin",
    "signedin": true,
    "UserName": "أبو على",
    "email": "abuali@gmail.com",
    "Telephone": "239284845",
    "Address": "38 saw st, Pensivania,USA",
    "Map": "30.004111, 31.426389",
    "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }
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
