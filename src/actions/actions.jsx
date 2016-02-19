import Reflux from 'reflux';
import { getData } from "../../common/request";


const Actions = Reflux.createActions([
    {loadTasksData:{asyncResult:true}},
    {loadTaskData:{asyncResult:true}}
]);

Actions.loadTasksData.listen(function(geturl){
	console.log('loadTasksData url:'+geturl);
	return getData("/tasks");
});
Actions.loadTaskData.listen(function(params){
	console.log('loadTasksData url:'+params+',id:'+params);
	return getData("/getTask",params);
});

export default Actions;