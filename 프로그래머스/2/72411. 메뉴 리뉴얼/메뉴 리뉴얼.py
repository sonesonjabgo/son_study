from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    
    for c in course:
        temp = []
        for order in orders:
            comb = combinations(sorted(order), c)
            temp += comb
            
        counter = Counter(temp)
        
        if len(counter) != 0 and max(counter.values()) != 1:
            answer += [''.join(a) for a in counter if counter[a] == max(counter.values())]
    return sorted(answer)