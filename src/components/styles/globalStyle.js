import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    html {
        font-size: 10px;
        box-sizing: border-box;
        * {
            box-sizing: inherit;
        }
    }
    body{
        background: #141414;
        color: #fff;
        font-size: 1.6rem;
        /* color */
        $pc: #705aec;
        $gc1: #ccc;
        $gc2: #999;
        
        /*******************************************************************
        font
        ********************************************************************/
        $font-family: AppleSDGothicNeo-Light, Roboto, NotoSansKR, 'Noto+Sans', 'Malgun Gothic', '맑은 고딕', sans-serif;
        font-family: $font-family;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: -0.08rem;
        * {
            font-family: inherit;
            line-height: inherit;
            letter-spacing: inherit;
        }
        .sr-only {
            width: 1px;
            height: 1px;
            overflow: hidden;
            position: absolute;
        }
    }
`;

export default GlobalStyles;
