/**
 *  
 * Date: Oct 23, 2018
 * Description: COMMON SPINNER AND MODAL ACTIONS!
 *
 */

import { START_SPINNER, STOP_SPINNER } from '../reducers/commonReducer';

// This action starts the common spinner.
export function startSpinner() {
  return { type: START_SPINNER };
}
// This action stops the common spinner.
export function stopSpinner() {
  return { type: STOP_SPINNER };
}
