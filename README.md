# nine-five-one

[![npm version](https://badge.fury.io/js/nine-five-one.svg)](https://www.npmjs.com/package/nine-five-one)  
[![Build Status](https://github.com/Vuka951/nine-five-one/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Vuka951/nine-five-one/actions)

The ultimate package that handles anything and everything related to the sacred number **951**.
The main goal of this package is to serve as a good example of package set up and also as a realized meme package i said i would make at work.

---

## 🛠 Features

- Check if a value is the number **951** or its equivalent in various formats.
- Retrieve the value **951** in various formats.
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
const { isNineFiveOne, getNineFiveOne } = require('nine-five-one');

// isNineFiveOne
console.log(isNineFiveOne(951)); // true
console.log(isNineFiveOne("Nine Five One")); // true

// getNineFiveOne
console.log(getNineFiveOne()); // 951
```

### Options for `isNineFiveOne` Functions

You can pass options to customize the behavior of `isNineFiveOne` and `is951`:

- **`type`**: Specify whether to check only `string`, `number`, or `any` (default: `any`).
- **`language`**: Specify the language to use for spellings (default: `all`).

Example:

```
const { isNineFiveOne } = require('nine-five-one');

console.log(isNineFiveOne(951, { type: "string" })); // false
console.log(isNineFiveOne("Nine Five One", { language: "english" })); // true
```

### Options for `getNineFiveOne` Functions

You can pass options to customize the behavior of `getNineFiveOne` and `get951`:

- **`type`**: Specify the format of the returned value (`number`, `string`, or `spelled`) (default: `number`).
- **`language`**: Specify the language to use for spellings when `type` is `spelled` (default: `english`).

Example:

```
const { getNineFiveOne } = require('nine-five-one');

console.log(getNineFiveOne({ type: 'string' })); // '951'
console.log(getNineFiveOne({ type: 'spelled', language: 'english' })); // 'ninefiveone'
```

### Alias

You can use the shorthand alias **is951** and **get951**:

```
import { is951, get951 } from 'nine-five-one';

console.log(is951(951)); // true
console.log(get951({ type: 'string' })); // '951'
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

## 📦 Build

### **To Build the Project**

Run the following command to compile the project:

```
npm run build
```

This will generate the necessary files in the `dist/` directory.

---

## 🚀 Publish

### **To Publish a New Version**

1. Run the release script:

```
npm run release
```

The script will:

- Prompt you to select the version bump type (`patch`, `minor`, or `major`).
- Prompt you to enter a changelog message for the release.
- Run linting, tests, and the build process to ensure everything is in order.
- Update the `package.json` and `package-lock.json` versions.
- Update the `CHANGELOG.md` with the provided message.
- Commit the changes and create a new Git tag (e.g., `v1.1.0`).
- Push the changes and the tag to the repository.

2. The GitHub Actions workflow will automatically publish the new version to npm.

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
