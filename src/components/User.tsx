import { UserProps } from "../types/user"

import Classes from "./User.module.css"

import { MdLocationPin } from "react-icons/md"

import { Link } from "react-router-dom"

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location
}: UserProps) => {
  return (
    <div className={Classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={Classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={Classes.stats}>
        <div>
          <p>Followers:</p>
          <p className={Classes.number}>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className={Classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`https://github.com/${login}?tab=repositories`}>
        See best projects
      </Link>
    </div>
  )
}

export default User
