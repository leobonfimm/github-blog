import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { GithubContext } from '../../contexts/GithubContext'
import { PublishCard } from './components/PublishCard'
import { SearchForm } from './components/SearchForm'
import {
  BlogContainer,
  PublishNumberContainer,
  PublishesContainer,
} from './styles'

export function Blog() {
  const { issues } = useContext(GithubContext)

  return (
    <div>
      <Profile />

      <BlogContainer>
        <PublishNumberContainer>
          <h2>Publicações</h2>
          <span>{issues.total_count} publicações</span>
        </PublishNumberContainer>

        <SearchForm />

        {issues.items && (
          <PublishesContainer>
            {issues.items.map((issue) => (
              <PublishCard key={issue.id} id={issue.id} />
            ))}
          </PublishesContainer>
        )}
      </BlogContainer>
    </div>
  )
}
