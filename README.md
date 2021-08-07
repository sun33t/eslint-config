# ESLint Configurations

This package contains eslint configurations which I tend to re-use across projects. Each is an extension of existing configurations and plugins which are listed below.

## Installation

Install the package by issuing:

```bash
  npm install @sun33t/eslint-config --save-dev

  // or

  yarn add -D @sun33t/eslint-config
```

## Peer Dependencies

In accordance with ESLint documentation, the elsint plugins which this package consumes are registered as peer-dependencies, and as such, they will need to be installed in addition to the package.
Currently those peerDeps are the following:

```json
 "peerDependencies": {
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-jsx-a11y": "6.4.1",
    "eslint-plugin-react": "7.21.5",
    "eslint-plugin-react-hooks": "4"
  },
```

## Usage/Examples

Within your eslintrc file, add this package as the last item in your extends array:

```json
{
  "extends": ["existing configs...", "@sun33t"]
}
```

There's currently only one configuration available and it's the default, as such you don't
need to specify the package's full name in the extends array.

## Authors

- [@sun33t](https://www.github.com/sun33t)

## Feedback

If you have any feedback, please reach out to us at hello@suneet.codes

## Acknowledgements

- [ESLint Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
