# Pre-Push Checklist

Use by @devops before pushing to remote.

## Code State
- [ ] All tests passing locally
- [ ] No unresolved merge conflicts
- [ ] No debug code or console.log left in
- [ ] Sensitive data not in any committed file

## Git
- [ ] Commit messages follow conventional commits
- [ ] Branch name follows convention
- [ ] PR description complete (title, summary, test plan)

## CI/CD
- [ ] CI pipeline expected to pass
- [ ] Breaking changes flagged in PR
- [ ] Migration files included if schema changed
