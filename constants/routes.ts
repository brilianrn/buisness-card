export const appRoute = {
  '(app)': '(app)',
  'my-card': 'my-card',
  scan: 'scan',
  connection: 'connection',
  connectionDetail: (id: string) => `(${appRoute.connection})/${id}`,
  analytics: 'analytics',
  setting: 'setting',
};

export const authRoute = {
  '(auth)': '(auth)',
  login: 'login',
};
