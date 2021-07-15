## KN - React

How to run? (For developer)
-> yarn && yarn dev | npm i && npm run dev

How to deploy?
Path current 
-> yarn deploy or npm run deploy

How to rollback?
-> Table SYS_TRACK_DEPLOY sort name, create_at, branch, hash
-> "git checkout {hash (prev hash in db)}" 
-> yarn deploy

Connect remote server 
*SSH
    Required: Generate ssh key (Linux, Window, Macos,...)
    -> ssh username@host 
    {
        xcopy "file" "path/file"
        dir
        cd C:/***
        rmdir [/s] path folder
        del path
    }
*SFTP
    Required: Generate ssh key (Linux, Window, Macos,...)
    -> sftp username@host 
    {
        local: add prefix 'l' -> 'lls'
        cd C:/***
        rmdir [/s] path folder
        get localPath remotePath
        put localPath remotePath
    }

* file script in package.json
* env dev used Vercel
* Formatter use Extension in VSCode Install "Eslint"
* touch .env.local -> https://localhost:44330

- lib
   * @emotion/style SCSS
   * React Thunk (Flux)
   * React redux
   * React Hook
   * NextJs
   * Intl
   * Axios
   * Moment 
    Lodash (option)
    SSR
    Eslint


api -- side effect
components 
    - share 
    - layout
    - auth
    - component page

svg
pages -- router in nextJS (read document)
scss -- style
service -- init common service
styles -- will remove (*)
locate -- intl
url -- contain href
container -- main page 
components
   - layout
      - menu.js -- add Menu in sidebar
    

NextJs 
- Universal App
- static page
- seo
- dynamic page
- dynamic router
- lazy img
- support AMP

..........
Merge request

# husky 
npx husky add .husky/pre-commit "yarn lint-staged"
commitlint: setup commit with convention