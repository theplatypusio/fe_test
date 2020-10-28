module.exports = {
  schema: [
    {
      'https://graphqlzero.almansi.me/api': {},
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.d.ts'],
  overwrite: true,
  generates: {
    './src/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './docs/graphql/graphql.schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};
