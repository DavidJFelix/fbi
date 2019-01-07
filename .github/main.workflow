workflow "Build and deploy on push" {
  on       = "push"
  resolves = ["Test"]
}

action "Install Deps" {
  uses = "docker://node"
  runs = "yarn"
  args = "install --frozen-lockfile"
}

action "Build" {
  needs = "Install Deps"
  uses  = "docker://node"
  runs  = "yarn"
  args  = "run build"
}

action "Test" {
  needs = "Build"
  uses  = "docker://node"
  runs  = "yarn"
  args  = "run test --coverage"
}
