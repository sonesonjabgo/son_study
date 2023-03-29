N = int(input())
data = [list(input()) for _ in range(N)]

result = []

def solve(x, y, N):
    color = data[x][y]
    if N == 1:  # 크기가 1일 경우
        result.append(color)
        return

    for i in range(x, x+N):
        for j in range(y, y+N):
            if color != data[i][j]:
                result.append('(')
                solve(x, y, N//2)
                solve(x, y+N//2, N//2)
                solve(x+N//2, y, N//2)
                solve(x+N//2, y+N//2, N//2)
                result.append(')')
                return
    else:
        result.append(color)

solve(0, 0, N)
print(''.join(result))
