import {connect} from '../../state/store/index';
import Samplecomp from '../samplecomp';

function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchername: (payload) => {
            dispatch({type: 'CHANGE_CODE_SUCCESS', payload})
        }
    }
}

const AppContanier = connect(mapStateToProps,mapDispatchToProps)(Samplecomp)

export default AppContanier;