module.exports = {
  SERVER: { message: 'Server error occurred', status: 500, code: 'SERVER_ERROR' },
  DEV_IMPLEMENTATION: { message: 'Development implementation error', status: 500, code: 'DEV_IMPLEMENTATION_ERROR' },
  NO_ARGUMENT: { message: 'Required arguments not supplied', status: 500, code: 'NO_ARGUMENT_ERROR' },
  ARGUMENT_TYPE: { message: 'Wrong argument type', status: 500, code: 'ARGUMENT_TYPE_ERROR' },
  BAD_REQUEST: { message: 'Bad request', status: 400, code: 'BAD_REQUEST_ERROR' },
  EMPTY_BODY: { message: 'Empty body is not allowed. Please fill the body', status: 400, code: 'EMPTY_BODY_ERROR' },
  VALIDATION: { message: 'Invalid request', status: 400, code: 'VALIDATION_ERROR' },
  ACCESS: { message: 'Access denied', status: 403, code: 'ACCESS_ERROR' },
  NO_ANONYMOUS_ACCESS: { message: 'Access denied. No anonymous access', status: 403, code: 'NO_ANONYMOUS_ACCESS_ERROR' },
  BAD_ROLE: { message: 'Bad role', status: 403, code: 'BAD_ROLE_ERROR' },
  INVALID_CREDENTIALS: { message: 'Invalid credentials', status: 403, code: 'INVALID_CREDENTIALS_ERROR' },
  INVALID_PASSWORD: { message: 'Invalid password', status: 403, code: 'INVALID_PASSWORD_ERROR' },
  TOKEN_EXPIRED: { message: 'Token expired', status: 401, code: 'TOKEN_EXPIRED_ERROR' },
  INVALID_SESSION: { message: 'Invalid session. Wrong fingerprint', status: 401, code: 'INVALID_SESSION_ERROR' },
  TOKEN_NOT_SIGNED: { message: 'Token not signed', status: 500, code: 'TOKEN_NOT_SIGNED_ERROR' },
  TOKEN_VERIFY: { message: 'Token verify error', status: 401, code: 'TOKEN_VERIFY_ERROR' },
  BAD_REFRESH_TOKEN: { message: 'Bad Refresh token', status: 401, code: 'BAD_REFRESH_TOKEN_ERROR' },
  WRONG_RESET_PASSWORD_TOKEN: { message: 'Reset password token is not registered. Probably it already used', status: 401, code: 'WRONG_RESET_PASSWORD_TOKEN_ERROR' },
  WRONG_EMAIL_CONFIRM_TOKEN: { message: 'Confirm email token is not registered. Probably it already used', status: 401, code: 'WRONG_EMAIL_CONFIRM_TOKEN_ERROR' },
  PARSE_TOKEN: { message: 'Trying get data from access token. Something wrong', status: 401, code: 'PARSE_TOKEN_ERROR' },
  EMAIL_ALREADY_TAKEN: { message: 'This email already taken, try use another', status: 409, code: 'EMAIL_ALREADY_TAKEN_ERROR' },
  SEND_EMAIL: { message: 'Send email error', status: 500, code: 'SEND_EMAIL_ERROR' },
  DECRYPTION: { message: 'Decryption error', status: 500, code: 'DECRYPTION_ERROR' },
  ROUTE_NOT_FOUND: { message: 'Route not found', status: 404, code: 'ROUTE_NOT_FOUND_ERROR' },
  NOT_FOUND: { message: 'Empty response, not found', status: 404, code: 'NOT_FOUND_ERROR' },
  UNPROCESSABLE_ENTITY: { message: 'Unprocessable entity', status: 422, code: 'UNPROCESSABLE_ENTITY_ERROR' },
  DB_DUPLICATE_CONFLICT: { message: 'Duplicate conflict. Resource already exists', status: 409, code: 'DB_DUPLICATE_CONFLICT_ERROR' },
  DB_NOTNULL_CONFLICT: { message: 'Not null conflict', status: 500, code: 'DB_NOTNULL_CONFLICT_ERROR' },
  DB: { status: 500, code: 'DB_ERROR' }
}
