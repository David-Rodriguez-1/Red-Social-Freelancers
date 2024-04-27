import { Feets, Narbar } from '../../components/index'
import { useEffect } from 'react'
// import style from './Home.module.css'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/userSlices'
// import { getUsers } from '../../redux/action'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <Narbar/>
      <Feets />
    </div>
  )
}
