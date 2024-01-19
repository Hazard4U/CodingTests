# ParseToRoman

Créer une fonction appelée parseToRoman qui, pour un nombre donné retourne sa valeur en chiffres romains.

## Règles

Les nombres romains sont majoritairement représentés selon les principes suivants :

- Un nombre en chiffres romains se lit de gauche à droite.
- Un même symbole n'est pas employé quatre fois de suite (sauf M).
- Tout symbole qui suit un symbole de valeur supérieure ou égale s'ajoute à celui-ci (exemple : 6 s'écrit VI).
- Tout symbole qui précède un symbole de valeur supérieure se soustrait à ce dernier :
    - I doit être retranché à V ou à X quand I est devant V ou X (ex. : 4 s'écrit IV),
    - X doit être retranché à L ou à C quand X est devant L ou C (ex. : 40 s'écrit XL),
    - C doit être retranché à D ou à M quand C est devant D ou M (ex. : 900 s'écrit CM),
    - En revanche, ôter I de L ou de C n'est pas pratiqué (49 s'écrit XLIX et non IL ; 99 s'écrit XCIX et pas IC).
- Les symboles sont groupés par ordre décroissant, sauf pour les valeurs à retrancher selon la règle précédente (ex. : 1 030 s'écrit MXXX et non XXXM qui est une des façons de représenter 970note 1).
