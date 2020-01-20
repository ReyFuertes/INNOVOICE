export interface IDestinationAction {
  action?: string;
  data?: string;
}

export interface IInboundNumber {
  id: string;
  domain_uuid: string;
  destination?: IDestinationAction;
  number: string;
  description?: string;
  caller_id_name_prefix?: string;
  caller_id_number_prefix?: string;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
  version: number;
}