import { Review } from '@/types'
import forProgAvatar from '@/assets/reviews-avatars/for prog.jpeg'
import helloWorldAvatar from '@/assets/reviews-avatars/Hello World.jpeg'
import jPostAvatar from '@/assets/reviews-avatars/J Post.jpeg'
import olexiyChornenkiyAvatar from '@/assets/reviews-avatars/Olexiy Chornenkiy.jpeg'
import alexLabaninoAvatar from '@/assets/reviews-avatars/Alex Labanino.png'
import oleksiiAnatoliyovichAvatar from '@/assets/reviews-avatars/Oleksii Anatoliyovich.png'
import defaultAvatar from '@/assets/reviews-avatars/default.png'

const reviews: Review[][] = [
    [
        {
            avatar: forProgAvatar,
            name: 'for prog',
            rating: 5,
            source: 'chrome',
            content: `AWESOME
AWESOMEAWESOME
AWESOMEAWESOMEAWESOME
AWESOMEAWESOMEAWESOMEAWESOME
AWESOMEAWESOMEAWESOMEAWESOMEAWESOME
AWESOMEAWESOMEAWESOMEAWESOMEAWESOMEAWESOME`,
        },
        {
            avatar: alexLabaninoAvatar,
            name: 'Alex Labanino',
            rating: 5,
            source: 'chrome',
            content: 'This looks AWESOME! Thanks!',
        },
    ],
    [
        {
            avatar: oleksiiAnatoliyovichAvatar,
            name: 'Oleksii Anatoliyovich',
            rating: 5,
            source: 'chrome',
            content: 'Cool. Thanks!',
            note: 'Has been translated from Ukrainian language',
        },
        {
            avatar: jPostAvatar,
            name: 'J Post',
            rating: 5,
            source: 'chrome',
            content:
                'This works great, really improves the documentation by being able to run all the examples. Thank you!',
        },
        {
            avatar: defaultAvatar,
            name: '17200516',
            rating: 5,
            source: 'mozilla',
        },
    ],
    [
        {
            avatar: olexiyChornenkiyAvatar,
            name: 'Olexiy Chornenkiy',
            rating: 5,
            source: 'chrome',
            content: 'good extension! <3',
        },
        {
            avatar: helloWorldAvatar,
            name: 'Hello World',
            rating: 5,
            source: 'chrome',
            content: '👍 I would recommend this extension for every PHP dev',
        },
        {
            avatar: defaultAvatar,
            name: 'ArablackCBINDRAM',
            rating: 5,
            source: 'mozilla',
        },
    ],
]

export default reviews
