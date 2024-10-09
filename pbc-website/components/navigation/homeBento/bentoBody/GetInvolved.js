import { Card, CardContent, CardHeader, Typography, Button } from "@mui/material";
import { textStyles, buttonStyles } from "@/app/styles";


export default function GetInvolved(){

    const waysToGetInvolved = ['Volunteer', 'Give', 'Pray', 'Publicize', 'HOWJ out reach' ]

    return (
        <Card>
            <CardHeader title={
                <div>
                    <Typography sx={textStyles.secondaryHeading}>
                        Get Involved
                    </Typography>
                    <Typography >
                        See what God can do through you
                    </Typography>
                </div>
            } />

            <CardContent>
                {waysToGetInvolved.map((i) => (
                    <Button size={'large'} variant={'text'} fullWidth sx={buttonStyles.textButton}>
                        {i}
                    </Button>
                ))}
            </CardContent>

        </Card>
    )
}