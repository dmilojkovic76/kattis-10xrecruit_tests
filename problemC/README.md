# Recover Idols - Problem C - Programming Aptitude Test
## 2019-08-02 09:18:04 UTC - 2019-08-04 09:18:04 UTC
### Problem ID: 6c99c62d112ab672
### Difficulty: hard
### Author: Moritz Kobitzsch

Legends often tell of great treasures. But you rarely get the chance to actually stumble upon those treasures. Most of them are lost in the sea, or hidden below mountains. But as you learned from one of your biggest idols, treasures do belong into a museum. And now you have the chance to make that happen.

On an expedition you found a large cave network. A native shaman has spoken about incredible values his ancestors have hidden in the caves. He even gave you an ancient map, depicting the cave network and the location of the treasures within. Sadly, the cave network is completely flooded. Since the trip out here takes forever, you decided to do a short dive and scout out the cave network. But on your arrival back at the entrance to the cave network you get the news…

a volcano just erupted nearby. It is next to guaranteed that the lava will cover the entries to the cave network and the treasures will be lost forever.

That puts you on the spot. You only have a short time left, and only one lousy tank of air. So it is all on you. You only have time for a single dive. But how could you possible decide which route to take? The cave network is huge, and you should definitely try and rescue as much of the treasures as possible. You think back to your times as a computer scientist at the university…

And then it hits you. You still have your laptop with you. You could write a program to help you figure out the best you can do in rescuing the treasures.

You may assume that neither locating or picking up a treasure within a cave nor the traversal of a cave consumes any air.

## Input
Each test set consists of multiple test cases. The file starts with a single number t (0<t≤2000) on a single line, denoting the number of testcases in the file. Each test case starts with two integers n and m on a single line, where n the number of caves and m the number of the connecting tunnels in the network (1≤n≤10000; 0≤m≤50000). This line is followed by m lines, giving a description of the tunnels of the cave as three integers a b and l with a, b denoting caves and l giving the amount of air necessary for diving through the tunnel (0≤a,b<n;0≤l≤500). After the tunnels follows an integer i on a single line, giving the number of idols in the cave system (0≤i≤8). This line is followed by a single line containing i integers p1,…,pi giving the caves withing the network conaining an idol (0≤p1,…,pi<n). The input is concluded by a single number, giving the liters of air a you have available (0≤a≤1000000). You will always start (and end) at the node with the label 0.

## Output
For each test case print a number X on a single line, where X is replaced by the maximal number of idols the diver can recover.


| Sample Input 1		| Sample Output 1	|
|-----------------------|:-----------------:|
| 3						| 1					|
| 5 3					| 2					|
| 0 1 10				| 3					|
| 0 2 20				|
| 0 3 30				|
| 4						|
| 1 2 3 4				|
| 30					|
| 5 3					|
| 0 1 10				|
| 0 2 20				|
| 0 3 30				|
| 4						|
| 1 2 3 4				|
| 60					|
| 5 3					|
| 0 1 10				|
| 0 2 20				|
| 0 3 30				|
| 4						|
| 1 2 3 4				|
| 10000					|
