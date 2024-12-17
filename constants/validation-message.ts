export default {
  required: (label: string) => `${label || 'Filed'} is required`,
  format: (label: string) => `Incorrect ${label?.toLowerCase() || 'filed'} format`,
  invalidPassword: 'Invalid password',
  500: 'Internal server error!',
};
