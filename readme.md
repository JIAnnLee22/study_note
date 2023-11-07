## 编译方式

```
npm init -y
npm i vitepress -D

npm run docs:build
cd .\docs\.vitepress\dist\

git init
git add -A
git commit -m 'deploy'
git push --set-upstream git@github.com:JIAnnLee22/JIAnnLee22.github.io.git master

cd ../../
```

然后访问域名`jiannlee22.github.io`