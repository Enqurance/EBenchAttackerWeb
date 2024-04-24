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

function createData(ModelName, Publisher, DefaultAttack, Multilingual, GCG, GCG_Transfer, PAIR, GPTFuzz, AutoDAN) {
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
                            {row[field]}
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
                                    Todo: Need some complementary information here.
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
    }).isRequired,
};

const rows = [
    createData('Baichuan2-7B-chat-hf', "Baichuan-inc", "34.0%", "29.0%", "100.0%", "23.0%", "37.0%", "100.0%", "—"),
    createData('ChatGLM3-6B', "THUDM", "27.0%", "28.8%", "—", "28.3%", "31.0%", "100.0%", "—"),
    createData('Gemma-2B', "Google", "46.0%", "31.2%", "87.0%", "21.0%", "39.0%", "84.0%", "—"),
    createData('LLaMA-2-7B-chat-ht', "Meta", "36.0%", "20.4%", "35.0%", "28.5%", "46.0%", "18.0%", "—"),
    createData('GPT-3.5', "OpenAI", "27.0%", "38.6%", "—", "31.7%", "37.0%", "92.0%", "—"),
    createData('GPT-4', "OpenAI", "14.0%", "32.0%", "—", "13.7%", "27.0%", "92.0%", "—"),
    createData('Claude-Instant-1.2', "Anthropic", "4.0%", "11.0%", "—", "—", "—", "—", "—"),
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
                        <Row key={row.name} row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}