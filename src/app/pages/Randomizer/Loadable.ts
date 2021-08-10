/**
 *
 * Asynchronously loads the component for Randomizer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Randomizer = lazyLoad(
  () => import('./index'),
  module => module.Randomizer,
);
