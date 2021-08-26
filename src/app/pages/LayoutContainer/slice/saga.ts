import { Action } from '@reduxjs/toolkit';
import { landingPageActions } from 'app/pages/LandingPage/slice';
import {
  LANDING_PAGE_ERROR,
  LANDING_PAGE_STEPS,
} from 'app/pages/LandingPage/utils/landingPage.constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { mappingPlayersData } from 'utils/players.data';
import { requestNoJson } from 'utils/request';
import { layoutContainerActions as actions } from '.';

function* getPlayers(sagaAction: Action) {
  try {
    yield put(actions.setLoading(sagaAction.type));
    const response = yield call(
      requestNoJson,
      'https://www.fantacalcio.it/servizi/lista.ashx',
    );
    const data = yield call(mappingPlayersData, response);
    yield put(actions.setPlayers(data));
    yield put(
      landingPageActions.setProgress({
        caption: LANDING_PAGE_STEPS[1],
        percentage: 50,
      }),
    );
  } catch (error) {
    yield put(
      actions.setError({
        message: error.message,
      }),
    );
    yield put(
      landingPageActions.setProgress({
        caption: LANDING_PAGE_ERROR,
        percentage: 100,
      }),
    );
  }
  yield put(actions.removeLoading(sagaAction.type));
}

export function* layoutContainerSaga() {
  yield takeLatest(actions.loadPlayers.type, getPlayers);
}
