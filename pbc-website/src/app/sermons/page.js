
import { Container } from "@mui/material"
import SermonList from "../../../components/navigation/semons/sermonList"
import { loadedPlaylists } from "../page"


export default async function page(){

    console.log(loadedPlaylists)

    return (
        <div>
            <SermonList loadedPlaylists={loadedPlaylists}/>
        </div>
    )
}