import { Heading, Image, VStack, Text, Box, Container } from '@chakra-ui/react';
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Card>
      <VStack>
        <Image src={qrCode} alt='QR Code' borderRadius='xl'></Image>
        <Heading as='h1' size='md'>
          Improve your front-end skills by building projects
        </Heading>
        <Text>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </Text>
      </VStack>
    </Card>
  );
}

export default App;
