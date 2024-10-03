const apiKey = "AIzaSyByWtVLV9IOv0C7wpZx2bnGudBColSwxmM"; // Replace with your actual API key
const channelId = "UC8V0JjaQvoQVLuAN8JylktQ";

const collectSermons = async () => {
  const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
