# nine-five-one

[![npm version](https://badge.fury.io/js/nine-five-one.svg)](https://www.npmjs.com/package/nine-five-one)  
[![Build Status](https://github.com/Vuka951/nine-five-one/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Vuka951/nine-five-one/actions)

The ultimate package that handles anything and everything related to the sacred number **951**.

---

## 🛠 Features

- Check if a value is the number **951** or its equivalent in various formats.
- Supports **951** in numeric, string, and even spelled-out forms (e.g., `"Nine Five One"`).
- Multilingual support (e.g., `"devětpětjedna"` for Czech).
- Flexible options for type and language filtering.

---

## 🚀 Installation

To install the package, run:

```
npm install nine-five-one
```

---

## 📚 Usage

Here’s how to use the **nine-five-one** package:

### Basic Example

```
const { isNineFiveOne, is951 } = require('nine-five-one');

console.log(isNineFiveOne(951)); // true
console.log(isNineFiveOne("Nine Five One")); // true
console.log(isNineFiveOne("devětpětjedna", { language: "czech" })); // true
```

### Options

You can pass options to customize the behavior:

- **`type`**: Specify whether to check only `string`, `number`, or `any` (default: `any`).
- **`language`**: Specify the language to use for spellings (default: `all`).

Example:

```
console.log(isNineFiveOne(951, { type: "string" })); // false
console.log(isNineFiveOne("Nine Five One", { language: "eng" })); // true
```

### Alias

You can use the shorthand alias **is951**:

```
console.log(is951(951)); // true
```

---

## 🧪 Testing

Run the test suite to verify functionality:

```
npm run test
```

---

## 🧹 Linting and Formatting

Ensure code quality with:

```
npm run lint
npm run lint:fix
npm run format
```

---

## 🌐 Supported Languages

The following languages are supported for **951**:

- **English**: `"Nine Five One"`
- **Czech**: `"devětpětjedna"`

Contributions to expand language support are welcome!

---

## 📦 Build and Publish

To build the project:

```
npm run build
```

To publish a new version:

1. Bump the version in `package.json`.
2. Create a new Git tag (e.g., `v1.1.0`).
3. Push the tag to trigger the GitHub Actions workflow.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 🛡 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📝 Changelog

See the [Changelog](CHANGELOG.md) for details on changes and updates.

---

## ❤️ Acknowledgements

- Thanks to everyone who helped test and improve the project. (So far only ME 🥲)

---
