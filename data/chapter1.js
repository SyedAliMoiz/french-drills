const CHAPTER_1 = {
  id: 'ch1',
  title: 'Nouns, Articles, Descriptive Adjectives',
  sections: [

    // =========================================================
    // S1: Gender + Definite Articles (le / la)
    // =========================================================
    {
      id: 's1-gender',
      title: 'Gender + Definite Articles (le/la)',
      rules: [
        'Masculine nouns take the definite article "le".',
        'Feminine nouns take the definite article "la".',
        'Noun gender is grammatical — it must be memorized for each noun.'
      ],
      questions: [

        // --- MCQ 1 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ livre (book).',
          context: '___ livre est sur la table.',
          options: ['le', 'la', 'les'],
          correct: 0,
          rule: '"Livre" is masculine, so it takes "le". "Les" is the plural article — we only need singular here.',
          tags: ['gender', 'definite-articles', 'masculine']
        },

        // --- MCQ 2 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ maison (house).',
          context: '___ maison est grande.',
          options: ['le', 'la', 'un'],
          correct: 1,
          rule: '"Maison" is feminine, so it takes "la". "Le" is masculine, and "un" is an indefinite article (a/an), not definite (the).',
          tags: ['gender', 'definite-articles', 'feminine']
        },

        // --- MCQ 3 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ chat (cat).',
          context: '___ chat dort sur le canapé.',
          options: ['la', 'le', 'des'],
          correct: 1,
          rule: '"Chat" is masculine, so it takes "le". "La" is feminine, and "des" is the plural indefinite article.',
          tags: ['gender', 'definite-articles', 'masculine']
        },

        // --- MCQ 4 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ fleur (flower).',
          context: '___ fleur est rouge.',
          options: ['le', 'les', 'la'],
          correct: 2,
          rule: '"Fleur" is feminine, so it takes "la". Don\'t be tricked by the consonant ending — gender must be memorized, not guessed from spelling.',
          tags: ['gender', 'definite-articles', 'feminine']
        },

        // --- MCQ 5 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ stylo (pen).',
          context: 'Où est ___ stylo ?',
          options: ['la', 'une', 'le'],
          correct: 2,
          rule: '"Stylo" is masculine, so it takes "le". "La" is feminine, and "une" is an indefinite article.',
          tags: ['gender', 'definite-articles', 'masculine']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Fill in the correct definite article.',
          context: '___ chaise est petite.',
          correct: 'La',
          rule: '"Chaise" (chair) is feminine, so it takes "la".',
          tags: ['gender', 'definite-articles', 'feminine']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Fill in the correct definite article.',
          context: '___ garçon est content.',
          correct: 'Le',
          rule: '"Garçon" (boy) is masculine, so it takes "le".',
          tags: ['gender', 'definite-articles', 'masculine']
        },

        // --- BLANK 3 ---
        {
          type: 'blank',
          stem: 'Fill in the correct definite article.',
          context: '___ porte est fermée.',
          correct: 'La',
          rule: '"Porte" (door) is feminine, so it takes "la".',
          tags: ['gender', 'definite-articles', 'feminine']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "the father"',
          hints: 'père = father',
          correct: 'le père',
          alternates: ['Le père'],
          rule: '"Père" is masculine, so "the father" = "le père".',
          tags: ['gender', 'definite-articles', 'masculine', 'translation']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "the table"',
          hints: 'table = table',
          correct: 'la table',
          alternates: ['La table'],
          rule: '"Table" is feminine, so "the table" = "la table".',
          tags: ['gender', 'definite-articles', 'feminine', 'translation']
        },

        // --- OPEN 3 ---
        {
          type: 'open',
          stem: 'Translate into French: "the brother"',
          hints: 'frère = brother',
          correct: 'le frère',
          alternates: ['Le frère'],
          rule: '"Frère" is masculine, so "the brother" = "le frère".',
          tags: ['gender', 'definite-articles', 'masculine', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'Why does "fleur" (flower) take "la" instead of "le"?',
          options: [
            'Because "fleur" ends in a consonant "r", and consonant-ending nouns are always feminine.',
            'Because "fleur" is a feminine noun — noun gender is grammatical and must be memorized, and feminine nouns take "la".',
            'Because "fleur" refers to something in nature, and nature words are always feminine.'
          ],
          correct: 1,
          rule: 'Noun gender in French is grammatical, not based on meaning or spelling patterns. You must memorize each noun\'s gender. Feminine nouns take "la".',
          tags: ['gender', 'definite-articles', 'why', 'conceptual']
        },

        // --- WHY 2 ---
        {
          type: 'why',
          stem: 'A student writes "le table". What is wrong, and why?',
          options: [
            '"Table" is feminine, so it needs "la" — the article must match the noun\'s gender, which is masculine (le) or feminine (la).',
            '"Table" starts with a consonant, so it should use "l\'" instead of "le".',
            '"Table" ends in -e, which means it can take either "le" or "la" depending on the sentence.'
          ],
          correct: 0,
          rule: 'The definite article must agree with the noun\'s gender. "Table" is feminine, so it requires "la table". The ending -e does not determine gender by itself.',
          tags: ['gender', 'definite-articles', 'why', 'error-correction']
        }
      ]
    },

    // =========================================================
    // S2a: l' before vowels / mute h
    // =========================================================
    {
      id: 's2a-elision',
      title: "l' before Vowels and Mute h",
      rules: [
        'Before a vowel sound, "le" and "la" both shorten to "l\'".',
        'This is called elision — French avoids two vowel sounds colliding.',
        'Words starting with a mute h (h muet) are treated as if they start with a vowel.',
        'Example: l\'homme (the man), l\'école (the school).'
      ],
      questions: [

        // --- MCQ 1 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ école (school, f.).',
          context: '___ école est fermée aujourd\'hui.',
          options: ['la', 'l\'', 'le'],
          correct: 1,
          rule: '"École" starts with a vowel. Even though it\'s feminine (normally "la"), the vowel forces elision: "la" becomes "l\'".',
          tags: ['elision', 'vowel', 'definite-articles']
        },

        // --- MCQ 2 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ homme (man, m.).',
          context: '___ homme est grand.',
          options: ['le', 'la', 'l\''],
          correct: 2,
          rule: '"Homme" starts with a mute h (h muet), which acts like a vowel. "Le" becomes "l\'" to avoid two vowel sounds colliding.',
          tags: ['elision', 'mute-h', 'definite-articles']
        },

        // --- MCQ 3 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ hôpital (hospital, m.).',
          context: '___ hôpital est loin.',
          options: ['l\'', 'le', 'la'],
          correct: 0,
          rule: '"Hôpital" has a mute h, so it triggers elision: "le" becomes "l\'". The accent on the ô is a clue — it often signals a mute h.',
          tags: ['elision', 'mute-h', 'definite-articles']
        },

        // --- MCQ 4 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article for ___ université (university, f.).',
          context: '___ université est moderne.',
          options: ['la', 'le', 'l\''],
          correct: 2,
          rule: '"Université" starts with a vowel. "La" becomes "l\'" through elision. Gender doesn\'t matter for this rule — both "le" and "la" become "l\'" before vowel sounds.',
          tags: ['elision', 'vowel', 'definite-articles']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Fill in the correct article for "ami" (friend, m.).',
          context: '___ ami de Pierre est sympa.',
          correct: "L'",
          rule: '"Ami" starts with a vowel, so "le" becomes "l\'".',
          tags: ['elision', 'vowel', 'definite-articles']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Fill in the correct article for "église" (church, f.).',
          context: '___ église est belle.',
          correct: "L'",
          rule: '"Église" starts with a vowel (é), so "la" becomes "l\'".',
          tags: ['elision', 'vowel', 'definite-articles']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "the tree"',
          hints: 'arbre (m.) = tree. Arbre starts with a vowel.',
          correct: "l'arbre",
          alternates: ["L'arbre"],
          rule: '"Arbre" is masculine and starts with a vowel, so "le" becomes "l\'". The tree = l\'arbre.',
          tags: ['elision', 'vowel', 'translation']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "the child"',
          hints: 'enfant (m.) = child. Enfant starts with a vowel.',
          correct: "l'enfant",
          alternates: ["L'enfant"],
          rule: '"Enfant" starts with a vowel, so "le" becomes "l\'". The child = l\'enfant.',
          tags: ['elision', 'vowel', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'Why does "le" become "l\'" before "homme"?',
          options: [
            'Because "homme" starts with a vowel sound — the h is silent (mute), and French uses elision to avoid two vowel sounds colliding.',
            'Because "homme" is an exception to the le/la rule and uses a special third article.',
            'Because all masculine nouns starting with h use "l\'" instead of "le".'
          ],
          correct: 0,
          rule: 'Elision happens because French avoids two vowel sounds next to each other. "Homme" has a mute h (silent), so the word effectively starts with the vowel "o". Not all h-words are mute — words with an aspirated h (like "le haricot") keep "le" or "la".',
          tags: ['elision', 'mute-h', 'why', 'conceptual']
        }
      ]
    },

    // =========================================================
    // S2b: Indefinite Articles (un / une)
    // =========================================================
    {
      id: 's2b-indefinite',
      title: 'Indefinite Articles (un/une)',
      rules: [
        'Masculine nouns take the indefinite article "un" (a/an).',
        'Feminine nouns take the indefinite article "une" (a/an).',
        '"Un/une" follow the same gender rule as "le/la", but mean "a/an" instead of "the".'
      ],
      questions: [

        // --- MCQ 1 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article: ___ crayon (pencil, m.).',
          context: 'J\'ai ___ crayon.',
          options: ['une', 'un', 'le'],
          correct: 1,
          rule: '"Crayon" is masculine, so the indefinite article is "un" (a pencil). "Une" would be feminine, and "le" is definite (the), not indefinite (a).',
          tags: ['gender', 'indefinite-articles', 'masculine']
        },

        // --- MCQ 2 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article: ___ lampe (lamp, f.).',
          context: 'Il y a ___ lampe dans la chambre.',
          options: ['un', 'des', 'une'],
          correct: 2,
          rule: '"Lampe" is feminine, so the indefinite article is "une" (a lamp). "Un" is masculine, and "des" is plural (some).',
          tags: ['gender', 'indefinite-articles', 'feminine']
        },

        // --- MCQ 3 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article: ___ jardin (garden, m.).',
          context: 'Nous avons ___ jardin.',
          options: ['une', 'un', 'la'],
          correct: 1,
          rule: '"Jardin" is masculine, so it takes "un" (a garden). "Une" is feminine indefinite, "la" is feminine definite.',
          tags: ['gender', 'indefinite-articles', 'masculine']
        },

        // --- MCQ 4 ---
        {
          type: 'mcq',
          stem: 'Choose the correct article: ___ robe (dress, f.).',
          context: 'Elle porte ___ robe noire.',
          options: ['un', 'une', 'l\''],
          correct: 1,
          rule: '"Robe" is feminine, so it takes "une" (a dress). "Un" is masculine indefinite, and "l\'" is a definite article before vowels.',
          tags: ['gender', 'indefinite-articles', 'feminine']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Fill in the correct indefinite article for "chien" (dog, m.).',
          context: 'J\'ai ___ chien.',
          correct: 'un',
          rule: '"Chien" is masculine: a dog = un chien.',
          tags: ['gender', 'indefinite-articles', 'masculine']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Fill in the correct indefinite article for "fenêtre" (window, f.).',
          context: 'Il y a ___ fenêtre ouverte.',
          correct: 'une',
          rule: '"Fenêtre" is feminine: a window = une fenêtre.',
          tags: ['gender', 'indefinite-articles', 'feminine']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "a bag"',
          hints: 'sac (m.) = bag',
          correct: 'un sac',
          alternates: ['Un sac'],
          rule: '"Sac" is masculine, so a bag = un sac.',
          tags: ['gender', 'indefinite-articles', 'masculine', 'translation']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "a car"',
          hints: 'voiture (f.) = car',
          correct: 'une voiture',
          alternates: ['Une voiture'],
          rule: '"Voiture" is feminine, so a car = une voiture.',
          tags: ['gender', 'indefinite-articles', 'feminine', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'What determines whether you use "un" or "une" for a noun?',
          options: [
            'The meaning of the noun — "un" for people and animals, "une" for objects and places.',
            'The first letter of the noun — "un" before consonants, "une" before vowels.',
            'The grammatical gender of the noun — masculine nouns take "un", feminine nouns take "une".'
          ],
          correct: 2,
          rule: 'Just like le/la, the indefinite articles un/une are determined by the noun\'s grammatical gender. Masculine = un, feminine = une. This has nothing to do with meaning or first letter.',
          tags: ['gender', 'indefinite-articles', 'why', 'conceptual']
        }
      ]
    },

    // =========================================================
    // S3: Plural Nouns (6 rules + article changes)
    // =========================================================
    {
      id: 's3-plurals',
      title: 'Plural Nouns',
      rules: [
        'Rule 1: Most nouns add -s (livre → livres).',
        'Rule 2: Nouns ending in -eau add -x (château → châteaux).',
        'Rule 3: Nouns ending in -al change to -aux (journal → journaux).',
        'Rule 4: Nouns ending in -s, -x, or -z do not change (bras → bras, nez → nez).',
        'Rule 5: Nouns ending in -eu add -x (jeu → jeux).',
        'Rule 6: Some nouns are irregular (oeil → yeux).',
        'Articles change too: le/la → les (the, plural), un/une → des (some).'
      ],
      questions: [

        // --- MCQ 1 (Rule 2: -eau) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "château" (castle)?',
          options: ['châteaus', 'châteaux', 'châtaux'],
          correct: 1,
          rule: 'Nouns ending in -eau add -x for the plural: château → châteaux. Don\'t apply the regular -s rule or the -al → -aux pattern here.',
          tags: ['plurals', 'eau-rule']
        },

        // --- MCQ 2 (Rule 3: -al) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "animal"?',
          options: ['animals', 'animaux', 'animeaux'],
          correct: 1,
          rule: 'Nouns ending in -al change to -aux: animal → animaux. Don\'t just add -s (that\'s the English pattern) or confuse this with the -eau rule.',
          tags: ['plurals', 'al-rule']
        },

        // --- MCQ 3 (Rule 4: -s/-x/-z no change) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "bras" (arm)?',
          options: ['brass', 'bras', 'braux'],
          correct: 1,
          rule: 'Nouns already ending in -s, -x, or -z don\'t change in the plural: bras → bras. The article "les" is what signals plurality.',
          tags: ['plurals', 'no-change-rule']
        },

        // --- MCQ 4 (Rule 5: -eu) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "jeu" (game)?',
          options: ['jeus', 'jeux', 'jeaux'],
          correct: 1,
          rule: 'Nouns ending in -eu add -x: jeu → jeux. Don\'t add -s (rule 1) or confuse with the -eau → -eaux pattern.',
          tags: ['plurals', 'eu-rule']
        },

        // --- MCQ 5 (Rule 1: regular -s) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "chat" (cat)?',
          options: ['chats', 'chataux', 'chateaux'],
          correct: 0,
          rule: 'Most nouns simply add -s for the plural: chat → chats. The -aux and -eaux patterns only apply to nouns ending in -al and -eau.',
          tags: ['plurals', 'regular-s']
        },

        // --- MCQ 6 (Rule 6: irregular) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "oeil" (eye)?',
          options: ['oeils', 'oeux', 'yeux'],
          correct: 2,
          rule: '"Oeil" is irregular: its plural is "yeux" — a completely different word. This must be memorized.',
          tags: ['plurals', 'irregular']
        },

        // --- MCQ 7 (Rule 2: -eau, different word) ---
        {
          type: 'mcq',
          stem: 'What is the plural of "oiseau" (bird)?',
          options: ['oiseaux', 'oiseaus', 'oisals'],
          correct: 0,
          rule: 'Nouns ending in -eau add -x: oiseau → oiseaux. Don\'t apply the regular -s rule.',
          tags: ['plurals', 'eau-rule']
        },

        // --- MCQ 8 (Article change) ---
        {
          type: 'mcq',
          stem: 'Which article replaces "un" in the plural?',
          context: '"un livre" → "___ livres"',
          options: ['les', 'des', 'uns'],
          correct: 1,
          rule: 'The indefinite article "un/une" becomes "des" (some) in the plural. "Les" is the plural of the definite article "le/la". "Uns" does not exist as an article.',
          tags: ['plurals', 'articles', 'indefinite-articles']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Write the plural of "cheval" (horse).',
          context: 'un cheval → des ___',
          correct: 'chevaux',
          rule: 'Nouns ending in -al change to -aux: cheval → chevaux.',
          tags: ['plurals', 'al-rule']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Write the plural of "nez" (nose).',
          context: 'le nez → les ___',
          correct: 'nez',
          rule: 'Nouns already ending in -z don\'t change: nez → nez. The article "les" shows it\'s plural.',
          tags: ['plurals', 'no-change-rule']
        },

        // --- BLANK 3 ---
        {
          type: 'blank',
          stem: 'Write the plural of "gâteau" (cake).',
          context: 'un gâteau → des ___',
          correct: 'gâteaux',
          rule: 'Nouns ending in -eau add -x: gâteau → gâteaux.',
          tags: ['plurals', 'eau-rule']
        },

        // --- BLANK 4 ---
        {
          type: 'blank',
          stem: 'Write the plural of "feu" (fire).',
          context: 'le feu → les ___',
          correct: 'feux',
          rule: 'Nouns ending in -eu add -x: feu → feux.',
          tags: ['plurals', 'eu-rule']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "the birds"',
          hints: 'oiseau (m.) = bird. Plural of -eau nouns: add -x. Plural definite article: les.',
          correct: 'les oiseaux',
          alternates: ['Les oiseaux'],
          rule: 'Oiseau → oiseaux (-eau adds -x). The plural article is "les": the birds = les oiseaux.',
          tags: ['plurals', 'eau-rule', 'translation']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "the newspapers"',
          hints: 'journal (m.) = newspaper. Plural of -al nouns: -al → -aux. Plural definite article: les.',
          correct: 'les journaux',
          alternates: ['Les journaux'],
          rule: 'Journal → journaux (-al changes to -aux). The newspapers = les journaux.',
          tags: ['plurals', 'al-rule', 'translation']
        },

        // --- OPEN 3 ---
        {
          type: 'open',
          stem: 'Translate into French: "some games"',
          hints: 'jeu (m.) = game. Plural of -eu nouns: add -x. Plural indefinite article: des.',
          correct: 'des jeux',
          alternates: ['Des jeux'],
          rule: 'Jeu → jeux (-eu adds -x). The plural of "un" is "des": some games = des jeux.',
          tags: ['plurals', 'eu-rule', 'translation']
        },

        // --- OPEN 4 ---
        {
          type: 'open',
          stem: 'Translate into French: "the coats"',
          hints: 'manteau (m.) = coat. Plural of -eau nouns: add -x. Plural definite article: les.',
          correct: 'les manteaux',
          alternates: ['Les manteaux'],
          rule: 'Manteau → manteaux (-eau adds -x). The coats = les manteaux.',
          tags: ['plurals', 'eau-rule', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'Why does "journal" become "journaux" instead of "journals"?',
          options: [
            'Because "journal" is an irregular noun and its plural must be memorized individually.',
            'Because all French nouns ending in a consonant change their ending to -aux in the plural.',
            'Because nouns ending in -al have their own plural pattern: -al changes to -aux.'
          ],
          correct: 2,
          rule: 'The -al → -aux change is a systematic pattern, not an irregularity. It applies to most -al nouns: journal → journaux, animal → animaux, cheval → chevaux.',
          tags: ['plurals', 'al-rule', 'why']
        },

        // --- WHY 2 ---
        {
          type: 'why',
          stem: 'Why does "nez" (nose) stay the same in the plural?',
          options: [
            'Because "nez" is a body part, and body parts never change form in the plural.',
            'Because "nez" is irregular and has no plural form at all.',
            'Because nouns already ending in -s, -x, or -z don\'t add anything — they already "look" plural.'
          ],
          correct: 2,
          rule: 'French doesn\'t stack plural endings. Since -s, -x, and -z already mark the end of plural nouns, words that already have them don\'t change. The article "les" signals the plural instead.',
          tags: ['plurals', 'no-change-rule', 'why']
        },

        // --- WHY 3 ---
        {
          type: 'why',
          stem: 'Why do the articles change from "le/la" to "les" in the plural?',
          options: [
            '"Les" means "some" and replaces le/la when there is more than one.',
            'Because the definite article must agree in number with the noun — singular le/la becomes plural les.',
            'Because le and la can only appear with singular verbs, so les is needed for plural sentences.'
          ],
          correct: 1,
          rule: 'The article must match the noun in number. Singular: le (m.) / la (f.). Plural: les (for both genders). "Les" means "the" (plural), not "some" — that\'s "des".',
          tags: ['plurals', 'articles', 'why']
        }
      ]
    },

    // =========================================================
    // S4-R1: Adjective Position (after the noun)
    // =========================================================
    {
      id: 's4r1-adj-position',
      title: 'Adjective Position (After the Noun)',
      rules: [
        'In French, most adjectives go AFTER the noun (the opposite of English).',
        'English: "the blue car" → French: "la voiture bleue" (the car blue).',
        'A small group of common adjectives goes before the noun — that is covered later.'
      ],
      questions: [

        // --- MCQ 1 ---
        {
          type: 'mcq',
          stem: 'Which is the correct way to say "the intelligent student" (f.)?',
          options: [
            "l'étudiante intelligente",
            "l'intelligente étudiante",
            "l'étudiante intelligent"
          ],
          correct: 0,
          rule: 'The adjective goes AFTER the noun in French: l\'étudiante intelligente. Option B has English word order, and option C has wrong gender agreement.',
          tags: ['adjective-position', 'word-order']
        },

        // --- MCQ 2 ---
        {
          type: 'mcq',
          stem: 'Which is the correct way to say "an interesting book"?',
          options: [
            'un intéressant livre',
            'un livre intéressante',
            'un livre intéressant'
          ],
          correct: 2,
          rule: 'Adjective after the noun: un livre intéressant. Option A uses English word order, and option B has feminine agreement (-e) on a masculine noun.',
          tags: ['adjective-position', 'word-order']
        },

        // --- MCQ 3 ---
        {
          type: 'mcq',
          stem: 'Which is the correct way to say "a difficult exam"?',
          context: 'examen (m.) = exam, difficile = difficult',
          options: [
            'un difficile examen',
            'un examen difficile',
            'une examen difficile'
          ],
          correct: 1,
          rule: 'Adjective after the noun: un examen difficile. Option A uses English order. Option C uses the wrong article — "examen" is masculine.',
          tags: ['adjective-position', 'word-order']
        },

        // --- MCQ 4 ---
        {
          type: 'mcq',
          stem: 'Which is the correct way to say "a French woman"?',
          context: 'femme = woman, français(e) = French',
          options: [
            'une femme française',
            'une française femme',
            'un femme français'
          ],
          correct: 0,
          rule: 'Adjective after noun + feminine agreement: une femme française. Option B has English word order. Option C has wrong article and no feminine -e on the adjective.',
          tags: ['adjective-position', 'word-order', 'gender-agreement']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Put the words in correct French order: "a red flower" → une ___ ___',
          context: 'fleur = flower, rouge = red',
          correct: 'fleur rouge',
          rule: 'Adjective after the noun: une fleur rouge (a flower red).',
          tags: ['adjective-position', 'word-order']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Put the words in correct French order: "a fast car" → une ___ ___',
          context: 'voiture = car, rapide = fast',
          correct: 'voiture rapide',
          rule: 'Adjective after the noun: une voiture rapide (a car fast).',
          tags: ['adjective-position', 'word-order']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "an American man"',
          hints: 'homme (m.) = man, américain = American. Remember: adjective goes after the noun.',
          correct: 'un homme américain',
          alternates: ['Un homme américain'],
          rule: 'Adjective after the noun: un homme américain.',
          tags: ['adjective-position', 'translation']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "an important letter"',
          hints: 'lettre (f.) = letter, important(e) = important. Remember: adjective after noun + gender agreement.',
          correct: 'une lettre importante',
          alternates: ['Une lettre importante'],
          rule: 'Adjective after noun with feminine agreement: une lettre importante. "Lettre" is feminine, so "important" becomes "importante".',
          tags: ['adjective-position', 'gender-agreement', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'Why is "un livre intéressant" correct and not "un intéressant livre"?',
          options: [
            'Because in French, most adjectives are placed AFTER the noun — the opposite of English word order.',
            'Because "intéressant" is too long to go before the noun — short adjectives can go before.',
            'Because adjectives only go before the noun when they describe colors.'
          ],
          correct: 0,
          rule: 'This is a fundamental word-order difference between French and English. In French, most adjectives follow the noun. Length and type don\'t determine position — it\'s the default grammar rule.',
          tags: ['adjective-position', 'why', 'word-order']
        }
      ]
    },

    // =========================================================
    // S4-R2: Basic Feminine Adjective (+e)
    // =========================================================
    {
      id: 's4r2-fem-adj-basic',
      title: 'Basic Feminine Adjective Form (+e)',
      rules: [
        'To make a masculine adjective feminine, add -e: grand → grande.',
        'If the adjective already ends in -e, it stays the same: timide → timide.',
        'The adjective must agree in gender with the noun it describes.'
      ],
      questions: [

        // --- MCQ 1 ---
        {
          type: 'mcq',
          stem: 'What is the feminine form of "content" (happy)?',
          context: 'La fille est ___.',
          options: ['content', 'contente', 'contine'],
          correct: 1,
          rule: 'Add -e to the masculine form: content → contente. Don\'t leave it unchanged (that\'s for adjectives already ending in -e) and don\'t change the stem.',
          tags: ['feminine-adjective', 'basic-rule']
        },

        // --- MCQ 2 ---
        {
          type: 'mcq',
          stem: 'What is the feminine form of "fort" (strong)?',
          context: 'La femme est ___.',
          options: ['fortes', 'forte', 'fort'],
          correct: 1,
          rule: 'Add -e: fort → forte. "Fortes" would be feminine PLURAL. Leaving it as "fort" skips the required gender agreement.',
          tags: ['feminine-adjective', 'basic-rule']
        },

        // --- MCQ 3 ---
        {
          type: 'mcq',
          stem: 'What is the feminine form of "triste" (sad)?',
          context: 'La mère est ___.',
          options: ['triste', 'tristee', 'tristé'],
          correct: 0,
          rule: '"Triste" already ends in -e, so it stays the same for feminine. No double-e, no accent change.',
          tags: ['feminine-adjective', 'no-change', 'already-ends-e']
        },

        // --- MCQ 4 ---
        {
          type: 'mcq',
          stem: 'What is the feminine form of "français" (French)?',
          context: 'une femme ___',
          options: ['français', 'françoise', 'française'],
          correct: 2,
          rule: 'Add -e: français → française. "Françoise" is a woman\'s name, not the adjective form. Leaving it as "français" skips gender agreement.',
          tags: ['feminine-adjective', 'basic-rule']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Write the feminine form of "intelligent".',
          context: 'La fille est ___.',
          correct: 'intelligente',
          rule: 'Add -e: intelligent → intelligente.',
          tags: ['feminine-adjective', 'basic-rule']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Write the feminine form of "sincère" (sincere).',
          context: 'La soeur est ___.',
          correct: 'sincère',
          rule: '"Sincère" already ends in -e, so it does not change for the feminine.',
          tags: ['feminine-adjective', 'no-change', 'already-ends-e']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "a tall woman"',
          hints: 'femme = woman, grand = tall. Adjective goes after noun and must agree in gender.',
          correct: 'une femme grande',
          alternates: ['Une femme grande', 'une grande femme', 'Une grande femme'],
          rule: 'Add -e for feminine: grand → grande. A tall woman = une femme grande.',
          tags: ['feminine-adjective', 'basic-rule', 'translation']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "a shy girl"',
          hints: 'fille = girl, timide = shy. "Timide" already ends in -e.',
          correct: 'une fille timide',
          alternates: ['Une fille timide'],
          rule: '"Timide" already ends in -e, so it stays the same: une fille timide.',
          tags: ['feminine-adjective', 'no-change', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'Why does "grand" become "grande" when describing a feminine noun?',
          options: [
            'Because "grande" is a completely separate word that means "tall" for women.',
            'Because French adjectives must agree in gender with the noun they describe — adding -e marks the feminine form.',
            'Because adding -e makes the pronunciation softer, which is traditionally used for feminine nouns.'
          ],
          correct: 1,
          rule: 'Gender agreement is a core rule: the adjective must match the noun\'s gender. Adding -e is the standard way to form the feminine of most adjectives. It\'s not a separate word or about sound preference — it\'s grammatical agreement.',
          tags: ['feminine-adjective', 'why', 'conceptual']
        }
      ]
    },

    // =========================================================
    // S4-R3: Irregular Feminine Adjectives (4 patterns)
    // =========================================================
    {
      id: 's4r3-fem-adj-irregular',
      title: 'Irregular Feminine Adjective Patterns',
      rules: [
        'Pattern A: -eux → -euse (heureux → heureuse). The x drops, s replaces it, then -e is added.',
        'Pattern B: -if → -ive (actif → active). The f voices to v (like English knife → knives).',
        'Pattern C: -er → -ère (premier → première). The vowel sound opens from "ay" to "air".',
        'Pattern D: Double the final consonant + e (bon → bonne, italien → italienne). Doubling preserves the vowel sound.'
      ],
      questions: [

        // --- MCQ 1 (Pattern A: -eux) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "heureux" (happy)?',
          context: 'La femme est ___.',
          options: ['heureuxe', 'heureuse', 'heureusse'],
          correct: 1,
          rule: 'Pattern A: -eux → -euse. The x drops and is replaced by s + e: heureux → heureuse. You can\'t just add -e to the -x ending.',
          tags: ['feminine-adjective', 'irregular', 'eux-euse']
        },

        // --- MCQ 2 (Pattern A: -eux, different word) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "sérieux" (serious)?',
          context: 'une conversation ___',
          options: ['sérieuse', 'sérieuxe', 'sérieure'],
          correct: 0,
          rule: 'Pattern A: -eux → -euse. Sérieux → sérieuse. The same pattern as heureux → heureuse.',
          tags: ['feminine-adjective', 'irregular', 'eux-euse']
        },

        // --- MCQ 3 (Pattern B: -if) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "actif" (active)?',
          context: 'une personne ___',
          options: ['actife', 'active', 'actieuse'],
          correct: 1,
          rule: 'Pattern B: -if → -ive. The f voices to v (like knife → knives in English): actif → active. Don\'t just add -e to the f.',
          tags: ['feminine-adjective', 'irregular', 'if-ive']
        },

        // --- MCQ 4 (Pattern B: -if, different word) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "sportif" (sporty/athletic)?',
          context: 'La fille est ___.',
          options: ['sportive', 'sportife', 'sportiuse'],
          correct: 0,
          rule: 'Pattern B: -if → -ive. Sportif → sportive. The f-to-v voicing is consistent across all -if adjectives.',
          tags: ['feminine-adjective', 'irregular', 'if-ive']
        },

        // --- MCQ 5 (Pattern C: -er) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "premier" (first)?',
          context: 'la ___ fois (the first time)',
          options: ['premierè', 'premieuse', 'première'],
          correct: 2,
          rule: 'Pattern C: -er → -ère. Premier → première. The accent changes from no accent to grave accent (è), opening the vowel sound from "ay" to "air".',
          tags: ['feminine-adjective', 'irregular', 'er-ere']
        },

        // --- MCQ 6 (Pattern C: -er, different word) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "dernier" (last)?',
          context: 'la ___ page (the last page)',
          options: ['derniève', 'dernière', 'dernieuse'],
          correct: 1,
          rule: 'Pattern C: -er → -ère. Dernier → dernière. Same pattern as premier → première.',
          tags: ['feminine-adjective', 'irregular', 'er-ere']
        },

        // --- MCQ 7 (Pattern D: double consonant) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "bon" (good)?',
          context: 'une ___ idée (a good idea)',
          options: ['bone', 'bonne', 'bonse'],
          correct: 1,
          rule: 'Pattern D: Double the final consonant + e. Bon → bonne. The n doubles to preserve the nasal vowel sound. "Bone" would change the pronunciation.',
          tags: ['feminine-adjective', 'irregular', 'double-consonant']
        },

        // --- MCQ 8 (Pattern D: double consonant, different word) ---
        {
          type: 'mcq',
          stem: 'What is the feminine of "italien" (Italian)?',
          context: 'une femme ___',
          options: ['italiene', 'italienne', 'italieuse'],
          correct: 1,
          rule: 'Pattern D: Double the final consonant + e. Italien → italienne. The n doubles before the -e is added.',
          tags: ['feminine-adjective', 'irregular', 'double-consonant']
        },

        // --- BLANK 1 (Pattern A) ---
        {
          type: 'blank',
          stem: 'Write the feminine of "généreux" (generous).',
          context: 'Elle est très ___.',
          correct: 'généreuse',
          rule: 'Pattern A: -eux → -euse. Généreux → généreuse.',
          tags: ['feminine-adjective', 'irregular', 'eux-euse']
        },

        // --- BLANK 2 (Pattern B) ---
        {
          type: 'blank',
          stem: 'Write the feminine of "créatif" (creative).',
          context: 'La directrice est très ___.',
          correct: 'créative',
          rule: 'Pattern B: -if → -ive. Créatif → créative.',
          tags: ['feminine-adjective', 'irregular', 'if-ive']
        },

        // --- BLANK 3 (Pattern C) ---
        {
          type: 'blank',
          stem: 'Write the feminine of "étranger" (foreign).',
          context: 'une langue ___',
          correct: 'étrangère',
          rule: 'Pattern C: -er → -ère. Étranger → étrangère.',
          tags: ['feminine-adjective', 'irregular', 'er-ere']
        },

        // --- BLANK 4 (Pattern D) ---
        {
          type: 'blank',
          stem: 'Write the feminine of "naturel" (natural).',
          context: 'une réaction ___',
          correct: 'naturelle',
          rule: 'Pattern D: Double the final consonant + e. Naturel → naturelle. The l doubles before -e.',
          tags: ['feminine-adjective', 'irregular', 'double-consonant']
        },

        // --- OPEN 1 (Pattern A) ---
        {
          type: 'open',
          stem: 'Translate into French: "a curious woman"',
          hints: 'femme = woman, curieux = curious (m.). Pattern: -eux → -euse for feminine.',
          correct: 'une femme curieuse',
          alternates: ['Une femme curieuse'],
          rule: 'Curieux → curieuse (Pattern A). A curious woman = une femme curieuse.',
          tags: ['feminine-adjective', 'irregular', 'eux-euse', 'translation']
        },

        // --- OPEN 2 (Pattern B) ---
        {
          type: 'open',
          stem: 'Translate into French: "an attentive student" (f.)',
          hints: 'étudiante = student (f.), attentif = attentive (m.). Pattern: -if → -ive for feminine.',
          correct: 'une étudiante attentive',
          alternates: ['Une étudiante attentive'],
          rule: 'Attentif → attentive (Pattern B). An attentive student (f.) = une étudiante attentive.',
          tags: ['feminine-adjective', 'irregular', 'if-ive', 'translation']
        },

        // --- OPEN 3 (Pattern C) ---
        {
          type: 'open',
          stem: 'Translate into French: "an expensive dress"',
          hints: 'robe (f.) = dress, cher = expensive/dear (m.). Pattern: -er → -ère for feminine.',
          correct: 'une robe chère',
          alternates: ['Une robe chère'],
          rule: 'Cher → chère (Pattern C). An expensive dress = une robe chère.',
          tags: ['feminine-adjective', 'irregular', 'er-ere', 'translation']
        },

        // --- OPEN 4 (Pattern D) ---
        {
          type: 'open',
          stem: 'Translate into French: "a kind girl"',
          hints: 'fille = girl, gentil = kind/nice (m.). Pattern: double consonant + e for feminine.',
          correct: 'une fille gentille',
          alternates: ['Une fille gentille', 'une gentille fille', 'Une gentille fille'],
          rule: 'Gentil → gentille (Pattern D, l doubles). A kind girl = une fille gentille.',
          tags: ['feminine-adjective', 'irregular', 'double-consonant', 'translation']
        },

        // --- WHY 1 (Pattern A) ---
        {
          type: 'why',
          stem: 'Why does "heureux" become "heureuse" and not "heureuxe"?',
          options: [
            'Because you always remove the last letter of an adjective before adding -e for the feminine.',
            'Because -eux adjectives follow their own pattern: the x drops, s replaces it, and -e is added — giving -euse.',
            'Because -eux is already a feminine ending, so only minor spelling adjustment is needed.'
          ],
          correct: 1,
          rule: 'The -eux → -euse pattern is specific to adjectives ending in -eux. The x cannot just take an -e (that would be unpronounceable). Instead, x becomes s, then -e is added.',
          tags: ['feminine-adjective', 'irregular', 'eux-euse', 'why']
        },

        // --- WHY 2 (Pattern B) ---
        {
          type: 'why',
          stem: 'Why does "actif" become "active" and not "actife"?',
          options: [
            'Because -if adjectives follow Pattern B: the f "voices" to v, then -e is added — like English knife → knives.',
            'Because f and v are interchangeable in French, so either "actife" or "active" is technically correct.',
            'Because -if endings always drop the f completely before adding -e.'
          ],
          correct: 0,
          rule: 'The f-to-v change is called "voicing" — the sound moves from voiceless (f) to voiced (v). This mirrors the English pattern (knife/knives, wife/wives). The f doesn\'t drop entirely; it transforms.',
          tags: ['feminine-adjective', 'irregular', 'if-ive', 'why']
        },

        // --- WHY 3 (Pattern D) ---
        {
          type: 'why',
          stem: 'Why does "bon" become "bonne" (doubling the n) instead of "bone"?',
          options: [
            'Because "bon" is completely irregular and its feminine must be memorized — there is no pattern.',
            'Because all short adjectives (one syllable) double their final letter before adding -e.',
            'Because doubling the n preserves the vowel sound — without the double n, "bone" would change the pronunciation of the "o".'
          ],
          correct: 2,
          rule: 'The consonant doubling protects the preceding vowel sound. In "bon", the nasal vowel "on" would be lost if you just added -e (compare "bone" vs "bonne"). The double consonant keeps the original pronunciation intact.',
          tags: ['feminine-adjective', 'irregular', 'double-consonant', 'why']
        }
      ]
    },

    // =========================================================
    // S4-R4: Plural Adjectives
    // =========================================================
    {
      id: 's4r4-plural-adj',
      title: 'Plural Adjectives',
      rules: [
        'Add -s to the adjective for plural: grand → grands, grande → grandes.',
        'If the adjective already ends in -s or -x, no change: français → français, heureux → heureux.',
        'Mixed-gender group (m. + f.) → masculine plural form of the adjective.',
        'All-feminine group → feminine plural form of the adjective.'
      ],
      questions: [

        // --- MCQ 1 (regular -s) ---
        {
          type: 'mcq',
          stem: 'What is the correct plural? "Les garçons sont ___." (intelligent)',
          options: ['intelligent', 'intelligents', 'intelligentes'],
          correct: 1,
          rule: 'Add -s for plural: intelligent → intelligents. "Intelligentes" would be feminine plural, but "garçons" is masculine.',
          tags: ['plural-adjective', 'regular-s', 'masculine']
        },

        // --- MCQ 2 (feminine plural) ---
        {
          type: 'mcq',
          stem: 'What is the correct plural? "Les filles sont ___." (contente)',
          options: ['contents', 'contentes', 'contente'],
          correct: 1,
          rule: 'Feminine plural: add -s to the feminine form. Contente → contentes. "Contents" would be masculine plural — wrong gender.',
          tags: ['plural-adjective', 'regular-s', 'feminine']
        },

        // --- MCQ 3 (already ends in -x) ---
        {
          type: 'mcq',
          stem: 'What is the correct plural? "Les hommes sont ___." (heureux)',
          options: ['heureux', 'heureuxs', 'heureuses'],
          correct: 0,
          rule: '"Heureux" already ends in -x, so it doesn\'t change in the masculine plural. "Heureuses" would be feminine plural.',
          tags: ['plural-adjective', 'no-change', 'x-ending']
        },

        // --- MCQ 4 (already ends in -s) ---
        {
          type: 'mcq',
          stem: 'What is the correct plural? "Les hommes sont ___." (français)',
          options: ['françaiss', 'français', 'françaises'],
          correct: 1,
          rule: '"Français" already ends in -s, so it doesn\'t change for masculine plural. "Françaises" would be feminine plural.',
          tags: ['plural-adjective', 'no-change', 's-ending']
        },

        // --- MCQ 5 (mixed group → masculine) ---
        {
          type: 'mcq',
          stem: '"Un homme et une femme" are both happy. The adjective form is:',
          options: ['contents', 'contentes', 'contente'],
          correct: 0,
          rule: 'Mixed-gender groups use the MASCULINE plural form. Homme (m.) + femme (f.) = masculine plural "contents". Masculine wins in mixed groups.',
          tags: ['plural-adjective', 'mixed-group', 'gender-agreement']
        },

        // --- MCQ 6 (all-feminine group) ---
        {
          type: 'mcq',
          stem: '"La mère et la fille" are both tired (fatigué). The adjective form is:',
          options: ['fatigués', 'fatiguées', 'fatiguée'],
          correct: 1,
          rule: 'All-feminine group uses the feminine plural: fatiguée → fatiguées. "Fatigués" would be masculine plural. "Fatiguée" is feminine singular.',
          tags: ['plural-adjective', 'all-feminine', 'gender-agreement']
        },

        // --- BLANK 1 ---
        {
          type: 'blank',
          stem: 'Write the correct adjective form of "noir" (black) for: "Les chats sont ___."',
          context: 'Les chats sont ___.',
          correct: 'noirs',
          rule: 'Masculine plural: add -s. Noir → noirs.',
          tags: ['plural-adjective', 'regular-s', 'masculine']
        },

        // --- BLANK 2 ---
        {
          type: 'blank',
          stem: 'Write the correct adjective form of "vert" (green) for: "Les robes sont ___."',
          context: 'Les robes sont ___.',
          correct: 'vertes',
          rule: '"Robes" is feminine plural. Vert → verte (feminine) → vertes (feminine plural).',
          tags: ['plural-adjective', 'regular-s', 'feminine']
        },

        // --- BLANK 3 ---
        {
          type: 'blank',
          stem: 'Write the correct adjective form of "américain" for: "Le frère et la soeur sont ___."',
          context: 'Le frère et la soeur sont ___.',
          correct: 'américains',
          rule: 'Mixed group (m. + f.) → masculine plural: américain → américains. Masculine wins in mixed groups.',
          tags: ['plural-adjective', 'mixed-group', 'gender-agreement']
        },

        // --- OPEN 1 ---
        {
          type: 'open',
          stem: 'Translate into French: "The flowers are red."',
          hints: 'fleur (f.) = flower, rouge = red. Plural of "la" is "les". Adjective must agree in number.',
          correct: 'Les fleurs sont rouges.',
          alternates: ['les fleurs sont rouges', 'Les fleurs sont rouges'],
          rule: 'Fleur → fleurs (add -s). Rouge → rouges (add -s). Les fleurs sont rouges.',
          tags: ['plural-adjective', 'translation', 'regular-s']
        },

        // --- OPEN 2 ---
        {
          type: 'open',
          stem: 'Translate into French: "The men are serious."',
          hints: 'homme (m.) = man, sérieux = serious. Remember: -x ending adjectives in plural.',
          correct: "Les hommes sont sérieux.",
          alternates: ['les hommes sont sérieux', 'Les hommes sont sérieux'],
          rule: '"Sérieux" already ends in -x, so no change for masculine plural: Les hommes sont sérieux.',
          tags: ['plural-adjective', 'no-change', 'translation']
        },

        // --- OPEN 3 ---
        {
          type: 'open',
          stem: 'Translate into French: "The girls are active."',
          hints: 'fille (f.) = girl, actif = active (m.). Feminine form: actif → active. Then add plural -s.',
          correct: 'Les filles sont actives.',
          alternates: ['les filles sont actives', 'Les filles sont actives'],
          rule: 'Feminine form: actif → active. Feminine plural: active → actives. Les filles sont actives.',
          tags: ['plural-adjective', 'feminine', 'if-ive', 'translation']
        },

        // --- WHY 1 ---
        {
          type: 'why',
          stem: 'Why does "heureux" stay "heureux" in the masculine plural?',
          options: [
            'Because -eux adjectives only change in the feminine form, never in the plural.',
            'Because adjectives ending in -x (or -s) already have a plural-sounding ending, so nothing is added.',
            'Because "heureux" is an irregular adjective that has no plural form.'
          ],
          correct: 1,
          rule: 'Just like nouns ending in -s, -x, or -z, adjectives with these endings don\'t add -s for the plural — they already end in a letter that marks plurality. "Heureux" does have a feminine plural form though: heureuses.',
          tags: ['plural-adjective', 'no-change', 'why']
        },

        // --- WHY 2 ---
        {
          type: 'why',
          stem: '"Un garçon et une fille sont intelligents." Why is the adjective masculine plural?',
          options: [
            'Because the adjective always agrees with whichever noun comes first in the sentence.',
            'Because French defaults to masculine for mixed-gender groups — if any noun in the group is masculine, the adjective takes masculine plural.',
            'Because "intelligents" is the only valid plural form — "intelligentes" does not exist.'
          ],
          correct: 1,
          rule: 'When a group contains both masculine and feminine nouns, French defaults to the masculine plural form. This is called "le masculin l\'emporte" (masculine wins). "Intelligentes" does exist — but only for all-feminine groups.',
          tags: ['plural-adjective', 'mixed-group', 'why', 'gender-agreement']
        }
      ]
    }
  ]
};
