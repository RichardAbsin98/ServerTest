module.exports = {
    apps: [{
        name: 'ServerTest',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-34-201-116-83.compute-1.amazonaws.com',
            key: '~/Desktop/Stuff/ImagenKeyPair.pem',
            ref: 'origin/master',
            repo: 'https://github.com/RichardAbsin98/ServerTest.git',
            path: '/home/ubuntu/ServerTest',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}
