import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import {
  FaCalendar,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { NavLink, useParams } from 'react-router-dom'

import { GithubContext } from '../../contexts/GithubContext'

import {
  Heading,
  InfosContainer,
  IssueBodyContainer,
  PublishDetailContainer,
  PublishSummary,
} from './styles'

export function PublishDetail() {
  const params = useParams()
  const { issues } = useContext(GithubContext)

  const issueDetail = issues.items.find(
    (issue) => issue.id === Number(params.issueId),
  )

  if (!issueDetail) return

  const publishedDateRelativeToNow = formatDistanceToNow(
    issueDetail.created_at,
    {
      locale: ptBR,
      addSuffix: true,
    },
  )

  return (
    <PublishDetailContainer>
      <PublishSummary>
        <Heading>
          <NavLink to="/">
            <FaChevronLeft size={12} />
            Voltar
          </NavLink>

          <a href={issueDetail.html_url} target="_blank" rel="noreferrer">
            Ver no Github <FaExternalLinkAlt size={12} />
          </a>
        </Heading>

        <h1>{issueDetail.title}</h1>

        <InfosContainer>
          <div>
            <FaGithub size={18} />
            <span>{issueDetail.user.login}</span>
          </div>

          <div>
            <FaCalendar size={18} />
            <span>{publishedDateRelativeToNow}</span>
          </div>

          <div>
            <FaComment size={18} />
            <span>32 seguidores</span>
          </div>
        </InfosContainer>
      </PublishSummary>

      <IssueBodyContainer>
        <ReactMarkdown children={issueDetail.body} className="line-break" />
      </IssueBodyContainer>
    </PublishDetailContainer>
  )
}
