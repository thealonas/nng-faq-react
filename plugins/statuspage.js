module.exports = function (context, options) {
  return {
    name: 'statuspage',
    injectHtmlTags() {
      return {
        postBodyTags: [
          `<script src="https://status.alonas.lv/embed/script.js"></script>`
        ],
      };
    },
  };
};
