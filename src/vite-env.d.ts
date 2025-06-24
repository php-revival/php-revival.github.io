/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '@lucien144/vue3-parallaxy' {
    import type { Prop, DefineComponent } from 'vue'

    export type ParallaxyPropsType = {
        axis: Prop<string>
        speed: Prop<number>
        direction: Prop<string>
        animation: Prop<Function>
        disabled: Prop<boolean>
        debug: Prop<boolean>
        breakpoints?: Prop<{ [key: number]: ParallaxyPropsType } | undefined>
    }

    const Parallaxy: DefineComponent<ParallaxyPropsType>
    export default Parallaxy
}
