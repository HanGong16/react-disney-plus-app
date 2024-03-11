import styled from 'styled-components';
import Nav from './components/Nav';

function App() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 24px);

  &:after {
    content: '';
    position: absolute;
    background-image: url('../public/images/home-background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    opacity: 1;
    z-index: -1;
  }
`;

export default App;
