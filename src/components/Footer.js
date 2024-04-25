import Container from '@mui/material/Container';
import {Grid, Link} from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FaceIcon from '@mui/icons-material/Face';
import "./Footer.css"
import Statistic from "./Statistic";


const Footer = () => {
    return (
        <Container>
            <Grid container justifyContent={"center"}>
                <Grid item paddingTop={5}>
                    <Link href={"https://github.com/Enqurance"}>
                        <GitHubIcon sx={{fontSize: 30, color: "#B22222"}}></GitHubIcon>
                    </Link>
                    <Link href={"mailto:Enqurance@Outlook.com"}>
                        <EmailIcon sx={{fontSize: 30, color: "#B22222"}}
                                   style={{marginLeft: "10px", marginRight: "5px"}}></EmailIcon>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/%E5%AD%90%E6%9D%B0-%E6%9E%97-604690296/?locale=en_US"}>
                        <LinkedInIcon sx={{fontSize: 30, color: "#B22222"}}
                                      style={{marginLeft: "5px", marginRight: "10px"}}></LinkedInIcon>
                    </Link>
                    <Link href={"https://enqurance-trail.com"}>
                        <FaceIcon sx={{fontSize: 30, color: "#B22222"}}></FaceIcon>
                    </Link>
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item paddingTop={1} className={"layout-copyright"}>
                    ©️{} Enqurance · 2024
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item className={"layout-copyright"}>
                    Beihang University, School of Computer Science and Engineering(SCSE)
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item className={"layout-copyright"}>
                    Beijing Advanced Innovation Center for Big
                    Data and Brain Computing
                </Grid>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Grid item className={"layout-copyright"}>
                    <Statistic/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer