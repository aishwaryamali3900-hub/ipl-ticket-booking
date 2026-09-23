
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://stggtdglcssipugdyogt.supabase.co";
const supabaseKey = "sb_publishable_c2N4tvL24d5i4DxN8jy_tQ_3W2sJDgU";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

