function cleanDate(str){
	var orgDate = new Date(str);
	var posDate = new Date(orgDate.getTime() + (24 * 60 * 60 * 1000));//this is to fix the crappy MS EPOCH... so dumb
	return Math.round(posDate.getMonth()+1) + "/" + posDate.getDate() + "/" + posDate.getFullYear();
}