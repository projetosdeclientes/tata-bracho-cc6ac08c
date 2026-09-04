/**
 * Dados oficiais da candidatura. Fonte: Dossiê e Estrutura do Site (documentos oficiais).
 * Nenhum valor aqui pode ser alterado, abreviado ou inferido.
 */
export const candidatura = {
  nomeCompleto: "Taciany Pereira dos Santos",
  nomeUrna: "Tatá Bracho",
  cargo: "Deputada Federal",
  numero: "7720",
  partido: "Solidariedade",
  federacao: "Federação Renovação Solidária (PRD/Solidariedade)",
  cnpj: "68.237.289/0001-09",
  estado: "Minas Gerais",
  fraseHero: "O Brasil precisa de verdade, não de promessas vazias.",
  tituloHistoria: "A MINHA HISTÓRIA É A LUTA DO POVO",
  identificacaoEleitoral:
    "PROPAGANDA ELEITORAL | Tatá Bracho | Deputada Federal n° 7720 | Federação Renovação Solidária (Solidariedade/PRD) | CNPJ: 68.237.289/0001-09",

} as const;

/** Links oficiais já fornecidos pela campanha. */
export const links = {
  solidariedade: "https://solidariedade.org.br",
  /** PLACEHOLDER_LINK_WHATSAPP_COMUNIDADE: link oficial ainda não fornecido pela campanha. */
  comunidadeWhatsapp: null as string | null,
} as const;

/**
 * Texto integral escrito pela própria Tatá Bracho, reproduzido sem alteração de conteúdo.
 * Fonte: Dossiê, seção 4.
 */
export const historia: string[] = [
  "Eu sei exatamente o que é carregar um peso insuportável nas costas e lutar todos os dias para não desistir. Durante anos, eu enfrentei a batalha contra a balança e contra os limites do meu próprio corpo. Eu fiz a cirurgia bariátrica, mas a transformação real, a virada de chave, aconteceu na força de vontade: eu perdi 76 quilos em 4 anos com a bariátrica sem nenhuma cirurgia plástica, apenas na raça, no suor e na disciplina dentro da academia.",
  "Nessa jornada, enquanto eu vencia a gordura e o cansaço, eu me encontrei de verdade. Descobri que quando a gente tem foco, garra e saúde, a nossa mente clareia e a gente percebe o quanto é capaz de transformar a própria história.",
  "É exatamente por isso que eu estou aqui. Porque eu sei que o brasileiro não quer esmola, não quer favor e não quer depender de político. O povo precisa de oportunidade. Precisa de um ambiente onde seja possível prosperar, trabalhar com dignidade, ter dinheiro no bolso, cuidar da saúde e ver o próprio esforço valer a pena.",
  "Chega de um sistema que esmaga o trabalhador, que cobra impostos absurdos em cima do pão de cada dia e que mantém a população exausta e dependente. Nós viemos para mudar isso pela raiz: com desoneração, saúde preventiva de verdade, acesso à energia e à força física, e liberdade para quem quer vencer.",
  "Eu venci a minha maior batalha pessoal com muita luta. Agora, a nossa luta é para garantir que você também vença a sua.",
  "O Brasil só vai para frente quando quem rala tiver vez e voz. Anote e confirme na urna: Tatá Bracho 7720.",
];

/** Valores declarados no material da candidatura. Fonte: Dossiê, seção 3. */
export const valores = [
  {
    titulo: "Saúde e prevenção",
    texto:
      "Defesa de uma visão de saúde que valoriza prevenção, cuidado com o corpo, vitalidade, atividade física e acesso a suporte de saúde.",
  },
  {
    titulo: "Oportunidade em vez de dependência",
    texto:
      "O povo precisa de oportunidade para trabalhar, prosperar e viver com dignidade, em vez de depender de favor político.",
  },
  {
    titulo: "Autonomia e esforço pessoal",
    texto:
      "A história pessoal de superação é apresentada como exemplo de disciplina, foco, garra e transformação da própria trajetória.",
  },
  {
    titulo: "Crítica ao peso sobre o trabalhador",
    texto:
      "Impostos, desgaste, burocracia e condições que comprimem o tempo, o dinheiro e a energia de quem trabalha.",
  },
  {
    titulo: "Dignidade",
    texto:
      "Dignidade associada a saúde, trabalho, dinheiro no bolso, família, autonomia e reconhecimento do esforço individual.",
  },
  {
    titulo: "Mudança pela raiz",
    texto: "Enfrentar as causas estruturais dos problemas, em vez de apenas remediar seus efeitos.",
  },
];

/** Conceitos centrais que atravessam os projetos. Fonte: Projetos Desenvolvidos. */
export const conceitosCentrais = [
  {
    titulo: "Saúde preventiva",
    texto:
      "Exames de vitaminas e suplementação acessível no SUS, além de campanhas de saúde mental ligadas à alimentação.",
  },
  {
    titulo: "Comida acessível",
    texto:
      "Redução de impostos nos alimentos básicos, incentivo à agricultura familiar e subsídio para proteínas essenciais.",
  },
  {
    titulo: "Economia justa",
    texto:
      "Combate aos juros abusivos, crédito acessível para pequenas empresas e educação financeira popular.",
  },
  {
    titulo: "Qualificação e trabalho",
    texto:
      "Programas de qualificação gratuitos, saúde ocupacional para trabalhadores e garantia de direitos para quem empreende.",
  },
];
