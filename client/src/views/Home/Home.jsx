import { Feets, Narbar, PostCreate } from '../../components/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers, fetchPosts } from '../../redux/userSlices'

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      <Narbar />
      <PostCreate />
      <Feets />
    </div>
  )
}
