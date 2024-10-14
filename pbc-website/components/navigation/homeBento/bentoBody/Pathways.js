import {
  Grid2,
  Stack,
  Typography,
  Paper,
  Icon,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { textStyles } from "@/app/styles";
import bible from "../../../../public/icons/bible.png";
import handshake from "../../../../public/icons/handshake.png";
import parentalControl from "../../../../public/icons/parental-control.png";
import Image from "next/image";

export default function Pathways() {
  // const pathways = [
  //   "New Convert",
  //   "Christian but first time on PBC",
  //   "PBC, NSN, and HOWJ family",
  // ];

  const pathways = [
    { title: "New Convert", color: "#F5E8D0", icon: bible },
    {
      title: "Christian but first time on PBC",
      color: "#D0E8F5",
      icon: handshake,
    },
    {
      title: "PBC, NSN, and HOWJ family",
      color: "#DFF5D0",
      icon: parentalControl,
    },
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
            <Stack direction="row" spacing={2} alignItems={"center"}>
              <Image src={pathway.icon} width={24} height={24} responsive />
              <Typography sx={textStyles.secondaryBody}>
                {pathway.title}
              </Typography>
            </Stack>
            <IconButton>
              <Icon size="large">
                <NavigateNextIcon />
              </Icon>
            </IconButton>
          </Paper>
        ))}
      </Stack>
    </Stack>
  );
}
