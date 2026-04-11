# Database Design Checklist

Use when designing or reviewing schema changes.

## Naming & Structure
- [ ] Tables use snake_case plural nouns
- [ ] Columns use snake_case
- [ ] Primary keys defined (uuid preferred)
- [ ] Foreign keys with ON DELETE behavior specified

## Normalization
- [ ] No unnecessary data duplication
- [ ] Appropriate normalization level for use case
- [ ] Computed columns justified

## Security
- [ ] RLS enabled on all tables with user data
- [ ] RLS policies cover SELECT, INSERT, UPDATE, DELETE
- [ ] Sensitive fields identified (encrypt if needed)

## Performance
- [ ] Indexes on foreign keys and frequent filter columns
- [ ] No N+1 query patterns in schema design
- [ ] Partition strategy for large tables considered
