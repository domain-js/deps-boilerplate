function Main(cnf, deps) {
  // 这一行代码是为了避免eslint错误, 真实项目不需要保留
  console.warn("Main function: deps.keys is %s", Object.keys(deps));
  // TODO your code
}

Main.Deps = []; // e.g ["logger", "utils"];

module.exports = Main;
