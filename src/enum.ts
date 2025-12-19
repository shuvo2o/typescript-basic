// Default enum
enum Dir{
    up,
    down,
    left,
    right
}
console.log(Dir.down)
// number enum
enum Role {
    User = 1,
    Admin,
    SuperAdmin,
    Moderator
}
// string enum
enum Status {
    Succes= "Succes",
    Error ="Error",
    Failed = "Failed",
}
console.log(Status.Error)

// const enum
const enum Size {
    Small,
    Medium,
    large
}
const s1 = Size.large
console.log(s1);

