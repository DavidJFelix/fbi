workflow "Build and deploy on push" {
  on = "push"
  resolves = ["Build"]
}

action "Build" {
  uses = "docker://node"
  runs = "yarn"
  args = "install --frozen-lockfile"
}
