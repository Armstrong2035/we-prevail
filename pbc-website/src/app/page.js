import HomeBento from "../../components/navigation/homeBento/HomeBento";
import { collectPlaylistItems, collectPlaylists } from "./youtube";
import playlists from "../../utils/playlists";

export default async function Home() {

  async function getPlaylistAndVideos() {
    try {
      const data = await collectPlaylists();
      console.log("All fetched playlists:", data);
  
      const filteredPlaylists = await Promise.all(
        data
          .filter((playlist) =>
            playlist.snippet.title.includes("PBC GLOBAL Series")
          )
          .map(async (playlist) => {
            const items = await collectPlaylistItems(playlist.id);
            return {
              title: playlist.snippet.title,
              id: playlist.id,
              thumbnails: playlist.snippet.thumbnails,
              itemCount: playlist.contentDetails.itemCount,
              videos: items.map(item => ({
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                thumbnails: item.snippet.thumbnails
              }))
            };
          })
      );
  
      console.log("Filtered PBC GLOBAL Series playlists with video IDs:", filteredPlaylists);
  
      return filteredPlaylists
    
  
    } catch (error) {
      console.error("Error fetching playlists:", error);
      return 
        []
      
    }
  }

  const playlists = await getPlaylistAndVideos()

 
 // await console.log(playlists)

  return (
    <>
      <HomeBento playlists={playlists} />
    </>
  );
}

export const revalidate = 604800;


