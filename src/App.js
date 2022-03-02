import { Container, Heading, Image, VStack, Text } from '@chakra-ui/react';
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Container>
      <Card>
        <VStack>
          <Image src={qrCode} alt='QR Code'></Image>
          <Heading color='blue'>
            Improve your front-end skills by building projects
          </Heading>
          <Text fontSize='15px' color='gray.100'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Text>
        </VStack>
      </Card>
    </Container>


  );
}

export default App;
