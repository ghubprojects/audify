import { ActivityIcon, CameraIcon, PlayIcon, ProfileIcon } from 'assets/icons/light';

export const bookList = [
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 5,
        listenersNumber: 1500
    },
    {
        id: 11,
        title: 'Book Title 11',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 12,
        title: 'Book Title 12',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 13,
        title: 'Book Title 13',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 14,
        title: 'Book Title 14',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 15,
        title: 'Book Title 15',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 16,
        title: 'Book Title 16',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    }
];

export const categories = [
    { id: 0, name: 'Novel' },
    { id: 1, name: 'Business' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Fiction' },
    { id: 5, name: 'Science' },
    { id: 6, name: 'Music' },
    { id: 7, name: 'Culture' },
    { id: 8, name: 'Education' },
    { id: 9, name: 'Personality' },
    { id: 10, name: 'Fantasy' },
    { id: 11, name: 'History' },
    { id: 12, name: 'Photography' }
];

export const recommendedCategories = [
    { id: 1, name: 'Business', icon: <ActivityIcon /> },
    { id: 9, name: 'Personality', icon: <ProfileIcon /> },
    { id: 6, name: 'Music', icon: <PlayIcon /> },
    { id: 12, name: 'Photography', icon: <CameraIcon /> }
];

export const recommendedBooks = [
    {
        id: 11,
        title: 'Book Title 1',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 12,
        title: 'Book Title 2',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 13,
        title: 'Book Title 1',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 14,
        title: 'Book Title 2',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 15,
        title: 'Book Title 1',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    },
    {
        id: 16,
        title: 'Book Title 2',
        author: 'Conan Doyle',
        rating: 4.5,
        categories: ['Fantasy', 'Drama', 'Fiction'],
        poster: require('assets/images/image.jpg')
    }
];

export const bestSellers = [
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 5,
        listenersNumber: 1500
    },
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    }
];

export const newReleases = [
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 5,
        listenersNumber: 1500
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.8,
        listenersNumber: 1200
    }
];

export const trendings = [
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 5,
        listenersNumber: 1500
    }
];

export const latestSearch = [
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    }
];

export const searchResults = [
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 5,
        listenersNumber: 1500
    }
];

export const libraryBooks = [
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        categories: ['Fantasy', 'Drama', 'Fiction'],
        rating: 5,
        listenersNumber: 1500
    }
];

export const reviewData = [
    {
        id: 1,
        reader: 'Sarah Johnson',
        avatar: require('assets/images/avatar.jpg'),
        rating: 5,
        createdDate: new Date(2023, 9, 15),
        content:
            'I had an amazing experience with this product. It exceeded my expectations, and I highly recommend it to everyone.'
    },
    {
        id: 2,
        reader: 'Michael Smith',
        avatar: require('assets/images/avatar.jpg'),
        rating: 3,
        createdDate: new Date(2023, 9, 14),
        content:
            'The product is decent, but there is room for improvement. It serves its purpose, but there are better options available.'
    },
    {
        id: 3,
        reader: 'Emily Davis',
        avatar: require('assets/images/avatar.jpg'),
        rating: 4,
        createdDate: new Date(2023, 9, 13),
        content:
            "I'm satisfied with my purchase. It's a good product, and I'm happy with its performance."
    }
];
