/* Domino uses sloppy-mode features (in particular, `with`) for a few
 * minor things.  This file encapsulates all the sloppiness; every
 * other module should be strict. */
/* jshint strict: false */
/* jshint evil: true */
/* jshint -W085 */
module.exports = {
  Window_run: function _run(code, file) {
    console.log('redacted Window_run');
  },
  EventHandlerBuilder_build: function build() {
    console.log('redacted EventHandlerBuilder_build');
  }
};
