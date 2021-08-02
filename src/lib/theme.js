const theme = {
    mode: 'light',
    colors: {
        background: {
            light: '#fff',
            dark: '#000',
        },
        foreground: {
            light: '#000',
            dark: '#fff',
        },
    },
    card: {
        boxShadow: {
            light: '4px 6px 25px rgba(0, 0, 0, 0.24)',
            dark: '0px 4px 29px 15px rgba(255, 255, 255, 0.18)',
        },
    }
}

export const getColor = (name) => ({ theme }) => theme.colors[name][theme.mode]
export const getProp = (name, prop) => ({ theme }) => theme[name][prop][theme.mode]

export default theme