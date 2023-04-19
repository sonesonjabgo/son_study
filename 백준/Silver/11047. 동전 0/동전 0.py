def solve(N, K):
    rst = 0
    for i in range(N-1, -1, -1):
        while K >= 0:
            if data[i] <= K:
                K -= data[i]
                rst += 1
            else:
                break
    return rst


N, K = map(int, input().split())
data = [int(input()) for _ in range(N)]

# print(N)
# print(K)
# print(data)

print(solve(N, K))