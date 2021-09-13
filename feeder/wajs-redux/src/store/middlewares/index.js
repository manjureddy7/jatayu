import * as actionTypes from '../action-types';
import { addUser } from '../actions';
import titleCase from '../../helpers';

function capitilizeFirstLetterofAddedUser({ dispatch }) {
  return (next) => (
    (action) => {
        if (action.type === actionTypes.TEMP_USER) {
          const user = action.payload;
          dispatch(addUser(titleCase(user)));
        }
        return next(action);
    }
  );
}

export default capitilizeFirstLetterofAddedUser;
