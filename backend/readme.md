# Make it your own
    rm -rf .git && git init && npm init
    rm -rf .git && git init && yarn init

# Install dependencies
    npm install
    yarn install

# run dev 
# default: PORT=8300
    yarn run dev  
    npm run dev
# build production
# default: PORT=3000
    yarn run build 
    npm run build

# start production
    yarn run start
    npm run start

# restart production
    yarn run restart
    npm run restart

## using async/ await 
import 'babel-polyfill';

# generate model
    sequelize-auto -o "./models" -d [database]  -h [host] -u [username] -p [port] -x [password] -e mysql