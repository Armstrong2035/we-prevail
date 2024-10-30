import leadStewards from "../../../../public/images/stewards/lead-stewards.jpeg";
import bisiOyesile from "../../../../public/images/stewards/bisi-oyesile.jpeg";
import ibukunAjaman from "../../../../public/images/stewards/ibukun-ajamah.jpg";
import janetAdedoyin from "../../../../public/images/stewards/janet-adedoyin.png";
import samAjayi from "../../../../public/images/stewards/sam-ajayi.jpg";
import tineFarhan from "../../../../public/images/stewards/tina-farhan.jpeg";
import toyinKehinde from "../../../../public/images/stewards/toyin-kehinde.jpeg";
import victoriaOdesanmi from "../../../../public/images/stewards/victoria-odesanmi.png";
import winnieEtebe from "../../../../public/images/stewards/winnie-etebe.png";
import LeadStewards from "./LeadStewards";
import Stewards from "./Stewards";
import { Container, Stack } from "@mui/material";
import { textStyles } from "@/app/styles";

export default function OurPeople() {
  const pbcLeadStewards = {
    name: "Damilola and Ope Olu-Ayeni",
    title: "Lead Stewards",
    description:
      "Dammy and Ope Olu-Ayeni are the Lead Stewards of the Prevailing & Borderless Church (PBC). After more than a dozen years of active involvement in church planting efforts across the nations, they were entrusted by the leadership of The Redeemed Christian Church of God with the responsibility of setting up this nouvelle church plant known as PBC. Their personal ethos and core driving passion is to see humanity reconciled with God and to see JESUS CHRIST revealed in their day. They aspire to reach their community, city and world with the gospel presented in a practical, relevant, excellent yet undiluted way. Dammy is an investment banker by training with an extensive and decorated career on Wall Street, while Ope is an attorney and seasoned forensic consultant. They’ve been married since 2013 and live in the New York Tristate area, and are blessed with two beautiful children. ",
    image: leadStewards,
  };

  const pbcStewards = [
    {
      name: "Sam Ajayi",
      title: "PBC Steward, Oceania & Pacific Region",
      image: samAjayi,
    },
    {
      name: "Ibukun Ajamah",
      title: "PBC Global Administrator",
      image: ibukunAjaman,
    },
    {
      name: "Bisi Oyesile",
      title: "Steward, The Prevailing Media",
      image: bisiOyesile,
    },

    {
      name: "Toyin Kehinde",
      title: "PBC Steward, Middle East & Gulf Region",
      image: toyinKehinde,
    },
    {
      name: "Tina Farhan",
      title: "PBC Service Host",
      image: tineFarhan,
    },
    {
      name: "Victoria Odesanmi",
      title: "Steward, The Prevailing Worship Ministry",
      image: victoriaOdesanmi,
    },
    {
      name: "Winnie Etebe",
      title: "PBC Steward, UK and Great Britain",
      image: winnieEtebe,
    },
    {
      name: "Janet Adedoyin",
      title: "Steward, The Prevailing Comrades Ministry",
      image: janetAdedoyin,
    },
  ];

  return (
    <Container>
      {/* <Typography
        sx={{ ...textStyles.cardHeading, color: "black" }}
        align="left"
      >
        Our Stewards
      </Typography> */}
      <Stack spacing={7}>
        <LeadStewards pbcLeadStewards={pbcLeadStewards} />
        <Stewards pbcStewards={pbcStewards} />
      </Stack>
    </Container>
  );
}
