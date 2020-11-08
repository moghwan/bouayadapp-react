import React, { useEffect, useState } from "react"
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  card: {
    margin: theme.spacing(4, 4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  noBorder: { border: '0 !important' },
  noBorderBottom: { borderBottomWidth: '0 !important' },
  noBorderTop: { borderTopWidth: '0 !important' },
  noBorderTopBottom: { borderBottomWidth: '0 !important', borderTopWidth: '0 !important' },
  extraTop: { borderTop: '3px solid #15486c !important' },
  extraBottom: { borderBottom: '3px solid #15486c !important' },
  extraRight: { borderRight: '3px solid #15486c !important' },
  extraLeft: { borderLeft: '3px solid #15486c !important' },
  prayers: {
    flexDirection: 'row !important'
  },
  block: {
    border: '1px solid #15486c',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}));

const SideCard = () => {
  const [today, setToday] = useState([]);
  
  useEffect(() => {
    fetchToday();
  }, [])

  const fetchToday = async () => {
    await axios.get("/agenda")
        .then(response => response.data.data)
        .then((data) => {
          setToday(data);
          console.log(data)
        })
  }

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid xs={false} sm={4} md={7} className={classes.image} />
      <Grid xs={12} sm={8} md={5} square>
        <div className={classes.card}>
          <Typography component="h1" variant="h5">
            { today.id ? null : <CircularProgress /> }
          </Typography>
          <Grid container spacing={3} style={{display: today.id ? null : 'none' }}>
            <Grid xs={6}>
              <span 
                style={{ borderTopLeftRadius: '10px'}} 
                className={`${classes.block} ${classes.extraTop} ${classes.extraLeft}`}>
                  {today.cr_month_name_ar} {today.cr_year}</span>
            </Grid>
            <Grid xs={6}>
              <span 
                style={{ borderTopRightRadius: '10px'}} 
                className={`${classes.block} ${classes.extraTop} ${classes.extraRight}`}>
                  {today.hij_month_name_ar} {today.hij_year}</span>
            </Grid>
            <Grid xs={6}>
              <Grid>
                <span className={`${classes.block} ${classes.extraLeft} ${classes.noBorderBottom}`}>{today.day_name_fr}</span>
                <span className={`${classes.block} ${classes.extraLeft} ${classes.noBorderTopBottom}`}>
                   <Typography variant="h1">
                    {today.cr_day_number}
                  </Typography>
                </span>
                <span 
                  style={{ borderBottomLeftRadius: '10px'}} 
                  className={`${classes.block} ${classes.extraLeft} ${classes.extraBottom} ${classes.noBorderTop}`}>
                    {today.cr_month_name_fr}</span>
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Grid>
                <span className={`${classes.block} ${classes.extraRight} ${classes.noBorderBottom}`}>{today.day_name_ar}</span>
                <span className={`${classes.block} ${classes.extraRight} ${classes.noBorderTopBottom}`}>
                   <Typography variant="h1">
                    {today.hij_day_number}
                  </Typography>
                </span>
                <span 
                  style={{ borderBottomRightRadius: '10px'}} 
                  className={`${classes.block} ${classes.extraRight} ${classes.extraBottom} ${classes.noBorderTop}`}>
                    {today.hij_month_name_fr}</span>
              </Grid>
            </Grid>
            <Grid xs={3}>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_oujda} وجدة</span>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_casa} الدار البيضاء</span>
            </Grid>
            <Grid xs={3}>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_fes} فاس</span>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_marrakech} مراكش</span>
            </Grid>
            <Grid xs={3}>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_meknes} مكناس</span>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_agadir} اغادير</span>
            </Grid>
            <Grid xs={3}>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_rabat} الرباط</span>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.town_laayoune} العيون</span>
            </Grid>
            <Grid xs={6} container direction="column" justify="space-around" aligs="stretch">
              <span 
                className={`${classes.block} ${classes.prayers} ${classes.extraLeft} ${classes.extraTop} ${classes.noBorderBottom}`} 
                style={{ borderTopLeftRadius: '10px'}}>
                    <Grid xs={3}>{today.time_fajr}</Grid>
                  <Grid xs={6}></Grid>
                  <Grid xs={3}>الفجر</Grid>
                  </span>
              <span className={`${classes.block} ${classes.prayers} ${classes.extraLeft} ${classes.noBorderTopBottom}`}>
                <Grid xs={3}>{today.time_chourouk}</Grid>
                <Grid xs={6}></Grid>
                <Grid xs={3}>الشروق</Grid>
                </span>
              <span className={`${classes.block} ${classes.prayers} ${classes.extraLeft} ${classes.noBorderTopBottom}`}>
                <Grid xs={3}>{today.time_dohr}</Grid>
                <Grid xs={6}></Grid>
                <Grid xs={3}>الظهر</Grid>
                </span>
              <span className={`${classes.block} ${classes.prayers} ${classes.extraLeft} ${classes.noBorderTopBottom}`}>
                <Grid xs={3}>{today.time_asr}</Grid>
                <Grid xs={6}></Grid>
                <Grid xs={3}>العصر</Grid>
                </span>
              <span className={`${classes.block} ${classes.prayers} ${classes.extraLeft} ${classes.noBorderTopBottom}`}>
                <Grid xs={3}>{today.time_maghreb}</Grid>
                <Grid xs={6}></Grid>
                <Grid xs={3}>المغرب</Grid>
                </span>
              <span
                className={`${classes.block} ${classes.prayers} ${classes.extraLeft} ${classes.extraBottom} ${classes.noBorderTop}`} 
                style={{ borderBottomLeftRadius: '10px'}}>
                  <Grid xs={3}>{today.time_isha}</Grid>
                  <Grid xs={6}>{/* TODO: Whether here */}</Grid>
                  <Grid xs={3}>العشاء</Grid></span>
            </Grid>
            <Grid xs={6}>
              <Grid style={{ height: "100%" }}>
                <span 
                  className={`${classes.block} ${classes.extraRight} ${classes.extraTop} ${classes.noBorderBottom}`} 
                  style={{ height: "16.6%" , borderTopRightRadius: '10px'}}>
                    {today.fil_month_name_ar}</span>
                <span 
                  className={`${classes.block} ${classes.extraRight} ${classes.extraBottom} ${classes.noBorderTop}`} 
                  style={{ height: "83.3%", borderBottomRightRadius: '10px'}}>
                  <Typography variant="h1">
                    {today.fil_month_number}
                  </Typography>  
                </span>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <span className={`${classes.block} ${classes.noBorder}`}>{today.hikma_back}</span>
            </Grid>
          </Grid>
          <Link to="/about">
            <Button type="submit" fullWidth variant="outlined" color="primary" className={classes.submit}>
              About
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}

export default SideCard;