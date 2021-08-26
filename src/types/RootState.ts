import { PlayersState } from 'app/pages/Players/slice/types';
import { TeamsState } from 'app/pages/Teams/slice/types';
import { RandomizerState } from 'app/pages/Randomizer/slice/types';
import { LayoutContainerState } from 'app/pages/LayoutContainer/slice/types';
import { LandingPageState } from 'app/pages/LandingPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  players?: PlayersState;
  teams?: TeamsState;
  randomizer?: RandomizerState;
  layoutContainer?: LayoutContainerState;
  landingPage?: LandingPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
