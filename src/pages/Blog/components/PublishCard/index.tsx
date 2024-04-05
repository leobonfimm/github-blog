import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useContext } from 'react'

import { GithubContext } from '../../../../contexts/GithubContext'

import { Heading, PublishCardContainer } from './styles'

interface PublishCardProps {
  id: number
}

export function PublishCard({ id }: PublishCardProps) {
  const {
    issues: { items },
  } = useContext(GithubContext)

  const issue = items.find((item) => item.id === id)

  if (!issue) return

  const { title, body } = issue

  const publishedDateRelativeToNow = formatDistanceToNow(issue.created_at, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PublishCardContainer to={`/issue-detail/${id}`}>
      <Heading>
        <h2>{title}</h2>

        <time>{publishedDateRelativeToNow}</time>
      </Heading>

      <p>{body}</p>
    </PublishCardContainer>
  )
}
