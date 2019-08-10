# Royal Heir - Problem A - Programming Aptitude Test
## 2019-08-02 09:18:04 UTC - 2019-08-04 09:18:04 UTC
### Problem ID: 1549ac615ab8c91b
### Difficulty: medium
### Author: Jimmy Mårdell

The king in Utopia has died without an heir. Now several nobles in the country claim the throne. The country law states that if the ruler has no heir, the person who is most related to the founder of the country should rule.

To determine who is most related we measure the amount of blood in the veins of a claimant that comes from the founder. A person gets half the blood from the father and the other half from the mother. A child to the founder would have __*1/2*__ royal blood, that child’s child with another parent who is not of royal lineage would have __*1/4*__ royal blood, and so on. The person with most blood from the founder is the one most related.

## Input
The first line contains two integers, __*N (2≤N≤50)*__ and __*M (2≤M≤50)*__. The second line contains the name of the founder of Utopia.

Then follows __*N*__ lines describing a family relation. Each such line contains three names, separated with a single space. The first name is a child and the remaining two names are the parents of the child.

Then follows __*M*__ lines containing the names of those who claims the throne.

All names in the input will be between __1 and 10__ characters long and only contain the lowercase English letters __’a’-’z’__. The founder will not appear among the claimants, nor be described as a child to someone else.

## Output
A single line containing the name of the claimant with most blood from the founder. The input will be constructed so that the answer is unique.

*The family relations may not be realistic when considering sex, age etc. However, every child will have two unique parents and no one will be a descendent from themselves. No one will be listed as a child twice.*


| Sample Input 1		| Sample Output 1	|
|-----------------------|:-----------------:|
| 4 5					| elena				|
| andrew`				|
| betsy andrew flora	|
| carol andrew betsy	|
| dora andrew carol		|
| elena andrew dora		|
| carol					|
| dora					|
| elena					|
| flora					|
| gloria				|

</br>

| Sample Input 2				| Sample Output 2	|
| ------------------------------|:-----------------:|
| 9 2							| matthew			|
| edwardi						|
| charlesi edwardi diana		|
| philip charlesi mistress		|
| wilhelm mary philip			|
| matthew wilhelm helen			|
| edwardii charlesi laura		|
| alice laura charlesi			|
| helen alice bernard			|
| henrii edwardii roxane		|
| charlesii elizabeth henrii	|
| charlesii						|
| matthew						|
