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
              <span style={{ borderTopLeftRadius: '10px'}} className={[classes.block, classes.extraTop, classes.extraLeft].join(' ')}>{today.cr_month_name_ar} {today.cr_year}</span>
            </Grid>
            <Grid xs={6}>
              <span style={{ borderTopRightRadius: '10px'}} className={[classes.block, classes.extraTop, classes.extraRight].join(' ')}>{today.hij_month_name_ar} {today.hij_year}</span>
            </Grid>
            <Grid xs={6}>
              <Grid>
                <span className={[classes.block, classes.extraLeft, classes.noBorderBottom].join(' ')}>{today.day_name_fr}</span>
                <span className={[classes.block, classes.extraLeft, classes.noBorderTopBottom].join(' ')}>
                   <Typography variant="h1">
                    {today.cr_day_number}
                  </Typography>
                </span>
                <span style={{ borderBottomLeftRadius: '10px'}} className={[classes.block, classes.extraLeft, classes.extraBottom, classes.noBorderTop].join(' ')}>{today.cr_month_name_fr}</span>
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Grid>
                <span className={[classes.block, classes.extraRight, classes.noBorderBottom].join(' ')}>{today.day_name_ar}</span>
                <span className={[classes.block, classes.extraRight, classes.noBorderTopBottom].join(' ')}>
                   <Typography variant="h1">
                    {today.hij_day_number}
                  </Typography>
                </span>
                <span style={{ borderBottomRightRadius: '10px'}} className={[classes.block, classes.extraRight, classes.extraBottom, classes.noBorderTop].join(' ')}>{today.hij_month_name_fr}</span>
              </Grid>
            </Grid>
            <Grid xs={3}>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_oujda}</span>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_casa}</span>
            </Grid>
            <Grid xs={3}>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_fes}</span>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_marrakech}</span>
            </Grid>
            <Grid xs={3}>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_meknes}</span>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_agadir}</span>
            </Grid>
            <Grid xs={3}>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_rabat}</span>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.town_laayoune}</span>
            </Grid>
            <Grid xs={6}
              container
              direction="column"
              justify="space-around"
              aligs="stretch"
            >
              <span style={{ borderTopLeftRadius: '10px'}} className={[classes.block, classes.extraLeft, classes.extraTop, classes.noBorderBottom].join(' ')}>{today.time_fajr}</span>
              <span className={[classes.block, classes.extraLeft, classes.noBorderTopBottom].join(' ')}>{today.time_chourouk}</span>
              <span className={[classes.block, classes.extraLeft, classes.noBorderTopBottom].join(' ')}>{today.time_dohr}</span>
              <span className={[classes.block, classes.extraLeft, classes.noBorderTopBottom].join(' ')}>{today.time_asr}</span>
              <span className={[classes.block, classes.extraLeft, classes.noBorderTopBottom].join(' ')}>{today.time_maghreb}</span>
              <span style={{ borderBottomLeftRadius: '10px'}} className={[classes.block, classes.extraLeft, classes.extraBottom, classes.noBorderTop].join(' ')}>{today.time_isha}</span>
            </Grid>
            <Grid xs={6}>
              <Grid style={{ height: "100%" }}>
                <span className={[classes.block, classes.extraRight, classes.extraTop, classes.noBorderBottom].join(' ')} style={{ height: "16.6%" , borderTopRightRadius: '10px'}}>{today.fil_month_name_ar}</span>
                <span className={[classes.block, classes.extraRight, classes.extraBottom, classes.noBorderTop].join(' ')} style={{ height: "83.3%", borderBottomRightRadius: '10px'}}>
                  <Typography variant="h1">
                    {today.fil_month_number}
                  </Typography>  
                </span>
              </Grid>
            </Grid>
            <Grid xs={12}>
              <span className={[classes.block, classes.noBorder].join(' ')}>{today.hikma_back}</span>
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

export default SideCard;