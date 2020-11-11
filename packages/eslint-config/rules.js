module.exports = {
  rules: {
    // Possible Errors http://eslint.org/docs/rules/#possible-errors
    'no-cond-assign': [2, 'always'], // http://eslint.org/docs/rules/no-cond-assign
    'no-console': 1,
    'no-constant-condition': 2, // http://eslint.org/docs/rules/no-constant-condition
    'no-control-regex': 2, // http://eslint.org/docs/rules/no-control-regex
    'no-debugger': 2, // http://eslint.org/docs/rules/no-debugger
    'no-dupe-args': 2, // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-keys': 2, // http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 2, // http://eslint.org/docs/rules/no-duplicate-case
    'no-empty-character-class': 2, // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty': 2, // http://eslint.org/docs/rules/no-empty
    'no-ex-assign': 2, // http://eslint.org/docs/rules/no-ex-assign
    'no-extra-boolean-cast': 2, // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-parens': [2, 'functions'], // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-semi': 2, // http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 2, // http://eslint.org/docs/rules/no-func-assign
    'no-inner-declarations': 2, // http://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 2, // http://eslint.org/docs/rules/no-invalid-regexp
    'no-irregular-whitespace': 2, // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 2, // http://eslint.org/docs/rules/no-obj-calls
    'no-regex-spaces': 2, // http://eslint.org/docs/rules/no-regex-spaces
    'no-sparse-arrays': 2, // http://eslint.org/docs/rules/no-sparse-arrays
    'no-unexpected-multiline': 2, // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-negated-in-lhs': 2, // http://eslint.org/docs/rules/no-unsafe-negation
    'use-isnan': 2, // http://eslint.org/docs/rules/use-isnan
    'valid-jsdoc': 2, // http://eslint.org/docs/rules/valid-jsdoc
    'valid-typeof': 2, // http://eslint.org/docs/rules/valid-typeof

    // Best Practices http://eslint.org/docs/rules/#best-practices
    'accessor-pairs': [2, { setWithoutGet: true }], // http://eslint.org/docs/rules/accessor-pairs
    'block-scoped-var': 2, // http://eslint.org/docs/rules/block-scoped-var
    complexity: [2, 10], // http://eslint.org/docs/rules/complexity
    'consistent-return': 2, // http://eslint.org/docs/rules/consistent-return
    curly: 2, // http://eslint.org/docs/rules/curly
    'default-case': 2, // http://eslint.org/docs/rules/default-case
    'dot-location': [2, 'property'], // http://eslint.org/docs/rules/dot-location
    'dot-notation': 2, // http://eslint.org/docs/rules/dot-notation
    eqeqeq: [2, 'smart'], // http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 2, // http://eslint.org/docs/rules/guard-for-in
    'no-alert': 2, // http://eslint.org/docs/rules/no-alert
    'no-caller': 2, // http://eslint.org/docs/rules/no-caller
    'no-div-regex': 2, // http://eslint.org/docs/rules/no-div-regex
    'no-else-return': 2, // http://eslint.org/docs/rules/no-else-return
    'no-eq-null': 2, // http://eslint.org/docs/rules/no-eq-null
    'no-eval': 2, // http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2, // http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2, // http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2, // http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2, // http://eslint.org/docs/rules/no-floating-decimal
    'no-implicit-coercion': 0, // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implied-eval': 2, // http://eslint.org/docs/rules/no-implied-eval
    'no-invalid-this': 2, // http://eslint.org/docs/rules/no-invalid-this
    'no-iterator': 2, // http://eslint.org/docs/rules/no-iterator
    'no-labels': 2, // http://eslint.org/docs/rules/no-labels
    'no-lone-blocks': 2, // http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2, // http://eslint.org/docs/rules/no-loop-func
    'no-multi-spaces': 2, // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-str': 2, // http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2, // http://eslint.org/docs/rules/no-native-reassign
    'no-new': 2, // http://eslint.org/docs/rules/no-new
    'no-new-func': 2, // http://eslint.org/docs/rules/no-new-func
    'no-new-wrappers': 2, // http://eslint.org/docs/rules/no-new-wrappers
    'no-octal': 2, // http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2, // http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': [2, { props: false }], // http://eslint.org/docs/rules/no-param-reassign
    'no-proto': 2, // http://eslint.org/docs/rules/no-proto
    'no-redeclare': 2, // http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 2, // http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2, // http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2, // http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2, // http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2, // http://eslint.org/docs/rules/no-throw-literal
    'no-unused-expressions': 2, // http://eslint.org/docs/rules/no-unused-expressions
    'no-useless-call': 2, // http://eslint.org/docs/rules/no-useless-call
    'no-useless-concat': 2, // http://eslint.org/docs/rules/no-useless-concat
    'no-void': 2, // http://eslint.org/docs/rules/no-void
    'no-warning-comments': [
      1,
      { terms: ['todo', 'fixme', 'xxx'], location: 'start' },
    ], // http://eslint.org/docs/rules/no-warning-comments
    'no-with': 2, // http://eslint.org/docs/rules/no-with
    radix: 2, // http://eslint.org/docs/rules/radix
    'vars-on-top': 2, // http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': 2, // http://eslint.org/docs/rules/wrap-iife
    yoda: 2, // http://eslint.org/docs/rules/yoda

    // Strict Mode http://eslint.org/docs/rules/#strict-mode
    strict: [2, 'function'], // http://eslint.org/docs/rules/strict

    // Variables http://eslint.org/docs/rules/#variables
    'init-declarations': [0, 'always'], // http://eslint.org/docs/rules/init-declarations
    'no-catch-shadow': 2, // http://eslint.org/docs/rules/no-catch-shadow
    'no-delete-var': 2, // http://eslint.org/docs/rules/no-delete-var
    'no-label-var': 2, // http://eslint.org/docs/rules/no-label-var
    'no-shadow': 2, // http://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 2, // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-undef': 2, // http://eslint.org/docs/rules/no-undef
    'no-undef-init': 2, // http://eslint.org/docs/rules/no-undef-init
    'no-undefined': 2, // http://eslint.org/docs/rules/no-undefined
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], // http://eslint.org/docs/rules/no-unused-vars
    'no-use-before-define': [2, { functions: false }], // http://eslint.org/docs/rules/no-use-before-define

    // Node.js and CommonJS http://eslint.org/docs/rules/#nodejs-and-commonjs
    'callback-return': 2, // http://eslint.org/docs/rules/callback-return
    'handle-callback-err': 0, // http://eslint.org/docs/rules/handle-callback-err
    'no-mixed-requires': [1, true], // http://eslint.org/docs/rules/no-mixed-requires
    'no-new-require': 2, // http://eslint.org/docs/rules/no-new-require
    'no-path-concat': 2, // http://eslint.org/docs/rules/no-path-concat
    'no-process-env': 2, // http://eslint.org/docs/rules/no-process-env
    'no-restricted-modules': [
      2,
      'assert',
      'buffer',
      'child_process',
      'cluster',
      'crypto',
      'dgram',
      'dns',
      'domain',
      'events',
      'freelist',
      'fs',
      'http',
      'https',
      'module',
      'net',
      'os',
      'path',
      'punycode',
      'querystring',
      'readline',
      'repl',
      'smalloc',
      'stream',
      'string_decoder',
      'sys',
      'timers',
      'tls',
      'tracing',
      'tty',
      'url',
      'util',
      'vm',
      'zlib',
    ], // http://eslint.org/docs/rules/no-restricted-modules
    'no-sync': 2, // http://eslint.org/docs/rules/no-sync

    // Stylistic Issues http://eslint.org/docs/rules/#stylistic-issues
    'array-bracket-spacing': [2, 'never'], // http://eslint.org/docs/rules/array-bracket-spacing
    'block-spacing': [2, 'always'], // http://eslint.org/docs/rules/block-spacing
    'brace-style': [2, '1tbs'], // http://eslint.org/docs/rules/brace-style
    camelcase: [2, { properties: 'always' }], // http://eslint.org/docs/rules/camelcase
    'comma-dangle': [2, 'never'], // http://eslint.org/docs/rules/comma-dangle
    'comma-spacing': [2, { before: false, after: true }], // http://eslint.org/docs/rules/comma-spacing
    'comma-style': [2, 'last'], // http://eslint.org/docs/rules/comma-style
    'computed-property-spacing': [2, 'never'], // http://eslint.org/docs/rules/computed-property-spacing
    'consistent-this': [2, 'self'], // http://eslint.org/docs/rules/consistent-this
    'eol-last': 2, // http://eslint.org/docs/rules/eol-last
    'func-names': 0, // http://eslint.org/docs/rules/func-names
    'func-style': 0, // http://eslint.org/docs/rules/func-style
    'id-length': [
      2,
      { min: 1, max: 100, properties: 'always', exceptions: [] },
    ], // http://eslint.org/docs/rules/id-length
    'id-match': 0, // http://eslint.org/docs/rules/id-match
    indent: [2, 2], // http://eslint.org/docs/rules/indent
    'key-spacing': [2, { beforeColon: false, afterColon: true }], // http://eslint.org/docs/rules/key-spacing
    'keyword-spacing': [2, { before: true, after: true }], // http://eslint.org/docs/rules/keyword-spacing
    'linebreak-style': [2, 'unix'], // http://eslint.org/docs/rules/linebreak-style
    'lines-around-comment': [2, { beforeBlockComment: true }], // http://eslint.org/docs/rules/lines-around-comment
    'max-depth': [2, 4], // http://eslint.org/docs/rules/max-depth
    'max-nested-callbacks': [2, 3], // http://eslint.org/docs/rules/max-nested-callbacks
    'new-cap': 0, // http://eslint.org/docs/rules/new-cap
    'new-parens': 2, // http://eslint.org/docs/rules/new-parens
    'newline-after-var': [0, 'always'], // http://eslint.org/docs/rules/newline-after-var
    'no-array-constructor': 2, // http://eslint.org/docs/rules/no-array-constructor
    'no-continue': 2, // http://eslint.org/docs/rules/no-continue
    'no-inline-comments': 0, // http://eslint.org/docs/rules/no-inline-comments
    'no-lonely-if': 2, // http://eslint.org/docs/rules/no-lonely-if
    'no-mixed-spaces-and-tabs': 2, // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-multiple-empty-lines': [2, { max: 2 }], // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-nested-ternary': 2, // http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2, // http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2, // http://eslint.org/docs/rules/no-spaced-func
    'no-ternary': 0, // http://eslint.org/docs/rules/no-ternary
    'no-trailing-spaces': 2, // http://eslint.org/docs/rules/no-trailing-spaces
    'no-underscore-dangle': 0, // http://eslint.org/docs/rules/no-underscore-dangle
    'no-unneeded-ternary': 2, // http://eslint.org/docs/rules/no-unneeded-ternary
    'object-curly-spacing': [0, 'never'], // http://eslint.org/docs/rules/object-curly-spacing
    'one-var': 0, // http://eslint.org/docs/rules/one-var
    'operator-assignment': [2, 'always'], // http://eslint.org/docs/rules/operator-assignment
    'operator-linebreak': 2, // http://eslint.org/docs/rules/operator-linebreak
    'padded-blocks': [2, 'never'], // http://eslint.org/docs/rules/padded-blocks
    'quote-props': [2, 'as-needed'], // http://eslint.org/docs/rules/quote-props
    quotes: [2, 'single', 'avoid-escape'], // http://eslint.org/docs/rules/quotes
    'semi-spacing': [2, { before: false, after: true }], // http://eslint.org/docs/rules/semi-spacing
    semi: [2, 'always'], // http://eslint.org/docs/rules/semi
    'sort-vars': 0, // http://eslint.org/docs/rules/sort-vars
    'space-before-blocks': [2, 'always'], // http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }], // http://eslint.org/docs/rules/space-before-function-paren
    'space-in-parens': [2, 'never'], // http://eslint.org/docs/rules/space-in-parens
    'space-infix-ops': 2, // http://eslint.org/docs/rules/space-infix-ops
    'space-unary-ops': 2, // http://eslint.org/docs/rules/space-unary-ops
    'spaced-comment': [2, 'always'], // http://eslint.org/docs/rules/spaced-comment
    'wrap-regex': 2, // http://eslint.org/docs/rules/wrap-regex

    // ECMAScript 6 http://eslint.org/docs/rules/#ecmascript-6
    'arrow-body-style': [2, 'as-needed'], // http://eslint.org/docs/rules/arrow-body-style
    'arrow-parens': [2, 'always'], // http://eslint.org/docs/rules/arrow-parens
    'arrow-spacing': [2, { before: true, after: true }], // http://eslint.org/docs/rules/arrow-spacing
    'constructor-super': 2, // http://eslint.org/docs/rules/constructor-super
    'generator-star-spacing': [2, { before: false, after: true }], // http://eslint.org/docs/rules/generator-star-spacing
    'no-confusing-arrow': 2, // http://eslint.org/docs/rules/no-confusing-arrow
    'no-class-assign': 2, // http://eslint.org/docs/rules/no-class-assign
    'no-const-assign': 2, // http://eslint.org/docs/rules/no-const-assign
    'no-dupe-class-members': 2, // http://eslint.org/docs/rules/no-dupe-class-members
    'no-this-before-super': 2, // http://eslint.org/docs/rules/no-this-before-super
    'no-var': 0, // http://eslint.org/docs/rules/no-var
    'object-shorthand': 0, // http://eslint.org/docs/rules/object-shorthand
    'prefer-arrow-callback': 2, // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-const': 0, // http://eslint.org/docs/rules/prefer-const
    'prefer-reflect': 2, // http://eslint.org/docs/rules/prefer-reflect
    'prefer-spread': 2, // http://eslint.org/docs/rules/prefer-spread
    'prefer-template': 2, // http://eslint.org/docs/rules/prefer-template
    'require-yield': 2, // http://eslint.org/docs/rules/require-yield
  },
};
