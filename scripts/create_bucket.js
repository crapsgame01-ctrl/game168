const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucket = process.env.SUPABASE_BUCKET || 'campaign-images';

if (!url || !serviceKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment');
  process.exit(1);
}

const supabase = createClient(url, serviceKey);

async function ensureBucket() {
  try {
    const { data: existing } = await supabase.storage.listBuckets();
    const found = existing.find(b => b.name === bucket);
    if (found) {
      console.log('Bucket already exists:', bucket);
      return;
    }
    const { data, error } = await supabase.storage.createBucket(bucket, { public: true });
    if (error) {
      console.error('Error creating bucket:', error.message);
      process.exit(1);
    }
    console.log('Bucket created:', data.name);
  } catch (err) {
    console.error('Unexpected error:', err.message);
    process.exit(1);
  }
}

ensureBucket();
