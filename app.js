anglar.model("app",[]);

angular.module("app").controller("MainController", function(){
    var vm = this;
    vm.title = "Learn Angular by example";
    vm.searchInput = "";
    vm.show = [
        {
            title: "Doi mat co lua",
            author: "Nguyen Hung Son",
            favorrite: true
        },
        {
            title: "Life of Pi",
            author: "Davan",
            favorrite: flase
        },
        {
            title: "lean Angular by example",
            author: "Fpt-Aptech",
            favorrite: true
        },
        {
            title: "Ho Nha Trai",
            author: "Nguyen Anh Tu",
            favorrite: false
        },
        {
            title: "Hoc code today",
            author: "Fpt",
            favorrite: true
        },
    ];
    vm.order = [
        {
            id: 1,
            title: "Author Ascending",
            key: "author",
            reverse: false
        },
        {
            id: 2,
            title: "Author Descending",
            key: "author",
            reverse: true
        },
        {
            id: 3,
            title: "Title Ascending",
            key: "title",
            reverse: false
        },
        {
            id: 4,
            title: "Title Ascending",
            key: "title",
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function (){
        vm.show.push(vm.new);
        vm.new = {};
    };
});