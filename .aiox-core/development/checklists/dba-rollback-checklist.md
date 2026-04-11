# DBA Rollback Checklist

Use when a migration needs to be reverted.

## Assess
- [ ] Root cause of failure identified
- [ ] Data loss risk assessed
- [ ] Rollback scope confirmed (partial vs full)

## Execute
- [ ] Snapshot available for target version
- [ ] Application traffic stopped or redirected
- [ ] `*rollback {snapshot}` executed
- [ ] Schema state verified post-rollback

## Verify
- [ ] Application reconnected and functional
- [ ] No data corruption detected
- [ ] Incident documented with timeline
- [ ] Post-mortem scheduled
