# Release Checklist

Use by @devops before releasing to production.

## Pre-Release
- [ ] All stories in release are Done
- [ ] QA sign-off obtained
- [ ] Release notes drafted
- [ ] Version bumped (semver)

## Deployment
- [ ] Database migrations queued (if any)
- [ ] Environment variables verified in production
- [ ] Rollback plan documented

## Post-Release
- [ ] Smoke tests passed in production
- [ ] Monitoring dashboards checked (no anomalies)
- [ ] Team notified of release
- [ ] Release notes published
