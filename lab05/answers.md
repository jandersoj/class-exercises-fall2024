# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
`I'm going to put the dnf commands i used to do the same thing, even though I don't think I need to`

1. What is Homebrew / apt, and why is it useful?
`It keeps all our packages for us! it's like. the only way i install things, especially on weirdo linux. It does all the helpful install/check for update/uninstall stuff. Basically, a package manager is just useful cause it... manages packages.`
2. What does the `update` command do (either `brew update` or `apt-get update`)?
`dnf update checks to see if there's an update on the package in question and, if there is, installs it`
3. Where are the packages that are managed by Homebrew / apt stored on your local computer?
`they are in /etc/dnf!`

## Part 2.
1. What is a python virtual environment?
`it's like... it's own python installation, and you can toss packages and stuff in it but it doesn't affect the main machine and/or other environments.`
2. What is Poetry, and how is it different from other Python package managers like pip?
`It's just a package manager for python and especially python virtual env.s Reddit says it's better for dependencies, which I will believe!`
3. What happened when you issued the `poetry new poetry-demo` command?
`it opened up a new directory with some files already in it.   `
4. How do you run a python file using the poetry virtual environment?
`you put 'poetry run python xyz.py' instead of just 'python xyz.py'. that's it!`
5. What is the purpose of the `poetry.lock` file?
`it keeps your packages/dependencies from automatically updating, so you have to run poetry update [package] (i think)`

## Part 3.
1. What are some of the things that `package.json` is used for?
`I have seen package.json files as long as i've used computers, but I'm not really sure... Google is telling me that it does, oh, pretty much everything. so scripts, configuring, and alll the metadata and information you could want.`
2. Why wouldn't you want to check in the `node_modules` directory into GitHub?
`it looks like the biggest reason is just that package.json has everything you need, and it might have things specific to your os installed--that mightn't work on github or another system if they clone it. `


