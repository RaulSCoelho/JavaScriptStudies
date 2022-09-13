# My Extensions

![dracula](https://user-images.githubusercontent.com/84609153/189964168-40c3162d-cd6d-4bf3-9d48-b1504c1c26ad.png)
![icontheme](https://user-images.githubusercontent.com/84609153/189963520-733f8a8c-d6c4-46e5-88f3-e3a6b3ea8cc6.png)
![prettier](https://user-images.githubusercontent.com/84609153/189963394-90750dca-c511-4471-9274-816ff776385d.png)
![autorenametag](https://user-images.githubusercontent.com/84609153/189962925-43277043-19d4-432c-ad98-db01860ae6cb.png)
![colorhighlight](https://user-images.githubusercontent.com/84609153/189963146-4377afd5-7a38-4b9c-9fec-7908904b5310.png)
![csspeak](https://user-images.githubusercontent.com/84609153/189963245-eb9667eb-2f15-426e-94e9-09ca6641f11e.png)
![styledcomponents](https://user-images.githubusercontent.com/84609153/189963595-a789f6f8-1921-4b68-8b91-ef019af21c85.png)
![editorconfig](https://user-images.githubusercontent.com/84609153/189964123-69fbc400-f060-4558-8003-2d0958477504.png)
![eslint](https://user-images.githubusercontent.com/84609153/189964013-3d486abd-a4bc-4a2a-a4c5-35f97feab504.png)
![gitlens](https://user-images.githubusercontent.com/84609153/189963973-a1c2d41f-bfa6-41c3-86b8-b0a2895af417.png)
![es7](https://user-images.githubusercontent.com/84609153/189964074-b7e2cfbb-c042-4be3-9944-01d6ea486d5a.png)
![dotenv](https://user-images.githubusercontent.com/84609153/189964216-1a3a19c2-ecb6-43ba-9046-9b123fea6012.png)
![markdown](https://user-images.githubusercontent.com/84609153/189963446-f75032e4-7157-4f89-93af-a0d52b2677f8.png)
![liveshare](https://user-images.githubusercontent.com/84609153/189963707-796f999f-4e76-48c5-8690-8014c1781e0e.png)
![liveserver](https://user-images.githubusercontent.com/84609153/189963742-c035ecce-b17d-461c-8c26-dc306ae725d3.png)

# My .editorconfig
```
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

# My .eslintrc.json
```
{
  "extends": "@rocketseat/eslint-config/react",
  "plugins": ["import-helpers"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "arrowParens": "avoid",
        "semi": false,
        "endOfLine": "auto"
      }
    ],
    "react/jsx-no-useless-fragment": "warn",
    "func-names": "warn",
    "no-param-reassign": "warn",
    "no-unused-vars": "warn",
    "prefer-const": "warn",
    "no-restricted-syntax": "warn",
    "object-shorthand": "warn",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-curly-newline": "off",
    "default-param-last": "off",
    "no-use-before-define": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "comma-dangle": "off",
    "react/button-has-type": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always", // new line between groups
        "groups": ["/^react/", "module", ["parent", "sibling", "index"]],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  }
}

```

# My VSCode User Settings JSON
```
{
  "emmet.syntaxProfiles": {
    "javascript": "jsx"
  },
  "workbench.startupEditor": "newUntitledFile",
  "editor.fontSize": 14,
  "javascript.suggest.autoImports": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.rulers": [120, 120],
  "extensions.ignoreRecommendations": true,
  "typescript.tsserver.log": "off",
  "files.associations": {
    ".sequelizerc": "javascript",
    ".stylelintrc": "json",
    "*.tsx": "typescriptreact",
    ".env.*": "dotenv",
    ".prettierrc": "json",
    "*.jsx": "javascriptreact"
  },
  "screencastMode.onlyKeyboardShortcuts": true,
  "editor.parameterHints.enabled": false,
  "editor.renderLineHighlight": "gutter",
  "editor.lineHeight": 26,
  "material-icon-theme.languages.associations": {
    "dotenv": "tune"
  },
  "typescript.updateImportsOnFileMove.enabled": "never",
  "workbench.colorTheme": "Dracula",
  "material-icon-theme.files.associations": {
    "tsconfig.json": "tune",
    "*.webpack.js": "webpack",
    "*.proto": "3d",
    "ormconfig.json": "database"
  },
  "material-icon-theme.activeIconPack": "nest",
  "editor.suggestSelection": "first",
  "explorer.confirmDelete": false,
  "gitlens.codeLens.recentChange.enabled": false,
  "terminal.integrated.showExitAlert": false,

  "[prisma]": {
    "editor.formatOnSave": true
  },

  "typescript.suggest.autoImports": true,
  "terminal.integrated.env.osx": {
    "FIG_NEW_SESSION": "1"
  },
  "workbench.editor.labelFormat": "short",
  "editor.fontLigatures": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "liveshare.featureSet": "insiders",
  "material-icon-theme.folders.associations": {
    "adapters": "contract",
    "grpc": "pipe",
    "kube": "kubernetes",
    "main": "lib",
    "websockets": "pipe",
    "implementations": "core",
    "protos": "pipe",
    "entities": "class",
    "kafka": "pipe",
    "use-cases": "functions",
    "migrations": "tools",
    "schemas": "class",
    "useCases": "functions",
    "eslint-config": "tools",
    "typeorm": "database",
    "_shared": "shared",
    "mappers": "meta",
    "fakes": "mock",
    "modules": "components",
    "subscribers": "messages",
    "domain": "class",
    "protocols": "contract",
    "infra": "app",
    "view-models": "views",
    "presentation": "template",
    "dtos": "typescript",
    "http": "container",
    "providers": "include",
    "factories": "class",
    "repositories": "mappings"
  },
  "editor.acceptSuggestionOnCommitCharacter": false,
  "explorer.compactFolders": false,
  "git.enableSmartCommit": true,
  "editor.accessibilitySupport": "off",
  "explorer.confirmDragAndDrop": false,
  "terminal.integrated.fontSize": 14,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "breadcrumbs.enabled": true,
  "editor.fontFamily": "Fira Code",
  "gitlens.codeLens.authors.enabled": false,
  "editor.tabSize": 2,
  "security.workspace.trust.untrustedFiles": "open",
  "files.exclude": {
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.hg": true,
    "**/.svn": true,
    "**/.git": true
  },
  "gitlens.codeLens.enabled": false,
  "workbench.iconTheme": "material-icon-theme",
  "git.confirmSync": false,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true
}

```
