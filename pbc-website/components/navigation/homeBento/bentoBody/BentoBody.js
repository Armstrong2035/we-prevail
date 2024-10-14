import { Divider, Grid2, Stack } from "@mui/material";
import Pathways from "./Pathways";
import GetInvolved from "./GetInvolved";
import OurSocialMedia from "./OurSocialMedia";
import Expressions from "./expressions/Expressions";

export default function BentoBody() {
  return (
    <Grid2 container spacing={2} sx={{ mt: 2 }}>
      <Grid2
        item
        size={{ lg: 8, md: 12, sm: 12, xs: 12 }}
        // sx={{ border: "1px solid green" }}
      >
        <Stack spacing={3}>
          <Pathways />
          <Divider />
          <Expressions />
        </Stack>
      </Grid2>
      <Grid2 item container spacing={3} size={{ lg: 4, md: 6, sm: 12 }}>
        <GetInvolved />
        <OurSocialMedia />
      </Grid2>
    </Grid2>
  );
}
