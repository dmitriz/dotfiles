#!/usr/bin/env bash

# Setting PATH for Python 2.7                                                                                                                                       
# The orginal version is saved in .bash_profile.pysave                                                                                                            
PATH=$PATH:/Library/Frameworks/Python.framework/Versions/2.7/bin

# Docker
export DOCKER_HOST=tcp://192.168.59.103:2376
export DOCKER_CERT_PATH=~/.boot2docker/certs/boot2docker-vm
export DOCKER_TLS_VERIFY=1

# Load RVM, if you are using it
[[ -s $HOME/.rvm/scripts/rvm ]] && source $HOME/.rvm/scripts/rvm

# Add rvm gems and nginx to the path
export PATH=$PATH:~/.gem/specs/rubygems.org%80/quick/Marshal.4.8:/opt/nginx/sbin::/usr/local/Cellar/ruby/2.0.0-p195/bin

# Path to the bash it configuration
#export BASH_IT=$HOME/.bash_it

# Lock and Load a custom theme file
# location /.bash_it/themes/
#export BASH_IT_THEME='bobby'

# Set my editor and git editor
#export EDITOR="/usr/bin/mate -w"
export GIT_EDITOR='emacs -w'

# Set the path nginx
export NGINX_PATH='/opt/nginx'

# Change this to your console based IRC client of choice.
export IRC_CLIENT='irssi'

# Set this to the command you use for todo.txt-cli
export TODO="t"

# Set vcprompt executable path for scm advance info in prompt (demula theme)
# https://github.com/xvzf/vcprompt
#export VCPROMPT_EXECUTABLE=~/.vcprompt/bin/vcprompt

# Load Bash It
#source $BASH_IT/bash_it.sh

# Load npm completion - generated with `npm complete > .npm-completion.sh`
#source ~/.npm-completion.sh

# Shortcut for Ironworker
r () {
   iron_worker upload $1
   iron_worker queue $1
}
export -f r
alias s="python -m SimpleHTTPServer 8080"
alias remoteupdate="git pull --rebase upstream master"
alias l="ls -lisa"

# Coloring
# http://apple.stackexchange.com/a/33679/56300
export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad

# MacPorts Installer addition on 2015-11-22_at_13:10:28: adding an appropriate PATH variable for use with MacPorts.
PATH=$PATH:/opt/local/bin:/opt/local/sbin
# Finished adapting your PATH environment variable for use with MacPorts.

# Move global node modules to local directory
NPM_PACKAGES=~/npm-global
export PATH=$PATH:$NPM_PACKAGES/bin
