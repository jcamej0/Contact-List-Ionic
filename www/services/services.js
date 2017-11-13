angular.module('app.services', [])
.factory('contactListCrud', function($http){
  var url = 'https://app.alegra.com/api/v1/contacts/';
  var header = {Authorization : 'Basic amNhbWVqb2JAZ21haWwuY29tOjRhNWZkOTY0YTU4NzJhZjUxNzE2'};
      return {
      getContacts    : getContacts,
      newContact     : newContact,
      getContactInfo : getContactInfo,
      deleteContact  : deleteContact
    }
 
  
      function getContacts(){
         return $http.get(url,
         {headers: header,
         params:{start:0,limit:30,order_direction: 'ASC'}})
        .then(getContactsComplete)
        .catch(getContactsCompleteFail)


        function getContactsComplete(response){
          return response.data;
        }

        function getContactsCompleteFail(err){
          return err;
        }

      }

      function newContact(data){
        return $http.post(url,data,{headers:header})
        .then(newContactComplete)
        .catch(newContactFail)

        function newContactComplete(response){

            return response.data;
        }

        function newContactFail(err){
          return err;
        }

      }


      function getContactInfo(id){
        return $http.get(url+id,{headers:header})
        .then(getContactInfoComplete)
        .catch(getContactInfoFail)

        function getContactInfoComplete(response){
          return response.data;
        }

        function getContactInfoFail(err){
          return err;
        }
      }


      function deleteContact(id){
        return $http.delete(url+id,{headers:header})
        .then(deleteContactCompelete)
        .catch(deleteContactFail)

        function deleteContactCompelete(response){
          return response.data;
        }

        function deleteContactFail(err){
          return err;
        }

      }

})