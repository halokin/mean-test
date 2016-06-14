function inscriptionService ($http) {
	return {
		ajouter: function (data) {
			return $http.post('/inscription',data)
		},
		findAll: function () {
			return $http.get('/inscription')
		},
		update: function (id, data){
			return $http.put('/inscription/'+id, data)
		},
		delete: function (id){
			return $http.delete('/inscription/'+id)
		}
	}
}