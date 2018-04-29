import * as lodash from 'lodash';

declare module 'lodash' {
  interface LoDashStatic {
    log(item: string): void;
  }
}
