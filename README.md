# tennisGame
JEU JAVASCRIPT

Écrire un programme retournant l'état d'un jeu de tennis. 
 
// RAPPEL DES RÈGLES DU TENNIS //
Un jeu de tennis se joue comme suit :
•	Première balle gagnante = 15 points
•	Seconde balle gagnante = 30 points
•	Troisième balle gagnante = 40 points
 
Après avoir atteint les 40 points, un joueur peut : 
•	Être en "DEUCE" si son adversaire a gagné le même nombre de balles (par souci de simplification, même si le score atteint 40-40 pour la première fois)
•	Avoir un avantage ("ADVANTAGE") si les deux joueurs ont marqué au moins trois fois ET que le joueur a marqué une fois de plus que son adversaire
•	Gagner le jeu ("WIN") s'il a marqué au moins quatre fois AVEC deux balles d'écart sur son adversaire
 
 
 
Implémentez une fonction computeGameState(nameP1, nameP2, wins) qui renvoie l'état actuel du jeu en fonction des points marqués.
 
Paramètres :
•	nameP1, le nom du premier joueur sous forme d'une chaîne de caractères
•	nameP2, le nom du second joueur sous forme d'une chaîne de caractères
•	wins, un tableau de chaînes de caractères listant, pour chaque balle, le nom du gagnant
 
Résultat attendu :
L'état actuel du jeu sous forme d'une chaîne de caractères :
•	P1 0 - P2 0 (les joueurs dans l'ordre des paramètres)
•	P1 15 - P2 30
•	15a (en cas d'égalité à 15)
•	30a (en cas d'égalité à 30)
•	P2 WINS
•	DEUCE
•	P1 ADVANTAGE
•	...
 
EXEMPLE :
Paramètres
Bob
Anna
Bob, Anna, Bob
Résultat
Bob 30 - Anna 15
 

