import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import withWidth from '@material-ui/core/withWidth';
import { compose } from "recompose";
interface Iprops {
    width?: any,
    classes?: any,
    startList?: any
}
// https://material-ui.com/layout/breakpoints/
const styles = (theme: Theme) => ({
    root: {
        padding: theme.spacing.unit,
        [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: green[500],
        },
        [theme.breakpoints.between('sm', 'md')]: {
            backgroundColor: 'red',
          },
          MuiWithWidth: {
            // Initial width property
            initialWidth: 'lg', // 断点全局设置 
          },
    },
});
const components = {
    sm: 'em',
    md: 'u',
    lg: 'del',
};
class media extends React.Component<Iprops> {
    state = {
    }
    componentDidMount(){
    }
    render() {
        console.log(this.props)
        const { classes, width } = this.props;
        const Component = components[width] || 'span';

        return (

            <div className={classes.root}>
                <Typography variant="subtitle1">{'down(sm): red'}</Typography>
                <Typography variant="subtitle1">{'up(md): blue'}</Typography>
                <Typography variant="subtitle1">{'up(lg): green'}</Typography>

                <Typography variant="subtitle1">
                    <Component>{`Current width: ${width}`}</Component>
                </Typography>
            </div>
        )
    }

}
export default
  compose(
    withStyles(styles),
    withWidth(),
  )(media);
