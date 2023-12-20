import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://wnlgbxtzvewggmiqeazv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndubGdieHR6dmV3Z2dtaXFlYXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc4OTgxMzEsImV4cCI6MjAwMzQ3NDEzMX0.hxPWmZrpAXM1uUf7TkyfFTyN1JHApe8_damF9oWGmHA')