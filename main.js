var myApp = angular.module("myApp", []);
myApp.service("RegisterService" , function(){
    var uid = 1;
    var users = [{
        'id' : 0,
        'name' : 'Nguyen Quang Huy',
        'email' : 'nguyenhuy@gmail.com',
        'password': 'matkhau',
        'phone' : '0123456789'}]; 
        this.save = function(user){
            if(user.id == null){
                user.id = uid++;
                users.push(user);
            }else{
                for(var i in users){
                    if(users[i].id == user.id){
                        users[i] = user;
                    }
                }
            }
        };
        this.get = function(id){
            for(var i in users ){
                if( users[i].id == id){
                    return users[i];
                }
            }
        };
    his.delete = function(id){
        for(var i in users){
            if(users[i].id == id){
                users.splice(i,1);
            }
        }
    }; 
    this.list = function(){
        return users;
    }; 
});


