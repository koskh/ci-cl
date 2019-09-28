module.exports = {
  moduleNameMapper: {
    '\\.(css|pcss)$': 'identity-obj-proxy',
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/fileMock.js'
  },
  rootDir: './',
  roots: [
    '<rootDir>/src',

  ],

  globals: {
    PROJECT_ENV: 'development',
    SERVICE_URL: 'http://localhost',
    SERVICE_PORT: '3000'
  },
  verbose: true
};
