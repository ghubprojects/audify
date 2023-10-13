import { ActivityIcon, CameraIcon, PlayIcon, ProfileIcon } from 'assets/icons/light';

export const categories = [
    { id: 0, name: 'Novel' },
    { id: 1, name: 'Business' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Biography' },
    { id: 5, name: 'Science' },
    { id: 6, name: 'Music' },
    { id: 7, name: 'Culture' },
    { id: 8, name: 'Education' },
    { id: 9, name: 'Personality' },
    { id: 10, name: 'Technology' },
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
        id: 1,
        title: 'Book Title 1',
        poster: require('assets/images/image.jpg')
    },
    {
        id: 2,
        title: 'Book Title 2',
        poster: require('assets/images/image.jpg')
    },
    {
        id: 3,
        title: 'Book Title 1',
        poster: require('assets/images/image.jpg')
    },
    {
        id: 4,
        title: 'Book Title 2',
        poster: require('assets/images/image.jpg')
    },
    {
        id: 5,
        title: 'Book Title 1',
        poster: require('assets/images/image.jpg')
    },
    {
        id: 6,
        title: 'Book Title 2',
        poster: require('assets/images/image.jpg')
    }
];

export const bestSellers = [
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        rating: 5,
        listenersNumber: 1500
    },
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
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
        rating: 5,
        listenersNumber: 1500
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 1,
        title: "Sorcerer's Stone",
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter1.jpg'),
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
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
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
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
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
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
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
        rating: 4.8,
        listenersNumber: 1200
    },
    {
        id: 2,
        title: 'Chamber of Secrets',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter2.jpg'),
        rating: 4.5,
        listenersNumber: 1000
    },
    {
        id: 3,
        title: 'Prisoner of Azkaban',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter3.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 4,
        title: 'Goblet of Fire',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter4.jpg'),
        rating: 4.5,
        listenersNumber: 1200
    },
    {
        id: 5,
        title: 'Order of the Phoenix',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter5.jpg'),
        rating: 3.8,
        listenersNumber: 1000
    },
    {
        id: 6,
        title: 'Half-blood Prince',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter6.jpg'),
        rating: 4.3,
        listenersNumber: 800
    },
    {
        id: 7,
        title: 'Deathly Hallows',
        author: 'J. K. Rowling',
        poster: require('assets/images/harrypotter7.jpg'),
        rating: 5,
        listenersNumber: 1500
    }
];
