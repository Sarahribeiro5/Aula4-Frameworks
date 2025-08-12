import styles from './page.module.css';

export default function FrameworksSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Frameworks</h1>

      <div className={styles.card}>
        <h2>Pontos Fortes</h2>
        <p>Frameworks oferecem uma estrutura organizada que facilita a manutenção e a colaboração entre desenvolvedores. Com componentes reutilizáveis, economizam tempo e reduzem a necessidade de reescrita de código. Além disso, muitos incluem recursos de segurança integrados e contam com comunidades ativas que fornecem suporte. Sua arquitetura pré-definida acelera o desenvolvimento e permite que aplicações cresçam de forma escalável, facilitando a adição de novas funcionalidades.</p>
      </div>

      <div className={styles.card}>
        <h2>Novidades em relação às versões anteriores</h2>
        <ul>
          <li>Melhorias de Performance</li>
          <li>Novos Recursos de Segurança</li>
          <li>API Simplificada</li>
          <li>Suporte a Novas Tecnologias</li>
          <li>Componentes Reutilizáveis</li>
          <li>Documentação Aprimorada</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Considerações importantes</h2>
        <ul>
          <li><strong>Teste Completo</strong> Realize testes abrangentes antes de atualizar para assegurar que tudo funcione corretamente.</li>
          <li><strong>Verificação de Dependências:</strong> Confirme a compatibilidade das bibliotecas e dependências com a nova versão.</li>
          <li><strong>Avaliação de Novidades:</strong> Verifique se as novas funcionalidades atendem às necessidades do projeto antes de implementar.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Curiosidades</h2>
        <ul>
          <li>Evolução Contínua</li>
          <li>Integração Facilitada</li>
          <li>Acessibilidade</li>
          <li>Ferramentas de Desenvolvimento</li>
          <li>Modularidade Aprimorada</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Empresas usuárias</h2>
        <ul>
          <li>Netflix</li>
          <li>Microsoft</li>
          <li>Binance</li>
          <li>BlackRock</li>
          <li>Facebook</li>
          <li>Tencent</li>
          <li>Atlassian</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Áreas de atuação e oportunidades</h2>
        <ul>
          <li>Educação Digital</li>
          <li>IoT (Internet das Coisas)</li>
          <li>Inteligência Artificial e Machine Learning</li>
          <li>Mobile Development</li>
          <li>Desenvolvimento Web</li>
          <li>E-commerce</li>
        </ul>
      </div>
    </section>
  );
}