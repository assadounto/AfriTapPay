import {Platform} from 'react-native';
/* fonts */
export const FontFamily =
  Platform.OS === 'ios'
    ? {
        sourceSansProRegular: 'SourceSansPro-Regular',
        sourceSansProSemibold: 'SourceSansPro-Semibold',
        sourceSansProBold: 'SourceSansPro-Bold',
        bodoniBdBTBoldItalic: 'Bodoni Bd BT_bold_italic',
        segoeUIRegular: 'Segoe UI_regular',
        bodonBd: 'BodonBd',
      }
    : {
        sourceSansProRegular: 'Source Sans Pro Regular',
        sourceSansProSemibold: 'Source Sans Semibold',
        sourceSansProBold: 'Source Sans Pro Bold',
      };

/* font sizes */
export const FontSize = {
  s_10: 10,
  s_11: 11,
  s_12: 12,
  s_13: 13,
  s_14: 14,
  s_15: 15,
  s_16: 16,
  s_17: 17,
  s_18: 18,
  s_19: 19,
  s_20: 20,
  s_23: 23,
  s_24: 24,
  s_26: 26,
  s_27: 27,
  s_29: 29,
  s_30: 30,
  s_31: 31,
  s_34: 34,
  s_55: 55,
};

/* Colors */

const commonColor = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  lg: '#B0EBBD',
  dg: '#00463C',
  mg: '#86D694',
};

const light = {
  themeColor: '#FFFFFF',
  white: '#000000',
  ...commonColor,
};

const dark = {
  themeColor: '#000000',
  white: '#FFFFFF',
  ...commonColor,
};

export {light, dark};
