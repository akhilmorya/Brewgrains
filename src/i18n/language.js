import { changeLanguage } from '../Actions/languageActions';
import { setLocale, getCurrentLocale } from './index';

export const setCurrentLanguage = (lang) => (dispatch) => {
  setLocale(lang);
  dispatch(changeLanguage(lang));
};

export function changeLanguag() {
  const currentLanguage = getCurrentLocale();
  if (currentLanguage === 'en') {
    setLocale('fr');
  } else {
    setLocale('en');
  }
}

export const toggleLanguage = () => (dispatch, getState) => {
  const currentLanguage = getState().userPreferences.language;
  if (currentLanguage === 'en') {
    dispatch(setCurrentLanguage('fr'));
  } else {
    dispatch(setCurrentLanguage('en'));
  }
};
