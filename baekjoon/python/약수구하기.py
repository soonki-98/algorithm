a, b = map(int, input().split())
count = 0
result = 0

for i in range(1, a + 1):
    if a % i == 0:
        count += 1
    if count == b:
        result = i
        break

print(result)
