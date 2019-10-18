# Katas in JavaScript

## Getting started 

To start a new kata, simply run the following script. This will create a new folder with `<name-of-kata>` with three files - `<name-of-kata>.js`, `<name-of-kata>.test.js` and `README.md`.

```
npm run kata -- <name-of-kata>
```

## Security 

Periodically run checks for security vulnerabilities and to see if packages are updated.

To check for issues

```
npm audit
```

To fix audit issues

```
npm audit fix
```

To check which packages are outdated

```
npm outdated
```

To update a specific package

```
npm update <package>
```

To update all packages

```
npm update
```
