interface ThemeColors {
  light: string;
  dark: string;
}

export interface Theme {
  mode: 'dark' | 'light';
  colors: {
    background: ThemeColors;
    foreground: ThemeColors;
  };
  card: {
    boxShadow: ThemeColors;
  };
  codeWindow: {
    headerColor: ThemeColors;
  };
}

const theme: Theme = {
  mode: 'dark',
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

export const getColor = (name: keyof Theme['colors']) => ({ theme }: { theme: Theme }) => 
  theme.colors[name][theme.mode]

export const getProp = (name: keyof Theme, prop: string) => ({ theme }: { theme: Theme }) => 
  (theme[name] as any)[prop][theme.mode]

// Add window type augmentation
declare global {
  interface Window {
    theme?: {
      mode: 'dark' | 'light';
      setMode: (mode: 'dark' | 'light') => void;
    };
  }
}

export default theme 