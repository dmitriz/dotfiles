# PATH=$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
# alias l="ls -G"

##[ -r ~/.bashrc ] && source ~/.bashrc

export NVM_DIR="/Users/dmitrizaitsev/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# Shortcut for Ironworker
r () {
   iron_worker upload $1
   iron_worker queue $1
}
export -f r
# Shorcut to start new project
newp () {
	mkdir $1
	cd $1
	git init
	npm init -y
}

alias s="python -m SimpleHTTPServer 8080"
alias remoteupdate="git pull --rebase upstream master"
alias lisa="ls -lisa"
alias l="ls -G"
alias e="subl"

# npm from cache
alias npmo="npm --cache-min 999999 -d "
#alias npml="npm --registry http://127.0.0.1:5080 "
alias nio="npmo i"

alias npml="npm --registry http://localhost:8080 -d "
alias nl="npm ls --depth=0"
alias nr="npm run"
alias ns="npm start"
alias nt="npm test"
