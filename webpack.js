'use strict';

module.exports = {
  entry: {
    main: [ './static/app.js' ],
    vendor: [ 'moment', 'axios', 'vue', 'element-ui', 'lodash' ],
  },
  resolve: {
    extensions: [ '.js', '.json' ],
  },
};