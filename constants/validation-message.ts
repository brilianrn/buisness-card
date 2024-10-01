export default {
  required: (label: string) => `${label || 'Filed'} required`,
  format: (label: string) => `Incorrect ${label?.toLowerCase() || 'filed'} format`,
};
