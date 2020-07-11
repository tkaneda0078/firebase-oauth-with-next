import * as dotenv from 'dotenv'
dotenv.config();
import path from 'path'
import Dotenv from 'dotenv-webpack'

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
    return config;
  }
};