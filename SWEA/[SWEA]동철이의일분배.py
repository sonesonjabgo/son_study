def solve(n, result):
    global maxrst
    if result <= maxrst:
        return

    if n == N:
        maxrst = max(maxrst, result)
        return

    for i in range(N):
        if not used1[i]:
            used1[i] = 1
            solve(n+1, result * (data[n][i]/100))
            used1[i] = 0



T = int(input())
for tc in range(1, T+1):
    N = int(input())
    data = [list(map(int, input().split())) for _ in range(N)]
    maxrst = -1
    used1 = [0] * N
    solve(0, 1)
    print(f'#{tc} {maxrst*100:6f}')