import inquirer from 'inquirer';
import { execSync } from 'child_process';
import { questions, type AnswersType } from '@/option';
import { writeFileSync } from 'fs';
import { fetchList } from '@/app/fetchDetail';

const main = async () => {
  const data = await fetchList("24F00004");
  // jsonで保存
  writeFileSync('data.json', JSON.stringify(data, null, 2));
}

main();




// inquirer.prompt(questions).then((answers: AnswersType) => {
//   console.log(answers);
//   const {
//     year,
//     faculty,
//   } = answers;

//   const commands = `ts-node src/index.ts ${year} ${faculty}`;

//   console.log(`Running command: ${commands}`);
//   // execSync(commands, { stdio: 'inherit' });
// });
