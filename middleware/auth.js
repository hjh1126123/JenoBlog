export default function ({
  store,
  route,
  redirect
}) {
  if (!store.state.app.auth) {
    redirect({
      name: 'account-signIn',
      params: {
        lastName: route.name
      }
    });
  }
}
