module.exports = function oauthUrl(opts) {
  var baseUrl = opts.baseUrl
  var params = {
    redirect_uri: opts.redirectUri || window.location.origin,
    response_type: opts.responseType || 'code',
    display: opts.display || 'popup'
  }
  
  if (opts.oauth_token) {
    params.oauth_token = opts.oauth_token
  }
  if (opts.clientId) {
    params.client_id = opts.clientId
  }
  
  if(opts.scope) {
    params.scope = buildScope(opts.scope, opts.scopePrefix, opts.scopeDelimiter)
  }
  
  if(opts.accessType)
    params.access_type = opts.accessType

  var query = qs(params)
  return [baseUrl, query].join('?')
}

function qs(params) {
  return Object.keys(params).map(function(key) {
    var val = params[key]
    return key + '=' + encodeURIComponent(val)
  }).join('&')
}

function buildScope(scope, prefix, delimiter) {
  var str = scope.join(delimiter)
  return prefix
    ? prefix + delimiter + str
    : str
}
