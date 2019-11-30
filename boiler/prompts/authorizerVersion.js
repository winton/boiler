module.exports = {
  type: "input",
  name: "authorizerVersion",
  default: "0.1.0",
  message: "authorizer version",
  filter: function(input) {
    return input.replace(/\./g, "-")
  }
}
