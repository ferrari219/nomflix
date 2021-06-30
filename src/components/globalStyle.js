import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const global = createGlobalStyle`
    ${reset};
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        * {
            box-sizing: inherit;
        }
    }
    body {
        background: #141414;
        color: #fff;
        a{
            text-decoration: none;
            color: inherit;
        }
        
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
        @font-face {
            font-family: 'NotoSansKR';
            src: url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-DemiLight.woff2) format('woff2'), url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-DemiLight.woff) format('woff'),
                url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-DemiLight.otf) format('opentype');
            font-weight: 400;
        }
        @font-face {
            font-family: 'NotoSansKR';
            src: url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-Medium.woff2) format('woff2'), url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-Medium.woff) format('woff'),
                url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-Medium.otf) format('opentype');
            font-weight: 600;
        }
        @font-face {
            font-family: 'NotoSansKR';
            src: url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-Bold.woff2) format('woff2'), url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-Bold.woff) format('woff'),
                url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/NotoSansCJKkr-Bold.otf) format('opentype');
            font-weight: 700;
        }
        @font-face {
            font-family: 'Roboto';
            src: url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/Roboto-Regular.woff2) format('woff2'), url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/Roboto-Regular.woff) format('woff'),
                url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/Roboto-Regular.eot) format('embedded-opentype');
            font-weight: 400;
        }
        @font-face {
            font-family: 'Roboto';
            src: url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/Roboto-Bold.woff2) format('woff2'), url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/Roboto-Bold.woff) format('woff'),
                url(https://tistory2.daumcdn.net/tistory/2982972/skin/images/Roboto-Bold.eot) format('embedded-opentype');
            font-weight: 600;
        }

    }    
`;

export default global;

/* color */
export const Color = {
	pColor: '#705aec',
	gColor1: '#363636',
	gColor2: '#525252',
	wColor: '#fff',
	bColor: '#000',
};

/* Heading */
export const Heading1 = css`
	margin: 2rem 0;
	color: #333;
	line-height: 1.1;
	font-size: 6rem;
	font-weight: 600;
	&--border {
		border-top: 1px solid #333;
		padding-top: 1.5rem;
	}

	&--noborder {
		border: none;
	}
`;
export const Heading2 = css`
	margin: 0 0 1.5rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	color: #333;
	line-height: 1.1;
	font-size: 4rem;
	font-weight: 600;
	&--border {
		border-top: 1px solid #333;
		padding-top: 1.5rem;
	}
	&--noborder {
		border: none;
	}
`;
export const Heading3 = css`
	margin: 0 0 1.5rem;
	color: #333;
	line-height: 1.1;
	font-size: 3rem;
	font-weight: 600;
	&--border {
		border-top: 1px solid #333;
		padding-top: 1.5rem;
	}
	&--noborder {
		border: none;
	}
`;
export const Heading4 = css`
	margin: 0 0 1rem;
	color: #333;
	line-height: 1.1;
	font-size: 1.3rem;
	font-weight: 600;
	&--border {
		border-top: 1px solid #333;
		padding-top: 1.5rem;
	}
	&--noborder {
		border: none;
	}
`;

/* inherit Width, height */
export const Inherit = css`
	width: inherit;
	height: inherit;
`;
