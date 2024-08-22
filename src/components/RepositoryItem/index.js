import React from 'react'

import { RepositoryItemContainer } from './styles';

function RepositoryItem({repo, handleRemoveRepository}) {

  const handleRemove = () => {
    handleRemoveRepository(repo.id)
  }

  return (
    <RepositoryItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">See repository</a><br />
        <a href="."  rel="noreferrer" className="remover">Remove</a>
        <hr />
    </RepositoryItemContainer>
  )
}

export default RepositoryItem;