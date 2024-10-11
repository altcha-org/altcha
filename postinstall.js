import fs from 'node:fs';
import { execSync } from 'node:child_process';

const srcDir = 'node_modules/@ovx/svelte';
const destDir = 'node_modules/svelte';

if (fs.existsSync(srcDir)) {
  execSync(`rm -rf ${destDir}`);
  execSync(`cp -R ${srcDir} ${destDir}`);
}