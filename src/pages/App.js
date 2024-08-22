import gitLogo from '../assets/github.png';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container } from './styles';

function App() {
  console.log(gitLogo);
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input />
      <Button />
    </Container>
  );
}

export default App;