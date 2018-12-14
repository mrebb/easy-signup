const logger = store=>next=>action=>{
  console.log('1.previous state of app: ', store.getState());
  console.log('2.dispatching action..', action);
  let output = next(action);
  console.log('3.current state of app: ', store.getState());
  return output;
};
export default logger;