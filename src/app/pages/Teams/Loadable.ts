/**
 *
 * Asynchronously loads the component for Teams
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Teams = lazyLoad(
  () => import('./index'),
  module => module.Teams,
);
