module.exports = function oauthUrl(baseUrl, opts) {
  return baseUrl + '?' + qs({
    scope: buildScopes(opts.scope, opts.scopePrefix, opts.scopeDelimiter),
    client_id: opts.clientId,
    redirect_uri: opts.redirectUri || window.location.origin,
    response_type: opts.responseType || 'code',
    display: opts.display || 'popup'
  });
}

function qs(params) {
  return Object.keys(params).map(function(key) {
    var val = params[key];
    return key + '=' + encodeURIComponent(val);
  }).join('&');
}

function buildScopes(scopes, prefix, delimiter) {
  var str = scopes.join(delimiter);
  return prefix
    ? prefix + delimiter + str
    : str;
}