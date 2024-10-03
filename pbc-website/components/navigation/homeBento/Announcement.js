import { Typography, Box, Stack, Button, Paper, Grid2 } from "@mui/material";
import { colors, textStyles, buttonStyles } from "@/app/styles";

export default function Announcement() {
  const announcement = {
    headline: "This is an announcement",
    body: "We can use it for important information such as the HOWJ countdown, NSN special events, anniversary service, and so on ",
    callToAction: "Call to action",
  };
  return (
    <Paper
      sx={{
        padding: "40px 20px",
        backgroundColor: colors.secondaryBackground,
        mb: 2,
      }}
    >
      <Grid2
        container
        spacing={5}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid2 item>
          <Typography sx={textStyles.cardHeading}>
            {announcement.headline}
          </Typography>
          <Typography sx={textStyles.cardBody}>{announcement.body}</Typography>
        </Grid2>

        <Grid2 item>
          <Button variant="contained" sx={buttonStyles.primaryButton}>
            {announcement.callToAction}
          </Button>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
