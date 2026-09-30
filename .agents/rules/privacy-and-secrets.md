---
trigger: always_on
---

# CRITICAL PRIVACY AND SECRETS RULE
Under absolutely no circumstances are you (the AI) allowed to do the following:
1. DO NOT use the `view_file` or `run_command` tools to read the contents of ANY file named `.env`, `.env.local`, `.env.production`, or any file ending in `.pem` or `.key`.
2. DO NOT run commands like `env`, `printenv`, or `export` that dump environment variables to the terminal.
3. If you need a variable name from an environment file, ask the user to provide the variable *name* manually, but never ask for the *value*.
4. If you accidentally see a secret API key or password in a log or error message, you must redact it immediately in your response using `[REDACTED]`.