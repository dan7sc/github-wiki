import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Button from '../components/Button';
import Input from '../components/Input';
import RepositoryItem from '../components/RepositoryItem';
import { Container } from './styles';
import { api } from '../services/api';

function App() {
  const [currentRepository, setCurrentRepository] = useState('');
  const [repos, setRepos] = useState([]);

  const handleRepositorySearch = async () => {
    const isEmpty = currentRepository.length === 0;
    if (isEmpty) return alert('Type owner name and repository name separated by slash: owner/repo');
    const containsSlash = currentRepository.includes('/');
    if (!containsSlash) return alert('Type owner name and repository name separated by slash: owner/repo');
    const containsFirstElementsBetweenSlash = currentRepository.split('/')[0].length > 0;
    if (!containsFirstElementsBetweenSlash) return alert('Type owner name and repository name separated by slash: owner/repo');
    const containsSecondElementsBetweenSlash = currentRepository.split('/')[1].length > 0;
    if (!containsSecondElementsBetweenSlash) return alert('Type owner name and repository name separated by slash: owner/repo');

    try {
      const { data } = await api.get(`repos/${currentRepository}`);

      if (data.id) {
        const existData = repos.find((repo) => repo.id === data.id);

        if(!existData) {
          setRepos(prev => [...prev, data]);
          setCurrentRepository('')
        } else {
          setCurrentRepository('')
          alert('Repository already in the list.');
        }
      }
    } catch(e) {
      alert('Repository not found.');
    }
  }

  const handleRemoveRepository = async (id) => {
    const newRepos = repos.filter((repo) => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepository} onChange={(event) => setCurrentRepository(event.target.value)} />
      <Button onClick={handleRepositorySearch} />
      {repos.map((repo) => <RepositoryItem key={repo.id} repo={repo} handleRemoveRepository={handleRemoveRepository} />)}
    </Container>
  );
}

export default App;