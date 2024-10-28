"use client";
import { Container, Grid, Grid2, Stack } from "@mui/material";
import RccgMissionAndVision from "./RccgMissionAndVision";
import PbcMission from "./PbcMission";
import PbcVision from "./PbcVision";
import PbcCoreValues from "./PbcCoreValues";
import LgAppBar from "../../LgAppBar";

export default function MissionAndVision() {
  return (
    <div>
      {/* <LgAppBar /> */}
      <Container>
        <Stack>
          <PbcMission />
          <PbcVision />
          <PbcCoreValues />
        </Stack>
      </Container>
    </div>
  );
}
