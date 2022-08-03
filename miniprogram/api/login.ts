import request from '../service/index';
import {
    ICodeSession,
} from './types/login'

export const getCodeSession = (data:any) => {
    return request<any, ICodeSession>({
        url: '/wx/code2Session',
        method: 'get',
        data
    })
  }