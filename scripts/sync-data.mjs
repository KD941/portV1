import fs from 'node:fs/promises';
import fsc from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

// NOTE:
// portV1/public/data is treated as *persistent user data*.
// This script is now a safe initializer: it will only copy missing files
// from the template source unless explicitly forced.
const source = path.resolve(root, '..', 'portV2', 'data');
const dest = path.resolve(root, 'public', 'data');

const FORCE = process.env.FORCE_SYNC_DATA === '1' || process.env.FORCE_SYNC_DATA === 'true';

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function copyDirMissing(src, out) {
  await fs.mkdir(out, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const ent of entries) {
    const s = path.join(src, ent.name);
    const d = path.join(out, ent.name);

    if (ent.isDirectory()) {
      await copyDirMissing(s, d);
      continue;
    }

    // If not forcing, never overwrite user-edited files.
    if (!FORCE && (await exists(d))) continue;

    // copyFile with overwrite when FORCE, otherwise create-only
    if (!FORCE) {
      await fs.copyFile(s, d, fsc.constants.COPYFILE_EXCL);
    } else {
      await fs.copyFile(s, d);
    }
  }
}

if (!(await exists(source))) {
  console.error(`[sync-data] Template source not found: ${source}`);
  process.exit(1);
}

await fs.mkdir(dest, { recursive: true });
await copyDirMissing(source, dest);

console.log(
  FORCE
    ? `[sync-data] Forced sync (overwrote files): ${source} -> ${dest}`
    : `[sync-data] Initialized missing files only: ${source} -> ${dest}`
);
