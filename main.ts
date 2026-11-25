// u-carbon-forge-snooze-button-roast-14cbafc6: one roast line, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const roast = "You have the entire weekend yet you still schedule a twelve-step interrogation for two seconds of my eyelids.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const filePath = join(outputDir, 'entry.txt');

writeFileSync(filePath, roast, 'utf-8');
