                 algorithme La moyenne
variables
 N1 , N2 , N3 , M : réel 
 Montion : chaine de caractere 
 Debut 
      écrire("tapez la premiere note :")
      lire(N1)
      écrire("tapez la deuxieme note :")
      lire(N2)
      écrire("tapez la troisième note :")
      lire(N3)
      M = (N1 + N2 + N3)/3
      Tant que N1 > 20 ou N1 < 0 faire 
      écrire("tapez correctement la premiere note : ")
      lire(N1)
      fin tant que 
      tant que  N2 > 20 ou N2 < 0 faire
      écrire("tapez correctement la deuxieme note : ")
      lire(N2)
      fin tant que
      tant que  N3 > 20 ou N3 < 0 faire
      écrire("tapez correctement la troisième note : ")
      lire(N3)
      fin tant que
      si M >= 16 alors 
      montion <-- "très bien" 
      si M < 16 et M >= 14 alors  
      montion <-- "bien"
      si M < 14 et M >= 12 alors 
      montion <-- "assez bien" 
      si M < 12 et M >= 10 alors 
      montion <-- "passable"
      si M < 10 alors 
      montion <-- "insuffisant"
      fin si 
      fin si 
      fin si 
      fin si 
      fin si 
      écrire("La moyenne est :" , M , "c'est une montion :" , montion)
      fin 
       

