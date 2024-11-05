import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LgLatestService from "./LgLatestService";
import SmLatestService from "./SmLatestService";
export default function LatestService({ latestService }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  console.log(latestService);

  return (
    <>
      <LgLatestService latestService={latestService} />
    </>
  );
}
