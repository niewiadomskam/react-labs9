import { EMPLOYEES_LOADED, LAUNCH_FETCH } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const employeesLaunchFetch = (bool) =>{
  return {
    type: LAUNCH_FETCH,
    payload :bool
  };
}

export const getEmployees = () => {
  return dispatch => {
      //Dispatch the fetchData action creator before retrieving to set our loading state to true.
      dispatch(employeesLaunchFetch(true));
      //Then get the data.
      fetch('http://localhost:3004/employees').then(res => {
          //Set the results to the people array.
          // dispatch(fetchDataFulfilled(res.data.results));
          //Error handle the promise and set your errorMessage
      }).catch(//err => dispatch(fetchDataRejected(err)));
  }
}