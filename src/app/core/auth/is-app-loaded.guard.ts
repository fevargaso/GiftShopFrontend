import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { Store } from "@ngrx/store";
import { changeChecking } from "./app.store";

export const isAppLoaded: CanActivateFn = (route, state) => {
  const store = inject(Store);

  store.dispatch(changeChecking({ check: false }));

  return true;
};
