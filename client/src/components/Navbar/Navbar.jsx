import { IoHome } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BiBriefcase } from 'react-icons/bi'
import { FaBell } from 'react-icons/fa'

export const Narbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <IoHome />
            <p>Home</p>
          </li>
          <li>
            <FaPeopleGroup />
            <p>My network</p>
          </li>
          <li>
            <BiBriefcase />
            <p>Jobs</p>
          </li>
          <li>
            <FaBell />
            <p>Notification</p>
          </li>
        </ul>
        <div>
          Perfil
        </div>
      </nav>
    </>
  )
}
