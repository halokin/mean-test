function testService ($http) {
	return {
		ajouter: function (data) {
			return $http.post('/test',data)
		},
		findAll: function () {
			return $http.get('/test')
		},
		update: function (id, data){
			return $http.put('/test/'+id, data)
		},
		delete: function (id){
			return $http.delete('/test/'+id)
		}
	}
}