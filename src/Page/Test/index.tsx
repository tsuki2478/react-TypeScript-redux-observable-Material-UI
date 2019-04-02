import * as React from 'react';
import { compose } from "recompose";
import { StyleRulesCallback, withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

//Hidden
// https://material-ui.com/api/hidden/
const styles: StyleRulesCallback<"root"> = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing.unit,
  },
});

interface IProps {
  classes?: any
  width?: any
}


class Test extends React.Component<IProps>{
  state = {
    A: 0
  }
  async xx() {
    console.log(styles)
    await this.setState({ A: this.state.A + 1 })
    console.log('第一次:', this.state.A)
    await this.setState({ A: this.state.A + 1 })
    console.log('第二次:', this.state.A)
    setTimeout(() => {
      this.setState({ A: this.state.A + 1 })
      console.log('第三次:', this.state.A)
      this.setState({ A: this.state.A + 1 })
      console.log('第四次:', this.state.A)
    }, 0)
  }
  componentDidMount() {
    this.xx()
  }

  render() {
    const { classes, width } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="subtitle1">Current width: {width}</Typography>
        <div className={classes.container}>
          <Hidden xsUp={true}>
            <Paper className={classes.paper}>xsUp</Paper>
          </Hidden>
          <Hidden smUp={true}>`
            <Paper className={classes.paper}>smUp</Paper>
          </Hidden>
          <Hidden mdUp={true}>
            <Paper className={classes.paper}>mdUp</Paper>
          </Hidden>
          <Hidden lgUp={true}>
            <Paper className={classes.paper}>lgUp</Paper>
          </Hidden>
          <Hidden xlUp={true}>
            <Paper className={classes.paper}>xlUp</Paper>
          </Hidden>
        </div>

        <div className={classes.container}>
          <Hidden xsDown={true}>
            <Paper className={classes.paper}>xsDown</Paper>
          </Hidden>
          <Hidden smDown={true}>
            <Paper className={classes.paper}>smDown</Paper>
          </Hidden>
          <Hidden mdDown={true}>
            <Paper className={classes.paper}>mdDown</Paper>
          </Hidden>
          <Hidden lgDown={true}>
            <Paper className={classes.paper}>lgDown</Paper>
          </Hidden>
          <Hidden xlDown={true}>
            <Paper className={classes.paper}>xlDown</Paper>
          </Hidden>
        </div>

      </div>
    );
  }
}
export default
  compose(
    withStyles(styles),
    withWidth(),
  )(Test);