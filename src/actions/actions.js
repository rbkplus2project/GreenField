export const showMenu = (z) => {
    return {
        type: 'SHOW_MENU',
        showMenu: z
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
