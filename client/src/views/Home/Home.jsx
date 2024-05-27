import { Feets, Narbar } from '../../components/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../redux/userSlices'
import { fetchPosts } from '../../redux/postsSlices'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      <Narbar />
      <Feets />
    </div>
  )
}
