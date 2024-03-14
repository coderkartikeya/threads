/** @type {import('next').NextConfig} */
const nextConfig = {
    
    
    images:{
        domains:["cloudflare-ipfs.com","avatars.githubusercontent.com","loremflickr.com"]
    },
    experimental: {
        appDir: true
    }

}

module.exports = nextConfig
