import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Stack,
  Paper,
  Container,
  Box,
} from "@mui/material";
import Image from "next/image";
import community from "../../../../public/icons/community.png";
import shield from "../../../../public/icons/shield.png";
import discipleship from "../../../../public/icons/discipleship.png";
import love from "../../../../public/icons/love.png";
import excellence from "../../../../public/icons/excellence.png";
import heaven from "../../../../public/icons/heaven.png";
import globe from "../../../../public/icons/globe.png";
import church from "../../../../public/icons/church.png";
import missions from "../../../../public/icons/missions.png";
import { textStyles } from "@/app/styles";

// Unified Component
export default function PbcMissionAndVision() {
  const pbcMission =
    "To raise true witnesses and disciples of Jesus Christ across the nations of the earth.";
  const pbcVision =
    "To see humanity reconciled with God; and to see the glorious light of the Gospel of Christ cut through borders with prevailing power!";

  const rccgMissionAndVision = [
    { title: "To make heaven.", icon: heaven },
    { title: "To take as many people with us.", icon: community },
    {
      title: "To have a member of RCCG in every family of all nations.",
      icon: globe,
    },
    {
      title: "To accomplish No. 1 above, holiness will be our lifestyle.",
      icon: shield,
    },
    {
      title:
        "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.",
      icon: church,
    },
    {
      title:
        "We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ.",
      icon: missions,
    },
  ];

  const pbcCoreValues = [
    { title: "Love", icon: love },
    { title: "Community", icon: community },
    { title: "Consecration", icon: shield },
    { title: "Excellence", icon: excellence },
    { title: "Discipleship", icon: discipleship },
  ];

  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <CardHeader
          title={
            <Stack
              justifyContent={"space-between"}
              direction={"row"}
              alignItems={"center"}
            >
              <Typography sx={{ ...textStyles.cardHeading, color: "black" }}>
                PBC Mission, Vision, and Core Values
              </Typography>
            </Stack>
          }
        />

        <CardContent>
          {/* Mission Section */}
          <SectionCard title="PBC's Mission" color="#F5E8D0">
            <Typography sx={textStyles.tertiaryHeading}>
              {pbcMission}
            </Typography>
          </SectionCard>

          <SectionCard title="PBC's Mission" color={"#D0E8F5"}>
            <Typography sx={textStyles.tertiaryHeading}>{pbcVision}</Typography>
          </SectionCard>

          {/* RCCG Mission and Vision Section */}
          <SectionCard
            title="Mission and Vision of RCCG (Our parent church)"
            color="#DFF5D0"
          >
            <Stack spacing={2}>
              {rccgMissionAndVision.map((item, index) => (
                <IconTextRow key={index} icon={item.icon} text={item.title} />
              ))}
            </Stack>
          </SectionCard>

          {/* Core Values Section */}
          <SectionCard title="PBC's Core Values" color="#F1FAEE">
            <Stack spacing={2}>
              {pbcCoreValues.map((item, index) => (
                <IconTextRow key={index} icon={item.icon} text={item.title} />
              ))}
            </Stack>
          </SectionCard>
        </CardContent>
      </Box>
    </Container>
  );
}

// Section Card Wrapper Component
function SectionCard({ title, children, color }) {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3, backgroundColor: color }}>
      <Typography sx={textStyles.secondaryBody} gutterBottom>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

// Icon and Text Row Component
function IconTextRow({ icon, text }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Image height={24} width={24} src={icon} alt={text} />
      <Typography sx={{ ...textStyles.tertiaryHeading }}>{text}</Typography>
    </Stack>
  );
}
