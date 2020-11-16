export const showMenu = (z) => {
    return {
        type: 'SHOW_MENU',
        showMenu: z
    }
}
export const showSearch = (z) => {
    return {
        type: 'SHOW_SEARCH',
        showSearch: z
    }
}
export const showSign = (z) => {
    return {
        type: 'SHOW_SIGN',
        showSign: z
    }
}
export const showSettings = (z) => {
    return {
        type: 'SHOW_SETTINGS',
        showSettings: z
    }
}
export const getGames = (z) => {
    return {
        type: 'SHOW_GAMES',
        Games: z
    }
}
export const saveGameIndex = (z) => {
    return {
        type: 'SAVE_GAME_INDEX',
        GameIndex: z
    }
}
