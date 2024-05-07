import { Feets, Narbar } from '../../components/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/userSlices'

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
