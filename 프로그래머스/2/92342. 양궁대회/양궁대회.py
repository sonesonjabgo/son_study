max_num = -1
answer = []
    
def solution(n, info):

    def cal(appeach, lion):
        a_score, l_score = 0, 0
        for i in range(11):
            if appeach[i] == lion[i] == 0: continue
            elif appeach[i] > lion[i]:
                a_score += 10 - i
            else:
                l_score += 10 - i
        return a_score, l_score
    
    def dfs(lion, idx):
        global max_num, answer
        
        if idx == 11:
            a, l = 0, 0
            if sum(lion) == n:
                a, l = cal(info, lion)
            elif sum(lion) < n:
                lion[-1] += (n - sum(lion))
                a, l = cal(info, lion)
            else:
                return
            if a < l:
                if max_num < (l-a):
                    max_num = (l-a)
                    answer = [lion[:]]
                elif max_num == (l-a):
                    answer.append(lion[:])
            return
        
        lion.append(info[idx]+1)
        dfs(lion, idx+1)
        lion.pop()
        
        lion.append(0)
        dfs(lion, idx+1)
        lion.pop()
    
    dfs([], 0)
    if not answer: return [-1]

    answer.sort(key=lambda x: x[::-1], reverse=True)    
    return answer[0]