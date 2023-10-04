export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "red", label: "Red" },
            { value: "brown", label: "Brown" },
            { value: "beige", label: "Beige" },
            { value: "pink", label: "Pink" },
            { value: "Green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "yellow", label: "Yellow" },
        ],
    },

    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
            { value: "XL", label: "XL" },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "$159 To $399" },
            { value: "400-499", label: "$400 To $499" },
            { value: "500-599", label: "$500 To $599" },
            { value: "600-699", label: "$600 To $699" },
            { value: "700-799", label: "$700 To $799" },
        ],
    },
    
    {
        id: "discount",
        name: "dISCOUNT RANGE",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],
    },
    
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "In_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
        ],
    },
    
]


export const sortOptions = [
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
];