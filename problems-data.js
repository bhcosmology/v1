/* Problemes oberts i limitacions fonamentals del marc.
   Resumits del capítol 5 de l'annex primer i de l'annex segon.
   Cada entrada enllaça amb la secció on es desenvolupa. */
window.BHC_PROBLEMS = {

  fundamental: [
    {
      id: 'conservacio-energia',
      anchor: '5-3-conservacio-d-energia-a-traves-de-la-ruptura-de-la-varie',
      kind: { ca:'quantitativa', es:'cuantitativa', en:'quantitative' },
      title: {
        ca:'La conservació de l\'energia a través de la ruptura',
        es:'La conservación de la energía a través de la ruptura',
        en:'Energy conservation across the rupture',
      },
      body: {
        ca:'La conservació és sempre una afirmació dins d\'un sistema amb un marc temporal que permeti comparar dos instants. A través de la ruptura no hi ha marc comú, de manera que la pregunta «l\'energia que el pare perd és igual a la que el fill guanya?» no es pot ni formular rigorosament. No és que la resposta sigui negativa: és que la pregunta no està ben plantejada amb les eines actuals. Sense això, la relació entre Λ i la massa del pare perd fonamentació i la xarxa deixa de ser energèticament tancada en cap sentit precís.',
        es:'La conservación es siempre una afirmación dentro de un sistema con un marco temporal que permita comparar dos instantes. A través de la ruptura no hay marco común, de manera que la pregunta «¿la energía que el padre pierde es igual a la que el hijo gana?» no se puede ni formular rigurosamente. No es que la respuesta sea negativa: es que la pregunta no está bien planteada con las herramientas actuales. Sin esto, la relación entre Λ y la masa del padre pierde fundamentación y la red deja de ser energéticamente cerrada en ningún sentido preciso.',
        en:'Conservation is always a claim within a system possessing a temporal frame that allows two instants to be compared. Across the rupture there is no common frame, so the question “is the energy the parent loses equal to the energy the child gains?” cannot even be posed rigorously. It is not that the answer is negative: it is that the question is not well formed with current tools. Without this, the relation between Λ and the parent\'s mass loses its foundation and the network ceases to be energetically closed in any precise sense.',
      },
    },
    {
      id: 'dependencia-ontologica',
      anchor: '5-7-la-ruptura-de-la-varietat-i-la-dependencia-ontologica',
      kind: { ca:'conceptual', es:'conceptual', en:'conceptual' },
      title: {
        ca:'La lectura ontològica de la separació causal',
        es:'La lectura ontológica de la separación causal',
        en:'The ontological reading of causal separation',
      },
      body: {
        ca:'Que dos sistemes separats per r_dS no puguin intercanviar cap senyal és un fet establert. Que aquesta impossibilitat constitueixi una diferència en què és real per a cadascun, i no una simple barrera pràctica, és una elecció interpretativa que la física no obliga a fer. Però la desrealització, les illes temporals, el de Sitter terminal i la dualitat de singularitats en depenen: si la lectura alternativa fos la correcta, bona part de l\'edifici perdria el fonament.',
        es:'Que dos sistemas separados por r_dS no puedan intercambiar ninguna señal es un hecho establecido. Que esta imposibilidad constituya una diferencia en qué es real para cada uno, y no una simple barrera práctica, es una elección interpretativa que la física no obliga a hacer. Pero la desrealización, las islas temporales, el de Sitter terminal y la dualidad de singularidades dependen de ella: si la lectura alternativa fuera la correcta, buena parte del edificio perdería el fundamento.',
        en:'That two systems separated by r_dS can exchange no signal is an established fact. That this impossibility constitutes a difference in what is real for each of them, rather than a mere practical barrier, is an interpretive choice physics does not compel. But derealization, temporal islands, terminal de Sitter, and the duality of singularities all depend on it: if the alternative reading were correct, much of the edifice would lose its foundation.',
      },
    },
  ],

  open: [
    {
      n:1, anchor:'4-3-illes-temporals-i-desrealitzacio',
      title:{ ca:'La formalització de la jerarquia de singularitats', es:'La formalización de la jerarquía de singularidades', en:'Formalizing the hierarchy of singularities' },
      body:{
        ca:'La jerarquia de tres nivells (representacionals a r_c, de curvatura dins dels forats negres, causals a escala de de Sitter) és un instrument conceptual, no un teorema. La relació formal entre els tres nivells requereix un marc matemàtic que els tracti simultàniament, i aquest marc no existeix.',
        es:'La jerarquía de tres niveles (representacionales en r_c, de curvatura dentro de los agujeros negros, causales a escala de de Sitter) es un instrumento conceptual, no un teorema. La relación formal entre los tres niveles requiere un marco matemático que los trate simultáneamente, y ese marco no existe.',
        en:'The three-level hierarchy (representational at r_c, curvature singularities inside black holes, causal at the de Sitter scale) is a conceptual instrument, not a theorem. The formal relation between the three levels requires a mathematical framework treating them simultaneously, and that framework does not exist.',
      },
    },
    {
      n:2, anchor:'4-8-comptabilitat-entropica-entre-universos',
      title:{ ca:'El problema de la informació de Hawking', es:'El problema de la información de Hawking', en:'The Hawking information problem' },
      body:{
        ca:'El marc és compatible amb les tres resolucions possibles — preservació unitària, termalització, o reset per ruptura — i adopta la primera com a hipòtesi de treball, per ser l\'única compatible amb la conservació d\'informació que ja assumeix. Adoptar-la no és demostrar-la: amb les eines actuals no pot descartar formalment les altres dues.',
        es:'El marco es compatible con las tres resoluciones posibles — preservación unitaria, termalización, o reset por ruptura — y adopta la primera como hipótesis de trabajo, por ser la única compatible con la conservación de información que ya asume. Adoptarla no es demostrarla: con las herramientas actuales no puede descartar formalmente las otras dos.',
        en:'The framework is compatible with all three possible resolutions — unitary preservation, thermalization, or reset through rupture — and adopts the first as a working hypothesis, as the only one compatible with the conservation of information it already assumes. Adopting it is not demonstrating it: with current tools it cannot formally rule out the other two.',
      },
    },
    {
      n:3, anchor:'4-8-comptabilitat-entropica-entre-universos',
      title:{ ca:'La fletxa del temps entre generacions', es:'La flecha del tiempo entre generaciones', en:'The arrow of time between generations' },
      body:{
        ca:'Com pot un forat negre d\'entropia altíssima produir un fill de baixa entropia? La resposta parcial és que l\'entropia és relacional al marc, amb un correlat geomètric: un tensor de Weyl nul a l\'inici del fill. Però això és una propietat de la descripció des del fill, no una afirmació absoluta, i la seva formalització resta pendent.',
        es:'¿Cómo puede un agujero negro de entropía altísima producir un hijo de baja entropía? La respuesta parcial es que la entropía es relacional al marco, con un correlato geométrico: un tensor de Weyl nulo al inicio del hijo. Pero eso es una propiedad de la descripción desde el hijo, no una afirmación absoluta, y su formalización queda pendiente.',
        en:'How can a black hole of enormous entropy produce a low-entropy child? The partial answer is that entropy is relational to the frame, with a geometric correlate: a vanishing Weyl tensor at the child\'s beginning. But that is a property of the description from the child, not an absolute claim, and its formalization remains outstanding.',
      },
    },
    {
      n:4, anchor:'5-1-la-paradoxa-dels-tres-cossos-en-l-espai-de-sitter',
      title:{ ca:'Les distribucions de massa esteses a fronteres causals', es:'Las distribuciones de masa extensas en fronteras causales', en:'Extended mass distributions at causal boundaries' },
      body:{
        ca:'El marc tracta els sistemes gravitacionals com a masses puntuals per derivar r_c i r_dS, però aquesta idealització falla precisament als límits marginals on es decideix la vinculació. La paradoxa dels tres cossos n\'és el cas concret.',
        es:'El marco trata los sistemas gravitacionales como masas puntuales para derivar r_c y r_dS, pero esa idealización falla precisamente en los límites marginales donde se decide la vinculación. La paradoja de los tres cuerpos es el caso concreto.',
        en:'The framework treats gravitational systems as point masses in order to derive r_c and r_dS, but that idealization fails precisely at the marginal limits where binding is decided. The three-body paradox is the concrete case.',
      },
    },
    {
      n:5, anchor:'4-10-el-model-de-parentesi-temporal',
      title:{ ca:'El llindar dels parèntesis niats', es:'El umbral de los paréntesis anidados', en:'The threshold for nested parentheses' },
      body:{
        ca:'La matèria acretada després del col·lapse forma parèntesis temporals independents, però el model no especifica el llindar mínim de massa: si tot constituent que creua l\'horitzó obre el seu propi domini, o si cal una massa mínima. Sense això, el model és qualitatiu però no quantitatiu.',
        es:'La materia acretada después del colapso forma paréntesis temporales independientes, pero el modelo no especifica el umbral mínimo de masa: si todo constituyente que cruza el horizonte abre su propio dominio, o si hace falta una masa mínima. Sin eso, el modelo es cualitativo pero no cuantitativo.',
        en:'Matter accreted after the collapse forms independent temporal parentheses, but the model does not specify the minimum mass threshold: whether every constituent crossing the horizon opens its own domain, or whether a minimum mass is required. Without this, the model is qualitative but not quantitative.',
      },
    },
    {
      n:6, anchor:'5-5-preservacio-de-l-entrellacament-a-traves-de-la-ruptura-d',
      title:{ ca:'L\'entrellaçament a través de la ruptura', es:'El entrelazamiento a través de la ruptura', en:'Entanglement across the rupture' },
      body:{
        ca:'Si l\'interior és una varietat causalment independent, on viu l\'estructura d\'entrellaçament de la parella de Hawking? El marc proposa estendre-hi la complementarietat de Susskind, però la proposta genera una tensió directa amb la impossibilitat de sincronitzar els dos eixos temporals, i cap de les tres vies de resolució és plenament satisfactòria.',
        es:'Si el interior es una variedad causalmente independiente, ¿dónde vive la estructura de entrelazamiento de la pareja de Hawking? El marco propone extenderle la complementariedad de Susskind, pero la propuesta genera una tensión directa con la imposibilidad de sincronizar los dos ejes temporales, y ninguna de las tres vías de resolución es plenamente satisfactoria.',
        en:'If the interior is a causally independent manifold, where does the entanglement structure of the Hawking pair live? The framework proposes extending Susskind\'s complementarity to it, but the proposal generates a direct tension with the impossibility of synchronizing the two temporal axes, and none of the three routes to resolving it is fully satisfactory.',
      },
    },
    {
      n:7, anchor:'4-11-signatures-observacionals',
      title:{ ca:'La planor no s\'explica', es:'La planitud no se explica', en:'Flatness is not explained' },
      body:{
        ca:'La ruptura preserva el contingut però no la geometria, i la planor (Ω ≈ 1) és precisament una sintonització entre densitat i taxa d\'expansió. No pot ser heretada. És el preu estructural de la ruptura: podria integrar-se via inflació dins del fill, però no se segueix del marc mateix.',
        es:'La ruptura preserva el contenido pero no la geometría, y la planitud (Ω ≈ 1) es precisamente una sintonización entre densidad y tasa de expansión. No puede ser heredada. Es el precio estructural de la ruptura: podría integrarse vía inflación dentro del hijo, pero no se sigue del marco mismo.',
        en:'The rupture preserves content but not geometry, and flatness (Ω ≈ 1) is precisely a tuning between density and expansion rate. It cannot be inherited. This is the structural price of the rupture: it could be accommodated via inflation within the child, but it does not follow from the framework itself.',
      },
    },
    {
      n:8, anchor:'5-6-problemes-oberts-i-fisica-necessaria',
      title:{ ca:'L\'origen del valor concret de Λ', es:'El origen del valor concreto de Λ', en:'The origin of the specific value of Λ' },
      body:{
        ca:'Si les propietats del fill vénen determinades per les del pare, el valor de Λ que observem és una condició heretada que el marc no pretén explicar. Però això deixa sense resposta per què el valor heretat resulta ser un dels pocs compatibles amb la formació d\'estructura — el problema de l\'ajust fi, que afecta igualment la cosmologia estàndard.',
        es:'Si las propiedades del hijo vienen determinadas por las del padre, el valor de Λ que observamos es una condición heredada que el marco no pretende explicar. Pero eso deja sin respuesta por qué el valor heredado resulta ser uno de los pocos compatibles con la formación de estructura — el problema del ajuste fino, que afecta igualmente a la cosmología estándar.',
        en:'If the child\'s properties are determined by the parent\'s, the value of Λ we observe is an inherited condition the framework does not claim to explain. But that leaves unanswered why the inherited value turns out to be one of the few compatible with structure formation — the fine-tuning problem, which affects standard cosmology equally.',
      },
    },
  ],
};
