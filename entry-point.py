import os
from sys import argv

launch__build          = "webpack --mode=production --node-env=production"
launch__project        = "webpack serve --mode=development --node-env=development"
install__node__modules = "yarn install"


if argv[1] == "build":
  os.system(f"{install__node__modules} && {launch__build}");

if argv[1] == "start":
  os.system(f"{install__node__modules} && {launch__project}");
