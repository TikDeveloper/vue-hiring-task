

export const auth = ({ next, store }) => {
  const user = store.getters['auth/getUserData'];
  if (user) {
    if (user.name === "admin") {
      debugger;
      return next({ name: 'dashboard' });
    } else {
      debugger;
      return next({ name: 'home' });
    }
  }
  debugger;
  return next({ name: 'login' });
};
