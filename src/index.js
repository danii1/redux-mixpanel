export default function mixpanelMiddleware(mixpanel) {
  if (!mixpanel || !mixpanel.track) {
    throw new TypeError('You must provide a mixpanel client instance.')
  }

  return (store) => (next) => (action) => {
    if (!action.meta || !action.meta.mixpanel || !action.meta.mixpanel.event) {
      return next(action)
    }

    try {
      const { event, props } = action.meta.mixpanel
      mixpanel.track(event, props)
    }
    catch (error) {
    }
    return next(action)
  }
}
