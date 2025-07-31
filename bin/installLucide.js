import {execa} from 'execa';
import prompts from 'prompts'

export const installLucide = async () => {
  const {installLucide} = await prompts({
    type: 'confirm',
    name: 'installLucide',
    message: 'Do you want to install lucide icon library?',
    initial: true,
  });

  if (!installLucide) {
    console.log('Skipping lucide icon library installation.');
    return;
  }

  await execa('npm', ['install', 'lucide-vue-next'], {stdio: 'inherit'});
  console.log('✅ tailwind-merge installed');
};
