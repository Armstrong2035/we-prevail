"use client";
import React, { useEffect, useState } from "react";
import HomeBento from "../../components/navigation/homeBento/HomeBento";
import { collectPlaylistItems, collectPlaylists } from "./youtube";
import playlists from "../../utils/playlists";


export default function Home() {

  // const [playlists, setPlaylists] = useState([]);
  const [playlistItems, setPlaylistItems] = useState([])

  useEffect(() => {
    //console.log('This use effect is working')
    const fetchAlbums = async () => {
     // console.log('fetchAlbums is working')
      try {
        const data = await Promise.all(playlists.map(async(playlist) => {
            return await collectPlaylistItems(playlist.id)
          }))
          setPlaylistItems(data)
        }
      catch(error) {
        console.log(error)
      }
    }
    fetchAlbums()
    
  }, [])

  console.log(playlistItems)

  const mappedPlaylists = playlistItems.map((item) => {

    return {
      playlistId: item.snippet.playlistId,
    videoId: item.snippet.resourceId.videoId,
    embedUrl: `https://www.youtube.com/watch?v=${videoId}`

    }
  })

  

  // useEffect(() => {
  //   const fetchPlaylists = async () => {
  //     try {
  //       const data = await collectPlaylists();
  //       console.log("All fetched playlists:", data);

  //       const filteredPlaylists = data
  //         .filter((playlist) =>
  //           playlist.snippet.title.includes("PBC GLOBAL Series")
  //         )
  //         .map((playlist) => ({            
  //             title: playlist.snippet.title,
  //             id: playlist.id,
  //             thumbnails: playlist.snippet.thumbnails,
  //             itemCount: playlist.contentDetails.itemCount,
            
  //         }));
  //       console.log("Filtered PBC GLOBAL Series playlists:", filteredPlaylists);
  //       setPlaylists(filteredPlaylists);
  //     } catch (error) {
  //       console.error("Error fetching playlists:", error);
  //     }
  //   };

  //   fetchPlaylists();
  // }, []);

  // console.log("Current playlists state:", playlists);

  return (
    <>
      <HomeBento playlistItems={playlistItems} />
    </>
  );
}
