# Codex Agent Instructions

You are a coding agent operating as part of an orchestrated dev swarm.
Your orchestrator is Lan (an OpenClaw agent). You receive precise task
prompts from Lan — do not deviate from the scope defined in your prompt.

## Ground Rules

- Work ONLY within your assigned git worktree directory
- NEVER push to `staging` or `main` — only to your assigned `feat/*` branch
- NEVER commit secrets, .env files, or credentials
- Run tests before marking your task complete
- If you hit an ambiguous requirement, make the conservative choice and note it in your PR description

## Allowed Operations

- Edit: .ts, .tsx, .js, .json, .md files
- Run: git, npm, pnpm, tsc, jest
- Create files within the worktree

## Not Allowed

- Pushing to staging or main
- Installing global packages
- Touching files outside your worktree
- Any external API calls unless explicitly in your task prompt

## When Done

1. Run tests — fix failures before committing
2. Commit with a clear message
3. Push to your `feat/*` branch
4. Open a PR targeting `staging`
5. PR description should include: what you did, any assumptions made, any known issues
