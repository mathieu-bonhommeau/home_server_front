import {useEffect, useState} from "react";
import Link from "next/link";

const Musics = () => {

    const [musics, setMusics] = useState([])
    console.log(musics)

    useEffect(() => {
        const getMusics = async () => {
            try {
                const response = await fetch('http://localhost:3000/musics')
                if (response.ok) {
                    const datas = await response.json()
                    setMusics(datas)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getMusics().then()
        return () => [];
    }, []);


    return (
        <div>{musics.map(music => (
            <audio controls>
                <source src={`http://localhost:3000/musics/stream/${music.path}`} type="audio/mpeg" />
            </audio>
            ))}
        </div>
    )
}

export default Musics