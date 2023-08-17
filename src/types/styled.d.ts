import { Theme } from '@/theme/theme';
import { } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { } // extends the global DefaultTheme with our ThemeType.
}