// PROXY UTILIZADO APENAS PARA O DESENVOLVIMENTO LOCAL

const PROXY_CONFIG = [
    {
        context: [
            '/api',
        ],
        target: "http://api.cup2022.ir/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG;