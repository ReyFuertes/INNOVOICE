import { VoiceMailState } from '../modules/voice-mail/store/reducers/voice-mail.reducer';
import { DdiManagerState } from '../modules/ddi-manager/store/ddi-manager.reducer';
import { DistributorState } from '../modules/distributor/store/distributor.reducer';
import { ExtensionState } from '../modules/extensions/store/extension.reducer';
import { MusicOnHoldState } from '../modules/music-on-hold/store/music-on-hold.reducer';
import { ResellerState } from '../modules/reseller/store/reseller.reducer';
import { RingGroupState } from '../modules/ring-group/store/ring-group.reducer';
import { TenantState } from '../modules/tenant/store/tenant.reducer';
import { IvrMenuState } from '../modules/ivr-menus/store/ivr-menu.reducer';
import { FollowMeState } from '../modules/follow-me/store/follow-me.reducer';
import { ProvisioningState } from '../modules/provisioning/store/provisioning.reducer';

export interface AppState {
  voiceMail?: VoiceMailState,
  ddiManager?: DdiManagerState,
  distributor?: DistributorState,
  extension?: ExtensionState,
  musicOnHold?: MusicOnHoldState,
  reseller?: ResellerState,
  ringGroup?: RingGroupState,
  tenant?: TenantState,
  ivrMenu?: IvrMenuState,
  followMe: FollowMeState,
  provisioning: ProvisioningState
}

