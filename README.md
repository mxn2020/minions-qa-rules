# minions-qa-rules

**Validation rules, consistency checks, compliance gates, and auto-fix definitions**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-qa-rules/sdk minions-sdk

# Python
pip install minions-qa-rules

# CLI (global)
npm install -g @minions-qa-rules/cli
```

---

## CLI

```bash
# Show help
qa-rules --help
```

---

## Python SDK

```python
from minions_qa_rules import create_client

client = create_client()
```

---

## Project Structure

```
minions-qa-rules/
  packages/
    core/           # TypeScript core library (@minions-qa-rules/sdk on npm)
    python/         # Python SDK (minions-qa-rules on PyPI)
    cli/            # CLI tool (@minions-qa-rules/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [qa-rules.minions.help](https://qa-rules.minions.help)
- Blog: [qa-rules.minions.blog](https://qa-rules.minions.blog)
- App: [qa-rules.minions.wtf](https://qa-rules.minions.wtf)

---

## License

[MIT](LICENSE)
