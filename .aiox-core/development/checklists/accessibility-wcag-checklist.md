# Accessibility WCAG Checklist

Use during `*a11y-check` command. Target: WCAG 2.1 AA.

## Perceivable
- [ ] Images have descriptive alt text (or alt="" if decorative)
- [ ] Color contrast ratio >= 4.5:1 (text), >= 3:1 (large text)
- [ ] No information conveyed by color alone
- [ ] Video/audio has captions or transcripts

## Operable
- [ ] All functionality keyboard accessible
- [ ] No keyboard traps
- [ ] Focus order logical (matches visual order)
- [ ] Skip navigation links present
- [ ] No content flashing > 3 times/second

## Understandable
- [ ] Language declared in HTML (`lang` attribute)
- [ ] Error messages are descriptive and helpful
- [ ] Form labels explicitly associated with inputs
- [ ] Consistent navigation across pages

## Robust
- [ ] Valid HTML (no duplicate IDs, proper nesting)
- [ ] ARIA roles used correctly
- [ ] Custom components use appropriate ARIA patterns
