# Git

## global .gitignore
https://help.github.com/articles/ignoring-files/
```sh
git config --global core.excludesfile ~/.gitignore_global
```

# Node

## Fixing npm permissions
To avoid `sudo npm` and the likes:
https://docs.npmjs.com/getting-started/fixing-npm-permissions
https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md

## Force npm to use cache on slow connection
Add the option 
```sh
--cache-min 9999999
```
