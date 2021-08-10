/**
 *
 * Asynchronously loads the component for LayoutContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LayoutContainer = lazyLoad(
  () => import('./index'),
  module => module.LayoutContainer,
);
