const proConfig = {
    PORT: process.env.PORT || '3004',
    DEBUG: process.env.DEBUG || 'production:*',
    MYSQL: {
        databases: 'trading',
        master: {
            host: '192.168.1.30',
            port: 3306,
            username: 'cd_super_1026',
            password: 'GBd1BiZnLSEXnJv0l9Eb1jzAnGhV83cb'
        },
        slave: [{
                host: '192.168.1.30',
                port: 3306,
                username: 'cd_super_1026',
                password: 'GBd1BiZnLSEXnJv0l9Eb1jzAnGhV83cb'
            },
            {
                host: '192.168.1.30',
                port: 3306,
                username: 'cd_super_1026',
                password: 'GBd1BiZnLSEXnJv0l9Eb1jzAnGhV83cb'
            }
        ]
    }
};
export default proConfig;