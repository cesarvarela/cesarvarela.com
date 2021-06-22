export const lightTheme = {
    name: 'light',
    background: '#fff',
    color: '#333',
    boxShadow: '4px 6px 25px rgba(0, 0, 0, 0.24)',
    border: '#E0E0E0',

    //for grommet
    global: {
        colors: {
            icon: '#333',
        }
    },
    icon: {
        size: {
            small: '12px',
            medium: '24px',
            large: '48px',
            xlarge: '96px',
        },
        extend: undefined,
    },
}

export const darkTheme = {
    name: 'dark',
    background: '#000',
    color: '#f1f1f1',
    boxShadow: '0px 4px 29px 15px rgba(255, 255, 255, 0.18)',
    border: '#525252',

    //for grommet
    global: {
        colors: {
            icon: '#f1f1f1',
        }
    },
    icon: {
        size: {
            small: '12px',
            medium: '24px',
            large: '48px',
            xlarge: '96px',
        },
        extend: undefined,
    },
}

export const ssrTheme = {
    name: 'ssr',
    background: 'inherit',
    color: 'inherit',

    //for grommet
    global: {
        colors: {
            icon: '#666666',
        }
    },
    icon: {
        size: {
            small: '12px',
            medium: '24px',
            large: '48px',
            xlarge: '96px',
        },
        extend: undefined,
    },
}