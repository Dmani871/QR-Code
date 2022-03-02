import { Container,Image } from '@chakra-ui/react';
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Container>
      <Card>
        <Image src={qrCode} alt='QR Code'></Image>
      </Card>
    </Container>


  );
}

export default App;
