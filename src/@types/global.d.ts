declare namespace Gtag {
  interface Gtag {
    (command: 'config', targetId: string, config?: Record<string, unknown>): void;
    (command: 'set', targetId: string, config: Record<string, unknown> | boolean | string): void;
    (command: 'set', config: Record<string, unknown>): void;
    (command: 'js', config: Date): void;
    (command: 'event', eventName: string, eventParams?: Record<string, unknown>): void;
    (
      command: 'get',
      targetId: string,
      fieldName: FieldNames | string,
      callback?: (field: string | Record<string, unknown> | undefined) => unknown,
    ): void;
    (command: 'consent', consentArg: Record<string, unknown>, consentParams: Record<string, unknown>): void;
  }

  type FieldNames = 'client_id' | 'session_id' | 'gclid';

  type ConsentArg = 'default' | 'update';
}

declare global {
  interface Window {
    gtag: Gtag.Gtag;
    dataLayer: unknown[];
  }
}

export {};
