---
task: Add Tech Doc
responsável: @aiox-master
responsável_type: agent
atomic_layer: task
Entrada: |
  - file_path: Path to the documentation file (markdown, PDF, URL, or local .md)
  - preset_name: Name for the tech preset (e.g., "nextjs-react", "supabase-rls")
  - category: Optional category tag (framework, database, infrastructure, tool)
Saída: |
  - preset_path: Path to created tech preset in .aiox-core/data/tech-presets/
  - preset_name: Final preset name used
  - summary: Summary of extracted technical preferences
Checklist:
  - [ ] Read and parse documentation file
  - [ ] Extract technical preferences, patterns, and conventions
  - [ ] Generate tech preset YAML with metadata block
  - [ ] Save to .aiox-core/data/tech-presets/{preset_name}.md
  - [ ] Validate with validate-tech-preset task
  - [ ] Report created preset path and summary
---

# *add-tech-doc

Creates a tech preset from a documentation file. Parses the doc, extracts technical preferences and conventions, and saves as a reusable preset in `.aiox-core/data/tech-presets/`.

## Usage

```
@aiox-master
*add-tech-doc path/to/doc.md nextjs-react
*add-tech-doc path/to/supabase-guide.md supabase-rls --category database
```

## Parameters

| Parameter    | Type   | Required | Description                                    |
|-------------|--------|----------|------------------------------------------------|
| file_path   | string | Yes      | Path to documentation file                     |
| preset_name | string | Yes      | Name for the preset (kebab-case)               |
| category    | string | No       | Category: framework, database, infrastructure, tool |

## Steps

### Step 1: Read Documentation
- Open and read the file at `file_path`
- Detect format: Markdown, plain text, or structured doc
- Extract sections: overview, configuration, patterns, conventions, gotchas

### Step 2: Extract Technical Preferences
- Identify recommended patterns and best practices
- Note anti-patterns and things to avoid
- Capture configuration examples and defaults
- List dependencies and version constraints

### Step 3: Generate Tech Preset
Create file at `.aiox-core/data/tech-presets/{preset_name}.md` with structure:

```markdown
---
name: {preset_name}
category: {category}
source: {file_path}
created: {date}
---

# {preset_name} Tech Preset

## Overview
{brief description}

## Technical Preferences
{extracted preferences}

## Patterns
{recommended patterns}

## Anti-Patterns
{things to avoid}

## Configuration
{key configuration}
```

### Step 4: Validate
Run `validate-tech-preset {preset_name}` to confirm structure is correct.

### Step 5: Report
Show created preset path and a summary of what was extracted.

---

*Task: add-tech-doc | Agent: @aiox-master | Created 2026-03-31*
