import { actionRequestGetUser, actionRequestGetUserInit } from './getUsers/getUser.slices';
import { makeSelectorGetUser } from '../selectors';

export const mapStateToProps = (state) => {
  return {
    getUser: makeSelectorGetUser(state),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRequestGetUser: () => dispatch(actionRequestGetUser()),
    dispatchRequestGetUserInit: () => dispatch(actionRequestGetUserInit()),
  };
};
