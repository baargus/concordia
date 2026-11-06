#!/usr/bin/env python3
# SPDX-License-Identifier: AGPL-3.0-only
"""Remplace le bloc de données de index.html par le contenu d'un fichier JS.

Usage : python3 tools/injecter-donnees.py chemin/vers/donnees.js [index.html]

Le bloc est délimité par les marqueurs
  /* === DONNÉES DE DÉMONSTRATION === ... */   et   /* === FIN DES DONNÉES DE DÉMONSTRATION === */
Le fichier injecté doit définir les mêmes constantes que src/demo-data.js (TODAY, MEMBERS, PROJETS, …)
et conserver les deux marqueurs en première et dernière ligne utiles.
"""
import re, sys, pathlib

DEBUT = '/* === DONNÉES DE DÉMONSTRATION ==='
FIN = '/* === FIN DES DONNÉES DE DÉMONSTRATION === */'

def main():
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    donnees = pathlib.Path(sys.argv[1]).read_text(encoding='utf-8')
    cible = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else 'index.html')
    html = cible.read_text(encoding='utf-8')
    i = html.find(DEBUT); j = html.find(FIN)
    if i < 0 or j < 0:
        sys.exit('marqueurs introuvables dans ' + str(cible))
    j += len(FIN)
    k = donnees.find(DEBUT); l = donnees.find(FIN)
    if k < 0 or l < 0:
        sys.exit('marqueurs introuvables dans ' + sys.argv[1])
    bloc = donnees[k:l + len(FIN)]
    cible.write_text(html[:i] + bloc + html[j:], encoding='utf-8')
    print('bloc de données remplacé dans', cible, '—', len(bloc), 'caractères')

if __name__ == '__main__':
    main()
