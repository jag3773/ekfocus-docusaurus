stat:
	git remote -v
	git branch
	git status -s
commit: stat
	git commit -a
	git pull --no-edit origin master
	git push origin master