import request from '@/utils/request';
import { stringify } from 'qs';

export async function getAllMan(params) {
  return request(`/api/task_info/getAllMan?reportno=${params.reportno}&&certcode=${params.certcode}`);
}

export async function getAllReadRecords(params) {
  return request(`/api/readrecord/getAllReadRecords?reportno=${params.reportno}`);
}

//get_pdf
export async function getRecordInfo(params) {
	return request(`/api/recordinfo/get_recordInfo?reportno=${params.reportno}&source=${params.source}`);
}


export async function queryReport(params) {
  return request(`/api/report/get_report?reportNo=${params}`);
}

export async function getRecord(params) {
  return request(`/api/recordinfo/get_record?recordname=${params.recordname}&reportno=${params.reportno}`);
}

// post请求 注意 ` 这个符号 不是这种 ’号
export async function getReportByCustoms(params) {
  return request(`/api/report/getReportByCustoms`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function getUserByCertCodeAndName(params) {
  return request(`/api/user/getUserByCertCodeAndName?certCode=${params.certcode}&nameC=${params.nameC}`);
}

export async function getInstrumentByReportno(params) {
  return request(`/api/checkResult/getInstrumentByReportno?certcode=${params.certcode}&reportno=${params.reportno}`);
}

export async function getInstrumentByKeyno(params) {
  return request(`/api/instrument/getInstrumentByKeyno?keyno=${params.keyno}`);
}

export async function selectSampleByReportno(params) {
  return request(`/api/sampleRegister/selectSampleByReportno?reportno=${params.reportno}`);
}

export async function getCertFiles(params) {
  return request(`/api/cert_report//getCertFiles?reportno=${params.reportno}`);
}

export async function getOssPdf(params) {
  return request(`/api/cert_report/get_pdf?osspath=${params.osspath}`);
}

export async function getAllCNASCheckDetail(params) {
  return request(`/api/CNASCheckDetail/getAllCNASCheckDetail?certcode=${params.certcode}`);
}

export async function getManRecord(params) {
  return request(`/api/recordman/getRecord`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function getInstrumentRecord(params) {
  return request(`/api/recordinstrument/getRecord`,{
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function getCnasInfo(params) {
  return request(`/api/cnas/getCnasInfo?checkCode=${params.checkCode}`);
}