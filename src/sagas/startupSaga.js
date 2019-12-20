import { put } from './node_modules/redux-saga/effects';
import NavigationService from '../services/navigationService';

export function* startup() {
  NavigationService.navigateAndReset('LoginScreen');
}
