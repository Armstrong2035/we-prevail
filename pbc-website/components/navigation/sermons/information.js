import { Stack, Typography } from "@mui/material";
import { textStyles } from "@/app/styles";
export default function Information({ playlist }) {
  //console.log(playlist);

  return (
    <Stack>
      <Typography sx={{ ...textStyles.sermons.title, color: "white" }}>
        {playlist.title.split("|")[0].trim()}
      </Typography>
      <Typography sx={{ ...textStyles.sermons.body, color: "#E1E5EA" }}>
        {`${playlist.videos.length} part series`}
      </Typography>
    </Stack>
  );
}
