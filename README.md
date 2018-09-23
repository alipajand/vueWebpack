# Vue js and Webpack Starterkit

## Installation
```bash
$ yarn [yarn install]

# You can also use npm to install
# Be careful! Some packages maybe have restricted access and have erors on installing 
$ npm i [npm install]
``` 

## Run and Build
#### Start to Develop!
```bash
# For watching and start to run dev server
$ npm start
```

#### Publish For Different Environment
```bash
# build for development
$ npm run build
```
```bash
# build for test env
$ npm run build-test
```

#### Test
```bash
# to run unit and e2e test
$ npm run test
```

to run Separate test works: (will be completed)
```bash
# unit tests
$ npm run unit

# e2e test
$ npm run e2e
```

#### Report
```bash
# to run report on generated files
$ npm run build-(dev/prod/test) --report
```

#### Folder Structure after Build
```
web/
└── dist/
    ├── assets/
    │   ├── css/
    │   │   ├── [name].[contenthash].css
    │   │   └── [name].[contenthash].css.gz (gzip file)
    │   │
    │   ├── fonts/
    │   │   └── [name].[ext] (eot/svg/ttf/woff/woff2)
    │   │
    │   ├── images/
    │   │   └── [name].[ext] (png/jpg/svg)
    │   │
    │   ├── js
    │   │   ├── [name].[chalkhash].js
    │   │   └── [name].[chalkhash].js.gz (gzip file)
    │   │
    │   └── videos/
    │       └── [name].[ext] (mp4)
    │
    ├── favicon.ico
    ├── [google webmaster file].html
    ├── humans.txt
    ├── index.html
    ├── manifest.html
    ├── robots.txt
    ├── service-worker.js
    ├── sitemap.xml
    └── sitemap.xml.gz (gzip file)
```

## `git` Help
```bash
# Change branch to master
git checkout master

# List of all branches
git branch -a

# Delete a git commit but keep the changes
git reset HEAD^

# Undo last commit
git reset HEAD~1 --soft

# Revert all uncommitted changes (longer to type, but works from any subdirectory)
git reset --hard HEAD

# This will remove all local untracked files, so only git tracked files remain
git clean -fdx
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
