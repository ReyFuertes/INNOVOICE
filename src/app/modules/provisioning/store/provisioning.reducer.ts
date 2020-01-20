import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IProvisioning } from '../provisioning.model';
import { LoadProvisioning, LoadProvisioningSuccess } from './provisioning.action';

export interface ProvisioningState extends EntityState<IProvisioning> {
  item?: IProvisioning
}
export const provisioningAdapter: EntityAdapter<IProvisioning> = createEntityAdapter<IProvisioning>({});
export const initialState: ProvisioningState = provisioningAdapter.getInitialState({
  item: null,
});
const provisioningReducer = createReducer(
  initialState,
  on(LoadProvisioning, (state) => {
    return ({ ...provisioningAdapter.removeAll(state) })
  }),
  on(LoadProvisioningSuccess, (state, action) => {
    return ({ ...provisioningAdapter.addAll(action.items, state) })
  }),
);
export function ProvisioningReducer(state: ProvisioningState, action: Action) {
  return provisioningReducer(state, action);
}

