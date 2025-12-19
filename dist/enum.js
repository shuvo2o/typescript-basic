"use strict";
// Default enum
var Dir;
(function (Dir) {
    Dir[Dir["up"] = 0] = "up";
    Dir[Dir["down"] = 1] = "down";
    Dir[Dir["left"] = 2] = "left";
    Dir[Dir["right"] = 3] = "right";
})(Dir || (Dir = {}));
console.log(Dir.down);
// number enum
var Role;
(function (Role) {
    Role[Role["User"] = 1] = "User";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["SuperAdmin"] = 3] = "SuperAdmin";
    Role[Role["Moderator"] = 4] = "Moderator";
})(Role || (Role = {}));
// string enum
var Status;
(function (Status) {
    Status["Succes"] = "Succes";
    Status["Error"] = "Error";
    Status["Failed"] = "Failed";
})(Status || (Status = {}));
console.log(Status.Error);
const s1 = 2 /* Size.large */;
console.log(s1);
