# I ❤ Bootstrap && React

### Theme Template ❤ Bootstrap for React

First, run the development server:

```
# run start http://localhost:3000
npm run dev

# install bootstrap
npm install react-bootstrap bootstrap

# add scss styles
npm i sass

# and add icon
npm install react-bootstrap-icons --save
```

if you have, error this
```
node: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.28′ not found

# then
sudo apt-get remove nodejs
nvm install 16.15.1
```

next.config.js  from, npm run build
```
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```