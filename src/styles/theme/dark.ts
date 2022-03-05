import { StatusBarStyle } from 'react-native';

export default {
  title: 'dark',

  colors: {
    text: { primary: '#1F1F1F', secondary: '#A9ABAE' },

    background: { primary: '#FAFAFA', secondary: '#4866FF' },
    button: { background: '#4866FF', text: '#FFEEEE' },

    barStyle: 'light-content' as StatusBarStyle | null | undefined,
  },

  fontFamily: {
    regular: 'Leelawadee',
    bold: 'Leelawadee Bold',
  },
};
