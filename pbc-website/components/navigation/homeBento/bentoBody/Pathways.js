import { Grid2, Stack, Typography, Paper, Icon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { textStyles } from "@/app/styles";

export default function Pathways() {
  // const pathways = [
  //   "New Convert",
  //   "Christian but first time on PBC",
  //   "PBC, NSN, and HOWJ family",
  // ];

  const pathways = [
    { title: "New Convert", color: "#F5E8D0" },
    { title: "Christian but first time on PBC", color: "#D0E8F5" },
    { title: "PBC, NSN, and HOWJ family", color: "#DFF5D0" },
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
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: pathway.color,
            }}
          >
            <Typography sx={textStyles.secondaryBody}>
              {pathway.title}
            </Typography>
            <Icon size="large">
              <NavigateNextIcon />
            </Icon>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
