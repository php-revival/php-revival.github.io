import type { Feature } from '@/types'
import brushIcon from '@/assets/features/brush.svg'
import clipboardIcon from '@/assets/features/clipboard.svg'
import playIcon from '@/assets/features/play.svg'

const features: Feature[] = [
    {
        name: 'Styling Improvements',
        description: 'Improves styling of the whole site to make it more visually appealing',
        icon: brushIcon,
    },
    {
        name: 'Copy Code Button',
        description: 'Adds the ability to copy code examples with a single click',
        icon: clipboardIcon,
    },
    {
        name: 'Evaluate Code Button',
        icon: playIcon,
        description: 'Adds the ability to evaluate code examples in a sandboxed environment',
    },
]

export default features