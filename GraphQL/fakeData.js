const userList = [
    {
        id: 1,
        name: "John Doe",
        username: "johndoe23",
        age: 23,
        nationality: "American"
    },
    {
        id: 2,
        name: "Alice Smith",
        username: "alice_smith92",
        age: 30,
        nationality: "British"
    },
    {
        id: 3,
        name: "Carlos Mendez",
        username: "carlos_mendez45",
        age: 28,
        nationality: "Spanish",
        friends:[
            {
                name:"Elizabeth",
                age:69
            },
            {
                name:"Thomas",
                age:43
            }
        ]
    },
    {
        id: 4,
        name: "Nina Patel",
        username: "ninapatel88",
        age: 26,
        nationality: "Indian"
    },
    {
        id: 5,
        name: "Liam O'Connor",
        username: "liam_oconnor67",
        age: 35,
        nationality: "Irish"
    }
]
const filmList = [
    {
        id: 1,
        name: "Inception",
        isInTheatres: true,
        year:1993
    },
    {
        id: 2,
        name: "The Dark Knight",
        isInTheatres: false,
        year:1978
    },
    {
        id: 3,
        name: "Spider-Man: No Way Home",
        isInTheatres: true,
        year:2000
    },
    {
        id: 4,
        name: "The Matrix Resurrections",
        isInTheatres: false,
        year:2010
    },
    {
        id: 5,
        name: "Avatar: The Way of Water",
        isInTheatres: true,
        year:2024
    }
]

module.exports={userList,filmList};