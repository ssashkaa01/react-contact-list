const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const internalIp = require('internal-ip');

const myip = internalIp.v4.sync();

module.exports = (env = {}) => {

    const { mode = 'development' } = env;

    const isProd = mode === "production";
    const isDev = mode === "development";

    const GetStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
        ]
    };

    const GetPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: "public/index.html"
            }),
           // new AntdDayjsWebpackPlugin()
        ];

        if(isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: "main.[hash:8].css"
            }));
        }


        return plugins;
    };

    return {
        mode: isProd ? 'production': isDev && 'development',
        output: {
            filename: isProd ? "main.[hash:8].js" : undefined
        },
        module: {
            rules: [

                // JavaScript
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },

                // CSS
                {
                    test: /\.css$/,
                    use: GetStyleLoaders()
                },

                // SCSS | SASS
                {
                    test: /\.(s[ca]ss)$/,
                    use: [...GetStyleLoaders(), "sass-loader"]
                },

                // LESS
                {
                    test: /\.less$/,
                    use: [...GetStyleLoaders(), {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }]
                },

                // Зображення
                {
                    test: /\.(png|jpg|ico|gif|jpeg)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: "images",
                            name: "[name]-[sha1:hash:7].[ext]"
                        }
                    }]
                },

                // Шрифти
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts",
                            name: "[name].[ext]"
                        }
                    }]
                }
            ]
        }
        ,
        plugins: GetPlugins(),
        devServer: {
            open: true,
            host: myip,
            port: 3000,
            hot: true
        }
    }
};

console.log("Public host: " + myip + ":3000");