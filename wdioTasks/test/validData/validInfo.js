module.exports = {
  code: `git config --global user.name  "New Sheriff in Town"\n
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n
    git push origin master --force`,
  expirationTime: "10 Minutes",
  lang: "Bash",
  title: "how to gain dominance among developers",
};
