import { Heading, Image, VStack, Text, Flex, Box, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Card from './components/Card';
import qrCode from './assets/image-qr-code.png'
function App() {
  return (
    <Flex flexDirection='column' align="center" justifyContent="center" height='100vh' width='100vw'>
      <Card>
        <VStack>
          <Image src={qrCode} alt='QR Code' borderRadius='xl' boxSize='250px'/>
          <Heading as='h1' size='md'>
            Improve your front-end skills by building projects
          </Heading>
          <Text>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Text>
        </VStack>
      </Card>
      <VStack>
        <Link href='https://www.frontendmentor.io?ref=challenge' isExternal>
          Challenge by Frontend Mentor <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='https://www.frontendmentor.io/profile/Dmani871'>Dmani Barnett</Link>
      </VStack>
    </Flex>
  );
}

export default App;
