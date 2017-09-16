const devConfig = {
    PORT: process.env.PORT || '3008',
    DEBUG: process.env.DEBUG || 'dev:*',
    MYSQL: {
        databases: 'trading',
        master: {
            host: '192.168.1.30',
            username: 'cd_super_1026',
            password: 'GBd1BiZnLSEXnJv0l9Eb1jzAnGhV83cb'
        },
        slave: [{
                host: '192.168.1.30',
                username: 'cd_super_1026',
                password: 'GBd1BiZnLSEXnJv0l9Eb1jzAnGhV83cb'
            },
            {
                host: '192.168.1.30',
                username: 'cd_super_1026',
                password: 'GBd1BiZnLSEXnJv0l9Eb1jzAnGhV83cb'
            }
        ]
    }
};
export default devConfig;