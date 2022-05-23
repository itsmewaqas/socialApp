import img1 from "../assets/images/user.jpg";
import img2 from "../assets/images/user2.jpg";

const Post = [
    {
        id: 1,
        postedBy: 1,
        text: "New Post",
        time: "2 month(s) ago",
        userImage: img1,
        firstName: "Jawad",
        lastName: "Ali",
        privacy: "Public",
        likes: 1,
        comments: 1,
        images: [ 
            {
                id: 1,
                imageUrl: require("../assets/images/postimg1.jpg"),
            }
        ],
        commentsTemp: [
            {
                id: 1,
                commentedBy: 1,
                fullName: "muhammad waqas",
                imageUrl: img1,
                comment: "Comment dummy..."
            },
        ]
    },
    {
        id: 2,
        postedBy: 2,
        text: "New Post 2",
        time: "5 month(s) ago",
        userImage: img2,
        firstName: "muhammad ",
        lastName: "waqas",
        privacy: "Private",
        likes: 2,
        comments: 2,
        images: [ 
            {
                id: 1,
                imageUrl: require("../assets/images/postimg1.jpg"),
            },
            {
                id: 2,
                imageUrl: require("../assets/images/postimg2.jpg"),
            }
        ],
        commentsTemp: [
            {
                id: 1,
                commentedBy: 1,
                fullName: "alber khan",
                imageUrl: img1,
                comment: "Comment dummy..."
            },
            {
                id: 2,
                commentedBy: 2,
                fullName: "hamza khalid",
                imageUrl: img2,
                comment: "Comment dummy..."
            }
        ]
    },
    {
        id: 3,
        postedBy: 3,
        text: "New Post 3",
        time: "6 day(s) ago",
        userImage: img1,
        firstName: "hamza ",
        lastName: "khalid",
        privacy: "Public",
        likes: 3,
        comments: 3,
        images: [
            {
                id: 1,
                imageUrl: require("../assets/images/postimg1.jpg"),
            },
            {
                id: 2,
                imageUrl: require("../assets/images/postimg2.jpg"),
            },
            {
                id: 3,
                imageUrl: require("../assets/images/postimg3.jpg"),
            },
            {
                id: 4,
                imageUrl: require("../assets/images/postimg4.jpg"),
            },
            {
                id: 5,
                imageUrl: require("../assets/images/postimg5.jpg"),
            },
            {
                id: 6,
                imageUrl: require("../assets/images/postimg6.jpg"),
            },
            {
                id: 7,
                imageUrl: require("../assets/images/postimg7.jpg"),
            },
            {
                id: 8,
                imageUrl: require("../assets/images/postimg8.jpg"),
            },
            {
                id: 9,
                imageUrl: require("../assets/images/postimg9.jpg"),
            },
            {
                id: 10,
                imageUrl: require("../assets/images/postimg10.jpg"),
            },
            {
                id: 11,
                imageUrl: require("../assets/images/postimg11.jpg"),
            },
            {
                id: 12,
                imageUrl: require("../assets/images/postimg12.jpg"),
            },
            {
                id: 13,
                imageUrl: require("../assets/images/postimg13.jpg"),
            }
        ],
        commentsTemp: [
            {
                id: 1,
                commentedBy: 1,
                fullName: "zeeshan akhter",
                imageUrl: img1, 
                comment: "Comment dummy..."
            },
            {
                id: 2,
                commentedBy: 2,
                fullName: "fahad usmani",
                imageUrl: img2,
                comment: "Comment dummy..."
            },
            {
                id: 2,
                commentedBy: 3,
                fullName: "Jawad Ali",
                imageUrl: img2,
                comment: "Comment dummy..."
            }
        ]
    },
    {
        id: 4,
        postedBy: 4,
        text: "New Post 4",
        time: "6 month(s) ago",
        userImage: img2,
        firstName: "zeeshan",
        lastName: "akhter",
        privacy: "Public",
        likes: 6,
        comments: 1,
        images: [ ],
        commentsTemp: [
            {
                id: 1,
                commentedBy: 1,
                fullName: "muhammad waqas",
                imageUrl: img1,
                comment: "Comment dummy..."
            },
        ]
    },

];


export default Post;