export enum BrowserType {
    Chrome = 'Chrome',
    Brave = 'Brave',
    Firefox = 'Firefox',
    Edge = 'Edge',
}

export type Feature = {
    name: string
    description: string
    icon: string
}

export type Review = {
    avatar: string
    name: string
    content?: string
    note?: string
}
