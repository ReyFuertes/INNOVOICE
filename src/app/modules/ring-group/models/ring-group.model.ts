export interface IDestinationAction {
  action?: string;
  data?: string;
}
export interface IRingGroupDestinationAction extends IDestinationAction {
  delay?: number;
  order?: number;
  prompt?: boolean;
  timeout?: number;
}
export interface ICallForwardRule {
  destination?: IDestinationAction;
  enabled?: boolean;
}

export interface IRingGroup {
  id: string;
  domain_uuid: string;
  name: string;
  strategy: string;
  enabled: boolean;
  caller_id_name_prefix?: string;
  caller_id_number_prefix?: string;
  distinctive_ring?: string;
  ringback?: string;
  skip_active: boolean;
  call_forward?: ICallForwardRule;
  timeout_action?: IDestinationAction;
  destinations: IRingGroupDestinationAction[];
  description?: string;
  created_at: Date;
  updated_at: Date;
  version: number;
}