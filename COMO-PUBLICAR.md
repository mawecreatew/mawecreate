# Site novo da MaweCreate: como publicar

## 1. Subir no GitHub (repositório mawecreate)

1. Abra o repositório **mawecreatew/mawecreate** no GitHub.
2. Clique em **Add file > Upload files**.
3. Arraste **todo o conteúdo** desta pasta (os arquivos .html, a pasta `assets`, `robots.txt`, `sitemap.xml`, `llms.txt` e `site.webmanifest`).
   Quando o GitHub perguntar, deixe substituir o `index.html` antigo.
4. Escreva uma mensagem como "Site novo" e clique em **Commit changes**.
5. A Vercel publica sozinha em 1 ou 2 minutos em mawecreate.com.br.

Os arquivos `COMO-PUBLICAR.md` e `supabase-leads.sql` podem ir junto, não atrapalham o site.

## 2. Salvar os contatos do simulador (Supabase)

Importante: se o Mawe OS usa um projeto do Supabase com regras de acesso abertas, **crie um projeto novo e gratuito só para o site**. A chave do site fica visível no código, então ela não pode dar acesso aos dados do sistema.

1. No Supabase, abra o projeto do site > **SQL Editor > New query**.
2. Cole o conteúdo do arquivo `supabase-leads.sql` e clique em **Run**.
3. Vá em **Project Settings > API** e copie a **Project URL** e a chave **anon public**.
4. No GitHub, abra `assets/leads.js`, clique no lápis para editar e cole os dois valores entre as aspas:
   - `url: 'https://SEU-PROJETO.supabase.co'`
   - `anonKey: 'SUA-CHAVE-ANON'`
5. Salve (Commit). Pronto: cada pessoa que preencher a primeira etapa do simulador aparece em **Table Editor > leads_site**.

Cada pessoa pode gerar até duas linhas: `contato` (preencheu o início) e `concluido` (chegou ao valor). Quem só tem a linha `contato` desistiu no meio: é um ótimo contato para chamar.

## 3. Google e IAs

1. **Google Search Console** (search.google.com/search-console): adicione o domínio mawecreate.com.br, confirme pelo Registro.br e envie o sitemap: `https://mawecreate.com.br/sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): dá para importar direto do Search Console.
3. No **Perfil da Empresa no Google** da MaweCreate, coloque o link do site.

## 4. Clarity

O Microsoft Clarity (projeto zicl33ctrn) já está instalado e só carrega quando o visitante aceita os cookies.

## Páginas do site

- `index.html`: página inicial
- `criacao-de-sites.html`, `google-meu-negocio.html`, `social-media.html`, `sistemas-personalizados.html`: serviços
- `projetos.html`, `sobre.html`, `blog.html` e os 3 artigos `blog-*.html`
- `orcamento.html`: simulador
- `links.html`: página para a bio do Instagram (use **mawecreate.com.br/links.html** na bio)
- `privacidade.html`: política de privacidade
- `404.html`: página de erro

## Para mudar preços do simulador

Abra `orcamento.html`, procure por `const PRICE=` e troque os valores.
