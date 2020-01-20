export interface ICallForwarding {
  all?: ICallForwardRule;
  no_answer?: ICallForwardRule;
  not_registered?: ICallForwardRule;
  user_busy?: ICallForwardRule;
}

export interface ICallForwardRule {
  destination?: IDestinationAction;
  enabled?: boolean;
}

export interface IDestinationAction {
  action?: string;
  data?: string;
}

export enum CallRecordingEnum {
  All = 'ALL',
  ExternalOnly = 'EXTERNAL_ONLY',
  InboundOnly = 'INBOUND_ONLY',
  InternalOnly = 'INTERNAL_ONLY',
  OutboundOnly = 'OUTBOUND_ONLY',
  None = 'NONE',
}

export interface IFollowMe {
  destinations?: IFollowMeDestinationAction[];
  enabled?: boolean;
}

export interface IFollowMeDestinationAction extends IDestinationAction {
  delay?: number;
  order?: number;
  prompt?: boolean;
  timeout?: number;
}

export interface IExtension {
  id: string;
  domain_uuid: string;
  extension: string;
  password: string;
  number_alias?: string;
  enabled: boolean;
  outbound_caller_id_name?: string;
  outbound_caller_id_number?: string;
  absolute_codec_string?: string;
  accountcode?: string;
  call_forwarding?: ICallForwarding;
  call_group?: string;
  call_recording: CallRecordingEnum;
  call_timeout: number;
  description?: string;
  directory_full_name?: string;
  directory_visible?: boolean;
  do_not_disturb?: boolean;
  follow_me?: IFollowMe;
  hold_music?: string;
  limit_destination?: string;
  limit_max?: number;
  missed_call_action?: IDestinationAction;
  created_at: Date;
  updated_at: Date;
  version: number;
}