import {
  KeycloakService,
  KeycloakOptions,
  KeycloakEventType,
} from 'keycloak-angular';
import { ConfigService } from '../services/config.service';
import { Store } from '@ngrx/store';
import { changeOperational, initialized } from './app.store';
import { addUser } from './user.store';

export function initializeKeycloak(
  keycloak: KeycloakService,
  config: ConfigService,
  store: Store
): () => Promise<any> {
  return () => {
    return new Promise(async (resolve) =>{
      await config.load();
      const options: KeycloakOptions = {
        config: {
          url: config.KEYCLOAK_URL,
          realm: config.KEYCLOAK_REALM,
          clientId: config.KEYCLOAK_CLIENT_ID,
        },
        initOptions: {
          onLoad: config.KEYCLOAK_ON_LOAD,
          silentCheckSsoRedirectUri:
            window.location.origin + config.KEYCLOAK_SILENT_CHECK_SSO_REDIRECT_URI,
        },
        enableBearerInterceptor: true,
        loadUserProfileAtStartUp: true,
      };

      const keycloakInitialized = await keycloak.init(options).catch((err) => {
        console.error('Error cannot init Keycloak', err);
      });

      if (keycloakInitialized === undefined) {
        store.dispatch(initialized());
        store.dispatch(changeOperational({ operation: false }));
        return;
      }

      if (!keycloak.isLoggedIn()) {
        await keycloak.login();
        return;
      }

      const profile = keycloak.getKeycloakInstance().profile;
      if (!profile) {
        await keycloak.logout(location.origin);
        return;
      }

      const { id, email, firstName, lastName, username } = profile;
      if (!id || !email || !firstName || !lastName || !username) {
        await keycloak.logout(location.origin);
        return;
      }

      keycloak.keycloakEvents$.subscribe({
        next: (event) => {
          if (event.type == KeycloakEventType.OnTokenExpired) {
            keycloak.updateToken(20);
          }
          if (event.type == KeycloakEventType.OnAuthRefreshError) {
            keycloak.login();
          }
        },
        error: (err) => {
          console.error('Error listening event for Keycloak', err);
          store.dispatch(changeOperational({ operation: false }));
        },
      });

      const roles = keycloak.getUserRoles();
      store.dispatch(addUser({ id, email, firstName, lastName, username, roles }));
      store.dispatch(initialized());
      store.dispatch(changeOperational({ operation: true }));
      resolve(true);
    })
  };
}
