function(){
	var res = {};
	res.prependProto = function(obj, newProto){
		newProto.__proto__ = obj.__proto__;;
		obj.__proto__ = newProto;
		return obj;
	}
	
	res.prependAllProtos = function(target, ...sources){
		var self = this;
		sources.forEach(function(source){
			self.prependProto(target,source)
		})
	}
	
	return res;
}()