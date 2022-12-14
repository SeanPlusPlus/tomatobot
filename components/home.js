import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/hello',
      )

      console.log(result.data)
    }

    fetchData()
  }, []);

  return (
    <div className="text-center h-screen">
      <h1 className="mt-3">Hello World</h1>
    </div>
  )
}

export default Home
