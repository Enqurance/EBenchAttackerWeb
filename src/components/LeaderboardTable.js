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

function createData(ModelName, Publisher, Default, Multilingual, GCG_Transfer, PAIR, GPTFuzz, AutoDAN) {
    return {
        ModelName,
        Publisher,
        Default,
        Multilingual,
        GCG_Transfer,
        PAIR,
        GPTFuzz,
        AutoDAN,
    };
}

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const methods = [
        "ModelName",
        "Publisher",
        "Default",
        "Multilingual",
        "GCG_Transfer",
        "PAIR",
        "GPTFuzz",
        "AutoDAN"
    ]

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
                {methods.map(field => (
                    <TableCell key={field}>
                        <span className="table-content-style">
                            {row[field]}
                        </span>
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={methods.length + 1}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
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
    createData('Baichuan2-7B-chat-hf', "Baichuan-inc", NaN, NaN, NaN, NaN, NaN, NaN),
    createData('ChatGLM3-6B', "THUDM", NaN, NaN, NaN, NaN, NaN, NaN),
    createData('Gemma-2B', "Google", NaN, NaN, NaN, NaN, NaN, NaN),
    createData('LLaMA-2-7B-chat-ht', "Meta", NaN, NaN, NaN, NaN, NaN, NaN),
    createData('GPT-3.5', "OpenAI", NaN, NaN, NaN, NaN, NaN, NaN),
    createData('GPT-4', "OpenAI", NaN, NaN, NaN, NaN, NaN, NaN),
    createData('Claude-Instant-1.2', "Anthropic", NaN, NaN, NaN, NaN, NaN, NaN),
];

export default function LeaderboardTable() {
    const columns = [
        "",
        "Model Name",
        "Publisher",
        "Default Attack",
        "Multilingual",
        "GCG(Transfer)",
        "PAIR",
        "GPTFuzz",
        "AutoDAN",
    ];


    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell>
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