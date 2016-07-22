'use strict'

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        opacity: 0.5;
      }
    `
  })
}
