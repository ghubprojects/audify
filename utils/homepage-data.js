import { ActivityIcon, CameraIcon, PlayIcon, ProfileIcon } from 'assets/icons/light';
import { neutral } from 'styles/colors';

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
        listenersNumber: 1500,
        text: `The two men appeared out of nowhere, a few yards apart in the narrow, moonlit lane. For a second they stood quite still, wands directed at each other’s chests; then, recognising each other, they stowed their wands beneath their cloaks and started walking briskly in the same direction. ‘News?’ asked the taller of the two. ‘The best,’ replied Severus Snape. The lane was bordered on the left by wild, low-growing brambles, on the right by a high, neatly manicured hedge. The men’s long cloaks flapped around their ankles as they marched. ‘Thought I might be late,’ said Yaxley, his blunt features sliding in and out of sight as the branches of overhanging trees broke the moonlight. ‘It was a little trickier than I expected. But I hope he will be satisfied. You sound confident that your reception will be good?’ Snape nodded, but did not elaborate. They turned right, into a wide driveway that led off the lane. The high hedge curved with them,  running off into the distance beyond the pair of impressive wrought-iron gates barring the men’s way. Neither of them broke step: in  silence both raised their left arms in a kind of salute and passed straight through as though the dark metal were smoke. The yew hedges muffled the sound of the men’s footsteps. There was a rustle somewhere to their right: Yaxley drew his wand again, pointing it over  his companion’s head, but the source of the noise proved to be nothing more than a pure white peacock, strutting majestically along the top of the hedge. ‘He always did himself well, Lucius. Peacocks …’ Yaxley thrust his wand back under his cloak with a snort. A handsome manor house grew out of the darkness at the end of the straight drive, lights glinting in the diamond-paned downstairs windows. Somewhere in the dark garden beyond the hedge, a fountain was playing. Gravel crackled beneath their feet as Snape and Yaxley sped towards the  front door, which swung inwards at their approach, though nobody had visibly       `
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
    { id: 6, name: 'Music', icon: <PlayIcon type='outline' color={neutral[80]} /> },
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
