import gitLogo from '../assets/github.png';
import Button from '../components/Button';
import Input from '../components/Input';
import RepositoryItem from '../components/RepositoryItem';
import { Container } from './styles';

import { repos } from '../db';

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input />
      <Button />
      {repos.map((repo) => <RepositoryItem key={repo.id} repo={repo} />)}
    </Container>
  );
}

export default App;