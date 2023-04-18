N = int(input())
data = [int(input()) for _ in range(N)]

dp = [0] * N

if len(data) <= 2:
    print(sum(data))
else:
    dp[0] = data[0]
    dp[1] = data[0] + data[1]
    dp[2] = max(data[1] + data[2], data[0] + data[2])
    for i in range(3, N):
        dp[i] = max(dp[i-3]+data[i-1]+data[i], dp[i-2]+data[i])

# print(dp)
    print(dp[-1])