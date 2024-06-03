import {Grid} from "@mui/material";
import MyImageList from "./MyImageList";
import "./General.css"
import Typewriter from 'typewriter-effect';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MemoryIcon from '@mui/icons-material/Memory';
import BlockIcon from '@mui/icons-material/Block';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

function Homepage() {

    const typing = [
        'Hello, this is the official website for EBenchAttacker.',
        'The tool is developed by Enqurance Lin, a student at BUAA.'
    ]

    return (
        <Grid container>
            <Grid item xs={12} className="typing-style" paddingTop={5}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(typing[0])
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString(typing[1])
                            .pauseFor(2500)
                            .start();
                    }}
                    options={{
                        loop: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} className="text-style paragraph-style">
                EBenchAttacker is a simple and easy-to-use tool that can evaluate the alignment ability of large
                language
                models(LLMs). You can easily integrate various open source or commercial models into EBenchAttacker, as
                long
                as you have the relevant access and computing resources. The development of the tool is supported by
                Beijing
                Advanced Innovation Center for Big Data and Brain Computing.
            </Grid>
            <Grid tem xs={12} className="text-style paragraph-style">
                ✨Update 2024.5.4: We have added experimental results for the LLaMA-3-8B-Instruct model~
            </Grid>
            <Grid item xs={12} paddingTop={5}>
                <MyImageList info={ebenchattacker}></MyImageList>
            </Grid>
            <Grid item xs={12}>
                <Grid container className="text-style paragraph-style">
                    EBenchAttack has the following designs:
                </Grid>
                <List>
                    <ListItem>
                        <Grid>
                            <FormatListBulletedIcon sx={{fontSize: 40, color: "#B22222"}}/>
                        </Grid>
                        <Grid container paddingLeft={3}>
                            <Grid item xs={12} className="text-item-title-style">Scenes</Grid>
                            <Grid item xs={12} className="text-item-style">
                                EBenchAttacker considers scenarios including cybercrime, fraud, political sensitivity
                                and so
                                on. The design of the scene refers to some public terms of service of OpenAI, Meta, etc.
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid>
                            <HelpOutlineIcon sx={{fontSize: 40, color: "#B22222"}}/>
                        </Grid>
                        <Grid container paddingLeft={3}>
                            <Grid item xs={12} className="text-item-title-style">EBench - Harmful Questions Set</Grid>
                            <Grid item xs={12} className="text-item-style">
                                EBench is our specialized dataset designed for EBenchAttacker. It contains 1,000 harmful
                                questions, 10 scenarios, each harmful question written in eight languages.
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid>
                            <MemoryIcon sx={{fontSize: 40, color: "#B22222"}}/>
                        </Grid>
                        <Grid container paddingLeft={3}>
                            <Grid item xs={12} className="text-item-title-style">Target Models</Grid>
                            <Grid item xs={12} className="text-item-style">
                                EBenchAttacker integrated four open source models and three commercial models and can be
                                easily expanded.
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid>
                            <BlockIcon sx={{fontSize: 40, color: "#B22222"}}/>
                        </Grid>
                        <Grid container paddingLeft={3}>
                            <Grid item xs={12} className="text-item-title-style">Attack Methods</Grid>
                            <Grid item xs={12} className="text-item-style">
                                EBenchAttacker integrated Default Attack, GCG, PAIR and other
                                attack methods to attack LLMs and collects experimental data.
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid>
                            <AutoGraphIcon sx={{fontSize: 40, color: "#B22222"}}/>
                        </Grid>
                        <Grid container paddingLeft={3}>
                            <Grid item xs={12} className="text-item-title-style">Analysis</Grid>
                            <Grid item xs={12} className="text-item-style">
                                After using EBenchAttacker to attack, we analyze the experimental results and present
                                them.
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Grid container className="text-style paragraph-style">
                        By utilizing EBenchAttacker for the analysis of LLMs, we can gain a more
                        comprehensive understanding of their security aspects. This enables us to refine the model in a
                        manner that enhances its security and compliance. Additionally, our tool has the potential to
                        inspire future research endeavors.
                    </Grid>
                </List>
            </Grid>
        </Grid>
    )
}

const ebenchattacker = {
    caption: "EBenchAttacker", images: [{
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202406031129025.png", title: "EBenchAttacker"
    }], width: "80%", col: 1
}


export default Homepage