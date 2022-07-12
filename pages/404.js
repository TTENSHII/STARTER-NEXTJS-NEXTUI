import { Button, Container, Spacer, Text, Link } from '@nextui-org/react';

const NotFound = () => {
  return (
    <Container fluid align="center" justify="center" responsive="false" css={ { marginTop:'50px' } }>
      <Text h1 size={60}>
        404 ERROR
      </Text>
      <Spacer y={3} />
      <Link href="/">
        <Button>Go to home</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
