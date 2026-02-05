import { createAction, createReducer, on, props } from '@ngrx/store';

export type AppState = {
  initializing: boolean;
  operational: boolean;
  checking: boolean;
};

const initialState: AppState = {
  initializing: true,
  operational: false,
  checking: false,
};

export const initialized = createAction('[App] Initialized');
export const changeOperational = createAction('[App] Change Operational', props<{ operation: boolean; }>());
export const changeChecking = createAction('[App] Change Checking', props<{ check: boolean; }>());

export const appReducer = createReducer(
  initialState,
  on(initialized, (state, _) => {
    return {
      ...state,
      initializing: false,
    };
  }),
  on(changeOperational, (state, action) => {
    return {
      ...state,
      operational: action.operation,
    };
  }),
  on(changeChecking, (state, action) => {
    return {
      ...state,
      checking: action.check,
    };
  }),
);
