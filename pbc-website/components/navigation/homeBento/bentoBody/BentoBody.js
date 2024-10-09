import { Grid2 } from "@mui/material";
import Pathways from "./Pathways";
import GetInvolved from "./GetInvolved";
import OurSocialMedia from "./OurSocialMedia";

export default function BentoBody(){

    return (
       <Grid2 container spacing={2} sx={{ mt: 2}}>
            <Grid2 item size={{lg: 8, md: 12, sm: 12, xs:12 }}>
                <Pathways />
                
            </Grid2>
            <Grid2 item container spacing={3} size={{lg: 4, md: 12}}>
                <GetInvolved/>
                <OurSocialMedia />
            </Grid2>
       </Grid2>
    )
}