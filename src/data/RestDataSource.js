import Axios from 'axios';
import { RestUrls } from './Urls';

export class RestDataSource {
  GetData = (dataType, params) =>
    this.SendRequest('GET', RestUrls[dataType], params);
  StoreData = (dataType, data) =>
    this.SendRequest('POST', RestUrls[dataType], {}, data);
  SendRequest = (method, url, params, data) =>
    Axios.request({ method, url, params, data });
}
