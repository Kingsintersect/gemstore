export const menu = {
    women:{
        id: 'women',
        name: 'Women',
        featured: [
            {
                name:'New Arrivals',
                href: '/',
                imageSrc: 'https://',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in Black'
            },
            {
                name:'Basic Tees',
                href: '/',
                imageSrc: 'https://',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in Black'
            },
        ],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    { name: 'Tops', id: 'top', href: `women/clothing/tops`},
                    { name: 'Dresses', id: 'women_dress', href: `women/clothing/dresses`},
                    { name: 'Pants', id: 'women_jeans', href: `women/clothing/pants`},
                    { name: 'Lengha Choli', id: 'lengha_choli', href: `women/clothing/lengha_choli`},
                    { name: 'Sweaters', id: 'women_sweater', href: `women/clothing/sweaters`},
                    { name: 'T-Shirts', id: 't_shirt', href: `women/clothing/t_shirts`},
                    { name: 'Jackets', id: 'jacket', href: `women/clothing/jackets`},
                    { name: 'Gouns', id: 'women_gouns', href: `women/clothing/gouns`},
                    { name: 'Srees', id: 'women_sarees', href: `women/clothing/sarees`},
                    { name: 'Kutars', id: 'women_kutars', href: `women/clothing/kutars`},
                ]
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    {name: 'Watches', id: 'watch'},
                    {name: 'Wallet', id: 'wallet'},
                    {name: 'Bags', id: 'bags'},
                    {name: 'Sunglasses', id: 'sunglasse'},
                    {name: 'Hats', id: 'hat'},
                    {name: 'Belts', id: 'belt'},
                ]
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    {name: 'Full Nelson', id: 'full_nelson'},
                    {name: 'My Way', id: 'my_way'},
                    {name: 'Re-Arranged', id: 're_arrenged'},
                    {name: 'Counterfiet', id: 'counterfiet'},
                    {name: 'Significant Other', id: 'significant_other'},
                ]
            }
        ]

    },

    men: {
        id: 'men',
        name: 'Men',
        featured: [
            {
                name:'New Arrivals',
                href: '/',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in Black'
            },
            {
                name:'Basic Tees',
                href: '/',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in Black'
            },
        ],
        sections: [
            {
                id: 'clothing',
                name: 'Clothing',
                items: [
                    { name: 'Mens Kutars', id: 'mens_kutar', href: 'men/clothing/kutars'},
                    { name: 'Shirt', id: 'shirt', href: 'men/clothing/shirts'},
                    { name: 'Pants', id: 'pant', href: 'men/clothing/pants'},
                    { name: 'Sweaters', id: 'sweater', href: 'men/clothing/sweaters'},
                    { name: 'T-Shirts', id: 't_shirt', href: 'men/clothing/t_shirts'},
                    { name: 'Jackets', id: 'Jacket', href: 'men/clothing/jacket'},
                    { name: 'ActivewearS', id: 'activewear', href: 'men/clothing/activewears'},
                ]
            },
            {
                id: 'accessories',
                name: 'Accessories',
                items: [
                    {name: 'Watches', id: 'watch'},
                    {name: 'Wallet', id: 'wallet'},
                    {name: 'Bags', id: 'bags'},
                    {name: 'Sunglasses', id: 'sunglasse'},
                    {name: 'Hats', id: 'hat'},
                    {name: 'Belts', id: 'belt'},
                ]
            },
            {
                id: 'brands',
                name: 'Brands',
                items: [
                    {name: 'Full Nelson', id: 'full_nelson'},
                    {name: 'My Way', id: 'my_way'},
                    {name: 'Re-Arranged', id: 're_arrenged'},
                    {name: 'Counterfiet', id: 'counterfiet'},
                    {name: 'Significant Other', id: 'significant_other'},
                ]
            }
        ]
    }
}