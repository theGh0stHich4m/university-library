const config = {
    env: {
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_KEY,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
            privateKey: process.env.IMAGEKIT_PRIVATE_KIT,
        }
    }
}

export default config;