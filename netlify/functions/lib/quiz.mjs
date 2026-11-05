const assets={};
const QUESTIONS=[
  {
    "id": 1,
    "type": "QCS",
    "text": "À expiration, le diaphragme se contracte et l’abdomen se gonfle :",
    "options": [
      {
        "key": "A",
        "text": "Vrai"
      },
      {
        "key": "B",
        "text": "Faux"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Faux"
  },
  {
    "id": 2,
    "type": "QCS",
    "text": "L’inspiration est un mouvement actif",
    "options": [
      {
        "key": "A",
        "text": "Vrai"
      },
      {
        "key": "B",
        "text": "Faux"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Vrai"
  },
  {
    "id": 3,
    "type": "QCS",
    "text": "Quel signe est typique d’une inhalation de corps étranger chez l’enfant ?",
    "options": [
      {
        "key": "A",
        "text": "Une toux quinteuse de début brutal avec difficulté inspiratoire"
      },
      {
        "key": "B",
        "text": "Une fièvre progressive depuis plusieurs jours"
      },
      {
        "key": "C",
        "text": "Une toux uniquement nocturne"
      },
      {
        "key": "D",
        "text": "Une rhinorrhée chronique"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une toux quinteuse de début brutal avec difficulté inspiratoire"
  },
  {
    "id": 4,
    "type": "QCS",
    "text": "Vous avez un nourrisson de 5 mois hospitalisé pour une bronchiolite en salle, quels critères parmi les suivants sont des éléments de gravité ou de vulnérabilité ?",
    "options": [
      {
        "key": "A",
        "text": "âge de moins de 6 mois"
      },
      {
        "key": "B",
        "text": "température à 40°5"
      },
      {
        "key": "C",
        "text": "fréquence respiratoire à 55 par minute"
      },
      {
        "key": "D",
        "text": "saturation en oxygène à 94%"
      },
      {
        "key": "E",
        "text": "aucune des propositions précédentes n'est juste R"
      }
    ],
    "correct": [
      "E"
    ],
    "feedback": "Selon le corrigé fourni : E. aucune des propositions précédentes n'est juste R"
  },
  {
    "id": 5,
    "type": "QCS",
    "text": "Concernant la sécrétion de l'insuline, quelle affirmation est correcte?",
    "options": [
      {
        "key": "A",
        "text": "Le foie sécrète l'insuline"
      },
      {
        "key": "B",
        "text": "Le pancréas sécrète l'insuline"
      },
      {
        "key": "C",
        "text": "La vésicule biliaire sécrète l'insuline"
      },
      {
        "key": "D",
        "text": "Le duodénum sécrète l'insuline"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Le pancréas sécrète l'insuline"
  },
  {
    "id": 6,
    "type": "QCS",
    "text": "Quel est le rôle du cholédoque ?",
    "options": [
      {
        "key": "A",
        "text": "Il relie le pancréas à l'estomac"
      },
      {
        "key": "B",
        "text": "Il relie le foie au côlon"
      },
      {
        "key": "C",
        "text": "Il permet l'évacuation de la bile vers le duodénum"
      },
      {
        "key": "D",
        "text": "Il relie la vessie au rein"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Il permet l'évacuation de la bile vers le duodénum"
  },
  {
    "id": 7,
    "type": "QCS",
    "text": "Quelle complication peut être provoquée par un calcul du cholédoque bloqué au niveau de l'ampoule de Vater ?",
    "options": [
      {
        "key": "A",
        "text": "Une appendicite"
      },
      {
        "key": "B",
        "text": "Une pancréatite aiguë"
      },
      {
        "key": "C",
        "text": "Une gastrite"
      },
      {
        "key": "D",
        "text": "Une hernie hiatale"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Une pancréatite aiguë"
  },
  {
    "id": 8,
    "type": "QCS",
    "text": "Concernant le rôle du pancréas, quelle affirmation est vraie ?",
    "options": [
      {
        "key": "A",
        "text": "Il participe à la synthèse des protéines et des glucides complexes"
      },
      {
        "key": "B",
        "text": "Il stocke la bile"
      },
      {
        "key": "C",
        "text": "Il sécrète des enzymes permettant la digestion des protéines, lipides et glucides"
      },
      {
        "key": "D",
        "text": "Il produit les globules rouges"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Il sécrète des enzymes permettant la digestion des protéines, lipides et glucides"
  },
  {
    "id": 9,
    "type": "QCS",
    "text": "Quelle est la bonne définition de la bronchite chronique ?",
    "options": [
      {
        "key": "A",
        "text": "Toux et expectoration chroniques ≥ 10 ans"
      },
      {
        "key": "B",
        "text": "Toux et dyspnée pendant au moins 2 ans"
      },
      {
        "key": "C",
        "text": "Toux et expectoration ≥ 3 mois/an ≥ 2 ans"
      },
      {
        "key": "D",
        "text": "Toux et expectoration ≥ 2 mois/an ≥ 3 a"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Toux et expectoration ≥ 3 mois/an ≥ 2 ans"
  },
  {
    "id": 10,
    "type": "QCS",
    "text": "Laquelle de ces affirmations est Vrai  ?",
    "options": [
      {
        "key": "A",
        "text": "Emphysème et BPCO sont des synonymes"
      },
      {
        "key": "B",
        "text": "L’emphysème est la phase ultime de la BPCO"
      },
      {
        "key": "C",
        "text": "L’emphysème fait toujours suite à la bronchite chronique"
      },
      {
        "key": "D",
        "text": "L’emphysème est une lésion anatomique souvent observée dans la BPCO"
      }
    ],
    "correct": [
      "D"
    ],
    "feedback": "Selon le corrigé fourni : D. L’emphysème est une lésion anatomique souvent observée dans la BPCO"
  },
  {
    "id": 11,
    "type": "QCS",
    "text": "Quelle artère participe à l’irrigation sanguine du cerveau ?",
    "options": [
      {
        "key": "A",
        "text": "L’artère coronaire"
      },
      {
        "key": "B",
        "text": "La carotide externe"
      },
      {
        "key": "C",
        "text": "L’artère vertébro-basilaire"
      },
      {
        "key": "D",
        "text": "L’artère fémorale"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. L’artère coronaire"
  },
  {
    "id": 12,
    "type": "QCS",
    "text": "Quel score est utilisé pour mesurer la gravité d’un déficit neurologique lors de la phase initiale d’un AVC ?",
    "options": [
      {
        "key": "A",
        "text": "ABCD2"
      },
      {
        "key": "B",
        "text": "NIHSS"
      },
      {
        "key": "C",
        "text": "Rankin"
      },
      {
        "key": "D",
        "text": "EDSS"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. NIHSS"
  },
  {
    "id": 13,
    "type": "QCS",
    "text": "Pour éviter une récidive de la crise d’asthme après quelques heures, quels médicaments sont utiles :",
    "options": [
      {
        "key": "A",
        "text": "Broncho-dilatateurs de longue durée d’action"
      },
      {
        "key": "B",
        "text": "Corticoïdes"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Corticoïdes"
  },
  {
    "id": 14,
    "type": "QCS",
    "text": "Comment faire le diagnostic d’une insuffisance respiratoire chronique grave ?",
    "options": [
      {
        "key": "A",
        "text": "Par l’interrogatoire et l’examen clinique"
      },
      {
        "key": "B",
        "text": "Par un gaz du sang"
      },
      {
        "key": "C",
        "text": "Par au moins 2 gaz du sang à l’état stable"
      },
      {
        "key": "D",
        "text": "Par au moins 2 gaz du sang dont un doit être prélevé lors d’une exacerbation de la BPCO"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Par au moins 2 gaz du sang à l’état stable"
  },
  {
    "id": 15,
    "type": "QCS",
    "text": "Quelle complication peut survenir en cas d'obstruction des voies biliaires ?",
    "options": [
      {
        "key": "A",
        "text": "Angiocholite"
      },
      {
        "key": "B",
        "text": "Tumeur de la vésicule biliaire"
      },
      {
        "key": "C",
        "text": "Constipation"
      },
      {
        "key": "D",
        "text": "Eruption cutanée"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Angiocholite"
  },
  {
    "id": 16,
    "type": "QCS",
    "text": "Quelle est la cause la plus fréquemment retrouvée lors d’un épisode de pancréatite aiguë en Europe ?",
    "options": [
      {
        "key": "A",
        "text": "Une lithiase biliaire"
      },
      {
        "key": "B",
        "text": "Une consommation chronique d’alcool"
      },
      {
        "key": "C",
        "text": "Une hypertriglycéridémie"
      },
      {
        "key": "D",
        "text": "Un effet secondaire médicamenteux"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une lithiase biliaire"
  },
  {
    "id": 17,
    "type": "QCS",
    "text": "Chez un patient atteint de pancréatite aiguë, l’apparition d’une fièvre élevée plusieurs jours après le début des symptômes doit faire suspecter en priorité :",
    "options": [
      {
        "key": "A",
        "text": "Une infection de la nécrose pancréatique"
      },
      {
        "key": "B",
        "text": "Une pyélonéphrite aiguë"
      },
      {
        "key": "C",
        "text": "Une angiocholite"
      },
      {
        "key": "D",
        "text": "Une embolie pulmonaire"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une infection de la nécrose pancréatique"
  },
  {
    "id": 18,
    "type": "QCS",
    "text": "Lors de l’évaluation d’une détresse respiratoire aiguë, quels sont les 4 éléments à évaluer en priorité ?",
    "options": [
      {
        "key": "A",
        "text": "Douleur, température, poids, alimentation"
      },
      {
        "key": "B",
        "text": "Conscience, voies aériennes, état respiratoire, état hémodynamique"
      },
      {
        "key": "C",
        "text": "Pouls, température, glycémie, douleur"
      },
      {
        "key": "D",
        "text": "Sommeil, alimentation, poids, température"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Conscience, voies aériennes, état respiratoire, état hémodynamique"
  },
  {
    "id": 19,
    "type": "QCS",
    "text": "Quel signe peut indiquer un épuisement respiratoire chez l’enfant ?",
    "options": [
      {
        "key": "A",
        "text": "Une augmentation des signes de lutte"
      },
      {
        "key": "B",
        "text": "Une bradypnée ou une apnée"
      },
      {
        "key": "C",
        "text": "Une respiration plus rapide uniquement"
      },
      {
        "key": "D",
        "text": "Une toux sèche"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Une bradypnée ou une apnée"
  },
  {
    "id": 20,
    "type": "QCS",
    "text": "Quel virus est principalement responsable de la bronchiolite ?",
    "options": [
      {
        "key": "A",
        "text": "Virus de la grippe"
      },
      {
        "key": "B",
        "text": "Coronavirus"
      },
      {
        "key": "C",
        "text": "VRS"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. VRS"
  },
  {
    "id": 21,
    "type": "QCM",
    "text": "Quels examens permettent de confirmer le diagnostic de la BPCO ?",
    "options": [
      {
        "key": "A",
        "text": "Spirométrie ( VEMS/CV )"
      },
      {
        "key": "B",
        "text": "Radiographie thoracique"
      },
      {
        "key": "C",
        "text": "Scanner thoracique"
      },
      {
        "key": "D",
        "text": "Echographie cardiaque"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Spirométrie ( VEMS/CV ) / B. Radiographie thoracique / C. Scanner thoracique"
  },
  {
    "id": 22,
    "type": "QCM",
    "text": "Quels sont les principales caractéristiques de l’emphysème ?",
    "options": [
      {
        "key": "A",
        "text": "Toux productive chronique"
      },
      {
        "key": "B",
        "text": "Destruction des parois alvéolaires"
      },
      {
        "key": "C",
        "text": "Augmentation de la capacité pulmonaire totale"
      }
    ],
    "correct": [
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : B. Destruction des parois alvéolaires / C. Augmentation de la capacité pulmonaire totale"
  },
  {
    "id": 23,
    "type": "QCM",
    "text": "Quelles sont les mesures préventives essentielles pour les patients atteints de BPCO ?",
    "options": [
      {
        "key": "A",
        "text": "Arrêt du Tabac"
      },
      {
        "key": "B",
        "text": "Activité physique réduite"
      },
      {
        "key": "C",
        "text": "Contrôle des comorbidités cardiovasculaire"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Arrêt du Tabac / C. Contrôle des comorbidités cardiovasculaire"
  },
  {
    "id": 24,
    "type": "QCM",
    "text": "Quels sont les signes de gravité lors d’une exacerbation de BPCO?",
    "options": [
      {
        "key": "A",
        "text": "Cyanose"
      },
      {
        "key": "B",
        "text": "Fréquence respiratoire sup à 30/min"
      },
      {
        "key": "C",
        "text": "Hypotension artérielle"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Cyanose / B. Fréquence respiratoire sup à 30/min / C. Hypotension artérielle"
  },
  {
    "id": 25,
    "type": "QCM",
    "text": "Quels sont les principales caractéristiques de l’emphysème",
    "options": [
      {
        "key": "A",
        "text": "Toux productive chronique"
      },
      {
        "key": "B",
        "text": "Destruction des parois alvéolaires"
      },
      {
        "key": "C",
        "text": "Augmentation de la capacité pulmonaire totale"
      }
    ],
    "correct": [
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : B. Destruction des parois alvéolaires / C. Augmentation de la capacité pulmonaire totale"
  },
  {
    "id": 26,
    "type": "QCM",
    "text": "Quels signes peuvent évoquer un AVC?",
    "options": [
      {
        "key": "A",
        "text": "Hémiplégie d'un côté du corps"
      },
      {
        "key": "B",
        "text": "Fourmillements d'un hémicorps"
      },
      {
        "key": "C",
        "text": "Troubles de la parole"
      },
      {
        "key": "D",
        "text": "Douleur abdominale isolée"
      },
      {
        "key": "E",
        "text": "Troubles de la vision"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "E"
    ],
    "feedback": "Selon le corrigé fourni : A. Hémiplégie d'un côté du corps / B. Fourmillements d'un hémicorps / C. Troubles de la parole / E. Troubles de la vision"
  },
  {
    "id": 27,
    "type": "QCM",
    "text": "L’obstruction des voies biliaires peut se manifester par (choix multiple)",
    "options": [
      {
        "key": "A",
        "text": "ictère"
      },
      {
        "key": "B",
        "text": "selles décolorées, urines foncées"
      },
      {
        "key": "C",
        "text": "céphalées"
      },
      {
        "key": "D",
        "text": "prurit"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. ictère / B. selles décolorées, urines foncées / C. céphalées"
  },
  {
    "id": 28,
    "type": "QCM",
    "text": "Parmi les propositions suivantes, quelles sont les fonctions du foie ?",
    "options": [
      {
        "key": "A",
        "text": "Production de la bile"
      },
      {
        "key": "B",
        "text": "Stockage du glycogène"
      },
      {
        "key": "C",
        "text": "Synthèse de facteurs de coagulation"
      },
      {
        "key": "D",
        "text": "Filtration du sang portal"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Production de la bile / B. Stockage du glycogène / C. Synthèse de facteurs de coagulation / D. Filtration du sang portal"
  },
  {
    "id": 29,
    "type": "QCM",
    "text": "Concernant l’évaluation initiale d’un nourrisson présentant une bronchiolite, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Elle est réalisée avant la désobstruction nasale."
      },
      {
        "key": "B",
        "text": "Elle est réalisée après la désobstruction nasale."
      },
      {
        "key": "C",
        "text": "La fréquence respiratoire est mesurée pendant 30 secondes."
      },
      {
        "key": "D",
        "text": "La fréquence respiratoire est mesurée pendant 60 secondes."
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : B. Elle est réalisée après la désobstruction nasale. / D. La fréquence respiratoire est mesurée pendant 60 secondes."
  },
  {
    "id": 30,
    "type": "QCM",
    "text": "Quels éléments retrouvés aux urgences peuvent justifier l’hospitalisation d’un patient présentant une crise d’asthme ?",
    "options": [
      {
        "key": "A",
        "text": "Une fréquence respiratoire de 32 mouvements par minute"
      },
      {
        "key": "B",
        "text": "Une fréquence cardiaque de 140 battements par minute"
      },
      {
        "key": "C",
        "text": "Un peak flow inférieur à 50 % de la valeur théorique"
      },
      {
        "key": "D",
        "text": "Un antécédent d’hospitalisation en réanimation pour asthme"
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Une fréquence respiratoire de 32 mouvements par minute / B. Une fréquence cardiaque de 140 battements par minute / C. Un peak flow inférieur à 50 % de la valeur théorique / D. Un antécédent d’hospitalisation en réanimation pour asthme"
  },
  {
    "id": 31,
    "type": "QCM",
    "text": "Lesquelles sont correctes ? :",
    "options": [
      {
        "key": "A",
        "text": "L'asthme est une maladie des voies aériennes"
      },
      {
        "key": "B",
        "text": "L’asthme est une maladie inflammatoire"
      },
      {
        "key": "C",
        "text": "L’asthme évolue par crises"
      },
      {
        "key": "D",
        "text": "Les crises surviennent surtout l’après-midi"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. L'asthme est une maladie des voies aériennes / B. L’asthme est une maladie inflammatoire / C. L’asthme évolue par crises"
  },
  {
    "id": 32,
    "type": "QCM",
    "text": "Pendant la crise :",
    "options": [
      {
        "key": "A",
        "text": "Il y a un frein inspiratoire"
      },
      {
        "key": "B",
        "text": "L’intensité de l’obstruction peut être approximativement mesurée par le Débit Expiratoire de Pointe"
      },
      {
        "key": "C",
        "text": "Les bruits entendus à l’auscultation s’appellent les crépitants"
      },
      {
        "key": "D",
        "text": "Les broncho-dilatateurs peuvent permettent d’améliorer les symptômes et le DEP"
      }
    ],
    "correct": [
      "B",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : B. L’intensité de l’obstruction peut être approximativement mesurée par le Débit Expiratoire de Pointe / D. Les broncho-dilatateurs peuvent permettent d’améliorer les symptômes et le DEP"
  },
  {
    "id": 33,
    "type": "QCM",
    "text": "Quels examens complémentaires sont recommandés chez un patient asthmatique ?",
    "options": [
      {
        "key": "A",
        "text": "EFR"
      },
      {
        "key": "B",
        "text": "Radiographie thoracique:"
      },
      {
        "key": "C",
        "text": "Tests cutanés aux pneumallergènes: allergie associée"
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. EFR / B. Radiographie thoracique: / C. Tests cutanés aux pneumallergènes: allergie associée"
  },
  {
    "id": 34,
    "type": "QCM",
    "text": "Concernant les fonctions de la bile, quelles affirmations sont exactes ? (2 réponses attendues)",
    "options": [
      {
        "key": "A",
        "text": "Elle facilite la digestion des graisses alimentaires"
      },
      {
        "key": "B",
        "text": "Elle favorise l'absorption des vitamines A, D, E et K"
      },
      {
        "key": "C",
        "text": "Elle produit les facteurs de coagulation"
      },
      {
        "key": "D",
        "text": "Elle sécrète l'insuline"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Elle facilite la digestion des graisses alimentaires / B. Elle favorise l'absorption des vitamines A, D, E et K"
  },
  {
    "id": 35,
    "type": "QCM",
    "text": "Concernant les fonctions du foie, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Le foie participe au métabolisme des glucides."
      },
      {
        "key": "B",
        "text": "Le foie participe au métabolisme des lipides."
      },
      {
        "key": "C",
        "text": "Le foie participe à la synthèse de protéines, notamment des facteurs de coagulation."
      },
      {
        "key": "D",
        "text": "Le foie stocke les urines avant leur élimination."
      },
      {
        "key": "E",
        "text": "Le foie produit l'insuline."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Le foie participe au métabolisme des glucides. / B. Le foie participe au métabolisme des lipides. / C. Le foie participe à la synthèse de protéines, notamment des facteurs de coagulation."
  },
  {
    "id": 36,
    "type": "QCM",
    "text": "Concernant la maladie lithiasique des voies biliaires, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "La colique hépatique est une manifestation possible de la maladie lithiasique."
      },
      {
        "key": "B",
        "text": "La cholécystite peut être une complication liée à un calcul biliaire."
      },
      {
        "key": "C",
        "text": "Une pancréatite peut compliquer un calcul de la voie biliaire principale."
      },
      {
        "key": "D",
        "text": "La maladie lithiasique est une infection virale du foie."
      },
      {
        "key": "E",
        "text": "Elle ne présente jamais de complications."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. La colique hépatique est une manifestation possible de la maladie lithiasique. / B. La cholécystite peut être une complication liée à un calcul biliaire. / C. Une pancréatite peut compliquer un calcul de la voie biliaire principale."
  },
  {
    "id": 37,
    "type": "QCM",
    "text": "Concernant les échanges gazeux pulmonaires, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L'oxygène diffuse de l'alvéole vers le capillaire sanguin"
      },
      {
        "key": "B",
        "text": "Le dioxyde de carbone diffuse du capillaire vers l'alvéole"
      },
      {
        "key": "C",
        "text": "L'oxygène diffuse du capillaire vers l'alvéole"
      },
      {
        "key": "D",
        "text": "Le dioxyde de carbone reste dans le sang"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. L'oxygène diffuse de l'alvéole vers le capillaire sanguin / B. Le dioxyde de carbone diffuse du capillaire vers l'alvéole"
  },
  {
    "id": 38,
    "type": "QCM",
    "text": "Concernant le tube digestif, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L'intestin grêle participe à l'absorption des nutriments"
      },
      {
        "key": "B",
        "text": "Le côlon participe à l'élimination des résidus sous forme de selles"
      },
      {
        "key": "C",
        "text": "L'estomac produit l'insuline"
      },
      {
        "key": "D",
        "text": "Le rectum participe à la production de bile"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. L'intestin grêle participe à l'absorption des nutriments / B. Le côlon participe à l'élimination des résidus sous forme de selles"
  },
  {
    "id": 39,
    "type": "QCM",
    "text": "Quelles affirmations sont exactes concernant le pancréas et le foie ?",
    "options": [
      {
        "key": "A",
        "text": "Le pancréas produit l'insuline"
      },
      {
        "key": "B",
        "text": "Le foie produit la bile qui participe à la digestion des lipides"
      },
      {
        "key": "C",
        "text": "La vésicule biliaire produit l'insuline"
      },
      {
        "key": "D",
        "text": "Le foie assure l'élimination des urines"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Le pancréas produit l'insuline / B. Le foie produit la bile qui participe à la digestion des lipides"
  },
  {
    "id": 40,
    "type": "QCM",
    "text": "Concernant l'accident vasculaire cérébral (AVC), quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "L'AVC est une atteinte neurologique liée à une interruption ou une diminution de la circulation sanguine dans une partie du cerveau."
      },
      {
        "key": "B",
        "text": "L'AVC ischémique représente environ 85 % des AVC."
      },
      {
        "key": "C",
        "text": "L'AVC constitue une urgence médicale."
      },
      {
        "key": "D",
        "text": "L'AVC hémorragique est dû à l'obstruction d'une artère cérébrale."
      },
      {
        "key": "E",
        "text": "Les AVC n'entraînent jamais de séquelles neurologiques."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. L'AVC est une atteinte neurologique liée à une interruption ou une diminution de la circulation sanguine dans une partie du cerveau. / B. L'AVC ischémique représente environ 85 % des AVC. / C. L'AVC constitue une urgence médicale."
  }
];
const json=(d,status=200,headers={})=>Response.json(d,{status,headers:{'Cache-Control':'no-store',...headers}});
async function sign(value,secret){let k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('')}
async function isAdmin(req,env){let c=req.headers.get('Cookie')?.match(/ue28exam1admin=([^;]+)/)?.[1];if(!c||!env.ADMIN_PASSWORD)return false;let [expiry,sig]=c.split('.');return Number(expiry)>Date.now()&&sig===await sign(expiry,env.ADMIN_PASSWORD)}
async function objects(env,prefix){let all=[],cursor;do{const l=await env.BUCKET.list({prefix,cursor});all.push(...await Promise.all(l.objects.map(o=>readObject(env,o.key))));cursor=l.truncated?l.cursor:undefined}while(cursor);return all.filter(Boolean)}
async function rows(env){const saved=await objects(env,'submissions/'),byId=new Map(saved.map(r=>[r.id,{...r,status:'completed',answered:QUESTIONS.filter(q=>(r.answers[q.id]||[]).length).length}]));for(const a of await objects(env,'attempts/')){if(!byId.has(a.id))byId.set(a.id,makeRow(a,false))}return [...byId.values()].sort((a,b)=>b.created_at.localeCompare(a.created_at))}
const equal=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
export default {async fetch(req,env){try{const path=new URL(req.url).pathname;const handled=await attemptRoutes(req,env,path);if(handled)return handled;if(assets[path])return new Response(assets[path][0],{headers:{'Content-Type':assets[path][1]}});
if(path==='/api/questions')return json(QUESTIONS.map(({id,type,text,options})=>({id,type,text,options})));
if(path==='/api/admin/login'&&req.method==='POST'){let d=await req.json();if(!env.ADMIN_PASSWORD||d.password!==env.ADMIN_PASSWORD)return json({error:'Mot de passe incorrect.'},401);let exp=String(Date.now()+8*3600000);return json({ok:true},200,{'Set-Cookie':`ue28exam1admin=${exp}.${await sign(exp,env.ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`})}
if(path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'ue28exam1admin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'});
if(path==='/api/admin/me')return json({admin:await isAdmin(req,env)});
if(path.startsWith('/api/admin/')){if(!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(path.endsWith('/questions'))return json(QUESTIONS);let data=await rows(env);if(path.endsWith('/results'))return json({results:data});if(path.endsWith('/export.csv')||path.endsWith('/export.xlsx'))return exportData(data,path.endsWith('.xlsx'));}
if(path==='/api/submit'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.attempt_token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted){const row=await readObject(env,'submissions/'+a.id+'.json');return json(withReview(row))}if(!a.deadline||Date.now()<=a.deadline+5000)a.answers=cleanAnswers(d.answers);return json(await finishAttempt(env,a));}
return json({error:'Page introuvable'},404)}catch(e){return json({error:'Erreur du serveur. Réessayez.'},500)}}};
const xml=s=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function zip(files){let chunks=[],central=[],offset=0;const enc=new TextEncoder();const header=(n)=>new DataView(new ArrayBuffer(n));function crc(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}for(let [name,content]of Object.entries(files)){let n=enc.encode(name),b=enc.encode(content),c=crc(b),h=header(30);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,c,true);h.setUint32(18,b.length,true);h.setUint32(22,b.length,true);h.setUint16(26,n.length,true);chunks.push(new Uint8Array(h.buffer),n,b);let z=header(46);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint32(16,c,true);z.setUint32(20,b.length,true);z.setUint32(24,b.length,true);z.setUint16(28,n.length,true);z.setUint32(42,offset,true);central.push(new Uint8Array(z.buffer),n);offset+=30+n.length+b.length}let size=central.reduce((s,b)=>s+b.length,0),e=header(22);e.setUint32(0,0x06054b50,true);e.setUint16(8,Object.keys(files).length,true);e.setUint16(10,Object.keys(files).length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);return new Blob([...chunks,...central,e.buffer])}
function exportData(data,xlsx){let matrix=[['ID','Date UTC','Nom','Prénom','Groupe','Score','Total','Note /20','Durée (s)','État','Questions renseignées',...QUESTIONS.map(q=>'Q'+q.id+' réponse'),...QUESTIONS.map(q=>'Q'+q.id+' résultat')],...data.map(r=>[r.id,r.created_at,r.nom,r.prenom,r.groupe,r.score,r.total,r.score20,r.duration_seconds,r.status==='in_progress'?'En cours — note provisoire':'Terminée',r.answered??QUESTIONS.length,...QUESTIONS.map(q=>(r.answers[q.id]||[]).join(', ')),...QUESTIONS.map(q=>Number(equal(r.answers[q.id]||[],q.correct)))])];if(!xlsx)return new Response('\ufeff'+matrix.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n'),{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename=resultats_quiz.csv'}});let sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+matrix.map(r=>'<row>'+r.map(x=>typeof x==='number'?`<c><v>${x}</v></c>`:`<c t="inlineStr"><is><t>${xml(x)}</t></is></c>`).join('')+'</row>').join('')+'</sheetData></worksheet>';let files={'[Content_Types].xml':'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Résultats" sheetId="1" r:id="rId1"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheet};return new Response(zip(files),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Content-Disposition':'attachment; filename=resultats_quiz.xlsx'}})}
const defaultSettings={timed:false,minutes:30,max_attempts:0,allow_resume:true};
async function readObject(env,key){let o=await env.BUCKET.get(key);return o?JSON.parse(await o.text()):null}
async function attemptRoutes(req,env,path){
if(path==='/api/settings'||path==='/api/admin/settings'){if(path.includes('/admin/')&&!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(req.method==='POST'){let s=await req.json();if(typeof s.timed!=='boolean'||typeof s.allow_resume!=='boolean'||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>240||!Number.isInteger(s.max_attempts)||s.max_attempts<0||s.max_attempts>100)return json({error:'Durée : 1 à 240 minutes. Tentatives : 0 à 100.'},400);await env.BUCKET.put('config/settings.json',JSON.stringify({timed:s.timed,minutes:s.minutes,max_attempts:s.max_attempts,allow_resume:s.allow_resume}));return json({ok:true})}return json(await readObject(env,'config/settings.json')||defaultSettings)}
if(path==='/api/start'&&req.method==='POST'){let d=await req.json(),nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80)return json({error:'Nom et prénom obligatoires.'},400);const identity=(nom+'|'+prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ');let settings=await readObject(env,'config/settings.json')||defaultSettings;let previous=d.token?await readObject(env,'attempts/'+d.token+'.json'):null;if(previous&&!previous.submitted&&previous.identity===identity&&previous.allow_resume){return json(previous)}let count=0,cursor;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);if(a.identity===identity)count++}cursor=l.truncated?l.cursor:undefined}while(cursor);let old=(await rows(env)).filter(r=>(r.nom+'|'+r.prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ')===identity);let attemptSubmissionIds=new Set();cursor=undefined;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);attemptSubmissionIds.add(a.id)}cursor=l.truncated?l.cursor:undefined}while(cursor);count+=old.filter(r=>!attemptSubmissionIds.has(r.id)).length;if(settings.max_attempts&&count>=settings.max_attempts)return json({error:'Nombre maximal de tentatives atteint. Contactez votre formateur.'},403);let now=Date.now(),a={token:crypto.randomUUID(),id:now*1000+crypto.getRandomValues(new Uint16Array(1))[0]%1000,identity,nom,prenom,started_at:now,deadline:settings.timed?now+settings.minutes*60000:null,allow_resume:settings.allow_resume,answers:{},submitted:false};await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json(a)}
if(path==='/api/progress'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted)return json({ok:true,completed:true,result:withReview(await readObject(env,'submissions/'+a.id+'.json'))});if(a.deadline&&Date.now()>a.deadline)return json({ok:true,completed:true,result:await finishAttempt(env,a)});a.answers=cleanAnswers(d.answers);a.confirmed=QUESTIONS.filter(q=>(d.confirmed||[]).includes(q.id)&&(a.answers[q.id]||[]).length>0).map(q=>q.id);a.current=Number.isInteger(d.current)?Math.max(0,Math.min(QUESTIONS.length-1,d.current)):0;a.updated_at=new Date().toISOString();if(a.confirmed.length===QUESTIONS.length)return json({ok:true,completed:true,result:await finishAttempt(env,a)});await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json({ok:true,completed:false,updated_at:a.updated_at})}

return null}

function cleanAnswers(input){if(!input||typeof input!=='object'||Array.isArray(input)||JSON.stringify(input).length>30000)throw Error('Réponses invalides');const answers={};for(const q of QUESTIONS){const a=input[q.id]||[];if(!Array.isArray(a)||a.some(v=>!q.options.some(o=>o.key===v))||new Set(a).size!==a.length||(q.type==='QCS'&&a.length>1))throw Error('Réponse invalide');answers[q.id]=a}return answers}
function makeRow(a,completed){const answers=a.answers||{},score=QUESTIONS.filter(q=>equal(answers[q.id]||[],q.correct)).length;return {id:a.id,nom:a.nom,prenom:a.prenom,groupe:'',created_at:completed?new Date().toISOString():new Date(a.started_at).toISOString(),updated_at:a.updated_at||new Date(a.started_at).toISOString(),score,total:QUESTIONS.length,score20:Math.round(score*2000/QUESTIONS.length)/100,duration_seconds:Math.max(0,Math.round((Math.min(Date.now(),a.deadline||Date.now())-a.started_at)/1000)),answers,status:completed?'completed':'in_progress',answered:QUESTIONS.filter(q=>(answers[q.id]||[]).length).length}}
function withReview(row){return {...row,review:QUESTIONS.map(q=>({...q,selected:row.answers[q.id]||[],success:equal(row.answers[q.id]||[],q.correct)}))}}
async function finishAttempt(env,a){const existing=await readObject(env,'submissions/'+a.id+'.json');if(existing)return withReview(existing);const row=makeRow(a,true);await env.BUCKET.put('submissions/'+a.id+'.json',JSON.stringify(row));a.submitted=true;await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return withReview(row)}
