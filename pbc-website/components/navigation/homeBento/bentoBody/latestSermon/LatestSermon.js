import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SmLatestSermon from "./SmLatestSermon";
import LgLatestSermon from "./LgLatestSermon";
export default function LatestSermon({ loadedPlaylists, buttons }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      {isDesktop ? (
        <LgLatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} />
      ) : (
        <SmLatestSermon loadedPlaylists={loadedPlaylists} buttons={buttons} />
      )}
    </>
  );
}
