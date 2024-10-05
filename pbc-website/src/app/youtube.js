import playlists from "../../utils/playlists";
const apiKey = "AIzaSyByWtVLV9IOv0C7wpZx2bnGudBColSwxmM";
const channelId = "UC8V0JjaQvoQVLuAN8JylktQ";

const collectPlaylists = async () => {
  const data = [];
  let nextPageToken = null;

  const apiCall = async () => {
    try {
      do {
        const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&key=${apiKey}&maxResults=50${
          nextPageToken ? `&pageToken=${nextPageToken}` : ""
        }`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        data.push(...json.items);
        nextPageToken = json.nextPageToken;
      } while (nextPageToken);
    } catch (error) {
      console.log(error);
    }
  };

  await apiCall();
  return data;
};

const collectPlaylistItems = async (playlistId) => {
  const items = [];
  let nextPageToken = null;

  const apiCall = async () => {
    try {
      do {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50${
          nextPageToken ? `&pageToken=${nextPageToken}` : ""
        }`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        items.push(...json.items);
        nextPageToken = json.nextPageToken;
      } while (nextPageToken);
    } catch (error) {
      console.log(error);
    }
  };

  await apiCall();
  return items;
};

export { collectPlaylists, collectPlaylistItems };

