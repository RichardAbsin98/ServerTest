module.exports = {
    apps: [{
        name: 'ImagenWebServer',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: '54.84.175.105',
            key: '~/.ssh/ImagenKeyPair02.pem',
            ref: 'origin/ImagenWebServer',
            repo: 'https://github.com/RichardAbsin98/ServerTest.git',
            path: '/home/ubuntu/ImagenWebServer',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}