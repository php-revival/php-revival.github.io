import type { Feature } from '@/types'
import brushIcon from '@/assets/features/brush.svg'
import clipboardIcon from '@/assets/features/clipboard.svg'
import playIcon from '@/assets/features/play.svg'
import cursorIcon from '@/assets/features/cursor.svg'
import shieldIcon from '@/assets/features/shield.svg'
import squareAddIcon from '@/assets/features/square-add.svg'

const features: Feature[] = [
    {
        name: 'Styling Improvements',
        description: 'Improves styling of the whole site to make it more visually appealing',
        icon: brushIcon,
    },
    {
        name: 'Copy Code Button',
        description: 'Adds the ability to copy code examples with a single click on the button',
        icon: clipboardIcon,
    },
    {
        name: 'Evaluate Code Button',
        description: 'Adds the ability to evaluate code examples in a sandboxed environment',
        icon: playIcon,
    },
    {
        name: '1 Click to read Docs',
        description: 'Visit www.php.net website with a single mouse click on the extension icon',
        icon: cursorIcon,
    },
    {
        name: 'Free and Open Source',
        description: `PHP Revival is completely free and open source. It's safe and secure to use`,
        icon: shieldIcon,
    },
    {
        name: 'More then just Docs',
        description: 'Get more than just PHP manual. Get access to recommended videos, links and more',
        icon: squareAddIcon,
    },
]

export default features