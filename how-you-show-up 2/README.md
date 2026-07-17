# Creativity Archetype: TANG Onboarding MVP

A dependency-free, responsive prototype for a fast TANG onboarding reflection experience.

## What is included

- 10 one-word, this-or-that choices
- 60 to 90 second completion target
- 10 team contribution archetypes
- Six-mode contribution profile
- Three suggested, user-confirmed power skills
- Editable team introduction
- Original human-centered archetype portraits
- Downloadable PNG result card
- Keyboard controls and reduced-motion support
- No login, analytics, or server-side data storage

## Run locally

You can open `index.html` directly in most browsers. For the most reliable experience, serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy

This is a static site. It can be deployed without a build step.

### Vercel

1. Create a new project and upload/import this folder.
2. Set **Framework Preset** to `Other`.
3. Leave the build command blank.
4. Set the output directory to `.` if prompted.
5. Deploy.

### Netlify

Drag this entire folder into Netlify Drop, or connect the repository with no build command and `.` as the publish directory.

### GitHub Pages

Push the files to a repository and enable Pages from the repository root.

## Primary files

- `index.html`: application shell
- `styles.css`: visual system and responsive behavior
- `app.js`: questions, scoring, archetype content, and interaction logic
- `tang-t.png`: TANG T logo supplied for the prototype
- `design-reference.png`: the supplied power-skills visual, retained only as a design reference

## Important product note

The current scoring is intentionally lightweight. Pilot it with teammates before treating the archetype distribution as stable. This should support reflection and onboarding conversations, not hiring, performance evaluation, promotion, or permanent role assignment.

## Recommended next iteration

1. Pilot with 12 to 20 teammates.
2. Capture perceived fit, difficult pairings, and completion time.
3. Revise wording and weights based on response patterns.
4. Add an optional team code and team-composition dashboard only after the individual result feels trustworthy.
