import { Container } from "@mui/material";
import SermonList from "../../../components/navigation/sermons/sermonList";
import Footer from "../../../components/footer/Footer";
import { collectPlaylistItems, collectPlaylists } from "../youtube";

export default async function page() {
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
              videos: items.map((item) => ({
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                thumbnails: item.snippet.thumbnails,
              })),
            };
          })
      );

      console.log(
        "Filtered PBC GLOBAL Series playlists with video IDs:",
        filteredPlaylists
      );

      return filteredPlaylists;
    } catch (error) {
      console.error("Error fetching playlists:", error);
      return;
      [];
    }
  }

  const loadedPlaylists = await getPlaylistAndVideos();
  // await console.log(playlists)
  return (
    <div style={{ backgroundColor: "#DFF5D0" }}>
      <SermonList loadedPlaylists={loadedPlaylists} />
      <Footer />
    </div>
  );
}

export const revalidate = 604800;
