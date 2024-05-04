import {Grid} from "@mui/material";
import "./Leaderboard.css"
import LeaderboardTable from "./LeaderboardTable";
import MyImageList from "./MyImageList";

function Leaderboard() {
    return (
        <Grid container>
            <Grid item xs={12} className="title-style" paddingTop={5}>
                Welcome to the EBenchAttacker's Leaderboard😄
            </Grid>
            <Grid item xs={12} className="text-style paragraph-style">
                Here we shows the results of EBenchAttacker attacking different LLMs. We tested
                both open source LLMs and commercial LLMs and calculated ASR(Attack Success Rate, %)
                respectively. Note that some attacks might <span style={{fontWeight: 600}}>not be
                able</span> to work on commercial LLMs. Thus we might apply a "Transfer Attack" on
                these LLMs. Here we use dataset <span style={{fontWeight: 600, color: "#E86253"}}>
                "EBench-small"</span>. You may conduct a more comprehensive experiment on larger
                datasets we provided.
            </Grid>
            <Grid item xs={12} className="paragraph-style">
                <LeaderboardTable/>
            </Grid>
            <Grid item xs={12} className="text-style paragraph-style">
                In addition, we have included several radar charts below to facilitate a more straightforward comparison
                of the models' alignment capabilities. When using the provided data, please ensure to attribute the
                source of the information.
            </Grid>
            <Grid item xs={12}>
                <MyImageList info={radarone}></MyImageList>
            </Grid>
        </Grid>
    )
}


const radarone = {
    caption: "ASR of attacks in different scenarios - Default Attack(English)", images: [{
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202405042121283.png", title: "Result 1"
    }], width: "60%", col: 1
}

export default Leaderboard;