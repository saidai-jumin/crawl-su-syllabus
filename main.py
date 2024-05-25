const inquirer = require('inquirer');
const { execSync } = require('child_process');

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is your project named?',
  },
  {
    type: 'list',
    name: 'useTypeScript',
    message: 'Would you like to use TypeScript?',
    choices: ['No', 'Yes'],
  },
  {
    type: 'list',
    name: 'useESLint',
    message: 'Would you like to use ESLint?',
    choices: ['No', 'Yes'],
  },
  {
    type: 'list',
    name: 'useTailwind',
    message: 'Would you like to use Tailwind CSS?',
    choices: ['No', 'Yes'],
  },
  {
    type: 'list',
    name: 'useSrcDir',
    message: 'Would you like to use `src/` directory?',
    choices: ['No', 'Yes'],
  },
  {
    type: 'list',
    name: 'useAppRouter',
    message: 'Would you like to use App Router? (recommended)',
    choices: ['No', 'Yes'],
  },
  {
    type: 'list',
    name: 'customizeAlias',
    message: 'Would you like to customize the default import alias (@/*)?',
    choices: ['No', 'Yes'],
  },
];

inquirer.prompt(questions).then(answers => {
  const {
    projectName,
    useTypeScript,
    useESLint,
    useTailwind,
    useSrcDir,
    useAppRouter,
    customizeAlias
  } = answers;

  const commands = [
    `npx create-next-app@latest ${projectName}`,
    useTypeScript === 'Yes' ? '--typescript' : '--no-typescript',
    useESLint === 'Yes' ? '--eslint' : '--no-eslint',
    useTailwind === 'Yes' ? '--tailwind' : '--no-tailwind',
    useSrcDir === 'Yes' ? '--src-dir' : '--no-src-dir',
    useAppRouter === 'Yes' ? '--app' : '--no-app',
    customizeAlias === 'Yes' ? '--custom-alias' : '--no-custom-alias',
  ].filter(Boolean).join(' ');

  console.log(`Running command: ${commands}`);
  execSync(commands, { stdio: 'inherit' });
});
