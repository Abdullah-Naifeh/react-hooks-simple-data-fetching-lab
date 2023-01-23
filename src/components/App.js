// create your App component here
import React, {useEffect,useState} from 'react'

export default function App() {
    const [image, setImages] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then(data => {
            setImages(data.message)
            setIsLoading(true)
        });
    },[]);

    if(!isLoading) return <p>Loading...</p>
  return (
    <div>
        <img src={image} alt= "A Random Dog"/>
    </div>
  )
}

