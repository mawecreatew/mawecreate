/* MaweCreate: salva os contatos do simulador no Supabase.
   Preencha as duas linhas abaixo com os dados do projeto (Supabase > Project Settings > API).
   Enquanto estiverem vazias, nada é salvo e o simulador continua funcionando normalmente. */
window.MAWE_SUPABASE = {
  url: '',      // ex.: 'https://abcdefgh.supabase.co'
  anonKey: ''   // a chave "anon public"
};
window.saveLead = function (data) {
  const c = window.MAWE_SUPABASE;
  if (!c || !c.url || !c.anonKey) return Promise.resolve(false);
  return fetch(c.url.replace(/\/$/, '') + '/rest/v1/leads_site', {
    method: 'POST',
    keepalive: true,
    headers: { 'apikey': c.anonKey, 'Authorization': 'Bearer ' + c.anonKey, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
    body: JSON.stringify(data)
  }).then(r => r.ok).catch(() => false);
};
