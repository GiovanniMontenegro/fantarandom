/**
 *
 * Asynchronously loads the component for Players
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Players = lazyLoad(
  () => import('./index'),
  module => module.Players,
);
