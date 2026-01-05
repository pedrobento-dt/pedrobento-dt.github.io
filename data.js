export const PORTUGUESE_DATA = {
  nav: {
    home: 'Início',
    resume: 'Currículo',
    projects: 'Projetos',
  },
  labels: {
    latestProjects: 'Últimos Projetos',
    contact: 'Contato',
    experience: 'Experiência Profissional',
    education: 'Educação',
    skills: 'Habilidades',
    languages: 'Idiomas',
    certifications: 'Certificados',
    techStack: 'Tecnologias & Ferramentas',
    viewProject: 'Ver Projeto',
    backToProjects: 'Voltar para Projetos',
    aboutMe: 'Sobre Mim',
    published: 'Publicado em',
    viewAll: 'Ver todos'
  },
  profile: {
    name: 'Pedro Bento',
    role: 'Analista de Dados',
    email: 'pedro.hbs@yahoo.com',
    phone: '+55 (41) 99106-9022',
    location: 'Curitiba - Brasil',
    linkedin: 'https://www.linkedin.com/in/pedrohbs0/',
    github: 'https://github.com/pedrobento-dt',
    photoUrl: 'https://picsum.photos/400/400',
    about: 'Atuo como analista de dados há 3 anos com foco na área de crédito e políticas de crédito. Possuo forte experiência em construção de dashboards estratégicos, tratamento de bases complexas e análise exploratória de dados (EDA). Atualmente, estou expandindo meus conhecimentos em Ciência de Dados e Machine Learning para aplicar modelos preditivos em áreas de negócio como crédito, cobrança e marketing.',
    experiences: [
      {
        company: 'Mobilize Financial Services',
        period: 'Abril - 2025 - Atualmente',
        role: 'Analista de Crédito Pleno - Terceirizado',
        description: 'Responsável pelo desenvolvimento e manutenção de políticas de crédito. Criação de Dashboards executivos para monitoramento de carteira e safra. Automação de processos de ETL e geração de insights para mitigação de riscos.',
        tech: ['Python', 'SAS EG', 'SQL', 'Power BI', 'Excel']
      },
      {
        company: 'Mobilize Financial Services',
        period: 'Novembro - 2023 - Abril - 2025',
        role: 'Analista de Crédito Júnior - Terceirizado',
        description: 'Suporte na estruturação de dados e relatórios gerenciais.',
        tech: ['Excel', 'VBA', 'SQL']
      },
      {
        company: 'Mobilize Financial Services',
        period: 'Janeiro - 2023 - Abril - 2025',
        role: 'Estariário de Pós-Vendas',
        description: 'Responsável pelo desenvolvimento e manutenção de políticas de crédito. Criação de Dashboards executivos para monitoramento de carteira e safra. Automação de processos de ETL e geração de insights para mitigação de riscos.',
        tech: ['Power BI', 'Excel']
      },   
      {
        company: 'JR Consultoria UFPR',
        period: 'Dezembro - 2021 - Dezembro - 2022',
        role: 'Gerente de Projetos',
        description: 'Suporte na estruturação de dados e relatórios gerenciais.',
        tech: ['Excel', 'VBA', 'SQL']
      },
      {
        company: 'JR Consultoria UFPR',
        period: 'Junho - 2021 - Dezembro - 2021',
        role: 'Consultor de Projetos',
        description: 'Responsável pelo desenvolvimento e manutenção de políticas de crédito. Criação de Dashboards executivos para monitoramento de carteira e safra. Automação de processos de ETL e geração de insights para mitigação de riscos.',
        tech: ['Power BI', 'Excel']
      },   
    ],
    education: [
      {
        institution: 'Pontifícia Universidade Católica do Paraná',
        degree: 'Análise e Desenvolvimento de Sistemas',
        period: '2024 - 2026'
      }
    ],
    certifications: [
      { name: 'Google Data Analytics', issuer: 'Coursera', year: '2023' },
      { name: 'Power BI Data Analyst Associate', issuer: 'Microsoft', year: '2022' }
    ],
    skills: [
      {
        category: 'Plataformas',
        items: ['Databricks', 'Google AI Studio', 'Power BI Service']
      },
      {
        category: 'Linguagens & Tech',
        items: ['Python (Pandas, Numpy, Seaborn)', 'SQL', 'SAS EG', 'DAX']
      },
      {
        category: 'Negócios',
        items: ['Políticas de Crédito', 'Análise de Risco', 'KPIs Financeiros']
      }
    ],
    languages: ['Português (Nativo)', 'Inglês (Avançado)']
  },
  projects: [
    {
      id: 'credit-score-model',
      title: 'Modelo de Score de Crédito',
      role: 'Data Science',
      date: 'Jan 2024',
      tech: ['Python', 'Scikit-Learn', 'Pandas'],
      description: 'Desenvolvimento de um modelo preditivo para análise de risco de crédito utilizando Random Forest.',
      fullContent: 'Neste projeto, utilizei uma base de dados pública de crédito para treinar um modelo de Random Forest capaz de prever a probabilidade de inadimplência (default). O processo envolveu extensa limpeza de dados, engenharia de atributos (feature engineering) e tuning de hiperparâmetros. O resultado foi um aumento de 15% na precisão comparado ao baseline.',
      imageUrl: 'https://picsum.photos/seed/credit/800/400',
      githubUrl: 'https://github.com/pedrohbs0',
      demoUrl: '#'
    },
    {
      id: 'dashboard-sales',
      title: 'Dashboard Executivo de Vendas',
      role: 'Análise de Dados',
      date: 'Out 2023',
      tech: ['Power BI', 'SQL', 'DAX'],
      description: 'Painel interativo para acompanhamento de KPIs de vendas e performance regional.',
      fullContent: 'Criação de um dashboard completo no Power BI conectado a um banco de dados SQL Server. O projeto permite drill-down por região, vendedor e categoria de produto, facilitando a tomada de decisão gerencial.',
      imageUrl: 'https://picsum.photos/seed/dash/800/400',
      githubUrl: 'https://github.com/pedrohbs0'
    },
    {
      id: 'etl-pipeline',
      title: 'Pipeline de Dados SAS',
      role: 'Engenharia de Dados',
      date: 'Ago 2023',
      tech: ['SAS EG', 'SQL'],
      description: 'Automação do fluxo de tratamento de dados massivos para relatórios regulatórios.',
      fullContent: 'Implementação de rotinas no SAS Enterprise Guide para processar milhões de registros mensais, garantindo a qualidade dos dados e gerando as saídas necessárias para os órgãos reguladores.',
      imageUrl: 'https://picsum.photos/seed/sas/800/400',
      githubUrl: 'https://github.com/pedrohbs0'
    }
  ]
};

export const ENGLISH_DATA = {
  nav: {
    home: 'Home',
    resume: 'Resume',
    projects: 'Projects',
  },
  labels: {
    latestProjects: 'Latest Projects',
    contact: 'Contact',
    experience: 'Professional Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    certifications: 'Certifications',
    techStack: 'Tech Stack',
    viewProject: 'View Project',
    backToProjects: 'Back to Projects',
    aboutMe: 'About Me',
    published: 'Published on',
    viewAll: 'View All'
  },
  profile: {
    name: 'Pedro',
    role: 'Data Analyst',
    email: 'your.email@example.com',
    phone: '+55 (11) 99999-9999',
    location: 'Brazil',
    linkedin: 'https://www.linkedin.com/in/pedrohbs0/',
    github: 'https://github.com/pedrohbs0',
    photoUrl: 'https://picsum.photos/400/400',
    about: 'I am 25 years old and have been working as a data analyst for 3 years, focusing on credit and credit policy areas. I have strong experience in building strategic dashboards, handling complex databases, and exploratory data analysis (EDA). I am currently expanding my knowledge in Data Science and Machine Learning to apply predictive models in business areas such as credit, collections, and marketing.',
    experiences: [
      {
        company: 'Financial Credit Company',
        period: '2021 - Present',
        role: 'Mid-level Data Analyst',
        description: 'Responsible for developing and maintaining credit policies. Creation of executive dashboards for portfolio monitoring. Automation of ETL processes and generation of insights for risk mitigation.',
        tech: ['Python', 'SAS EG', 'SQL', 'Power BI', 'Excel']
      },
      {
        company: 'Previous Experience',
        period: '2019 - 2021',
        role: 'Junior Analyst',
        description: 'Support in structuring data and management reports.',
        tech: ['Excel', 'VBA', 'SQL']
      }
    ],
    education: [
      {
        institution: 'Example University',
        degree: 'Bachelor in Business / Statistics / IT',
        period: '2017 - 2021'
      }
    ],
    certifications: [
      { name: 'Google Data Analytics', issuer: 'Coursera', year: '2023' },
      { name: 'Power BI Data Analyst Associate', issuer: 'Microsoft', year: '2022' }
    ],
    skills: [
      {
        category: 'Platforms',
        items: ['Databricks', 'Google AI Studio', 'Power BI Service']
      },
      {
        category: 'Languages & Tech',
        items: ['Python (Pandas, Numpy, Seaborn)', 'SQL', 'SAS EG', 'DAX']
      },
      {
        category: 'Business',
        items: ['Credit Policies', 'Risk Analysis', 'Financial KPIs']
      }
    ],
    languages: ['Portuguese (Native)', 'English (Advanced)']
  },
  projects: [
    {
      id: 'credit-score-model',
      title: 'Credit Score Model',
      role: 'Data Science',
      date: 'Jan 2024',
      tech: ['Python', 'Scikit-Learn', 'Pandas'],
      description: 'Development of a predictive model for credit risk analysis using Random Forest.',
      fullContent: 'In this project, I used a public credit database to train a Random Forest model capable of predicting the probability of default. The process involved extensive data cleaning, feature engineering, and hyperparameter tuning. The result was a 15% increase in accuracy compared to the baseline.',
      imageUrl: 'https://picsum.photos/seed/credit/800/400',
      githubUrl: 'https://github.com/pedrohbs0',
      demoUrl: '#'
    },
    {
      id: 'dashboard-sales',
      title: 'Executive Sales Dashboard',
      role: 'Data Analysis',
      date: 'Oct 2023',
      tech: ['Power BI', 'SQL', 'DAX'],
      description: 'Interactive dashboard for monitoring sales KPIs and regional performance.',
      fullContent: 'Creation of a complete dashboard in Power BI connected to a SQL Server database. The project allows drill-down by region, salesperson, and product category, facilitating management decision-making.',
      imageUrl: 'https://picsum.photos/seed/dash/800/400',
      githubUrl: 'https://github.com/pedrohbs0'
    },
    {
      id: 'etl-pipeline',
      title: 'SAS Data Pipeline',
      role: 'Data Engineering',
      date: 'Aug 2023',
      tech: ['SAS EG', 'SQL'],
      description: 'Automation of massive data treatment flow for regulatory reports.',
      fullContent: 'Implementation of routines in SAS Enterprise Guide to process millions of monthly records, ensuring data quality and generating the necessary outputs for regulatory bodies.',
      imageUrl: 'https://picsum.photos/seed/sas/800/400',
      githubUrl: 'https://github.com/pedrohbs0'
    }
  ]
};

export const getData = (lang) => lang === 'pt' ? PORTUGUESE_DATA : ENGLISH_DATA;
