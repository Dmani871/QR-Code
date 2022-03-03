import { Container, Heading, Image, VStack, Text } from '@chakra-ui/react';
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Container>
      <Card>
        <VStack>
          <Image src={qrCode} alt='QR Code' borderRadius='xl'></Image>
          <Heading as='h1'>
            Improve your front-end skills by building projects
          </Heading>
          <Text>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Text>
        </VStack>
      </Card>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Dmani Barnett</a>.
      </div>
    </Container>
  );
}

export default App;
