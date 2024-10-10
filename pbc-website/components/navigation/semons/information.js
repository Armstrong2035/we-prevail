import { Stack, Typography } from "@mui/material";
export default function Information({ playlist, textStyles }) {
  console.log(playlist);

  return (
    <Stack>
      <Typography sx={textStyles.sermons.title}>
        {playlist.title.split("|")[0].trim()}
      </Typography>
      <Typography sx={textStyles.sermons.body}>
        {`${playlist.videos.length} part series`}
      </Typography>
    </Stack>
  );
}
