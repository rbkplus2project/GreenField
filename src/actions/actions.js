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
        type: 'GET_GAMES',
        Games: z
    }
}
export const gameIndex = (z) => {
    return {
        type: 'GAME_INDEX',
        GameIndex: z
    }
}
