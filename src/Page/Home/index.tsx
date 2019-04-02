import * as React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWhiskies } from '../../Actions';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

interface IProps {
  fetchWhiskies?: any
  isLoading?: any
  error?: any
  whiskies?: any
}
function Path(target:any) {
  console.log("I am decorator.")
}

@Path
class Home extends React.Component<IProps> {

  state = {
    click: 1
  }

  onClick = () => {
    this.props.fetchWhiskies()
  }
  View = (title: string, url: string, id: number) => (
    <div key={id} style={{textAlign:'center' }} >
      <img style={{ width: '300px', height: '300px'}} src={url} />
      <h3>{title}</h3>
    </div>
  );

  render() {
    const { isLoading, error, whiskies } = this.props;
    return (
      <div className='container'  style={{textAlign:'center' }} >

        <Link to="/test" key="test">
          <Icon>star</Icon>
        </Link>

        <Link to="/media" key="media">
          <Icon>star</Icon>
        </Link>

        <Link to="/video" key="video">
          <Icon>star</Icon>
        </Link>
        <div>
          <Button variant="contained" color="primary" onClick={this.onClick}  style={{margin:"50px 0px"}}>
            你好，世界
          </Button>
          {isLoading && <h1>加载中!</h1>}
          {!isLoading && !error &&
            whiskies.map((l: { title: string, id: number, url: string }) => {
              return this.View(l.title, l.url, l.id)
            })
          }
          {error && <h1>{error}</h1>}
        </div>

     
      </div>
    );
  }
}


interface IState {
  title?: string,
  Id?: number,
  url?: string
}

const mapStateToProps = (whiskies: IState) => ({ ...whiskies });
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  fetchWhiskies
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

