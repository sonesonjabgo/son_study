def solve(s, energy, cnt):
    global min_cnt

    if cnt >= min_cnt:
        return

    if s == N:
        if cnt < min_cnt:
            min_cnt = cnt

    else:
        solve(s+1, route[s]-1, cnt+1)

        if energy:
            solve(s+1, energy-1, cnt)

T = int(input())
for tc in range(1, T+1):
    data = list(map(int, input().split()))
    N = data[0]
    route = [0] + data[1:]
    # 종착지는 충전지가 없어서 정보가 없다
    # N까지 도달해야 함
    min_cnt = 1000
    energy = route[0]
    solve(1, energy, 0)
    print(f'#{tc} {min_cnt-1}')