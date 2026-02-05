import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState, changeChecking } from "./app.store";
import { firstValueFrom } from "rxjs";

export const isAppLoaded: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const store = inject(Store);

  const isOperational = async (): Promise<boolean> => {
    store.dispatch(changeChecking({ check: true }));
    let app: AppState;
    do {
      app = await firstValueFrom(store.select('app'));
      if (!app.operational) {
        await new Promise(resolve => setTimeout(resolve, 2_500));
      }
    } while (!app.operational);

    return app.operational;
  };

  const result = await isOperational();
  store.dispatch(changeChecking({ check: false }));
  return result;
};
