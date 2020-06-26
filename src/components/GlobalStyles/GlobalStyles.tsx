import { createGlobalStyle } from 'styled-components'
import {themeProps } from 'utils/ThemeConfig';

export default createGlobalStyle<themeProps>`
    html,body{
        background-color : ${({ theme }) =>
          theme.primary};
        color: ${({ theme }) => theme.textColor};
        
    }
`;
