
// export  const baseUrl = " http://172.16.101.219:8081/";
export  const baseUrl = " http://172.16.59.62:8081/";

export const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
      }, delay);
    }
  }
  export const dateToLocalString=(time)=>{
    var unixTimestamp = new Date(time) ;
    return unixTimestamp.getFullYear() + "-" + ((unixTimestamp.getMonth() + 1)<10?'0'+(unixTimestamp.getMonth() + 1):(unixTimestamp.getMonth() + 1)) + "-" 
    + (unixTimestamp.getDate()<10?'0'+unixTimestamp.getDate():unixTimestamp.getDate())
  }