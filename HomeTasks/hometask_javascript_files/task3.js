const users = {
    student: {
        username: "bilal",
        password: 123
    },
    subjects: [
        'oop', 'c++', 'java', 'c#'
    ],

    admin: {
        username: "ali",
        password: 567,

    },
    students: {
        name: 'asif',
        rollno: 1234,
        semester: '1st'
    }
}


// Main Object
const product = {
    id: 1234,
    name: 'Laptop',
    price: 60000,
    description: 'This is a powerful machine',

    // Nested Object
    features: [
        {
            processor: 'intel core i9',
            ram: '128gb',
            storage: '1tb'
        }
    ],

    // Nested object
    reviews: [
        {
            name: 'ali',
            rating: 4.5,
            comment: 'This is an amaizng product'
        },
        {
            name: 'asif',
            rating: 4.5,
            comment: 'Excellent product!'
        }
    ],

    // Main object array 
    images: ['image1', 'image2', 'image3'],

    //    Main object nested array object
    availbility: [
        {
            instock: true,
            quantity: 50
        }
    ]

}

//  Adding two new properties into the main object
product.color = "lightblue";

//  Adding two new properties into the main object
product.warranty = 12;


// Adding one new property into the nested object which is featues
product.features.graphicsCard = "Nvidia RTX3060";

// Adding new array element into the array of object which is reviews

product.reviews.push(
    {
        name: 'humza',
        rating: 3.5,
        comment: 'powerful product'
    }
);

// Adding new array element into their main object
product.images[3] = 'image4';


// Accessing the new added properties
console.log(product.reviews)
console.log(product.images)

// Accessing Main object properties and nested array of objects
console.log(product)












// without using push method we can add new element into the array of object

// console.log(product.reviews[2] =
//     {
//         name: 'humza',
//         rating: 3.5,
//         comment: 'powerful product'
//     }
// );