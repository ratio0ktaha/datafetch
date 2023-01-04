import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get('https://anime-db.p.rapidapi.com/anime', {
          params: {
          },
          headers: {
            'X-RapidAPI-Key':  '365bb86ab7mshf4c218414d50ef5p1ff7d6jsna7546d0d9703',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
          },

        })
        .then((res) => setMovie(res.data))
        .catch((error) => console.log(error))
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)

    }

  }, []);

  useEffect(() => {
    console.log(movie)
  }, [movie])


  return (
    <>
      {
        loading ? "taha" : movie && movie?.data?.map(item => (
          <div key={item._id}>
            <h1>{item.title}</h1>

            <img src={item.image} alt="okkk" />


          </div>
        ))
      }
    </>
  )

}
