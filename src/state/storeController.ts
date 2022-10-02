import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { StoreApi } from "zustand";

function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export default class StoreController<T> {
  private store: StoreApi<T>;
  private controllers: {
    [key: string]: {
      host: ReactiveControllerHost & Element;
      stateCallback: null | ((state: T) => any);
    };
  } = [] as any;

  state: T;

  constructor(store: StoreApi<T>) {
    this.store = store;
    this.state = store.getState();

    this.store.subscribe((state, prevState) => {
      this.state = state;

      Object.entries(this.controllers).map(([key, c]) => {
        if (!c.host.isConnected) {
          delete this.controllers[key];
          return false;
        }

        if (c.stateCallback && typeof c.stateCallback === "function") {
          const relevantState = c.stateCallback(state);
          const relevantStatePrev = c.stateCallback(prevState);
          if (relevantState !== relevantStatePrev) {
            c.host.requestUpdate();
          }
          return false;
        } else {
          c.host.requestUpdate();
          return true;
        }
      });
    });
  }

  useState(
    host: ReactiveControllerHost & Element,
    stateCallback?: (state: T) => T[keyof T]
  ) {
    host.addController(this as ReactiveController);

    const myId = makeid(10);
    this.controllers[myId] = {
      stateCallback: stateCallback || null,
      host,
    };

    (
      host as unknown as ReactiveControllerHost & { _useStateUnsub: () => void }
    )._useStateUnsub = () => {
      delete this.controllers[myId];
    };

    return this;
  }
}
