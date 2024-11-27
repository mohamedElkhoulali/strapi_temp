  module.exports = {
    apps : [
      {
        name: 'strapiv4',
        script: 'server.js',
        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
            env_master: {
            NODE_ENV: 'production',          
            NAME: "STRAPI4"            
            }
      },
    ]
  };