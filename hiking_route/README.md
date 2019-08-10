# Hiking route - Problem B - Programming Aptitude Test
## 2019-08-02 09:18:04 UTC - 2019-08-04 09:18:04 UTC
### Problem ID:  262e121a08e4c6de
### Difficulty: medium
### Author: Micah Stairs

Liam is planning out his route for an upcoming nature hike. Unfortunately, the region that he plans on hiking through is notoriously muddy, so in order to prevent his floral shirt from getting covered with mud, he has decided to pick a route for which the maximum depth of mud encountered is minimized.

The terrain is modelled as a two-dimensional grid, with nonnegative integers giving the depth of the mud in each cell in micrometers (millionths of a meter). The hike must begin at one of the cells in the leftmost column of the grid and finish at one of the cells in the rightmost column of the grid. Liam is allowed to move either north, south, east, or west, but he cannot travel diagonally.

## Input
The first line of input contains two space-separated integers, __*r*__ and __*c*__ __(2≤r,c≤1000)__, indicating the number of rows and the number of columns in the grid, respectively. Each of the next r lines contains c space-separated integers, indicating the depth of mud in the cells of the corresponding grid row from left to right. Each depth is measured in micrometers and is given as an integer in the interval __[0,1000000]__.

## Output
The output should contain a single integer, the depth of the deepest mud that Liam is forced to hike through if his route minimizes this value.


| Sample Input 1		| Sample Output 1	|
|-----------------------|:-----------------:|
| 5 4					| 3					|
| 2 1 0 8`				|
| 3 7 3 5				|
| 3 1 2 4				|
| 9 0 4 6				|
| 5 3 2 3				|

</br>

| Sample Input 2				| Sample Output 2	|
| ------------------------------|:-----------------:|
| 2 2							| 2					|
| 3 0							|
| 1 2							|

</br>

| Sample Input 3				| Sample Output 3	|
| ------------------------------|:-----------------:|
| 6 4							| 53421				|
| 31415 92653 58979 32384		|
| 62643 38327 95028 84197		|
| 16939 93751 5820 97494		|
| 45923 7816 40628 62089		|
| 98628 3482 53421 17067		|
| 98214 80865 13282 30664		|
