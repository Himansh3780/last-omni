import { createTheme, ThemeOptions } from '@mui/material';

const sharedThemeOptions: ThemeOptions = {
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  zIndex: { snackbar: 100000 }
};
export const lightTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    primary: {
      main: '#6366f1', // Indigo
      light: '#818cf8',
      dark: '#4f46e5'
    },
    secondary: {
      main: '#8b5cf6', // Violet
      light: '#a78bfa',
      dark: '#7c3aed'
    },
    background: {
      default: '#f8fafc',
      hover: '#f1f5f9',
      lightSecondary: '#eef2ff',
      darkSecondary: '#6366f1'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#ffffff',
          backgroundColor: '#6366f1',
          '&:hover': {
            backgroundColor: '#4f46e5'
          }
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8',
      light: '#a5b4fc',
      dark: '#6366f1'
    },
    secondary: {
      main: '#a78bfa',
      light: '#c4b5fd',
      dark: '#8b5cf6'
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
      hover: '#334155',
      lightSecondary: '#1e1b4b',
      darkSecondary: '#4f46e5'
    },
    text: { primary: '#f1f5f9' }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#ffffff',
          backgroundColor: '#4f46e5',
          '&:hover': {
            backgroundColor: '#4338ca'
          }
        }
      }
    }
  }
});
