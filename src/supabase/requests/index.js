import { supabase } from "../client";

export const getAllProducts = async () => {
  let { data: commerces, error } = await supabase.from('commerces').select('*')
  return commerces
}