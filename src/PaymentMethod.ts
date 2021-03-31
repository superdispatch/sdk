import { toStartCase } from './internal/toStartCase';

export const PAYMENT_METHODS = [
  'cash',
  'check',
  'cashiers_check',
  'money_order',
  'comchek',
  'credit_card',
  'direct_deposit',
  'other',
] as const;

export type PaymentMethod = typeof PAYMENT_METHODS[number];

export function isValidPaymentMethod(input: unknown): input is PaymentMethod {
  return PAYMENT_METHODS.includes(input as PaymentMethod);
}

/** @deprecated – use `PAYMENT_METHODS` */
export function listPaymentMethods(): readonly PaymentMethod[] {
  return PAYMENT_METHODS;
}

interface FormatPaymentMethodOptions {
  fallback?: string;
}

export function formatPaymentMethod(
  input: unknown,
  { fallback = 'Unknown' }: FormatPaymentMethodOptions = {},
): string {
  return !isValidPaymentMethod(input) ? fallback : toStartCase(input);
}
