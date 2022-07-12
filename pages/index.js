import { Text, Container, Spacer } from '@nextui-org/react';
import { SwitchThemebtn, GithubBtn, StarBtn } from '../components/buttons/templateBtns';

const Home = () => {
  return (
    <Container fluid align="center" justify="center" responsive="false" css={ { marginTop:'40px' } }>
      <Text h1 size={60}>
        NextJs | NextUi starter
      </Text>
      <Spacer y={3} />
      <SwitchThemebtn />
      <Spacer y={1} />
      <GithubBtn />
      <Spacer y={1} />
      <StarBtn />
    </Container>
  );
}

export default Home;
