import { extendTheme } from '@chakra-ui/react'
import Card from './styles/Card';
import Heading from './styles/Heading';
import Text from './styles/Text';
import "@fontsource/outfit";
const customTheme = extendTheme({
    fonts: {
      heading: 'Outfit',
      body: 'Outfit',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      blue: 'hsl(218, 44%, 22%)',
      gray: {
        50: 'hsl(212, 45%, 89%)',
        100: 'hsl(220, 15%, 55%)'
      },
    },
    styles: {
      global: {
        'html, body': {
          color: 'white',
          background: 'gray.50',
        },
      },
    },
    components: {
      Card,Heading,Text
    },
  })

  export default customTheme;