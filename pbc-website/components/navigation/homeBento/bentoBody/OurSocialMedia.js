import youtube from '../../../../public/icons/youtube.png'
import instagram from '../../../../public/icons/instagram.png'
import tiktok from '../../../../public/icons/tiktok.png'
import x from '../../../../public/icons/x.png'
import spotify from '../../../../public/icons/spotify.png'
import { Button, Card, CardHeader, Stack, Typography } from '@mui/material'
import { buttonStyles, textStyles } from '@/app/styles'
import Image from 'next/image'

export default function OurSocialMedia(){
    const socialMediaPages = [
        {
            platform: 'Instagram',
            icon: instagram,
            url: 'https://www.instagram.com/pbcglobal/',
        },

        {
            platform: 'Youtube',
            icon: youtube,
            url: 'https://www.youtube.com/c/PBCGLOBAL',
        },
        {
            platform: 'X fka Twitter',
            icon: x,
            url: 'https://x.com/pbc_global',
        },
        {
            platform: 'Tiktok',
            icon: tiktok,
            url: 'https://www.tiktok.com/@pbcglobalchurch?_t=8aJpzh8a44w&_r=1',
        },

        {
            platform: 'Spotify',
            icon: spotify,
            url: 'https://open.spotify.com/artist/1IUpGDV4zUfwFbq6SO6Uy0?si=dpSWQJGzRlWOE7JHpTZzhw&nd=1&dlsi=9ff4f1b7103346ff',
        },
            ]

    return(
        <Card>
            <CardHeader title={
                <Typography sx={textStyles.secondaryBody}>Connect with PBC</Typography>
            }/>
            <Stack spacing={2}>
            {socialMediaPages.map((i) => (
                <Button variant='text' fullWidth sx={{...buttonStyles.textButton, ml: 2}}
                startIcon={<Image src={i.icon} width={24} height={24} />}
                >
                    {i.platform}
                </Button>
            ))}
            </Stack>
        </Card>
    )
}