#!/usr/bin/env bash

# Some installers write there, so we source it
#source ~/.bashrc
if [ -f ~/.bashrc ]; then . ~/.bashrc; fi 

PROMPT_COMMAND='echo -ne "\033]0;${USER}@${HOSTNAME}: ${PWD}\007"'

# Setting PATH for Python 2.7                                                                          
PATH=$PATH:/Library/Frameworks/Python.framework/Versions/2.7/bin

# Docker
export DOCKER_HOST=tcp://192.168.59.103:2376
export DOCKER_CERT_PATH=~/.boot2docker/certs/boot2docker-vm
export DOCKER_TLS_VERIFY=1

# Load RVM, if you are using it
#[[ -s $HOME/.rvm/scripts/rvm ]] && source $HOME/.rvm/scripts/rvm

# Add rvm gems and nginx to the path
export PATH=$PATH:$HOME/.rvm/gems/ruby-2.3.0/bin

# Path to the bash it configuration
export BASH_IT=$HOME/.bash_it

# Lock and Load a custom theme file
# location /.bash_it/themes/
export BASH_IT_THEME='bobby'

# Your place for hosting Git repos. I use this for private repos.
export GIT_HOSTING='git@git.domain.com'

# Set my editor and git editor
#export EDITOR="/usr/bin/mate -w"
#export GIT_EDITOR='/usr/bin/mate -w'
#export GIT_EDITOR='emacs -w'
export GIT_EDITOR='subl -w'

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
source $BASH_IT/bash_it.sh

# Load npm completion - generated with `npm complete > .npm-completion.sh`
source ~/.npm-completion.sh

# Coloring
# http://apple.stackexchange.com/a/33679/56300
#export CLICOLOR=1
#export LSCOLORS=ExFxCxDxBxegedabagacad

# MacPorts Installer addition on 2015-11-21_at_17:10:36: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"

# path for node global packages
export PATH=~/.npm-global/bin:$PATH

# path to use local node binaries instead of global
export PATH=./node_modules/.bin/:$PATH

# path to Postgress DB
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
