import { IoHome } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BiBriefcase } from 'react-icons/bi'
import { FaBell } from 'react-icons/fa'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export const Narbar = () => {
  return (
    <>
      <nav className={style.nav_container}>
        <Link className={style.logo_nav} to={'/home'}>
          <i>F</i>
        </Link>
        <input
          className={style.input_search}
          placeholder="Search"
          type="text"
        />
        <ul className={style.ul}>
          <li>
            <a href="/home">
              <IoHome />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="/network">
              <FaPeopleGroup />
              <p>My network</p>
            </a>
          </li>
          <li>
            <a href="/jobs">
              <BiBriefcase />
              <p>Jobs</p>
            </a>
          </li>
          <li>
            <a href="/notifications">
              <FaBell />
              <p>Notification</p>
            </a>
          </li>
        </ul>

        <div className={style.menu_perfil}>Perfil</div>
      </nav>
    </>
  )
}
