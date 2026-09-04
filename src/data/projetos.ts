/**
 * Ideias & Projetos.
 * Fonte de verdade: documento "Projetos Desenvolvidos" fornecido pela candidatura.
 * Todo o conteúdo abaixo representa PROPOSTA e compromisso de atuação caso eleita.
 * Nada aqui descreve política pública implementada, lei existente ou resultado alcançado.
 */

export type Eixo = {
  id: string;
  nome: string;
  descricao: string;
};

export const eixos: Eixo[] = [
  {
    id: "principio",
    nome: "O princípio que orienta tudo",
    descricao: "A lógica que conecta e avalia todas as demais propostas da candidatura.",
  },
  {
    id: "saude",
    nome: "Saúde, energia e vitalidade",
    descricao: "Prevenção, saúde mental e acesso real ao cuidado com o corpo.",
  },
  {
    id: "bolso",
    nome: "Dinheiro, trabalho e liberdade econômica",
    descricao: "Menos peso sobre quem produz, mais fôlego para quem está começando.",
  },
  {
    id: "educacao",
    nome: "Educação para a vida real",
    descricao: "Formação que prepara para o trabalho, para o dinheiro e para o mundo.",
  },
  {
    id: "estado",
    nome: "Estado, segurança e igualdade de regras",
    descricao: "Transparência, proteção do cidadão e o mesmo conjunto de regras para todos.",
  },
];

export type Projeto = {
  numero: string;
  slug: string;
  eixo: string;
  titulo: string;
  frase: string;
  resumo: string;
  problema: string;
  proposta: string;
  funcionamento: string[];
  pilares: string[];
  beneficiados: string;
  resultado: string;
};

export const projetos: Projeto[] = [
  {
    numero: "01",
    slug: "fim-da-ilusao-do-sistema",
    eixo: "principio",
    titulo: "O Fim da Ilusão do Sistema",
    frase: "Você não está fraco. Você está sendo mantido de pé por paliativo, enquanto ninguém resolve a causa.",
    resumo:
      "Chega de fingir que está tudo bem. Eu proponho uma política que trata a causa do cansaço do trabalhador brasileiro, não só o sintoma, e uso esse princípio para guiar todo o mandato.",
    problema:
      "Tem gente que acorda cansada e passa o dia inteiro tentando aguentar, não vivendo. O corpo responde, a rotina segue, a meta é batida, mas por dentro nada foi resolvido de verdade. Isso não é força de vontade, é sobrevivência empurrada com soluções paliativas: se aguenta hoje para aguentar amanhã, e ninguém para para perguntar por que o cansaço nunca vai embora. Esse é o retrato de um sistema que trata o trabalhador como uma engrenagem que precisa continuar girando, e não como uma pessoa que precisa de saúde, tempo e descanso de verdade.",
    proposta:
      "Eu defendo romper esse ciclo. A proposta central é simples de entender e difícil de admitir: parar de tratar sintoma e começar a tratar causa. Isso significa colocar a saúde real, o trabalho digno e a energia da população no centro da atuação política, no lugar de aceitar, como normal, um país que só finge que está tudo bem. Essa não é uma proposta isolada, é o princípio que conecta todas as outras propostas desta lista.",
    funcionamento: [
      "Primeiro, recusar qualquer proposta ou política que trate apenas o efeito visível de um problema, sem mexer na causa. Isso vale tanto para saúde do trabalhador quanto para segurança, educação ou economia.",
      'Segundo, priorizar, em cada frente de atuação, a pergunta "isso resolve de verdade ou só está adiando o problema?". Essa pergunta orienta a minha posição diante de projetos de lei, votações e negociações.',
      "Terceiro, usar a minha própria trajetória como parâmetro: assim como a minha mudança de vida só aconteceu quando eu enfrentei a causa, e não só o sintoma, a proposta de atuação política segue a mesma lógica aplicada ao país.",
    ],
    pilares: [
      "Recusa às soluções paliativas que só adiam o problema, sem resolvê-lo",
      "Saúde e trabalho tratados como prioridade real de atuação, não como discurso de campanha",
      "Coerência entre todas as demais propostas, unidas pela mesma lógica de mudança pela raiz",
      'Compromisso de que cada proposta futura seja avaliada pela pergunta "isso ataca a causa?"',
    ],
    beneficiados:
      "Todo trabalhador que hoje sente que está aguentando a vida, em vez de vivendo ela. Quem chega em casa exausto e sem saber exatamente por quê.",
    resultado:
      "O objetivo é mudar a lógica de atuação política em relação à saúde e ao trabalho do brasileiro, priorizando solução de causa, não de sintoma, e servindo como critério permanente de avaliação para as demais propostas do mandato.",
  },
  {
    numero: "02",
    slug: "saude-real-e-energia-para-produzir",
    eixo: "saude",
    titulo: "Saúde Real e Energia para Produzir",
    frase: "Saúde preventiva é investimento, não gasto.",
    resumo:
      "Quem já venceu a obesidade sabe que dá para vencer também o cansaço que trava a vida de quem trabalha. Eu proponho colocar saúde real e energia para produzir no centro da política.",
    problema:
      "A rotina cansa o corpo e embaça a mente. Quando falta cuidado com a saúde, tudo o mais fica mais difícil: trabalhar com foco, cuidar da família, sonhar com o futuro. O cansaço crônico vira parte da paisagem, algo que a pessoa aprende a conviver, não a resolver. É um ciclo que se retroalimenta: menos saúde, menos energia, menos capacidade de trabalhar, menos condição de cuidar da própria saúde.",
    proposta:
      "Eu defendo colocar a saúde preventiva e a vitalidade do corpo no centro da política pública, partindo do entendimento de que um povo saudável é um povo com mais capacidade real de trabalhar, prosperar e viver melhor. A saúde deixa de ser tratada como um gasto a ser cortado quando o orçamento aperta, e passa a ser vista como o investimento que sustenta todo o resto.",
    funcionamento: [
      "A proposta parte da relação direta entre três elementos: cuidado com o corpo, clareza mental e capacidade produtiva.",
      "Cuidar do corpo hoje evita o desgaste que tira o trabalhador de ação amanhã. Prevenção, nesse sentido, não é luxo nem cuidado paralelo à vida produtiva, é parte da própria condição de continuar trabalhando com qualidade ao longo do tempo.",
      "Eu defendo que políticas de saúde voltadas ao trabalhador sejam pensadas dessa forma: não como socorro emergencial quando a pessoa já adoeceu, mas como manutenção contínua da capacidade de viver e produzir com energia.",
    ],
    pilares: [
      "Cuidado com o corpo tratado como parte da rotina de trabalho, não como luxo",
      "Combate ao cansaço crônico como prioridade de saúde pública",
      "Relação direta entre saúde, clareza mental e capacidade de produzir",
      "Saúde preventiva encarada como investimento, não como gasto a ser cortado",
    ],
    beneficiados:
      "Trabalhadores que sentem na pele o peso do cansaço acumulado e da falta de energia para tocar a vida. Quem sente que o corpo já não responde como antes, mas nunca teve tempo, dinheiro ou espaço para cuidar disso de verdade.",
    resultado:
      "A expectativa é fortalecer a vitalidade e a capacidade produtiva da população a partir do cuidado preventivo com a saúde, reduzindo o peso do cansaço crônico sobre a vida do trabalhador brasileiro.",
  },
  {
    numero: "03",
    slug: "dinheiro-tempo-e-prosperidade",
    eixo: "bolso",
    titulo: "Dinheiro, Tempo e Prosperidade",
    frase: "Mais comida na mesa, menos juros no bolso.",
    resumo:
      "Mais comida na mesa, menos juros no bolso. Eu proponho dar ao trabalhador ferramentas reais para conquistar mais tempo e mais tranquilidade financeira.",
    problema:
      "O trabalhador brasileiro corre o mês inteiro atrás do próprio dinheiro. Trabalha, se esforça, e ainda assim sobra pouco no fim do mês, e menos tempo ainda para a família. Os juros altos comem uma parte do salário antes mesmo dele render, e a dependência de auxílios vira quase um destino, não uma escolha.",
    proposta:
      "Eu defendo fortalecer a educação financeira prática do brasileiro, dando ferramentas reais para que ele conquiste mais independência, mais tempo de vida e mais tranquilidade com o próprio dinheiro. Não se trata de teoria de economia, mas de conhecimento aplicável ao dia a dia de quem precisa decidir entre pagar uma conta ou outra.",
    funcionamento: [
      "De um lado, ampliar o acesso a conhecimento prático sobre organização financeira, dívidas, juros e planejamento, para que o trabalhador tenha ferramentas de decisão que hoje muitas vezes não estão disponíveis para ele.",
      "De outro, atuar para reduzir o peso dos juros abusivos sobre quem já vive no limite do orçamento, entendendo que educação financeira sem alívio real de juros resolve só parte do problema.",
      "Os formatos específicos de implementação, como plataformas, parcerias ou programas, ainda estão a definir e serão desenvolvidos em conjunto com a equipe técnica da campanha.",
    ],
    pilares: [
      "Educação financeira prática e acessível ao trabalhador",
      "Redução da dependência de auxílios como caminho de autonomia",
      "Combate ao peso dos juros abusivos sobre o orçamento familiar",
      "Mais tempo de qualidade para a família como consequência da estabilidade financeira",
    ],
    beneficiados:
      "Trabalhadores e famílias que sentem o peso do endividamento e da falta de tempo. Quem vive fazendo conta para fechar o mês e nunca sobra nada além de mais uma dívida.",
    resultado:
      "O objetivo é ampliar a autonomia financeira e o tempo de vida do trabalhador brasileiro, reduzindo sua dependência de juros altos e de auxílios emergenciais.",
  },
  {
    numero: "04",
    slug: "autonomia-e-acao-cidada",
    eixo: "estado",
    titulo: "Autonomia e Ação Cidadã",
    frase: "Autonomia não se pede. Se constrói com informação e participação.",
    resumo:
      "Informação prática e participação de verdade. Eu proponho um espaço para você se organizar e se engajar na mudança que quer ver acontecer.",
    problema:
      "Muita gente quer se libertar do sistema, cuidar da própria saúde e organizar a própria vida financeira, mas não sabe por onde começar. Falta informação prática, direta, sem juridiquês nem economês. E falta também um espaço real para participar da mudança que essa pessoa deseja ver, além do voto a cada dois anos.",
    proposta:
      "Eu proponho estruturar uma área dedicada a colocar à disposição do cidadão guias práticos sobre autonomia financeira e saúde real, além de um canal de participação para quem quer se engajar de verdade com a mensagem da candidatura.",
    funcionamento: [
      "A primeira frente é o conteúdo informativo, com guias práticos sobre autonomia financeira, saúde real e quebra das amarras do sistema, pensados para uso direto no dia a dia, sem complicação.",
      'A segunda é o cadastro de apoiadores na plataforma "A Voz da Mudança", pensada como espaço de engajamento para quem quer ajudar a espalhar essa mensagem e participar da transformação da política pela raiz.',
      "A terceira é uma área de ação e contato, voltada ao cadastro do cidadão e ao recebimento de materiais, mantendo clara a separação entre o que é conteúdo, o que é cadastro de apoio e o que é canal de contato direto.",
    ],
    pilares: [
      "Guias práticos sobre autonomia financeira e saúde real",
      'Plataforma de engajamento "A Voz da Mudança" para cadastro de apoiadores',
      "Área de ação e contato para cadastro do cidadão e recebimento de materiais",
      "Separação clara entre conteúdo informativo, cadastro e canal de contato",
    ],
    beneficiados:
      "Cidadãos que querem informação prática e um jeito real de participar da mudança que defendem, sem depender exclusivamente do voto para se sentir parte dela.",
    resultado:
      "A expectativa é ampliar o acesso à informação prática sobre autonomia financeira e saúde, e fortalecer a participação popular em torno da proposta de mudança pela raiz.",
  },
  {
    numero: "05",
    slug: "educacao-com-foco-em-trabalho-e-renda",
    eixo: "educacao",
    titulo: "Educação com Foco em Trabalho e Renda",
    frase: "Formar para o boletim não basta. É preciso formar para a vida.",
    resumo:
      "Escola não pode formar só para o boletim. Eu proponho uma educação em tempo integral que prepara o jovem para o trabalho e para a vida.",
    problema:
      "Muitos jovens saem da escola com o diploma na mão, mas sem preparo real para o mercado de trabalho moderno e sem noção nenhuma de como cuidar do próprio dinheiro. A escola ensina conteúdo, mas nem sempre ensina a viver: como planejar um orçamento, como entender um contrato de trabalho, como usar a tecnologia a favor da própria autonomia.",
    proposta:
      "Eu defendo escolas em tempo integral voltadas à prática, unindo educação financeira, tecnologia e autonomia de mercado à formação tradicional. A ideia é que o tempo extra que o aluno passa na escola seja usado para preparar essa pessoa para a vida real, não apenas para reforçar o conteúdo tradicional.",
    funcionamento: [
      "Educação financeira aplicada, para que o jovem aprenda a lidar com dinheiro, dívidas e planejamento antes de entrar no mercado de trabalho, e não depois de já ter cometido os erros que a falta desse conhecimento costuma gerar.",
      "Tecnologia como ferramenta de autonomia, preparando o aluno para usar recursos digitais a favor da própria capacidade de trabalhar e empreender, e não apenas como consumidor passivo.",
      "Autonomia de mercado, no sentido de dar ao jovem noção prática de como o mercado de trabalho funciona, para que ele chegue mais preparado à primeira oportunidade profissional.",
    ],
    pilares: [
      "Ensino em tempo integral com foco prático, não apenas em reforço de conteúdo",
      "Educação financeira aplicada desde a escola",
      "Tecnologia como ferramenta de autonomia e preparo profissional",
      "Noções de mercado de trabalho incorporadas à formação básica",
    ],
    beneficiados:
      "Jovens em formação que precisam sair da escola prontos para trabalhar e para cuidar da própria vida financeira, e não apenas prontos para uma prova.",
    resultado:
      "O objetivo é formar jovens mais preparados para o mercado de trabalho e para a autonomia financeira, reduzindo a distância entre o que a escola ensina e o que a vida cobra.",
  },
  {
    numero: "06",
    slug: "autonomia-digital-e-trabalho-remoto",
    eixo: "bolso",
    titulo: "Autonomia Digital e Trabalho Remoto sem Barreiras",
    frase: "Quem começa um negócio digital não devia começar já afogado em imposto.",
    resumo:
      "Empreender no digital não devia ser sinônimo de burocracia e imposto logo de cara. Eu proponho um marco legal que facilita e desonera quem está começando.",
    problema:
      "Quem quer empreender no ambiente digital esbarra logo de cara em dois obstáculos: a burocracia para abrir uma empresa e o peso do imposto, que chega justamente na hora em que o negócio ainda está engatinhando, sem faturamento suficiente para sustentar esse custo.",
    proposta:
      "Eu defendo um marco legal de incentivo ao empreendedorismo digital e ao trabalho freelancer, com desburocratização para abertura de empresas digitais de uma pessoa só e isenção total de impostos para faturamentos iniciais no ambiente online.",
    funcionamento: [
      "A primeira frente é a desburocratização do processo de abertura de empresas digitais individuais, reduzindo etapas e exigências que hoje afastam quem está começando um negócio sozinho no ambiente online.",
      "A segunda é a isenção total de impostos para faturamentos iniciais no digital, dando um período de fôlego para que o negócio consiga se estabelecer antes de arcar com a carga tributária plena.",
      "As faixas exatas de faturamento e o tempo de isenção fazem parte do detalhamento técnico do marco legal, a ser construído junto da equipe responsável, e ainda estão a definir.",
    ],
    pilares: [
      "Desburocratização da abertura de empresas digitais individuais",
      "Isenção total de impostos para faturamentos iniciais no ambiente online",
      "Incentivo direto ao trabalho remoto e freelancer",
      "Marco legal pensado para dar fôlego a quem está começando, não a quem já está consolidado",
    ],
    beneficiados:
      "Empreendedores digitais, freelancers e quem está começando um negócio online sem estrutura de grande empresa por trás.",
    resultado:
      "A expectativa é reduzir barreiras para quem empreende no digital e facilitar os primeiros passos de quem está começando um negócio próprio no ambiente online.",
  },
  {
    numero: "07",
    slug: "responsabilidade-fiscal-e-transparencia",
    eixo: "estado",
    titulo: "Responsabilidade Fiscal e Transparência Total de Gastos Públicos",
    frase: "O Brasil precisa de verdade, não de promessas vazias.",
    resumo:
      "Menos dinheiro público para financiar política, mais recurso para saúde e para o bolso de quem trabalha. Eu proponho cortar pela metade os fundos de campanha e partido, com destino certo para esse dinheiro.",
    problema:
      "Enquanto o trabalhador aperta o cinto para pagar as próprias contas, uma parte enorme do dinheiro público segue destinada a fundos de campanha e de partido, longe da saúde e do bolso de quem mais precisa. É difícil pedir sacrifício de um lado quando o outro lado não abre mão de nada.",
    proposta:
      "Eu defendo uma reforma rigorosa na lei de gastos públicos, com redução de 50% dos fundos públicos de campanha e do Fundo Partidário, redirecionando obrigatoriamente esses recursos para saúde preventiva e desoneração do trabalhador.",
    funcionamento: [
      "Primeiro, o corte de metade do valor hoje destinado ao Fundo Partidário e aos fundos públicos de campanha, reduzindo o volume de dinheiro público usado para financiar a própria política.",
      "Segundo, o redirecionamento obrigatório desse valor economizado, não facultativo, para duas frentes específicas: saúde preventiva e desoneração do trabalhador.",
      "Como toda proposta que depende de alteração legal e orçamentária, sua execução exige tramitação no Congresso Nacional e não pode ser prometida como resultado automático.",
    ],
    pilares: [
      "Redução de 50% do Fundo Partidário e dos fundos públicos de campanha",
      "Redirecionamento obrigatório, não facultativo, dos recursos economizados",
      "Destinação específica para saúde preventiva",
      "Destinação específica para desoneração do trabalhador",
    ],
    beneficiados:
      "Toda a população, ao ver dinheiro público sair do financiamento da política e ir diretamente para saúde e para o alívio de impostos sobre quem trabalha.",
    resultado:
      "O objetivo é reduzir o gasto público com financiamento da política e ampliar, na mesma proporção, os recursos disponíveis para saúde preventiva e desoneração do trabalhador.",
  },
  {
    numero: "08",
    slug: "liberdade-energetica-e-concessao-limpa",
    eixo: "bolso",
    titulo: "Liberdade Energética e Concessão Limpa",
    frase: "Gerar a própria energia não devia ser um privilégio para poucos.",
    resumo:
      "Gerar a própria energia não devia ser complicado nem caro. Eu proponho reduzir burocracia e taxação para quem escolhe a energia limpa.",
    problema:
      "Quem quer gerar a própria energia solar, em casa ou no comércio, esbarra em burocracia, em taxação punitiva e em tarifas elevadas que tornam o processo mais difícil e mais caro do que devia ser. O que deveria ser um caminho de economia e independência energética acaba se transformando em mais uma fonte de custo e desgaste.",
    proposta:
      "Eu defendo facilitar e incentivar a geração distribuída de energia solar residencial e comercial, reduzindo as barreiras burocráticas e enfrentando as taxações que hoje penalizam quem busca essa alternativa.",
    funcionamento: [
      "A redução da burocracia envolvida em instalar e formalizar a geração de energia própria, tornando o processo mais simples para quem quer investir nessa alternativa, seja em uma casa, seja em um pequeno comércio.",
      "O enfrentamento das taxações punitivas e das tarifas elevadas que hoje incidem sobre esse tipo de geração, entendendo que penalizar quem produz a própria energia limpa vai na direção contrária do que o país precisa.",
      "As regras tarifárias específicas e a estrutura regulatória detalhada fazem parte do trabalho técnico a ser construído no mandato, e ainda estão a definir.",
    ],
    pilares: [
      "Incentivo à geração distribuída de energia solar residencial e comercial",
      "Redução de barreiras burocráticas para instalação e formalização",
      "Enfrentamento das taxações punitivas sobre energia limpa",
      "Revisão de tarifas que hoje penalizam quem gera a própria energia",
    ],
    beneficiados:
      "Famílias e comércios que querem gerar a própria energia e hoje encontram barreiras burocráticas e financeiras para isso.",
    resultado:
      "A expectativa é ampliar o acesso à geração de energia solar residencial e comercial no país, reduzindo o custo e a burocracia envolvidos nesse processo.",
  },
  {
    numero: "09",
    slug: "reforma-do-ensino-tecnico-pratico",
    eixo: "educacao",
    titulo: "Reforma do Ensino Técnico Prático Integrado ao Mercado",
    frase: "O ensino médio precisa preparar para o mundo real, não só para a prova.",
    resumo:
      "Ensino médio não pode terminar sem preparar para a vida real. Eu proponho uma reforma que une estudo, técnica e mercado desde a escola.",
    problema:
      "O aluno termina o ensino médio sem saber administrar o próprio dinheiro, sem noção de direito do consumidor e sem preparo técnico para entrar no mercado de trabalho. Ele sai da escola com um diploma, mas sem as ferramentas práticas que vai precisar no primeiro emprego, no primeiro contrato, na primeira negociação.",
    proposta:
      "Eu defendo transformar o ensino médio em um modelo de formação prática dual, unindo o estudo regular a capacitação técnica intensiva, educação financeira, noções de mercado, direito do consumidor e gestão de negócios desde a escola.",
    funcionamento: [
      "De um lado, o currículo regular, mantendo a formação acadêmica tradicional que o aluno já recebe.",
      "De outro, uma trilha de capacitação técnica intensiva, que inclui educação financeira, noções de mercado, direito do consumidor e gestão de negócios, formando o jovem para lidar com a vida prática e com o mundo do trabalho desde a escola.",
      "Essa combinação busca que o aluno saia do ensino médio com dois tipos de preparo ao mesmo tempo: o acadêmico, que já existe, e o prático, que hoje falta.",
    ],
    pilares: [
      "Modelo dual entre ensino regular e capacitação técnica intensiva",
      "Educação financeira e noções de mercado incorporadas ao currículo",
      "Direito do consumidor como parte da formação básica",
      "Gestão de negócios como conteúdo prático desde a escola",
    ],
    beneficiados:
      "Estudantes do ensino médio que hoje se formam sem preparo prático para o mercado de trabalho e para a vida financeira adulta.",
    resultado:
      "O objetivo é formar jovens com mais preparo técnico e prático para entrar no mercado de trabalho, reduzindo a distância entre a formação escolar e as exigências reais do mundo profissional.",
  },
  {
    numero: "10",
    slug: "seguranca-juridica-e-protecao-ao-autonomo",
    eixo: "bolso",
    titulo: "Segurança Jurídica e Proteção à Propriedade Privada e ao Autônomo",
    frase: "Antes de multar, é preciso orientar.",
    resumo:
      "Quem trabalha com o próprio esforço não pode viver com medo de perder a ferramenta de trabalho. Eu proponho orientar antes de multar e proteger o autônomo.",
    problema:
      "O pequeno comerciante, o entregador de moto e o trabalhador autônomo vivem com medo de perder a própria ferramenta de trabalho por causa de uma multa ou de uma regra que muitas vezes nem conheciam direito. Para quem depende diretamente desse bem para gerar renda, a punição não é só um transtorno, é uma ameaça direta ao sustento da família.",
    proposta:
      "Eu defendo criar proteção jurídica para o trabalhador autônomo e o pequeno produtor, com o princípio de orientar e educar antes de multar, protegendo os bens de trabalho usados para gerar renda.",
    funcionamento: [
      "Priorizar a orientação e a educação como primeira resposta diante de uma irregularidade, reservando a punição para os casos em que ela realmente for necessária, e não como primeira e única resposta.",
      "Proteger, de forma específica, os bens de trabalho que geram renda para o autônomo e o pequeno produtor, entendendo que tirar essa ferramenta de circulação pode significar tirar o sustento inteiro de uma família.",
      "A referência são casos concretos apresentados pela candidatura: o pequeno comércio, a moto de entrega e o carro de trabalho.",
    ],
    pilares: [
      "Prioridade para orientação e educação antes da multa",
      "Proteção jurídica específica dos bens de trabalho do autônomo",
      "Foco nos casos concretos do pequeno comércio, da moto de entrega e do carro de trabalho",
      "Reconhecimento de que punir sem orientar pode comprometer o sustento de uma família inteira",
    ],
    beneficiados:
      "Trabalhadores autônomos e pequenos produtores que vivem do próprio esforço e temem perder sua ferramenta de trabalho por uma regra mal explicada ou mal aplicada.",
    resultado:
      "A expectativa é reduzir a punição imediata sobre o autônomo e o pequeno produtor, protegendo sua capacidade de continuar gerando renda mesmo diante de uma irregularidade.",
  },
  {
    numero: "11",
    slug: "saude-mental-e-integrativa-real",
    eixo: "saude",
    titulo: "Saúde Mental e Integrativa Real",
    frase: "Cuidar da mente também é cuidar do corpo.",
    resumo:
      "Saúde mental não se resolve só com receita. Eu proponho acompanhamento psicológico contínuo de verdade para quem vive no limite do cansaço.",
    problema:
      "Quem vive no limite do cansaço, sob pressão constante de trabalho, também adoece por dentro. E, muitas vezes, esse sofrimento é tratado apenas com remédio controlado, sem nenhum acompanhamento terapêutico de verdade por trás. A pessoa sai da consulta com uma receita, mas sem ter sido de fato ouvida ou acompanhada.",
    proposta:
      "Eu defendo criar diretrizes para atendimento psicológico contínuo e suporte metabólico e nutricional na rede pública, prever políticas de saúde preventiva e apoio psicológico para categorias de alta exaustão, e propor regulamentação e fiscalização rigorosa de prescrições de remédios controlados sem acompanhamento terapêutico adequado.",
    funcionamento: [
      "A primeira frente é o atendimento psicológico contínuo, com suporte metabólico e nutricional, dentro da rede pública, entendendo que saúde mental e saúde física caminham juntas.",
      "A segunda é a atenção específica a categorias de trabalho com alta exaustão, para as quais a proposta prevê políticas de saúde preventiva e apoio psicológico direcionado.",
      "A terceira é a fiscalização mais rigorosa sobre a prescrição de remédios controlados, buscando garantir que esse tipo de medicação venha sempre acompanhado de suporte terapêutico adequado.",
    ],
    pilares: [
      "Atendimento psicológico contínuo com suporte metabólico e nutricional na rede pública",
      "Apoio psicológico direcionado para categorias de alta exaustão",
      "Fiscalização rigorosa da prescrição de remédios controlados sem acompanhamento terapêutico",
      "Entendimento da saúde mental como parte inseparável da saúde física",
    ],
    beneficiados:
      "Trabalhadores esgotados que precisam de acompanhamento psicológico real, não apenas de uma receita de remédio para seguir aguentando a rotina.",
    resultado:
      "O objetivo é ampliar o acesso a acompanhamento psicológico contínuo na rede pública e reduzir a prescrição de remédios controlados sem o devido suporte terapêutico.",
  },
  {
    numero: "12",
    slug: "fim-da-industria-da-multa",
    eixo: "bolso",
    titulo: "Fim da Indústria da Multa e Proteção do Veículo de Trabalho",
    frase: "Radar não devia existir para arrecadar. Devia existir para salvar vidas.",
    resumo:
      "Multa não pode ser indústria. Eu proponho orientar antes de punir e aliviar o imposto sobre o veículo que garante o seu sustento.",
    problema:
      "Muita gente perde parte do próprio salário para multas que, muitas vezes, nascem de radares posicionados com foco em arrecadação, não em segurança de fato. E o veículo que garante o sustento da família, seja o carro, seja a moto, vira alvo constante dessa engrenagem, que pune mais do que educa.",
    proposta:
      "Eu defendo educação e orientação prévia antes da punição em infrações leves, criação de barreiras contra radares com foco exclusivamente arrecadatório, e desoneração de impostos sobre veículos utilitários usados no trabalho diário.",
    funcionamento: [
      "Priorizar orientação antes de multar em infrações leves, dando à pessoa a chance de corrigir o comportamento antes de ser punida financeiramente por um erro pequeno.",
      "Colocar freio em radares que existem apenas para arrecadar, sem relação real com a segurança viária.",
      "Reduzir a carga tributária sobre os veículos que são, na prática, ferramenta de trabalho, reconhecendo que taxar uma moto de entrega como se fosse um veículo de lazer ignora a realidade de quem depende dela para sobreviver.",
    ],
    pilares: [
      "Orientação prévia antes da punição em infrações leves",
      "Barreiras contra radares com foco exclusivamente arrecadatório",
      "Desoneração de impostos sobre veículos utilitários usados no trabalho diário",
      "Reconhecimento do veículo de trabalho como ferramenta de sustento, não como bem de consumo comum",
    ],
    beneficiados:
      "Motoristas e trabalhadores que dependem do próprio veículo para gerar renda, como entregadores, motoristas de aplicativo e pequenos transportadores.",
    resultado:
      "A expectativa é reduzir o peso das multas arrecadatórias e da carga tributária sobre quem usa o veículo como ferramenta de trabalho.",
  },
  {
    numero: "13",
    slug: "seguranca-publica-real",
    eixo: "estado",
    titulo: "Segurança Pública Real e Defesa do Cidadão",
    frase: "Quem cumpre a lei tem o direito de se defender e de proteger o que é seu.",
    resumo:
      "Quem cumpre a lei merece proteção de verdade. Eu proponho segurança pública mais forte e o direito de defender sua família e seu patrimônio.",
    problema:
      "O cidadão que trabalha, cumpre a lei e constrói seu patrimônio muitas vezes se sente desprotegido diante da criminalidade, sem respaldo real para se defender ou proteger a própria família. A sensação de insegurança pesa tanto quanto o próprio risco.",
    proposta:
      "Eu defendo o endurecimento das penas para crimes contra o patrimônio e a vida, o fortalecimento das forças de segurança pública e a defesa do direito de autodefesa do cidadão que cumpre as leis e protege sua família e seu patrimônio.",
    funcionamento: [
      "Penas mais rígidas para quem comete crimes contra o patrimônio e contra a vida, buscando maior correspondência entre a gravidade do crime e a resposta do sistema de justiça.",
      "Fortalecimento das forças de segurança pública, entendendo que a presença e a capacidade de resposta dessas instituições são parte essencial da segurança da população.",
      "Reconhecimento do direito de autodefesa do cidadão que cumpre a lei, protege a família e o patrimônio.",
    ],
    pilares: [
      "Endurecimento das penas para crimes contra patrimônio e vida",
      "Fortalecimento das forças de segurança pública",
      "Defesa do direito de autodefesa do cidadão que cumpre a lei",
      "Proteção da família e do patrimônio de quem trabalha honestamente",
    ],
    beneficiados:
      "Cidadãos e famílias que hoje se sentem vulneráveis diante da criminalidade e sentem que a lei protege mais quem comete o crime do que quem sofre com ele.",
    resultado:
      "O objetivo é fortalecer a segurança pública e ampliar a proteção do cidadão que trabalha e cumpre a lei, tanto na resposta institucional quanto no reconhecimento do direito de autodefesa.",
  },
  {
    numero: "14",
    slug: "habitacao-digna-e-regularizacao-fundiaria",
    eixo: "estado",
    titulo: "Habitação Digna e Regularização Fundiária Expressa",
    frase: "Quem construiu a própria casa merece o papel que prova isso.",
    resumo:
      "Quem construiu a própria casa merece segurança sobre ela. Eu proponho regularização fundiária rápida e gratuita, com o título de propriedade nas mãos de quem trabalhou por ele.",
    problema:
      "Muita gente construiu a casa própria com o suor do próprio trabalho, tijolo por tijolo, ao longo de anos, mas ainda vive sem o título de propriedade em mãos. Essa insegurança jurídica pesa sobre a família inteira: sem o documento, fica mais difícil vender, herdar, usar como garantia ou simplesmente ter a certeza de que aquele teto é, de fato, seu.",
    proposta:
      "Eu defendo criar um programa federal de regularização fundiária expressa e gratuita, com entrega do título de propriedade definitivo para quem construiu a própria casa.",
    funcionamento: [
      "Agilidade no processo, tratando a regularização fundiária como algo que precisa ser resolvido em tempo compatível com a vida real das pessoas, não em anos de espera e tramitação.",
      "Gratuidade total do processo, entendendo que quem já pagou o preço de construir a própria casa não deveria pagar novamente, agora em taxas e burocracia, para ter o direito de posse reconhecido oficialmente.",
      "Critérios de elegibilidade, prazos e órgãos responsáveis pela execução fazem parte do detalhamento técnico do programa e ainda estão a definir.",
    ],
    pilares: [
      "Regularização fundiária expressa, com foco em agilidade",
      "Gratuidade total do processo",
      "Entrega do título de propriedade definitivo",
      "Reconhecimento do esforço de quem construiu a própria casa com o próprio trabalho",
    ],
    beneficiados:
      "Famílias que construíram a própria casa e ainda não têm o título de propriedade em mãos, vivendo em insegurança jurídica sobre um bem conquistado com anos de esforço.",
    resultado:
      "A expectativa é ampliar o acesso à regularização fundiária e à segurança jurídica sobre a moradia própria, dando a quem construiu a casa a certeza documental de que ela é sua.",
  },
  {
    numero: "15",
    slug: "fim-dos-privilegios-em-aposentadorias",
    eixo: "estado",
    titulo: "Transparência e Fim dos Privilégios em Benefícios e Aposentadorias",
    frase: "Regra boa é a mesma para todo mundo.",
    resumo:
      "Regra boa é para todo mundo, sem exceção. Eu proponho acabar com privilégios previdenciários e supersalários na política.",
    problema:
      "Enquanto o trabalhador se aposenta seguindo regras rígidas do regime geral, esperando anos de contribuição e enfrentando um valor final que muitas vezes mal cobre as despesas, parte da política e de altos cargos públicos segue com privilégios previdenciários e supersalários que a maioria da população nunca vai sequer chegar perto de ter.",
    proposta:
      "Eu defendo o fim de privilégios previdenciários e supersalários no setor público, com equiparação das regras de aposentadoria de políticos e altos cargos aos limites do regime geral.",
    funcionamento: [
      "A proposta é direta: igualar as regras previdenciárias de políticos e altos cargos públicos às mesmas condições aplicadas ao trabalhador comum no regime geral.",
      "Isso significa que o mesmo teto, os mesmos critérios de tempo de contribuição e os mesmos limites de valor que valem para o trabalhador brasileiro deveriam valer também para quem ocupa cargos políticos e altos postos públicos, sem tratamento especial.",
      "Por depender de alteração constitucional e legal, a proposta exige tramitação no Congresso Nacional e não pode ser tratada como resultado automático.",
    ],
    pilares: [
      "Fim de privilégios previdenciários no setor público",
      "Fim de supersalários",
      "Equiparação das regras de aposentadoria de políticos e altos cargos ao regime geral",
      "Um único conjunto de regras, sem exceção para quem exerce cargo público",
    ],
    beneficiados:
      "Todo trabalhador que se aposenta pelas regras normais e vê a política funcionando com regras diferentes, mais vantajosas, para quem está dentro do próprio sistema.",
    resultado:
      "O objetivo é acabar com a desigualdade de regras previdenciárias entre a política e o trabalhador comum, aplicando o mesmo padrão de regime geral para todos.",
  },
  {
    numero: "16",
    slug: "academia-popular-e-vitalidade",
    eixo: "saude",
    titulo: "Saúde na Prática: Academia Popular e Vitalidade para Todos",
    frase: "Quem já venceu a obesidade sabe que venceremos também a fome e a injustiça.",
    resumo:
      "Cuidar da saúde não devia ser privilégio de quem pode pagar academia. Eu proponho transformar espaços públicos em academias populares, com orientação profissional e nutricional para todo mundo.",
    problema:
      "Cuidar do corpo custa caro para quem já mal tem tempo e dinheiro sobrando no fim do mês. Uma academia particular, hoje, é um privilégio que boa parte da população simplesmente não pode pagar. Enquanto isso, quadras cobertas, centros comunitários e praças ficam subutilizados, quando poderiam se transformar em espaço real de saúde e vitalidade para quem mais precisa.",
    proposta:
      "Eu defendo usar espaços públicos já existentes, como quadras cobertas, centros comunitários e praças revitalizadas, para criar polos de academias populares comunitárias.",
    funcionamento: [
      "A primeira frente é o espaço físico, com equipamentos de ferro, pesos livres, barras, anilhas e aparelhos básicos e funcionais instalados nesses locais públicos já existentes, aproveitando estrutura hoje ociosa ou subutilizada.",
      "A segunda é a orientação profissional, feita por estudantes em estágio supervisionado e por profissionais da área, garantindo acompanhamento adequado, e não apenas equipamento disponível sem orientação.",
      "A terceira é a orientação básica de nutrição e reposição vitamínica acessível, entendendo que atividade física sem cuidado nutricional resolve só parte do problema.",
    ],
    pilares: [
      "Aproveitamento de espaços públicos já existentes, como quadras, centros comunitários e praças",
      "Equipamentos básicos e funcionais de baixo custo de implementação",
      "Orientação profissional por estudantes em estágio supervisionado e por profissionais da área",
      "Orientação básica de nutrição e reposição vitamínica acessível",
    ],
    beneficiados:
      "Quem quer cuidar do corpo e da saúde, mas hoje não tem tempo ou dinheiro para pagar uma academia particular.",
    resultado:
      "A expectativa é ampliar o acesso à atividade física orientada e à prevenção em saúde, usando estrutura pública já existente, com baixo custo de implementação.",
  },
];

export const notaConformidade =
  "Todos os projetos acima representam propostas e compromissos de atuação caso eleita. Nenhum deles descreve política pública já implementada, resultado já alcançado ou dado estatístico comprovado. Pontos técnicos ainda não detalhados pela candidatura, como faixas de valor, prazos e órgãos executores, seguem marcados como a definir.";

/**
 * Lista canônica de exibição: os projetos são reordenados segundo a sequência dos eixos
 * e renumerados de forma contínua (01, 02, 03...), evitando saltos entre eixo e numeração.
 */
export const projetosOrdenados: Projeto[] = eixos
  .flatMap((eixo) => projetos.filter((projeto) => projeto.eixo === eixo.id))
  .map((projeto, indice) => ({ ...projeto, numero: String(indice + 1).padStart(2, "0") }));
