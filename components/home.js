import { useEffect } from 'react'
import Image from 'next/image'
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
      <div className="mx-10 mt-3">
        <Image
          alt="up"
          src="/posters/up.jpg"
          height={810}
          width={540}
        />
      </div>
      <div className="mx-10 mb-2 px-2 py-2 border rounded bg-base-100">
        <p className="text-left text-sm">
          An exciting, funny, and poignant adventure, Up offers an impeccably crafted story told with wit and arranged with depth, as well as yet another visual Pixar treat.
        </p>
      </div>
      <div className="mx-10 px-2 py-2 border rounded bg-base-100">
        <p className="text-left text-sm">
          "Up" is a beautifully animated and emotionally poignant exploration of the power of love and the importance of following your dreams.
        </p>
      </div>
    </div>
  )
}

export default Home
