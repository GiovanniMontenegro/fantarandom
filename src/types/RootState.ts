import { PlayersState } from 'app/pages/Players/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  players?: PlayersState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
