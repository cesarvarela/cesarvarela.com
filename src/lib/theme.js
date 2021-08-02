const theme = {
    mode: 'light',
    colors: {
        background: {
            light: '#f2f2f2',
            dark: '#1c1c1c',
        },
        foreground: {
            light: '#000',
            dark: '#fff',
        },
    },
    card: {
        boxShadow: {
            light: '8px 8px 16px #d0d0d0,-8px -8px 16px #ffffff',
            dark: '8px 8px 16px #0f0f0f,-8px -8px 16px #292929;',
        },
    },
    codeWindow: {
        headerColor: {
            light: '#e8e8e8',
            dark: '#313131',
        }
    }
}

export const getColor = (name) => ({ theme }) => theme.colors[name][theme.mode]
export const getProp = (name, prop) => ({ theme }) => theme[name][prop][theme.mode]

export default theme