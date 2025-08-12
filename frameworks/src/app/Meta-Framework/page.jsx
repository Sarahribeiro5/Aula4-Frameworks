import styles from './page.module.css';

export default function MetaFrameworksSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Meta-Frameworks</h1>

      <div className={styles.card}>
        <h2>Pontos Fortes</h2>
        <p>Os meta-frameworks proporcionam uma camada de abstração que otimiza o desenvolvimento de aplicações web, permitindo um processo mais ágil e focado na lógica de negócio. Entre suas vantagens estão o desenvolvimento rápido, a otimização para SEO e a melhoria na experiência do usuário. Além disso, oferecem soluções simplificadas para tarefas comuns, como roteamento e autenticação, e suportam a escalabilidade das aplicações.</p>
      </div>

      <div className={styles.card}>
        <h2>Novidades em relação às versões anteriores</h2>
        <ul>
          <li>Camada de Abstração Aprimorada</li>
          <li>Funcionalidades Avançadas</li>
          <li>Otimização de Desempenho</li>
          <li>Integração com Ferramentas Modernas</li>
          <li>Melhorias na Experiência do Desenvolvedor</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Considerações importantes</h2>
        <ul>
          <li><strong>Compatibilidade:</strong> Verifique a compatibilidade com o framework subjacente e outras ferramentas.</li>
          <li><strong>Manutenção:</strong>  Atualizações regulares são essenciais para segurança e performance.</li>
          <li><strong>Controle Limitado:</strong>  Alguns meta-frameworks podem restringir configurações específicas do servidor.</li>
          <li><strong>Curva de Aprendizado:</strong>   Pode haver um período inicial para dominar novas funcionalidades.</li>
          <li><strong>Foco em Reutilização:</strong>  É importante priorizar a reutilização de componentes para maximizar as vantagens.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Curiosidades</h2>
        <ul>
          <li>Popularidade Crescente</li>
          <li>Ecosistema Diversificado</li>
          <li>Otimização para SSR</li>
          <li>Foco em Experiência do Usuário</li>
          <li>Comunidade Ativa</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Empresas usuárias</h2>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Netflix</li>
          <li>Airbnb</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Áreas de atuação e oportunidades</h2>
        <ul>
          <li>Plataformas Educacionais</li>
          <li>Desenvolvimento de PWA</li>
          <li>E-commerce Moderno</li>
          <li>Integrações Avançadas</li>
          <li>Web Dinâmica</li>
        </ul>
      </div>
    </section>
  );
}