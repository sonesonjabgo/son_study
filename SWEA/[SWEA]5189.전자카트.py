def solve(n, cnt):
    # 시작은 항상 0에서 시작한다. 매개변수로 0 받기
    # 다음 번으로 이동할 곳은 1부터 N-1까지
    # visited 리스트 만들어서 다녀간 곳 체크
    # 그리고 data[전위치][현위치]의 값을 cnt에 더해줌
    # 함수 종료 조건 visited가 전부 1일 때
    # data[현위치][1] 까지 더해주고 더해온 값(cnt)이
    # ans보다 작으면 ans에 cnt를 저장
    global ans
    if all(visited):
        cnt += data[n][0]
        ans = min(ans, cnt)
        return

    for i in range(1, N):
        if i != n and visited[i] == 0:
            visited[i] = 1
            cnt += data[n][i]
            solve(i, cnt)
            visited[i] = 0
            cnt -= data[n][i]


T = int(input())
for tc in range(1, T+1):
    N = int(input())
    data = [list(map(int, input().split())) for _ in range(N)]
    ans = 1e9
    cnt = 0
    visited = [1] + [0] * (N-1)
    solve(0, cnt)
    print(f'#{tc} {ans}')