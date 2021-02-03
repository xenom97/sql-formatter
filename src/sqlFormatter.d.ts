export interface FormatOptions {
  language?: 'sql';
  params?: { [x: string]: string } | string[];
  indent?: string;
  uppercase?: boolean;
  linesBetweenQueries?: number;
}

export function format(sql: string, options?: FormatOptions): string;
