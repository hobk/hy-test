var app = angular.module("myApp", ["ngRoute"]);
app.controller("myController", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.loginClick = function () {
      window.alert("登录成功！");
      $location.url("/home?id=1");
    };
    $scope.tabs = [
      { id: 1, name: "全媒体采编", url: "#!/home?id=1" },
      { id: 2, name: "政务公开", url: "#!/home?id=2" },
      { id: 3, name: "资源目录", url: "#!/home?id=3" },
      { id: 4, name: "问政互动", url: "#!/home?id=4" },
      { id: 5, name: "智能检索", url: "#!/home?id=5" },
      { id: 6, name: "绩效考核", url: "#!/home?id=6" },
      { id: 7, name: "运营中心", url: "#!/home?id=7" },
    ];
    $scope.isActive = function (id) {
        return $location.search().id == id
    };
  },
]);
app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", { templateUrl: "./pages/home.html" })
      .when("/login", { templateUrl: "./pages/login.html" })
      .otherwise({ redirectTo: "/login" });
  },
]);
