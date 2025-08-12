import styles from './page.module.css';

export default function Next15Section() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Next.js 15</h1>

      <div className={styles.card}>
        <h2>Pontos Fortes</h2>
        <p>O Next.js 15 traz diversas melhorias e novidades, com foco em performance, segurança e experiência do desenvolvedor. Destacam-se o suporte ao React Compiler experimental, melhorias no Turbopack, novas funcionalidades para ações de servidor e roteamento aprimorado.</p>
      </div>

      <div className={styles.card}>
        <h2>Novidades em relação às versões anteriores</h2>
        <ul>
          <li>Suporte ao React 19</li>
          <li>Melhorias no Turbopack</li>
          <li>Otimizações de cache</li>
          <li>Componente &lt;Form&gt; para formulários</li>
          <li>Pré-renderização parcial aprimorada</li>
          <li>Compilador React experimental</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Considerações importantes</h2>
        <ul>
          <li><strong>Teste:</strong> Testar o projeto antes de migrar.</li>
          <li><strong>Migração:</strong> Pode exigir ajustes de cache e rotas.</li>
          <li><strong>Compatibilidade:</strong> Verificar dependências.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Curiosidades</h2>
        <ul>
          <li>Turbopack é padrão no desenvolvimento</li>
          <li>Hooks novos para facilitar o desenvolvimento</li>
          <li>APIs assíncronas foram simplificadas</li>
          <li>Squosh removido em favor do Sharp no &lt;Image&gt;</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Empresas usuárias</h2>
        <p>O Next.js é utilizado por empresas como:</p>
        <ul>
          <li>Uber</li>
          <li>GitHub</li>
          <li>TikTok</li>
          <li>Twitch</li>
          <li>AT&T</li>
          <li>Nike</li>
          <li>Empresas brasileiras: Kenlo, Vital Scheffer, QuikDev, Hubla</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Áreas de atuação e oportunidades</h2>
        <ul>
          <li>Desenvolvimento Web Full-Stack</li>
          <li>SEO e Geração Estática</li>
          <li>E-commerces rápidos e responsivos</li>
          <li>Portais com conteúdo dinâmico</li>
          <li>Sistemas com autenticação</li>
          <li>Criação de APIs</li>
        </ul>
      </div>
    </section>
  );
}
