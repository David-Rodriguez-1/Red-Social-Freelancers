import { Feets } from '../../components/index'
import { useEffect } from 'react'
// import style from './Home.module.css'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../redux/action'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <Feets />
    </div>
  )
}
