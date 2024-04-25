import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Footer.css"

const Statistic = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Grid container>
            <Grid item xs={12} className={"layout-copyright"}>
                <VisibilityIcon style={{verticalAlign: "middle", marginRight: 5}}></VisibilityIcon>
                <span id="busuanzi_value_site_pv">Page Views</span>
                <AccountCircleIcon
                    style={{verticalAlign: "middle", marginRight: 5, marginLeft: 10}}></AccountCircleIcon>
                <span id="busuanzi_value_site_uv">Visitors</span>
            </Grid>
        </Grid>
    );
};

export default Statistic;
