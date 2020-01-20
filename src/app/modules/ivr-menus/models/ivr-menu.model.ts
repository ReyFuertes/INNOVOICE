export interface IIvrMenu {
  id: string;
  domain_uuid: string;
  voicemail_id: string;
  voicemail_pin: string;
  enabled: boolean;
  email_addresses?: string[];
  keep_after_email: boolean;
  delivery_mode: string;
  escalation_email_1: string;
  escalation_hours_1: number;
  escalation_email_2: string;
  escalation_hours_2: number;
  escalation_email_3: string;
  escalation_hours_3: number;
  description: string;
  created_at: Date;
  updated_at: Date;
  version: number;
}