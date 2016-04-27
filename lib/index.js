'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mixpanelMiddleware;
function mixpanelMiddleware(mixpanel) {
  if (!mixpanel || !mixpanel.track) {
    throw new TypeError('You must provide a mixpanel client instance.');
  }

  return function (store) {
    return function (next) {
      return function (action) {
        if (!action.meta || !action.meta.mixpanel) {
          return next(action);
        }

        try {
          var _action$meta$mixpanel = action.meta.mixpanel;
          var event = _action$meta$mixpanel.event;
          var props = _action$meta$mixpanel.props;

          mixpanel.track(event, props);
        } catch (error) {}
        return next(action);
      };
    };
  };
}