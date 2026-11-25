-- MaweCreate: tabela que guarda os contatos do simulador de orçamento do site.
-- Como usar: Supabase > SQL Editor > New query > cole tudo > Run.

create table if not exists public.leads_site (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  sessao text,              -- liga as duas linhas da mesma pessoa
  etapa text,               -- 'contato' (preencheu o início) ou 'concluido' (viu o orçamento)
  nome text,
  whatsapp text,
  instagram text,
  email text,
  empresa text,
  servicos text,
  respostas jsonb,
  estimativa_unica numeric,
  estimativa_mensal numeric,
  pagina text
);

-- Segurança: o site só consegue INSERIR. Ninguém de fora consegue ler os contatos.
alter table public.leads_site enable row level security;

drop policy if exists "site pode inserir" on public.leads_site;
create policy "site pode inserir" on public.leads_site
  for insert to anon
  with check (true);

-- Não crie nenhuma política de leitura (select) para "anon".
-- Vocês veem os contatos logado no painel do Supabase (Table Editor > leads_site).
