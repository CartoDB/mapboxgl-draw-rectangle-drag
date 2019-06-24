export function enableZoom(context) {
  setTimeout(() => {
    // eslint-disable-next-line
    const getInitialValue = context._ctx && context._ctx.store && context._ctx.store.getInitialConfigValue;
    const map = context.map && context.map.doubleClickZoom;

    if (!map && !getInitialValue) {
      return;
    }

    if (!getInitialValue('doubleClickZoom')) {
      return;
    }

    map.doubleClickZoom.enable();
  }, 0);
}


export function disableZoom(context) {
  setTimeout(() => {
    const { map } = context;
    const doubleClickZoom = map && map.doubleClickZoom;

    if (!map || !doubleClickZoom) {
      return;
    }

    // Always disable here, as it's necessary in some cases.
    doubleClickZoom.disable();
  }, 0);
}
