function(){
	var res = {};
	res.prependProto = function(obj, newProto){
		newProto.__proto__ = obj.__proto__;;
		obj.__proto__ = newProto;
		return obj;
	}
	
	return res;
}()