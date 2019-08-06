module.exports = {
    apps: [{
        name: 'ServerTest',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'absinr',
            host: '104.198.204.80',
            key: '~/.ssh/gcp_rsa',
            ref: 'origin/gcp',
            repo: 'https://github.com/RichardAbsin98/ServerTest.git',
            path: '/home/absinr/ServerTest',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}
