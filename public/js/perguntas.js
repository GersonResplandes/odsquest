const quiz = [
  {
    ods: 1,
    titulo: "Erradicação da Pobreza",
    descricao:
      "Acabar com a pobreza em todas as suas formas, em todos os lugares",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "O que significa a sigla ODS?",
          alternativas: [
            "a) Objetivos do Desenvolvimento Sustentável",
            "b) Organizações de Desenvolvimento Social",
            "c) Organização das Decisões Sociais",
            "d) Objetos de Desenvolvimento Sustentável",
          ],
          correta: 0,
          explicacao:
            "ODS significa Objetivos de Desenvolvimento Sustentável, adotados por todos os Estados-Membros da ONU em 2015.",
        },
        {
          id: 2,
          texto: "Qual é o objetivo principal da ODS 1?",
          alternativas: [
            "a) Reduzir a desigualdade de gênero",
            "b) Erradicar a pobreza em todas as suas formas",
            "c) Melhorar o sistema educacional",
            "d) Proteger os ecossistemas terrestres",
          ],
          correta: 1,
          explicacao:
            "A ODS 1 tem como principal objetivo erradicar a pobreza em todas as suas formas em todos os lugares.",
        },
        {
          id: 3,
          texto:
            "Qual é o prazo final para alcançar os Objetivos de Desenvolvimento Sustentável?",
          alternativas: ["a) 2025", "b) 2030", "c) 2050", "d) 2040"],
          correta: 1,
          explicacao:
            "Os ODS devem ser alcançados até 2030, conforme estabelecido na Agenda 2030.",
        },
        {
          id: 4,
          texto: "O que é considerado extrema pobreza pela ODS 1?",
          alternativas: [
            "a) Viver com menos de US$ 2,00 por dia",
            "b) Viver com menos de US$ 1,90 por dia",
            "c) Viver com menos de US$ 5,00 por dia",
            "d) Viver com menos de US$ 3,00 por dia",
          ],
          correta: 1,
          explicacao:
            "A linha de extrema pobreza é definida como viver com menos de US$ 1,90 por dia.",
        },
        {
          id: 5,
          texto: "Qual organização criou as ODS?",
          alternativas: ["a) OMS", "b) ONU", "c) Unesco", "d) FAO"],
          correta: 1,
          explicacao:
            "As ODS foram criadas pela Organização das Nações Unidas (ONU) em 2015.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual região do Brasil tem os maiores índices de pobreza?",
          alternativas: ["a) Sul", "b) Sudeste", "c) Norte", "d) Nordeste"],
          correta: 3,
          explicacao:
            "O Nordeste brasileiro concentra os maiores índices de pobreza do país.",
        },
        {
          id: 7,
          texto: "Qual alternativa NÃO é uma forma de erradicar a pobreza?",
          alternativas: [
            "a) Educação de qualidade",
            "b) Acesso à saúde",
            "c) Desigualdade de gênero",
            "d) Geração de emprego",
          ],
          correta: 2,
          explicacao:
            "A desigualdade de gênero é um problema que precisa ser combatido, não uma solução para a pobreza.",
        },
        {
          id: 8,
          texto: "Quantos objetivos compõem as ODS?",
          alternativas: ["a) 10", "b) 15", "c) 17", "d) 20"],
          correta: 2,
          explicacao: "Existem 17 Objetivos de Desenvolvimento Sustentável.",
        },
        {
          id: 9,
          texto: "O que é necessário para reduzir a pobreza no meio rural?",
          alternativas: [
            "a) Investimentos em infraestrutura, educação e crédito agrícola",
            "b) Fechar pequenos comércios",
            "c) Priorizar somente áreas urbanas",
            "d) Reduzir investimentos tecnológicos",
          ],
          correta: 0,
          explicacao:
            "Investimentos em infraestrutura, educação e crédito agrícola são essenciais para reduzir a pobreza rural.",
        },
        {
          id: 10,
          texto: "O que é vulnerabilidade social?",
          alternativas: [
            "a) Condição de baixa exposição à pobreza",
            "b) Falta de acesso a recursos básicos e oportunidades",
            "c) Garantia de direitos iguais para todos",
            "d) Disponibilidade de recursos públicos",
          ],
          correta: 1,
          explicacao:
            "Vulnerabilidade social refere-se à falta de acesso a recursos básicos e oportunidades.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto:
            "Qual porcentagem da população mundial vivia em extrema pobreza em 2023?",
          alternativas: ["a) 15%", "b) 9%", "c) 5%", "d) 25%"],
          correta: 1,
          explicacao:
            "Em 2023, aproximadamente 9% da população mundial vivia em extrema pobreza.",
        },
        {
          id: 12,
          texto: "Qual país tem os maiores avanços na ODS 1?",
          alternativas: [
            "a) Noruega",
            "b) Índia",
            "c) Brasil",
            "d) Estados Unidos",
          ],
          correta: 0,
          explicacao:
            "A Noruega é frequentemente citada como exemplo de avanços na erradicação da pobreza.",
        },
        {
          id: 13,
          texto: "Quais fatores perpetuam a pobreza no mundo?",
          alternativas: [
            "a) Acesso à tecnologia e inovação",
            "b) Baixa qualidade educacional e desigualdade social",
            "c) Crescimento econômico acelerado",
            "d) Garantia de saúde universal",
          ],
          correta: 1,
          explicacao:
            "Baixa qualidade educacional e desigualdade social são fatores que perpetuam a pobreza.",
        },
        {
          id: 14,
          texto: "Qual é o principal indicador usado para medir a pobreza?",
          alternativas: [
            "a) IDH",
            "b) PIB",
            "c) Renda per capita",
            "d) Taxa de desemprego",
          ],
          correta: 2,
          explicacao:
            "A renda per capita é o principal indicador para medir a pobreza.",
        },
        {
          id: 15,
          texto: "O que caracteriza o índice de Gini?",
          alternativas: [
            "a) Nível de educação",
            "b) Medida de desigualdade de renda",
            "c) Número de empregos formais",
            "d) Quantidade de infraestrutura social",
          ],
          correta: 1,
          explicacao:
            "O índice de Gini mede a desigualdade de renda em uma população.",
        },
      ],
    },
  },
  {
    ods: 2,
    titulo: "Fome Zero e Agricultura Sustentável",
    descricao:
      "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o objetivo principal da ODS 2?",
          alternativas: [
            "a) Promover o uso de energias renováveis",
            "b) Erradicar a fome e garantir segurança alimentar",
            "c) Reduzir a desigualdade de gênero",
            "d) Proteger os oceanos",
          ],
          correta: 1,
          explicacao:
            "A ODS 2 tem como principal objetivo erradicar a fome, alcançar a segurança alimentar e promover a agricultura sustentável.",
        },
        {
          id: 2,
          texto: "O que significa 'segurança alimentar'?",
          alternativas: [
            "a) Acesso diário a alimentos em quantidade e qualidade suficientes",
            "b) Apenas garantir renda mensal para compra de alimentos",
            "c) Redução do consumo de carne",
            "d) Monitoramento de alimentos industrializados",
          ],
          correta: 0,
          explicacao:
            "Segurança alimentar significa que todas as pessoas tenham acesso físico e econômico a alimentos suficientes, seguros e nutritivos.",
        },
        {
          id: 3,
          texto:
            "Qual organização internacional lidera os esforços contra a fome?",
          alternativas: ["a) OMS", "b) FAO", "c) UNESCO", "d) OIT"],
          correta: 1,
          explicacao:
            "A FAO (Organização das Nações Unidas para Alimentação e Agricultura) é a principal agência que lidera os esforços internacionais para erradicar a fome.",
        },
        {
          id: 4,
          texto: "A ODS 2 também está relacionada a:",
          alternativas: [
            "a) Redução da fome e promoção da agricultura sustentável",
            "b) Geração de empregos na indústria automotiva",
            "c) Universalização da energia elétrica",
            "d) Controle da poluição urbana",
          ],
          correta: 0,
          explicacao:
            "Além de erradicar a fome, a ODS 2 busca promover a agricultura sustentável e melhorar a nutrição.",
        },
        {
          id: 5,
          texto: "Qual é uma das principais causas da fome no mundo?",
          alternativas: [
            "a) Desigualdade no acesso a alimentos e recursos",
            "b) Uso de energias renováveis",
            "c) Crescimento sustentável da agricultura",
            "d) Redução da poluição atmosférica",
          ],
          correta: 0,
          explicacao:
            "A desigualdade no acesso a alimentos e recursos é uma das principais causas da fome mundial.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "O que é insegurança alimentar moderada?",
          alternativas: [
            "a) Redução leve do consumo de alimentos",
            "b) Acesso restrito a alimentos de qualidade e quantidade suficientes",
            "c) Excesso de alimentos ultraprocessados",
            "d) Consumo calórico superior ao necessário",
          ],
          correta: 1,
          explicacao:
            "Insegurança alimentar moderada ocorre quando as pessoas enfrentam incerteza sobre sua capacidade de obter alimentos e são forçadas a reduzir a qualidade ou quantidade dos alimentos que consomem.",
        },
        {
          id: 7,
          texto: "Qual é o papel da agricultura familiar na ODS 2?",
          alternativas: [
            "a) Diminuir a oferta de alimentos",
            "b) Reduzir o comércio local",
            "c) Promover produção de alimentos saudáveis e sustentáveis",
            "d) Incentivar o desperdício de alimentos",
          ],
          correta: 2,
          explicacao:
            "A agricultura familiar é essencial para promover sistemas alimentares sustentáveis e fornecer alimentos saudáveis para as comunidades locais.",
        },
        {
          id: 8,
          texto: "O aumento da fome no mundo está diretamente relacionado a:",
          alternativas: [
            "a) Redução do desperdício de alimentos",
            "b) Conflitos, mudanças climáticas e desigualdade",
            "c) Investimento em agricultura sustentável",
            "d) Crescimento populacional estável",
          ],
          correta: 1,
          explicacao:
            "Conflitos armados, mudanças climáticas e desigualdades econômicas são os principais fatores que contribuem para o aumento da fome no mundo.",
        },
        {
          id: 9,
          texto: "Qual fator NÃO contribui para a insegurança alimentar?",
          alternativas: [
            "a) Guerras e crises econômicas",
            "b) Desigualdade no acesso à terra e água",
            "c) Acesso a sistemas de irrigação sustentável",
            "d) Falta de investimento na agricultura",
          ],
          correta: 2,
          explicacao:
            "Sistemas de irrigação sustentável ajudam a garantir a produção de alimentos, combatendo a insegurança alimentar.",
        },
        {
          id: 10,
          texto: "O que é subnutrição?",
          alternativas: [
            "a) Consumo equilibrado de alimentos saudáveis",
            "b) Consumo insuficiente de nutrientes essenciais",
            "c) Consumo excessivo de proteínas",
            "d) Consumo de alimentos orgânicos",
          ],
          correta: 1,
          explicacao:
            "Subnutrição ocorre quando o consumo de alimentos é insuficiente para atender às necessidades de energia alimentar continuamente.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Qual é o principal desafio da agricultura sustentável?",
          alternativas: [
            "a) Preservação ambiental e aumento da produção",
            "b) Reduzir a mão de obra no campo",
            "c) Aumento da mecanização",
            "d) Exclusão de pequenos agricultores",
          ],
          correta: 0,
          explicacao:
            "O grande desafio é aumentar a produção de alimentos para atender à população crescente, enquanto preserva os recursos naturais e o meio ambiente.",
        },
        {
          id: 12,
          texto: "O que são culturas resilientes?",
          alternativas: [
            "a) Plantas que crescem apenas em solos férteis",
            "b) Espécies adaptadas às mudanças climáticas",
            "c) Alimentos produzidos apenas em larga escala",
            "d) Culturas que exigem alto uso de agrotóxicos",
          ],
          correta: 1,
          explicacao:
            "Culturas resilientes são variedades de plantas que podem resistir melhor às condições climáticas extremas e às pragas.",
        },
        {
          id: 13,
          texto: "Qual índice mede a insegurança alimentar global?",
          alternativas: [
            "a) IDH",
            "b) GHI (Índice Global da Fome)",
            "c) PIB",
            "d) IPM",
          ],
          correta: 1,
          explicacao:
            "O Índice Global da Fome (GHI) mede e acompanha a fome em nível global, regional e nacional.",
        },
        {
          id: 14,
          texto: "Qual a meta específica da ODS 2 até 2030?",
          alternativas: [
            "a) Reduzir pela metade a desnutrição global",
            "b) Erradicar a fome e todas as formas de má nutrição",
            "c) Dobrar o uso de pesticidas",
            "d) Reduzir a agricultura familiar",
          ],
          correta: 1,
          explicacao:
            "A meta 2.1 da ODS 2 é erradicar a fome e garantir o acesso de todas as pessoas a alimentos seguros, nutritivos e suficientes durante todo o ano até 2030.",
        },
        {
          id: 15,
          texto: "A agroecologia contribui para a ODS 2 porque:",
          alternativas: [
            "a) Promove sistemas de produção sustentáveis",
            "b) Depende de monoculturas",
            "c) Exclui práticas tradicionais",
            "d) Aumenta a degradação ambiental",
          ],
          correta: 0,
          explicacao:
            "A agroecologia combina conhecimentos tradicionais e científicos para criar sistemas agrícolas sustentáveis e resilientes.",
        },
      ],
    },
  },
  {
    ods: 3,
    titulo: "Saúde e Bem-Estar",
    descricao:
      "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 3?",
          alternativas: [
            "a) Promover educação inclusiva",
            "b) Garantir acesso à água potável",
            "c) Assegurar uma vida saudável e promover o bem-estar para todos",
            "d) Incentivar o consumo sustentável",
          ],
          correta: 2,
          explicacao:
            "A ODS 3 visa garantir saúde e bem-estar para todas as pessoas, em todas as idades, com acesso a serviços de saúde de qualidade.",
        },
        {
          id: 2,
          texto: "O que significa 'bem-estar' na ODS 3?",
          alternativas: [
            "a) Apenas a ausência de doenças",
            "b) Qualidade de vida física, mental e social",
            "c) Exercício físico diário",
            "d) Consumo de alimentos industrializados",
          ],
          correta: 1,
          explicacao:
            "Bem-estar inclui saúde física, mental e social, indo além da simples ausência de doenças.",
        },
        {
          id: 3,
          texto:
            "Qual organização internacional lidera ações pela saúde global?",
          alternativas: ["a) FAO", "b) OMS", "c) UNESCO", "d) OIT"],
          correta: 1,
          explicacao:
            "A Organização Mundial da Saúde (OMS) é a agência da ONU responsável por liderar esforços globais na área da saúde.",
        },
        {
          id: 4,
          texto: "A ODS 3 aborda a prevenção de qual das seguintes doenças?",
          alternativas: [
            "a) Doenças infecciosas, crônicas e epidêmicas",
            "b) Apenas doenças cardiovasculares",
            "c) Apenas doenças respiratórias",
            "d) Apenas problemas psicológicos",
          ],
          correta: 0,
          explicacao:
            "A ODS 3 aborda todos os tipos de doenças, incluindo infecciosas, crônicas, mentais e epidêmicas.",
        },
        {
          id: 5,
          texto: "O que é mortalidade infantil?",
          alternativas: [
            "a) Óbitos de crianças antes dos 5 anos de idade",
            "b) Falta de acesso à educação básica",
            "c) Crianças com baixo peso",
            "d) Nascimento de gêmeos",
          ],
          correta: 0,
          explicacao:
            "Mortalidade infantil refere-se à morte de crianças menores de cinco anos, um importante indicador de saúde pública.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "O que é saúde universal?",
          alternativas: [
            "a) Acesso a tratamentos caros apenas para ricos",
            "b) Direito de todos à saúde com qualidade e sem discriminação",
            "c) Serviços de saúde limitados às áreas urbanas",
            "d) Atendimento médico somente particular",
          ],
          correta: 1,
          explicacao:
            "Saúde universal significa que todas as pessoas tenham acesso a serviços de saúde de qualidade sem sofrer dificuldades financeiras.",
        },
        {
          id: 7,
          texto: "O que é mortalidade materna?",
          alternativas: [
            "a) Óbitos de gestantes durante ou após o parto",
            "b) Óbitos de crianças na fase de amamentação",
            "c) Falta de vacinas para crianças",
            "d) Aumento da expectativa de vida das mães",
          ],
          correta: 0,
          explicacao:
            "Mortalidade materna refere-se à morte de mulheres durante a gravidez, parto ou dentro de 42 dias após o término da gestação.",
        },
        {
          id: 8,
          texto: "Qual é a relação entre saneamento básico e a ODS 3?",
          alternativas: [
            "a) Reduzir doenças causadas por falta de água limpa e esgoto",
            "b) Aumentar a poluição urbana",
            "c) Priorizar o uso de medicamentos químicos",
            "d) Incentivar a falta de higiene",
          ],
          correta: 0,
          explicacao:
            "Saneamento básico adequado previne diversas doenças, contribuindo diretamente para a saúde da população.",
        },
        {
          id: 9,
          texto: "O que são doenças transmissíveis?",
          alternativas: [
            "a) Doenças que podem ser evitadas pela vacinação",
            "b) Problemas hereditários",
            "c) Doenças como diabetes e hipertensão",
            "d) Problemas de saúde mental",
          ],
          correta: 0,
          explicacao:
            "Doenças transmissíveis são aquelas que podem ser passadas de uma pessoa para outra, muitas vezes preveníveis por vacinas.",
        },
        {
          id: 10,
          texto: "O que é saúde mental?",
          alternativas: [
            "a) Apenas a ausência de doenças físicas",
            "b) Bem-estar psicológico e emocional",
            "c) Uso de medicamentos controlados",
            "d) Redução da prática de atividades físicas",
          ],
          correta: 1,
          explicacao:
            "Saúde mental inclui bem-estar emocional, psicológico e social, afetando como pensamos, sentimos e agimos.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Como a urbanização descontrolada pode impactar a ODS 3?",
          alternativas: [
            "a) Melhora a saúde pública",
            "b) Aumenta os problemas de saneamento e saúde mental",
            "c) Reduz a poluição do ar",
            "d) Elimina a necessidade de hospitais públicos",
          ],
          correta: 1,
          explicacao:
            "Urbanização descontrolada pode levar à falta de saneamento, poluição e problemas de saúde mental, prejudicando a saúde pública.",
        },
        {
          id: 12,
          texto:
            "Quais são os principais desafios para erradicar a AIDS até 2030?",
          alternativas: [
            "a) Melhoria na distribuição de alimentos",
            "b) Acesso desigual a prevenção, tratamento e educação",
            "c) Eliminação da poluição do solo",
            "d) Redução das políticas públicas de saúde",
          ],
          correta: 1,
          explicacao:
            "Desigualdades no acesso a prevenção, tratamento e educação sobre HIV/AIDS são os maiores obstáculos para sua erradicação.",
        },
        {
          id: 13,
          texto: "O que significa 'cobertura universal de saúde'?",
          alternativas: [
            "a) Atendimento exclusivo em hospitais particulares",
            "b) Acesso igualitário e de qualidade a serviços de saúde para todos",
            "c) Restrição de medicamentos gratuitos",
            "d) Atendimento limitado a doenças infecciosas",
          ],
          correta: 1,
          explicacao:
            "Cobertura universal de saúde garante que todas as pessoas recebam os serviços de saúde de que precisam sem dificuldades financeiras.",
        },
        {
          id: 14,
          texto: "Por que a poluição do ar é uma preocupação da ODS 3?",
          alternativas: [
            "a) Causa danos ao sistema respiratório e aumenta doenças crônicas",
            "b) Melhora o crescimento econômico",
            "c) Não tem impacto sobre a saúde humana",
            "d) Afeta apenas a biodiversidade",
          ],
          correta: 0,
          explicacao:
            "A poluição do ar está ligada a doenças respiratórias, cardiovasculares e outros problemas de saúde graves.",
        },
        {
          id: 15,
          texto:
            "Qual é uma medida eficaz contra a resistência antimicrobiana?",
          alternativas: [
            "a) Uso excessivo de antibióticos",
            "b) Uso correto e racional de medicamentos",
            "c) Restrição total de medicamentos",
            "d) Aumento do uso de medicamentos caseiros",
          ],
          correta: 1,
          explicacao:
            "O uso adequado de antibióticos, apenas quando necessário e conforme prescrição médica, ajuda a combater a resistência antimicrobiana.",
        },
      ],
    },
  },
  {
    ods: 4,
    titulo: "Educação de Qualidade",
    descricao:
      "Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 4?",
          alternativas: [
            "a) Reduzir o uso de energia não renovável",
            "b) Garantir educação inclusiva, equitativa e de qualidade",
            "c) Melhorar os sistemas de transporte urbano",
            "d) Aumentar o consumo sustentável",
          ],
          correta: 1,
          explicacao:
            "A ODS 4 visa garantir educação de qualidade inclusiva e equitativa para todos.",
        },
        {
          id: 2,
          texto: "A ODS 4 busca garantir educação para quais grupos?",
          alternativas: [
            "a) Apenas crianças",
            "b) Jovens e adultos em situação de pobreza",
            "c) Todas as pessoas, em todas as idades",
            "d) Apenas alunos universitários",
          ],
          correta: 2,
          explicacao:
            "A ODS 4 pretende garantir oportunidades de aprendizagem para todas as pessoas, em todas as fases da vida.",
        },
        {
          id: 3,
          texto: "O que significa educação inclusiva?",
          alternativas: [
            "a) Educação apenas em escolas particulares",
            "b) Acesso de todos à educação, sem discriminação",
            "c) Educação restrita a jovens",
            "d) Exclusão de pessoas com deficiência",
          ],
          correta: 1,
          explicacao:
            "Educação inclusiva significa garantir acesso à educação para todos, independentemente de suas condições.",
        },
        {
          id: 4,
          texto: "Qual é a importância da educação de qualidade?",
          alternativas: [
            "a) Garantir o crescimento econômico e o desenvolvimento social",
            "b) Reduzir o número de empregos",
            "c) Aumentar a desigualdade",
            "d) Promover apenas habilidades técnicas",
          ],
          correta: 0,
          explicacao:
            "A educação de qualidade é fundamental para o desenvolvimento econômico e social sustentável.",
        },
        {
          id: 5,
          texto: "Qual instituição lidera o acompanhamento da ODS 4?",
          alternativas: ["a) OMS", "b) FAO", "c) UNESCO", "d) OIT"],
          correta: 2,
          explicacao:
            "A UNESCO é a agência da ONU responsável por coordenar os esforços globais na área da educação.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "O que significa 'educação equitativa'?",
          alternativas: [
            "a) Educação apenas para pessoas de baixa renda",
            "b) Igualdade de oportunidades educacionais para todos",
            "c) Educação apenas para escolas rurais",
            "d) Exclusividade no ensino superior",
          ],
          correta: 1,
          explicacao:
            "Educação equitativa significa oferecer oportunidades iguais de aprendizagem para todos, independentemente de sua origem.",
        },
        {
          id: 7,
          texto:
            "Qual a relação entre a ODS 4 e o desenvolvimento sustentável?",
          alternativas: [
            "a) Promove uma sociedade mais consciente e igualitária",
            "b) Aumenta a poluição industrial",
            "c) Incentiva a exclusão social",
            "d) Reduz os investimentos públicos em educação",
          ],
          correta: 0,
          explicacao:
            "A educação é a base para formar cidadãos conscientes e promover sociedades mais igualitárias e sustentáveis.",
        },
        {
          id: 8,
          texto: "O que é abandono escolar?",
          alternativas: [
            "a) Inclusão de alunos no mercado de trabalho",
            "b) Estudantes que deixam de frequentar a escola antes de concluírem a educação básica",
            "c) Exclusão de alunos no ensino técnico",
            "d) Incentivo ao uso de livros didáticos",
          ],
          correta: 1,
          explicacao:
            "O abandono escolar refere-se a alunos que deixam os estudos antes de completar a educação básica.",
        },
        {
          id: 9,
          texto: "Qual ação ajuda a atingir a ODS 4?",
          alternativas: [
            "a) Reduzir o número de escolas",
            "b) Aumentar o investimento em infraestrutura educacional",
            "c) Fechar unidades de ensino em áreas rurais",
            "d) Restringir o uso de tecnologias na educação",
          ],
          correta: 1,
          explicacao:
            "Investir em infraestrutura educacional é fundamental para garantir educação de qualidade para todos.",
        },
        {
          id: 10,
          texto: "O que significa educação ao longo da vida?",
          alternativas: [
            "a) Educação apenas na infância",
            "b) Acesso contínuo a oportunidades de aprendizado em todas as idades",
            "c) Exclusividade de ensino técnico",
            "d) Restrição à educação formal",
          ],
          correta: 1,
          explicacao:
            "Educação ao longo da vida significa oportunidades de aprendizagem contínua em todas as fases da vida.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que significa a meta de alfabetização universal até 2030?",
          alternativas: [
            "a) Apenas crianças em áreas urbanas serão alfabetizadas",
            "b) Todos os jovens e grande parte dos adultos devem ser alfabetizados",
            "c) Exclusão de pessoas com deficiência do sistema educacional",
            "d) Educação apenas até o ensino fundamental",
          ],
          correta: 1,
          explicacao:
            "A meta visa garantir que todos os jovens e uma proporção substancial de adultos estejam alfabetizados até 2030.",
        },
        {
          id: 12,
          texto: "O que é ensino inclusivo?",
          alternativas: [
            "a) Exclusão de estudantes com necessidades especiais",
            "b) Educação adaptada às necessidades de todos os estudantes",
            "c) Apenas ensino técnico profissional",
            "d) Redução do acesso à escola",
          ],
          correta: 1,
          explicacao:
            "Ensino inclusivo adapta-se às necessidades de todos os alunos, incluindo pessoas com deficiência.",
        },
        {
          id: 13,
          texto: "Como as guerras afetam a educação?",
          alternativas: [
            "a) Melhoram a qualidade das escolas",
            "b) Interrompem o acesso à educação, especialmente em países pobres",
            "c) Promovem maior inclusão educacional",
            "d) Aumentam o número de professores capacitados",
          ],
          correta: 1,
          explicacao:
            "Conflitos armados destroem infraestruturas educacionais e impedem o acesso à escola.",
        },
        {
          id: 14,
          texto: "Qual é o papel dos professores na ODS 4?",
          alternativas: [
            "a) Reduzir o uso de novas metodologias",
            "b) Garantir educação de qualidade e formar cidadãos críticos",
            "c) Aumentar o abandono escolar",
            "d) Priorizar apenas o ensino superior",
          ],
          correta: 1,
          explicacao:
            "Professores qualificados são essenciais para uma educação de qualidade e formação cidadã.",
        },
        {
          id: 15,
          texto: "A ODS 4 está diretamente ligada a qual ODS?",
          alternativas: [
            "a) ODS 1 (Pobreza)",
            "b) ODS 7 (Energia Limpa)",
            "c) ODS 13 (Mudanças Climáticas)",
            "d) ODS 14 (Vida na Água)",
          ],
          correta: 0,
          explicacao:
            "A educação de qualidade ajuda a reduzir a pobreza (ODS 1) ao promover melhores oportunidades.",
        },
      ],
    },
  },
  {
    ods: 5,
    titulo: "Igualdade de Gênero",
    descricao:
      "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 5?",
          alternativas: [
            "a) Promover a igualdade econômica",
            "b) Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas",
            "c) Reduzir a poluição industrial",
            "d) Melhorar a qualidade da educação",
          ],
          correta: 1,
          explicacao:
            "A ODS 5 tem como foco principal alcançar a igualdade de gênero e empoderar mulheres e meninas em todo o mundo.",
        },
        {
          id: 2,
          texto: "O que significa igualdade de gênero?",
          alternativas: [
            "a) O mesmo tratamento e oportunidades para todos, independentemente do gênero",
            "b) Exclusividade de direitos para mulheres",
            "c) Direitos apenas para homens",
            "d) Redução dos direitos femininos",
          ],
          correta: 0,
          explicacao:
            "Igualdade de gênero significa que homens e mulheres devem ter os mesmos direitos, responsabilidades e oportunidades.",
        },
        {
          id: 3,
          texto: "Em que ano a ONU pretende atingir as metas da ODS 5?",
          alternativas: ["a) 2025", "b) 2030", "c) 2040", "d) 2050"],
          correta: 1,
          explicacao:
            "As metas dos ODS, incluindo a ODS 5, devem ser alcançadas até 2030, conforme estabelecido pela Agenda 2030.",
        },
        {
          id: 4,
          texto: "Qual prática a ODS 5 combate diretamente?",
          alternativas: [
            "a) Inclusão de mulheres no mercado de trabalho",
            "b) Desigualdade salarial entre homens e mulheres",
            "c) Educação inclusiva para todos",
            "d) Redução do acesso à internet",
          ],
          correta: 1,
          explicacao:
            "A ODS 5 combate ativamente a diferença salarial entre gêneros para o mesmo tipo de trabalho.",
        },
        {
          id: 5,
          texto: "O que significa empoderamento feminino?",
          alternativas: [
            "a) Restrição de direitos femininos",
            "b) Acesso a oportunidades, autonomia e poder de decisão para mulheres",
            "c) Exclusão de homens no mercado de trabalho",
            "d) Aumento da discriminação contra mulheres",
          ],
          correta: 1,
          explicacao:
            "Empoderamento feminino é o processo de conceder às mulheres autonomia e capacidade de tomar decisões sobre suas próprias vidas.",
        },
      ],
      medio: [
        {
          id: 6,
          texto:
            "Qual fator histórico contribuiu para a desigualdade de gênero?",
          alternativas: [
            "a) Participação igualitária de homens e mulheres na política",
            "b) Estruturas sociais patriarcais que limitam os direitos das mulheres",
            "c) Educação inclusiva em todas as fases da vida",
            "d) Maior acesso de mulheres ao mercado de trabalho",
          ],
          correta: 1,
          explicacao:
            "Sistemas patriarcais historicamente relegaram às mulheres papéis sociais subalternos, limitando seus direitos.",
        },
        {
          id: 7,
          texto: "Como a ODS 5 impacta o desenvolvimento sustentável?",
          alternativas: [
            "a) Reduz a participação feminina na economia",
            "b) Promove igualdade e acelera o desenvolvimento econômico e social",
            "c) Aumenta as desigualdades educacionais",
            "d) Restringe direitos trabalhistas",
          ],
          correta: 1,
          explicacao:
            "A igualdade de gênero contribui para economias mais fortes e sociedades mais sustentáveis e justas.",
        },
        {
          id: 8,
          texto: "O que são direitos reprodutivos, defendidos pela ODS 5?",
          alternativas: [
            "a) Controle do governo sobre decisões familiares",
            "b) Direito das mulheres à saúde sexual e reprodutiva, incluindo planejamento familiar",
            "c) Exclusão de políticas de saúde feminina",
            "d) Acesso apenas a cuidados maternos básicos",
          ],
          correta: 1,
          explicacao:
            "Direitos reprodutivos incluem o direito de decidir sobre ter filhos, quando tê-los e ter acesso a serviços de saúde reprodutiva.",
        },
        {
          id: 9,
          texto: "O que significa feminicídio?",
          alternativas: [
            "a) Assassinato de mulheres por razões de gênero",
            "b) Direitos iguais na política",
            "c) Redução da violência urbana",
            "d) Exclusão de mulheres no trabalho",
          ],
          correta: 0,
          explicacao:
            "Feminicídio é o assassinato de mulheres motivado por discriminação de gênero, a forma mais extrema de violência contra a mulher.",
        },
        {
          id: 10,
          texto:
            "Qual região do mundo tem as maiores taxas de casamento infantil?",
          alternativas: [
            "a) América do Norte",
            "b) Europa Ocidental",
            "c) África Subsaariana e Sul da Ásia",
            "d) América Latina",
          ],
          correta: 2,
          explicacao:
            "África Subsaariana e Sul da Ásia concentram as maiores taxas de casamento infantil, uma violação dos direitos das meninas.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Como a desigualdade de gênero impacta a economia global?",
          alternativas: [
            "a) Reduz a participação feminina e limita o crescimento econômico",
            "b) Melhora o acesso às oportunidades de trabalho",
            "c) Aumenta a inclusão social",
            "d) Reduz as desigualdades de renda",
          ],
          correta: 0,
          explicacao:
            "A desigualdade de gênero no mercado de trabalho representa uma perda significativa para a economia global.",
        },
        {
          id: 12,
          texto: "Qual prática cultural a ODS 5 visa eliminar?",
          alternativas: [
            "a) Promoção da educação inclusiva",
            "b) Mutilação genital feminina",
            "c) Acesso a direitos trabalhistas",
            "d) Igualdade salarial",
          ],
          correta: 1,
          explicacao:
            "A mutilação genital feminina é uma prática nociva que viola os direitos humanos de mulheres e meninas.",
        },
        {
          id: 13,
          texto: "O que é patriarcado?",
          alternativas: [
            "a) Sistema que privilegia homens em detrimento das mulheres",
            "b) Inclusão social igualitária",
            "c) Igualdade de gênero na política",
            "d) Educação universal",
          ],
          correta: 0,
          explicacao:
            "Patriarcado é um sistema social onde os homens detêm o poder primário e predominam em papéis de liderança.",
        },
        {
          id: 14,
          texto: "Como a pobreza afeta a igualdade de gênero?",
          alternativas: [
            "a) Aumenta a vulnerabilidade das mulheres e limita o acesso a oportunidades",
            "b) Promove inclusão social",
            "c) Garante acesso ao mercado de trabalho",
            "d) Reduz a desigualdade",
          ],
          correta: 0,
          explicacao:
            "A pobreza afeta desproporcionalmente as mulheres, limitando seu acesso a educação, saúde e oportunidades econômicas.",
        },
        {
          id: 15,
          texto:
            "Como a ODS 5 se relaciona com a ODS 4 (Educação de Qualidade)?",
          alternativas: [
            "a) A educação promove igualdade de oportunidades para meninos e meninas",
            "b) Reduz a participação feminina",
            "c) Amplia desigualdades sociais",
            "d) Restringe políticas inclusivas",
          ],
          correta: 0,
          explicacao:
            "Educação de qualidade para todos é fundamental para alcançar a igualdade de gênero e empoderar mulheres e meninas.",
        },
      ],
    },
  },
  {
    ods: 6,
    titulo: "Água Potável e Saneamento",
    descricao:
      "Garantir disponibilidade e gestão sustentável da água e saneamento para todos",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 6?",
          alternativas: [
            "a) Garantir energia limpa e acessível",
            "b) Garantir disponibilidade e gestão sustentável da água e saneamento para todos",
            "c) Reduzir as desigualdades sociais",
            "d) Promover agricultura sustentável",
          ],
          correta: 1,
          explicacao:
            "A ODS 6 visa assegurar a disponibilidade e gestão sustentável da água potável e saneamento para todas as pessoas.",
        },
        {
          id: 2,
          texto: "O que é saneamento básico?",
          alternativas: [
            "a) Fornecimento de energia elétrica",
            "b) Gestão e tratamento da água, coleta e tratamento de esgoto",
            "c) Construção de escolas e hospitais",
            "d) Controle de resíduos eletrônicos",
          ],
          correta: 1,
          explicacao:
            "Saneamento básico inclui abastecimento de água potável, coleta e tratamento de esgoto e manejo de resíduos sólidos.",
        },
        {
          id: 3,
          texto: "Qual é a importância da água limpa?",
          alternativas: [
            "a) Manter as indústrias funcionando",
            "b) Garantir saúde, higiene e qualidade de vida",
            "c) Evitar o uso excessivo de combustíveis fósseis",
            "d) Melhorar a qualidade do ar",
          ],
          correta: 1,
          explicacao:
            "Água limpa é essencial para prevenir doenças, manter a higiene e garantir a saúde pública.",
        },
        {
          id: 4,
          texto:
            "Qual problema ambiental mais afeta a disponibilidade de água potável?",
          alternativas: [
            "a) Desmatamento",
            "b) Poluição e contaminação de rios e mananciais",
            "c) Uso de energias renováveis",
            "d) Aumento da reciclagem",
          ],
          correta: 1,
          explicacao:
            "A poluição de rios, lagos e aquíferos é a principal ameaça à disponibilidade de água potável.",
        },
        {
          id: 5,
          texto:
            "Qual recurso natural é fundamental para a vida humana e ecossistemas?",
          alternativas: [
            "a) Petróleo",
            "b) Água",
            "c) Carvão",
            "d) Gás natural",
          ],
          correta: 1,
          explicacao:
            "A água é essencial para todas as formas de vida e para o funcionamento dos ecossistemas.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "O que é água potável?",
          alternativas: [
            "a) Água salgada usada em indústrias",
            "b) Água própria para o consumo humano",
            "c) Água contaminada utilizada na agricultura",
            "d) Água destinada ao uso exclusivo das fábricas",
          ],
          correta: 1,
          explicacao:
            "Água potável é aquela que atende aos padrões de qualidade e não oferece riscos à saúde humana.",
        },
        {
          id: 7,
          texto: "Qual prática prejudica a qualidade da água?",
          alternativas: [
            "a) Tratamento de esgoto",
            "b) Descarte inadequado de resíduos e produtos químicos",
            "c) Uso consciente de recursos hídricos",
            "d) Proteção de nascentes e rios",
          ],
          correta: 1,
          explicacao:
            "O descarte inadequado de lixo, esgoto e produtos químicos é uma das principais causas de poluição da água.",
        },
        {
          id: 8,
          texto: "O que é uma estação de tratamento de esgoto (ETE)?",
          alternativas: [
            "a) Local onde se armazena água da chuva",
            "b) Unidade que trata e purifica esgoto antes de devolvê-lo ao meio ambiente",
            "c) Reservatório de água potável",
            "d) Local onde a água de rios é captada",
          ],
          correta: 1,
          explicacao:
            "As ETEs são fundamentais para tratar os esgotos e evitar a contaminação dos corpos hídricos.",
        },
        {
          id: 9,
          texto: "Como o saneamento básico contribui para a saúde pública?",
          alternativas: [
            "a) Aumentando a produção industrial",
            "b) Prevenindo doenças causadas por falta de higiene e água contaminada",
            "c) Ampliando o uso de água em lavouras",
            "d) Incentivando o uso de combustíveis fósseis",
          ],
          correta: 1,
          explicacao:
            "Saneamento adequado previne doenças como diarreia, cólera e hepatite, melhorando a qualidade de vida.",
        },
        {
          id: 10,
          texto: "O que causa a escassez hídrica em algumas regiões do mundo?",
          alternativas: [
            "a) Uso sustentável da água",
            "b) Chuvas abundantes e preservação ambiental",
            "c) Desperdício, poluição e mudanças climáticas",
            "d) Programas de tratamento de água",
          ],
          correta: 2,
          explicacao:
            "Má gestão dos recursos hídricos, poluição e alterações climáticas são as principais causas da escassez de água.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Qual é a maior fonte de contaminação dos lençóis freáticos?",
          alternativas: [
            "a) Descarte de resíduos sólidos",
            "b) Vazamento de esgoto e produtos químicos",
            "c) Tratamento de água",
            "d) Reflorestamento",
          ],
          correta: 1,
          explicacao:
            "Vazamentos de fossas sépticas, aterros sanitários e produtos químicos contaminam os aquíferos subterrâneos.",
        },
        {
          id: 12,
          texto: "O que significa gestão sustentável da água?",
          alternativas: [
            "a) Uso consciente, preservação e tratamento adequado dos recursos hídricos",
            "b) Consumo ilimitado de água",
            "c) Substituição da água por outros recursos naturais",
            "d) Construção de barragens sem controle",
          ],
          correta: 0,
          explicacao:
            "Gestão sustentável envolve equilibrar o uso humano com a preservação dos ecossistemas aquáticos.",
        },
        {
          id: 13,
          texto: "O que são aquíferos?",
          alternativas: [
            "a) Reservatórios artificiais de água potável",
            "b) Rios subterrâneos formados por água infiltrada no solo",
            "c) Usinas de tratamento de esgoto",
            "d) Grandes lagos poluídos por resíduos",
          ],
          correta: 1,
          explicacao:
            "Aquíferos são formações geológicas que armazenam água subterrânea, essenciais para o abastecimento humano.",
        },
        {
          id: 14,
          texto: "Qual medida reduz a poluição da água?",
          alternativas: [
            "a) Descarte de esgoto sem tratamento",
            "b) Reflorestamento de margens de rios",
            "c) Lançamento de resíduos industriais nos rios",
            "d) Uso de pesticidas em excesso",
          ],
          correta: 1,
          explicacao:
            "Matas ciliares protegem os rios da erosão e filtram poluentes, mantendo a qualidade da água.",
        },
        {
          id: 15,
          texto:
            "Qual é a importância das áreas de preservação permanente (APPs) para a água?",
          alternativas: [
            "a) Protegem rios, lagos e nascentes contra contaminação",
            "b) Aumentam a urbanização",
            "c) Substituem a necessidade de saneamento",
            "d) Reduzem a biodiversidade",
          ],
          correta: 0,
          explicacao:
            "APPs mantêm a qualidade da água, previnem erosão e protegem a biodiversidade aquática.",
        },
      ],
    },
  },
  {
    ods: 7,
    titulo: "Energia Acessível e Limpa",
    descricao:
      "Garantir acesso à energia barata, confiável, sustentável e renovável para todos",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 7?",
          alternativas: [
            "a) Reduzir o uso de água potável",
            "b) Garantir acesso à energia limpa, sustentável e acessível para todos",
            "c) Aumentar o uso de combustíveis fósseis",
            "d) Priorizar apenas a energia nuclear",
          ],
          correta: 1,
          explicacao:
            "A ODS 7 visa garantir acesso universal a serviços de energia modernos, acessíveis e sustentáveis até 2030.",
        },
        {
          id: 2,
          texto: "O que são energias renováveis?",
          alternativas: [
            "a) Energias que não se esgotam, como solar e eólica",
            "b) Energia gerada apenas por carvão",
            "c) Energia produzida exclusivamente em usinas nucleares",
            "d) Energia que polui intensamente o meio ambiente",
          ],
          correta: 0,
          explicacao:
            "Energias renováveis são aquelas obtidas de fontes naturais inesgotáveis, como sol, vento e água.",
        },
        {
          id: 3,
          texto: "Qual fonte de energia é considerada limpa?",
          alternativas: [
            "a) Carvão mineral",
            "b) Energia solar",
            "c) Petróleo",
            "d) Gás natural não tratado",
          ],
          correta: 1,
          explicacao:
            "A energia solar é considerada limpa porque não emite poluentes durante sua geração.",
        },
        {
          id: 4,
          texto: "O que caracteriza a energia solar?",
          alternativas: [
            "a) Gera eletricidade a partir de combustíveis fósseis",
            "b) Produz energia a partir de radiação solar",
            "c) Polui mais do que outras fontes",
            "d) Não depende do sol para funcionar",
          ],
          correta: 1,
          explicacao:
            "A energia solar é gerada pela conversão da radiação solar em eletricidade através de painéis fotovoltaicos.",
        },
        {
          id: 5,
          texto: "Qual é a vantagem da energia eólica?",
          alternativas: [
            "a) Usa combustíveis fósseis para funcionar",
            "b) Produz energia por meio do vento, sendo limpa e renovável",
            "c) Polui os rios",
            "d) Requer grandes quantidades de carvão",
          ],
          correta: 1,
          explicacao:
            "A energia eólica é renovável e não emite gases poluentes durante a geração de eletricidade.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual fonte de energia é abundante no Brasil?",
          alternativas: [
            "a) Carvão mineral",
            "b) Energia solar e hidrelétrica",
            "c) Energia nuclear",
            "d) Gás natural",
          ],
          correta: 1,
          explicacao:
            "O Brasil tem grande potencial tanto para energia solar (por sua localização) quanto hidrelétrica (por seus rios).",
        },
        {
          id: 7,
          texto: "Por que a energia hidrelétrica é considerada renovável?",
          alternativas: [
            "a) Depende do uso contínuo de combustíveis fósseis",
            "b) Utiliza a força da água em movimento, que é um recurso natural renovável",
            "c) Produz poluição intensa",
            "d) Tem reservas limitadas no planeta",
          ],
          correta: 1,
          explicacao:
            "A energia hidrelétrica usa o ciclo natural da água, que é constantemente renovado pelo sol e pelas chuvas.",
        },
        {
          id: 8,
          texto: "O que significa 'transição energética'?",
          alternativas: [
            "a) Substituir combustíveis fósseis por fontes de energia limpa e renovável",
            "b) Aumentar o consumo de carvão e petróleo",
            "c) Reduzir a geração de energia em países em desenvolvimento",
            "d) Queimar resíduos industriais para gerar energia",
          ],
          correta: 0,
          explicacao:
            "Transição energética é a mudança do sistema energético baseado em fósseis para um baseado em renováveis.",
        },
        {
          id: 9,
          texto: "O que causa o uso excessivo de energia não renovável?",
          alternativas: [
            "a) Redução dos impactos ambientais",
            "b) Aumento da poluição e esgotamento dos recursos",
            "c) Melhoria no equilíbrio climático",
            "d) Preservação de ecossistemas",
          ],
          correta: 1,
          explicacao:
            "Combustíveis fósseis emitem poluentes e são recursos finitos que um dia se esgotarão.",
        },
        {
          id: 10,
          texto: "Qual é uma desvantagem da energia solar?",
          alternativas: [
            "a) Emite gases poluentes",
            "b) Não é eficiente em dias nublados ou chuvosos",
            "c) Gera energia constante",
            "d) Depende de combustíveis fósseis",
          ],
          correta: 1,
          explicacao:
            "A energia solar tem intermitência - não funciona à noite e tem redução de eficiência em dias nublados.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Qual é a meta global para a ODS 7 até 2030?",
          alternativas: [
            "a) Reduzir a produção de energia global",
            "b) Garantir acesso universal a energia limpa, moderna e acessível",
            "c) Aumentar a dependência de carvão mineral",
            "d) Dobrar o uso de combustíveis fósseis",
          ],
          correta: 1,
          explicacao:
            "A meta é garantir acesso universal, aumentar a participação de renováveis e dobrar a taxa global de eficiência energética.",
        },
        {
          id: 12,
          texto: "O que são 'smart grids' na distribuição de energia?",
          alternativas: [
            "a) Redes que otimizam o fornecimento e consumo de energia com tecnologia avançada",
            "b) Redes que aumentam o desperdício de eletricidade",
            "c) Redes que funcionam apenas com carvão",
            "d) Redes sem eficiência energética",
          ],
          correta: 0,
          explicacao:
            "Smart grids são redes inteligentes que usam tecnologia digital para melhorar eficiência e confiabilidade do sistema elétrico.",
        },
        {
          id: 13,
          texto: "O que representa o conceito de 'descarbonização'?",
          alternativas: [
            "a) Aumento do uso de combustíveis fósseis",
            "b) Redução das emissões de carbono através de energia limpa",
            "c) Uso intensivo de carvão mineral",
            "d) Nenhuma das anteriores",
          ],
          correta: 1,
          explicacao:
            "Descarbonização é o processo de reduzir emissões de carbono, principalmente na geração de energia.",
        },
        {
          id: 14,
          texto: "Qual é a principal desvantagem da energia nuclear?",
          alternativas: [
            "a) Produz energia renovável",
            "b) Gera resíduos radioativos perigosos",
            "c) É totalmente limpa",
            "d) Depende de vento para funcionar",
          ],
          correta: 1,
          explicacao:
            "Apesar de não emitir gases de efeito estufa, a energia nuclear produz lixo radioativo de difícil descarte.",
        },
        {
          id: 15,
          texto: "Como a ODS 7 ajuda no combate às mudanças climáticas?",
          alternativas: [
            "a) Incentivando o uso de combustíveis fósseis",
            "b) Promovendo o uso de energias renováveis que reduzem emissões",
            "c) Ampliando a dependência de petróleo",
            "d) Aumentando a poluição industrial",
          ],
          correta: 1,
          explicacao:
            "A transição para energias limpas reduz a emissão de gases de efeito estufa, principais causadores das mudanças climáticas.",
        },
      ],
    },
  },
  {
    ods: 8,
    titulo: "Trabalho Decente e Crescimento Econômico",
    descricao:
      "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 8?",
          alternativas: [
            "a) Erradicar a pobreza",
            "b) Promover crescimento econômico sustentável com trabalho decente para todos",
            "c) Reduzir a desigualdade de gênero",
            "d) Proteger o meio ambiente",
          ],
          correta: 1,
          explicacao:
            "A ODS 8 busca crescimento econômico sustentável junto com oportunidades de trabalho pleno, produtivo e decente para todos.",
        },
        {
          id: 2,
          texto: "O que caracteriza um emprego digno?",
          alternativas: [
            "a) Apenas ter salário mínimo",
            "b) Condições seguras, remuneração justa e proteção social",
            "c) Trabalho infantil",
            "d) Jornadas excessivas sem direitos",
          ],
          correta: 1,
          explicacao:
            "Trabalho decente inclui remuneração justa, segurança no local de trabalho, proteção social e diálogo social.",
        },
        {
          id: 3,
          texto:
            "Qual setor é essencial para o crescimento econômico inclusivo?",
          alternativas: [
            "a) Apenas o setor financeiro",
            "b) Todos os setores (agrícola, industrial, serviços)",
            "c) Somente grandes corporações",
            "d) Apenas o setor público",
          ],
          correta: 1,
          explicacao:
            "Um crescimento verdadeiramente inclusivo requer desenvolvimento equilibrado em todos os setores da economia.",
        },
        {
          id: 4,
          texto: "O que significa 'emprego pleno e produtivo' na ODS 8?",
          alternativas: [
            "a) Qualquer tipo de emprego, mesmo precário",
            "b) Oportunidades de trabalho que geram valor econômico e social",
            "c) Apenas empregos no setor formal",
            "d) Trabalho voluntário não remunerado",
          ],
          correta: 1,
          explicacao:
            "Significa empregos que contribuem significativamente para a economia e permitem condições dignas de vida.",
        },
        {
          id: 5,
          texto: "Qual é um dos principais desafios para o trabalho decente?",
          alternativas: [
            "a) Eliminação do trabalho infantil",
            "b) Redução da jornada de trabalho",
            "c) Aumento dos salários executivos",
            "d) Diminuição de impostos",
          ],
          correta: 0,
          explicacao:
            "O trabalho infantil ainda afeta 160 milhões de crianças globalmente, violando seus direitos básicos.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual é o impacto do emprego decente no desenvolvimento?",
          alternativas: [
            "a) Reduz desigualdades e estimula economia local",
            "b) Aumenta apenas o PIB nacional",
            "c) Beneficia apenas grandes empresas",
            "d) Diminui a necessidade de educação",
          ],
          correta: 0,
          explicacao:
            "Trabalho decente distribui renda, reduz pobreza e cria ciclos virtuosos de consumo e produção locais.",
        },
        {
          id: 7,
          texto: "O que é 'desemprego estrutural'?",
          alternativas: [
            "a) Desemprego por falta de qualificação para novas tecnologias",
            "b) Desemprego sazonal em certas épocas do ano",
            "c) Desemprego por escolha pessoal",
            "d) Desemprego temporário entre empregos",
          ],
          correta: 0,
          explicacao:
            "Ocorre quando há descompasso entre habilidades dos trabalhadores e demandas do mercado em transformação.",
        },
        {
          id: 8,
          texto: "Como políticas de capacitação profissional ajudam na ODS 8?",
          alternativas: [
            "a) Preparam para empregos do futuro e reduzem desemprego",
            "b) Aumentam apenas o custo do governo",
            "c) Substituem a necessidade de educação formal",
            "d) Beneficiam apenas jovens recém-formados",
          ],
          correta: 0,
          explicacao:
            "Capacitação contínua é essencial para adaptação às mudanças tecnológicas e demandas do mercado.",
        },
        {
          id: 9,
          texto: "Qual a relação entre PIB e trabalho decente?",
          alternativas: [
            "a) Crescimento deve beneficiar trabalhadores, não só números",
            "b) PIB alto sempre significa bons empregos",
            "c) São conceitos sem relação",
            "d) Trabalho decente reduz o PIB",
          ],
          correta: 0,
          explicacao:
            "O crescimento econômico (PIB) só é sustentável quando gera bons empregos e melhora condições de vida.",
        },
        {
          id: 10,
          texto: "Por que a formalização do trabalho é importante?",
          alternativas: [
            "a) Garante direitos trabalhistas e proteção social",
            "b) Aumenta custos para empregadores",
            "c) Limita oportunidades de emprego",
            "d) É irrelevante para a economia",
          ],
          explicacao:
            "Trabalho formal assegura acesso a direitos, previdência e estabilidade, reduzindo vulnerabilidades.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Como a Quarta Revolução Industrial impacta o trabalho?",
          alternativas: [
            "a) Exige novas habilidades e adaptação contínua",
            "b) Elimina completamente a necessidade de trabalhadores",
            "c) Não afeta os empregos existentes",
            "d) Reduz a importância da educação",
          ],
          correta: 0,
          explicacao:
            "Automação e IA transformam empregos, exigindo requalificação constante e políticas ativas de emprego.",
        },
        {
          id: 12,
          texto: "O que é 'trabalho análogo à escravidão'?",
          alternativas: [
            "a) Jornadas exaustivas ou condições degradantes",
            "b) Qualquer trabalho manual",
            "c) Empregos com baixos salários",
            "d) Trabalho temporário",
          ],
          correta: 0,
          explicacao:
            "Inclui trabalho forçado, jornadas exaustivas, servidão por dívida e condições degradantes de trabalho.",
        },
        {
          id: 13,
          texto: "Qual a relação entre ODS 8 e ODS 5 (Igualdade de Gênero)?",
          alternativas: [
            "a) Equidade salarial e oportunidades iguais no trabalho",
            "b) São objetivos independentes",
            "c) ODS 5 prejudica o crescimento econômico",
            "d) Mulheres devem ter prioridade em empregos",
          ],
          correta: 0,
          explicacao:
            "Igualdade de gênero no mercado de trabalho é essencial para crescimento econômico sustentável e inclusivo.",
        },
        {
          id: 14,
          texto: "Como empreendedorismo contribui para ODS 8?",
          alternativas: [
            "a) Cria empregos e inovações, especialmente em MPMEs",
            "b) Só beneficia grandes empresas",
            "c) Aumenta a informalidade",
            "d) Reduz a arrecadação de impostos",
          ],
          correta: 0,
          explicacao:
            "Micro e pequenas empresas respondem por 70% dos empregos globais, sendo motor de desenvolvimento.",
        },
        {
          id: 15,
          texto: "Qual meta específica da ODS 8 para 2030?",
          alternativas: [
            "a) Reduzir jovens 'nem-nem' (que não estudam nem trabalham)",
            "b) Eliminar todos os impostos sobre empregos",
            "c) Garantir que todos tenham home office",
            "d) Acabar com o setor industrial",
          ],
          correta: 0,
          explicacao:
            "Meta 8.6 busca reduzir substancialmente a proporção de jovens sem emprego ou qualificação até 2030.",
        },
      ],
    },
  },
  {
    ods: 9,
    titulo: "Indústria, Inovação e Infraestrutura",
    descricao:
      "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 9?",
          alternativas: [
            "a) Erradicar a pobreza extrema",
            "b) Construir infraestrutura sustentável e promover inovação industrial",
            "c) Reduzir a desigualdade entre países",
            "d) Proteger a vida terrestre",
          ],
          correta: 1,
          explicacao:
            "A ODS 9 visa desenvolver infraestrutura de qualidade, promover industrialização sustentável e fomentar inovação tecnológica.",
        },
        {
          id: 2,
          texto: "O que caracteriza uma infraestrutura sustentável?",
          alternativas: [
            "a) Uso intensivo de recursos naturais",
            "b) Baixo impacto ambiental e eficiência energética",
            "c) Tecnologia de ponta independente dos custos",
            "d) Exclusivo uso de materiais não recicláveis",
          ],
          correta: 1,
          explicacao:
            "Infraestrutura sustentável minimiza impactos ambientais, usa recursos eficientemente e é resiliente às mudanças climáticas.",
        },
        {
          id: 3,
          texto:
            "Qual destes é um exemplo de inovação tecnológica sustentável?",
          alternativas: [
            "a) Carros movidos a combustível fóssil",
            "b) Sistemas de irrigação por gotejamento",
            "c) Usinas termelétricas a carvão",
            "d) Desmatamento para construção",
          ],
          correta: 1,
          explicacao:
            "A irrigação por gotejamento é uma inovação que economiza água e aumenta a eficiência agrícola.",
        },
        {
          id: 4,
          texto: "O que significa 'infraestrutura resiliente'?",
          alternativas: [
            "a) Infraestrutura que resiste a desastres naturais e mudanças climáticas",
            "b) Infraestrutura de baixo custo de construção",
            "c) Infraestrutura que não requer manutenção",
            "d) Infraestrutura temporária",
          ],
          correta: 0,
          explicacao:
            "Resiliência em infraestrutura significa capacidade de resistir e se adaptar a choques climáticos e desastres naturais.",
        },
        {
          id: 5,
          texto: "Qual setor é fundamental para implementação da ODS 9?",
          alternativas: [
            "a) Setor de entretenimento",
            "b) Setor de pesquisa e desenvolvimento",
            "c) Setor de importações de luxo",
            "d) Setor de mineração não regulamentada",
          ],
          correta: 1,
          explicacao:
            "Pesquisa e desenvolvimento são cruciais para criar inovações tecnológicas e soluções industriais sustentáveis.",
        },
      ],
      medio: [
        {
          id: 6,
          texto:
            "Como a industrialização inclusiva contribui para o desenvolvimento?",
          alternativas: [
            "a) Aumenta apenas o PIB dos países ricos",
            "b) Cria empregos dignos e reduz desigualdades regionais",
            "c) Beneficia somente grandes centros urbanos",
            "d) Diminui a necessidade de educação técnica",
          ],
          correta: 1,
          explicacao:
            "Industrialização inclusiva gera empregos qualificados e desenvolve regiões menos favorecidas, reduzindo desigualdades.",
        },
        {
          id: 7,
          texto:
            "Qual é o impacto da infraestrutura de transporte no desenvolvimento?",
          alternativas: [
            "a) Aumenta o isolamento de comunidades rurais",
            "b) Facilita o comércio e acesso a serviços essenciais",
            "c) Reduz a necessidade de indústrias locais",
            "d) Aumenta apenas os custos logísticos",
          ],
          correta: 1,
          explicacao:
            "Boa infraestrutura de transporte conecta mercados, reduz custos e melhora acesso a saúde e educação.",
        },
        {
          id: 8,
          texto: "O que é a Quarta Revolução Industrial?",
          alternativas: [
            "a) Era da automação e tecnologias digitais integradas",
            "b) Expansão da indústria pesada",
            "c) Produção em massa de bens de consumo",
            "d) Uso exclusivo de energia fóssil",
          ],
          correta: 0,
          explicacao:
            "Caracterizada por fusão de tecnologias digitais, físicas e biológicas, como IoT, IA e robótica avançada.",
        },
        {
          id: 9,
          texto: "Por que o acesso à internet é importante para ODS 9?",
          alternativas: [
            "a) Permite apenas entretenimento digital",
            "b) Facilita comércio eletrônico e acesso à informação",
            "c) Reduz a necessidade de infraestrutura física",
            "d) Substitui completamente a industrialização",
          ],
          correta: 1,
          explicacao:
            "Internet é infraestrutura crítica para inovação, educação digital e inclusão econômica na era 4.0.",
        },
        {
          id: 10,
          texto:
            "Qual é um desafio da industrialização em países em desenvolvimento?",
          alternativas: [
            "a) Falta de mão-de-obra qualificada",
            "b) Excesso de regulamentações ambientais",
            "c) Baixa necessidade de empregos",
            "d) Sobrecarga de infraestrutura existente",
          ],
          correta: 0,
          explicacao:
            "Muitos países enfrentam lacunas educacionais que dificultam a formação de trabalhadores para indústrias modernas.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que significa 'economia circular' no contexto industrial?",
          alternativas: [
            "a) Sistema de reutilização máxima de materiais e energia",
            "b) Produção linear tradicional",
            "c) Foco exclusivo em lucros crescentes",
            "d) Industrialização sem preocupação ambiental",
          ],
          correta: 0,
          explicacao:
            "Modelo que minimiza resíduos através do reaproveitamento, reciclagem e design sustentável de produtos.",
        },
        {
          id: 12,
          texto:
            "Como cidades inteligentes ('smart cities') se relacionam com ODS 9?",
          alternativas: [
            "a) Usam IoT e big data para infraestrutura eficiente",
            "b) Priorizam apenas soluções tecnológicas caras",
            "c) Ignoram sustentabilidade ambiental",
            "d) Beneficiam apenas áreas ricas",
          ],
          correta: 0,
          explicacao:
            "Smart cities integram tecnologia e sustentabilidade para melhorar mobilidade, energia e gestão urbana.",
        },
        {
          id: 13,
          texto:
            "Qual meta específica da ODS 9 para países menos desenvolvidos?",
          alternativas: [
            "a) Dobrar participação industrial no PIB até 2030",
            "b) Reduzir todas as atividades industriais",
            "c) Eliminar a necessidade de infraestrutura",
            "d) Priorizar apenas agricultura tradicional",
          ],
          correta: 0,
          explicacao:
            "Meta 9.2 busca acelerar industrialização inclusiva nesses países, aumentando emprego e PIB industrial.",
        },
        {
          id: 14,
          texto:
            "Qual o papel das PMEs (Pequenas e Médias Empresas) na inovação?",
          alternativas: [
            "a) São responsáveis por 60% das inovações incrementais",
            "b) Não contribuem para desenvolvimento tecnológico",
            "c) Apenas copiam tecnologias estrangeiras",
            "d) Prejudicam a competitividade industrial",
          ],
          correta: 0,
          explicacao:
            "PMEs são ágeis na adaptação e desenvolvimento de soluções inovadoras para mercados locais.",
        },
        {
          id: 15,
          texto: "Como a ODS 9 se relaciona com a ODS 7 (Energia Limpa)?",
          alternativas: [
            "a) Indústria sustentável requer energia renovável",
            "b) São objetivos completamente independentes",
            "c) Energia limpa reduz a necessidade de indústria",
            "d) Industrialização deve priorizar combustíveis fósseis",
          ],
          correta: 0,
          explicacao:
            "Indústria sustentável depende de transição para fontes renováveis para reduzir emissões e impactos ambientais.",
        },
      ],
    },
  },
  {
    ods: 10,
    titulo: "Redução das Desigualdades",
    descricao: "Reduzir a desigualdade dentro dos países e entre eles",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 10?",
          alternativas: [
            "a) Eliminar completamente as diferenças culturais",
            "b) Reduzir desigualdades de renda e oportunidades entre pessoas e nações",
            "c) Uniformizar todos os sistemas políticos",
            "d) Criar um único sistema econômico global",
          ],
          correta: 1,
          explicacao:
            "A ODS 10 busca reduzir desigualdades econômicas e sociais, tanto dentro dos países quanto entre nações diferentes.",
        },
        {
          id: 2,
          texto:
            "Qual desses é um exemplo de desigualdade que a ODS 10 combate?",
          alternativas: [
            "a) Diferenças climáticas entre países",
            "b) Desigualdade de acesso à educação de qualidade",
            "c) Variedade de idiomas falados no mundo",
            "d) Diversidade de espécies animais",
          ],
          correta: 1,
          explicacao:
            "A desigualdade no acesso à educação é um dos focos da ODS 10, pois limita oportunidades de desenvolvimento pessoal e profissional.",
        },
        {
          id: 3,
          texto: "Como a ODS 10 propõe reduzir desigualdades entre países?",
          alternativas: [
            "a) Através de assistência técnica e financeira a nações em desenvolvimento",
            "b) Eliminando todas as fronteiras nacionais",
            "c) Proibindo o comércio internacional",
            "d) Uniformizando todas as culturas",
          ],
          correta: 0,
          explicacao:
            "A cooperação internacional e apoio ao desenvolvimento são estratégias-chave para reduzir disparidades entre nações.",
        },
        {
          id: 4,
          texto: "O que significa 'desigualdade social'?",
          alternativas: [
            "a) Diferenças naturais entre pessoas",
            "b) Desigual distribuição de recursos e oportunidades",
            "c) Variedade de opiniões políticas",
            "d) Existência de diferentes religiões",
          ],
          correta: 1,
          explicacao:
            "Desigualdade social refere-se à distribuição desigual de recursos, direitos e oportunidades entre grupos sociais.",
        },
        {
          id: 5,
          texto:
            "Qual política ajuda a reduzir desigualdades dentro de um país?",
          alternativas: [
            "a) Impostos progressivos que cobram mais dos mais ricos",
            "b) Eliminação de todos os programas sociais",
            "c) Concentração de investimentos apenas nas capitais",
            "d) Redução do salário mínimo",
          ],
          correta: 0,
          explicacao:
            "Sistemas tributários progressivos são ferramentas importantes para redistribuição de renda e redução de desigualdades.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Por que a migração é um tema importante para a ODS 10?",
          alternativas: [
            "a) Migrantes frequentemente enfrentam discriminação e desigualdade",
            "b) Todos devem viver apenas em seu país de origem",
            "c) A migração é a principal causa da desigualdade global",
            "d) Os migrantes não contribuem para as economias",
          ],
          correta: 0,
          explicacao:
            "A ODS 10 busca garantir tratamento justo a migrantes, que muitas vezes enfrentam condições desiguais e vulnerabilidade.",
        },
        {
          id: 7,
          texto: "Como o acesso à tecnologia pode reduzir desigualdades?",
          alternativas: [
            "a) Democratizando acesso à informação e oportunidades",
            "b) Substituindo completamente a educação formal",
            "c) Eliminando a necessidade de professores",
            "d) Criando dependência de grandes empresas de tecnologia",
          ],
          correta: 0,
          explicacao:
            "Tecnologia inclusiva pode oferecer oportunidades educacionais e econômicas a grupos tradicionalmente marginalizados.",
        },
        {
          id: 8,
          texto: "Qual é a relação entre desigualdade e crescimento econômico?",
          alternativas: [
            "a) Alta desigualdade pode prejudicar o crescimento sustentável",
            "b) Desigualdade é necessária para o crescimento econômico",
            "c) Crescimento econômico automaticamente reduz desigualdades",
            "d) São conceitos completamente independentes",
          ],
          correta: 0,
          explicacao:
            "Estudos mostram que desigualdades extremas limitam o potencial de crescimento econômico de longo prazo.",
        },
        {
          id: 9,
          texto:
            "O que significa 'desigualdade de gênero' no mercado de trabalho?",
          alternativas: [
            "a) Diferenças biológicas entre homens e mulheres",
            "b) Disparidades salariais e de oportunidades por gênero",
            "c) Preferência natural por determinadas profissões",
            "d) Necessidade de separar homens e mulheres no trabalho",
          ],
          correta: 1,
          explicacao:
            "Refere-se às diferenças injustificadas em salários, oportunidades de carreira e tratamento entre gêneros.",
        },
        {
          id: 10,
          texto: "Qual destes é um indicador de desigualdade econômica?",
          alternativas: [
            "a) Coeficiente de Gini",
            "b) Produto Interno Bruto",
            "c) Taxa de natalidade",
            "d) Índice de desenvolvimento humano",
          ],
          correta: 0,
          explicacao:
            "O Coeficiente de Gini mede a distribuição de renda numa escala de 0 (igualdade perfeita) a 1 (desigualdade máxima).",
        },
      ],
      dificil: [
        {
          id: 11,
          texto:
            "Qual meta da ODS 10 trata da representação dos países em desenvolvimento?",
          alternativas: [
            "a) Garantir voz nas instituições de governança global",
            "b) Eliminar todas as organizações internacionais",
            "c) Criar um único governo mundial",
            "d) Reduzir a participação do setor privado",
          ],
          correta: 0,
          explicacao:
            "Meta 10.6 busca maior representação e voz para países em desenvolvimento em instituições econômicas globais.",
        },
        {
          id: 12,
          texto: "O que significa 'política fiscal redistributiva'?",
          alternativas: [
            "a) Uso de impostos e gastos públicos para reduzir desigualdades",
            "b) Eliminação de todos os impostos",
            "c) Concentração de recursos nas mãos do Estado",
            "d) Redução de investimentos em saúde e educação",
          ],
          correta: 0,
          explicacao:
            "São políticas que usam sistema tributário progressivo e gastos sociais para redistribuir renda e oportunidades.",
        },
        {
          id: 13,
          texto: "Como a desigualdade afeta o alcance de outros ODS?",
          alternativas: [
            "a) Desigualdades dificultam acesso universal a saúde e educação",
            "b) Não tem relação com outros objetivos",
            "c) Ajuda a alcançar metas ambientais mais rapidamente",
            "d) Reduz a necessidade de cooperação internacional",
          ],
          correta: 0,
          explicacao:
            "Altos níveis de desigualdade tornam mais difícil alcançar objetivos como educação de qualidade e erradicação da pobreza.",
        },
        {
          id: 14,
          texto:
            "Qual é o 'Princípio do Tratamento Especial e Diferenciado' na OMC?",
          alternativas: [
            "a) Regras mais flexíveis para países em desenvolvimento",
            "b) Prioridade absoluta para países ricos",
            "c) Eliminação de todas as barreiras comerciais",
            "d) Proibição de acordos regionais",
          ],
          correta: 0,
          explicacao:
            "Este princípio reconhece necessidades diferentes de países em desenvolvimento no comércio internacional.",
        },
        {
          id: 15,
          texto: "Como a ODS 10 se relaciona com a Agenda 2030 como um todo?",
          alternativas: [
            "a) A redução de desigualdades é essencial para desenvolvimento sustentável",
            "b) É o único objetivo realmente importante",
            "c) Conflita com outros objetivos de crescimento econômico",
            "d) Deve ser alcançada apenas após outros objetivos",
          ],
          correta: 0,
          explicacao:
            "Reduzir desigualdades cria bases mais sólidas para alcançar todos os outros objetivos de desenvolvimento sustentável.",
        },
      ],
    },
  },
  {
    ods: 11,
    titulo: "Cidades e Comunidades Sustentáveis",
    descricao:
      "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 11?",
          alternativas: [
            "a) Reduzir a pobreza rural",
            "b) Tornar cidades mais sustentáveis e inclusivas",
            "c) Aumentar a produção industrial",
            "d) Expandir áreas agrícolas",
          ],
          correta: 1,
          explicacao:
            "A ODS 11 visa tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis até 2030.",
        },
        {
          id: 2,
          texto:
            "Qual destes é um problema urbano que a ODS 11 busca resolver?",
          alternativas: [
            "a) Falta de acesso a moradia adequada",
            "b) Excesso de áreas verdes",
            "c) Baixa densidade populacional",
            "d) Poucas opções de transporte privado",
          ],
          correta: 0,
          explicacao:
            "Mais de 1 bilhão de pessoas vivem em favelas ou assentamentos informais, um dos focos da ODS 11.",
        },
        {
          id: 3,
          texto: "O que significa 'cidade resiliente' no contexto da ODS 11?",
          alternativas: [
            "a) Cidade que resiste a crises e desastres naturais",
            "b) Cidade com muitos recursos naturais",
            "c) Cidade com alta taxa de crescimento",
            "d) Cidade com pouca diversidade cultural",
          ],
          correta: 0,
          explicacao:
            "Resiliência urbana é a capacidade de se adaptar e recuperar de choques como desastres climáticos ou crises econômicas.",
        },
        {
          id: 4,
          texto: "Qual destes é um exemplo de transporte sustentável?",
          alternativas: [
            "a) Carros individuais a gasolina",
            "b) Ônibus elétricos",
            "c) Motos poluentes",
            "d) Aviões particulares",
          ],
          correta: 1,
          explicacao:
            "Transporte público elétrico reduz emissões e congestionamentos, sendo opção sustentável para mobilidade urbana.",
        },
        {
          id: 5,
          texto:
            "Por que espaços públicos verdes são importantes para cidades sustentáveis?",
          alternativas: [
            "a) Melhoram qualidade do ar e bem-estar dos cidadãos",
            "b) Aumentam o valor dos imóveis vizinhos",
            "c) Reduzem a necessidade de transporte público",
            "d) Eliminam completamente a poluição",
          ],
          correta: 0,
          explicacao:
            "Áreas verdes urbanas filtram poluentes, reduzem ilhas de calor e proporcionam espaços de recreação e saúde mental.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual é a relação entre ODS 11 e mudanças climáticas?",
          alternativas: [
            "a) Cidades são responsáveis por 70% das emissões globais de CO₂",
            "b) Áreas urbanas não são afetadas por eventos climáticos extremos",
            "c) Sustentabilidade urbana não impacta o clima",
            "d) Cidades rurais são as maiores poluidoras",
          ],
          correta: 0,
          explicacao:
            "Cidades consomem grande parte da energia mundial e são vulneráveis a mudanças climáticas, exigindo ações integradas.",
        },
        {
          id: 7,
          texto: "O que são 'cidades inteligentes' (smart cities)?",
          alternativas: [
            "a) Cidades que usam tecnologia para melhorar serviços e qualidade de vida",
            "b) Cidades com apenas habitantes jovens",
            "c) Cidades que proíbem o uso de qualquer tecnologia",
            "d) Cidades sem nenhum espaço público",
          ],
          explicacao:
            "Smart cities utilizam IoT, big data e tecnologias digitais para otimizar transporte, energia e gestão urbana.",
        },
        {
          id: 8,
          texto:
            "Qual meta da ODS 11 trata especificamente de assentamentos informais?",
          alternativas: [
            "a) Garantir moradia adequada e segura para todos até 2030",
            "b) Eliminar completamente os prédios altos",
            "c) Reduzir a população urbana mundial",
            "d) Priorizar apenas áreas rurais",
          ],
          correta: 0,
          explicacao:
            "Meta 11.1 busca acesso universal a moradia adequada, segura e a preço acessível, com foco em favelas e assentamentos precários.",
        },
        {
          id: 9,
          texto: "Por que a acessibilidade urbana é importante para a ODS 11?",
          alternativas: [
            "a) Garante que todos, incluindo idosos e PCDs, possam usar a cidade",
            "b) Aumenta o custo das construções",
            "c) É relevante apenas para centros comerciais",
            "d) Beneficia apenas turistas estrangeiros",
          ],
          correta: 0,
          explicacao:
            "Cidades inclusivas devem ter calçadas, transportes e edifícios acessíveis para pessoas com mobilidade reduzida ou deficiências.",
        },
        {
          id: 10,
          texto: "Como a ODS 11 aborda a gestão de resíduos urbanos?",
          alternativas: [
            "a) Promovendo reciclagem e redução de desperdícios",
            "b) Incentivando lixões a céu aberto",
            "c) Ignorando o problema do lixo eletrônico",
            "d) Priorizando apenas a incineração",
          ],
          correta: 0,
          explicacao:
            "Gestão sustentável de resíduos inclui redução, reuso, reciclagem e tratamento adequado, evitando impactos ambientais e à saúde.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que é 'urbanização inclusiva' na ODS 11?",
          alternativas: [
            "a) Planejamento urbano que considera necessidades de todos os grupos sociais",
            "b) Expansão urbana sem regulamentação",
            "c) Cidades exclusivas para alta renda",
            "d) Proibição de migração para áreas urbanas",
          ],
          correta: 0,
          explicacao:
            "Requer participação comunitária no planejamento e políticas que evitem segregação espacial e gentrificação excludente.",
        },
        {
          id: 12,
          texto: "Qual indicador mede o progresso da ODS 11 em moradia?",
          alternativas: [
            "a) Proporção da população urbana vivendo em favelas",
            "b) Número de shoppings centers construídos",
            "c) Quantidade de carros por habitante",
            "d) Altura média dos prédios",
          ],
          correta: 0,
          explicacao:
            "A redução da população em assentamentos informais é um indicador-chave para a meta 11.1 da ODS 11.",
        },
        {
          id: 13,
          texto: "Como a ODS 11 se relaciona com a economia circular?",
          alternativas: [
            "a) Promovendo sistemas urbanos de reuso de materiais e energia",
            "b) Incentivando o consumo linear descartável",
            "c) Aumentando a extração de recursos naturais",
            "d) Ignorando o ciclo de vida dos produtos",
          ],
          correta: 0,
          explicacao:
            "Cidades circulares reduzem desperdícios através de design regenerativo, compartilhamento de recursos e reciclagem de materiais.",
        },
        {
          id: 14,
          texto:
            "Qual é o desafio específico para cidades costeiras na ODS 11?",
          alternativas: [
            "a) Adaptação à elevação do nível do mar",
            "b) Excesso de áreas verdes",
            "c) Baixa densidade populacional",
            "d) Falta de interesse turístico",
          ],
          correta: 0,
          explicacao:
            "Cidades litorâneas precisam de infraestrutura resiliente contra enchentes e erosão costeira agravadas pelas mudanças climáticas.",
        },
        {
          id: 15,
          texto: "Como a ODS 11 aborda o patrimônio cultural urbano?",
          alternativas: [
            "a) Protegendo sítios históricos enquanto promove desenvolvimento",
            "b) Substituindo todos os edifícios antigos",
            "c) Ignorando a identidade cultural local",
            "d) Priorizando apenas arquitetura moderna",
          ],
          correta: 0,
          explicacao:
            "Meta 11.4 enfatiza a proteção do patrimônio cultural e natural mundial como parte do desenvolvimento urbano sustentável.",
        },
      ],
    },
  },
  {
    ods: 12,
    titulo: "Consumo e Produção Responsáveis",
    descricao: "Assegurar padrões de produção e de consumo sustentáveis",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 12?",
          alternativas: [
            "a) Aumentar o consumo de recursos naturais",
            "b) Promover eficiência no uso de recursos e reduzir desperdícios",
            "c) Expandir a produção de plásticos descartáveis",
            "d) Incentivar o consumismo desenfreado",
          ],
          correta: 1,
          explicacao:
            "A ODS 12 visa fazer mais com menos - dissociando crescimento econômico da degradação ambiental através de padrões sustentáveis.",
        },
        {
          id: 2,
          texto: "Qual destas ações contribui para o consumo responsável?",
          alternativas: [
            "a) Comprar produtos com excesso de embalagens",
            "b) Escolher produtos duráveis e reparáveis",
            "c) Descartar eletrônicos funcionando",
            "d) Ignorar rótulos de sustentabilidade",
          ],
          correta: 1,
          explicacao:
            "Produtos duráveis reduzem a necessidade de reposição frequente e o acúmulo de resíduos, sendo mais sustentáveis.",
        },
        {
          id: 3,
          texto: "O que significa 'pegada ecológica'?",
          alternativas: [
            "a) Impacto ambiental do consumo de uma pessoa ou população",
            "b) Número de sapatos que uma pessoa possui",
            "c) Área verde em uma cidade",
            "d) Quantidade de alimentos consumidos",
          ],
          correta: 0,
          explicacao:
            "Mede quantos planetas seriam necessários se todos vivessem como determinada população, considerando recursos consumidos e resíduos gerados.",
        },
        {
          id: 4,
          texto: "Qual prática ajuda a reduzir o desperdício de alimentos?",
          alternativas: [
            "a) Comprar em grandes quantidades sem planejamento",
            "b) Fazer lista de compras e aproveitar sobras",
            "c) Descartar alimentos por pequenos amassados",
            "d) Ignorar datas de validade",
          ],
          correta: 1,
          explicacao:
            "Planejamento e aproveitamento integral podem reduzir o desperdício doméstico, que representa 40% do total de alimentos perdidos.",
        },
        {
          id: 5,
          texto: "O que são '3Rs' da sustentabilidade?",
          alternativas: [
            "a) Reduzir, Reutilizar, Reciclar",
            "b) Reformar, Repetir, Rejeitar",
            "c) Revolver, Reunir, Reabastecer",
            "d) Retardar, Reclamar, Rejeitar",
          ],
          correta: 0,
          explicacao:
            "Hierarquia que prioriza primeiro reduzir consumo, depois reutilizar itens, e finalmente reciclar materiais.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual é a meta 12.5 da ODS 12 até 2030?",
          alternativas: [
            "a) Aumentar a geração de resíduos per capita",
            "b) Reduzir substancialmente a geração de resíduos através de prevenção, redução, reciclagem e reuso",
            "c) Eliminar completamente todos os aterros sanitários",
            "d) Dobrar o uso de embalagens plásticas",
          ],
          correta: 1,
          explicacao:
            "Esta meta específica busca abordar o ciclo completo de gestão de resíduos, com ênfase na prevenção e economia circular.",
        },
        {
          id: 7,
          texto: "O que é obsolescência programada?",
          alternativas: [
            "a) Projeto de produtos para durarem pouco e serem substituídos",
            "b) Técnica para aumentar a durabilidade de produtos",
            "c) Método de produção sem uso de recursos naturais",
            "d) Sistema de reciclagem automática",
          ],
          correta: 0,
          explicacao:
            "Prática controversa que gera consumo excessivo, combatida pela ODS 12 através de incentivos a produtos duráveis e reparáveis.",
        },
        {
          id: 8,
          texto: "Qual destes é um princípio da economia circular?",
          alternativas: [
            "a) Extrair-Produzir-Descartar",
            "b) Manter materiais em uso pelo maior tempo possível",
            "c) Maximizar o uso de recursos virgens",
            "d) Priorizar produtos descartáveis",
          ],
          correta: 1,
          explicacao:
            "Modelo circular busca eliminar resíduos através de design inteligente, manutenção, reuso e reciclagem de materiais.",
        },
        {
          id: 9,
          texto: "Por que a ODS 12 inclui metas sobre turismo sustentável?",
          alternativas: [
            "a) Setor turístico tem alto impacto em recursos e culturas locais",
            "b) Turismo não afeta o meio ambiente",
            "c) Viagens internacionais devem ser proibidas",
            "d) Hotéis já são totalmente sustentáveis",
          ],
          correta: 0,
          explicacao:
            "Meta 12.b visa reduzir impactos do turismo em comunidades e ecossistemas, promovendo práticas responsáveis.",
        },
        {
          id: 10,
          texto: "O que são 'Compras Públicas Sustentáveis'?",
          alternativas: [
            "a) Governos priorizando produtos/serviços com menor impacto ambiental",
            "b) Compras feitas apenas online",
            "c) Aquisição de produtos mais baratos sem critérios",
            "d) Eliminação de licitações públicas",
          ],
          correta: 0,
          explicacao:
            "Governos gastam em média 12% do PIB em compras - critérios sustentáveis nesses processos têm grande poder de transformação de mercados.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Qual indicador mede a 'pegada material' de um país?",
          alternativas: [
            "a) Quantidade de recursos naturais extraídos para atender à demanda de consumo",
            "b) Número de shoppings centers por habitante",
            "c) Quantidade de produtos importados",
            "d) Área de terras agricultáveis",
          ],
          correta: 0,
          explicacao:
            "A pegada material considera tanto extração doméstica quanto recursos embutidos em importações, mostrando impacto real do consumo.",
        },
        {
          id: 12,
          texto: "O que propõe o 'Acordo de Produção Limpa' na ODS 12?",
          alternativas: [
            "a) Reduzir poluição e uso de recursos através de melhores técnicas industriais",
            "b) Aumentar subsídios a indústrias poluentes",
            "c) Eliminar todas as regulamentações ambientais",
            "d) Priorizar apenas o lucro das empresas",
          ],
          correta: 0,
          explicacao:
            "Meta 12.4 busca gerenciar substâncias químicas e resíduos através de métodos de produção mais limpos e seguros.",
        },
        {
          id: 13,
          texto: "Qual a relação entre ODS 12 e mudanças climáticas?",
          alternativas: [
            "a) Produção e consumo são responsáveis por 60% das emissões globais de GEE",
            "b) Não há relação entre os temas",
            "c) Consumo sustentável aumenta emissões",
            "d) Só indústrias pesadas impactam o clima",
          ],
          correta: 0,
          explicacao:
            "Padrões insustentáveis de produção/consumo aceleram mudanças climáticas - daí a importância da eficiência de recursos.",
        },
        {
          id: 14,
          texto: "O que é 'desvinculação absoluta' na ODS 12?",
          alternativas: [
            "a) Crescimento econômico sem aumento no uso de recursos",
            "b) Aumento simultâneo de PIB e degradação ambiental",
            "c) Redução do consumo mantendo produção constante",
            "d) Eliminação completa da indústria",
          ],
          correta: 0,
          explicacao:
            "Conceito-chave que mostra ser possível desenvolver economicamente enquanto reduz impactos ambientais através de inovação e eficiência.",
        },
        {
          id: 15,
          texto: "Como a ODS 12 aborda países desenvolvidos?",
          alternativas: [
            "a) Devem liderar o consumo sustentável por terem maiores pegadas ecológicas",
            "b) Não têm responsabilidade sobre padrões globais",
            "c) Devem continuar consumindo no ritmo atual",
            "d) Suas políticas não afetam outros países",
          ],
          correta: 0,
          explicacao:
            "Meta 12.1 enfatiza que países ricos, cujo consumo per capita é muito alto, devem assumir maior responsabilidade na transição para sustentabilidade.",
        },
      ],
    },
  },
  {
    ods: 13,
    titulo: "Ação Contra a Mudança Global do Clima",
    descricao:
      "Tomar medidas urgentes para combater a mudança climática e seus impactos",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 13?",
          alternativas: [
            "a) Promover o uso de combustíveis fósseis",
            "b) Combater as mudanças climáticas e seus impactos",
            "c) Aumentar a produção industrial sem restrições",
            "d) Ignorar os eventos climáticos extremos",
          ],
          correta: 1,
          explicacao:
            "A ODS 13 visa tomar medidas urgentes para combater as mudanças climáticas e seus impactos, conforme o Acordo de Paris.",
        },
        {
          id: 2,
          texto: "Qual é o principal gás responsável pelo efeito estufa?",
          alternativas: [
            "a) Oxigênio (O₂)",
            "b) Dióxido de Carbono (CO₂)",
            "c) Nitrogênio (N₂)",
            "d) Hidrogênio (H₂)",
          ],
          correta: 1,
          explicacao:
            "O CO₂ é responsável por cerca de 76% das emissões de gases de efeito estufa, principalmente da queima de combustíveis fósseis.",
        },
        {
          id: 3,
          texto: "O que é mitigação climática?",
          alternativas: [
            "a) Ações para reduzir emissões de gases de efeito estufa",
            "b) Adaptação aos efeitos das mudanças climáticas",
            "c) Ignorar os problemas climáticos",
            "d) Aumentar o uso de carvão mineral",
          ],
          correta: 0,
          explicacao:
            "Mitigação envolve reduzir fontes de emissão (como queima de combustíveis) e aumentar sumidouros de carbono (como florestas).",
        },
        {
          id: 4,
          texto: "Qual destes é um exemplo de energia renovável?",
          alternativas: [
            "a) Carvão mineral",
            "b) Petróleo",
            "c) Energia eólica",
            "d) Gás natural",
          ],
          correta: 2,
          explicacao:
            "Energia eólica é renovável e limpa, diferentemente de combustíveis fósseis como carvão, petróleo e gás natural.",
        },
        {
          id: 5,
          texto: "Por que o Acordo de Paris é importante?",
          alternativas: [
            "a) É o primeiro acordo climático global com metas para todos os países",
            "b) Permite aumentar ilimitadamente as emissões",
            "c) Beneficia apenas países industrializados",
            "d) Ignora a ciência climática",
          ],
          correta: 0,
          explicacao:
            "Adotado em 2015, o Acordo de Paris estabelece o marco global para limitar o aquecimento a 1,5°C até 2100.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual é a meta de temperatura do Acordo de Paris?",
          alternativas: [
            "a) Limitar o aquecimento a 1,5°C acima dos níveis pré-industriais",
            "b) Aumentar a temperatura em 3°C até 2050",
            "c) Manter o uso ilimitado de combustíveis fósseis",
            "d) Ignorar completamente o aquecimento global",
          ],
          correta: 0,
          explicacao:
            "Manter o aquecimento abaixo de 1,5°C reduz riscos de impactos climáticos catastróficos, segundo o IPCC.",
        },
        {
          id: 7,
          texto: "O que são NDCs no contexto climático?",
          alternativas: [
            "a) Contribuições Nacionalmente Determinadas (planos climáticos de cada país)",
            "b) Novas Descobertas de Carvão",
            "c) Normas para Desmatamento Contínuo",
            "d) Níveis Diários de Consumo",
          ],
          correta: 0,
          explicacao:
            "As NDCs são os planos climáticos que cada país apresenta no Acordo de Paris, mostrando como reduzirá emissões.",
        },
        {
          id: 8,
          texto:
            "Qual setor é o maior emissor global de gases de efeito estufa?",
          alternativas: [
            "a) Setor de Energia (eletricidade e calor)",
            "b) Agricultura",
            "c) Resíduos",
            "d) Processos Industriais",
          ],
          correta: 0,
          explicacao:
            "O setor energético responde por cerca de 35% das emissões globais, principalmente da queima de carvão, gás e petróleo.",
        },
        {
          id: 9,
          texto: "O que é adaptação climática?",
          alternativas: [
            "a) Ajustar sistemas naturais e humanos aos impactos climáticos",
            "b) Aumentar a poluição atmosférica",
            "c) Ignorar os eventos climáticos extremos",
            "d) Reduzir o monitoramento do clima",
          ],
          correta: 0,
          explicacao:
            "Adaptação inclui medidas como agricultura resiliente, defesas costeiras e sistemas de alerta precoce para eventos extremos.",
        },
        {
          id: 10,
          texto: "Qual destes é um impacto das mudanças climáticas?",
          alternativas: [
            "a) Aumento do nível do mar",
            "b) Diminuição de eventos extremos",
            "c) Redução da temperatura global",
            "d) Maior disponibilidade de água doce",
          ],
          correta: 0,
          explicacao:
            "Derretimento de geleiras e expansão térmica dos oceanos elevam o nível do mar, ameaçando comunidades costeiras.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que é o orçamento de carbono global?",
          alternativas: [
            "a) Quantidade máxima de CO₂ que pode ser emitida para limitar o aquecimento",
            "b) Verba para pesquisa climática",
            "c) Dinheiro para compensar poluidores",
            "d) Fundo para exploração de petróleo",
          ],
          correta: 0,
          explicacao:
            "Para ter 66% de chance de limitar o aquecimento a 1,5°C, podemos emitir no máximo 400 GtCO₂ (a partir de 2020).",
        },
        {
          id: 12,
          texto: "Qual meta da ODS 13 trata de educação climática?",
          alternativas: [
            "a) 13.3 - Melhorar educação e conscientização sobre mudança climática",
            "b) 13.1 - Reforçar resiliência a desastres",
            "c) 13.a - Implementar financiamento climático",
            "d) 13.b - Promover mecanismos de planejamento",
          ],
          correta: 0,
          explicacao:
            "A meta 13.3 enfatiza a importância de educação, conscientização e capacitação humana e institucional sobre clima.",
        },
        {
          id: 13,
          texto: "O que é 'perdas e danos' nas negociações climáticas?",
          alternativas: [
            "a) Compensação por impactos climáticos que não puderam ser evitados",
            "b) Redução de impostos para petroleiras",
            "c) Financiamento para novas usinas de carvão",
            "d) Subsídios para desmatamento",
          ],
          correta: 0,
          explicacao:
            "Refere-se a mecanismos para lidar com danos climáticos irreversíveis, especialmente em países vulneráveis.",
        },
        {
          id: 14,
          texto: "Qual a relação entre ODS 13 e justiça climática?",
          alternativas: [
            "a) Países pobres sofrem mais apesar de contribuírem menos",
            "b) Todos os países poluem igualmente",
            "c) Países ricos não têm responsabilidade histórica",
            "d) Impactos são distribuídos igualmente",
          ],
          correta: 0,
          explicacao:
            "Os 50 países menos desenvolvidos respondem por apenas 1% das emissões, mas sofrem desproporcionalmente com os impactos.",
        },
        {
          id: 15,
          texto: "O que é o mecanismo de 'precificação de carbono'?",
          alternativas: [
            "a) Atribuir custo às emissões para incentivar reduções",
            "b) Subsidiar combustíveis fósseis",
            "c) Reduzir impostos sobre poluição",
            "d) Ignorar externalidades ambientais",
          ],
          correta: 0,
          explicacao:
            "Pode ser via impostos sobre carbono ou sistemas de comércio de emissões, internalizando os custos climáticos.",
        },
      ],
    },
  },
  {
    ods: 14,
    titulo: "Vida na Água",
    descricao:
      "Conservar e promover o uso sustentável dos oceanos, mares e recursos marinhos",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Por que os oceanos são importantes para o planeta?",
          alternativas: [
            "a) Cobrem 71% da Terra e regulam o clima",
            "b) São apenas grandes massas de água sem função ecológica",
            "c) Servem apenas como rotas de navegação",
            "d) Não têm relação com a produção de oxigênio",
          ],
          correta: 0,
          explicacao:
            "Os oceanos cobrem 71% do planeta, produzem 50% do nosso oxigênio e absorvem 30% do CO₂ emitido.",
        },
        {
          id: 2,
          texto: "Qual é a principal fonte de poluição marinha?",
          alternativas: [
            "a) Resíduos plásticos",
            "b) Nuvens",
            "c) Peixes",
            "d) Corais",
          ],
          correta: 0,
          explicacao:
            "Cerca de 8 milhões de toneladas de plástico entram nos oceanos anualmente, formando 80% do lixo marinho.",
        },
        {
          id: 3,
          texto: "O que são Áreas Marinhas Protegidas (AMPs)?",
          alternativas: [
            "a) Regiões onde atividades destrutivas são proibidas para conservar ecossistemas",
            "b) Áreas de pesca industrial intensiva",
            "c) Zonas de extração mineral sem controle",
            "d) Regiões sem regulamentação ambiental",
          ],
          correta: 0,
          explicacao:
            "AMPs são instrumentos essenciais para proteger biodiversidade e permitir a recuperação de estoques pesqueiros.",
        },
        {
          id: 4,
          texto:
            "Qual destes animais é mais afetado pelo plástico nos oceanos?",
          alternativas: [
            "a) Tartarugas marinhas",
            "b) Elefantes",
            "c) Girafas",
            "d) Cangurus",
          ],
          correta: 0,
          explicacao:
            "Tartarugas confundem sacos plásticos com águas-vivas, seu alimento, causando morte por ingestão ou emaranhamento.",
        },
        {
          id: 5,
          texto: "O que causa o branqueamento dos corais?",
          alternativas: [
            "a) Aumento da temperatura dos oceanos",
            "b) Diminuição da poluição",
            "c) Redução do turismo",
            "d) Aumento de peixes",
          ],
          correta: 0,
          explicacao:
            "O estresse térmico faz os corais expulsarem as algas simbióticas que lhes dão cor e nutrientes, levando ao branqueamento.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual meta da ODS 14 trata da pesca sustentável?",
          alternativas: [
            "a) 14.4 - Regular a pesca e acabar com a sobrepesca até 2020",
            "b) 14.1 - Reduzir a poluição marinha",
            "c) 14.5 - Proteger 10% das zonas costeiras",
            "d) 14.a - Aumentar subsídios à pesca industrial",
          ],
          correta: 0,
          explicacao:
            "A meta 14.4 busca acabar com a sobrepesca e práticas destrutivas, restaurando estoques pesqueiros até níveis sustentáveis.",
        },
        {
          id: 7,
          texto: "O que é acidificação dos oceanos?",
          alternativas: [
            "a) Redução do pH pela absorção de CO₂ atmosférico",
            "b) Aumento da salinidade da água",
            "c) Derretimento de geleiras",
            "d) Crescimento de algas tóxicas",
          ],
          correta: 0,
          explicacao:
            "Os oceanos absorvem 30% do CO₂ emitido, reagindo com água e formando ácido carbônico que reduz o pH, prejudicando vida marinha.",
        },
        {
          id: 8,
          texto: "Qual a importância dos manguezais?",
          alternativas: [
            "a) Berçários marinhos que protegem a costa",
            "b) Áreas sem valor ecológico",
            "c) Locais ideais para descarte de lixo",
            "d) Terrenos para expansão urbana",
          ],
          correta: 0,
          explicacao:
            "Manguezais abrigam 75% das espécies pescadas comercialmente e armazenam 4x mais carbono que florestas tropicais.",
        },
        {
          id: 9,
          texto: "O que é pesca INN?",
          alternativas: [
            "a) Pesca Ilegal, Não Declarada e Não Regulamentada",
            "b) Pesca Industrial Nacional Normalizada",
            "c) Programa de Incentivo à Navegação",
            "d) Técnica de Pesca Sustentável",
          ],
          correta: 0,
          explicacao:
            "A pesca INN responde por 20% das capturas globais, ameaçando estoques pesqueiros e ecossistemas marinhos.",
        },
        {
          id: 10,
          texto: "Qual destes é um 'peixe indicador' de sobrepesca?",
          alternativas: [
            "a) Atum-azul (população reduzida a 3% do original)",
            "b) Sardinha (reprodução rápida)",
            "c) Peixe-palhaço (não comercial)",
            "d) Cavalo-marinho (protegido)",
          ],
          correta: 0,
          explicacao:
            "O atum-azul do Atlântico sofreu redução de 97% devido à pesca excessiva, sendo símbolo da crise pesqueira global.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que é a 'Zona Econômica Exclusiva' (ZEE)?",
          alternativas: [
            "a) Área de 200 milhas náuticas onde países costeiros têm direitos sobre recursos",
            "b) Território internacional sem regulamentação",
            "c) Área de proteção integral sem atividades humanas",
            "d) Zona de pesca industrial sem controle",
          ],
          correta: 0,
          explicacao:
            "A ZEE é estabelecida pela Convenção da ONU sobre Direito do Mar, dando aos países soberania para explorar/manejar recursos.",
        },
        {
          id: 12,
          texto: "Qual meta da ODS 14 trata de subsídios pesqueiros?",
          alternativas: [
            "a) 14.6 - Proibir subsídios que contribuam para sobrepesca até 2020",
            "b) 14.2 - Proteger ecossistemas costeiros",
            "c) 14.3 - Reduzir acidificação",
            "d) 14.c - Implementar leis do mar",
          ],
          correta: 0,
          explicacao:
            "Subsídios à pesca ultrapassam US$ 35 bilhões/ano, sendo 60% prejudiciais por incentivar capacidade excessiva e sobrepesca.",
        },
        {
          id: 13,
          texto: "O que é a 'Década da Ciência Oceânica' (2021-2030)?",
          alternativas: [
            "a) Iniciativa da ONU para ampliar conhecimento científico sobre oceanos",
            "b) Período para expandir a mineração marinha",
            "c) Programa de pesca industrial intensiva",
            "d) Campanha para reduzir áreas protegidas",
          ],
          correta: 0,
          explicacao:
            "Declarada pela ONU para fortalecer cooperação científica e alcançar o ODS 14, com foco em soluções baseadas em ciência.",
        },
        {
          id: 14,
          texto: "Qual tratado internacional é fundamental para o ODS 14?",
          alternativas: [
            "a) Convenção das Nações Unidas sobre o Direito do Mar (UNCLOS)",
            "b) Acordo de Paris sobre Clima",
            "c) Convenção sobre Comércio de Armas",
            "d) Tratado de Não-Proliferação Nuclear",
          ],
          correta: 0,
          explicacao:
            "A UNCLOS (1982) estabelece o marco legal para conservação e uso sustentável dos oceanos e seus recursos.",
        },
        {
          id: 15,
          texto: "O que são 'zonas mortas' oceânicas?",
          alternativas: [
            "a) Áreas com excesso de oxigênio e vida marinha",
            "b) Regiões com baixo oxigênio por poluição de nutrientes",
            "c) Áreas de proteção marinha integral",
            "d) Zonas de recifes de coral saudáveis",
          ],
          correta: 1,
          explicacao:
            "Causadas por escoamento agrícola rico em fertilizantes, criam hipóxia que mata vida marinha - existem mais de 500 zonas mortas globais.",
        },
      ],
    },
  },
  {
    ods: 15,
    titulo: "Vida Terrestre",
    descricao:
      "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 15?",
          alternativas: [
            "a) Expandir áreas urbanas sem controle",
            "b) Proteger e restaurar ecossistemas terrestres e a biodiversidade",
            "c) Aumentar a mineração em áreas protegidas",
            "d) Promover o desmatamento ilegal",
          ],
          correta: 1,
          explicacao:
            "A ODS 15 visa proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres até 2030.",
        },
        {
          id: 2,
          texto: "O que causa a perda de biodiversidade?",
          alternativas: [
            "a) Desmatamento e mudanças climáticas",
            "b) Criação de áreas protegidas",
            "c) Reflorestamento",
            "d) Agricultura orgânica",
          ],
          correta: 0,
          explicacao:
            "Atividades humanas como desmatamento, poluição e mudanças climáticas estão acelerando a extinção de espécies em ritmo sem precedentes.",
        },
        {
          id: 3,
          texto: "O que são ecossistemas terrestres?",
          alternativas: [
            "a) Apenas florestas tropicais",
            "b) Todos os habitats naturais em terra firme (florestas, desertos, pradarias etc.)",
            "c) Somente áreas urbanas",
            "d) Apenas zonas agrícolas",
          ],
          correta: 1,
          explicacao:
            "Incluem todos os biomas terrestres naturais que abrigam diversas formas de vida e fornecem serviços ecossistêmicos essenciais.",
        },
        {
          id: 4,
          texto: "Qual destes é um exemplo de espécie ameaçada?",
          alternativas: [
            "a) Tigre (população reduziu 95% no século XX)",
            "b) Pombo-doméstico",
            "c) Formiga-comum",
            "d) Capim",
          ],
          correta: 0,
          explicacao:
            "Grandes felinos como tigres estão criticamente ameaçados devido à perda de habitat e caça ilegal.",
        },
        {
          id: 5,
          texto: "O que é desertificação?",
          alternativas: [
            "a) Expansão natural dos desertos existentes",
            "b) Degradação de terras férteis em regiões áridas devido a atividades humanas",
            "c) Criação de novos oásis",
            "d) Aumento da vegetação em áreas secas",
          ],
          correta: 1,
          explicacao:
            "Afeta mais de 3 bilhões de pessoas, principalmente devido ao manejo inadequado do solo e mudanças climáticas.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual meta da ODS 15 trata de florestas?",
          alternativas: [
            "a) 15.2 - Promover manejo sustentável de todos os tipos de florestas até 2020",
            "b) 15.1 - Conservar ecossistemas de água doce",
            "c) 15.5 - Reduzir degradação de habitats naturais",
            "d) 15.a - Aumentar recursos para biodiversidade",
          ],
          correta: 0,
          explicacao:
            "Esta meta específica busca deter o desmatamento e restaurar florestas degradadas, aumentando o florestamento global.",
        },
        {
          id: 7,
          texto: "O que são 'serviços ecossistêmicos'?",
          alternativas: [
            "a) Benefícios que a natureza fornece aos humanos (ar puro, água limpa, polinização)",
            "b) Serviços de entrega em áreas rurais",
            "c) Atividades de mineração em florestas",
            "d) Sistemas de irrigação artificial",
          ],
          correta: 0,
          explicacao:
            "Incluem provisão (alimentos), regulação (clima), culturais (recreação) e serviços de suporte (ciclos nutrientes).",
        },
        {
          id: 8,
          texto: "Qual a importância das florestas tropicais?",
          alternativas: [
            "a) Abrigam mais de 50% da biodiversidade terrestre",
            "b) São áreas pouco importantes ecologicamente",
            "c) Servem apenas para extração de madeira",
            "d) Não afetam o clima global",
          ],
          correta: 0,
          explicacao:
            "Embora cubram apenas 7% da superfície terrestre, contêm mais da metade de todas as espécies de plantas e animais.",
        },
        {
          id: 9,
          texto: "O que é agricultura regenerativa?",
          alternativas: [
            "a) Práticas que restauram a saúde do solo e ecossistemas",
            "b) Uso intensivo de agrotóxicos",
            "c) Monoculturas em grande escala",
            "d) Desmatamento para cultivo",
          ],
          correta: 0,
          explicacao:
            "Inclui rotação de culturas, plantio direto e integração lavoura-pecuária-floresta para regenerar solos degradados.",
        },
        {
          id: 10,
          texto: "Qual destes é um 'hotspot' de biodiversidade?",
          alternativas: [
            "a) Mata Atlântica (menos de 10% da cobertura original)",
            "b) Centro urbano densamente povoado",
            "c) Deserto do Saara",
            "d) Área agrícola monocultural",
          ],
          correta: 0,
          explicacao:
            "Hotspots são regiões com alta biodiversidade e grande ameaça, restando menos de 30% de sua vegetação original.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que é a Convenção sobre Diversidade Biológica (CDB)?",
          alternativas: [
            "a) Tratado internacional para conservação e uso sustentável da biodiversidade",
            "b) Acordo para expandir a mineração em áreas protegidas",
            "c) Organização que promove espécies invasoras",
            "d) Programa de desmatamento controlado",
          ],
          correta: 0,
          explicacao:
            "Adotada na Rio-92, a CDB tem três objetivos: conservação, uso sustentável e repartição justa de benefícios genéticos.",
        },
        {
          id: 12,
          texto: "Qual meta da ODS 15 trata de tráfico ilegal de espécies?",
          alternativas: [
            "a) 15.7 - Tomar medidas urgentes contra caça ilegal e tráfico de espécies protegidas",
            "b) 15.3 - Combater desertificação",
            "c) 15.4 - Conservar ecossistemas de montanha",
            "d) 15.6 - Promover repartição justa de benefícios genéticos",
          ],
          correta: 0,
          explicacao:
            "O tráfico de vida silvestre movimenta US$ 23 bilhões/ano, sendo a 4ª atividade ilegal mais lucrativa globalmente.",
        },
        {
          id: 13,
          texto:
            "O que é a 'Década da ONU para Restauração de Ecossistemas' (2021-2030)?",
          alternativas: [
            "a) Iniciativa global para restaurar 350 milhões de hectares de terras degradadas",
            "b) Período para expandir a agricultura industrial",
            "c) Programa de mineração sustentável",
            "d) Campanha para reduzir áreas protegidas",
          ],
          correta: 0,
          explicacao:
            "Busca restaurar ecossistemas em todos os continentes para combater mudanças climáticas e garantir segurança alimentar.",
        },
        {
          id: 14,
          texto: "Qual o impacto das espécies invasoras?",
          alternativas: [
            "a) São a segunda maior causa de extinção de espécies nativas",
            "b) Melhoram a biodiversidade local",
            "c) Não afetam ecossistemas naturais",
            "d) Ajudam no controle biológico natural",
          ],
          correta: 0,
          explicacao:
            "Espécies como o javali e o mexilhão-dourado causam prejuízos ambientais e econômicos bilionários anualmente.",
        },
        {
          id: 15,
          texto: "O que é a Meta 30x30 para biodiversidade?",
          alternativas: [
            "a) Proteger 30% das áreas terrestres e marinhas até 2030",
            "b) Aumentar 30% a produção agrícola",
            "c) Reduzir 30% das áreas protegidas",
            "d) Expandir 30% as cidades até 2030",
          ],
          correta: 0,
          explicacao:
            "Acordada na COP15 da CDB, é a principal meta do Marco Global de Biodiversidade pós-2020 para conter a crise ecológica.",
        },
      ],
    },
  },
  {
    ods: 16,
    titulo: "Paz, Justiça e Instituições Eficazes",
    descricao:
      "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 16?",
          alternativas: [
            "a) Promover guerra entre nações",
            "b) Construir sociedades pacíficas com instituições justas e eficazes",
            "c) Aumentar a corrupção governamental",
            "d) Reduzir a liberdade de imprensa",
          ],
          correta: 1,
          explicacao:
            "A ODS 16 visa reduzir todas as formas de violência e trabalhar com governos e comunidades para encontrar soluções duradouras para conflitos e insegurança.",
        },
        {
          id: 2,
          texto: "O que significa 'acesso à justiça para todos' na ODS 16?",
          alternativas: [
            "a) Que apenas os ricos devem ter acesso à justiça",
            "b) Que todos, incluindo grupos vulneráveis, devem ter acesso igualitário à justiça",
            "c) Que a justiça deve ser mais lenta",
            "d) Que os criminosos não devem ser punidos",
          ],
          correta: 1,
          explicacao:
            "Significa garantir que todas as pessoas, independentemente de status ou renda, possam buscar reparação através de sistemas judiciais justos.",
        },
        {
          id: 3,
          texto: "Qual destes é um exemplo de instituição eficaz?",
          alternativas: [
            "a) Governo corrupto",
            "b) Sistema judicial transparente e imparcial",
            "c) Polícia que aceita subornos",
            "d) Parlamento que não representa o povo",
          ],
          correta: 1,
          explicacao:
            "Instituições eficazes são transparentes, prestam contas à população e funcionam sem corrupção.",
        },
        {
          id: 4,
          texto:
            "Por que a redução da violência é importante para o desenvolvimento?",
          alternativas: [
            "a) A violência custa aos países até 13% do PIB global",
            "b) A violência ajuda no crescimento econômico",
            "c) A violência não afeta a sociedade",
            "d) A violência é boa para os negócios",
          ],
          correta: 0,
          explicacao:
            "Conflitos e violência desviam recursos valiosos que poderiam ser usados para saúde, educação e infraestrutura.",
        },
        {
          id: 5,
          texto: "O que é corrupção?",
          alternativas: [
            "a) Uso do poder público para benefício privado",
            "b) Sistema judicial eficiente",
            "c) Governo transparente",
            "d) Eleições livres e justas",
          ],
          correta: 0,
          explicacao:
            "A corrupção desvia US$ 2,6 trilhões por ano globalmente, prejudicando especialmente os mais pobres.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual meta da ODS 16 trata de reduzir a violência?",
          alternativas: [
            "a) 16.1 - Reduzir significativamente todas as formas de violência",
            "b) 16.5 - Reduzir substancialmente a corrupção",
            "c) 16.7 - Garantir tomada de decisão responsiva",
            "d) 16.a - Fortalecer instituições nacionais",
          ],
          correta: 0,
          explicacao:
            "A meta 16.1 busca reduzir taxas de homicídios, violência contra crianças e outras formas de violência em todos os lugares.",
        },
        {
          id: 7,
          texto: "O que é justiça restaurativa?",
          alternativas: [
            "a) Processo que repara danos focando nas necessidades das vítimas e comunidade",
            "b) Aumento de penas de prisão",
            "c) Justiça que beneficia apenas os ricos",
            "d) Eliminação do sistema judicial",
          ],
          correta: 0,
          explicacao:
            "Modelo alternativo que busca reparação em vez de apenas punição, mostrando eficácia na redução de reincidência.",
        },
        {
          id: 8,
          texto: "Por que a liberdade de imprensa é importante para a ODS 16?",
          alternativas: [
            "a) Porque expõe corrupção e mantém governos responsáveis",
            "b) Porque ajuda a esconder crimes",
            "c) Porque aumenta a violência",
            "d) Porque substitui o sistema judicial",
          ],
          correta: 0,
          explicacao:
            "Jornalistas investigativos expõem corrupção e abusos - 1 em cada 5 assassinatos de jornalistas está relacionado a reportagens sobre corrupção.",
        },
        {
          id: 9,
          texto: "O que são 'Direitos Humanos'?",
          alternativas: [
            "a) Direitos básicos de todos os seres humanos independentemente de raça, sexo ou religião",
            "b) Privilégios para grupos específicos",
            "c) Leis que protegem apenas os governantes",
            "d) Regras que aumentam a desigualdade",
          ],
          correta: 0,
          explicacao:
            "Incluem direito à vida, liberdade, segurança pessoal e proteção igual perante a lei - bases para sociedades pacíficas.",
        },
        {
          id: 10,
          texto: "Qual destes ajuda a combater a corrupção?",
          alternativas: [
            "a) Transparência nos gastos públicos",
            "b) Ausência de leis anticorrupção",
            "c) Falta de acesso à informação",
            "d) Proteção a políticos corruptos",
          ],
          correta: 0,
          explicacao:
            "Quando cidadãos podem acompanhar como o dinheiro público é gasto, há menos espaço para desvios e má gestão.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que é o 'Estado de Direito'?",
          alternativas: [
            "a) Princípio onde todos, incluindo governantes, estão sujeitos à lei",
            "b) Governo acima da lei",
            "c) Sistema onde militares controlam tudo",
            "d) Ausência de leis escritas",
          ],
          correta: 0,
          explicacao:
            "Fundamental para sociedades justas - significa que ninguém está acima da lei e todos têm acesso igual à justiça.",
        },
        {
          id: 12,
          texto: "Qual meta da ODS 16 trata de fluxos financeiros ilegais?",
          alternativas: [
            "a) 16.4 - Reduzir fluxos ilegais de armas e recuperar ativos roubados",
            "b) 16.6 - Desenvolver instituições eficazes",
            "c) 16.2 - Acabar com abuso contra crianças",
            "d) 16.b - Promover leis não discriminatórias",
          ],
          correta: 0,
          explicacao:
            "Países em desenvolvimento perdem US$ 1.26 trilhão/ano em fluxos financeiros ilegais - mais que toda ajuda ao desenvolvimento.",
        },
        {
          id: 13,
          texto: "O que é 'accountability' (prestação de contas)?",
          alternativas: [
            "a) Responsabilização de governantes perante os cidadãos",
            "b) Ausência de transparência",
            "c) Corrupção institucionalizada",
            "d) Governo sem controle social",
          ],
          correta: 0,
          explicacao:
            "Mecanismo essencial para instituições fortes onde governantes devem justificar ações e usar recursos publicamente.",
        },
        {
          id: 14,
          texto: "Qual tratado internacional é base para a ODS 16?",
          alternativas: [
            "a) Declaração Universal dos Direitos Humanos (1948)",
            "b) Acordo de Paris sobre Clima",
            "c) Convenção sobre Comércio de Armas",
            "d) Tratado de Não-Proliferação Nuclear",
          ],
          correta: 0,
          explicacao:
            "Adotada pela ONU em 1948, estabelece bases para dignidade humana, igualdade e direitos fundamentais em todas as sociedades.",
        },
        {
          id: 15,
          texto: "O que é a 'Agenda 2030 para o Desenvolvimento Sustentável'?",
          alternativas: [
            "a) Plano global que inclui a ODS 16 como parte fundamental",
            "b) Acordo militar entre países",
            "c) Política econômica para países ricos",
            "d) Programa de auxílio emergencial",
          ],
          explicacao:
            "Adotada por todos os países da ONU em 2015, integra os 17 ODS como visão compartilhada para paz e prosperidade até 2030.",
        },
      ],
    },
  },
  {
    ods: 17,
    titulo: "Parcerias e Meios de Implementação",
    descricao:
      "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável",
    niveis: {
      facil: [
        {
          id: 1,
          texto: "Qual é o principal objetivo da ODS 17?",
          alternativas: [
            "a) Promover competição entre países",
            "b) Fortalecer parcerias globais para alcançar os ODS",
            "c) Reduzir a cooperação internacional",
            "d) Aumentar barreiras comerciais",
          ],
          correta: 1,
          explicacao:
            "A ODS 17 é sobre como trabalhar juntos - governos, empresas e sociedade civil - para alcançar todos os outros Objetivos de Desenvolvimento Sustentável.",
        },
        {
          id: 2,
          texto: "Quantos Objetivos de Desenvolvimento Sustentável existem?",
          alternativas: ["a) 10", "b) 15", "c) 17", "d) 20"],
          correta: 2,
          explicacao:
            "Os 17 ODS foram adotados por todos os países da ONU em 2015 como parte da Agenda 2030 para o Desenvolvimento Sustentável.",
        },
        {
          id: 3,
          texto: "Qual destes é um exemplo de parceria para os ODS?",
          alternativas: [
            "a) País que se recusa a cooperar",
            "b) Empresa que investe em energia limpa em países em desenvolvimento",
            "c) Governo que reduz ajuda internacional",
            "d) Organização que trabalha isoladamente",
          ],
          correta: 1,
          explicacao:
            "Parcerias público-privadas como investimentos sustentáveis são cruciais para alcançar os ODS, especialmente em países em desenvolvimento.",
        },
        {
          id: 4,
          texto: "Por que a ajuda oficial ao desenvolvimento é importante?",
          alternativas: [
            "a) Porque representa 70% do financiamento para os ODS",
            "b) Porque os países em desenvolvimento precisam de apoio para infraestrutura básica",
            "c) Porque substitui os recursos internos",
            "d) Porque beneficia apenas os países doadores",
          ],
          correta: 1,
          explicacao:
            "Em 2020, a ajuda oficial atingiu US$161 bilhões, mas ainda está abaixo do compromisso de 0,7% do PIB dos países ricos.",
        },
        {
          id: 5,
          texto: "O que significa 'comércio equitativo' na ODS 17?",
          alternativas: [
            "a) Acordos comerciais que beneficiam apenas países ricos",
            "b) Sistema comercial que considera necessidades dos países em desenvolvimento",
            "c) Eliminação de todas as tarifas",
            "d) Restrições a exportações agrícolas",
          ],
          correta: 1,
          explicacao:
            "Inclui reduzir subsídios agrícolas nos países ricos que prejudicam produtores pobres - estimados em US$540 bilhões/ano globalmente.",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual meta da ODS 17 trata de tecnologia?",
          alternativas: [
            "a) 17.6 - Cooperação em ciência, tecnologia e inovação",
            "b) 17.1 - Mobilização de recursos internos",
            "c) 17.9 - Capacitação em países em desenvolvimento",
            "d) 17.14 - Coerência política",
          ],
          correta: 0,
          explicacao:
            "A meta 17.6 busca criar um banco de tecnologia e mecanismos de capacitação para países em desenvolvimento.",
        },
        {
          id: 7,
          texto: "O que são 'fluxos financeiros ilícitos'?",
          alternativas: [
            "a) Dinheiro movido ilegalmente através de evasão fiscal e corrupção",
            "b) Investimentos estrangeiros diretos",
            "c) Ajuda oficial ao desenvolvimento",
            "d) Remessas de migrantes",
          ],
          correta: 0,
          explicacao:
            "Países em desenvolvimento perdem US$1.26 trilhão/ano com esses fluxos - mais que toda ajuda ao desenvolvimento combinada.",
        },
        {
          id: 8,
          texto: "Por que dados são importantes para os ODS?",
          alternativas: [
            "a) Porque permitem medir progresso e identificar desafios",
            "b) Porque substituem a ação política",
            "c) Porque são mais importantes que financiamento",
            "d) Porque garantem automaticamente os resultados",
          ],
          correta: 0,
          explicacao:
            "A meta 17.18 busca aumentar significativamente a disponibilidade de dados desagregados para tomada de decisões baseada em evidências.",
        },
        {
          id: 9,
          texto: "O que significa 'capacitação' na ODS 17?",
          alternativas: [
            "a) Construir habilidades e instituições em países em desenvolvimento",
            "b) Reduzir a ajuda internacional",
            "c) Limitar transferência de tecnologia",
            "d) Depender apenas de especialistas estrangeiros",
          ],
          correta: 0,
          explicacao:
            "Programas de capacitação ajudam países a arrecadar impostos, implementar políticas e monitorar os ODS de forma autônoma.",
        },
        {
          id: 10,
          texto: "Qual é o papel do setor privado na ODS 17?",
          alternativas: [
            "a) Investir em projetos sustentáveis e alinhados com os ODS",
            "b) Manter práticas comerciais como sempre",
            "c) Esperar apenas por regulamentações governamentais",
            "d) Focar exclusivamente em lucros de curto prazo",
          ],
          correta: 0,
          explicacao:
            "O investimento privado representa 60% do PIB nos países em desenvolvimento, crucial para infraestrutura sustentável.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "O que é a 'Agenda de Ação de Addis Abeba'?",
          alternativas: [
            "a) Plano global para financiar os ODS adotado em 2015",
            "b) Acordo climático específico para África",
            "c) Estratégia militar regional",
            "d) Programa de auxílio emergencial",
          ],
          correta: 0,
          explicacao:
            "Adotada na 3a Conferência sobre Financiamento para Desenvolvimento, estabelece como mobilizar recursos para a Agenda 2030.",
        },
        {
          id: 12,
          texto:
            "Qual meta trata especificamente de países menos desenvolvidos?",
          alternativas: [
            "a) 17.8 - Operacionalizar o banco de tecnologia",
            "b) 17.2 - Países desenvolvidos cumprirem 0.7% do PIB em ajuda",
            "c) 17.11 - Aumentar exportações desses países",
            "d) Todas as anteriores",
          ],
          correta: 3,
          explicacao:
            "A ODS 17 tem várias metas específicas para os 46 países menos desenvolvidos, incluindo acesso a tecnologia e mercados.",
        },
        {
          id: 13,
          texto:
            "O que é 'coerência política para desenvolvimento sustentável'?",
          alternativas: [
            "a) Alinhar todas as políticas governamentais com os ODS",
            "b) Focar apenas em crescimento econômico",
            "c) Eliminar políticas sociais",
            "d) Reduzir a cooperação internacional",
          ],
          correta: 0,
          explicacao:
            "Significa que políticas de comércio, agricultura, indústria etc. devem se reforçar mutuamente rumo aos ODS, não se contradizer.",
        },
        {
          id: 14,
          texto: "Qual organização monitora a ajuda ao desenvolvimento?",
          alternativas: [
            "a) OCDE - Comitê de Ajuda ao Desenvolvimento",
            "b) Organização Mundial do Comércio",
            "c) Banco Mundial",
            "d) FMI",
          ],
          correta: 0,
          explicacao:
            "O CAD/OCDE define padrões para ajuda oficial ao desenvolvimento e monitora compromissos dos países doadores.",
        },
        {
          id: 15,
          texto:
            "Qual é o déficit anual de financiamento para alcançar os ODS?",
          alternativas: [
            "a) US$ 500 bilhões",
            "b) US$ 1.5 trilhão",
            "c) US$ 2.5 trilhões",
            "d) US$ 5 trilhões",
          ],
          correta: 2,
          explicacao:
            "Estimativa da ONU mostra que países em desenvolvimento precisam de investimentos adicionais nessa magnitude para alcançar os ODS até 2030.",
        },
      ],
    },
  },
  {
    ods: 18,
    titulo: "Visão Geral dos Objetivos de Desenvolvimento Sustentável",
    descricao:
      "Panorama completo dos 17 ODS e da Agenda 2030, mostrando suas interconexões e importância global",
    niveis: {
      facil: [
        {
          id: 1,
          texto:
            "Quantos Objetivos de Desenvolvimento Sustentável compõem a Agenda 2030?",
          alternativas: ["a) 15", "b) 17", "c) 20", "d) 25"],
          correta: 1,
          explicacao:
            "Os 17 ODS foram adotados por todos os 193 países membros da ONU em 2015, cobrindo aspectos econômicos, sociais e ambientais do desenvolvimento.",
        },
        {
          id: 2,
          texto: "Qual destes NÃO é um dos 5Ps dos ODS?",
          alternativas: [
            "a) Pessoas",
            "b) Prosperidade",
            "c) Poluição",
            "d) Paz",
          ],
          correta: 2,
          explicacao:
            "Os 5Ps são: Pessoas (ODS 1-6), Prosperidade (ODS 7-11), Paz (ODS 16), Parcerias (ODS 17) e Planeta (ODS 12-15).",
        },
        {
          id: 3,
          texto: "Qual ODS trata especificamente de educação de qualidade?",
          alternativas: ["a) ODS 3", "b) ODS 4", "c) ODS 5", "d) ODS 6"],
          correta: 1,
          explicacao:
            "ODS 4 visa 'assegurar a educação inclusiva e equitativa de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos' até 2030.",
        },
        {
          id: 4,
          texto: "Qual ODS tem como foco principal a igualdade de gênero?",
          alternativas: ["a) ODS 3", "b) ODS 5", "c) ODS 10", "d) ODS 16"],
          correta: 1,
          explicacao:
            "ODS 5 busca 'alcançar a igualdade de gênero e empoderar todas as mulheres e meninas', abordando discriminação, violência e desigualdade econômica.",
        },
        {
          id: 5,
          texto: "Qual destes é um objetivo ambiental entre os ODS?",
          alternativas: [
            "a) ODS 6 - Água limpa e saneamento",
            "b) ODS 8 - Trabalho decente",
            "c) ODS 1 - Erradicação da pobreza",
            "d) ODS 3 - Saúde de qualidade",
          ],
          correta: 0,
          explicacao:
            "ODS 6 faz parte do Pilar 'Planeta', que inclui também ODS 13 (Ação Climática), 14 (Vida na Água) e 15 (Vida Terrestre).",
        },
      ],
      medio: [
        {
          id: 6,
          texto: "Qual ODS trata especificamente de mudanças climáticas?",
          alternativas: ["a) ODS 11", "b) ODS 12", "c) ODS 13", "d) ODS 14"],
          correta: 2,
          explicacao:
            "ODS 13 exige 'tomar medidas urgentes para combater a mudança climática e seus impactos', alinhado com o Acordo de Paris.",
        },
        {
          id: 7,
          texto: "Qual meta pertence ao ODS 2 (Fome Zero)?",
          alternativas: [
            "a) Acabar com todas as formas de desnutrição até 2030",
            "b) Reduzir pela metade o desperdício de alimentos até 2025",
            "c) Eliminar completamente a fome até 2025",
            "d) Tornar orgânicos 50% dos alimentos até 2030",
          ],
          correta: 0,
          explicacao:
            "A meta 2.2 busca acabar com todas as formas de desnutrição, incluindo obesidade, com atenção especial a crianças e gestantes.",
        },
        {
          id: 8,
          texto:
            "Qual ODS tem como meta específica reduzir as desigualdades dentro e entre países?",
          alternativas: ["a) ODS 8", "b) ODS 9", "c) ODS 10", "d) ODS 11"],
          correta: 2,
          explicacao:
            "ODS 10 inclui metas como crescimento da renda dos 40% mais pobres acima da média nacional e regulação dos mercados financeiros globais.",
        },
        {
          id: 9,
          texto: "Qual destas metas pertence ao ODS 7 (Energia Limpa)?",
          alternativas: [
            "a) Triplicar a taxa global de eficiência energética até 2030",
            "b) Universalizar o acesso à eletricidade até 2025",
            "c) Garantir 100% de energia renovável até 2040",
            "d) Reduzir em 50% os subsídios a combustíveis fósseis até 2025",
          ],
          correta: 0,
          explicacao:
            "A meta 7.3 visa aumentar a eficiência energética global, enquanto 7.1 busca acesso universal a serviços energéticos modernos até 2030.",
        },
        {
          id: 10,
          texto: "Qual ODS aborda especificamente a conservação dos oceanos?",
          alternativas: ["a) ODS 12", "b) ODS 13", "c) ODS 14", "d) ODS 15"],
          correta: 2,
          explicacao:
            "ODS 14 visa 'conservar e usar sustentavelmente os oceanos, mares e recursos marinhos', incluindo redução da poluição marinha e sobrepesca.",
        },
      ],
      dificil: [
        {
          id: 11,
          texto: "Qual é a meta 16.5 do ODS 16 (Paz e Justiça)?",
          alternativas: [
            "a) Reduzir todas as formas de violência",
            "b) Reduzir substancialmente a corrupção e o suborno",
            "c) Garantir acesso público à informação",
            "d) Fortalecer a participação dos países em desenvolvimento nas instituições globais",
          ],
          correta: 1,
          explicacao:
            "A meta 16.5 busca reduzir significativamente todas as formas de corrupção, que custa US$2.6 trilhões/ano globalmente (5% do PIB mundial).",
        },
        {
          id: 12,
          texto:
            "Qual ODS contém a meta sobre aumentar a capacidade estatística dos países em desenvolvimento?",
          alternativas: ["a) ODS 8", "b) ODS 13", "c) ODS 16", "d) ODS 17"],
          correta: 3,
          explicacao:
            "A meta 17.18 do ODS 17 visa aumentar significativamente a disponibilidade de dados desagregados para monitoramento dos ODS até 2020.",
        },
        {
          id: 13,
          texto:
            "Qual destas é uma meta do ODS 9 (Indústria, Inovação e Infraestrutura)?",
          alternativas: [
            "a) Dobrar a participação da indústria no PIB dos países menos desenvolvidos até 2030",
            "b) Aumentar o acesso à internet banda larga em países em desenvolvimento",
            "c) Triplicar os investimentos em P&D até 2025",
            "d) Reduzir em 50% o custo logístico do comércio até 2030",
          ],
          correta: 0,
          explicacao:
            "A meta 9.2 promove industrialização inclusiva e sustentável, com foco em dobrar a participação industrial nos PMDs até 2030.",
        },
        {
          id: 14,
          texto:
            "Qual ODS contém metas específicas sobre doenças tropicais negligenciadas?",
          alternativas: ["a) ODS 1", "b) ODS 3", "c) ODS 6", "d) ODS 10"],
          correta: 1,
          explicacao:
            "A meta 3.3 do ODS 3 inclui acabar com epidemias de AIDS, tuberculose, malária e doenças tropicais negligenciadas até 2030.",
        },
        {
          id: 15,
          texto: "Qual é a meta 11.6 do ODS 11 (Cidades Sustentáveis)?",
          alternativas: [
            "a) Reduzir o impacto ambiental per capita das cidades",
            "b) Garantir acesso universal a áreas verdes",
            "c) Eliminar favelas e assentamentos informais",
            "d) Implementar sistemas de transporte 100% limpos",
          ],
          correta: 0,
          explicacao:
            "A meta 11.6 visa reduzir o impacto ambiental negativo per capita das cidades, com atenção especial à qualidade do ar e gestão de resíduos.",
        },
      ],
    },
  },
];
class Perguntas {
  constructor(quizData) {
    this.quizData = quizData;
    this.historico = {
      porODS: new Map(), // Mapeia ODS => { facil: Set, medio: Set, dificil: Set }
      desempenho: new Map(), // Mapeia ODS => { acertos: number, erros: number }
    };
  }

  sortearPergunta(ods) {
    // 1. Determinar o nível da pergunta
    const nivel = this._determinarNivel(ods);

    // 2. Obter perguntas disponíveis para esse ODS e nível
    const perguntasDisponiveis = this._obterPerguntasDisponiveis(ods, nivel);

    // 3. Se não houver perguntas, tentar outro nível
    if (perguntasDisponiveis.length === 0) {
      return this._sortearDeOutroNivel(ods);
    }

    // 4. Sortear uma pergunta
    const perguntaSorteada =
      perguntasDisponiveis[
        Math.floor(Math.random() * perguntasDisponiveis.length)
      ];

    // 5. Registrar que esta pergunta foi usada
    this._registrarPerguntaUsada(ods, nivel, perguntaSorteada.id);

    return {
      ...perguntaSorteada,
      nivel: nivel,
      ods: ods,
    };
  }

  registrarResposta(ods, perguntaId, nivel, acertou) {
    // Atualizar estatísticas de desempenho
    if (!this.historico.desempenho.has(ods)) {
      this.historico.desempenho.set(ods, { acertos: 0, erros: 0 });
    }

    const stats = this.historico.desempenho.get(ods);
    if (acertou) {
      stats.acertos++;
    } else {
      stats.erros++;
    }
  }

  // Métodos internos
  _determinarNivel(ods) {
    const stats = this.historico.desempenho.get(ods) || {
      acertos: 0,
      erros: 0,
    };
    const total = stats.acertos + stats.erros;

    // Lógica de determinação do nível:
    if (total === 0) {
      // Se é a primeira vez neste ODS, começa com nível médio
      return "medio";
    }

    const taxaAcerto = stats.acertos / total;

    if (taxaAcerto < 0.3) {
      return "facil"; // Se está com dificuldade, abaixa o nível
    } else if (taxaAcerto > 0.7) {
      return "dificil"; // Se está indo bem, aumenta o nível
    } else {
      return "medio"; // Padrão
    }
  }

  _obterPerguntasDisponiveis(ods, nivel) {
    const odsData = this.quizData.find((item) => item.ods === ods);
    if (!odsData || !odsData.niveis[nivel]) return [];

    // Obter IDs de perguntas já usadas
    const perguntasUsadas = this._getPerguntasUsadas(ods, nivel);

    // Filtrar perguntas não usadas
    return odsData.niveis[nivel].filter(
      (pergunta) => !perguntasUsadas.has(pergunta.id)
    );
  }

  _sortearDeOutroNivel(ods) {
    // Tenta outros níveis em ordem de preferência
    const niveis = ["medio", "facil", "dificil"];
    for (const nivel of niveis) {
      const perguntas = this._obterPerguntasDisponiveis(ods, nivel);
      if (perguntas.length > 0) {
        const perguntaSorteada =
          perguntas[Math.floor(Math.random() * perguntas.length)];
        this._registrarPerguntaUsada(ods, nivel, perguntaSorteada.id);
        return {
          ...perguntaSorteada,
          nivel: nivel,
          ods: ods,
        };
      }
    }

    // Se não encontrou em nenhum nível, reseta as perguntas usadas
    this._resetPerguntasUsadas(ods);
    return this.sortearPergunta(ods); // Tenta novamente
  }

  _getPerguntasUsadas(ods, nivel) {
    if (!this.historico.porODS.has(ods)) {
      this.historico.porODS.set(ods, {
        facil: new Set(),
        medio: new Set(),
        dificil: new Set(),
      });
    }
    return this.historico.porODS.get(ods)[nivel];
  }

  _registrarPerguntaUsada(ods, nivel, perguntaId) {
    this._getPerguntasUsadas(ods, nivel).add(perguntaId);
  }

  _resetPerguntasUsadas(ods) {
    if (this.historico.porODS.has(ods)) {
      const niveis = this.historico.porODS.get(ods);
      niveis.facil.clear();
      niveis.medio.clear();
      niveis.dificil.clear();
    }
  }
}
