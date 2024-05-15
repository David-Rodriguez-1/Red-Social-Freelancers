import { IoHome } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { BiBriefcase } from 'react-icons/bi'
import { FaBell } from 'react-icons/fa'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useOutsideClick } from '../../hooks/useOutsideClick'

export const Narbar = () => {
  const { ref, isOpen, setIsOpen } = useOutsideClick(false, () => { })
  
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsOpen(!isOpen);
    }
  }

  return (
    <nav className={style.nav_container} ref={ref}>
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
        <div className={style.menu_perfil}>
          <img
            className={style.img_perfil}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={onKeyDown}
            src="https://avatars.githubusercontent.com/u/105451356?s=400&u=cbf6972a527c11de3916994407358ebeb7521fb7&v=4"
            alt=""
          />
          {isOpen && (
            <ul className={style.sub_menu}>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="configuration">Configuration</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
  )
}
