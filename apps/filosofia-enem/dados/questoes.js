/*
  Questões de Filosofia do ENEM, com marcações.

  Como marcar:
    {palavra}  -> palavra-chave (marca-texto amarelo no texto; verde na alternativa correta)
    ~palavra~  -> armadilha numa alternativa errada (sublinhado vermelho)

  Cada questão:
    id, filosofos (lista de ids da seção), prova, temas (palavras-chave para o filtro),
    textos: [{ rotulo, t, ref: { autor, obra, resto } }],
    enunciado, alts: [{ l, t, ok, nota }], ponte
*/
window.QUESTOES = [
  /* ===================== ARISTÓTELES ===================== */
  {
    id: "a-2025-formas",
    filosofos: ["aristoteles"],
    prova: "ENEM 2025",
    temas: ["Formas de governo", "Bem comum"],
    textos: [{
      t: `O corpo de cidadãos é o poder supremo dos Estados. A supremacia pode residir ou {num homem}, ou {na minoria}, ou {em todos}. Sempre que o Um, ou a Minoria, ou Todos governam, tendo em vista o {bem-estar comum}, essas constituições são {justas}; mas se procuram apenas o {benefício de uma das partes}, seja ela o Um, a Minoria ou Todos, estabelece-se um {desvio}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Política", resto: ". São Paulo: Nova Cultural, 2000." }
    }],
    enunciado: "No excerto encontra-se a base da teoria clássica das três formas de governo representadas pela",
    alts: [
      { l: "A", t: "~tirania, oligarquia~ e república.", nota: "Tirania e oligarquia são os desvios, não as formas justas." },
      { l: "B", t: "~burocracia, autarquia e império~.", nota: "Termos modernos e administrativos, fora do texto." },
      { l: "C", t: "~ditadura, autocracia e anarquia~.", nota: "Conceitos modernos, ausentes em Aristóteles." },
      { l: "D", t: "plutocracia, tecnocracia e ~demagogia~.", nota: "Demagogia é desvio; as outras são modernas." },
      { l: "E", t: "{monarquia, aristocracia e democracia}.", ok: true }
    ],
    ponte: "Um, poucos e todos governando pelo bem-estar comum: monarquia, aristocracia e democracia."
  },
  {
    id: "a-2020-comunidade",
    filosofos: ["aristoteles"],
    prova: "ENEM 2020",
    temas: ["Ética e política", "Felicidade"],
    textos: [{
      t: `Vemos que toda {cidade} é uma espécie de {comunidade}, e toda comunidade se forma {com vistas a algum bem}, pois todas as ações de todos os homens são praticadas com vistas ao que lhe parece um bem; todas as comunidades visam algum bem, é evidente que a mais importante de todas elas e que inclui todas as outras tem mais que todas este objetivo e visa ao {mais importante de todos os bens}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Política", resto: " (a referência completa não veio na cópia da questão)." }
    }],
    enunciado: "No fragmento, Aristóteles promove uma reflexão que associa dois elementos essenciais à discussão sobre a vida em comunidade, a saber:",
    alts: [
      { l: "A", t: "{Ética e política}, pois conduzem à {eudaimonia}.", ok: true },
      { l: "B", t: "~Retórica e linguagem~, pois cuidam dos discursos na ágora.", nota: "O texto fala do bem, não do discurso." },
      { l: "C", t: "~Metafísica e ontologia~, pois tratam da filosofia primeira.", nota: "Não trata do ser, mas do bem da cidade." },
      { l: "D", t: "~Democracia~ e sociedade, pois se referem a relações sociais.", nota: "Nenhum regime é citado." },
      { l: "E", t: "Geração e corrupção, pois abarcam o campo da ~physis~.", nota: "Physis é tema da natureza, não da cidade." }
    ],
    ponte: "Cidade (política) que busca o maior bem (ética): ética e política rumo à felicidade."
  },
  {
    id: "a-2019ppl-legislador",
    filosofos: ["aristoteles"],
    prova: "ENEM 2019 PPL",
    temas: ["Bem comum", "Justiça"],
    textos: [{
      t: `Vimos que o homem sem lei é injusto e o respeitador da lei é justo; evidentemente todos os atos legítimos são, em certo sentido, atos justos, porque os atos prescritos pela {arte do legislador} são legítimos e cada um deles é justo. Ora, nas disposições que tomam sobre todos os assuntos, as leis têm em mira a {vantagem comum}, quer de todos, quer dos melhores ou daqueles que detêm o poder ou algo desse gênero; de modo que, em certo sentido, chamamos justos aqueles atos que tendem a produzir e a preservar, {para a sociedade política, a felicidade} e os elementos que a compõem.`,
      ref: { autor: "ARISTÓTELES.", obra: "A política", resto: ". São Paulo: Cia. das Letras, 2010 (adaptado)." }
    }],
    enunciado: "De acordo com o texto de Aristóteles, o legislador deve agir conforme a",
    alts: [
      { l: "A", t: "moral e a ~vida privada~.", nota: "O texto fala da sociedade política, não do privado." },
      { l: "B", t: "{virtude} e os {interesses públicos}.", ok: true },
      { l: "C", t: "~utilidade~ e os critérios pragmáticos.", nota: "Vocabulário utilitarista (Bentham)." },
      { l: "D", t: "lógica e os ~princípios metafísicos~.", nota: "Nada de metafísica no trecho." },
      { l: "E", t: "razão e as ~verdades transcendentes~.", nota: "Transcendência não aparece no texto." }
    ],
    ponte: "Vantagem comum e felicidade da sociedade política: virtude e interesses públicos."
  },
  {
    id: "a-2017-arte-mestra",
    filosofos: ["aristoteles"],
    prova: "ENEM 2017",
    temas: ["Ética e política", "Bem comum"],
    textos: [{
      t: `Se, pois, para as coisas que fazemos existe um fim que desejamos por ele mesmo e tudo o mais é desejado no interesse desse fim; evidentemente tal fim será o bem, ou antes, o {sumo bem}. Mas não terá o conhecimento, porventura, grande influência sobre essa vida? Se assim é, esforcemo-nos por determinar, ainda que em linhas gerais apenas, o que seja ele e de qual das ciências ou faculdades constitui o objeto. Ninguém duvidará de que o seu estudo pertença à arte mais prestigiosa e que mais verdadeiramente se pode chamar a {arte mestra}. Ora, a política mostra ser dessa natureza, pois é ela que {determina quais as ciências} que devem ser estudadas num Estado, quais são as que cada cidadão deve aprender, e até que ponto; e vemos que até as faculdades tidas em maior apreço, como a estratégia, a economia e a retórica, {estão sujeitas a ela}. Ora, como a política {utiliza as demais ciências} e, por outro lado, legisla sobre o que devemos e o que não devemos fazer, a finalidade dessa ciência deve abranger as das outras, de modo que essa finalidade será o {bem humano}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Ética a Nicômaco", resto: ". In: Pensadores. São Paulo: Nova Cultural, 1991 (adaptado)." }
    }],
    enunciado: "Para Aristóteles, a relação entre o sumo bem e a organização da pólis pressupõe que",
    alts: [
      { l: "A", t: "o bem dos indivíduos consiste em cada um perseguir seus ~interesses~.", nota: "O texto fala do bem humano comum, não de interesses." },
      { l: "B", t: "o sumo bem é dado pela ~fé~ de que os deuses são os portadores da verdade.", nota: "Não há deuses nem fé no trecho." },
      { l: "C", t: "a política é a ciência que {precede todas as demais} na organização da cidade.", ok: true },
      { l: "D", t: "a ~educação~ visa formar a consciência de cada pessoa para agir corretamente.", nota: "A educação é só um exemplo do que a política decide." },
      { l: "E", t: "a ~democracia~ protege as atividades políticas necessárias para o bem comum.", nota: "Nenhum regime é citado." }
    ],
    ponte: "“Arte mestra” e “estão sujeitas a ela”: a política precede todas as ciências."
  },
  {
    id: "a-2013-felicidade",
    filosofos: ["aristoteles"],
    prova: "ENEM 2013",
    temas: ["Felicidade"],
    textos: [{
      t: `A {felicidade} é, portanto, {a melhor, a mais nobre e a mais aprazível coisa} do mundo, e esses atributos não devem estar separados como na inscrição existente em Delfos “das coisas, a mais nobre é a mais justa, e a melhor é a saúde; porém a mais doce é ter o que amamos”. Todos estes atributos estão presentes {nas mais excelentes atividades}, e entre essas a melhor, nós a identificamos como felicidade.`,
      ref: { autor: "ARISTÓTELES.", obra: "A Política", resto: ". São Paulo: Cia. das Letras, 2010." }
    }],
    enunciado: "Ao reconhecer na felicidade a reunião dos mais excelentes atributos, Aristóteles a identifica como",
    alts: [
      { l: "A", t: "busca por ~bens materiais~ e títulos de nobreza.", nota: "Felicidade não é riqueza nem título." },
      { l: "B", t: "plenitude espiritual e ~ascese~ pessoal.", nota: "Ascese é vocabulário religioso, fora do texto." },
      { l: "C", t: "{finalidade} das ações e condutas humanas.", ok: true },
      { l: "D", t: "conhecimento de ~verdades imutáveis~ e perfeitas.", nota: "Isso lembra Platão, não o trecho." },
      { l: "E", t: "expressão do ~sucesso individual~ e reconhecimento público.", nota: "Felicidade não é fama." }
    ],
    ponte: "A melhor das atividades humanas é o fim último de tudo o que fazemos."
  },
  {
    id: "a-2021ppl-logos",
    filosofos: ["aristoteles"],
    prova: "ENEM 2021 PPL",
    temas: ["Lógos"],
    textos: [{
      t: `Sem dúvida, os sons da voz (phone) exprimem a dor e o prazer; também a encontramos nos animais em geral; sua natureza lhes permite somente sentir a dor e o prazer e manifestar-lhes entre si. Mas o {lógos} é feito para {exprimir o justo e o injusto}. Este é o {caráter distintivo do homem} face a todos os outros animais: só ele {percebe o bem e o mal}, o justo e o injusto, e os outros valores; é a posse comum desses valores que faz a família e a cidade.`,
      ref: { autor: "ARISTÓTELES.", obra: "A política", resto: ". São Paulo: Nova Cultural, 1987 (adaptado)." }
    }],
    enunciado: "Para o autor, a característica que define o ser humano é o lógos, que consiste na",
    alts: [
      { l: "A", t: "evolução espiritual da ~alma~.", nota: "O texto não fala de alma." },
      { l: "B", t: "apreensão ~gradual~ da verdade.", nota: "Não há processo gradual no trecho." },
      { l: "C", t: "segurança ~material~ do indivíduo.", nota: "Nada sobre bens materiais." },
      { l: "D", t: "{capacidade racional de discernir}.", ok: true },
      { l: "E", t: "possibilidade eventual de ~transcender~.", nota: "Transcendência não aparece." }
    ],
    ponte: "Perceber o bem e o mal, o justo e o injusto: discernir pela razão."
  },
  {
    id: "a-2016-sabedoria-pratica",
    filosofos: ["aristoteles"],
    prova: "ENEM 2016 (2ª aplicação)",
    temas: ["Deliberação"],
    textos: [{
      t: `{Ninguém delibera sobre coisas que não podem ser de outro modo}, nem sobre as que lhe é impossível fazer. Por conseguinte, como o conhecimento científico envolve demonstração, mas não há demonstração de coisas cujos primeiros princípios são variáveis (pois todas elas poderiam ser diferentemente), e como é impossível deliberar sobre coisas que são por necessidade, a {sabedoria prática não pode ser ciência, nem arte}: nem ciência, porque aquilo que se pode fazer é capaz de ser diferentemente, nem arte, porque {o agir e o produzir} são duas espécies diferentes de coisa. Resta, pois, a alternativa de ser ela uma {capacidade verdadeira e raciocinada de agir} com respeito às coisas que são boas ou más para o homem.`,
      ref: { autor: "ARISTÓTELES.", obra: "Ética a Nicômaco", resto: ". São Paulo: Abril Cultural, 1980." }
    }],
    enunciado: "Aristóteles considera a ética como pertencente ao campo do saber prático. Nesse sentido, ela difere-se dos outros saberes porque é caracterizada como",
    alts: [
      { l: "A", t: "{conduta} definida pela {capacidade racional de escolha}.", ok: true },
      { l: "B", t: "capacidade de escolher de acordo com ~padrões científicos~.", nota: "O texto diz que a sabedoria prática não é ciência." },
      { l: "C", t: "~conhecimento~ das coisas importantes para a vida do homem.", nota: "Ética é agir, não só conhecer." },
      { l: "D", t: "~técnica~ que tem como resultado a produção de boas ações.", nota: "O texto separa agir de produzir: não é arte." },
      { l: "E", t: "política estabelecida de acordo com ~padrões democráticos~ de deliberação.", nota: "Democracia não aparece." }
    ],
    ponte: "“Capacidade raciocinada de agir”: conduta guiada pela escolha racional."
  },
  {
    id: "a-2012ppl-deliberacao",
    filosofos: ["aristoteles"],
    prova: "ENEM 2012 PPL",
    temas: ["Deliberação"],
    textos: [{
      t: `Quanto à {deliberação}, deliberam as pessoas sobre tudo? São todas as coisas objetos de possíveis deliberações? Ou será a deliberação impossível no que tange a algumas coisas? Ninguém delibera sobre {coisas eternas e imutáveis}, tais como a ordem do universo; tampouco sobre coisas mutáveis como os fenômenos dos solstícios e o nascer do sol, pois nenhuma delas {pode ser produzida por nossa ação}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Ética a Nicômaco", resto: ". São Paulo: Edipro, 2007 (adaptado)." }
    }],
    enunciado: "O conceito de deliberação tratado por Aristóteles é importante para entender a dimensão da responsabilidade humana. A partir do texto, considera-se que é possível ao homem deliberar sobre",
    alts: [
      { l: "A", t: "coisas ~imagináveis~, já que ele não tem controle sobre os acontecimentos da natureza.", nota: "Imaginar não é deliberar." },
      { l: "B", t: "ações humanas, ciente da influência e da ~determinação dos astros~ sobre as mesmas.", nota: "O texto exclui os astros da deliberação." },
      { l: "C", t: "fatos {atingíveis pela ação humana}, desde que estejam {sob seu controle}.", ok: true },
      { l: "D", t: "fatos e ações ~mutáveis da natureza~, já que ele é parte dela.", nota: "O solstício é mutável e ninguém delibera sobre ele." },
      { l: "E", t: "~coisas eternas~, já que ele é por essência um ser religioso.", nota: "O texto nega isso diretamente." }
    ],
    ponte: "Só deliberamos sobre o que “pode ser produzido por nossa ação”."
  },
  {
    id: "a-2013ppl-justo",
    filosofos: ["aristoteles"],
    prova: "ENEM 2013 PPL",
    temas: ["Justiça"],
    textos: [{
      t: `O termo {injusto} se aplica tanto às pessoas que {infringem a lei} quanto às pessoas ambiciosas (no sentido de {quererem mais do que aquilo a que têm direito}) e iníquas, de tal forma que as cumpridoras da lei e as pessoas corretas serão justas. O justo, então, é aquilo {conforme à lei} e o injusto é o ilegal e iníquo.`,
      ref: { autor: "ARISTÓTELES.", obra: "Ética a Nicômaco", resto: ". São Paulo: Nova Cultural, 1996 (adaptado)." }
    }],
    enunciado: "Segundo Aristóteles, pode-se reconhecer uma ação justa quando ela observa o",
    alts: [
      { l: "A", t: "compromisso com os movimentos ~desvinculados da legalidade~.", nota: "O justo é conforme à lei." },
      { l: "B", t: "benefício para o ~maior número~ possível de indivíduos.", nota: "Fórmula utilitarista, não aristotélica." },
      { l: "C", t: "interesse para a ~classe social~ do agente da ação.", nota: "Vocabulário marxista, fora do texto." },
      { l: "D", t: "fundamento na categoria de ~progresso histórico~.", nota: "Nada de história no trecho." },
      { l: "E", t: "princípio de {dar a cada um o que lhe é devido}.", ok: true }
    ],
    ponte: "Injusto é querer “mais do que aquilo a que têm direito”; justo é dar a cada um o devido."
  },
  {
    id: "a-2014ppl-virtude",
    filosofos: ["aristoteles"],
    prova: "ENEM 2014 PPL",
    temas: ["Virtude", "Bem comum"],
    textos: [{
      t: `Ao falar do caráter de um homem não dizemos que ele é sábio ou que possui entendimento, mas que é {calmo ou temperante}. No entanto, louvamos também o sábio, referindo-se ao {hábito}; e aos {hábitos dignos de louvor chamamos virtude}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Ética a Nicômaco", resto: ". São Paulo: Nova Cultural, 1973." }
    }],
    enunciado: "Em Aristóteles, o conceito de virtude ética expressa a",
    alts: [
      { l: "A", t: "{excelência} de atividades praticadas em consonância com o {bem comum}.", ok: true },
      { l: "B", t: "concretização ~utilitária~ de ações que revelam a manifestação de ~propósitos privados~.", nota: "Utilidade e interesse privado são o oposto da virtude." },
      { l: "C", t: "concordância das ações humanas aos ~preceitos emanados da divindade~.", nota: "Virtude é hábito humano, não mandamento." },
      { l: "D", t: "realização de ações que permitem a configuração da ~paz interior~.", nota: "Paz interior é ideal estoico." },
      { l: "E", t: "manifestação de ações ~estéticas~, coroadas de adorno e beleza.", nota: "Nada de estética no trecho." }
    ],
    ponte: "Hábito digno de louvor é excelência (areté), vivida na comunidade."
  },
  {
    id: "a-2014-cidadania",
    filosofos: ["aristoteles"],
    prova: "ENEM 2014",
    temas: ["Cidadania"],
    textos: [
      {
        rotulo: "Texto I",
        t: `Olhamos o homem {alheio às atividades públicas} não como alguém que cuida apenas de seus próprios interesses, mas como um inútil; nós, cidadãos atenienses, {decidimos as questões públicas por nós mesmos} na crença de que não é o debate que é empecilho à ação, e sim o fato de não se estar esclarecido pelo debate antes de chegar a hora da ação.`,
        ref: { autor: "TUCÍDIDES.", obra: "História da Guerra do Peloponeso", resto: ". Brasília: UnB, 1987 (adaptado)." }
      },
      {
        rotulo: "Texto II",
        t: `Um {cidadão integral} pode ser definido por nada mais nada menos que pelo {direito de administrar justiça e exercer funções públicas}; algumas destas, todavia, são limitadas quanto ao tempo de exercício, de tal modo que não podem de forma alguma ser exercidas duas vezes pela mesma pessoa, ou somente podem sê-lo depois de certos intervalos de tempo prefixados.`,
        ref: { autor: "ARISTÓTELES.", obra: "Política", resto: ". Brasília: UnB, 1985." }
      }
    ],
    enunciado: "Comparando os textos I e II, tanto para Tucídides (no século V a.C.) quanto para Aristóteles (no século IV a.C.), a cidadania era definida pelo(a)",
    alts: [
      { l: "A", t: "~prestígio~ social.", nota: "Nenhum texto fala em prestígio." },
      { l: "B", t: "acúmulo de ~riqueza~.", nota: "Riqueza não define o cidadão nos textos." },
      { l: "C", t: "{participação política}.", ok: true },
      { l: "D", t: "~local de nascimento~.", nota: "Não aparece nos textos." },
      { l: "E", t: "grupo de ~parentesco~.", nota: "Não aparece nos textos." }
    ],
    ponte: "Decidir as questões públicas e exercer funções públicas: participação política."
  },
  {
    id: "a-2017ppl-intuicao",
    filosofos: ["aristoteles"],
    prova: "ENEM 2017 PPL",
    temas: ["Conhecimento racional"],
    textos: [{
      t: `Dado que, dos hábitos racionais com os quais captamos a verdade, alguns são sempre verdadeiros, enquanto {outros admitem o falso, como a opinião e o cálculo}, enquanto o conhecimento científico e a intuição são sempre verdadeiros, e dado que nenhum outro gênero de conhecimento é mais exato que o conhecimento científico, {exceto a intuição}, e, por outro lado, os princípios são mais conhecidos que as demonstrações, e dado que todo conhecimento científico constitui-se de maneira argumentativa, {não pode haver conhecimento científico dos princípios}, e dado que não pode haver nada mais verdadeiro que o conhecimento científico, exceto a intuição, {a intuição deve ter por objeto os princípios}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Segundos analíticos", resto: ". In: REALE, G. História da filosofia antiga. São Paulo: Loyola, 1994." }
    }],
    enunciado: "Os princípios, base da epistemologia aristotélica, pertencem ao domínio do(a)",
    alts: [
      { l: "A", t: "~opinião~, pois fazem parte da formação da pessoa.", nota: "A opinião admite o falso, diz o texto." },
      { l: "B", t: "~cálculo~, pois são demonstrados por argumentos.", nota: "O cálculo também admite o falso." },
      { l: "C", t: "~conhecimento científico~, pois admitem provas empíricas.", nota: "O texto nega ciência dos princípios." },
      { l: "D", t: "{intuição}, pois ela é {mais exata} que o conhecimento científico.", ok: true },
      { l: "E", t: "prática de ~hábitos racionais~, pois com ela se capta a verdade.", nota: "Hábitos racionais é o gênero geral, não a resposta específica." }
    ],
    ponte: "A frase final responde: “a intuição deve ter por objeto os princípios”."
  },
  {
    id: "a-2015ppl-escravo",
    filosofos: ["aristoteles"],
    prova: "ENEM 2015 PPL",
    temas: ["Escravidão"],
    textos: [{
      t: `A utilidade do escravo é {semelhante à do animal}. Ambos prestam {serviços corporais} para atender às necessidades da vida. A natureza faz o corpo do escravo e do homem livre de forma diferente. O escravo tem {corpo forte}, adaptado naturalmente ao {trabalho servil}. Já o homem livre tem corpo ereto, inadequado ao trabalho braçal, porém {apto à vida do cidadão}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Política", resto: ". Brasília: UnB, 1985." }
    }],
    enunciado: "O trabalho braçal é considerado, na filosofia aristotélica, como",
    alts: [
      { l: "A", t: "indicador da imagem do homem no ~estado de natureza~.", nota: "Estado de natureza é conceito moderno (Hobbes, Locke)." },
      { l: "B", t: "condição necessária para a realização da ~virtude~ humana.", nota: "O trabalho braçal afasta da vida cidadã." },
      { l: "C", t: "atividade que exige {força física} e {uso limitado da racionalidade}.", ok: true },
      { l: "D", t: "referencial que o homem deve seguir para viver uma ~vida ativa~.", nota: "O homem livre é “inadequado ao trabalho braçal”." },
      { l: "E", t: "mecanismo de ~aperfeiçoamento~ do trabalho por meio da experiência.", nota: "Nada sobre aperfeiçoar o trabalho." }
    ],
    ponte: "“Serviços corporais” e “corpo forte”: força física; comparado ao animal: racionalidade limitada."
  },
  {
    id: "a-2022ppl-natureza-social",
    filosofos: ["aristoteles"],
    prova: "ENEM 2022 PPL",
    temas: ["Natureza social"],
    textos: [{
      t: `Polemizando contra a tradicional {tese aristotélica}, que via na sociedade o resultado de um {instinto primordial}, Hobbes sustenta que no gênero humano, diferentemente do animal, {não existe sociabilidade instintiva}. Entre os indivíduos não existe um amor natural, mas somente uma explosiva mistura de temor e necessidade recíprocos que, se não fosse {disciplinada pelo Estado}, originaria uma incontrolável sucessão de violências e excessos.`,
      ref: { autor: "NICOLAU, U.", obra: "Antologia ilustrada de filosofia: das origens à Idade Moderna", resto: ". São Paulo: Globo, 2005 (adaptado)." }
    }],
    enunciado: "Referente à constituição da sociedade civil, considere, respectivamente, o correto posicionamento de Aristóteles e Hobbes:",
    alts: [
      { l: "A", t: "~Instrumento artificial~ para a realização da justiça e forma de legitimação do exercício da coerção e da violência.", nota: "Artificial é a visão de Hobbes, não a de Aristóteles." },
      { l: "B", t: "{Realização das disposições naturais do homem} e {artifício necessário para frear a natureza humana}.", ok: true },
      { l: "C", t: "Resultado ~involuntário~ da ação de cada indivíduo e anulação dos impulsos originários presentes na natureza humana.", nota: "Nenhum dos dois fala em resultado involuntário." },
      { l: "D", t: "Objetivação dos ~desejos da maioria~ e representação construída para possibilitar as relações interpessoais.", nota: "Maioria não aparece no texto." },
      { l: "E", t: "Realização da razão e expressão da ~vontade dos governados~.", nota: "Vontade dos governados é ideia de outros contratualistas." }
    ],
    ponte: "Instinto primordial (natural, Aristóteles) x disciplinada pelo Estado (artifício, Hobbes)."
  },
  {
    id: "a-2022ppl-metafisica",
    filosofos: ["aristoteles"],
    prova: "ENEM 2022 PPL",
    temas: ["Pré-socráticos"],
    textos: [{
      t: `A maior parte dos primeiros filósofos considerava como os únicos princípios de todas as coisas os que são da {natureza da matéria}. Aquilo de que todos os seres são constituídos, e de que primeiro {são gerados} e em que por fim {se dissolvem}. Pois deve haver uma natureza qualquer, ou mais do que uma, donde as outras coisas se engendram, mas {continuando ela a mesma}.`,
      ref: { autor: "ARISTÓTELES.", obra: "Metafísica", resto: ". São Paulo: Abril Cultural, 1973." }
    }],
    enunciado: "O texto aristotélico, ao recorrer à cosmogonia dos pré-socráticos, salienta a preocupação desses filósofos com a",
    alts: [
      { l: "A", t: "{mutação ontológica dos entes}.", ok: true },
      { l: "B", t: "alteração ~estética~ das condutas.", nota: "Conduta é ética, não natureza." },
      { l: "C", t: "transformação progressiva da ~ascese~.", nota: "Ascese é vocabulário religioso." },
      { l: "D", t: "~sistematização crítica do conhecimento~.", nota: "Isso é teoria do conhecimento, não cosmologia." },
      { l: "E", t: "modificação imediata da ~espiritualidade~.", nota: "Nada espiritual no trecho." }
    ],
    ponte: "Seres que são gerados e se dissolvem a partir de algo que permanece: mutação dos entes."
  },
  {
    id: "a-2017ppl-enigma",
    filosofos: ["aristoteles"],
    prova: "ENEM 2017 PPL",
    temas: ["Lógica"],
    textos: [{
      t: `A definição de Aristóteles para enigma é totalmente {desligada de qualquer fundo religioso}: {dizer coisas reais associando coisas impossíveis}. Visto que, para Aristóteles, associar coisas impossíveis significa formular uma {contradição}, sua definição quer dizer que o enigma é uma contradição que {designa algo real}, em vez de não indicar nada, como é de regra.`,
      ref: { autor: "COLLI, G.", obra: "O nascimento da filosofia", resto: ". Campinas: Unicamp, 1996 (adaptado)." }
    }],
    enunciado: "Segundo o texto, Aristóteles inovou a forma de pensar sobre o enigma, ao argumentar que",
    alts: [
      { l: "A", t: "a contradição que caracteriza o enigma é ~desprovida de relevância~ filosófica.", nota: "Ela é relevante: designa algo real." },
      { l: "B", t: "os enigmas ~religiosos~ são contraditórios porque indicam algo religiosamente real.", nota: "A definição é desligada da religião." },
      { l: "C", t: "o enigma é uma {contradição} que diz {algo de real e algo de impossível} ao mesmo tempo.", ok: true },
      { l: "D", t: "as coisas impossíveis são enigmáticas e devem ser explicadas em vista de sua ~origem religiosa~.", nota: "Mesma armadilha religiosa." },
      { l: "E", t: "a contradição enuncia coisas impossíveis e ~irreais~, porque ela é desligada de seu fundo religioso.", nota: "O enigma designa algo real." }
    ],
    ponte: "“Dizer coisas reais associando coisas impossíveis”: contradição que diz o real e o impossível."
  },
  {
    id: "a-2019ppl-tomas",
    filosofos: ["aristoteles"],
    prova: "ENEM 2019 PPL",
    temas: ["Recepção medieval", "Bem comum"],
    textos: [{
      t: `Tomás de Aquino, filósofo cristão que viveu no século XIII, afirma: a lei é uma regra ou um preceito relativo às nossas ações. Ora, a {norma suprema dos atos humanos é a razão}. Desse modo, em última análise, a lei está {submetida à razão}; é apenas uma formulação das exigências racionais. Porém, é mister que ela {emane da comunidade}, ou de uma pessoa que legitimamente a representa.`,
      ref: { autor: "GILSON, E.; BOEHNER, P.", obra: "História da filosofia cristã", resto: ". Petrópolis: Vozes, 1991 (adaptado)." }
    }],
    enunciado: "No contexto do século XIII, a visão política do filósofo mencionado retoma o",
    alts: [
      { l: "A", t: "pensamento ~idealista de Platão~.", nota: "Tomás retoma Aristóteles, não Platão." },
      { l: "B", t: "conformismo ~estoico~ de Sêneca.", nota: "Nada de estoicismo no trecho." },
      { l: "C", t: "ensinamento ~místico~ de Pitágoras.", nota: "Nada místico: a lei é razão." },
      { l: "D", t: "paradigma de vida feliz de ~Agostinho~.", nota: "Agostinho é a base platônica, não a política." },
      { l: "E", t: "conceito de {bem comum} de {Aristóteles}.", ok: true }
    ],
    ponte: "Lei racional que emana da comunidade: bem comum aristotélico. Repertório: Tomás é o aristotélico medieval."
  },
  {
    id: "a-2016ppl-marcondes",
    filosofos: ["aristoteles"],
    prova: "ENEM 2016 PPL",
    temas: ["Recepção medieval"],
    textos: [{
      t: `Enquanto o pensamento de Santo Agostinho representa o desenvolvimento de uma filosofia cristã inspirada em Platão, o pensamento de São Tomás {reabilita a filosofia de Aristóteles} — até então {vista sob suspeita pela Igreja} —, mostrando ser possível desenvolver uma leitura de Aristóteles compatível com a doutrina cristã. O aristotelismo de São Tomás abriu caminho para o estudo da obra aristotélica e para a {legitimação do interesse pelas ciências naturais}, um dos principais motivos do interesse por Aristóteles nesse período.`,
      ref: { autor: "MARCONDES, D.", obra: "Textos básicos de filosofia", resto: ". Rio de Janeiro: Zahar, 2005." }
    }],
    enunciado: "A Igreja Católica por muito tempo impediu a divulgação da obra de Aristóteles pelo fato de a obra aristotélica",
    alts: [
      { l: "A", t: "{valorizar a investigação científica}, contrariando certos dogmas religiosos.", ok: true },
      { l: "B", t: "declarar a ~inexistência de Deus~, colocando em dúvida toda a moral religiosa.", nota: "Aristóteles não nega Deus (o primeiro motor)." },
      { l: "C", t: "~criticar a Igreja Católica~, instigando a criação de outras instituições religiosas.", nota: "Aristóteles viveu séculos antes da Igreja." },
      { l: "D", t: "evocar pensamentos de ~religiões orientais~, minando a expansão do cristianismo.", nota: "Nada disso no texto." },
      { l: "E", t: "contribuir para o desenvolvimento de ~sentimentos antirreligiosos~, seguindo sua teoria política.", nota: "Exagero sem base no texto." }
    ],
    ponte: "“Interesse pelas ciências naturais”: valorização da investigação científica."
  },
  {
    id: "ap-2012ppl-zingano",
    filosofos: ["aristoteles", "platao"],
    prova: "ENEM 2012 PPL",
    temas: ["Conhecimento racional"],
    textos: [{
      t: `Pode-se viver sem ciência, pode-se adotar crenças sem querer justificá-las racionalmente, pode-se desprezar as evidências empíricas. No entanto, depois de Platão e Aristóteles, nenhum homem honesto pode ignorar que uma outra atitude intelectual foi experimentada, a de {adotar crenças com base em razões e evidências} e {questionar tudo o mais} a fim de descobrir seu sentido último.`,
      ref: { autor: "ZINGANO, M.", obra: "Platão e Aristóteles: o fascínio da filosofia", resto: ". São Paulo: Odysseus, 2002." }
    }],
    enunciado: "Platão e Aristóteles marcaram profundamente a formação do pensamento Ocidental. No texto, é ressaltado importante aspecto filosófico de ambos os autores que, em linhas gerais, refere-se à",
    alts: [
      { l: "A", t: "adoção da experiência do ~senso comum~ como critério de verdade.", nota: "O texto pede razões, não senso comum." },
      { l: "B", t: "~incapacidade~ de a razão confirmar o conhecimento resultante de evidências empíricas.", nota: "O texto afirma o contrário." },
      { l: "C", t: "pretensão de a ~experiência legitimar por si mesma~ a verdade.", nota: "Evidência sozinha não basta: precisa de razões." },
      { l: "D", t: "defesa de que a ~honestidade~ condiciona a possibilidade de se pensar a verdade.", nota: "“Homem honesto” é só figura de linguagem: isca." },
      { l: "E", t: "compreensão de que a verdade deve ser {justificada racionalmente}.", ok: true }
    ],
    ponte: "“Crenças com base em razões”: verdade justificada racionalmente."
  },

  /* ===================== PLATÃO ===================== */
  {
    id: "p-2025-chaui",
    filosofos: ["platao"],
    prova: "ENEM 2025",
    temas: ["Ética e poder", "Rei-filósofo"],
    textos: [{
      t: `A cidade justa é {governada pelos filósofos}, administrada pelos cientistas, protegida pelos guerreiros e mantida pelos produtores. Cada classe cumprirá sua função {para o bem da pólis}, {racionalmente dirigida pelos filósofos}. Em contrapartida, a cidade injusta é aquela onde o governo está nas mãos dos proprietários — que {não pensam no bem comum} da pólis e lutarão por {interesses econômicos particulares}.`,
      ref: { autor: "CHAUI, M.", obra: "Convite à filosofia", resto: ". São Paulo: Ática, 2000." }
    }],
    enunciado: "O texto apresenta a estrutura de governo da cidade ideal pensada por Platão, que postula uma indissociabilidade entre",
    alts: [
      { l: "A", t: "cognoscência e relação ~intersubjetiva~.", nota: "Intersubjetividade é tema moderno." },
      { l: "B", t: "~mitologia~ e teorias cosmogônicas.", nota: "O texto é sobre governo racional, não mito." },
      { l: "C", t: "cidadania e primazia da ~retórica~.", nota: "Retórica é dos sofistas, criticados por Platão." },
      { l: "D", t: "moralidade e ~virtudes cardeais~.", nota: "As virtudes não aparecem no texto. O site Filosofia na Escola marca esta, mas o gabarito oficial é E." },
      { l: "E", t: "{ética} e {exercício do poder}.", ok: true }
    ],
    ponte: "Quem governa (poder) precisa visar o bem comum (ética); separar os dois gera a cidade injusta."
  },
  {
    id: "p-2022ppl-virtude",
    filosofos: ["platao"],
    prova: "ENEM 2022 PPL",
    temas: ["Rei-filósofo", "Virtude"],
    textos: [{
      t: `Os verdadeiros filósofos, tornados {senhores da cidade}, sejam eles muitos ou um só, {desprezam as honras} como as de hoje, por julgá-las indignas de um homem livre e sem valor algum, mas, ao contrário, têm em alta conta a {retidão} e as honras que dela decorrem e, julgando a {justiça} como algo muito importante e necessário, {pondo-se a serviço dela} e fazendo-a crescer, administram sua cidade.`,
      ref: { autor: "PLATÃO.", obra: "A República", resto: ". São Paulo: Martins Fontes, 2006 (adaptado)." }
    }],
    enunciado: "No contexto da filosofia platônica, o texto expressa uma perspectiva aristocrática acerca do exercício do poder, uma vez que este é legitimado pelo(a)",
    alts: [
      { l: "A", t: "{prática da virtude}.", ok: true },
      { l: "B", t: "consenso da ~elite~.", nota: "Aristocracia, em Platão, é o governo dos melhores em virtude." },
      { l: "C", t: "decisão da ~maioria~.", nota: "Platão desconfia da maioria." },
      { l: "D", t: "~riqueza~ do indivíduo.", nota: "Os filósofos desprezam as honras de hoje." },
      { l: "E", t: "pertencimento de ~sangue~.", nota: "Nada de linhagem no texto." }
    ],
    ponte: "Retidão e serviço à justiça: prática da virtude."
  },
  {
    id: "p-2021ppl-rei-filosofo",
    filosofos: ["platao"],
    prova: "ENEM 2021 PPL",
    temas: ["Rei-filósofo", "Justiça"],
    textos: [{
      t: `Se os {filósofos não forem reis} nas cidades ou se os que hoje são chamados reis e soberanos não forem filósofos genuínos e capazes e se, numa mesma pessoa, não {coincidirem poder político e filosofia} e não for barrada agora, sob coerção, a caminhada das diversas naturezas que, em separado buscam uma dessas duas metas, não é possível, caro Glaucon, que haja para as cidades uma {trégua de males} e, penso, nem para o gênero humano.`,
      ref: { autor: "PLATÃO.", obra: "A República", resto: ". São Paulo: Martins Fontes, 2014." }
    }],
    enunciado: "A tese apresentada pressupõe a necessidade do conhecimento verdadeiro para a",
    alts: [
      { l: "A", t: "superação de entraves ~dialógicos~.", nota: "O tema é governo, não diálogo." },
      { l: "B", t: "{organização de uma sociedade justa}.", ok: true },
      { l: "C", t: "formação de um saber ~enciclopédico~.", nota: "Não se trata de acumular saber." },
      { l: "D", t: "promoção da ~igualdade~ dos cidadãos.", nota: "A cidade platônica é hierárquica." },
      { l: "E", t: "consolidação de uma ~democracia direta~.", nota: "Platão critica a democracia." }
    ],
    ponte: "“Trégua de males” para as cidades: sociedade justa."
  },
  {
    id: "p-2015ppl-caverna",
    filosofos: ["platao"],
    prova: "ENEM 2015 PPL",
    temas: ["Mundo das Ideias"],
    textos: [{
      t: `Suponha homens numa {morada subterrânea}, em forma de caverna, cuja entrada, aberta à luz, se estende sobre todo o comprimento da fachada; eles estão lá desde a infância, as pernas e o pescoço {presos por correntes}, de tal sorte que não podem trocar de lugar e {só podem olhar para frente}, pois os grilhões os impedem de voltar a cabeça; a {luz de uma fogueira} acesa ao longe, numa elevada do terreno, brilha por detrás deles; entre a fogueira e os prisioneiros, há um caminho ascendente; ao longo do caminho, imagine um pequeno muro, semelhante aos tapumes que os {manipuladores de marionetes} armam entre eles e o público e sobre os quais exibem seus prestígios.`,
      ref: { autor: "PLATÃO.", obra: "A República", resto: ". Lisboa: Fundação Calouste Gulbenkian, 2007." }
    }],
    enunciado: "Essa narrativa de Platão é uma importante manifestação cultural do pensamento grego antigo, cuja ideia central, do ponto de vista filosófico, evidencia o(a)",
    alts: [
      { l: "A", t: "caráter ~antropológico~, descrevendo as origens do homem primitivo.", nota: "A caverna é alegoria, não história." },
      { l: "B", t: "~sistema penal~ da época, criticando o sistema carcerário da sociedade ateniense.", nota: "Leitura literal das correntes: armadilha." },
      { l: "C", t: "vida cultural e artística, expressa por ~dramaturgos~ trágicos e cômicos gregos.", nota: "As marionetes são imagem, não teatro." },
      { l: "D", t: "sistema político ~elitista~, provindo do surgimento da pólis e da democracia ateniense.", nota: "A ideia central aqui é conhecer, não governar." },
      { l: "E", t: "{teoria do conhecimento}, expondo a passagem do {mundo ilusório} para o {mundo das ideias}.", ok: true }
    ],
    ponte: "Sombras de marionetes são aparência; sair da caverna é conhecer as Ideias."
  },
  {
    id: "p-2016ppl-fedon",
    filosofos: ["platao"],
    prova: "ENEM 2016 PPL",
    temas: ["Mundo das Ideias"],
    textos: [{
      t: `Estamos, pois, de acordo quando, ao ver algum objeto, dizemos: “Este objeto que estou vendo agora tem tendência para {assemelhar-se a um outro ser}, mas, por ter defeitos, não consegue ser tal como o ser em questão, e lhe é, pelo contrário, {inferior}”. Assim, para podermos fazer estas reflexões, é necessário que {antes tenhamos tido ocasião de conhecer esse ser} de que se aproxima o dito objeto, ainda que imperfeitamente.`,
      ref: { autor: "PLATÃO.", obra: "Fédon", resto: ". São Paulo: Abril Cultural, 1972." }
    }],
    enunciado: "Na epistemologia platônica, conhecer um determinado objeto implica",
    alts: [
      { l: "A", t: "estabelecer semelhanças entre o que é observado em ~momentos distintos~.", nota: "A comparação é com o ser, não com outro momento." },
      { l: "B", t: "comparar o objeto observado com uma ~descrição detalhada~ dele.", nota: "Não é descrição: é a Ideia." },
      { l: "C", t: "~descrever corretamente~ as características do objeto observado.", nota: "Descrever não é conhecer o ser." },
      { l: "D", t: "fazer {correspondência entre o objeto observado e seu ser}.", ok: true },
      { l: "E", t: "identificar outro ~exemplar idêntico~ ao observado.", nota: "O sensível é sempre inferior, nunca idêntico." }
    ],
    ponte: "O objeto se “assemelha a um outro ser” que já conhecíamos: correspondência entre objeto e ser (reminiscência)."
  },
  {
    id: "p-2012-zingano",
    filosofos: ["platao"],
    prova: "ENEM 2012",
    temas: ["Mundo das Ideias", "Razão x sentidos"],
    textos: [{
      t: `Para Platão, o que havia de verdadeiro em Parmênides era que o objeto de conhecimento é um {objeto de razão e não de sensação}, e era preciso estabelecer uma {relação} entre objeto racional e objeto sensível ou material que {privilegiasse o primeiro em detrimento do segundo}. Lenta, mas irresistivelmente, a {Doutrina das Ideias} formava-se em sua mente.`,
      ref: { autor: "ZINGANO, M.", obra: "Platão e Aristóteles: o fascínio da filosofia", resto: ". São Paulo: Odysseus, 2012 (adaptado)." }
    }],
    enunciado: "O texto faz referência à relação entre razão e sensação, um aspecto essencial da Doutrina das Ideias de Platão (427 a.C.-346 a.C.). De acordo com o texto, como Platão se situa diante dessa relação?",
    alts: [
      { l: "A", t: "Estabelecendo um ~abismo intransponível~ entre as duas.", nota: "O texto pede uma relação, não um abismo." },
      { l: "B", t: "~Privilegiando os sentidos~ e subordinando o conhecimento a eles.", nota: "É o inverso." },
      { l: "C", t: "Atendo-se à posição de Parmênides de que razão e sensação são ~inseparáveis~.", nota: "Parmênides separa razão e sensação." },
      { l: "D", t: "Afirmando que a {razão é capaz de gerar conhecimento}, mas a {sensação não}.", ok: true },
      { l: "E", t: "Rejeitando a posição de Parmênides de que a ~sensação é superior~ à razão.", nota: "Parmênides nunca disse isso." }
    ],
    ponte: "“Objeto de razão e não de sensação”: a razão conhece, a sensação não."
  },
  {
    id: "p-2014-escola-atenas",
    filosofos: ["platao"],
    prova: "ENEM 2014",
    temas: ["Dialética", "Mundo das Ideias"],
    textos: [{
      imagem: true,
      t: `A questão traz uma imagem (não veio na cópia): o afresco Escola de Atenas, de Rafael, em que {Platão aponta para o alto}.`,
      ref: { autor: "RAFAEL.", obra: "Escola de Atenas", resto: " (afresco, 1509-1511)." }
    }],
    enunciado: "No centro da imagem, o filósofo Platão é retratado apontando para o alto. Esse gesto significa que o conhecimento se encontra em uma instância na qual o homem descobre a",
    alts: [
      { l: "A", t: "~suspensão do juízo~ como reveladora da verdade.", nota: "Suspensão do juízo é dos céticos." },
      { l: "B", t: "{realidade inteligível} por meio do {método dialético}.", ok: true },
      { l: "C", t: "salvação da condição mortal pelo ~poder de Deus~.", nota: "Leitura cristã, não platônica." },
      { l: "D", t: "essência das coisas sensíveis no ~intelecto divino~.", nota: "Isso é Agostinho ou Tomás." },
      { l: "E", t: "ordem intrínseca ao mundo por meio da ~sensibilidade~.", nota: "Para o alto é além do sensível." }
    ],
    ponte: "Apontar para o alto: o mundo inteligível, alcançado pela dialética."
  },
  {
    id: "p-2016-banquete",
    filosofos: ["platao"],
    prova: "ENEM 2016 (2ª aplicação)",
    temas: ["Amor"],
    textos: [{
      t: `Os {andróginos} tentaram escalar o céu para combater os deuses. No entanto, os deuses em um primeiro momento pensam em matá-los de forma sumária. Depois decidem puni-los da forma mais cruel: {dividem-nos em dois}. Por exemplo, é como se pegássemos um ovo cozido e, com uma linha, dividíssemos ao meio. Desta forma, até hoje {as metades separadas buscam reunir-se}. Cada um com {saudade de sua metade}, tenta juntar-se novamente a ela, abraçando-se, enlaçando-se um ao outro, {desejando formar um único ser}.`,
      ref: { autor: "PLATÃO.", obra: "O banquete", resto: ". São Paulo: Nova Cultural, 1987." }
    }],
    enunciado: "No trecho da obra O banquete, Platão explicita, por meio de uma alegoria, o",
    alts: [
      { l: "A", t: "~bem supremo~ como fim do homem.", nota: "Bem supremo é vocabulário aristotélico." },
      { l: "B", t: "~prazer perene~ como fundamento da felicidade.", nota: "O texto fala de falta, não de prazer." },
      { l: "C", t: "ideal inteligível como ~transcendência~ desejada.", nota: "Platônico, mas não está neste trecho." },
      { l: "D", t: "{amor como falta} constituinte do ser humano.", ok: true },
      { l: "E", t: "~autoconhecimento~ como caminho da verdade.", nota: "Tema socrático, ausente do trecho." }
    ],
    ponte: "Metades que buscam reunir-se, com saudade: amor como falta."
  },
  {
    id: "p-2021ppl-menon",
    filosofos: ["platao"],
    prova: "ENEM 2021 PPL",
    temas: ["Dialética"],
    textos: [{
      t: `Sócrates: “{Quem não sabe o que uma coisa é}, como poderia saber de que tipo de coisa ela é? Ou te parece ser possível alguém que não conhece absolutamente quem é Mênon, esse alguém saber se ele é belo, se é rico e ainda se é nobre? Parece-te ser isso possível? Assim, Mênon, {que coisa afirmas ser a virtude}?”.`,
      ref: { autor: "PLATÃO.", obra: "Mênon", resto: ". Rio de Janeiro: PUC-Rio; São Paulo: Loyola, 2001 (adaptado)." }
    }],
    enunciado: "A atitude apresentada na interlocução do filósofo com Mênon é um exemplo da utilização do(a)",
    alts: [
      { l: "A", t: "escrita ~epistolar~.", nota: "É diálogo, não carta." },
      { l: "B", t: "{método dialético}.", ok: true },
      { l: "C", t: "linguagem ~trágica~.", nota: "Nada de tragédia no trecho." },
      { l: "D", t: "explicação ~fisicalista~.", nota: "O tema é virtude, não natureza." },
      { l: "E", t: "~suspensão judicativa~.", nota: "Suspender o juízo é ceticismo; Sócrates pergunta para definir." }
    ],
    ponte: "Perguntas que buscam a definição (“que coisa é”): método dialético."
  },
  {
    id: "p-2013ppl-maquiavel",
    filosofos: ["platao"],
    prova: "ENEM 2013 PPL",
    temas: ["Idealização", "Mundo das Ideias"],
    textos: [{
      t: `Mas, sendo minha intenção escrever algo de útil para quem por tal se interesse, pareceu-me mais conveniente ir em busca da {verdade extraída dos fatos} e não à {imaginação dos mesmos}, pois muitos conceberam {repúblicas e principados jamais vistos} ou conhecidos como tendo realmente existido.`,
      ref: { autor: "MAQUIAVEL, N.", obra: "O príncipe", resto: ". Disponível em: www.culturabrasil.pro.br. Acesso em: 4 abr. 2013." }
    }],
    enunciado: "A partir do texto, é possível perceber a crítica maquiaveliana à filosofia política de Platão, pois há nesta a",
    alts: [
      { l: "A", t: "elaboração de um ordenamento político com fundamento na ~bondade infinita de Deus~.", nota: "Platão não é teólogo cristão." },
      { l: "B", t: "explicitação dos acontecimentos políticos do período clássico de forma ~imparcial~.", nota: "Isso descreveria o próprio Maquiavel." },
      { l: "C", t: "utilização da ~oratória~ política como meio de convencer os oponentes na ágora.", nota: "Oratória é dos sofistas." },
      { l: "D", t: "investigação das constituições políticas de Atenas pelo ~método indutivo~.", nota: "Indução lembra Aristóteles, não Platão." },
      { l: "E", t: "{idealização} de um {mundo político perfeito} existente no {mundo das ideias}.", ok: true }
    ],
    ponte: "“Repúblicas jamais vistas” é A República ideal de Platão."
  },
  {
    id: "p-2025-hume",
    filosofos: ["platao"],
    prova: "ENEM 2025",
    temas: ["Sofistas"],
    textos: [{
      t: `A {credulidade dos ouvintes} aumenta o descaramento do narrador, e o descaramento deste conquista-lhes a credulidade. A {eloquência}, quando levada a seu patamar mais alto, deixa {pouco lugar à razão ou à reflexão}, mas, dirigindo-se inteiramente {à imaginação e aos afetos}, {cativa os ouvintes} condescendentes e {subjuga-lhes o entendimento}.`,
      ref: { autor: "HUME, D.", obra: "Uma investigação sobre o entendimento humano e sobre os princípios da moral", resto: ". São Paulo: Edunesp, 2003." }
    }],
    enunciado: "No contexto do século XVIII, o autor propõe uma reflexão radical acerca da arte da eloquência, restringindo-a ao",
    alts: [
      { l: "A", t: "sistema de crenças, conforme a proposta ~kantiana~ de objetividade do conhecimento.", nota: "Kant é posterior e não trata de eloquência." },
      { l: "B", t: "campo dos ~absolutos~, semelhante ao entendimento medieval dos Universais.", nota: "Hume é empirista e rejeita absolutos." },
      { l: "C", t: "domínio da ~lógica~, consoante a compreensão aristotélica nos Analíticos.", nota: "A eloquência foge da razão, não é lógica." },
      { l: "D", t: "paradigma da ~racionalidade~, alinhado ao modelo cartesiano de método.", nota: "Contradiz “pouco lugar à razão”." },
      { l: "E", t: "âmbito da {persuasão}, análogo às {críticas platônicas aos sofistas}.", ok: true }
    ],
    ponte: "Cativar afetos em vez da razão é persuasão; Platão criticou isso nos sofistas."
  }
];
