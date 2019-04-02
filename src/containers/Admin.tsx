import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Admin from '../Page/Admin'

// interface IInfo {
//   user: any
// }

// const mapStateToProps = ({ user }: IInfo) => {
//   return user

// }

// const mapDispatchToProps = (dispatch: any) => {
  
// }

const AdminMap: any = connect(
)(Admin)
export default withRouter(AdminMap)
