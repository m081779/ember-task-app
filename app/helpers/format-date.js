import { helper as buildHelper } from '@ember/component/helper'; 

export function formatDate(params){
  return window.moment(params[0]).format('MM-DD-YYYY');
}

export default buildHelper(formatDate); 