import { supabase } from "../client";

export const getAllProducts = async () => {
  let { data: commerces, error } = await supabase
    .from('commerces')
    .select('*')
  return commerces
}

// export const getProductByName = async (value) => {
//   let { data: commerces, error } = await supabase
//     .from('commerces')
//     .select('*')
//     .ilike('commerce_name', value)

//   console.log(commerces)

//   return commerces
// }