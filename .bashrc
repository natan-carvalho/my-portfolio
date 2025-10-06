function gac()
{
  if [ -z "$1" ]; then
    echo "Usage: gac <commit-message>"
    return 1
  fi
  git add .
  git commit -m "$1"
  git push
}