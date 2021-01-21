**HOY VOY TEST**

Deploy:

Download the project at the directory and run this code.

`If you want, you can make a virtual host for redirect`

git clone https://github.com/jprous85/hoyvoytest

Copy .env.example to .env and include a new variable:
PROJECT_DESKTOP_IMAGE=/**YOUR PROJECT DIRECTORY**/public/images

run `php artisan migrate:install`

run `php artisan migrate`

run `php artisan db:seed`

_You may have a DDOS error. I use https://randomuser.me for fill database, in this case, repeat the action._

run `npm install`

run `npm run prod`
