import { Review } from '@/types'
import forProgAvatar from '@/assets/reviews-avatars/for prog.jpeg'
import helloWorldAvatar from '@/assets/reviews-avatars/Hello World.jpeg'
import jPostAvatar from '@/assets/reviews-avatars/J Post.jpeg'
import olexiyChornenkiyAvatar from '@/assets/reviews-avatars/Olexiy Chornenkiy.jpeg'
import alexLabaninoAvatar from '@/assets/reviews-avatars/Alex Labanino.png'
import oleksiiAnatoliyovichAvatar from '@/assets/reviews-avatars/Oleksii Anatoliyovich.png'

const reviews: Review[][] = [
    [
        {
            avatar: alexLabaninoAvatar,
            name: 'Alex Labanino',
            content: 'This looks AWESOME! Thanks!',
        },
        {
            avatar: forProgAvatar,
            name: 'for prog',
            content: `AWESOME
            AWESOME AWESOME
            AWESOME AWESOME AWESOME
            AWESOME AWESOME AWESOME AWESOME
            AWESOME AWESOME AWESOME AWESOME AWESOME
            AWESOME AWESOME AWESOME AWESOME AWESOME AWESOME`,
        },
    ],
    [
        {
            avatar: oleksiiAnatoliyovichAvatar,
            name: 'Oleksii Anatoliyovich',
            content: 'Cool. Thanks!',
            note: 'Has been translated from Ukrainian language',
        },
        {
            avatar: helloWorldAvatar,
            name: 'Hello World',
            content: '👍 I would recommend this extension for every PHP dev',
        },
    ],
    [
        {
            avatar: olexiyChornenkiyAvatar,
            name: 'Olexiy Chornenkiy',
            content: 'good extension! <3',
        },
        {
            avatar: jPostAvatar,
            name: 'J Post',
            content:
                'This works great, really improves the documentation by being able to run all the examples. Thank you!',
        },
    ],
]

export default reviews
