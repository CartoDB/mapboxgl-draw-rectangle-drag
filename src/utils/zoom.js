export function enableZoom(context) {
  setTimeout(() => {
    // eslint-disable-next-line
    const store = context._ctx && context._ctx.store;
    const map = context.map && context.map;

    if (!map && !store.getInitialValue) {
      return;
    }

    if (!store.getInitialConfigValue('doubleClickZoom')) {
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
