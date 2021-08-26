/*
function* getPlayers(sagaAction: Action) {
  try {
    yield put(actions.setLoading(sagaAction.type));
    const response = yield call(
      requestNoJson,
      'https://www.fantacalcio.it/servizi/lista.ashx',
    );
    const data = yield call(mappingPlayersData, response);
    yield put(actions.setPlayers(data));
  } catch (error) {
    yield put(
      actions.setError({
        message: error.message,
      }),
    );
  }
  yield put(actions.removeLoading(sagaAction.type));
}*/

export function* playersSaga() {
  //yield takeLatest(actions.loadPlayers.type, getPlayers);
}
