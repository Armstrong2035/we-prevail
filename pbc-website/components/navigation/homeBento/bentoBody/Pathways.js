import { Grid2, Stack, Typography, Paper, Icon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { textStyles } from "@/app/styles";

export default function Pathways() {
  const pathways = [
    "New Convert",
    "Christian but first time on PBC",
    "PBC, NSN, and HOWJ family",
  ];

  return (
    <Stack spacing={3}>
      <Typography sx={textStyles.secondaryHeading}>
        Tailor your PBC experience.
      </Typography>

      <Stack spacing={2}>
        {pathways.map((pathway) => (
          <Paper
            elevation={2}
            sx={{ p: 2, display: "flex", justifyContent: "space-between" }}
          >
            <Typography sx={textStyles.secondaryBody}>{pathway}</Typography>
            <Icon size="large">
              <NavigateNextIcon />
            </Icon>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
