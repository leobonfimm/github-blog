import { useContext } from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
} from 'react-icons/fa'

import { GithubContext } from '../../contexts/GithubContext'

import {
  Heading,
  InfosContainer,
  ProfileContainer,
  ProfileDescriptionContainer,
} from './styles'

export function Profile() {
  const { user } = useContext(GithubContext)

  return (
    <ProfileContainer>
      <img src={`${user.html_url}.png`} alt="" />

      <ProfileDescriptionContainer>
        <Heading>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Github <FaExternalLinkAlt size={12} />
          </a>
        </Heading>

        <p>{user.bio}</p>

        <InfosContainer>
          <div>
            <FaGithub size={18} />
            <span>{user.login}</span>
          </div>

          <div>
            <FaBuilding size={18} />
            <span>{user.company}</span>
          </div>

          <div>
            <FaUsers size={18} />
            <span>{user.followers}</span>
          </div>
        </InfosContainer>
      </ProfileDescriptionContainer>
    </ProfileContainer>
  )
}
