import styles from './page.module.css';

export default function BibliotecasSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Bibliotecas</h1>

      <div className={styles.card}>
        <h2>Pontos Fortes</h2>
        <p>As bibliotecas oferecem facilidade de uso e aprendizado, permitindo que iniciantes criem sites responsivos rapidamente. Elas garantem responsividade através de layouts adaptáveis a diferentes dispositivos. Com uma vasta gama de componentes pré-estilizados, economizam tempo de desenvolvimento. Sua documentação detalhada facilita a compreensão e o uso. Além disso, a reutilização de código acelera o processo, enquanto a compatibilidade entre navegadores assegura uma experiência consistente para os usuários.</p>
      </div>

      <div className={styles.card}>
        <h2>Novidades em relação às versões anteriores</h2>
        <ul>
          <li>Componentes Melhorados</li>
          <li>Sistema de Grid Aprimorado</li>
          <li>Estilos Modernizados</li>
          <li>Integração com Ferramentas de Desenvolvimento</li>
          <li>Performance Aprimorada</li>
          <li>Documentação Atualizada</li>
          <li>Acessibilidade Melhorada</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Considerações importantes</h2>
        <ul>
          <li><strong>Verificação de Compatibilidade:</strong> Cheque a compatibilidade com dependências existentes.</li>
          <li><strong>Ajustes Necessários:</strong> Migrações podem exigir ajustes em cache e rotas.</li>
          <li><strong>Planejamento de Implementação:</strong> Elabore um plano para minimizar interrupções.</li>
          <li><strong>Verificação de Compatibilidade:</strong> Cheque a compatibilidade com dependências existentes.</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Curiosidades</h2>
        <ul>
          <li>Melhorias no Suporte a Imagens</li>
          <li>Comunidade Ativa</li>
          <li>Novos Padrões</li>
          <li>APIs Otimizadas</li>
          <li>Novos Hooks</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Empresas usuárias</h2>
        <p>Várias empresas utilizam bibliotecas como:</p>
        <ul>
          <li>Airbnb</li>
          <li>Spotify</li>
          <li>Udemy</li>
          <li>NASA</li>
          <li>GetNinjas</li>
          <li>Twitter</li>
          <li>Coursera</li>
          <li>Viacredi</li>
          <li>Duolingo</li>
          <li>Reuters</li>
          <li>Mastercard</li>
          <li>LinkedIn</li>
          <li>Lyft</li>
          <li>Snapchat</li>
          <li>Upwork</li>
        </ul>
      </div>

      <div className={styles.card}>
        <h2>Áreas de atuação e oportunidades</h2>
        <ul>
          <li>Aplicações de Dados em Tempo Real</li>
          <li>Design Responsivo</li>
          <li>Desenvolvimento de Interfaces Interativas</li>
          <li>Integração com APIs:</li>
          <li>Desenvolvimento de Componentes Reutilizáveis</li>
          <li>Automação de Tarefas</li>
        </ul>
      </div>
    </section>
  );
}