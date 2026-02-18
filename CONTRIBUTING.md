# Contributing Guide

Thank you for considering contributing to HelperTools! This guide will help you get started.

## How to Contribute

### Adding New Tools

1. **Create calculation logic** in `utils/`
2. **Add types** in `types/index.ts`
3. **Create tool page** in `app/tools/[tool-name]/page.tsx`
4. **Update constants** in `lib/constants.ts`
5. **Test thoroughly**

### Improving Existing Tools

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test all functionality
5. Submit a pull request

## Code Style

### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible

### React Components
- Use functional components
- Prefer server components when possible
- Use client components only when needed ('use client')

### Naming Conventions
- Components: PascalCase (e.g., `ToolCard.tsx`)
- Functions: camelCase (e.g., `calculateMortgage`)
- Constants: UPPER_SNAKE_CASE (e.g., `SITE_NAME`)

### File Organization
```
app/
  tools/
    [tool-name]/
      page.tsx          # Main tool page
components/
  ComponentName.tsx     # Reusable components
utils/
  utilityName.ts        # Utility functions
types/
  index.ts              # Type definitions
```

## Testing

Before submitting:
1. Test all tool calculations
2. Verify responsive design
3. Check dark mode
4. Test all links
5. Validate SEO metadata

## Pull Request Process

1. Update README if needed
2. Add comments to complex code
3. Ensure all tests pass
4. Update documentation
5. Submit PR with clear description

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions
- Suggestions

Thank you for contributing! 🎉
