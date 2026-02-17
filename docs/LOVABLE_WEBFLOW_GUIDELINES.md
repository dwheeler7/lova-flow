# Lovable Knowledge Base Entries for Webflow DevLink

This project syncs components to Webflow via DevLink. Copy each section below
into a separate Knowledge entry in the Lovable project settings UI.

---

## Entry 1: "Webflow Architecture"

```
This project syncs to Webflow via DevLink. Every landing/marketing component
must follow a two-file pattern:

1. React component → src/components/landing/ComponentName.tsx
2. Webflow wrapper → src/components/webflow/ComponentName.webflow.tsx

The React component does all the work. The Webflow wrapper is a thin
declareComponent() call that maps props for the Webflow Designer.

When I ask you to create or edit a landing component, always create BOTH files.
```

---

## Entry 2: "Forbidden Patterns"

```
NEVER use these in landing components — they break inside Webflow's Shadow DOM:

- framer-motion (use CSS animations instead — see animation entry)
- document.head or document.createElement("style")
- window.matchMedia (use Tailwind responsive prefixes: sm:, md:, lg:)
- useEffect that modifies DOM outside the component tree
- next-themes (use CSS variables from index.css)
- react-router-dom (use plain <a href="..."> tags)
- useContext, useReducer, or global state

If I ask for animations, use the useInView hook at src/hooks/useInView.ts
with Tailwind classes animate-fade-in-up or animate-fade-in. Never framer-motion.
```

---

## Entry 3: "Component Rules"

```
Rules for all components in src/components/landing/:

- Every piece of display text must be a prop with a sensible default value.
  Never hardcode user-facing strings.
- All props must be optional with defaults so the component renders standalone.
- Use only Tailwind CSS utility classes for styling.
- Use the project's CSS custom properties: text-foreground, bg-background,
  text-muted-foreground, border-border, bg-card, bg-primary, text-primary.
- Use relative imports, not @/ aliases: ../ui/button, ../../lib/utils,
  ../../hooks/useInView.
- shadcn/ui components (Button, etc.) are available via ../ui/button.
- Keep components small and single-purpose (a card, a badge, a button) —
  not large page sections.

Prop types must be Webflow-compatible:
- string → editable text
- string union → dropdown selector
- boolean → toggle
- number → numeric value
- For lists, use a newline-delimited string that the component splits on \n.
  Example: "Item 1\nItem 2\nItem 3"
  For key-value pairs: "Label|url\nLabel2|url2"
```

---

## Entry 4: "Animation Pattern"

```
For entrance animations, use this exact pattern (NOT framer-motion):

import { useRef } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

const MyComponent = ({ animate = true, index = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "your-classes",
        animate && "opacity-0",
        animate && isInView && "animate-fade-in-up"
      )}
      style={animate ? { animationDelay: `${index * 80}ms` } : undefined}
    >
      {/* content */}
    </div>
  );
};

Available animations: animate-fade-in-up (slide up + fade), animate-fade-in (fade only).
Always include animate (boolean) and index (number) props for Webflow control.
```

---

## Entry 5: "Webflow Wrapper Template"

```
Every landing component needs a matching Webflow wrapper file at
src/components/webflow/ComponentName.webflow.tsx.

Use this exact pattern:

import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import ComponentName from "../landing/ComponentName";

export default declareComponent(ComponentName, {
  name: "Component Name",
  description: "Brief description for Webflow Designer.",
  group: "Landing",
  props: {
    title: props.Text({ name: "Title", defaultValue: "Default Title" }),
    animate: props.Boolean({ name: "Animate", defaultValue: true }),
    index: props.Number({ name: "Stagger Index", defaultValue: 0 }),
  },
  options: { applyTagSelectors: true },
});

Prop type mapping:
- string props → props.Text()
- string union props → props.Variant({ options: [...] })
- boolean props → props.Boolean()
- number props → props.Number()
- ReactNode props → props.Slot()
- link props → props.Link()

Default values in the wrapper MUST match the defaults in the React component.
Always set group to "Landing" and options.applyTagSelectors to true.
```

---

## Entry 6: "Deploying to Webflow"

```
This project has a GitHub Actions workflow that syncs components to Webflow.

When I ask you to "sync to Webflow" or "deploy to Webflow", update the
file .webflow-sync-trigger in the project root. Change the "Last sync:"
timestamp to the current date/time. This is the ONLY thing that triggers
the Webflow sync — the GitHub Action watches for changes to this file.

Example — update .webflow-sync-trigger to contain:
  This file triggers the Webflow sync GitHub Action.
  To sync, update the timestamp below and commit.
  Last sync: 2026-02-17T15:30:00Z

Only update this file when I specifically ask to sync to Webflow.
Do NOT modify it during normal commits.
```

---

## Entry 7: "Checklist"

```
Before finishing any landing component, verify:
- Renders with zero props passed (all have defaults)
- No framer-motion imports
- No react-router-dom imports
- All display text comes from props
- Only Tailwind classes for styling
- Relative imports (not @/) for ui/, lib/, and hooks/
- Matching .webflow.tsx wrapper exists in src/components/webflow/
- Wrapper prop types and defaults match the React component interface
```
