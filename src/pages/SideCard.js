import React, { useEffect, useState } from "react"
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
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
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  block: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SideCard() {
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

  // TODO: remove 'item' attribute
  // TODO: change globally elevation to 0

  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            { today.id ? null : <CircularProgress /> }
          </Typography>
          <Grid container spacing={3} style={{display: today.id ? null : 'none' }}>
            <Grid item xs={6}>
              <Paper elevation={1} className={classes.block}>{today.cr_month_name_ar} {today.cr_year}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={1} className={classes.block}>{today.hij_month_name_ar} {today.hij_year}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Grid style={{ height: "100%" }}>
                <Paper elevation={1} className={classes.block} style={{ height: "20%" }}>{today.day_name_fr}</Paper>
                <Paper elevation={1} className={classes.block} style={{ height: "60%" }}>{today.cr_day_number}</Paper>
                <Paper elevation={1} className={classes.block} style={{ height: "20%" }}>{today.cr_month_name_fr}</Paper>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid style={{ height: "100%" }}>
                <Paper elevation={1} className={classes.block} style={{ height: "20%" }}>{today.day_name_ar}</Paper>
                <Paper elevation={1} className={classes.block} style={{ height: "60%" }}>{today.hij_day_number}</Paper>
                <Paper elevation={1} className={classes.block} style={{ height: "20%" }}>{today.hij_month_name_fr}</Paper>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} className={classes.block}>{today.town_oujda}</Paper>
              <Paper elevation={1} className={classes.block}>{today.town_casa}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} className={classes.block}>{today.town_fes}</Paper>
              <Paper elevation={1} className={classes.block}>{today.town_marrakech}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} className={classes.block}>{today.town_meknes}</Paper>
              <Paper elevation={1} className={classes.block}>{today.town_agadir}</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper elevation={1} className={classes.block}>{today.town_rabat}</Paper>
              <Paper elevation={1} className={classes.block}>{today.town_laayoune}</Paper>
            </Grid>
            <Grid item xs={6}
              container
              direction="column"
              justify="space-around"
              alignItems="stretch"
            >
              <Paper elevation={1} className={classes.block}>{today.time_fajr}</Paper>
              <Paper elevation={1} className={classes.block}>{today.time_chourouk}</Paper>
              <Paper elevation={1} className={classes.block}>{today.time_dohr}</Paper>
              <Paper elevation={1} className={classes.block}>{today.time_asr}</Paper>
              <Paper elevation={1} className={classes.block}>{today.time_maghreb}</Paper>
              <Paper elevation={1} className={classes.block}>{today.time_isha}</Paper>
            </Grid>
            <Grid item xs={6}>
              <Grid style={{ height: "100%" }}>
                <Paper elevation={1} className={classes.block} style={{ height: "20%" }}>{today.fil_month_name_ar}</Paper>
                <Paper elevation={1} className={classes.block} style={{ height: "80%" }}>{today.fil_month_number}</Paper>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={1} className={classes.block}>{today.hikma_back}</Paper>
            </Grid>
          </Grid>
          <Link to="/about">
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              About
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}