import { Container, Stack, Typography } from "@mui/material";
import cashapp from "../../public/paymentLogos/cashapp.png";
import churchpad from "../../public/paymentLogos/churchpad.png";
import paypal from "../../public/paymentLogos/paypal.png";
import stripe from "../../public/paymentLogos/stripe.png";
import zelle from "../../public/paymentLogos/zelle.png";
import IntegratedCheckoutOptions from "./options/IntegratedCheckoutOptions";
import ExternalWallets from "./options/ExternalWallets";
import QuickGiving from "./options/QuickGiving";
import { textStyles } from "@/app/styles";

export default function Giving() {
  const linkedOptions = [
    { title: "Stripe", image: stripe, url: "" },
    { title: "Church pad", image: churchpad, url: "" },
  ];
  const wallets = [
    {
      title: "Zelle",
      email: "give@weprevail.org",
      image: zelle,
    },
    {
      title: "Cash App",
      email: "$GiveToPBC",
      image: cashapp,
    },
    {
      title: "PayPal",
      email: "give@weprevail.org",
      image: paypal,
    },
  ];
  return (
    <Container>
      <Typography sx={{ ...textStyles.tertiaryHeading, color: "black", mb: 5 }}>
        Thank you for your generosity. Your partnership helps us transform lives
        with the power of the WORD.​
      </Typography>
      <Stack spacing={4}>
        <IntegratedCheckoutOptions linkedOptions={linkedOptions} />
        <ExternalWallets wallets={wallets} />
        <QuickGiving />
      </Stack>
    </Container>
  );
}
