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
    photoUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGoNkJtGxq25Q/profile-displayphoto-shrink_200_200/B4DZc9NIBxGYAY-/0/1749078540864?e=1773878400&v=beta&t=-4iZyd8eSn5odekhaiCtfljBa8NbIASZipIQ-XQKReE',
    about: 'Atuo como analista de dados há 3 anos com foco na área de crédito e políticas de crédito. Possuo forte experiência em construção de dashboards estratégicos, tratamento de bases complexas e análise exploratória de dados (EDA). Atualmente, estou expandindo meus conhecimentos em Ciência de Dados e Machine Learning para aplicar modelos preditivos em áreas de negócio como crédito, cobrança e marketing.',
    experiences: [
      {
        company: 'Mobilize Financial Services',
        period: 'Abr/2025 - Atualmente',
        role: 'Analista de Crédito Pleno - Terceirizado',
        description: '- Condução de estudos que identificaram novas oportunidades e otimizaram a política de crédito;\n' +
            '- Manutenção da política de crédito PF e PJ no motor de crédito da Neurotech, com foco em manutenções evolutivas e corretivas;\n' +
            '- Implementação da biometria facial no processo de formalização\n' +
            '- Criação dos procedimentos de aceitação;\n' +
            '- Criação e manutenção de relatórios de monitoramento da esteira de crédito e indicadores de inadimplência de safra, utilizando Microsoft Fabric, SAS EG e Python.',
        tech: ['Python', 'SAS EG', 'SQL', 'Power BI', 'SAS Miner','Excel']
      },
      {
        company: 'Mobilize Financial Services',
        period: 'Nov/2023 - Abr/2025',
        role: 'Analista de Crédito Júnior - Terceirizado',
        description: 'Iniciei como analista de crédito nas marcas Renault On Demand, Nissan Move e Toot. Posteriormente, atuei com inteligência de crédito, criando o indicador "time to yes", realizando manutenção de bases no SAS EG e homologando políticas no motor de crédito da Neurotech. Desenvolvi dashboards diários e mensais em Power BI para tomada de decisão da mesa de crédito.',
        tech: ['Python', 'SAS EG', 'SQL', 'Power BI', 'Figma','Excel']
      },
      {
        company: 'Mobilize Financial Services',
        period: 'Jan/2023 - Abril/2025',
        role: 'Estariário de Pós-Vendas',
        description: 'Responsável pelo desenvolvimento e manutenção de políticas de crédito. Criação de Dashboards executivos para monitoramento de carteira e safra. Automação de processos de ETL e geração de insights para mitigação de riscos.',
        tech: ['Power BI', 'Excel']
      },   
      {
        company: 'JR Consultoria UFPR',
        period: 'Dez/2021 - Dez/2022',
        role: 'Gerente de Projetos',
        description: 'Suporte na estruturação de dados e relatórios gerenciais.',
        tech: ['Excel', 'VBA', 'SQL']
      },
      {
        company: 'JR Consultoria UFPR',
        period: 'Jun/2021 - Dez/2021',
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
      { name: 'Power BI Data Analyst Associate', issuer: 'Microsoft', year: '2022' },
      { name: 'Credit Risk Modeling using SAS', issuer: 'Udemy', year: '2024'},
      { name: 'Especialista em Microsoft Power BI', issuer: 'Linkedin', year: '2024'}
    ],
    skills: [
      {
        category: 'Plataformas',
        items: ['Databricks', 'Power BI Service', 'Figma', 'Fabric', 'Lucidchart']
      },
      {
        category: 'Linguagens & Tech',
        items: ['Python (Pandas, Numpy, Seaborn)', 'SQL', 'SAS EG', 'DAX']
      },
      {
        category: 'Negócios',
        items: ['Políticas de Crédito', 'Análise de Risco', 'KPIs Financeiros', 'Criação de Procedimento Operacional']
      }
    ],
    languages: ['Português (Nativo)', 'Inglês (Intermediário)']
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
    name: 'Pedro Bento',
    role: 'Data Analyst',
    email: 'pedro.hbs@yahoo.com',
    phone: '+55 (41) 99106-9022',
    location: 'Curitiba - Brazil',
    linkedin: 'https://www.linkedin.com/in/pedrohbs0/',
    github: 'https://github.com/pedrobento-dt',
    photoUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGoNkJtGxq25Q/profile-displayphoto-shrink_200_200/B4DZc9NIBxGYAY-/0/1749078540864?e=1773878400&v=beta&t=-4iZyd8eSn5odekhaiCtfljBa8NbIASZipIQ-XQKReE',
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
        institution: 'Pontifícia Universidade Católica do Paraná',
        degree: 'Systems Development',
        period: '2024 - 2026'
      }
    ],
    certifications: [
      { name: 'Google Data Analytics', issuer: 'Coursera', year: '2023' },
      { name: 'Power BI Data Analyst Associate', issuer: 'Microsoft', year: '2022' },
      { name: 'Credit Risk Modeling using SAS', issuer: 'Udemy', year: '2024'},
      { name: 'Power Bi Specialist', issuer: 'Linkedin', year: '2024'}
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
    languages: ['Portuguese (Native)', 'English (Intermediate)']
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