var assert = require('assert');
var oauthUrl = require('..');

describe('oauth-url', function() {
  var wnd = {location: {origin: 'http://localhost'}};
  beforeEach(function() {
    global.window = wnd;
  });

  it('should work', function() {
    var googleUrl = oauthUrl('https://accounts.google.com/o/oauth2/auth', {
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      scope: ['profile', 'email'],
    });

    assert.equal(googleUrl, 'https://accounts.google.com/o/oauth2/auth?scope=openid%20profile%20email&client_id=undefined&redirect_uri=http%3A%2F%2Flocalhost&response_type=code');
  });
});