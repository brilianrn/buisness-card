import moment from 'moment';

/* eslint-disable */
export default <T extends object | string | unknown>(name: string, error: T) => {
  console.log(
    `================================== LOGGER ${moment().format(
      'DD/MM/yyyy, HH:mm:ss'
    )} WIB ==================================\n================================== ${name} ==================================`
  );
  console.log(error);
};
