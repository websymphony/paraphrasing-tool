const {
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    NEXT_PUBLIC_BASE_API_URL: (() => {
      if (isProd) {
        return 'https://paraphraser.prod.hipcv.com';
      }
    })(),
  };

  // next.config.js object
  return {
    basePath: '/paraphrasing-tool',
    assetPrefix: '/paraphrasing-tool/',
    env,
  };
};