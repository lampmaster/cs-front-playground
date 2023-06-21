export enum ParserState {
    EXPECT_NEW_INPUT
}

export interface ParserToken<T = unknown> {
    type: string;
    value?: T;
}
  
export interface ParserValue<T = unknown> extends ParserToken<T> {
  
}
  
export type ParserResult<T = unknown> = [ParserValue, Iterable<string>];

export type Parser<T = unknown, R = unknown> =
    (iterable: Iterable<string>, prev?: ParserValue) =>
      Generator<ParserState | ParserToken<T>, ParserResult<R>, Iterable<string> | undefined>;