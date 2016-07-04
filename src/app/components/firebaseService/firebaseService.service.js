// firebaseServices.js
(function() {

    // 'user strict';
    angular
         .module('livredor')
        .factory('FirebaseService', FirebaseService);

    /** @ngInject */  
    function FirebaseService(CONFIG, $q) {
        var that = this;
        
        that.FirebaseService = {
            push : function(bucketName, object) {
                // Get a key for a new Post.
                var newPostKey = firebase.database().ref().child(bucketName).push().key;
                // Write the new post's data simultaneously in the posts list and the user's post list.
                var updates = {};
                updates['/' + bucketName + '/' + newPostKey] = object;
                //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

                return firebase.database().ref().update(updates);
            },

            getPosts : function(bucketName) {
                    return firebase.database().ref(bucketName);
                }   
            };

        return that.FirebaseService;
    }


})();