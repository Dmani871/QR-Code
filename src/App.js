import { Container, Heading, Image, VStack, Text } from '@chakra-ui/react';
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Container>
      <Card>
        <VStack>
          <Image src={qrCode} alt='QR Code'></Image>
          <Heading as='h1'>
            Improve your front-end skills by building projects
          </Heading>
          <Text>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Text>
        </VStack>
      </Card>
    </Container>


  );
}

export default App;
