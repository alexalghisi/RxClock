# RxClock

Medication administration with a single-writer lock per dose interval. The
first caregiver to record a slot owns it; a second cannot administer the same
interval. The failure mode this prevents is double-dosing.

The lock is [`src/lib/dose.ts`](src/lib/dose.ts).

**React 19 · TypeScript (strict) · Vite 8 · Tailwind CSS 4 · Zustand · Vitest ·
Playwright**

---

## Author

### Alessandro Alghisi

Senior Software Engineer · Cluj-Napoca, Romania

**Twice a Google Software Engineering Intern** — Chrome (Kitchener / Waterloo)
and Logs (Mountain View).

|          |                                                                                         |
| -------- | --------------------------------------------------------------------------------------- |
| GitHub   | [github.com/alexalghisi](https://github.com/alexalghisi)                                |
| LinkedIn | [linkedin.com/in/alghisi](https://www.linkedin.com/in/alghisi)                          |
| Email    | [alexalghisi@gmail.com](mailto:alexalghisi@gmail.com)                                   |
| Location | Cluj-Napoca, Romania · open to remote / EU / US-friendly timezones                      |

**Hiring?** Open an issue, message me on LinkedIn, or email
[alexalghisi@gmail.com](mailto:alexalghisi@gmail.com).

---

## Getting started

Requires Node 22 or newer.

```bash
npm install
npm run dev          # http://localhost:5186
```

As Ioana, give the 08:00 dose. Switch to Alessandro. The button stays locked. Contact sits under the window.

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run e2e
npm run build
```

## License

MIT · © Alessandro Alghisi
