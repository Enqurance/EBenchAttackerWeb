import {Box, Grid, Link} from "@mui/material";
import DangerousIcon from '@mui/icons-material/Dangerous';


import "./Navigator.css"

function Navigator() {
    return (<Box>
        <Grid container className="nav-style">
            <Item>
                <DangerousIcon sx={{fontSize: 60, color: "#B22222", paddingTop: "15px"}}/>
            </Item>
            <Item>
                <Grid container className="nav-title-style">
                    <Link href="/"
                          color="inherit"
                          underline="none">
                        <span style={{color: "#B22222"}}>EBench</span>
                        <span>Attacker</span>
                    </Link>
                </Grid>
            </Item>
            <Box flexGrow={1}/>
            <Item>
                <Grid container className="nav-text-style">
                    <Link href="/documentation"
                          color="inherit"
                          underline="none">
                        Documentation
                    </Link>
                </Grid>
            </Item>
            <Item>
                <Grid container className="nav-text-style">
                    <Link href="/leaderboard"
                          color="inherit"
                          underline="none">
                        Leaderboard
                    </Link>
                </Grid>
            </Item>
            <Item>
                <Grid container className=" nav-text-style">
                    <Link href=" https://github.com/Enqurance/LLMAttacks"
                          color="inherit"
                          underline="none"
                          target="_blank">
                        Github
                    </Link>
                </Grid>
            </Item>
        < /Grid>
    </Box>)
}

const Item = ({children}) => {
    return (<Grid sx={{
        boxShadow: 'none',
    }}>
        {children}
    </Grid>)
}

export default Navigator