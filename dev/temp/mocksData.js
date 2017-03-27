'breatCrumbsLinks': [
    {
        title: 'Главная',
        href: 'javascript:void(0)'
    },
    {
        title: 'Каталог',
        href: 'javascript:void(0)'
    },
    {
        active: true,
        title: 'Бытовая техника',
        href: 'javascript:void(0)'
    }
],

'catalogMenu': {
    links: [ 
        {
            title: 'Автомобили',
            href: 'javascript:void(0);'
        },
        {
            active: true,
            title: 'Бытовая техника',
            href: 'javascript:void(0);',
            links:[
                {
                    active: true,
                    title: 'Микроволновки',
                    href: 'javascript:void(0);'
                },
                {
                    title: 'Холодильники',
                    href: 'javascript:void(0);'
                },           
                {
                    title: 'Посудомоечные машины',
                    href: 'javascript:void(0);'
                },           
                 {
                    title: 'Чайники',
                    href: 'javascript:void(0);'
                }           
            ]
        },
        {
            title: 'Мобильная техника',
            href: 'javascript:void(0);'
        },
        {
            title: 'Компьютеры',
            href: 'javascript:void(0);'
        },
        {
            title: 'Одежда',
            href: 'javascript:void(0);'
        },
        {
            title: 'Недвижимость',
            href: 'javascript:void(0);'
        }
    ],
    price: {
        href: 'javascript: void(0);',
        title: 'Прайс-лист'
    }
},

'catalogItemsData': {
    goods: [
        {
            img: '%=static=%img/content/product-no-fhoto.jpg',
            title: 'Самый клевый чайник, который надо купить!',
            href: 'javascript:void(0);',
            price: '1 900 р.'
        },
        {
            img: '%=static=%img/content/product-no-fhoto.jpg',
            title: 'Самый клевый чайник, который надо купить!',
            href: 'javascript:void(0);',
            price: '1 900 р.'
        },
        {
            img: '%=static=%img/content/product-no-fhoto.jpg',
            title: 'Самый клевый чайник, который надо купить!',
            href: 'javascript:void(0);',
            price: '1 900 р.'
        },
        {
            img: '%=static=%img/content/product-no-fhoto.jpg',
            title: 'Самый клевый чайник, который надо купить!',
            href: 'javascript:void(0);',
            price: '1 900 р.'
        },
        {
            img: '%=static=%img/content/product-no-fhoto.jpg',
            title: 'Самый клевый чайник, который надо купить!',
            href: 'javascript:void(0);',
            price: '1 900 р.'
        }    
    ],
    pages:[
        {
            title: 1,
            href: 'javascript:void(0);'
        },
        {
            title: 2,
            href: 'javascript:void(0);'
        },
        {
            title: 3,
            href: 'javascript:void(0);',
            active: true
        },
        {
            title: 4,
            href: 'javascript:void(0);'
        },
        {
            title: 5,
            href: 'javascript:void(0);'
        },
        {
            title: 6,
            href: 'javascript:void(0);'
        },
        {
            title: 7,
            href: 'javascript:void(0);'
        }                                
    ]
},

'footerData': {
    links: [
        {
            title: 'Главная',
            href: 'javascript:void(0);'
        },
        {
            title: 'Каталог',
            href: 'javascript:void(0);'
        },
        {
            title: 'Доставка и оплата',
            href: 'javascript:void(0);'
        },
        {
            title: 'Прайс-лист',
            href: 'javascript:void(0);'
        },
        {
            title: 'Контакты',
            href: 'javascript:void(0);'
        }
    ],   
    email: 'info@name.ru',
    copyRight: '© 2012–2013 ЗАО «Компания»',
},

'head': {
    defaults: {
        title: 'default title',
        useSocialMetaTags: true
    }
},

'mainLinks': [
    {
        title: 'Главная',
        href: 'javascript:void(0)'
    },
    {
        title: 'Каталог',
        href: 'javascript:void(0)'
    },
    {
        title: 'Доставка и оплата',
        href: 'javascript:void(0)'
    },
    {
        title: 'Прайс-лист',
        href: 'javascript:void(0)'
    },
    {
        title: 'Контакты',
        href: 'javascript:void(0)'
    }    
],

'headerData': {
    logo: {
        href: "javascript:void(0);", 
        src: "/static/img/general/logo.png",
        alt: ""
    },
    phones: [
        {
            href: "tel:+74997777777",
            title:"Позвонить",
            text: "+7(499) 777-77-77"
        },
        {
            href: "tel:+74997777777",
            title:"Позвонить",
            text: "+7(499) 777-77-77"
        }        
    ],
    feedback: {
        href: "javascript:void(0);",
        text: "Обратная связь"    
    }    
},

'sliderData': {
    images:[
        {
            title: 'slide 1',
            src: '%=static=%/img/plugins/slider/slide-1.png'
        },
        {
            title: 'slide 2',
            src: '%=static=%/img/plugins/slider/slide-2.png'
        }
    ]
},

/* Module data structure */

// moduleName: {
//     dataType: {
//         property: value
//     }
// }

/* Module data example */

_template: {
    big: {
        title: 'Hello world',
        age: 10,
        button: false
    }
},

__pages: [{
                name: 'index',
                href: 'index.html'
             }]