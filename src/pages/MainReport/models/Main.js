import { getAllMan, getReportByCustoms, getAllReadRecords, getRecordInfo, queryReport,
  getRecord, getUserByCertCodeAndName, getInstrumentByReportno, getInstrumentByKeyno,
  selectSampleByReportno, getCertFiles, getOssPdf, getCnasInfo, getManRecord, getInstrumentRecord, getAllCNASCheckDetail,getReportByCNAS} from '@/services/Main';


export default {
  namespace: 'main',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    reports:[],
    readRecords:[],
    recordData:[],
    report:{},
    getReportByCustomsResult:[],
  },

  effects: {
    *getAllMan({ payload,callback }, { call, put }) {
      const response = yield call(getAllMan, payload);
      if (callback) callback(response);
    },
    *getAllCNASCheckDetail({ payload,callback }, { call, put }) {
      const response = yield call(getAllCNASCheckDetail, payload);
      if (callback) callback(response);
    },
    *getManRecord({ payload,callback }, { call, put }) {
      const response = yield call(getManRecord, payload);
      if (callback) callback(response);
    },
    *getInstrumentRecord({ payload,callback }, { call, put }) {
      const response = yield call(getInstrumentRecord, payload);
      if (callback) callback(response);
    },

    *getOssPdf({ payload,callback }, { call, put }) {
      const response = yield call(getOssPdf, payload);
      if (callback) callback(response);
    },
    *getAllReadRecords({ payload,callback }, { call, put }) {
      const response = yield call(getAllReadRecords, payload);
      yield put({
        type: 'getReadRecords',
        payload: response,
      });
      if (callback) callback(response);
    },
    *getCnasInfo({ payload ,callback}, { call, put }) {
      const response = yield call(getCnasInfo, payload);
      if (callback) callback(response);
    },
    *getUserByCertCodeAndName({ payload,callback }, { call, put }) {
      const response = yield call(getUserByCertCodeAndName, payload);
      if (callback) callback(response);
    },
    *getCertFiles({ payload,callback }, { call, put }) {
      const response = yield call(getCertFiles, payload);
      if (callback) callback(response);
    },
    *getInstrumentByKeyno({ payload,callback }, { call, put }) {
      const response = yield call(getInstrumentByKeyno, payload);
      if (callback) callback(response);
    },
    *selectSampleByReportno({ payload,callback }, { call, put }) {
      const response = yield call(selectSampleByReportno, payload);
      if (callback) callback(response);
    },
    *getInstrumentByReportno({ payload,callback }, { call, put }) {
      const response = yield call(getInstrumentByReportno, payload);
      if (callback) callback(response);
    },
    *getRecordInfo({ payload,callback }, { call, put }) {
      const response = yield call(getRecordInfo, payload);
      yield put({
        type: 'getRecords',
        payload: response,
      });
      if (callback) callback(response.data);
    },
    *getReport({ payload,callback }, { call, put }) {
      const response = yield call(queryReport, payload);
      yield put({
        type: 'get',
        payload: response,
      });
      if (callback) callback(response.data);
    },
    *getRecord({ payload,callback }, { call, put }) {
      const response = yield call(getRecord, payload);
      yield put({
        type: 'getURL',
        payload: response,
      });
      if (callback) callback(response);
    },

    *getReportByCustoms({ payload,callback }, { call, put }) {
      const response = yield call(getReportByCustoms, payload);
      yield put({
        type: 'getReportByCustomsResult',
        payload: response.data,

      });
      if (callback) callback(response.data);
    },

    *getReportByCNAS({ payload,callback }, { call, put }) {
      const response = yield call(getReportByCNAS, payload);
      if (callback) callback(response.data);
    },

  },

  reducers: {
    get(state, { payload }) {
      return {
        ...state,
        report: payload.data,
      };
    },
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    getRecords(state, { payload }) {
      return {
        ...state,
        recordData : payload.data,
      };
    },
    getReadRecords(state, action) {
      return {
        ...state,
        readRecords: action.payload,
      }
    },
    getReportByCustomsResult(state, { payload }) {
      return {
        ...state,
        getReportByCustomsResult: payload.data,
      };
    },
  },
};
