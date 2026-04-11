# DBA Pre-Deploy Checklist

Use before running any migration in production.

## Pre-Flight
- [ ] Migration tested on staging environment
- [ ] Dry-run executed (`*dry-run {path}`) — no errors
- [ ] Schema snapshot created (`*snapshot pre-{version}`)
- [ ] Estimated execution time acceptable (< 5min for zero-downtime)

## Safety
- [ ] Migration is idempotent (safe to re-run)
- [ ] No DROP statements without explicit confirmation
- [ ] RLS policies validated for new tables
- [ ] Indexes created CONCURRENTLY where applicable

## Coordination
- [ ] Team notified of maintenance window (if needed)
- [ ] Rollback procedure documented and tested
- [ ] On-call engineer available during migration
