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
        .get("https://online-movie-database.p.rapidapi.com/auto-complete", {
          params: { q: 'game of thr' },
          headers: {
            'X-RapidAPI-Key': '3a00b26557msh72a6e1ba2cb53c1p1a8297jsn5eb9cb53fbfd',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          },

        })
        .then((res) => setMovie(res.data.d))
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
        loading ? "hassan" : movie && movie.map(item => (
          <div key={item.id}>
            <h1>{item.l}</h1>
            {
              <img src={item.i ?.imageUrl} alt="okkk" />
              // i.i.map((i) => (
              //   <div>
              //     <img src={i.imageUrl} alt="" />
              //   </div>
              // ))
            }
          </div>
        ))
      }
    </>
  )

}
