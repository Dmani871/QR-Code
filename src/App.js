import { Container, Heading, Image, VStack, Text, Box} from '@chakra-ui/react';
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Container centerContent={true} justify="center" mt={70}>
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
      <Box>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Dmani871">Dmani Barnett</a>.
      </Box>
    </Container>
  );
}

export default App;
