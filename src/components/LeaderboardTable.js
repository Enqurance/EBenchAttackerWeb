import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./Leaderboard.css"
import {Link} from "@mui/material";

function createData(ModelName, Publisher, DefaultAttack, Multilingual, GCG, GCG_Transfer, PAIR, GPTFuzz, AutoDAN, Description) {
    return {
        "Model Name": ModelName,
        "Publisher": Publisher,
        "Default Attack": DefaultAttack,
        "Multilingual": Multilingual,
        "GCG": GCG,
        "GCG Transfer": GCG_Transfer,
        "PAIR": PAIR,
        "GPTFuzz": GPTFuzz,
        "AutoDAN": AutoDAN,
        "Description": Description,
    };
}

const columns = [
    "",
    "Model Name",
    "Publisher",
    "Default Attack",
    "Multilingual",
    "GCG",
    "GCG Transfer",
    "PAIR",
    "GPTFuzz",
    "AutoDAN",
];

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                {columns.slice(1).map(field => (
                    <TableCell align="center" key={field}>
                        <span className="table-content-style">
                            {field === "Model Name" ?
                                (
                                    <Link underline="none"
                                          color="inherit"
                                          fontWeight="normal"
                                    >
                                        {row[field]}
                                    </Link>
                                ) :
                                (
                                    row[field]
                                )
                            }
                        </span>
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={columns.length}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                <span className="text-style">
                                    {row['Description']}
                                </span>
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        ModelName: PropTypes.string.isRequired,
        Default: PropTypes.string.isRequired,
        Multilingual: PropTypes.string.isRequired,
        GCG_Transfer: PropTypes.string.isRequired,
        PAIR: PropTypes.string.isRequired,
        GPTFuzz: PropTypes.string.isRequired,
        AutoDAN: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }).isRequired,
};

const rows = [
    createData('Baichuan2-7B-Chat', "Baichuan-inc", "34.0%", "29.0%", "100.0%", "23.0%", "37.0%", "100.0%", "85.0%",
        "A new generation of open-source LLM launched by Baichuan Intelligence. It is trained with high-quality corpus of 2.6 trillion tokens and achieves the best results of the same size on authoritative Chinese and English benchmarks."),
    createData('ChatGLM3-6B', "THUDM", "27.0%", "28.8%", "—", "28.3%", "31.0%", "100.0%", "34.0%",
        "ChatGLM3-6B is the latest open-source model in the ChatGLM series."),
    createData('Gemma-2B', "Google", "46.0%", "31.2%", "87.0%", "21.0%", "39.0%", "84.0%", "31.0%",
        "Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models. "),
    createData('LLaMA-2-7B-chat-hf', "Meta", "36.0%", "20.4%", "35.0%", "28.5%", "46.0%", "18.0%", "3.0%",
        "This is the model optimized for dialogue use cases and converted for the Hugging Face Transformers format."),
    createData('LLaMA-3-8B-Instruct', "Meta", "9.0%", "33.7%", "—", "4.3%", "45.0%", "97.0%", "6.0%",
        "The Llama 3 instruction tuned models are optimized for dialogue use cases and outperform many of the available open source chat models on common industry benchmarks. "),
    createData('GPT-3.5-Turbo-0125', "OpenAI", "27.0%", "38.6%", "—", "31.7%", "37.0%", "92.0%", "—",
        "OpenAI’s most cost-effective GPT-3.5 series API"),
    createData('GPT-4', "OpenAI", "14.0%", "32.0%", "—", "13.7%", "27.0%", "92.0%", "—",
        "OpenAI’s API for state-of-the-art models"),
    createData('Claude-Instant-1.2', "Anthropic", "4.0%", "11.0%", "—", "—", "—", "—", "—",
        "Claude's most cost-effective API"),
];

export default function LeaderboardTable() {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell align="center">
                                <span className={"table-head-style"}>
                                    {column}
                                </span>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row["Model Name"]} row={row} description={row["description"]}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}